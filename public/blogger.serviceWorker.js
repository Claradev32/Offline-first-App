const assets = [
  "/",
  "css/style.css",
  "js/app.js",
  "/images/blog1.jpg",
  "/images/blog2.jpg",
  "/images/blog3.jpg",
];

const BLOGGER_ASSETS = "blogger-assets";

self.addEventListener("install", (installEvt) => {
  installEvt.waitUntil(
    caches
      .open(BLOGGER_ASSETS)
      .then((cache) => {
        console.log(cache)
        cache.addAll(assets);
      })
      .then(self.skipWaiting())
      .catch((e) => {
        console.log(e);
      })
  );
});

self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key === BLOGGER_ASSETS) {
              console.log("Removed old cache from", key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", function (evt) {
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(BLOGGER_ASSETS).then((cache) => {
        return cache.match(evt.request);
      });
    })
  );
})
