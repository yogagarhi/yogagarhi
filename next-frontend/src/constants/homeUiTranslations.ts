// Home UI Translations across all 11 locales
export interface HomeCoursesCampusUIData {
  campusTitle: string;
  campusSubtitle: string;
  baliCampus: string;
  rishikeshCampus: string;
  varkalaCampus: string;
}

export interface StudentStoriesUIData {
  watchAllStories: string; // {count} placeholder
  showLess: string;
  viewAllStories: string;
}

export interface FAQTestimonialUIData {
  testimonialQuote: string;
  testimonialRole: string;
}

export interface YttcPostSupportCard {
  title: string;
  description: string;
}

export interface YttcSupportUIData {
  postCards: YttcPostSupportCard[];
  timelinePrep: string;
  timelineDays: string;
  timelineLifelong: string;
  timelineHintPart1: string;
  timelineHintPart2: string;
  timelineHintPart3: string;
  dialogTitle: string;
  dialogDesc: string;
  dialogPlaceholder: string;
  dialogBtn: string;
  dialogPrivacy: string;
}

export const HOME_COURSES_CAMPUS_UI: Record<string, HomeCoursesCampusUIData> = {
  en: {
    campusTitle: "Explore Our Global Training Campuses",
    campusSubtitle: "Yoga Alliance certified residential courses in Bali, Rishikesh & Varkala (Kerala)",
    baliCampus: "🌴 Bali Campus",
    rishikeshCampus: "⛰️ Rishikesh Campus",
    varkalaCampus: "🌊 Varkala (Kerala) Campus",
  },
  id: {
    campusTitle: "Jelajahi Kampus Pelatihan Global Kami",
    campusSubtitle: "Kursus residensial bersertifikasi Yoga Alliance di Bali, Rishikesh & Varkala (Kerala)",
    baliCampus: "🌴 Kampus Bali",
    rishikeshCampus: "⛰️ Kampus Rishikesh",
    varkalaCampus: "🌊 Kampus Varkala (Kerala)",
  },
  de: {
    campusTitle: "Entdecken Sie unsere weltweiten Ausbildungszentren",
    campusSubtitle: "Yoga Alliance zertifizierte Intensivkurse in Bali, Rishikesh & Varkala (Kerala)",
    baliCampus: "🌴 Bali Campus",
    rishikeshCampus: "⛰️ Rishikesh Campus",
    varkalaCampus: "🌊 Varkala (Kerala) Campus",
  },
  fr: {
    campusTitle: "Découvrez nos campus de formation internationaux",
    campusSubtitle: "Formations résidentielles certifiées Yoga Alliance à Bali, Rishikesh et Varkala (Kerala)",
    baliCampus: "🌴 Campus de Bali",
    rishikeshCampus: "⛰️ Campus de Rishikesh",
    varkalaCampus: "🌊 Campus de Varkala (Kerala)",
  },
  es: {
    campusTitle: "Explora nuestros campus de formación globales",
    campusSubtitle: "Cursos residenciales certificados por Yoga Alliance en Bali, Rishikesh y Varkala (Kerala)",
    baliCampus: "🌴 Campus Bali",
    rishikeshCampus: "⛰️ Campus Rishikesh",
    varkalaCampus: "🌊 Campus Varkala (Kerala)",
  },
  it: {
    campusTitle: "Esplora i nostri campus di formazione globali",
    campusSubtitle: "Corsi residenziali certificati Yoga Alliance a Bali, Rishikesh e Varkala (Kerala)",
    baliCampus: "🌴 Campus Bali",
    rishikeshCampus: "⛰️ Campus Rishikesh",
    varkalaCampus: "🌊 Campus Varkala (Kerala)",
  },
  nl: {
    campusTitle: "Ontdek onze wereldwijde opleidingscampussen",
    campusSubtitle: "Door Yoga Alliance gecertificeerde residentiële cursussen in Bali, Rishikesh en Varkala (Kerala)",
    baliCampus: "🌴 Bali Campus",
    rishikeshCampus: "⛰️ Rishikesh Campus",
    varkalaCampus: "🌊 Varkala (Kerala) Campus",
  },
  ru: {
    campusTitle: "Исследуйте наши международные учебные центры",
    campusSubtitle: "Сертифицированные курсы с проживанием (Yoga Alliance) на Бали, в Ришикеше и Варкале (Керала)",
    baliCampus: "🌴 Кампус на Бали",
    rishikeshCampus: "⛰️ Кампус в Ришикеше",
    varkalaCampus: "🌊 Кампус в Варкале (Керала)",
  },
  ja: {
    campusTitle: "グローバルトレーニングキャンパスを探索する",
    campusSubtitle: "バリ、リシケシ、ヴァルカラ（ケーララ）での全米ヨガアライアンス認定宿泊コース",
    baliCampus: "🌴 バリ キャンパス",
    rishikeshCampus: "⛰️ リシケシ キャンパス",
    varkalaCampus: "🌊 ヴァルカラ（ケーララ）キャンパス",
  },
  ko: {
    campusTitle: "글로벌 트레이닝 캠퍼스 알아보기",
    campusSubtitle: "발리, 리시케시, 바르칼라(케랄라)의 요가 얼라이언스 공인 기숙형 과정",
    baliCampus: "🌴 발리 캠퍼스",
    rishikeshCampus: "⛰️ 리시케시 캠퍼스",
    varkalaCampus: "🌊 바르칼라 (케랄라) 캠퍼스",
  },
  zh: {
    campusTitle: "探索我们的全球培训基地",
    campusSubtitle: "在巴厘岛、瑞诗凯诗和瓦尔卡拉（喀拉拉邦）提供瑜伽联盟认证全日制住宿课程",
    baliCampus: "🌴 巴厘岛校区",
    rishikeshCampus: "⛰️ 瑞诗凯诗校区",
    varkalaCampus: "🌊 瓦尔卡拉（喀拉拉邦）校区",
  },
};

