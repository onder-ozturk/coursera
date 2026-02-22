export async function onRequest(context) {
  const { request, params } = context;
  const incomingUrl = new URL(request.url);
  const pathParts = params?.path || [];
  const normalized = Array.isArray(pathParts) ? pathParts.join("/") : String(pathParts || "");
  const targetPath = normalized ? `/${normalized}` : "";

  const targetUrl = new URL(`https://coursehub-api.oo25101981.workers.dev/api${targetPath}`);
  targetUrl.search = incomingUrl.search;
  return fetch(new Request(targetUrl, request));
}
