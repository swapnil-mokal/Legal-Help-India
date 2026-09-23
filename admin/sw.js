// Legal Helpdesk India — Admin PWA Service Worker (network-first; API/secrets कधीही cache होत नाहीत)
const CACHE = "lhi-admin-v3";
const ASSETS = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json", "./logo.svg", "../shared/config.js"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(ASSETS.map((u) => c.add(u).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.indexOf("lhi-admin-") === 0 && k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((r) => {
      if (r && r.status === 200) { const c = r.clone(); caches.open(CACHE).then((ch) => ch.put(req, c)); }
      return r;
    }).catch(() => caches.match(req).then((m) => m || caches.match("./index.html")))
  );
});
