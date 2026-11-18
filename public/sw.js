const CACHE_NAME = "weather-dashboard-v1";

self.addEventListener("install", () => {
  console.log("SW Installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );
});
