// Legal Help India — User PWA Service Worker
// Network-first (नेहमी नवीन आवृत्ती), नेटवर्क नसल्यास cache. API कॉल्स कधीही cache होत नाहीत.
const CACHE_NAME = "lhi-user-v17";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./app.js", "./shared/ui.css", "./user.css", "./shared/config.js", "./shared/content.js", "./shared/content2.js", "./shared/content3.js", "./shared/pdf.js", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/images/legal-hero.svg", "./assets/images/constitution.svg", "./assets/icons/accident.svg", "./assets/icons/ai-guide.svg", "./assets/icons/back.svg", "./assets/icons/chev.svg", "./assets/icons/constitution.svg", "./assets/icons/consultation.svg", "./assets/icons/cyber.svg", "./assets/icons/documents.svg", "./assets/icons/download.svg", "./assets/icons/eye.svg", "./assets/icons/family.svg", "./assets/icons/help.svg", "./assets/icons/home.svg", "./assets/icons/info.svg", "./assets/icons/install.svg", "./assets/icons/job.svg", "./assets/icons/mail.svg", "./assets/icons/money.svg", "./assets/icons/notifications.svg", "./assets/icons/phone.svg", "./assets/icons/police.svg", "./assets/icons/power.svg", "./assets/icons/property.svg", "./assets/icons/requests.svg", "./assets/icons/rights.svg", "./assets/icons/search.svg", "./assets/icons/send.svg", "./assets/icons/share.svg", "./assets/icons/whatsapp.svg", "./assets/icons/women.svg", "./about-swapnil-mokal.jpg", "./about-prashant-abhang.jpg"];

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
