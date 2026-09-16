const CACHE='ghea-tactico-0289-alineacion';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest',
'./assets/terreno-bosque.png','./assets/obstaculo-roca.png','./assets/obstaculo-arbol.png',
'./assets-miniaturas/guerrero-humano-abajo.png','./assets-miniaturas/guerrero-humano-arriba.png','./assets-miniaturas/guerrero-humano-izquierda.png','./assets-miniaturas/guerrero-humano-derecha.png',
'./assets-miniaturas/jabali-abajo.png','./assets-miniaturas/jabali-arriba.png','./assets-miniaturas/jabali-izquierda.png','./assets-miniaturas/jabali-derecha.png',
'./assets-miniaturas/bandido-daga-abajo.png','./assets-miniaturas/bandido-daga-arriba.png','./assets-miniaturas/bandido-daga-izquierda.png','./assets-miniaturas/bandido-daga-derecha.png',
'./assets-miniaturas/bandido-ballesta-abajo.png','./assets-miniaturas/bandido-ballesta-arriba.png','./assets-miniaturas/bandido-ballesta-izquierda.png','./assets-miniaturas/bandido-ballesta-derecha.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request))));