export const STUDENT_STORIES_UI: Record<string, StudentStoriesUIData> = {
  en: {
    watchAllStories: "Watch All Stories ({count})",
    showLess: "Show Less",
    viewAllStories: "View All Stories",
  },
  id: {
    watchAllStories: "Tonton Semua Cerita ({count})",
    showLess: "Tampilkan Lebih Sedikit",
    viewAllStories: "Lihat Semua Cerita",
  },
  de: {
    watchAllStories: "Alle Geschichten ansehen ({count})",
    showLess: "Weniger anzeigen",
    viewAllStories: "Alle Geschichten anzeigen",
  },
  fr: {
    watchAllStories: "Voir tous les témoignages ({count})",
    showLess: "Voir moins",
    viewAllStories: "Voir tous les récits",
  },
  es: {
    watchAllStories: "Ver todas las historias ({count})",
    showLess: "Mostrar menos",
    viewAllStories: "Ver todas las historias",
  },
  it: {
    watchAllStories: "Guarda tutte le storie ({count})",
    showLess: "Mostra meno",
    viewAllStories: "Vedi tutte le storie",
  },
  nl: {
    watchAllStories: "Bekijk alle verhalen ({count})",
    showLess: "Minder tonen",
    viewAllStories: "Alle verhalen bekijken",
  },
  ru: {
    watchAllStories: "Смотреть все истории ({count})",
    showLess: "Показать меньше",
    viewAllStories: "Смотреть все истории",
  },
  ja: {
    watchAllStories: "すべての体験談を見る ({count})",
    showLess: "折りたたむ",
    viewAllStories: "すべてのストーリーを見る",
  },
  ko: {
    watchAllStories: "모든 후기 시청하기 ({count})",
    showLess: "접기",
    viewAllStories: "모든 스토리 보기",
  },
  zh: {
    watchAllStories: "观看所有学员故事 ({count})",
    showLess: "收起",
    viewAllStories: "查看所有故事",
  },
};

