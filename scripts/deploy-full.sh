#!/usr/bin/env bash
set -euo pipefail

if ! command -v npx >/dev/null 2>&1 && ! command -v wrangler >/dev/null 2>&1; then
  echo "npx veya wrangler bulunamadı. Birini kurup tekrar dene."
  exit 1
fi

if ! command -v rg >/dev/null 2>&1; then
  echo "rg bulunamadı. Lütfen önce rg'i kur."
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WRANGLER_VERSION="4.67.0"
if command -v wrangler >/dev/null 2>&1; then
  WRANGLER_CLI="wrangler"
elif command -v npx >/dev/null 2>&1; then
  WRANGLER_CLI="npx wrangler@${WRANGLER_VERSION}"
else
  echo "wrangler bulunamadı. birini kurup tekrar dene."
  exit 1
fi
if [ -z "${WRANGLER_LOG_PATH:-}" ]; then
  WRANGLER_LOG_DIR="${SCRIPT_DIR%/*}/.wrangler_home"
  mkdir -p "$WRANGLER_LOG_DIR"
  WRANGLER_LOG_PATH="$WRANGLER_LOG_DIR/wrangler.log"
fi
export WRANGLER_LOG_PATH

run_wrangler() {
  ${WRANGLER_CLI} "$@"
}

PROJECT_NAME="coursehub-academy"
DOMAIN="coursehub.academy"
PAGES_HOST="https://57ba8a1e.coursehub-academy.pages.dev"
WRANGLER_CONF_DIR="$HOME/Library/Preferences/.wrangler/config"
DEFAULT_WRANGLER_CONF="$WRANGLER_CONF_DIR/default.toml"

get_wrangler_token() {
  if [ -n "${CLOUDFLARE_API_TOKEN:-${CF_API_TOKEN:-}}" ]; then
    printf '%s' "${CLOUDFLARE_API_TOKEN:-${CF_API_TOKEN:-}}"
    return 0
  fi

  if [ -f "$DEFAULT_WRANGLER_CONF" ]; then
    sed -n 's/^oauth_token = "\(.*\)"/\1/p' "$DEFAULT_WRANGLER_CONF" | head -n 1
    return 0
  fi

  return 0
}

get_wrangler_account_id() {
  local token="$1"
  local accounts_json
  accounts_json="$(curl -sS -H "Authorization: Bearer ${token}" https://api.cloudflare.com/client/v4/accounts || true)"
  if printf '%s' "${accounts_json}" | rg -Fq '"success": true'; then
    printf '%s\n' "${accounts_json}" | rg -o '"id":"[0-9a-f]{32}"' | head -n 1 | sed -E 's/.*"id":"([0-9a-f]{32}).*/\1/'
  fi
}

sync_custom_domain() {
  local token account_id domain_list add_result
  local whoami_output="$1"

  token="$(get_wrangler_token)"
  account_id="$(printf '%s\n' "$whoami_output" | rg -o '[0-9a-f]{32}' | head -n 1 || true)"
  if [ -z "${account_id}" ] && [ -n "${token}" ]; then
    account_id="$(get_wrangler_account_id "${token}" || true)"
  fi

  if [ -z "${token}" ] || [ -z "${account_id}" ]; then
    echo "Token veya accountId bulunamadı; domain otomasyonu atlanıyor."
    echo "Manuel komut: ${WRANGLER_CLI} pages domain add ${PROJECT_NAME} ${DOMAIN}"
    return 0
  fi

  if ! command -v curl >/dev/null 2>&1; then
    echo "curl yok; domain kontrol/ekleme atlanıyor."
    return 0
  fi

  domain_list="$(curl -sS -H "Authorization: Bearer ${token}" "https://api.cloudflare.com/client/v4/accounts/${account_id}/pages/projects/${PROJECT_NAME}/domains" || true)"
  if ! printf '%s' "${domain_list}" | rg -Fq '"success": true'; then
    echo "Cloudflare Domain API cevabı alınamadı; domain işlemi atlanıyor."
    echo "Manuel komut: wrangler pages domain add ${PROJECT_NAME} ${DOMAIN}"
    return 0
  fi

  if printf '%s' "${domain_list}" | rg -Fq "\"${DOMAIN}\""; then
    echo "Domain zaten bağlı: ${DOMAIN}"
    return 0
  fi

  echo "Domain bulunamadı, API ile ekleniyor: ${DOMAIN}"
  add_result="$(curl -sS -X POST -H "Authorization: Bearer ${token}" -H "Content-Type: application/json" --data "{\"name\":\"${DOMAIN}\"}" "https://api.cloudflare.com/client/v4/accounts/${account_id}/pages/projects/${PROJECT_NAME}/domains" || true)"

  if printf '%s' "${add_result}" | rg -Fq '"success": true'; then
    echo "Domain eklendi: ${DOMAIN}"
  else
    echo "Domain eklenemedi, manuel kontrol önerilir."
  fi
}

run_pages_deploy() {
  local attempt=1
  local max_attempts=5
  local delay=5

  while true; do
    if run_wrangler pages deploy out --project-name "${PROJECT_NAME}" --branch production; then
      return 0
    fi
    if [ "${attempt}" -ge "${max_attempts}" ]; then
      echo "Deploy ${attempt}. denemede yine başarısız oldu. Duruluyor."
      return 1
    fi
    echo "Deploy ${attempt}. deneme başarısız oldu; ${delay} sn sonra yeniden denenecek."
    attempt=$((attempt + 1))
    sleep "${delay}"
    delay=$((delay * 2))
  done
}

echo "==> Kimlik doğrulama: wrangler whoami"
whoami_output="$(run_wrangler whoami 2>&1 || true)"
echo "${whoami_output}"
if ! printf '%s' "${whoami_output}" | grep -q "@"; then
  token="$(get_wrangler_token)"
  if [ -z "${token}" ]; then
    echo "wrangler oturum açılmamış. 'wrangler login' ile giriş yapman gerekiyor."
    exit 1
  fi
  echo "whoami geçici olarak cevap vermedi; oturum token'ı bulundu, deploy akışına devam ediliyor."
fi

echo "==> Build + Deploy (wrangler retry ile)"
CI=1 NEXT_DISABLE_TURBOPACK=1 npm run build
if [ -f "${SCRIPT_DIR}/../public/_redirects" ]; then
  cp "${SCRIPT_DIR}/../public/_redirects" out/_redirects
  echo "out/_redirects kopyalandı."
fi
run_pages_deploy

echo "==> Custom domain otomasyonu"
sync_custom_domain "${whoami_output}"

echo "==> DNS ve erişim doğrulama"
if command -v dig >/dev/null 2>&1; then
  echo "dig +short CNAME ${DOMAIN}:"
  dig +short CNAME "${DOMAIN}" || true
else
  echo "dig bulunamadı; atlanıyor"
fi

if command -v curl >/dev/null 2>&1; then
  for host in "https://${DOMAIN}" "${PAGES_HOST}"; do
    code="$(curl -L -s -o /dev/null -w '%{http_code}' "${host}" || true)"
    echo "${host} -> HTTP ${code}"
  done
else
  echo "curl bulunamadı; atlanıyor"
fi
