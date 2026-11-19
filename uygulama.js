/* Muhaddisler Atlası — tek sayfalık uygulama (derleme gerektirmez) */
(function () {
  'use strict';

  /* ═════════════ VERİ ═════════════ */
  const ASIRLAR = [4, 5, 6, 7, 8, 9, 10];
  const ASIR_BILGI = {
    4: { h: '301–400', m: '913–1010', aciklama: "Musannef ve müsned çağının ardından Sahîhayn üzerine müstahrecler, mu'cemler ve büyük ricâl eserleri yazıldı. Buhârî ve Müslim'in Sahîh'leri Firebrî ve İbn Süfyân'ın talebeleriyle her bölgeye yayıldı." },
    5: { h: '401–500', m: '1010–1107', aciklama: "Hâkim, Beyhakī ve Hatîb el-Bağdâdî ile hadis usûlü ve şehir tarihleri kitaplaştı. Endülüs'te İbn Abdülber ve Bâcî ile doğu ve batı arasında yoğun bir ilim akışı yaşandı." },
    6: { h: '501–600', m: '1107–1204', aciklama: "Meşyehalar, mu'cemler ve büyük şehir tarihlerinin asrı: Dımaşk'ta İbn Asâkir, Merv'de Sem'ânî, Sebte'de Kādî İyâz, İskenderiye'de Silefî." },
    7: { h: '601–700', m: '1204–1301', aciklama: "Dârülhadislerin kurulduğu, İbnü's-Salâh'ın Mukaddime'si ile hadis usûlünün klasik biçimine kavuştuğu asır. Moğol istilasıyla doğudaki merkezler zayıfladı, ağırlık Şam ve Mısır'a geçti." },
    8: { h: '701–800', m: '1301–1398', aciklama: "Memlük Şam'ında ricâl ilminin zirvesi: Mizzî, Birzâlî, Zehebî ve talebeleri. Mısır'da tahrîc ve zevâid çalışmaları başladı." },
    9: { h: '801–900', m: '1398–1495', aciklama: "Şerh, tahrîc ve zevâid çağı. Kahire'de Irâkī, Heysemî ve İbn Hacer, hadis ilimlerinin birikimini son büyük eserlerde topladı." },
    10: { h: '901–1000', m: '1495–1592', aciklama: "Sehâvî ve Süyûtî'nin derlemeleri; İbn Hacer'in isnadı Mekke üzerinden Yemen'e ve Hindistan'a taşındı." },
  };
  const asirOf = (v) => Math.ceil(v / 100);

  const bolgeler = window.BOLGELER;
  const bolge = new Map(bolgeler.map((b, i) => [b.id, { ...b, sira: i }]));
  const alimler = window.ALIMLER.slice().sort((a, b) => a.v - b.v);
  const alim = new Map(alimler.map((a) => [a.id, a]));
  const BIYO = window.BIYO || {};
  // Ham kaynak verisinden (veri/kaynaklar.js) okunur adlar ve bağlantılar
  const ROMA = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV'];
  const KITAPLAR = {
    10906: "Zehebî, Siyeru a‘lâmi'n-nübelâ",
    6674: "İbn Hacer, ed-Dürerü'l-kâmine",
    6675: "Sehâvî, ed-Dav'ü'l-lâmi‘",
  };
  // "DÂREKUTNÎ" → "Dârekutnî", "EBÛ ALİ en-NÎSÂBÛRÎ" → "Ebû Ali en-Nîsâbûrî": büyük harf dizilerinde yalnız ilk harf büyük kalır
  const baslikDuzelt = (t) =>
    t.split(' - TDV')[0].trim().replace(/(\p{Lu})([\p{Lu}‘’]+)/gu, (m, a, b) => a + b.toLocaleLowerCase('tr'));
  const KAYNAKLAR = {};
  for (const [id, liste] of Object.entries(window.KAYNAK_HAM || {})) {
    KAYNAKLAR[id] = liste.map((o) => {
      if (o[0] === 'dia') return { ad: `TDV İslâm Ansiklopedisi, "${baslikDuzelt(o[2])}"`, url: `https://islamansiklopedisi.org.tr/${o[1]}` };
      if (o[0] === 'suy') return { ad: `Süyûtî, Tabakātü'l-huffâz, s. ${o[1]}`, url: `https://shamela.ws/book/5823/${o[1] - 10}` };
      return { ad: `${KITAPLAR[o[1]] || 'Şâmile ' + o[1]}, ${ROMA[o[2]] || o[2]}, ${o[3]}`, url: `https://shamela.ws/book/${o[1]}/${o[4]}` };
    });
  }
  const OPENITI = window.OPENITI || {};
  // Bölge ve asır metinleri (veri/bolge-metinleri.js): her metin { m: 'metin', k: ['dia:slug|Başlık', 'alim:id', ...] }
  const BM = window.BOLGE_METIN || {};
  const gelisme = (b, n) => ((BM.gelisme || {})[b] || {})[n];
  const metinAl = (x) => (x == null ? null : typeof x === 'string' ? { m: x, k: [] } : x);
  const hatalar = [];
  const kenarlar = [];
  for (const a of alimler) {
    a.asir = asirOf(a.v);
    a.db = a.db || [];
    a.eser = a.eser || [];
    a.kay = [...(KAYNAKLAR[a.id] || []), ...(a.kay || [])];
    a.bio = BIYO[a.id]?.bio || '';
    a.bioP = (window.BIYOK || {})[a.id] || null;
    const oz = (window.OZETK || {})[a.id];
    if (oz) { a.ozet = oz[0]; a.ozetKay = oz[1]; }
    a.farkNotu = BIYO[a.id]?.not || '';
    a.hocalar = (a.h || []).map((h) => (typeof h === 'string' ? { k: h } : { ...h }));
  }
  // Biyografi dosyasındaki ek bağlar: { k } → bu kişinin hocası; { k: kendisi, yon: 'talebe', t: [...] } → talebeleri
  const ilkKaynak = (id) => (KAYNAKLAR[id] || [])[0];
  const bagEkle = (talebeId, bag) => {
    const t = alim.get(talebeId);
    if (!t) { hatalar.push(`biyografiler.js: "${talebeId}" diye bir âlim yok`); return; }
    const var_ = t.hocalar.find((h) => h.k === bag.k);
    if (var_) { if (!var_.kaynak && bag.kaynak) var_.kaynak = bag.kaynak; if (!var_.not && bag.not) var_.not = bag.not; }
    else t.hocalar.push(bag);
  };
  for (const [id, kayit] of Object.entries(BIYO)) {
    if (!alim.has(id)) { hatalar.push(`biyografiler.js: "${id}" diye bir âlim yok`); continue; }
    for (const h of kayit.h || []) {
      if (h.yon === 'talebe') for (const t of h.t) bagEkle(t, { k: id, kaynak: ilkKaynak(id) });
      else bagEkle(id, { kaynak: ilkKaynak(id), ...h });
    }
  }
  // DİA "ilişkili maddeler" sayfasındaki Hocası / Öğrencisi kayıtları.
  // Karşı taraf atlasta varsa bağ olarak eklenir (kaynak: ilişkinin geçtiği DİA maddesi), yoksa dış liste olarak gösterilir.
  const diaKaynak = (id) => (KAYNAKLAR[id] || []).find((k) => k.url && k.url.includes('islamansiklopedisi'));
  const slugAlim = new Map();
  for (const [id, liste] of Object.entries(window.KAYNAK_HAM || {})) for (const k of liste) if (k[0] === 'dia') slugAlim.set(k[1], id);
  const disHoca = new Map(), disTalebe = new Map();
  const disEkle = (m, id, kayit) => { if (!m.has(id)) m.set(id, []); if (!m.get(id).some((x) => x.slug === kayit.slug)) m.get(id).push(kayit); };
  // DİA'da maddesi olup KAYNAK_HAM'da DİA kaydı bulunmayan atlas âlimleri
  for (const [slug, id] of [['ismaili', 'ismaili'], ['baci', 'baci'], ['ebu-abdurrahman-es-sulemi', 'sulemi']]) slugAlim.set(slug, id);
  // DİA'nın ilişki etiketleri otomatik üretildiği için bazen ters düşer (ör. talebe "Hocası" diye etiketlenir).
  // Bu yüzden hoca talebeden önce vefat etmemişse ilişki alınmaz.
  const diaElenen = [];
  for (const [id, liste] of Object.entries(window.DIA_ILISKI || {})) {
    if (!alim.has(id)) continue;
    const ben = alim.get(id).v;
    for (const [slug, yon, ad, tanitim, v] of liste) {
      const karsi = slugAlim.get(slug);
      if (karsi === id) continue;
      const kv = karsi ? alim.get(karsi).v : v;
      if (kv && (yon === 'h' ? kv >= ben : kv <= ben)) { diaElenen.push(`${id} ${yon} ${slug} (${kv})`); continue; }
      if (karsi) {
        const [h, t] = yon === 'h' ? [karsi, id] : [id, karsi];
        bagEkle(t, { k: h, kaynak: diaKaynak(id) });
      } else disEkle(yon === 'h' ? disHoca : disTalebe, id, { slug, ad, tanitim, v, kaynak: diaKaynak(id) });
    }
  }
  if (diaElenen.length) console.info('Tarihle uyuşmadığı için alınmayan DİA ilişkileri:\n' + diaElenen.join('\n'));
  // Kaynağı ayrıca kontrol edilerek bulunmuş bağlar (veri/bag-kaynaklari.js)
  const KAYNAK_SECICI = {
    dia: (k) => k.url && k.url.includes('islamansiklopedisi'),
    suy: (k) => k.url && k.url.includes('/book/5823/'),
    siyer: (k) => k.url && k.url.includes('/book/10906/'),
    durer: (k) => k.url && k.url.includes('/book/6674/'),
  };
  for (const [anahtar, deger] of Object.entries(window.BAG_KAYNAK || {})) {
    const [h, t] = anahtar.split('>');
    const [tur, kim] = deger.split(':');
    const kaynak = (KAYNAKLAR[kim] || []).find(KAYNAK_SECICI[tur]);
    const bag = alim.get(t)?.hocalar.find((x) => x.k === h);
    if (bag && kaynak && !bag.kaynak) bag.kaynak = kaynak;
    else if (!bag || !kaynak) hatalar.push(`bag-kaynaklari.js: ${anahtar} (${deger}) eşleşmedi`);
  }
  for (const a of alimler) {
    if (!bolge.has(a.b)) hatalar.push(`${a.id}: "${a.b}" diye bir bölge yok`);
    for (const x of a.db) if (!bolge.has(x)) hatalar.push(`${a.id}: "${x}" diye bir bölge yok`);
    for (const h of a.hocalar) {
      if (!alim.has(h.k)) { hatalar.push(`${a.id}: "${h.k}" diye bir âlim yok`); continue; }
      kenarlar.push({ hoca: h.k, talebe: a.id, ...h });
    }
  }
  if (hatalar.length) console.error('Veri hataları:\n' + hatalar.join('\n'));
  const talebeleri = new Map(alimler.map((a) => [a.id, []]));
  for (const k of kenarlar) talebeleri.get(k.hoca).push(k);

  /* ═════════════ YARDIMCILAR ═════════════ */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const sade = (s) => String(s || '').toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‘’'`ʿʾ]/g, '').replace(/ı/g, 'i');
  const tarih = (a) => `ö. ${a.v}${a.vm ? '/' + a.vm : ''}`;
  const renkStil = (b) => `--renk:${b.renk};--renk-koyu:${b.renkKoyu}`;
  const bolgeEtiketi = (id, link = true) => {
    const b = bolge.get(id);
    if (!b) return '';
    const ic = `<span class="nokta"></span>${esc(b.isim)}`;
    return link ? `<a class="etiket" href="#/bolge/${b.id}" style="${renkStil(b)}">${ic}</a>` : `<span class="etiket" style="${renkStil(b)}">${ic}</span>`;
  };
  const alimLink = (id, kisa = false) => {
    const a = alim.get(id);
    return `<a href="#/alim/${a.id}">${esc(a.isim)}</a>${kisa ? '' : ` <span class="soluk">(${a.v})</span>`}`;
  };
  const dogEtiketi = (a) =>
    a.dog === true ? '<span class="etiket tamam">Kaynakla kontrol edildi</span>'
      : a.dog === 'kismi' ? '<span class="etiket tamam" title="Bağların bir kısmı kaynaklarıyla verildi">Kısmen kaynaklı</span>'
      : (KAYNAKLAR[a.id] || []).length ? '<span class="etiket tamam" title="Biyografi DİA ve/veya tabakāt kaynaklarına dayanıyor">Kaynaklı biyografi</span>'
      : '<span class="etiket uyari" title="Bu kaydın bilgileri henüz kaynaklardan tek tek kontrol edilmedi">Kontrol bekliyor</span>';
  /** OpenITI deposu: yazar URI'sindeki yıl 25'lik dilimlere yuvarlanır (0748 → 0750AH). */
  const openitiUrl = (book) => {
    const yazar = book.split('.')[0];
    const yil = parseInt(yazar.slice(0, 4), 10);
    const depo = String(Math.ceil(yil / 25) * 25).padStart(4, '0') + 'AH';
    return `https://github.com/OpenITI/${depo}/tree/master/data/${yazar}/${book}`;
  };
  const paragraflar = (metin) => metin.split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join('');
  /** Paragrafın kaynak anahtarlarını (dia, suy, siyer, durer, dav, kay, ar) kişinin kaynak listesindeki bağlantılara çevirir. */
  const KAYNAK_TURU = {
    dia: (k) => k.url && k.url.includes('islamansiklopedisi'),
    suy: (k) => k.url && k.url.includes('/book/5823/'),
    siyer: (k) => k.url && k.url.includes('/book/10906/'),
    durer: (k) => k.url && k.url.includes('/book/6674/'),
    dav: (k) => k.url && k.url.includes('/book/6675/'),
    kay: (k) => !k.url || !/islamansiklopedisi|\/book\/(5823|10906|6674|6675)\//.test(k.url),
  };
  function paragrafKaynaklari(a, anahtarlar) {
    const liste = [];
    for (const an of anahtarlar.split('+')) {
      const f = KAYNAK_TURU[an];
      if (f) a.kay.filter(f).forEach((k) => liste.includes(k) || liste.push(k));
    }
    return liste.length ? `<span class="p-kaynak">Kaynak: ${liste.map(kaynakYaz).join('; ')}</span>` : '';
  }
  const kaynakliParagraflar = (a, p) => p.map(([metin, an]) => `<p>${esc(metin)} ${paragrafKaynaklari(a, an)}</p>`).join('');
  /** Bölge/asır metninin kaynak satırı: DİA maddeleri bağlantıyla, atlas âlimleri kendi sayfalarına bağlanır. */
  function metinKaynagi(k) {
    if (!k || !k.length) return '';
    const dia = k.filter((x) => x.startsWith('dia:')).map((x) => { const [slug, ad] = x.slice(4).split('|'); return `<a href="https://islamansiklopedisi.org.tr/${esc(slug)}" target="_blank" rel="noopener">TDV İA, "${esc(ad)}"</a>`; });
    const al = k.filter((x) => x.startsWith('alim:')).map((x) => x.slice(5)).filter((id) => alim.has(id)).map((id) => `<a href="#/alim/${id}">${esc(alim.get(id).isim)}</a>`);
    const parca = [];
    if (dia.length) parca.push(dia.join('; '));
    if (al.length) parca.push(`kaynaklı biyografiler: ${al.join(', ')}`);
    return `<span class="p-kaynak">Kaynak: ${parca.join('; ')}</span>`;
  }
  const metinHtml = (x, sinif = '') => { const t = metinAl(x); return t ? `<p class="${sinif}">${esc(t.m)} ${metinKaynagi(t.k)}</p>` : ''; };
  const kaynakYaz = (k) => (k ? (k.url ? `<a href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.ad)}</a>` : esc(k.ad)) : '');
  const koyuMu = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const bolgeRengi = (id) => { const b = bolge.get(id); return koyuMu() ? b.renkKoyu : b.renk; };
  const ilimBagi = () => true;

  function enKisaYol(bas, hedef, yon) {
    const komsu = (id) => {
      const asagi = talebeleri.get(id).map((k) => k.talebe);
      const yukari = alim.get(id).hocalar.filter((h) => alim.has(h.k)).map((h) => h.k);
      return yon === 'asagi' ? asagi : yon === 'yukari' ? yukari : [...asagi, ...yukari];
    };
    const onceki = new Map([[bas, null]]);
    const kuyruk = [bas];
    while (kuyruk.length) {
      const id = kuyruk.shift();
      if (id === hedef) break;
      for (const n of komsu(id)) if (!onceki.has(n)) { onceki.set(n, id); kuyruk.push(n); }
    }
    if (!onceki.has(hedef)) return null;
    const yol = [];
    for (let id = hedef; id; id = onceki.get(id)) yol.unshift(id);
    return yol;
  }

  /** Kuşak kuşak hocalar (yukari) ya da talebeler (asagi) */
  function dereceler(id, yon) {
    const sonuc = [];
    const gorulen = new Set([id]);
    let simdi = [id];
    while (simdi.length && sonuc.length < 12) {
      const sonraki = [];
      for (const x of simdi) {
        const komsu = yon === 'yukari' ? alim.get(x).hocalar.map((h) => h.k) : talebeleri.get(x).map((k) => k.talebe);
        for (const n of komsu) if (alim.has(n) && !gorulen.has(n)) { gorulen.add(n); sonraki.push(n); }
      }
      if (sonraki.length) sonuc.push(sonraki.sort((a, b) => alim.get(a).v - alim.get(b).v));
      simdi = sonraki;
    }
    return sonuc;
  }

  function zincirKumesi(id) {
    const s = new Set([id]);
    for (const yon of ['yukari', 'asagi']) for (const d of dereceler(id, yon)) d.forEach((x) => s.add(x));
    return s;
  }

  /* ═════════════ YÖNLENDİRME ═════════════ */
  const main = document.getElementById('icerik');
  let temizle = null; // açık grafiklerin kapatılması

  function rota() {
    const h = location.hash.replace(/^#\/?/, '');
    const [yolu, sorgu = ''] = h.split('?');
    const p = yolu.split('/').filter(Boolean);
    const q = new URLSearchParams(sorgu);
    if (temizle) { try { temizle(); } catch (e) {} temizle = null; }
    let menu = p[0] || '';
    if (menu === 'alim') menu = 'alimler';
    if (menu === 'bolge') menu = 'bolgeler';
    document.querySelectorAll('[data-menu]').forEach((a) => {
      if (a.dataset.menu === menu) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    let baslik = '';
    if (!p[0]) baslik = anaSayfa();
    else if (p[0] === 'alimler') baslik = alimlerSayfasi(q);
    else if (p[0] === 'alim' && alim.has(p[1])) baslik = alimSayfasi(alim.get(p[1]));
    else if (p[0] === 'asirlar') baslik = asirlarSayfasi();
    else if (p[0] === 'bolgeler') baslik = bolgelerSayfasi();
    else if (p[0] === 'bolge' && bolge.has(p[1])) baslik = bolgeSayfasi(bolge.get(p[1]));
    else if (p[0] === 'ag') baslik = agSayfasi(q);
    else if (p[0] === 'hakkinda') baslik = hakkindaSayfasi();
    else baslik = bulunamadi();
    document.title = baslik ? `${baslik} | Muhaddisler Atlası` : 'Muhaddisler Atlası';
    if (!sorgu.includes('kisi=') || p[0] !== 'ag') window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', rota);

  /* ═════════════ ANA SAYFA ═════════════ */
  const ZINCIRLER = {
    buhari: {
      ad: 'Sahîh-i Buhârî',
      aciklama: "Sahîh-i Buhârî'nin Firebrî rivayeti: Hammûye eseri Firebrî'den, Dâvûdî Hammûye'den, Ebü'l-Vakt Dâvûdî'den dinledi; rivayet İbnü'z-Zebîdî, Haccâr ve Tenûhî üzerinden İbn Hacer'e ulaştı.",
      halkalar: ['firebri', 'hammuye', 'davudi', 'ebul-vakt', 'ibnuz-zebidi', 'haccar', 'tenuhi', 'ibn-hacer'],
    },
    muslim: {
      ad: 'Sahîh-i Müslim',
      aciklama: "Sahîh-i Müslim'in İbn Süfyân rivayeti: Cülûdî eseri İbn Süfyân'dan, Abdülgāfir el-Fârisî Cülûdî'den, Fürâvî Abdülgāfir'den, Müeyyed et-Tûsî Fürâvî'den dinledi; İbnü's-Salâh da Müeyyed et-Tûsî'den dinledi.",
      halkalar: ['ibn-sufyan', 'culudi', 'abdulgafir', 'furavi', 'muayyed-tusi', 'ibnus-salah'],
    },
    zehebi: {
      ad: 'Zehebî halkası',
      aciklama: "Münzirî'den Dimyâtî'ye, ondan Mizzî'ye; Mizzî'nin talebesi Zehebî'den İbn Râfi'e, İbn Râfi'den Irâkī'ye, Irâkī'den İbn Hacer'e ve İbn Hacer'den Sehâvî'ye uzanan hâfızlar halkası.",
      halkalar: ['munziri', 'dimyati', 'mizzi', 'zehebi', 'ibn-rafi', 'iraki', 'ibn-hacer', 'sehavi'],
    },
  };

  function zincirHtml(anahtar) {
    const z = ZINCIRLER[anahtar];
    return `<p>${esc(z.aciklama)} <span class="p-kaynak">Her halkanın hoca-talebe bağı, ilgili âlimin sayfasında kaynağıyla gösterilir.</span></p><ol class="zincir">${z.halkalar
      .map((id) => {
        const a = alim.get(id);
        return `<li><a href="#/alim/${a.id}">${esc(a.isim)}</a><span class="alt-satir">${tarih(a)} · ${esc(bolge.get(a.b).isim)}</span></li>`;
      })
      .join('')}</ol>`;
  }

  function anaSayfa() {
    const kontrollu = alimler.filter((a) => a.dog).length;
    main.innerHTML = `
      <section class="kahraman">
        <div>
          <h1>Muhaddisler Atlası</h1>
          <p class="giris">Hicrî 4. asrın başından 10. asrın sonuna kadar yaşamış hadis âlimlerini, yaşadıkları ilim merkezlerine ve asırlarına göre gösterir; hoca-talebe bağlarıyla ilmin hangi yollardan aktarıldığını izlemenizi sağlar.</p>
          <p class="sayilar">${alimler.length} âlim, ${bolgeler.length} bölge, ${ASIRLAR.length} asır ve ${kenarlar.length} hoca-talebe bağı. Hicrî 301–1000 (mîlâdî 913–1592).</p>
          <div class="dugmeler">
            <a class="dugme ana" href="#/ag">Bağlantı ağını aç</a>
            <a class="dugme" href="#/asirlar">Asır asır gez</a>
            <a class="dugme" href="#/bolgeler">Bölgeler</a>
          </div>
        </div>
        <div class="zincir-kart">
          <div class="baslik">
            <strong>Rivayet zinciri</strong>
            <div class="dugme-grup" role="group" aria-label="Zincir seç">
              ${Object.entries(ZINCIRLER).map(([k, z], i) => `<button class="dugme kucuk" type="button" data-zincir="${k}" aria-pressed="${i === 0}">${esc(z.ad)}</button>`).join('')}
            </div>
          </div>
          <div class="zincir-ic">${zincirHtml('buhari')}</div>
        </div>
      </section>

      <h2>Yedi asır</h2>
      <p class="soluk">Asırlar tabakāt kitaplarındaki gibi kuşak sayılır; bir âlim vefat ettiği asra yerleştirilir. Renkli şerit, o asırdaki âlimlerin bölgelere dağılımını gösterir.</p>
      <div class="asir-seridi">
        ${ASIRLAR.map((n) => {
          const liste = alimler.filter((a) => a.asir === n);
          return `<a class="asir-kutu" href="#/asirlar?asir=${n}" data-asir-git="${n}">
            <div class="no">${n}.</div>
            <div class="yil">H. ${ASIR_BILGI[n].h}<br>M. ${ASIR_BILGI[n].m}</div>
            ${dagilimSeridi(liste)}
            <div class="isimler">${liste.length} âlim · ${liste.slice(0, 3).map((a) => esc(a.isim)).join(', ')}…</div>
          </a>`;
        }).join('')}
      </div>

      <h2>Bölgeler</h2>
      <div class="izgara">
        ${bolgeler.map((b) => bolgeKarti(b)).join('')}
      </div>
      <p class="soluk" style="margin-top:24px;font-size:.88rem">${kontrollu} kaydın bağları kaynaklarıyla verilmiştir; geri kalan kayıtlar "kontrol bekliyor" olarak işaretlidir. <a href="#/hakkinda">Yöntem</a></p>`;

    main.querySelectorAll('[data-zincir]').forEach((d) =>
      d.addEventListener('click', () => {
        main.querySelectorAll('[data-zincir]').forEach((x) => x.setAttribute('aria-pressed', String(x === d)));
        main.querySelector('.zincir-ic').innerHTML = zincirHtml(d.dataset.zincir);
      }),
    );
    main.querySelectorAll('[data-asir-git]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        location.hash = '#/asirlar';
        setTimeout(() => document.getElementById('asir-' + a.dataset.asirGit)?.scrollIntoView(), 30);
      }),
    );
    return '';
  }

  function dagilimSeridi(liste) {
    if (!liste.length) return '<div class="dagilim"></div>';
    return `<div class="dagilim" aria-hidden="true">${bolgeler
      .map((b) => {
        const n = liste.filter((a) => a.b === b.id).length;
        return n ? `<span style="${renkStil(b)};width:${(100 * n) / liste.length}%" title="${esc(b.isim)}: ${n}"></span>` : '';
      })
      .join('')}</div>`;
  }

  function bolgeKarti(b) {
    const liste = alimler.filter((a) => a.b === b.id);
    const sayilar = ASIRLAR.map((n) => liste.filter((a) => a.asir === n).length);
    const enCok = Math.max(1, ...sayilar);
    return `<a class="kart bolge-kart" href="#/bolge/${b.id}" style="${renkStil(b)}">
      <h3>${esc(b.isim)}</h3>
      <div class="soluk" style="font-size:.8rem">${esc(b.sehirler)}</div>
      <p>${liste.length} âlim</p>
      <div class="cubuklar" aria-label="Asırlara göre âlim sayısı">${sayilar.map((n, i) => `<span class="${n ? 'dolu' : ''}" style="height:${(100 * n) / enCok}%" title="${ASIRLAR[i]}. asır: ${n}"></span>`).join('')}</div>
      <div class="cubuk-etiket">${ASIRLAR.map((n) => `<span>${n}</span>`).join('')}</div>
    </a>`;
  }

  /* ═════════════ ÂLİMLER ═════════════ */
  function alimKarti(a) {
    const nh = a.hocalar.length;
    const nt = talebeleri.get(a.id).length;
    return `<a class="kart alim-kart" href="#/alim/${a.id}" data-ara="${esc(sade(a.isim + ' ' + (a.tam || '') + ' ' + (a.ar || '')))}" data-asir="${a.asir}" data-bolge="${a.b}">
      <h3>${esc(a.isim)} <span class="tarih">(${tarih(a)})</span></h3>
      <p>${esc(a.ozet)}</p>
      <div class="alt-bilgi">${bolgeEtiketi(a.b, false)}<span>${nh} hoca · ${nt} talebe</span></div>
    </a>`;
  }

  function alimlerSayfasi(q) {
    main.innerHTML = `
      <h1>Âlimler</h1>
      <p class="soluk">Vefat sırasına göre, asır asır. Bir âlimin sayfasında hocaları, talebeleri ve ilminin kuşak kuşak nereye ulaştığı yer alır.</p>
      <div class="filtreler">
        <label>Ara<input type="search" id="f-ara" placeholder="İsim, nisbe…" /></label>
        <label>Asır<select id="f-asir"><option value="">Bütün asırlar</option>${ASIRLAR.map((n) => `<option value="${n}">${n}. asır (H. ${ASIR_BILGI[n].h})</option>`).join('')}</select></label>
        <label>Bölge<select id="f-bolge"><option value="">Bütün bölgeler</option>${bolgeler.map((b) => `<option value="${b.id}">${esc(b.isim)}</option>`).join('')}</select></label>
        <span class="soluk" id="f-sayi" style="font-size:.85rem;padding-bottom:10px"></span>
      </div>
      ${ASIRLAR.map((n) => `<section class="asir-grup" data-grup="${n}"><h2>${n}. asır <small class="soluk" style="font-weight:400;font-size:.85rem">H. ${ASIR_BILGI[n].h} / M. ${ASIR_BILGI[n].m}</small></h2>
        <div class="izgara">${alimler.filter((a) => a.asir === n).map(alimKarti).join('')}</div></section>`).join('')}
      <p class="bos" id="f-bos" hidden>Bu ölçütlere uyan âlim yok.</p>`;
    const ara = main.querySelector('#f-ara');
    const fa = main.querySelector('#f-asir');
    const fb = main.querySelector('#f-bolge');
    fa.value = q.get('asir') || '';
    fb.value = q.get('bolge') || '';
    const uygula = () => {
      const t = sade(ara.value.trim());
      let toplam = 0;
      main.querySelectorAll('.asir-grup').forEach((g) => {
        let n = 0;
        g.querySelectorAll('.alim-kart').forEach((k) => {
          const ok = (!t || k.dataset.ara.includes(t)) && (!fa.value || k.dataset.asir === fa.value) && (!fb.value || k.dataset.bolge === fb.value);
          k.hidden = !ok;
          if (ok) n++;
        });
        g.hidden = n === 0;
        toplam += n;
      });
      main.querySelector('#f-sayi').textContent = `${toplam} âlim`;
      main.querySelector('#f-bos').hidden = toplam > 0;
    };
    [ara, fa, fb].forEach((e) => e.addEventListener('input', uygula));
    uygula();
    return 'Âlimler';
  }

  /* ═════════════ ÂLİM SAYFASI ═════════════ */
  function bagListesi(liste, yon) {
    if (!liste.length) return `<p class="bos">${yon === 'hoca' ? 'Bu atlastaki âlimlerden hocası kaydedilmedi.' : 'Bu atlastaki âlimlerden talebesi kaydedilmedi.'}</p>`;
    return `<ul class="bag-liste">${liste
      .map((k) => {
        const id = yon === 'hoca' ? k.hoca : k.talebe;
        const a = alim.get(id);
        const isaretler = [
          k.araci ? `<span class="etiket" title="Listede olmayan ara halka">Aracılı: ${esc(k.araci)}</span>` : '',
          k.ih ? '<span class="etiket uyari">İhtilaflı</span>' : '',
        ].join('');
        return `<li>
          <div class="ust-satir">${alimLink(id)} ${bolgeEtiketi(a.b, false)} ${isaretler}</div>
          ${k.not ? `<p class="not">${esc(k.not)}</p>` : ''}
          ${k.kaynak ? `<p class="kaynak">Kaynak: ${kaynakYaz(k.kaynak)}</p>` : '<p class="kaynaksiz-not">Bu bağ için ayrıca kaynak gösterilmedi; kontrol bekliyor.</p>'}
        </li>`;
      })
      .join('')}</ul>`;
  }

  /** Atlasta bulunmayan hoca / talebeler: DİA maddesi varsa ona, yoksa Şâmile'deki kaynağa bağlanır; hiçbiri yoksa düz yazılır. */
  function disListe(liste, yon) {
    if (!liste || !liste.length) return '';
    const kaynaklar = [...new Set(liste.map((x) => x.kaynak).filter(Boolean))];
    return `<h4 class="dis-baslik">Atlasta bulunmayan ${yon === 'hoca' ? 'hocaları' : 'talebeleri'}</h4>
      <ul class="dis-liste">${liste.map((x) => {
        const ad = esc(baslikDuzelt(x.ad));
        const link = x.slug ? `<a href="https://islamansiklopedisi.org.tr/${esc(x.slug)}" target="_blank" rel="noopener" title="TDV İslâm Ansiklopedisi maddesi">${ad}</a>`
          : x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener" title="Şâmile'deki kaynak">${ad}</a>` : ad;
        return `<li>${link}${x.v ? ` <span class="soluk">(ö. ${x.v})</span>` : ''}${x.tanitim ? ` <span class="soluk">${esc(x.tanitim)}</span>` : ''}</li>`;
      }).join('')}</ul>
      <p class="kaynak">Kaynak: ${kaynaklar.map(kaynakYaz).join('; ')} (ilişkili maddeler). Bağlantılar kişinin DİA maddesini açar; bu kişiler atlasta bulunmuyor.</p>`;
  }

  function silsileHtml(id, yon) {
    const d = dereceler(id, yon);
    if (!d.length) return '<p class="bos">Bu yönde bağlantı yok.</p>';
    return `<div class="silsile">${d
      .map((liste, i) => `<div class="derece"><span>${i + 1}. ${yon === 'yukari' ? 'kuşak hoca' : 'kuşak talebe'}</span><div class="isim-cipleri">${liste.map((x) => `<a href="#/alim/${x}" style="${renkStil(bolge.get(alim.get(x).b))}">${esc(alim.get(x).isim)} <span>${alim.get(x).v}</span></a>`).join('')}</div></div>`)
      .join('')}</div>`;
  }

  function alimSayfasi(a) {
    const hocaK = kenarlar.filter((k) => k.talebe === a.id).sort((x, y) => alim.get(x.hoca).v - alim.get(y.hoca).v);
    const talebeK = talebeleri.get(a.id).slice().sort((x, y) => alim.get(x.talebe).v - alim.get(y.talebe).v);
    main.innerHTML = `
      <p class="ust-baslik"><a href="#/alimler">Âlimler</a> / <a href="#/asirlar" data-asir-git="${a.asir}">${a.asir}. asır</a></p>
      <div class="alim-bas">
        <div>
          <h1>${esc(a.isim)} <span class="tarih">(${tarih(a)})</span></h1>
          ${a.tam ? `<p class="tam">${esc(a.tam)}</p>` : ''}
        </div>
        ${a.ar ? `<div class="arapca" lang="ar">${esc(a.ar)}</div>` : ''}
      </div>
      <div class="etiketler" style="margin-top:12px">
        ${bolgeEtiketi(a.b)}${a.db.map((x) => bolgeEtiketi(x)).join('')}
        <a class="etiket cerceve" href="#/alimler?asir=${a.asir}">${a.asir}. asır</a>
        ${dogEtiketi(a)}
      </div>
      <div class="alim-duzen">
        <aside class="yan">
          <nav aria-label="Sayfa içi">
            <a href="#/alim/${a.id}" data-bolum="ozet">${a.bioP || a.bio ? 'Hayatı' : 'Özet'}</a>
            ${a.eser.length ? `<a href="#/alim/${a.id}" data-bolum="eserleri">Eserleri</a>` : ''}
            ${(OPENITI[a.id] || []).length ? `<a href="#/alim/${a.id}" data-bolum="openiti">OpenITI'de</a>` : ''}
            ${((window.SAMILE || {})[a.id]?.k || []).length ? `<a href="#/alim/${a.id}" data-bolum="samile">Şâmile'de</a>` : ''}
            <a href="#/alim/${a.id}" data-bolum="baglar">Hoca ve talebeleri</a>
            <a href="#/alim/${a.id}" data-bolum="ag-bolum">Küçük ağ</a>
            <a href="#/alim/${a.id}" data-bolum="silsile">İlim silsilesi</a>
            ${a.kay.length ? `<a href="#/alim/${a.id}" data-bolum="kaynaklar">Kaynaklar</a>` : ''}
          </nav>
          <dl>
            ${a.d ? `<dt>Doğum</dt><dd>${a.d}</dd>` : ''}
            <dt>Vefat</dt><dd>${a.v}${a.vm ? '/' + a.vm : ''}</dd>
            <dt>Bölge</dt><dd>${esc(bolge.get(a.b).isim)}</dd>
            <dt>Bağlar</dt><dd>${hocaK.length} hoca · ${talebeK.length} talebe</dd>
          </dl>
          <p><a class="dugme kucuk" href="#/ag?kisi=${a.id}">Büyük ağda göster</a></p>
        </aside>
        <div class="icerik-blok">
          <h2 id="ozet">${a.bioP || a.bio ? 'Hayatı' : 'Özet'}</h2>
          <p class="ozet-metin">${esc(a.ozet)} ${a.ozetKay ? paragrafKaynaklari(a, a.ozetKay) : ''}</p>
          ${a.ozetKay ? '' : '<p class="kaynaksiz-not">Yukarıdaki kısa özet atlasın kendi derlemesidir, kaynakla kontrol edilmemiştir.</p>'}
          ${a.bioP ? `<div class="bio">${kaynakliParagraflar(a, a.bioP)}</div>` : a.bio ? `<div class="bio">${paragraflar(a.bio)}</div>` : ''}
          ${a.farkNotu ? `<p class="uyari-serit" style="margin-top:12px">Kaynaklar arası fark: ${esc(a.farkNotu)}</p>` : ''}
          ${a.eser.length ? `<h2 id="eserleri">Başlıca eserleri</h2><ul class="eserler">${a.eser.map((e) => `<li><i>${esc(e)}</i></li>`).join('')}</ul><p class="kaynaksiz-not">Bu liste tek tek kaynakla eşleştirilmedi; eserlerin bir kısmı yukarıdaki kaynaklı paragraflarda geçer. OpenITI listesi ise doğrudan OpenITI kayıtlarından gelir.</p>` : ''}
          ${openitiBolumu(a)}
          ${samileBolumu(a)}
          <h2 id="baglar">Hoca ve talebeleri</h2>
          <div class="iki-sutun">
            <div><h3>Hocaları</h3>${bagListesi(hocaK, 'hoca')}${disListe(disHoca.get(a.id), 'hoca')}</div>
            <div><h3>Talebeleri</h3>${bagListesi(talebeK, 'talebe')}${disListe(disTalebe.get(a.id), 'talebe')}</div>
          </div>
          <h2 id="ag-bolum">Küçük ağ</h2>
          <p class="soluk" style="font-size:.88rem;margin-top:-6px">Üstte hocaları, altta talebeleri. Bir isme tıklayınca o âlimin sayfası açılır.</p>
          <div class="mini-ag" id="mini-ag"></div>
          <h2 id="silsile">İlim silsilesi</h2>
          <div class="iki-sutun">
            <div><h3>Kimlerden geldi</h3>${silsileHtml(a.id, 'yukari')}</div>
            <div><h3>Kimlere ulaştı</h3>${silsileHtml(a.id, 'asagi')}</div>
          </div>
          ${a.kay.length ? `<h2 id="kaynaklar">Kaynaklar</h2><ul class="kaynak-liste">${a.kay.map((k) => `<li>${kaynakYaz(k)}</li>`).join('')}</ul>` : ''}
        </div>
      </div>`;
    main.querySelectorAll('[data-bolum]').forEach((l) => l.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(l.dataset.bolum)?.scrollIntoView({ behavior: 'smooth' });
    }));
    main.querySelectorAll('[data-asir-git]').forEach((l) => l.addEventListener('click', (e) => {
      e.preventDefault();
      location.hash = '#/asirlar';
      setTimeout(() => document.getElementById('asir-' + l.dataset.asirGit)?.scrollIntoView(), 30);
    }));
    miniAg(a, hocaK, talebeK);
    return a.isim;
  }

  function openitiBolumu(a) {
    const liste = OPENITI[a.id] || [];
    if (!liste.length) return '';
    const GOSTER = 12;
    const satir = ([book, ar]) => `<li><a href="${esc(openitiUrl(book))}" target="_blank" rel="noopener"><span class="arapca-kucuk" lang="ar">${esc(ar)}</span></a> <code>${esc(book.split('.').slice(1).join('.'))}</code></li>`;
    return `<h2 id="openiti">OpenITI külliyatındaki eserleri</h2>
      <p class="soluk" style="font-size:.88rem;margin-top:-6px">OpenITI 2025.1.9 sürümünde bu müellife ait ${liste.length} eser bulunuyor. Bağlantılar eserin OpenITI deposundaki klasörünü açar.</p>
      <ul class="openiti-liste">${liste.slice(0, GOSTER).map(satir).join('')}</ul>
      ${liste.length > GOSTER ? `<details class="openiti-devam"><summary>${liste.length - GOSTER} eser daha</summary><ul class="openiti-liste">${liste.slice(GOSTER).map(satir).join('')}</ul></details>` : ''}`;
  }

  function samileBolumu(a) {
    const s = (window.SAMILE || {})[a.id];
    if (!s || !s.k.length) return '';
    const GOSTER = 12;
    const satir = ([no, ad]) => `<li><a href="https://shamela.ws/book/${no}" target="_blank" rel="noopener"><span class="arapca-kucuk" lang="ar">${esc(ad)}</span></a></li>`;
    return `<h2 id="samile">Şâmile'deki eserleri</h2>
      <p class="soluk" style="font-size:.88rem;margin-top:-6px">el-Mektebetü'ş-şâmile'de <a href="https://shamela.ws/author/${s.y}" target="_blank" rel="noopener">bu müellifin sayfasında</a> ${s.k.length} eser bulunuyor. Bağlantılar kitabı Şâmile'de açar.</p>
      <ul class="samile-liste">${s.k.slice(0, GOSTER).map(satir).join('')}</ul>
      ${s.k.length > GOSTER ? `<details class="openiti-devam"><summary>${s.k.length - GOSTER} eser daha</summary><ul class="samile-liste">${s.k.slice(GOSTER).map(satir).join('')}</ul></details>` : ''}`;
  }

  function miniAg(a, hocaK, talebeK) {
    const kap = document.getElementById('mini-ag');
    if (!window.cytoscape) { kap.innerHTML = '<p class="bos" style="padding:16px">Ağ kütüphanesi yüklenemedi (internet bağlantısı gerekli).</p>'; return; }
    // Her satırda en çok 5 kişi; hocalar yukarıya, talebeler aşağıya doğru satır satır dizilir.
    // Satırdaki kişi sayısı kutunun genişliğine göre seçilir; böylece ağ küçültülmeden sığar ve isimler okunur kalır.
    const ARALIK = 190, SATIR_Y = 120;
    const SATIR = Math.max(2, Math.floor((kap.clientWidth - 40) / ARALIK));
    const sira = (liste, y0, yon) => liste.map((id, i) => {
      const s = Math.floor(i / SATIR), satirda = Math.min(SATIR, liste.length - s * SATIR);
      return { id, x: ((i % SATIR) - (satirda - 1) / 2) * ARALIK, y: y0 + yon * s * SATIR_Y };
    });
    const hocalar = hocaK.map((k) => k.hoca);
    const talebeler = talebeK.map((k) => k.talebe).filter((t) => !hocalar.includes(t));
    const ikisi = talebeK.map((k) => k.talebe).filter((t) => hocalar.includes(t));
    const konumlar = [...sira(hocalar, -170, -1), { id: a.id, x: 0, y: 0 }, ...sira(talebeler, 170, 1)];
    const satirSayisi = Math.ceil(hocalar.length / SATIR) + Math.ceil(talebeler.length / SATIR);
    kap.style.height = Math.min(1000, 220 + satirSayisi * 125) + 'px';
    const elemanlar = [];
    konumlar.forEach((k) => {
      const x = alim.get(k.id);
      elemanlar.push({
        group: 'nodes',
        data: { id: k.id, ad: `${x.isim}\n(ö. ${x.v})`, renk: bolgeRengi(x.b) },
        position: { x: k.x, y: k.y },
        classes: k.id === a.id ? 'merkez' : '',
      });
      // Düğümün üstünde bölge adı (ayrı, tıklanmayan bir etiket düğümü)
      elemanlar.push({
        group: 'nodes',
        data: { id: 'b-' + k.id, ad: bolge.get(x.b).isim, renk: bolgeRengi(x.b) },
        position: { x: k.x, y: k.y - (k.id === a.id ? 24 : 19) },
        classes: 'bolge-etiket', selectable: false,
      });
    });
    hocaK.forEach((k) => elemanlar.push({ group: 'edges', data: { id: 'h-' + k.hoca, source: k.hoca, target: a.id }, classes: (k.araci ? 'araci ' : '') + (k.ih ? 'ihtilaf' : '') }));
    talebeK.forEach((k) => { if (!ikisi.includes(k.talebe)) elemanlar.push({ group: 'edges', data: { id: 't-' + k.talebe, source: a.id, target: k.talebe }, classes: (k.araci ? 'araci ' : '') + (k.ih ? 'ihtilaf' : '') }); });
    ikisi.forEach((id) => elemanlar.push({ group: 'edges', data: { id: 'c-' + id, source: a.id, target: id }, classes: 'araci' }));
    const cy = cytoscape({
      container: kap, elements: elemanlar, layout: { name: 'preset', fit: true, padding: 40 },
      style: grafStili(true), minZoom: 0.3, maxZoom: 2.5, wheelSensitivity: 0.3, autoungrabify: true,
    });
    cy.style().selector('node').style({ 'font-size': 13, 'text-max-width': 180, 'text-background-opacity': 0.92, 'text-background-padding': 2, 'text-margin-y': 4 })
      .selector('node.merkez').style({ 'font-size': 15 })
      .selector('node.bolge-etiket').style({ width: 1, height: 1, 'background-opacity': 0, 'border-width': 0, 'font-size': 10.5, 'font-weight': 600, color: 'data(renk)', 'text-valign': 'top', 'text-margin-y': 0, 'text-transform': 'uppercase', 'text-background-opacity': 0, events: 'no' })
      .update();
    cy.resize(); cy.fit(undefined, 40); if (cy.zoom() > 1.1) { cy.zoom(1.1); cy.center(); }
    cy.on('tap', 'node', (e) => { if (e.target.id() !== a.id && alim.has(e.target.id())) location.hash = '#/alim/' + e.target.id(); });
    cy.on('mouseover', 'node', () => (kap.style.cursor = 'pointer'));
    cy.on('mouseout', 'node', () => (kap.style.cursor = ''));
    temizle = () => cy.destroy();
  }

  /* ═════════════ GRAF STİLİ ═════════════ */
  function grafStili(mini = false) {
    const murekkep = cssVar('--murekkep');
    const soluk = cssVar('--murekkep-2');
    const cizgi = cssVar('--cizgi');
    const vurgu = cssVar('--vurgu');
    const altin = cssVar('--altin');
    const kart = cssVar('--kart');
    const ihtilaf = cssVar('--ihtilaf');
    return [
      { selector: 'node', style: {
        'background-color': 'data(renk)', width: mini ? 16 : 12, height: mini ? 16 : 12, label: 'data(ad)',
        'font-family': 'IBM Plex Sans, system-ui, sans-serif', 'font-size': mini ? 11 : 9, color: murekkep,
        'text-valign': 'bottom', 'text-margin-y': 3, 'text-wrap': 'wrap', 'text-max-width': 110,
        'text-background-color': kart, 'text-background-opacity': 0.75, 'text-background-padding': 1,
        'border-width': 1.5, 'border-color': kart,
      } },
      { selector: 'node.merkez', style: { width: 24, height: 24, 'border-color': altin, 'border-width': 3, 'font-weight': 600, 'font-size': 12 } },
      { selector: 'edge', style: {
        width: 1, 'line-color': soluk, 'line-opacity': mini ? 0.7 : 0.35, 'curve-style': 'bezier',
        'target-arrow-shape': 'triangle', 'target-arrow-color': soluk, 'arrow-scale': 0.6,
      } },
      { selector: 'edge.araci', style: { 'line-style': 'dashed' } },
      { selector: 'edge.ihtilaf', style: { 'line-style': 'dotted', 'line-color': ihtilaf, 'target-arrow-color': ihtilaf } },
      { selector: '.soluk', style: { opacity: 0.1 } },
      { selector: 'node.secili', style: { 'border-color': altin, 'border-width': 3, width: 18, height: 18, 'font-weight': 600, 'font-size': 11, 'z-index': 10 } },
      { selector: 'edge.vurgulu', style: { width: 2, 'line-color': vurgu, 'target-arrow-color': vurgu, 'line-opacity': 0.95, 'z-index': 9 } },
      { selector: 'edge.yol', style: { width: 3.5, 'line-color': altin, 'target-arrow-color': altin, 'line-opacity': 1, 'z-index': 11 } },
      { selector: 'node.yol', style: { 'border-color': altin, 'border-width': 3, width: 18, height: 18, 'font-weight': 600, 'z-index': 11 } },
      { selector: 'node.baslik', style: {
        shape: 'round-rectangle', 'background-opacity': 0, 'border-width': 0, width: 1, height: 1, label: 'data(ad)',
        'font-size': 12, 'font-weight': 600, color: 'data(renk)', 'text-valign': 'center', 'text-background-opacity': 0, events: 'no',
      } },
      { selector: 'node.asir-etiket', style: {
        'background-opacity': 0, 'border-width': 0, width: 1, height: 1, label: 'data(ad)', 'font-size': 11,
        color: soluk, 'text-valign': 'center', 'text-halign': 'left', 'text-background-opacity': 0, events: 'no',
      } },
      { selector: 'node.kilavuz-uc', style: { 'background-opacity': 0, 'border-width': 0, width: 1, height: 1, label: '', events: 'no' } },
      { selector: 'edge.kilavuz', style: { width: 1, 'line-color': cizgi, 'line-opacity': 1, 'target-arrow-shape': 'none', 'curve-style': 'straight', events: 'no', 'z-index': 0 } },
    ];
  }

  /* ═════════════ BAĞLANTI AĞI ═════════════ */
  const SUTUN = 230, YIL = 2.8, SERIT = [0, -66, 66];

  function konumlar() {
    const pos = new Map();
    for (const b of bolgeler) {
      const liste = alimler.filter((a) => a.b === b.id);
      const serit = SERIT.map(() => -Infinity);
      const x0 = bolge.get(b.id).sira * SUTUN;
      for (const a of liste) {
        const y = (a.v - 300) * YIL;
        let s = serit.findIndex((son) => y - son >= 34);
        if (s < 0) s = serit.indexOf(Math.min(...serit));
        const yy = Math.max(y, serit[s] + 34);
        serit[s] = yy;
        pos.set(a.id, { x: x0 + SERIT[s], y: yy });
      }
    }
    return pos;
  }

  function agSayfasi(q) {
    const secenekKisi = alimler.map((a) => `<option value="${a.id}">${esc(a.isim)} (${a.v})</option>`).join('');
    main.innerHTML = `
      <div class="ag-ust">
        <h1>Bağlantı ağı</h1>
        <details class="nasil"><summary>Nasıl okunur?</summary><div>
          <p>Her sütun bir bölge, dikey eksen vefat yılıdır; yukarıdan aşağı asırlar ilerler. Oklar hocadan talebeye doğrudur.</p>
          <p>Bir âlime tıklayınca <b>doğrudan</b> görünümde yalnız hocaları ve talebeleri, <b>zincir</b> görünümünde ise ilminin geldiği ve ulaştığı bütün kuşaklar öne çıkar.</p>
          <p>Kesik çizgi: araya listede olmayan bir halka giriyor. Noktalı kırmızı çizgi: kaynaklarda ihtilaflı.</p>
        </div></details>
      </div>
      <div class="ag-kontrol">
        <div class="grup"><span>Odaklan</span><div class="satir">
          <select id="ag-bolge"><option value="">Bölge seç…</option>${bolgeler.map((b) => `<option value="${b.id}">${esc(b.isim)}</option>`).join('')}</select>
          <span class="soluk">ya da</span>
          <select id="ag-kisi"><option value="">Âlim seç…</option>${secenekKisi}</select>
        </div></div>
        <div class="grup"><span>Asırlar</span><div class="satir">
          <select id="ag-asir1">${ASIRLAR.map((n) => `<option value="${n}">${n}.</option>`).join('')}</select>
          <span class="soluk">–</span>
          <select id="ag-asir2">${ASIRLAR.map((n) => `<option value="${n}" ${n === 10 ? 'selected' : ''}>${n}.</option>`).join('')}</select>
        </div></div>
        <div class="grup"><span>Vurgu</span><div class="dugme-grup" role="group">
          <button class="dugme" type="button" data-mod="dogrudan" aria-pressed="true">Doğrudan</button>
          <button class="dugme" type="button" data-mod="zincir" aria-pressed="false">Zincir</button>
        </div></div>
        <div class="grup"><span>Görünüm</span><div class="satir">
          <div class="dugme-grup" role="group">
            <button class="dugme" type="button" data-gorunum="zaman" aria-pressed="true">Zaman × Bölge</button>
            <button class="dugme" type="button" data-gorunum="serbest" aria-pressed="false">Serbest</button>
          </div>
          <button class="dugme" type="button" id="ag-sigdir" title="Ekrana sığdır">Sığdır</button>
          <button class="dugme" type="button" id="ag-yol-ac" aria-expanded="false">⇄ Yol bul</button>
          <button class="dugme" type="button" id="ag-sifirla">↺ Sıfırla</button>
        </div></div>
      </div>
      <div class="yol-kutu" id="yol-kutu">
        <label class="grup" style="display:flex;flex-direction:column;gap:4px;font-size:.78rem;color:var(--murekkep-2)">Başlangıç<select id="yol-bas">${secenekKisi}</select></label>
        <label class="grup" style="display:flex;flex-direction:column;gap:4px;font-size:.78rem;color:var(--murekkep-2)">Hedef<select id="yol-hedef">${secenekKisi}</select></label>
        <label class="grup" style="display:flex;flex-direction:column;gap:4px;font-size:.78rem;color:var(--murekkep-2)">Yön<select id="yol-yon">
          <option value="asagi">Hocadan talebeye (isnad yolu)</option>
          <option value="her">Yönsüz (herhangi bir bağ)</option>
        </select></label>
        <button class="dugme ana" type="button" id="yol-bul">Yolu bul</button>
        <span id="yol-sonuc" class="soluk" style="font-size:.88rem"></span>
      </div>
      <div class="ag-kap">
        <div id="ag" role="img" aria-label="Âlimler arasındaki hoca-talebe ağı"></div>
        <div class="ag-panel" id="ag-panel" hidden></div>
      </div>
      <div class="lejant">
        ${bolgeler.map((b) => `<span style="display:inline-flex;align-items:center;gap:5px;${renkStil(b)}"><span class="nokta"></span>${esc(b.isim)}</span>`).join('')}
        <span><span class="cizgi-ornek"></span>hoca → talebe</span>
        <span><span class="cizgi-ornek kesik"></span>aracılı</span>
        <span><span class="cizgi-ornek ihtilaf"></span>ihtilaflı</span>
      </div>`;

    const kap = document.getElementById('ag');
    if (!window.cytoscape) { kap.innerHTML = '<p class="bos" style="padding:16px">Ağ kütüphanesi yüklenemedi (internet bağlantısı gerekli).</p>'; return 'Bağlantı ağı'; }

    const pos = konumlar();
    const enAlt = (1000 - 300) * YIL + 40;
    const sagUc = (bolgeler.length - 1) * SUTUN + 80;
    const els = [];
    // Bölge başlıkları
    bolgeler.forEach((b, i) => els.push({ group: 'nodes', data: { id: 'b-' + b.id, ad: b.isim, renk: bolgeRengi(b.id) }, position: { x: i * SUTUN, y: -40 }, classes: 'baslik sabit', selectable: false, grabbable: false }));
    // Asır kılavuz çizgileri
    for (let y = 300; y <= 1000; y += 100) {
      const yy = (y - 300) * YIL - 12;
      els.push({ group: 'nodes', data: { id: 'k1-' + y }, position: { x: -90, y: yy }, classes: 'kilavuz-uc sabit' });
      els.push({ group: 'nodes', data: { id: 'k2-' + y }, position: { x: sagUc, y: yy }, classes: 'kilavuz-uc sabit' });
      els.push({ group: 'edges', data: { id: 'k-' + y, source: 'k1-' + y, target: 'k2-' + y }, classes: 'kilavuz sabit' });
      if (y < 1000) els.push({ group: 'nodes', data: { id: 'a-' + y, ad: `${y / 100 + 1}. asır` }, position: { x: -100, y: yy + 50 * YIL }, classes: 'asir-etiket sabit' });
    }
    for (const a of alimler) els.push({ group: 'nodes', data: { id: a.id, ad: `${a.isim} ${a.v}`, renk: bolgeRengi(a.b), asir: a.asir, bolge: a.b }, position: pos.get(a.id), classes: 'alim' });
    kenarlar.forEach((k, i) => els.push({ group: 'edges', data: { id: 'e' + i, source: k.hoca, target: k.talebe }, classes: 'bag ' + (k.araci ? 'araci ' : '') + (k.ih ? 'ihtilaf' : '') }));

    const cy = cytoscape({
      container: kap, elements: els, layout: { name: 'preset', fit: true, padding: 30 },
      style: grafStili(false), minZoom: 0.12, maxZoom: 3, wheelSensitivity: 0.25, autoungrabify: true,
    });
    temizle = () => cy.destroy();

    const durum = { mod: 'dogrudan', secili: null, gorunum: 'zaman' };
    const panel = document.getElementById('ag-panel');
    const selBolge = document.getElementById('ag-bolge');
    const selKisi = document.getElementById('ag-kisi');
    const a1 = document.getElementById('ag-asir1');
    const a2 = document.getElementById('ag-asir2');

    const alimDugumleri = () => cy.nodes('.alim');
    function vurguTemizle() { cy.elements().removeClass('soluk vurgulu secili yol'); }

    function asirFiltresi() {
      const lo = Math.min(+a1.value, +a2.value), hi = Math.max(+a1.value, +a2.value);
      cy.batch(() => {
        alimDugumleri().forEach((n) => n.style('display', n.data('asir') >= lo && n.data('asir') <= hi ? 'element' : 'none'));
      });
    }

    function panelGoster(id, ekHtml = '') {
      const a = alim.get(id);
      const hocaSayi = a.hocalar.length, talebeSayi = talebeleri.get(id).length;
      panel.innerHTML = `<button class="kapat" type="button" aria-label="Kapat">×</button>
        <h3>${esc(a.isim)}</h3>
        <div class="soluk" style="font-size:.8rem">${tarih(a)} · ${a.asir}. asır</div>
        <div class="etiketler" style="margin:6px 0">${bolgeEtiketi(a.b)}${dogEtiketi(a)}</div>
        <p style="margin:6px 0">${esc(a.ozet)}</p>
        <p class="soluk" style="margin:6px 0">${hocaSayi} hoca · ${talebeSayi} talebe</p>
        ${ekHtml}
        <p style="margin:8px 0 0"><a class="dugme kucuk ana" href="#/alim/${a.id}">Sayfasını aç</a></p>`;
      panel.hidden = false;
      panel.querySelector('.kapat').addEventListener('click', () => { panel.hidden = true; sec(null); });
    }

    function sec(id, ortala = false) {
      durum.secili = id;
      vurguTemizle();
      if (!id) { selKisi.value = ''; return; }
      selKisi.value = id;
      const n = cy.getElementById(id);
      let kume;
      if (durum.mod === 'dogrudan') kume = n.closedNeighborhood();
      else {
        const s = zincirKumesi(id);
        kume = cy.collection(alimDugumleri().filter((x) => s.has(x.id())));
        // yalnız zincir yönündeki bağlar: yukarı (atalar) ve aşağı (torunlar)
        const ata = n.predecessors(), torun = n.successors();
        kume = kume.union(ata.edges()).union(torun.edges());
      }
      cy.elements('.alim, .bag').not(kume).addClass('soluk');
      kume.edges().addClass('vurgulu');
      n.addClass('secili');
      panelGoster(id);
      if (ortala) cy.animate({ center: { eles: n }, zoom: Math.max(cy.zoom(), 1.1) }, { duration: 350 });
    }

    function bolgeOdakla(bid) {
      vurguTemizle();
      panel.hidden = true;
      if (!bid) { cy.fit(alimDugumleri().filter(':visible'), 30); return; }
      const ic = alimDugumleri().filter((n) => n.data('bolge') === bid);
      const kume = ic.closedNeighborhood();
      cy.elements('.alim, .bag').not(kume).addClass('soluk');
      ic.connectedEdges().addClass('vurgulu');
      cy.animate({ fit: { eles: kume, padding: 40 } }, { duration: 350 });
    }

    cy.on('tap', 'node.alim', (e) => { selBolge.value = ''; sec(e.target.id()); });
    cy.on('tap', (e) => { if (e.target === cy) { panel.hidden = true; sec(null); } });
    cy.on('mouseover', 'node.alim', () => (kap.style.cursor = 'pointer'));
    cy.on('mouseout', 'node.alim', () => (kap.style.cursor = ''));

    selKisi.addEventListener('change', () => { selBolge.value = ''; sec(selKisi.value || null, true); });
    selBolge.addEventListener('change', () => { selKisi.value = ''; durum.secili = null; bolgeOdakla(selBolge.value); });
    [a1, a2].forEach((s) => s.addEventListener('change', asirFiltresi));
    main.querySelectorAll('[data-mod]').forEach((d) => d.addEventListener('click', () => {
      durum.mod = d.dataset.mod;
      main.querySelectorAll('[data-mod]').forEach((x) => x.setAttribute('aria-pressed', String(x === d)));
      if (durum.secili) sec(durum.secili);
    }));
    main.querySelectorAll('[data-gorunum]').forEach((d) => d.addEventListener('click', () => {
      durum.gorunum = d.dataset.gorunum;
      main.querySelectorAll('[data-gorunum]').forEach((x) => x.setAttribute('aria-pressed', String(x === d)));
      const sabitler = cy.elements('.sabit');
      if (durum.gorunum === 'serbest') {
        sabitler.style('display', 'none');
        alimDugumleri().filter(':visible').union(cy.edges('.bag')).layout({ name: 'cose', animate: true, animationDuration: 600, nodeRepulsion: () => 9000, idealEdgeLength: () => 70, padding: 30, randomize: false }).run();
      } else {
        sabitler.style('display', 'element');
        alimDugumleri().forEach((n) => n.position(pos.get(n.id())));
        cy.fit(undefined, 30);
      }
    }));
    document.getElementById('ag-sigdir').addEventListener('click', () => cy.animate({ fit: { eles: cy.elements(':visible'), padding: 30 } }, { duration: 300 }));
    document.getElementById('ag-sifirla').addEventListener('click', () => {
      selBolge.value = ''; selKisi.value = ''; a1.value = '4'; a2.value = '10';
      asirFiltresi(); vurguTemizle(); panel.hidden = true; durum.secili = null;
      document.getElementById('yol-sonuc').textContent = '';
      cy.fit(undefined, 30);
    });
    const yolAc = document.getElementById('ag-yol-ac');
    const yolKutu = document.getElementById('yol-kutu');
    document.getElementById('yol-bas').value = 'firebri';
    document.getElementById('yol-hedef').value = 'ibn-hacer';
    yolAc.addEventListener('click', () => {
      const acik = !yolKutu.classList.contains('acik');
      yolKutu.classList.toggle('acik', acik);
      yolAc.setAttribute('aria-expanded', String(acik));
    });
    document.getElementById('yol-bul').addEventListener('click', () => {
      const bas = document.getElementById('yol-bas').value;
      const hedef = document.getElementById('yol-hedef').value;
      const yon = document.getElementById('yol-yon').value;
      const sonuc = document.getElementById('yol-sonuc');
      vurguTemizle();
      a1.value = '4'; a2.value = '10'; asirFiltresi();
      let yol = enKisaYol(bas, hedef, yon);
      if (!yol && yon === 'asagi') yol = enKisaYol(hedef, bas, 'asagi');
      if (!yol) { sonuc.textContent = 'Bu iki âlim arasında atlastaki bağlarla bir yol bulunamadı.'; panel.hidden = true; return; }
      sonuc.textContent = `${yol.length - 1} adımlık yol bulundu.`;
      const ids = new Set(yol);
      let kume = cy.collection();
      yol.forEach((id, i) => {
        kume = kume.union(cy.getElementById(id));
        if (i) kume = kume.union(cy.getElementById(yol[i - 1]).edgesWith(cy.getElementById(id)));
      });
      cy.elements('.alim, .bag').not(kume).addClass('soluk');
      kume.addClass('yol');
      panel.innerHTML = `<button class="kapat" type="button" aria-label="Kapat">×</button><h3>Yol</h3>
        <ol>${yol.map((id) => `<li>${alimLink(id)} <span class="soluk" style="font-size:.78rem">${esc(bolge.get(alim.get(id).b).isim)}</span></li>`).join('')}</ol>`;
      panel.hidden = false;
      panel.querySelector('.kapat').addEventListener('click', () => { panel.hidden = true; vurguTemizle(); });
      cy.animate({ fit: { eles: kume, padding: 60 } }, { duration: 400 });
      if (ids.size === 0) panel.hidden = true;
    });

    // Tema değişince renkleri yenile
    const temaYenile = () => {
      cy.style(grafStili(false));
      cy.nodes('.alim').forEach((n) => n.data('renk', bolgeRengi(n.data('bolge'))));
      bolgeler.forEach((b) => cy.getElementById('b-' + b.id).data('renk', bolgeRengi(b.id)));
    };
    document.addEventListener('tema-degisti', temaYenile);
    const eski = temizle;
    temizle = () => { document.removeEventListener('tema-degisti', temaYenile); eski(); };

    const k = q.get('kisi');
    if (k && alim.has(k)) setTimeout(() => sec(k, true), 50);
    return 'Bağlantı ağı';
  }

  /* ═════════════ ASIRLAR ═════════════ */
  function asirlarSayfasi() {
    main.innerHTML = `
      <h1>Asırlar</h1>
      <p class="soluk" style="max-width:52rem">İsnad Atlası'nda sahâbe, tâbiîn ve etbâu't-tâbiîn diye ayrılan kuşaklar, burada hicrî yüzyıllara göre tabakalanır. Her âlim vefat ettiği asra yerleştirilir; asrın içinde bölge bölge, vefat sırasıyla dizilir.</p>
      ${ASIRLAR.map((n) => {
        const liste = alimler.filter((a) => a.asir === n);
        const ic = kenarlar.filter((k) => alim.get(k.talebe).asir === n);
        return `<section class="asir-bolum" id="asir-${n}">
          <h2>${n}. asır <small>H. ${ASIR_BILGI[n].h} · M. ${ASIR_BILGI[n].m} · ${liste.length} âlim · ${ic.length} hoca-talebe bağı</small></h2>
          ${metinHtml((BM.asir || {})[n] || ASIR_BILGI[n].aciklama)}
          ${dagilimSeridi(liste)}
          <div class="bolge-satirlari">
            ${bolgeler.map((b) => {
              const bl = liste.filter((a) => a.b === b.id);
              if (!bl.length) return '';
              const g = gelisme(b.id, n);
              return `<div class="bolge-satiri" style="${renkStil(b)}"><div class="ad"><span class="nokta"></span><a href="#/bolge/${b.id}">${esc(b.isim)}</a></div>
                <div><div class="isim-cipleri">${bl.map((a) => `<a href="#/alim/${a.id}">${esc(a.isim)} <span>${a.v}</span></a>`).join('')}</div>
                ${g ? `<details class="gelisme-ac"><summary>Bu asırda ${esc(b.isim)}</summary>${metinHtml(g)}</details>` : ''}</div></div>`;
            }).join('')}
          </div>
        </section>`;
      }).join('')}`;
    return 'Asırlar';
  }

  /* ═════════════ BÖLGELER ═════════════ */
  function akisTablosu() {
    const m = new Map();
    for (const k of kenarlar) {
      const anahtar = alim.get(k.hoca).b + '>' + alim.get(k.talebe).b;
      m.set(anahtar, (m.get(anahtar) || 0) + 1);
    }
    return `<div class="tablo-kap"><table class="akis">
      <caption class="gizli-metin">Satırlar hocanın, sütunlar talebenin bölgesi</caption>
      <thead><tr><th scope="col">Hoca ↓ / Talebe →</th>${bolgeler.map((b) => `<th scope="col" title="${esc(b.isim)}"><span class="etiket" style="${renkStil(b)}"><span class="nokta"></span>${esc(b.isim.split(' ')[0])}</span></th>`).join('')}</tr></thead>
      <tbody>${bolgeler.map((r) => `<tr><th scope="row">${esc(r.isim)}</th>${bolgeler.map((c) => {
        const n = m.get(r.id + '>' + c.id) || 0;
        return `<td class="${n ? '' : 'sifir'} ${r.id === c.id ? 'ayni' : ''}">${n || '·'}</td>`;
      }).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function bolgelerSayfasi() {
    main.innerHTML = `
      <h1>Bölgeler</h1>
      <p class="soluk" style="max-width:52rem">İslâm dünyasının hadis merkezleri, batıdan doğuya. Kartlardaki çubuklar 4.–10. asırlarda o bölgede vefat eden âlimlerin sayısını gösterir.</p>
      <div class="izgara">${bolgeler.map(bolgeKarti).join('')}</div>
      <h2>Bölgeler arası ilim akışı</h2>
      <p class="soluk">Her hücre, satırdaki bölgede yaşamış bir hocadan sütundaki bölgede yaşamış bir talebeye giden bağ sayısıdır. Köşegen, bölge içi aktarımdır.</p>
      ${akisTablosu()}`;
    return 'Bölgeler';
  }

  function bolgeSayfasi(b) {
    const liste = alimler.filter((a) => a.b === b.id);
    const ugrayan = alimler.filter((a) => a.b !== b.id && a.db.includes(b.id));
    const gelen = kenarlar.filter((k) => alim.get(k.talebe).b === b.id && alim.get(k.hoca).b !== b.id);
    const giden = kenarlar.filter((k) => alim.get(k.hoca).b === b.id && alim.get(k.talebe).b !== b.id);
    const akisListe = (l, tur) => !l.length ? '<p class="bos">Kayıt yok.</p>' : `<ul class="bag-liste">${l.map((k) => {
      const dis = tur === 'gelen' ? k.hoca : k.talebe;
      const ic = tur === 'gelen' ? k.talebe : k.hoca;
      return `<li><div class="ust-satir">${alimLink(k.hoca)} <span class="soluk">→</span> ${alimLink(k.talebe)} ${bolgeEtiketi(alim.get(dis).b, false)}</div></li>`;
    }).join('')}</ul>`;
    main.innerHTML = `
      <p class="ust-baslik"><a href="#/bolgeler">Bölgeler</a></p>
      <h1 style="${renkStil(b)};display:flex;align-items:center;gap:10px"><span class="nokta" style="width:14px;height:14px"></span>${esc(b.isim)}</h1>
      <p class="soluk">${esc(b.sehirler)}</p>
      <div style="max-width:52rem">${metinHtml((BM.tanitim || {})[b.id] || b.aciklama, 'ozet-metin')}</div>
      ${(BM.ilk || {})[b.id] ? `<h2>İlk üç asır (1.–3. asır)</h2>
        <p class="soluk" style="font-size:.88rem;margin-top:-6px">Atlasın başladığı 4. asırdan önceki dönem. Burada adı geçen âlimler atlasa dahil değildir.</p>
        <div class="ilk-asirlar" style="max-width:52rem">${[].concat((BM.ilk || {})[b.id]).map((x) => metinHtml(x)).join('')}</div>` : ''}
      <p><a class="dugme" href="#/ag" id="ag-bolgeye">Ağda bu bölgeye odaklan</a> <a class="dugme" href="#/alimler?bolge=${b.id}">Âlim listesi</a></p>
      <h2>Asır asır</h2>
      <div class="zaman-cizelgesi" style="${renkStil(b)}">
      ${ASIRLAR.map((n) => {
        const al = liste.filter((a) => a.asir === n);
        const g = gelisme(b.id, n);
        return `<section class="zc-asir" id="bolge-asir-${n}">
          <div class="zc-isaret"><span>${n}.</span></div>
          <div class="zc-govde">
            <h3>${n}. asır <small class="soluk">H. ${ASIR_BILGI[n].h} · M. ${ASIR_BILGI[n].m}${al.length ? ` · ${al.length} âlim` : ''}</small></h3>
            ${g ? metinHtml(g, 'gelisme') : ''}
            ${al.length ? `<div class="izgara">${al.map(alimKarti).join('')}</div>` : '<p class="bos">Atlasta bu asırdan bu bölgeye ait âlim yok.</p>'}
          </div>
        </section>`;
      }).join('')}
      </div>
      ${ugrayan.length ? `<h2>Bu bölgede de bulunanlar</h2><div class="isim-cipleri">${ugrayan.map((a) => `<a href="#/alim/${a.id}">${esc(a.isim)} <span>${a.v} · ${esc(bolge.get(a.b).isim)}</span></a>`).join('')}</div>` : ''}
      <h2>İlim akışı</h2>
      <div class="iki-sutun">
        <div><h3>Dışarıdan gelen (${gelen.length})</h3><p class="soluk" style="font-size:.85rem;margin-top:0">Başka bölgedeki hocalardan bu bölgedeki talebelere.</p>${akisListe(gelen, 'gelen')}</div>
        <div><h3>Dışarıya giden (${giden.length})</h3><p class="soluk" style="font-size:.85rem;margin-top:0">Bu bölgedeki hocalardan başka bölgedeki talebelere.</p>${akisListe(giden, 'giden')}</div>
      </div>`;
    main.querySelector('#ag-bolgeye').addEventListener('click', (e) => {
      e.preventDefault();
      location.hash = '#/ag';
      setTimeout(() => { const s = document.getElementById('ag-bolge'); if (s) { s.value = b.id; s.dispatchEvent(new Event('change')); } }, 80);
    });
    return b.isim;
  }

  /* ═════════════ HAKKINDA ═════════════ */
  function hakkindaSayfasi() {
    const kontrollu = alimler.filter((a) => a.dog);
    const kaynakli = kenarlar.filter((k) => k.kaynak).length;
    main.innerHTML = `<div class="dar">
      <h1>Yöntem ve veri</h1>
      <p>Muhaddisler Atlası, <a href="https://ibrahimyildirm03.github.io/isnad-atlasi/" target="_blank" rel="noopener">İsnad Atlası</a>'nın devamı olarak hicrî 4. asrın başından 10. asrın sonuna kadar (301–1000) vefat etmiş hadis âlimlerini kapsar.</p>
      <h2>Tabakalar</h2>
      <p>İsnad Atlası sahâbe, tâbiîn, etbâu't-tâbiîn gibi kuşaklarla çalışır. Bu dönemde böyle adlandırılmış kuşaklar bulunmadığı için tabaka olarak hicrî yüzyıl esas alınmıştır. Bir âlim, vefat yılına göre asrına yerleştirilir: 301–400 arası 4. asır, 901–1000 arası 10. asır.</p>
      <h2>Bölgeler</h2>
      <p>Her âlimin bir ana bölgesi (ömrünün ve hocalığının büyük kısmını geçirdiği yer) ve varsa diğer bölgeleri vardır. Ağda âlim ana bölgesinin sütununda gösterilir.</p>
      <h2>Bağlar</h2>
      <p>Talebeler ayrıca yazılmaz; her âlimin hoca listesinden çıkarılır. Yalnız bu atlasta kaydı olan âlimler arasındaki bağlar gösterilir. Aracılı bağlarda (kesik çizgi) aradaki halka listede yoktur. Kaynaklarda tartışmalı olan bağlar "ihtilaflı" olarak işaretlenir.</p>
      <h2>Kaynaklar</h2>
      <p>Biyografiler dört katmandan derlenmiştir:</p>
      <ul>
        <li><b>TDV İslâm Ansiklopedisi</b>: her âlimin maddesi (bağlantılı); doğum, tahsil, rıhle ve hocalar için ana kaynak.</li>
        <li><b>Süyûtî, <i>Tabakātü'l-huffâz</i></b>: 4.–9. asır hâfızlarının çoğu için madde metni ve sayfa (Şâmile bağlantısıyla).</li>
        <li><b>Zehebî, <i>Siyeru a'lâmi'n-nübelâ</i></b>: Sahîhayn râvileri ve 4.–7. asırda Süyûtî'de bulunmayan âlimler için.</li>
        <li><b>İbn Hacer, <i>ed-Dürerü'l-kâmine</i></b> (8. asır) ve <b>Sehâvî, <i>ed-Dav'ü'l-lâmi'</i></b> (9. asır).</li>
      </ul>
      <p>Arapça tabakāt metinleri klasördeki <b>OpenITI</b> (2025.1.9) külliyatından okunmuş; OpenITI'deki basılı sayfa işaretleri shamela.ws sayfalarıyla eşleştirilerek her maddeye doğrudan Şâmile bağlantısı verilmiştir. Âlim sayfalarındaki "OpenITI külliyatındaki eserleri" listesi OpenITI meta veri tablosundan üretilmiştir.</p>
      <h2>Hangi bilgi nereden?</h2>
      <ul>
        <li><b>"Hayatı" paragrafları:</b> yalnızca kaynak metinlerinden (DİA maddesi, Süyûtî, Zehebî, İbn Hacer, Sehâvî) alınan bilgilerle yazılmıştır. Her paragrafın sonunda dayandığı kaynak bağlantısıyla gösterilir.</li>
        <li><b>Kısa özet:</b> yalnızca kaynaklı paragraflarda geçen bilgilerden kurulmuştur; sonunda dayandığı kaynak gösterilir.</li>
        <li><b>"Başlıca eserleri" listesi:</b> atlasın kendi derlemesidir, tek tek kaynakla eşleştirilmemiştir.</li>
        <li><b>Hoca-talebe bağları:</b> her bağın altında kaynağı yazılıdır. Bağların çoğu DİA maddelerinin "ilişkili maddeler" sayfalarındaki <i>Hocası</i> / <i>Öğrencisi</i> kayıtlarından ve madde metinlerinden alınmıştır. DİA'nın bu etiketleri bazen ters düştüğü için (ör. bir talebenin "hocası" diye etiketlenmesi), hocanın talebeden önce vefat etmediği ilişkiler alınmamıştır. Kaynağı bulunamayan bağlar "kontrol bekliyor" notuyla işaretlidir.</li>
        <li><b>Atlasta bulunmayan hoca ve talebeler:</b> DİA'nın ilişkili maddeler kayıtlarından alınmıştır; her isim kendi DİA maddesine bağlanır, vefat yılı o maddeden alınmıştır.</li>
        <li><b>Şâmile'deki eserleri:</b> el-Mektebetü'ş-şâmile'deki müellif sayfasından alınmıştır. Müellif sayfası, âlimin OpenITI'deki eserlerinin Şâmile nüshalarından ya da Şâmile'nin müellif dizininden bulunmuştur.</li>
        <li><b>Bölge tanıtımları, ilk üç asır, asır asır gelişmeler ve asır açıklamaları:</b> her metnin altında dayandığı DİA maddeleri (şehir, bölge ya da âlim maddeleri) ve bilgileri kullanılan âlimlerin kaynaklı biyografileri gösterilir. Kaynakta bulunamayan bilgiler metinlere alınmamıştır.</li>
      </ul>
      <h2>Kaynak durumu</h2>
      <div class="uyari-serit">
        ${alimler.length} âlimin ${alimler.filter((a) => (KAYNAKLAR[a.id] || []).length).length} tanesinin biyografisi kaynaklara bağlanmıştır; ${alimler.filter((a) => a.bioP).length} âlim için paragraf paragraf kaynaklı biyografi vardır.
        Toplam ${kenarlar.length} hoca-talebe bağının ${kaynakli} tanesinde kaynak gösterilmiştir. Kaynağı bulunamayan ${kenarlar.length - kaynakli} bağ sayfalarda "kontrol bekliyor" notuyla işaretlidir.
        Atlasta bulunmayan ${[...disHoca.values()].reduce((s, l) => s + l.length, 0)} hoca ve ${[...disTalebe.values()].reduce((s, l) => s + l.length, 0)} talebe kaydı DİA maddelerine bağlanmıştır; ${Object.keys(window.SAMILE || {}).length} âlimin eserleri Şâmile'ye bağlanmıştır.
      </div>
      ${hatalar.length ? `<div class="uyari-serit"><b>Veri hataları:</b><br>${hatalar.map(esc).join('<br>')}</div>` : ''}
    </div>`;
    return 'Yöntem ve veri';
  }

  function bulunamadi() {
    main.innerHTML = `<h1>Sayfa bulunamadı</h1><p><a href="#/">Ana sayfaya dön</a></p>`;
    return 'Bulunamadı';
  }

  /* ═════════════ ARAMA ═════════════ */
  const pencere = document.querySelector('.ara-pencere');
  const araGiris = pencere.querySelector('input');
  const araListe = pencere.querySelector('.ara-sonuc');
  let araSecili = 0;
  const araIndeks = alimler.map((a) => ({ a, t: sade([a.isim, a.tam, a.ar].join(' ')) }));
  function araCiz() {
    const t = sade(araGiris.value.trim());
    const sonuc = (t ? araIndeks.filter((x) => x.t.includes(t)) : araIndeks).slice(0, 40);
    araSecili = Math.min(araSecili, Math.max(0, sonuc.length - 1));
    araListe.innerHTML = sonuc.length
      ? sonuc.map((x, i) => `<li role="option" aria-selected="${i === araSecili}"><a href="#/alim/${x.a.id}"><span>${esc(x.a.isim)}</span><span class="soluk">${tarih(x.a)} · ${esc(bolge.get(x.a.b).isim)} · ${x.a.asir}. asır</span></a></li>`).join('')
      : '<li class="bos" style="padding:8px 10px">Sonuç yok.</li>';
  }
  function araAc() { araGiris.value = ''; araSecili = 0; araCiz(); pencere.showModal(); araGiris.focus(); }
  document.querySelector('[data-ara-ac]').addEventListener('click', araAc);
  araGiris.addEventListener('input', () => { araSecili = 0; araCiz(); });
  araGiris.addEventListener('keydown', (e) => {
    const n = araListe.querySelectorAll('li[role=option]').length;
    if (e.key === 'ArrowDown') { araSecili = Math.min(n - 1, araSecili + 1); araCiz(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { araSecili = Math.max(0, araSecili - 1); araCiz(); e.preventDefault(); }
    else if (e.key === 'Enter') { const a = araListe.querySelector('li[aria-selected=true] a'); if (a) { location.hash = a.getAttribute('href'); pencere.close(); } }
  });
  araListe.addEventListener('click', (e) => { if (e.target.closest('a')) pencere.close(); });
  pencere.addEventListener('click', (e) => { if (e.target === pencere) pencere.close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !pencere.open && !/input|select|textarea/i.test(document.activeElement?.tagName || '')) { e.preventDefault(); araAc(); }
  });

  /* ═════════════ TEMA ═════════════ */
  document.querySelector('.tema').addEventListener('click', () => {
    const yeni = koyuMu() ? 'light' : 'dark';
    document.documentElement.dataset.theme = yeni;
    try { localStorage.setItem('tema', yeni); } catch (e) {}
    document.dispatchEvent(new Event('tema-degisti'));
    if (/^#\/alim\//.test(location.hash)) rota();
  });

  rota();
})();
