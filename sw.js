// Slipbox service worker: keeps the app itself available with no connection (for example on a plane).
// It serves the cached page instantly and refreshes the cache in the background,
// so a new version of index.html shows up the next time the app is opened.
// Only files from this site are cached. GitHub and Anthropic requests are never touched.
var CACHE = 'slipbox-v1';

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(['./', './index.html']); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(r, { ignoreSearch: true }).then(function (hit) {
        var net = fetch(r)
          .then(function (res) { if (res && res.ok) c.put(r, res.clone()); return res; })
          .catch(function () {
            return hit || (r.mode === 'navigate' ? c.match('./index.html') : Response.error());
          });
        if (hit) { e.waitUntil(net); return hit; }
        return net;
      });
    })
  );
});
