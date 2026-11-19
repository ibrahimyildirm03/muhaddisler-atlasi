# Muhaddisler Atlası

**Hicrî 4. asrın başından 10. asrın sonuna (301–1000 / 913–1592) hadis âlimleri: bölge bölge, asır asır, hoca-talebe bağlarıyla.**

[İsnad Atlası](https://ibrahimyildirm03.github.io/isnad-atlasi/)'nın devamı. Orada sahâbe, tâbiîn gibi kuşaklar kullanılır; burada tabaka olarak hicrî yüzyıllar kullanılır. Her âlim vefat yılına göre asrına yerleştirilir.

## İçinde neler var

| | |
|---|---|
| **165 âlim** | Nesâî'den (ö. 303) Muhammed Tâhir el-Fettenî'ye (ö. 986); hepsinin biyografisi kaynaklı; 30'u Süyûtî'nin *Tabakātü'l-huffâz*'ından seçilerek eklendi |
| **Genişletilmiş biyografiler** | TDV İslâm Ansiklopedisi maddeleri ile Süyûtî, Zehebî (*Siyer*), İbn Hacer (*ed-Dürer*) ve Sehâvî'den (*ed-Dav'*) derlendi |
| **279 hoca-talebe bağı** | 143'ünde bağın kendi kaynağı (çoğu Şâmile sayfasıyla) gösterilir |
| **OpenITI eserleri** | Her müellifin OpenITI 2025.1.9 külliyatındaki eserleri, depo bağlantılarıyla |
| **11 bölge × 7 asır** | Her bölgenin asır asır hadis faaliyeti |

## Sayfalar

- **Ana sayfa:** Sahîh-i Buhârî, Sahîh-i Müslim ve Zehebî halkası rivayet zincirleri; asırlar ve bölgeler özeti.
- **Âlimler:** Asırlara göre gruplanmış liste; isim, asır ve bölge süzgeçleri.
- **Âlim sayfası:** Tam isim, Arapça yazılış, tarihler, eserler, hocalar ve talebeler (not ve kaynaklarıyla), küçük ağ, kuşak kuşak ilim silsilesi.
- **Asırlar:** Her asır için açıklama, bölge dağılımı ve bölge bölge âlimler.
- **Bölgeler:** Her bölgenin asırlara göre âlim sayısı, bölgeler arası ilim akışı tablosu; bölge sayfasında dışarıdan gelen ve dışarıya giden bağlar.
- **Bağlantı ağı:** Her sütun bir bölge, dikey eksen vefat yılı. Bölgeye ya da kişiye odaklanma, asır aralığı süzgeci, doğrudan/zincir vurgusu, serbest yerleşim ve iki âlim arasında yol bulma.

## Çalıştırma

Derleme gerekmez; site düz HTML, CSS ve JavaScript'ten oluşur (ağ çizimi için Cytoscape cdnjs'ten yüklenir, internet gerekir). Yerelde denemek için klasörü herhangi bir statik sunucuyla açın.

GitHub Pages'te yayımlamak için klasörün içeriğini bir depoya yükleyip *Settings → Pages* bölümünden `main` dalının kökünü seçin.

## Veri

| Dosya | İçerik |
|---|---|
| `veri/alimler.js` | Bütün âlimler. Alanların açıklaması dosyanın başındadır. |
| `veri/biyografiler.js` | Kaynaklardan çıkan ek hoca-talebe bağları (eski biyografi metinleri yedek olarak durur). |
| `veri/kaynakli-biyografiler.js` | Sitede gösterilen biyografiler: her paragraf `[metin, 'dia+suy']` biçiminde, dayandığı kaynak anahtarıyla (dia, suy, siyer, durer, dav, kay). |
| `veri/kaynakli-ozetler.js` | Âlimlerin kısa özetleri; yalnız kaynaklı paragraflardaki bilgilerden kuruldu, her biri kaynak anahtarıyla. |
| `veri/bolgeler.js` | Bölgeler, renkleri ve ağdaki sütun sırası (batıdan doğuya). |
| `veri/gelismeler.js` | Her bölgenin 4.–10. asırlardaki hadis faaliyeti. |
| `veri/kaynaklar.js` | *(betikle üretildi)* DİA maddeleri ve tabakāt kitaplarındaki Şâmile sayfaları. |
| `veri/openiti.js` | *(betikle üretildi)* OpenITI meta verisinden müelliflerin eserleri. |

Şâmile sayfa bağlantıları şöyle üretildi: tabakāt kitaplarının OpenITI metinlerinde her maddenin basılı cilt/sayfası (`PageV..P...` işaretleri) okundu, bu cilt/sayfa shamela.ws'de sayfa başlıklarından ikili aramayla Şâmile sayfa kimliğine çevrildi. Süyûtî'nin *Tabakātü'l-huffâz*'ında Şâmile sayfa kimliği basılı sayfadan 10 eksiktir.

Talebeler ayrıca yazılmaz; her âlimin `h` (hocaları) listesinden çıkarılır. Örnek:

```js
{ id: 'ibn-kesir', isim: 'İbn Kesîr', tam: '…', ar: 'ابن كثير',
  d: 701, v: 774, vm: 1373, b: 'sam',
  ozet: '…', eser: ['el-Bidâye ve’n-nihâye'],
  h: [
    'ibn-teymiyye',                                   // yalnız kimlik
    { k: 'zehebi', kaynak: { ad: '…', url: '…' } },   // kaynaklı bağ
    { k: 'mizzi', not: 'Hocası ve kayınpederi.' },
    // araci: 'Listede olmayan ara halka'  → kesik çizgi
    // ih: true                             → ihtilaflı bağ
  ],
  dog: 'kismi' }                                      // true | 'kismi' | yok (kontrol bekliyor)
```

Olmayan bir kişiye ya da bölgeye bağ verilirse tarayıcı konsolunda ve *Yöntem ve veri* sayfasında hata gösterilir.

## Kaynak durumu

Biyografi paragraflarının ve kısa özetlerin her birinin sonunda dayandığı kaynak gösterilir. Bağın kendi kaynağı verilmeyen hoca-talebe bağları sitede "kontrol bekliyor" notuyla işaretlidir ve tek tek kontrol edilmelidir. "Başlıca eserleri" listeleri, bölge tanıtımları ve asır asır gelişme metinleri atlastaki biyografilerden derlenmiştir, ayrıca kaynakla kontrol edilmemiştir. Kaynaklar arasında tarih farkı bulunan yerler (ör. Ebü'l-Leys es-Semerkandî'nin vefatı) âlim sayfasında ayrıca belirtilir.
