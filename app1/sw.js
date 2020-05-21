const version = "1.0.0";
const cacheName = `p5.js.app-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
          
    
      ])
          .then(() => self.skipWaiting());
    })
  );
});

this.addEventListener('fetch', function (event) {
 
});