// =====================
// 72 MICROSEASONS DATA
// =====================
const SEASONS = [
  // ---- SPRING ----
  { id:1,  kanji:"東風解凍", romaji:"Harukaze kōri wo toku",      en:"East winds melt the ice",                  jp:"東風が氷を解かす",           start:"02-04", end:"02-08", season:"spring", macro:"Risshun",  macroJp:"立春" },
  { id:2,  kanji:"黄鶯睍睆", romaji:"Uguisu naku",                en:"Bush warblers sing",                       jp:"鶯が山里で鳴き始める",       start:"02-09", end:"02-13", season:"spring", macro:"Risshun",  macroJp:"立春" },
  { id:3,  kanji:"魚上氷",   romaji:"Sakana kōri wo izuru",       en:"Fish emerge from the ice",                 jp:"魚が氷の下から泳ぎ出る",     start:"02-14", end:"02-18", season:"spring", macro:"Risshun",  macroJp:"立春" },
  { id:4,  kanji:"土脉潤起", romaji:"Tsuchi no shō uruoi okoru",  en:"Rain moistens the soil",                   jp:"雨が大地を潤し始める",       start:"02-19", end:"02-23", season:"spring", macro:"Usui",     macroJp:"雨水" },
  { id:5,  kanji:"霞始靆",   romaji:"Kasumi hajimete tanabiku",   en:"Mist starts to linger",                    jp:"霞がたなびき始める",         start:"02-24", end:"02-28", season:"spring", macro:"Usui",     macroJp:"雨水" },
  { id:6,  kanji:"草木萌動", romaji:"Sōmoku mebae izuru",         en:"Grass and trees begin to sprout",          jp:"草や木が芽吹き始める",       start:"03-01", end:"03-05", season:"spring", macro:"Usui",     macroJp:"雨水" },
  { id:7,  kanji:"蟄虫啓戸", romaji:"Sugomori mushi to wo hiraku",en:"Hibernating insects emerge",               jp:"冬眠中の虫が地中から出る",   start:"03-06", end:"03-10", season:"spring", macro:"Keichitsu",macroJp:"啓蟄" },
  { id:8,  kanji:"桃始笑",   romaji:"Momo hajimete saku",         en:"Peach trees begin to bloom",               jp:"桃の花が咲き始める",         start:"03-11", end:"03-15", season:"spring", macro:"Keichitsu",macroJp:"啓蟄" },
  { id:9,  kanji:"菜虫化蝶", romaji:"Namushi chō to naru",        en:"Caterpillars become butterflies",          jp:"青虫が蝶に変わる",           start:"03-16", end:"03-20", season:"spring", macro:"Keichitsu",macroJp:"啓蟄" },
  { id:10, kanji:"雀始巣",   romaji:"Suzume hajimete sukū",       en:"Sparrows start to nest",                   jp:"雀が巣を作り始める",         start:"03-21", end:"03-25", season:"spring", macro:"Shunbun",  macroJp:"春分" },
  { id:11, kanji:"桜始開",   romaji:"Sakura hajimete saku",       en:"Cherry blossoms begin to bloom",           jp:"桜の花が咲き始める",         start:"03-26", end:"03-30", season:"spring", macro:"Shunbun",  macroJp:"春分" },
  { id:12, kanji:"雷乃発声", romaji:"Kaminari sunawachi koe wo hassu",en:"Distant thunder sounds",               jp:"遠くで雷が鳴り始める",       start:"03-31", end:"04-04", season:"spring", macro:"Shunbun",  macroJp:"春分" },
  { id:13, kanji:"玄鳥至",   romaji:"Tsubame kitaru",             en:"Swallows arrive",                          jp:"燕が南からやってくる",       start:"04-05", end:"04-09", season:"spring", macro:"Seimei",   macroJp:"清明" },
  { id:14, kanji:"鴻雁北",   romaji:"Kōgan kaeru",                en:"Wild geese fly north",                     jp:"雁が北へと飛んでいく",       start:"04-10", end:"04-14", season:"spring", macro:"Seimei",   macroJp:"清明" },
  { id:15, kanji:"虹始見",   romaji:"Niji hajimete arawaru",      en:"First rainbows appear",                    jp:"初めて虹が見られる",         start:"04-15", end:"04-19", season:"spring", macro:"Seimei",   macroJp:"清明" },
  { id:16, kanji:"葭始生",   romaji:"Ashi hajimete shōzu",        en:"Reeds begin to sprout",                    jp:"葦の芽が出始める",           start:"04-20", end:"04-24", season:"spring", macro:"Kokuu",    macroJp:"穀雨" },
  { id:17, kanji:"霜止出苗", romaji:"Shimo yamite nae izuru",     en:"Frost ends, rice seedlings grow",          jp:"霜が止み稲の苗が育つ",       start:"04-25", end:"04-29", season:"spring", macro:"Kokuu",    macroJp:"穀雨" },
  { id:18, kanji:"牡丹華",   romaji:"Botan hana saku",            en:"Peonies bloom",                            jp:"牡丹の花が咲く",             start:"04-30", end:"05-04", season:"spring", macro:"Kokuu",    macroJp:"穀雨" },
  // ---- SUMMER ----
  { id:19, kanji:"蛙始鳴",   romaji:"Kaeru hajimete naku",        en:"Frogs start singing",                      jp:"蛙が鳴き始める",             start:"05-05", end:"05-09", season:"summer", macro:"Rikka",    macroJp:"立夏" },
  { id:20, kanji:"蚯蚓出",   romaji:"Mimizu izuru",               en:"Earthworms appear",                        jp:"ミミズが地面に出てくる",     start:"05-10", end:"05-14", season:"summer", macro:"Rikka",    macroJp:"立夏" },
  { id:21, kanji:"竹笋生",   romaji:"Takenoko shōzu",             en:"Bamboo shoots emerge",                     jp:"竹の子が生え出る",           start:"05-15", end:"05-20", season:"summer", macro:"Rikka",    macroJp:"立夏" },
  { id:22, kanji:"蚕起食桑", romaji:"Kaiko okite kuwa wo hamu",   en:"Silkworms feast on mulberry",              jp:"蚕が桑の葉を食べる",         start:"05-21", end:"05-25", season:"summer", macro:"Shōman",   macroJp:"小満" },
  { id:23, kanji:"紅花栄",   romaji:"Benibana sakau",             en:"Safflowers bloom",                         jp:"紅花が咲き誇る",             start:"05-26", end:"05-30", season:"summer", macro:"Shōman",   macroJp:"小満" },
  { id:24, kanji:"麦秋至",   romaji:"Mugi no toki itaru",         en:"Wheat ripens",                             jp:"麦が実り収穫の時が来る",     start:"05-31", end:"06-05", season:"summer", macro:"Shōman",   macroJp:"小満" },
  { id:25, kanji:"蟷螂生",   romaji:"Kamakiri shōzu",             en:"Praying mantises hatch",                   jp:"カマキリが生まれる",         start:"06-06", end:"06-10", season:"summer", macro:"Bōshu",    macroJp:"芒種" },
  { id:26, kanji:"腐草為蛍", romaji:"Kusaretaru kusa hotaru to naru",en:"Fireflies emerge",                     jp:"草が腐って蛍になる",         start:"06-11", end:"06-15", season:"summer", macro:"Bōshu",    macroJp:"芒種" },
  { id:27, kanji:"梅子黄",   romaji:"Ume no mi kibamu",           en:"Plums turn yellow",                        jp:"梅の実が黄色くなる",         start:"06-16", end:"06-20", season:"summer", macro:"Bōshu",    macroJp:"芒種" },
  { id:28, kanji:"乃東枯",   romaji:"Natsukarekusa karuru",       en:"Self-heal withers",                        jp:"夏枯草が枯れる",             start:"06-21", end:"06-26", season:"summer", macro:"Geshi",    macroJp:"夏至" },
  { id:29, kanji:"菖蒲華",   romaji:"Ayame hana saku",            en:"Irises bloom",                             jp:"菖蒲の花が咲く",             start:"06-27", end:"07-01", season:"summer", macro:"Geshi",    macroJp:"夏至" },
  { id:30, kanji:"半夏生",   romaji:"Hange shōzu",                en:"Crow-dipper sprouts",                      jp:"半夏が生える",               start:"07-02", end:"07-06", season:"summer", macro:"Geshi",    macroJp:"夏至" },
  { id:31, kanji:"温風至",   romaji:"Atsukaze itaru",             en:"Warm winds arrive",                        jp:"温かい風が吹く",             start:"07-07", end:"07-11", season:"summer", macro:"Shōsho",   macroJp:"小暑" },
  { id:32, kanji:"蓮始開",   romaji:"Hasu hajimete hiraku",       en:"Lotus flowers begin to bloom",             jp:"蓮の花が咲き始める",         start:"07-12", end:"07-16", season:"summer", macro:"Shōsho",   macroJp:"小暑" },
  { id:33, kanji:"鷹乃学習", romaji:"Taka sunawachi waza wo narau",en:"Young hawks learn to fly",                jp:"鷹が飛ぶ技を覚える",         start:"07-17", end:"07-22", season:"summer", macro:"Shōsho",   macroJp:"小暑" },
  { id:34, kanji:"桐始結花", romaji:"Kiri hajimete hana wo musubu",en:"Paulownia produces seeds",               jp:"桐が実を結び始める",         start:"07-23", end:"07-28", season:"summer", macro:"Taisho",   macroJp:"大暑" },
  { id:35, kanji:"土潤溽暑", romaji:"Tsuchi uruoite mushi atsushi",en:"Earth is hot and damp",                  jp:"大地が湿り蒸し暑くなる",     start:"07-29", end:"08-02", season:"summer", macro:"Taisho",   macroJp:"大暑" },
  { id:36, kanji:"大雨時行", romaji:"Taiu tokidoki furu",         en:"Great rains sometimes fall",               jp:"大雨が時折降る",             start:"08-03", end:"08-07", season:"summer", macro:"Taisho",   macroJp:"大暑" },
  // ---- AUTUMN ----
  { id:37, kanji:"涼風至",   romaji:"Suzukaze itaru",             en:"Cool breezes arrive",                      jp:"涼しい風が吹いてくる",       start:"08-08", end:"08-12", season:"autumn", macro:"Risshū",   macroJp:"立秋" },
  { id:38, kanji:"寒蝉鳴",   romaji:"Higurashi naku",             en:"Evening cicadas sing",                     jp:"夕暮れにヒグラシが鳴く",     start:"08-13", end:"08-17", season:"autumn", macro:"Risshū",   macroJp:"立秋" },
  { id:39, kanji:"蒙霧升降", romaji:"Fukaki kiri matō",           en:"Dense fog descends",                       jp:"深い霧が立ち込める",         start:"08-18", end:"08-22", season:"autumn", macro:"Risshū",   macroJp:"立秋" },
  { id:40, kanji:"綿柎開",   romaji:"Wata no hana shibe hiraku",  en:"Cotton flowers bloom",                     jp:"綿の花が開く",               start:"08-23", end:"08-27", season:"autumn", macro:"Shosho",   macroJp:"処暑" },
  { id:41, kanji:"天地始粛", romaji:"Tenchihajimete samushi",     en:"Heat begins to subside",                   jp:"天地が冷やかになり始める",   start:"08-28", end:"09-01", season:"autumn", macro:"Shosho",   macroJp:"処暑" },
  { id:42, kanji:"禾乃登",   romaji:"Kokumono sunawachi minoru",  en:"Rice ripens",                              jp:"稲が実る",                   start:"09-02", end:"09-07", season:"autumn", macro:"Shosho",   macroJp:"処暑" },
  { id:43, kanji:"草露白",   romaji:"Kusa no tsuyu shiroshi",     en:"Dew glistens white on grass",              jp:"草に白い露が宿る",           start:"09-08", end:"09-12", season:"autumn", macro:"Hakuro",   macroJp:"白露" },
  { id:44, kanji:"鶺鴒鳴",   romaji:"Sekirei naku",               en:"Wagtails sing",                            jp:"鶺鴒が鳴く",                 start:"09-13", end:"09-17", season:"autumn", macro:"Hakuro",   macroJp:"白露" },
  { id:45, kanji:"玄鳥去",   romaji:"Tsubame saru",               en:"Swallows depart",                          jp:"燕が南へ旅立つ",             start:"09-18", end:"09-22", season:"autumn", macro:"Hakuro",   macroJp:"白露" },
  { id:46, kanji:"雷乃収声", romaji:"Kaminari sunawachi koe wo osamu",en:"Thunder ceases",                      jp:"雷が鳴り止む",               start:"09-23", end:"09-27", season:"autumn", macro:"Shūbun",   macroJp:"秋分" },
  { id:47, kanji:"蟄虫坯戸", romaji:"Mushi kakurete to wo fusagu",en:"Insects seal their burrows",              jp:"虫が穴を閉じる",             start:"09-28", end:"10-02", season:"autumn", macro:"Shūbun",   macroJp:"秋分" },
  { id:48, kanji:"水始涸",   romaji:"Mizu hajimete karuru",       en:"Farmers drain rice fields",                jp:"水が涸れ始める",             start:"10-03", end:"10-07", season:"autumn", macro:"Shūbun",   macroJp:"秋分" },
  { id:49, kanji:"鴻雁来",   romaji:"Kōgan kitaru",               en:"Wild geese arrive",                        jp:"雁が南からやってくる",       start:"10-08", end:"10-12", season:"autumn", macro:"Kanro",    macroJp:"寒露" },
  { id:50, kanji:"菊花開",   romaji:"Kiku no hana hiraku",        en:"Chrysanthemums bloom",                     jp:"菊の花が咲く",               start:"10-13", end:"10-17", season:"autumn", macro:"Kanro",    macroJp:"寒露" },
  { id:51, kanji:"蟋蟀在戸", romaji:"Kirigirisu tobari ni ari",   en:"Crickets chirp near the door",             jp:"コオロギが戸口で鳴く",       start:"10-18", end:"10-22", season:"autumn", macro:"Kanro",    macroJp:"寒露" },
  { id:52, kanji:"霜始降",   romaji:"Shimo hajimete furu",        en:"First frost falls",                        jp:"霜が初めて降りる",           start:"10-23", end:"10-27", season:"autumn", macro:"Sōkō",     macroJp:"霜降" },
  { id:53, kanji:"霎時施",   romaji:"Kosame tokidoki furu",       en:"Light rain falls occasionally",            jp:"小雨が時々降る",             start:"10-28", end:"11-01", season:"autumn", macro:"Sōkō",     macroJp:"霜降" },
  { id:54, kanji:"楓蔦黄",   romaji:"Momiji tsuta kibamu",        en:"Maples and ivy turn yellow",               jp:"紅葉と蔦が黄色くなる",       start:"11-02", end:"11-06", season:"autumn", macro:"Sōkō",     macroJp:"霜降" },
  // ---- WINTER ----
  { id:55, kanji:"山茶始開", romaji:"Tsubaki hajimete hiraku",    en:"Camellias begin to bloom",                 jp:"椿の花が咲き始める",         start:"11-07", end:"11-11", season:"winter", macro:"Rittō",    macroJp:"立冬" },
  { id:56, kanji:"地始凍",   romaji:"Chi hajimete kōru",          en:"Earth begins to freeze",                   jp:"大地が凍り始める",           start:"11-12", end:"11-16", season:"winter", macro:"Rittō",    macroJp:"立冬" },
  { id:57, kanji:"金盞香",   romaji:"Kinsenka saku",              en:"Daffodils bloom",                          jp:"水仙が香り始める",           start:"11-17", end:"11-21", season:"winter", macro:"Rittō",    macroJp:"立冬" },
  { id:58, kanji:"虹蔵不見", romaji:"Niji kakurete miezu",        en:"Rainbows hide",                            jp:"虹が見えなくなる",           start:"11-22", end:"11-26", season:"winter", macro:"Shōsetsu",  macroJp:"小雪" },
  { id:59, kanji:"朔風払葉", romaji:"Kitakaze konoha wo harau",   en:"North winds blow leaves",                  jp:"北風が木の葉を払い落とす",   start:"11-27", end:"12-01", season:"winter", macro:"Shōsetsu",  macroJp:"小雪" },
  { id:60, kanji:"橘始黄",   romaji:"Tachibana hajimete kibamu",  en:"Citrus fruits turn yellow",                jp:"橘が黄色くなり始める",       start:"12-02", end:"12-06", season:"winter", macro:"Shōsetsu",  macroJp:"小雪" },
  { id:61, kanji:"閉塞成冬", romaji:"Sora samuku fuyu to naru",   en:"Cold sets in, winter begins",              jp:"寒さが空を閉じ、冬となる",   start:"12-07", end:"12-11", season:"winter", macro:"Taisetsu",  macroJp:"大雪" },
  { id:62, kanji:"熊蟄穴",   romaji:"Kuma ana ni komoru",         en:"Bears hibernate",                          jp:"熊が穴にこもる",             start:"12-12", end:"12-16", season:"winter", macro:"Taisetsu",  macroJp:"大雪" },
  { id:63, kanji:"鱖魚群",   romaji:"Sake no uo muragaru",        en:"Salmon gather in rivers",                  jp:"鮭が群れをなす",             start:"12-17", end:"12-21", season:"winter", macro:"Taisetsu",  macroJp:"大雪" },
  { id:64, kanji:"乃東生",   romaji:"Natsukarekusa shōzu",        en:"Self-heal sprouts",                        jp:"夏枯草が芽を出す",           start:"12-22", end:"12-26", season:"winter", macro:"Tōji",     macroJp:"冬至" },
  { id:65, kanji:"麋角解",   romaji:"Sawashika no tsuno otsuru",  en:"Deer shed their antlers",                  jp:"鹿が角を落とす",             start:"12-27", end:"12-31", season:"winter", macro:"Tōji",     macroJp:"冬至" },
  { id:66, kanji:"雪下出麦", romaji:"Yuki watarite mugi nobiru",  en:"Wheat sprouts under snow",                 jp:"雪の下で麦が芽を出す",       start:"01-01", end:"01-04", season:"winter", macro:"Tōji",     macroJp:"冬至" },
  { id:67, kanji:"芹乃栄",   romaji:"Seri sunawachi sakau",       en:"Parsley flourishes",                       jp:"芹が盛んに生育する",         start:"01-05", end:"01-09", season:"winter", macro:"Shōkan",   macroJp:"小寒" },
  { id:68, kanji:"水泉動",   romaji:"Shimizu atataka wo fukumu",  en:"Springs thaw underground",                 jp:"地中の水がほのかに動く",     start:"01-10", end:"01-14", season:"winter", macro:"Shōkan",   macroJp:"小寒" },
  { id:69, kanji:"雉始雊",   romaji:"Kiji hajimete naku",         en:"Pheasants start to call",                  jp:"雉が鳴き始める",             start:"01-15", end:"01-19", season:"winter", macro:"Shōkan",   macroJp:"小寒" },
  { id:70, kanji:"款冬華",   romaji:"Fuki no hana saku",          en:"Butterbur sprouts",                        jp:"フキノトウが花を咲かせる",   start:"01-20", end:"01-24", season:"winter", macro:"Daikan",   macroJp:"大寒" },
  { id:71, kanji:"水沢腹堅", romaji:"Sawamizu kōri tsumeru",      en:"Ice thickens in streams",                  jp:"沢の氷が厚くなる",           start:"01-25", end:"01-29", season:"winter", macro:"Daikan",   macroJp:"大寒" },
  { id:72, kanji:"鶏始乳",   romaji:"Niwatori hajimete toya ni tsuku",en:"Hens begin to lay eggs",              jp:"鶏が卵を産み始める",         start:"01-30", end:"02-03", season:"winter", macro:"Daikan",   macroJp:"大寒" },
];