export const FAQ_TESTIMONIAL_UI: Record<string, FAQTestimonialUIData> = {
  en: {
    testimonialQuote: "The team answered all my questions before I even arrived. From visa guidance to what to pack — they made me feel completely prepared and supported.",
    testimonialRole: "200hr Graduate • Australia",
  },
  id: {
    testimonialQuote: "Tim menjawab semua pertanyaan saya bahkan sebelum saya tiba. Mulai dari panduan visa hingga apa yang harus dibawa — mereka membuat saya merasa benar-benar siap dan didukung.",
    testimonialRole: "Lulusan 200 Jam • Australia",
  },
  de: {
    testimonialQuote: "Das Team beantwortete alle meine Fragen schon vor meiner Ankunft. Von Visa-Tipps bis zur Packliste – ich fühlte mich rundum vorbereitet und bestens unterstützt.",
    testimonialRole: "200h Absolventin • Australien",
  },
  fr: {
    testimonialQuote: "L'équipe a répondu à toutes mes questions avant même mon arrivée. Des démarches de visa aux conseils pour faire ma valise, je me suis sentie parfaitement préparée et accompagnée.",
    testimonialRole: "Diplômée 200h • Australie",
  },
  es: {
    testimonialQuote: "El equipo respondió a todas mis preguntas antes de mi llegada. Desde la orientación sobre el visado hasta qué meter en la maleta, me hicieron sentir completamente preparado y apoyado.",
    testimonialRole: "Graduada 200h • Australia",
  },
  it: {
    testimonialQuote: "Il team ha risposto a ogni mia domanda prima ancora che arrivassi. Dalle informazioni sul visto a cosa mettere in valigia, mi hanno fatto sentire davvero pronto e supportato.",
    testimonialRole: "Diplomata 200h • Australia",
  },
  nl: {
    testimonialQuote: "Het team beantwoordde al mijn vragen nog voordat ik aankwam. Van visumhulp tot inpaklijsten – ik voelde me volledig voorbereid en ondersteund.",
    testimonialRole: "200u Afgestudeerde • Australië",
  },
  ru: {
    testimonialQuote: "Команда ответила на все мои вопросы ещё до моего приезда. От визовых нюансов до списка вещей — я чувствовала себя абсолютно готовой и поддержанной.",
    testimonialRole: "Выпускница курса 200ч • Австралия",
  },
  ja: {
    testimonialQuote: "到着する前からチームがすべての質問に丁寧に答えてくれました。ビザの取得案内から持ち物のアドバイスまで、万全の準備と温かいサポートを実感しました。",
    testimonialRole: "200時間卒業生 • オーストラリア",
  },
  ko: {
    testimonialQuote: "도착하기 전부터 팀에서 제 모든 질문에 친절하게 답변해 주었습니다. 비자 안내부터 준비물 체크리스트까지 완벽하게 준비되고 케어받는 느낌이었습니다.",
    testimonialRole: "200시간 졸업생 • 호주",
  },
  zh: {
    testimonialQuote: "在我抵达之前，团队就回答了我的所有疑问。从签证指导到行李准备，让我感到非常踏实和充满支持。",
    testimonialRole: "200小时毕业学员 • 澳大利亚",
  },
};

