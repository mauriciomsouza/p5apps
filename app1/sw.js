const version = "0.6.18";
const cacheName = `maup5app-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
          
    
      ])
          .then(() => self.skipWaiting());
    })
  );
});