// =====================
// INTERNATIONALISATION
// =====================
const I18N = {
  en: {
    nav_download: "Get the App",
    hero_eyebrow: "iPhone App · 72 Microseasons Widget",
    hero_title: '<em>72 microseasons</em><br>on your home screen',
    hero_title_jp: "七十二候を、毎日の窓辺に",
    hero_desc: "Japan has 72 seasons. Madobe delivers them to your iPhone home screen as a cute miniature scene that changes every day.",
    hero_download: "Download on App Store",
    hero_explore: "Explore all 72 seasons",
    today_label: "Today's Season",
    today_tag: "\u2190 Today",
    philosophy_quote: "\u201cThe Japanese calendar doesn\u2019t divide the year into four seasons \u2014 it listens to it in 72 distinct voices.\u201d",
    philosophy_note: "The 72 microseasons are an old calendar that captures subtle shifts in nature across the year.",
    philosophy_attr_name: "Madobe",
    philosophy_attr_suffix: " — observing the year, five days at a time",
    seasons_label: "The Calendar",
    seasons_title: "All 72 Microseasons",
    seasons_body: "Rooted in ancient Chinese astronomy and refined in Japan, the 七十二候 (shichijūnikō) divides the solar year into 24 solar terms, each split into three five-day microseasons — 72 in total, each with a poetic name describing what is happening in nature right now.",
    tab_all: "All", tab_spring: "Spring 春", tab_summer: "Summer 夏", tab_autumn: "Autumn 秋", tab_winter: "Winter 冬",
    features_label: "Daily Window",
    features_title: "A piece of the season, every day",
    features_body: "Not a notification. A quiet window on your home screen — a new miniature scene each day, with optional seasonal reading in Pro.",
    feat1_title: "A New Miniature Scene Every Day", feat1_body: "365 days, 365 scenes. The shichijūnikō shifts every five days, and the miniature on your home screen changes with it — a fresh moment each morning.",
    feat2_title: "A Small Seasonal Column Each Day", feat2_body: "In Pro, each day includes a short seasonal note tied to the current kō, along with food in season, annual events, and a haiku kigo.",
    feat3_title: "Food, Festivals, Kigo", feat3_body: "Seasonal food, annual events, and haiku kigo appear as part of that daily column — a small almanac for everyday life.",
    feat4_title: "Bilingual Home Screen Widget", feat4_body: "Available in small, medium, and large sizes. Place it anywhere on your home screen and view kanji, reading, and English translation at a glance.",
    plans_label: "Plans",
    plans_title: "Free, with a quiet upgrade",
    plans_body: "The daily miniature scene is free. Madobe Pro adds seasonal columns, Japanese window frames, scene themes, wallpaper export, and removes ads.",
    plan_free_name: "Free", plan_free_price: "¥0",
    plan_free_f1: "A new miniature scene every day",
    plan_free_f2: "Today's microseason",
    plan_free_f3: "24 solar terms and 72 microseasons",
    plan_free_f4: "Home screen widget (3 sizes)",
    plan_free_f5: "Bilingual JP / EN",
    plan_pro_name: "Pro", plan_pro_price: "$1.99", plan_pro_price_suffix: " / month",
    plan_pro_price_alt: "or $17.99 / year — save 22%",
    plan_pro_f1: "Japanese window frames — round, lattice, shōji",
    plan_pro_f2: "Scene themes — photoreal 3D, ukiyo-e, and more",
    plan_pro_f3: "Window dressing — washi, hinoki, lacquer black, seasonal editions",
    plan_pro_f5: "Daily seasonal column, food, festivals & kigo",
    plan_pro_f6: "Export scenes as wallpaper",
    plan_pro_f7: "No ads",
    cta_title: "Make room for the season on your home screen",
    cta_body: "Download Madobe and enjoy the microseason of this very moment right on your home screen.",
    cta_btn: "Download on the App Store",
    cta_note: "iPhone · iOS 16+",
    faq_label: "FAQ",
    faq_title: "Common questions",
    faq_q1: "What is Madobe?",
    faq_a1: "Madobe is an iPhone home screen widget app for Japan's 72 microseasons (七十二候 / shichijūnikō). It delivers a small miniature scene that changes every day, alongside today's microseason name in kanji, romaji, and English.",
    faq_q2: "What are Japan's 72 microseasons (七十二候)?",
    faq_a2: "An ancient calendar that divides the solar year into 24 solar terms (二十四節気), each split into three five-day microseasons — 72 in total. Each kō has a poetic name describing what is happening in nature at that moment, e.g. \"Cherry blossoms begin to bloom\" (桜始開) or \"Mist starts to linger\" (霞始靆).",
    faq_q3: "How is Madobe different from a weather app?",
    faq_a3: "A weather app tells you today's temperature and forecast. Madobe tells you what part of the year you are living in — a slower, cultural sense of time rooted in Japanese seasonal tradition. The two complement rather than replace each other.",
    faq_q4: "How is Madobe different from a calendar app?",
    faq_a4: "A calendar app manages your appointments. Madobe doesn't manage anything — it's a quiet ambient widget showing the current Japanese microseason, with optional daily reading and seasonal kigo. No to-dos, no events, no notifications.",
    faq_q5: "What does the home screen widget actually show?",
    faq_a5: "A miniature scene illustrating today's microseason, plus the kanji name, romaji reading, and English translation. Available in small, medium, and large widget sizes for the iOS home screen.",
    faq_q6: "Is Madobe free? What does Pro add?",
    faq_a6: "Yes — the daily microseason widget is free. Madobe Pro ($1.99 / month or $17.99 / year) adds Japanese window frames (round, lattice, shōji), scene themes (photoreal 3D, ukiyo-e), the daily seasonal column with food / festivals / kigo, time travel through past scenes, wallpaper export, and removes ads.",
    faq_q7: "What languages and devices are supported?",
    faq_a7: "Full English and Japanese — kanji, romaji, and a poetic English translation for every microseason. iPhone running iOS 16 or later.",
    faq_q8: "How often does the scene change?",
    faq_a8: "The microseason itself shifts every five days (24 solar terms × 3 = 72). The scene art updates daily within that — 365 unique scenes a year — so each morning shows a slightly different moment.",
    facts_label: "Facts",
    facts_title: "About Madobe",
    facts_k_name: "App name",
    facts_k_category: "Category", facts_v_category: "Lifestyle · Calendar · Home Screen Widget",
    facts_k_platform: "Platform",
    facts_k_theme: "Theme", facts_v_theme: "Japan's 72 microseasons (七十二候 / shichijūnikō)",
    facts_k_languages: "Languages", facts_v_languages: "English & Japanese",
    facts_k_pricing: "Pricing", facts_v_pricing: "Free · Pro $1.99/month or $17.99/year",
    facts_k_best: "Best for", facts_v_best: "People interested in Japanese culture, seasonal living, calm aesthetic widgets, and anyone who wants a richer sense of the year on their home screen.",
    facts_k_notfor: "Not for", facts_v_notfor: "Task management, weather forecasting, or scheduling — Madobe is intentionally not a calendar app.",
    facts_k_developer: "Developer",
    facts_k_appstore: "App Store",
    footer_made: "made with care by",
    footer_privacy: "Privacy Policy", footer_terms: "Terms of Use",
    footer_appstore: "App Store",
  },
  jp: {
    nav_download: "ダウンロード",
    hero_eyebrow: "iPhoneアプリ · 七十二候ウィジェット",
    hero_title: '<em>七十二候を</em><br>毎日のホーム画面に',
    hero_title_jp: "七十二候を、毎日の窓辺に",
    hero_desc: "日本には、72の季節がある。Madobeは、5日ごとに移り変わる七十二候を、毎日違うかわいいミニチュアの情景にしてホーム画面に届けます。",
    hero_download: "App Storeでダウンロード",
    hero_explore: "七十二候を見る",
    today_label: "今日の候",
    today_tag: "← 今日の候",
    philosophy_quote: "「日本の暦には、春夏秋冬の四季だけでなく、72もの細やかな季節の移ろいがあります。」",
    philosophy_note: "七十二候は、一年の自然の移ろいを細やかに映し出す、古くからのこよみです。",
    philosophy_attr_name: "窓辺",
    philosophy_attr_suffix: " — 五日ごとに、一年を見つめる",
    seasons_label: "こよみ",
    seasons_title: "七十二候のすべて",
    seasons_body: "七十二候（しちじゅうにこう）は、中国にルーツを持ち、日本で育まれてきた季節のこよみです。二十四節気をさらに三つずつに分けた七十二の候には、その時季の自然を映した詩的な名前がついています。",
    tab_all: "すべて", tab_spring: "春", tab_summer: "夏", tab_autumn: "秋", tab_winter: "冬",
    features_label: "毎日の窓辺",
    features_title: "毎日の暮らしに、季節をひとつ",
    features_body: "通知ではなく、ホーム画面にそっとひらく小さな窓。毎日変わるミニチュアの情景を、ふとした瞬間に眺められます。季節のコラムは Pro で楽しめます。",
    feat1_title: "毎日変わるミニチュアの情景", feat1_body: "365日、毎日ちがう風景。七十二候が5日ごとにめぐるのに合わせて、ホーム画面のミニチュアも少しずつ表情を変えていきます。",
    feat2_title: "その日の小さな季節のコラム", feat2_body: "Pro では、その日の候にまつわる短いコラムを毎日ひとつ楽しめます。旬の食べ物、季節の行事、俳句の季語などもあわせて読めます。",
    feat3_title: "旬の食べ物・行事・季語", feat3_body: "旬の食べ物、季節の行事、俳句の季語を日替わりで紹介。毎日のコラムとあわせて、日本の一年を身近に感じられる小さな歳時記です。",
    feat4_title: "日英対応のホーム画面ウィジェット", feat4_body: "小・中・大の3サイズに対応。ホーム画面の好きな場所に置けて、漢字・読み・英訳までひと目で楽しめます。",
    plans_label: "プラン",
    plans_title: "まずは無料で。もっと楽しむなら Pro",
    plans_body: "毎日のミニチュア情景は無料で楽しめます。Madobe Proでは、季節のコラム、和風の窓枠、情景テーマ、壁紙保存などが使えるようになり、広告も表示されません。",
    plan_free_name: "無料", plan_free_price: "¥0",
    plan_free_f1: "毎日変わるミニチュア情景",
    plan_free_f2: "今日の七十二候",
    plan_free_f3: "二十四節気と七十二候",
    plan_free_f4: "ホーム画面ウィジェット（3サイズ）",
    plan_free_f5: "日本語・英語対応",
    plan_pro_name: "Pro", plan_pro_price: "¥300", plan_pro_price_suffix: " / 月",
    plan_pro_price_alt: "年額 ¥2,800（22%お得）",
    plan_pro_f1: "和風の窓枠 — 丸窓・格子窓・障子窓",
    plan_pro_f2: "情景テーマ — 写実3D・浮世絵テイストなど",
    plan_pro_f3: "窓のしつらえ — 和紙・ひのき・漆黒・季節限定",
    plan_pro_f4: "タイムトラベル — 過去の情景を振り返る",
    plan_pro_f5: "季節のコラム・旬の食べ物・行事・季語",
    plan_pro_f6: "情景を壁紙として保存",
    plan_pro_f7: "広告非表示",
    cta_title: "ホーム画面に、季節の余白を",
    cta_body: "Madobeをダウンロードして、今この瞬間の七十二候をホーム画面で楽しんでみてください。",
    cta_btn: "App Storeでダウンロード",
    cta_note: "iPhone · iOS 16以上",
    faq_label: "よくある質問",
    faq_title: "よくある質問",
    faq_q1: "Madobeはどんなアプリですか？",
    faq_a1: "Madobeは、日本の七十二候（しちじゅうにこう）をiPhoneのホーム画面に届けるウィジェットアプリです。毎日変わる小さなミニチュアの情景と、その日の候の漢字・読み・英訳を、ホーム画面でそっと楽しめます。",
    faq_q2: "七十二候（しちじゅうにこう）とは？",
    faq_a2: "古来の日本の暦で、一年を二十四節気に分け、それぞれをさらに3つ、合わせて72の候に分けたもの。各候には、その時季の自然を映した詩的な名前がついています。例：「桜始開（さくらはじめてひらく）」「霞始靆（かすみはじめてたなびく）」など。",
    faq_q3: "天気アプリと何が違いますか？",
    faq_a3: "天気アプリは今日の気温や天気を教えてくれます。Madobeは「いま、一年のどこを生きているか」を教えてくれる、もっとゆっくりした文化的な時間軸のアプリです。両者は競合せず、補い合う関係です。",
    faq_q4: "カレンダーアプリと何が違いますか？",
    faq_a4: "カレンダーアプリは予定を管理するためのもの。Madobeは何も管理しません。ホーム画面に置かれた静かな窓として、いまの七十二候と、Proなら季節の読み物・季語をそっと見せるだけ。タスクも予定も通知もありません。",
    faq_q5: "ウィジェットには何が表示されますか？",
    faq_a5: "今日の候を表すミニチュアの情景と、漢字名・読み仮名・英訳。iOSホーム画面で、小・中・大の3サイズから選んで配置できます。",
    faq_q6: "無料で使えますか？Proには何が含まれますか？",
    faq_a6: "はい、毎日のミニチュアウィジェットは無料です。Madobe Pro（月額¥300、または年額¥2,800）では、和風の窓枠（丸窓・格子窓・障子窓）、情景テーマ（写実3D・浮世絵テイストなど）、季節のコラム（旬の食べ物・行事・季語）、過去の情景を振り返るタイムトラベル、壁紙エクスポートが解放され、広告も非表示になります。",
    faq_q7: "対応言語と対応機種は？",
    faq_a7: "完全に日本語と英語に対応。すべての候について、漢字・読み仮名・詩的な英訳が見られます。対応機種はiOS 16以上のiPhone。",
    faq_q8: "情景はどれくらいの頻度で変わりますか？",
    faq_a8: "七十二候そのものは5日ごとに移り変わります（二十四節気 × 3 = 72）。情景の絵柄はその中でも毎日少しずつ変化し、年間で365通りに。毎朝、少し違う一瞬が訪れます。",
    facts_label: "概要",
    facts_title: "Madobeについて",
    facts_k_name: "アプリ名",
    facts_k_category: "カテゴリ", facts_v_category: "ライフスタイル · 暦 · ホーム画面ウィジェット",
    facts_k_platform: "プラットフォーム",
    facts_k_theme: "テーマ", facts_v_theme: "日本の七十二候（しちじゅうにこう）",
    facts_k_languages: "対応言語", facts_v_languages: "日本語・英語",
    facts_k_pricing: "価格", facts_v_pricing: "無料 · Pro 月額¥300 または年額¥2,800",
    facts_k_best: "向いている方", facts_v_best: "日本の文化や季節感に関心がある方、毎日の暮らしに季節を取り戻したい方、ホーム画面に静かで美しいウィジェットを置きたい方。",
    facts_k_notfor: "向いていない用途", facts_v_notfor: "タスク管理、天気予報、予定管理 — Madobeは意図的にカレンダーアプリではありません。",
    facts_k_developer: "開発元",
    facts_k_appstore: "App Store",
    footer_made: "制作",
    footer_privacy: "プライバシーポリシー", footer_terms: "利用規約",
    footer_appstore: "App Store",
  }
};

