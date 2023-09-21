var cacheName = 'atvpwa+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './Contato.html',
        './Cadastro.html',
        './Recursos.html',

        './main.css',
  
        './manifest.json',

        './service-worker.js',
        
        './imageestudy.jpg',
        './banner.jpg',
        
        './icons/128.png',
        './icons/144.png',
        './icons/152.png',
        './icons/167.png',
        './icons/180.png',
        './icons/196.png',
        './icons/256.png',
        './icons/512.png',
        './icons/1024.png',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});