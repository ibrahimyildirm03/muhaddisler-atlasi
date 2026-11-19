/* Uygulama modu: çevrimdışı çalışma, "Uygulamayı yükle" düğmesi ve ana ekrandan açıldığında uygulama görünümü */
(function () {
  'use strict';
  const kok = document.documentElement;
  const ustMod = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  // 1) Çevrimdışı çalışma
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  // 2) Ana ekrandan açıldıysa uygulama görünümü
  const modAyarla = () => kok.classList.toggle('uygulama', ustMod());
  modAyarla();
  window.matchMedia('(display-mode: standalone)').addEventListener?.('change', modAyarla);

  // 3) Geri düğmesi (ana ekrandan açılan uygulamada tarayıcının geri düğmesi yoktur)
  const geri = document.querySelector('.geri');
  let derinlik = 0;
  const geriGuncelle = () => {
    const anaSayfa = location.hash === '' || location.hash === '#/' || location.hash === '#';
    if (geri) geri.hidden = anaSayfa;
  };
  window.addEventListener('hashchange', () => { derinlik++; geriGuncelle(); });
  geriGuncelle();
  geri?.addEventListener('click', () => {
    if (derinlik > 0) { derinlik -= 2; history.back(); }
    else location.hash = '#/';
  });

  // 4) "Uygulamayı yükle" düğmesi
  const dugme = document.querySelector('.yukle');
  const pencere = document.querySelector('.yukle-pencere');
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const mobil = window.matchMedia('(pointer: coarse)').matches;
  let istem = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    istem = e;
    if (!ustMod() && dugme) dugme.hidden = false;
  });
  window.addEventListener('appinstalled', () => { istem = null; if (dugme) dugme.hidden = true; });
  // Safari yükleme istemi göstermez; iPhone'da talimat penceresi açılır
  if (dugme && !ustMod() && (ios || mobil)) dugme.hidden = false;
  dugme?.addEventListener('click', async () => {
    if (istem) {
      istem.prompt();
      const sonuc = await istem.userChoice.catch(() => null);
      if (sonuc && sonuc.outcome === 'accepted') dugme.hidden = true;
      istem = null;
      return;
    }
    if (pencere) {
      pencere.querySelector('.ios-yol').hidden = !ios;
      pencere.querySelector('.diger-yol').hidden = ios;
      pencere.showModal();
    }
  });
  pencere?.querySelector('[data-kapat]')?.addEventListener('click', () => pencere.close());
  pencere?.addEventListener('click', (e) => { if (e.target === pencere) pencere.close(); });
})();