let currentLang = 'en';
let currentFilter = 'all';

function getDefaultSeasonFilter() {
  if (window.innerWidth <= 600) {
    return getCurrentSeason().season;
  }
  return 'all';
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyI18n();
  updateHeroScreenshots();
  updateCtaScreenshots();
  renderSeasons(currentFilter);
  updateTodayBand();
  if (currentModalSeasonId !== null) openSeasonModal(currentModalSeasonId);
}

function applyI18n() {
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-rich]').forEach(el => {
    const key = el.dataset.i18nRich;
    if (t[key] !== undefined) setRichText(el, t[key]);
  });
}

function setRichText(el, value) {
  const parts = value.split('<br>');
  el.replaceChildren();

  parts.forEach((part, index) => {
    const trimmed = part.trim();
    const emMatch = trimmed.match(/^<em>(.*)<\/em>$/);
    if (emMatch) {
      const em = document.createElement('em');
      em.textContent = emMatch[1];
      el.appendChild(em);
    } else {
      el.appendChild(document.createTextNode(trimmed));
    }

    if (index < parts.length - 1) {
      el.appendChild(document.createElement('br'));
    }
  });
}

// =====================
// DATE LOGIC
// =====================
function getTodayMD() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return mm + '-' + dd;
}

function dateToOrdinal(md) {
  const [m, d] = md.split('-').map(Number);
  const isLeap = true; // approx
  const days = [0,31,59,90,120,151,181,212,243,273,304,334];
  return days[m-1] + d;
}

