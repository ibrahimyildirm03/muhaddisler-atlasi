/*
 * Muhaddisler Atlası — genişletilmiş biyografiler
 *
 * Her kayıt: { bio: 'paragraf\n\nparagraf', h: [ek hoca bağları], not: 'kaynaklar arası fark' }
 * bio metinleri TDV İslâm Ansiklopedisi maddeleriyle Süyûtî'nin Tabakātü'l-huffâz'ı,
 * Zehebî'nin Siyer'i, İbn Hacer'in ed-Dürerü'l-kâmine'si ve Sehâvî'nin ed-Dav'ü'l-lâmi'inden
 * (OpenITI metinleri üzerinden) özetlenmiştir. Sayfa bağlantıları veri/kaynaklar.js dosyasındadır.
 * h içindeki bağlar alimler.js'teki hoca listelerine eklenir; kaynak verilmeyenler kişinin
 * kaynaklar listesindeki (DİA / tabakāt) maddeye dayanır.
 */
window.BIYO = {};
(function (B) {
  const DIA = (slug, ad) => ({ ad: `TDV İslâm Ansiklopedisi, "${ad}"`, url: `https://islamansiklopedisi.org.tr/${slug}` });
  const SUY = (s) => ({ ad: `Süyûtî, Tabakātü'l-huffâz, s. ${s}`, url: `https://shamela.ws/book/5823/${s - 10}` });

  /* ───────── 4. asır ───────── */
  B['nesai'] = {
    bio: "215'te (830) Horasan'daki Nesâ'da doğdu; on beş yaşında hadis tahsiline başladı ve 230'da en çok faydalandığı hocası Kuteybe b. Saîd'in yanına gitti. Horasan, Irak, Hicaz, Şam ve Mısır'ı dolaşarak hadis topladı, sonunda Mısır'a yerleşti.\n\nSüyûtî onu \"şeyhü'l-İslâm, hâfızların önde gelenlerinden\" diye anar; Hâkim, Nesâî'nin \"Mısır şeyhlerinin en fakihi, sahih ile sakîmi ve ricâli en iyi bilen\" kişi olduğunu söyler. Zehebî ise onu Müslim'den daha hâfız sayar. Talebeleri arasında İbnü's-Sünnî, Tahâvî, Ebû Ali en-Nîsâbûrî, İbn Adî, Ukaylî ve İbn Yûnus vardır. 303'te Remle'de (bir rivayete göre Mekke'de) vefat etti.",
  };
  B['ebu-yala'] = {
    bio: "3 Şevval 210'da (826) Musul'da muhaddis bir ailede doğdu; on beş yaşında Bağdat, Basra ve Ahvaz'a giderek Yahyâ b. Maîn, Ali b. el-Medînî, Ebû Hayseme gibi bir önceki tabakanın imamlarından hadis aldı.\n\nUzun ömrü sayesinde \"Cezîre muhaddisi\" olarak 4. asır hâfızlarının âlî isnad kaynağı oldu. Süyûtî'nin naklettiğine göre İsmâil b. Muhammed: \"Müsnedler nehir gibidir, Ebû Ya'lâ'nın Müsned'i ise nehirlerin döküldüğü deniz.\" İbn Hibbân, Ebû Ali en-Nîsâbûrî ve İsmâîlî ondan rivayet etti. 307'de vefat etti.",
  };
  B['taberi'] = {
    bio: "224 sonu ya da 225 başında (839) Taberistan'ın merkezi Âmül'de doğdu. On iki yaşında Rey'e giderek İbn Humeyd er-Râzî'den hadis aldı; ardından Bağdat, Basra, Kûfe, Şam ve Mısır'da okuyup Bağdat'a yerleşti. Hiç evlenmedi.\n\nHatîb el-Bağdâdî onu \"sözüyle hükmedilen, görüşüne başvurulan\" bir imam olarak tanıtır; tefsirde, sünnetin sahih ve zayıfını ayırmakta, sahâbe ve tâbiîn görüşlerinde ve tarihte otoriteydi. İbn Huzeyme \"yeryüzünde ondan âlimini bilmiyorum\" demiştir. Önce Şâfiî mezhebini yaydı, sonra kendi içtihadıyla Cerîrî mezhebini kurdu. 310'da Bağdat'ta vefat etti.",
  };
  B['ibn-huzeyme'] = {
    bio: "Safer 223'te (838) Nîşâbur'da doğdu. Küçükken İshak b. Râhûye'den dinlediyse de yaşı küçük olduğu için ondan rivayet etmedi. Kuteybe b. Saîd'e gitmek üzere yola çıktığında Merv'de onun ölüm haberini aldı (240). Bağdat, Rey, Cürcân, Şam, Basra, Kûfe, Mısır ve Vâsıt'ı dolaştı.\n\nHorasan'da hıfz ve imâmetin kendisinde son bulduğu kabul edilir; \"imâmü'l-eimme\" lakabıyla anılır. Süyûtî, Müzenî'nin bir fıkıh tartışmasında \"hadis söz konusu olunca o tartışır, çünkü bu konuyu benden iyi bilir\" dediğini nakleder. İbn Hibbân, Ebû Ali en-Nîsâbûrî ve Ebû Ahmed el-Hâkim talebelerindendir. 311'de vefat etti.",
  };
  B['ebu-avane'] = {
    bio: "230'dan sonra Nîşâbur asıllı, İsferâyin'de yaşayan bir ailede doğdu. Horasan, Irak, İran, Şam, Mısır, Hicaz ve Yemen'i dolaşarak Müslim b. Haccâc, Muhammed b. Yahyâ ez-Zühlî, Ebû Zür'a ve Ebû Hâtim er-Râzî'den hadis aldı.\n\nŞâfiî'nin kitaplarını Rebî' ve Müzenî'den okudu; Hâkim'e göre Şâfiî mezhebini İsferâyin'e ilk getiren odur. Müslim'in Sahîh'i üzerine yazdığı ve ek rivayetler içeren el-Müsnedü's-sahîh'i (Müstahrec) en meşhur müstahreclerdendir. Ebû Ali en-Nîsâbûrî, İbn Adî ve Taberânî ondan rivayet etti. 316'da vefat etti.",
  };
  B['ibn-ebi-davud'] = {
    bio: "230'da (844) Sicistan'da doğdu, Nîşâbur'da büyüdü. İlk hadis dersini 241'de Tûs'ta Muhammed b. Eslem'den aldı; babası Ebû Dâvûd ile birlikte Horasan'dan Mısır'a kadar bütün ilim merkezlerini dolaştı ve sonunda Bağdat'a yerleşti.\n\nSüyûtî, Kûfe'de bir dirhemle aldığı baklayı yerken Eşec'den otuz bin hadis yazdığını, İsfahan'da kitapsız olarak ezberinden otuz bin hadis imlâ ettiğini nakleder. Dârekutnî, İbn Şâhîn ve Ebû Ahmed el-Hâkim talebelerindendir. 316'da Bağdat'ta vefat etti.",
  };
  B['begavi-ebulkasim'] = {
    bio: "1 Ramazan 214'te (829) Bağdat'ta doğdu; ailesi Herat yakınlarındaki Bağşûr'dan olduğu için Begavî diye anıldı. Dedesi Ahmed b. Menî' ve amcası Ali b. Abdülazîz'in ilgisiyle on bir yaşında hadis meclislerine girdi; Ali b. Ca'd, Ali b. el-Medînî ve Ahmed b. Hanbel dahil 300'ü aşkın hocadan dinledi.\n\nZehebî onu \"müsnidü'l-asr\" diye niteler. Yüz yaşını geçen ömrüyle 3. asrın büyük hocalarını 4. asra bağladı: İbn Sâid, İsmâîlî, İbn Şâhîn, Dârekutnî, İbn Kāni', Taberânî ve İbn Hibbân ondan hadis okudu. 317'de vefat etti.",
  };
  B['firebri'] = {
    bio: "231'de (845) Ceyhun ile Buhara arasındaki Firebr köyünde doğdu. Sahîh-i Buhârî'yi müellifinden 248'de ve 252'de olmak üzere iki kez dinledi; ayrıca Ali b. Haşrem'den hadis aldı. Zehebî, Kuteybe'den dinlediğini söyleyenlerin yanıldığını belirtir.\n\nFirebrî'yi ilim dünyasına tanıtan, Buhârî'nin el-Câmiu's-sahîh'inin aslına sahip olmasıdır. Ebû Zeyd el-Mervezî, İbnü's-Seken, Küşmîhenî, Hammûye es-Serahsî ve Müstemlî ondan Sahîh'i rivayet etti; bugüne ulaşan nüshaların neredeyse tamamı bu râvilere dayanır. 320'de vefat etti.",
  };
  B['tahavi'] = {
    bio: "10 Rebîülevvel 239'da (853) Mısır'ın Saîd bölgesindeki Tahâ köyünde doğdu. Dayısı Müzenî'nin yanında Şâfiî fıkhını okudu, sonra Kādî Ebû Hâzim'in etkisiyle Hanefî mezhebine geçti.\n\nSüyûtî onu \"bedî' eserlerin sahibi\" diye anar ve Hanefîlerin riyasetinin onda son bulduğunu söyler. Yûnus b. Abdüla'lâ ve Hârûn b. Saîd el-Eylî'den dinledi; Taberânî ondan rivayet etti. Şerhu Meâni'l-âsâr ve Şerhu Müşkili'l-âsâr ile ihtilaflı rivayetleri fıkhî açıdan uzlaştıran bir yöntem geliştirdi. 321'de Kahire'de vefat etti.",
  };
  B['ukayli'] = {
    bio: "Mekke ve Medine'de yaşadı; birkaç kez Mısır'a ve Rey'e ilim yolculuğu yaptı. Hocaları arasında dedesi Yezîd b. Muhammed el-Ukaylî, Abdullah b. Ahmed b. Hanbel ve Nesâî vardır.\n\nSüyûtî'nin naklettiğine göre talebeleri onu sınamak için rivayetlere ekleme ve eksiltme yaparak okumuş, Ukaylî bunu fark edip kitabı ezberinden düzeltmiş; bunun üzerine \"insanların en hâfızı\" olduğuna karar vermişlerdir. Zayıf râviler hakkındaki ed-Duafâü'l-kebîr'i cerh literatürünün temel eserlerindendir. Rebîülevvel 322'de (934) Mekke'de vefat etti.",
    h: [{ k: 'nesai', kaynak: DIA('ukayli', 'Ukaylî') }],
  };
  B['ibn-ebi-hatim'] = {
    bio: "240'ta (854) Rey'de doğdu. Babası Ebû Hâtim er-Râzî'nin teşvikiyle önce Kur'an'ı ezberledi, sonra babasından ve Ebû Zür'a er-Râzî'den hadis aldı. 255'te babasıyla, 260'ta tek başına uzun rıhlelere çıktı.\n\nHalîlî'ye göre babasının ve Ebû Zür'a'nın ilmini aldı; ricâl bilgisinde deniz, sika, hâfız ve zâhid biriydi, ebdâldan sayılırdı. Babası ve Ebû Zür'a'nın râviler hakkındaki hükümlerini topladığı el-Cerh ve't-ta'dîl, cerh ve ta'dîl ilminin temel eseridir. 327'de vefat etti.",
  };
  B['kasim-b-asbag'] = {
    bio: "20 Zilhicce 244'te (859) Kurtuba'nın Beyyâne köyünde doğdu. Kurtuba'da Bakī b. Mahled, İbn Vaddâh ve Muhammed b. Abdüsselâm el-Huşenî'den okudu; 274'te doğuya giderek Mekke, Bağdat, Kûfe, Kahire ve Kayrevan'da hadis aldı. İbn Ebû Hayseme'nin Târîh'ini bizzat müellifinden yazdı.\n\nSüyûtî onu \"Endülüs muhaddisi\" diye anar; Ebû Dâvûd'un Sünen'i tarzında bir Sünen, Mâlik'in Müsnedi ve Müslim'in Sahîh'i üslûbunda bir Sahîh yazdığını söyler. Yaşlanıp unutkanlığı artınca ilmini korumak için rivayeti bıraktı. Cemâziyelevvel 340'ta vefat etti.",
  };
  B['ibnul-arabi-mekki'] = {
    bio: "Basra'da doğdu, Bağdat'ta fıkıh ve hadis okudu. Cüneyd-i Bağdâdî ve Ebü'l-Hüseyin en-Nûrî ile tanışması onu tasavvufa yöneltti.\n\nHayatının son yıllarını Mekke'de geçirdi ve \"Şeyhü'l-Harem\" diye anıldı. Ebû Dâvûd ve Hasan ez-Za'ferânî'den dinledi, Sünen-i Ebû Dâvûd'un önemli râvilerinden oldu; hocaları için bir Mu'cem derledi. Süyûtî onu \"sika, sebt, ârif, âbid, rabbânî\" diye niteler. Hattâbî Sünen'i ondan aldı. Zilkade 340'ta Mekke'de vefat etti.",
  };
  B['esam'] = {
    bio: "247'de (861) Nîşâbur'da doğdu. Muhaddis babası Ya'kūb b. Yûsuf onu 265'te yanına alarak İsfahan, Mekke, Bağdat, Mısır, Dımaşk ve Kûfe'yi dolaştırdı; büyük hocaların kitaplarını bizzat onlardan dinlemesini sağladı.\n\nGençliğinde sağır olduğu için \"Esam\" lakabıyla anıldı. Süyûtî'ye göre yetmiş altı yıl hadis okuttu ve \"tartışmasız asrının muhaddisi\" oldu; Hâkim ve sayısız kişi ondan dinledi, Ebû Nuaym ondan icazetle rivayette tek kaldı. Rebîülâhir 346'da vefat etti.",
  };
  B['ebu-ali-nisaburi'] = {
    bio: "277'de (890) doğdu. Önce kuyumculuk öğrendi; zekâsını fark eden bir âlimin tavsiyesiyle on yedi yaşında hadise başladı. İlk hocası Nîşâbur'un muhaddisi İbrâhim b. Ebû Tâlib'dir. Herat'tan Gazze'ye kadar dolaşarak İbn Huzeyme, Zekeriyyâ es-Sâcî, Abdân el-Ahvâzî ve Nesâî'den hadis aldı.\n\nTalebesi Hâkim onu \"hıfz, itkan, vera', müzakere ve tasnifte asrının tek adamı\" olarak anar. Müslim'in Sahîh'ini gök kubbe altındaki en sahih kitap saydığı nakledilir. İbn Mende, Hâkim ve Ebû Abdurrahman es-Sülemî talebelerindendir. Cemâziyelevvel 349'da vefat etti.",
    h: [{ k: 'ebu-ali-nisaburi', yon: 'talebe', t: ['ibn-mende', 'sulemi'] }],
  };
  B['ibnus-seken'] = {
    bio: "294'te (907) Bağdat'ta doğdu; ticaretle uğraştığı için Bezzâz lakabıyla da anıldı. Mâverâünnehir, Horasan, Basra, Kûfe, Dımaşk ve Harran'ı dolaştı; Begavî, İbn Ebû Dâvûd, İbn Cevsâ ve Tahâvî'den dinledi. Horasan'da Buhârî'nin Sahîh'ini Firebrî'den okudu ve Mısır'a yerleşti.\n\nSahîh-i Buhârî Mısır'da ilk kez onunla tanındı. İbn Hazm'ın naklettiğine göre talebelerine Buhârî, Müslim, Ebû Dâvûd ve Nesâî'nin kitaplarını göstererek \"İslâm'ın kaideleri bunlardır\" demiştir. İbn Mende ve Abdülganî el-Ezdî ondan istifade etti. Muharrem 353'te vefat etti.",
    h: [
      { k: 'begavi-ebulkasim', kaynak: DIA('ibnus-seken', "İbnü's-Seken") },
      { k: 'ibn-ebi-davud', kaynak: DIA('ibnus-seken', "İbnü's-Seken") },
      { k: 'tahavi', kaynak: DIA('ibnus-seken', "İbnü's-Seken") },
      { k: 'ibn-cevsa', kaynak: DIA('ibnus-seken', "İbnü's-Seken") },
    ],
  };
  B['ibn-hibban'] = {
    bio: "277'de (890) Sîstan'daki Büst'te doğdu. Yirmi üç yaşında İsbîcâb'dan İskenderiye'ye uzanan büyük bir rıhleye çıktı: Basra'da Ebû Halîfe el-Cumahî, Mısır'da Nesâî, Musul'da Ebû Ya'lâ, Nesâ'da Hasan b. Süfyân, Nîşâbur'da İbn Huzeyme ve Serrâc'dan dinledi.\n\nHadisin yanında fıkıh, dil, tıp ve yıldız bilgisinde de ileri gitti; Semerkant kadılığı yaptı. Hâkim onu \"fıkıh, hadis, dil ve vaazda ilim kaplarından\" sayar; İbnü's-Salâh ise zaman zaman ağır hatalar yaptığını belirtir. Sahîh'i (et-Takāsîm ve'l-envâ'), es-Sikāt ve el-Mecrûhîn'i ricâl ilminin temel eserlerindendir. Şevval 354'te Büst'te vefat etti.",
    h: [{ k: 'hasen-b-sufyan', kaynak: SUY(375) }],
  };
  B['acurri'] = {
    bio: "Bağdat köylerinden Âcur'da doğdu; tahsilini Bağdat'ta yaptı. Ebû Müslim el-Keccî, İbn Ebû Dâvûd, Ebü'l-Kāsım el-Begavî ve İbn Nâciye'den ders aldı.\n\n330'da Mekke'ye yerleşti ve otuz yıl orada hadis okuttu. Ebû Nuaym el-İsfahânî ve Mâlikî muhaddis Asîlî en önemli talebeleridir. Süyûtî onu \"âlim, âmil, sünnet ehli, dindar ve sika\" diye niteler. Sünnet ve akaid rivayetlerini topladığı eş-Şerîa ile Erbaîn'i tanınır. 1 Muharrem 360'ta (970) Mekke'de vefat etti.",
    h: [
      { k: 'ibn-ebi-davud', kaynak: DIA('acurri', 'Âcurrî') },
      { k: 'begavi-ebulkasim', kaynak: DIA('acurri', 'Âcurrî') },
    ],
  };
  B['taberani'] = {
    bio: "Safer 260'ta (873) Akkâ'da doğdu; küçük yaşta Taberiye'ye gittiği için Taberânî diye tanındı. On üç yaşında hadis dinlemeye başladı; 274'ten itibaren yaklaşık yirmi beş yıl Kudüs, Kayseriye, Humus, Halep, Tarsus, Dımaşk, Mısır, Yemen, Hicaz, Irak ve İsfahan'ı dolaştı.\n\nHayatının son altmış yılını İsfahan'da geçirdi. Süyûtî'ye göre binden fazla hocadan rivayet etti ve \"müsnidü'd-dünyâ\" oldu. el-Mu'cemü'l-kebîr sahâbe müsnedlerine, el-Evsat hocalarından gelen garîb rivayetlere ayrılmıştır; Evsat için \"bu kitap benim ruhumdur\" derdi. Zilkade 360'ta yüz yaşını aşmış olarak vefat etti.",
    h: [{ k: 'ibn-cevsa', kaynak: SUY(334) }],
  };
  B['ramhurmuzi'] = {
    bio: "265 civarında (879) Ahvaz'a bağlı Râmhürmüz'de doğdu. 290'da öğrenimine başladı, hadis için Şîraz'a ve Mekke'ye gitti; İbn Ebû Hayseme, Abdân el-Ahvâzî ve Zekeriyyâ es-Sâcî dahil 200'e yakın hocadan dinledi.\n\nRâmhürmüz kadılığı yaptı ve şehrin merkez camisinde ders verdi. el-Muhaddisü'l-fâsıl beyne'r-râvî ve'l-vâî, hadis usûlüne dair günümüze ulaşan ilk müstakil eserdir; ayrıca Emsâlü'l-hadîs'i yazdı. Süyûtî onun 360'a yakın bir tarihe kadar yaşadığını söyler.",
  };
  B['ibnus-sunni'] = {
    bio: "280'den sonra Dînever'de doğdu. Bağdat, Basra, Kûfe, Harran, Dımaşk ve Mısır'da Nesâî, Ebû Halîfe, Ebû Ya'lâ, Begavî ve İbn Ebû Dâvûd'dan dinledi. En çok Nesâî'den faydalandığı için \"sâhibü'n-Nesâî\" diye anıldı.\n\nNesâî'nin Sünen'ini rivayet etti ve ihtisar ederek el-Müctebâ adını verdi. Gündelik dua ve zikir rivayetlerini derleyen Amelü'l-yevm ve'l-leyle'si çok okundu. Tahsilini bitirince Dînever'e yerleşti. 364'te seksenini aşmış olarak vefat etti.",
    h: [
      { k: 'ebu-yala', kaynak: DIA('ibnus-sunni', "İbnü's-Sünnî") },
      { k: 'begavi-ebulkasim', kaynak: DIA('ibnus-sunni', "İbnü's-Sünnî") },
      { k: 'ibn-ebi-davud', kaynak: DIA('ibnus-sunni', "İbnü's-Sünnî") },
    ],
  };
  B['ibn-adi'] = {
    bio: "Zilkade 277'de (891) Cürcân'da ilim ehli bir ailede doğdu; Arapçayı iyi bilmemesinden Türk asıllı olduğu tahmin edilir. 297'de Mısır'a, 305'te İskenderiye'den Semerkant'a uzanan rıhlelere çıktı.\n\nMuhammed b. Osman b. Ebû Şeybe, Nesâî ve Ebû Ya'lâ'dan dinledi; hocası İbn Ukde de ondan rivayet etti. Halîlî'ye göre hıfz ve celâlette benzersizdi. Tenkide uğramış râvileri rivayetleriyle inceleyen el-Kâmil fî duafâi'r-ricâl, cerh-ta'dîl tarihinin dönüm noktasıdır. Talebesi Hamza es-Sehmî'dir. Cemâziyelâhir 365'te vefat etti.",
  };
  B['ebus-seyh'] = {
    bio: "274'te (887) İsfahan'da doğdu. Babası, dayısı ve anne tarafından dedesi muhaddisti; on yaşında hadis dinlemeye başladı. İlk hocası dedesi Mahmûd b. Ferec'dir; İbn Ebû Âsım, Bezzâr ve Taberânî'den de ders aldı.\n\nYirmi beş yaşında Bağdat, Basra, Kûfe, Musul ve Hicaz'a rıhleye çıktı; Ebû Ya'lâ ve Ebû Halîfe'den dinledi. Süyûtî onu \"İsfahan'ın hâfızı ve zamanının müsnidi\" diye anar. Tabakātü'l-muhaddisîn bi-Isbahân, Ahlâku'n-nebî ve el-Azame eserlerindendir. Muharrem 369'da vefat etti.",
    h: [{ k: 'taberani', kaynak: DIA('ebus-seyh', "Ebü'ş-Şeyh") }],
  };
  B['darekutni'] = {
    bio: "306'da (918) Bağdat'ın Dârülkutn semtinde doğdu; babası da muhaddisti. Bağdat, Basra, Kûfe ve Vâsıt'ta Ebü'l-Kāsım el-Begavî, İbn Ebû Dâvûd, İbn Sâid ve Mehâmilî'den dinledi. Ebû Saîd el-İstahrî'den Şâfiî fıkhını, İbn Mücâhid'den kıraati okudu. 357'de Şam ve Mısır'a gitti.\n\nHâkim onu \"anlayış, hıfz ve vera'da asrının tek adamı\" diye anar; Hatîb'e göre eser ilmi, ilel bilgisi ve ricâl onda son bulmuştur. Kıraatte de bâbları ilk düzenleyendir. Bâkıllânî, Ebû Zer el-Herevî, Hâkim, Berkānî, Abdülganî el-Ezdî ve Ebû Nuaym talebelerindendir. 8 Zilkade 385'te (995) Bağdat'ta vefat etti.",
  };
  B['ibn-sahin'] = {
    bio: "Safer 297'de (909) Bağdat'ta doğdu; anne tarafından dedesi Ahmed b. Şâhîn'e nisbetle tanındı. 308'de hadis yazmaya başladı; Begavî, İbn Ebû Dâvûd ve İbn Sâid'den dinledi. Otuz yaşında Basra, Mısır, Dımaşk, Rakka ve Trablus'a gitti.\n\nSüyûtî onu \"Irak muhaddisi\" diye anar: bin cüzlük tefsiri, bin üç yüz cüzlük Müsned'i dahil 330 eser yazdı. İbn Mâkûlâ ve başkaları onu sika ve me'mûn sayar, ancak dil hataları yaptığını ve fıkhı bilmediğini belirtirler. Berkānî ondan rivayet etti. Zilhicce 385'te vefat etti.",
  };
  B['hattabi'] = {
    bio: "Receb 319'da (931) Kâbil yakınındaki Büst'te doğdu; asıl adı Hamd'dir. Büst'ün Türk hâkimiyetindeki bir şehir olmasından Türk asıllı olduğu düşünülür. Nîşâbur'da Kaffâl eş-Şâşî'den Şâfiî fıkhını, Bağdat'ta Ebû Ömer ez-Zâhid'den dili öğrendi.\n\nMekke'de İbnü'l-A'râbî'den ve Basra'da İbn Dâse'den Sünen-i Ebû Dâvûd'u dinledi; Esam'dan da rivayet etti. Meâlimü's-sünen ve A'lâmü'l-hadîs ile Ebû Dâvûd ve Buhârî'nin ilk şerhlerini yazdı. Hâkim ondan rivayet etti. Rebîülâhir 388'de Büst'te vefat etti.",
    h: [{ k: 'esam', kaynak: SUY(404) }],
  };
  B['asili'] = {
    bio: "Endülüs asıllı bir aileden geldi ve Fas'taki Asîle'de büyüdü. 342'de Kurtuba'ya gitti, Vehb b. Meserre'den hadis okudu. 351'de doğuya giderek Kayrevan'da İbn Ebû Zeyd, Mısır'da Hamza el-Kinânî, Mekke'de Âcurrî ve Ebû Zeyd el-Mervezî'den dinledi.\n\nSahîh-i Buhârî'yi Ebû Zeyd'den alıp Endülüs'e getirdi; nüshası Mağrib rivayetlerinin dayanağı oldu. Dârekutnî \"onun benzerini görmedim\" demiştir. Kādî İyâz onu Mâlikî mezhebinin hâfızlarından ve hadis ilellerini bilenlerden sayar. Saragossa kadılığı yaptı. Zilhicce 392'de vefat etti.",
    h: [
      { k: 'acurri', kaynak: SUY(406) },
      { k: 'hamza-kinani', kaynak: DIA('asili', 'Asîlî') },
    ],
  };
  B['kelabazi'] = {
    bio: "323'te (935) Buhara'nın Kelâbâz semtinde doğdu. Mâverâünnehir, Horasan ve Bağdat'ı dolaşarak Heysem b. Küleyb eş-Şâşî ve Ebû Ya'lâ Abdülmü'min b. Halef'ten dinledi.\n\nTalebesi Müstağfirî'ye göre zamanında Mâverâünnehir'in en hâfız kişisiydi. Hâkim, Dârekutnî'nin onun anlayışını beğendiğini söyler; Hatîb onu sika ve hâfız sayar. Sahîh-i Buhârî râvilerini tanıtan el-Hidâye ve'l-irşâd, bu alandaki ilk müstakil eserdir. Cemâziyelâhir 398'de vefat etti (378 de denmiştir).",
    h: [{ k: 'kelabazi', yon: 'talebe', t: ['darekutni', 'hakim', 'mustagfiri'] }],
  };
  B['ibnul-faradi'] = {
    bio: "351'de (962) Kurtuba'da doğdu; babasının ferâiz bilgisinden dolayı İbnü'l-Faradî diye anıldı. Kurtuba'da Yahyâ b. Mâlik, İbn Ebû Zeyd ve İbn Müferric'den okudu. 382'de hacca gitti; Mekke, Mısır ve Kayrevan'da icazetler aldı.\n\nSüyûtî'ye göre Kurtuba'da rivayet genişliği, hadis hıfzı, ricâl bilgisi ve edebiyatta benzeri görülmedi. Târîhu ulemâi'l-Endelüs, Endülüs âlimlerinin temel biyografi kaynağıdır. Belensiye kadılığı yaptı. 403'te Kurtuba'nın Berberîlerce yağmalanması sırasında öldürüldü.",
  };
  B['hakim'] = {
    bio: "3 Rebîülevvel 321'de (933) Nîşâbur'da doğdu. Dokuz yaşında hadise başladı, on üç yaşında İbn Hibbân'dan imlâ yazdı. 341'de Irak'a, 343'te Horasan ve Mâverâünnehir'e gitti; yalnız Nîşâbur'da bin, toplamda iki bin hocadan dinlediği rivayet edilir. Nîşâbur kadılığı yaptığı için \"Hâkim\" lakabıyla anılır.\n\nFıkhı Ebû Sehl es-Su'lûkî'den okudu. Dârekutnî onu İbn Mende'den daha mütkın bulmuştur. Müstedrek'i, Ma'rifetü ulûmi'l-hadîs'i ve Târîhu Nîşâbûr'u ile hem hadis toplamada hem usûlde çığır açtı; Şîa'ya meyli olduğu söylenmiştir. Beyhakī ve Halîlî talebelerindendir. 405'te vefat etti.",
  };
  B['temmam'] = {
    bio: "330'da (941) Dımaşk'ta doğdu; babası Reyli bir muhaddis ve tarihçiydi. Sekiz yaşında ilk hadis derslerini aldı; 170 hocasının neredeyse tamamı Dımaşklı ya da Dımaşk'ta bulunmuş kişilerdir.\n\nAbdülazîz el-Kettânî \"Şam hadisinde ondan hâfızını görmedim\" der; Ebû Ali el-Ehvâzî de onun benzerini görmediğini söyler. el-Fevâid'i Şam hadis rivayetinin temel cüzlerinden biridir. 3 Muharrem 414'te vefat etti.",
  };
  B['burkani'] = {
    bio: "336'da (948) Hârizm'e bağlı Berkan kasabasında doğdu. Önce fıkha yöneldi, sonra hadise geçti. Bağdat, Cürcân, Herat, Nîşâbur, Merv, Dımaşk ve Mısır'da Dârekutnî, İbnü's-Savvâf ve İsmâîlî'den okuyup Bağdat'a yerleşti.\n\nHatîb \"hocalarımız arasında ondan daha sebt birini görmedik\" der. Sahîhayn üzerine bir müstahrec yazdı. Hatîb el-Bağdâdî, Beyhakī ve Ebû İshak eş-Şîrâzî talebelerindendir. Hadise duyduğu aşırı sevginin Allah sevgisine gölge düşürmesinden korktuğu nakledilir. Receb 425'te vefat etti.",
    h: [{ k: 'burkani', yon: 'talebe', t: ['beyhaki'] }],
  };
  B['ebu-nuaym-isfahani'] = {
    bio: "Receb 336'da (948) İsfahan'da Fars asıllı bir ailede doğdu; babası da hadis hâfızıydı. Altı yaşında dünyanın dört bir yanındaki hocalardan icazet aldı; sekiz yaşından itibaren Ebü'ş-Şeyh ve İbnü'l-Mukrî'den okudu.\n\nÂlî isnadı ve zabtı nedeniyle hâfızlar ona rıhle yaptı. Hatîb \"hâfız adını Ebû Nuaym ve Ebû Hâzim'den başkasına verildiğini görmedim\" der. Hilyetü'l-evliyâ, Buhârî ve Müslim üzerine müstahrecler, Ma'rifetü's-sahâbe ve Târîhu Isbahân'ı yazdı. Muharrem 430'da vefat etti.",
    h: [{ k: 'acurri', kaynak: DIA('acurri', 'Âcurrî') }],
  };
  B['mustagfiri'] = {
    bio: "350'den sonra muhtemelen Nesef'te (Nahşeb) doğdu; dedesi, babası ve oğlu da muhaddisti. Buhara'da Guncâr, Serahs'ta Zâhir es-Serahsî, Merv'de Küşmîhenî ve Kelâbâzî'den dinledi.\n\nDelâilü'n-nübüvve, Ma'rifetü's-sahâbe, Şemâil, Fezâilü'l-Kur'ân ve Nesef ile Keş tarihlerini yazdı. Süyûtî sadûk olduğunu, ancak bâblarda mevzû rivayetleri zayıflığını belirtmeden aktardığını söyler. En uzun süre yanında kalan talebesi Abdülazîz en-Nahşebî'dir. 432'de vefat etti.",
    h: [
      { k: 'kusmihani', kaynak: DIA('mustagfiri', 'Müstağfirî') },
      { k: 'kelabazi', kaynak: DIA('mustagfiri', 'Müstağfirî') },
    ],
  };
  B['ebu-zer-herevi'] = {
    bio: "355 veya 356'da (966) Herat'ta doğdu; İbnü's-Semmâk diye de tanınır. Basra, Bağdat, Dımaşk, Mısır ve Mekke'de Dârekutnî ve Bâkıllânî'den dinledi; Bâkıllânî vasıtasıyla Eş'arî kelâmını benimsedi.\n\nSahîh-i Buhârî'yi Hammûye'den 373'te Serahs'ta, Müstemlî'den 374'te Belh'te, Küşmîhenî'den 387'de Merv'de okudu; üç rivayeti birleştirdiği nüshası Mağrib ve Endülüs'ün esas nüshası oldu. Mekke'ye yerleşip \"Şeyhü'l-Harem\" diye anıldı. Bâcî üç yıl yanında kaldı. Şevval 434'te vefat etti.",
  };
  B['halili'] = {
    bio: "366 civarında (976) Kazvin'de ilme düşkün bir ailede doğdu. Bağdat, Nîşâbur, Kûfe, Cürcân ve İsfahan'da Dârekutnî, Ebû Tâhir el-Muhallis ve Hâkim'in derslerine katıldı; İbnü'l-Mukrî ve İbn Şâhîn'den icazet aldı.\n\nKazvin'e dönüp kadılık yaptı. Süyûtî onu \"sika, hâfız, hadis illetlerinin ve ricâlin çoğunu bilen, âlî isnadlı\" biri olarak anar. el-İrşâd fî ma'rifeti ulemâi'l-hadîs, İslâm dünyasının hadis âlimlerini şehir şehir tanıtır. 446'da vefat etti.",
    h: [
      { k: 'darekutni', kaynak: DIA('halili-ebu-yala', 'Halîlî, Ebû Ya‘lâ') },
      { k: 'ibn-sahin', not: 'İcazet aldı.', kaynak: SUY(430) },
    ],
  };
  /* ───────── 5. asır ───────── */
  B['ibn-hazm'] = {
    bio: "Ramazan 384'ün son gününde (994) Kurtuba'nın doğusundaki Minyetü'l-Mugīre'de, Emevî sarayına yakın bir vezir ailesinde doğdu. Kaynakların çoğu Fars asıllı olduğunu kaydeder. Hadisi Ebû Ömer et-Talamenkî ve İbnü'l-Cesûr gibi Kurtubalı hocalardan aldı.\n\nÖnce Şâfiî iken Zâhirî mezhebine geçti ve onun en büyük temsilcisi oldu. Süyûtî'ye göre zekâ, hıfz ve ilimlerin genişliğinde Endülüs'ün en ileri ismiydi. Hadisleri fıkhî meselelerde tenkitli biçimde delil olarak kullandığı el-Muhallâ'sı ve el-Fasl'ı başlıca eserleridir. Humeydî en önemli talebesidir. Şâban 456'da vefat etti.",
    h: [{ k: 'talamenki', kaynak: SUY(423) }],
  };
  B['hatib'] = {
    bio: "23 Cemâziyelâhir 392'de (1002) Mekke–Medine yolu üzerindeki Guzeyye'de doğdu. Babası Bağdat yakınındaki Derzîcân'da yirmi yıl hatiplik yaptı. On bir yaşında hadis dinlemeye başladı; yirmi yaşında Basra'ya, yirmi üçünde Nîşâbur'a gitti, sonra Şam ve Mekke'yi dolaştı.\n\nZehebî onu \"hâfızların sonuncusu\" sayar: hadis ilimlerinin hemen her dalında eser verdi, tashih, ta'lîl, cerh, ta'dîl ve tarihte zirveye ulaştı. Târîhu Bağdâd, el-Kifâye ve el-Câmi' sonraki bütün usûl literatürünün kaynağıdır. Mekke'de Sahîh-i Buhârî'yi Kerîme el-Mervezîyye'ye okudu. Humeydî ve İbn Mâkûlâ talebelerindendir. 463'te Bağdat'ta vefat etti.",
  };
  B['davudi'] = {
    bio: "Rebîülâhir 374'te (984) Herat yakınlarındaki Bûşenc'de doğdu. Bağdat'ta Ebû Hâmid el-İsferâyînî'den, Nîşâbur'da Ebü't-Tayyib es-Su'lûkî'den ve Merv'de Kaffâl'dan fıkıh okudu.\n\nAltı yaşında Sahîh-i Buhârî'yi, Abd b. Humeyd'in Müsned'ini ve Dârimî'nin Sünen'ini Firebrî'nin talebesi İbn Hammûye es-Serahsî'den Bûşenc'de dinledi; uzun ömrüyle bu eserlerde dünyanın en âlî isnadına sahip oldu. Zehebî onu \"müsnidü'l-vakt\" diye anar. Ebü'l-Vakt es-Siczî Sahîh'i 465'te ondan dinledi. 467'de vefat etti.",
  };
  B['ibn-makula'] = {
    bio: "5 Şâban 421'de (1030) Bağdat yakınındaki Ukberâ'da vezirler yetiştiren bir ailede doğdu; babası Büveyhîler'den Celâlüddevle'nin veziriydi. İbn Şâhîn, İbn Gaylân ve Kādî Ebü't-Tayyib et-Taberî'den dinledi; hocası Hatîb el-Bağdâdî'dir.\n\nSem'ânî onu \"ikinci Hatîb\" diye anıldığını söyler. Humeydî'nin naklettiğine göre Hatîb'e bir şey sorduğunda kitaba bakardı, İbn Mâkûlâ ise kitaptan okur gibi ezberden cevap verirdi. Yazılışı benzeyen isimleri ayırt eden el-İkmâl'i alanın temel eseridir. Halife tarafından elçi olarak gönderildiği Horasan'da 475 civarında öldürüldü (tarih ihtilaflıdır).",
  };
  B['humeydi'] = {
    bio: "420'den önce Mayorka'da doğdu. Kurtuba'da İbn Hazm'ın en önemli talebesi oldu, İbn Abdülber'den de okudu. 448'de doğuya gitti; Mısır, Şam, Hicaz ve Irak'ta dinledi ve Bağdat'a yerleşti.\n\nSüyûtî onu \"sebt, imam, kudve\" diye anar; hadis, fıkıh, edebiyat ve Arapçada imamdı. Buhârî ve Müslim'in hadislerini tek eserde birleştiren el-Cem' beyne's-Sahîhayn ile Endülüs âlimlerine dair Cezvetü'l-muktebis'i yazdı. Hatîb el-Bağdâdî'den dinledi. Zilhicce 488'de Bağdat'ta vefat etti.",
  };
  B['ebu-ali-gassani'] = {
    bio: "Muharrem 427'de (1035) Ceyyân'da (Jaén) doğdu; Yemen'deki Gassân kabilesine nisbet edilir. On yedi yaşında hadis tahsiline başladı ve İbn Abdülber, Ebü'l-Velîd el-Bâcî ve İbnü'd-Delâî'den okudu.\n\nEndülüs dışına hiç çıkmadığı halde \"Endülüs muhaddisi\" oldu; Kurtuba camisinde ders verdi ve dört bir yandan talebe ona geldi. Dil, Arapça, şiir ve nesepte de otoriteydi. Sahîhayn'daki isim ve râvi müşkillerini çözen Takyîdü'l-mühmel'i bu alanın temel eseridir. Kādî İyâz ondan mektupla icazet aldı. 12 Şâban 498'de vefat etti.",
  };

  /* ───────── 6. asır ───────── */
  B['sadefi'] = {
    bio: "454 civarında (1062) Saragossa yakınlarında doğdu; İbn Sükkere lakabıyla tanınır. Saragossa'da Ebü'l-Velîd el-Bâcî'den, Belensiye'de İbnü'd-Delâî'den hadis aldı; kıraati Ebû Amr ed-Dânî'nin talebelerinden okudu.\n\n481'de doğuya giderek Mısır, Basra, Bağdat, Vâsıt ve Enbâr'da dinledi; Bağdat'ta Ebû Bekir eş-Şâşî'den fıkıh okudu. Mürsiye'de ders verdi, kadılık yapıp istifa etti. Süyûtî onu ricâl, ilel ve cerh-ta'dîlde uzun kulaçlı, metin ve isnadı ezbere bilen biri olarak anar. Kādî İyâz baş talebesidir. Rebîülevvel 514'te Kutende savaşında şehid düştü.",
  };
  B['turtusi'] = {
    bio: "26 Cemâziyelevvel 451'de (1059) Tortosa'da doğdu; İbn Ebû Rendeka diye de tanınır. Saragossa'da Ebü'l-Velîd el-Bâcî'den Arapça, fıkıh, hadis ve hilâf okudu.\n\n476'da hacca gitti; Basra'da Sünen-i Ebû Dâvûd'u dinledi, Bağdat'ta Dâmeğânî ve Humeydî'den okudu, Ebû Bekir eş-Şâşî'den fıkıh aldı. Bir süre Kudüs'te kaldıktan sonra İskenderiye'ye yerleşti ve orada bir Mâlikî ilim çevresi kurdu. Zehebî onu \"Mâlikîlerin şeyhi, zâhid\" diye anar. Siyasetnâme türündeki Sirâcü'l-mülûk ile bid'atlere dair el-Havâdis ve'l-bida'ı yazdı. 520'de İskenderiye'de vefat etti.",
    h: [{ k: 'humeydi', kaynak: { ad: "Zehebî, Siyer, XIX, 490", url: 'https://shamela.ws/book/10906/12186' } }],
  };
  B['furavi'] = {
    bio: "441'de (1049) Nîşâbur'da doğdu; babası Furâve'de yaşadığı için Furâvî diye anıldı. Altı yaşında hadis dinlemeye başladı. Sahîh-i Buhârî'yi Saîd el-Ayyâr ve Ebû Sehl el-Hafsî'den, Sahîh-i Müslim'i Abdülgāfir el-Fârisî'den okudu.\n\nAbdülkerîm el-Kuşeyrî, İmâmü'l-Haremeyn el-Cüveynî ve Beyhakī'nin talebesi oldu. Uzun ömrü sayesinde Sahîh-i Müslim'in ve Beyhakī'nin eserlerinin en âlî râvisi sayıldı; \"Fakîhü'l-Harem\" ve \"Horasan müsnidi\" diye anıldı. İbn Asâkir ve Sem'ânî ondan dinledi. 530'da vefat etti.",
  };
  B['sehhami'] = {
    bio: "14 Zilkade 446'da (1055) Nîşâbur'da doğdu. Muhaddis babası onu beş yaşında ilim meclislerine götürdü. Abdülgāfir el-Fârisî ve Bağdat müsnidi Cevherî'den icazet aldı.\n\nBeyhakī'den es-Sünenü'l-kübrâ, Şuabü'l-îmân ve el-Medhal'i dinledi. Uzun ömrüyle \"Horasan müsnidi\" oldu; İbn Asâkir ve Sem'ânî ondan dinledi. Zehebî, rivayetlerinde bazı gevşeklikler bulunduğunu da kaydeder. 533'te vefat etti.",
  };
  B['nesefi-omer'] = {
    bio: "461'de (1068) Nesef'te doğdu. 550 hocadan hadis naklettiği ve onlar hakkında Ta'dâdü şüyûhi Ömer adıyla bir eser yazdığı kaydedilir. Ebü'l-Yüsr el-Pezdevî ve Ebü'l-Muîn en-Nesefî hocaları arasındadır.\n\nKarahanlılar döneminin önde gelen âlimlerinden olup \"Müfti's-sekaleyn\" lakabıyla anıldı. Zehebî'ye göre Bağdat'ta İbn Beyân'dan dinledi ve yüz kadar eser yazdı. Semerkant âlimlerinin tarihi el-Kand ile Mâtürîdî kelâmının temel metni el-Akāidü'n-Nesefiyye en tanınmış eserleridir. 537'de Semerkant'ta vefat etti.",
  };
  B['ibnul-arabi'] = {
    bio: "22 Şâban 468'de (1076) İşbîliye'de, Abbâdîler'in veziri Ebû Muhammed İbnü'l-Arabî'nin oğlu olarak doğdu. Erken yaşta kıraat-i aşereyi tamamladı; Kurtuba'da İbn Attâb'dan okudu. 485'te babasıyla doğuya gitti.\n\nBağdat'ta Tırâd ez-Zeynebî ve Nasr el-Makdisî'den dinledi; Gazzâlî, Ebû Bekir eş-Şâşî ve İskenderiye'de Turtûşî'nin derslerinde bulundu. İşbîliye'ye dönünce kadılık yaptı, sonra telif ve tedrise çekildi. Tirmizî şerhi Âridatü'l-ahvezî ve Muvatta' şerhi el-Kabes ile Endülüs'te şerh geleneğini başlattı. İbn Beşkūvâl ve İbn Hubeyş talebelerindendir. Rebîülâhir 543'te Fas'ta vefat etti.",
  };
  B['kadi-iyaz'] = {
    bio: "Şâban 476'da (1083) Sebte'de doğdu. 507'de Endülüs'e geçti: Kurtuba ve Mürsiye'de Ebû Ali es-Sadefî'den Sahîh-i Buhârî ve Sahîh-i Müslim'i okudu, İbn Rüşd el-Ced ve Ebû Bekir İbnü'l-Arabî'den faydalandı. el-Gunye'de yüz kadar âlimden bizzat ya da mektupla istifade ettiğini belirtir.\n\nSebte ve Gırnata kadılığı yaptı. Süyûtî onu \"zamanında hadis ehlinin imamı, hadis ilimlerini, nahvi, lugati ve Arapların tarihini en iyi bilen\" kişi olarak anar. eş-Şifâ, Meşâriku'l-envâr, Müslim şerhi İkmâlü'l-Mu'lim ve Tertîbü'l-medârik'i yazdı. 544'te Merakeş'te vefat etti.",
    h: [{ k: 'ibnul-arabi', kaynak: DIA('kadi-iyaz', 'Kādî İyâz') }],
  };
  B['semani'] = {
    bio: "21 Şâban 506'da (1113) Merv'de, müfessir ve muhaddis yetiştiren bir ailede doğdu; dedesi Ebü'l-Muzaffer es-Sem'ânî meşhur bir Şâfiî âlimdi. Dört yaşında babası onu Nîşâbur'da ders halkalarına götürdü; babasının ölümünden sonra amcalarının yanında yetişti.\n\nHorasan, Mâverâünnehir, Irak, Hicaz ve Şam'ı dolaşarak Fürâvî ve Zâhir eş-Şehhâmî dahil yedi bin hocadan dinlediği nakledilir. Nisbeleri ve onlarla anılan âlimleri sıralayan el-Ensâb, Hatîb'in Bağdat tarihine zeyli ve Edebü'l-imlâ ve'l-istimlâ'sı başlıca eserleridir. Cemâziyelevvel 562'de Merv'de vefat etti.",
  };
  B['ibn-asakir'] = {
    bio: "Muharrem 499'da (1105) Dımaşk'ta ilimle tanınan bir ailede doğdu. Babasının ilgisiyle 505'te hadis dinlemeye başladı; Bağdat, Kûfe, Nîşâbur, Merv ve Herat'a rıhleler yaptı. Hocalarının sayısı 1300'ü, kadın hocalarının sayısı 80'i aşar.\n\nSüyûtî onu \"Şam'ın, hatta dünyanın hâfızı\" diye anar; metin ile isnadı birlikte bilen, ilmi ve dindarlığıyla tanınan biriydi. Şehre uğrayan herkesin biyografisini topladığı Târîhu medîneti Dımaşk, İslâm tarihinin en hacimli şehir tarihidir. Dımaşk'taki Dârülhadîs en-Nûriyye onun için kuruldu. 571'de vefat etti.",
    h: [
      { k: 'abdulgafir-ismail', not: 'İcazet verdi.', kaynak: SUY(462) },
      { k: 'kivamussunne', kaynak: SUY(463) },
    ],
  };
  B['silefi'] = {
    bio: "475 civarında (1082) İsfahan'da doğdu; bir dudağı yarık olan büyük dedesine verilen Farsça \"silebe\" adından Silefî nisbesini aldı. 488'de Hanbelîlerin reisi Rızkullah et-Temîmî'nin halkasına katıldı ve onun teşvikiyle hadise yöneldi.\n\nİsfahan, Bağdat, Hemedan ve Şam'da dinledikten sonra 511'de İskenderiye'ye yerleşti ve altmış yılı aşkın süre orada hadis okuttu. Süyûtî'ye göre âlî isnad onda son buldu, rivayet kanunlarını zamanında en iyi bilen oydu. Mu'cemü's-sefer ve Bağdat şeyhleri mu'cemi eserlerindendir. Abdülganî el-Makdisî, İbnü'l-Mufaddal ve Kādî İyâz (icazetle) ondan istifade etti. 576'da yüz yaşını aşmış olarak vefat etti.",
    h: [{ k: 'kivamussunne', kaynak: SUY(463) }],
  };
  B['ibn-beskuval'] = {
    bio: "3 Zilhicce 494'te (1101) Kurtuba'da doğdu; ailesi Belensiye yakınlarındandı. Babasından sonra İşbîliye'de Kādî Ebû Bekir İbnü'l-Arabî'den fıkıh okudu ve onun kadı nâibi oldu. İbn Attâb ve İbn Rüşd el-Ced de hocalarındandır.\n\nSüyûtî onu \"Endülüs'ün muhaddisi ve tarihçisi\" diye anar: rivayeti geniş, zamanının en sağlam ismiydi ve elli kadar eser yazdı. İbnü'l-Faradî'nin Endülüs âlimleri tarihine zeyl olarak yazdığı es-Sıla ve hadislerde adı geçmeyen kişileri tespit eden Gavâmizü'l-esmâ başlıca eserleridir. Ramazan 578'de vefat etti.",
  };
  B['ibnul-esir'] = {
    bio: "Rebîülevvel 544'te (1149) Cizre'de doğdu; kardeşleri tarihçi İzzeddin ve edip Ziyâeddin İbnü'l-Esîr de tanınmış âlimlerdir. 565'te ailesiyle Musul'a göçtü; nahiv, edebiyat, hadis ve fıkıh okudu.\n\nMusul atabeylerinin divanında yüksek görevler üstlendi, sonra felç geçirince evine çekilip telife yöneldi. Zehebî'nin kaydına göre Sahîh-i Buhârî'yi İbn Serâyâ vasıtasıyla Ebü'l-Vakt'ten rivayet etti. Kütüb-i Sitte ve Muvatta' hadislerini birleştiren Câmiu'l-usûl ile en-Nihâye fî garîbi'l-hadîs alanın klasikleridir. 606'da Musul'da vefat etti.",
    h: [{ k: 'ebul-vakt', araci: 'İbn Serâyâ', not: "Sahîh-i Buhârî isnadı.", kaynak: { ad: 'Zehebî, Siyer, XXI, 488', url: 'https://shamela.ws/book/10906/13412' } }],
  };

  /* ───────── 7. asır ───────── */
  B['sagani'] = {
    bio: "10 Safer 577'de (1181) Lahor'da doğdu; Hz. Ömer'in soyundan geldiği için Ömerî nisbesiyle de anılır. Küçükken babasıyla Gazne'ye göçtü, on üç yaşında onu kaybetti. Önce Hanefî fıkhını okudu, sonra yaklaşık on yıl Mekke, Medine, Yemen ve Bağdat'ta ders aldı.\n\nAbbâsî halifesinin elçisi olarak Hindistan'a gitti, ömrünün sonunu Bağdat'ta geçirdi. Sahîhayn hadislerinden derlediği Meşâriku'l-envâr Hint ve Osmanlı medreselerinde okutuldu; ayrıca dil alanında el-Ubâb'ı ve mevzû hadislere dair bir risale yazdı. 650'de Bağdat'ta vefat etti.",
  };
  B['munziri'] = {
    bio: "1 Şâban 581'de (1185) Kahire'de Suriye asıllı bir ailede doğdu. On yaşında hadis meclislerine katıldı. Önce Hanbelî iken Şâfiî fıkhını okuyunca bu mezhebe geçti. İskenderiye, Harran, Ruha, Dımaşk ve Kudüs'e defalarca gitti.\n\nCemmâîlî, İbnü'l-Mufaddal, Ebü'l-Yümn el-Kindî ve İbn Nukta'dan okudu; en çok İbnü'l-Mufaddal'ın yanında yetişti. Kahire'deki Dârülhadîs el-Kâmiliyye'nin şeyhliğini yirmi yıl yürüttü. Süyûtî'ye göre hadisin bütün dallarında benzersizdi; Dimyâtî onun yanında yetişti. et-Terğîb ve't-terhîb'i ve Ebû Dâvûd ile Müslim muhtasarları başlıca eserleridir. Zilkade 656'da vefat etti.",
    h: [
      { k: 'ibnul-mufaddal', not: 'Yanında yetişti.', kaynak: SUY(504) },
      { k: 'ibn-nukta', kaynak: SUY(499) },
    ],
  };
  B['nevevi'] = {
    bio: "631'de (1234) Havran bölgesindeki Nevâ köyünde doğdu. Ergenlik çağında babasının dükkânında çalışırken çevredeki âlimlerin derslerine devam etti. On sekiz yaşında Dımaşk'a gidip Revâhiyye Medresesi'ne yerleşti; Şîrâzî'nin et-Tenbîh ve el-Mühezzeb'ini ezberledi.\n\nGünde on iki ders okuduğu nakledilir. Kütüb-i Sitte'nin yanında Muvatta', Müsned ve Dârimî'yi okudu. Dârülhadîs el-Eşrefiyye'nin şeyhliğini yürüttü, ücret almadı. Hiç evlenmedi; sultanlara karşı açık sözlülüğüyle tanındı. Müslim şerhi, Riyâzü's-sâlihîn, el-Erbaûn, el-Ezkâr ve et-Takrîb başlıca eserleridir. 676'da memleketi Nevâ'da vefat etti.",
  };

  /* ───────── 8. asır ───────── */
  B['dimyati'] = {
    bio: "613 sonlarında (1217) Tinnîs ile Dimyat arasındaki Tûne adasında doğdu. Dimyat'ta Şâfiî fıkhı okudu; hocasının teşvikiyle yirmi üç yaşında hadise yöneldi.\n\nHarran, Halep, Bağdat, Dımaşk ve Hicaz'ı dolaştı; Kahire'de Münzirî'nin yanında yetişti. Mu'cemü'ş-şüyûh'u 1300 hocayı kapsar. Zehebî'nin naklettiğine göre Mizzî \"hadiste Dimyâtî'den daha hâfızını görmedim\" demiştir. Kahire'deki Mansûriyye Dârülhadisi'nin şeyhliğini yürüttü. Zilkade 705'te ani olarak vefat etti.",
  };
  B['ibn-rusheyd'] = {
    bio: "Cemâziyelevvel 657'de (1259) Sebte'de doğdu. Önce dil ve edebiyatla meşgul oldu; İbn Ebü'r-Rebî'den Sîbeveyhi'nin el-Kitâb'ını ve yedi kıraati okudu, Sahîh-i Buhârî'yi Abdülazîz el-Gāfikī'den dinledi.\n\n683'te Endülüslü edip er-Rundî ile doğuya gitti; Tunus, İskenderiye, Kahire, Dımaşk ve Hicaz'da Dimyâtî, Kutbüddin el-Kastallânî ve İbn Dakīkul'îd'den dinledi. Bu yolculuğu altı ciltlik Mil'ü'l-ayba'da anlattı. Gırnata'da hatiplik yaptı, ardından Fas'ta yaşadı. 721'de vefat etti.",
    h: [{ k: 'dimyati', kaynak: SUY(528) }],
  };
  B['ibn-seyyidinnas'] = {
    bio: "14 Zilkade 671'de (1273) Kahire'de doğdu; aile İşbîliye'nin düşmesinden sonra önce Bicâye'ye, sonra Mısır'a göç etmişti. Çok küçükken babası onu hadis derslerine götürdü.\n\nGâzî el-Halâvî ve İzz el-Harrânî dahil bine yakın hocadan dinledi. İbn Dakīkul'îd'in yanından ayrılmadı, onun muîdi oldu. Süyûtî onu ricâl, ilel ve isnad bilgisinde otorite, edip ve şair olarak anar. Zâhiriyye'de hadis dersleri verdi. Uyûnü'l-eser adlı isnadlı siyer kitabı ve yarım kalan Tirmizî şerhi en-Nefhu'ş-şezî'si tanınır. 734'te vefat etti.",
  };
  B['kutbuddin-halebi'] = {
    bio: "16 Receb 663'te (1265) Halep'te doğdu. Dayısından kıraat okudu, ardından Kahire'ye yerleşti; Mısır, Dımaşk ve Hicaz'da pek çok âlimden istifade etti.\n\nİbn Dakīkul'îd ve Zeyneb bint Mekkî'den hadis dinledi; hocalarının sayısı bini buldu. Süyûtî onu \"Mısır diyarının müfîdi\" diye anar. Buhârî'ye büyük bir şerh yazmaya başladı, Mısır tarihi ve Abdülganî'nin sîresine şerh de kaleme aldı. Tâceddin es-Sübkî'ye icazet verdi. Receb 735'te vefat etti.",
    h: [{ k: 'ibn-dakik', kaynak: DIA('kutbuddin-el-halebi', 'Kutbüddin el-Halebî') }],
  };
  B['birzali'] = {
    bio: "665'te (1267) Dımaşk'ta, İşbîliye'den göç etmiş Berberî asıllı bir ailede doğdu. Sekiz yaşında babasının hadis derslerine katıldı; on iki yaşında Sahîh-i Buhârî râvisi Kāsım el-İrbilî'nin derslerine gönderildi.\n\n1286'dan itibaren Halep, Ba'lebek, Kudüs, Hicaz ve Mısır'a rıhleler yaptı. Üç binden fazla hocayı kapsayan yedi ciltlik Mu'cem'i ve Ebû Şâme'ye zeyl olarak yazdığı tarihi (el-Muktefî) çağının en önemli kaynaklarındandır; İbn Râfi' bu tarihe zeyl yazdı. Nûriyye'de hadis okuttu. Zilhicce 739'da Mekke'de vefat etti.",
  };
  B['ebu-hayyan'] = {
    bio: "Şevval 654 sonlarında (1256) Gırnata'ya bağlı Matahşâreş'te Berberî bir ailede doğdu. Gırnata'da kıraat ve Arapçayı okudu, Mâlika'da İbn Ebü'l-Ahvas'tan dinledi.\n\n679 civarında Endülüs'ten ayrıldı; İskenderiye ve Kahire'de kıraat ve hadis okudu, İbnü'n-Nehhâs'ın yanında edebiyatı ilerletti. Kahire'de Mansûrî Kubbesi'nde hadis, İbn Tolun Camii'nde tefsir okuttu. Nahiv ve tefsirde çağının imamıydı. Talebeleri arasında Takıyyüddin es-Sübkî, Tâceddin es-Sübkî ve İbn Râfi' vardır. el-Bahrü'l-muhît'i en büyük eseridir. 745'te Kahire'de vefat etti.",
  };
  B['zehebi'] = {
    bio: "3 Rebîülâhir 673'te (1274) Dımaşk yakınındaki Kefrebatnâ'da doğdu. Ailesi Meyyâfârikīn'den (Silvan) gelmiş Türkmen asıllı bir ailedir; babası altın işçisi olduğu için İbnü'z-Zehebî diye anıldı. On sekiz yaşında hadis talebine başladı, yedi kıraati okudu.\n\nDımaşk, Ba'lebek, Kahire ve İskenderiye'de 1200'ü aşkın hocadan dinledi. Birzâlî, Mizzî ve İbn Teymiyye hem hocası hem arkadaşıydı. Süyûtî onu \"asrın muhaddisi, hâfızların sonuncusu ve İslâm'ın tarihçisi\" diye anar; İbn Hacer zemzem içerken Zehebî'nin hıfz mertebesine ulaşmayı dilediğini söyler. Ömrünün sonunda gözlerini kaybetti. 748'de Dımaşk'ta vefat etti.",
  };
  B['ibnul-kayyim'] = {
    bio: "7 Safer 691'de (1292) Dımaşk'ta doğdu; babası Cevziyye Medresesi'nin kayyımı olduğu için bu adla tanındı. Takıyyüddin Süleyman, Ebû Bekir b. Abdüddâim ve İbn Mektûm'dan hadis dinledi.\n\nFıkıh ve usûlü İbn Teymiyye'den okudu ve onun en yakın talebesi oldu. İbn Hacer, hocasına bağlılığının onun hiçbir görüşünden ayrılmayacak kadar güçlü olduğunu, eserlerini düzenleyip ilmini yaydığını söyler; hocasıyla birlikte hapsedildi. Sadriyye'de ders verdi. Zâdü'l-meâd, İ'lâmü'l-muvakkıîn ve Ebû Dâvûd'un Sünen'i üzerine Tehzîb'i başlıca eserleridir. 751'de vefat etti.",
  };
  B['takiyyuddin-subki'] = {
    bio: "3 Safer 683'te (1284) Menûfiye'deki Sübk köyünde doğdu. Babasıyla Kahire'ye giderek İbnü'r-Rif'a'dan fıkıh, Dimyâtî'den hadis, Ebû Hayyân'dan nahiv, İbn Atâullah el-İskenderî'den tasavvuf okudu; İbn Dakīkul'îd'in derslerine de katıldı.\n\nSüyûtî onu \"asrın imamı, müctehid\" diye anar ve yüz ellinin üzerinde eser yazdığını söyler. 739'da Dımaşk kādılkudâtı oldu ve Dârülhadîs el-Eşrefiyye'nin şeyhliğini üstlendi; bir neslin hadisçisi onun himayesinde yetişti. Zemzem içerek Dimyâtî'nin hıfzına ulaşmayı dilediği nakledilir. 756'da Kahire'de vefat etti.",
    h: [
      { k: 'mizzi', kaynak: DIA('subki-takiyyuddin', 'Sübkî, Takıyyüddin') },
      { k: 'ebu-hayyan', not: 'Nahiv okudu.', kaynak: SUY(525) },
    ],
  };
  B['alai'] = {
    bio: "694'te (1295) Dımaşk'ta Türk asıllı bir asker ailesinde doğdu. On yaşında hadis dinlemeye başladı; Kudüs, Mekke ve Mısır'a rıhleler yaptı. Ahmed el-Fezârî, Kemâleddin ez-Zemlekânî, İbn Teymiyye, Mizzî ve Zehebî dahil 700'den fazla hocadan okudu.\n\nZehebî onu \"ricâl ve ilelde ileri giden\" biri olarak anar. Kudüs'teki Salâhiyye Medresesi'nde otuz yıl ders verdi; Takıyyüddin es-Sübkî kendisinden sonra yerine kimin geçeceği sorulunca Alâî'yi göstermiştir. Mürsel rivayetlere dair Câmiu't-tahsîl'i isnad tenkidinin temel eseridir. Zeynüddin el-Irâkī en önemli talebesidir. 761'de Kudüs'te vefat etti.",
    h: [
      { k: 'ibn-teymiyye', kaynak: DIA('alai', 'Alâî') },
      { k: 'mizzi', kaynak: DIA('alai', 'Alâî') },
    ],
  };
  B['zeylai'] = {
    bio: "Bugün Somali'nin Cibuti sınırındaki liman şehri Zeyla'dandır; 720'li yıllarda doğduğu tahmin edilir. Kahire'de Fahreddin ez-Zeylaî ve Alâeddin İbnü't-Türkmânî'den okudu, Necîb el-Harrânî'nin talebelerinden hadis dinledi.\n\nSüyûtî, İbn Hacer'in Zeynüddin el-Irâkī'den naklettiğine göre Irâkī ile birlikte hadis kitaplarını taradıklarını ve birbirlerine tahrîc çalışmalarında yardım ettiklerini söyler. Hanefî fıkhının temel metni el-Hidâye'nin hadislerini tahrîc eden Nasbü'r-râye, tahrîc literatürünün en önemli örneklerindendir. 762'de Kahire'de vefat etti.",
  };
  B['safedi'] = {
    bio: "696'da (1297) Safed'de Türk asıllı bir Memlük emîrinin oğlu olarak doğdu. Önce resim ve hatla uğraştı; babası yirmi yaşına kadar ilimle meşgul olmasına izin vermedi.\n\nSonra edebiyata yöneldi; İbn Seyyidinnâs, İbn Nübâte ve Ebû Hayyân'dan okudu, Mizzî'den dinledi. Zehebî'nin eserlerinin çoğunu ona okudu. Divanlarda kâtiplik yaptı. Otuz ciltlik biyografi sözlüğü el-Vâfî bi'l-vefeyât ve çağdaşlarına ayırdığı A'yânü'l-asr başlıca eserleridir. 764'te Dımaşk'ta vefat etti.",
    h: [
      { k: 'ibn-seyyidinnas', kaynak: { ad: "İbn Hacer, ed-Dürerü'l-kâmine, II, 207", url: 'https://shamela.ws/book/6674/770' } },
      { k: 'ebu-hayyan', kaynak: { ad: "İbn Hacer, ed-Dürerü'l-kâmine, II, 207", url: 'https://shamela.ws/book/6674/770' } },
      { k: 'mizzi', kaynak: { ad: "İbn Hacer, ed-Dürerü'l-kâmine, II, 207", url: 'https://shamela.ws/book/6674/770' } },
    ],
  };
  B['huseyni'] = {
    bio: "Şâban 715'te (1315) Dımaşk'ta doğdu. İshak el-Âmidî, İzzeddin İbn Cemâa, Mizzî ve Zehebî'den okudu; Mısır'da Meydûmî'nin derslerine devam etti.\n\nDârülhadîs el-Bahâiyye'nin şeyhliğini yaptı. Çok hızlı yazdığı, Zehebî'nin el-İber'ini beş günde istinsah ettiği nakledilir. Zehebî'nin Tezkiretü'l-huffâz'ına zeyl yazdı ve Kütüb-i Sitte, Muvatta', Müsned ve Ebû Hanîfe ile Şâfiî müsnedlerinin râvilerini et-Tezkire'de topladı. Irâkī onu Moğultay, İbn Kesîr ve İbn Râfi' ile karşılaştırmıştır. Şâban 765'te vefat etti.",
    h: [{ k: 'mizzi', kaynak: SUY(537) }],
  };
  B['tacuddin-subki'] = {
    bio: "727'de (1327) Kahire'de doğdu. İlk eğitimini babası Takıyyüddin es-Sübkî'den aldı; babası Şam kādılkudâtı olunca 739'da onunla Dımaşk'a gitti. Zehebî, Mizzî, Ebû Hayyân, İbn Seyyidinnâs ve Bedreddin İbn Cemâa'dan okudu.\n\nOn sekiz yaşında fetva icazeti aldı ve sonra babasının yerine Şam kādılkudâtı oldu. Zehebî'ye her gün iki kez gittiğini, onun \"bizi bu sanatta yetiştiren\" hocası olduğunu söyler. Tabakātü'ş-Şâfiiyyeti'l-kübrâ ve usûlde Cem'u'l-cevâmi' en tanınmış eserleridir. 771'de Dımaşk'ta vebadan vefat etti.",
    h: [
      { k: 'ebu-hayyan', kaynak: DIA('subki-taceddin', 'Sübkî, Tâceddin') },
      { k: 'ibn-seyyidinnas', kaynak: DIA('subki-taceddin', 'Sübkî, Tâceddin') },
      { k: 'kutbuddin-halebi', not: 'İcazet verdi.', kaynak: SUY(523) },
    ],
  };
  B['ibn-rafi'] = {
    bio: "Zilkade ya da Zilhicce 704'te (1305) Kahire'de muhaddis bir ailede doğdu; babası hadis ve kıraat âlimi, annesi Hatice bint Ali el-Halebiyye de hadis rivayet eden bir hanımdı. Babası onun için Dimyâtî'den icazet aldı ve 714'te onu Şam'a götürdü.\n\nKendi talebiyle hadise 721'den sonra yöneldi; Kahire'de Kutbüddin el-Halebî ve İbn Seyyidinnâs'tan, Şam'da Mizzî, Birzâlî ve Zehebî'den hadis ilmini öğrendi. Takıyyüddin es-Sübkî'nin himayesinde Dımaşk'a yerleşti ve dârülhadislerde ders verdi. Birzâlî'nin tarihine yazdığı zeyl el-Vefeyât ve binden fazla hocayı içeren Mu'cem'i başlıca eserleridir. Süyûtî bu Mu'cem'in son derece zabtlı ve faydalarla dolu olduğunu söyler. 18 Cemâziyelevvel 774'te vefat etti.",
  };
  B['kirmani'] = {
    bio: "16 Cemâziyelâhir 717'de (1317) Kirman'da doğdu. Asıl hocası, on iki yıl yanında kaldığı Adudüddin el-Îcî'dir; ondan özellikle dil ve edebiyatta istifade etti.\n\nMısır, Şam, Kudüs, Hicaz ve Irak'ı dolaşarak Sahîh-i Buhârî'yi dinledi; Ezher muhaddisi Nâsırüddin el-Fârikī'den semâ ve arz yoluyla aldı. Ardından Bağdat'a yerleşip otuz yıldan fazla ders verdi. Buhârî'ye dil ve kelâm yönü güçlü bir şerh olan el-Kevâkibü'd-derârî'yi yazdı; İbn Hacer bu şerhten Fethu'l-Bârî'de sık sık yararlanır. 786'da hac dönüşü yolda vefat etti, Bağdat'a defnedildi.",
  };
  B['ibn-receb'] = {
    bio: "Rebîülevvel 736'da (1335) Bağdat'ta muhaddis bir ailede doğdu. Bağdat'ta Zerîrânî'nin derslerini takip etti; küçük yaşta Safiyyüddin İbn Abdülhak ve Alemüddin el-Birzâlî'nin meclislerinde bulunup icazet aldı.\n\nAilesiyle Dımaşk'a gelince İbn Kayyim el-Cevziyye'nin en yakın talebelerinden oldu, Meydûmî'den de dinledi. Buhârî ve Tirmizî'nin İlel'ine yazdığı şerhlerle ilel ilmini yeniden canlandırdı; Kırk Hadis şerhi Câmiu'l-ulûm ve'l-hikem ve Hanbelî tabakātı da tanınır. Receb 795'te Dımaşk'ta vefat etti.",
    h: [{ k: 'birzali', not: 'Küçük yaşta icazet aldı.', kaynak: DIA('ibn-receb', 'İbn Receb') }],
  };

  /* ───────── 9. asır ───────── */
  B['ibn-mulakkin'] = {
    bio: "24 Rebîülevvel 723'te (1323) Kahire'de, Endülüs'e yerleşmiş Medineli ensar soyundan bir ailede doğdu. Babası küçükken öldü ve onu yetiştiren hocasına nisbetle İbnü'l-Mülakkın diye anıldı; bu lakaptan hoşlanmazdı.\n\nZeyn er-Rahbî ve Moğultay'ın yanında hadiste yetişti; fıkıhta Şâfiî mezhebinin şeyhlerinden oldu. Üç yüze yakın eser yazdı: Râfiî'nin delillerini tahrîc eden el-Bedrü'l-münîr, Buhârî şerhi et-Tavzîh ve usûlde el-Mukni' bunlardandır. İbn Hacer'in hocasıdır. 16 Rebîülevvel 804'te vefat etti.",
  };
  B['bulkini'] = {
    bio: "12 Şâban 724'te (1324) Garbiye bölgesindeki Bulkīne'de doğdu; yedi yaşında hâfız oldu. On iki yaşında babasıyla Kahire'ye gitti ve ezberlediği metinleri Takıyyüddin es-Sübkî'ye arz etti.\n\nFıkhı İbn Adlân ve Takıyyüddin es-Sübkî'den, nahvi Ebû Hayyân'dan okudu; Mizzî ve Zehebî'den icazet aldı. Şâfiî mezhebinin riyaseti ve fetva makamı onda toplandı. Kısa bir süre Şam kādılkudâtı oldu. İbnü's-Salâh'ın Mukaddime'sine Mehâsinü'l-ıstılâh adıyla şerh yazdı. 805'te Kahire'de vefat etti.",
    h: [
      { k: 'ebu-hayyan', kaynak: SUY(542) },
      { k: 'mizzi', not: 'İcazet verdi.', kaynak: SUY(542) },
      { k: 'zehebi', not: 'İcazet verdi.', kaynak: SUY(542) },
    ],
  };
  /* ───────── Sahîhayn râvileri (Siyer'e göre) ───────── */
  const SIY = (c, s, id) => ({ ad: `Zehebî, Siyer, ${c}, ${s}`, url: `https://shamela.ws/book/10906/${id}` });
  B['ibn-sufyan'] = {
    bio: "Nîşâburlu fakih ve zâhid; Hanefî fakih Eyyûb b. Hasan ez-Zâhid'in talebesidir. Irak'ta Süfyân b. Vekî', Rey'de Muhammed b. Mukātil ve Mekke'de Muhammed b. Ebû Abdurrahman el-Mukrî'den dinledi.\n\nZehebî'nin kaydına göre Müslim'in yanından uzun süre ayrılmadı ve Sahîh'i ondan dinledi; yalnız hac, vasiyetler ve imâret bölümlerinden yaklaşık otuz yedi varak ondan doğrudan dinlenmemiş, vicâde yoluyla rivayet edilmiştir. Bu ayrıntı nüshalarda dikkatle işaretlenir. Sahîh-i Müslim'in bugüne ulaşan rivayeti Cülûdî vasıtasıyla ondan gelir. 308'de vefat etti.",
  };
  B['culudi'] = {
    bio: "Nîşâburlu zâhid ve muhaddis; tam adı Muhammed b. Îsâ b. Amrûye'dir. Sahîh-i Müslim'i İbn Süfyân'dan dinledi; İbn Huzeyme, Ebü'l-Abbâs es-Serrâc ve Muhammed b. el-Müseyyeb el-Ergıyânî'den de rivayet etti. Hiç rıhleye çıkmadı.\n\nZehebî onu \"imam, zâhid, kudve, sâdık\" diye anar; Hâkim onu Nîşâbur'un büyük âbidlerinden sayar. Hâkim ve Abdülgāfir el-Fârisî ondan dinledi; Müslim'in Sahîh'i Abdülgāfir vasıtasıyla Horasan'da yaşamaya devam etti. 368'de vefat etti.",
    h: [{ k: 'ibn-huzeyme', kaynak: SIY('XVI', 301, 10150) }],
  };
  B['ebu-zeyd-mervezi'] = {
    bio: "301'de doğdu. Sahîh-i Buhârî'yi Firebrî'den dinledi; Ahmed b. Muhammed el-Münkedirî ve Ebü'l-Abbâs ed-Degūlî'den de rivayet etti. Çok yolculuk yaptı ve Sahîh'i farklı yerlerde okuttu; bir süre Mekke'de yaşadı.\n\nZehebî onu \"Şâfiîlerin şeyhi, imam, müftî, zâhid\" diye anar. Hâkim, Ebû Abdurrahman es-Sülemî, Dârekutnî, Berkānî ve Asîlî ondan rivayet etti; Kābisî de Sahîh'i ondan aldı. Bu sayede Buhârî rivayeti onun talebeleriyle Endülüs ve Mağrib'e geçti. 371'de Merv'de vefat etti.",
    h: [{ k: 'ebu-zeyd-mervezi', yon: 'talebe', t: ['hakim', 'sulemi', 'burkani'] }],
  };
  B['ebul-leys'] = {
    bio: "Semerkantlı Hanefî fakih, müfessir ve vâiz; \"İmâmü'l-hüdâ\" lakabıyla anılır. Muhammed b. Fazl b. Enîf el-Buhârî'den rivayet etti; fıkhı Ebû Ca'fer el-Hinduvânî'den okudu.\n\nVaaz ve ahlâk hadislerini derleyen Tenbîhü'l-gāfilîn ve Bustânü'l-ârifîn'i asırlarca okundu; Bahrü'l-ulûm adlı tefsiri ve fetvaları da vardır. Zehebî, eserlerinde mevzû hadislere de yer verildiğini belirtir. Vefatını 375 olarak kaydeder (373 ve 393 de denmiştir).",
    not: "Zehebî, Siyer: vefat 375; DİA ve diğer kaynaklar 373 verir.",
  };
  B['mustemli'] = {
    bio: "Belhli muhaddis; Ebû İshak İbrâhîm b. Ahmed b. İbrâhîm el-Müstemlî. Sahîh-i Buhârî'yi Firebrî'den 314'te dinledi; Sahîh'in Firebrî'den gelen üç büyük rivayetinden biri onunkidir.\n\nÇok yolculuk yaptı ve kendisi için bir Mu'cem derledi. Ebû Zer el-Herevî Sahîh'i 374'te Belh'te ondan okudu ve onu \"Belh'teki sika ve mütkın kişilerden\" sayar. 376'da vefat etti.",
  };
  B['hammuye'] = {
    bio: "293'te doğdu; Serahs hatibi Ebû Muhammed Abdullah b. Ahmed b. Hammûye. 316'da Sahîh-i Buhârî'yi Firebrî'den dinledi; Abd b. Humeyd'in Müsned'i ile Tefsîr'ini İbrâhîm b. Huzeym eş-Şâşî'den, Dârimî'nin Müsned'ini Îsâ b. Ömer es-Semerkandî'den aldı.\n\nEbû Zer el-Herevî onu \"sika, güzel asılların sahibi\" diye anar; Sahîh'in bâblarını sayan bir cüz de yazdı. Ebû Zer, Kurrâb ve Dâvûdî ondan rivayet etti. Dâvûdî vasıtasıyla Ebü'l-Vakt'e, oradan İbn Hacer'e uzanan Buhârî isnadının halkasıdır. 381'de vefat etti.",
  };
  B['kusmihani'] = {
    bio: "Merv'e bağlı Küşmîhen'den Ebü'l-Heysem Muhammed b. Mekkî. Sahîh-i Buhârî'yi Firebrî'den rivayet etti ve birçok kez okuttu; İsmâil es-Saffâr'dan da dinledi.\n\nZehebî onu \"muhaddis, sika\" diye anar. Ebû Zer el-Herevî Sahîh'i 387'de Merv'de ondan okudu; Ebû Osman el-Bahîrî, Müstağfirî ve Mekke'de yaşayan Kerîme el-Mervezîyye de ondan dinledi. Arefe günü 389'da vefat etti.",
  };
  B['ismaili'] = {
    bio: "277'de Cürcân'da doğdu. Ebû Halîfe, Ebû Ya'lâ ve İbn Huzeyme'den dinledi. Bölgesinde Şâfiîlerin reisiydi.\n\nHâkim onu \"asrının tek adamı, muhaddislerin ve fakihlerin şeyhi, riyaset, mürüvvet ve cömertlikte en yücesi\" diye anar; isnadı yükseldi ve Acem diyarında âlî rivayette tek kaldı. Sahîh-i Buhârî üzerine yazdığı Müstahrec, Mu'cem'i ve Müsnedü Ömer'i vardır. Hâkim ve Berkānî ondan rivayet etti. Receb 371'de vefat etti.",
    h: [{ k: 'ibn-huzeyme', kaynak: SUY(382) }],
  };
  B['ibn-mende'] = {
    bio: "310'da İsfahan'da, hâfızlar yetiştiren Mende ailesinde doğdu; atası İstendâr, sahâbe İsfahan'ı fethettiğinde müslüman olmuştu. Babası, Heysem b. Küleyb, İbnü'l-A'râbî ve Hayseme b. Süleyman dahil 1700 hocadan dinledi; İbn Ebû Hâtim ona icazet verdi.\n\nRıhleden döndüğünde kitaplarının kırk deve yükü olduğu nakledilir; Süyûtî \"bu ümmetten onun dinlediğini dinleyen, topladığını toplayan kimse bize ulaşmadı\" der. Ebû Ali en-Nîsâbûrî \"Mende oğulları dünyanın hâfızlarıdır\" demiştir. Ma'rifetü's-sahâbe ve Kitâbü'l-Îmân başlıca eserleridir. 395'te vefat etti.",
    h: [
      { k: 'ibnul-arabi-mekki', kaynak: SUY(408) },
      { k: 'hayseme', not: 'Trablus\'ta ondan bin cüz yazdı.', kaynak: SUY(355) },
    ],
  };
  B['kabisi'] = {
    bio: "324'te doğdu; Kayrevanlı Ebü'l-Hasan Ali b. Muhammed el-Meâfirî. Gözleri görmüyordu. 352'de hacca gittiğinde Mekke'de Sahîh-i Buhârî'yi Ebû Zeyd el-Mervezî'den dinledi ve Mağrib'e getirdi.\n\nSüyûtî onu \"Mağrib'in allâmesi; hadis ve ilelin hâfızı, ricâli bilen, iki usûlde ârif, fıkıhta reis, zâhid ve vera' sahibi\" diye anar. Mâlikî fıkhında el-Mülahhas'ı ve muallim-talebe ilişkisine dair er-Risâletü'l-mufassala'yı yazdı. Rebîülâhir 403'te vefat etti.",
  };
  B['abdulgani-ezdi'] = {
    bio: "332'de Mısır'da doğdu. Dârekutnî, Mısır'a geldiğinde ondan istifade etti; İbnü's-Seken'den de dinledi.\n\nSüyûtî onu \"zamanında hadis ilminin ve hıfzının imamı, sika ve me'mûn\" diye anar; Berkānî \"Dârekutnî'den sonra ondan hâfızını görmedim\" der. Yazılışı benzeyen isimleri ayırt eden el-Mü'telif ve'l-muhtelif ve el-Müştebihü'n-nisbe ile bu türün öncülerinden oldu. 7 Safer 409'da vefat etti.",
    h: [{ k: 'ibnus-seken', kaynak: SUY(379) }],
  };
  B['sulemi'] = {
    bio: "330'da Nîşâbur'da doğdu. Esam'dan ve Nîşâbur'un muhaddislerinden dinledi; ricâl hakkında Dârekutnî'ye ehil bir kişinin sorabileceği sorular yöneltti (bu sorular ayrıca derlenmiştir).\n\nSüyûtî onu \"hâfız, âlim, zâhid, şeyhlerin şeyhi\" diye anar; ancak bazı muhaddisler sûfîler için hadis uydurduğu iddiasıyla onu tenkit etmiştir. Tasavvuf tarihinin temel kaynağı Tabakātü's-sûfiyye ve işârî tefsiri Hakāiku't-tefsîr başlıca eserleridir. Beyhakī ve Kuşeyrî talebelerindendir. Şâban 412'de vefat etti.",
  };
  B['sehmi'] = {
    bio: "Cürcânlı Ebü'l-Kāsım Hamza b. Yûsuf; Hişâm b. Âs'ın soyundandır. Bölgeleri dolaşarak İbn Adî, İbnü'l-Mukrî ve İsmâîlî başta olmak üzere pek çok hocadan dinledi.\n\nSüyûtî, tasnif ettiğini, cerh ve ta'dîl yaptığını, hadisleri tashih ve ta'lîl ettiğini söyler. Dârekutnî'ye yönelttiği ricâl soruları (Süâlâtü Hamza) ve Cürcân âlimlerinin tarihi Târîhu Cürcân başlıca eserleridir. Ebû Mes'ûd ed-Dımaşkī'den de rivayet etti. 427'de vefat etti.",
    h: [{ k: 'ebu-mesud-dimaski', kaynak: SUY(417) }],
  };
  B['abdulgafir'] = {
    bio: "353'te doğdu; Nîşâburlu Ebü'l-Hüseyin Abdülgāfir b. Muhammed el-Fârisî. Sahîh-i Müslim'i Cülûdî'den, Garîbü'l-hadîs'i Hattâbî'den dinledi.\n\nDoksan beş yıllık ömrüyle Sahîh-i Müslim'in Horasan'daki en âlî râvisi oldu; Fürâvî ve Zâhir eş-Şehhâmî ondan dinledi ya da icazet aldı. Torunu Abdülgāfir b. İsmâil de Nîşâbur tarihine zeyl yazan bir hâfızdır. 448'de vefat etti.",
  };
  B['beyhaki'] = {
    bio: "384'te Nîşâbur'a bağlı Beyhak'ta doğdu. On beş yaşında hadis dinlemeye başladı; Hâkim en-Nîsâbûrî'nin en önde gelen talebesi oldu, Ebû Abdurrahman es-Sülemî ve Berkānî'den de dinledi. Bağdat, Kûfe, Mekke ve Hicaz'a gitti.\n\nŞâfiî mezhebinin görüşlerini hadislerle temellendiren es-Sünenü'l-kübrâ, Şuabü'l-îmân, Delâilü'n-nübüvve, Ma'rifetü's-sünen ve'l-âsâr ile el-Esmâ ve's-sıfât'ı yazdı; İmâmü'l-Haremeyn \"Şâfiî'nin Beyhakī'ye minneti olmayan tek Şâfiî Beyhakī'dir\" demiştir. Fürâvî ve Zâhir eş-Şehhâmî eserlerini rivayet etti. 458'de Nîşâbur'da vefat etti.",
  };
  B['ibn-abdilber'] = {
    bio: "Rebîülâhir 368'de Kurtuba'da doğdu. Talamenkî, İbnü'l-Faradî ve Kurtubalı hocalardan okudu; Mısır'dan Abdülganî b. Saîd ona icazet verdi. Endülüs dışına çıkmadı.\n\nÖnce Zâhirî iken Mâlikî fakihi oldu. Bâcî \"Endülüs'te hadiste onun gibisi yoktu\" der. Muvatta' üzerine yazdığı et-Temhîd ve el-İstizkâr, sahâbe biyografileri el-İstîâb ve ilim âdâbına dair Câmiu beyâni'l-ilm başlıca eserleridir. Lizbon kadılığı yaptı. Humeydî ve Ebû Ali el-Gassânî talebelerindendir. 463'te Şâtıbe'de vefat etti.",
    h: [
      { k: 'talamenki', kaynak: SUY(423) },
      { k: 'abdulgani-ezdi', not: 'Mısır\'dan icazet verdi.', kaynak: SUY(431) },
    ],
  };
  B['baci'] = {
    bio: "403'te Batalyevs'te (Badajoz) doğdu; ailesi Bâce'dendi. 426'da doğuya gitti: Mekke'de üç yıl Ebû Zer el-Herevî'nin yanında kaldı, Bağdat'ta Ebü't-Tayyib et-Taberî'den fıkıh, Musul'da Simnânî'den kelâm okudu.\n\nOn üç yıl sonra Endülüs'e dönünce İbn Hazm ile meşhur münazaralarını yaptı. Süyûtî'ye göre hadis, ilel, ricâl, fıkıh ve kelâmda ileri gitti. Muvatta' şerhi el-Müntekā ve Buhârî ricâline dair et-Ta'dîl ve't-tecrîh'i başlıca eserleridir. Ebû Ali es-Sadefî ve Turtûşî talebelerindendir. 19 Receb 474'te Almería'da vefat etti.",
  };
  B['begavi'] = {
    bio: "Merverrûz yakınındaki Bağşûr'dan; \"Muhyissünne\" ve \"Rüknüddin\" lakaplarıyla anılır. Fıkhı Kādî Hüseyin el-Merverrûzî'den okudu, ondan ve Ebû Ömer el-Melîhî'den hadis dinledi.\n\nSüyûtî onu \"rabbânî âlimlerden, ibadet ve kanaat ehli\" diye anar ve niyetinin hâlisliği sayesinde eserlerine bereket verildiğini söyler. Mesâbîhu's-sünne asırlarca hadis eğitiminin ders kitabı oldu; Şerhu's-sünne ve tefsiri Meâlimü't-tenzîl de çok okundu. Şevval 516'da Merverrûz'da seksen yaşında vefat etti.",
  };
  B['ebul-vakt'] = {
    bio: "458'de doğdu; Siczî asıllı, Heratlı sûfî Ebü'l-Vakt Abdülevvel b. Îsâ. 465'te yedi yaşında Bûşenc'de Dâvûdî'den Sahîh-i Buhârî'yi, Dârimî'nin Sünen'ini ve Abd b. Humeyd'in Müsned'ini dinledi.\n\nZehebî onu \"şeyhülislâm, müsnidü'l-âfâk\" diye anar; uzun ömrüyle zamanının en âlî Buhârî isnadına sahip oldu ve 552'de Bağdat'a gelince halk ona akın etti. İbnü'l-Cevzî ve İbnü'z-Zebîdî Sahîh'i ondan dinledi; İbn Hacer'e uzanan isnad bu halkadan geçer. 553'te Bağdat'ta vefat etti.",
  };
  B['ibnul-cevzi'] = {
    bio: "509 veya 510'da Bağdat'ta doğdu; soyu Hz. Ebû Bekir'e dayanır. 516'da hadis dinlemeye başladı; İbnü'l-Husayn, İbn Nâsır ve Ebü'l-Vakt'ten dinledi.\n\nZehebî onu \"Irak'ın iftiharı, hâfız, müfessir, vâiz\" diye anar. Bağdat'ın en etkili vâizi oldu; meclislerine on binlerin katıldığı nakledilir. Uydurma hadisleri toplayan el-Mevzûât ve zayıf hadislere dair el-İlelü'l-mütenâhiye ile hadis tenkidinde, el-Muntazam ile tarihte önemli eserler verdi. İbnü'n-Neccâr ve Ziyâeddin el-Makdisî talebelerindendir. 597'de vefat etti.",
  };
  B['abdulgani-makdisi'] = {
    bio: "541'de Nablus yakınındaki Cemmâîl'de doğdu; Haçlı istilası nedeniyle ailesiyle Dımaşk'ın Sâlihiyye semtine göçtü. Bağdat'ta İbnü'l-Battî'den, İsfahan'da Ebû Mûsâ el-Medînî'den, İskenderiye'de Silefî'den dinledi; Silefî'den bin cüz yazdı.\n\nSüyûtî onu \"İslâm'ın muhaddisi\" diye anar: kendisine bir hadis sorulduğunda hemen söyler, bir râvi sorulduğunda nesebini sayardı. Kütüb-i Sitte râvilerine dair el-Kemâl, Mizzî'nin Tehzîbü'l-Kemâl'inin temelidir; Umdetü'l-ahkâm da çok şerh edildi. Akaid görüşleri yüzünden Dımaşk'tan sürüldü. 600'de Kahire'de vefat etti.",
    h: [{ k: 'ebu-musa-medini', kaynak: SUY(487) }],
  };
  B['muayyed-tusi'] = {
    bio: "524'te doğdu; Tûslu, sonra Nîşâburlu el-Müeyyed b. Muhammed. 530'da altı yaşında Sahîh-i Müslim'i Fürâvî'den dinledi; Sahîh-i Buhârî'yi Vecîh eş-Şehhâmî ve başkalarından, Muvatta'ı Hibetullah es-Seyyidî'den aldı.\n\nZehebî onu \"Horasan müsnidi, mukrî, muammer\" diye anar. Uzun ömrüyle Sahîh-i Müslim'de dünyanın en âlî isnadına sahip oldu ve her yerden talebe ona rıhle yaptı. İbnü's-Salâh Sahîh-i Müslim'i Nîşâbur'da ondan dinledi. Moğol istilasının arifesinde, 617'de vefat etti.",
  };
  B['ibnuz-zebidi'] = {
    bio: "545 veya 546'da Bağdat'ta doğdu; Zebîd asıllı bir Hanbelî ailedendir. Dedesinden, Ebü'l-Vakt es-Siczî'den ve Ebü'l-Fütûh et-Tâî'den dinledi.\n\nVezir İbn Hübeyre'nin medresesinde müderrislik yaptı. Zehebî onu \"Şam müsnidi, dindar, mütevazı ve sâdık\" diye anar. Sahîh-i Buhârî'yi Bağdat, Dımaşk ve Halep'te okuttu; İbnü'd-Dübeysî, Ziyâeddin el-Makdisî, Birzâlî'nin dedesi ve Haccâr ondan dinledi. 631'de vefat etti.",
  };
  B['ziya-makdisi'] = {
    bio: "569'da Dımaşk'ın Sâlihiyye semtinde Makdisî ailesinde doğdu. Silefî ona icazet verdi; İbnü'l-Cevzî ve Ebû Ca'fer es-Saydalânî'den dinledi. Bağdat, Hemedan, İsfahan, Merv, Herat ve Mısır'a rıhleler yaptı; dayısı Abdülganî el-Makdisî'nin yanında yetişti.\n\nSüyûtî onu \"Şam muhaddisi, sünnetin şeyhi, ricâlde merci\" diye anar. Sâlihiyye'de Dârülhadîs ed-Ziyâiyye'yi kurdu. Sahîhayn dışındaki sahih hadisleri seçtiği el-Ehâdîsü'l-muhtâre, Hâkim'in Müstedrek'inden daha sağlam kabul edilmiştir. Cemâziyelevvel 643'te vefat etti.",
    h: [{ k: 'silefi', not: 'İcazet verdi.', kaynak: SUY(497) }],
  };
  B['ibnus-salah'] = {
    bio: "577'de Şehrezûr yakınında Kürt bir ailede doğdu; babası Salâhuddin Abdurrahman da fakihti. Musul'da okudu, sonra Bağdat, Nîşâbur, Merv ve Dımaşk'a gitti. Nîşâbur'da Sahîh-i Müslim'i Müeyyed et-Tûsî'den dinledi; İbn Sükeyne ve İbn Taberzed'den de rivayet etti.\n\nKudüs'te Salâhiyye'de, sonra Dımaşk'ta Dârülhadîs el-Eşrefiyye'nin ilk şeyhi olarak ders verdi. Süyûtî onu tefsir, hadis ve fıkıhta zamanının fazıllarından, selefî ve zâhid biri olarak anar. Ulûmü'l-hadîs (Mukaddime) hadis usûlünün asırlarca şerh ve ihtisar edilen ana metni oldu. Rebîülâhir 643'te vefat etti.",
  };
  B['ibn-dakik'] = {
    bio: "Şâban 625'te Yenbu yakınlarında, hac yolunda doğdu; Mâlikî babası ile Şâfiî annesinin oğludur. Kūs'ta yetişti. İbnü'l-Cümmeyzî ve Silefî'nin torunundan hadis, İzz b. Abdüsselâm'dan Şâfiî fıkhı okudu; Münzirî'nin derslerine katıldı.\n\nSüyûtî onu \"müctehid, zamanının en zekilerinden, geniş ilimli, geceleri uyumayan\" biri olarak anar. Mâlikî ve Şâfiî fıkhını birlikte okuttu ve Mısır kādılkudâtı oldu. Ahkâm hadislerine dair el-İmâm ve el-İlmâm, Umdetü'l-ahkâm şerhi İhkâmü'l-ahkâm ve usûlde el-İktirâh başlıca eserleridir. İbn Seyyidinnâs ve Zehebî ondan istifade etti. Safer 702'de vefat etti.",
  };
  B['ibn-teymiyye'] = {
    bio: "Rebîülevvel 661'de Harran'da Hanbelî âlimler yetiştiren bir ailede doğdu; Moğol tehdidi yüzünden aile 667'de Dımaşk'a göçtü. İbn Ebü'l-Yüsr ve İbn Abdüddâim'den hadis dinledi, ricâl ve ilelde ileri gitti.\n\nSüyûtî onu \"hâfız, nâkıd, müctehid, müfessir, zühd ehlinin önderi\" diye anar ve üç yüz cilt eser yazdığını söyler. Görüşleri yüzünden defalarca hapsedildi. Mizzî, Birzâlî ve Zehebî ile birlikte Dımaşk hâfızları çevresini derinden etkiledi; İbnü'l-Kayyim, İbn Abdülhâdî ve İbn Kesîr talebelerindendir. 20 Zilkade 728'de Dımaşk kalesinde mahpusken vefat etti.",
  };
  B['haccar'] = {
    bio: "624 civarında doğdu; Sâlihiyyeli taş ustası Ebü'l-Abbâs Ahmed b. Ebû Tâlib. Zehebî'nin sorusuna Melik Nâsır Dâvûd'un 626'daki Dımaşk kuşatmasını hatırladığını söylemiştir. İbnü'z-Zebîdî ve İbnü'l-Letî'den dinledi; Bağdat'tan Katîî ve İbn Rûzbe icazet verdi.\n\nÜmmî bir esnaf olduğu için 706'ya kadar muhaddislerce bilinmedi; sonra adı İbnü'z-Zebîdî'nin Sahîh-i Buhârî dinleyicileri arasında bulununca yüz yaşını aşmış hâliyle Sahîh'i Dımaşk, Kahire, Hama, Ba'lebek ve Humus'ta yetmişten fazla kez okuttu. İbn Kesîr ve İbrâhîm et-Tenûhî ondan dinledi. 730'da vefat etti.",
  };
  B['mizzi'] = {
    bio: "654'te Halep'te doğdu, Dımaşk yakınındaki Mizze'de büyüdü. Önce biraz fıkıh okudu, sonra hadise yöneldi; Kahire'de Dimyâtî'den, Dımaşk'ta Fahreddin İbnü'l-Buhârî'den dinledi. Dil ve sarfta da maharet kazandı.\n\nSüyûtî, Zehebî'nin sözleriyle onu \"ricâl ilminin bayraktarı; gözler onun bir benzerini görmedi\" diye anar. Kütüb-i Sitte râvilerinin ansiklopedisi Tehzîbü'l-Kemâl ile hadislerin isnad haritası Tuhfetü'l-eşrâf'ı yazdı. Dârülhadîs el-Eşrefiyye'nin şeyhliğini yürüttü. İbn Kesîr onun damadıdır. 12 Safer 742'de vefat etti.",
  };
  B['ibn-abdulhadi'] = {
    bio: "Receb 705'te Dımaşk'ta Makdisî ailesinde doğdu. Ahmed b. Abdüddâim'in talebelerinden dinledi; fıkhı İbn Müslim'den okudu, İbn Teymiyye'nin derslerine devam etti.\n\nSafedî \"yaşasaydı bir âyet olurdu\" der; Mizzî'yi ricâlde düzelttiği, Mizzî'nin de bunu kabul ettiği nakledilir. İbn Kesîr ve Mizzî onunla her karşılaşmalarında ondan faydalandıklarını söylemiştir. Ahkâm hadislerine dair el-Muharrer ve Tenkîhu't-Tahkīk'i yazdı. Genç yaşta, 744'te vefat etti.",
  };
  B['mugultay'] = {
    bio: "689'da doğdu; Türk asıllı Hanefî hâfız Moğultay b. Kılıç. Debûsî ve Hatenî'den dinledi. İbn Seyyidinnâs'tan sonra Zâhiriyye'de hadis müderrisi oldu.\n\nIrâkī, nesep bilgisinde çok iyi olduğunu ama diğer hadis konularında orta seviyede kaldığını söyler. Yüzden fazla eser yazdı: Buhârî şerhi et-Telvîh, Tehzîbü'l-Kemâl'e ikmâli, siyer eseri ez-Zehrü'l-bâsim bunlardandır. İbnü'l-Mülakkın onun yanında yetişti. 24 Şâban 762'de vefat etti.",
  };
  B['ibn-kesir'] = {
    bio: "700 civarında Busrâ'da doğdu. Haccâr ve onun tabakasından dinledi; Mizzî'nin yanında yetişti ve onun damadı oldu. İbn Teymiyye'nin talebeleri arasında yer aldı.\n\nZehebî onu \"imam, müftî, sika, mütefennin, mütkın muhaddis\" diye anar; İbn Hacer eserlerinin hayatında yayıldığını, ancak âlî isnad toplamakta muhaddislerin yolunda olmadığını söyler. Rivayet tefsiri, el-Bidâye ve'n-nihâye, Ahmed'in Müsned'ini alfabetik düzenleyen Câmiu'l-mesânîd ve İbnü's-Salâh'ın Mukaddime'sinin ihtisarı başlıca eserleridir. Şâban 774'te Dımaşk'ta vefat etti.",
    h: [{ k: 'haccar', kaynak: SUY(533) }],
  };
  B['tenuhi'] = {
    bio: "709'da doğdu; Ba'lebek asıllı, Dımaşk'ta yetişip Kahire'ye yerleşen Burhâneddin İbrâhîm b. Ahmed. Takıyyüddin Süleyman ve İbn Mektûm dahil dört yüz kişiden icazet aldı; Haccâr'dan Sahîh-i Buhârî'yi dinledi.\n\nKıraati Ca'berî ve Ebû Hayyân'dan okudu. İbn Hacer onun için altı yüzden fazla hocayı içeren bir Mu'cem derledi. Haccâr'dan aldığı Buhârî rivayetini İbn Hacer'e aktardı; Fethu'l-Bârî'nin isnadı bu halkadan geçer. 800'de vefat etti.",
    h: [{ k: 'ebu-hayyan', not: 'Kıraat okudu.', kaynak: { ad: "İbn Hacer, ed-Dürerü'l-kâmine, I, 9", url: 'https://shamela.ws/book/6674/8' } }],
  };
  B['iraki'] = {
    bio: "Cemâziyelevvel 725'te Kahire yakınındaki Menşe'e el-Mihrânî'de doğdu; babası Erbil'e bağlı Râzıyân'dandı. Sencer el-Câvlî, İbn Şâhidü'l-Ceyş, İbn Abdülhâdî ve Takıyyüddin es-Sübkî'den dinledi.\n\nKudüs'te Alâî'nin, Dımaşk'ta İbn Râfi'in yanında yetişti. İmlâ meclislerini yeniden canlandırdı; Süyûtî onu \"asrın hâfızı\" diye anar. Usûl manzumesi Elfiyye, İhyâ hadislerini tahrîc eden el-Muğnî ve İbnü's-Salâh'a et-Takyîd ve'l-îzâh'ı başlıca eserleridir. Ölüm döşeğinde kendisinden sonra kim kalacak diye sorulunca \"İbn Hacer, sonra oğlum Ebû Zür'a, sonra Heysemî\" dediği nakledilir. 806'da vefat etti.",
  };
  B['heysemi'] = {
    bio: "735'te doğdu. Irâkī ile birlikte hadis dinledi, onun bütün semâlarına katıldı ve ömür boyu yanından ayrılmadı; Irâkī de kızını ona verdi.\n\nMetinleri çok ezberlediği için Irâkī'ye bir hadis sorulduğunda hemen söylerdi; İbn Hacer bunun asıl hıfz sayılmadığını, hıfzın ma'rifet olduğunu not eder. Irâkī'nin teşvikiyle Ahmed, Bezzâr, Ebû Ya'lâ ve Taberânî'nin Kütüb-i Sitte'de olmayan rivayetlerini (zevâid) topladı ve bunları Mecmau'z-zevâid'de birleştirdi. 807'de vefat etti.",
  };
  B['ebu-zura-iraki'] = {
    bio: "Zilhicce 762'de Kahire'de doğdu; babası Zeynüddin el-Irâkī onu küçük yaşta Fahr İbnü'l-Buhârî'nin talebelerinden dinletti ve Dımaşk'ta İbn Râfi'in meclisine götürdü.\n\nFıkhı Sirâceddin el-Bulkīnî'den okudu; İbnü'l-Mülakkın ve Ebnâsî'den de aldı. Babasının yerine imlâ meclislerini sürdürdü ve Mısır kādılkudâtı oldu. Babasının Takrîbü'l-esânîd şerhi Tarhü't-tesrîb'i tamamladı, Ebû Dâvûd şerhine başladı, usûlde Cem'u'l-cevâmi'i şerh etti. 826'da vefat etti.",
    h: [
      { k: 'bulkini', kaynak: SUY(548) },
      { k: 'ibn-mulakkin', kaynak: SUY(548) },
    ],
  };
  B['ibnul-cezeri'] = {
    bio: "751'de Dımaşk'ta doğdu. Fahr İbnü'l-Buhârî'nin talebelerinden dinledi; İbn Râfi'e Şâtıbiyye'yi ve Zehebî'nin onun için seçtiği âlî rivayetler cüzünü okudu.\n\nKıraat ilminde zamanının imamı oldu. Osmanlı Sultanı Yıldırım Bayezid'in yanında Bursa'da bulundu; Ankara Savaşı'ndan sonra Timur'la Semerkant'a gitti, sonra Şîraz kadılığı yaptı. İbn Hacer onu ed-Dürer'de birçok yerde hâfız diye niteler. en-Neşr fi'l-kırââti'l-aşr, kurrâ biyografileri Gāyetü'n-nihâye ve dua kitabı el-Hısnü'l-hasîn başlıca eserleridir. 833'te Şîraz'da vefat etti.",
  };
  B['busiri'] = {
    bio: "Muharrem 762'de doğdu. İbrâhîm et-Tenûhî, Bulkīnî, Irâkī ve Heysemî'den dinledi; hadis yazmayı ve tahrîci ömür boyu sürdürdü.\n\nKütüb-i Sitte dışındaki kaynakların zevâidini toplayan çalışmalarıyla tanınır: İbn Mâce'nin diğer beş kitapta bulunmayan hadislerini inceleyen Misbâhu'z-zücâce, Beyhakī'nin Sünen'inin zevâidi ve Tayâlisî, Müsedded, Humeydî, İbn Râhûye ve Ebû Ya'lâ müsnedlerinin zevâidini derleyen İthâfü'l-hıyereti'l-mehere bunlardandır. Muharrem 840'ta vefat etti.",
    h: [
      { k: 'tenuhi', kaynak: SUY(551) },
      { k: 'bulkini', kaynak: SUY(551) },
      { k: 'heysemi', kaynak: SUY(551) },
    ],
  };
  B['ibn-nasiruddin'] = {
    bio: "777'de Dımaşk'ta doğdu. Hadis talebine girişti; yazısını Zehebî'nin hattına öylesine benzetti ki çoğu zaman ondan ayırt edilemezdi.\n\nDımaşk'ın muhaddisi oldu ve Dârülhadîs el-Eşrefiyye'nin şeyhliğini yürüttü. Zehebî'nin el-Müştebih'ini tamamlayan Tavzîhu'l-Müştebih ile İbn Teymiyye'yi savunan er-Reddü'l-vâfir'i yazdı. Mekkeli muhaddis Necmeddin İbn Fehd onun yanında yetişti. Rebîülâhir 842'de vefat etti.",
  };
  B['ibn-hacer'] = {
    bio: "773'te Kahire'de doğdu, küçükken anne ve babasını kaybetti. Önce edebiyat ve şiirle uğraştı; 794'ten itibaren hadise yöneldi. On yıl Irâkī'nin yanından ayrılmadı; Bulkīnî, İbnü'l-Mülakkın, Heysemî ve İbrâhîm et-Tenûhî'den dinledi, Zebîd'de Fîrûzâbâdî'den okudu.\n\nZemzem içerken Zehebî'nin hıfz mertebesine ulaşmayı dilediği ve onu aştığı söylenir. Süyûtî onu \"İslâm'ın şeyhi, zamanının hâfızlarının imamı\" diye anar. Mısır kādılkudâtlığı yaptı. Fethu'l-Bârî, Tehzîbü't-Tehzîb, Takrîbü't-Tehzîb, el-İsâbe, Lisânü'l-Mîzân ve Nuhbetü'l-fiker ile hadis literatürünün son büyük külliyatını oluşturdu. Sehâvî, Kāsım b. Kutluboğa, Bikāî ve Zekeriyyâ el-Ensârî talebelerindendir. 852'de vefat etti.",
  };
  B['ibn-hicci'] = {
    bio: "4 Muharrem 751'de Dımaşk yakınında Hüsbân asıllı bir ailede doğdu. Babasının yanında yirmi yıl fıkıh okudu; İbn Kādî Şühbe ve Tâceddin es-Sübkî'den de faydalandı.\n\nHadis ilmini İbn Râfi'den aldığını açıkça söyler. Dımaşk'ta müderrislik ve kadılık yaptı, Şâfiî mezhebinin fakihi ve tarihçisi olarak tanındı. Hocası İbn Râfi'in el-Vefeyât'ına zeyl yazdı. 816'da vefat etti.",
    h: [
      { k: 'tacuddin-subki', kaynak: { ad: "Sehâvî, ed-Dav'ü'l-lâmi', I, 269", url: 'https://shamela.ws/book/6675/266' } },
      { k: 'ibn-kesir', not: 'Hadis öğrenimini onun ve İbn Râfi\'in yanında tamamladı.', kaynak: DIA('ibn-hicci', 'İbn Hiccî') },
    ],
  };
  B['firuzabadi'] = {
    bio: "729'da Şîraz'a bağlı Kâzerûn'da doğdu. Yedi yaşında Kur'an'ı ezberledi; Şîraz'da babasından ve şehrin âlimlerinden dil ve edebiyat okudu. Vâsıt, Bağdat, Dımaşk, Kudüs ve Kahire'de dinledi; Dımaşk'ta Takıyyüddin es-Sübkî'den okudu.\n\nUzun yolculuklardan sonra 796'da Yemen'e gitti ve yirmi yıl Zebîd kādılkudâtlığı yaptı; İbn Hacer ondan Zebîd'de okudu. Arap dilinin en meşhur sözlüğü el-Kāmûsü'l-muhît'in yanında Sifrü's-saâde ve bir Buhârî şerhi yazdı. 817'de Zebîd'de vefat etti.",
  };
  B['ayni'] = {
    bio: "17 Ramazan 762'de Ayıntap'ta doğdu; babası Halepli bir kadıydı. Ayıntap'ta sarf, nahiv, mantık ve Hanefî fıkhı okudu; Halep ve Kudüs'e gitti, sonra Kahire'ye yerleşti.\n\nKahire'de Memlük sultanlarına yakın oldu; muhtesiplik, nâzırlık ve Hanefî kādılkudâtlığı yaptı. Sehâvî, eserlerini kendi el yazısından okuduğunu söyler. Buhârî şerhi Umdetü'l-kārî, İbn Hacer'in Fethu'l-Bârî'siyle yarışan bir eserdir; Tahâvî şerhi Nuhabü'l-efkâr ve Hidâye şerhi el-Binâye de vardır. 855'te Kahire'de vefat etti.",
  };
  B['kasim-kutluboga'] = {
    bio: "Muharrem 802'de Kahire'de doğdu; babası Emîr Sûdûn eş-Şeyhûnî'nin âzatlısı Türk asıllı Kutluboğa'dır. Yetim büyüdü, bir süre terzilikle geçindi; işinde o kadar ustaydı ki siyah iple dikişini belli etmezdi.\n\nTefsiri Alâeddin el-Buhârî'den, hadis ilimlerini Bağdat kadısı Tâceddin en-Nu'mânî ve İbn Hacer'den, fıkhı İbnü'l-Hümâm ve diğerlerinden okudu. Hanefî âlimlerinin tabakātı Tâcü't-terâcim ve Kütüb-i Sitte dışındaki sika râvileri toplayan es-Sikāt başlıca eserleridir. 879'da vefat etti.",
  };
  B['bikai'] = {
    bio: "809 civarında Bikā' bölgesindeki Hırbetü Rûhâ köyünde doğdu. Dımaşk ve Kudüs'te okuduktan sonra büyük yoksulluk içinde Kahire'ye geldi ve İbn Hacer'in yanında yetişti.\n\nSûreler ve âyetler arasındaki münasebeti inceleyen tefsiri Nazmü'd-dürer onun en önemli eseridir. Sehâvî ile şiddetli tartışmaları oldu; Sehâvî biyografisinde ona karşı sert bir dil kullanır. Ömrünün sonunda Dımaşk'a döndü ve 885'te orada vefat etti.",
  };
  B['sehavi'] = {
    bio: "Rebîülevvel 831'de Kahire'de doğdu. Dört yaşında ailesi İbn Hacer'in evinin yanına taşındı; yirmi yıla yakın onun yanından ayrılmadı ve en önde gelen talebesi oldu.\n\nKahire, Dımaşk, Halep ve Hicaz'da yüzlerce hocadan dinledi; ömrünün son yıllarını Mekke ve Medine'de geçirdi. Usûl şerhi Fethu'l-muğîs, meşhur hadislere dair el-Makāsıdü'l-hasene, tarih yazımını savunan el-İ'lân bi't-tevbîh ve 9. asrın biyografi ansiklopedisi ed-Dav'ü'l-lâmi' başlıca eserleridir. Süyûtî ile şiddetli bir rekabeti vardı. 902'de Medine'de vefat etti.",
  };
  B['suyuti'] = {
    bio: "1 Receb 849'da Kahire'de doğdu; annesi Türk asıllı bir câriyeydi. Babasını küçük yaşta kaybetti; Kur'an'ı, Umde'yi ve Minhâc'ı ezberledi. Şümünnî, Bulkīnî'nin oğlu Alemüddin ve on dört yıl yanında kaldığı Kâfiyeci'den okudu.\n\nHadisin hemen her alanında derleme yaptı ve beş yüzü aşkın eser bıraktı: el-Câmiu's-sağîr, Cem'u'l-cevâmi', usûl şerhi Tedrîbü'r-râvî, rivayet tefsiri ed-Dürrü'l-mensûr ve Zehebî'yi özetleyip zeylediği Tabakātü'l-huffâz bunlardandır. Kendisini asrın müceddidi ve müctehid saydı; Sehâvî ile şiddetli bir rekabeti vardı. Kırk yaşında halktan uzaklaşıp telife çekildi. 911'de vefat etti.",
  };
  B['kastallani'] = {
    bio: "12 Zilkade 851'de Mısır'da doğdu. Kur'an'ı, Şâtıbiyye'yi ve Cezerî'nin Tayyibe'sinin yarısını ezberledi; yedi ve on kıraati birçok hocadan okudu.\n\nHadisi Sehâvî'den ve diğer Kahire muhaddislerinden aldı. Vaazlarıyla tanındı. Sahîh-i Buhârî'nin rivayet farklarını titizlikle kaydeden şerhi İrşâdü's-sârî ile siyer eseri el-Mevâhibü'l-ledüniyye asırlarca okundu. 923'te Kahire'de vefat etti.",
  };
  B['zekeriyya-ensari'] = {
    bio: "826'da Şarkiye bölgesindeki Süneyke'de doğdu. Kur'an'ı ve Umde'yi orada ezberledi; 841'de Kahire'ye gelip Ezher'e yerleşti. Elfiyye'yi, Minhâc'ı ve Şâtıbiyye'yi ezberledi.\n\nİbn Hacer, Kāyâtî ve Şümünnî'den okudu. Uzun süre Şâfiî kādılkudâtlığı yaptı ve \"şeyhülislâm\" unvanıyla anıldı. Yüz yaşına yaklaşan ömrüyle İbn Hacer'in isnadını 10. asra taşıdı. Fıkıh, hadis ve tasavvufta şerhler yazdı. İbn Hacer el-Heytemî ve Şehâbeddin er-Remlî talebelerindendir. 926'da vefat etti.",
  };
  B['kafiyeci'] = {
    bio: "788'de (1386) Saruhan sancağına bağlı Gökçeköy'de doğdu; adı Muhyiddin Mehmed'dir. İbnü'l-Hâcib'in el-Kâfiye'siyle çok uğraştığı için \"Kâfiyeci\" diye tanındı; Bergamî nisbesi sonradan Bergama'da bulunmasından gelir.\n\nAnadolu ve İran'da tahsil gördü, Şemseddin el-Fenârî'nin talebeleri çevresinde yetişti. Kahire'ye yerleşip Şeyhûniyye Hankahı'nın şeyhliğini yaptı; Memlük sultanlarının saygısını kazandı. Hadis usûlüne dair el-Muhtasar fî ilmi'l-eser'i yazdı. Süyûtî on dört yıl yanından ayrılmadı. 879'da Kahire'de vefat etti.",
  };
  B['necmeddin-ibn-fehd'] = {
    bio: "29 Cemâziyelâhir 812'de (1409) Mekke'de doğdu; babası muhaddis ve tarihçi Takıyyüddin İbn Fehd'dir. Babasının kendisi için yazdığı hadis kitabını ezberledi; önce Hanbelî, sonra babasının teşvikiyle Şâfiî fıkhı okudu.\n\nBabası onu hac ve umre için Mekke'ye gelen âlimlerle tanıştırdı. Kahire, Dımaşk ve Halep'e rıhleler yaptı; İbn Hacer'den ve Dımaşk'ta İbn Nâsırüddin'den okudu. Mekke tarihi İthâfü'l-verâ ve geniş Mu'cem'i başlıca eserleridir. 885'te Mekke'de vefat etti.",
    h: [{ k: 'ibn-nasiruddin', kaynak: SUY(550) }],
  };
  B['ibn-merzuk'] = {
    bio: "14 Rebîülevvel 766'da (1364) Tilimsan'da doğdu; meşhur İbn Merzûk el-Hatîb'in torunudur. Tilimsan'da babası, amcası ve dedesinden; Fas ve Tunus'ta İbn Arafe'den okudu.\n\n790'da İbn Arafe ile hacca gitti; 819'daki ikinci haccında Kahire'de İbn Haldûn, İbn Hacer ve Fîrûzâbâdî ile görüşüp icazet aldı. Mağrib'in son büyük Mâlikî muhaddis-fakihlerinden oldu; Buhârî ve Umdetü'l-ahkâm şerhleri yazdı. 842'de vefat etti.",
    h: [
      { k: 'ibn-hacer', not: 'Kahire\'de icazet aldı.' },
      { k: 'firuzabadi', not: 'Kahire\'de icazet aldı.' },
    ],
  };
  B['heytemi'] = {
    bio: "909'da (1503) Mısır'ın Garbiye bölgesindeki Mahalletü Ebi'l-Heytem'de doğdu; büyük dedelerinden biri az konuştuğu için \"Hacer\" diye anılmış, soyu İbn Hacer adını almıştır. Küçükken babasını kaybetti.\n\nEzher'de okudu; Zekeriyyâ el-Ensârî ve Şihâbeddin er-Remlî en önemli hocalarıdır. 940'ta Mekke'ye yerleşti ve ömrünün sonuna kadar orada fetva verip ders okuttu. Şâfiî fıkhının temel kitabı Tuhfetü'l-muhtâc, Erbaîn şerhi el-Fethu'l-mübîn ve ez-Zevâcir başlıca eserleridir. Ali el-Müttakī onun talebesidir. 974'te Mekke'de vefat etti.",
  };
  B['hasen-b-sufyan'] = {
    bio: "213'te (828) Nesâ'da doğdu; Şeybân kabilesindendir. Horasan, Bağdat, Basra, Kûfe, Hicaz, Mısır ve Şam'da İshak b. Râhûye, Kuteybe b. Saîd, Ahmed b. Hanbel, Yahyâ b. Maîn ve Ebû Bekir b. Ebû Şeybe'den dinledi; fıkhı Ebû Sevr'den okudu ve onun mezhebiyle fetva verdi.\n\nHâkim onu \"asrında Horasan'ın muhaddisi; sağlamlık, çokluk, anlayış, fıkıh ve edepte dünyada eşi yok\" diye anar. Süyûtî, doksan yaşındayken kendisini sınamak isteyen bir ziyaretçiye \"ihtiyarlara karşı Allah'tan kork\" dediğini nakleder. İbn Hibbân ondan dinledi. 303'te vefat etti.",
  };
  B['ibn-cevsa'] = {
    bio: "230 civarında (844) doğdu; Dımaşklı bir mevlâdır. Hişâm b. Abdülmelik, Yûnus b. Abdüla'lâ ve Şam ile Mısır âlimlerinden rivayet etti.\n\nŞam'ın 4. asır başındaki en önemli hadis hocasıydı: Ebû Ali en-Nîsâbûrî, Hamza el-Kinânî, Taberânî, İbnü's-Sünnî, İbn Adî, Ebû Ahmed el-Hâkim ve İbn Hibbân ondan rivayet etti. Ebû Ali onu \"hadisin rükünlerinden\" sayar; Süyûtî'nin naklettiğine göre \"İbn Cevsâ Şam'da, İbn Ukde Kûfe'de gibidir\" denirdi. 320'de vefat etti.",
    h: [{ k: 'ibn-cevsa', yon: 'talebe', t: ['ebu-ali-nisaburi', 'hamza-kinani', 'ibnus-sunni', 'ibn-adi', 'ebu-ahmed-hakim', 'ibn-hibban'] }],
  };
  B['hayseme'] = {
    bio: "250'de (864) Trablusşam'da Kureyş asıllı, muhaddis yetiştiren bir ailede doğdu. Beyrut, Hicaz, Irak, Yemen, Dımaşk, Humus, Halep, Antakya, Kûfe, Basra ve Nîşâbur'u dolaşarak hadis topladı.\n\n\"Şam muhaddisi\" unvanıyla anıldı. Fezâilü's-sahâbe'si günümüze ulaşmıştır. İbn Mende ondan Trablus'ta bin cüz yazdığını söyler. Zilkade 343'te vefat etti.",
  };
  B['ibn-kani'] = {
    bio: "25 Zilkade 265'te (879) Bağdat'ta doğdu; Emevî kökenli bir kadı ailesinin âzatlısıdır. On bir yaşında hadis meclislerine girdi; Kûfe, Basra, Vâsıt ve Tüster'e gitti. Hâris b. Ebû Üsâme, İbrâhim el-Harbî, Abdullah b. Ahmed b. Hanbel, Taberî ve Ebü'l-Kāsım el-Begavî'den dinledi.\n\nCessâs, Dârekutnî ve Hâkim ondan rivayet etti. Sahâbe biyografilerini derleyen Mu'cemü's-sahâbe'si tanınır. Berkānî onu zayıf bulmuş, Hatîb ölümünden iki yıl önce ihtilât ettiğini söylemiştir. Şevval 351'de vefat etti.",
    h: [
      { k: 'taberi', kaynak: DIA('ibn-kani', 'İbn Kāni‘') },
      { k: 'begavi-ebulkasim', kaynak: DIA('ibn-kani', 'İbn Kāni‘') },
      { k: 'ibn-kani', yon: 'talebe', t: ['darekutni', 'hakim'] },
    ],
  };
  B['ebul-arab'] = {
    bio: "250–260 yılları arasında Kayrevan'da köklü bir ailede doğdu; büyük dedesi Hârûnürreşîd devrinde Kuzey Afrika'da görev yapmış bir komutandı. Sahnûn'un talebeleri Yahyâ b. Ömer, Îsâ b. Miskîn ve Himâs b. Mervân'dan ders aldı.\n\nKādî İyâz onu \"Mâlik mezhebinin hâfızı, hadis ve ricâlin kendisine galip geldiği âlim\" diye anar. İfrîkıye âlimlerinin tabakātı ve âlimlerin uğradığı imtihanlara dair Kitâbü'l-Mihen'i Mağrib ilim tarihinin ilk kaynaklarıdır. Zilkade 333'te vefat etti.",
  };
  B['ibn-yunus'] = {
    bio: "281'de (894) Fustat'ta, büyük dedesi Şâfiî'nin talebesi Yûnus b. Abdüla'lâ olan bir âlim ailesinde doğdu; oğlu meşhur astronom İbn Yûnus'tur.\n\nMısır dışına hiç çıkmadı; babasından ve Nesâî'den dinledi. Süyûtî buna rağmen onu \"bu işte uyanık bir imam\" sayar. Mısırlı âlimleri ve Mısır'a gelen yabancıları ayrı ayrı ele alan iki tarihi, sonraki Mısır biyografi yazımının temelidir. Cemâziyelâhir 347'de vefat etti.",
  };
  B['hamza-kinani'] = {
    bio: "Şâban 275'te (888) Mısır'da doğdu; 295'te hadis tahsiline başladı, 305'te Irak'a ilk rıhlesini yaptı. Halep kadısı ona tahsili için iki yüz dinar verdi. Nesâî, Ebû Halîfe, Abdân el-Ahvâzî ve Ebû Ya'lâ'dan dinledi.\n\nDârekutnî, İbn Mende ve Asîlî ondan rivayet etti. Hâkim'e göre hadis bilgisinde öne geçtiği ittifakla kabul edilir; vera' ve zühdüyle tanınır. Rivayet ettiği \"Bitâka hadisi\" cüzü onun adıyla anılır. Zilhicce 357'de vefat etti.",
  };
  B['ebu-ahmed-hakim'] = {
    bio: "285'te (898) Nîşâbur'da doğdu; pamuk bezi (kirbâs) ticaretiyle uğraştığı için Kerâbîsî, talebesi Hâkim en-Nîsâbûrî'den ayırt edilmek için \"el-Hâkim el-Kebîr\" diye anılır.\n\nYirmi yaşından sonra hadise başladı; on yedi yıl Horasan, Rey, Şam, Irak, Cezîre ve Hicaz'ı dolaştı, İbn Huzeyme, Bâgandî, Begavî ve İbn Cevsâ'dan dinledi. Şâş ve Tûs kadılığı yaptıktan sonra mescidine çekildi. Hâkim onu \"bu sanatta asrının imamı\" diye anar. Künyelere dair el-Esâmî ve'l-künâ'sı alanın en kapsamlı eseridir. 378'de vefat etti.",
  };
  B['huseni'] = {
    bio: "3. asrın sonlarında Kayrevan'da doğdu. Kayrevan'da okuduktan sonra 311 veya 312'de Kurtuba'ya geçti ve Kāsım b. Asbağ'dan dinledi.\n\nEndülüs Emevî sarayına yakın oldu; fıkıh, tarih ve şiirle uğraştı. Kurtuba kadılarının tarihi ve Kayrevan âlimlerinin tabakātı ile Mağrib ve Endülüs biyografi yazımının öncülerinden oldu. Süyûtî, şair ve belîğ olduğunu ama dil hatası yaptığını söyler. Safer 371'de vefat etti.",
  };
  B['ibn-merduye'] = {
    bio: "323'te (935) İsfahan'da muhaddis bir ailede doğdu; aynı adlı torunundan ayırt edilmek için İbn Merdûye el-Kebîr denir. Basra, Kûfe ve Horasan'ı dolaştı, 349'da iki yıl Bağdat'ta kaldı; Ebû Sehl el-Kattân'dan dinledi.\n\nSüyûtî onu \"büyük hâfız, ricâlde basiretli, eserleri güzel\" diye anar. Rivayet tefsiri, İsfahan tarihi ve Sahîh-i Buhârî üzerine müstahreci sonraki tefsir ve tahrîc literatürünün kaynaklarındandır. Ramazan 410'da vefat etti.",
  };
  B['ebu-mesud-dimaski'] = {
    bio: "Hayatı hakkında fazla bilgi yoktur. Bağdat, Basra, Kûfe, Ahvaz, Vâsıt ve İsfahan'da Ebû Bekir el-Kabbâb ve Ahmed b. Abdân eş-Şîrâzî'den dinledi.\n\nÇalışmalarını Buhârî ve Müslim'in Sahîh'leri üzerinde yoğunlaştırdı: Sahîhayn hadislerinin isnad dizini (etrâf) ve Dârekutnî'nin Müslim'e yönelttiği eleştirilere cevabı bu alanın ilk eserlerindendir. Lâlekâî, Hamza es-Sehmî ve Ebû Zer el-Herevî ondan rivayet etti. Receb 400'de genç yaşta vefat etti.",
    h: [{ k: 'ebu-mesud-dimaski', yon: 'talebe', t: ['ebu-zer-herevi'] }],
  };
  B['abdulgafir-ismail'] = {
    bio: "451'de (1059) Nîşâbur'da doğdu. İlk hocaları babası, Kuşeyrî'nin kızı olan annesi, dedesi İmam Kuşeyrî ve anneannesi Fâtıma bint Ebû Ali ed-Dekkāk'tır; baba tarafından dedesi Sahîh-i Müslim râvisi Abdülgāfir el-Fârisî'dir.\n\nGazne, Hindistan ve Hârizm'e gitti; İmâmü'l-Haremeyn el-Cüveynî'den dört yıl fıkıh okudu. Hâkim'in Nîşâbur tarihine zeyl olarak yazdığı es-Siyâk, garîbü'l-hadîs eseri Mecmau'l-garâib ve Müslim'in garîbine dair el-Müfhim'i yazdı. İbn Asâkir'e icazet verdi. 529'da vefat etti.",
  };
  B['ebu-musa-medini'] = {
    bio: "Zilkade 501'de (1108) İsfahan'da doğdu. Kıraatle uğraşan babası onu iki yaşından itibaren hadis meclislerine götürdü. Hemedan ve Bağdat'a gitti; Ebû Ali el-Haddâd, Yahyâ b. Mende ve İbnü'l-Kayserânî dahil 300'ü aşkın hocadan dinledi. Kıvâmü's-sünne'nin talebesidir.\n\nİsfahan'a dönüp yerleşti. Sem'ânî, Hâzimî, Cemmâîlî (Abdülganî el-Makdisî) ve Abdülkādir er-Ruhâvî ondan okudu. Süyûtî onu isnad ve hıfzda zamanının şeyhi sayar. Garîbü'l-hadîs sözlüğü el-Mecmû'u'l-muğîs ve Ahmed'in Müsned'inin özelliklerine dair Hasâisü'l-Müsned'i tanınır. Cemâziyelevvel 581'de vefat etti.",
    h: [{ k: 'ebu-musa-medini', yon: 'talebe', t: ['semani', 'ruhavi'] }],
  };
  B['ibn-hubeys'] = {
    bio: "504'te (1110) Almería'da doğdu; dayısı Hubeyş'e nisbetle anılır. Almería'da Ruşâtî'den, Kurtuba'da İbn Mugīs ve Ebû Bekir İbnü'l-Arabî'den kıraat, hadis ve fıkıh okudu.\n\n542'de Hristiyanlar Almería'yı alınca Mürsiye'ye göçtü; orada kadılık yaptı, kıraat, hadis ve Arapça okuttu. İbnü'z-Zübeyr onu tabakasında hadis sanatını en iyi bilen kişi sayar. İbn Dıhye el-Kelbî onun talebesidir. 14 Safer 584'te Mürsiye'de vefat etti.",
    h: [{ k: 'ibn-hubeys', yon: 'talebe', t: ['ibn-dihye'] }],
  };
  B['ruhavi'] = {
    bio: "Cemâziyelâhir 536'da (1142) Urfa'da doğdu; ailesi Haçlı kontluğu döneminde Avrupa'dan bölgeye gelmiş bir Hristiyan aileydi. 539'da Zengî Urfa'yı fethedince aile esir düştü ve Harran'daki Ebü'l-Fehm oğullarının kölesi oldu; Ruhâvî sonra âzat edildi.\n\nMusul'da yetişip hadise yöneldi; Ebû Ca'fer es-Saydalânî, Ebü'l-Alâ el-Hemedânî ve Ebû Mûsâ el-Medînî'den dinledi. Birbirinden farklı isnadlarla kırk hadis derleyen el-Erbaûnü'l-mütebâyine'yi yazdı. İbn Nukta onun talebesidir. Cemâziyelevvel 612'de Harran'da vefat etti.",
    h: [{ k: 'ruhavi', yon: 'talebe', t: ['ibn-nukta'] }],
  };
  B['ibnul-mufaddal'] = {
    bio: "24 Zilkade 544'te (1150) Kudüs asıllı bir ailede doğdu. 558'de Sahîh-i Buhârî'nin büyük kısmını okudu; otuz yaşına kadar İskenderiye'de hadis ve Mâlikî fıkhı okudu.\n\nEn çok faydalandığı hocası, yıllarca derslerine devam ettiği Silefî'dir. İskenderiye'de kadı nâibi oldu, sonra Kahire'deki Sâhibiyye Medresesi'nde ders verdi. Kırk tabakadan hadis derleyen el-Erbaûn ale't-tabakāt'ı tanınır. Münzirî onun yanında yetişti. Şâban 611'de Kahire'de vefat etti.",
  };
  B['ibn-nukta'] = {
    bio: "10 Receb 579'da (1183) Bağdat'ta doğdu; ailesine dedesine bakan Nukta adlı bir câriyeden dolayı bu ad verilmiştir. Mekke, Kahire, İskenderiye, Dımaşk, Halep, Harran, Musul, İsfahan ve Nîşâbur'a rıhleler yaptı.\n\nNîşâbur'da Müeyyed et-Tûsî'den, Harran'da Ruhâvî'den, Dımaşk'ta Ebü'l-Yümn el-Kindî'den dinledi. Kitap ve müsned râvilerini tanıtan et-Takyîd ile İbn Mâkûlâ'nın el-İkmâl'ine tekmilesi ricâl literatürünün önemli eserleridir. Münzirî ondan rivayet etti. Safer 629'da vefat etti.",
    h: [{ k: 'muayyed-tusi', kaynak: DIA('ibn-nukta', 'İbn Nukta') }],
  };
  B['ibnur-rumiyye'] = {
    bio: "Muharrem 561'de (1165) İşbîliye'de, nebat ilmi ve edebiyatla uğraşan Emevî mevlâsı bir ailede doğdu. Mâlikî fıkhını İbn Zerkūn'dan okudu, hadisi İbnü'l-Ced ve diğer İşbîliyeli muhaddislerden aldı.\n\nSonra İbn Hazm'ın mezhebine geçerek Zâhirî oldu. Nebatat ilmindeki uzmanlığıyla da tanınır, ot satan bir dükkânı vardı. İbn Adî'nin el-Kâmil'ine zeyl olarak yazdığı el-Hâfil ve Sahîhayn'a ek rivayetleri derleyen el-Mu'lim başlıca hadis eserleridir. Rebîülevvel 637'de vefat etti.",
  };
  B['muttaki'] = {
    bio: "885'te (1480) Orta Hindistan'da Burhânpûr'da Cavnpûrlu bir ailede doğdu; küçükken babasını kaybetti. On beş yaşında Mâlvâ Sultanı Gıyâseddin Şah'ın hizmetine girdi, sonra saray hayatından uzaklaşıp Çiştî tarikatına intisap etti ve Mültan'da sülûkünü sürdürdü.\n\nMekke'ye göçüp İbn Hacer el-Heytemî'den hadis ve fıkıh okudu; Ebü'l-Hasan el-Bekrî'den tasavvufta istifade etti. Süyûtî'nin Cem'u'l-cevâmi' ve el-Câmiu's-sağîr'ini konulara göre yeniden düzenleyerek Kenzü'l-ummâl'i oluşturdu. Hayatı hakkındaki bilgilerin çoğu müridi Abdülhak ed-Dihlevî'den gelir. Muhammed Tâhir el-Fettenî onun talebesidir. 975'te Mekke'de vefat etti.",
  };
  B['kastallani'].h = [
    { k: 'necmeddin-ibn-fehd', kaynak: DIA('kastallani-ahmed-b-muhammed', 'Kastallânî, Ahmed b. Muhammed') },
    { k: 'zekeriyya-ensari', kaynak: DIA('kastallani-ahmed-b-muhammed', 'Kastallânî, Ahmed b. Muhammed') },
  ];
  /* ───────── Süyûtî'den eklenen hâfızlar (Tabakātü'l-huffâz metnine göre) ───────── */
  B['ibnul-munzir'] = {
    bio: "Nîşâburlu olup Mekke'ye yerleşen ve \"Harem şeyhi\" diye anılan hâfız. Süyûtî onu \"benzeri yazılmamış eserlerin sahibi\" diye anar: el-İşrâf, el-Mebsût, el-İcmâ' ve Tefsîr.\n\nİhtilaf ve delil bilgisinde zirveye ulaştı; kimseyi taklit etmeyen bir müctehiddi. Şâfiî tabakāt kitaplarında yer alsa da görüşlerini doğrudan delillere dayandırdı. Fıkhî ihtilafları sahâbe ve tâbiîn görüşleriyle birlikte derleyen el-Evsat'ı mukayeseli fıkhın temel kaynaklarındandır. 318'de Mekke'de vefat etti (OpenITI 319 verir).",
  };
  B['idrisi'] = {
    bio: "Esterâbâdlı Ebû Sa'd Abdurrahman b. Muhammed el-İdrîsî; Semerkant'a yerleşip şehrin muhaddisi oldu. Esam ve İbn Adî'den dinledi.\n\nSüyûtî'ye göre bâblar ve şeyhler üzerine eserler derledi; Hatîb onu sika saydı. Semerkant ve Esterâbâd tarihlerini yazdı; Necmeddin en-Nesefî'nin el-Kand'ı onun Semerkant tarihini sürdürür. 405'te vefat etti.",
  };
  B['talamenki'] = {
    bio: "340'ta (951) doğdu; Kurtubalı Ebû Ömer Ahmed b. Muhammed el-Meâfirî. Doğuya rıhle yaparak hadis dinledi.\n\nSüyûtî onu Kur'an ilimlerinde (harfler, i'râb, nâsih-mensûh, ahkâm) önder, hadis ve ricâle tam vâkıf, sünnetleri ezbere bilen bir imam olarak anar ve onu \"bid'at ehline karşı çekilmiş kılıç\" diye niteler. İbn Hazm ve İbn Abdülber ondan rivayet etti. Zilhicce 429'da vefat etti.",
  };
  B['nahsebi'] = {
    bio: "Nesefli Abdülazîz b. Muhammed b. Âsım; Müstağfirî'nin en uzun süre yanında kalan talebesidir. Ondan ve Bağdat'ta Ebû Tâlib b. Gaylân ile Ebû Bekir İbn Rîze'den dinledi.\n\nSüyûtî onu \"zamanında hıfz ve itkanda benzersiz, kendi asrında eşi görülmemiş\" biri olarak anar. Mâverâünnehir'in 5. asırdaki en önemli hâfızlarındandır. 457'de vefat etti.",
  };
  B['abdulaziz-kettani'] = {
    bio: "389'da (999) Dımaşk'ta doğdu; Temîmî ve sûfî Ebû Muhammed Abdülazîz b. Ahmed. Çok dinledi, telif ve cem' yaptı.\n\nSüyûtî onu \"Dımaşk'ın müfîdi ve muhaddisi\" diye anar ve \"zamanımızda olsaydı hâfızlardan sayılırdı\" der. İbn Zebr'in âlimlerin doğum ve ölüm tarihlerine dair eserine yazdığı zeyl, Şam vefeyât yazımının önemli halkasıdır. Temmâm er-Râzî hakkındaki övgüsü Süyûtî'de nakledilir. 466'da vefat etti.",
  };
  B['samarkandi-hasen'] = {
    bio: "409'da doğdu; Semerkantlı Ebû Muhammed el-Hasen b. Ahmed el-Kûhmîsenî. Müstağfirî'nin yanında yetişti ve çok sayıda eser yazdı.\n\nSüyûtî onu \"doğuda ve batıda zamanının benzersiz hâfızı\" sayar. Sekiz yüz cüzde yüz bin hadisi toplayan Bahrü'l-esânîd fî sıhâhi'l-mesânîd'i için \"düzenlenip tehzîb edilseydi İslâm'da bir benzeri olmazdı\" der. Zilkade 491'de vefat etti.",
  };
  B['kivamussunne'] = {
    bio: "457'de İsfahan'da doğdu; Teymî ve Talhî nisbeli Ebü'l-Kāsım İsmâil b. Muhammed. İsfahan'da İbn Merdûye'nin torunu, Ebû Amr b. Mende ve Ebû Nasr ez-Zeynebî'den dinledi.\n\nİmlâ meclisleri yaptı, eser yazdı ve ricâl hakkında konuştu. Ebû Mûsâ el-Medînî onu \"zamanının imamı, asrındaki âlimlerin hocası ve sünnet ehlinin önderi\" diye anar ve beşinci asrın müceddidi olabileceğini söyler. Üç bin beş yüz meclis imlâ ettiği nakledilir. İbn Asâkir, Sem'ânî, Silefî ve Ebû Mûsâ el-Medînî talebelerindendir. 535'te vefat etti.",
  };
  B['abdulhak-isbili'] = {
    bio: "510'da İşbîliye'de doğdu; İbnü'l-Harrât diye de tanınır. Süyûtî onu \"fakih, hâfız, hadis ve ilellerini bilen, ricâle vâkıf, hayır, salâh, zühd ve vera' sahibi, sünnete bağlı ve dünyadan az alan\" biri olarak anar.\n\nAhkâm hadislerini büyük, orta ve küçük olmak üzere üç derlemede topladı; Sahîhayn'ı ve Kütüb-i Sitte'yi birleştiren eserler, illetli hadislere dair el-Mu'tell ve hacimli bir lugat yazdı. el-Ahkâm'ı daha sonra İbnü'l-Kattân el-Fâsî'nin Beyânü'l-vehm'ine konu oldu. Rebîülâhir 581'de Bicâye'de vefat etti.",
  };
  B['tucibi'] = {
    bio: "Mürsiyeli Ebû Abdullah Muhammed b. Abdurrahman et-Tücîbî. Doğuya rıhle yaparak İskenderiye'de Silefî'den ve başkalarından dinledi; sonra Tilimsan'a yerleşti.\n\nSüyûtî onu hadisi ezbere bilen ve zabtlı biri olarak anar; eser yazdı ve muhaddisler ona rıhle yaptı. Silefî'nin isnadını Mağrib'e taşıyan halkalardandır. Cemâziyelevvel 610'da yetmiş yaşında vefat etti.",
  };
  B['ibnul-kattan'] = {
    bio: "Fas'ta yetişen Kütâmî asıllı Ebü'l-Hasan Ali b. Muhammed; Ebû Zer el-Huşenî ve tabakasından dinledi. Muvahhidler devletinde kādılkudât (kādi'l-cemâa) oldu.\n\nSüyûtî onu \"hadis sanatını en iyi gören, ricâl isimlerini en iyi ezberleyen ve rivayete en çok özen gösterenlerden\" sayar. Abdülhak el-İşbîlî'nin el-Ahkâmü'l-kübrâ'sındaki vehim ve eksiklikleri tenkit eden Beyânü'l-vehm ve'l-îhâm, Mağrib isnad tenkidinin zirvesi kabul edilir. Rebîülevvel 628'de vefat etti.",
  };
  B['ibn-dihye'] = {
    bio: "Sebteli Ebü'l-Hattâb Ömer b. Hasen; soyunun sahâbî Dıhye el-Kelbî'ye ulaştığını söylerdi. İbn Beşkūvâl ve Endülüs'teki hocalardan dinledi; dil ve Arapçada da ileri gitti.\n\nDâniye kadılığından azledilince doğuya gitti; İsfahan ve Irak'ı dolaştıktan sonra Mısır'a yerleşti, Sultan Melik Kâmil'in hocası oldu ve Kâmiliyye Dârülhadisi'nin ilk şeyhi sayıldı. Süyûtî, hadise vâkıf ve zabtıyla tanınmakla birlikte nakilde ölçüsüz davrandığını ve icazet için \"haddesenâ\" kullandığını da kaydeder. Mevlid üzerine ilk eserlerden biri olan et-Tenvîr'i yazdı. Rebîülevvel 633'te seksenini aşmış olarak vefat etti.",
  };
  B['ibnun-neccar'] = {
    bio: "578'de Bağdat'ta doğdu. İbnü'l-Cevzî ve İbn Küleyb'den dinledi, İbn Sükeyne'ye kıraat okudu; uzun rıhlelerle meşyehasını üç bin şeyhe ulaştırdı.\n\nSüyûtî onu \"çağın tarihçisi, Irak'ın müfîdi, sika hâfızlardan, dindar ve geniş rivayetli\" biri olarak anar. Hatîb'in Târîhu Bağdâd'ına yazdığı büyük zeyl, İbn Mâkûlâ'ya zeyli ve Medine tarihi ed-Dürretü's-semîne başlıca eserleridir; İbn Râfi' daha sonra onun Bağdat tarihine zeyl yazdı. Şâban 643'te vefat etti.",
  };
  B['ibn-tolun'] = {
    bio: "9. asrın son çeyreğinde (880 civarı) Dımaşk'ın Sâlihiye semtinde, ticaret ve ilimle uğraşan Türk asıllı bir ailede doğdu; dedelerinden biri memlüktü, annesi Anadolulu bir kadındı. İlk derslerini babasından ve Dımaşk kadısı amcası Cemâleddin Yûsuf'tan aldı; yedi yaşında hâfız oldu, babasını kaybedince Yûnusiye Hankahı'na yerleştirildi.\n\nKendi ifadesine göre otuz sekiz ilim dalında öğrenim gördü. Hocaları arasında İbn Kādî Aclûn, Necmeddin İbn Müflih, Celâleddin ed-Devvânî, İbnü'l-Mibred, Süyûtî ve Nuaymî vardır; Sâlihiye'nin âlime kadınlarından da okudu. Hocalarından aldığı icazetleri bir ciltte topladı, ancak Canbirdi Gazâlî isyanı sırasında kaybetti. Memlük ve Osmanlı devirlerinde Dımaşk'ın pek çok medrese ve camisinde müderrislik ve imam-hatiplik yaptı. Hayatını el-Fülkü'l-meşhûn'da anlatır; Dımaşk tarihi ve topografyasına dair eserlerinde Nuaymî'den çok yararlandı. Şehâbeddin et-Tîbî ve İsmâil en-Nablusî talebelerindendir. 953'te Dımaşk'ta vefat etti.",
  };
  B['kerime'] = {
    bio: "Ümmü'l-Kirâm Kerîme bint Ahmed b. Muhammed b. Hâtim el-Mervezîyye. Babası Küşmîhenliydi, annesi Seyyârî ailesindendi; babası onu Kudüs'e götürüp sonra Mekke'ye getirdi ve Kerîme ömrünü orada mücavir olarak geçirdi.\n\nSahîh-i Buhârî'yi Ebü'l-Heysem el-Küşmîhenî'den dinledi; Zâhir b. Ahmed es-Serahsî ve Abdullah b. Yûsuf b. Bâmûye'den de rivayet etti. Zehebî onu \"âlime, fazıla, müsnide\" diye anar: rivayet ederken nüshasını aslıyla karşılaştırırdı. Ebü'l-Ganâim en-Nersî'nin anlattığına göre ondan yazdığı yedi varakı tek başına karşılaştırmak isteyince Kerîme \"benimle karşılaştırmadan olmaz\" demiştir. Sahîh'i defalarca okuttu; bir defasında hac mevsiminde Hatîb el-Bağdâdî okudu. Humeydî, Sem'ânî'nin babası Ebü'l-Muzaffer ve çok sayıda Mağribli ondan rivayet etti. Hiç evlenmedi ve yüz yaşına ulaştı.",
    not: "Vefatı: Zehebî 463'ü doğru bulur; İbn Nukta, İbn Nâsır'ın hattından 465 nakleder (el-Fâsî de bunu aktarır).",
    h: [{ k: 'kerime', yon: 'talebe', t: ['humeydi'] }],
  };
  B['carullah-ibn-fehd'] = {
    bio: "20 Receb 891'de (1486) Mekke'de doğdu; Muhib Ebü'l-Fazl diye de bilinir. Küçük yaşta babası İzzeddin İbn Fehd'den okudu, Sehâvî'nin derslerine devam etti; Kur'an'ı, Sahîh-i Müslim'i, Buhârî'nin Sülâsiyyât'ını ve Nevevî'nin Erbaîn'ini ezberledi.\n\n909'da babasıyla Medine'ye gitti, Medine tarihçisi Semhûdî ona hırka giydirdi. Ailenin rıhle geleneğine uyarak Kahire, Yemen, Kudüs, Dımaşk ve Halep'e, 928 ve 934'te iki kez Anadolu'ya gitti; Bursa'da uzun süre kalıp el-Cevâhirü'l-hisân'ı orada yazdı. Bu yolculuklarda Süyûtî ve Muhib el-Bûsîrî ile görüştü. Dımaşklı İbn Tolun ile yakın dostlukları vardı; mektuplaşarak ilmî meseleleri tartıştılar. Fettenî Mekke'de ondan ders aldı. 954'te Mekke'de vefat etti.",
  };
  B['fettani'] = {
    bio: "914'te (1508) Gücerât'taki Nehrevâle'de (bugünkü Pattan) doğdu; Sıddîkī nisbesiyle de anılır. İlk öğrenimini Burhâneddin es-Semhûdî ve Nâkūrî'den gördü.\n\n944'te hacca gidip bir süre Hicaz'da kaldı; Ebü'l-Hasan el-Bekrî, İbn Hacer el-Heytemî, İbn Arrâk, Abdullah el-Ayderûs ve Cârullah el-Mekkî'den (İbn Fehd) ders aldı ve Ali el-Müttakī'ye intisap etti. Hindistan'a dönünce \"Hint muhaddislerinin efendisi\" diye tanındı; babasından kalan serveti talebelerine harcadı. Mehdevîlere karşı sert bir mücadele yürüttü, 980'de Ekber Şah'tan destek sözü aldı. Şikâyetlerini Ekber Şah'a iletmek için yola çıktığında Ücceyn yakınlarında bir Mehdevî tarafından öldürüldü (6 Şevval 986). Kur'an ve hadis garîbine dair Mecmau bihâri'l-envâr en meşhur eseridir.",
    h: [
      { k: 'heytemi', kaynak: DIA('fetteni', 'Fettenî') },
      { k: 'carullah-ibn-fehd', kaynak: DIA('fetteni', 'Fettenî') },
    ],
  };
  B['ibnud-deyba'] = {
    bio: "4 Muharrem 866'da Zebîd'de doğdu; \"deyba'\" lakabı Nûbe dilinde \"beyaz\" anlamına gelir ve büyük dedesine aittir. Kur'an'ı ve yedi kıraati, matematik ve feraizi dayısı Ebü'n-Necâ'dan okudu.\n\nHacca gittiğinde Mekke'de Sehâvî'den okudu ve icazet aldı. Zebîd'de hadis okuttu. İbnü'l-Esîr'in Câmiu'l-usûl'ünü ihtisar eden Teysîrü'l-vusûl, meşhur hadislere dair Temyîzü't-tayyib ve Zebîd tarihi Kurratü'l-uyûn başlıca eserleridir. 944'te Zebîd'de vefat etti.",
  };
})(window.BIYO);