export const YTTC_SUPPORT_UI: Record<string, YttcSupportUIData> = {
  en: {
    postCards: [
      { title: "Bi-annual Upgrade Programs", description: "Programs to deepen your experience of the practices and upgrade your teaching skills" },
      { title: "Extensive Alumni Support", description: "A dedicated alumni platform for queries, clarifications, and continuous learning" },
      { title: "Community Connection", description: "Integration into a vibrant and supportive global community of YogaGarhi alumni" },
      { title: "Teaching Resources", description: "Access to a repository of articles, videos, and teaching materials" }
    ],
    timelinePrep: "Preparation",
    timelineDays: "21-24 Days",
    timelineLifelong: "Lifelong Support",
    timelineHintPart1: "👆 Click on",
    timelineHintPart2: "or",
    timelineHintPart3: "to see what we offer",
    dialogTitle: 'Get "Before You Join" Details',
    dialogDesc: 'Enter your email to receive the complete "Before You Join" preparation guide',
    dialogPlaceholder: "Enter your email address",
    dialogBtn: 'Send Me "Before You Join" Guide',
    dialogPrivacy: "🔒 We respect your privacy. No spam, ever.",
  },
  id: {
    postCards: [
      { title: "Program Pembaruan Dua Tahunan", description: "Program untuk memperdalam pengalaman latihan Anda dan meningkatkan keterampilan mengajar" },
      { title: "Dukungan Alumni Menyeluruh", description: "Platform khusus alumni untuk diskusi, klarifikasi, dan pembelajaran berkelanjutan" },
      { title: "Koneksi Komunitas", description: "Bergabung dalam komunitas global alumni YogaGarhi yang hangat dan suportif" },
      { title: "Materi Pengajaran", description: "Akses ke kumpulan artikel, video latihan, dan materi panduan mengajar" }
    ],
    timelinePrep: "Persiapan",
    timelineDays: "21-24 Hari",
    timelineLifelong: "Dukungan Seumur Hidup",
    timelineHintPart1: "👆 Klik pada",
    timelineHintPart2: "atau",
    timelineHintPart3: "untuk melihat yang kami sediakan",
    dialogTitle: 'Dapatkan Detail "Sebelum Bergabung"',
    dialogDesc: 'Masukkan email Anda untuk menerima panduan persiapan "Sebelum Bergabung" lengkap',
    dialogPlaceholder: "Masukkan alamat email Anda",
    dialogBtn: 'Kirim Panduan "Sebelum Bergabung"',
    dialogPrivacy: "🔒 Kami menghormati privasi Anda. Bebas spam selamanya.",
  },
  de: {
    postCards: [
      { title: "Halbjährliche Fortbildungsprogramme", description: "Programme zur Vertiefung Ihrer Praxis und Weiterentwicklung Ihrer Lehrkompetenz" },
      { title: "Umfassende Alumni-Unterstützung", description: "Eine eigene Alumni-Plattform für Fragen, Austausch und kontinuierliches Lernen" },
      { title: "Globale Gemeinschaft", description: "Einbindung in eine lebendige und herzliche weltweite YogaGarhi-Alumni-Community" },
      { title: "Lehrmaterialien & Ressourcen", description: "Zugriff auf eine umfangreiche Sammlung von Fachartikeln, Videos und Lehrunterlagen" }
    ],
    timelinePrep: "Vorbereitung",
    timelineDays: "21-24 Tage",
    timelineLifelong: "Lebenslange Begleitung",
    timelineHintPart1: "👆 Klicken Sie auf",
    timelineHintPart2: "oder",
    timelineHintPart3: "um mehr zu erfahren",
    dialogTitle: 'Infos zum "Vorbereitungsprogramm" erhalten',
    dialogDesc: 'Geben Sie Ihre E-Mail-Adresse ein, um den vollständigen Vorbereitungsleitfaden zu erhalten',
    dialogPlaceholder: "E-Mail-Adresse eingeben",
    dialogBtn: 'Vorbereitungsleitfaden anfordern',
    dialogPrivacy: "🔒 Wir respektieren Ihre Privatsphäre. Garantiert kein Spam.",
  },
  fr: {
    postCards: [
      { title: "Programmes de perfectionnement semestriels", description: "Des programmes pour approfondir votre pratique et perfectionner vos compétences d'enseignement" },
      { title: "Accompagnement continu des anciens élèves", description: "Une plateforme dédiée aux anciens élèves pour poser vos questions et continuer à apprendre" },
      { title: "Communauté internationale", description: "Intégrez une communauté mondiale chaleureuse et solidaire d'anciens élèves de YogaGarhi" },
      { title: "Ressources pédagogiques", description: "Accès à une bibliothèque d'articles, de vidéos et de supports d'enseignement" }
    ],
    timelinePrep: "Préparation",
    timelineDays: "21-24 Jours",
    timelineLifelong: "Soutien à vie",
    timelineHintPart1: "👆 Cliquez sur",
    timelineHintPart2: "ou",
    timelineHintPart3: "pour découvrir notre offre",
    dialogTitle: 'Recevoir le guide "Avant de nous rejoindre"',
    dialogDesc: 'Entrez votre adresse e-mail pour recevoir le guide complet de préparation',
    dialogPlaceholder: "Entrez votre adresse e-mail",
    dialogBtn: 'Envoyez-moi le guide de préparation',
    dialogPrivacy: "🔒 Nous respectons votre vie privée. Aucun spam, jamais.",
  },
  es: {
    postCards: [
      { title: "Programas de actualización semestrales", description: "Programas para profundizar en las prácticas y mejorar tus habilidades pedagógicas" },
      { title: "Apoyo integral a la comunidad de graduados", description: "Plataforma exclusiva de antiguos alumnos para dudas, consultas y aprendizaje continuo" },
      { title: "Conexión con la comunidad", description: "Integración en una vibrante y solidaria comunidad global de graduados de YogaGarhi" },
      { title: "Recursos para la enseñanza", description: "Acceso a un repositorio de artículos, vídeos y material didáctico exclusivo" }
    ],
    timelinePrep: "Preparación",
    timelineDays: "21-24 Días",
    timelineLifelong: "Apoyo de por vida",
    timelineHintPart1: "👆 Haz clic en",
    timelineHintPart2: "o",
    timelineHintPart3: "para ver lo que ofrecemos",
    dialogTitle: 'Obtener detalles de "Antes de unirte"',
    dialogDesc: 'Introduce tu correo electrónico para recibir la guía completa de preparación',
    dialogPlaceholder: "Introduce tu correo electrónico",
    dialogBtn: 'Enviarme la guía de preparación',
    dialogPrivacy: "🔒 Respetamos tu privacidad. Cero spam, garantizado.",
  },
  it: {
    postCards: [
      { title: "Programmi di aggiornamento semestrali", description: "Percorsi per approfondire la pratica e perfezionare le abilità di insegnamento" },
      { title: "Supporto continuo per ex allievi", description: "Una piattaforma dedicata agli ex studenti per dubbi, chiarimenti e formazione continua" },
      { title: "Comunità globale", description: "Integrazione in una calorosa comunità internazionale di diplomati YogaGarhi" },
      { title: "Risorse per l'insegnamento", description: "Accesso a una raccolta di articoli, video pratici e dispense didattiche" }
    ],
    timelinePrep: "Preparazione",
    timelineDays: "21-24 Giorni",
    timelineLifelong: "Supporto a vita",
    timelineHintPart1: "👆 Clicca su",
    timelineHintPart2: "o",
    timelineHintPart3: "per scoprire cosa offriamo",
    dialogTitle: 'Ricevi i dettagli "Prima di iniziare"',
    dialogDesc: 'Inserisci la tua email per ricevere la guida completa di preparazione',
    dialogPlaceholder: "Inserisci il tuo indirizzo email",
    dialogBtn: 'Inviami la guida di preparazione',
    dialogPrivacy: "🔒 Rispettiamo la tua privacy. Nessuno spam, mai.",
  },
  nl: {
    postCards: [
      { title: "Halfjaarlijkse verdiepingsprogramma's", description: "Programma's om je praktijkervaring te verdiepen en je doceervaardigheden te verfijnen" },
      { title: "Uitgebreide alumni-begeleiding", description: "Een toegewijd alumni-platform voor vragen, advies en voortdurende ontwikkeling" },
      { title: "Hechte community", description: "Opname in een inspirerende, ondersteunende wereldwijde gemeenschap van YogaGarhi-alumni" },
      { title: "Lesmateriaal & bronnen", description: "Toegang tot een rijke bibliotheek met artikelen, video's en onderwijsmateriaal" }
    ],
    timelinePrep: "Voorbereiding",
    timelineDays: "21-24 Dagen",
    timelineLifelong: "Levenslange steun",
    timelineHintPart1: "👆 Klik op",
    timelineHintPart2: "of",
    timelineHintPart3: "om ons aanbod te bekijken",
    dialogTitle: 'Ontvang details over "Voor je begint"',
    dialogDesc: 'Vul je e-mailadres in om de complete voorbereidingsgids te ontvangen',
    dialogPlaceholder: "Vul je e-mailadres in",
    dialogBtn: 'Stuur mij de voorbereidingsgids',
    dialogPrivacy: "🔒 We respecteren je privacy. Nooit spam.",
  },
  ru: {
    postCards: [
      { title: "Полугодовые программы повышения квалификации", description: "Программы для углубления личной практики и совершенствования навыков преподавания" },
      { title: "Всесторонняя поддержка выпускников", description: "Специальная платформа для выпускников для ответов на вопросы и непрерывного обучения" },
      { title: "Международное сообщество", description: "Доступ к активному и дружному глобальному сообществу выпускников YogaGarhi" },
      { title: "Учебные материалы", description: "Доступ к базе знаний со статьями, видеоуроками и методическими пособиями" }
    ],
    timelinePrep: "Подготовка",
    timelineDays: "21-24 Дня",
    timelineLifelong: "Пожизненная поддержка",
    timelineHintPart1: "👆 Нажмите на",
    timelineHintPart2: "или",
    timelineHintPart3: "чтобы узнать подробнее",
    dialogTitle: 'Получить руководство "Перед началом курса"',
    dialogDesc: 'Введите ваш email, чтобы получить подробное руководство по подготовке',
    dialogPlaceholder: "Введите ваш email",
    dialogBtn: 'Отправить мне руководство',
    dialogPrivacy: "🔒 Мы уважаем вашу конфиденциальность. Никакого спама.",
  },
  ja: {
    postCards: [
      { title: "年2回のスキルアッププログラム", description: "指導技術を向上させ、伝統的な修練をさらに深めるための特別プログラム" },
      { title: "手厚い卒業生サポート", description: "質問や疑問の解消、継続的な学びのための専用コミュニティプラットフォーム" },
      { title: "温かいコミュニティの絆", description: "世界中に広がるYogaGarhi卒業生の活発で支え合えるネットワークに参加" },
      { title: "充実のティーチングリソース", description: "指導に役立つ専門記事、動画アーカイブ、講義テキストへの自由なアクセス" }
    ],
    timelinePrep: "準備期間",
    timelineDays: "21〜24日間",
    timelineLifelong: "生涯サポート",
    timelineHintPart1: "👆",
    timelineHintPart2: "または",
    timelineHintPart3: "をクリックして詳細を確認",
    dialogTitle: '「ご参加前の準備ガイド」を受け取る',
    dialogDesc: 'メールアドレスを入力して、事前準備ガイド全文をお受け取りください',
    dialogPlaceholder: "メールアドレスを入力",
    dialogBtn: '準備ガイドを送信する',
    dialogPrivacy: "🔒 プライバシーを尊重します。スパムは一切送信しません。",
  },
  ko: {
    postCards: [
      { title: "연 2회 업그레이드 프로그램", description: "수련 경험을 심화하고 티칭 스킬을 한 단계 높일 수 있는 지속 프로그램" },
      { title: "체계적인 동문 지원 시스템", description: "지속적인 질문과 피드백, 배움을 위한 전용 동문 커뮤니티 플랫폼" },
      { title: "글로벌 커뮤니티 연결", description: "따뜻하고 상호 지원적인 전 세계 YogaGarhi 동문 네트워크로의 합류" },
      { title: "풍부한 티칭 리소스", description: "지도에 필요한 전문 아티클, 영상 자료 및 수업 교재 라이브러리 제공" }
    ],
    timelinePrep: "사전 준비",
    timelineDays: "21-24일",
    timelineLifelong: "평생 지원",
    timelineHintPart1: "👆",
    timelineHintPart2: "또는",
    timelineHintPart3: "을(를) 클릭하여 혜택 확인",
    dialogTitle: '「과정 시작 전 안내 가이드」 받기',
    dialogDesc: '이메일을 입력하시면 상세 사전 준비 가이드를 보내드립니다',
    dialogPlaceholder: "이메일 주소 입력",
    dialogBtn: '사전 준비 가이드 받기',
    dialogPrivacy: "🔒 고객님의 개인정보를 소중히 보호하며, 스팸을 보내지 않습니다.",
  },
  zh: {
    postCards: [
      { title: "半年进阶升级研修", description: "旨在深化您的修习体验并提升教学技能的专属提升项目" },
      { title: "全方位校友后续支持", description: "专属校友互动平台，随时答疑解惑，助力终身进修学习" },
      { title: "全球社群紧密联结", description: "融入充满活力、互助友爱的全球 YogaGarhi 校友大家庭" },
      { title: "丰富教学资源库", description: "畅享海量教学课件、精选文章、实战视频与辅助教学资料" }
    ],
    timelinePrep: "前期准备",
    timelineDays: "21-24天",
    timelineLifelong: "终身相伴支持",
    timelineHintPart1: "👆 点击",
    timelineHintPart2: "或",
    timelineHintPart3: "了解更多详情",
    dialogTitle: '获取“入学前准备指南”详情',
    dialogDesc: '输入您的电子邮箱，即可免费获取完整的入学行前准备指南',
    dialogPlaceholder: "请输入您的电子邮箱",
    dialogBtn: '发送行前准备指南',
    dialogPrivacy: "🔒 我们尊重您的隐私，绝无任何垃圾邮件。",
  },
};

export function getHomeCoursesCampusUI(locale: string): HomeCoursesCampusUIData {
  return HOME_COURSES_CAMPUS_UI[locale] || HOME_COURSES_CAMPUS_UI['en'];
}

export function getStudentStoriesUI(locale: string): StudentStoriesUIData {
  return STUDENT_STORIES_UI[locale] || STUDENT_STORIES_UI['en'];
}

export function getFaqTestimonialUI(locale: string): FAQTestimonialUIData {
  return FAQ_TESTIMONIAL_UI[locale] || FAQ_TESTIMONIAL_UI['en'];
}

export function getYttcSupportUI(locale: string): YttcSupportUIData {
  return YTTC_SUPPORT_UI[locale] || YTTC_SUPPORT_UI['en'];
}