function getCurrentSeason() {
  const today = getTodayMD();
  const todayOrd = dateToOrdinal(today);
  for (const s of SEASONS) {
    const startOrd = dateToOrdinal(s.start);
    let endOrd = dateToOrdinal(s.end);
    // Handle year wrap (Jan/Feb items that end in Feb after start in Jan)
    if (s.id >= 66 && s.id <= 72) {
      // winter items that span year boundary
    }
    if (todayOrd >= startOrd && todayOrd <= endOrd) return s;
  }
  // fallback: find nearest
  return SEASONS[0];
}

function updateTodayBand() {
  const s = getCurrentSeason();
  document.getElementById('today-kanji').textContent = s.kanji;
  document.getElementById('today-en').textContent = currentLang === 'jp' ? s.jp : s.en;
  document.getElementById('today-romaji').textContent = s.romaji;
  document.getElementById('today-macro').textContent = s.macroJp + ' (' + s.macro + ')  ·  ' + s.start + ' – ' + s.end;
}

function updateHeroScreenshots() {
  const locale = currentLang === 'jp' ? 'jp' : 'en';
  const shots = [
    ['hero-shot-1', 'U03'],
    ['hero-shot-2', 'P01'],
    ['hero-shot-3', 'P02'],
  ];
  shots.forEach(([id, base]) => {
    const img = document.getElementById(id);
    if (!img) return;
    img.src = 'images/' + base + '-' + locale + '.png';
  });
}

