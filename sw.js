// Legal Helpdesk India — User PWA Service Worker
// Network-first (नेहमी नवीन आवृत्ती), नेटवर्क नसल्यास cache. API कॉल्स कधीही cache होत नाहीत.
const CACHE_NAME = "lhi-user-v6";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./app.js", "./shared/ui.css", "./shared/config.js", "./shared/content.js", "./shared/icons.js", "./shared/pdf.js", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => Promise.all(APP_SHELL.map((u) => c.add(u).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.indexOf("lhi-user-") === 0 && k !== CACHE_NAME).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;      // API/बाहेरील साइट्स — थेट network
  if (url.pathname.indexOf("/admin/") !== -1) return;                       // Admin चे स्वतःचे SW आहे
  e.respondWith(
    fetch(req).then((r) => {
      if (r && r.status === 200) { const c = r.clone(); caches.open(CACHE_NAME).then((ch) => ch.put(req, c)); }
      return r;
    }).catch(() => caches.match(req).then((m) => m || caches.match("./index.html")))
  );
});
