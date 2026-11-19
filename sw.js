/*
 * Muhaddisler Atlası — çevrimdışı çalışma (service worker).
 * Kurulumda index.html okunur ve içindeki yerel dosyalar (stil, betik, veri) önbelleğe alınır;
 * böylece aynı dosya hem veri/ klasörlü hem düz klasörlü yayında çalışır.
 * Sonraki açılışlarda dosyalar önce önbellekten gelir, arka planda internetten tazelenir.
 * Siteyi güncelledikten sonra SURUM değerini artırın.
 */
const SURUM = 'muhaddisler-v2';
const SABIT = ['./', 'index.html', 'manifest.json', 'ikon.svg', 'ikon-192.png', 'ikon-512.png', 'ikon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const onbellek = await caches.open(SURUM);
    const yanit = await fetch('index.html', { cache: 'no-cache' });
    const html = await yanit.clone().text();
    const yerel = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]).filter((u) => !u.startsWith('//'));
    const liste = [...new Set([...SABIT, ...yerel])];
    await Promise.all(liste.map((u) => onbellek.add(new Request(u, { cache: 'no-cache' })).catch(() => {})));
    // Dış kaynaklar (ağ kütüphanesi, yazı tipleri): erişilebilirse önbelleğe alınır
    const dis = [...html.matchAll(/(?:src|href)="(https:\/\/(?:cdnjs\.cloudflare\.com|fonts\.googleapis\.com)[^"]+)"/g)].map((m) => m[1]);
    await Promise.all(dis.map((u) => fetch(u, { mode: 'no-cors' }).then((r) => onbellek.put(u, r)).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const ad of await caches.keys()) if (ad !== SURUM) await caches.delete(ad);
    await self.clients.claim();
  })());
});

const onbelleklenir = (url) =>
  url.origin === self.location.origin ||
  ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'].includes(url.hostname);

self.addEventListener('fetch', (e) => {
  const istek = e.request;
  if (istek.method !== 'GET') return;
  const url = new URL(istek.url);
  if (!onbelleklenir(url)) return;
  e.respondWith((async () => {
    const onbellek = await caches.open(SURUM);
    // Sayfa açılışları: sorgu dizesi (?r=…) farklı olsa da aynı index.html kullanılır
    const anahtar = istek.mode === 'navigate' ? 'index.html' : istek;
    const kayitli = await onbellek.match(anahtar, { ignoreSearch: istek.mode === 'navigate' });
    const tazele = fetch(istek).then((yanit) => {
      if (yanit && (yanit.ok || yanit.type === 'opaque')) onbellek.put(anahtar, yanit.clone());
      return yanit;
    }).catch(() => null);
    if (kayitli) { e.waitUntil(tazele); return kayitli; }
    const yanit = await tazele;
    return yanit || new Response('Çevrimdışısınız ve bu dosya henüz kaydedilmedi.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