function updateCtaScreenshots() {
  for (let i = 1; i <= 5; i += 1) {
    const img = document.getElementById('cta-shot-' + i);
    if (!img) continue;
    img.src = currentLang === 'jp' ? img.dataset.srcJp : img.dataset.srcEn;
  }
}

// =====================
// SEASONS GRID
// =====================
const seasonColors = {
  spring: { text: 'oklch(78% 0.08 130)', bg: 'oklch(78% 0.08 130 / 0.06)' },
  summer: { text: 'oklch(78% 0.1 175)', bg: 'oklch(78% 0.1 175 / 0.06)' },
  autumn: { text: 'oklch(78% 0.12 55)', bg: 'oklch(78% 0.12 55 / 0.06)' },
  winter: { text: 'oklch(80% 0.06 225)', bg: 'oklch(80% 0.06 225 / 0.06)' },
};

function filterSeasons(f) {
  currentFilter = f;
  document.querySelectorAll('.season-tab').forEach(t => t.classList.toggle('active', t.dataset.season === f));
  renderSeasons(f);
}

function renderSeasons(filter) {
  const today = getCurrentSeason();
  const grid = document.getElementById('seasons-grid');
  const items = filter === 'all' ? SEASONS : SEASONS.filter(s => s.season === filter);
  const fragment = document.createDocumentFragment();

  items.forEach((s) => {
    const isToday = s.id === today.id;
    const card = document.createElement('div');
    card.className = `season-card season-${s.season}${isToday ? ' today' : ''}`;
    card.dataset.seasonId = String(s.id);

    const number = document.createElement('span');
    number.className = 'sc-number';
    number.textContent = s.macroJp;

    const kanji = document.createElement('span');
    kanji.className = 'sc-kanji';
    kanji.textContent = s.kanji;

    const name = document.createElement('span');
    name.className = 'sc-en';
    name.textContent = currentLang === 'jp' ? s.jp : s.en;

    const date = document.createElement('span');
    date.className = 'sc-date';
    date.textContent = `${s.start} – ${s.end}`;

    card.append(number, kanji, name, date);

    if (isToday) {
      const tag = document.createElement('span');
      tag.className = 'sc-today-tag';
      tag.textContent = I18N[currentLang].today_tag;
      card.appendChild(tag);
    }

    fragment.appendChild(card);
  });

  grid.replaceChildren(fragment);
}

