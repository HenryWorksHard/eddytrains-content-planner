// Version - update this to force cache refresh
const VERSION = 'v1.0.1';
const CACHE_NAME = `content-planner-${VERSION}`;

// Install - skip waiting immediately
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Activate - clean ALL old caches and take control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    }).then(() => {
      // Notify all clients to reload
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ type: 'CACHE_UPDATED' }));
      });
    })
  );
});

// Fetch - ALWAYS network first for HTML/JS/JSON, no caching
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Always fetch from network (no cache for anything)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
