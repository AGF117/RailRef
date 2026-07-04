
const CACHE_NAME='railref-v05';
const urls=['./','./index.html','./manifest.json'];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urls)));
});

self.addEventListener('fetch',event=>{
 event.respondWith(
   caches.match(event.request).then(response=>response || fetch(event.request))
 );
});
