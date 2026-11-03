// Localized data for WhyRishikesh and WhyVarkala sections

export interface WhyLocationData {
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  photoCaptions: {
    main: string;
    subMain?: string;
    sub1: string;
    sub2: string;
  };
  pillars?: {
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
}

export const WHY_RISHIKESH_TRANSLATIONS: Record<string, WhyLocationData> = {
  "en": {
    "badge": "Spiritual Epicenter",
    "title": "Why Choose Rishikesh for Yoga Teacher Training",
    "subtitle": "Immerse in the timeless energy of the world capital of yoga, where five millennia of sacred Vedic wisdom meets the pristine Himalayan foothills.",
    "paragraphs": [
      "Nestled gracefully where the sacred Himalayan mountains open into the lush northern plains, Rishikesh is internationally revered as the Yoga Capital of the World. For over five millennia, legendary Vedic rishis, enlightened sages, and classical yoga masters have undertaken deep spiritual sadhana along these riverbanks. Walking through this sacred valley, you are not merely attending a contemporary training course—you are actively stepping into an unbroken, living stream of ancient yogic consciousness.",
      "The spiritual geography of Rishikesh is unmatched anywhere on Earth. As the holy River Ganga descends directly from high glacial peaks, her fast-flowing emerald waters saturate the surrounding atmosphere with high negative ions and pristine Himalayan prana. This unique natural ecosystem exerts a scientifically verified calming effect upon the human central nervous system, naturally quieting mental chatter and allowing students to effortlessly access deeper states of dharana (concentration) and dhyana (meditation).",
      "Unlike commercial Western retreat centers, every aspect of life in Rishikesh is tuned to spiritual awakening. At sunset, the valley vibrates with the celestial resonance of Sanskrit chanting, traditional temple bells, and the hypnotic Vedic fire ceremonies of the Parmarth Niketan and Triveni Ghat Ganga Aarti. Immersing your daily routine in this sacred environment bridges physical asana practice with profound inner philosophy, transforming personal exercise into a genuine journey of soul realization.",
      "Our ashram sanctuary is nestled in Tapovan—an elevated, serene enclave whose very name translates to \"the forest of penance.\" Historically the quiet dwelling place of wandering yogis, Tapovan sits comfortably above the busier market streets, surrounded by green Himalayan ridges while remaining just a short, pleasant walk from the sacred river and Lakshman Jhula. Here, away from noise and urban distraction, you experience the peaceful sanctuary essential for serious, life-transforming yogic study.",
      "From exploring the ancient subterranean meditation cave of Sage Vashistha along the river's white-sand shores to meditating at the 1,676-meter summit of Kunjapuri Temple as the dawn sun illuminates snow-capped Himalayan summits, training with YogaGarhi in Rishikesh provides an authentic immersion that will forever ground your teaching in genuine spiritual authority."
    ],
    "photoCaptions": {
      "main": "Himalayan Foothills & Holy Ganga River",
      "sub1": "Sacred Ganga Aarti",
      "sub2": "Kunjapuri Sunrise Trek"
    }
  },
  "de": {
    "badge": "Spirituelles Epizentrum",
    "title": "Warum Rishikesh für die Yogalehrerausbildung wählen",
    "subtitle": "Tauchen Sie ein in die zeitlose Energie der Welthauptstadt des Yoga, wo fünf Jahrtausende heiliger vedischer Weisheit auf die unberührten Ausläufer des Himalaya treffen.",
    "paragraphs": [
      "Malerisch eingebettet dort, wo sich die heiligen Berge des Himalaya zu den üppigen Ebenen des Nordens öffnen, wird Rishikesh weltweit als die Yoga-Hauptstadt der Welt verehrt. Seit über fünf Jahrtausenden haben legendäre vedische Rishis, erleuchtete Weise und klassische Yogameister an diesen Ufern tiefe spirituelle Sadhana praktiziert. Wer durch dieses heilige Tal geht, absolviert nicht nur eine moderne Ausbildung – er tritt aktiv in einen ungebrochenen, lebendigen Strom uralten yogischen Bewusstseins ein.",
      "Die spirituelle Geografie von Rishikesh ist weltweit einzigartig. Wenn der heilige Fluss Ganga direkt von den eisigen Gletschern herabfließt, sättigt sein smaragdgrünes Wasser die Bergluft mit negativen Ionen und reinstem Prana. Dieses besondere Ökosystem beruhigt das Nervensystem spürbar, bringt den Geist zur Ruhe und ermöglicht es den Schülern, mühelos tiefere Zustände von Konzentration (Dharana) und Meditation (Dhyana) zu erreichen.",
      "Im Gegensatz zu rein kommerziellen Zentren ist jeder Aspekt des Lebens in Rishikesh auf spirituelle Erweckung ausgerichtet. Bei Sonnenuntergang erklingen im Tal Sanskrit-Gesänge, traditionelle Tempelglocken und die feierlichen vedischen Feuerzeremonien der Ganga Aarti bei Parmarth Niketan und Triveni Ghat. Diese Atmosphäre verbindet körperliche Asana-Praxis mit tiefgründiger Philosophie und verwandelt das Training in eine echte Reise der Selbstverwirklichung.",
      "Unser Ashram-Refugium liegt in Tapovan – einer ruhigen Oase, deren Name wörtlich \"Wald der Einkehr\" bedeutet. Als historischer Rückzugsort wandernder Yogis liegt Tapovan geschützt über den belebten Gassen, umgeben von grünen Bergrücken und nur wenige Gehminuten vom heiligen Fluss und Lakshman Jhula entfernt. Hier finden Sie die nötige Stille für ein tiefgreifendes, lebensveränderndes Studium.",
      "Von der Meditation in der jahrtausendealten Vashistha-Höhle am weißen Flusssand bis zum Sonnenaufgang auf dem 1.676 Meter hohen Kunjapuri-Gipfel vor schneebedeckten Himalayagipfeln: Die Ausbildung bei YogaGarhi in Rishikesh schenkt Ihnen eine authentische Verwurzelung, die Ihr zukünftiges Unterrichten mit echter spiritueller Tiefe erfüllt."
    ],
    "photoCaptions": {
      "main": "Himalaya-Ausläufer & Heiliger Fluss Ganga",
      "sub1": "Heilige Ganga Aarti Zeremonie",
      "sub2": "Kunjapuri Sonnenaufgangs-Trekking"
    }
  },
  "fr": {
    "badge": "Épicentre Spirituel",
    "title": "Pourquoi Choisir Rishikesh pour Votre Formation de Yoga",
    "subtitle": "Plongez dans l'énergie intemporelle de la capitale mondiale du yoga, où cinq millénaires de sagesse védique sacrée rencontrent les contreforts de l'Himalaya.",
    "paragraphs": [
      "Niché là où les majestueuses montagnes de l'Himalaya s'ouvrent sur les plaines verdoyantes du nord, Rishikesh est reconnue mondialement comme la Capitale Mondiale du Yoga. Depuis plus de cinq millénaires, de grands rishis védiques, des sages illuminés et des maîtres traditionnels ont accompli une profonde sadhana le long de ces rives sacrées. En marchant dans cette vallée, vous ne suivez pas seulement une formation moderne : vous pénétrez dans un courant vivant et ininterrompu de conscience yogique millénaire.",
      "La géographie spirituelle de Rishikesh est unique au monde. Alors que le fleuve sacré Ganga descend directement des hauts glaciers himalayens, ses eaux émeraude enrichissent l'air d'ions négatifs et d'un prana d'une pureté absolue. Cet écosystème naturel exceptionnel exerce un effet apaisant scientifiquement prouvé sur le système nerveux, calmant l'esprit pour vous permettre d'accéder sans effort à une profonde méditation (Dhyana).",
      "Loin des centres occidentaux commercialisés, chaque facette de la vie à Rishikesh est dédiée à l'éveil intérieur. Au crépuscule, la vallée résonne au son des chants en sanskrit, des cloches des temples et des rituels du feu de la Ganga Aarti à Parmarth Niketan et Triveni Ghat. Vivre dans cet environnement relie directement la pratique posturale des asanas à une sagesse intérieure authentique.",
      "Notre sanctuaire ashram se trouve à Tapovan — un havre de paix surélevé dont le nom signifie littéralement \"la forêt de l'austérité sacrée\". Historiquement habité par les yogis contemplatifs, Tapovan s'élève au-dessus de l'effervescence des marchés, entouré de crêtes verdoyantes tout en restant à quelques minutes à pied des rives sacrées et de Lakshman Jhula. C'est le cadre paisible indispensable à une formation transformatrice.",
      "De la méditation dans la grotte millénaire du sage Vashistha sur les rives de sable blanc jusqu'au lever du soleil au sommet du temple de Kunjapuri à 1 676 mètres d'altitude, se former avec YogaGarhi à Rishikesh procure un ancrage spirituel authentique et durable."
    ],
    "photoCaptions": {
      "main": "Contreforts de l'Himalaya et Fleuve Sacré Ganga",
      "sub1": "Cérémonie Sacrée Ganga Aarti",
      "sub2": "Trek au Lever du Soleil à Kunjapuri"
    }
  },
  "es": {
    "badge": "Epicentro Espiritual",
    "title": "Por Qué Elegir Rishikesh para Tu Formación de Yoga",
    "subtitle": "Sumérgete en la energía eterna de la capital mundial del yoga, donde cinco milenios de sabiduría védica se encuentran con las laderas del Himalaya.",
    "paragraphs": [
      "Ubicada con gracia donde las sagradas montañas del Himalaya se abren hacia las llanuras del norte, Rishikesh es venerada mundialmente como la Capital Mundial del Yoga. Durante más de cinco milenios, sabios védicos, rishis iluminados y grandes maestros han realizado una profunda sadhana en estas orillas sagradas. Al caminar por este valle, no estás simplemente asistiendo a un curso contemporáneo: estás entrando en una corriente viva e ininterrumpida de sabiduría ancestral.",
      "La geografía espiritual de Rishikesh es incomparable. Mientras el sagrado río Ganga desciende de los glaciares alpinos, sus aguas esmeralda saturan la atmósfera con iones negativos y prana puro del Himalaya. Este ecosistema natural tiene un efecto calmante sobre el sistema nervioso, aquietando los pensamientos y permitiendo alcanzar estados profundos de concentración (dharana) y meditación (dhyana).",
      "A diferencia de los centros comerciales convencionales, cada rincón de Rishikesh vibra con el despertar espiritual. Al atardecer, el valle resuena con cantos en sánscrito, campanas de templos y las hipnóticas ceremonias de fuego de la Ganga Aarti en Parmarth Niketan y Triveni Ghat. Esta inmersión transforma el ejercicio físico en un verdadero camino de autorrealización.",
      "Nuestro ashram se ubica en Tapovan, un enclave elevado cuyo nombre significa \"el bosque de la penitencia y meditación\". Históricamente hogar de yoguis peregrinos, Tapovan se encuentra por encima del bullicio urbano, rodeado de colinas verdes y a pocos pasos del río sagrado y de Lakshman Jhula. Aquí disfrutarás del santuario sereno necesario para un aprendizaje transformador.",
      "Desde meditar en la antigua cueva subterránea del sabio Vashistha junto a la orilla del río hasta contemplar el amanecer en el templo de Kunjapuri a 1.676 metros frente a los picos nevados del Himalaya, formarte con YogaGarhi en Rishikesh te brindará una base espiritual auténtica para toda la vida."
    ],
    "photoCaptions": {
      "main": "Laderas del Himalaya y Río Sagrado Ganga",
      "sub1": "Ceremonia Sagrada Ganga Aarti",
      "sub2": "Trekking al Amanecer en Kunjapuri"
    }
  },
  "ja": {
    "badge": "スピリチュアルな中心地",
    "title": "リシケシでヨガ指導者養成コースを選ぶ理由",
    "subtitle": "5000年に及ぶ聖なるヴェーダの叡智とヒマラヤ山麓の大自然が調和する、世界のヨガの聖地リシケシの神聖なエネルギーに浸る。",
    "paragraphs": [
      "ヒマラヤの山々が緑豊かな平原へと開ける聖地に佇むリシケシは、「世界のヨガの首都」として世界中から崇敬されています。5000年以上にわたり、名高きヴェーダの聖者（リシ）や歴代のヨガマスターたちがこの聖なるガンジス河畔で深い修行（サーダナ）を重ねてきました。この渓谷を歩くことは、単なる講習を受けるのではなく、数千年にわたり脈々と受け継がれてきた生きたヨガの伝統に身を投じることを意味します。",
      "リシケシの環境は唯一無二です。ヒマラヤの高地氷河から勢いよく流れ下る聖なるガンジス川のエメラルドグリーンの清流は、空気を豊富なマイナスイオンと純粋なプラーナで満たしています。この自然環境は自律神経を深く鎮め、雑念を自然に消し去り、深い集中（ダーラナ）と瞑想（ディヤーナ）へと導きます。",
      "一般的な商業的リトリート施設とは異なり、リシケシの生活のすべてが精神的な成長に向けられています。日没を迎えると、サンスクリット語のマントラ、寺院の鐘の音、そしてパルマート・ニケタンやトリヴェニ・ガートでの神秘的なガンガー・アールティ（火の儀式）が谷全体に響き渡ります。この環境での毎日の学びは、単なるアーサナの練習を魂の変容の旅へと昇華させます。",
      "私たちの拠点は、サンスクリット語で「修行の森」を意味するタポヴァンにあります。古くから修行僧が瞑想の地として選んできたタポヴァンは、賑やかな市場から離れた高台に位置し、緑豊かな山々に囲まれながら聖なるガンジス川やラクシュマン・ジューラーへも徒歩圏内です。日々の学びと自己探求に最適な静けさを提供します。",
      "川辺の白砂に佇む古代の賢者ヴァシシュタの瞑想洞窟から、標高1,676メートルのクンジャプリ寺院の頂上から望むヒマラヤ連峰の壮大な日の出まで、YogaGarhiでのリシケシ研修は生涯にわたり確かな自信と指導の基盤となります。"
    ],
    "photoCaptions": {
      "main": "ヒマラヤ山麓と聖なるガンジス川",
      "sub1": "神聖なガンガー・アールティの儀式",
      "sub2": "クンジャプリ寺院の朝日トレッキング"
    }
  },
  "ko": {
    "badge": "영적 중심지",
    "title": "리시케시 요가 지도자 과정을 선택해야 하는 이유",
    "subtitle": "5천 년 동안 이어진 베다의 지혜와 순수한 히말라야 산자락이 만나는 세계 요가의 수도에서 영원한 영적 에너지에 몰입하세요.",
    "paragraphs": [
      "성스러운 히말라야 산맥이 북부 평원과 만나는 곳에 자리 잡은 리시케시는 세계 요가의 수도로 널리 알려져 있습니다. 5천 년이 넘는 세월 동안 전설적인 베다 성자들과 요가 스승들이 이 강변에서 깊은 사다나(영적 수행)를 이어왔습니다. 이 계곡을 걷는 것은 단순한 훈련 과정을 수강하는 것이 아니라, 살아 숨 쉬는 유구한 요가 전통의 강물에 직접 발을 들이는 것입니다.",
      "리시케시의 자연환경은 전 세계 어디에서도 찾아볼 수 없습니다. 히말라야 빙하에서 흘러내리는 성스러운 갠지스강의 에메랄드빛 물결은 주변 대기를 풍부한 음이온과 순수한 히말라야 프라나로 가득 채웁니다. 이는 신경계를 자연스럽게 안정시키고 마음의 동요를 가라앉혀 수련생들이 깊은 집중(다라나)과 명상(디야나) 상태로 쉽게 들어갈 수 있도록 돕습니다.",
      "상업적인 서구 리트릿 센터와 달리 리시케시의 모든 일상은 영적 깨달음에 맞춰져 있습니다. 해 질 무렵이면 산스크리트 찬팅, 사원의 종소리, 그리고 파르마르트 니케탄과 트리베니 가트의 신비로운 갠지스 아르티 불 의식이 계곡 전체에 울려 퍼집니다. 이러한 환경은 신체 아사나 수련을 내면의 지혜와 연결해 진정한 영혼의 여정으로 변화시킵니다.",
      "우리의 아쉬람 성소는 '고행과 명상의 숲'을 뜻하는 타포반에 위치해 있습니다. 역사적으로 수행 요기들이 머물던 고요한 언덕 마을 타포반은 번잡한 시장 거리 위에 자리하여, 푸른 능선으로 둘러싸여 있으면서도 갠지스강과 락슈만 줄라까지 도보로 쉽게 오갈 수 있는 평화로운 배움터입니다.",
      "하얀 모래톱에 자리한 바시슈타 동굴에서의 명상부터 히말라야 설산 위로 떠오르는 쿤자푸리 사원의 일출 트레킹까지, YogaGarhi 리시케시 교육은 수련생의 가르침에 진정한 영적 권위와 평생의 깊이를 더해줄 것입니다."
    ],
    "photoCaptions": {
      "main": "히말라야 산자락과 성스러운 갠지스강",
      "sub1": "성스러운 갠지스 아르티 의식",
      "sub2": "쿤자푸리 일출 트레킹"
    }
  },
  "zh": {
    "badge": "精神圣地",
    "title": "为什么选择在瑞诗凯诗进行瑜伽导师培训",
    "subtitle": "沉浸于世界瑜伽之都的永恒能量中，在这里，五千年的吠陀智慧与纯净的喜马拉雅山麓完美相遇。",
    "paragraphs": [
      "瑞诗凯诗座落于神圣的喜马拉雅山脉与广袤平原交汇之处，被全球公认为“世界瑜伽之都”。五千多年来，传奇的吠陀圣哲与古代瑜伽大师在这片恒河两岸进行了深沉的灵性修行。走进这片圣地，您不仅是在参加现代培训课程，更是在融入一条源远流长、未曾中断的瑜伽生命之流。",
      "瑞诗凯诗的自然地理环境举世无双。神圣的恒河从冰川雪山奔腾而下，翠绿清澈的河水散发出充沛的负离子与纯净的喜马拉雅生命能量（普拉那）。这独特的自然生态对神经系统具有显著的镇静效果，自然平息思绪杂念，让学生能够轻松进入专注（Dharana）与冥想（Dhyana）的深层境界。",
      "与商业化度假中心截然不同，瑞诗凯诗的每一处细节都与灵性觉醒息息相关。每逢黄昏，山谷间回荡着梵文颂歌、古寺钟声，以及在帕玛特尼克坦和崔维尼河坛举行的神圣恒河夜祭火礼。在这座充满灵性的环境中修习，能将身体体式训练升华为深刻的内在灵魂探索。",
      "我们的静修院位于塔波万（Tapovan）——梵文意为“苦修与冥想之林”。这里曾是流浪苦行僧的静修之地，远离集市喧嚣，被葱郁的喜马拉雅山脊环抱，同时仅需步行即可到达圣河与拉克什曼吊桥，为深度的自我蜕变提供了无可比拟的宁静庇护。",
      "从河畔古老白沙中的瓦西斯塔圣者冥想洞穴，到海拔1676米昆贾普里神庙晨曦映照喜马拉雅雪峰的壮丽徒步，在YogaGarhi瑞诗凯诗的学习将为您的教学奠定坚实、纯正的传统根基。"
    ],
    "photoCaptions": {
      "main": "喜马拉雅山麓与神圣恒河",
      "sub1": "神圣恒河夜祭仪式",
      "sub2": "昆贾普里日出徒步"
    }
  },
  "ru": {
    "badge": "Духовный Эпицентр",
    "title": "Почему стоит выбрать Ришикеш для обучения преподавателей йоги",
    "subtitle": "Погрузитесь в вечную энергию мировой столицы йоги, где пять тысячелетий ведической мудрости встречаются с первозданными предгорьями Гималаев.",
    "paragraphs": [
      "Ришикеш, раскинувшийся у подножия священных Гималайских гор, по праву признан мировой столицей йоги. На протяжении более пяти тысяч лет легендарные ведические мудрецы (риши) и великие мастера йоги совершали здесь глубокую духовную садхану. Оказавшись в этой священной долине, вы не просто проходите современный курс — вы вступаете в непрерывный живой поток древнейшего йогического сознания.",
      "Природа Ришикеша не имеет аналогов на планете. Священная Ганга, берущая начало в высокогорных ледниках, насыщает воздух отрицательными ионами и чистейшей гималайской праной. Этот уникальный климат оказывает научно подтвержденное гармонизирующее воздействие на нервную систему, успокаивая ум и помогая без усилий погружаться в глубокую медитацию (дхьяну).",
      "В отличие от коммерческих западных центров, каждая деталь жизни в Ришикеше настроена на духовное пробуждение. На закате долина наполняется звуками ведических мантр на санскрите, звоном храмовых колоколов и пламенем священной церемонии Ганга Аарти в Пармарт Никетан. Практика в таком месте связывает физические асаны с подлинной философией духа.",
      "Наш ашрам расположен в Таповане — возвышенном спокойном районе, чье название переводится как «лес духовного уединения». Исторически это было место медитации странствующих йогов. Тапован находится вдали от шумных базаров, окружен зелеными горными хребтами и расположен всего в нескольких минутах ходьбы от берегов Ганги и моста Лакшман Джула.",
      "От медитаций в древней пещере мудреца Васиштхи на берегу реки до встречи рассвета на вершине храма Кунджапури на высоте 1676 метров с видом на заснеженные вершины Гималаев — обучение в YogaGarhi подарит вам подлинную глубину и авторитет преподавателя."
    ],
    "photoCaptions": {
      "main": "Предгорья Гималаев и Священная Ганга",
      "sub1": "Священная церемония Ганга Аарти",
      "sub2": "Рассветный треккинг в Кунджапури"
    }
  },
  "it": {
    "badge": "Epicentro Spirituale",
    "title": "Perché Scegliere Rishikesh per la Formazione Insegnanti Yoga",
    "subtitle": "Immergiti nell'energia senza tempo della capitale mondiale dello yoga, dove cinquemila anni di saggezza vedica incontrano le colline dell'Himalaya.",
    "paragraphs": [
      "Adagiata con grazia dove le maestose montagne dell'Himalaya si aprono verso le pianure del nord, Rishikesh è celebrata a livello internazionale come la Capitale Mondiale dello Yoga. Da oltre cinquemila anni, grandi rishi vedici, saggi illuminati e maestri di yoga hanno intrapreso una profonda sadhana lungo queste sponde. Camminare in questa valle sacra significa entrare in una corrente viva e ininterrotta di antica saggezza yogica.",
      "La geografia spirituale di Rishikesh è unica al mondo. Mentre il sacro fiume Gange scende direttamente dai ghiacciai d'alta quota, le sue acque smeraldine arricchiscono l'aria di ioni negativi e purissimo prana himalayano. Questo ecosistema ha un effetto calmante scientificamente provato sul sistema nervoso, che acquieta la mente e facilita l'accesso a stati profondi di concentrazione e meditazione.",
      "A differenza dei centri commerciali occidentali, ogni aspetto della vita a Rishikesh è sintonizzato sul risveglio interiore. Al tramonto, la valle risuona con canti in sanscrito, campane dei templi e i rituali del fuoco della Ganga Aarti a Parmarth Niketan e Triveni Ghat. Questa atmosfera trasforma l'esercizio fisico in un autentico cammino di consapevolezza.",
      "Il nostro ashram si trova a Tapovan, un'oasi serena il cui nome significa \"la foresta della penitenza spirituale\". Storico rifugio di yogi erranti, Tapovan sorge al di sopra del trambusto cittadino, circondato da verdi colline e a breve distanza a piedi dal fiume sacro e da Lakshman Jhula. È il luogo ideale per uno studio autentico e trasformativo.",
      "Dalla meditazione nell'antica grotta sotterranea del saggio Vashistha sulla sabbia bianca del fiume, fino all'alba al tempio di Kunjapuri a 1.676 metri di quota davanti alle vette innevate dell'Himalaya: la formazione con YogaGarhi a Rishikesh donerà al tuo insegnamento un'autorità spirituale duratura."
    ],
    "photoCaptions": {
      "main": "Colline dell'Himalaya e Sacro Fiume Gange",
      "sub1": "Sacra Cerimonia Ganga Aarti",
      "sub2": "Trekking all'Alba a Kunjapuri"
    }
  },
  "nl": {
    "badge": "Spiritueel Epicentrum",
    "title": "Waarom Kiezen voor Rishikesh voor je Yogadocentenopleiding",
    "subtitle": "Dompel je onder in de tijdloze energie van de yoga-hoofdstad van de wereld, waar vijf millennia aan heilige Vedische wijsheid samenkomen aan de voet van de Himalaya.",
    "paragraphs": [
      "Gelegen op de plek waar de majestueuze Himalaya overgaat in de weelderige noordelijke vlakten, wordt Rishikesh wereldwijd vereerd als de Yoga Hoofdstad van de Wereld. Al meer dan vijf millennia hebben legendarische rishi's, verlichte wijzen en traditionele yogameesters diepe spirituele sadhana beoefend langs deze heilige oevers. Wanneer je door deze vallei wandelt, volg je niet zomaar een opleiding—je stapt in een levende traditie van eeuwenoude yogische wijsheid.",
      "De spirituele energie van Rishikesh is uniek op aarde. Terwijl de heilige rivier de Ganges rechtstreeks afdaalt uit gletsjertoppen, vult het smaragdgroene water de berglucht met zuivere prana en negatieve ionen. Dit natuurlijke ecosysteem heeft een kalmerende werking op het zenuwstelsel, brengt de geest tot rust en stelt studenten in staat om moeiteloos diepere niveaus van dharana (concentratie) en dhyana (meditatie) te bereiken.",
      "In tegenstelling tot westerse commerciële centra is elk aspect van het dagelijks leven in Rishikesh gericht op innerlijke verdieping. Bij zonsondergang weerklinken Sanskriet-mantra's, tempelklokken en de Vedische vuurceremonies van de Ganga Aarti bij Parmarth Niketan en Triveni Ghat. Deze heilige omgeving verbindt fysieke asana's met diepe filosofie en tilt je persoonlijke beoefening naar een hoger niveau.",
      "Ons ashram-toevluchtsoord bevindt zich in Tapovan—een rustige wijk waarvan de naam 'bos van bezinning' betekent. Als historisch toevluchtsoord voor rondtrekkende yogi's ligt Tapovan rustig boven de drukke winkelstraten, omgeven door groene bergruggen en op slechts een korte wandeling van de heilige rivier en de Lakshman Jhula. Hier vind je de stilte die nodig is voor een levensveranderende studie.",
      "Van mediteren in de eeuwenoude Vashistha-grot aan het witte rivierzand tot het bewonderen van de zonsopgang op de 1.676 meter hoge Kunjapuri-bergtop met uitzicht op de besneeuwde toppen van de Himalaya: een opleiding bij YogaGarhi in Rishikesh biedt een authentieke basis die je lesgeven voor altijd verrijkt met spirituele diepgang."
    ],
    "photoCaptions": {
      "main": "Himalaya Uitlopers & Heilige Ganges",
      "sub1": "Heilige Ganga Aarti Ceremonie",
      "sub2": "Kunjapuri Zonsopgang Trektocht"
    }
  },
  "id": {
    "badge": "Episentrum Spiritual",
    "title": "Mengapa Memilih Rishikesh untuk Pelatihan Guru Yoga",
    "subtitle": "Rasakan energi abadi ibu kota yoga dunia, tempat lima milenium kebijaksanaan Veda suci berpadu dengan keindahan kaki pegunungan Himalaya.",
    "paragraphs": [
      "Terletak anggun di tempat pegunungan Himalaya yang suci membentang ke dataran utara yang subur, Rishikesh diakui dunia sebagai Ibu Kota Yoga Dunia. Selama lebih dari lima milenium, para rishi Veda legendaris, orang bijak, dan master yoga tradisional telah menjalankan sadhana spiritual mendalam di sepanjang tepi sungai suci ini. Berjalan di lembah ini berarti Anda melangkah langsung ke dalam aliran kebijaksanaan yoga kuno yang tak pernah terputus.",
      "Geografi spiritual Rishikesh tiada tandingannya di bumi. Saat Sungai Suci Gangga mengalir deras dari gletser pegunungan tinggi, airnya yang zamrud memenuhi udara dengan ion negatif dan prana Himalaya yang murni. Ekosistem alami ini memberikan efek menenangkan yang terbukti secara ilmiah bagi sistem saraf, menenangkan pikiran, dan memudahkan para siswa mencapai konsentrasi (dharana) serta meditasi mendalam (dhyana).",
      "Berbeda dengan pusat yoga komersial Barat, setiap aspek kehidupan di Rishikesh diselaraskan untuk kebangkitan spiritual. Saat matahari terbenam, lembah ini bergema dengan lantunan mantra Sanskerta, lonceng kuil, dan upacara api suci Ganga Aarti di Parmarth Niketan. Suasana ini menjembatani latihan fisik asana dengan filosofi mendalam, mengubah latihan harian menjadi perjalanan penemuan jati diri.",
      "Suaka ashram kami terletak di Tapovan—sebuah kawasan damai yang berarti \"hutan pertapaan spiritual\". Sebagai tempat persinggahan bersejarah bagi para yogi pengelana, Tapovan berada tenang di atas jalanan pasar yang sibuk, dikelilingi perbukitan hijau, dan hanya beberapa menit berjalan kaki dari Sungai Gangga serta Jembatan Lakshman Jhula.",
      "Dari bermeditasi di gua kuno Pertapa Vashistha di tepi pasir putih sungai hingga menyaksikan matahari terbit di Kuil Kunjapuri pada ketinggian 1.676 meter menghadap puncak salju Himalaya, pelatihan bersama YogaGarhi di Rishikesh memberikan fondasi autentik yang memperkaya pengajaran Anda selamanya."
    ],
    "photoCaptions": {
      "main": "Kaki Pegunungan Himalaya & Sungai Suci Gangga",
      "sub1": "Upacara Suci Ganga Aarti",
      "sub2": "Trekking Matahari Terbit Kunjapuri"
    }
  }
};

export const WHY_VARKALA_TRANSLATIONS: Record<string, WhyLocationData> = {
  "en": {
    "badge": "Coastal Sanctuary",
    "title": "Why Choose Varkala for Yoga Teacher Training",
    "subtitle": "Awaken your practice atop the dramatic red laterite cliffs of Kerala, where Arabian Sea breezes, pure Ayurvedic heritage, and sacred temples converge.",
    "paragraphs": [
      "Perched majestically along the southwestern Malabar coast, Varkala is Kerala’s crowned jewel of spiritual tranquility. Distinct from crowded tourist destinations, Varkala offers a dramatic, untouched natural sanctuary where towering red laterite cliffs plunge directly into the warm, turquoise waters of the Arabian Sea. For centuries, spiritual seekers and yogis have gravitated to this coastal haven to experience deep transformation nurtured by the gentle rhythm of ocean tides and sea air.",
      "At the foot of the cliffs lies sacred Papanasam Beach, whose Sanskrit name literally translates to \"destruction of all sins.\" According to ancient lore, bathing in these mineral-rich waters purifies past karmic residue and rejuvenates the subtle energy body. Practicing daily morning pranayama and meditation atop the cliff while breathing marine air infused with negative ions calms the nervous system and expands lung capacity, providing the ideal biological setting for deep yogic immersion.",
      "As part of Kerala—celebrated worldwide as \"God’s Own Country\" and the historic birthplace of Ayurveda—training in Varkala offers seamless access to authentic holistic healing. Our curriculum incorporates traditional Ayurvedic dinacharya (daily lifestyle routines), herbal nutrition, and doshic constitutional balancing. You will experience first-hand how authentic Ayurvedic therapies harmonize with classical yoga postures to restore physical vitality and mental tranquility.",
      "Adding to this high-vibrational sanctuary is the 2,000-year-old Janardanaswamy Temple, dedicated to Lord Vishnu and revered as a major coastal pilgrimage site. The town carries a serene spiritual gravity, free from chaotic city distractions. Between intensive training sessions, you can reflect along quiet coconut-fringed shores, watch golden Arabian sunsets, and absorb the natural peace essential for integrating advanced yogic wisdom."
    ],
    "photoCaptions": {
      "subMain": "Pristine coastal geology overlooking the Arabian Sea",
      "main": "Varkala Red Cliffs & Sacred Papanasam Beach",
      "sub1": "Historic 2,000-Year Janardanaswamy Temple",
      "sub2": "Arabian Sea Sunset Meditation"
    },
    "pillars": {
      "p1Title": "Sacred Papanasam Waters",
      "p1Desc": "Daily practice alongside the legendary cleansing beach, renowned for mineral springs and negative ion ocean breeze.",
      "p2Title": "Ayurveda Heritage",
      "p2Desc": "Direct access to traditional Kerala Ayurvedic therapies, doshic food, and holistic wellness knowledge.",
      "p3Title": "Cliffside Serenity",
      "p3Desc": "Panoramic views of the Arabian Sea, golden sunsets, and a quiet coastal retreat atmosphere away from mass crowds.",
      "p4Title": "Ancient Temple Energy",
      "p4Desc": "Grounded in the spiritual presence of the 2,000-year-old Janardanaswamy temple and sacred Malabar traditions."
    }
  },
  "de": {
    "badge": "Küstenzuflucht",
    "title": "Warum Varkala für die Yogalehrerausbildung wählen",
    "subtitle": "Erwecken Sie Ihre Praxis auf den dramatischen roten Klippen von Kerala, wo die Meeresbrise des Arabischen Meeres, reines Ayurveda-Erbe und alte Tempel zusammentreffen.",
    "paragraphs": [
      "Majestätisch an der südwestlichen Malabarküste gelegen, ist Varkala Keralas Juwel spiritueller Ruhe. Fernab von überfüllten Reisezielen bietet Varkala ein dramatisches, unberührtes Naturrefugium, wo markante rote Klippen direkt in das warme, türkisfarbene Wasser des Arabischen Meeres abfallen. Seit Jahrhunderten reisen Sinnsuchende und Yogis an diese Küste, um im sanften Rhythmus der Gezeiten tiefe Transformation zu erfahren.",
      "Am Fuße der Klippen liegt der heilige Papanasam-Strand, dessen Name wörtlich \"Auflösung aller Verfehlungen\" bedeutet. Nach alter Überlieferung reinigt ein Bad in diesem mineralreichen Wasser alte karmische Belastungen und stärkt den feinstofflichen Energiekörper. Die morgendliche Praxis von Pranayama auf den Klippen, erfüllt von jodhaltiger Meeresluft, beruhigt das Nervensystem und schafft ideale Voraussetzungen für tiefes yogisches Lernen.",
      "Als Teil von Kerala – weltweit als \"Gottes eigenes Land\" und Geburtsort des Ayurveda bekannt – ermöglicht Varkala authentische Einblicke in traditionelle Heilkunst. Unsere Ausbildung integriert klassische ayurvedische Dinacharya (Tagesroutine), pflanzliche Ernährung und Dosha-Balance. Sie erleben hautnah, wie traditionelle Therapien mit Yoga-Asanas verschmelzen, um Vitalität und Seelenruhe wiederherzustellen.",
      "Verstärkt wird dieser Ort durch den über 2.000 Jahre alten Janardanaswamy-Tempel, ein bedeutendes Küstenheiligtum. Zwischen den intensiven Unterrichtsstunden können Sie an palmengesäumten Pfaden spazieren, spektakuläre Sonnenuntergänge über dem Arabischen Meer erleben und die nötige Ruhe finden, um das Gelernte nachhaltig zu verinnerlichen."
    ],
    "photoCaptions": {
      "subMain": "Unberührte Küstengeologie mit Blick auf das Arabische Meer",
      "main": "Varkala Klippen & Heiliger Papanasam Strand",
      "sub1": "Historischer Janardanaswamy Tempel",
      "sub2": "Sonnenuntergangs-Meditation am Meer"
    },
    "pillars": {
      "p1Title": "Heilige Papanasam-Gewässer",
      "p1Desc": "Tägliche Praxis am legendären Strand, berühmt für mineralische Quellen und belebende Meeresbrise.",
      "p2Title": "Ayurvedisches Erbe",
      "p2Desc": "Direkter Zugang zu authentischen Kerala-Ayurveda-Behandlungen und ganzheitlichem Wissen.",
      "p3Title": "Ruhe auf den Klippen",
      "p3Desc": "Panoramablick auf das Arabische Meer, goldene Sonnenuntergänge und ruhige Küstenatmosphäre.",
      "p4Title": "Alte Tempelenergie",
      "p4Desc": "Eingebettet in die 2.000 Jahre alte spirituelle Gegenwart des Janardanaswamy-Tempels."
    }
  },
  "fr": {
    "badge": "Sanctuaire Côtier",
    "title": "Pourquoi Choisir Varkala pour Votre Formation de Yoga",
    "subtitle": "Éveillez votre pratique au sommet des spectaculaires falaises de latérite rouge du Kerala, où se rencontrent la brise marine, la tradition ayurvédique et des temples sacrés.",
    "paragraphs": [
      "Bordant majestueusement la côte sud-ouest de Malabar, Varkala est le joyau de sérénité du Kerala. Loin des destinations touristiques surpeuplées, Varkala offre un sanctuaire naturel spectaculaire et préservé où d'imposantes falaises rouges plongent directement dans les eaux turquoise de la mer d'Oman. Depuis des siècles, les chercheurs spirituels et les yogis s'y rendent pour vivre une transformation profonde au rythme apaisant des marées.",
      "Au pied des falaises s'étend la plage sacrée de Papanasam, dont le nom signifie littéralement \"destruction de toutes les fautes\". Selon la tradition ancienne, se baigner dans ces eaux minérales purifie le corps énergétique subtil. Pratiquer le pranayama et la méditation matinale au sommet de la falaise, en respirant un air marin chargé d'ions négatifs, apaise le système nerveux et offre un cadre parfait pour l'apprentissage du yoga.",
      "Située au Kerala — berceau historique de l'Ayurveda mondialement célèbre — votre formation à Varkala s'associe harmonieusement à la médecine holistique traditionnelle. Notre programme intègre les principes de la dinacharya (routine de vie quotidienne), l'alimentation selon les doshas et le bien-être global, restaurant la vitalité physique et la paix de l'esprit.",
      "Ce lieu à haute vibration abrite également le temple vieux de 2 000 ans de Janardanaswamy, haut lieu de pèlerinage côtier dédié au Seigneur Vishnu. Entre les cours intensifs, vous pourrez contempler les couchers de soleil dorés sur la mer d'Oman et savourer le calme nécessaire pour assimiler les enseignements yogiques profonds."
    ],
    "photoCaptions": {
      "subMain": "Géologie côtière immaculée surplombant la mer d'Arabie",
      "main": "Falaises Rouges de Varkala et Plage Sacrée de Papanasam",
      "sub1": "Temple Historique Bicentenaire de Janardanaswamy",
      "sub2": "Méditation au Coucher du Soleil sur la Mer d'Oman"
    },
    "pillars": {
      "p1Title": "Eaux Sacrées de Papanasam",
      "p1Desc": "Pratique quotidienne au bord de la plage mythique, célèbre pour ses sources minérales pures et son air marin.",
      "p2Title": "Héritage Ayurvédique",
      "p2Desc": "Accès direct aux soins ayurvédiques traditionnels du Kerala et à une alimentation saine équilibrée.",
      "p3Title": "Sérénité des Falaises",
      "p3Desc": "Vues panoramiques sur la mer d'Oman, couchers de soleil dorés et atmosphère côtière reposante.",
      "p4Title": "Énergie Millénaire des Temples",
      "p4Desc": "Ancrage dans la présence sacrée du temple Janardanaswamy vieux de plus de deux millénaires."
    }
  },
  "es": {
    "badge": "Santuario Costero",
    "title": "Por Qué Elegir Varkala para Tu Formación de Yoga",
    "subtitle": "Despierta tu práctica sobre los espectaculares acantilados rojos de Kerala, donde convergen la brisa del Mar Arábigo, la herencia ayurvédica y templos milenarios.",
    "paragraphs": [
      "Ubicada a lo largo de la costa suroeste de Malabar, Varkala es la joya espiritual de Kerala. Lejos del turismo masivo, Varkala ofrece un santuario natural virgen donde imponentes acantilados de laterita roja descienden directamente hacia las aguas turquesas del Mar Arábigo. Durante generaciones, yoguis y buscadores de paz han llegado a esta costa para experimentar una transformación profunda al compás del océano.",
      "A los pies de los acantilados se encuentra la sagrada playa de Papanasam, cuyo nombre significa \"la purificación de todas las impurezas\". Según la tradición, bañarse en sus aguas ricas en minerales revitaliza el cuerpo sutil. Practicar pranayama y meditación sobre el acantilado respirando la brisa marina cargada de iones negativos calma el sistema nervioso y crea las condiciones biológicas idóneas para el estudio del yoga.",
      "Al encontrarse en Kerala, la cuna milenaria del Ayurveda, la formación en Varkala brinda acceso a un conocimiento curativo integral. Nuestro plan de estudios integra rutinas diarias ayurvédicas (dinacharya), nutrición equilibrada según los doshas y sabiduría ancestral para restablecer la vitalidad y la tranquilidad mental.",
      "El entorno se enriquece con el templo de Janardanaswamy, con más de 2.000 años de historia. La serenidad del lugar, libre de distracciones urbanas, te permite pasear entre palmeras, admirar atardeceres dorados y absorber con calma la sabiduría yogica recibida en clase."
    ],
    "photoCaptions": {
      "subMain": "Geología costera prístina con vistas al mar Arábigo",
      "main": "Acantilados Rojos de Varkala y Playa Sagrada Papanasam",
      "sub1": "Templo Histórico de Janardanaswamy de 2.000 Años",
      "sub2": "Meditación al Atardecer frente al Mar Arábigo"
    },
    "pillars": {
      "p1Title": "Aguas Sagradas de Papanasam",
      "p1Desc": "Práctica diaria junto a la mítica playa purificadora y su vigorizante brisa marina.",
      "p2Title": "Herencia Ayurvédica",
      "p2Desc": "Acceso directo a tratamientos tradicionales de Kerala y nutrición terapéutica.",
      "p3Title": "Serenidad sobre el Acantilado",
      "p3Desc": "Vistas panorámicas del Mar Arábigo, atardeceres mágicos y paz costera.",
      "p4Title": "Energía Sagrada Ancestral",
      "p4Desc": "Inspiración en la presencia del milenario templo Janardanaswamy."
    }
  },
  "ja": {
    "badge": "沿岸のサンクチュアリ",
    "title": "ヴァルカラでヨガ指導者養成コースを選ぶ理由",
    "subtitle": "アラビア海の爽やかな潮風、本格的なアーユルヴェーダの伝統、古代寺院の霊気が交差するケーララ州の赤い断崖の上で、ヨガの深淵を目覚めさせる。",
    "paragraphs": [
      "南西部のマラバール海岸に位置するヴァルカラは、静寂と美しさを誇るケーララ州の至宝です。混雑した観光地とは一線を画し、壮大な赤色ラテライトの断崖がエメラルドグリーンのアラビア海へと切り立つ、息を呑むような大自然が広がっています。何世紀にもわたり、修行者や探求者たちが波のリズムと潮風に包まれ、内なる変容を求めてこの海辺を訪れてきました。",
      "断崖の麓には、サンスクリット語で「すべての罪・穢れの浄化」を意味する神聖なパパナサム・ビーチが広がります。ミネラル豊富な海での沐浴はエネルギーの微細身を浄化すると伝えられています。マイナスイオンを豊富に含んだ潮風を吸い込みながら行う朝のプラーナヤマと瞑想は、神経系を整え、ヨガの深層へ至る理想的な心身の土台を築きます。",
      "「神の国」と称され、アーユルヴェーダ発祥の地として知られるケーララ州に位置するヴァルカラでは、本物の伝統医療とヨガを同時に学べます。毎日のディナチャリヤ（生活習慣法）、ドーシャに合わせた食事法、ホリスティックな癒やしを体験し、身体の活力と心の平安を取り戻します。",
      "さらに、2000年の歴史を誇るジャナルダナスワーミ寺院の神聖なエネルギーがこの地を守っています。都会の喧騒から完全に隔絶された静かな環境で、ヤシの木が揺れる砂浜を歩き、黄金色に染まる夕日を眺めながら、学んだ知識を深く心に染み渡らせることができます。"
    ],
    "photoCaptions": {
      "subMain": "アラビア海を見渡す息をのむほど美しい沿岸の赤土絶壁の景観",
      "main": "ヴァルカラの赤い断崖と聖なるパパナサム・ビーチ",
      "sub1": "2000年の歴史を持つジャナルダナスワーミ寺院",
      "sub2": "アラビア海を望むサンセット瞑想"
    },
    "pillars": {
      "p1Title": "聖なるパパナサムの海",
      "p1Desc": "清らかな湧水とマイナスイオン豊富な潮風が満ちる聖なるビーチでの毎日の修練。",
      "p2Title": "アーユルヴェーダの伝統",
      "p2Desc": "ケーララ州の本格的なアーユルヴェーダ療法と自然治癒の知識を体験。",
      "p3Title": "断崖の絶景と静寂",
      "p3Desc": "アラビア海を一望するパノラマビュー、美しい夕日、心安らぐ静けさ。",
      "p4Title": "古代寺院のエネルギー",
      "p4Desc": "2000年の歴史を誇るジャナルダナスワーミ寺院の神聖な気配に抱かれた学び。"
    }
  },
  "ko": {
    "badge": "해안 성소",
    "title": "바르칼라 요가 지도자 과정을 선택해야 하는 이유",
    "subtitle": "아라비아해의 상쾌한 바닷바람, 순수한 아유르베다 유산, 유서 깊은 사원이 어우러진 케랄라의 붉은 절벽 위에서 수련을 일깨우세요.",
    "paragraphs": [
      "말라바르 해안 남서쪽에 위치한 바르칼라는 케랄라주에서 가장 평화롭고 성스러운 영적 안식처입니다. 붐비는 관광지와 달리, 바르칼라는 붉은 라테라이트 절벽이 아라비아해의 에메랄드빛 바다로 곧게 이어지는 자연의 신비를 고스란히 간직하고 있습니다. 수세기 동안 전 세계 요기들이 파도 소리와 바닷바람 속에서 깊은 내면의 변화를 이루기 위해 이곳을 찾아왔습니다.",
      "절벽 아래에는 '모든 죄와 번뇌의 정화'를 뜻하는 신성한 파파나삼 해변이 펼쳐져 있습니다. 미네랄이 풍부한 바닷물은 몸과 미세 에너지를 정화하는 것으로 전해집니다. 음이온이 가득한 해풍을 마시며 절벽 위에서 진행하는 아침 프라나야마와 명상은 신경계를 편안하게 진정시키며 깊은 몰입을 가능하게 합니다.",
      "아유르베다의 발상지이자 '신의 나라'로 불리는 케랄라에 위치하여 전통 치유 요법을 자연스럽게 함께 배울 수 있습니다. 전통 디나차리야(일일 생활 규율), 도샤 맞춤형 사트빅 식단, 전인적 치유 지식을 체득하여 육체적 활력과 정신적 평안을 되찾습니다.",
      "2천 년 역사를 지닌 자나르다나스와미 사원의 영적 기운 또한 바르칼라를 특별하게 만듭니다. 도시의 소음에서 벗어나 해변 산책로를 거닐고 아라비아해 위로 떨어지는 붉은 노을을 바라보며 깊은 요가 지혜를 자연스럽게 체화할 수 있습니다."
    ],
    "photoCaptions": {
      "subMain": "아라비아해를 굽어보는 태고의 붉은 절벽과 천혜의 해안 지질 경관",
      "main": "바르칼라 붉은 절벽과 신성한 파파나삼 해변",
      "sub1": "2,000년 역사의 자나르다나스와미 사원",
      "sub2": "아라비아해 일몰 명상"
    },
    "pillars": {
      "p1Title": "신성한 파파나삼 바다",
      "p1Desc": "미네랄 온천수와 청정한 해풍이 함께하는 전설적인 정화의 해변에서 매일 진행되는 수련.",
      "p2Title": "아유르베다 본고장의 유산",
      "p2Desc": "전통 케랄라 아유르베다 치료와 체질 맞춤형 웰빙 지식을 직접 체험.",
      "p3Title": "절벽 위의 평온함",
      "p3Desc": "아라비아해가 한눈에 들어오는 파노라마 전망, 황금빛 일몰, 군중을 벗어난 고요한 휴식.",
      "p4Title": "고대 사원의 영적 에너지",
      "p4Desc": "2,000년 전통의 자나르다나스와미 사원이 뿜어내는 깊고 성스러운 기운."
    }
  },
  "zh": {
    "badge": "海滨圣地",
    "title": "为什么选择在瓦尔卡拉进行瑜伽导师培训",
    "subtitle": "在喀拉拉邦雄伟的红色红土悬崖之上唤醒您的修习，阿拉伯海的清凉海风、纯正的阿育吠陀遗产与神圣古寺在此交融。",
    "paragraphs": [
      "瓦尔卡拉坐落于西南部的马拉巴尔海岸，是喀拉拉邦灵性宁静的璀璨明珠。与拥挤的旅游景点不同，瓦尔卡拉拥有壮丽而原始的自然庇护所，巍峨的红色悬崖直接俯瞰着阿拉伯海温暖碧绿的波涛。几个世纪以来，无数灵性探寻者和瑜伽修行者汇聚于此，在海潮律动与海风吹拂中经历深刻的身心蜕变。",
      "悬崖之下是著名的神圣帕帕纳萨姆海滩（Papanasam Beach），其梵文含义即为“洗净一切罪愆与负荷”。古老传说认为，在富含天然矿物质的海水中沐浴能够洗涤微细能量体。在悬崖之巅呼吸富含负离子的海风并练习晨间调息与冥想，能深入舒缓神经系统，为瑜伽的精进修习提供了绝佳的天然环境。",
      "作为闻名全球的“神之故乡”以及阿育吠陀的发祥地，在喀拉拉邦的瓦尔卡拉学习可无缝接轨正统的身心疗愈智慧。我们的课程融入了阿育吠陀日常养生法（Dinacharya）、体质饮食学与整体平衡之道，让您切身体会传统自然疗法与经典瑜伽体式的完美结合。",
      "拥有两千年历史的贾纳尔达纳斯瓦米神庙更赋予了这片土地深厚的灵性能量。远离喧嚣的大都市，您可以在椰林掩映的安静海岸漫步，静观阿拉伯海壮丽的金色日落，在自然的宁静中彻底消化与沉淀深奥的瑜伽智慧。"
    ],
    "photoCaptions": {
      "subMain": "俯瞰浩瀚阿拉伯海的原始天然红砂岩海岸地质奇观",
      "main": "瓦尔卡拉红色悬崖与神圣帕帕纳萨姆海滩",
      "sub1": "两千年历史的贾纳尔达纳斯瓦米古庙",
      "sub2": "阿拉伯海日落冥想"
    },
    "pillars": {
      "p1Title": "神圣净化之海",
      "p1Desc": "在充满天然矿泉与纯净海风的传奇海滩旁每日修习，涤荡身心。",
      "p2Title": "阿育吠陀正统传承",
      "p2Desc": "亲身体验正宗喀拉拉阿育吠陀疗愈智慧与个性化体质调养法。",
      "p3Title": "绝美悬崖宁静之境",
      "p3Desc": "饱览阿拉伯海全景，观赏金色落日，尽享远离喧嚣的静修氛围。",
      "p4Title": "两千年古刹灵韵",
      "p4Desc": "沉浸于两千年贾纳尔达纳斯瓦米神庙的神圣气场与传统底蕴中。"
    }
  },
  "ru": {
    "badge": "Прибрежное Святилище",
    "title": "Почему стоит выбрать Варкалу для обучения преподавателей йоги",
    "subtitle": "Пробудите свою практику на величественных красных утесах Кералы, где сходятся бриз Аравийского моря, наследие Аюрведы и древние храмы.",
    "paragraphs": [
      "Величественно возвышаясь на юго-западном побережье Малабара, Варкала является жемчужиной Кералы. Вдали от шумных туристических курортов, Варкала предлагает нетронутую природу, где высокие скалы из красного латерита круто обрываются в бирюзовые воды Аравийского моря. На протяжении веков духовные искатели стремились сюда, чтобы пережить глубокую трансформацию под мягкий шум океанских волн.",
      "У подножия утесов раскинулся священный пляж Папанасам, чье название на санскрите означает «очищение от всех грехов». Согласно преданиям, омовение в этих минеральных водах очищает тонкое тело. Практика пранаямы и медитации на рассвете на вершине утеса, наполненная морским воздухом с отрицательными ионами, успокаивает нервную систему и создает идеальные условия для погружения в йогу.",
      "Керала по праву считается родиной Аюрведы, и обучение в Варкале открывает прямой доступ к аутентичным знаниям целостного оздоровления. Наш курс включает правила аюрведического распорядка дня (диначарья), питание по дошам и методы гармонизации жизненных сил.",
      "Особую духовную силу этому месту придает 2000-летний храм Джанарданасвами, посвященный Господу Вишну. Между занятиями вы сможете гулять по уединенным пальмовым рощам, наблюдать закаты над Аравийским морем и впитывать природную тишину, необходимую для глубокой интеграции знаний."
    ],
    "photoCaptions": {
      "subMain": "Живописная первозданная геология побережья с видом на Аравийское море",
      "main": "Красные скалы Варкалы и пляж Папанасам",
      "sub1": "Древний храм Джанарданасвами (2000 лет)",
      "sub2": "Медитация на закате у Аравийского моря"
    },
    "pillars": {
      "p1Title": "Священные воды Папанасам",
      "p1Desc": "Ежедневная практика на легендарном пляже с минеральными источниками и морским бризом.",
      "p2Title": "Наследие Аюрведы Кералы",
      "p2Desc": "Прямой доступ к традиционным аюрведическим практикам и правильному питанию.",
      "p3Title": "Умиротворение на утесах",
      "p3Desc": "Панорамные виды на Аравийское море, золотые закаты и покой вдали от толпы.",
      "p4Title": "Энергия древнего храма",
      "p4Desc": "Особая атмосфера священного храма Джанарданасвами с двухтысячелетней историей."
    }
  },
  "it": {
    "badge": "Santuario Costiero",
    "title": "Perché Scegliere Varkala per la Formazione Insegnanti Yoga",
    "subtitle": "Risveglia la tua pratica in cima alle spettacolari scogliere rosse del Kerala, dove la brezza del Mar Arabico incontra l'Ayurveda e templi millenari.",
    "paragraphs": [
      "Arroccata lungo la costa sudoccidentale del Malabar, Varkala è il gioiello di serenità del Kerala. Lontano dal turismo di massa, offre un santuario naturale incontaminato dove scogliere di laterite rossa si tuffano nelle acque turchesi del Mar Arabico. Da secoli praticanti e ricercatori spirituali raggiungono questa costa per vivere una trasformazione profonda cullati dal ritmo dell'oceano.",
      "Ai piedi delle scogliere si trova la sacra spiaggia di Papanasam, il cui nome significa \"purificazione da ogni impurità\". Secondo la tradizione, immergersi in queste acque ricche di minerali rigenera il corpo sottile. La pratica mattutina di pranayama e meditazione sulla scogliera, respirando aria ricca di ioni negativi, calma il sistema nervoso e favorisce uno studio profondo.",
      "Situata nel Kerala, culla millenaria dell'Ayurveda, la formazione a Varkala si unisce alla medicina olistica tradizionale. Il nostro corso integra la dinacharya (routine quotidiana), alimentazione doshica e armonia interiore, restituendo vitalità fisica e serenità mentale.",
      "A impreziosire questo luogo c'è il tempio di Janardanaswamy, risalente a oltre 2.000 anni fa. Tra una lezione e l'altra potrai passeggiare lungo spiagge tranquille, ammirare tramonti dorati sul Mar Arabico e trovare la calma necessaria per assimilare gli insegnamenti."
    ],
    "photoCaptions": {
      "subMain": "Incontaminata geologia costiera affacciata sul Mar Arabico",
      "main": "Scogliere Rosse di Varkala e Spiaggia Papanasam",
      "sub1": "Storico Tempio Janardanaswamy di 2.000 Anni",
      "sub2": "Meditazione al Tramonto sul Mar Arabico"
    },
    "pillars": {
      "p1Title": "Acque Sacre di Papanasam",
      "p1Desc": "Pratica quotidiana lungo la spiaggia mitica, famosa per le sorgenti minerali e l'aria pura.",
      "p2Title": "Eredità Ayurvedica",
      "p2Desc": "Accesso diretto a trattamenti tradizionali del Kerala e nutrizione naturale.",
      "p3Title": "Serenità sulla Scogliera",
      "p3Desc": "Panorami mozzafiato sul Mar Arabico, tramonti dorati e totale tranquillità.",
      "p4Title": "Energia Spirituale Millenaria",
      "p4Desc": "Ispirazione e radicamento nella presenza del tempio Janardanaswamy."
    }
  },
  "nl": {
    "badge": "Kust Heiligdom",
    "title": "Waarom Kiezen voor Varkala voor je Yogadocentenopleiding",
    "subtitle": "Verdiep je beoefening bovenop de dramatische rode kliffen van Kerala, waar de zeebries van de Arabische Zee, pure Ayurveda en heilige tempels samenkomen.",
    "paragraphs": [
      "Gelegen langs de zuidwestelijke Malabarkust is Varkala het serene kroonjuweel van Kerala. Ver weg van het massatoerisme biedt Varkala een ongerept natuurgebied waar torenhoge rode kliffen direct afdalen in het turquoise water van de Arabische Zee. Al eeuwenlang reizen yogi's en spirituele zoekers naar deze kust om diepe transformatie te ervaren op het ritme van de oceaan.",
      "Aan de voet van de kliffen ligt het heilige Papanasam-strand, waarvan de naam letterlijk 'vernietiging van alle zonden' betekent. Volgens oude tradities zuivert een bad in dit mineraalrijke water het energielichaam. Ochtendpranayama en meditatie bovenop de klif in de zilte zeelucht kalmeert het zenuwstelsel en schept de ideale biologische omstandigheden voor verdieping.",
      "Als onderdeel van Kerala – de bakermat van Ayurveda – biedt studeren in Varkala directe toegang tot holistische geneeskunst. Ons curriculum omvat traditionele dinacharya (dagelijkse leefstijlroutines), voeding afgestemd op de dosha's en eeuwenoude wijsheid om vitaliteit en rust te herstellen.",
      "Dit gebied wordt gezegend door de 2.000 jaar oude Janardanaswamy-tempel. Tussen de intensieve lessen door kun je wandelen langs rustige, met palmen omzoomde paden, genieten van gouden zonsondergangen en de stilte ervaren die nodig is om de opgedane kennis te verankeren."
    ],
    "photoCaptions": {
      "subMain": "Ongerepte kustgeologie met uitzicht op de Arabische Zee",
      "main": "Varkala Rode Kliffen & Heilig Papanasam Strand",
      "sub1": "Historische 2.000 Jaar Oude Janardanaswamy Tempel",
      "sub2": "Zonsondergang Meditatie aan de Arabische Zee"
    },
    "pillars": {
      "p1Title": "Heilig Papanasam Water",
      "p1Desc": "Dagelijkse beoefening aan het legendarische strand met mineraalbronnen en verfrissende zeelucht.",
      "p2Title": "Ayurvedische Traditie",
      "p2Desc": "Directe toegang tot authentieke Kerala-behandelingen en holistische kennis.",
      "p3Title": "Sereniteit op de Kliffen",
      "p3Desc": "Panoramisch uitzicht over de Arabische Zee, gouden zonsondergangen en rust.",
      "p4Title": "Eeuwenoude Tempelenergie",
      "p4Desc": "Geworteld in de spirituele aanwezigheid van de 2.000 jaar oude tempel."
    }
  },
  "id": {
    "badge": "Suaka Pesisir Pantai",
    "title": "Mengapa Memilih Varkala untuk Pelatihan Guru Yoga",
    "subtitle": "Bangkitkan latihan yoga Anda di atas tebing laterit merah Kerala yang megah, tempat angin Laut Arab, warisan Ayurveda murni, dan kuil kuno bersatu.",
    "paragraphs": [
      "Terletak di sepanjang pantai barat daya Malabar, Varkala adalah permata ketenangan spiritual di Kerala. Berbeda dari tujuan wisata yang ramai, Varkala menawarkan suaka alami yang dramatis di mana tebing laterit merah menjulang tinggi dan menukik langsung ke Laut Arab yang hangat dan biru kehijauan. Selama berabad-abad, para pencari spiritual dan yogi telah datang ke pantai ini untuk mengalami transformasi mendalam diiringi irama deburan ombak.",
      "Di kaki tebing terbentang Pantai Papanasam yang suci, yang namanya berarti \"penyucian segala dosa\". Menurut tradisi kuno, berendam di perairan kaya mineral ini menyucikan tubuh energi halus. Berlatih pranayama pagi dan meditasi di atas tebing sambil menghirup udara laut berion negatif menenangkan sistem saraf dan menciptakan suasana ideal untuk pendalaman yoga.",
      "Sebagai bagian dari Kerala—yang dirayakan dunia sebagai \"Negeri Milik Tuhan\" dan tempat lahirnya Ayurveda—pelatihan di Varkala menawarkan akses langsung ke penyembuhan holistik autentik. Kurikulum kami memadukan dinacharya tradisional (rutinitas gaya hidup harian), nutrisi berbasis dosha, dan keseimbangan alami untuk memulihkan vitalitas.",
      "Kuil Janardanaswamy yang berusia 2.000 tahun semakin memperkaya energi spiritual kawasan ini. Jauh dari hiruk pikuk kota, Anda dapat merenung di sepanjang pantai berbingkai pohon kelapa, menyaksikan matahari terbenam keemasan di Laut Arab, dan menyerap kedamaian alami yang penting bagi perjalanan yoga Anda."
    ],
    "photoCaptions": {
      "subMain": "Geologi pesisir alami yang menghadap ke Samudra Hindia",
      "main": "Tebing Merah Varkala & Pantai Suci Papanasam",
      "sub1": "Kuil Bersejarah Janardanaswamy 2.000 Tahun",
      "sub2": "Meditasi Matahari Terbenam di Tepi Laut Arab"
    },
    "pillars": {
      "p1Title": "Perairan Suci Papanasam",
      "p1Desc": "Latihan harian di samping pantai pembersihan legendaris yang kaya akan sumber mata air mineral alami.",
      "p2Title": "Warisan Ayurveda",
      "p2Desc": "Akses langsung ke terapi Ayurveda tradisional Kerala dan nutrisi sehat penyeimbang energi.",
      "p3Title": "Ketenangan Tebing Laut",
      "p3Desc": "Pemandangan panorama Laut Arab yang luas, matahari terbenam keemasan, dan suasana tenang.",
      "p4Title": "Energi Kuil Kuno",
      "p4Desc": "Berakar dalam kehadiran spiritual Kuil Janardanaswamy yang telah berdiri selama 2.000 tahun."
    }
  }
};
