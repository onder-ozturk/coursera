export async function onRequest(context) {
  const { request } = context;
  const incomingUrl = new URL(request.url);
  const targetUrl = new URL("https://coursehub-api.oo25101981.workers.dev/api/health");
  targetUrl.search = incomingUrl.search;
  return fetch(new Request(targetUrl, request));
}
