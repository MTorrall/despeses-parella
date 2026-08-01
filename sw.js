// Aquest Service Worker només serveix per complir el requisit d'instal·lació.
// Com que estem en desenvolupament, li diem que vagi sempre a buscar les dades a internet
// i no guardi res a la memòria cau (així veuràs els teus canvis a l'instant).

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Sempre demanem la versió més nova a la xarxa
    event.respondWith(fetch(event.request));
});
