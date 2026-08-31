// Creative Works 3D — Editor de Catálogo — Service Worker
//
// Este arquivo existe SÓ pra manter a opção de "Instalar como app" no Chrome.
// De propósito, ele NÃO guarda nada em cache — já tivemos vários problemas
// de versões antigas "presas" quando o service worker tentava cachear o
// editor, e como o editor precisa de internet de qualquer forma (pra
// publicar no GitHub), não faz sentido esse risco só pra funcionar offline.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});
// Sem 'fetch' listener de propósito — deixa tudo passar direto pra internet,
// sem interceptar nem cachear nada.