// =====================
// SEASON DETAIL MODAL
// =====================
let currentModalSeasonId = null;

const SEASON_LABELS = {
  en: { spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter' },
  jp: { spring: '春', summer: '夏', autumn: '秋', winter: '冬' },
};

function openSeasonModal(id) {
  const s = SEASONS.find(x => x.id === id);
  if (!s) return;
  currentModalSeasonId = id;

  const macroSiblings = SEASONS.filter(x => x.macro === s.macro);
  const positionInMacro = macroSiblings.findIndex(x => x.id === s.id) + 1;

  const isJp = currentLang === 'jp';
  // 七十二候 within a 節気 has Japanese names: 初候 / 次候 / 末候
  const POSITION_JP = ['初候', '次候', '末候'];
  const POSITION_EN = ['First (shokō)', 'Middle (jikō)', 'Last (makkō)'];
  const positionLabel = isJp ? POSITION_JP[positionInMacro - 1] : POSITION_EN[positionInMacro - 1];

  const L = {
    rowSolar: isJp ? '節気' : 'Solar term',
    rowSeason: isJp ? '季節' : 'Season',
    prev: isJp ? '前の候' : 'Previous',
    next: isJp ? '次の候' : 'Next',
    closeAria: isJp ? '閉じる' : 'Close',
  };

  const card = document.getElementById('modal-card');
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.dataset.modalAction = 'close';
  closeBtn.setAttribute('aria-label', L.closeAria);
  closeBtn.appendChild(createIcon('close'));

  const meta = document.createElement('div');
  meta.className = 'modal-meta';
  meta.textContent = `${s.start} – ${s.end}`;

  const kanji = document.createElement('div');
  kanji.className = 'modal-kanji jp';
  kanji.textContent = s.kanji;

  const romaji = document.createElement('div');
  romaji.className = 'modal-romaji';
  romaji.textContent = s.romaji;

  const translation = document.createElement('div');
  translation.className = 'modal-translation';
  translation.textContent = isJp ? s.jp : s.en;

  const translationAlt = document.createElement('div');
  translationAlt.className = 'modal-translation-alt';
  translationAlt.textContent = isJp ? s.en : s.jp;

  const context = document.createElement('div');
  context.className = 'modal-context';
  context.append(
    createContextRow(L.rowSolar, `${s.macroJp} (${s.macro}) · ${positionLabel}`),
    createContextRow(L.rowSeason, SEASON_LABELS[currentLang][s.season]),
  );

  const nav = document.createElement('div');
  nav.className = 'modal-nav';
  nav.append(
    createModalNavButton(-1, L.prev, 'left', s.id === 1),
    createModalNavButton(1, L.next, 'right', s.id === 72),
  );

  card.replaceChildren(closeBtn, meta, kanji, romaji, translation, translationAlt, context, nav);

  const overlay = document.getElementById('season-modal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  card.scrollTop = 0;
}

function createContextRow(label, value) {
  const row = document.createElement('div');
  row.className = 'modal-context-row';

  const span = document.createElement('span');
  span.textContent = label;

  const strong = document.createElement('strong');
  strong.textContent = value;

  row.append(span, strong);
  return row;
}

function createModalNavButton(direction, label, iconDirection, disabled) {
  const button = document.createElement('button');
  button.dataset.navDir = String(direction);
  button.disabled = disabled;

  if (iconDirection === 'left') {
    button.append(createIcon('left'), document.createTextNode(label));
  } else {
    button.append(document.createTextNode(label), createIcon('right'));
  }

  return button;
}

function createIcon(type) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');

  if (type === 'close') {
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
  } else {
    svg.setAttribute('viewBox', '0 0 24 24');
  }

  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('viewBox', '0 0 24 24');

  const path = document.createElementNS(svgNS, 'path');

  if (type === 'close') {
    path.setAttribute('d', 'M18 6L6 18M6 6l12 12');
  } else if (type === 'left') {
    path.setAttribute('d', 'M19 12H5M12 19l-7-7 7-7');
  } else {
    path.setAttribute('d', 'M5 12h14M12 5l7 7-7 7');
  }

  svg.appendChild(path);
  return svg;
}

function closeSeasonModal() {
  const overlay = document.getElementById('season-modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  currentModalSeasonId = null;
}

function navSeasonModal(dir) {
  if (currentModalSeasonId === null) return;
  const newId = currentModalSeasonId + dir;
  if (newId < 1 || newId > 72) return;
  openSeasonModal(newId);
}

document.addEventListener('keydown', (e) => {
  if (currentModalSeasonId === null) return;
  if (e.key === 'Escape') { closeSeasonModal(); return; }
  if (e.key === 'ArrowLeft') navSeasonModal(-1);
  else if (e.key === 'ArrowRight') navSeasonModal(1);
});

// =====================
// DIORAMA SVG RENDERER
// =====================
// Minimal paper-cut layered diorama per season type
const dioramaThemes = {
  spring: {
    sky: ['#c8e0d8','#d8e8c0'],
    mountain: ['#8ab898','#6a9878'],
    ground: ['#b8d4a8','#90b888'],
    accent: '#f0a8b8',
    extra: 'cherry'
  },
  summer: {
    sky: ['#9cc8d8','#b8dce8'],
    mountain: ['#4a9868','#2a7848'],
    ground: ['#68b878','#58a868'],
    accent: '#f8e048',
    extra: 'lotus'
  },
  autumn: {
    sky: ['#d8c0a0','#e0c888'],
    mountain: ['#c07840','#a85830'],
    ground: ['#c09050','#a07038'],
    accent: '#e84828',
    extra: 'maple'
  },
  winter: {
    sky: ['#b8c8d8','#c8d8e8'],
    mountain: ['#788898','#607080'],
    ground: ['#d0dce8','#e0eaf4'],
    accent: '#90b8d0',
    extra: 'snow'
  }
};

function makeDioramaSVG(svgEl, season, width=320, height=180) {
  const th = dioramaThemes[season] || dioramaThemes.spring;
  const isSmall = width < 80;
  const W = width, H = height;
  const svgNS = 'http://www.w3.org/2000/svg';

  // Clear
  while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
  svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);

  function el(tag, attrs, parent) {
    const e = document.createElementNS(svgNS, tag);
    for (const [k,v] of Object.entries(attrs)) e.setAttribute(k, v);
    (parent || svgEl).appendChild(e);
    return e;
  }

  // Sky gradient
  const defs = el('defs', {});
  const gid = 'sky-' + season + '-' + W;
  const grad = el('linearGradient', { id: gid, x1:'0', y1:'0', x2:'0', y2:'1' }, defs);
  el('stop', { offset:'0%', 'stop-color': th.sky[0] }, grad);
  el('stop', { offset:'100%', 'stop-color': th.sky[1] }, grad);

  // Sky
  el('rect', { x:0, y:0, width:W, height:H, fill:`url(#${gid})` });

  if (!isSmall) {
    // Moon/sun
    if (season === 'winter' || season === 'autumn') {
      el('circle', { cx: W*0.8, cy: H*0.22, r: H*0.1, fill:'rgba(255,240,200,0.6)' });
    } else {
      el('circle', { cx: W*0.78, cy: H*0.18, r: H*0.09, fill:'rgba(255,230,150,0.5)' });
    }

    // Distant mountains
    const mPath = `M0,${H*0.65} L${W*0.15},${H*0.35} L${W*0.3},${H*0.5} L${W*0.45},${H*0.28} L${W*0.6},${H*0.45} L${W*0.75},${H*0.32} L${W},${H*0.55} L${W},${H} L0,${H} Z`;
    el('path', { d: mPath, fill: th.mountain[0], opacity: '0.7' });

    // Closer ridge
    const rPath = `M0,${H*0.75} L${W*0.2},${H*0.55} L${W*0.4},${H*0.65} L${W*0.6},${H*0.48} L${W*0.8},${H*0.62} L${W},${H*0.72} L${W},${H} L0,${H} Z`;
    el('path', { d: rPath, fill: th.mountain[1] });
  }

  // Ground layers
  el('ellipse', { cx: W/2, cy: H*0.9, rx: W*0.6, ry: H*0.18, fill: th.ground[0] });
  el('ellipse', { cx: W/2, cy: H, rx: W*0.75, ry: H*0.2, fill: th.ground[1] });

  if (!isSmall) {
    // Season-specific accent elements
    if (season === 'spring') {
      // Cherry blossom tree
      el('rect', { x: W*0.22-3, y: H*0.42, width: 6, height: H*0.35, fill:'#8a6858', rx:2 });
      for (let i=0; i<12; i++) {
        const cx = W*0.22 + (Math.sin(i*47)*W*0.12);
        const cy = H*0.38 + (Math.cos(i*31)*H*0.1);
        el('circle', { cx, cy, r: H*0.045, fill: th.accent, opacity:'0.85' });
      }
      // Small path
      el('path', { d:`M${W*0.3},${H*0.82} Q${W*0.5},${H*0.78} ${W*0.7},${H*0.82}`, stroke:'rgba(255,255,255,0.2)', 'stroke-width':'4', fill:'none', 'stroke-dasharray':'4 6' });
    } else if (season === 'summer') {
      // Bamboo
      for (let b=0; b<4; b++) {
        const bx = W*(0.55 + b*0.08);
        el('rect', { x:bx-2, y:H*0.35, width:4, height:H*0.5, fill:'#4a8848', rx:2, opacity:'0.9' });
        for (let n=0; n<4; n++) {
          el('ellipse', { cx:bx+8, cy:H*(0.38+n*0.09), rx:10, ry:4, fill:'#5a9858', opacity:'0.8' });
        }
      }
      // Pond
      el('ellipse', { cx:W*0.3, cy:H*0.78, rx:W*0.18, ry:H*0.06, fill:'rgba(100,180,200,0.4)' });
      el('ellipse', { cx:W*0.3, cy:H*0.78, rx:W*0.1, ry:H*0.03, fill:th.accent, opacity:'0.5' });
    } else if (season === 'autumn') {
      // Maple tree
      el('rect', { x:W*0.25-4, y:H*0.42, width:7, height:H*0.36, fill:'#7a4828', rx:2 });
      for (let i=0; i<9; i++) {
        const ang = (i / 9) * Math.PI * 2;
        const cx = W*0.25 + Math.cos(ang)*W*0.1;
        const cy = H*0.38 + Math.sin(ang)*H*0.09;
        const r = H*0.06 + (i%3)*H*0.02;
        el('circle', { cx, cy, r, fill: i%2===0 ? th.accent : '#e87828', opacity:'0.88' });
      }
      // Fallen leaves
      for (let i=0; i<6; i++) {
        el('ellipse', { cx:W*(0.3+i*0.08), cy:H*0.82+i%2*6, rx:6, ry:3, fill:i%2===0?th.accent:'#e87828', opacity:'0.7' });
      }
    } else if (season === 'winter') {
      // Bare tree
      el('rect', { x:W*0.28-3, y:H*0.45, width:5, height:H*0.32, fill:'#506070', rx:2 });
      el('line', { x1:W*0.28, y1:H*0.5, x2:W*0.18, y2:H*0.4, stroke:'#506070', 'stroke-width':'2.5' });
      el('line', { x1:W*0.28, y1:H*0.5, x2:W*0.38, y2:H*0.38, stroke:'#506070', 'stroke-width':'2.5' });
      el('line', { x1:W*0.28, y1:H*0.56, x2:W*0.15, y2:H*0.52, stroke:'#506070', 'stroke-width':'1.5' });
      el('line', { x1:W*0.28, y1:H*0.56, x2:W*0.42, y2:H*0.5, stroke:'#506070', 'stroke-width':'1.5' });
      // Snow dots
      for (let i=0; i<20; i++) {
        const sx = W*(0.05 + (i*37%90)*0.01);
        const sy = H*(0.05 + (i*53%50)*0.01);
        el('circle', { cx:sx, cy:sy, r:1.5, fill:'white', opacity:'0.6' });
      }
      // Frozen pond
      el('ellipse', { cx:W*0.65, cy:H*0.76, rx:W*0.2, ry:H*0.06, fill:'rgba(180,210,230,0.5)' });
    }

    // Distant small building / pagoda silhouette
    const bx = W * 0.7;
    const by = H * 0.52;
    el('rect', { x:bx-8, y:by, width:16, height:H*0.14, fill:'rgba(0,0,0,0.25)' });
    el('polygon', { points:`${bx-14},${by} ${bx+14},${by} ${bx},${by-14}`, fill:'rgba(0,0,0,0.28)' });
    el('polygon', { points:`${bx-10},${by-14} ${bx+10},${by-14} ${bx},${by-24}`, fill:'rgba(0,0,0,0.22)' });

    // Subtle mist layer
    const mistGid = 'mist-' + gid;
    const mistGrad = el('linearGradient', { id:mistGid, x1:'0', y1:'0', x2:'0', y2:'1' }, defs);
    el('stop', { offset:'0%', 'stop-color':'rgba(255,255,255,0.0)' }, mistGrad);
    el('stop', { offset:'100%', 'stop-color':'rgba(255,255,255,0.25)' }, mistGrad);
    el('rect', { x:0, y:H*0.5, width:W, height:H*0.5, fill:`url(#${mistGid})` });
  } else {
    // Small widget: just color block + kanji hint
    el('rect', { x:0, y:0, width:W, height:H, fill: th.sky[0], opacity:'0.4' });
  }
}

// =====================
// RENDER WIDGETS
// =====================
function renderWidgets() {
  const today = getCurrentSeason();
  updateHeroScreenshots();
  updateCtaScreenshots();
}

// =====================
// SCROLL FADE-IN
// =====================
function initFadeObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

function initEventHandlers() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });

  document.querySelectorAll('.season-tab').forEach((button) => {
    button.addEventListener('click', () => filterSeasons(button.dataset.season));
  });

  const grid = document.getElementById('seasons-grid');
  if (grid) {
    grid.addEventListener('click', (event) => {
      const card = event.target.closest('.season-card');
      if (!card) return;
      openSeasonModal(Number(card.dataset.seasonId));
    });
  }

  const overlay = document.getElementById('season-modal');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeSeasonModal();
        return;
      }

      const closeButton = event.target.closest('[data-modal-action="close"]');
      if (closeButton) {
        closeSeasonModal();
        return;
      }

      const navButton = event.target.closest('[data-nav-dir]');
      if (navButton && !navButton.disabled) {
        navSeasonModal(Number(navButton.dataset.navDir));
      }
    });
  }
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  initEventHandlers();
  applyI18n();
  updateTodayBand();
  currentFilter = getDefaultSeasonFilter();
  filterSeasons(currentFilter);
  renderWidgets();
  initFadeObserver();
});
