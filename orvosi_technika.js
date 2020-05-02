var questionAnswers = [
// orvostechnikai eszközök
{
	question: 'Milyen jelölés kerül az Európai Uniós direktívák követelményeit teljesítő árukra?',
	answer: 'CE jel <img src="img/oe_ce.png">'
},{
	question: 'Miért alkotott az Európai Unió külön direktívákat?',
	answer: 'Hogy a technika aktuálisan elvárható szintjét elérjék a gyártók termékei.</br>Bizonyos termékkörök esetén, így az orvostechnikai eszközöknél, az EU nem volt elégedett a kötelezettségek betartásával, ezért ezekre szigorúbb direktívákat hozott létre a termékkörhöz igazítva, különleges követelményekkel.'
},{
	question: 'Milyen orvostechnikai eszköz direktívákat ismer?',
	answer: 'AIMD - Active Implantable Medical Devices - Aktív beültethető orvostechnikai eszköz<br/>MDD - Medical Devices Directive - Orvostechnikai Eszköz Direktíva</br>IVDD - In Vitro Diagnostic Devices - In vitro orvostechnikai eszközök (labordiagnosztikai eszközök)'
},{
	question: 'Miért kötelező minden tagországban betartani az Európai Unió direktíváit?',
	answer: 'Mert minden tagországnak a jogrendjébe kell illeszteni a direktívát, tehát jogszabályi erőt nyer, ellentéteseket meg kell szüntetniük.'
},{
	question: 'Mit nevezünk orvostechnikai eszköznek?',
	answer: 'Minden olyan eszközt, készüléket, berendezést, anyagot vagy más terméket, amiket gyógyítás céljaira, embereken alkalmaznak.'
},{
	question: 'Mi az orvostechnikai eszközök két legfontosabb alapkövetelménye?',
	answer: 'Biztonság</br>Hatásosság'
},{
	question: 'Hogyan kell bizonyítani a biztonságot?',
	answer: 'Akkreditált módon történő mérésekkel. Szabványok vannak az orvosi eszközökre. Az összes pontjának teljesülnie kell. A technikai álláspont szerint elvárható színvonalú, teljesíthető.'
},{
	question: 'Hogyan kell bizonyítani a hatásosságot?',
	answer: 'Valós emberen végzett tudományos kísérlettel, az Egészségügyi Tudományos Tanács jóváhagyásával.'
},{
	question: 'Milyen különleges követelmények érvényesek emberen való kísérletezésnél?',
	answer: 'Egészségügyi Tudományos Tanács követelményei, ettől eltérni tilos.'
},{
	question: 'Mit jelent az orvostechnikai eszköz kockázati osztálya?',
	answer: 'Hogy mekkora mértékű károsodást okozhat egy eszköz.</br>Pl.: I. Osztály - gyakorlatilag rizikó mentes.'
},{
	question: 'Mondjon példákat a kockázati osztályba sorolt orvostechnikai eszközökre!',
	answer: '<b>I.</b> (gyakorlatilag rizikó mentes): lámpa, kesztyű, szék</br><b>II.a</b> (kis rizikó): EKG, digitális hőmérő, MRI, automata vérnyomásmérő</br><b>II.b</b> (nagy rizikó): röntgen készülék, CT, defibrillátor, lélegeztető, sebészeti lézer</br><b>III.</b> (veszélyes): szívbillentyű, ideiglenes pacemaker vezeték, implantátumok'
},{
	question: 'Mivel egészül ki a magasabb kockázatú orvostechnikai eszközök CE jelölése?',
	answer: 'Nagyobb veszélyt hordozó termékek a veszélyességtől függően II.a, II.b vagy III. kockázatú jelölést kapnak.</br>A tanúsító azonosító száma is felkerül.'
},{
	question: 'Mit jelent a CE jelölés melletti négyjegyű szám?',
	answer: 'A független tanúsító (Notified Body) azonosító száma, aki ellenőrzi a gyártó kijelentéseit.'
},{
	question: 'Ki dönti el egy orvostechnikai eszköz használatának módját?',
	answer: 'Kizárólag a gyártó.'
},{
	question: 'Miért a gyártó dönti el egy orvostechnikai eszköz használatának módját?',
	answer: 'Mert az általuk meghatározott használati mód esetén tudja garantálni a gyártó a biztonsági és teljesítőképességi paramétereket – ezeknek megfelelően kapták meg a tanúsítványokat, engedélyeket.'
},{
	question: 'Hol található meg az orvostechnikai eszköz használatának módja?',
	answer: '<b>A használati útmutatóban.</b></br>Formája nincs meghatározva, de a kötelező tartalmi elemei igen, ill. a vásárló nemzeti nyelvén rendelkezésre kell, hogy álljon. Lehet interneten elérhető, videó forma, nyomtatott is.'
},{
	question: 'Kötelező-e Magyarországon a magyar nyelvű használati útmutató az orvostechnikai eszközökhöz?',
	answer: 'Igen, a vásárló nemzeti nyelvén rendelkezésre kell, hogy álljon.'
},{
	question: 'Miért nem szabad eltérni a használati útmutató előírásaitól?',
	answer: 'Csak az előírt használati módra igazak a gyártó által garantált biztonsági és teljesítőképesség paraméterek, az ettől eltérő használat kísérlet, ami engedély nélkül törvénysértés.'
},{
	question: 'Csak a megtörtént baleseteket vagy a veszélyes eseményeket is be kell jelenteni a hatóságnak?',
	answer: 'Mindkét típusú eseményt be kell jelenteni, mert megelőzhetünk további veszélyes és baleseti helyzeteket.'
},{
	question: 'Magyarországon melyik hatóság az orvostechnikai eszközöknél illetékes hatóság?',
	answer: 'Egészségügyi Engedélyezési és Közigazgatási Hivatal -> Orvostechnikai Főosztály -> Baleset bejelentés'
},{
	question: 'Miért kell bejelenteni az orvostechnikai eszközökkel történt rendkívüli eseményeket?',
	answer: 'Azért, mert ezzel valamilyen más helyeken bekövetkezhető baleseteket előzhetünk meg.</br>Azért is, hogy a gyártó azonnal kivizsgálhassa a jelenséget, ha típushibát észlel, akkor saját költségén rendbe hozhassa.'
},{
	question: 'Mikor kell bejelenteni az orvostechnikai eszközökkel történt rendkívüli eseményeket?',
	answer: '8 napon belül.'
},{
	question: 'Mi az orvostechnikai eszközök időszakos felülvizsgálatának célja?',
	answer: 'Megfelelő információ álljon rendelkezésre a használat során bekövetkező állagromlásról, az eszköz dokumentációjában megadott előírások esetleges megváltozásáról, valamint a rendeltetésszerű és biztonságos teljesítőképesség fennállásáról.'
},{
	question: 'Milyen felülvizsgálatra kötelezett orvostechnikai eszközök kategóriát ismer?',
	answer: '1 évente ellenőrizendő</br>2 évente ellenőrizendő</br>3 évente ellenőrizendő'
},{
	question: 'Mit jelent a felülvizsgálaton átesett eszközre ragasztott címke színe?',
	answer: '<span class="green">Zöld</span> - minden rendben</br><span class="yellow">Sárga</span> - kismértékű rendellenesség, max 2 hónap türelmi időszakot jelöl, amin belül a rendellenességet meg kell szüntetni és újra el kell bírálni a megfelelőségét</br><span class="red">Piros</span> - nem használható'
},{
	question: 'Milyen problémák lehetnek a gyógyulás ígérő, nem orvostechnikai eszközöknél?',
	answer: 'A gyártó állításait nem erősíti meg sem az akkreditált laboratóriumi vizsgálat a biztonságot illetően, sem a hatékonysági vizsgálat (jó marketing, placebo hatás torzításai).'
},
// Fiziológiai jelek mérése
{
	question: 'Mi a jelentősége az objektív információnak az orvosi diagnózis felállításakor?',
	answer: 'Az ember egészségi állapota paraméterek százaival írható le. A páciens helyzetének nyomonkövetéséhez az aktuális állapotokat jellemezni kell. Ezt a célt szolgálják a szubjektív és objektív paraméterek. A probléma a szubjektív paraméterekkel,hogy nagyban függnek a megfigyelő egyéntől és gyakran téves következtetésekre adnak alapot. Míg az objektív paraméterek mérhetőek,a bizonytalanság kevesebb,mint 5%.'
},{
	question: 'Miért fontos a mértékegységek ismerete?',
	answer: 'Mert ugyanazon jellemző mérése gyakran többféle mértékegységféleségben is megengedett és attól függően, hogy a mérőműszer milyen gyártmányú vagy beállítású, a számérték mást jelenthet.'
},{
	question: 'Hány alapértéke van az SI mértékegységrendszernek?',
	answer: '7: Hosszúság - m</br>Tömeg - kg</br>Idő - s</br>Villamosáram erőssége - A</br>Termodinamikai hőmérséklet - K</br>Anyagmennyiség - mol</br>Fényerősség - cd'
},{
	question: 'Mire jó a prefixum?',
	answer: 'A sok számjegy leírásától kímélnek meg (egyszerűsítés).</br>giga G 10^9</br>mega M 10^6</br>kilo k 10^3</br>hekto h 10^2</br>deka dk 10</br>deci d 10^-1</br> centi c 10^-2</br>milli m 10^-3</br>mikro μ 10^-6</br>nano n 10^-9</br>piko p 10^-12'
},{
	question: 'Mit jelent az analóg jel?',
	answer: 'A kijelző folytonos értéket ad.</br>Már ritka, régebben sokat használt</br>nehéz leolvasni, de végtelen pontos</br><img src="img/analog.png">'
},{
	question: 'Mit jelent a digitális jel?',
	answer: 'A kijelző kvantumonként vált (lépcsőzetesen).</br>jól tárolható, jól továbbítható</br>digitális feldolgozást egy kis analóg fordítás előzi meg</br><img src="img/digital.png">'
},{
	question: 'Milyen különös szempontjai vannak az emberen végzett méréseknek?',
	answer: 'élő emberről van szó, szubjektum</br>mérés közben megváltozhat</br>nem jól reprodukálható</br>többféle egyidejű paraméter jellemez jól</br>orvosi szituáció</br>viszonyítási alap</br>megbízhatóság, üzembiztonság'
},{
	question: 'Mondjon példát közvetlen mérési módszerre!',
	answer: 'fiziológiai mennyiség közvetlenül hat az érzékelőre</br>EKG, testhőmérséklet, testsúly, vérnyomás, hasfalfeszülés, légzéstérfogat</br><img src="img/meres_1.png">'
},{
	question: 'Mondjon példát modulált mérési módszerre!',
	answer: 'energia be -> módosult energia ki</br>Röntgen, CT, UH, SPO2, elektro hreográf, légzés szám, timpanométer, MRI, szemfenéki véráramlás sebesség</br><img src="img/meres_2.png">'
},{
	question: 'Mondjon példát indikátoros mérési módszerre!',
	answer: 'segédanyag be -> érzékelés ki</br>Röntgen kontrasztanyag, UH buborék, PET, szívperctérfogat, scintigráf, helicobacter</br><img src="img/meres_3.png">'
},{
	question: 'Mondjon példát kiváltott válaszos mérési módszerre!',
	answer: 'ingerlés be ->  válasz ki</br>EEG + fény-, hang-, villamos-, mechanikus inger, ergométer</br><img src="img/meres_4.png">'
},{
	question: 'Mondjon példát mintavételes mérési módszerre!',
	answer: 'vér, vizelet, széklet, szövet, testnedv vizsgálat</br><img src="img/meres_5.png">'
},{
	question: 'Mi okozhat bizonytalanságot méréseknél?',
	answer: 'A mérőeszköz pontatlansága</br>a mérési módszer tökéletlensége</br>a Mérést végző személy szubjektív hibája</br>Külső körülmények'
},{
	question: 'Mennyi egy szokásos mérőműszer mérési bizonytalansága?',
	answer: 'A mérőműszer pontossága a mérési eredmény és a mérendő mennyiség valódi értékének a közelítése. Ez nem lehet végtelenül jó a műszer gyártási minőségéből, bonyolultságából stb adódóan.A pontatlanság függ a műszerek minőségétől:</br>* precíz,laboratóriumi műszerek esetében 1%</br>* Általánosan használt műszerek esetében:5%</br>pl: vérnyomásmérő 300Hgmm-es maximális mérési tartománnyal: 3%os pontatlansá esetén +/- 9hgmm-es eltérést jelent.'
},{
	question: 'Mennyi lehet a kezelési gondatlanságokból eredő mérési bizonytalanság nagysága?',
	answer: '5-20%'
},{
	question: 'Ismertesse a mérési hatáslánc egyes elemeit!',
	answer: '1. a mérendő jellemző az emberben</br>2. a mérőeszköz érzékelője (mérőátalakító)</br>3. a jelfeldolgozó műszer</br>4. az eredmény megjelenítője</br>5. energiaforrás stimuláláskor, vagy méréskor</br><img src="img/hatas_vazlat.png">'
},{
	question: 'Milyen kötelező fényjelzéseket ismer orvostechnikai eszközöknél?',
	answer: '<b>piros</b> veszélynél haladéktalanul avatkozzon be, kávét csak utána ihatom meg</br><b>sárga</b> figyelmeztetésnél mielőbb avatkozzon be, de még megihatom a kávét</br><b>zöld</b> helyes működés, megihatom a kávét (akár többet is)'
},{
	question: 'Milyen ajánlott hangjelzéseket ismer orvostechnikai eszközöknél?',
	answer: 'szirénzáó hang</br>hosszú sípszó</br>Veszély - Ti, ti, ti, Szünet, Ti, Ti, Szünet</br>Figyelmeztetés - Tá, Szünet, Tá, Szünet, Tá, Szünet'
},{
	question: 'Ismertessen néhány orvostechnikai eszközön alkalmazható jelképet!',
	answer: '1. Ne használd újra<img src="img/oe_01.png"></br>2. Felhasználható ...-ig (általában 5 évig korszerű, 10 évig üzemképes)<img src="img/oe_02.png"></br>3. Gyártási tétel azonosító (együtt gyártott tételek, ha egyik rész selejt, akkor gyanakodni kell, hogy többi is)<img src="img/oe_03.png"></br>4. Sorozatszám<img src="img/oe_04.png"></br>5. A gyártás ideje<img src="img/oe_05.png"></br>6.Steril (sima, etilénoxiddal, sugárzással, hővel, aszeptikus)<img src="img/oe_06_1.png"><img src="img/oe_06_2.png"><img src="img/oe_06_3.png"><img src="img/oe_06_4.png"><img src="img/oe_06_5.png"></br>7.Gyártói katalógusszám<img src="img/oe_07.png"></br>8.Használati útmutató megnézendő<img src="img/oe_08.png"></br>9.A gyártó<img src="img/oe_09.png"></br>10.Biológiai kockázat<img src="img/oe_10.png"></br>11.Hőmérséklet(max,min,tartomány)<img src="img/oe_11_1.png"><img src="img/oe_11_2.png"><img src="img/oe_11_3.png">'
},
// Villamos biztonságtechnika
{
	question: 'Miért fontos a villamos biztonság?',
	answer: 'Gondtalan használattal vagy meghibásodás esetén áramütés keletkezhet.'
},{
	question: 'Milyen élettani hatásait ismeri az elektromos áramnak?',
	answer: 'Ideg ingerlés</br>Izom ingerlés</br>Vegyi hatás</br>Melegedés'
},{
	question: 'Az elektromos áram milyen tényezői határozzák meg a kiváltott hatást?',
	answer: 'Áram értéke</br>Áram „sűrűsége” (felület)</br>Áram útja</br>Hatás ideje</br>Áram neme (egyen/váltakozó)'
},{
	question: 'Milyen frekvenciájú váltakozó áramra leginkább érzékeny az ideg és az izom?',
	answer: '50 Hz'
},{
	question: 'A különböző nagyságú 50Hz-es áram milyen hatásokat vált ki?',
	answer: '0,02 mA közvetlenül a szíven át leállíthatja azt</br>0,3 mA érzékelés</br>1 mA bizsergés</br>15 mA elengedési küszöb</br>25 mA légzőizmok görcse</br>100 mA szív kamrai fibrilláció</br>1000 mA égés, szívleállás'
},{
	question: 'Miért kitüntetett az 50Hz-es, 20mikroamperes áramerősség?',
	answer: 'Mert közvetlenül a szívbe juttatva fibrillációt okozhat.'
},{
	question: 'Mi a vulnerábilis szakasz a szívciklusban?',
	answer: 'Különösen veszélyes időszak, a T-hullám felfutásától kezdődően, amikor már 20-50 μA (50 Hz-es) áram kamrai fibrillációt okozhat!</br><img src="img/t_hullam.png">'
},{
	question: 'Mi jellemzi a villamosan jó-, a közepes vezető, és a szigetelő anyagokat?',
	answer: '<b>Jó vezető:</b> bármely pontjára juttatva a villamos potenciált, a vezető minden pontjára eljut, és azonnal megjelenik. Az áram nagyon könnyen szétoszlik. -> fémek, elektrolitok (víz), villanyvezetékek</br><b>Közepes vezető:</b> nehezen jut át a villamos potenciál, közben megoszlik, arányosan veszítve energiájából. Az áram nehezen oszlik szét -> emberi test, izzószál, villamos alkatrészek</br><b>Szigetelőanyag:</b> bármely pontjára juttatva a villamos potenciált, ugyanazon a ponton marad, nem jut tovább. Az áram nagyon nehezen oszlik szét -> szigetelők, levegő, bútorok, száraz ruha'
},{
	question: 'Milyen áram jön létre azonos villamos potenciálok között?',
	answer: 'Azonos villamospotenciálok között nem indul meg a villamos áram.'
},{
	question: 'Mi történik az eltérő villamos potenciálokkal érintkező emberrel?',
	answer: 'Megkezdődik az energiaszint kiegyenlítődés, megráz az áram. :(.'
},{
	question: 'Miért van különös helyzetben a beteg a villamos biztonság szempontjából?',
	answer: 'altatva van, eszméletlen, mozgásképtelen</br>villamos készülékekkel kapcsolatban áll</br>bőre nem nyújt szigetelő védelmet</br>életfunkciói függenek a készülékektől</br>érzékeny és nagyteljesítményű készülékekkel kapcsolódik</br>laikus és lelkileg is terhelt'
},{
	question: 'Hogyan véd a védővezeték?',
	answer: 'Rajta keresztül 0V potenciált vezetnek a többnyire fém burkolatú eszközbe, és ez által megvéd az áramütéstől. Jele: I. vagy <img src="img/vb_01.png">'
},{
	question: 'Hogyan véd a kettős szigetelés?',
	answer: 'A kettős szigetelőanyag réteg miatt, a veszélyes potenciál nem tud eljutni az emberhez. Csak száraz körülmények között! Jele: II. vagy <img src="img/vb_02.png">'
},{
	question: 'Miért biztonságos a belső áramforrás?',
	answer: 'Mert kis potenciálkülönbséggel dolgoznak és csak akkor veszélyes, ha a készülék által létrehozott potenciálkülönbség közé kerül az ember.'
},{
	question: 'Miért biztonságos a lebegő potenciálú készülék?',
	answer: 'Mert a fix lebegő potenciál közé került ember érintési pontjai között nincs potenciálkülönbség, így áramütés sem.'
},{
	question: 'Hol használhat B tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(B=Body)<img src="img/vb_03.png">, olyan készülékeknél, amelyeknél a bőr védő hatása tud érvényesülni. Ezek főleg általános használatra szánt készülékek.'
},{
	question: 'Hol használhat BF tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(BF=Body Floating<img src="img/vb_04.png">), fém tűnél</br>benedvesedett bőrön</br>fém tűvel átszúrt bőrön</br>katétereknél</br>műtétileg feltárt területeken'
},{
	question: 'Hol használhat CF tipusú páciensrésszel rendelkező orvostechnikai eszközt?',
	answer: '(BF=Cardiac Floating<img src="img/vb_05.png">), akár emberi szívnél vagy nagy ereknél, mert max. 10 μA áram tud megindulni a szív felé.'
},{
	question: 'Hogyan kell használni a fali szigetelésellenőrző műszert?',
	answer: 'A műszer rendes működését egy kontrollgomb napi egyszeri megnyomásával ellenőrizni kell. Hiba esetén hangjelzést ad. Ekkor a hangjelzés kikapcsolható, a megkezdett beavatkozás befejezhető, de új műveletet csak a hiba felderítése után kezdhető.'
},{
	question: 'Hogyan kell használni az EPH hálózatot?',
	answer: '(Egyesített Potenciálkiegyenlítő Hálózat): A paciens közelében minden megérinthető fém felületet egy villamos érintkező gyűjtőhöz kötnek vezetékekkel.'
},{
	question: 'Miért hatékony az EPH hálózat?',
	answer: '(Egyesített Potenciálkiegyenlítő Hálózat): Mert a az esetleg potenciállal rendelkező fém felületek potenciálja kiegyenlítődik, közöttük nem lesz potenciálkülönbség. -> Potenciálkülönbség nélkül nem tud megindulni villamos áram, és nem lehet áramütés sem.'
},
// Endoszkópos diagnosztika
{
	question: 'Mit jelent az endoszkóp elnevezés?',
	answer: 'Belülre nézés.'
},{
	question: 'Melyek az endoszkópia előnyei más képalkotókhoz képest?',
	answer: 'Valóságos látvány (színhelyes kép)</br>Alacsonyabb kockázat</br>A vizsgált terület közelébe lehet jutni</br>Diagnosztikát azonnal követheti beavatkozás'
},{
	question: 'Milyen vizsgálati módszerek lehetnek a fény használatával?',
	answer: 'A test saját fénysugárzásának észlelése</br>A vizsgálandó terület megvilágítása, és az arról visszaverődő fény észlelése</br>A besugárzott fény modulált változatának észlelése'
},{
	question: 'Milyen színek láthatóak az endoszkópos betekintés során?',
	answer: 'Valóságos, látható színeket'
},{
	question: 'Milyen fényforrásra van szükség a helyes színárnyalatok érdekében?',
	answer: 'Amilyen a napfényhez hasonló arányokban tartalmazza az összes ember számára érzékelhető színkomponenst.</br><img src="img/fenyforras.png">'
},{
	question: 'Mit neveznek endoszkópiában hideg fényforrásnak?',
	answer: 'Azt a fényforrást, amiből kiszűrik az infravörös, hő keltő tartományt, és csak a valóban megvilágítást adó, látható tartományt engedi az emberi testbe.</br><img src="img/hideg_ff.png">'
},{
	question: 'Mi a Charriére az endoszkóp esetében?',
	answer: 'Mértékegység (Ch), egy ovális vagy kör alakú csatorna kerülete mm-ben.'
},{
	question: 'Mi az előnye az üveg lencsés képtovábbításnak?',
	answer: 'A képtovábbítás színhelyessége szinte tökéletes.'
},{
	question: 'Miért nevezik néhol az endoszkópiát tükrözésnek?',
	answer: 'Előfordulhat, hogy a lényeges terület nem az endoszkóp előtt van, ezért fényterelő prizmákat építenek az endoszkóp elejére. Ezek miatt a tükröződő felületek miatt hívhatják tükrözésnek.</br><img src="img/end_tukor.png">'
},{
	question: 'Mire való a munkacsatorna?',
	answer: 'Egy "cső a csőben", amiben különböző folyadékok, gázok, eszközök juttathatóak be (pl. koagulálni, mintát venni, öblítő folyadékot bejuttatni lehet).</br><img src="img/end_mcs.png">'
},{
	question: 'Milyen endoszkóp elnevezéseket ismer, és hol használják?',
	answer: 'Cisztoszkóp-húgyhólyag</br>Uretroszkóp-húgycső</br>Rektoszkóp-végbél</br>Hiszteroszkóp-méh</br>Duglaszkóp-petefészek</br>Laparoszkóp-hasüreg</br>Koledoszkóp-epehólyag</br>Gasztroszkóp-gyomor</br>Torakoszkóp-mellüreg</br>Kardioszkóp-szív</br>Bronchoszkóp-tüdő és hörgők</br>Tracheoszkóp-légcső</br>Özofagoszkóp-nyelőcső</br>Laringoszkóp-gége</br>Otoszkóp-fül</br>Rinoszkóp-orrjárat</br>Ventrikuloszkóp-agykamrák</br>Artroszkóp-térdízület</br>Hipofaringoszkóp-garat alsó része</br><img src="img/end_faj.png">'
},{
	question: 'Mi a merev endoszkópok jellemezője?',
	answer: 'Többnyire fémből készült eszközök</br>Olyan beavatkozásoknál előnyösek, ahol a merevségből adódóan jól pozícionálható a vég helyzete</br>A leképzés leginkább Hopkins-féle, jobb fényátbocsátást nyújtó rúdlencsés optikával</br><img src="img/end_m.png">'
},{
	question: 'Mi a hatékony endoszkópok jellemzője?',
	answer: 'Könnyen felveszi a csatornák görbületeit</br>A vég mozgatása segít bejuttatáskor, kanyarodáskor</br>A megszemlélés iránya változtatható</br><img src="img/end_h.png">'
},{
	question: 'Milyen endoszkópkiegészítőket ismer?',
	answer: 'Monitor</br>Video processzor (vezérlő)</br>Fényforrás</br>Nagyfrekvenciás vágó</br>Szívó/Öblítő pumpa</br>Állvány</br>Nyomtató, DVD felvevő stb.</br><img src="img/end_kieg.png">'
},{
	question: 'Mi a kapszulaendoszkóp?',
	answer: 'Tápcsatorna vizsgálatához, gyógyszerkapszula méretű, könnyen lenyelhető kapszula, ami rádióhullámok segítségévela testen kívüli vevőhöz továbbítja a fényfelvillanásokkal megvilágított fotósorozatot, amit készít. Székelés útján távozik, egyszer használható.</br><img src="img/end_kapsz.png">'
},{
	question: 'Milyen veszélye van a kapszulaendoszkóp használatának?',
	answer: 'A tápcsatornában lévő szűkületekben/zsebekben elakadhat és ilyenkor sebészi úton kell eltávolítani.'
},{
	question: 'Miért sérülékeny az endoszkóp?',
	answer: 'A merev endoszkópok optikai rendszere, belső üveglencsék igen sérülékenyek, koccanás, hajlítás hatására repedhet.</br>A hajlékony endoszkópok belső rendszere sérülékeny, a puha gumiburkolat sérülésekor a testnedvek bejuthatnak és korróziót, használhatatlanságot okoz.'
},{
	question: 'Mi az endoszkópok leggyakoribb tisztítási módja?',
	answer: 'Gumiburkolatot felfújják, hogy sérülései láthatóvá váljanak. Kívül, belül mechanikai tisztítást kell végezni, legalább kefékkel. A leghatékonyabb az UH mosogató vagy automata mosogatógép. Sterilizálást folyadékban végeznek. Egyes eszközök már az autoklávozást is bírják.'
},{
	question: 'Hogyan dokumentálják az endoszkópos vizsgálatot?',
	answer: 'Az endoszkópos beavatkozás műtéti tevékenységnek minősül, dokumentálandó. Ez jól megvalósítható videokamera használatával, lépek rögzítésével.'
},{
	question: 'Milyen diagnosztikai hibaforrásokat tud azonosítani?',
	answer: 'Z1: bélsár, táplálék, nyál</br>Z2: látószög, életlenség, elmozdulás, irányítás</br>Z3: torzítás, kamera-színhiba, rossz megvilágítás</br>Z4: rossz színbeállítás'
},
// Röntgen és CT
{
	question: 'Mi a különbség a röntgenfelvételezés és a CT által használt sugárzás között?',
	answer: 'Semmi. Mindkettő ugyan azt a röntgensugárzást használja.'
},{
	question: 'Mit hívunk ionizáló sugárzásnak?',
	answer: 'Azt a sugárzást, ami az élő szervezet sejtjeinek vízmolekuláit ionná teszi.'
},{
	question: 'Hogyan osztályozzuk a képalkotó berendezéseket?',
	answer: '1. a sugárzás forrása és útja</br>2. A sugárzás veszélyessége</br>3. Mit tesz láthatóvá az eljárás'
},{
	question: 'Mit nevezünk transzmissziós képalkotásnak?',
	answer: 'Ha a sugárzás forrása a testen kívül van, és a sugárzás áthalad a testen.</br><img src="img/transm.png">'
},{
	question: 'Mit jelenít meg a röntgenkészülék?',
	answer: 'A testen átjutott röntgensugarat.'
},{
	question: 'Mit jelent a keményebb vagy lágyabb röntgensugárzás?',
	answer: '<b>Kemény:</b> rövid hullámhosszú röntgensugárzás.</br><b>Lágy:</b> hosszú hullámhosszú röntgensugárzás.'
},{
	question: 'Milyen elven készít képet a hagyományos röntgen képalkotó?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.</br><img src="img/transm.png">'
},{
	question: 'Mi a centrális projekció?',
	answer: 'Minden esetben fellépő, a készülék felépítéséből fakadó metodikai hiba (Nagyít, torzít, felejt, összegez).</br><img src="img/central.png">'
},{
	question: 'Milyen elven készít felvételeket a CT?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.'
},{
	question: 'Mi a Hounsfield-skála?',
	answer: 'Megmutatja a test vizsgált részének röntgensugár-elnyelő tulajdonságát.'
},{
	question: 'Mit nevezünk ablakolásnak?',
	answer: 'Ha a Hounsfield-skálához úgy rendeljük hozzá a megjelenítendő színtartományt, hogy csak az érdekes tartományhoz rendeljük a szürkeségi fokozatokat.'
},{
	question: 'Hogyan működik a spirál CT?',
	answer: 'A röntgencső és a detektor helikális ívet húz a páciens teste körül.'
},{
	question: 'Mit értünk a többszeletes CT alatt?',
	answer: 'Nem egy, hanem több detektorsor van, emiatt szélesebb lehet a röntgensugár és adott idő alatt nagyobb térrész vizsgálható.'
},{
	question: 'Mi az egyenértékdózis?',
	answer: 'A sugárzás élő szervezetre gyakorolt hatását fejezi ki. Sievertben mérik. 50 mSv a határérték, ennyit tud a repair mechanizmus kijavítani.'
},{
	question: 'Milyen elven készít felvételeket a CT?',
	answer: 'Transzmissziós elven, azaz a sugarak a testen áthaladnak.'
},{
	question: 'Milyen készülék a Dual Source CT?',
	answer: 'Olyan amilyenben 2-2 90°-ban elforgatott röntgencső és detektorsor található.'
},{
	question: 'Mi a frekvenciatartománya a nagyfrekvenciás sebészeti vágókészülékeknek?',
	answer: '50-100 kHz felett (már nincs izomösszehúzódás, csak hőhatás)</br>300kHz felett már biztosan'
},{
	question: 'Milyen felhasználása lehetséges a nagyfrekvenciás sebészeti készülékeknek?',
	answer: 'szövetek roncsolása, eltávolítása, vágása</br>vérzéscsillapítás, érelzárás</br>koagulálás'
},{
	question: 'Milyen hatást használunk ki vágás közben?',
	answer: 'hőhatás</br>először csak melegednek a szövetek,majd fehérjekicsapódás, vérzéscsillapodás (koaguláció) szövetekben lévő víz elpárolgása, végül a szerves anyagokban lévő szén is elég, így a vágni kívánt szövet egy része eltűnik'
},{
	question: 'Miért veszélyes a nagyfrekvenciás szivárgó áram?',
	answer: 'mert a szivárgó áram nem csak a kezelni kívánt szövetrészeken és a két elektródon halad át, hanem az ép szöveteken is, károsítva azokat</br>felégést akkor okoz, ha a beteg és a műtőasztal közé folyadék kerül (vér, izzadság, vizelet, mosófolyadék)'
},{
	question: 'Milyen anyagból készülhetnek a semleges elektródok?',
	answer: 'ólomlap</br>gumi hordozón fémlapkák</br>fém lap – ma kizárólag ilyet használnak</br>gumi lap'
},{
	question: 'Mik az ideális vágás követelményei?',
	answer: 'helyes operációs technika (vágás sebessége, minősége)</br>jól megtervezett áramút (szövet-elektród távolság)</br>helyesen felrögzített semleges elektród</br>'
},{
	question: 'Mit nevezünk monopoláris nagyfrekvenciás vágásnak?',
	answer: 'olyan vágási módszert, melyben a villamos energiát egy generátorral hozza lérte az operációt végző orvos (tiszta szinuszos 400-1200Hz frekvenciájú, 200V csúcsfeszültségű). Az így kialakuló villamos tér a levegőt ionizálja, ív alakul ki, megindul a szövet elpárologtatása. Az aktív pólus az ahol a vágás történik, a másik pólus, a neutrális pólus, ahol a nagy felületű semleges elektród helyezkedik el.</br>az áramot úgy vezethető el a testből (a semleges elektródon keresztül), hogy az csak az aktív elektród környezetében okozzon jelentős hőhatást'
},{
	question: 'Mi a megengedett legnagyobb kiadható teljesítmény monopoláris üzemmódban?',
	answer: '400 Watt (de célszerű a vágáshoz minimális teljesítményt használni)'
},{
	question: 'Hová kell elhelyezni a semleges elektródot?',
	answer: 'az operációs területhez legközelebb eső végtagra'
},{
	question: 'Mit nevezünk bipoláris technikának?',
	answer: 'olyan beavatkozás, melyben a hagyományos kétpólusú sebészeti eszközök (csipesz, olló, fogó stb.) két pólusát külön-külön villamos pólussá alakították, majd a nagyfrekvenciás generátorra kötötték. A csipeszek között, a szöveten záródik az áram.</br>Az áramsűrűség a két csipeszvég között azonos nagyságú, valamint a hőeloszlás is állandó. Éppen ezért ezt a technikát nem vágásra, hanem kontakt koagulálásra használják.</br>A két csipeszág között az elektromos ellenállást a készülék folyamatosan figyeli, mivel a koagulációs felületet az operáló orvos nem látja (eltakarja az elektród).'
},{
	question: 'Mi okozhat endogén felégést?',
	answer: 'ha a vágási vagy koagulálási felületet helytelenül alkohollal tisztítják'
},{
	question: 'Melyek a befolyásoló tényezői a vágási sebességnek?',
	answer: 'az operációt végző orvos milyen gyorsan mozgatja az elektródot a vágni kívánt szövet felett</br>mekkora a teljesítmény'
},{
	question: 'Milyen elektródokat ismer?',
	answer: 'semleges elektród</br>egyszerhasználatos elektród (osztott és egylapos)</br>gömbelektróda'
},{
	question: 'Milyen hangjelzések vannak a nagyfrekvenicás vágókészülékeknél?',
	answer: 'elektród és a test közötti kontaktus romlásakor</br>ha a vágás és a koag funkció is jelen van, akkor az adott funkció teljesítménykimenetét is hangjelzés kíséri (vág/koagulál-szinuszos/alternáló két szinuszos)'
},{
	question: 'Mit nevezünk koaguláló (coag) hozzákeverésnek, hol használják?',
	answer: 'a mai modern készülékekben használják, amikor arra van szükség, hogy a vágás közben megjelenő szivárgó vérzést is csillapítsák (koaguláció). Együttesen optimalizálja a vágás és a koagulálás teljesítményét.'
},{
	question: 'Ismertesse a bipoláris technikánál az áramutakat!',
	answer: 'az áramút jelentősen lecsökken a monopolárishoz képest (5-10mm)</br>az áram csak a két csipeszág között jön létre, és a szöveten záródik.'
},{
	question: 'Mikor és miért kell gumielektródot cserélni?',
	answer: 'amennyiben elöregedik a gumi (általában 2-3 év), hiszen ilyenkor:</br>az elektród teljes felületének ellenállása nő,</br>a teljesítmény egyre nagyobb része hő formájában jelentkezik</br>nő a felégés veszélye</br>csökken a vágás hatásossága, egyenletessége'
},{
	question: 'Hogyan okozhat felégést, ha a beteg hozzáér a fém műtőasztalhoz?',
	answer: 'A földelt fém részekhez érő testrészen keresztül jelentős nagyfrekvenciás áram távozik a testből-a fém alkatrészen keresztül- a földelő hálózatba. Ilyenkor átég az érintkező bőrfelület.'
},{
	question: 'Mikor jön létre a teljesítmény túladagolása?',
	answer: 'a fehérjekicsapódás 70°C-on következik be, ha ezt követően tovább melegítjük a felületet, a felület elszenesedik, megég (túlkoagulálás). Ez nehezíti a sebgyógyulást.'
},{
	question: 'Mi a kisfrekvenciás elektroterápia lényege?',
	answer: 'Alig vált ki hő- és vegyihatásokat, ugyanakkor az idegeket, izmokat ingerületbe hozza (-> izomtornáztató kezelés).'
},{
	question: 'Miért a kisfrekvenciás áramot használják ingerterápiára?',
	answer: 'Alig vált ki hőés vegyihatásokat, ugyanakkor az idegeket, izmokat ingerületbe hozza (-> izomtornáztató kezelés).'
},{
	question: 'Milyen jelenségeket hoz létre az emberi szervezetben a bevitt elektromos áram?',
	answer: 'ingerület, ingerületvezetés, izomösszehúzódás'
},{
	question: 'Mit jelent az ingerterápiás áramforma kifejezés?',
	answer: 'Az áram erősségének időbeli változása grafikusan. Leggyakrabban egyenáram, négyszög, háromszög, exponenciális'
},{
	question: 'Magyarázza meg az I/t görbe jelentőségét?',
	answer: 'Az adott áramformával kiváltható izomválasznak az áram és impulzus időtartam összefüggéseit mutatja be'
},{
	question: 'Hogyan reagálnak a harántcsíkolt izmok négyszöghullám ingerlésre?',
	answer: 'ingerületbe jönnek (ha egészségesek)'
},{
	question: 'Hogyan reagálnak a harántcsíkolt izmok háromszöghullám ingerlésre?',
	answer: 'az egészséges izmok nem, de a degenerált izmok ingerületbe jönnek tőle'
},{
	question: 'Mit nevezünk szelektív ingerlésnek?',
	answer: 'Az egészséges izmot nem ingerli, de a beteget igen.'
},{
	question: 'Milyen frekvenciájú áramingerlésre legérzékenyebb az emberi szervezet?',
	answer: '50Hz körülire'
},{
	question: 'Milyen egyenáramú kezelési módokat ismer?',
	answer: 'galvanizáció, iontoforézis'
},{
	question: 'Milyen impulzuskezelési módokat ismer?',
	answer: 'négyszög illetve trapéz impulzusok; lehet egyedi, vagy csomagban'
},{
	question: 'Mit nevezünk diadinamikus áramformának?',
	answer: 'Amikor a teljes szinuszhullámok helyett, félhullámok variációival valósítanak meg kezelésket.'
},{
	question: 'Mi a sokkimpulzus kezelés?',
	answer: 'Áramütést mérnek az agyra (ennek hatására törlődik a memória egy része).'
},{
	question: 'Mi az interferencia-áramú kezelés előnye?',
	answer: 'Mélyen lévő izmokat lehet vele tornáztatni.'
},{
	question: 'Hol használnak TENS-kezelést?',
	answer: 'bőrön keresztül'
},{
	question: 'Hogyan szokták kombinálni az elektroterápiás kezeléseket?',
	answer: 'az elektroterápiás ingeráramot kombinálják más hatásokkal (pl vízfürdő, vákuumterápia, ultrahang-terápia)'
},{
	question: 'Mi az elektroakupunktúra?',
	answer: 'Tűt szúrnak az akupunktúrás pontba és áramot vezetnek bele.'
},{
	question: 'Hogyan használják az implantált idegstimulátorokat?',
	answer: 'A vezérlőkészüléket a szívpacemakerekhez hasonló módon helyezik el, többnyire a mellkas felső részén, a bőr alatt. Innen vezetik be az elektródot a kívánt ingerlési ponthoz.'
},{
	question: 'Milyen elektródok használata szokásos az elektromos ingerterápiában?',
	answer: 'gömbelektród, lapelektród, szívelektród'
},{
	question: '.Milyen gyakorisággal kell felülvizsgáltatni a hálózati üzemű elektroterápiás eszközöket?',
	answer: '3 évente'
},{
	question: 'Mire kell ügyelni az elektromos ingerterápiás kezelések során?',
	answer: 'Nem lehet az elektródokat közvetlen bőrfelületre helyezni, mert égési sérülést okoznak. (Ezek elkerülése végett minden esetben köztianyagot kell alkalmazni, mely legalább 1cm-rel nagyobb az elektródnál.)'
},{
	question: 'Ismertesse a szív ingerképzési és ingervezetési rendszerét!',
	answer: 'A szinuszcsomóban jön létre az ingerület, innen tovább megy a pitvarkamrai csomóba, HIS-köteg, Tawara-szárak, Purkinje-rostok'
},{
	question: 'Mi történik a szinuszcsomó ingerképzésének leállásakor?',
	answer: 'beindul a szív kamrai automáciája'
},{
	question: 'Mi az EKG-képe az aszisztóliának?',
	answer: 'egyenes vonal'
},{
	question: 'Miért veszélyes, ha az elektród és a test között az ellenállás jelentősen nagyobb, mint 50 Ω (óhm)?',
	answer: 'A defibrilláló impulzus jelalakja jelentősen megváltozhat, csökkentve annak ingerlő hatását.'
},{
	question: 'Miért szükséges a tárcsaelektródon lévő kisütő gombokat egyszerre megnyomni a kezelőnek?',
	answer: 'Így a kondenzátor feszültsége a tekercsen és korlátozó ellenálláson keresztül kikerül a két tárcsaelektródra, és a mellkason keresztül záródik az áramkör'
},{
	question: 'Mire használják a defibrillátorok szinkronfunkcióját?',
	answer: 'kamrai tachikardia megszűntetésére'
},{
	question: 'Mik az előnyei a bifázisos defibrillátor alkalmazásának?',
	answer: 'kevesebb energiával ugyan olyan hatást ér el; a kondenzátor folyamatos kisütése helyett mindkét fázisban gyors, rövid szaggatott kisütés van'
},{
	question: 'Egyre elterjedtebbek az automata defibrillátorok, miért?',
	answer: 'mert laikusok is tudják használni, programozók írtak rá szoftvert (a gép elvégez méréseket, és elmondja, hogy mit kell csinálni)'
},{
	question: 'Mit nevezünk vulnerábilis szakasznak?',
	answer: 'Az R-hullám utáni 2. egytized másodpercet.'
},{
	question: 'A defibrilláló elektródon miért szükséges a csatoló gél alkalmazása?',
	answer: 'Hogy az elektród és a bőr között jó kontaktus, áramcsatolás legyen.'
},{
	question: 'Ismertesse az impulzusdefibrillátorok fő paramétereit (kondenzátorérték, maximális energia)!',
	answer: 'maximális energia: 360 joule</br>kondenzátorérték: 32 mikrofarad'
},{
	question: 'Ismertesse a defibrillátorok energiaellátási lehetőségeit!',
	answer: 'csak hálózati ellátású; hálózati és beépített ellátású; hálózati és cserélhető akkumlátor egységes; csak cserélhető elemes'
},{
	question: 'Mikor kell belső (intern) defibrillátort alkalmazni?',
	answer: 'két kanálelektróddal nyitott mellkas esetén'
},{
	question: 'Milyen esetben szükséges beültethető defibrillátort alkalmazni?',
	answer: 'ha a készülék és az energiabevitel is a mellkason belül van'
},{
	question: 'Ismertesse a defibrillátorok legfontosabb kezelő szerveit!',
	answer: 'energiabeállító, energiafeltöltés-indító, kisütő gombok, üzemmódválasztó, elvezetésválasztó, EKG-érzékenység beállító, EKG-rajzolásisebesség állító, regisztráló indító-leállító, képrögzítés'
},{
	question: 'Ismertesse az életmentő, sürgősségi defibrillálás legfontosabb lépéseit!',
	answer: 'készülék bekapcsolás, test bezselézése, energiaválasztás, elektródok elhelyezése, sokk leadása'
},{
	question: 'Mikor és milyen körülmények között kell szinkrondefibrillálást alkalmazni?',
	answer: 'Pitvar rendellenes működésekor (de a kamrák jól működnek); az R-hullám utáni 0,1 másodpercben.'
},{
	question: 'Miért tilos defibrilálás közben a beteg megérintése?',
	answer: 'Mert ez esetben az a személy is áramütést szenved, aki megérintette a beteget.'
},{
	question: 'Hogyan lehet megőrizni az akkumlátor működőképességét?',
	answer: 'az akkumlátort teljesen ki kell sütni, majd ismételten feltölteni (ez minden eszköznél így van).'
},{
	question: 'Ismertesse a főbb ingerületképzési hibákat!',
	answer: 'nincs ingerület</br>kisamplitudójú szabálytalan jelalak</br>túl nagy amplitudó</br>az ingerület szabályos, de túl gyors</br>az ingerület szabályos, de túl lassú</br>az ingerület aritmiás</br>az ingerület sztochasztikus'
},{
	question: 'Mit nevezünk bradikardiás zavarnak?',
	answer: 'alacsony szívfrekvencia'
},{
	question: 'Mit nevezünk tachikardiás ritmuszavarnak?',
	answer: 'szapora szívverés(fibrillációhoz vezethet)'
},{
	question: 'Mire való a pacemaker?',
	answer: 'álló szív újraindítására'
},{
	question: 'Elhelyezésük szerint milyen pacemakerek vannak?',
	answer: 'külső</br>beültethető'
},{
	question: 'Ismertesse a mellkasi pacemaker működésének elvét! ',
	answer: 'Észleli az ingerülethiányt vagy az ingerületvezetési hibát és ezt korrigálja megfelelő helyen, megfelelő módon közölt, megfelelő nagyságú elektromos impulzus közlésével'
},{
	question: 'Mikor és milyen körülmények között szükséges a mellkasi pacemakerhasználata?',
	answer: 'rövid ideig, a kardiológiai vagy koronária intenzív osztályra szállítás időtartamára'
},{
	question: 'Ismertesse a mellkasi pacemaker működésének elvét!',
	answer: 'Észleli az ingerülethiányt vagy az ingerületvezetési hibát és ezt korrigálja megfelelő helyen, megfelelő módon közölt, megfelelő nagyságú elektromos impulzus közlésével.'
},{
	question: 'Milyen üzemmódokat ismer?',
	answer: 'fix</br>demand</br>inhibit'
},{
	question: 'Miért előnyös a mozgásvezérelt pacemaker?',
	answer: 'Szabályzása lehetővé teszi azt, hogy a pacemakeres személy a mozgásból származó teljesítmény növelésre egyre gyorsabb szívfrekvenciával egyre nagyobb véráramláshoz jusson'
},{
	question: 'Mi a fix üzemmód lényege?',
	answer: 'A beállított frekvenciának megfelelő gyakorisággal állandóan ingerli a szívet (függetlenül annak saját ingerképzésétől).'
},{
	question: 'Mi a demand üzemmód lényege?',
	answer: 'Csak akkor küld jelet a pacemaker a szívnek, ha annak ingerületképzése leáll és a pacemakeren beállított időtartományon belül nem jelenik meg az EKG markán R-hullám.'
},{
	question: 'Hogyan és milyen elektródát kell használni a mellkasi pacemakernél?',
	answer: 'Folyamatosan tartani a beteg mellkasán a tárcsaelektródot.'
},{
	question: 'Mit nevezünk szabályozott pacemakernek?',
	answer: 'mozgásérzékeny, légzésérzékeny, pH érzékeny, EKG érzékeny, szívcsúcs-gyorsulás érzékeny'
},{
	question: 'Hogyan működik a beépített defibrillátort is tartalmazó pacemaker?',
	answer: 'fibrilláció érzékelésekor sokkoló impulzust ad'
},{
	question: 'Milyen szabványos jelölést alkalmaznak a beültetett pacemakereknél?',
	answer: '(Nemzetközi szabvány által előírt) három betűből álló kóddal.'
},{
	question: 'Ismertesee a pacemakerek betűkódok jelentését!',
	answer: 'O:none</br>A:atrium</br>V:ventricule</br>D:dual</br>S*:egyik</br>I:inhibited</br>T:triggered</br>R:rate modulation'
},{
	question: 'Milyen elektródokat kell használni a mellkasi pacemakernél? ',
	answer: 'tárcsaelektródot (de ezt le lehet cserélni egyszer használatos öntapadós elektródra)'
},{
	question: '.Ismertesse a beültetett pacemakereken állítható paramétereket és azok jellemző értéktartományát!',
	answer: 'impulzus áram (2-20mA)/br>impulzus frkevencia (40-180ütés/perc/br>triggerszont (0-10V)'
},{
	question: '.Ismertesse a külső, invazív pacemakernél a triggerelt üzemmód lényegét!',
	answer: 'Az AV-csomó működését helyettesíteni képes külső megoldást hozhatunk létre.'
},{
	question: '.Mi a frekvenciatartománya a nagyfrekvenciás sebészeti vágókészülékeknek?',
	answer: '50-100 kHz felett (mert ez már nemigazán ingerli az izmokat, bár a 300kHz a tuti)'
},{
	question: 'Milyen felhasználása lehetséges a nagyfrekvenciás sebészeti készülékeknek?',
	answer: 'szövetek vágása (mert olyan magas a hőmérséklete, hogy roncsolja, vágja a szöveteket), vérzéscsillapítás'
},{
	question: 'Milyen hatást használunk ki a vágás közben?',
	answer: 'magas hőmérsékletet (mint minden  más szakmában is)'
},{
	question: 'Miért veszélyes a nagyfrekvenciás szivárgó áram?',
	answer: 'ellenőrizetlen érintkezési felületen hőhatást fejt ki'
},{
	question: 'Milyen anyagbók készülhetnek semleges elektródok?',
	answer: 'Amelyeknek jó a vezetőképessége.'
},{
	question: 'Mik az ideális vágás következményei?',
	answer: 'nem okoz izomkontrakciót</br>karbonalizálási tartomány nélkül gőzölögteti el a szöveteket'
},{
	question: 'Mit nevezünk monopoláris nagyfrekvenciás vágásnak?',
	answer: 'A kialakuló villamos tér a levegőt ionizálja („begyújtja”), az ív kialakul, a szövet elpárologtatása megindul.'
},{
	question: 'Mi a megengedett legnagyobb kiadható teljesítmény monopoláris üzemmódban?',
	answer: '400W'
},{
	question: 'Hová kell elhelyezni a semleges elektródot? -',
	answer: 'a kivezetési helyre'
},{
	question: 'Mit nevezünk bipoláris technikának? ',
	answer: 'Két szárával elszigetelt csipeszt a nagyfrekvenciás generátorhoz kötve és a működtető lábpedált bekapcsolva, az áramkör a csipesz két vége között lévő anyagon, a csipesszel megfogott szöveten keresztül záródik.'
},{
	question: 'Mi okozhat endogén felégést?',
	answer: 'Amikor a vágási vagy koagulálási területet vagy környezetét alkohollal tisztítják (Ugyanis az elektromos ívvel járó vágás vagy koagulálás begyújtja a színtelen lánggal égő vagy éghető anyagot.)'
},{
	question: 'Melyek a befolyásoló tényezői a vágási sebességnek?',
	answer: 'Az orvos milyen gyorsan mozgatja az elektródot, mekkora teljesítményt állított be.'
},{
	question: 'Milyen elektródokat ismer?',
	answer: 'semleges elektród</br>gömbelektród</br>gumielektród</br>fém elektród</br>ólom elektród</br>egyszer használatos elektród'
},{
	question: 'Milyen hangjelzések vannak a nagyfrekvenciás vágókészülékeknél?',
	answer: 'a vágás tiszta sinusos hang</br>a koagulálás legtöbbször alternáló két sinusos hang váltakozva'
},{
	question: 'Mit nevezünk koaguláló hozzákeverésnek, és hol használjuk?',
	answer: 'A vágó áramhoz vérzéscsillapító áramformát adnak, és ott használják, ahol 1 elektróddal kell mindent megoldani.'
},{
	question: 'Ismertesse a bipoláris technikánál az áramutakat!',
	answer: 'a csipesz két lapja között folyik az áram'
},{
	question: 'Mikor és miért kell gumielektródot cserélni?',
	answer: '2-3 évente, mert deformálódik, rugalmassága csökken, villamos vezetési paramétere erősen leromolhat (minden használat után).'
},{
	question: 'Hogyan okozhat felégést, ha beteg hozzáér a fém műtőasztalhoz?',
	answer: 'Ha a beteg hozzáér a műtőasztal földelt fémrészének egy pontjához (minél kisebb pontjához), jelentős nagyfrekvenciás áram távozik a testből a fém alkatrészen keresztül a földelő hálózatba (a kis felület miatt nagy az áramsűrűség és ez gyorsan átégeti a fémmel érintkező bőrrészt).'
},{
	question: 'Mikor jön létre a teljesítmény túladagolás?',
	answer: 'elgőzölögtetéshez/koaguláláshoz szükséges áramnál nagyobbat alkalmaznak.'
}
];

function init() {
	const list = document.getElementById('questions'); 
	
	questionAnswers.forEach(item => {
		let option = document.createElement('option');
		option.value = item.question;
		list.appendChild(option);
	});
};

function searchAnswer() {
	const div = document.getElementById('answer');
	var question = document.getElementById('question').value;
	questionAnswers.forEach(item => {
		if (item.question == question) {
			document.getElementById('answer').innerHTML = item.answer;			
		}
	});
}

function reset() {
	document.getElementById('question').value = '';
	document.getElementById('answer').innerHTML = '';
}