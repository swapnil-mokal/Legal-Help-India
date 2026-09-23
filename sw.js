// Legal Helpdesk India — Service Worker
// उद्देश: ऍप शेल (HTML/CSS/JS/आयकॉन) ऑफलाईन उपलब्ध ठेवणे.
// AI प्रश्नोत्तर, कायदेशीर मदत फॉर्म, आणि पुनरावलोकने यांना नेहमी इंटरनेट लागेल
// (कारण ती थेट Google Apps Script सर्व्हरशी बोलतात) — त्यामुळे ती cache केली जात नाहीत.

const CACHE_NAME = "legal-helpdesk-india-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./config.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // API कॉल्स (Google Apps Script) कधीही cache करू नका — नेहमी live network वापरा
  if (req.method !== "GET" || req.url.includes("script.google.com") || req.url.includes("googleusercontent.com")) {
    event.respondWith(fetch(req).catch(() => new Response(
      JSON.stringify({ error: "Internet उपलब्ध नाही. कृपया इंटरनेट कनेक्शन तपासा." }),
      { headers: { "Content-Type": "application/json" }, status: 503 }
    )));
    return;
  }

  // बाकी सर्वांसाठी: आधी cache, नंतर network (आणि network मिळाल्यास cache अपडेट करा)
  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200 && req.method === "GET") {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
