/*
 * Kaynaklı biyografiler: her paragraf [metin, kaynak anahtarları].
 * Anahtarlar kişinin kaynak listesindeki (veri/kaynaklar.js + alimler.js "kay") öğelere bağlanır:
 *   dia   → TDV İslâm Ansiklopedisi maddesi
 *   suy   → Süyûtî, Tabakātü'l-huffâz
 *   siyer → Zehebî, Siyeru a'lâmi'n-nübelâ
 *   durer → İbn Hacer, ed-Dürerü'l-kâmine
 *   dav   → Sehâvî, ed-Dav'ü'l-lâmi'
 *   kay   → kişiye özel diğer kaynaklar (alimler.js "kay")
 * Birden fazla kaynak "+" ile birleştirilir. Metinler yalnızca bu kaynakların ilgili maddelerinde
 * okunan bilgilere dayanır; kaynakta bulunmayan bilgi eklenmemiştir.
 */
window.BIYOK = {};
(function (K) {
  K['abdulaziz-kettani'] = [
    ["389'da (999) doğdu. Dımaşklı, Temîmî ve sûfî Ebû Muhammed Abdülazîz b. Ahmed çok hadis dinledi, eser telif etti ve rivayetleri derledi. Süyûtî onu \"Dımaşk'ın müfîdi ve muhaddisi\" diye anar ve \"zamanımızda yaşasaydı hâfızlardan sayılırdı\" der.", 'suy'],
  ];
  K['abdulgafir-ismail'] = [
    ["451'de (1059) Nîşâbur'da muhaddis bir ailede doğdu. İlk hadis hocaları babası İsmâil, Kuşeyrî'nin kızı olan annesi Emetürrahîm, dedesi İmam Kuşeyrî ve anneannesi Fâtıma bint Ebû Ali ed-Dekkāk'tır. Baba tarafından dedesi Abdülgāfir b. Muhammed de devrin önde gelen muhaddislerindendir. Gazne, Hindistan ve Hârizm'e gitti, İmâmü'l-Haremeyn el-Cüveynî'den dört yıl fıkıh ve hilâf okudu. Nîşâbur hatibi oldu ve yıllarca Mescid-i Akîl'de pazartesi ikindiden sonra hadis imlâ etti. 529'da (1134-35) Nîşâbur'da vefat etti.", 'dia'],
    ["Süyûtî onu Nîşâbur tarihinin, Mecmau'l-garâib'in ve bir Müslim şerhinin müellifi olarak anar; dillere vâkıf, fasih ve belîğ biriydi. Kencerûzî ve Ebû Muhammed el-Cevherî ona icazet verdi; kendisi de İbn Asâkir'e icazet verdi.", 'suy'],
  ];
  K['abdulgani-ezdi'] = [
    ["332'de (943-44) Kahire'de doğdu. Osman b. Muhammed es-Semerkandî, Ebû Bekir el-Miyânecî ve Dârekutnî'den hadis okudu; uzun yolculuklardan sonra Mısır'a dönerek devrin önde gelen hâfızlarından sayıldı. Sika oluşunda tereddüt yoktur, ensâb bilgisi de mükemmeldi. Ebû Abdullah el-Kudâî ve Ebû Ali el-Ahvâzî ondan rivayet etti; İbn Abdülber ondan icazet aldı. 7 Safer 409'da (1018) Kahire'de vefat etti.", 'dia'],
    ["Süyûtî onu zamanında hadis ilminin ve hıfzının imamı, sika ve me'mûn olarak anar. Berkānî \"Dârekutnî'den sonra ondan hâfızını görmedim\" demiştir. el-Mü'telif ve'l-muhtelif'in müellifidir.", 'suy+dia'],
  ];
  K['abdulgani-makdisi'] = [
    ["541'de doğdu; Cemmâîlî asıllı, Dımaşk'ın Sâlihiyye semtinde yetişen Hanbelî hâfız. İbnü'l-Battî, Ebû Mûsâ el-Medînî ve Silefî'den dinledi; Silefî'den bin cüz yazdı. el-Misbâh, Nihâyetü'l-murâd, el-Kemâl ve el-Umde onun eserlerindendir.", 'suy'],
    ["Süyûtî onu \"İslâm'ın muhaddisi\" diye anar: hıfz ve itkanı çok, hadis fenlerini bir arada bilen, ibadeti çok, vera' sahibi ve selef yolunda biriydi. Kendisine hangi hadis sorulsa söyler, hangi râvi sorulsa nesebini sayardı.", 'suy'],
  ];
  K['abdulhak-isbili'] = [
    ["510'da doğdu; İbnü'l-Harrât diye de tanınan İşbîliyeli Ebû Muhammed Abdülhak b. Abdurrahman el-Ezdî. Süyûtî onu fakih, hâfız, hadis ve ilellerini bilen, ricâle vâkıf, hayır, salâh, zühd ve vera' sahibi, sünnete bağlı ve dünyadan az alan biri olarak anar.", 'suy'],
    ["Ahkâm üzerine eserler yazdı; Sahîhayn'ı bir kitapta, Kütüb-i Sitte'yi bir başka kitapta birleştirdi. el-Mu'tell min el-hadîs ve hacimli bir lugat kitabı da vardır. Rebîülâhir 581'de Bicâye'de vefat etti.", 'suy'],
  ];
  K['acurri'] = [
    ["Bağdat köylerinden Âcur'da doğdu, tahsilini Bağdat'ta yaptı. 330'a (941) kadar orada kaldı, sonra Mekke'ye yerleşti. Ebû Müslim el-Keccî, Ebû Şuayb el-Harrânî, İbn Ebû Dâvûd, Ebü'l-Kāsım el-Begavî ve İbn Nâciye'den ders aldı. En önemli talebeleri Ebû Nuaym el-İsfahânî ve Mâlikî muhaddis Asîlî'dir. İlk kaynaklar onu Şâfiî sayar; bazı Hanbelî tabakāt yazarları da onu kendi mezheplerinden göstermiştir. 1 Muharrem 360'ta (970) Mekke'de vefat etti.", 'dia'],
    ["Süyûtî onu eş-Şerîa ve el-Erbaîn'in sahibi, âlim, âmil, sünnet ehli, dindar ve sika biri olarak anar.", 'suy'],
  ];
  K['alai'] = [
    ["694'te (1295) Dımaşk'ta Türk asıllı bir asker ailesinde doğdu. On yaşında hadis dinlemeye başladı; Kudüs, Mekke ve Mısır'a rıhleler yaptı. Ahmed b. İbrâhim el-Fezârî, İbnü'z-Zemlekânî, İbn Teymiyye, Mizzî ve Zehebî dahil 700'den fazla âlimden faydalandı. Dımaşk'ta Nâsıriyye ve Esediyye, Kudüs'te Salâhiyye ve Tenkiziyye medreselerinde hadis okuttu; İbn Kesîr ve damadı İsmâil el-Kalkaşendî talebelerindendir.", 'dia'],
    ["Süyûtî'nin aktardığına göre Zehebî onu \"ricâl ve ilelleri ezbere bilen, bu işte ileri giden\" biri olarak anar; Hüseynî ve İsnevî de onu fıkıh, usûl, nahiv ve hadiste imam sayar. Takıyyüddin es-Sübkî'ye kendisinden sonra kimin kalacağı sorulduğunda \"Alâî\" demiştir.", 'suy'],
  ];
  K['asili'] = [
    ["Endülüs'teki Şezûne ya da Cezîretülhadrâ asıllıdır; ailesiyle Fas'taki Asîle'ye yerleşti ve orada büyüdü. 342'de (953) Kurtuba'ya gitti, Vehb b. Meserre'den yedi ay hadis okudu. Doğuya gittiğinde Kayrevan'da İbn Ebû Zeyd'le görüştü; Mısır'da Hamza el-Kinânî'den, Mekke'de Âcurrî'den, Bağdat'ta Ebû Bekir el-Ebherî'den okudu ve Dârekutnî ile buluştu.", 'dia'],
    ["Dârekutnî \"onun benzerini görmedim\" demiştir. Kādî İyâz onu Mâlikî mezhebinin hâfızlarından, hadisi, ilelini ve ricâlini bilenlerden sayar. Saragossa kadılığı yaptı. Zilhicce 392'de vefat etti.", 'suy'],
  ];
  K['ayni'] = [
    ["Büyük dedesi Ahmed 14. yüzyıl başında Ankara'dan Halep'e göçmüştü. Aynî 762'de (1361) ailesinin yerleştiği Ayıntab'da doğdu; Ayıntab kadısı olan babasından fıkıh okudu ve bir süre onun yerine kadılık yaptı. Babasının ölümünden sonra Besni, Kâhta ve Malatya'da, Halep'te ve Kudüs'te okudu; hocası Alâ es-Sîrâmî ile Kahire'ye gidip Berkūkıyye Tekkesi'ne yerleşti. Kahire'de Bulkīnî, Irâkī ve Heysemî'den ders aldı.", 'dia'],
    ["Sehâvî, doğum tarihini (27 Ramazan 762) Aynî'nin kendi hattından okuduğunu ve Ayıntab'da sarf, Arapça ve mantık okuduğunu kaydeder.", 'dav'],
  ];
  K['baci'] = [
    ["403'te doğdu. Rıhleye çıkarak Ebû Zer el-Herevî'nin yanından ayrılmadı; Kādî Ebü't-Tayyib et-Taberî ve İbn Amrûs el-Mâlikî'den fıkıh okudu. Hadis, ilel ve ricâlde, fıkıh ve kelâmda ileri gitti; cerh-ta'dîl, tefsir, fıkıh ve usûlde eserler yazdı ve pek çok kişi ondan rivayet etti. 19 Receb 474'te Almería'da vefat etti.", 'suy'],
  ];
  K['begavi'] = [
    ["\"Muhyissünne\" ve \"Rüknüddin\" lakaplı Ebû Muhammed el-Hüseyn b. Mes'ûd el-Ferrâ. Meâlimü't-tenzîl, Şerhu's-sünne, et-Tehzîb ve el-Mesâbîh'in müellifidir. Kādî Hüseyin'den fıkıh okudu, ondan ve Ebû Ömer el-Melîhî'den rivayet etti.", 'suy'],
    ["Süyûtî onu rabbânî âlimlerden, ibadet ve kanaat ehli biri olarak anar ve hâlis niyeti sayesinde eserlerine bereket verildiğini söyler. Şevval 516'da Merverrûz'da seksen yaşında vefat etti.", 'suy'],
  ];
  K['begavi-ebulkasim'] = [
    ["1 Ramazan 214'te (829) Bağdat'ta doğdu. Ailesi Herat yakınındaki Bağşûr'dan olduğu için Begavî, anne tarafından dedesi Ahmed b. Menî'e nisbetle İbn Menî' diye anılır. Dedesi ve amcası Ali b. Abdülazîz'in ilgisiyle on bir yaşında hadise başladı.", 'dia+siyer'],
    ["Ali b. Ca'd, Ali b. el-Medînî ve Ahmed b. Hanbel dahil 300'ü aşkın hocadan dinledi. İbn Sâid, Katîî, İsmâîlî, İbn Şâhîn, Dârekutnî, İbn Kāni', Taberânî ve İbn Hibbân ondan hadis okudu. Zehebî onu \"müsnidü'l-asr\" diye anar.", 'dia+siyer'],
  ];
  K['beyhaki'] = [
    ["Şâban 384'te (994) Beyhak'ın Hüsrevcird köyünde doğdu. On beş yaşında hadis okudu, sonra fıkha başladı; fıkıhta hocası Ebü'l-Feth Nâsır el-Mervezî'dir. İsferâyin, Tûs, Hemedan, İsfahan, Rey, Nîşâbur, Bağdat, Kûfe ve Mekke'yi dolaştı.", 'dia'],
    ["Hadis ilminin meselelerini en çok Hâkim en-Nîsâbûrî'den öğrendi. Diğer hocaları arasında İbn Fûrek, Hargûşî, İbn Mahmiş, Ebû Abdurrahman es-Sülemî ve Ebû İshak el-İsferâyînî vardır.", 'dia'],
  ];
  K['bikai'] = [
    ["809 civarında Lübnan'ın Bikā' bölgesindeki Hırbetüravha'da doğdu. Köyünde Kur'an'ı ezberledi, babasından şiir, edebiyat ve tarih öğrendi. 821'de köylerine yapılan bir saldırıda babası ve amcaları öldürüldü, kendisi yaralandı. 823'te Dımaşk'a yerleşti; tecvid, kıraat, sarf, nahiv ve fıkıh okudu, 827'de İbnü'l-Cezerî'den on kıraati aldı.", 'dia'],
    ["Sehâvî, Bikāî ile arasındaki anlaşmazlık nedeniyle biyografisinde ona karşı çok sert bir dil kullanır; Bikāî'nin Dımaşk'tan Kudüs'e, oradan büyük yoksulluk içinde Kahire'ye geldiğini kaydeder.", 'dav'],
  ];
  K['birzali'] = [
    ["665'te (1267) muhtemelen Dımaşk'ta, İşbîliye'den göçmüş Berberî asıllı bir ailede doğdu. Sekiz yaşında babasının ve Kadı İbnü's-Sâiğ'in hadis derslerine katıldı; on iki yaşında Sahîh-i Buhârî râvisi Kāsım el-İrbilî'nin derslerine gönderildi. 1286'dan itibaren Halep, Ba'lebek, Kudüs, Hama, Hicaz ve Mısır'a rıhleler yaptı; semâ yoluyla hocalarının 2000'i, icazet verenlerin 1000'i aştığı kaydedilir.", 'dia'],
    ["Süyûtî'ye göre üç binden fazla hocayı kapsayan yedi ciltlik bir Mu'cem derledi; Zehebî bu Mu'cem'i bir şiirle övmüştür. Nûriyye'de hadis okuttu ve Ebû Şâme'ye zeyl olarak bir tarih yazdı. Zilhicce 739'da Mekke'de vefat etti.", 'suy'],
  ];
  K['bulkini'] = [
    ["12 Şâban 724'te (1324) Garbiye'deki Bulkīne'de doğdu; aile aslen Askalânlıdır. Yedi yaşında hâfız oldu; on iki yaşında babasıyla Kahire'ye gidip ezberlediklerini Takıyyüddin es-Sübkî ve Hatîb el-Kazvînî'ye arz etti. Fıkhı Sübkî, İbn Adlân ve İbnü'l-Kammâh'tan, usûlü Şemseddin el-İsfahânî'den, Arapçayı Ebû Hayyân'dan okudu.", 'dia'],
    ["Süyûtî'ye göre Mizzî ve Zehebî ona icazet verdi; mezhebin riyaseti ve fetva onda son buldu. 769'da kısa bir süre Şam kadılığı yaptı. Hadis usûlünde Mehâsinü'l-ıstılâh'ı, Buhârî ve Tirmizî şerhleri yazdı. 10 Zilkade 805'te vefat etti.", 'suy'],
  ];
  K['burkani'] = [
    ["336'da (948) Hârizm'e bağlı Berkan'da doğdu. Önce fıkha, sonra hadise yöneldi. Bağdat, Cürcân, Herat, Nîşâbur, Merv, Dımaşk ve Mısır'da Dârekutnî, İbnü's-Savvâf, Katîî ve İsmâîlî'den okuyup Bağdat'a yerleşti. Hatîb el-Bağdâdî, Ebû Abdullah es-Sûrî, Beyhakī ve Ebû İshak eş-Şîrâzî talebelerindendir. Hadise duyduğu aşırı sevginin Allah sevgisine gölge düşürmesinden korkup dua istediği rivayet edilir.", 'dia'],
    ["Sahîhayn üzerine bir müstahrec yazdı. Hatîb \"hocalarımız arasında ondan daha sebt birini görmedik\" der. Receb 425'te vefat etti.", 'suy'],
  ];
  K['busiri'] = [
    ["762'de (1361) Ebû Sîr'de doğdu. Kahire'de İzzeddin b. Cemâa, Bulkīnî, Irâkī, Heysemî ve kendisinden genç olan İbn Hacer'in derslerine devam etti; İbn Hacer'in Lisânü'l-Mîzân'ını istinsah etti. İnsanlardan uzak, ibadete düşkün bir hayat sürdü; çağdaşları onun hadiste bir otorite olmadığını da kaydeder. 18 Muharrem 840'ta Remle'de vefat etti.", 'dia'],
    ["Süyûtî'ye göre İbn Mâce'nin, Beyhakī'nin es-Sünenü'l-kübrâ'sının ve Tayâlisî, Müsedded, Humeydî, İbn Râhûye, Ebû Ya'lâ gibi müsnedlerin Kütüb-i Sitte'ye zevâidini derledi.", 'suy'],
  ];
  K['carullah-ibn-fehd'] = [
    ["20 Receb 891'de (1486) Mekke'de doğdu; Muhib Ebü'l-Fazl diye de bilinir. Babası İzzeddin İbn Fehd'den okudu, Sehâvî'nin derslerine devam etti; Kur'an'ı, Sahîh-i Müslim'i, Buhârî'nin Sülâsiyyât'ını ve Nevevî'nin Erbaîn'ini ezberledi. 909'da babasıyla Medine'ye gitti; Medine tarihçisi Semhûdî ona hırka giydirdi.", 'dia'],
    ["Kahire, Yemen, Kudüs, Dımaşk ve Halep'e, 928 ve 934'te iki kez Anadolu'ya gitti; Bursa'da uzun süre kalıp el-Cevâhirü'l-hisân'ı orada yazdı. Bu yolculuklarda Süyûtî ve Muhib el-Bûsîrî ile görüştü. Dımaşklı İbn Tolun ile mektuplaşarak ilmî meseleleri tartıştılar.", 'dia'],
  ];
  K['culudi'] = [
    ["Nîşâburlu zâhid Ebû Ahmed Muhammed b. Îsâ el-Cülûdî; Sahîh-i Müslim'i İbrâhim b. Muhammed b. Süfyân'dan rivayet etti. İbn Huzeyme, Muhammed b. Zencûye ve Ebü'l-Abbâs es-Serrâc'dan da dinledi, rıhleye çıkmadı. Hâkim ve Abdülgāfir el-Fârisî ondan rivayet etti. Zehebî onu \"imam, zâhid, kudve, sâdık\" diye anar; Hâkim onu Nîşâbur'un büyük âbidlerinden sayar.", 'siyer'],
  ];
  K['darekutni'] = [
    ["306'da (918) Bağdat'ın Dârülkutn semtinde doğdu; babası da muhaddisti. Bağdat, Basra, Kûfe ve Vâsıt'ta Ebü'l-Kāsım el-Begavî, İbn Ebû Dâvûd ve Mehâmilî'den hadis, Ebû Saîd el-İstahrî'den Şâfiî fıkhı, Nakkāş ve İbn Mücâhid'den kıraat okudu. 357'de Şam ve Mısır'a gitti. Bâkıllânî, Ebû Hâmid el-İsferâyînî, Ebû Zer el-Herevî, Hâkim, Berkānî, Abdülganî el-Ezdî ve Ebû Nuaym talebelerindendir.", 'dia'],
    ["Hâkim onu \"anlayış, hıfz ve vera'da asrının tek adamı\" diye anar. Hatîb'e göre eser ilmi, ilel ve ricâl bilgisi onda son bulmuştur; kıraatte bâbları ilk düzenleyendir. es-Sünen, el-İlel ve el-Efrâd onun eserlerindendir.", 'suy'],
  ];
  K['davudi'] = [
    ["Rebîülâhir 374'te (984) Herat yakınındaki Bûşenc'de doğdu. Bağdat'ta Ebû Hâmid el-İsferâyînî'den, Nîşâbur'da Ebü't-Tayyib es-Su'lûkî'den, Merv'de Kaffâl'dan fıkıh okudu.", 'dia'],
    ["Sahîh-i Buhârî'yi, Abd b. Humeyd'in Müsned'ini ve Dârimî'nin Sünen'ini Bûşenc'de İbn Hammûye es-Serahsî'den dinledi ve bu eserlerde dünyada en âlî isnada tek başına sahip oldu. Abdülgāfir el-Fârisî, Sahîh'i Dâvûdî'den icazetle almayı Ebû Sehl el-Hafsî'den semâ ile almaktan üstün tutmuştur. Hâkim'den de dinledi. Zehebî onu \"müsnidü'l-vakt\" diye anar.", 'dia+siyer'],
  ];
  K['dimyati'] = [
    ["613 sonlarında (1217) Tinnîs ile Dimyat arasındaki Tûne adasında doğdu. Dimyat'ta Şâfiî fıkhı okudu; hocası Muhammed b. Mûsâ'nın teşvikiyle yirmi üç yaşında hadise yöneldi. 636 ve 639'da İskenderiye'ye gitti, 640–642'de Kahire'de Münzirî'den okudu.", 'dia'],
    ["Süyûtî'ye göre 1300 hocayı içeren bir Mu'cem derledi; Arapça, lugat, fıkıh ve nesepte de otoriteydi. Zehebî'nin naklettiğine göre Mizzî \"hadiste Dimyâtî'den hâfızını görmedim\" demiştir. Zilkade 705'te ani olarak vefat etti.", 'suy'],
  ];
  K['ebu-ahmed-hakim'] = [
    ["285'te (898) Nîşâbur'da doğdu. Pamuk bezi ticaretiyle uğraştığı için Kerâbîsî, talebesi Hâkim en-Nîsâbûrî'den ayırt edilmek için \"el-Hâkim el-Kebîr\" diye anılır. Yirmi yaşından sonra hadise başladı ve on yedi yıl Horasan, Taberistan, Rey, Şam, Irak, Cezîre ve Hicaz'ı dolaştı. İbn Huzeyme, Bâgandî, Begavî ve Ebû Arûbe hocaları; Hâkim ve Ebû Abdurrahman es-Sülemî talebeleridir.", 'dia'],
    ["Hâkim onu \"bu sanatta asrının imamı\" diye anar. Şâş ve Tûs kadılığı yaptı, sonra istifa edip mescidine çekildi. Buhârî, Müslim ve Tirmizî üzerine müstahrecler ve el-Künâ'yı yazdı.", 'suy'],
  ];
  K['ebu-ali-gassani'] = [
    ["Muharrem 427'de (1035) Ceyyân'da (Jaén) doğdu; ailesi Kurtuba'dan Berberî karışıklıkları sırasında göçmüştü. On yedi yaşında hadise başladı; İbn Abdülber, Ebü'l-Velîd el-Bâcî ve İbnü'd-Delâî'den okudu. Ebû Ali es-Sadefî ondan rivayet etti.", 'dia'],
    ["Endülüs dışına hiç çıkmadı; Kurtuba camisinde ders verdi ve insanlar ona rıhle yaptı. Dil, Arapça, şiir ve nesepte de bilgindi. Takyîdü'l-mühmel ve temyîzü'l-müşkil'i yazdı. 12 Şâban 498'de vefat etti.", 'suy'],
  ];
  K['ebu-ali-nisaburi'] = [
    ["277'de (890) doğdu. Önce kuyumculuk öğrendi, bir âlimin tavsiyesiyle on yedi yaşında hadise başladı; ilk hocası İbrâhim b. Ebû Tâlib'dir. Herat'tan Medine'ye kadar dolaşarak İbn Huzeyme, Zekeriyyâ es-Sâcî, Abdân el-Ahvâzî ve Nesâî'den istifade etti. İbn Mende, Hâkim ve Ebû Abdurrahman es-Sülemî talebelerindendir. 303'te Bağdat'a gitmek istediğinde hocası İbn Huzeyme, Nîşâbur'un ona daha çok ihtiyacı olduğunu söyleyerek razı olmadı.", 'dia'],
    ["Talebesi Hâkim onu \"hıfz, itkan, vera', müzakere ve tasnifte asrının tek adamı\" diye anar. İbn Mende ondan \"gök kubbe altında Müslim'in kitabından daha sahihi yoktur\" sözünü nakleder. Cemâziyelevvel 349'da vefat etti.", 'suy'],
  ];
  K['ebu-avane'] = [
    ["230'dan sonra Nîşâbur asıllı, İsferâyin'de yaşayan bir ailede doğdu. Horasan, Irak, İran, Şam, Mısır, Hicaz ve Yemen'i dolaştı; Müslim, Ahmed b. Ezher, Ömer b. Şebbe, Zühlî, Ebû Zür'a ve Ebû Hâtim'den okudu. 292'de Cürcân'da hadis rivayet ettiği bilinir. Şâfiî'nin görüş ve eserlerini Rebî' ve Müzenî'den doğrudan alarak İsferâyin'e ilk getiren odur.", 'dia'],
    ["Süyûtî onu Müslim'in Sahîh'i üzerine ek rivayetler içeren el-Müsnedü's-sahîh'in sahibi olarak anar. Ebû Ali en-Nîsâbûrî, İbn Adî ve Taberânî ondan rivayet etti. 316'da vefat etti.", 'suy'],
  ];
  K['ebu-hayyan'] = [
    ["Şevval 654 sonunda (1256) Gırnata'ya bağlı Matahşâreş'te Berberî bir ailede doğdu. Gırnata'da Abdülhak b. Ali el-Ensârî'den yedi kıraati okudu; İbnü'z-Zübeyr es-Sekafî ve İbn Ebü'l-Ahvas'tan Arapça aldı. 674'ten itibaren Arapça okuttu; 677 civarında hocalarıyla anlaşmazlık yüzünden Endülüs'ten ayrılıp doğuya gitti.", 'dia'],
    ["İbn Hacer'e göre İskenderiye'de ve Kahire'de kıraat okudu, Kahire'de Bahâeddin İbnü'n-Nehhâs'ın yanından ayrılmadı ve edebiyat kitaplarını ondan dinledi.", 'durer'],
  ];
  K['ebul-arab'] = [
    ["250–260 yılları arasında Kayrevan'da köklü bir ailede doğdu; büyük dedesi Temmâm, Hârûnürreşîd devrinde Kuzey Afrika'da idarî ve askerî görevler yapmış, Bağdat'ta hapiste ölmüştü. Sahnûn'un talebeleri Yahyâ b. Ömer, Îsâ b. Miskîn, Himâs b. Mervân ve İbnü'l-Haddâd'dan ders aldı. İbn Ebû Zeyd ve Muhammed b. Hâris el-Huşenî talebelerindendir. Fâtımîlerin Tunus'a gelişine (296) ve Ağlebîlerle mücadelelerine tanık oldu.", 'dia'],
    ["Kādî İyâz onu Mâlik mezhebinin hâfızı, hadis ve ricâlin kendisine galip geldiği bir âlim olarak anar. Zilkade 333'te vefat etti.", 'suy'],
  ];
  K['ebul-leys'] = [
    ["Muhtemelen Semerkant'ta doğdu; 294'te ölen aynı adlı Mu'tezilî bir âlimle zaman zaman karıştırılmıştır. Fıkıhta asıl hocası \"Küçük Ebû Hanîfe\" diye anılan Ebû Ca'fer el-Hinduvânî'dir; hadis, kelâm ve tefsir de okudu. Semerkant, Belh, Buhara ve Bağdat'ta bulundu; Halîl b. Ahmed es-Siczî ve Muhammed b. Fazl el-Buhârî hocalarındandır.", 'dia'],
    ["Zehebî onu Tenbîhü'l-gāfilîn ve el-Fetâvâ'nın sahibi Hanefî fakih ve zâhid olarak anar; eserlerinde mevzû hadislerin yer aldığını belirtir ve vefatını Cemâziyelâhir 375 olarak kaydeder.", 'siyer'],
  ];
  K['ebul-vakt'] = [
    ["Zilkade 458'de (1066) Herat'a iki mil uzaklıktaki Mâlîn köyünde doğdu; aslen Sicistanlıdır. Babası ona Muhammed adını koymuş, Hâce Abdullah-ı Herevî adını Abdülevvel olarak değiştirip \"Ebü'l-Vakt\" künyesini vermiştir; uzun yıllar Herevî'nin en gözde müridi oldu. Yedi yaşında babasıyla Bûşenc'e yaya gidip Dâvûdî'den Sahîh-i Buhârî'yi, Dârimî'nin Sünen'ini ve Abd b. Humeyd'in Müntehab'ını dinledi.", 'dia+siyer'],
    ["Zehebî onu \"şeyhülislâm, müsnidü'l-âfâk, zâhid, sûfî\" diye anar.", 'siyer'],
  ];
  K['ebu-mesud-dimaski'] = [
    ["Hayatı hakkında fazla bilgi yoktur. Bağdat, Basra, Kûfe, Ahvaz, Vâsıt ve İsfahan'da Ebû Bekir el-Kabbâb, Ali b. Abdurrahman el-Bekkâî ve Ahmed b. Abdân eş-Şîrâzî'den faydalandı. Lâlekâî, Hamza es-Sehmî ve Ebû Zer el-Herevî ondan rivayet etti. Çalışmalarını Buhârî ve Müslim'in Sahîh'leri üzerinde yoğunlaştırdı; Zehebî'ye göre kıraatte de dikkat çekti. Ömrünün sonunda Bağdat'a yerleşti, talebelerine çoğunlukla müzakere yoluyla rivayette bulundu ve genç yaşta vefat etti.", 'dia'],
    ["Süyûtî onu Sahîhayn'ın etrâfının sahibi olarak anar ve vefatını Receb 400 olarak verir.", 'suy'],
  ];
  K['ebu-musa-medini'] = [
    ["Zilkade 501'de (1108) İsfahan'da doğdu. Kıraatle uğraşan babası onu iki yaşından itibaren hadis meclislerine götürdü. Hemedan ve Bağdat başta olmak üzere birçok yere giderek Ebû Ali el-Haddâd, Yahyâ b. Mende ve İbnü'l-Kayserânî dahil 300'ü aşkın hocadan faydalandı, kıraat de okudu. İsfahan'a dönüp yerleşti; Sem'ânî, Hâzimî, Cemmâîlî (Abdülganî el-Makdisî) ve Ruhâvî ondan okudu.", 'dia'],
    ["Süyûtî'ye göre isnadı yüksek, zamanının tek adamı ve şeyhi oldu; mütevazıydı ve kimseden hiçbir şey kabul etmezdi. Ma'rifetü's-sahâbe, et-Tıvâlât ve Tetimmetü'l-Garîbeyn eserlerindendir. 9 Cemâziyelevvel 581'de vefat etti.", 'suy'],
  ];
  K['ebu-nuaym-isfahani'] = [
    ["Receb 336'da (948) İsfahan'da Fars asıllı bir ailede doğdu. Babası Ebû Muhammed Abdullah, Suriye ve Irak'a hadis için seyahat eden bir hâfızdı. Sekiz yaşından itibaren Ebü'ş-Şeyh ve İbnü'l-Mukrî'den ders aldı; babası onun adına Hayseme b. Süleyman, Ebü'l-Abbâs el-Esam ve İbn Dâse'den icazet aldı.", 'dia'],
    ["Süyûtî'ye göre altı yaşında dünyanın dört bir yanındaki hocalardan icazet aldı ve onlardan rivayette tek kaldı; ilmi, zabtı ve âlî isnadı nedeniyle hâfızlar ona rıhle yaptı. Hatîb \"hâfız adının verildiğini Ebû Nuaym ve Ebû Hâzim'den başkasında görmedim\" der. Hilye, Buhârî ve Müslim üzerine müstahrecler, Delâilü'n-nübüvve, Ma'rifetü's-sahâbe ve Târîhu Isbahân eserlerindendir. Muharrem 430'da vefat etti.", 'suy'],
  ];
  K['ebus-seyh'] = [
    ["274'te (887) İsfahan'da doğdu; \"yaşlı kimse\" anlamındaki lakabı muhtemelen doksanı aşan ömrü sebebiyle verilmiştir. Babası, dayısı ve anne tarafından dedesi muhaddisti; on yaşında hadis dinlemeye başladı, ilk hocası dedesi Mahmûd b. Ferec'dir. İbn Ebû Âsım, Bezzâr ve Taberânî'den okudu. Yirmi beş yaşında Bağdat, Basra, Kûfe, Musul, Cezîre ve Hicaz'a gitti; Firyâbî, Ebû Halîfe, Ebû Ya'lâ, Ebû Arûbe ve Begavî'den dinledi.", 'dia'],
    ["Süyûtî onu \"İsfahan'ın hâfızı ve zamanının müsnidi\" diye anar; sâlih, sadûk, me'mûn, sika ve mütkın biriydi, tefsir ve başka eserler yazdı. Muharrem 369'da vefat etti.", 'suy'],
  ];
  K['ebu-yala'] = [
    ["3 Şevval 210'da (826) Musul'da doğdu; babası muhaddis, dayısı hâfızdı. On beş yaşında Bağdat, Basra, Abadan ve Ahvaz'a gitti, Ebû Zür'a er-Râzî ile arkadaş oldu. Ahmed b. Hanbel ile birlikte Ali b. Ca'd'dan dinledi; Yahyâ b. Maîn, Ali b. el-Medînî, Osman b. Ebû Şeybe ve Ebû Hayseme'nin talebesi oldu. Nesâî, İbn Hibbân, Taberânî, İsmâîlî, İbn Adî, İbnü's-Sünnî ve Ebü'ş-Şeyh ondan rivayet etti.", 'dia'],
    ["Süyûtî onu \"Cezîre muhaddisi\" ve büyük Müsned'in sahibi olarak anar. İsmâil b. Muhammed'in sözüyle: \"Müsnedler nehir gibidir, Ebû Ya'lâ'nın Müsned'i ise nehirlerin toplandığı deniz.\" Uzun yaşayıp rivayette tek kaldı ve insanlar ona rıhle yaptı. 307'de vefat etti.", 'suy'],
  ];
  K['ebu-zer-herevi'] = [
    ["355 veya 356'da (966) Herat'ta doğdu; İbnü's-Semmâk diye de tanınır. Basra'da Hilâl b. Muhammed, Bağdat'ta Dârekutnî ve Bâkıllânî, Dımaşk'ta Abdülvehhâb el-Kilâbî, Mısır'da Ebû Müslim el-Kâtib, Mekke'de İbrâhim ed-Dîneverî'den faydalandı.", 'dia'],
    ["Sahîh-i Buhârî'yi Hammûye'den 373'te Serahs'ta, Müstemlî'den 374'te Belh'te, Küşmîhenî'den 387'de Merv'de okudu ve eseri Horasan, Bağdat ve Mekke'de okuttu. Süyûtî onu \"Harem şeyhi\", zâhid, âbid, hocası çok bir hâfız olarak anar; Sahîhayn üzerine bir müstahrec, Delâilü'n-nübüvve ve Mu'cem'i vardır. Şevval 434'te vefat etti.", 'dia+suy'],
  ];
  K['ebu-zeyd-mervezi'] = [
    ["301'de doğdu. Sahîh-i Buhârî'yi Firebrî'den rivayet etti; Münkedirî, Ebü'l-Abbâs ed-Degūlî ve Ömer b. Alek'ten de dinledi. Çok yolculuk yaptı ve Sahîh'i farklı yerlerde okuttu. Hâkim, Ebû Abdurrahman es-Sülemî, Dârekutnî, Berkānî ve Asîlî ondan rivayet etti. Zehebî onu \"Şâfiîlerin şeyhi, imam, müftî, zâhid\" diye anar.", 'siyer'],
  ];
  K['ebu-zura-iraki'] = [
    ["Zilhicce 762'de doğdu. Babası Zeynüddin el-Irâkī onu Fahr İbnü'l-Buhârî'nin talebelerinden dinletti; babasına müstemlîlik yaptı. Fıkıhta Bulkīnî'nin yanından ayrılmadı; Ebnâsî, İbnü'l-Mülakkın ve Ziyâ el-Kazvînî'den de okudu.", 'suy'],
    ["Süyûtî onu imam, muhaddis, hâfız, fakih ve usûlcü olarak anar. Ebû Dâvûd'un Sünen'ine yarım kalan bir şerh, Cem'u'l-cevâmi' şerhi, babasının manzumelerine şerhler ve fıkıhta nükteler yazdı.", 'suy'],
  ];
  K['esam'] = [
    ["247'de (861) Nîşâbur'da doğdu. Muhaddis ve verrâk babası Ya'kūb b. Yûsuf, 265'te onu yanına alarak İsfahan, Mekke, Askalân, Bağdat, Mısır, Dımaşk, Beyrut ve Kûfe'yi dolaştırdı ve büyük hocaların kitaplarını bizzat onlardan dinletti. Bağdat'ta Abbas ed-Dûrî ve Muhammed b. İshak es-Sâgānî'den, Mısır'da Rebî' b. Süleyman'dan, Dımaşk'ta Ebû Zür'a ed-Dımaşkī'den okudu.", 'dia'],
    ["Süyûtî onu \"tartışmasız asrının muhaddisi\" diye anar; yetmiş altı yıl hadis okuttu, Hâkim ve pek çok kişi ondan dinledi; Ebû Nuaym ondan icazetle rivayette tek kaldı. Rebîülâhir 346'da vefat etti.", 'suy'],
  ];
  K['fettani'] = [
    ["914'te (1508) Gücerât'taki Nehrevâle'de (bugünkü Pattan) doğdu. İlk öğrenimini Burhâneddin es-Semhûdî ve Nâkūrî'den gördü. 944'te hacca gidip Hicaz'da kaldı; Ebü'l-Hasan el-Bekrî, İbn Hacer el-Heytemî, İbn Arrâk, Abdullah el-Ayderûs ve Cârullah el-Mekkî'den ders aldı ve Ali el-Müttakī'ye intisap etti.", 'dia'],
    ["Hindistan'a dönünce \"Hint muhaddislerinin efendisi\" diye tanındı; babasından kalan serveti talebelerine harcadı. Mehdevîlere karşı mücadele etti, 980'de Ekber Şah'tan destek sözü aldı. Şikâyetlerini Ekber Şah'a iletmek için yola çıktığında Ücceyn yakınlarında bir Mehdevî tarafından öldürüldü (6 Şevval 986). Kur'an ve hadis garîbine dair Mecmau bihâri'l-envâr en meşhur eseridir.", 'dia'],
  ];
  K['firebri'] = [
    ["231'de (845) Ceyhun ile Buhara arasındaki Firebr köyünde doğdu. Ali b. Haşrem'den hadis aldığı bilinir; diğer hocaları hakkında bilgi yoktur. Zehebî, Kuteybe b. Saîd'den dinlediğini söyleyenlerin yanıldığını belirtir.", 'dia+siyer'],
    ["Onu ilim dünyasına tanıtan, Buhârî'nin el-Câmiu's-sahîh'inin aslına sahip olması ve eseri rivayet etmesidir. Zehebî'ye göre Sahîh'i müellifinden 248'de ve 252'de olmak üzere iki kez dinledi. İbnü's-Seken, Ebû Zeyd el-Mervezî, Müstemlî, Küşmîhenî ve Hammûye es-Serahsî ondan rivayet etti; Küşmîhenî 320'de ondan dinlediğine göre ömrünün sonuna kadar okuttu.", 'dia+siyer'],
  ];
  K['firuzabadi'] = [
    ["729'da (1329) Şîraz'a bağlı Kâzerûn'da doğdu. Babasının yanında okudu, yedi yaşında Kur'an'ı ezberledi; sekiz yaşında Şîraz'a gidip dil ve edebiyat okudu, Zerendî'den Sahîh-i Buhârî ve Tirmizî'nin Sünen'ini aldı. 745'te Vâsıt'ta kıraat, Bağdat'ta Sâgānî'nin Meşâriku'l-envâr'ını ve Sahîh'i okudu. 755'te Şam'a geçti, Takıyyüddin es-Sübkî başta olmak üzere yüz kadar hocadan dinledi.", 'dia'],
    ["Sehâvî de onun Kâzerûn'da doğduğunu, yedi yaşında Kur'an'ı ezberlediğini ve dil ile edebiyatı babasından ve Kıvâmüddin Abdullah'tan aldığını kaydeder.", 'dav'],
  ];
  K['furavi'] = [
    ["441'de (1049) Nîşâbur'da doğdu; babası Furâve'de yaşadığı için Furâvî diye anılır. Altı yaşında hadis dinlemeye başladı. Sahîh-i Buhârî'yi Saîd el-Ayyâr ve Ebû Sehl el-Hafsî'den, Sahîh-i Müslim'i Abdülgāfir el-Fârisî'den okudu; Beyhakī, Abdülkerîm el-Kuşeyrî ve İmâmü'l-Haremeyn el-Cüveynî'nin talebesi oldu.", 'dia+siyer'],
    ["Uzun ömrü sayesinde Sahîh-i Müslim'i ve hocası Beyhakī'nin el-Esmâ ve's-sıfât, Delâilü'n-nübüvve ve diğer bazı eserlerini yıllarca tek başına rivayet etti; Sem'ânî ondan dinledi. Zehebî onu \"Horasan müsnidi, Fakîhü'l-Harem\" diye anar.", 'dia+siyer'],
  ];
  K['haccar'] = [
    ["624 civarında doğdu. Zehebî 706'da yaşını sorduğunda Melik Nâsır Dâvûd'un 626'daki Dımaşk kuşatmasını hatırladığını söylemiştir. İbnü'z-Zebîdî ve İbnü'l-Letî'den dinledi; Bağdat'tan Katîî, İbn Rûzbe ve Kâşgarî ona icazet verdi.", 'durer'],
    ["Muhaddisler onu ancak 706'da tanıdı: adı İbnü'l-Letî'nin cüzlerinde ve İbnü'z-Zebîdî'nin Sahîh dinleyicileri arasında bulununca Sahîh-i Buhârî'yi Dımaşk, Sâlihiyye, Kahire, Hama, Ba'lebek ve Humus'ta yetmişten fazla kez okuttu.", 'durer'],
  ];
  K['hakim'] = [
    ["3 Rebîülevvel 321'de (933) Nîşâbur'da doğdu; \"İbnü'l-Beyyi'\" künyesiyle ve Nîşâbur kadılığı yaptığı için \"Hâkim\" lakabıyla tanınır. Dokuz yaşında hadise başladı, on üç yaşında İbn Hibbân'dan imlâ yazdı. 341'de Irak'a, 343'te Horasan'a gitti; yalnız Nîşâbur'da bin, toplamda iki bin hocadan dinlediği rivayet edilir. İlk hocası, Müslim'i görmüş olan babasıdır.", 'dia'],
    ["Süyûtî onu el-Müstedrek, Târîh, Ulûmü'l-hadîs, el-Medhal ve el-İklîl'in sahibi olarak anar; Ebû Sehl es-Su'lûkî'den fıkıh okudu, Şîa'ya meyli olduğu söylenir. Zemzem içerken güzel eser yazmayı dilediğini söyler. Dârekutnî onu İbn Mende'den daha mütkın bulmuştur. Dârekutnî, Beyhakī ve Halîlî ondan rivayet etti.", 'suy'],
  ];
  K['halili'] = [
    ["366 civarında (976) Kazvin'de ilme düşkün bir ailede doğdu. Bağdat, Nîşâbur, Kûfe, Cürcân ve İsfahan'da Müzekkî, Dârekutnî, Ebû Hafs el-Kettânî, Ebû Tâhir el-Muhallis ve Hâkim'in derslerine katıldı; İbnü'l-Mukrî, İbn Şâhîn ve Gıtrîfî'den icazet aldı. Kazvin'e dönüp kadılık yaptı; hocası Ebû Bekir b. Lâl ve oğlu Ebû Zeyd ondan rivayet etti.", 'dia'],
    ["Süyûtî onu el-İrşâd fî ma'rifeti'l-muhaddisîn'in müellifi, sika, hâfız, hadis illetlerini ve ricâli bilen, âlî isnadlı biri olarak anar.", 'suy'],
  ];
  K['hammuye'] = [
    ["Serahs hatibi Ebû Muhammed Abdullah b. Ahmed b. Hammûye. 316'da Sahîh-i Buhârî'yi Firebrî'den dinledi; Abd b. Humeyd'in Müsned'ini ve Tefsîr'ini İbrâhim b. Huzeym eş-Şâşî'den, Dârimî'nin Müsned'ini Îsâ b. Ömer es-Semerkandî'den aldı. Ebû Zer el-Herevî, Kurrâb ve Dâvûdî ondan rivayet etti. Ebû Zer onu \"sika, güzel asılların sahibi\" diye anar; Sahîh'in bâblarını sayan bir cüzü vardır.", 'siyer'],
  ];
  K['hamza-kinani'] = [
    ["Şâban 275'te (888) Mısır'da doğdu. 295'te hadise başladı, 305'te Irak'a ilk rıhlesini yaptı; Halep kadısı ona tahsili için iki yüz dinar verdi. Nesâî, Ebû Halîfe, Abdân el-Ahvâzî ve Ebû Ya'lâ'dan dinledi. Dârekutnî, İbn Mende, Abdülganî el-Ezdî ve Temmâm er-Râzî ondan rivayet etti. Bir hadisin iki yüz tarikini topladığını söylemiştir.", 'dia'],
    ["Süyûtî onu \"Bitâka meclisi\"nin sahibi olarak anar. Hâkim'e göre hadis bilgisinde öne geçtiği ittifakla kabul edilir ve vera', zühd ve ibadetiyle anılır. Zilhicce 357'de vefat etti.", 'suy'],
  ];
  K['hasen-b-sufyan'] = [
    ["213'te (828) Nesâ'da doğdu; Şeybân kabilesindendir. Horasan, Bağdat, Basra, Kûfe, Hicaz, Mısır ve Şam'da İshak b. Râhûye, Kuteybe b. Saîd, Ali b. Hucr, Ahmed b. Hanbel, Yahyâ b. Maîn ve Ebû Bekir b. Ebû Şeybe'den hadis aldı. Ebû Sevr'den fıkıh okudu ve onun mezhebine göre fetva verdi.", 'dia+suy'],
    ["Süyûtî onu büyük Müsned'in ve Erbaîn'in sahibi olarak anar. Hâkim'e göre asrında Horasan'ın muhaddisiydi ve dünyada eşi yoktu. Doksan yaşındayken kendisini sınamak için isnadları karıştıran bir ziyaretçiye \"ihtiyarlara karşı Allah'tan kork\" demiştir.", 'suy'],
  ];
  K['hatib'] = [
    ["23 Cemâziyelâhir 392'de (1002) Mekke–Medine yolu üzerindeki Guzeyye'de doğdu; soyu Kûfe civarında yaşayan bir Arap aşiretine dayanır. Babası Derzîcân köyünde yirmi yıl hatiplik yaptı; muhtemelen kendisi de bu görevi sürdürdüğü için Hatîb diye anıldı. Babası onu hadis ve fıkıh için Hilâl b. Abdullah et-Tîbî'ye gönderdi.", 'dia'],
    ["Zehebî'ye göre on bir yaşında hadis dinledi, yirmi yaşında Basra'ya, yirmi üçünde Nîşâbur'a, olgunluk çağında Şam'a ve Mekke'ye gitti. Eser yazdı, hadisleri tashih ve ta'lîl etti, cerh ve ta'dîl yaptı ve tarih yazdı; Zehebî onu \"hâfızların sonuncusu, asrının en hâfızı\" diye anar.", 'siyer'],
  ];
  K['hattabi'] = [
    ["Receb 319'da (931) Kâbil'e komşu Büst'te doğdu; asıl adı Hamd'dir. Büst'ün Türk hâkimiyetindeki bir şehir olması, Türk asıllı olduğu kanaatini güçlendirir. Nîşâbur'da Kaffâl eş-Şâşî'den Şâfiî fıkhı okudu; Arapçayı Bağdat'ta Gulâmu Sa'leb'den tamamladı; hadisi Mekke'de İbnü'l-A'râbî'den aldı.", 'dia'],
    ["Süyûtî'ye göre İbn Dâse ve Esam'dan da dinledi; Hâkim ondan rivayet etti. Buhârî şerhi, Meâlimü's-sünen, Garîbü'l-hadîs, Esmâ-i hüsnâ şerhi ve el-Uzle'yi yazdı; sika, sağlam ve ilim kaplarındandı. Rebîülâhir 388'de Büst'te vefat etti.", 'suy'],
  ];
  K['hayseme'] = [
    ["250'de (864) Trablusşam'da Kureyş asıllı, hadisle uğraşan bir ailede doğdu; \"Şam muhaddisi\" unvanıyla anılır. Beyrut, Cebele, Hicaz, Irak, Yemen, Askalân, Dımaşk, Humus, Halep, Bağdat, Antakya, Kûfe, Basra ve Nîşâbur'u dolaştı. Cebele'ye giderken esir düştü ve dört ay sonra serbest bırakıldı. Ebû Kılâbe er-Rekāşî, İbn Ebû Hayseme ve Abdullah b. Ahmed b. Hanbel'den dinledi.", 'dia'],
    ["Süyûtî onu sika ve rıhle sahibi biri, Fezâilü's-sahâbe'nin derleyicisi olarak anar; İbn Mende ondan Trablus'ta bin cüz yazdığını söyler. Zilkade 343'te vefat etti.", 'suy'],
  ];
  K['heysemi'] = [
    ["Receb 735'te (1335) Fustat ile Mukattam arasındaki Sahrâ'da doğdu; oradaki Ebü'l-Heysem köyüne nisbet edilir. Adının İbn Hacer el-Heytemî ile karıştırıldığına DİA dikkat çeker. On beş yaşında Kahire'ye gitti; on yaş büyük Zeynüddin el-Irâkī ile tanıştı. Irâkī hem hocası hem hâmisi oldu; onunla Haremeyn, Kudüs, Dımaşk, Ba'lebek, Halep, Hama ve Humus'a yolculuklar yaptı.", 'dia'],
    ["Süyûtî'ye göre Irâkī'nin dinlediği her şeyi onunla birlikte dinledi ve ondan ayrılmadı; metinleri çok ezberlediği için Irâkī'ye sorulan hadisi hemen söylerdi, ancak İbn Hacer'e göre asıl hıfz ma'rifettir. Irâkī'nin teşvikiyle Ahmed, Bezzâr, Ebû Ya'lâ ve Taberânî'nin zevâidini derleyip bunları tek kitapta birleştirdi.", 'suy'],
  ];
  K['heytemi'] = [
    ["909'da (1503) Mısır'ın Garbiye bölgesindeki Mahalletü Ebi'l-Heytem'de doğdu (899 ve 911 de denmiştir; doğrusu kendi Mu'cem'indeki kayda göre 909'dur). Büyük dedelerinden biri az konuştuğu için \"Hacer\" diye anılmış, soyu İbn Hacer adını almıştır. Küçükken babasını kaybetti; sûfî İbn Ebü'l-Hamâil ve talebesi Şinnâvî'nin himayesinde Tanta'ya, 924'te Kahire'ye gidip Ahmediyye Medresesi'nde ve Ezher'de okudu; hocaları arasında Zekeriyyâ el-Ensârî vardır.", 'dia'],
  ];
  K['humeydi'] = [
    ["Mayorka'da doğdu; aslen Yemen'in Ezd kabilesindendir. Babası onu küçükken hadis meclislerine götürdü. Asbağ b. Râşid ve İbn Ebû Zeyd'den fıkıh öğrendi; 430–440 arasında İbn Hazm'ın eserlerini ona okudu, İbn Abdülber'den de faydalandı. 448'de hacca gitti; Dımaşk, Hicaz, Kahire ve Kayrevan'ı dolaşıp Bağdat'a yerleşti ve Hatîb el-Bağdâdî ile İbn Mâkûlâ'dan faydalandı; onlar da ondan rivayet etti.", 'dia'],
    ["Süyûtî onu İbn Hazm'ın büyük talebelerinden, Endülüs tarihi ile el-Cem' beyne's-Sahîhayn'ın müellifi, hadis, fıkıh, edebiyat ve Arapçada imam olarak anar. 17 Zilhicce 488'de vefat etti.", 'suy'],
  ];
  K['huseni'] = [
    ["3. asrın sonlarında Kayrevan'da doğdu; Kudâa'nın Huşeyn b. Nemr koluna nisbet edilir. Kayrevan'da Ahmed b. Nasr el-Hevvârî ve İbnü'l-Lebbâd'dan okudu. 311 veya 312'de Kurtuba'ya gidip Kāsım b. Asbağ, İbn Ubâde ve İbn Lübâbe'nin derslerine katıldı; Endülüs'ü dolaştı, bir süre Sebte'de kaldı ve Kurtuba'ya yerleşerek veliaht II. Hakem'in yakın ilgisini gördü.", 'dia'],
    ["Süyûtî onu fıkıh ve tarih üzerine eser yazan, belîğ bir şair olarak anar, ancak dil hatası yaptığını da söyler. Safer 371'de vefat etti.", 'suy'],
  ];
  K['huseyni'] = [
    ["Şâban 715'te (1315) Dımaşk'ta doğdu. İshak el-Âmidî, İzzeddin İbn Cemâa, İbn Abdüddâim, Mizzî ve Zehebî'den okudu; Mısır'da Meydûmî'nin derslerine devam etti. Dârülhadîs el-Bahâiyye şeyhliği yaptı; çok hızlı yazdığı, Zehebî'nin el-İber'ini beş günde istinsah ettiği kaydedilir. Irâkī onu Moğultay, İbn Kesîr ve İbn Râfi' ile karşılaştırmış, tahrîci en iyi bileni ama hıfzda geride olduğunu söylemiştir.", 'dia'],
    ["Süyûtî'ye göre kendisi için bir Mu'cem derledi, Ahmed'in Müsned'inin ricâlini topladı, on kitabın ricâline dair et-Tezkire'yi yazdı ve Zehebî'nin el-İber'ine ve Tabakātü'l-huffâz'ına zeyl yaptı. Şâban 765'te vefat etti.", 'suy'],
  ];
  K['ibn-abdilber'] = [
    ["5 Rebîülâhir 368'de (978) Kurtuba'da doğdu; dedesi tanınmış bir sûfî, babası Kurtuba'nın önde gelen âlimlerindendi. Abbas b. Asbağ ve Abdurrahman b. Ebân'dan faydalandı; tefsir, fıkıh, hadis, cedel ve siyer okudu. Endülüs dışına çıkmadı ve 107 âlimden icazet aldı.", 'dia'],
    ["Süyûtî'ye göre Mısır'dan Abdülganî b. Saîd ona icazet verdi; Bâcî \"Endülüs'te hadiste onun gibisi yoktu\" demiştir. et-Temhîd, el-İstizkâr, el-İstîâb ve Câmiu beyâni'l-ilm eserlerindendir. Lizbon kadılığı yaptı; önce Zâhirî iken sonra Mâlikî oldu.", 'suy'],
  ];
  K['ibn-abdulhadi'] = [
    ["İbn Kudâme ailesinden; 705'te (1305) Dımaşk'ın Sâlihiye semtinde doğdu (İbn Receb 704 der). İbn Bashân'dan kıraat, Enderşî'den gramer okudu ve İbn Teymiyye'nin derslerine devam etti.", 'dia+suy'],
    ["Süyûtî'ye göre İbn Abdüddâim'in tabakasından dinledi, fıkhı İbn Müslim'den okudu. Safedî \"yaşasaydı bir âyet olurdu\" der ve onun ricâlde Mizzî'yi düzelttiğini, Mizzî'nin de bunu kabul ettiğini anlatır. İbn Kesîr onu ilel, turuk ve ricâlde dağ gibi sayar; Mizzî ve Zehebî onunla her karşılaştıklarında ondan faydalandıklarını söylemiştir. Sadriyye ve Ziyâiyye'de ders verdi.", 'suy'],
  ];
  K['ibn-adi'] = [
    ["Zilkade 277'de (891) Cürcân'da ilim geleneğine sahip bir ailede doğdu; Arapçayı iyi bilmemesinden Türk asıllı olduğu tahmin edilir. On üç yaşında hadise başladı; 297'de Mısır'a, 305'te İskenderiye'den Semerkant'a kadar Suriye, Irak, Horasan, Cibâl ve Hicaz'a yolculuk etti.", 'dia'],
    ["Süyûtî'ye göre Muhammed b. Osman b. Ebû Şeybe, Nesâî ve Ebû Ya'lâ'dan dinledi; hocası İbn Ukde ve talebesi Hamza es-Sehmî ondan rivayet etti. el-Kâmil'in müellifi, ilelleri bilen, sika ve mütkın biriydi. Halîlî onu hıfz ve celâlette eşsiz sayar. Cemâziyelâhir 365'te vefat etti.", 'suy'],
  ];
  K['ibn-asakir'] = [
    ["Muharrem 499'da (1105) Dımaşk'ta doğdu; anne tarafı da ilimle tanınıyordu, annesinin babası Dımaşk kadısıydı. İbn Asâkir lakabının neden verildiği bilinmemektedir. İlk bilgilerini ailesinden aldı.", 'dia'],
    ["Süyûtî'ye göre 505'te babasının ilgisiyle dinlemeye başladı; Bağdat, Kûfe, Nîşâbur, Merv ve Herat'a rıhle yaptı. Hocalarının sayısı 1300'ü, kadın hocalarınınki 80'i aşar. Târîhu Dımaşk ve el-Erba'ûnü'l-büldâniyye eserlerindendir; metin ile isnadı bir arada bilen, dindar bir hâfızdı.", 'suy'],
  ];
  K['ibn-beskuval'] = [
    ["3 Zilhicce 494'te (1101) Kurtuba'da doğdu; babası Mâlikî fakihi ve hadis-kıraat âlimiydi. İşbîliye'de Ebû Bekir İbnü'l-Arabî'den fıkıh okudu ve onun kadı nâibi oldu. İbn Attâb, İbn Rüşd el-Ced ve Ebû Ali es-Sadefî hocalarındandır; Endülüs dışına çıkmadı.", 'dia'],
    ["Süyûtî onu \"Endülüs'ün muhaddisi ve tarihçisi\" diye anar; rivayeti geniş, zamanının ileri gelenlerinden, sâlih ve mütevazı biriydi, elli eser yazdı. 8 Ramazan 578'de vefat etti.", 'suy'],
  ];
  K['ibn-cevsa'] = [
    ["230 civarında (844) doğdu; Dımaşklı bir mevlâdır. Hişâm b. Abdülmelik, Yûnus b. Abdüla'lâ ve Şam ile Mısır âlimlerinden rivayet etti. Ebû Ali en-Nîsâbûrî, Hamza el-Kinânî, Taberânî, İbnü's-Sünnî, İbn Adî, Ebû Ahmed el-Hâkim ve İbn Hibbân ondan rivayet etti. Ebû Ali onu hadisin temellerinden sayar, Taberânî sika bulur; Dârekutnî ise çok güvenilir olmadığını söylemiştir.", 'dia'],
    ["Süyûtî onu \"Şam muhaddisi\" diye anar; ilel ve ricâl üzerine konuştu. \"İbn Cevsâ Şam'da, İbn Ukde Kûfe'de gibidir\" denirdi.", 'suy'],
  ];
  K['ibn-dakik'] = [
    ["25 Şâban 625'te (1228) anne ve babasının hac yolculuğu sırasında Yenbu' açıklarında bir gemide doğdu; \"Dakīkul'îd\" lakabı büyük dedesinin bayram günü giydiği bembeyaz elbiseden gelir. Kūs'ta büyüdü; babasından Mâlikî fıkhı, Kahire'de İzzeddin İbn Abdüsselâm'dan Şâfiî fıkhı okudu. İskenderiye, Şam ve Hicaz'da Münzirî dahil birçok âlimden hadis dinledi ve genç yaşta iki mezhepte fetva verecek dereceye ulaştı.", 'dia'],
    ["Süyûtî'ye göre Umde şerhi, el-İmâm, el-İlmâm ve el-İktirâh'ı yazdı; zamanının en zekilerinden, geceleri uyumayan, vakur ve vera' sahibi bir imamdı. Mısır kādılkudâtı oldu. Safer 702'de vefat etti.", 'suy'],
  ];
  K['ibn-dihye'] = [
    ["Sebteli Ebü'l-Hattâb Ömer b. Hasen; soyunun Dıhye el-Kelbî'ye ulaştığını söylerdi. İbn Beşkūvâl'den dinledi, hadise vâkıf ve zabtıyla tanınıyordu; dil ve Arapçada da bilgiliydi. Dâniye kadılığından azledilince İsfahan ve Irak'a gitti, Mısır'a dönerek Melik Kâmil'in hocası oldu ve büyük servet kazandı.", 'suy'],
    ["Süyûtî, bilgisine rağmen nakilde ölçüsüz davrandığını, büyük iddialarda bulunduğunu ve icazet için \"haddesenâ\" kullandığını da kaydeder. 14 Rebîülevvel 633'te seksenini aşmış olarak vefat etti.", 'suy'],
  ];
  K['ibn-ebi-davud'] = [
    ["230'da (844) Sicistan'da doğdu, Nîşâbur'da büyüdü. İlk hadis dersini 241'de Tûs'ta Muhammed b. Eslem'den aldı. Babası Ebû Dâvûd ile Horasan, Cibâl, İsfahan, Basra, Bağdat, Kûfe, Hicaz, Mısır, Şam ve Cezîre'yi dolaştı; Bündâr, Ali b. Haşrem, İbn Ebû Hayseme, Ebû Zür'a ve Zühlî'den okudu. Bağdat'a yerleşti; İbn Hibbân, Ebû Ahmed el-Hâkim, Dârekutnî ve İbn Şâhîn ondan okudu.", 'dia'],
    ["Süyûtî, Kûfe'de bir dirhemle aldığı baklayla geçinip Eşec'den otuz bin hadis yazdığını, İsfahan'da kitapsız olarak ezberinden otuz bin hadis imlâ ettiğini ve Bağdatlı hâfızların bu imlâda yalnız altı hata bulduğunu nakleder.", 'suy'],
  ];
  K['ibn-ebi-hatim'] = [
    ["240'ta (854) Rey'de doğdu. Babası Ebû Hâtim'in teşvikiyle Fazl b. Şâzân'dan Kur'an öğrendi, sonra babasından ve Ebû Zür'a er-Râzî'den hadis aldı. 255'te babasıyla, 260'ta hocası Muhammed b. Hammâd et-Tahrânî ile hacca gitti; 262'de Şam ve Mısır'a, 264'te İsfahan'a gitti.", 'dia'],
    ["Halîlî'ye göre babasının ve Ebû Zür'a'nın ilmini aldı; ricâlde deniz, sika, hâfız, zâhid biriydi ve ebdâldan sayılırdı. el-Cerh ve't-ta'dîl, Tefsîr ve er-Red ale'l-Cehmiyye eserlerindendir.", 'suy'],
  ];
  K['ibn-hacer'] = [
    ["22 Şâban 773'te (1372) Eski Mısır'da doğdu; yedinci dedesine nisbetle İbn Hacer, ailesinin memleketi Askalân'a nisbetle Askalânî diye anılır. Babası kıraat bilen, şiir yazan bir âlimdi. Dört yaşında babasını, kısa süre sonra annesini kaybetti; babasının emanet ettiği iki dostu tarafından yetiştirildi.", 'dia'],
    ["Süyûtî'ye göre önce edebiyat ve şiirle uğraştı, 794'ten itibaren hadise yöneldi ve hocası Irâkī'nin yanından ayrılmadı. Zemzem içerken Zehebî'nin hıfz mertebesine ulaşmayı dilediği ve onu aştığı söylenir. Irâkī ölüm döşeğinde kendisinden sonra kimin kalacağı sorulunca \"İbn Hacer, sonra oğlum Ebû Zür'a, sonra Heysemî\" demiştir. Buhârî şerhi ve Taglîku't-ta'lîk eserlerindendir.", 'suy'],
  ];
  K['ibn-hazm'] = [
    ["Ramazan 384'ün son gününde (994) Kurtuba'nın doğusundaki Minyetü'l-Mugīre'de doğdu. Kaynakların çoğu Fars asıllı olduğunu kaydeder; bazı çağdaşları ve İspanyol tarihçiler bunu şüpheyle karşılamıştır.", 'dia'],
    ["Süyûtî'ye göre önce Şâfiî iken Zâhirî oldu; zekâ, hıfz ve ilimlerin genişliğinde Endülüs'ün en ileri ismiydi, dil, belâgat, şiir ve tarihte de genişti. el-Muhallâ, el-Milel ve'n-nihal ve el-Îsâl eserlerindendir. Cemâziyelevvel 457'de vefat etti (DİA ve atlas 456 kabul eder).", 'suy'],
  ];
  K['ibn-hibban'] = [
    ["277'de (890) Sîstan'daki Büst'te doğdu; Temîm kabilesindendir. Yirmi üç yaşında İsbîcâb'dan İskenderiye'ye kadar uzanan bir rıhleye çıktı; hadisin yanında fıkıh, dil, kelâm, tıp ve yıldız bilgisi okudu. Basra'da Ebû Halîfe ve Zekeriyyâ es-Sâcî, Mısır'da Nesâî, Musul'da Ebû Ya'lâ, Nesâ'da Hasan b. Süfyân, Harran'da Ebû Arûbe, Nîşâbur'da Serrâc'dan dinledi; Nîşâbur'da İbn Huzeyme'den okuyup onun yöntemini benimsedi.", 'dia'],
    ["Süyûtî'ye göre Semerkant kadılığı yaptı. Hâkim onu fıkıh, hadis, dil ve vaazda ilim kaplarından, Hatîb sika sayar; İbnü's-Salâh ise zaman zaman ağır hatalar yaptığını söyler. Şevval 354'te vefat etti.", 'suy'],
  ];
  K['ibn-hicci'] = [
    ["4 Muharrem 751'de (1350) Dımaşk'ta doğdu. Babası, İbn Kādî Şühbe ve Bahâeddin Ebü'l-Bekā'dan fıkıh okudu; hadis öğrenimini İbn Kesîr ve İbn Râfi'in yanında tamamladı. Dımaşk'ın Şâfiî medreselerinde müderrislik, kadı nâibliği ve Emeviyye hatipliği yaptı; Kahire'ye defalarca gidip hadis rivayet etti.", 'dia'],
    ["Sehâvî'ye göre babasının yanında yirmi yıl kaldı; Tâceddin es-Sübkî ve diğer Dımaşk âlimlerinden de fıkıh okudu.", 'dav'],
  ];
  K['ibn-hubeys'] = [
    ["504'te (1110) Almería'da doğdu; dayısı Hubeyş'e nisbetle anılır. Ruşâtî'den, Kurtuba'da İbn Mugīs ve Ebû Bekir İbnü'l-Arabî'den kıraat, hadis ve fıkıh okudu. İbn Dıhye ondan istifade etti. 542'de Hristiyanlar Almería'yı alınca Mürsiye'ye gitti; Muvahhidlerce kadı ve hatip tayin edildi, 575'te Mürsiye kadısı oldu.", 'dia'],
    ["Süyûtî'ye göre garîbü'l-hadîste ve ricâlde rakipsizdi; İbnü'z-Zübeyr onu tabakasında hadis sanatını en iyi bilen kişi sayar. 14 Safer 584'te Mürsiye'de vefat etti.", 'suy'],
  ];
  K['ibn-huzeyme'] = [
    ["Safer 223'te (838) Nîşâbur'da doğdu. İshak b. Râhûye'den dinlediyse de yaşı küçük olduğu için ondan rivayet etmedi. Kuteybe b. Saîd'e gitmek üzere yola çıktı, Merv'de onun ölüm haberini aldı (240). Bağdat, Rey, Cürcân, Şam, Basra, Kûfe, Kahire ve Vâsıt'ı dolaştı; Ali b. Hucr, Osman b. Saîd ed-Dârimî, Ahmed b. Menî' ve Bündâr hocalarındandır.", 'dia'],
    ["Süyûtî'ye göre Horasan'da imâmet ve hıfz onda son buldu. Müzenî'nin bir fıkıh tartışmasında \"hadis söz konusu olunca o tartışır, çünkü onu benden iyi bilir\" dediği nakledilir.", 'suy'],
  ];
  K['ibn-kani'] = [
    ["25 Zilkade 265'te (879) Bağdat'ta doğdu; bir kadı ailesinin âzatlısıdır. On bir yaşında hadis meclislerine girdi; Kûfe, Basra, Vâsıt ve Tüster'e gitti. Hâris b. Ebû Üsâme, İbrâhim el-Harbî, Abdullah b. Ahmed b. Hanbel, Mutayyen, Taberî ve Begavî'den dinledi; Cessâs, Dârekutnî ve Hâkim ondan okudu. Berkānî ve İbn Hazm onu zayıf bulmuş, Dârekutnî hatasında ısrar ettiğini söylemiş; Hatîb, Zehebî ve İbn Hacer ise güvenilir saymıştır.", 'dia'],
    ["Süyûtî onu Mu'cemü's-sahâbe'nin müellifi olarak anar; Hatîb'e göre ölümünden iki yıl önce ihtilât etti. Şevval 351'de vefat etti.", 'suy'],
  ];
  K['ibn-kesir'] = [
    ["701'de (1301) Busrâ'nın Müceydilkarye köyünde doğdu (700 de denmiştir). Fakih, hatip ve şair olan babası öldüğünde üç yaşındaydı. 707'de ailesiyle Dımaşk'a göçtü; ağabeyi Kemâleddin Abdülvehhâb'dan ilk fıkıh derslerini aldı, 711'de Kur'an'ı ezberledi. Burhâneddin el-Fezârî ve İbn Kādî Şühbe'den fıkıh, Şemseddin el-İsfahânî'den usûl okudu.", 'dia'],
    ["Süyûtî'ye göre Haccâr ve tabakasından dinledi, Mizzî'nin yanında yetişti ve ondan ayrılmadı. Tefsiri, tarihi, Ahmed'in Müsned'ini harflere göre düzenlediği eseri ve Ulûmü'l-hadîs'i vardır. Zehebî onu \"imam, müftî, sika, mütkın muhaddis\" diye anar; İbn Hacer, eserlerinin hayatında yayıldığını ama âlî isnad toplamakta muhaddislerin yolunda olmadığını söyler. Şâban 774'te vefat etti.", 'suy'],
  ];
  K['ibn-makula'] = [
    ["5 Şâban 421'de (1030) Bağdat yakınındaki Ukberâ'da doğdu (402, 420, 422 ve 429 da denmiştir); aslen Cerbâzekānlıdır. Mâkûlâ, vezir ve kadı yetiştiren Bağdatlı bir ailedir; babası Büveyhîlerden Celâlüddevle'nin veziriydi. On yaşından yirmi yaşına kadar Kur'an, Arapça, edebiyat, hesap ve hadis okudu; Halife Muktedî tarafından elçi olarak gönderildiği için \"Sa'dülmülk\" ve \"Emîr\" lakaplarıyla anıldı.", 'dia'],
    ["Süyûtî'ye göre İbn Şâhîn, İbn Gaylân ve Kādî Ebü't-Tayyib'den dinledi; el-İkmâl'in müellifidir. Sem'ânî onun \"ikinci Hatîb\" diye anıldığını söyler. Humeydî: \"Hatîb'e bir şey sorduğumda kitaba bakardı, İbn Mâkûlâ ise kitaptan okur gibi ezberden cevap verirdi.\"", 'suy'],
  ];
  K['ibn-mende'] = [
    ["310 veya 311'de İsfahan'da doğdu; Mecûsî iken müslüman olan atası Mende'ye nisbet edilir. 318'de babasından ve aile büyüklerinden hadise başladı; 329 veya 330'da Nîşâbur'a gidip Ali b. İbrâhim el-Kattân, Esam ve İbnü'l-Ahrem'den dinledi. Kırk yıl süren yolculuklarında Buhara'da Heysem b. Küleyb, Mekke'de İbnü'l-A'râbî'den okudu.", 'dia'],
    ["Süyûtî'ye göre Hayseme b. Süleyman dahil 1700 hocadan dinledi; İbn Ebû Hâtim ona icazet verdi. Rıhleden döndüğünde kitapları kırk deve yükü tutuyordu. Ebû Ali en-Nîsâbûrî \"Mende oğulları dünyanın hâfızlarıdır\" demiştir.", 'suy'],
  ];
  K['ibn-merduye'] = [
    ["323'te (935) İsfahan'da muhaddis bir ailede doğdu; aynı adlı torunundan ayırt edilmek için İbn Merdûye el-Kebîr denir. Babasının yanında başladı, Basra, Kûfe ve Horasan'ı dolaştı, 349'da iki yıl Bağdat'ta kaldı. Ebû Sehl el-Kattân, Ebû Ahmed el-Assâl ve Ebü'ş-Şeyh hocalarındandır; Ebû Nuaym ve İbn Mende'nin oğulları ondan rivayet etti.", 'dia'],
    ["Süyûtî onu tefsirin, tarihin ve Buhârî üzerine müstahrecin sahibi; ricâlde basiretli, eserleri güzel bir hâfız olarak anar. 24 Ramazan 410'da vefat etti.", 'suy'],
  ];
  K['ibn-merzuk'] = [
    ["14 Rebîülevvel 766'da (1364) Tilimsan'da doğdu; İbn Merzûk el-Hatîb'in torunudur. Babası, amcası, dedesi ve Tilimsan âlimlerinden okudu; Fas ve Tunus'ta İbn Arafe'nin derslerine katıldı ve 790'da onunla hacca gitti. 819'daki ikinci haccında Kahire'de İbn Haldûn, İbn Hacer, Fîrûzâbâdî, Bulkīnî, Irâkī, İbnü'l-Mülakkın, Heysemî, Ebû Zür'a el-Irâkī ve Aynî gibi âlimlerden ders ve icazet aldı.", 'dia'],
  ];
  K['ibn-mulakkin'] = [
    ["24 Rebîülevvel 723'te (1323) Kahire'de doğdu; fetihten sonra Endülüs'e yerleşmiş Medineli ensar soyundandır. Babası tanınmış bir nahivciydi ve oğlunun doğumundan bir yıl sonra öldü; oğlunu dostu Îsâ el-Mağribî'ye vasiyet etti.", 'dia'],
    ["Süyûtî'ye göre Meydûmî'den dinledi; hadiste Zeyn er-Rahbî ve Moğultay'ın yanında yetişti. Buhârî ve Umde şerhleri ile usûlde el-Mukni'i yazdı. 16 Rebîülevvel 804'te vefat etti.", 'suy'],
  ];
  K['ibn-nasiruddin'] = [
    ["Muharrem 777'de (1375) Dımaşk'ta doğdu; aslen Hamalıdır. Arapçayı Banyâsî'den, fıkhı İbn Hatîbüddehşe ve Bulkīnî'den okudu. Ba'lebek, Hicaz ve Halep'e gitti; Kahire'de Irâkī ve İbnü'l-Mülakkın'dan icazet aldı. İbn Hacer ile karşılıklı olarak birbirlerine eser okudular. Dımaşk'ın en meşhur muhaddisi (hâfızü'ş-Şâm) oldu.", 'dia'],
    ["Süyûtî'ye göre hattını Zehebî'ninkine benzetti; güzel eserler yazdı ve Necmeddin Ömer b. Fehd onun yanında yetişti. Rebîülâhir 842'de vefat etti.", 'suy'],
  ];
  K['ibn-nukta'] = [
    ["10 Receb 579'da (1183) Bağdat'ta doğdu; ailesi, dedesine bakan Nukta adlı bir câriyeden dolayı bu adla anıldı. Mekke, Kahire, İskenderiye, Dımaşk, Halep, Harran, Musul, İsfahan ve Nîşâbur'a gitti; Nîşâbur'da Müeyyed et-Tûsî'den, Harran'da Ruhâvî'den, Dımaşk'ta Ebü'l-Yümn el-Kindî'den dinledi.", 'dia'],
    ["Süyûtî'ye göre İbn Sükeyne ve İbn Taberzed'den dinledi; et-Takyîd ile el-İkmâl üzerine müstedreki yazdı ve Münzirî ondan rivayet etti. 22 Safer 629'da vefat etti.", 'suy'],
  ];
  K['ibn-rafi'] = [
    ["Zilkade ya da Zilhicce 704'te (1305) Kahire'de doğdu. Babası hadis ve kıraat âlimi, annesi Hatice bint Ali el-Halebiyye hadis rivayet eden bir hanımdı. Babası onun için Dimyâtî'den icazet aldı ve 714'te onu Şam'a götürüp Mizzî'ye Tehzîbü'l-Kemâl'i okurken dinletti.", 'dia'],
    ["Hadis ilminde Kahire'de Kutbüddin el-Halebî ve İbn Seyyidinnâs'ın, Şam'da Mizzî, Birzâlî ve Zehebî'nin yanında yetişti; Takıyyüddin es-Sübkî'nin himayesinde Dımaşk'a yerleşti. Zehebî, Hüseynî, Zeynüddin el-Irâkī, İbnü'l-Cezerî ve İbn Hiccî ondan dinledi.", 'kay'],
    ["Süyûtî, dört ciltlik Mu'cem'inin son derece zabtlı ve faydalarla dolu olduğunu, İbnü'n-Neccâr'ın Bağdat tarihine de zeyl yazdığını söyler. 18 Cemâziyelevvel 774'te vefat etti.", 'suy'],
  ];
  K['ibn-receb'] = [
    ["Rebîülevvel 736'da (1335) Bağdat'ta doğdu; ilk öğrenimini muhaddis babası ve dedesinden aldı. Küçük yaşta Zerîrânî'nin derslerini takip etti; Bağdat'ta Safiyyüddin İbn Abdülhak, Birzâlî ve et-Telî'nin meclislerinde bulunup icazet aldı. 744'te babasıyla Dımaşk'a gitti.", 'dia'],
    ["Süyûtî'ye göre Meydûmî'den dinledi; Tirmizî şerhi, Tirmizî'nin İlel'ine şerh, Buhârî'nin bir kısmına şerh ve Hanbelî tabakātı yazdı. Receb 795'te vefat etti.", 'suy'],
  ];
  K['ibn-rusheyd'] = [
    ["Cemâziyelevvel 657'de (1259) Sebte'de doğdu. İbn Ebü'r-Rebî'den Sîbeveyhi'nin el-Kitâb'ını ve yedi kıraati, Abdülazîz el-Gāfikī'den Sahîh-i Buhârî'yi okudu; Fas'ta Mâlikî fıkhı, Tunus'ta kelâm ve usûl öğrendi. 683'te edip er-Rundî ile İskenderiye'ye, ardından Mısır, Suriye ve Hicaz'a gitti.", 'dia'],
    ["Süyûtî, Lisânüddin İbnü'l-Hatîb'den naklen onu Arapça, lugat ve arûzda imam, âlî isnadlı, hadis sanatına vâkıf biri olarak anar. Mısır, Şam ve Hicaz'da Dimyâtî ve Kutb el-Kastallânî'den okudu; bu yolculuğu altı ciltlik Mil'ü'l-ayba'da anlattı.", 'suy'],
  ];
  K['ibn-sahin'] = [
    ["Safer 297'de (909) Bağdat'ta doğdu; aslen Merverrûzludur ve anne tarafından dedesi Ahmed b. Şâhîn'e nisbet edilir. 308'de hadis yazmaya başladı; Begavî, İbn Ebû Dâvûd ve İbn Sâid'den dinledi. Otuz yaşında Basra, Mısır, Dımaşk, Remle, Humus, Rakka, Vâsıt ve Ahvaz'a gitti.", 'dia'],
    ["Süyûtî onu \"Irak muhaddisi\" diye anar: bin cüzlük tefsir, bin üç yüz cüzlük Müsned dahil 330 eser yazdı. İbn Mâkûlâ onu sika ve me'mûn sayar, ancak dil hatası yaptığını ve fıkhı bilmediğini belirtir. Berkānî ondan rivayet etti. Zilhicce 385'te vefat etti.", 'suy'],
  ];
  K['ibn-seyyidinnas'] = [
    ["14 Zilkade 671'de (1273) Kahire'de doğdu. Ailesi İşbîliye'nin düşmesinden (646) sonra doğuya göçtü; babası Kâmiliyye Dârülhadisi hocası oldu. Ebü'l-Feth künyesini ona küçükken Necîb el-Harrânî verdi.", 'dia'],
    ["Süyûtî'ye göre bine yakın hocadan dinledi, İbn Dakīkul'îd'in yanından ayrılmayıp onun muîdi oldu, Arapçayı İbnü'n-Nehhâs'tan aldı. Ricâl, ilel ve isnadlarda uzman, edip ve şair biriydi; Zâhiriyye'de hadis okuttu.", 'suy'],
  ];
  K['ibn-sufyan'] = [
    ["Nîşâburlu fakih Ebû İshak İbrâhim b. Muhammed b. Süfyân; Hanefî zâhid Eyyûb b. Hasan'ın talebesidir. Süfyân b. Vekî', Muhammed b. Mukātil ve Muhammed b. Rafi'den dinledi ve Müslim'in yanından uzun süre ayrılmadı.", 'siyer'],
    ["Zehebî'ye göre Sahîh-i Müslim'i ondan dinledi; yalnız hac, vasiyetler ve imâret bölümlerinden yaklaşık otuz yedi varak vicâde yoluyla rivayet edilir ve bu nüshalarda işaretlenir.", 'siyer'],
  ];
  K['ibn-teymiyye'] = [
    ["10 Rebîülevvel 661'de (1263) Harran'da, Hanbelî mezhebine katkılarıyla tanınan bir ailede doğdu. Moğol akınları üzerine ailesiyle 667'de Dımaşk'a göçtü; babasının müderris olduğu Sükkeriyye Dârülhadisi'nde okudu ve 200'den fazla hocadan ders gördü.", 'dia'],
    ["Süyûtî'ye göre İbn Ebü'l-Yüsr ve İbn Abdüddâim'den dinledi; ricâl, ilel ve hadis fıkhında ileri gitti. Üç yüz cilt eser yazdı; defalarca imtihana uğradı. 20 Zilkade 728'de vefat etti.", 'suy'],
  ];
  K['ibn-tolun'] = [
    ["880 civarında Dımaşk'ın Sâlihiye semtinde, ticaret ve ilimle uğraşan Türk asıllı bir ailede doğdu; annesi Anadoluluydu. Babasından ve Dımaşk kadısı amcası Cemâleddin Yûsuf'tan ilk derslerini aldı, yedi yaşında hâfız oldu; babasını kaybedince Yûnusiye Hankahı'na yerleştirildi.", 'dia'],
    ["Kendi ifadesine göre otuz sekiz ilim dalında öğrenim gördü. İbn Kādî Aclûn, Necmeddin İbn Müflih, Celâleddin ed-Devvânî, İbnü'l-Mibred, Süyûtî ve Nuaymî hocalarındandır; Sâlihiye'nin âlime kadınlarından da okudu. İcazetlerini topladığı cildi Canbirdi Gazâlî isyanında kaybetti. Dımaşk'ın pek çok medrese ve camisinde görev yaptı; Şehâbeddin et-Tîbî ve İsmâil en-Nablusî talebelerindendir.", 'dia'],
  ];
  K['ibnud-deyba'] = [
    ["Kendi verdiği bilgiye göre 4 Muharrem 866'da (1461) Zebîd'de doğdu; \"deyba'\" Nûbe dilinde \"beyaz\" demektir ve büyük dedesinin lakabıdır. Babası doğduğu yıl Zebîd'den ayrılıp Hindistan'daki Diû'da öldü. Anne tarafından dedesinin yanında büyüdü; dayısı Zebîd kadısı Ebü'n-Necâ'dan kıraat, Arapça, matematik, ferâiz ve fıkıh okudu.", 'dia+dav'],
  ];
  K['ibnul-arabi'] = [
    ["22 Şâban 468'de (1076) İşbîliye'de doğdu. Babası Abbâdîlerin vezirlerinden Ebû Muhammed İbnü'l-Arabî'dir. Babası, dayısı ve Sarakustî'den başladı; erken yaşta hıfzı ve on kıraati tamamladı. Kurtuba'da İbn Attâb ve İbn Serrâc'dan okudu. Abbâdîlerin yıkılmasından (484) sonra babasıyla doğuya gitti.", 'dia'],
    ["Süyûtî'ye göre doğuda Tırâd ez-Zeynebî ve Nasr el-Makdisî'den dinledi; Gazzâlî, Ebû Bekir eş-Şâşî ve Ebû Zekeriyyâ et-Tebrîzî'nin yanında yetişti. İşbîliye kadısı oldu, sonra azledilerek telif ve öğretime yöneldi. Rebîülâhir 543'te Fas'ta vefat etti.", 'suy'],
  ];
  K['ibnul-arabi-mekki'] = [
    ["Basra'da doğdu; Bağdat'ta fıkıh ve hadisle uğraştı. Cüneyd-i Bağdâdî ve Ebü'l-Hüseyin en-Nûrî ile tanışması onu tasavvufa yöneltti. Hayatının son yıllarını Mekke'de geçirdi ve \"Şeyhü'l-Harem\" diye anıldı. Hadis âlimlerince sika kabul edilir.", 'dia'],
    ["Süyûtî'ye göre Hasan ez-Za'ferânî ve Ebû Dâvûd'dan dinledi, hocaları için bir Mu'cem derledi; İbn Cümey' ve İbn Mende ondan rivayet etti. 246'da doğdu, Zilkade 340'ta vefat etti.", 'suy'],
  ];
  K['ibnul-cevzi'] = [
    ["510 civarında Bağdat'ta doğdu; soyu Hz. Ebû Bekir'e dayanır. Üç yaşında babasını kaybetti, amcasının himayesinde büyüdü. İbn Nâsır es-Selâmî'den tarih, hadis ve ahlâk okudu; Cevâlîkī, İbnü'z-Zâgūnî ve Enmâtî dahil seksenden fazla âlimden faydalandı. İbnü'z-Zâgūnî'nin ölümünden (527) sonra Mansûr Camii'nde vaaz etmeye başladı.", 'dia'],
    ["Zehebî onu \"Irak'ın iftiharı, hâfız, müfessir, vâiz, eserler sahibi\" diye anar ve 516'da hadis dinlemeye başladığını kaydeder.", 'siyer'],
  ];
  K['ibnul-cezeri'] = [
    ["25 Ramazan 751'de (1350) Dımaşk'ta doğdu; Cezîre-i İbn Ömer'e (Cizre) nisbet edilir. Fahr İbnü'l-Buhârî'nin talebelerinden hadis dinledi; kıraati İbnü's-Sellâr, Tahhân ve İbrâhim el-Hamevî'den okudu. 768'de babasıyla hacca gitti.", 'dia'],
    ["Süyûtî'ye göre Rum diyarına (Anadolu) giderek Sultan Bayezid'in yanında bulundu; Timur onu yenince Timur'a bağlandı, Acem diyarına geçip Şîraz kadılığı yaptı. Kıraatte çağının eşsiz imamıydı, ancak fıkıhta bilgisi yoktu. en-Neşr fi'l-kırââti'l-aşr'ı yazdı; İbn Hacer ed-Dürer'de onu birçok yerde hâfız diye niteler. 833'te vefat etti.", 'suy'],
  ];
  K['ibnul-esir'] = [
    ["Rebîülevvel 544'te (1149) Cizre'de doğdu; Şeybân kabilesindendir. Babası Esîrüddin lakaplı, idarecilerle yakın bir zengindi; kardeşleri İzzeddin ve Ziyâeddin İbnü'l-Esîr de tanınmış âlimlerdir. 565'te ailesiyle Musul'a göçtü; nahiv, edebiyat, hadis ve fıkıh okudu, Arapçayı İbnü'd-Dehhân ve Yahyâ b. Sa'dûn'dan aldı.", 'dia'],
    ["Zehebî'ye göre Câmiu'l-usûl ve Garîbü'l-hadîs'in müellifidir. Kitapları nâzil isnadla rivayet etti: Sahîh-i Buhârî'yi İbn Serâyâ vasıtasıyla Ebü'l-Vakt'ten, Sahîh-i Müslim'i de Fürâvî'ye ulaşan bir icazetle aldı.", 'siyer'],
  ];
  K['ibnul-faradi'] = [
    ["351'de (962) Kurtuba'da doğdu; babasının ferâiz bilgisinden dolayı bu adla anılır. Yahyâ b. Mâlik, İbn Ebû Zeyd ve İbn Müferric'den hadis, fıkıh, edebiyat ve tarih okudu. 382'de hacca gitti; Mekke, Mısır ve Kayrevan'da derslere katıldı. Endülüs'e dönünce ders verdi; İbn Abdülber, İbn Hayyân ve İbn Hazm talebelerindendir.", 'dia'],
    ["Süyûtî onu Endülüs tarihinin ve el-Mü'telif ve'l-muhtelif'in müellifi olarak anar; Kurtuba'da rivayet genişliği, hadis hıfzı ve ricâl bilgisinde benzeri görülmedi. Belensiye kadılığı yaptı; 403'te Berberîler tarafından öldürüldü.", 'suy'],
  ];
  K['ibnul-kattan'] = [
    ["Fas'ta yetişen Kütâmî asıllı Ebü'l-Hasan Ali b. Muhammed; Ebû Zer el-Huşenî ve tabakasından dinledi ve kādi'l-cemâa oldu. Süyûtî onu hadis sanatını en iyi gören, ricâl isimlerini en iyi ezberleyen ve rivayete en çok özen gösterenlerden sayar. Abdülhak el-İşbîlî'nin el-Ahkâmü'l-kübrâ'sı üzerine el-Vehm ve'l-îhâm'ı yazdı. Rebîülevvel 628'de vefat etti.", 'suy'],
  ];
  K['ibnul-kayyim'] = [
    ["7 Safer 691'de (1292) muhtemelen Dımaşk'ta doğdu. Babası Ebû Bekir, İbnü'l-Cevzî'nin oğlu Muhyiddin Yûsuf'un yaptırdığı Cevziyye Medresesi'nin kayyımı olduğu için bu adla tanındı; ataları Havran'daki Zür'dan geldiği için Zür'î nisbesiyle de anılır.", 'dia'],
    ["İbn Hacer'e göre Takıyyüddin Süleyman, Ebû Bekir b. Abdüddâim ve İbn Mektûm'dan dinledi; fıkıh ve usûlü İbn Teymiyye'den okudu. Hocasına o kadar bağlıydı ki hiçbir görüşünden ayrılmaz, hepsini savunurdu; onun kitaplarını düzenleyip ilmini yaydı ve onunla birlikte hapsedildi. Sadriyye'de ders verdi, Cevziyye'de imamlık yaptı.", 'durer'],
  ];
  K['ibnul-mufaddal'] = [
    ["24 Zilkade 544'te (1150) doğdu; aslen Kudüslüdür. 558'de Sahîh-i Buhârî'nin büyük kısmını okudu; otuz yaşına kadar İskenderiye'de hadis ve Mâlikî fıkhı okudu. En çok faydalandığı hocası yıllarca derslerine devam ettiği Silefî'dir. İskenderiye'de kadılık ve müderrislik yaptı, sonra Kahire'deki Sâhibiyye'de vefatına kadar ders verdi; Münzirî talebesidir.", 'dia'],
    ["Süyûtî onu Mâlikî mezhebinin önde gelenlerinden, vera' ve güzel ahlâk sahibi bir hâfız olarak anar. Şâban 611'in ilk gününde Kahire'de vefat etti.", 'suy'],
  ];
  K['ibnul-munzir'] = [
    ["Nîşâburlu Ebû Bekir Muhammed b. İbrâhim b. el-Münzir; \"Harem şeyhi\" olarak anılır. Süyûtî onu benzeri yazılmamış eserlerin (el-İşrâf, el-Mebsût, el-İcmâ' ve Tefsîr) sahibi, ihtilaf ve delil bilgisinde zirvede, kimseyi taklit etmeyen bir müctehid olarak anar. 318'de Mekke'de vefat etti.", 'suy'],
  ];
  K['ibnun-neccar'] = [
    ["578'de Bağdat'ta doğdu. İbnü'l-Cevzî ve İbn Küleyb'den dinledi, İbn Sükeyne'ye kıraat okudu; meşyehası üç bin şeyhi kapsar. Süyûtî onu \"çağın tarihçisi, Irak'ın müfîdi\" ve dindar, geniş rivayetli sika bir hâfız olarak anar. Hatîb'in Târîhu Bağdâd'ına ve İbn Mâkûlâ'ya zeyl, el-Kemâl fi'r-ricâl ve Medine tarihi eserlerindendir. 5 Şâban 643'te vefat etti.", 'suy'],
  ];
  K['ibnur-rumiyye'] = [
    ["Muharrem 561'de (1165) İşbîliye'de, nebat ilmi, edebiyat ve felsefeyle uğraşan Emevî mevlâsı bir ailede doğdu; \"İbnü'r-Rûmiyye\" denmesinden hoşlanmazdı. İbn Zerkūn'dan Mâlikî fıkhı, İbnü'l-Ced ve Tücîbî'den hadis okudu; nebat ilmini babası ve dedesinden öğrendi. 612'de hadis, nebat ve hac için Mısır, Şam, Irak ve Hicaz'a gitti.", 'dia'],
    ["Süyûtî'ye göre önce Mâlikî iken Zâhirî oldu; ricâli bilen sika bir hâfızdı, otlar konusunda çağdaşlarını geçti ve bunları satan bir dükkânı vardı. İbn Adî'nin el-Kâmil'ine zeyl olan el-Hâfil'i ve el-Mu'lim'i yazdı. Rebîülevvel 637 sonunda ani olarak vefat etti.", 'suy'],
  ];
  K['ibnus-salah'] = [
    ["577'de (1181) Erbil'e bağlı Şehrezûr'un Şerehân köyünde Kürt bir ailede doğdu; Halep'te Esediyye müderrisi olan babasının lakabıyla anılır. Babasından Şâfiî fıkhı öğrendi; Musul'da İbnü's-Semîn'den hadis ve el-Mühezzeb'i okudu, Nizâmiye müderrisi İmâdüddin İbn Yûnus'a yardımcılık yaptı. Bağdat'ta İbn Sükeyne ve İbn Taberzed'den dinledi.", 'dia'],
    ["Süyûtî'ye göre Müeyyed et-Tûsî'den de dinledi; Kudüs'te Salâhiyye'de, sonra Dımaşk'ta Dârülhadîs el-Eşrefiyye'de ders verdi. Ulûmü'l-hadîs ve Müslim şerhi eserlerindendir; tefsir, hadis ve fıkıhta zamanının fazıllarından, selefî ve zâhid biriydi. 25 Rebîülâhir 643'te vefat etti.", 'suy'],
  ];
  K['ibnus-seken'] = [
    ["294'te (907) Bağdat'ta doğdu; ticaretle uğraştığı için Bezzâz lakabıyla da anılır. Mâverâünnehir, Basra, Kûfe, Dımaşk, Harran ve Horasan'da tahsil gördü ve Mısır'a yerleşti. Ebû Arûbe, Begavî, İbn Ebû Dâvûd, İbn Cevsâ ve Tahâvî'den dinledi; Horasan'da Sahîh-i Buhârî'yi Firebrî'den okudu. Sahîh Mısır'da ilk kez onunla tanındı; İbn Mende ve Abdülganî el-Ezdî talebelerindendir.", 'dia'],
    ["Süyûtî es-Sahîhu'l-müntekā'yı yazdığını ve İbn Hazm'ın naklettiğine göre talebelerine Buhârî, Müslim, Ebû Dâvûd ve Nesâî'nin kitaplarını göstererek \"İslâm'ın kaideleri bunlardır\" dediğini kaydeder. Muharrem 353'te vefat etti.", 'suy'],
  ];
  K['ibnus-sunni'] = [
    ["280'den sonra Dînever'de doğdu. Bağdat, Basra, Kûfe, Harran, Dımaşk, Mısır ve Cizre'de Nesâî, Ebû Halîfe, Ebû Ya'lâ, Zekeriyyâ es-Sâcî, Bâgandî, Begavî, İbn Ebû Dâvûd, Ebû Arûbe ve İbn Cevsâ'dan faydalandı. En çok Nesâî'den yararlandığı için \"sâhibü'n-Nesâî\" diye anıldı ve Dînever'e yerleşti. Zehebî, Nesâî'nin es-Sünenü'l-kübrâ'sını el-Müctebâ adıyla onun ihtisar ettiğini söyler.", 'dia'],
    ["Süyûtî onu Amelü'l-yevm ve'l-leyle'nin sahibi ve Nesâî'nin Sünen'inin râvisi, dindar ve sadûk biri olarak anar. 364'te seksenini aşmış olarak vefat etti.", 'suy'],
  ];
  K['ibnuz-zebidi'] = [
    ["545 veya 546'da doğdu; Zebîd asıllı, Bağdatlı Hanbelî. Vezir İbn Hübeyre'nin medresesinde müderrisdi. Dedesinden, Ebü'l-Vakt es-Siczî'den ve Ebü'l-Fütûh et-Tâî'den dinledi; Bağdat, Dımaşk ve Halep'te rivayet etti. İbnü'd-Dübeysî, Ziyâeddin el-Makdisî ve Birzâlî'nin dedesi ondan rivayet etti. Zehebî onu \"Şam müsnidi, dindar, mütevazı ve sâdık\" diye anar.", 'siyer'],
  ];
  K['ibn-yunus'] = [
    ["281'de (894) Fustat'ta doğdu. Büyük dedesi Şâfiî'nin talebesi Yûnus b. Abdüla'lâ, babası Müslim, Nesâî ve İbn Mâce'ye hocalık yapmış bir hâfızdı; oğlu astronom İbn Yûnus'tur. Mısır dışına çıkmadı; babasından ve Nesâî'den dinledi. İbn Müferric, Nehhâs ve İbn Mende talebelerindendir. 26 Cemâziyelâhir 347'de (958) Kahire'de vefat etti.", 'dia'],
    ["Süyûtî onu Mısır tarihinin müellifi ve rıhleye çıkmadığı hâlde bu işte uyanık bir imam olarak anar.", 'suy'],
  ];
  K['idrisi'] = [
    ["Esterâbâdlı Ebû Sa'd Abdurrahman b. Muhammed el-İdrîsî; Semerkant muhaddisi oldu ve Semerkant ile Esterâbâd tarihlerini yazdı. Esam ve İbn Adî'den dinledi; bâblar ve şeyhler üzerine derlemeler yaptı. Hatîb onu sika saydı. 405'te vefat etti.", 'suy'],
  ];
  K['iraki'] = [
    ["21 Cemâziyelevvel 725'te (1325) Kahire'de Nil kenarındaki Menşe'e el-Mihrânî'de doğdu; Kürt asıllı babası Erbil'e bağlı Râznân'dan gelmişti. Üç yaşında babasını kaybetti, sekiz yaşında Kur'an'ı ve et-Tenbîh'i ezberledi. Önce kıraat ve Arapça okudu; İzzeddin İbn Cemâa'nın teşvikiyle hadise yöneldi ve on iki yaşında hadis öğreniyordu.", 'dia'],
    ["Süyûtî'ye göre ilk olarak Sencer el-Câvlî ve Takıyyüddin el-İhnâî'den, sonra İbn Şâhidü'l-Ceyş, İbn Abdülhâdî ve Takıyyüddin es-Sübkî'den dinledi; Sübkî ve Alâî gibi hocaları onun hadis bilgisini çok övmüştür.", 'suy'],
  ];
  K['ismaili'] = [
    ["277'de doğdu; Cürcânlı Ebû Bekir Ahmed b. İbrâhim, bölgesinde Şâfiîlerin reisiydi. Ebû Halîfe, Ebû Ya'lâ ve İbn Huzeyme'den dinledi; Sahîh'i, Mu'cem'i ve Müsnedü Ömer'i yazdı. Hâkim ve Berkānî ondan rivayet etti. Hâkim onu asrının tek adamı, muhaddislerin ve fakihlerin şeyhi sayar; isnadı yükseldi ve Acem diyarında âlî rivayette tek kaldı. Receb 371'de vefat etti.", 'suy'],
  ];
  K['kabisi'] = [
    ["6 Receb 324'te (936) Kayrevan'da doğdu; ailesi muhtemelen Kābis veya Meâfirîn'den gelmişti. Fâtımî ve Zîrî hâkimiyetine direnen Mâlikî bir çevrede yetişti. 10 Ramazan 352'de doğu seyahatine çıktı ve ertesi yıl hacca gitti.", 'dia'],
    ["Süyûtî onu \"Mağrib'in allâmesi\" diye anar: hadis ve ilelin hâfızı, ricâli bilen, iki usûlde ârif, fıkıhta reis biriydi; gözleri görmüyordu, zâhid ve vera' sahibiydi. Rebîülâhir 403'te vefat etti.", 'suy'],
  ];
  K['kadi-iyaz'] = [
    ["Şâban 476'da (1083) Sebte'de doğdu. 507'de Endülüs'e geçti; Kurtuba ve Mürsiye'de Ebû Ali es-Sadefî'den Sahîh-i Buhârî ve Sahîh-i Müslim'i okudu; İbn Rüşd el-Ced, İbn Abdûn ve Ebû Bekir İbnü'l-Arabî'den faydalandı. el-Gunye'de yüz kadar âlimden bizzat ya da mektupla istifade ettiğini belirtir. 515'te Sebte kadısı oldu ve on altı yıl bu görevde kaldı.", 'dia'],
    ["Süyûtî'ye göre Ebû Ali el-Gassânî ona icazet verdi. eş-Şifâ, Mâlikî tabakātı, Müslim şerhi ve Meşârik başta olmak üzere eserleri her yere yayıldı; zamanında hadis ehlinin imamıydı. Sebte ve Gırnata kadılığı yaptı; 544'te Merakeş'te vefat etti.", 'suy'],
  ];
  K['kafiyeci'] = [
    ["788'de (1386) Saruhan sancağına bağlı Gökçeköy'de doğdu (780, 790 ve 801 de denmiştir); \"Bergamî\" nisbesi sonradan Bergama'da bulunmasından gelir. Adı Muhyiddin Mehmed'dir; İbnü'l-Hâcib'in el-Kâfiye'siyle çok uğraştığı için Kâfiyeci diye anıldı. Anadolu ve İran'da Burhâneddin Haydar el-Herevî, İbn Melek, Bezzâzî ve Molla Fenârî'den okudu. Şam'dan hacca gitti, üç yıl Kudüs'te kaldı ve 830 civarında Kahire'ye yerleşti.", 'dia'],
  ];
  K['kasim-b-asbag'] = [
    ["20 Zilhicce 244'te (859) Kurtuba'nın Beyyâne köyünde doğdu. Kurtuba'da Asbağ b. Halîl, Bakī b. Mahled, Muhammed b. Abdüsselâm el-Huşenî ve İbn Vaddâh'tan faydalandı. 274'te doğuya gidip Mekke, Bağdat, Kûfe, Kahire ve Kayrevan'da okudu; İbn Kuteybe'nin birçok eserini ve İbn Ebû Hayseme'nin Târîh'ini bizzat müelliflerinden yazdı.", 'dia'],
    ["Süyûtî onu \"Endülüs muhaddisi\" diye anar: Ebû Dâvûd tarzında bir Sünen, Mâlik'in Müsnedi ve Müslim üslûbunda bir Sahîh yazdı; Arapçada da reisti. Yaşlanıp unutkanlığı artınca ilmini korumak için rivayeti bıraktı. Cemâziyelevvel 340'ta vefat etti.", 'suy'],
  ];
  K['kasim-kutluboga'] = [
    ["Muharrem 802'de (1399) Kahire'de doğdu. Babası Kutluboğa, saltanat nâibi Sûdûn eş-Şeyhûnî'nin memlüklerinin kumandanıydı. Babasını küçükken kaybetti; Kur'an'ı ezberledi ve geçimini sağlamak için bir süre terzilik yaptı. Sonra Alâeddin el-Buhârî ve İbn Hacer'den okudu.", 'dia'],
    ["Sehâvî'ye göre terzilikte o kadar ustaydı ki siyah iple dikişini belli etmezdi. Hadis ilimlerini Bağdat kadısı Tâceddin en-Nu'mânî ve İbn Hacer'den aldı.", 'dav'],
  ];
  K['kastallani'] = [
    ["12 Zilkade 851'de (1448) Kahire'de doğdu; ailesi Tunus'un Cerîd bölgesindeki Tûzer'dendir. On dört kıraati bildiği kaydedilir. En çok faydalandığı hocası Sehâvî'dir; Necmeddin İbn Fehd, Celâl el-Bekrî, Hâlid el-Ezherî ve Zekeriyyâ el-Ensârî'den de istifade etti. Karâfetüssuğrâ Medresesi şeyhliğine getirildi, 873'ten itibaren camilerde vaaz etti.", 'dia'],
    ["Sehâvî, Kur'an'ı, iki Şâtıbiyye'yi ve Cezerî'nin Tayyibe'sinin yarısını ezberlediğini, yedi ve on kıraati Neşşâr ve başka hocalardan okuduğunu kaydeder.", 'dav'],
  ];
  K['kelabazi'] = [
    ["323'te (935) Buhara'nın Kelâbâz semtinde doğdu. Mâverâünnehir, Horasan ve Bağdat'ta Heysem b. Küleyb eş-Şâşî, Ebû Ca'fer el-Cemmâl ve Abdülmü'min b. Halef'ten okudu; Dârekutnî, Hâkim ve Müstağfirî ondan rivayet etti. Hatîb onu sika ve hâfız, Hâkim sebt ve mütkın sayar; Müstağfirî onun zamanında Mâverâünnehir'in en çok hadis bileni olduğunu söyler. Buhârî ricâline dair el-Hidâye ve'l-irşâd'ı yazdı. Cemâziyelâhir 398'de vefat etti (378 de denmiştir).", 'dia+suy'],
  ];
  K['kirmani'] = [
    ["16 Cemâziyelâhir 717'de (1317) Kirman'da doğdu. İlk eğitimini babasından aldı; asıl hocası on iki yıl yanında kaldığı Adudüddin el-Îcî'dir. Mısır, Şam, Kudüs, Halîl, Hicaz ve Irak'ı dolaştı, sonra Bağdat'a yerleşip otuz yılı aşkın öğretimle meşgul oldu. Sahîh-i Buhârî'yi Ezher muhaddisi Nâsırüddin el-Fârûkī, Medine'de Zerendî ve Mekke'de Cemâleddin el-Ensârî'den dinledi.", 'dia'],
  ];
  K['kivamussunne'] = [
    ["457'de doğdu; \"Kıvâmü's-sünne\" lakaplı İsfahanlı Ebü'l-Kāsım İsmâil b. Muhammed et-Teymî. İbn Merdûye (torun), Ebû Amr b. Mende ve Ebû Nasr ez-Zeynebî'den dinledi; imlâ meclisleri yaptı, eser yazdı ve ricâl hakkında konuştu. İbn Asâkir, Sem'ânî, Silefî ve Ebû Mûsâ el-Medînî ondan rivayet etti. Ebû Mûsâ onu \"zamanının imamı, sünnet ehlinin önderi\" diye anar. et-Terğîb ve't-terhîb onun eseridir.", 'suy'],
  ];
  K['kusmihani'] = [
    ["Merv'e bağlı Küşmîhen'den Ebü'l-Heysem Muhammed b. Mekkî. Sahîh-i Buhârî'yi Firebrî'den birçok kez rivayet etti; İsmâil es-Saffâr'dan da dinledi. Ebû Zer el-Herevî, Ebû Osman el-Bahîrî, Ebû Sehl el-Hafsî ve Mekke'de mücavir Kerîme el-Mervezîyye ondan rivayet etti. Zehebî onu sadûk sayar. Arefe günü 389'da vefat etti.", 'siyer'],
  ];
  K['kutbuddin-halebi'] = [
    ["16 Receb 663 veya 664'te Halep'te doğdu; dayısı Nasr el-Menbicî'den kıraat okudu. Kahire'ye yerleşti; Dımaşk ve Hicaz'da da okudu. Kıraati Melîcî'den, hadisi İbn Dakīkul'îd, Zeyneb bint Mekkî ve diğerlerinden aldı; hocalarının sayısı bini aştı. Zehebî ile birbirlerinden hadis aldılar.", 'dia'],
    ["Süyûtî onu \"Mısır diyarının müfîdi\" diye anar: kendisi için tis'âniyyât, büldâniyyât ve mütebâyinât derledi, el-İlmâm'ı ihtisar etti, Abdülganî'nin sîresini şerh etti, Buhârî'ye büyük bir şerhin yarısını yazdı ve yirmi ciltlik olacak bir Mısır tarihi derledi. Tâceddin es-Sübkî'ye icazet verdi. Receb 735'te vefat etti.", 'suy'],
  ];
  K['mizzi'] = [
    ["10 Rebîülâhir 654'te (1256) Halep civarında doğdu; Kudâa'nın Kelb koluna mensuptur. Küçükken ailesiyle Dımaşk yakınındaki Mizze'ye yerleşti. Bir süre Şâfiî fıkhı okuduktan sonra 675'te hadise başladı. Kudüs, Humus, Hama, Ba'lebek, Hicaz, Kahire ve İskenderiye'de Nevevî, İbn Hallikân, Kutb el-Kastallânî, İbn Dakīkul'îd ve Dimyâtî'den faydalandı.", 'dia'],
    ["Süyûtî, Zehebî'nin sözleriyle onu \"ricâl ilminin bayraktarı; gözler onun bir benzerini görmedi\" diye anar. Dil ve sarfta da maharet kazandı; Tehzîbü'l-Kemâl ve el-Etrâf'ı yazdı, Dârülhadîs el-Eşrefiyye'nin şeyhliğini yürüttü. 12 Safer 742'de vefat etti.", 'suy'],
  ];
  K['muayyed-tusi'] = [
    ["524'te doğdu; Tûslu, sonra Nîşâburlu. 530'da Sahîh-i Müslim'i Fürâvî'den dinledi; Sahîh-i Buhârî'yi Vecîh eş-Şehhâmî ve başkalarından, Muvatta'ı Hibetullah es-Seyyidî'den aldı. Bazı eserlerde tek kaldı ve her yerden talebe ona rıhle yaptı. Zehebî onu \"Horasan müsnidi, mukrî, sika ve celîl\" diye anar.", 'siyer'],
  ];
  K['mugultay'] = [
    ["689'da doğdu; Hanefî hâfız Alâeddin Moğultay b. Kılıç. Debûsî ve Hatenî'den dinledi; İbn Seyyidinnâs'tan sonra Zâhiriyye'de hadis müderrisi oldu. Irâkī'ye göre neseplerde çok bilgili, diğer hadis konularında orta seviyedeydi. Yüzden fazla eser yazdı: Buhârî şerhi, yarım kalan İbn Mâce ve Ebû Dâvûd şerhleri, Tehzîb'in vehimleri ve zeyli, siyer eseri ez-Zehrü'l-bâsim. 24 Şâban 762'de vefat etti.", 'suy'],
  ];
  K['munziri'] = [
    ["1 Şâban 581'de (1185) Kahire'de Suriye asıllı bir ailede doğdu. On yaşında babası onu hadis meclislerine götürdü. Önce Hanbelî iken Şâfiî oldu. İskenderiye, Harran, Ruha, Gazze, Dımaşk ve Kudüs'e defalarca gitti; Cemmâîlî, İbnü'l-Mufaddal, Ebü'l-Yümn el-Kindî, İbn Kudâme ve İbn Nukta'dan faydalandı; görüşemediği 600 kadar kişiden de icazet aldı.", 'dia'],
    ["Süyûtî'ye göre İbnü'l-Mufaddal'ın yanında yetişti, Kâmiliyye'nin şeyhliğini yirmi yıl yürüttü ve hadisin bütün dallarında eşsizdi; Dimyâtî onun yanında yetişti. et-Terğîb ve't-terhîb'i yazdı, Müslim ve Ebû Dâvûd'u ihtisar etti. Zilkade 656'da vefat etti.", 'suy'],
  ];
  K['mustagfiri'] = [
    ["350'den sonra muhtemelen Nesef'te doğdu; dedesi, babası ve oğlu da muhaddisti. Buhara'da Guncâr, Serahs'ta Zâhir es-Serahsî, Merv'de Küşmîhenî, ayrıca Kelâbâzî'den ders aldı. En uzun süre yanında kalan talebesi Abdülazîz en-Nahşebî'dir; Sem'ânî'nin büyük dedesi ve Hasan b. Ahmed es-Semerkandî de ondan dinledi.", 'dia'],
    ["Süyûtî onu Delâilü'n-nübüvve, Ma'rifetü's-sahâbe, Şemâil, Fezâilü'l-Kur'ân ve Nesef ile Keş tarihlerinin müellifi olarak anar; sadûk olduğunu ama mevzû rivayetleri zayıflığını belirtmeden aktardığını söyler. 432'de vefat etti.", 'suy'],
  ];
  K['mustemli'] = [
    ["Belhli Ebû İshak İbrâhim b. Ahmed el-Müstemlî; Sahîh-i Buhârî'yi Firebrî'den 314'te dinledi. Zehebî hakkında ayrıntılı bilgiye ulaşmadığını söyler. Ebû Zer el-Herevî ve Endülüs'te Abdurrahman b. Abdullah el-Hemedânî ondan rivayet etti. Ebû Zer onu Belh'in sika ve mütkın kişilerinden sayar; çok yolculuk yaptı ve kendisi için bir Mu'cem derledi. 376'da vefat etti.", 'siyer'],
  ];
  K['muttaki'] = [
    ["885'te (1480) Orta Hindistan'da Burhânpûr'da doğdu; ailesi Cavnpûrludur. Hayatına dair bilgiler müridi Abdülhak ed-Dihlevî'nin Zâdü'l-müttakīn'ine dayanır. Küçükken babasını kaybetti, Şah Bâcen Burhânpûrî'nin yanında okudu. On beş yaşında Mâlvâ Sultanı Gıyâseddin Şah'ın hizmetine girdi; sonra tasavvufa yönelip Abdülhakîm Çiştî'ye intisap etti ve Mültan'da sülûkünü tamamladı.", 'dia'],
    ["Gücerât Sultanı Bahadır Şah'ın Hümâyun'a yenilmesinden sonra 1536'da Mekke'ye gitti; orada Ebü'l-Hasan el-Bekrî'den istifade etti.", 'dia'],
  ];
  K['nahsebi'] = [
    ["Nesefli Abdülazîz b. Muhammed b. Âsım; Müstağfirî'nin talebesi. Ondan ve Bağdat'ta Ebû Tâlib b. Gaylân ile Ebû Bekir İbn Rîze'den dinledi. Süyûtî onu zamanında hıfz ve itkanda benzersiz biri olarak anar. 457'de vefat etti.", 'suy'],
  ];
  K['necmeddin-ibn-fehd'] = [
    ["29 Cemâziyelâhir 812'de (1409) Mekke'de doğdu; babası muhaddis ve tarihçi Takıyyüddin İbn Fehd'dir. Babasının kendisi için yazdığı hadis kitabını ezberledi; önce Hanbelî fıkhı, sonra babasının teşvikiyle Şâfiî fıkhı okudu. Babası onu Mekke'ye gelen âlimlerle tanıştırdı: Zeynüddin el-Merâgī, İbn Zahîre, İbnü'l-Cezerî ve Takıyyüddin el-Fâsî hocalarındandır. 835 hac mevsiminde üç yıl sürecek bir ilim yolculuğuna çıktı.", 'dia'],
  ];
  K['nesai'] = [
    ["215'te (830) Horasan'daki Nesâ'da doğdu. On beş yaşında hadise başladı; 230'da en çok faydalandığı hocası Kuteybe b. Saîd'in yanına gidip on dört ay kaldı. İbn Râhûye, Ahmed b. Hanbel, Ahmed b. Menî' ve Ali b. Hucr'dan da dinledi.", 'dia'],
    ["Süyûtî'ye göre İbn Cevsâ, İbnü's-Sünnî, İbnü'l-A'râbî, Tahâvî, Ebû Ali en-Nîsâbûrî, İbn Adî, İbn Yûnus, Ukaylî ve Ebû Avâne ondan rivayet etti. Hâkim onu \"Mısır şeyhlerinin en fakihi, sahihi, sakîmi ve ricâli en iyi bilen\" diye anar; Zehebî onu Müslim'den daha hâfız sayar. es-Sünenü'l-kübrâ ve es-suğrâ, Hasâisu Alî ve Müsnedü Mâlik eserlerindendir.", 'suy'],
  ];
  K['nesefi-omer'] = [
    ["461'de (1068) Nesef'te doğdu. 550 hocadan hadis naklettiği ve onlar hakkında Ta'dâdü şüyûhi Ömer'i yazdığı kaydedilir; Ebü'l-Yüsr el-Pezdevî ve Ebü'l-Muîn en-Nesefî hocalarındandır. Karahanlılar döneminin önde gelen âlimlerindendi; \"Müfti's-sekaleyn\" lakabıyla anıldı. Ancak Sem'ânî rivayetlerinde hatalar bulunduğunu ve isnadlardaki isimleri değiştirdiğini söylemiştir.", 'dia'],
    ["Zehebî onu Semerkant tarihi el-Kand'ın müellifi, yüz kadar eseri olan bir Hanefî âlim olarak anar; Bağdat'ta İbn Beyân'dan dinlediğini kaydeder.", 'siyer'],
  ];
  K['nevevi'] = [
    ["631'de (1234) Havran'daki Nevâ köyünde doğdu. Ergenlik çağında babasının dükkânında çalışırken çevredeki âlimlerin derslerine devam etti. On sekiz yaşında Dımaşk'a gidip Revâhiyye Medresesi'ne yerleşti; et-Tenbîh ve el-Mühezzeb'i ezberledi. İki yıl sonra babasıyla hacca gitti. Kütüb-i Sitte'nin yanında Muvatta', müsnedler, Dârekutnî'nin ve Beyhakī'nin Sünen'leri ile Begavî'nin Şerhu's-sünne'sini okudu.", 'dia'],
    ["Süyûtî'ye göre Razî b. el-Burhân ve Nu'mân b. Ebü'l-Yüsr'den dinledi. Müslim şerhi, er-Ravza, el-Minhâc, el-Ezkâr, Riyâzü's-sâlihîn ve et-Takrîb'i yazdı. Çok zâhid ve vera' sahibiydi, iyiliği emredip kötülükten sakındırırdı ve sultanlar ondan çekinirdi; evlenmedi. Dârülhadîs el-Eşrefiyye'nin şeyhliğini yürüttü.", 'suy'],
  ];
  K['ramhurmuzi'] = [
    ["265 civarında (879) Ahvaz'a bağlı Râmhürmüz'de doğdu; dedesine nisbetle İbn Hallâd diye de anılır. 290'da öğrenimine başladı, Şîraz'a ve Mekke'ye gitti; İbn Ebû Hayseme, Mutayyen, Firyâbî, Abdân el-Ahvâzî ve Zekeriyyâ es-Sâcî dahil 200'e yakın hocadan dinledi. Beldesinin merkez camisinde ders verdi; İbn Cümey' ve İbn Merdûye talebelerindendir.", 'dia'],
    ["Süyûtî onu el-Muhaddisü'l-fâsıl ve Emsâl'in müellifi, bu işin imamlarından biri olarak anar; 360'a yakın bir tarihe kadar yaşadı.", 'suy'],
  ];
  K['ruhavi'] = [
    ["Cemâziyelâhir 536'da (1142) Urfa'da doğdu; ailesi Haçlı kontluğu döneminde Avrupa'dan gelmişti. 539'da Zengî Urfa'yı fethedince aile esir düştü ve Harran'daki Ebü'l-Fehm oğullarının kölesi oldu; müslüman olduktan sonra âzat edildiler. Annesi Hristiyan kaldı, Ruhâvî onu sık sık ziyaret ederdi.", 'dia'],
    ["Süyûtî'ye göre Musul'da yetişti ve hadise yöneldi; Saydalânî ve Ebü'l-Alâ el-Hemedânî'den dinledi, isnadları birbirinden farklı kırk hadis derledi. 2 Cemâziyelevvel 612'de Harran'da vefat etti.", 'suy'],
  ];
  K['sadefi'] = [
    ["454 civarında (1062) Saragossa yakınındaki Menzilü Mahmûd köyünde doğdu; İbn Sükkere lakabıyla tanınır. Saragossa'da Bâcî'den, Belensiye'de İbnü'd-Delâî'den, Almería'da İbn Sa'dûn'dan hadis aldı; kıraati İbn Hayrûn ve Dânî'nin talebelerinden okudu. 1 Muharrem 481'de Endülüs'ten ayrılıp Mehdiye'ye, oradan Mekke'ye gitti.", 'dia'],
    ["Süyûtî'ye göre Mısır, Basra, Bağdat, Vâsıt ve Enbâr'da dinledi, Ebû Bekir eş-Şâşî'den fıkıh okudu. Mürsiye'de ders verdi, insanlar ona rıhle yaptı; ricâl, ilel ve cerh-ta'dîlde uzun kulaçlıydı. Kadılık yapıp istifa etti. Rebîülevvel 514'te şehid düştü.", 'suy'],
  ];
  K['safedi'] = [
    ["696'da (1297) Safed'de doğdu (690 da denmiştir); babası Türk asıllı Bahrî Memlük emîrlerinden İzzeddin Aybeg'dir. Kur'an'ı ezberledikten sonra resim ve hatla uğraştı. Necmeddin es-Safedî'den Arapça ve mantık okudu; İbn Teymiyye, Alâî, Takıyyüddin es-Sübkî, Birzâlî, Mizzî, Hüseynî, İbn Kesîr ve Zehebî dahil pek çok âlimden faydalandı.", 'dia'],
    ["İbn Hacer'e göre babası yirmi yaşına kadar ilimle uğraşmasına izin vermedi. Ebû Hayyân, İbn Seyyidinnâs ve İbn Nübâte'den okudu, Mısır'da Debûsî'den ve Dımaşk'ta Mizzî'den dinledi. Otuz ciltlik el-Vâfî bi'l-vefeyât'ı ve çağdaşlarına ayırdığı A'yânü'l-asr'ı yazdı.", 'durer'],
  ];
  K['sagani'] = [
    ["10 Safer 577'de (1181) Lahor'da doğdu; Hz. Ömer'in soyundan geldiği için Ömerî nisbesiyle de anılır. Ailesi önce Çagāniyân'a, sonra Lahor'a yerleşmişti. Babasıyla Gazne'ye göçtü, on üç yaşında onu kaybetti. Önce Hanefî fıkhı okudu, sonra yaklaşık on yıl Mekke, Medine, Yemen, Bağdat ve Mogadişu'da ders aldı; Lahor ve Delhi'ye dönüp lugata yöneldi.", 'dia'],
  ];
  K['samarkandi-hasen'] = [
    ["409'da doğdu; Semerkantlı Ebû Muhammed el-Hasen b. Ahmed el-Kûhmîsenî. Müstağfirî'nin yanında yetişti ve eser yazdı. Süyûtî onu doğuda ve batıda zamanının benzersiz hâfızı sayar; sekiz yüz cüzde yüz bin hadisi toplayan Bahrü'l-esânîd için \"düzenlenip tehzîb edilseydi İslâm'da bir benzeri olmazdı\" der. Zilkade 491'de vefat etti.", 'suy'],
  ];
  K['sehavi'] = [
    ["Rebîülevvel 831'de (1428) Kahire'de doğdu; ailesi Garbiye'deki Sehâ'dan gelmişti. Aynı mahallede oturdukları İbn Hacer ilmî hayatını şekillendirdi: yedi yaşından itibaren onun meclislerine devam etti ve ölümüne kadar Kahire'den ayrılmadı. Ona İbnü's-Salâh'ın Ulûmü'l-hadîs'ini ve Fethu'l-Bârî'yi okudu, onun için çok kitap istinsah etti ve bazı eserlerini tamamlayıp şerh etti.", 'dia'],
    ["Kendi biyografisinde (ed-Dav'ü'l-lâmi'), \"İbnü'l-Bârid\" diye de anıldığını ama bu adı sevmediğini yazar.", 'dav'],
  ];
  K['sehhami'] = [
    ["14 Zilkade 446'da (1055) Nîşâbur'da doğdu. Muhaddis babası onu küçük yaşta ilim meclislerine götürdü; kardeşi Vecîh ile birlikte okudu. Abdülgāfir el-Fârisî, Ebû Hafs b. Mesrûr ve Bağdat müsnidi Cevherî'den icazet aldı. Bahîrî, Gencerûzî ve Ali el-Behhâsî'den dinledi; Beyhakī'den es-Sünenü'l-kübrâ, Şuabü'l-îmân, ez-Zühdü'l-kebîr ve el-Medhal'i, Hâkim'in Târîhu Nîşâbûr'unun bir kısmını okudu. İbn Asâkir, Sem'ânî, İbnü'l-Cevzî ve Ebü'n-Necîb es-Sühreverdî ondan rivayet etti.", 'dia'],
    ["Zehebî onu \"Horasan müsnidi, muhaddis, müfîd, muammer\" diye anar.", 'siyer'],
  ];
  K['sehmi'] = [
    ["Cürcânlı Ebü'l-Kāsım Hamza b. Yûsuf es-Sehmî; Hişâm b. Âs'ın soyundandır. Bölgeleri dolaşarak İbn Adî, İbnü'l-Mukrî ve İsmâîlî'den dinledi. Süyûtî'ye göre eser yazdı, cerh ve ta'dîl yaptı, hadisleri tashih ve ta'lîl etti. 427'de vefat etti.", 'suy'],
  ];
  K['semani'] = [
    ["21 Şâban 506'da (1113) Merv'de, Horasan'ın en tanınmış âlimlerinden Muhammed b. Mansûr'un oğlu olarak doğdu. Dört yaşında babası onu Nîşâbur'da ders halkalarına götürdü; aynı yıl babasını kaybetti ve amcaları onun öğrenimiyle ilgilendi. Yirmi üç yaşında, 529'da başlayıp altı yıl süren ilk büyük seyahatine çıktı.", 'dia'],
    ["Süyûtî'ye göre Fürâvî ve Zâhir eş-Şehhâmî'den dinledi; hocalarının sayısı yedi bine ulaştı. Hatîb'in tarihine zeyl, Merv tarihi, Edebü'l-imlâ ve'l-istimlâ, Mu'cemü'ş-şüyûh ve el-Ensâb eserlerindendir. Cemâziyelevvel 562'de elli altı yaşında vefat etti.", 'suy'],
  ];
  K['silefi'] = [
    ["475 civarında (1082) İsfahan'da doğdu (470, 472, 474 ve 478 de denmiştir); bir dudağı yarık olan büyük dedesine verilen Farsça \"silebe\" adından Silefî nisbesini aldı. On bir yaşında Kur'an öğrenmeye başladı. 488'de Hanbelîlerin reisi Rızkullah et-Temîmî'nin halkasına katıldı ve onun teşvikiyle hadise yöneldi; İsfahan'da Kāsım b. Fazl es-Sekafî ve başkalarından yazdı.", 'dia'],
    ["Süyûtî onu hâfız, nâkıd, mütkın biri olarak anar: âlî isnad onda son buldu ve hâfızlar onun hayatında ondan rivayet etti. İsfahan, Bağdat ve sefer şeyhleri için mu'cemler derledi; zamanında rivayet kanunlarını en iyi bilen oydu. 5 Rebîülâhir 576'da yüz altı yaşında vefat etti.", 'suy'],
  ];
  K['sulemi'] = [
    ["Nîşâburlu sûfî Ebû Abdurrahman Muhammed b. el-Hüseyn es-Sülemî; 330'da doğdu. Esam'dan dinledi; Beyhakī ve Kuşeyrî ondan rivayet etti. Dârekutnî'ye ricâl hakkında bu işi bilen birinin sorabileceği sorular yöneltti. Süyûtî, onun zayıf sayıldığını ve sûfîler için hadis uydurduğunun söylendiğini kaydeder. Şâban 412'de vefat etti.", 'suy'],
  ];
  K['suyuti'] = [
    ["1 Receb 849'da (1445) Kahire'de doğdu; ataları Asyût'ta yaşamıştı. Babası Kemâleddin Ebû Bekir İbn Hacer'in talebesiydi; Halife Müstekfî'nin imamlığını yaptı ve oğlunu İbn Hacer'in derslerine götürdü. Babası o beş yaşındayken öldü; İbnü'l-Hümâm ve hocası Celâleddin el-Mahallî onun hâmileri oldu. Annesi Türk veya Çerkez asıllı bir câriyeydi.", 'dia'],
    ["Sehâvî'ye göre yetim büyüdü; Kur'an'ı, Umde'yi, Minhâc'ı ve Elfiyye'yi ezberledi, 864'te bunları arz etti; Şeyhûniyye imamı Şemseddin el-Hanefî ve başka hocalardan nahiv ve fıkıh okudu.", 'dav'],
  ];
  K['taberani'] = [
    ["Safer 260'ta (873) Akkâ'da doğdu; küçük yaşta Taberiye'ye gittiği için Taberânî diye tanındı. On üç yaşında Taberiye'de hadis dinlemeye başladı; 274'ten itibaren yaklaşık yirmi beş yıl Kudüs, Remle, Kayseriye, Humus, Halep, Tarsus, Dımaşk, Mısır, Yemen, Hicaz, Bağdat, Basra, Kûfe ve İsfahan'ı dolaştı. Hayatının son altmış yılını İsfahan'da geçirdi; el-Mu'cemü'l-evsat'ta adını saydığı hocalarının sayısı 2000'i bulur.", 'dia'],
    ["Süyûtî onu \"müsnidü'd-dünyâ\" diye anar. el-Mu'cemü'l-kebîr sahâbe müsnedlerine, el-Evsat hocalarından gelen garîb rivayetlere ayrılmıştır; Evsat için \"bu kitap benim ruhumdur\" derdi. el-Mu'cemü's-sağîr, ed-Duâ ve Delâilü'n-nübüvve de eserlerindendir.", 'suy'],
  ];
  K['taberi'] = [
    ["224 sonu ya da 225 başında (839) Taberistan'ın merkezi Âmül'de doğdu; hiç evlenmedi. Çiftçi babası onun yetişmesi için büyük çaba gösterdi. On iki yaşında Rey'e gidip beş yıl kaldı; İbn Humeyd er-Râzî'den hadis aldı ve tefsir okudu, Ebû Mukātil'den Hanefî fıkhını öğrendi.", 'dia'],
    ["Hatîb'e göre sözüyle hükmedilen, görüşüne başvurulan bir imamdı: Kur'an'ı ezbere bilir, ahkâmı, sünnetleri ve tarikleri, sahâbe ve tâbiîn görüşlerini ve tarihi bilirdi. İbn Huzeyme \"yeryüzünde ondan âlimini bilmiyorum\" demiştir. Fergānî'ye göre önce Şâfiî mezhebini Bağdat'ta yaydı, sonra ilmi genişleyince kendi içtihadına yöneldi.", 'suy'],
  ];
  K['tacuddin-subki'] = [
    ["727'de (1327) Kahire'de doğdu (728 ve 729 da denmiştir). İlk eğitimini babası Takıyyüddin es-Sübkî'den aldı. Babası Şam kādılkudâtı olunca 739'da onunla Dımaşk'a gitti; Zehebî, Mizzî, İbnü'n-Nakīb, Ebû Hayyân, İbn Nübâte, Bedreddin İbn Cemâa ve İbn Seyyidinnâs hocalarındandır. On sekiz yaşında fetva icazeti aldı. İbn Sa'd el-Makdisî, on dokuzu kadın 172 hocasını içeren bir Mu'cem derledi.", 'dia'],
  ];
  K['tahavi'] = [
    ["10 Rebîülevvel 239'da (853) Mısır'ın Saîd bölgesindeki Tahâ köyünde doğdu; doğum yılı 229, 236 ve 238 olarak da verilmiştir, ama çoğunluk talebesi İbn Yûnus'un ondan naklettiği 239'u kabul eder. Hamevî'ye göre aslen Tahtût köyündendir; dedeleri Mısır'ın fethinden sonra Yemen'den gelip yerleşmişti.", 'dia'],
    ["Süyûtî'ye göre Müzenî'nin kız kardeşinin oğludur; Yûnus b. Abdüla'lâ ve Hârûn b. Saîd el-Eylî'den dinledi, Taberânî ondan rivayet etti. Fıkhı Kādî Ebû Hâzim'den okudu; Hanefîlerin riyaseti onda son buldu. Meâni'l-âsâr onun eseridir.", 'suy'],
  ];
  K['takiyyuddin-subki'] = [
    ["3 Safer 683'te (1284) Menûfiye'deki Sübkülabîd'de doğdu. Babasından ilk eğitimini aldıktan sonra Kahire'de İbn Bintü'l-Eaz, İbn Dakīkul'îd, Ca'berî, İbnü'r-Rif'a, Dimyâtî, Mizzî, Ebû Hayyân ve İbn Atâullah el-İskenderî'den fıkıh, usûl, kelâm, nahiv, tefsir, kıraat, hadis ve tasavvuf okudu. 706'da Dımaşk'a gitti, bir yıl sonra Kahire'ye döndü.", 'dia'],
    ["Süyûtî onu \"asrın imamı, müctehid\" diye anar ve yüz ellinin üzerinde eser yazdığını söyler; asrın fazılları onun yanında yetişti. Celâl el-Kazvînî'nin ölümü üzerine Şam kādılkudâtı oldu.", 'suy'],
  ];
  K['talamenki'] = [
    ["340'ta doğdu; Kurtubalı Ebû Ömer Ahmed b. Muhammed el-Meâfirî. Rıhleye çıkıp dinledi. Süyûtî onu Kur'an'ın harfleri, i'râbı, nâsih-mensûhu ve ahkâmında önder, hadis ve ricâle tam vâkıf, sünnetleri ezbere bilen ve bid'at ehline karşı \"çekilmiş kılıç\" olan bir imam olarak anar. İbn Hazm ve İbn Abdülber ondan rivayet etti. Zilhicce 429'da vefat etti.", 'suy'],
  ];
  K['temmam'] = [
    ["330'da (941) Dımaşk'ta doğdu; babası Muhammed Reyli bir muhaddis ve tarihçiydi. Kur'an'ı Gulâm es-Sebbâk'tan öğrendi; sekiz yaşında Hasâirî ve İbn Fedâle'den hadis aldı ve bu sayede babasıyla aynı tabakada âlî isnada sahip oldu. Sayıları 170'i bulan hocalarının neredeyse tamamı Dımaşklıdır.", 'dia'],
    ["Süyûtî'ye göre babasından ve Hayseme'den dinledi. Ebû Ali el-Ehvâzî \"bu konuda onun benzerini görmedim\", Abdülazîz el-Kettânî \"Şam hadisinde ondan hâfızını görmedim\" der. 3 Muharrem 414'te vefat etti.", 'suy'],
  ];
  K['tenuhi'] = [
    ["709'da doğdu; Ba'lebek asıllı, Dımaşk'ta yetişip Kahire'ye yerleşen Burhâneddin İbrâhim b. Ahmed. Takıyyüddin Süleyman ve dört yüz kadar kişi ona icazet verdi; Haccâr'dan ve başkalarından dinledi. İbn Hacer onun için altı yüzü aşkın hocayı içeren bir Mu'cem ile Meşyeha'lar derledi. Kıraati Ca'berî, İbn Bashân ve Ebû Hayyân'dan okudu.", 'durer'],
  ];
  K['tucibi'] = [
    ["Mürsiyeli Ebû Abdullah Muhammed b. Abdurrahman et-Tücîbî; Tilimsan muhaddisi oldu. Rıhleye çıkıp Silefî ve başkalarından dinledi. Süyûtî onu hadisi ezbere bilen ve zabtlı biri olarak anar, ancak başkalarının ondan daha zabtlı olduğunu da ekler. Eser yazdı ve muhaddisler ona rıhle yaptı. Cemâziyelevvel 610'da yetmiş yaşında vefat etti.", 'suy'],
  ];
  K['turtusi'] = [
    ["26 Cemâziyelevvel 451'de (1059) Tortosa'da doğdu; İbn Ebû Rendeka diye de tanınır. Saragossa'da Ebü'l-Velîd el-Bâcî'den Arapça, fıkıh, hadis, ferâiz ve hilâf okudu. İbn Hazm'dan okuduğuna dair bilgi, İbn Hazm öldüğünde beş yaşında olduğu için şüphelidir. 476'da hacca gitti, sonra Irak, Suriye ve Mısır'da kaldı.", 'dia'],
    ["Zehebî'ye göre Basra'da Sünen-i Ebû Dâvûd'u Tüsterî'den, Bağdat'ta Dâmeğânî, Rızkullah et-Temîmî ve Humeydî'den dinledi; Ebû Bekir eş-Şâşî'den fıkıh okudu. Bir süre Kudüs'te kaldı, sonra İskenderiye'ye yerleşti ve orada imamlar yetiştirdi. Zehebî onu \"Mâlikîlerin şeyhi, zâhid, İskenderiye'nin âlimi\" diye anar.", 'siyer'],
  ];
  K['ukayli'] = [
    ["Mekke ve Medine'de yaşadı; birkaç kez Mısır'a ve Rey'e rıhle yaptı. Dedesi Yezîd el-Ukaylî, Muhammed b. İsmâil es-Sâiğ, Deberî, Ali b. Abdülazîz el-Begavî, Abdullah b. Ahmed b. Hanbel ve Nesâî hocalarındandır; Mesleme b. Kāsım ve İbnü'l-Mukrî talebelerindendir. Güvenilir bir muhaddisti ve hadisleri çoğunlukla ezberinden rivayet ederdi. Rebîülevvel 322'de (934) Mekke'de vefat etti.", 'dia'],
    ["Süyûtî'nin naklettiğine göre talebeleri onu sınamak için rivayetlere ekleme ve eksiltme yaparak okumuş; Ukaylî bunu fark edip kitabı ezberinden düzeltmiş ve onun \"insanların en hâfızı\" olduğuna karar vermişlerdir. ed-Duafâ onun eseridir.", 'suy'],
  ];
  K['zehebi'] = [
    ["3 Rebîülâhir 673'te (1274) Dımaşk'ın sayfiye köylerinden Kefrebatnâ'da doğdu. Türkmen asıllı ailesi Diyarbekir'e bağlı Meyyâfârikīn'de (Silvan) yaşamıştı; bu yüzden kendini Fârikī nisbesiyle de kaydetmiştir. Önceleri İbnü'z-Zehebî diye bilindi.", 'dia'],
    ["Süyûtî'ye göre on sekiz yaşında hadis talebine başladı, çok rıhle yaptı ve yedi kıraati okudu. İbn Hacer zemzem içerken Zehebî'nin hıfz mertebesine ulaşmayı dilediğini söyler. Ümmü's-Sâlih Türbesi'nde hadis okuttu. Târîhu'l-İslâm, Siyer, Tabakātü'l-huffâz, el-Kâşif ve el-Mîzân eserlerindendir.", 'suy'],
    ["Birzâlî, Mizzî ve İbn Teymiyye hem hocası hem arkadaşıydı; Birzâlî ona hadis talebini sevdirdi. Hocalarının sayısı 1200'ü aşar. Tâceddin es-Sübkî, Safedî, Hüseynî, İbn Râfi', İbn Kesîr, Alâî ve İbn Receb talebelerindendir.", 'kay'],
  ];
  K['zekeriyya-ensari'] = [
    ["Çağdaşı İbn İyâs ve talebesi İbnü'l-Hımsî'ye göre 824'te (1421) Süneyke'de doğdu (Gazzî 823, Sehâvî 826 der); sahâbî Hubâb b. Münzir'in soyundandır. Babasının ölümü üzerine annesi onu 841'de Kahire'ye gönderdi; Ezher'de okudu ve temel metinleri ezberledi. Maddî sıkıntı çektiği için bir zenginin desteğiyle okudu. İbn Hacer, Kāyâtî, Sâlih el-Bulkīnî ve İbnü'l-Hümâm hocalarındandır.", 'dia'],
    ["Sehâvî'ye göre Kur'an'ı ve Umde'yi Süneyke'de ezberledi; Kahire'de el-Minhâc'ı, Elfiyye'yi, iki Şâtıbiyye'yi ve Irâkī'nin Elfiyye'sinin yarısını da ezberledi.", 'dav'],
  ];
  K['zeylai'] = [
    ["Bugün Somali'nin Cibuti sınırındaki liman şehri Zeyla'dandır; Irâkī ile dostluğu ve Süyûtî'deki yeri dikkate alınarak 720'li yıllarda doğduğu tahmin edilir. Tücîbî, Fahreddin ez-Zeylaî, Alâeddin İbnü't-Türkmânî ve Bahâeddin İbn Akīl'den hadis, fıkıh ve nahiv okudu.", 'dia'],
    ["Süyûtî, İbn Hacer'in Irâkī'den naklettiğine göre Zeylaî ile Irâkī'nin tahrîc için hadis kitaplarını birlikte taradıklarını kaydeder: Irâkī İhyâ'nın, Zeylaî el-Hidâye ve el-Keşşâf'ın hadislerini tahrîc ediyordu ve birbirlerine yardım ediyorlardı. Muharrem 762'de vefat etti.", 'suy'],
  ];
  K['ziya-makdisi'] = [
    ["6 Cemâziyelâhir 569'da (1174) Dımaşk'ın Kāsiyûn eteklerindeki Sâlihiye semtinde doğdu (567 bilgisi doğru değildir); ataları Kudüs yakınındaki Cemmâîl'dendi. Babası Abdülvâhid el-Makdisî, annesi Rukıyye bint Ahmed'dir. Küçük yaşta okuma yazmayı ve Kur'an'ı öğrendi, aile fertleriyle ders halkalarına katıldı.", 'dia'],
    ["Süyûtî'ye göre Silefî ona icazet verdi; İbnü'l-Cevzî ve Saydalânî'den dinledi. Rıhle yaptı, eser yazdı, hadisleri tashih ve tazʿîf etti; bu işte merciydi. Takıyyüddin Süleyman ondan rivayet etti. Cemâziyelevvel 643'te vefat etti.", 'suy'],
  ];
  K['kerime'] = [
    ["Ümmü'l-Kirâm Kerîme bint Ahmed b. Muhammed b. Hâtim el-Mervezîyye, Mekke'de mücavir. Sahîh-i Buhârî'yi Küşmîhenî'den dinledi; Zâhir b. Ahmed es-Serahsî ve Abdullah b. Yûsuf b. Bâmûye'den de rivayet etti. Rivayet ederken nüshasını aslıyla karşılaştırırdı. Sahîh'i defalarca okuttu; bir defasında hac mevsiminde Hatîb el-Bağdâdî okudu. Hatîb, Ebü'l-Ganâim en-Nersî ve Ebü'l-Muzaffer es-Sem'ânî ondan rivayet etti; hiç evlenmedi.", 'siyer'],
    ["Babası Küşmîhenliydi; onu Kudüs'e götürüp Mekke'ye getirdi ve Kerîme yüz yaşına ulaştı. Zehebî vefatının 463'te olduğunu doğru bulur; İbn Nukta, İbn Nâsır'ın hattından 465'i nakleder.", 'siyer+kay'],
  ];
  K['abdulgafir'] = [
    ["350'li yıllarda doğdu; Nîşâburlu Ebü'l-Hüseyin Abdülgāfir b. Muhammed el-Fârisî. Sahîh-i Müslim'i Cülûdî'den dinledi ve bu rivayeti uzun ömrü boyunca sonraki nesle aktardı. Zehebî onu \"şeyh, imam, sika, muammer, sâlih\" diye anar.", 'siyer'],
  ];
})(window.BIYOK);
