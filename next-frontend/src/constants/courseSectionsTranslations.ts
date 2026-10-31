// Comprehensive Localized Translations for Course and Retreat Sections

export interface DifferencePillar {
  badge: string;
  title: string;
  description: string;
}

export interface DifferenceSectionData {
  badge: string;
  title: string;
  subtitle: string;
  guaranteed: string;
  pillars: DifferencePillar[];
}

export interface TrustBadge {
  tag: string;
  title: string;
}

export interface SeasonCard {
  badge: string;
  badgeColor?: string;
  temp: string;
  period: string;
  climate: string;
  description: string;
}

export interface CompareRow {
  feature?: string;
  c100: string;
  c200: string;
  c300: string;
}

export interface CompareCoursesUIData {
  badge: string;
  titleRishikesh: string;
  titleVarkala: string;
  subtitle: string;
  keyFeatures: string;
  immersion: string;
  mostPopular: string;
  masterLevel: string;
  viewDetails: string;
  c100Btn: string;
  c200Btn: string;
  c300Btn: string;
  explore100: string;
  explore200: string;
  explore300: string;
  from: string;
  f_duration: string;
  f_level: string;
  f_prereq: string;
  f_cert: string;
  f_focus: string;
  f_batch: string;
  f_price: string;
  rowsRishikesh?: CompareRow[];
  rowsVarkala?: CompareRow[];
}

export interface ExploreMoreCoursesUIData {
  badge: string;
  title: string;
  subtitle: string;
  exploreCourse: string;
}

export interface BestTimeToVisitUIData {
  badgeRishikesh: string;
  badgeVarkala: string;
  titleRishikesh: string;
  titleVarkala: string;
  subtitleRishikesh: string;
  subtitleVarkala: string;
  monthlyStart: string;
  seasonsRishikesh?: SeasonCard[];
  seasonsVarkala?: SeasonCard[];
}

export interface HowToReachUIData {
  badge: string;
  titleRishikesh: string;
  titleVarkala: string;
  titleBali: string;
  subtitleRishikesh: string;
  subtitleVarkala: string;
  subtitleBali: string;
  byAir: string;
  byTrain: string;
  byRoad: string;
  airportTransfers: string;
  checkInOut: string;
  taxiTitleRishikesh?: string;
  taxiTitleVarkala?: string;
  taxiSubRishikesh?: string;
  taxiSubVarkala?: string;
  thRoute?: string;
  thCostUsd?: string;
  thCostInr?: string;
  pickupStrong?: string;
  pickupTextRishikesh?: string;
  pickupTextVarkala?: string;
  pickupBtn?: string;
  visaTitle?: string;
  visaSub?: string;
  visaB1Title?: string;
  visaB1Text?: string;
  visaB2Title?: string;
  visaB2Text?: string;
  visaB3Title?: string;
  visaB3Text?: string;
  visaB4Title?: string;
  visaB4Text?: string;
  airItemsRishikesh?: any[];
  trainItemsRishikesh?: any[];
  roadItemsRishikesh?: any[];
  airItemsVarkala?: any[];
  trainItemsVarkala?: any[];
  roadItemsVarkala?: any[];
  taxiFaresRishikesh?: any[];
  taxiFaresVarkala?: any[];
  openInMaps?: string;
  syllabusBtn?: string;
  syllabusTitle?: string;
  syllabusDesc?: string;
  syllabusEmailPlaceholder?: string;
  syllabusSend?: string;
  syllabusSending?: string;
  syllabusPrompt?: string;
}

export interface FAQsHeaderUIData {
  badge: string;
  title: string;
  subtitleRishikesh: string;
  subtitleVarkala: string;
  chatWhatsApp?: string;
  helpDeskTitleRishikesh?: string;
  helpDeskTitleVarkala?: string;
  helpDeskSub?: string;
}

export interface RetreatExtraUIData {
  howToArriveTitle: string;
  howToArriveDesc: string;
  exploreOtherTitle: string;
  galleryTitle: string;
  galleryDesc: string;
  teacherTrainingTitle: string;
  teacherTrainingDesc: string;
}

export const YOGAGARHI_DIFFERENCE_RISHIKESH: Record<string, DifferenceSectionData> = {
  "en": {
    "badge": "Distinctive Excellence",
    "title": "The YogaGarhi Difference",
    "subtitle": "How our conscious teaching philosophy, strict cohort limits, Ayurvedic diagnostic methods, and Himalayan lineage stand distinctly apart from commercial training mills.",
    "guaranteed": "YogaGarhi Standard Guaranteed",
    "pillars": [
      {
        "badge": "Intimate Mentorship",
        "title": "Small Batches: 8–10 Students Max",
        "description": "While most commercial yoga institutions across Rishikesh crowd 25 to 35 students into a single echoing hall, YogaGarhi strictly caps every cohort at 8 to 10 practitioners. This intimate environment allows our master teachers to observe every student's breath, skeletal alignment, and muscular engagement throughout each asana. You receive daily one-on-one anatomical feedback, postural adjustments tailored specifically to your unique bone structure, and direct answers to your personal philosophical inquiries. You will never be a faceless number in the back row; you are an individual whose teaching voice matters."
      },
      {
        "badge": "Exclusive to YogaGarhi",
        "title": "Prakriti-Based Personalized Yoga",
        "description": "We reject rigid, one-size-fits-all sequencing that risks student injury. Drawing directly from classical Ayurveda and yogic therapy, our senior faculty evaluate your individual Prakriti—your innate constitutional balance of Vata, Pitta, and Kapha doshas. Throughout the course, you learn how to modify asanas, pranayama ratios, and daily meditation routines to balance your personal doshic nature and optimize your energy. More importantly, you graduate with the rare diagnostic ability to customize safe, therapeutic yoga sequences for students of all ages, body types, and health conditions."
      },
      {
        "badge": "Authentic Lineage",
        "title": "E-RYT 500 Himalayan Masters",
        "description": "At YogaGarhi, you train directly under authentic Himalayan masters led by Sachin Ji and our senior faculty. Our teachers hold elite E-RYT 500 designations, postgraduate university degrees in Yogic Science, and decades of lived gurukul training. They do not merely teach academic concepts; they embody the spiritual ethics, humility, and disciplined lifestyle of traditional sadhakas. By combining ancient Himalayan lineages with cutting-edge functional anatomy, biomechanics, and evidence-based sequencing, our faculty equip you with timeless wisdom and modern credibility."
      },
      {
        "badge": "Immediate Lifetime Access",
        "title": "Pre-YTTC Online Preparation",
        "description": "Your transformational journey begins the moment your registration is confirmed. You immediately receive lifetime access to our comprehensive Pre-YTTC online video preparation portal. Designed by our lead teachers, these preparatory modules walk you through essential Sanskrit pronunciation, primary asana alignments, breathwork basics, and foundational joint mobilization. By establishing regular daily sadhana before landing in India, you arrive at our Tapovan ashram physically prepared, mentally confident, and ready to dive directly into advanced immersion from day one."
      },
      {
        "badge": "Lifelong Community",
        "title": "Lifetime Free Re-attendance",
        "description": "Our sacred relationship does not conclude when you receive your certificate on graduation day. As a YogaGarhi alumnus, you belong to our global spiritual sangha for life. We offer a revolutionary lifetime free re-attendance guarantee: you can return to re-attend future batches of your completed course at either our Rishikesh or Bali campus completely tuition-free anytime in the future. Whether you wish to brush up on sequencing, refresh your Sanskrit philosophy, or simply recharge your spirit in our ashram, our doors are always open to you."
      }
    ]
  },
  "nl": {
    "badge": "Onderscheidende Uitmuntendheid",
    "title": "Het YogaGarhi Verschil",
    "subtitle": "Hoe onze bewuste onderwijsfilosofie, strikte groepsgroottes, Ayurvedische diagnostiek en Himalaya-traditie zich duidelijk onderscheiden van commerciële trainingsfabrieken.",
    "guaranteed": "YogaGarhi Standaard Gegarandeerd",
    "pillars": [
      {
        "badge": "PERSOONLIJKE BEGELEIDING",
        "title": "Kleine Groepen: Maximaal 8-10 Studenten",
        "description": "Waar de meeste commerciële yogascholen in Rishikesh 25 tot 35 studenten in één zaal proppen, beperkt YogaGarhi elke groep strikt tot 8 à 10 deelnemers. Dankzij deze kleinschalige setting kunnen onze meesterdocenten bij elke asana je ademhaling, skeletuitlijning en spieractivatie nauwkeurig observeren. Je krijgt dagelijks één-op-één anatomische feedback, houdingscorrecties op maat van jouw unieke lichaamsbouw en directe antwoorden op je persoonlijke filosofische vragen. Je bent nooit een anoniem nummer op de achterste rij; je bent een individu wiens stem als leraar ertoe doet."
      },
      {
        "badge": "EXCLUSIEF BIJ YOGAGARHI",
        "title": "Op Prakriti Gebaseerde Gepersonaliseerde Yoga",
        "description": "Wij verwerpen rigide, standaard sequenties die het risico op blessures vergroten. Gebaseerd op klassieke Ayurveda en yogatherapie beoordeelt onze senior faculteit jouw individuele Prakriti—je aangeboren constitutie van Vata, Pitta en Kapha dosha's. Gedurende de opleiding leer je asana's, pranayama-verhoudingen en dagelijkse meditatie aan te passen om je persoonlijke dosha-balans te optimaliseren. Bovenal studeer je af met het zeldzame diagnostische vermogen om veilige, therapeutische yogareeksen op maat samen te stellen voor studenten van elke leeftijd en elk lichaamstype."
      },
      {
        "badge": "AUTHENTIEKE TRADITIE",
        "title": "E-RYT 500 Himalaya Meesters",
        "description": "Bij YogaGarhi train je rechtstreeks onder authentieke Himalaya-meesters onder leiding van Sachin Ji en onze senior faculteit. Onze docenten bezitten elite E-RYT 500-certificeringen, universitaire mastertitels in Yogawetenschappen en decennia aan traditionele gurukul-training. Ze onderwijzen niet alleen theorie, maar belichamen de ethiek, nederigheid en toewijding van traditionele sadhaka's. Door oude Himalaya-tradities te combineren met functionele anatomie en biomechanica, voorzien zij je van tijdloze wijsheid en moderne geloofwaardigheid."
      },
      {
        "badge": "DIRECTE LEVENSLANGE TOEGANG",
        "title": "Pre-YTTC Online Voorbereiding",
        "description": "Je transformerende reis begint zodra je inschrijving is bevestigd. Je krijgt direct levenslang toegang tot ons uitgebreide Pre-YTTC online video-voorbereidingsportaal. Deze modules, ontwikkeld door onze hoofddocenten, leiden je door de Sanskriet-uitspraak, basisuitlijning van asana's, ademhalingstechnieken en gewrichtsmobilisatie. Door thuis al een dagelijkse sadhana op te bouwen, arriveer je fysiek voorbereid, mentaal zelfverzekerd en klaar om vanaf dag één diep in de stof te duiken."
      },
      {
        "badge": "LEVENSLANGE GEMEENSCHAP",
        "title": "Levenslang Gratis Herhalen",
        "description": "Onze band eindigt niet wanneer je op de diploma-uitreiking je certificaat ontvangt. Als afgestudeerde van YogaGarhi maak je voor het leven deel uit van onze wereldwijde sangha. Wij bieden een revolutionaire garantie: je kunt in de toekomst altijd gratis terugkeren om toekomstige groepen van je afgeronde opleiding bij te wonen in Rishikesh of Bali. Of je nu je sequenties wilt opfrissen, je filosofische kennis wilt verdiepen of simpelweg nieuwe energie wilt opdoen in het ashram; onze deuren staan altijd voor je open."
      }
    ]
  },
  "de": {
    "badge": "Herausragende Exzellenz",
    "title": "Der YogaGarhi Unterschied",
    "subtitle": "Wie unsere bewusste Lehrphilosophie, strikte Gruppenlimits, ayurvedische Diagnosemethoden und Himalaya-Tradition sich deutlich von kommerziellen Ausbildungsfabriken abheben.",
    "guaranteed": "YogaGarhi Standard Garantiert",
    "pillars": [
      {
        "badge": "PERSÖNLICHE MENTORSCHAFT",
        "title": "Kleine Gruppen: Maximal 8–10 Schüler",
        "description": "Während die meisten kommerziellen Yogaschulen in Rishikesh 25 bis 35 Schüler in einen Saal drängen, begrenzt YogaGarhi jede Gruppe strikt auf 8 bis 10 Teilnehmer. In dieser familiären Atmosphäre können unsere Meisterlehrer bei jeder Asana die Atmung, Skelettausrichtung und Muskelaktivierung jedes Einzelnen genau beobachten. Sie erhalten tägliches individuelles anatomisches Feedback, maßgeschneiderte Haltungskorrekturen und direkte Antworten auf Ihre philosophischen Fragen. Sie sind niemals eine anonyme Nummer in der letzten Reihe, sondern ein Individuum, dessen Stimme zählt."
      },
      {
        "badge": "EXKLUSIV BEI YOGAGARHI",
        "title": "Prakriti-basiertes personalisiertes Yoga",
        "description": "Wir lehnen starre Standard-Sequenzen ab, die das Verletzungsrisiko erhöhen. Basierend auf klassischem Ayurveda und Yogatherapie analysieren unsere Dozenten Ihre individuelle Prakriti – Ihre angeborene Dosha-Balance aus Vata, Pitta und Kapha. Im Kurs lernen Sie Asanas, Pranayama-Atemmuster und Meditationen so anzupassen, dass Ihre persönliche Natur harmonisiert wird. Sie erwerben die seltene Fähigkeit, sichere, therapeutische Yoga-Sequenzen für Menschen jeden Alters und Körpertyps zu gestalten."
      },
      {
        "badge": "AUTHENTISCHE TRADITION",
        "title": "E-RYT 500 Himalaya-Meister",
        "description": "Bei YogaGarhi lernen Sie direkt von traditionellen Himalaya-Meistern unter Leitung von Sachin Ji und unserem Dozententeam. Unsere Lehrer verfügen über E-RYT 500-Zertifizierungen, universitäre Abschlüsse in Yogawissenschaften und jahrzehntelange Gurukul-Erfahrung. Sie verkörpern die gelebte Demut und Ethik traditioneller Sadhakas. Die Verbindung jahrtausendealter Lehren mit moderner funktioneller Anatomie und Biomechanik verleiht Ihrer Ausbildung unübertroffene Tiefe und internationale Glaubwürdigkeit."
      },
      {
        "badge": "SOFORTIGER LEBENSLANGER ZUGANG",
        "title": "Pre-YTTC Online-Vorbereitung",
        "description": "Ihre transformative Reise beginnt bereits mit der Bestätigung Ihrer Anmeldung. Sie erhalten sofortigen, lebenslangen Zugang zu unserem Pre-YTTC Online-Vorbereitungsportal. Diese von unseren Cheflehrern entwickelten Module führen Sie in die korrekte Sanskrit-Aussprache, Asana-Grundlagen, Atemübungen und Gelenkmobilisation ein. So reisen Sie optimal vorbereitet, selbstbewusst und mit etablierter täglicher Sadhana in unserem Ashram in Tapovan an."
      },
      {
        "badge": "LEBENSLANGE GEMEINSCHAFT",
        "title": "Lebenslange Kostenlose Wiederholung",
        "description": "Unsere Verbindung endet nicht am Tag Ihrer Zertifikatsübergabe. Als YogaGarhi-Absolvent gehören Sie ein Leben lang zu unserer weltweiten Sangha. Wir bieten eine lebenslange kostenlose Wiederholungsgarantie: Sie können zukünftige Ausbildungsdurchgänge Ihres Kurses an unserem Campus in Rishikesh oder auf Bali jederzeit schulgeldfrei erneut besuchen. Ob zur Auffrischung Ihres Wissens oder zum Auftanken im Ashram – unsere Türen stehen Ihnen immer offen."
      }
    ]
  },
  "fr": {
    "badge": "Excellence Distinctive",
    "title": "La Différence YogaGarhi",
    "subtitle": "Comment notre philosophie d'enseignement conscient, nos effectifs strictement limités, nos méthodes diagnostiques ayurvédiques et notre lignée himalayenne se distinguent nettement des usines de formation commerciales.",
    "guaranteed": "Norme YogaGarhi Garantie",
    "pillars": [
      {
        "badge": "MENTORAT PERSONNALISÉ",
        "title": "Petits Groupes : 8 à 10 Étudiants Maximum",
        "description": "Alors que la plupart des écoles de yoga commerciales de Rishikesh entassent 25 à 35 élèves dans une même salle, YogaGarhi limite strictement chaque groupe à 8-10 pratiquants. Cet environnement intimiste permet à nos maîtres enseignants d'observer la respiration, l'alignement squelettique et l'engagement musculaire de chaque élève à chaque asana. Vous bénéficiez quotidiennement de retours anatomiques personnalisés, d'ajustements adaptés à votre morphologie et de réponses directes à vos interrogations philosophiques. Vous n'êtes jamais un numéro anonyme au fond de la salle."
      },
      {
        "badge": "EXCLUSIVITÉ YOGAGARHI",
        "title": "Yoga Personnalisé Basé sur la Prakriti",
        "description": "Nous rejetons les séquences rigides et standardisées qui risquent de blesser les pratiquants. En s'appuyant sur l'Ayurveda classique et la thérapie yogique, nos enseignants seniors évaluent votre Prakriti personnelle — l'équilibre inné de vos doshas Vata, Pitta et Kapha. Vous apprenez à adapter les asanas, les ratios de pranayama et la méditation pour équilibrer votre énergie. Vous obtenez la compétence rare de créer des séquences thérapeutiques sûres et personnalisées pour tout type d'élève."
      },
      {
        "badge": "LIGNÉE AUTHENTIQUE",
        "title": "Maîtres de l'Himalaya E-RYT 500",
        "description": "À YogaGarhi, vous vous formez directement auprès de maîtres authentiques de l'Himalaya, guidés par Sachin Ji et nos enseignants chevronnés. Certifiés E-RYT 500 et diplômés d'études universitaires en sciences yogiques, ils incarnent l'éthique spirituelle, l'humilité et la discipline des sadhakas traditionnels. En unissant la sagesse ancestrale de l'Himalaya à l'anatomie fonctionnelle et à la biomécanique contemporaine, notre équipe vous confère une solide autorité d'enseignement."
      },
      {
        "badge": "ACCÈS ILLIMITÉ IMMÉDIAT",
        "title": "Préparation En Ligne Pré-YTTC",
        "description": "Votre transformation commence dès la confirmation de votre inscription. Vous recevez un accès illimité à notre portail de préparation vidéo en ligne Pré-YTTC. Élaborés par nos professeurs principaux, ces modules vous initient à la prononciation du sanskrit, aux alignements fondamentaux, aux techniques de souffle et à la mobilité articulaire. Vous arrivez ainsi à l'ashram de Tapovan prêt physiquement, serein et capable de vous investir pleinement dès le premier jour."
      },
      {
        "badge": "COMMUNAUTÉ À VIE",
        "title": "Réinscription Gratuite à Vie",
        "description": "Notre lien ne s'arrête pas à la remise de votre diplôme. En tant qu'ancien élève de YogaGarhi, vous faites partie de notre sangha internationale pour la vie. Nous offrons une garantie unique de réinscription gratuite à vie : vous pouvez revenir assister aux promotions futures de votre formation à Rishikesh ou à Bali sans payer de frais de scolarité. Que ce soit pour réviser la pédagogie ou vous ressourcer à l'ashram, nos portes vous restent toujours ouvertes."
      }
    ]
  },
  "es": {
    "badge": "Excelencia Distintiva",
    "title": "La Diferencia YogaGarhi",
    "subtitle": "Cómo nuestra filosofía de enseñanza consciente, límites estrictos de grupo, métodos diagnósticos ayurvédicos y linaje del Himalaya se diferencian claramente de las fábricas de formación comerciales.",
    "guaranteed": "Estándar YogaGarhi Garantizado",
    "pillars": [
      {
        "badge": "MENTORÍA PERSONALIZADA",
        "title": "Grupos Reducidos: Máximo 8–10 Estudiantes",
        "description": "Mientras que la mayoría de los institutos comerciales de yoga en Rishikesh agrupan de 25 a 35 estudiantes en una sola sala, YogaGarhi limita estrictamente cada grupo a 8-10 practicantes. Este entorno íntimo permite a nuestros maestros observar la respiración, la alineación esquelética y la activación muscular de cada estudiante en cada asana. Recibes retroalimentación anatómica diaria personalizada, ajustes posturales adaptados a tu estructura ósea y respuestas directas a tus dudas filosóficas. Nunca serás un número más en la última fila."
      },
      {
        "badge": "EXCLUSIVO DE YOGAGARHI",
        "title": "Yoga Personalizado Basado en Prakriti",
        "description": "Rechazamos las secuencias rígidas y estandarizadas que ponen en riesgo la integridad del alumno. A partir del Ayurveda clásico y la yogaterapia, nuestro equipo evalúa tu Prakriti individual: el balance de tus doshas Vata, Pitta y Kapha. A lo largo del curso aprendes a adaptar asanas, proporciones de pranayama y meditación para equilibrar tu energía. Te gradúas con la capacidad de diseñar secuencias terapéuticas y seguras para personas de todas las edades y anatomías."
      },
      {
        "badge": "LINAJE AUTÉNTICO",
        "title": "Maestros del Himalaya E-RYT 500",
        "description": "En YogaGarhi te formas directamente con maestros del Himalaya dirigidos por Sachin Ji y nuestro cuerpo docente superior. Con credenciales E-RYT 500, posgrados universitarios en Ciencias Yóguicas y décadas de formación gurukul, encarnan la humildad y disciplina de los sadhakas tradicionales. Al fusionar linajes ancestrales con anatomía funcional y biomecánica moderna, te dotan de sabiduría atemporal y rigor internacional."
      },
      {
        "badge": "ACCESO INMEDIATO DE POR VIDA",
        "title": "Preparación Online Pre-YTTC",
        "description": "Tu viaje de transformación comienza en el instante en que se confirma tu plaza. Recibes acceso vitalicio inmediato a nuestro portal online de preparación en vídeo Pre-YTTC. Diseñado por nuestros profesores principales, incluye pronunciación en sánscrito, alineaciones esenciales, respiración y movilidad articular. Llegarás a nuestro ashram en Tapovan físicamente preparado, con una práctica diaria ya establecida y plena confianza."
      },
      {
        "badge": "COMUNIDAD DE POR VIDA",
        "title": "Reasistencia Gratuita de por Vida",
        "description": "Nuestra relación no concluye el día de tu graduación. Como graduado de YogaGarhi, perteneces de por vida a nuestra sangha espiritual global. Ofrecemos una garantía de reasistencia gratuita de por vida: puedes regresar a cursar futuras convocatorias de tu curso tanto en Rishikesh como en Bali sin pagar matrícula. Ya sea para perfeccionar tus secuencias o revitalizarte en el ashram, nuestras puertas siempre están abiertas."
      }
    ]
  },
  "it": {
    "badge": "Eccellenza Distintiva",
    "title": "La Differenza YogaGarhi",
    "subtitle": "Come la nostra filosofia didattica consapevole, i rigidi limiti di classe, i metodi diagnostici ayurvedici e la tradizione himalayana si distinguono nettamente dai corsi commerciali di massa.",
    "guaranteed": "Standard YogaGarhi Garantito",
    "pillars": [
      {
        "badge": "MENTORATO PERSONALIZZATO",
        "title": "Piccoli Gruppi: Massimo 8–10 Studenti",
        "description": "Mentre la maggior parte delle scuole commerciali di Rishikesh accoglie da 25 a 35 studenti in un'unica sala, YogaGarhi limita rigorosamente ogni corso a 8-10 praticanti. Questo ambiente raccolto consente ai nostri maestri di osservare la respirazione, l'allineamento scheletrico e l'ingaggio muscolare di ciascuno in ogni asana. Riceverai quotidianamente correzioni personalizzate in base alla tua conformazione corporea e risposte dirette ai tuoi quesiti filosofici. Non sarai mai un numero anonimo nell'ultima fila."
      },
      {
        "badge": "ESCLUSIVO PER YOGAGARHI",
        "title": "Yoga Personalizzato Basato su Prakriti",
        "description": "Rifiutiamo sequenze rigide e standardizzate che rischiano di causare infortuni. Attingendo direttamente all'Ayurveda tradizionale e alla yogaterapia, i nostri docenti valutano la tua Prakriti individuale: l'equilibrio innato dei dosha Vata, Pitta e Kapha. Imparerai ad adattare asana, pranayama e meditazione per armonizzare la tua costituzione. Ti diplomerai con la rara capacità di creare sequenze terapeutiche su misura per ogni allievo."
      },
      {
        "badge": "TRADIZIONE AUTENTICA",
        "title": "Maestri Himalayani E-RYT 500",
        "description": "A YogaGarhi studi direttamente con maestri himalayani guidati da Sachin Ji e dalla nostra facoltà senior. Insegnanti E-RYT 500 con lauree universitarie in Scienze dello Yoga e decenni di vita monastica gurukul, che incarnano l'umiltà e i principi etici dei sadhaka tradizionali. Unendo le radici antiche con l'anatomia funzionale e la biomeccanica moderna, ti trasmettono autorevolezza autentica."
      },
      {
        "badge": "ACCESSO IMMEDIATO A VITA",
        "title": "Preparazione Online Pre-YTTC",
        "description": "Il tuo percorso di trasformazione inizia subito dopo la conferma dell'iscrizione. Ricevi accesso a vita al nostro portale video di preparazione online Pre-YTTC. Con moduli creati dai nostri insegnanti guida su pronuncia sanscrita, allineamenti base, tecniche respiratorie e mobilità articolare. Arriverai al nostro ashram di Tapovan già preparato sul piano fisico e mentale, pronto per immergerti nello studio."
      },
      {
        "badge": "COMMUNITY A VITA",
        "title": "Ripetizione Gratuita a Vita",
        "description": "Il nostro legame non si esaurisce con la consegna del diploma. Come allievo YogaGarhi fai parte della nostra sangha mondiale a vita. Offriamo la garanzia di ripetere il corso gratuitamente: puoi tornare a frequentare le future edizioni del tuo percorso a Rishikesh o a Bali senza alcun costo di iscrizione. Per rinfrescare le sequenze o ricaricare lo spirito nell'ashram, le nostre porte sono sempre aperte."
      }
    ]
  },
  "ru": {
    "badge": "Отличительное Превосходство",
    "title": "В чем разница YogaGarhi",
    "subtitle": "Как наша осознанная философия преподавания, строго ограниченные группы, аюрведические методы диагностики и гималайская традиция принципиально отличаются от коммерческих курсов.",
    "guaranteed": "Стандарт YogaGarhi гарантирован",
    "pillars": [
      {
        "badge": "ЛИЧНОЕ НАСТАВНИЧЕСТВО",
        "title": "Малые группы: максимум 8–10 студентов",
        "description": "В то время как большинство коммерческих школ йоги в Ришикеше набирают по 25–35 человек в один зал, YogaGarhi строго ограничивает каждую группу до 8–10 практиков. Такая камерная обстановка позволяет нашим ведущим учителям внимательно отслеживать дыхание, биомеханику и выравнивание каждого ученика в каждой асане. Вы получаете ежедневную индивидуальную анатомическую обратную связь, коррекцию отстроек под особенности вашего тела и прямые ответы на философские вопросы."
      },
      {
        "badge": "ЭКСКЛЮЗИВНО В YOGAGARHI",
        "title": "Персонализированная йога на основе Пракрити",
        "description": "Мы отвергаем шаблонные последовательности, способные привести к травмам. Опираясь на классическую Аюрведу и йога-терапию, наши преподаватели определяют вашу индивидуальную Пракрити — природный баланс дош Вата, Питта и Капха. В ходе курса вы учитесь адаптировать асаны, пранаяму и медитацию под свою конституцию. Вы выпуститесь с редким навыком создания безопасных терапевтических программ для учеников любого возраста и телосложения."
      },
      {
        "badge": "ПОДЛИННАЯ ТРАДИЦИЯ",
        "title": "Гималайские мастера E-RYT 500",
        "description": "В YogaGarhi вы обучаетесь непосредственно у гималайских мастеров под руководством Сачина Джи. Наши учителя обладают наивысшей квалификацией E-RYT 500, университетскими степенями по йогическим наукам и десятилетиями практики в традиционных гурукулах. Они объединяют вековую мудрость Гималаев с передовой функциональной анатомией и биомеханикой, обеспечивая глубокое понимание сути йоги."
      },
      {
        "badge": "ПОЖИЗНЕННЫЙ ДОСТУП",
        "title": "Онлайн-подготовка Pre-YTTC",
        "description": "Ваша трансформация начинается в момент подтверждения бронирования. Вы сразу получаете бессрочный доступ к нашей обучающей онлайн-платформе Pre-YTTC. Видеомодули знакомят с произношением на санскрите, отстройками базовых асан, дыхательными техниками и суставной гимнастикой. Благодаря этому вы приезжаете в наш ашрам в Таповане физически готовыми и уверенными в своих силах."
      },
      {
        "badge": "ПОЖИЗНЕННОЕ СООБЩЕСТВО",
        "title": "Бесплатное повторное прохождение курса",
        "description": "Наши отношения не заканчиваются в день выпуска. Став выпускником YogaGarhi, вы навсегда становитесь частью нашей международной сангхи. Мы предоставляем уникальную гарантию: вы можете в любое время бесплатно повторно пройти свой курс в кампусах в Ришикеше или на Бали (оплачивается только проживание). Наши двери всегда открыты для вас."
      }
    ]
  },
  "id": {
    "badge": "Keunggulan Istimewa",
    "title": "Perbedaan YogaGarhi",
    "subtitle": "Bagaimana filosofi pengajaran sadar kami, batasan peserta yang ketat, metode diagnostik Ayurveda, dan garis keturunan Himalaya membedakan kami secara nyata dari pusat pelatihan komersial.",
    "guaranteed": "Standar YogaGarhi Terjamin",
    "pillars": [
      {
        "badge": "MENTORSHIP PRIBADI",
        "title": "Grup Kecil: Maksimal 8–10 Siswa",
        "description": "Sementara sebagian besar institusi yoga komersial di Rishikesh menjejalkan 25 hingga 35 siswa ke dalam satu aula besar, YogaGarhi secara ketat membatasi setiap angkatan hanya 8 hingga 10 praktisi. Lingkungan yang intim ini memungkinkan para guru master kami mengamati napas, penyelarasan postur, dan keterlibatan otot Anda di setiap asana. Anda menerima umpan balik anatomi tatap muka setiap hari, penyesuaian postur sesuai struktur tubuh unik Anda, dan bimbingan mendalam untuk setiap pertanyaan spiritual Anda."
      },
      {
        "badge": "EKSKLUSIF DI YOGAGARHI",
        "title": "Yoga Personal Berbasis Prakriti",
        "description": "Kami menolak sekuens kaku satu ukuran untuk semua yang berisiko mencederai siswa. Mengacu pada Ayurveda klasik dan terapi yoga, pengajar senior kami mengevaluasi Prakriti unik Anda—keseimbangan bawaan dosha Vata, Pitta, dan Kapha. Anda belajar memodifikasi asana, rasio pranayama, dan meditasi harian demi menyelaraskan energi pribadi. Anda lulus dengan keahlian langka merancang sekuens yoga terapeutik yang aman untuk segala usia dan tipe tubuh."
      },
      {
        "badge": "GARIS KETURUNAN ASLI",
        "title": "Master Himalaya E-RYT 500",
        "description": "Di YogaGarhi, Anda belajar langsung di bawah bimbingan master Himalaya yang dipimpin oleh Sachin Ji dan fakultas senior kami. Para pengajar berpredikat E-RYT 500, bergelar pascasarjana Ilmu Yoga, dan berpengalaman puluhan tahun dalam tradisi gurukul. Memadukan tradisi sakral dengan anatomi fungsional modern dan biomekanika, mereka membekali Anda dengan integritas dan wawasan mendalam."
      },
      {
        "badge": "AKSES SEUMUR HIDUP LANGSUNG",
        "title": "Persiapan Online Pra-YTTC",
        "description": "Perjalanan transformasi Anda dimulai begitu pendaftaran dikonfirmasi. Anda langsung memperoleh akses seumur hidup ke portal video persiapan online Pra-YTTC kami. Modul ini membimbing Anda dalam pelafalan Sanskerta, penyelarasan asana dasar, teknik pernapasan, dan mobilisasi sendi. Anda tiba di ashram Tapovan dengan tubuh bugar, pikiran tenang, dan siap menyelami materi secara maksimal sejak hari pertama."
      },
      {
        "badge": "KOMUNITAS SEUMUR HIDUP",
        "title": "Gratis Mengulang Seumur Hidup",
        "description": "Hubungan kita tidak berakhir saat sertifikat kelulusan diserahkan. Sebagai alumni YogaGarhi, Anda menjadi bagian dari sangha spiritual global kami seumur hidup. Kami memberikan jaminan mengulang kursus gratis seumur hidup: Anda dapat kembali mengikuti angkatan berikutnya dari kursus yang telah diselesaikan baik di kampus Rishikesh maupun Bali tanpa biaya kursus tambahan. Pintu kami selalu terbuka untuk Anda."
      }
    ]
  },
  "ja": {
    "badge": "卓越した独自性",
    "title": "YogaGarhiならではの強み",
    "subtitle": "当校の意識的な指導哲学、厳格な少人数制、アーユルヴェーダ診断法、そしてヒマラヤの伝統が、商業的な養成コースといかに一線を画しているかをご紹介します。",
    "guaranteed": "YogaGarhi基準保証",
    "pillars": [
      {
        "badge": "親身な個別指導",
        "title": "少人数クラス：最大8〜10名限定",
        "description": "リシケシの多くの商業的なヨガスクールでは1クラスに25〜35名もの生徒を詰め込みますが、YogaGarhiでは厳格に各期8〜10名に限定しています。この少人数環境により、指導陣が生徒一人ひとりの呼吸、骨格のアライメント、筋肉の使い方をアーサナごとに丁寧に観察します。ご自身の骨格に合わせた個別のアジャストメントや解剖学的フィードバックを毎日受けられ、後列の埋もれた存在になることは決してありません。"
      },
      {
        "badge": "YogaGarhi独自プログラム",
        "title": "プラクリティ（体質）に基づく個別化ヨガ",
        "description": "生徒の怪我につながるような画一的で固定的なシークエンスを排除します。古典アーユルヴェーダとヨガセラピーに基づき、指導陣が生徒一人ひとりの体質（ヴァータ、ピッタ、カパのドーシャバランスであるプラクリティ）を分析。個人の体質に合わせてアーサナの軽減法、呼吸法の比率、瞑想法を調整する方法を習得します。卒業時には、あらゆる年齢や体型の生徒に対して安全で治療効果の高い個別プログラムを構築できる希少な指導力を備えます。"
      },
      {
        "badge": "正統なる伝統",
        "title": "E-RYT 500 ヒマラヤのマスター講師陣",
        "description": "YogaGarhiでは、サチン師をはじめとする正統なヒマラヤのマスター陣から直接指導を受けます。講師陣は最高峰のE-RYT 500資格とヨガ科学の大学院修士号を保持し、長年のグルクル修行を積んでいます。単なる知識伝達にとどまらず、伝統的なサーダカとしての謙虚さと規律ある精神性を体現。古代ヒマラヤの伝統と最新の機能解剖学・バイオメカニクスを融合し、確かな自信と信頼性を授けます。"
      },
      {
        "badge": "即時生涯アクセス",
        "title": "受講前オンライン準備ポータル（Pre-YTTC）",
        "description": "お申し込み完了の瞬間から変容の旅がスタートします。主任講師陣が監修したPre-YTTCオンライン事前学習ポータルへの生涯アクセス権を即座に付与。サンスクリット語の正しい発音、基本アーサナのアライメント、呼吸法の基礎、関節のウォームアップを事前に学べます。渡航前に日々の修練（サーダナ）の基礎を固めておくことで、リシケシ到着初日から自信を持って深い学びに没頭できます。"
      },
      {
        "badge": "生涯にわたるコミュニティ",
        "title": "コース生涯無料再受講制度",
        "description": "卒業証書を手にした後も、私たちの絆が途切れることはありません。YogaGarhiの卒業生として、世界中に広がるスピリチュアルなサンガ（共同体）に生涯所属します。当校では画期的な【生涯無料再受講制度】を提供。将来いつでも、リシケシまたはバリ校にて修了済みコースの授業に授業料無料で何度でも再参加いただけます。シークエンスの復習やアシュラムでの心身のリフレッシュに、扉は常に開かれています。"
      }
    ]
  },
  "ko": {
    "badge": "독보적인 우수성",
    "title": "YogaGarhi만의 차별점",
    "subtitle": "우리의 의식적인 교육 철학, 엄격한 소수 정예 인원 제한, 아유르베다 진단법, 그리고 히말라야 정통 계보가 상업적인 대형 아카데미와 어떻게 차별화되는지 확인해 보세요.",
    "guaranteed": "YogaGarhi 표준 보장",
    "pillars": [
      {
        "badge": "밀착 멘토링",
        "title": "소수 정예: 최대 8~10명 정원",
        "description": "리시케시의 대다수 상업적 요가 스쿨이 한 홀에 25~35명의 학생을 수용하는 반면, YogaGarhi는 각 기수 인원을 엄격하게 8~10명으로 제한합니다. 이러한 소수 정예 환경을 통해 마스터 강사진이 모든 아사나에서 학생 개개인의 호흡, 척추 정렬, 근육 활성화를 세밀하게 관찰합니다. 본인 고유의 체형에 맞춘 1:1 해부학적 교정과 깊이 있는 철학적 문답을 매일 나누며, 결코 뒷줄의 이름 없는 한 명이 되지 않습니다."
      },
      {
        "badge": "YogaGarhi 독점 제공",
        "title": "프라크리티 체질 기반 맞춤형 요가",
        "description": "우리는 부상 위험이 있는 획일적인 시퀀스를 지양합니다. 전통 아유르베다와 요가 테라피를 바탕으로 수석 강사진이 개인별 프라크리티(바타, 피타, 카파 도샤의 타고난 균형)를 진단합니다. 과정을 통해 자신의 체질에 맞게 아사나, 프라나야마 비율, 일일 명상을 조절하는 법을 배웁니다. 무엇보다 모든 연령과 체형의 수련생을 위한 안전하고 치료적인 맞춤 시퀀스를 구성할 수 있는 독보적인 역량을 갖추고 졸업하게 됩니다."
      },
      {
        "badge": "정통 영적 계보",
        "title": "E-RYT 500 히말라야 마스터 강사진",
        "description": "YogaGarhi에서는 사친 지(Sachin Ji)를 비롯한 정통 히말라야 마스터 강사진에게 직접 사사합니다. 강사진은 E-RYT 500 최고 자격과 요가과학 대학원 학위를 보유하고 수십 년간 구루쿨 수련을 쌓았습니다. 고대 히말라야의 영적 전통과 현대 기능해부학, 생체역학을 유기적으로 결합하여 세대를 초월한 깊이와 현대적 전문성을 동시에 전수합니다."
      },
      {
        "badge": "즉각적인 평생 이용 권한",
        "title": "사전 온라인 입문 포털 (Pre-YTTC)",
        "description": "등록이 확정되는 즉시 당신의 여정이 시작됩니다. 수석 강사진이 제작한 Pre-YTTC 온라인 사전 학습 포털에 평생 무료로 접속할 수 있습니다. 산스크리트어 정확한 발음, 핵심 아사나 정렬, 호흡의 기초, 관절 가동성 훈련을 미리 익힐 수 있습니다. 인도에 입국하기 전 매일의 사다나(수련) 습관을 확립함으로써 타포반 아슈람 도착 첫날부터 흔들림 없는 자신감으로 깊은 수련에 몰입하게 됩니다."
      },
      {
        "badge": "평생 이어지는 영적 공동체",
        "title": "평생 무료 재수강 보장제도",
        "description": "졸업식 날 수료증을 받는 것으로 우리의 소중한 인연이 끝나지 않습니다. YogaGarhi 졸업생으로서 당신은 평생 글로벌 영적 상가(공동체)의 일원이 됩니다. 우리는 혁신적인 평생 무료 재수강 보장 제도를 운영합니다. 추후 언제든 리시케시 또는 발리 캠퍼스에서 동일 과정의 정규 수업에 수업료 없이 무료로 다시 참여하실 수 있습니다. 아슈람의 문은 언제나 당신을 향해 열려 있습니다."
      }
    ]
  },
  "zh": {
    "badge": "卓越的独特性",
    "title": "YogaGarhi独特优势",
    "subtitle": "了解我们严谨的教学哲学、严格的精品小班制、阿育吠陀体质诊断以及正统喜马拉雅传承，如何使我们与商业化流水线培训形成鲜明对比。",
    "guaranteed": "YogaGarhi标准保证",
    "pillars": [
      {
        "badge": "悉心导师制",
        "title": "精品小班：最多8-10名学员",
        "description": "在瑞诗凯诗，大多数商业化瑜伽学院常在一间大厅里招收25到35名学生，而YogaGarhi严格将每期班级限制在8到10名学员以内。这种精品小班环境让我们的资深导师能够在每个体式中细致观察每位学员的呼吸、骨骼正位与肌肉发力。你将每天获得针对个人身体结构的一对一解剖学反馈与正位调整，确保你绝不会成为后排被忽视的背景。"
      },
      {
        "badge": "YogaGarhi独家专享",
        "title": "基于Prakriti体质的定制瑜伽",
        "description": "我们拒绝机械千篇一律、容易导致学员受伤的练习套路。依托经典阿育吠陀与瑜伽疗愈学，资深导师将细致评估每位学员独特的Prakriti（风、火、水三种Dosha的先天体质平衡）。在课程中，你将学会如何调整体式、调息比例与日常冥想，以平衡自身能量。更重要的是，你将掌握为不同年龄、体质与健康状况的学生量身定制安全疗愈瑜伽序列的宝贵诊断技能。"
      },
      {
        "badge": "正统传承",
        "title": "E-RYT 500 喜马拉雅大师团队",
        "description": "在YogaGarhi，你将直接师从以Sachin Ji为首的正统喜马拉雅导师团队。我们的老师均持有E-RYT 500资深认证，具备瑜伽科学研究生学位及数十年传统古鲁库尔修习经历。他们将喜马拉雅古老传承与现代功能解剖学、生物力学紧密结合，赋予你深厚的内在智慧与权威的专业资质。"
      },
      {
        "badge": "即刻开通终身访问",
        "title": "开营前在线预科系统 (Pre-YTTC)",
        "description": "确认报名的那一刻起，你的蜕变旅程便已启航。你将立即获得Pre-YTTC在线视频预科学习系统的终身访问权限。由首席导师精心录制的模块涵盖梵文发音、核心体式正位、基础呼吸控制法与关节激活练习。在飞抵印度之前便建立起规律的每日Sadhana习练，让你在抵达塔波万修道院首日即具备充分的体能储备与学习自信。"
      },
      {
        "badge": "终身相伴的全球社群",
        "title": "终身免费重修保障",
        "description": "毕业典礼上领受证书并非我们缘分的终点。作为YogaGarhi校友，你将终身归属于我们的全球精神僧团（Sangha）。我们提供卓越的终身免费重修保障：未来任何时候，你均可回到瑞诗凯诗或巴厘岛校区，完全免学费重温修习已完成的课程批次。无论为了巩固编排技能还是回到修道院疗愈身心，我们的大门永远为你敞开。"
      }
    ]
  }
};

export const YOGAGARHI_DIFFERENCE_VARKALA: Record<string, DifferenceSectionData> = {
  "en": {
    "badge": "Distinctive Excellence",
    "title": "The YogaGarhi Difference in Varkala",
    "subtitle": "How our capped cohort sizes, personalized Ayurvedic Prakriti assessment, oceanfront shalas, and lifetime support elevate your training beyond commercial certification mills.",
    "guaranteed": "YogaGarhi Standard Guaranteed",
    "pillars": [
      {
        "badge": "Intimate Mentorship",
        "title": "Small Batches: 8–10 Students Max",
        "description": "While most commercial yoga institutions across Rishikesh crowd 25 to 35 students into a single echoing hall, YogaGarhi strictly caps every cohort at 8 to 10 practitioners. This intimate environment allows our master teachers to observe every student's breath, skeletal alignment, and muscular engagement throughout each asana. You receive daily one-on-one anatomical feedback, postural adjustments tailored specifically to your unique bone structure, and direct answers to your personal philosophical inquiries. You will never be a faceless number in the back row; you are an individual whose teaching voice matters."
      },
      {
        "badge": "Exclusive to YogaGarhi",
        "title": "Prakriti-Based Personalized Yoga",
        "description": "We reject rigid, one-size-fits-all sequencing that risks student injury. Drawing directly from classical Ayurveda and yogic therapy, our senior faculty evaluate your individual Prakriti—your innate constitutional balance of Vata, Pitta, and Kapha doshas. Throughout the course, you learn how to modify asanas, pranayama ratios, and daily meditation routines to balance your personal doshic nature and optimize your energy. More importantly, you graduate with the rare diagnostic ability to customize safe, therapeutic yoga sequences for students of all ages, body types, and health conditions."
      },
      {
        "badge": "Oceanfront Practice",
        "title": "Beach & Cliff Shala with Ocean Prana",
        "description": "Our practice shalas are perched above the Arabian Sea amidst swaying palm trees, allowing you to practice with the rhythmic sound of crashing waves as your natural metronome. Coastal negative ions naturally purify your respiratory system, deepen your pranayama practice, and soothe your nervous system. From sunrise Surya Namaskars on the cliff deck to bare-foot grounding meditation on sacred Papanasam Beach, practicing immersed in nature deepens your connection to the Panchamahabhutas (the five universal elements)."
      },
      {
        "badge": "Ayurvedic Heritage",
        "title": "Kerala Ayurveda Immersion & Panchakarma",
        "description": "Because Varkala is situated in the historic homeland of Ayurveda, our curriculum provides deep immersion in classical Ayurvedic medicine. Learn Dinacharya (daily health rituals), Ritucharya (seasonal lifestyle), pulse diagnosis basics, and the therapeutic applications of native Kerala herbs like Brahmi and Ashwagandha. Residential students experience authentic Ayurvedic body treatments (including Abhyanga and Kizhi herbal poultices) administered by certified traditional practitioners, grounding theoretical knowledge in lived somatic rejuvenation."
      },
      {
        "badge": "Lifelong Community",
        "title": "Lifetime Free Re-attendance",
        "description": "Our sacred relationship does not conclude when you receive your certificate on graduation day. As a YogaGarhi alumnus, you belong to our global spiritual sangha for life. We offer a revolutionary lifetime free re-attendance guarantee: you can return to re-attend future batches of your completed course at either our Rishikesh or Bali campus completely tuition-free anytime in the future. Whether you wish to brush up on sequencing, refresh your Sanskrit philosophy, or simply recharge your spirit in our ashram, our doors are always open to you."
      }
    ]
  },
  "de": {
    "badge": "Herausragende Exzellenz",
    "title": "Der YogaGarhi Unterschied in Varkala",
    "subtitle": "Wie unsere limitierten Gruppengrößen, ayurvedische Prakriti-Analyse, Shalas am Meer und lebenslange Unterstützung Ihre Ausbildung einzigartig machen.",
    "guaranteed": "YogaGarhi Standard Garantiert",
    "pillars": [
      {
        "badge": "PERSÖNLICHE MENTORSCHAFT",
        "title": "Kleine Gruppen: Maximal 8–10 Schüler",
        "description": "Während die meisten kommerziellen Yogaschulen in Rishikesh 25 bis 35 Schüler in einen Saal drängen, begrenzt YogaGarhi jede Gruppe strikt auf 8 bis 10 Teilnehmer. In dieser familiären Atmosphäre können unsere Meisterlehrer bei jeder Asana die Atmung, Skelettausrichtung und Muskelaktivierung jedes Einzelnen genau beobachten. Sie erhalten tägliches individuelles anatomisches Feedback, maßgeschneiderte Haltungskorrekturen und direkte Antworten auf Ihre philosophischen Fragen. Sie sind niemals eine anonyme Nummer in der letzten Reihe, sondern ein Individuum, dessen Stimme zählt."
      },
      {
        "badge": "EXKLUSIV BEI YOGAGARHI",
        "title": "Prakriti-basiertes personalisiertes Yoga",
        "description": "Wir lehnen starre Standard-Sequenzen ab, die das Verletzungsrisiko erhöhen. Basierend auf klassischem Ayurveda und Yogatherapie analysieren unsere Dozenten Ihre individuelle Prakriti – Ihre angeborene Dosha-Balance aus Vata, Pitta und Kapha. Im Kurs lernen Sie Asanas, Pranayama-Atemmuster und Meditationen so anzupassen, dass Ihre persönliche Natur harmonisiert wird. Sie erwerben die seltene Fähigkeit, sichere, therapeutische Yoga-Sequenzen für Menschen jeden Alters und Körpertyps zu gestalten."
      },
      {
        "badge": "PRAXIS AM MEER",
        "title": "Strand- & Klippen-Shala mit Ozean-Prana",
        "description": "Unsere Yogashalas thronen über dem Arabischen Meer zwischen Palmen, sodass die Meeresbrandung Ihr natürlicher Rhythmus wird. Die frische Meeresbrise reinigt die Atemwege, vertieft Ihr Pranayama und beruhigt das Nervensystem. Von Sonnenaufgangs-Sonnengrüßen auf der Klippe bis zur Erdungsmeditation am Strand vertieft die Praxis in der Natur die Verbindung zu den fünf Elementen."
      },
      {
        "badge": "AYURVEDA-TRADITION",
        "title": "Kerala Ayurveda-Immersion & Panchakarma",
        "description": "In der historischen Heimat des Ayurveda bietet unsere Ausbildung tiefes Eintauchen in die traditionelle Heilkunst. Lernen Sie Dinacharya (Tagesrituale), Ritucharya (Jahreszeiten-Lebensweise), Pulsdiagnose-Grundlagen und die Heilkraft von Kräutern wie Brahmi und Ashwagandha. Inklusive authentischer Abhyanga- und Kräuterstempel-Anwendungen durch zertifizierte Therapeuten."
      },
      {
        "badge": "LEBENSLANGE GEMEINSCHAFT",
        "title": "Lebenslange Kostenlose Wiederholung",
        "description": "Unsere Verbindung endet nicht am Tag Ihrer Zertifikatsübergabe. Als YogaGarhi-Absolvent gehören Sie ein Leben lang zu unserer weltweiten Sangha. Wir bieten eine lebenslange kostenlose Wiederholungsgarantie: Sie können zukünftige Ausbildungsdurchgänge Ihres Kurses an unserem Campus in Rishikesh oder auf Bali jederzeit schulgeldfrei erneut besuchen. Ob zur Auffrischung Ihres Wissens oder zum Auftanken im Ashram – unsere Türen stehen Ihnen immer offen."
      }
    ]
  },
  "fr": {
    "badge": "Excellence Distinctive",
    "title": "La Différence YogaGarhi à Varkala",
    "subtitle": "Comment nos effectifs limités, notre bilan ayurvédique personnalisé de Prakriti, nos shalas face à l'océan et notre soutien à vie subliment votre formation.",
    "guaranteed": "Norme YogaGarhi Garantie",
    "pillars": [
      {
        "badge": "MENTORAT PERSONNALISÉ",
        "title": "Petits Groupes : 8 à 10 Étudiants Maximum",
        "description": "Alors que la plupart des écoles de yoga commerciales de Rishikesh entassent 25 à 35 élèves dans une même salle, YogaGarhi limite strictement chaque groupe à 8-10 pratiquants. Cet environnement intimiste permet à nos maîtres enseignants d'observer la respiration, l'alignement squelettique et l'engagement musculaire de chaque élève à chaque asana. Vous bénéficiez quotidiennement de retours anatomiques personnalisés, d'ajustements adaptés à votre morphologie et de réponses directes à vos interrogations philosophiques. Vous n'êtes jamais un numéro anonyme au fond de la salle."
      },
      {
        "badge": "EXCLUSIVITÉ YOGAGARHI",
        "title": "Yoga Personnalisé Basé sur la Prakriti",
        "description": "Nous rejetons les séquences rigides et standardisées qui risquent de blesser les pratiquants. En s'appuyant sur l'Ayurveda classique et la thérapie yogique, nos enseignants seniors évaluent votre Prakriti personnelle — l'équilibre inné de vos doshas Vata, Pitta et Kapha. Vous apprenez à adapter les asanas, les ratios de pranayama et la méditation pour équilibrer votre énergie. Vous obtenez la compétence rare de créer des séquences thérapeutiques sûres et personnalisées pour tout type d'élève."
      },
      {
        "badge": "PRATIQUE FACE À L'OCÉAN",
        "title": "Shala sur les Falaises avec Prana Marin",
        "description": "Nos shalas surplombent la mer d'Oman au cœur des palmiers, bercées par le ressac des vagues. L'air marin purifie naturellement votre système respiratoire, approfondit le pranayama et apaise le système nerveux. Des salutations au soleil à l'aube sur le ponton aux méditations pieds nus sur la plage sacrée de Papanasam, la nature élève votre pratique."
      },
      {
        "badge": "HÉRITAGE AYURVÉDIQUE",
        "title": "Immersion Ayurvéda au Kerala & Panchakarma",
        "description": "Au cœur du berceau de l'Ayurveda, notre formation intègre un enseignement approfondi de la médecine ayurvédique traditionnelle. Étudiez la Dinacharya (rituels quotidiens), la Ritucharya (rythmes saisonniers), les bases du diagnostic par le pouls et les vertus des plantes médicinales. Les étudiants reçoivent des soins authentiques (Abhyanga et pochons Kizhi) dispensés par des praticiens certifiés."
      },
      {
        "badge": "COMMUNAUTÉ À VIE",
        "title": "Réinscription Gratuite à Vie",
        "description": "Notre lien ne s'arrête pas à la remise de votre diplôme. En tant qu'ancien élève de YogaGarhi, vous faites partie de notre sangha internationale pour la vie. Nous offrons une garantie unique de réinscription gratuite à vie : vous pouvez revenir assister aux promotions futures de votre formation à Rishikesh ou à Bali sans payer de frais de scolarité. Que ce soit pour réviser la pédagogie ou vous ressourcer à l'ashram, nos portes vous restent toujours ouvertes."
      }
    ]
  },
  "es": {
    "badge": "Excelencia Distintiva",
    "title": "La Diferencia YogaGarhi en Varkala",
    "subtitle": "Cómo nuestros grupos reducidos, diagnóstico ayurvédico de Prakriti, shalas frente al mar y apoyo de por vida elevan tu formación.",
    "guaranteed": "Estándar YogaGarhi Garantizado",
    "pillars": [
      {
        "badge": "MENTORÍA PERSONALIZADA",
        "title": "Grupos Reducidos: Máximo 8–10 Estudiantes",
        "description": "Mientras que la mayoría de los institutos comerciales de yoga en Rishikesh agrupan de 25 a 35 estudiantes en una sola sala, YogaGarhi limita estrictamente cada grupo a 8-10 practicantes. Este entorno íntimo permite a nuestros maestros observar la respiración, la alineación esquelética y la activación muscular de cada estudiante en cada asana. Recibes retroalimentación anatómica diaria personalizada, ajustes posturales adaptados a tu estructura ósea y respuestas directas a tus dudas filosóficas. Nunca serás un número más en la última fila."
      },
      {
        "badge": "EXCLUSIVO DE YOGAGARHI",
        "title": "Yoga Personalizado Basado en Prakriti",
        "description": "Rechazamos las secuencias rígidas y estandarizadas que ponen en riesgo la integridad del alumno. A partir del Ayurveda clásico y la yogaterapia, nuestro equipo evalúa tu Prakriti individual: el balance de tus doshas Vata, Pitta y Kapha. A lo largo del curso aprendes a adaptar asanas, proporciones de pranayama y meditación para equilibrar tu energía. Te gradúas con la capacidad de diseñar secuencias terapéuticas y seguras para personas de todas las edades y anatomías."
      },
      {
        "badge": "PRÁCTICA FRENTE AL MAR",
        "title": "Shala en Acantilados con Prana Oceánico",
        "description": "Nuestras shalas se elevan sobre el mar de Arabia entre palmeras, con el suave sonido de las olas como metrónomo natural. La brisa marina purifica las vías respiratorias y calma el sistema nervioso. Desde saludos al sol al amanecer en el acantilado hasta meditación descalzo en la playa sagrada de Papanasam, la conexión con la naturaleza transforma tu práctica."
      },
      {
        "badge": "HERENCIA AYURVÉDICA",
        "title": "Inmersión en Ayurveda de Kerala y Panchakarma",
        "description": "Ubicados en la cuna histórica del Ayurveda, nuestro plan de estudios ofrece una inmersión profunda en la medicina ayurvédica clásica. Aprende Dinacharya (rutinas diarias), Ritucharya (estilos de vida estacionales), diagnóstico por el pulso y aplicaciones de hierbas locales como Brahmi y Ashwagandha, complementado con tratamientos corporales tradicionales de terapeutas certificados."
      },
      {
        "badge": "COMUNIDAD DE POR VIDA",
        "title": "Reasistencia Gratuita de por Vida",
        "description": "Nuestra relación no concluye el día de tu graduación. Como graduado de YogaGarhi, perteneces de por vida a nuestra sangha espiritual global. Ofrecemos una garantía de reasistencia gratuita de por vida: puedes regresar a cursar futuras convocatorias de tu curso tanto en Rishikesh como en Bali sin pagar matrícula. Ya sea para perfeccionar tus secuencias o revitalizarte en el ashram, nuestras puertas siempre están abiertas."
      }
    ]
  },
  "it": {
    "badge": "Eccellenza Distintiva",
    "title": "La Differenza YogaGarhi a Varkala",
    "subtitle": "Come i nostri corsi a numero chiuso, la valutazione ayurvedica della Prakriti, le shala vista oceano e il supporto a vita valorizzano il tuo percorso.",
    "guaranteed": "Standard YogaGarhi Garantito",
    "pillars": [
      {
        "badge": "MENTORATO PERSONALIZZATO",
        "title": "Piccoli Gruppi: Massimo 8–10 Studenti",
        "description": "Mentre la maggior parte delle scuole commerciali di Rishikesh accoglie da 25 a 35 studenti in un'unica sala, YogaGarhi limita rigorosamente ogni corso a 8-10 praticanti. Questo ambiente raccolto consente ai nostri maestri di osservare la respirazione, l'allineamento scheletrico e l'ingaggio muscolare di ciascuno in ogni asana. Riceverai quotidianamente correzioni personalizzate in base alla tua conformazione corporea e risposte dirette ai tuoi quesiti filosofici. Non sarai mai un numero anonimo nell'ultima fila."
      },
      {
        "badge": "ESCLUSIVO PER YOGAGARHI",
        "title": "Yoga Personalizzato Basato su Prakriti",
        "description": "Rifiutiamo sequenze rigide e standardizzate che rischiano di causare infortuni. Attingendo direttamente all'Ayurveda tradizionale e alla yogaterapia, i nostri docenti valutano la tua Prakriti individuale: l'equilibrio innato dei dosha Vata, Pitta e Kapha. Imparerai ad adattare asana, pranayama e meditazione per armonizzare la tua costituzione. Ti diplomerai con la rara capacità di creare sequenze terapeutiche su misura per ogni allievo."
      },
      {
        "badge": "PRATICA VISTA MARE",
        "title": "Shala sulla Scogliera con Prana Oceanico",
        "description": "Le nostre shala si affacciano sul Mar Arabico tra le palme, con il suono ritmico delle onde a scandire la pratica. Gli ioni marini purificano la respirazione, intensificano il pranayama e calmano il sistema nervoso. Dai saluti al sole all'alba sulla scogliera alle meditazioni a piedi nudi sulla spiaggia di Papanasam, la natura arricchisce ogni respiro."
      },
      {
        "badge": "TRADIZIONE AYURVEDICA",
        "title": "Immersione nell'Ayurveda del Kerala & Panchakarma",
        "description": "Nella culla storica dell'Ayurveda, il nostro percorso approfondisce la medicina tradizionale indiana. Imparerai Dinacharya (rituali quotidiani), Ritucharya (ritmi stagionali), la diagnosi del polso e l'impiego delle erbe curative del Kerala. Include trattamenti autentici come Abhyanga e impacchi Kizhi eseguiti da professionisti tradizionali."
      },
      {
        "badge": "COMMUNITY A VITA",
        "title": "Ripetizione Gratuita a Vita",
        "description": "Il nostro legame non si esaurisce con la consegna del diploma. Come allievo YogaGarhi fai parte della nostra sangha mondiale a vita. Offriamo la garanzia di ripetere il corso gratuitamente: puoi tornare a frequentare le future edizioni del tuo percorso a Rishikesh o a Bali senza alcun costo di iscrizione. Per rinfrescare le sequenze o ricaricare lo spirito nell'ashram, le nostre porte sono sempre aperte."
      }
    ]
  },
  "nl": {
    "badge": "Onderscheidende Uitmuntendheid",
    "title": "Het YogaGarhi Verschil in Varkala",
    "subtitle": "Hoe onze strikte groepsgroottes, persoonlijke Ayurvedische Prakriti-beoordeling, shala's aan zee en levenslange begeleiding je opleiding naar een hoger niveau tillen.",
    "guaranteed": "YogaGarhi Standaard Gegarandeerd",
    "pillars": [
      {
        "badge": "PERSOONLIJKE BEGELEIDING",
        "title": "Kleine Groepen: Maximaal 8-10 Studenten",
        "description": "Waar de meeste commerciële yogascholen in Rishikesh 25 tot 35 studenten in één zaal proppen, beperkt YogaGarhi elke groep strikt tot 8 à 10 deelnemers. Dankzij deze kleinschalige setting kunnen onze meesterdocenten bij elke asana je ademhaling, skeletuitlijning en spieractivatie nauwkeurig observeren. Je krijgt dagelijks één-op-één anatomische feedback, houdingscorrecties op maat van jouw unieke lichaamsbouw en directe antwoorden op je persoonlijke filosofische vragen. Je bent nooit een anoniem nummer op de achterste rij; je bent een individu wiens stem als leraar ertoe doet."
      },
      {
        "badge": "EXCLUSIEF BIJ YOGAGARHI",
        "title": "Op Prakriti Gebaseerde Gepersonaliseerde Yoga",
        "description": "Wij verwerpen rigide, standaard sequenties die het risico op blessures vergroten. Gebaseerd op klassieke Ayurveda en yogatherapie beoordeelt onze senior faculteit jouw individuele Prakriti—je aangeboren constitutie van Vata, Pitta en Kapha dosha's. Gedurende de opleiding leer je asana's, pranayama-verhoudingen en dagelijkse meditatie aan te passen om je persoonlijke dosha-balans te optimaliseren. Bovenal studeer je af met het zeldzame diagnostische vermogen om veilige, therapeutische yogareeksen op maat samen te stellen voor studenten van elke leeftijd en elk lichaamstype."
      },
      {
        "badge": "AAN ZEE BEOEFENEN",
        "title": "Strand & Klif Shala met Oceaan-Prana",
        "description": "Onze oefenshala's liggen hoog boven de Arabische Zee tussen wuivende palmbomen, waardoor het ritmische ruisen van de golven je natuurlijke metronoom vormt. Negatieve ionen van de kust zuiveren je ademhalingssysteem, verdiepen je pranayama en kalmeren je zenuwstelsel. Van zonsopgang-Surya Namaskars op het klifdek tot aardende meditaties op blote voeten op het heilige Papanasam-strand: oefenen in de natuur verdiept je verbinding met de vijf elementen."
      },
      {
        "badge": "AYURVEDISCH ERFGOED",
        "title": "Kerala Ayurveda Onderdompeling & Panchakarma",
        "description": "Omdat Varkala in de historische bakermat van Ayurveda ligt, biedt ons curriculum een diepe onderdompeling in de klassieke Ayurvedische geneeskunde. Leer Dinacharya (dagelijkse rituelen), Ritucharya (seizoensrituelen), polsdiagnostiek en het therapeutisch gebruik van inheemse kruiden zoals Brahmi en Ashwagandha. Studenten ervaren tevens authentieke behandelingen (zoals Abhyanga en Kizhi-kruidenstempels) door gecertificeerde behandelaars."
      },
      {
        "badge": "LEVENSLANGE GEMEENSCHAP",
        "title": "Levenslang Gratis Herhalen",
        "description": "Onze band eindigt niet wanneer je op de diploma-uitreiking je certificaat ontvangt. Als afgestudeerde van YogaGarhi maak je voor het leven deel uit van onze wereldwijde sangha. Wij bieden een revolutionaire garantie: je kunt in de toekomst altijd gratis terugkeren om toekomstige groepen van je afgeronde opleiding bij te wonen in Rishikesh of Bali. Of je nu je sequenties wilt opfrissen, je filosofische kennis wilt verdiepen of simpelweg nieuwe energie wilt opdoen in het ashram; onze deuren staan altijd voor je open."
      }
    ]
  },
  "ru": {
    "badge": "Отличительное Превосходство",
    "title": "В чем разница YogaGarhi в Варкале",
    "subtitle": "Как наши малые группы, аюрведическая диагностика Пракрити, шалы на берегу океана и пожизненная поддержка выводят обучение на качественно новый уровень.",
    "guaranteed": "Стандарт YogaGarhi гарантирован",
    "pillars": [
      {
        "badge": "ЛИЧНОЕ НАСТАВНИЧЕСТВО",
        "title": "Малые группы: максимум 8–10 студентов",
        "description": "В то время как большинство коммерческих школ йоги в Ришикеше набирают по 25–35 человек в один зал, YogaGarhi строго ограничивает каждую группу до 8–10 практиков. Такая камерная обстановка позволяет нашим ведущим учителям внимательно отслеживать дыхание, биомеханику и выравнивание каждого ученика в каждой асане. Вы получаете ежедневную индивидуальную анатомическую обратную связь, коррекцию отстроек под особенности вашего тела и прямые ответы на философские вопросы."
      },
      {
        "badge": "ЭКСКЛЮЗИВНО В YOGAGARHI",
        "title": "Персонализированная йога на основе Пракрити",
        "description": "Мы отвергаем шаблонные последовательности, способные привести к травмам. Опираясь на классическую Аюрведу и йога-терапию, наши преподаватели определяют вашу индивидуальную Пракрити — природный баланс дош Вата, Питта и Капха. В ходе курса вы учитесь адаптировать асаны, пранаяму и медитацию под свою конституцию. Вы выпуститесь с редким навыком создания безопасных терапевтических программ для учеников любого возраста и телосложения."
      },
      {
        "badge": "ПРАКТИКА У ОКЕАНА",
        "title": "Шала на утесе с океанической праной",
        "description": "Наши шалы расположены на утесах над Аравийским морем среди пальм, где ритм океанских волн становится вашим естественным метрономом. Морской воздух очищает дыхательную систему, углубляет пранаяму и успокаивает нервную систему. Практика на рассвете на террасе утеса и заземляющие медитации на пляже Папанасам соединяют вас со стихиями природы."
      },
      {
        "badge": "АЮРВЕДИЧЕСКОЕ НАСЛЕДИЕ",
        "title": "Аюрведическое погружение в Керале и Панчакарма",
        "description": "Находясь на исторической родине Аюрведы, наша программа включает глубокое изучение традиционной индийской медицины. Вы освоите Диначарью (распорядок дня), Ритучарью (сезонный образ жизни), основы пульсовой диагностики и свойства трав. Студенты проходят аутентичные процедуры (Абхьянга и травяные мешочки Кижи) у сертифицированных мастеров."
      },
      {
        "badge": "ПОЖИЗНЕННОЕ СООБЩЕСТВО",
        "title": "Бесплатное повторное прохождение курса",
        "description": "Наши отношения не заканчиваются в день выпуска. Став выпускником YogaGarhi, вы навсегда становитесь частью нашей международной сангхи. Мы предоставляем уникальную гарантию: вы можете в любое время бесплатно повторно пройти свой курс в кампусах в Ришикеше или на Бали (оплачивается только проживание). Наши двери всегда открыты для вас."
      }
    ]
  },
  "id": {
    "badge": "Keunggulan Istimewa",
    "title": "Perbedaan YogaGarhi di Varkala",
    "subtitle": "Bagaimana kuota terbatas kami, penilaian Prakriti Ayurveda personal, shala tepi pantai, dan dukungan seumur hidup meningkatkan kualitas pelatihan Anda.",
    "guaranteed": "Standar YogaGarhi Terjamin",
    "pillars": [
      {
        "badge": "MENTORSHIP PRIBADI",
        "title": "Grup Kecil: Maksimal 8–10 Siswa",
        "description": "Sementara sebagian besar institusi yoga komersial di Rishikesh menjejalkan 25 hingga 35 siswa ke dalam satu aula besar, YogaGarhi secara ketat membatasi setiap angkatan hanya 8 hingga 10 praktisi. Lingkungan yang intim ini memungkinkan para guru master kami mengamati napas, penyelarasan postur, dan keterlibatan otot Anda di setiap asana. Anda menerima umpan balik anatomi tatap muka setiap hari, penyesuaian postur sesuai struktur tubuh unik Anda, dan bimbingan mendalam untuk setiap pertanyaan spiritual Anda."
      },
      {
        "badge": "EKSKLUSIF DI YOGAGARHI",
        "title": "Yoga Personal Berbasis Prakriti",
        "description": "Kami menolak sekuens kaku satu ukuran untuk semua yang berisiko mencederai siswa. Mengacu pada Ayurveda klasik dan terapi yoga, pengajar senior kami mengevaluasi Prakriti unik Anda—keseimbangan bawaan dosha Vata, Pitta, dan Kapha. Anda belajar memodifikasi asana, rasio pranayama, dan meditasi harian demi menyelaraskan energi pribadi. Anda lulus dengan keahlian langka merancang sekuens yoga terapeutik yang aman untuk segala usia dan tipe tubuh."
      },
      {
        "badge": "LATIHAN TEPI PANTAI",
        "title": "Shala Tebing & Pantai dengan Prana Samudra",
        "description": "Shala yoga kami bertengger di atas Laut Arab di antara lambaian pohon kelapa, dengan deburan ombak sebagai metronom alami Anda. Udara pesisir memurnikan pernapasan, memperdalam pranayama, dan menenangkan sistem saraf. Dari Surya Namaskar saat fajar di dek tebing hingga meditasi tanpa alas kaki di Pantai Papanasam, menyatu dengan alam memperkaya latihan Anda."
      },
      {
        "badge": "WARISAN AYURVEDA",
        "title": "Imersi Ayurveda Kerala & Panchakarma",
        "description": "Berada di tempat kelahiran historis Ayurveda, kurikulum kami memberikan pemahaman mendalam tentang pengobatan klasik. Pelajari Dinacharya (rutinitas harian), Ritucharya (gaya hidup musiman), dasar diagnosis nadi, dan khasiat herba seperti Brahmi serta Ashwagandha, lengkap dengan pengalaman terapi Abhyanga dan Kizhi dari praktisi tradisional berlisensi."
      },
      {
        "badge": "KOMUNITAS SEUMUR HIDUP",
        "title": "Gratis Mengulang Seumur Hidup",
        "description": "Hubungan kita tidak berakhir saat sertifikat kelulusan diserahkan. Sebagai alumni YogaGarhi, Anda menjadi bagian dari sangha spiritual global kami seumur hidup. Kami memberikan jaminan mengulang kursus gratis seumur hidup: Anda dapat kembali mengikuti angkatan berikutnya dari kursus yang telah diselesaikan baik di kampus Rishikesh maupun Bali tanpa biaya kursus tambahan. Pintu kami selalu terbuka untuk Anda."
      }
    ]
  },
  "ja": {
    "badge": "卓越した独自性",
    "title": "バルカラでのYogaGarhiならではの強み",
    "subtitle": "厳格な少人数制、アーユルヴェーダ体質診断、海を一望するシャラ、生涯サポートにより、商業的な資格スクールとは一線を画す指導を提供します。",
    "guaranteed": "YogaGarhi基準保証",
    "pillars": [
      {
        "badge": "親身な個別指導",
        "title": "少人数クラス：最大8〜10名限定",
        "description": "リシケシの多くの商業的なヨガスクールでは1クラスに25〜35名もの生徒を詰め込みますが、YogaGarhiでは厳格に各期8〜10名に限定しています。この少人数環境により、指導陣が生徒一人ひとりの呼吸、骨格のアライメント、筋肉の使い方をアーサナごとに丁寧に観察します。ご自身の骨格に合わせた個別のアジャストメントや解剖学的フィードバックを毎日受けられ、後列の埋もれた存在になることは決してありません。"
      },
      {
        "badge": "YogaGarhi独自プログラム",
        "title": "プラクリティ（体質）に基づく個別化ヨガ",
        "description": "生徒の怪我につながるような画一的で固定的なシークエンスを排除します。古典アーユルヴェーダとヨガセラピーに基づき、指導陣が生徒一人ひとりの体質（ヴァータ、ピッタ、カパのドーシャバランスであるプラクリティ）を分析。個人の体質に合わせてアーサナの軽減法、呼吸法の比率、瞑想法を調整する方法を習得します。卒業時には、あらゆる年齢や体型の生徒に対して安全で治療効果の高い個別プログラムを構築できる希少な指導力を備えます。"
      },
      {
        "badge": "海辺でのヨガ修練",
        "title": "波音と海のプラーナに包まれる断崖のシャラ",
        "description": "アラビア海を見下ろす断崖に位置するシャラでは、打ち寄せる波音が自然のメトロノームとなります。潮風が呼吸器を浄化し、プラーナヤーマを深め、神経系を穏やかに整えます。クリフデッキでの朝日を迎えるスーリヤ・ナマスカーラから、神聖なパパナサム海岸での素足グラウンディング瞑想まで、大自然との調和を深めます。"
      },
      {
        "badge": "アーユルヴェーダの本場",
        "title": "本場ケララ・アーユルヴェーダとパンチャカルマ体験",
        "description": "アーユルヴェーダ発祥の地ケララにて、古典医学の真髄を深く学びます。ディナチャリヤ（日課法）、リトゥチャリヤ（季節法）、脈診の基礎、ブラーフミーやアシュワガンダなどのハーブ処方を習得。認定施術師による本場のアビヤンガやキリ（薬草温熱療法）トリートメントも体験し、理論と身体的実感を結びつけます。"
      },
      {
        "badge": "生涯にわたるコミュニティ",
        "title": "コース生涯無料再受講制度",
        "description": "卒業証書を手にした後も、私たちの絆が途切れることはありません。YogaGarhiの卒業生として、世界中に広がるスピリチュアルなサンガ（共同体）に生涯所属します。当校では画期的な【生涯無料再受講制度】を提供。将来いつでも、リシケシまたはバリ校にて修了済みコースの授業に授業料無料で何度でも再参加いただけます。シークエンスの復習やアシュラムでの心身のリフレッシュに、扉は常に開かれています。"
      }
    ]
  },
  "ko": {
    "badge": "독보적인 우수성",
    "title": "바르칼라 YogaGarhi만의 차별점",
    "subtitle": "엄격한 소수 정예 인원, 개인별 아유르베다 체질 진단, 바다 전망의 요가 샬라, 평생 사후 지원을 통해 독보적인 교육 경험을 선사합니다.",
    "guaranteed": "YogaGarhi 표준 보장",
    "pillars": [
      {
        "badge": "밀착 멘토링",
        "title": "소수 정예: 최대 8~10명 정원",
        "description": "리시케시의 대다수 상업적 요가 스쿨이 한 홀에 25~35명의 학생을 수용하는 반면, YogaGarhi는 각 기수 인원을 엄격하게 8~10명으로 제한합니다. 이러한 소수 정예 환경을 통해 마스터 강사진이 모든 아사나에서 학생 개개인의 호흡, 척추 정렬, 근육 활성화를 세밀하게 관찰합니다. 본인 고유의 체형에 맞춘 1:1 해부학적 교정과 깊이 있는 철학적 문답을 매일 나누며, 결코 뒷줄의 이름 없는 한 명이 되지 않습니다."
      },
      {
        "badge": "YogaGarhi 독점 제공",
        "title": "프라크리티 체질 기반 맞춤형 요가",
        "description": "우리는 부상 위험이 있는 획일적인 시퀀스를 지양합니다. 전통 아유르베다와 요가 테라피를 바탕으로 수석 강사진이 개인별 프라크리티(바타, 피타, 카파 도샤의 타고난 균형)를 진단합니다. 과정을 통해 자신의 체질에 맞게 아사나, 프라나야마 비율, 일일 명상을 조절하는 법을 배웁니다. 무엇보다 모든 연령과 체형의 수련생을 위한 안전하고 치료적인 맞춤 시퀀스를 구성할 수 있는 독보적인 역량을 갖추고 졸업하게 됩니다."
      },
      {
        "badge": "오션뷰 요가 수련",
        "title": "파도 소리와 해양 프라나가 가득한 절벽 샬라",
        "description": "야자수 사이 아라비아해가 내려다보이는 절벽 샬라에서 파도 소리를 메트로놈 삼아 수련합니다. 청정한 해안 공기가 호흡기를 정화하고 신경계를 진정시킵니다. 절벽 데크에서 맞이하는 일출 수리야 나마스카라부터 파파나삼 해변 맨발 그라운딩 명상까지 자연 속에서 깊은 치유를 경험합니다."
      },
      {
        "badge": "정통 아유르베다 본고장",
        "title": "케랄라 아유르베다 몰입 및 판차카르마 치유",
        "description": "아유르베다의 발상지에서 고전 의학의 지혜를 깊이 있게 배웁니다. 디나차리아(일일 건강 루틴), 리투차리아(계절별 생활법), 맥진 기초, 전통 허브 활용법을 학습하며 전문 테라피스트가 제공하는 압비앙가 및 키지 허브 찜질 테라피를 직접 경험합니다."
      },
      {
        "badge": "평생 이어지는 영적 공동체",
        "title": "평생 무료 재수강 보장제도",
        "description": "졸업식 날 수료증을 받는 것으로 우리의 소중한 인연이 끝나지 않습니다. YogaGarhi 졸업생으로서 당신은 평생 글로벌 영적 상가(공동체)의 일원이 됩니다. 우리는 혁신적인 평생 무료 재수강 보장 제도를 운영합니다. 추후 언제든 리시케시 또는 발리 캠퍼스에서 동일 과정의 정규 수업에 수업료 없이 무료로 다시 참여하실 수 있습니다. 아슈람의 문은 언제나 당신을 향해 열려 있습니다."
      }
    ]
  },
  "zh": {
    "badge": "卓越的独特性",
    "title": "YogaGarhi瓦尔卡拉独特优势",
    "subtitle": "严格的精品班级名额、个性化阿育吠陀体质评估、一线海景瑜伽馆与终身发展支持，带给你超越商业考证的纯正修行。",
    "guaranteed": "YogaGarhi标准保证",
    "pillars": [
      {
        "badge": "悉心导师制",
        "title": "精品小班：最多8-10名学员",
        "description": "在瑞诗凯诗，大多数商业化瑜伽学院常在一间大厅里招收25到35名学生，而YogaGarhi严格将每期班级限制在8到10名学员以内。这种精品小班环境让我们的资深导师能够在每个体式中细致观察每位学员的呼吸、骨骼正位与肌肉发力。你将每天获得针对个人身体结构的一对一解剖学反馈与正位调整，确保你绝不会成为后排被忽视的背景。"
      },
      {
        "badge": "YogaGarhi独家专享",
        "title": "基于Prakriti体质的定制瑜伽",
        "description": "我们拒绝机械千篇一律、容易导致学员受伤的练习套路。依托经典阿育吠陀与瑜伽疗愈学，资深导师将细致评估每位学员独特的Prakriti（风、火、水三种Dosha的先天体质平衡）。在课程中，你将学会如何调整体式、调息比例与日常冥想，以平衡自身能量。更重要的是，你将掌握为不同年龄、体质与健康状况的学生量身定制安全疗愈瑜伽序列的宝贵诊断技能。"
      },
      {
        "badge": "一线海景修习",
        "title": "悬崖与海滩之上的海风Prana瑜伽馆",
        "description": "我们的瑜伽馆高居阿拉伯海悬崖之上，掩映于摇曳棕榈树间，海浪声成为天然的节拍器。富含负离子的海风净化呼吸系统、深化调息并平抚神经。从悬崖甲板上的日出拜日式，到神圣Papanasam海滩上的赤足扎根冥想，大自然为你注入深邃能量。"
      },
      {
        "badge": "喀拉拉阿育吠陀正统",
        "title": "喀拉拉阿育吠陀深度浸润与排毒疗愈",
        "description": "坐落于阿育吠陀的发祥地，课程深度融入经典阿育吠陀医学体系。研习Dinacharya（日常养生法）、Ritucharya（顺时养生法）、脉诊基础及传统草本应用，并在专业理疗师施治下体验正宗的Abhyanga精油按摩与Kizhi草药热敷理疗。"
      },
      {
        "badge": "终身相伴的全球社群",
        "title": "终身免费重修保障",
        "description": "毕业典礼上领受证书并非我们缘分的终点。作为YogaGarhi校友，你将终身归属于我们的全球精神僧团（Sangha）。我们提供卓越的终身免费重修保障：未来任何时候，你均可回到瑞诗凯诗或巴厘岛校区，完全免学费重温修习已完成的课程批次。无论为了巩固编排技能还是回到修道院疗愈身心，我们的大门永远为你敞开。"
      }
    ]
  }
};

export const TRUST_BADGES_RISHIKESH: Record<string, TrustBadge[]> = {
  "en": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Small Batches",
      "title": "8–10 Students Max"
    },
    {
      "tag": "Himalayan Lineage",
      "title": "15+ Years Experience"
    },
    {
      "tag": "Tapovan Ashram",
      "title": "100% Sattvic Living"
    }
  ],
  "nl": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Kleine Groepen",
      "title": "Max. 8–10 Studenten"
    },
    {
      "tag": "Himalaya Traditie",
      "title": "15+ Jaar Ervaring"
    },
    {
      "tag": "Tapovan Ashram",
      "title": "100% Sattvisch Leven"
    }
  ],
  "de": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Kleine Gruppen",
      "title": "Max. 8–10 Schüler"
    },
    {
      "tag": "Himalaya Tradition",
      "title": "15+ Jahre Erfahrung"
    },
    {
      "tag": "Tapovan Ashram",
      "title": "100% Sattvisches Leben"
    }
  ],
  "fr": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Petits Groupes",
      "title": "Max. 8 à 10 Élèves"
    },
    {
      "tag": "Lignée Himalayenne",
      "title": "15+ Ans d'Expérience"
    },
    {
      "tag": "Ashram de Tapovan",
      "title": "Vie 100% Sattvique"
    }
  ],
  "es": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Grupos Pequeños",
      "title": "Máx. 8–10 Alumnos"
    },
    {
      "tag": "Linaje del Himalaya",
      "title": "15+ Años de Experiencia"
    },
    {
      "tag": "Ashram de Tapovan",
      "title": "Vida 100% Sáttvica"
    }
  ],
  "it": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Piccoli Gruppi",
      "title": "Max. 8–10 Studenti"
    },
    {
      "tag": "Tradizione Himalayana",
      "title": "15+ Anni di Esperienza"
    },
    {
      "tag": "Ashram di Tapovan",
      "title": "Vita 100% Sattvica"
    }
  ],
  "ru": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Малые Группы",
      "title": "Макс. 8–10 Студентов"
    },
    {
      "tag": "Гималайская Традиция",
      "title": "15+ Лет Опыта"
    },
    {
      "tag": "Ашрам в Таповане",
      "title": "100% Саттвический образ жизни"
    }
  ],
  "id": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Grup Kecil",
      "title": "Maks. 8–10 Siswa"
    },
    {
      "tag": "Tradisi Himalaya",
      "title": "Pengalaman 15+ Tahun"
    },
    {
      "tag": "Ashram Tapovan",
      "title": "100% Gaya Hidup Satvik"
    }
  ],
  "ja": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "少人数クラス",
      "title": "最大8〜10名限定"
    },
    {
      "tag": "ヒマラヤの伝統",
      "title": "15年以上の指導歴"
    },
    {
      "tag": "タポヴァン・アシュラム",
      "title": "100%サットヴァな暮らし"
    }
  ],
  "ko": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "소수 정예",
      "title": "최대 8~10명 정원"
    },
    {
      "tag": "히말라야 정통 계보",
      "title": "15년 이상의 지도 경력"
    },
    {
      "tag": "타포반 아슈람",
      "title": "100% 사트빅 라이프스타일"
    }
  ],
  "zh": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "精品小班",
      "title": "最多8-10名学员"
    },
    {
      "tag": "喜马拉雅传承",
      "title": "15年以上教学经验"
    },
    {
      "tag": "塔波万修道院",
      "title": "100%萨埵纯净生活"
    }
  ]
};

export const TRUST_BADGES_VARKALA: Record<string, TrustBadge[]> = {
  "en": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Small Batches",
      "title": "8–10 Students Max"
    },
    {
      "tag": "4.9★ Rated",
      "title": "500+ Global Grads"
    },
    {
      "tag": "100% Completion",
      "title": "Accredited Pathway"
    }
  ],
  "nl": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Kleine Groepen",
      "title": "Max. 8–10 Studenten"
    },
    {
      "tag": "4.9★ Beoordeling",
      "title": "500+ Wereldwijde Alumni"
    },
    {
      "tag": "100% Voltooiing",
      "title": "Geaccrediteerd Traject"
    }
  ],
  "de": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Kleine Gruppen",
      "title": "Max. 8–10 Schüler"
    },
    {
      "tag": "4.9★ Bewertung",
      "title": "500+ Absolventen weltweit"
    },
    {
      "tag": "100% Abschlussquote",
      "title": "Akkreditierter Ausbildungsweg"
    }
  ],
  "fr": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Petits Groupes",
      "title": "Max. 8 à 10 Élèves"
    },
    {
      "tag": "Noté 4.9★",
      "title": "500+ Diplômés Internationaux"
    },
    {
      "tag": "100% Réussite",
      "title": "Parcours Accrédité"
    }
  ],
  "es": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Grupos Pequeños",
      "title": "Máx. 8–10 Alumnos"
    },
    {
      "tag": "Calificación 4.9★",
      "title": "500+ Graduados Globales"
    },
    {
      "tag": "100% Finalización",
      "title": "Trayectoria Acreditada"
    }
  ],
  "it": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Piccoli Gruppi",
      "title": "Max. 8–10 Studenti"
    },
    {
      "tag": "Valutato 4.9★",
      "title": "500+ Diplomati nel Mondo"
    },
    {
      "tag": "100% Completamento",
      "title": "Percorso Accreditato"
    }
  ],
  "ru": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Малые Группы",
      "title": "Макс. 8–10 Студентов"
    },
    {
      "tag": "Оценка 4.9★",
      "title": "500+ Выпускников по всему миру"
    },
    {
      "tag": "100% Успешное завершение",
      "title": "Аккредитованный курс"
    }
  ],
  "id": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "Grup Kecil",
      "title": "Maks. 8–10 Siswa"
    },
    {
      "tag": "Rating 4.9★",
      "title": "500+ Lulusan Global"
    },
    {
      "tag": "100% Kelulusan",
      "title": "Jalur Terakreditasi"
    }
  ],
  "ja": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "少人数クラス",
      "title": "最大8〜10名限定"
    },
    {
      "tag": "4.9★ 高評価",
      "title": "500名以上の世界中の卒業生"
    },
    {
      "tag": "修了率100%",
      "title": "認定資格取得コース"
    }
  ],
  "ko": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "소수 정예",
      "title": "최대 8~10명 정원"
    },
    {
      "tag": "4.9★ 평점",
      "title": "500명 이상의 글로벌 졸업생"
    },
    {
      "tag": "100% 이수율",
      "title": "국제 공인 자격 과정"
    }
  ],
  "zh": [
    {
      "tag": "Yoga Alliance",
      "title": "RYS 200, 300 & 500"
    },
    {
      "tag": "精品小班",
      "title": "最多8-10名学员"
    },
    {
      "tag": "4.9★ 高分好评",
      "title": "500多位全球毕业生"
    },
    {
      "tag": "100%结业率",
      "title": "国际认证专业通道"
    }
  ]
};

export const COMPARE_COURSES_UI: Record<string, CompareCoursesUIData> = {
  "en": {
    "badge": "Program Comparison",
    "titleRishikesh": "Compare Rishikesh Yoga Teacher Trainings",
    "titleVarkala": "Compare Our Varkala Yoga Teacher Trainings",
    "subtitle": "Choose the program that matches your spiritual path, available schedule, and professional certification goals.",
    "keyFeatures": "Key Features",
    "immersion": "Immersion",
    "mostPopular": "Most Popular",
    "masterLevel": "Master Level",
    "viewDetails": "View Course Details",
    "c100Btn": "100hr Course",
    "c200Btn": "200hr Course",
    "c300Btn": "300hr Course",
    "explore100": "Explore 100-Hour",
    "explore200": "Explore 200-Hour",
    "explore300": "Explore 300-Hour",
    "from": "From",
    "f_duration": "Duration",
    "f_level": "Experience Level",
    "f_prereq": "Prerequisite",
    "f_cert": "Certification",
    "f_focus": "Core Focus",
    "f_batch": "Batch Size",
    "f_price": "Starting Price",
    "rowsRishikesh": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "nl": {
    "badge": "Programma Vergelijking",
    "titleRishikesh": "Vergelijk Rishikesh Yoga Opleidingen",
    "titleVarkala": "Vergelijk Onze Varkala Yoga Opleidingen",
    "subtitle": "Kies de opleiding die aansluit bij jouw spirituele pad, planning en professionele certificeringsdoelen.",
    "keyFeatures": "Belangrijkste Kenmerken",
    "immersion": "Onderdompeling",
    "mostPopular": "Meest Populair",
    "masterLevel": "Meesterniveau",
    "viewDetails": "Bekijk Cursusdetails",
    "c100Btn": "100-Uur Opleiding",
    "c200Btn": "200-Uur Opleiding",
    "c300Btn": "300-Uur Opleiding",
    "explore100": "Ontdek 100-Uur",
    "explore200": "Ontdek 200-Uur",
    "explore300": "Ontdek 300-Uur",
    "from": "Vanaf",
    "f_duration": "Duur",
    "f_level": "Ervaringsniveau",
    "f_prereq": "Vooropleiding",
    "f_cert": "Certificering",
    "f_focus": "Kernfocus",
    "f_batch": "Groepsgrootte",
    "f_price": "Vanaf-prijs",
    "rowsRishikesh": [{"c100": "12 Dagen (11 Nachten)", "c200": "28 Dagen (27 Nachten)", "c300": "28 Dagen (27 Nachten)"}, {"c100": "Beginners & Zoekers", "c200": "Beginner tot Halfgevorderd", "c300": "Halfgevorderd tot Gevorderd"}, {"c100": "Geen (Open Geest)", "c200": "Regelmatige eigen beoefening", "c300": "200-Uurs Certificaat"}, {"c100": "Basis Certificaat", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Basis & Eigen Beoefening", "c200": "Lesvaardigheden & Anatomie", "c300": "Gevorderde Sequenties & Verdieping"}, {"c100": "Max. 8–10 Studenten", "c200": "Max. 8–10 Studenten", "c300": "Max. 8–10 Studenten"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1.099 USD"}],
    "rowsVarkala": [{"c100": "12 Dagen (11 Nachten)", "c200": "28 Dagen (27 Nachten)", "c300": "28 Dagen (27 Nachten)"}, {"c100": "Beginners & Zoekers", "c200": "Beginner tot Halfgevorderd", "c300": "Halfgevorderd tot Gevorderd"}, {"c100": "Geen (Open Geest)", "c200": "Regelmatige eigen beoefening", "c300": "200-Uurs Certificaat"}, {"c100": "Basis Certificaat", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Basis & Eigen Beoefening", "c200": "Lesvaardigheden & Anatomie", "c300": "Gevorderde Sequenties & Verdieping"}, {"c100": "Max. 8–10 Studenten", "c200": "Max. 8–10 Studenten", "c300": "Max. 8–10 Studenten"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1.099 USD"}]
  },
  "de": {
    "badge": "Programmvergleich",
    "titleRishikesh": "Rishikesh Yogalehrer-Ausbildungen im Vergleich",
    "titleVarkala": "Varkala Yogalehrer-Ausbildungen im Vergleich",
    "subtitle": "Wählen Sie die Ausbildung, die zu Ihrem Weg, Zeitplan und Ihren Zertifizierungszielen passt.",
    "keyFeatures": "Hauptmerkmale",
    "immersion": "Immersion",
    "mostPopular": "Sehr Beliebt",
    "masterLevel": "Meisterstufe",
    "viewDetails": "Kursdetails ansehen",
    "c100Btn": "100-Std. Kurs",
    "c200Btn": "200-Std. Kurs",
    "c300Btn": "300-Std. Kurs",
    "explore100": "100-Std. entdecken",
    "explore200": "200-Std. entdecken",
    "explore300": "300-Std. entdecken",
    "from": "Ab",
    "f_duration": "Dauer",
    "f_level": "Erfahrungsgrad",
    "f_prereq": "Voraussetzung",
    "f_cert": "Zertifizierung",
    "f_focus": "Hauptfokus",
    "f_batch": "Gruppengröße",
    "f_price": "Startpreis",
    "rowsRishikesh": [{"c100": "12 Tage (11 Nächte)", "c200": "28 Tage (27 Nächte)", "c300": "28 Tage (27 Nächte)"}, {"c100": "Anfänger & Suchende", "c200": "Anfänger bis Mittelstufe", "c300": "Mittelstufe bis Fortgeschritten"}, {"c100": "Keine (Offener Geist)", "c200": "Regelmäßige eigene Praxis", "c300": "200-Std. Zertifikat"}, {"c100": "Grundlagenzertifikat", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Grundlagen & Eigenpraxis", "c200": "Didaktik, Anatomie & Praxis", "c300": "Meisterkurs & Vertiefung"}, {"c100": "Max. 8–10 Schüler", "c200": "Max. 8–10 Schüler", "c300": "Max. 8–10 Schüler"}, {"c100": "599 $ USD", "c200": "999 $ USD", "c300": "1.099 $ USD"}],
    "rowsVarkala": [{"c100": "12 Tage (11 Nächte)", "c200": "28 Tage (27 Nächte)", "c300": "28 Tage (27 Nächte)"}, {"c100": "Anfänger & Suchende", "c200": "Anfänger bis Mittelstufe", "c300": "Mittelstufe bis Fortgeschritten"}, {"c100": "Keine (Offener Geist)", "c200": "Regelmäßige eigene Praxis", "c300": "200-Std. Zertifikat"}, {"c100": "Grundlagenzertifikat", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Grundlagen & Eigenpraxis", "c200": "Didaktik, Anatomie & Praxis", "c300": "Meisterkurs & Vertiefung"}, {"c100": "Max. 8–10 Schüler", "c200": "Max. 8–10 Schüler", "c300": "Max. 8–10 Schüler"}, {"c100": "599 $ USD", "c200": "999 $ USD", "c300": "1.099 $ USD"}]
  },
  "fr": {
    "badge": "Comparatif des Programmes",
    "titleRishikesh": "Comparez les Formations de Yoga à Rishikesh",
    "titleVarkala": "Comparez les Formations de Yoga à Varkala",
    "subtitle": "Choisissez la formation adaptée à votre cheminement spirituel, vos disponibilités et vos ambitions.",
    "keyFeatures": "Caractéristiques Clés",
    "immersion": "Immersion",
    "mostPopular": "Le Plus Populaire",
    "masterLevel": "Niveau Maître",
    "viewDetails": "Voir les Détails du Cours",
    "c100Btn": "Cours 100h",
    "c200Btn": "Cours 200h",
    "c300Btn": "Cours 300h",
    "explore100": "Découvrir 100h",
    "explore200": "Découvrir 200h",
    "explore300": "Découvrir 300h",
    "from": "À partir de",
    "f_duration": "Durée",
    "f_level": "Niveau Requis",
    "f_prereq": "Prérequis",
    "f_cert": "Certification",
    "f_focus": "Objectif Principal",
    "f_batch": "Taille du Groupe",
    "f_price": "Tarif à partir de",
    "rowsRishikesh": [{"c100": "12 Jours (11 Nuits)", "c200": "28 Jours (27 Nuits)", "c300": "28 Jours (27 Nuits)"}, {"c100": "Débutants & Passionnés", "c200": "Débutant à Intermédiaire", "c300": "Intermédiaire à Avancé"}, {"c100": "Aucun (Esprit Ouvert)", "c200": "Pratique personnelle régulière", "c300": "Certification 200 Heures"}, {"c100": "Certificat d'Immersion", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Bases & Pratique Personnelle", "c200": "Pédagogie & Anatomie", "c300": "Séquençage Avancé & Maîtrise"}, {"c100": "8–10 Élèves Max", "c200": "8–10 Élèves Max", "c300": "8–10 Élèves Max"}, {"c100": "599 $ USD", "c200": "999 $ USD", "c300": "1 099 $ USD"}],
    "rowsVarkala": [{"c100": "12 Jours (11 Nuits)", "c200": "28 Jours (27 Nuits)", "c300": "28 Jours (27 Nuits)"}, {"c100": "Débutants & Passionnés", "c200": "Débutant à Intermédiaire", "c300": "Intermédiaire à Avancé"}, {"c100": "Aucun (Esprit Ouvert)", "c200": "Pratique personnelle régulière", "c300": "Certification 200 Heures"}, {"c100": "Certificat d'Immersion", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Bases & Pratique Personnelle", "c200": "Pédagogie & Anatomie", "c300": "Séquençage Avancé & Maîtrise"}, {"c100": "8–10 Élèves Max", "c200": "8–10 Élèves Max", "c300": "8–10 Élèves Max"}, {"c100": "599 $ USD", "c200": "999 $ USD", "c300": "1 099 $ USD"}]
  },
  "es": {
    "badge": "Comparación de Programas",
    "titleRishikesh": "Compara las Formaciones de Yoga en Rishikesh",
    "titleVarkala": "Compara las Formaciones de Yoga en Varkala",
    "subtitle": "Elige la formación que mejor se adapte a tu camino espiritual, horario y metas profesionales.",
    "keyFeatures": "Características Clave",
    "immersion": "Inmersión",
    "mostPopular": "Más Popular",
    "masterLevel": "Nivel Máster",
    "viewDetails": "Ver Detalles del Curso",
    "c100Btn": "Curso 100h",
    "c200Btn": "Curso 200h",
    "c300Btn": "Curso 300h",
    "explore100": "Explorar 100h",
    "explore200": "Explorar 200h",
    "explore300": "Explorar 300h",
    "from": "Desde",
    "f_duration": "Duración",
    "f_level": "Nivel de Experiencia",
    "f_prereq": "Requisito Previo",
    "f_cert": "Certificación",
    "f_focus": "Enfoque Principal",
    "f_batch": "Tamaño del Grupo",
    "f_price": "Precio desde",
    "rowsRishikesh": [{"c100": "12 Días (11 Noches)", "c200": "28 Días (27 Noches)", "c300": "28 Días (27 Noches)"}, {"c100": "Principiantes y Buscadores", "c200": "Principiante a Intermedio", "c300": "Intermedio a Avanzado"}, {"c100": "Ninguno (Mente Abierta)", "c200": "Práctica personal regular", "c300": "Certificación de 200 Horas"}, {"c100": "Certificado de Inmersión", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Fundamentos y Autopráctica", "c200": "Habilidades Pedagógicas y Anatomía", "c300": "Secuenciación Avanzada y Maestría"}, {"c100": "Máx. 8–10 Alumnos", "c200": "Máx. 8–10 Alumnos", "c300": "Máx. 8–10 Alumnos"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1.099 USD"}],
    "rowsVarkala": [{"c100": "12 Días (11 Noches)", "c200": "28 Días (27 Noches)", "c300": "28 Días (27 Noches)"}, {"c100": "Principiantes y Buscadores", "c200": "Principiante a Intermedio", "c300": "Intermedio a Avanzado"}, {"c100": "Ninguno (Mente Abierta)", "c200": "Práctica personal regular", "c300": "Certificación de 200 Horas"}, {"c100": "Certificado de Inmersión", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Fundamentos y Autopráctica", "c200": "Habilidades Pedagógicas y Anatomía", "c300": "Secuenciación Avanzada y Maestría"}, {"c100": "Máx. 8–10 Alumnos", "c200": "Máx. 8–10 Alumnos", "c300": "Máx. 8–10 Alumnos"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1.099 USD"}]
  },
  "it": {
    "badge": "Confronto dei Programmi",
    "titleRishikesh": "Confronta i Corsi di Formazione Yoga a Rishikesh",
    "titleVarkala": "Confronta i Corsi di Formazione Yoga a Varkala",
    "subtitle": "Scegli il percorso che rispecchia il tuo cammino spirituale, i tuoi orari e i tuoi obiettivi professionali.",
    "keyFeatures": "Caratteristiche Principali",
    "immersion": "Immersione",
    "mostPopular": "Più Popolare",
    "masterLevel": "Livello Avanzato",
    "viewDetails": "Vedi Dettagli Corso",
    "c100Btn": "Corso 100 Ore",
    "c200Btn": "Corso 200 Ore",
    "c300Btn": "Corso 300 Ore",
    "explore100": "Scopri 100 Ore",
    "explore200": "Scopri 200 Ore",
    "explore300": "Scopri 300 Ore",
    "from": "Da",
    "f_duration": "Durata",
    "f_level": "Livello di Esperienza",
    "f_prereq": "Prerequisiti",
    "f_cert": "Certificazione",
    "f_focus": "Focus Principale",
    "f_batch": "Dimensione del Gruppo",
    "f_price": "Prezzo a partire da",
    "rowsRishikesh": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "ru": {
    "badge": "Сравнение программ",
    "titleRishikesh": "Сравните курсы подготовки преподавателей йоги в Ришикеше",
    "titleVarkala": "Сравните курсы подготовки преподавателей йоги в Варкале",
    "subtitle": "Выберите программу, соответствующую вашему духовному пути, графику и целям сертификации.",
    "keyFeatures": "Ключевые особенности",
    "immersion": "Интенсив",
    "mostPopular": "Самый популярный",
    "masterLevel": "Мастер-уровень",
    "viewDetails": "Подробнее о курсе",
    "c100Btn": "Курс 100ч",
    "c200Btn": "Курс 200ч",
    "c300Btn": "Курс 300ч",
    "explore100": "Подробнее о 100ч",
    "explore200": "Подробнее о 200ч",
    "explore300": "Подробнее о 300ч",
    "from": "От",
    "f_duration": "Продолжительность",
    "f_level": "Уровень подготовки",
    "f_prereq": "Требования",
    "f_cert": "Сертификация",
    "f_focus": "Ключевой фокус",
    "f_batch": "Размер группы",
    "f_price": "Стоимость от",
    "rowsRishikesh": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "id": {
    "badge": "Perbandingan Program",
    "titleRishikesh": "Bandingkan Pelatihan Guru Yoga di Rishikesh",
    "titleVarkala": "Bandingkan Pelatihan Guru Yoga di Varkala",
    "subtitle": "Pilih program yang selaras dengan jalur spiritual, jadwal, dan tujuan sertifikasi profesional Anda.",
    "keyFeatures": "Fitur Utama",
    "immersion": "Imersi",
    "mostPopular": "Paling Populer",
    "masterLevel": "Tingkat Master",
    "viewDetails": "Lihat Detail Kursus",
    "c100Btn": "Kursus 100 Jam",
    "c200Btn": "Kursus 200 Jam",
    "c300Btn": "Kursus 300 Jam",
    "explore100": "Pelajari 100 Jam",
    "explore200": "Pelajari 200 Jam",
    "explore300": "Pelajari 300 Jam",
    "from": "Mulai",
    "f_duration": "Durasi",
    "f_level": "Tingkat Pengalaman",
    "f_prereq": "Prasyarat",
    "f_cert": "Sertifikasi",
    "f_focus": "Fokus Utama",
    "f_batch": "Ukuran Grup",
    "f_price": "Mulai dari",
    "rowsRishikesh": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "ja": {
    "badge": "プログラム比較",
    "titleRishikesh": "リシケシのヨガ指導者養成コース比較",
    "titleVarkala": "バルカラのヨガ指導者養成コース比較",
    "subtitle": "ご自身の霊的な探求、受講スケジュール、目指す指導者認定に合わせて最適なコースをお選びください。",
    "keyFeatures": "主な特徴",
    "immersion": "集中体験",
    "mostPopular": "一番人気",
    "masterLevel": "マスターレベル",
    "viewDetails": "コース詳細を見る",
    "c100Btn": "100時間コース",
    "c200Btn": "200時間コース",
    "c300Btn": "300時間コース",
    "explore100": "100時間を詳しく",
    "explore200": "200時間を詳しく",
    "explore300": "300時間を詳しく",
    "from": "〜",
    "f_duration": "期間",
    "f_level": "対象レベル",
    "f_prereq": "受講資格",
    "f_cert": "取得資格",
    "f_focus": "学習の重点",
    "f_batch": "定員",
    "f_price": "最低受講料",
    "rowsRishikesh": [{"c100": "12日間（11泊）", "c200": "28日間（27泊）", "c300": "28日間（27泊）"}, {"c100": "初級者・ヨガ探求者", "c200": "初級〜中級者", "c300": "中級〜上級者"}, {"c100": "不問（素直な探求心）", "c200": "定期的な自主練習", "c300": "200時間修了資格"}, {"c100": "基礎修了証", "c200": "全米ヨガアライアンス RYT 200", "c300": "全米ヨガアライアンス RYT 500"}, {"c100": "基礎知識と自己鍛錬", "c200": "指導法・解剖学・アライメント", "c300": "高度なシークエンスと指導の極意"}, {"c100": "8〜10名の少人数制", "c200": "8〜10名の少人数制", "c300": "8〜10名の少人数制"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12日間（11泊）", "c200": "28日間（27泊）", "c300": "28日間（27泊）"}, {"c100": "初級者・ヨガ探求者", "c200": "初級〜中級者", "c300": "中級〜上級者"}, {"c100": "不問（素直な探求心）", "c200": "定期的な自主練習", "c300": "200時間修了資格"}, {"c100": "基礎修了証", "c200": "全米ヨガアライアンス RYT 200", "c300": "全米ヨガアライアンス RYT 500"}, {"c100": "基礎知識と自己鍛錬", "c200": "指導法・解剖学・アライメント", "c300": "高度なシークエンスと指導の極意"}, {"c100": "8〜10名の少人数制", "c200": "8〜10名の少人数制", "c300": "8〜10名の少人数制"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "ko": {
    "badge": "프로그램 비교",
    "titleRishikesh": "리시케시 요가 지도자 과정 비교",
    "titleVarkala": "바르칼라 요가 지도자 과정 비교",
    "subtitle": "자신의 영적 목표, 일정, 전문 자격 취득 목적에 가장 알맞은 과정을 선택하세요.",
    "keyFeatures": "주요 특징",
    "immersion": "몰입 입문",
    "mostPopular": "가장 인기있는 코스",
    "masterLevel": "마스터 레벨",
    "viewDetails": "과정 상세 정보 보기",
    "c100Btn": "100시간 과정",
    "c200Btn": "200시간 과정",
    "c300Btn": "300시간 과정",
    "explore100": "100시간 알아보기",
    "explore200": "200시간 알아보기",
    "explore300": "300시간 알아보기",
    "from": "~부터",
    "f_duration": "기간",
    "f_level": "수련 레벨",
    "f_prereq": "사전 요구 조건",
    "f_cert": "취득 자격증",
    "f_focus": "핵심 커리큘럼",
    "f_batch": "정원",
    "f_price": "시작 가격",
    "rowsRishikesh": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12 Days (11 Nights)", "c200": "28 Days (27 Nights)", "c300": "28 Days (27 Nights)"}, {"c100": "Beginners & Seekers", "c200": "Beginner to Intermediate", "c300": "Intermediate to Advanced"}, {"c100": "None (Open Mind)", "c200": "Consistent Self-Practice", "c300": "200-Hour Certification"}, {"c100": "Foundation Certificate", "c200": "Yoga Alliance RYT 200", "c300": "Yoga Alliance RYT 500"}, {"c100": "Foundations & Self-Practice", "c200": "Teaching Skills & Anatomy", "c300": "Advanced Sequencing & Mastery"}, {"c100": "8–10 Students Max", "c200": "8–10 Students Max", "c300": "8–10 Students Max"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  },
  "zh": {
    "badge": "课程对比",
    "titleRishikesh": "对比瑞诗凯诗瑜伽教师培训课程",
    "titleVarkala": "对比瓦尔卡拉瑜伽教师培训课程",
    "subtitle": "选择与你的灵性追求、时间安排以及专业认证目标最契合的培训项目。",
    "keyFeatures": "核心特色",
    "immersion": "入门精修",
    "mostPopular": "最受欢迎",
    "masterLevel": "导师大师级",
    "viewDetails": "查看课程详情",
    "c100Btn": "100小时课程",
    "c200Btn": "200小时课程",
    "c300Btn": "300小时课程",
    "explore100": "探索100小时",
    "explore200": "探索200小时",
    "explore300": "探索300小时",
    "from": "起",
    "f_duration": "时长",
    "f_level": "经验水平",
    "f_prereq": "先决条件",
    "f_cert": "国际认证",
    "f_focus": "核心重点",
    "f_batch": "班级规模",
    "f_price": "起步学费",
    "rowsRishikesh": [{"c100": "12天（11晚）", "c200": "28天（27晚）", "c300": "28天（27晚）"}, {"c100": "初学者与灵性探索者", "c200": "初级至中级修习者", "c300": "中级至资深导师"}, {"c100": "无需先修（持开放心态）", "c200": "规律的自我修习习惯", "c300": "具备200小时认证资质"}, {"c100": "基础沉浸修学证书", "c200": "全美瑜伽联盟 RYT 200", "c300": "全美瑜伽联盟 RYT 500"}, {"c100": "基础体式与自我修行", "c200": "教学技能与应用解剖学", "c300": "高阶体式编排与大师之道"}, {"c100": "8–10人小班授课", "c200": "8–10人小班授课", "c300": "8–10人小班授课"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}],
    "rowsVarkala": [{"c100": "12天（11晚）", "c200": "28天（27晚）", "c300": "28天（27晚）"}, {"c100": "初学者与灵性探索者", "c200": "初级至中级修习者", "c300": "中级至资深导师"}, {"c100": "无需先修（持开放心态）", "c200": "规律的自我修习习惯", "c300": "具备200小时认证资质"}, {"c100": "基础沉浸修学证书", "c200": "全美瑜伽联盟 RYT 200", "c300": "全美瑜伽联盟 RYT 500"}, {"c100": "基础体式与自我修行", "c200": "教学技能与应用解剖学", "c300": "高阶体式编排与大师之道"}, {"c100": "8–10人小班授课", "c200": "8–10人小班授课", "c300": "8–10人小班授课"}, {"c100": "$599 USD", "c200": "$999 USD", "c300": "$1,099 USD"}]
  }
};

export const EXPLORE_MORE_COURSES_UI: Record<string, ExploreMoreCoursesUIData> = {
  "en": {
    "badge": "Continue Your Growth",
    "title": "Explore More Yoga Teacher Training Courses",
    "subtitle": "Discover our full spectrum of Yoga Alliance accredited trainings across Rishikesh and Bali.",
    "exploreCourse": "Explore Course"
  },
  "nl": {
    "badge": "Blijf Jezelf Ontwikkelen",
    "title": "Ontdek Meer Yogadocentenopleidingen",
    "subtitle": "Ontdek ons volledige aanbod van Yoga Alliance geaccrediteerde opleidingen in Rishikesh en Bali.",
    "exploreCourse": "Bekijk Opleiding"
  },
  "de": {
    "badge": "Wachsen Sie Weiter",
    "title": "Entdecken Sie Weitere Yogalehrer-Ausbildungen",
    "subtitle": "Entdecken Sie unser gesamtes Angebot an Yoga Alliance akkreditierten Ausbildungen in Rishikesh und auf Bali.",
    "exploreCourse": "Kurs Entdecken"
  },
  "fr": {
    "badge": "Poursuivez Votre Évolution",
    "title": "Découvrez Nos Autres Formations de Professeur de Yoga",
    "subtitle": "Découvrez notre éventail complet de formations certifiées Yoga Alliance à Rishikesh et Bali.",
    "exploreCourse": "Explorer la Formation"
  },
  "es": {
    "badge": "Continúa Tu Crecimiento",
    "title": "Descubre Más Formaciones de Profesores de Yoga",
    "subtitle": "Descubre nuestra oferta completa de cursos acreditados por Yoga Alliance en Rishikesh y Bali.",
    "exploreCourse": "Explorar Formación"
  },
  "it": {
    "badge": "Continua a Crescere",
    "title": "Esplora Altri Corsi per Insegnanti di Yoga",
    "subtitle": "Scopri la nostra gamma completa di corsi accreditati Yoga Alliance a Rishikesh e Bali.",
    "exploreCourse": "Scopri il Corso"
  },
  "ru": {
    "badge": "Продолжайте развиваться",
    "title": "Другие курсы подготовки преподавателей йоги",
    "subtitle": "Ознакомьтесь со всеми сертифицированными курсами Yoga Alliance в Ришикеше и на Бали.",
    "exploreCourse": "Узнать подробнее"
  },
  "id": {
    "badge": "Lanjutkan Pertumbuhan Anda",
    "title": "Jelajahi Lebih Banyak Kursus Guru Yoga",
    "subtitle": "Temukan seluruh spektrum pelatihan terakreditasi Yoga Alliance kami di Rishikesh dan Bali.",
    "exploreCourse": "Jelajahi Kursus"
  },
  "ja": {
    "badge": "さらなる成長へ",
    "title": "その他のヨガ指導者養成コースを探す",
    "subtitle": "リシケシとバリ島で開催される全米ヨガアライアンス認定コースの全ラインナップをご覧ください。",
    "exploreCourse": "コースを見る"
  },
  "ko": {
    "badge": "배움을 이어가세요",
    "title": "더 많은 요가 지도자 과정 둘러보기",
    "subtitle": "리시케시와 발리에서 열리는 전미 요가 얼라이언스 공인 과정들을 만나보세요.",
    "exploreCourse": "과정 살펴보기"
  },
  "zh": {
    "badge": "持续深造进阶",
    "title": "探索更多瑜伽教师培训课程",
    "subtitle": "探索我们在瑞诗凯诗与巴厘岛开设的全方位瑜伽联盟认证教师培训课程。",
    "exploreCourse": "了解课程"
  }
};

export const BEST_TIME_TO_VISIT_UI: Record<string, BestTimeToVisitUIData> = {
  "en": {
    "badgeRishikesh": "Seasonal Climate",
    "badgeVarkala": "Coastal Climate",
    "titleRishikesh": "Best Time to Visit Rishikesh for Yoga Training",
    "titleVarkala": "Best Time to Visit Varkala for Yoga Training",
    "subtitleRishikesh": "Plan your spiritual immersion according to the Himalayan weather patterns and personal practice goals.",
    "subtitleVarkala": "Plan your seaside training according to Kerala's tropical seasons and ocean conditions.",
    "monthlyStart": "Monthly 1st start date",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "nl": {
    "badgeRishikesh": "Seizoensklimaat",
    "badgeVarkala": "Kustklimaat",
    "titleRishikesh": "Beste Reistijd naar Rishikesh voor Yoga Opleiding",
    "titleVarkala": "Beste Reistijd naar Varkala voor Yoga Opleiding",
    "subtitleRishikesh": "Plan je spirituele verdieping aan de hand van het weer in de Himalaya en je persoonlijke doelen.",
    "subtitleVarkala": "Plan je training aan zee aan de hand van de tropische seizoenen en het klimaat in Kerala.",
    "monthlyStart": "Start elke 1e van de maand",
    "seasonsRishikesh": [{"badge": "Beste Seizoen", "temp": "18°C – 28°C", "period": "Oktober – Maart", "climate": "Zonnig, Helder & Aangenaam", "description": "Milde winter en strakblauwe luchten. Ideaal voor intensieve asana's, buitenmeditatie aan de Ganges en bergwandelingen."}, {"badge": "Warm Seizoen", "temp": "24°C – 35°C", "period": "April – Juni", "climate": "Warm & Rijk aan Prana", "description": "Warme temperaturen bevorderen soepelheid van gewrichten en spieren. Ideaal voor ochtendduiken in de Ganges."}, {"badge": "Moesson Seizoen", "temp": "22°C – 30°C", "period": "Juli – September", "climate": "Weelderig & Meditatief", "description": "Heilige Shravan-tijd met groene nevelige heuvels, watervallen en diepe stilte voor zelfstudie."}],
    "seasonsVarkala": [{"badge": "Beste Seizoen", "temp": "24°C – 31°C", "period": "Oktober – Maart", "climate": "Zonnig, Luchtig & Droog", "description": "Zachte bries van de Arabische Zee en heldere dagen. Perfect voor klifwandelingen en strand-yoga."}, {"badge": "Warm Seizoen", "temp": "26°C – 33°C", "period": "April – Mei", "climate": "Zonnig & Genezend", "description": "Heerlijke zonnige dagen die de soepelheid vergroten en ideaal zijn voor ontspannende Ayurvedische behandelingen."}, {"badge": "Moesson Seizoen", "temp": "23°C – 29°C", "period": "Juni – September", "climate": "Regenererend & Weelderig Groen", "description": "Traditioneel Ayurvedisch herstel-seizoen (Karkidaka) waarin kruidentherapieën optimaal door het lichaam worden opgenomen."}]
  },
  "de": {
    "badgeRishikesh": "Saisonales Klima",
    "badgeVarkala": "Küstenklima",
    "titleRishikesh": "Beste Reisezeit für Yoga in Rishikesh",
    "titleVarkala": "Beste Reisezeit für Yoga in Varkala",
    "subtitleRishikesh": "Planen Sie Ihre Reise abgestimmt auf das Klima im Himalaya und Ihre Übungsziele.",
    "subtitleVarkala": "Planen Sie Ihre Ausbildung am Meer abgestimmt auf Keralas Tropenklima.",
    "monthlyStart": "Beginn jeden 1. des Monats",
    "seasonsRishikesh": [{"badge": "Beste Reisezeit", "temp": "18°C – 28°C", "period": "Oktober – März", "climate": "Sonnig, klar & angenehm", "description": "Milder Winter und strahlend blauer Himmel. Perfekt für intensive Asanas, Meditation am Fluss und Himalaya-Wanderungen."}, {"badge": "Warme Jahreszeit", "temp": "24°C – 35°C", "period": "April – Juni", "climate": "Warm & prall gefüllt mit Prana", "description": "Warme Temperaturen fördern die Muskelentspannung und Flexibilität. Ideal für frühe Morgenstunden an der Ganga."}, {"badge": "Monsunzeit", "temp": "22°C – 30°C", "period": "Juli – September", "climate": "Üppig grün & meditativ", "description": "Heilige Shravan-Zeit mit grünem Nebel, Wasserfällen und tiefer Stille für konzentriertes Selbststudium."}],
    "seasonsVarkala": [{"badge": "Beste Reisezeit", "temp": "24°C – 31°C", "period": "Oktober – März", "climate": "Sonnig, luftig & trocken", "description": "Angenehme Meeresbrise und klare Tage. Ideal für Klippenwanderungen, Strand-Yoga und Ayurveda."}, {"badge": "Warme Jahreszeit", "temp": "26°C – 33°C", "period": "April – Mai", "climate": "Sonnig & heilsam", "description": "Sonnige Tage unterstützen die Gelenkbeweglichkeit und kühlende ayurvedische Kuranwendungen."}, {"badge": "Monsunzeit", "temp": "23°C – 29°C", "period": "Juni – September", "climate": "Regenerierend & tropisch grün", "description": "Klassische Ayurveda-Saison (Karkidaka) mit angenehmer Kühle, hoher Luftfeuchtigkeit und bester Wirksamkeit."}]
  },
  "fr": {
    "badgeRishikesh": "Climat Saisonnier",
    "badgeVarkala": "Climat Côtier",
    "titleRishikesh": "Meilleure Période pour Se Former au Yoga à Rishikesh",
    "titleVarkala": "Meilleure Période pour Se Former au Yoga à Varkala",
    "subtitleRishikesh": "Planifiez votre formation selon le climat himalayen et vos objectifs personnels.",
    "subtitleVarkala": "Planifiez votre séjour selon les saisons tropicales du Kerala.",
    "monthlyStart": "Début le 1er de chaque mois",
    "seasonsRishikesh": [{"badge": "Meilleure Saison", "temp": "18°C – 28°C", "period": "Octobre – Mars", "climate": "Ensoleillé, Frais & Paisible", "description": "Hiver doux et ciel limpide. Conditions idéales pour les asanas quotidiens et les méditations au bord du Gange."}, {"badge": "Saison Chaude", "temp": "24°C – 35°C", "period": "Avril – Juin", "climate": "Chaud & Riche en Prana", "description": "Chaleur propice à la souplesse articulaire et musculaire, baignades matinales dans le Gange et satsangs en terrasse."}, {"badge": "Saison de la Mousson", "temp": "22°C – 30°C", "period": "Juillet – Septembre", "climate": "Verdoyant & Méditatif", "description": "Période sacrée de Shravan où la brume himalayenne et les cascades invitent au recueillement et à l'étude intérieure."}],
    "seasonsVarkala": [{"badge": "Meilleure Saison", "temp": "24°C – 31°C", "period": "Octobre – Mars", "climate": "Ensoleillé, Aéré & Sec", "description": "Douce brise de la mer d'Oman et journées ensoleillées. Idéal pour les promenades sur les falaises et le yoga en plein air."}, {"badge": "Saison Chaude", "temp": "26°C – 33°C", "period": "Avril – Mai", "climate": "Chaud & Régénérant", "description": "Journées lumineuses parfaites pour assouplir le corps, nager au coucher du soleil et recevoir des soins ayurvédiques."}, {"badge": "Saison de la Mousson", "temp": "23°C – 29°C", "period": "Juin – Septembre", "climate": "Régénération & Végétation", "description": "Saison traditionnelle de régénération ayurvédique (Karkidaka) où le corps assimile au mieux les soins thérapeutiques."}]
  },
  "es": {
    "badgeRishikesh": "Clima Estacional",
    "badgeVarkala": "Clima Costero",
    "titleRishikesh": "Mejor Época para Formarse en Yoga en Rishikesh",
    "titleVarkala": "Mejor Época para Formarse en Yoga en Varkala",
    "subtitleRishikesh": "Planifica tu viaje según las estaciones del Himalaya y tus metas de práctica.",
    "subtitleVarkala": "Planifica tu formación según las temporadas tropicales de Kerala.",
    "monthlyStart": "Inicio el día 1 de cada mes",
    "seasonsRishikesh": [{"badge": "Mejor Temporada", "temp": "18°C – 28°C", "period": "Octubre – Marzo", "climate": "Soleado, Fresco y Sereno", "description": "Invierno suave y cielo despejado. Ideal para la práctica diaria de asanas y meditación junto al Ganges."}, {"badge": "Temporada Cálida", "temp": "24°C – 35°C", "period": "Abril – Junio", "climate": "Cálido y con Alto Prana", "description": "Temperaturas cálidas que facilitan la flexibilidad corporal y baños matutinos en las aguas del río."}, {"badge": "Temporada de Monzón", "temp": "22°C – 30°C", "period": "Julio – Septiembre", "climate": "Verde y Meditativo", "description": "Época sagrada de Shravan con niebla mística en las colinas, cascadas y un recogimiento propicio para el estudio."}],
    "seasonsVarkala": [{"badge": "Mejor Temporada", "temp": "24°C – 31°C", "period": "Octubre – Marzo", "climate": "Soleado, Brisa y Seco", "description": "Brisa agradable del Mar Arábigo y cielos azules. Perfecto para paseos por el acantilado y yoga en la playa."}, {"badge": "Temporada Cálida", "temp": "26°C – 33°C", "period": "Abril – Mayo", "climate": "Soleado y Sanador", "description": "Días cálidos idóneos para soltar articulaciones, nadar en el mar y recibir masajes ayurvédicos."}, {"badge": "Temporada de Monzón", "temp": "23°C – 29°C", "period": "Junio – Septiembre", "climate": "Regenerador y Tropical", "description": "Temporada clásica de sanación ayurvédica (Karkidaka) con mayor efectividad en las terapias naturales."}]
  },
  "it": {
    "badgeRishikesh": "Clima Stagionale",
    "badgeVarkala": "Clima Costiero",
    "titleRishikesh": "Il Periodo Migliore per la Formazione Yoga a Rishikesh",
    "titleVarkala": "Il Periodo Migliore per la Formazione Yoga a Varkala",
    "subtitleRishikesh": "Pianifica il soggiorno in base al clima himalayano e ai tuoi traguardi personali.",
    "subtitleVarkala": "Pianifica il soggiorno in base alle stagioni tropicali del Kerala.",
    "monthlyStart": "Inizio il 1° di ogni mese",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "ru": {
    "badgeRishikesh": "Сезонный климат",
    "badgeVarkala": "Прибрежный климат",
    "titleRishikesh": "Лучшее время для обучения йоге в Ришикеше",
    "titleVarkala": "Лучшее время для обучения йоге в Варкале",
    "subtitleRishikesh": "Планируйте поездку с учетом климатических особенностей Гималаев и личных целей.",
    "subtitleVarkala": "Планируйте поездку с учетом тропического климата Кералы.",
    "monthlyStart": "Начало 1-го числа каждого месяца",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "id": {
    "badgeRishikesh": "Iklim Musiman",
    "badgeVarkala": "Iklim Pesisir",
    "titleRishikesh": "Waktu Terbaik Mengikuti Pelatihan Yoga di Rishikesh",
    "titleVarkala": "Waktu Terbaik Mengikuti Pelatihan Yoga di Varkala",
    "subtitleRishikesh": "Rencanakan perjalanan Anda sesuai dengan pola cuaca Himalaya dan tujuan latihan Anda.",
    "subtitleVarkala": "Rencanakan pelatihan tepi pantai Anda sesuai musim tropis Kerala.",
    "monthlyStart": "Mulai setiap tanggal 1 tiap bulan",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "ja": {
    "badgeRishikesh": "季節と気候",
    "badgeVarkala": "沿岸の気候",
    "titleRishikesh": "リシケシでのヨガ受講に最適な時期",
    "titleVarkala": "バルカラでのヨガ受講に最適な時期",
    "subtitleRishikesh": "ヒマラヤの気候サイクルとご自身の修練目的に合わせて最適な時期をご検討ください。",
    "subtitleVarkala": "ケララの熱帯気候と海の状況に合わせて受講時期をご検討ください。",
    "monthlyStart": "毎月1日開講",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "ko": {
    "badgeRishikesh": "계절별 기후",
    "badgeVarkala": "해안 기후",
    "titleRishikesh": "리시케시 요가 유학에 가장 좋은 시기",
    "titleVarkala": "바르칼라 요가 유학에 가장 좋은 시기",
    "subtitleRishikesh": "히말라야의 계절 변화와 개인 수련 목적에 맞춰 일정을 계획하세요.",
    "subtitleVarkala": "케랄라의 열대 계절과 기후 조건에 맞춰 일정을 계획하세요.",
    "monthlyStart": "매월 1일 개강",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  },
  "zh": {
    "badgeRishikesh": "季节气候",
    "badgeVarkala": "海滨气候",
    "titleRishikesh": "前往瑞诗凯诗修习瑜伽的最佳时节",
    "titleVarkala": "前往瓦尔卡拉修习瑜伽的最佳时节",
    "subtitleRishikesh": "根据喜马拉雅的气候变化与个人的修习目标，规划你的灵性之旅。",
    "subtitleVarkala": "根据喀拉拉的热带季节特征，规划你的海滨修习之旅。",
    "monthlyStart": "每月1日开营",
    "seasonsRishikesh": [{"badge": "Best Season", "temp": "18°C – 28°C", "period": "October – March", "climate": "Sunny, Crisp & Serene", "description": "Mild winter and clear sunny skies. Ideal for intense daily asana, outdoor meditation by the Ganges, and pristine Himalayan walks."}, {"badge": "Warm Season", "temp": "24°C – 35°C", "period": "April – June", "climate": "Warm & High Prana", "description": "Warm tropical weather ideal for deep muscular flexibility, early-morning Ganga dips, and evening rooftop philosophical satsangs."}, {"badge": "Monsoon Season", "temp": "22°C – 30°C", "period": "July – September", "climate": "Lush & Meditative", "description": "Sacred Shravan season with lush green Himalayan mist, waterfalls, and profound inner silence for quiet contemplative study."}],
    "seasonsVarkala": [{"badge": "Best Season", "temp": "24°C – 31°C", "period": "October – March", "climate": "Sunny, Breezy & Dry", "description": "Gentle Arabian Sea breeze and clear sunny days. Ideal for cliff walks, beach yoga, and outdoor Ayurvedic lifestyle."}, {"badge": "Warm Season", "temp": "26°C – 33°C", "period": "April – May", "climate": "Warm, Sunny & Deep Healing", "description": "Sun-drenched days ideal for deep joint mobility, sunset ocean swimming, and cooling Ayurvedic treatments."}, {"badge": "Monsoon Season", "temp": "23°C – 29°C", "period": "June – September", "climate": "Rejuvenating & Lush", "description": "Traditional Ayurvedic rejuvenating season (Karkidaka) with cooling rains, rich humidity, and maximum tissue responsiveness to Ayurvedic treatments."}]
  }
};

export const HOW_TO_REACH_UI: Record<string, HowToReachUIData> = {
  "en": {
    "badge": "Travel & Arrival Guide",
    "titleRishikesh": "How to Reach YogaGarhi Rishikesh",
    "titleVarkala": "How to Reach YogaGarhi Varkala",
    "titleBali": "How to Reach YogaGarhi Bali",
    "subtitleRishikesh": "Clear travel routes, airport transit options, and taxi fares to arrive smoothly at our Tapovan ashram sanctuary.",
    "subtitleVarkala": "Complete travel routes, airport transit details, and train connections to reach our cliffside shala in Kerala.",
    "subtitleBali": "Plan your travel smoothly to our peaceful ashram sanctuary in Gianyar, Bali.",
    "byAir": "By Air",
    "byTrain": "By Train",
    "byRoad": "By Road",
    "airportTransfers": "Airport & Transfers",
    "checkInOut": "Check-In & Check-Out",
    "taxiTitleRishikesh": "前往里希开诗 YogaGarhi 静修院的预计出租车费用",
    "taxiTitleVarkala": "前往瓦尔卡拉 YogaGarhi 瑜伽院的预计出租车费用",
    "taxiSubRishikesh": "前往塔波万(Tapovan)的预先商定标准司机价格",
    "taxiSubVarkala": "前往北悬崖(North Cliff)的预先商定标准价格",
    "thRoute": "交通路线",
    "thCostUsd": "预估费用 (USD)",
    "thCostInr": "预估费用 (INR)",
    "pickupStrong": "我们安排机场接机服务：",
    "pickupTextRishikesh": "请将您的航班或火车时刻表告知我们的招生团队，我们值得信赖的静修院专属司机将手持写有您姓名的接机牌在此等候。",
    "pickupTextVarkala": "请分享您抵达特里凡得琅或科钦的时间，我们的专属司机会将您安全舒适地送达瓦尔卡拉瑜伽院。",
    "pickupBtn": "预约接机服务",
    "visaTitle": "国际学员印度签证及入境实用指南",
    "visaSub": "确保入境顺利的核心注意事项",
    "visaB1Title": "印度电子旅游签证 (e-Visa)：",
    "visaB1Text": "来自160多个国家和地区的公民可在行前通过印度政府官方网站便捷申请电子旅游签证。",
    "visaB2Title": "有效期：",
    "visaB2Text": "建议在计划出发日期前至少2周申请30天或1年多次往返的电子旅游签证。",
    "visaB3Title": "货币与本地手机卡：",
    "visaB3Text": "当地法定货币为印度卢比 (INR)。周边ATM取款便利，静修院前台可协助办理当地高速5G上网卡。",
    "visaB4Title": "入住时间：",
    "visaB4Text": "静修院官方入住时间为每期1日中午12:00起，傍晚将举行新生说明会与开幕火祭典礼 (Havan)。",
    "airItemsRishikesh": [{"title": "Jolly Grant Airport, Dehradun (DED)", "distance": "35 km (~45 min drive to ashram)", "description": "Nearest domestic airport. Frequent daily flights from New Delhi (DEL, 45 min flight), Mumbai, Bengaluru, and Hyderabad."}, {"title": "Indira Gandhi International Airport, Delhi (DEL)", "distance": "250 km (~5–6 hrs drive or connecting flight)", "description": "Primary international gateway for overseas students. Connects directly to Dehradun (DED) via multiple 45-min domestic hops daily, or take a scenic expressway taxi."}],
    "trainItemsRishikesh": [{"title": "Yog Nagari Rishikesh Railway Station (YNRK)", "distance": "6 km (~15 min drive)", "description": "Modern railway terminal in Rishikesh city with connections to major northern Indian rail hubs."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 min drive)", "description": "Major railway junction with frequent high-speed trains including the Vande Bharat Express and New Delhi Shatabdi Express (approx. 4.5 hrs from Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate to Rishikesh", "distance": "240 km (~5 hrs via Meerut Expressway)", "description": "Frequent 24/7 Volvo AC sleeper and luxury interstate buses depart hourly from Delhi to Rishikesh bus station."}, {"title": "Dehradun to Rishikesh", "distance": "45 km (~1 hr)", "description": "Well-connected state highway with regular local transit, shared taxis, and direct private cabs available round the clock."}],
    "airItemsVarkala": [{"title": "Trivandrum International Airport (TRV)", "distance": "45 km (~1 hr drive)", "description": "Nearest domestic and international airport. Frequent direct daily flights from Delhi, Mumbai, Bengaluru, Chennai, and Middle East / Southeast Asian hubs."}, {"title": "Cochin International Airport (COK)", "distance": "190 km (~4.5 hrs drive)", "description": "Major international gateway for long-haul international flights. Connects to Varkala via coastal highway NH 66 or express trains."}],
    "trainItemsVarkala": [{"title": "Varkala Sivagiri Railway Station (VAK)", "distance": "3 km (~10 min auto-rickshaw)", "description": "Convenient local station right in town. Connects directly to major Indian rail corridors with daily express trains to Trivandrum, Kochi, Mumbai, and Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 min drive)", "description": "Major regional rail terminal served by high-speed express trains from across the country."}],
    "roadItemsVarkala": [{"title": "Trivandrum to Varkala Cliff", "distance": "45 km (~1 hr via NH 66)", "description": "Smooth highway drive with coastal scenery. Frequent KSRTC buses and private cabs run continuously throughout the day."}, {"title": "Kochi to Varkala", "distance": "165 km (~4 hrs via NH 66)", "description": "Scenic drive along Kerala's coastline with multiple comfortable stopover spots along the highway."}],
    "taxiFaresRishikesh": [{"route": "Dehradun Airport (DED) → YogaGarhi Ashram", "costUsd": "$15–$20", "costInr": "₹1,200"}, {"route": "Delhi Airport (DEL) → YogaGarhi Ashram", "costUsd": "$60–$70", "costInr": "₹5,000"}, {"route": "Haridwar Railway Station → YogaGarhi Ashram", "costUsd": "$12–$15", "costInr": "₹1,000"}, {"route": "Rishikesh Railway Station (YNRK) → Ashram", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Trivandrum Airport (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2,000"}, {"route": "Cochin Airport (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5,500"}, {"route": "Varkala Sivagiri Station (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1,200"}],
    "openInMaps": "Open in Google Maps",
    "syllabusBtn": "Download Detailed Syllabus",
    "syllabusTitle": "Download Syllabus",
    "syllabusDesc": "Select your course and enter email to receive the detailed syllabus.",
    "syllabusEmailPlaceholder": "Your email address",
    "syllabusSend": "Send Syllabus",
    "syllabusSending": "Sending...",
    "syllabusPrompt": "Want to see the hour-by-hour breakdown and reading list?"
  },
  "nl": {
    "badge": "Reis- en Aankomstgids",
    "titleRishikesh": "Hoe Bereik je YogaGarhi Rishikesh",
    "titleVarkala": "Hoe Bereik je YogaGarhi Varkala",
    "titleBali": "Hoe Bereik je YogaGarhi Bali",
    "subtitleRishikesh": "Duidelijke reisroutes, luchthaventransfers en taxitarieven voor een soepele aankomst in ons Tapovan ashram.",
    "subtitleVarkala": "Volledige reisroutes, luchthaventransfers en treinverbindingen naar onze shala op de kliffen in Kerala.",
    "subtitleBali": "Plan je reis eenvoudig naar ons vredige ashram in Gianyar, Bali.",
    "byAir": "Per Vliegtuig",
    "byTrain": "Per Trein",
    "byRoad": "Over de Weg",
    "airportTransfers": "Luchthaven & Transfers",
    "checkInOut": "Inchecken & Uitchecken",
    "taxiTitleRishikesh": "Geschatte Taxitarieven naar YogaGarhi Ashram",
    "taxiTitleVarkala": "Geschatte Taxitarieven naar YogaGarhi Varkala Ashram",
    "taxiSubRishikesh": "Vooraf afgesproken vaste chauffeurskosten naar Tapovan",
    "taxiSubVarkala": "Vaste tarieven naar de noordelijke kliffen van Varkala",
    "thRoute": "Reisroute",
    "thCostUsd": "Geschatte Kosten (USD)",
    "thCostInr": "Geschatte Kosten (INR)",
    "pickupStrong": "Wij regelen je luchthaven ophaalservice:",
    "pickupTextRishikesh": "Deel je vlucht- of treingegevens met ons team; onze chauffeur staat klaar met een naambordje bij de uitgang.",
    "pickupTextVarkala": "Deel je vluchtschema; onze chauffeur verwelkomt je op de luchthaven van Trivandrum (TRV).",
    "pickupBtn": "Ophaalservice Aanvragen",
    "visaTitle": "India Visum & Aankomstadvies voor Internationale Studenten",
    "visaSub": "Belangrijke richtlijnen voor een vlotte immigratieprocedure",
    "visaB1Title": "Indiaas e-Toeristenvisum:",
    "visaB1Text": "Burgers van meer dan 160 landen kunnen eenvoudig vooraf online een e-toeristenvisum (e-Visa) aanvragen.",
    "visaB2Title": "Aanbevolen geldigheid:",
    "visaB2Text": "We raden aan om je visum minimaal 2 weken voor de geplande vertrekdatum aan te vragen.",
    "visaB3Title": "Paspoortvereisten:",
    "visaB3Text": "Je paspoort moet nog minstens 6 maanden geldig zijn vanaf de datum van aankomst en 2 lege pagina's bevatten.",
    "visaB4Title": "Registratie in de ashram:",
    "visaB4Text": "Bij aankomst helpt onze receptie je met de verplichte Form-C registratie voor buitenlandse gasten.",
    "airItemsRishikesh": [{"title": "Luchthaven Jolly Grant, Dehradun (DED)", "distance": "35 km (~45 min rijden naar ashram)", "description": "Dichtstbijzijnde binnenlandse luchthaven. Regelmatige dagelijkse vluchten vanuit New Delhi (DEL, 45 min vlucht), Mumbai, Bengaluru en Hyderabad."}, {"title": "Internationale Luchthaven Indira Gandhi, Delhi (DEL)", "distance": "250 km (~5–6 uur rijden of aansluitende vlucht)", "description": "Belangrijkste internationale toegangspoort voor buitenlandse studenten. Sluit direct aan op Dehradun via meerdere binnenlandse vluchten per dag, of neem een comfortabele snelwegtaxi."}],
    "trainItemsRishikesh": [{"title": "Treinstation Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 min rijden)", "description": "Modern spoorwegstation in Rishikesh met directe verbindingen naar grote Noord-Indiase knooppunten."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 min rijden)", "description": "Groot spoorwegknooppunt met regelmatige hogesnelheidstreinen, waaronder de Vande Bharat Express en New Delhi Shatabdi Express (ongeveer 4,5 uur vanaf Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate naar Rishikesh", "distance": "240 km (~5 uur via snelweg)", "description": "Luxe interstate bussen met airconditioning vertrekken 24/7 elk uur van Delhi naar het busstation van Rishikesh."}, {"title": "Dehradun naar Rishikesh", "distance": "45 km (~1 uur)", "description": "Uitstekend verbonden provinciale weg met frequente lokale bussen, deeltaxi's en privétaxi's die 24 uur per dag beschikbaar zijn."}],
    "airItemsVarkala": [{"title": "Internationale Luchthaven Trivandrum (TRV)", "distance": "45 km (~1 uur rijden)", "description": "Dichtstbijzijnde luchthaven. Regelmatige rechtstreekse dagelijkse vluchten vanuit Delhi, Mumbai, Bengaluru, Chennai en internationale knooppunten in het Midden-Oosten en Zuidoost-Azië."}, {"title": "Internationale Luchthaven Cochin (COK)", "distance": "190 km (~4,5 uur rijden)", "description": "Belangrijke internationale hub voor langeafstandsvluchten. Verbonden met Varkala via kustsnelweg NH 66 of sneltreinen."}],
    "trainItemsVarkala": [{"title": "Treinstation Varkala Sivagiri (VAK)", "distance": "3 km (~10 min tuktuk)", "description": "Handig lokaal station midden in de stad. Direct verbonden met de belangrijkste Indiase spoorlijnen met dagelijkse treinen naar Trivandrum, Kochi, Mumbai en Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 min rijden)", "description": "Belangrijk regionaal treinstation met frequente sneltreinen uit het hele land."}],
    "roadItemsVarkala": [{"title": "Trivandrum naar Varkala Cliff", "distance": "45 km (~1 uur via NH 66)", "description": "Comfortabele snelwegrit langs de kust. Regelmatige KSRTC-bussen en privétaxi's rijden de hele dag door."}, {"title": "Kochi naar Varkala", "distance": "165 km (~4 uur via NH 66)", "description": "Schilderachtige rit langs de kustlijn van Kerala met comfortabele tussenstops langs de snelweg."}],
    "taxiFaresRishikesh": [{"route": "Luchthaven Dehradun (DED) → YogaGarhi Ashram", "costUsd": "$15–$20", "costInr": "₹1.200"}, {"route": "Luchthaven Delhi (DEL) → YogaGarhi Ashram", "costUsd": "$60–$70", "costInr": "₹5.000"}, {"route": "Treinstation Haridwar → YogaGarhi Ashram", "costUsd": "$12–$15", "costInr": "₹1.000"}, {"route": "Treinstation Rishikesh (YNRK) → Ashram", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Luchthaven Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2.000"}, {"route": "Luchthaven Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5.500"}, {"route": "Treinstation Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1.200"}],
    "openInMaps": "Open in Google Maps",
    "syllabusBtn": "Download Gedetailleerd Lesprogramma",
    "syllabusTitle": "Download Lesprogramma",
    "syllabusDesc": "Selecteer je opleiding en vul je e-mailadres in om het gedetailleerde lesprogramma te ontvangen.",
    "syllabusEmailPlaceholder": "Je e-mailadres",
    "syllabusSend": "Lesprogramma Verzenden",
    "syllabusSending": "Verzenden...",
    "syllabusPrompt": "Wil je het gedetailleerde uurrooster en de literatuurlijst bekijken?"
  },
  "de": {
    "badge": "Anreise & Ankunft",
    "titleRishikesh": "Anreise zu YogaGarhi Rishikesh",
    "titleVarkala": "Anreise zu YogaGarhi Varkala",
    "titleBali": "Anreise zu YogaGarhi Bali",
    "subtitleRishikesh": "Klare Reiserouten, Flughafentransfers und Taxipreise für eine entspannte Ankunft in unserem Tapovan Ashram.",
    "subtitleVarkala": "Detaillierte Anreisewege, Flughafentransfers und Zugverbindungen zu unserer Klippen-Shala in Kerala.",
    "subtitleBali": "Planen Sie Ihre Anreise zu unserem friedvollen Ashram in Gianyar, Bali.",
    "byAir": "Mit dem Flugzeug",
    "byTrain": "Mit dem Zug",
    "byRoad": "Über Land / Bus",
    "airportTransfers": "Flughafen & Transfers",
    "checkInOut": "Check-in & Check-out",
    "taxiTitleRishikesh": "Geschätzte Taxipreise zum YogaGarhi Ashram",
    "taxiTitleVarkala": "Geschätzte Taxipreise zum YogaGarhi Varkala Ashram",
    "taxiSubRishikesh": "Vorab vereinbarte Standardpreise nach Tapovan",
    "taxiSubVarkala": "Feste Fahrerpreise zur Klippe von Varkala",
    "thRoute": "Reiseroute",
    "thCostUsd": "Ca. Kosten (USD)",
    "thCostInr": "Ca. Kosten (INR)",
    "pickupStrong": "Wir organisieren die Flughafenabholung:",
    "pickupTextRishikesh": "Teilen Sie uns Ihre Flug- oder Zugdaten mit. Unser Fahrer erwartet Sie mit einem persönlichen Namensschild am Ausgang.",
    "pickupTextVarkala": "Teilen Sie uns Ihre Flugdaten mit. Unser Fahrer holt Sie direkt am Flughafen Trivandrum (TRV) ab.",
    "pickupBtn": "Abholung anfragen",
    "visaTitle": "Indien-Visum & Einreisehinweise für internationale Teilnehmer",
    "visaSub": "Wichtige Leitlinien für eine reibungslose Einreise",
    "visaB1Title": "Indisches e-Touristenvisum:",
    "visaB1Text": "Bürger aus über 160 Ländern können das elektronische Touristenvisum (e-Visa) bequem online vor der Abreise beantragen.",
    "visaB2Title": "Gültigkeit:",
    "visaB2Text": "Wir empfehlen, das 30-Tage- oder 1-Jahres-Visum mindestens 2 Wochen vor dem Abflugdatum zu beantragen.",
    "visaB3Title": "Reisepass-Anforderungen:",
    "visaB3Text": "Ihr Reisepass muss bei Einreise noch mindestens 6 Monate gültig sein und mindestens zwei freie Seiten aufweisen.",
    "visaB4Title": "Ashram-Registrierung:",
    "visaB4Text": "Bei Ihrer Ankunft unterstützt Sie unser Team bei der behördlichen Form-C Registrierung für ausländische Gäste.",
    "airItemsRishikesh": [{"title": "Flughafen Dehradun Jolly Grant (DED)", "distance": "35 km (~45 Min. Fahrt zum Ashram)", "description": "Nächstgelegener Inlandsflughafen. Tägliche Flüge ab Neu-Delhi (DEL, 45 Min. Flug), Mumbai, Bengaluru und Hyderabad."}, {"title": "Internationaler Flughafen Neu-Delhi Indira Gandhi (DEL)", "distance": "250 km (~5–6 Std. Fahrt oder Anschlussflug)", "description": "Wichtigstes internationales Drehkreuz für ausländische Schüler. Täglich mehrere Anschlussflüge nach Dehradun (DED) oder bequemes Autobahn-Taxi."}],
    "trainItemsRishikesh": [{"title": "Bahnhof Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 Min. Fahrt)", "description": "Moderner Hauptbahnhof in Rishikesh mit erstklassigen Verbindungen zu nordindischen Knotenpunkten."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 Min. Fahrt)", "description": "Großer Eisenbahnknotenpunkt mit schnellen Expresszügen wie Vande Bharat und Shatabdi Express (ca. 4,5 Std. ab Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate nach Rishikesh", "distance": "240 km (~5 Std. über Schnellstraße)", "description": "Rund um die Uhr stündlich verkehrende klimatisierte Luxus-Reisebusse von Delhi nach Rishikesh."}, {"title": "Dehradun nach Rishikesh", "distance": "45 km (~1 Std.)", "description": "Gut ausgebaute Landstraße mit regelmäßigen Bussen und privaten Taxis Tag und Nacht."}],
    "airItemsVarkala": [{"title": "Internationaler Flughafen Trivandrum (TRV)", "distance": "45 km (~1 Std. Fahrt)", "description": "Nächster Flughafen mit Inlands- und Direktverbindungen aus dem Nahen Osten, Südostasien sowie Großstädten Indiens."}, {"title": "Internationaler Flughafen Cochin (COK)", "distance": "190 km (~4,5 Std. Fahrt)", "description": "Bedeutendes internationales Drehkreuz für Langstreckenflüge. Anbindung nach Varkala über NH 66 oder Expresszüge."}],
    "trainItemsVarkala": [{"title": "Bahnhof Varkala Sivagiri (VAK)", "distance": "3 km (~10 Min. Rikscha)", "description": "Zentraler Bahnhof im Ort mit täglichen Direktverbindungen nach Trivandrum, Kochi, Mumbai und Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 Min. Fahrt)", "description": "Großer Fernbahnhof mit Anschluss an alle überregionalen Expresszüge."}],
    "roadItemsVarkala": [{"title": "Trivandrum zur Varkala-Klippe", "distance": "45 km (~1 Std. über NH 66)", "description": "Bequeme Fahrt entlang der Küstenstraße mit regelmäßigen Bussen und Taxis."}, {"title": "Kochi nach Varkala", "distance": "165 km (~4 Std. über NH 66)", "description": "Malerische Küstenfahrt durch Kerala mit guten Einkehrmöglichkeiten."}],
    "taxiFaresRishikesh": [{"route": "Flughafen Dehradun (DED) → YogaGarhi Ashram", "costUsd": "$15–$20", "costInr": "₹1.200"}, {"route": "Flughafen Delhi (DEL) → YogaGarhi Ashram", "costUsd": "$60–$70", "costInr": "₹5.000"}, {"route": "Bahnhof Haridwar → YogaGarhi Ashram", "costUsd": "$12–$15", "costInr": "₹1.000"}, {"route": "Bahnhof Rishikesh (YNRK) → Ashram", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Flughafen Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2.000"}, {"route": "Flughafen Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5.500"}, {"route": "Bahnhof Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Bahnhof Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1.200"}],
    "openInMaps": "In Google Maps öffnen",
    "syllabusBtn": "Detaillierten Lehrplan herunterladen",
    "syllabusTitle": "Lehrplan herunterladen",
    "syllabusDesc": "Wählen Sie Ihren Kurs und geben Sie Ihre E-Mail-Adresse ein, um den vollständigen Lehrplan zu erhalten.",
    "syllabusEmailPlaceholder": "Ihre E-Mail-Adresse",
    "syllabusSend": "Lehrplan anfordern",
    "syllabusSending": "Wird gesendet...",
    "syllabusPrompt": "Möchten Sie den stundenweisen Ablauf und die Literaturliste einsehen?"
  },
  "fr": {
    "badge": "Guide de Voyage et Arrivée",
    "titleRishikesh": "Comment Se Rendre à YogaGarhi Rishikesh",
    "titleVarkala": "Comment Se Rendre à YogaGarhi Varkala",
    "titleBali": "Comment Se Rendre à YogaGarhi Bali",
    "subtitleRishikesh": "Itinéraires détaillés, transferts aéroport et tarifs de taxi pour arriver sereinement à notre ashram de Tapovan.",
    "subtitleVarkala": "Itinéraires complets, accès aéroport et trains pour rejoindre notre shala sur les falaises au Kerala.",
    "subtitleBali": "Organisez facilement votre trajet vers notre ashram paisible à Gianyar, Bali.",
    "byAir": "En Avion",
    "byTrain": "En Train",
    "byRoad": "Par la Route",
    "airportTransfers": "Aéroport & Transferts",
    "checkInOut": "Arrivée & Départ",
    "taxiTitleRishikesh": "Tarifs Estimés des Taxis vers l'Ashram YogaGarhi",
    "taxiTitleVarkala": "Tarifs Estimés des Taxis vers l'Ashram de Varkala",
    "taxiSubRishikesh": "Tarifs négociés pour les transferts vers Tapovan",
    "taxiSubVarkala": "Tarifs fixes pour les transferts vers la falaise de Varkala",
    "thRoute": "Itinéraire",
    "thCostUsd": "Coût Approx. (USD)",
    "thCostInr": "Coût Approx. (INR)",
    "pickupStrong": "Nous organisons votre transfert aéroport :",
    "pickupTextRishikesh": "Transmettez votre numéro de vol ou d'arrivée en train à notre équipe, un chauffeur vous attendra avec un panneau nominatif.",
    "pickupTextVarkala": "Transmettez vos détails de vol, notre chauffeur vous accueillera dès votre arrivée à l'aéroport de Trivandrum (TRV).",
    "pickupBtn": "Demander un Chauffeur",
    "visaTitle": "Visa Indien & Conseils d'Arrivée pour les Étudiants Internationaux",
    "visaSub": "Directives indispensables pour une arrivée sereine en Inde",
    "visaB1Title": "e-Visa Touriste Indien :",
    "visaB1Text": "Les ressortissants de plus de 160 pays peuvent obtenir un visa électronique touristique (e-Visa) en ligne avant le départ.",
    "visaB2Title": "Validité recommandée :",
    "visaB2Text": "Nous vous conseillons de demander votre e-Visa au moins 2 semaines avant votre départ.",
    "visaB3Title": "Validité du passeport :",
    "visaB3Text": "Votre passeport doit être valide au moins 6 mois après votre date d'arrivée et disposer de 2 pages vierges.",
    "visaB4Title": "Enregistrement à l'ashram :",
    "visaB4Text": "À votre arrivée, nous nous chargeons de votre enregistrement légal Form-C auprès des autorités indiennes.",
    "airItemsRishikesh": [{"title": "Aéroport Jolly Grant, Dehradun (DED)", "distance": "35 km (~45 min en voiture jusqu'à l'ashram)", "description": "Aéroport domestique le plus proche. Vols quotidiens fréquents depuis New Delhi (DEL, 45 min de vol), Mumbai, Bengaluru et Hyderabad."}, {"title": "Aéroport International Indira Gandhi, Delhi (DEL)", "distance": "250 km (~5–6 h en voiture ou vol de correspondance)", "description": "Principale porte d'entrée internationale. Correspondances quotidiennes vers Dehradun (DED) ou taxi direct par autoroute."}],
    "trainItemsRishikesh": [{"title": "Gare de Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 min en voiture)", "description": "Gare ferroviaire moderne de Rishikesh reliée aux grandes lignes du nord de l'Inde."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 min en voiture)", "description": "Grande gare ferroviaire avec trains express réguliers dont le Vande Bharat et le Shatabdi Express (environ 4h30 depuis Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate vers Rishikesh", "distance": "240 km (~5 h via autoroute)", "description": "Autocars de luxe climatisés 24h/24 au départ de Delhi chaque heure vers Rishikesh."}, {"title": "Dehradun vers Rishikesh", "distance": "45 km (~1 h)", "description": "Route régionale rapide avec bus locaux et taxis privés disponibles jour et nuit."}],
    "airItemsVarkala": [{"title": "Aéroport International de Trivandrum (TRV)", "distance": "45 km (~1 h de route)", "description": "Aéroport le plus proche avec vols directs réguliers depuis les grandes métropoles indiennes et hubs internationaux."}, {"title": "Aéroport International de Cochin (COK)", "distance": "190 km (~4,5 h de route)", "description": "Grand hub international pour les vols long-courriers. Accès facile à Varkala via la NH 66 ou train express."}],
    "trainItemsVarkala": [{"title": "Gare de Varkala Sivagiri (VAK)", "distance": "3 km (~10 min en rickshaw)", "description": "Gare centrale au cœur de la ville avec liaisons directes quotidiennes vers Trivandrum, Kochi, Mumbai et Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 min de route)", "description": "Gare régionale majeure desservie par de nombreux trains express interurbains."}],
    "roadItemsVarkala": [{"title": "Trivandrum à la falaise de Varkala", "distance": "45 km (~1 h via NH 66)", "description": "Trajet agréable le long de la côte avec bus réguliers et taxis privés."}, {"title": "Kochi à Varkala", "distance": "165 km (~4 h via NH 66)", "description": "Route côtière pittoresque à travers le Kerala avec arrêts confortables."}],
    "taxiFaresRishikesh": [{"route": "Aéroport de Dehradun (DED) → Ashram YogaGarhi", "costUsd": "$15–$20", "costInr": "₹1 200"}, {"route": "Aéroport de Delhi (DEL) → Ashram YogaGarhi", "costUsd": "$60–$70", "costInr": "₹5 000"}, {"route": "Gare de Haridwar → Ashram YogaGarhi", "costUsd": "$12–$15", "costInr": "₹1 000"}, {"route": "Gare de Rishikesh (YNRK) → Ashram YogaGarhi", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Aéroport de Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2 000"}, {"route": "Aéroport de Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5 500"}, {"route": "Gare de Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Gare de Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1 200"}],
    "openInMaps": "Ouvrir dans Google Maps",
    "syllabusBtn": "Télécharger le programme détaillé",
    "syllabusTitle": "Télécharger le programme",
    "syllabusDesc": "Sélectionnez votre formation et entrez votre e-mail pour recevoir le programme complet.",
    "syllabusEmailPlaceholder": "Votre adresse e-mail",
    "syllabusSend": "Envoyer le programme",
    "syllabusSending": "Envoi en cours...",
    "syllabusPrompt": "Souhaitez-vous voir la répartition heure par heure et la bibliographie ?"
  },
  "es": {
    "badge": "Guía de Viaje y Llegada",
    "titleRishikesh": "Cómo Llegar a YogaGarhi Rishikesh",
    "titleVarkala": "Cómo Llegar a YogaGarhi Varkala",
    "titleBali": "Cómo Llegar a YogaGarhi Bali",
    "subtitleRishikesh": "Rutas de viaje claras, traslados desde el aeropuerto y tarifas de taxi para llegar con tranquilidad a nuestro ashram.",
    "subtitleVarkala": "Rutas completas, conexiones de aeropuerto y tren para llegar a nuestra shala en los acantilados de Kerala.",
    "subtitleBali": "Planifica tu viaje con tranquilidad hacia nuestro sereno ashram en Gianyar, Bali.",
    "byAir": "En Avión",
    "byTrain": "En Tren",
    "byRoad": "Por Carretera",
    "airportTransfers": "Aeropuerto y Traslados",
    "checkInOut": "Llegada y Salida",
    "taxiTitleRishikesh": "Tarifas Estimadas de Taxi al Ashram YogaGarhi",
    "taxiTitleVarkala": "Tarifas Estimadas de Taxi al Ashram de Varkala",
    "taxiSubRishikesh": "Precios acordados para traslados a Tapovan",
    "taxiSubVarkala": "Precios cerrados para traslados al acantilado de Varkala",
    "thRoute": "Ruta de Viaje",
    "thCostUsd": "Coste Aprox. (USD)",
    "thCostInr": "Coste Aprox. (INR)",
    "pickupStrong": "Organizamos tu recogida en el aeropuerto:",
    "pickupTextRishikesh": "Comparte tus datos de vuelo o tren con nuestro equipo; un chófer de confianza te esperará con un cartel con tu nombre.",
    "pickupTextVarkala": "Comparte los detalles de tu vuelo y nuestro chófer te recibirá en el aeropuerto de Trivandrum (TRV).",
    "pickupBtn": "Solicitar Traslado",
    "visaTitle": "Visado de la India y Consejos de Viaje para Estudiantes",
    "visaSub": "Información esencial para una entrada tranquila a la India",
    "visaB1Title": "e-Visa Turística para India:",
    "visaB1Text": "Los ciudadanos de más de 160 países pueden tramitar fácilmente su visado electrónico de turista online antes del viaje.",
    "visaB2Title": "Validez recomendada:",
    "visaB2Text": "Recomendamos solicitar el visado con al menos 2 semanas de antelación respecto a tu fecha de vuelo.",
    "visaB3Title": "Requisitos del pasaporte:",
    "visaB3Text": "Tu pasaporte debe tener al menos 6 meses de vigencia a partir de la llegada y dos páginas en blanco.",
    "visaB4Title": "Registro en el ashram:",
    "visaB4Text": "Al llegar te ayudaremos a cumplimentar el formulario obligatorio Form-C ante las autoridades gubernamentales.",
    "airItemsRishikesh": [{"title": "Aeropuerto Jolly Grant, Dehradun (DED)", "distance": "35 km (~45 min en coche al ashram)", "description": "Aeropuerto nacional más cercano. Vuelos diarios frecuentes desde Nueva Delhi (DEL, 45 min de vuelo), Bombay, Bengaluru y Hyderabad."}, {"title": "Aeropuerto Internacional Indira Gandhi, Delhi (DEL)", "distance": "250 km (~5–6 h en coche o vuelo de conexión)", "description": "Principal puerta de entrada internacional para estudiantes del extranjero. Conexiones diarias a Dehradun o taxi directo por autopista."}],
    "trainItemsRishikesh": [{"title": "Estación de Tren Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 min en coche)", "description": "Terminal ferroviaria moderna en Rishikesh con conexiones a las principales ciudades del norte de la India."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 min en coche)", "description": "Gran nudo ferroviario con trenes de alta velocidad frecuentes como el Vande Bharat y Shatabdi Express (aprox. 4,5 h desde Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate a Rishikesh", "distance": "240 km (~5 h por autopista)", "description": "Autobuses de lujo climatizados con salidas cada hora las 24 horas del día entre Delhi y Rishikesh."}, {"title": "Dehradun a Rishikesh", "distance": "45 km (~1 h)", "description": "Carretera bien comunicada con transporte local frecuente y taxis privados disponibles las 24 horas."}],
    "airItemsVarkala": [{"title": "Aeropuerto Internacional de Trivandrum (TRV)", "distance": "45 km (~1 h en coche)", "description": "Aeropuerto más cercano con vuelos diarios desde las principales ciudades indias y conexiones internacionales."}, {"title": "Aeropuerto Internacional de Cochin (COK)", "distance": "190 km (~4,5 h en coche)", "description": "Importante centro internacional para vuelos transcontinentales. Conectado a Varkala por carretera costera o tren."}],
    "trainItemsVarkala": [{"title": "Estación de Tren Varkala Sivagiri (VAK)", "distance": "3 km (~10 min en tuk-tuk)", "description": "Estación céntrica en el pueblo con trenes directos diarios a Trivandrum, Kochi, Bombay y Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 min en coche)", "description": "Gran estación ferroviaria regional con servicio de trenes exprés de todo el país."}],
    "roadItemsVarkala": [{"title": "Trivandrum al acantilado de Varkala", "distance": "45 km (~1 h por NH 66)", "description": "Cómodo trayecto por carretera costera con autobuses frecuentes y taxis privados."}, {"title": "Kochi a Varkala", "distance": "165 km (~4 h por NH 66)", "description": "Pintoresca ruta por la costa de Kerala con cómodas paradas en el camino."}],
    "taxiFaresRishikesh": [{"route": "Aeropuerto de Dehradun (DED) → Ashram YogaGarhi", "costUsd": "$15–$20", "costInr": "₹1.200"}, {"route": "Aeropuerto de Delhi (DEL) → Ashram YogaGarhi", "costUsd": "$60–$70", "costInr": "₹5.000"}, {"route": "Estación de Haridwar → Ashram YogaGarhi", "costUsd": "$12–$15", "costInr": "₹1.000"}, {"route": "Estación de Rishikesh (YNRK) → Ashram YogaGarhi", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Aeropuerto de Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2.000"}, {"route": "Aeropuerto de Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5.500"}, {"route": "Estación de Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Estación de Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1.200"}],
    "openInMaps": "Abrir en Google Maps",
    "syllabusBtn": "Descargar plan de estudios detallado",
    "syllabusTitle": "Descargar plan de estudios",
    "syllabusDesc": "Selecciona tu curso e introduce tu correo electrónico para recibir el temario completo.",
    "syllabusEmailPlaceholder": "Tu correo electrónico",
    "syllabusSend": "Enviar plan de estudios",
    "syllabusSending": "Enviando...",
    "syllabusPrompt": "¿Quieres ver el desglose hora por hora y la bibliografía recomendada?"
  },
  "it": {
    "badge": "Guida al Viaggio e Arrivo",
    "titleRishikesh": "Come Raggiungere YogaGarhi Rishikesh",
    "titleVarkala": "Come Raggiungere YogaGarhi Varkala",
    "titleBali": "Come Raggiungere YogaGarhi Bali",
    "subtitleRishikesh": "Percorsi chiari, trasferimenti aeroportuali e tariffe taxi per raggiungere senza stress il nostro ashram a Tapovan.",
    "subtitleVarkala": "Tutti i percorsi, i voli e i treni per raggiungere la nostra shala sulle scogliere in Kerala.",
    "subtitleBali": "Organizza il viaggio verso il nostro rilassante ashram a Gianyar, Bali.",
    "byAir": "In Aereo",
    "byTrain": "In Treno",
    "byRoad": "Su Strada",
    "airportTransfers": "Aeroporto e Trasferimenti",
    "checkInOut": "Check-In e Check-Out",
    "taxiTitleRishikesh": "Tariffe taxi stimate per l'ashram YogaGarhi a Rishikesh",
    "taxiTitleVarkala": "Tariffe taxi stimate per YogaGarhi a Varkala",
    "taxiSubRishikesh": "Tariffe standard concordate con autisti per Tapovan",
    "taxiSubVarkala": "Tariffe standard concordate per la North Cliff",
    "thRoute": "Itinerario di viaggio",
    "thCostUsd": "Costo approssimativo (USD)",
    "thCostInr": "Costo approssimativo (INR)",
    "pickupStrong": "Organizziamo il servizio transfer dall'aeroporto:",
    "pickupTextRishikesh": "Condividi il tuo piano di volo o treno con il nostro team, e il nostro autista di fiducia ti aspetterà con un cartello personalizzato con il tuo nome.",
    "pickupTextVarkala": "Condividi i dettagli del tuo arrivo a Trivandrum o Cochin e il nostro autista ti condurrà comodamente a Varkala.",
    "pickupBtn": "Richiedi transfer",
    "visaTitle": "Visto per l'India e consigli sull'arrivo per studenti internazionali",
    "visaSub": "Linee guida essenziali per un'esperienza d'immigrazione senza intoppi",
    "visaB1Title": "Visto turistico elettronico per l'India (e-Visa):",
    "visaB1Text": "I cittadini di oltre 160 paesi possono ottenere facilmente un visto turistico elettronico online prima della partenza tramite il portale ufficiale del governo indiano.",
    "visaB2Title": "Validità:",
    "visaB2Text": "Consigliamo di richiedere un visto turistico da 30 giorni o a ingressi multipli per 1 anno almeno 2 settimane prima della partenza.",
    "visaB3Title": "Valuta e schede SIM:",
    "visaB3Text": "La valuta locale è la rupia indiana (INR). I bancomat sono ampiamente disponibili e la nostra reception può aiutarti ad acquistare una scheda SIM 5G locale.",
    "visaB4Title": "Orari di check-in:",
    "visaB4Text": "Il check-in ufficiale in ashram è dalle 12:00 del 1° giorno del corso, seguito da un incontro di orientamento serale e dalla cerimonia del fuoco (Havan).",
    "airItemsRishikesh": [{"title": "Aeroporto Jolly Grant, Dehradun (DED)", "distance": "35 km (~45 min di auto per l'ashram)", "description": "Aeroporto nazionale più vicino. Voli giornalieri frequenti da Nuova Delhi (DEL, 45 min di volo), Mumbai, Bengaluru e Hyderabad."}, {"title": "Aeroporto Internazionale Indira Gandhi, Delhi (DEL)", "distance": "250 km (~5–6 ore di auto o volo coincidente)", "description": "Principale punto di arrivo internazionale. Voli di coincidenza giornalieri per Dehradun o comodo taxi autostradale."}],
    "trainItemsRishikesh": [{"title": "Stazione Ferroviaria Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 min di auto)", "description": "Nuovo terminal ferroviario a Rishikesh collegato con i maggiori nodi del nord dell'India."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 min di auto)", "description": "Importante snodo ferroviario servito da treni ad alta velocità inclusi Vande Bharat e Shatabdi Express (circa 4,5 ore da Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate a Rishikesh", "distance": "240 km (~5 ore via autostrada)", "description": "Pullman di lusso con aria condizionata e cuccette in partenza ogni ora giorno e notte da Delhi a Rishikesh."}, {"title": "Dehradun a Rishikesh", "distance": "45 km (~1 ora)", "description": "Strada statale comoda con frequenti autobus locali e taxi privati disponibili 24 ore su 24."}],
    "airItemsVarkala": [{"title": "Aeroporto Internazionale di Trivandrum (TRV)", "distance": "45 km (~1 ora di auto)", "description": "Aeroporto più vicino con voli diretti dalle città indiane e dai principali hub internazionali."}, {"title": "Aeroporto Internazionale di Cochin (COK)", "distance": "190 km (~4,5 ore di auto)", "description": "Importante gateway per voli internazionali a lungo raggio. Collegato a Varkala via strada costiera o treno."}],
    "trainItemsVarkala": [{"title": "Stazione Ferroviaria Varkala Sivagiri (VAK)", "distance": "3 km (~10 min in tuk-tuk)", "description": "Comoda stazione centrale cittadina con treni espressi giornalieri per Trivandrum, Kochi, Mumbai e Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 min di auto)", "description": "Grande stazione regionale con frequenti collegamenti espressi da tutto il paese."}],
    "roadItemsVarkala": [{"title": "Trivandrum alla scogliera di Varkala", "distance": "45 km (~1 ora via NH 66)", "description": "Percorso agevole lungo la costa con frequenti corse di autobus e taxi privati."}, {"title": "Kochi a Varkala", "distance": "165 km (~4 ore via NH 66)", "description": "Viaggio suggestivo lungo la costa del Kerala con comode aree di sosta."}],
    "taxiFaresRishikesh": [{"route": "Aeroporto di Dehradun (DED) → Ashram YogaGarhi", "costUsd": "$15–$20", "costInr": "₹1.200"}, {"route": "Aeroporto di Delhi (DEL) → Ashram YogaGarhi", "costUsd": "$60–$70", "costInr": "₹5.000"}, {"route": "Stazione di Haridwar → Ashram YogaGarhi", "costUsd": "$12–$15", "costInr": "₹1.000"}, {"route": "Stazione di Rishikesh (YNRK) → Ashram YogaGarhi", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Aeroporto di Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2.000"}, {"route": "Aeroporto di Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5.500"}, {"route": "Stazione di Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Stazione di Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1.200"}],
    "openInMaps": "Apri in Google Maps",
    "syllabusBtn": "Scarica il programma dettagliato",
    "syllabusTitle": "Scarica il programma",
    "syllabusDesc": "Seleziona il tuo corso e inserisci la tua email per ricevere il programma completo.",
    "syllabusEmailPlaceholder": "Il tuo indirizzo email",
    "syllabusSend": "Invia programma",
    "syllabusSending": "Invio in corso...",
    "syllabusPrompt": "Vuoi consultare la suddivisione oraria e l'elenco dei testi consigliati?"
  },
  "ru": {
    "badge": "Как добраться",
    "titleRishikesh": "Как добраться до YogaGarhi в Ришикеше",
    "titleVarkala": "Как добраться до YogaGarhi в Варкале",
    "titleBali": "Как добраться до YogaGarhi на Бали",
    "subtitleRishikesh": "Подробные маршруты, варианты трансфера из аэропорта и ориентировочные цены на такси.",
    "subtitleVarkala": "Маршруты, авиарейсы и поезда для комфортной поездки в нашу шалу в Керале.",
    "subtitleBali": "Спланируйте поездку в наш спокойный ашрам в Гианьяре, Бали.",
    "byAir": "Самолетом",
    "byTrain": "Поездом",
    "byRoad": "Автобусом / Авто",
    "airportTransfers": "Аэропорт и трансферы",
    "checkInOut": "Заезд и выезд",
    "taxiTitleRishikesh": "Примерная стоимость такси до ашрама YogaGarhi в Ришикеше",
    "taxiTitleVarkala": "Примерная стоимость такси до YogaGarhi в Варкале",
    "taxiSubRishikesh": "Фиксированные стандартные тарифы до Тапована",
    "taxiSubVarkala": "Фиксированные стандартные тарифы до Северного клифа",
    "thRoute": "Маршрут поездки",
    "thCostUsd": "Примерная стоимость (USD)",
    "thCostInr": "Примерная стоимость (INR)",
    "pickupStrong": "Мы организуем встречу в аэропорту:",
    "pickupTextRishikesh": "Сообщите расписание вашего рейса или поезда нашей команде, и надежный водитель ашрама встретит вас с персональной табличкой с вашим именем.",
    "pickupTextVarkala": "Сообщите данные вашего рейса в Тривандрум или Кочин, и водитель комфортно доставит вас прямо в Варкалу.",
    "pickupBtn": "Заказать трансфер",
    "visaTitle": "Индийская виза и рекомендации по прибытию для иностранных студентов",
    "visaSub": "Важные рекомендации для комфортного прохождения паспортного контроля",
    "visaB1Title": "Индийская электронная туристическая виза (e-Visa):",
    "visaB1Text": "Граждане более чем 160 стран могут легко оформить электронную визу онлайн на официальном портале правительства Индии перед вылетом.",
    "visaB2Title": "Срок действия:",
    "visaB2Text": "Мы рекомендуем подавать заявление на 30-дневную или годовую многократную туристическую визу как минимум за 2 недели до даты поездки.",
    "visaB3Title": "Валюта и SIM-карты:",
    "visaB3Text": "Местная валюта — индийская рупия (INR). Банкоматы доступны повсюду в Таповане, а наша команда поможет вам приобрести местную 5G SIM-карту.",
    "visaB4Title": "Время заезда:",
    "visaB4Text": "Официальный заезд в ашрам — с 12:00 в первый день каждого курса, вечером проводится ориентационная встреча и священная церемония Хаван.",
    "airItemsRishikesh": [{"title": "Аэропорт Джолли Грант, Дехрадун (DED)", "distance": "35 км (~45 мин на машине до ашрама)", "description": "Ближайший внутренний аэропорт. Регулярные рейсы из Нью-Дели (DEL, перелет 45 мин), Мумбаи, Бангалора и Хайдарабада."}, {"title": "Международный аэропорт Индиры Ганди, Дели (DEL)", "distance": "250 км (~5–6 часов на машине или стыковочный рейс)", "description": "Главные международные ворота для иностранных студентов. Стыковочные рейсы до Дехрадуна или комфортабельное такси по шоссе."}],
    "trainItemsRishikesh": [{"title": "Железнодорожный вокзал Йог Нагари Ришикеш (YNRK)", "distance": "6 км (~15 мин на машине)", "description": "Современный вокзал в черте Ришикеша с прямым сообщением с узловыми станциями северной Индии."}, {"title": "Хардвар Джанкшен (HW)", "distance": "25 км (~50 мин на машине)", "description": "Крупнейший железнодорожный узел со скоростными поездами Ванде Бхарат и Шатабди Экспресс (~4,5 часа от Дели)."}],
    "roadItemsRishikesh": [{"title": "Дели ISBT Кашмирские ворота — Ришикеш", "distance": "240 км (~5 часов по скоростному шоссе)", "description": "Круглосуточные комфортабельные автобусы со спальными местами и кондиционером отправляются каждый час."}, {"title": "Дехрадун — Ришикеш", "distance": "45 км (~1 час)", "description": "Удобная автодорога с постоянным движением рейсовых автобусов и доступными круглосуточно такси."}],
    "airItemsVarkala": [{"title": "Международный аэропорт Тривандрум (TRV)", "distance": "45 км (~1 час на машине)", "description": "Ближайший аэропорт с прямыми рейсами из городов Индии и международных хабов Ближнего Востока и Азии."}, {"title": "Международный аэропорт Кочин (COK)", "distance": "190 км (~4,5 часа на машине)", "description": "Крупнейший международный хаб для дальнемагистральных рейсов. До Варкалы ведет шоссе NH 66 или экспресс-поезда."}],
    "trainItemsVarkala": [{"title": "Вокзал Варкала Шивагири (VAK)", "distance": "3 км (~10 мин на рикше)", "description": "Удобная станция в черте города с ежедневными поездами до Тривандрума, Кочи, Мумбаи и Дели."}, {"title": "Коллам Джанкшен (QLN)", "distance": "28 км (~45 мин на машине)", "description": "Крупный вокзал, принимающий скоростные поезда со всей страны."}],
    "roadItemsVarkala": [{"title": "Тривандрум — утес Варкалы", "distance": "45 км (~1 час по NH 66)", "description": "Приятная поездка по прибрежному шоссе с регулярным автобусным сообщением и такси."}, {"title": "Кочи — Варкала", "distance": "165 км (~4 часа по NH 66)", "description": "Живописная дорога вдоль побережья Кералы с комфортными остановками."}],
    "taxiFaresRishikesh": [{"route": "Аэропорт Дехрадун (DED) → Ашрам YogaGarhi", "costUsd": "$15–$20", "costInr": "₹1 200"}, {"route": "Аэропорт Дели (DEL) → Ашрам YogaGarhi", "costUsd": "$60–$70", "costInr": "₹5 000"}, {"route": "Вокзал Хардвар → Ашрам YogaGarhi", "costUsd": "$12–$15", "costInr": "₹1 000"}, {"route": "Вокзал Ришикеш (YNRK) → Ашрам YogaGarhi", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Аэропорт Тривандрум (TRV) → YogaGarhi Варкала", "costUsd": "$25", "costInr": "₹2 000"}, {"route": "Аэропорт Кочин (COK) → YogaGarhi Варкала", "costUsd": "$65", "costInr": "₹5 500"}, {"route": "Вокзал Варкала Шивагири (VAK) → Ашрам", "costUsd": "$3", "costInr": "₹250"}, {"route": "Вокзал Коллам (QLN) → YogaGarhi Варкала", "costUsd": "$15", "costInr": "₹1 200"}],
    "openInMaps": "Открыть на Google Maps",
    "syllabusBtn": "Скачать подробную программу",
    "syllabusTitle": "Скачать учебную программу",
    "syllabusDesc": "Выберите курс и укажите ваш e-mail, чтобы получить полный учебный план.",
    "syllabusEmailPlaceholder": "Ваш адрес электронной почты",
    "syllabusSend": "Отправить программу",
    "syllabusSending": "Отправка...",
    "syllabusPrompt": "Хотите ознакомиться с почасовым расписанием и списком рекомендуемой литературы?"
  },
  "id": {
    "badge": "Panduan Perjalanan & Kedatangan",
    "titleRishikesh": "Cara Menuju YogaGarhi Rishikesh",
    "titleVarkala": "Cara Menuju YogaGarhi Varkala",
    "titleBali": "Cara Menuju YogaGarhi Bali",
    "subtitleRishikesh": "Rute perjalanan terperinci, transit bandara, dan tarif taksi untuk tiba dengan nyaman di ashram Tapovan kami.",
    "subtitleVarkala": "Panduan rute lengkap, transit bandara, dan jadwal kereta menuju shala tebing kami di Kerala.",
    "subtitleBali": "Rencanakan perjalanan Anda dengan mudah menuju ashram damai kami di Gianyar, Bali.",
    "byAir": "Pesawat",
    "byTrain": "Kereta Api",
    "byRoad": "Jalur Darat",
    "airportTransfers": "Bandara & Antar-Jemput",
    "checkInOut": "Check-In & Check-Out",
    "taxiTitleRishikesh": "Perkiraan Tarif Taksi ke Ashram YogaGarhi Rishikesh",
    "taxiTitleVarkala": "Perkiraan Tarif Taksi ke YogaGarhi Varkala",
    "taxiSubRishikesh": "Tarif standar pengemudi yang telah disepakati ke Tapovan",
    "taxiSubVarkala": "Tarif standar yang telah disepakati ke North Cliff",
    "thRoute": "Rute Perjalanan",
    "thCostUsd": "Perkiraan Biaya (USD)",
    "thCostInr": "Perkiraan Biaya (INR)",
    "pickupStrong": "Kami Menyediakan Penjemputan Bandara:",
    "pickupTextRishikesh": "Bagikan jadwal penerbangan atau kereta Anda dengan tim kami, dan pengemudi tepercaya kami akan menunggu Anda dengan papan nama pribadi.",
    "pickupTextVarkala": "Bagikan jadwal kedatangan Anda di Trivandrum atau Cochin, dan pengemudi kami akan mengantar Anda dengan nyaman ke Varkala.",
    "pickupBtn": "Pesan Penjemputan",
    "visaTitle": "Panduan Visa India & Kedatangan untuk Siswa Internasional",
    "visaSub": "Panduan penting untuk kelancaran proses imigrasi",
    "visaB1Title": "Visa Turis Elektronik India (e-Visa):",
    "visaB1Text": "Warga dari lebih dari 160 negara dapat dengan mudah memperoleh e-Visa secara daring sebelum keberangkatan melalui portal resmi Pemerintah India.",
    "visaB2Title": "Masa Berlaku:",
    "visaB2Text": "Kami menyarankan untuk mengajukan e-Visa 30 hari atau 1 tahun beberapa kali masuk minimal 2 minggu sebelum keberangkatan.",
    "visaB3Title": "Mata Uang & Kartu SIM:",
    "visaB3Text": "Mata uang lokal adalah Rupee India (INR). ATM tersedia luas, dan tim resepsionis kami siap membantu Anda memperoleh kartu SIM data 5G lokal.",
    "visaB4Title": "Waktu Check-in:",
    "visaB4Text": "Check-in resmi ashram dimulai pukul 12:00 pada tanggal 1 setiap angkatan, dilanjutkan dengan lingkaran orientasi malam dan upacara api suci (Havan).",
    "airItemsRishikesh": [{"title": "Bandara Jolly Grant, Dehradun (DED)", "distance": "35 km (~45 mnt perjalanan ke ashram)", "description": "Bandara domestik terdekat. Penerbangan harian reguler dari New Delhi (DEL, 45 mnt penerbangan), Mumbai, Bengaluru, dan Hyderabad."}, {"title": "Bandara Internasional Indira Gandhi, Delhi (DEL)", "distance": "250 km (~5–6 jam perjalanan atau penerbangan lanjutan)", "description": "Gerbang internasional utama bagi siswa mancanegara. Terhubung ke Dehradun (DED) via penerbangan domestik harian atau taksi jalan tol."}],
    "trainItemsRishikesh": [{"title": "Stasiun Kereta Yog Nagari Rishikesh (YNRK)", "distance": "6 km (~15 mnt perjalanan)", "description": "Terminal kereta api modern di kota Rishikesh dengan akses ke jaringan kereta utama India Utara."}, {"title": "Haridwar Junction (HW)", "distance": "25 km (~50 mnt perjalanan)", "description": "Stasiun persimpangan besar dengan kereta ekspres cepat termasuk Vande Bharat dan Shatabdi Express (sekitar 4,5 jam dari Delhi)."}],
    "roadItemsRishikesh": [{"title": "Delhi ISBT Kashmiri Gate ke Rishikesh", "distance": "240 km (~5 jam via jalan tol)", "description": "Bus antar-kota ber-AC mewah dengan tempat tidur berangkat setiap jam 24/7 dari Delhi ke Rishikesh."}, {"title": "Dehradun ke Rishikesh", "distance": "45 km (~1 jam)", "description": "Jalan raya provinsi yang mulus dengan transportasi umum dan taksi privat tersedia sepanjang waktu."}],
    "airItemsVarkala": [{"title": "Bandara Internasional Trivandrum (TRV)", "distance": "45 km (~1 jam perjalanan)", "description": "Bandara terdekat dengan penerbangan langsung harian dari kota-kota utama India serta hub Timur Tengah dan Asia Tenggara."}, {"title": "Bandara Internasional Cochin (COK)", "distance": "190 km (~4,5 jam perjalanan)", "description": "Pintu gerbang internasional utama untuk penerbangan jarak jauh. Terhubung ke Varkala melalui jalan raya pesisir atau kereta ekspres."}],
    "trainItemsVarkala": [{"title": "Stasiun Kereta Varkala Sivagiri (VAK)", "distance": "3 km (~10 mnt naik bajaj/autorickshaw)", "description": "Stasiun lokal yang nyaman di pusat kota dengan kereta ekspres harian ke Trivandrum, Kochi, Mumbai, dan Delhi."}, {"title": "Kollam Junction (QLN)", "distance": "28 km (~45 mnt perjalanan)", "description": "Terminal kereta regional utama yang dilayani oleh kereta ekspres dari berbagai penjuru negeri."}],
    "roadItemsVarkala": [{"title": "Trivandrum ke Tebing Varkala", "distance": "45 km (~1 jam via NH 66)", "description": "Perjalanan mulus menyusuri pantai dengan bus reguler dan taksi pribadi yang beroperasi sepanjang hari."}, {"title": "Kochi ke Varkala", "distance": "165 km (~4 jam via NH 66)", "description": "Perjalanan indah menyusuri pesisir Kerala dengan banyak tempat peristirahatan yang nyaman."}],
    "taxiFaresRishikesh": [{"route": "Bandara Dehradun (DED) → Ashram YogaGarhi", "costUsd": "$15–$20", "costInr": "₹1.200"}, {"route": "Bandara Delhi (DEL) → Ashram YogaGarhi", "costUsd": "$60–$70", "costInr": "₹5.000"}, {"route": "Stasiun Haridwar → Ashram YogaGarhi", "costUsd": "$12–$15", "costInr": "₹1.000"}, {"route": "Stasiun Rishikesh (YNRK) → Ashram YogaGarhi", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "Bandara Trivandrum (TRV) → YogaGarhi Varkala", "costUsd": "$25", "costInr": "₹2.000"}, {"route": "Bandara Cochin (COK) → YogaGarhi Varkala", "costUsd": "$65", "costInr": "₹5.500"}, {"route": "Stasiun Varkala Sivagiri (VAK) → Ashram", "costUsd": "$3", "costInr": "₹250"}, {"route": "Stasiun Kollam Junction (QLN) → YogaGarhi Varkala", "costUsd": "$15", "costInr": "₹1.200"}],
    "openInMaps": "Buka di Google Maps",
    "syllabusBtn": "Unduh Silabus Rinci",
    "syllabusTitle": "Unduh Silabus",
    "syllabusDesc": "Pilih kursus Anda dan masukkan email untuk menerima silabus lengkap secara rinci.",
    "syllabusEmailPlaceholder": "Alamat email Anda",
    "syllabusSend": "Kirim Silabus",
    "syllabusSending": "Mengirim...",
    "syllabusPrompt": "Ingin melihat rincian jam demi jam dan daftar bacaan wajib?"
  },
  "ja": {
    "badge": "アクセス・到着案内",
    "titleRishikesh": "YogaGarhiリシケシ校へのアクセス",
    "titleVarkala": "YogaGarhiバルカラ校へのアクセス",
    "titleBali": "YogaGarhiバリ校へのアクセス",
    "subtitleRishikesh": "タポヴァン・アシュラムへスムーズにご到着いただけるよう、空港からの移動方法やタクシー料金の目安をご案内します。",
    "subtitleVarkala": "ケララの断崖シャラへのフライト・列車・タクシーによるアクセス方法をご案内します。",
    "subtitleBali": "バリ島ギャニャールの静穏なアシュラムまでのスムーズな移動をご案内します。",
    "byAir": "飛行機で",
    "byTrain": "列車で",
    "byRoad": "車・バスで",
    "airportTransfers": "空港・送迎サービス",
    "checkInOut": "チェックイン・チェックアウト",
    "taxiTitleRishikesh": "YogaGarhiアシュラムへのタクシー運賃目安",
    "taxiTitleVarkala": "YogaGarhiヴァルカラ校へのタクシー運賃目安",
    "taxiSubRishikesh": "タポヴァンまでの事前取り決め済み標準料金",
    "taxiSubVarkala": "ノースクリフまでの事前取り決め済み定額料金",
    "thRoute": "移動ルート",
    "thCostUsd": "概算運賃 (USD)",
    "thCostInr": "概算運賃 (INR)",
    "pickupStrong": "空港送迎の手配について：",
    "pickupTextRishikesh": "フライトまたは電車の到着情報を事前にお知らせください。ドライバーがお名前を書いたボードを持ってお待ちします。",
    "pickupTextVarkala": "フライト情報をお知らせください。トリバンドラム（TRV）空港でお出迎えいたします。",
    "pickupBtn": "送迎を申し込む",
    "visaTitle": "インド渡航ビザ＆入国ガイド",
    "visaSub": "スムーズな入国審査のための重要ポイント",
    "visaB1Title": "インドe-Touristビザ：",
    "visaB1Text": "日本国籍の方は出発前にオンラインで電子観光ビザ（e-Visa）を申請・取得いただけます。",
    "visaB2Title": "推奨申請時期：",
    "visaB2Text": "渡航予定日の2週間前までに申請手続きを完了することをお勧めします。",
    "visaB3Title": "パスポート要件：",
    "visaB3Text": "入国時に残存有効期間が6ヶ月以上あり、2ページ以上の空白ページが必要です。",
    "visaB4Title": "アシュラムでの滞在登録：",
    "visaB4Text": "到着後、アシュラム受付にてインド政府指定の外国人登録（Form-C）手続きをサポートいたします。",
    "airItemsRishikesh": [{"title": "ジョリー・グラント空港、デヘラードゥーン (DED)", "distance": "35 km (アシュラムまで車で約45分)", "description": "最も近い国内線空港。ニューデリー (DEL、フライト45分)、ムンバイ、ベンガルールから毎日多数運航。"}, {"title": "インディラ・ガンディー国際空港、デリー (DEL)", "distance": "250 km (車で約5〜6時間、または国内線接続)", "description": "海外からの受講生のための主要国際線ゲートウェイ。デヘラードゥーン行きの国内線または高速道路タクシーで直結。"}],
    "trainItemsRishikesh": [{"title": "ヨグ・ナガリ・リシケシ駅 (YNRK)", "distance": "6 km (車で約15分)", "description": "北インドの主要都市と結ばれたリシケシ市内の最新鉄道ターミナル。"}, {"title": "ハリドワール・ジャンクション駅 (HW)", "distance": "25 km (車で約50分)", "description": "ヴァンデ・バーラト急行やシャタブディ急行など高速列車が頻発する大ターミナル (デリーから約4.5時間)。"}],
    "roadItemsRishikesh": [{"title": "デリー ISBT カシミール・ゲートからリシケシ", "distance": "240 km (高速道路経由で約5時間)", "description": "エアコン完備の快適な寝台バスや長距離バスが24時間、毎時間デリーから運行。"}, {"title": "デヘラードゥーンからリシケシ", "distance": "45 km (約1時間)", "description": "路線バス、乗り合いタクシー、専用タクシーが24時間利用可能な整備された道路。"}],
    "airItemsVarkala": [{"title": "トリバンドラム国際空港 (TRV)", "distance": "45 km (車で約1時間)", "description": "最寄りの国際・国内線空港。デリー、ムンバイ、中東、東南アジアからの直行便が多数発着。"}, {"title": "コーチン国際空港 (COK)", "distance": "190 km (車で約4.5時間)", "description": "長距離国際線の主要ゲートウェイ。NH66沿岸高速道路または急行列車でヴァルカラへ直結。"}],
    "trainItemsVarkala": [{"title": "ヴァルカラ・シヴァギリ駅 (VAK)", "distance": "3 km (オートリキシャで約10分)", "description": "町中にある便利な駅。トリバンドラム、コーチ、ムンバイ、デリーへの直通急行列車が毎日運行。"}, {"title": "コッラム・ジャンクション駅 (QLN)", "distance": "28 km (車で約45分)", "description": "インド全土からの高速急行列車が停車する地域の主要ターミナル。"}],
    "roadItemsVarkala": [{"title": "トリバンドラムからヴァルカラ・クリフ", "distance": "45 km (NH66経由で約1時間)", "description": "快適な海沿いのドライブ。路線バスや専用タクシーが終日運行。"}, {"title": "コーチからヴァルカラ", "distance": "165 km (NH66経由で約4時間)", "description": "ケーララ州の海岸線を通る美しいルートで、途中に快適な休憩スポット多数。"}],
    "taxiFaresRishikesh": [{"route": "デヘラードゥーン空港 (DED) → ヨガガルヒ・アシュラム", "costUsd": "$15–$20", "costInr": "₹1,200"}, {"route": "デリー空港 (DEL) → ヨガガルヒ・アシュラム", "costUsd": "$60–$70", "costInr": "₹5,000"}, {"route": "ハリドワール駅 → ヨガガルヒ・アシュラム", "costUsd": "$12–$15", "costInr": "₹1,000"}, {"route": "リシケシ駅 (YNRK) → アシュラム", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "トリバンドラム空港 (TRV) → ヨガガルヒ・ヴァルカラ", "costUsd": "$25", "costInr": "₹2,000"}, {"route": "コーチン空港 (COK) → ヨガガルヒ・ヴァルカラ", "costUsd": "$65", "costInr": "₹5,500"}, {"route": "ヴァルカラ・シヴァギリ駅 (VAK) → アシュラム", "costUsd": "$3", "costInr": "₹250"}, {"route": "コッラム・ジャンクション駅 (QLN) → ヨガガルヒ・ヴァルカラ", "costUsd": "$15", "costInr": "₹1,200"}],
    "openInMaps": "Googleマップで開く",
    "syllabusBtn": "詳細なシラバスをダウンロード",
    "syllabusTitle": "シラバスをダウンロード",
    "syllabusDesc": "コースを選択しメールアドレスを入力すると、詳細なシラバスをお送りします。",
    "syllabusEmailPlaceholder": "メールアドレス",
    "syllabusSend": "シラバスを送信",
    "syllabusSending": "送信中...",
    "syllabusPrompt": "時間ごとの詳細なスケジュールと推薦図書リストをご覧になりたいですか？"
  },
  "ko": {
    "badge": "교통 및 오시는 길 안내",
    "titleRishikesh": "YogaGarhi 리시케시 오시는 길",
    "titleVarkala": "YogaGarhi 바르칼라 오시는 길",
    "titleBali": "YogaGarhi 발리 오시는 길",
    "subtitleRishikesh": "타포반 아슈람까지 편안하게 오실 수 있도록 공항 환승 경로와 택시 요금을 안내해 드립니다.",
    "subtitleVarkala": "케랄라 절벽 샬라로 오시는 항공편, 기차 및 도로 교통편을 상세히 안내해 드립니다.",
    "subtitleBali": "발리 기안야르의 평화로운 아슈람으로 오시는 최적의 경로를 안내해 드립니다.",
    "byAir": "항공편",
    "byTrain": "기차편",
    "byRoad": "도로 / 버스",
    "airportTransfers": "공항 및 픽업 안내",
    "checkInOut": "체크인 및 체크아웃",
    "taxiTitleRishikesh": "YogaGarhi 리시케시 아슈람 예상 택시 요금",
    "taxiTitleVarkala": "YogaGarhi 바르칼라 아슈람 예상 택시 요금",
    "taxiSubRishikesh": "타포반까지의 사전 협의된 표준 기사 요금",
    "taxiSubVarkala": "노스 클리프까지의 사전 협의된 표준 요금",
    "thRoute": "이동 경로",
    "thCostUsd": "예상 비용 (USD)",
    "thCostInr": "예상 비용 (INR)",
    "pickupStrong": "공항 픽업을 준비해 드립니다:",
    "pickupTextRishikesh": "항공편 또는 기차 일정을 입학팀에 공유해 주시면, 신뢰할 수 있는 아슈람 전담 기사가 개인 이름표를 들고 대기합니다.",
    "pickupTextVarkala": "도착 일정을 공유해 주시면, 안전한 전담 기사가 바르칼라 샬라까지 편안하게 모십니다.",
    "pickupBtn": "픽업 신청하기",
    "visaTitle": "외국인 수강생을 위한 인도 비자 및 입국 안내",
    "visaSub": "원활한 입국 심사를 위한 필수 안내 사항",
    "visaB1Title": "인도 전자 관광 비자 (e-Visa):",
    "visaB1Text": "160개국 이상의 시민권자는 출국 전 공식 인도 정부 포털을 통해 간편하게 전자 관광 비자를 발급받을 수 있습니다.",
    "visaB2Title": "유효 기간:",
    "visaB2Text": "예정된 출국일로부터 최소 2주 전에 30일 또는 1년 복수 입국 e-Tourist 비자를 신청하시는 것을 권장합니다.",
    "visaB3Title": "통화 및 현지 SIM 카드:",
    "visaB3Text": "현지 통화는 인도 루피(INR)입니다. 타포반 곳곳에 ATM이 있으며, 리셉션 팀에서 5G 선불 SIM 카드 구매를 도와드립니다.",
    "visaB4Title": "체크인 시간:",
    "visaB4Text": "공식 아슈람 입소는 매 기수 1일 낮 12:00부터 시작되며, 저녁에는 오리엔테이션 및 하반(Havan) 개원 의식이 진행됩니다.",
    "airItemsRishikesh": [{"title": "데라둔 졸리 그랜트 공항 (DED)", "distance": "35 km (아슈람까지 차로 약 45분)", "description": "가장 가까운 국내선 공항. 뉴델리(DEL, 45분 비행), 뭄바이, 벵갈루루에서 매일 정기 항공편 운항."}, {"title": "델리 인디라 간디 국제공항 (DEL)", "distance": "250 km (차로 약 5~6시간 또는 국내선 연결)", "description": "해외 수강생을 위한 주요 국제 관문. 데라둔행 국내선 또는 고속도로 택시로 편리하게 연결."}],
    "trainItemsRishikesh": [{"title": "요그 나가리 리시케시 기차역 (YNRK)", "distance": "6 km (차로 약 15분)", "description": "인도 북부 주요 도시와 바로 연결되는 리시케시 시내의 현대적인 철도 터미널."}, {"title": "하리드와르 정션 (HW)", "distance": "25 km (차로 약 50분)", "description": "반데 바라트 급행 및 샤탑디 급행 등 고속 열차가 정차하는 대형 철도 허브(델리에서 약 4.5시간)."}],
    "roadItemsRishikesh": [{"title": "델리 ISBT 카시미르 게이트에서 리시케시", "distance": "240 km (고속도로 경유 약 5시간)", "description": "에어컨과 침대가 완비된 고급 고속버스가 델리에서 매시간 24시간 운행."}, {"title": "데라둔에서 리시케시", "distance": "45 km (약 1시간)", "description": "시내버스, 합승 택시 및 전용 택시가 24시간 내내 원활히 연결된 도로."}],
    "airItemsVarkala": [{"title": "트리반드룸 국제공항 (TRV)", "distance": "45 km (차로 약 1시간)", "description": "가장 가까운 공항. 델리, 뭄바이 및 중동, 동남아 주요 도시에서 매일 직항편 운항."}, {"title": "코친 국제공항 (COK)", "distance": "190 km (차로 약 4.5시간)", "description": "장거리 국제선을 위한 주요 국제 허브. 해안 고속도로 NH 66 또는 급행열차로 연결."}],
    "trainItemsVarkala": [{"title": "바르칼라 시바기리 기차역 (VAK)", "distance": "3 km (오토릭샤로 약 10분)", "description": "마을 중심의 편리한 역. 트리반드룸, 코치, 뭄바이, 델리로 가는 직통 열차 매일 운행."}, {"title": "콜람 정션 (QLN)", "distance": "28 km (차로 약 45분)", "description": "전국 각지의 고속 열차가 정차하는 주요 지역 철도 터미널."}],
    "roadItemsVarkala": [{"title": "트리반드룸에서 바르칼라 절벽", "distance": "45 km (NH 66 경유 약 1시간)", "description": "해안선을 따라 이어지는 편안한 고속도로. 정기 버스와 택시가 하루 종일 운행."}, {"title": "코치에서 바르칼라", "distance": "165 km (NH 66 경유 약 4시간)", "description": "케랄라 해안을 따라 이어지는 경치 좋은 도로로 중간 휴게소가 잘 갖춰져 있음."}],
    "taxiFaresRishikesh": [{"route": "데라둔 공항 (DED) → 요가가르히 아슈람", "costUsd": "$15–$20", "costInr": "₹1,200"}, {"route": "델리 공항 (DEL) → 요가가르히 아슈람", "costUsd": "$60–$70", "costInr": "₹5,000"}, {"route": "하리드와르 역 → 요가가르히 아슈람", "costUsd": "$12–$15", "costInr": "₹1,000"}, {"route": "리시케시 역 (YNRK) → 아슈람", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "트리반드룸 공항 (TRV) → 요가가르히 바르칼라", "costUsd": "$25", "costInr": "₹2,000"}, {"route": "코친 공항 (COK) → 요가가르히 바르칼라", "costUsd": "$65", "costInr": "₹5,500"}, {"route": "바르칼라 시바기리 역 (VAK) → 아슈람", "costUsd": "$3", "costInr": "₹250"}, {"route": "콜람 정션 (QLN) → 요가가르히 바르칼라", "costUsd": "$15", "costInr": "₹1,200"}],
    "openInMaps": "Google 지도에서 열기",
    "syllabusBtn": "상세 커리큘럼 다운로드",
    "syllabusTitle": "커리큘럼 다운로드",
    "syllabusDesc": "과정을 선택하고 이메일을 입력하시면 상세 커리큘럼을 보내드립니다.",
    "syllabusEmailPlaceholder": "이메일 주소",
    "syllabusSend": "커리큘럼 받기",
    "syllabusSending": "전송 중...",
    "syllabusPrompt": "시간대별 세부 일정과 추천 도서 목록을 확인하시겠습니까?"
  },
  "zh": {
    "badge": "交通与到达指南",
    "titleRishikesh": "如何前往YogaGarhi瑞诗凯诗校区",
    "titleVarkala": "如何前往YogaGarhi瓦尔卡拉校区",
    "titleBali": "如何前往YogaGarhi巴厘岛校区",
    "subtitleRishikesh": "详尽清晰的交通路线、机场接送指南与出租车参考资费，助你顺利抵达塔波万修道院。",
    "subtitleVarkala": "便捷明了的交通换乘路线与火车航班信息，助你顺利前往喀拉拉悬崖瑜伽馆。",
    "subtitleBali": "轻松规划前往巴厘岛吉安雅静谧修道院的行程与接送。",
    "byAir": "飞机直达",
    "byTrain": "火车铁路",
    "byRoad": "公路巴士",
    "airportTransfers": "机场与接送机",
    "checkInOut": "入住与退房",
    "taxiTitleRishikesh": "前往YogaGarhi静修院预估出租车费用",
    "taxiTitleVarkala": "前往YogaGarhi瓦尔卡拉校区出租车预估费用",
    "taxiSubRishikesh": "直达塔波万校区的协议标准司机运价",
    "taxiSubVarkala": "直达瓦尔卡拉悬崖校区的标准接机费用",
    "thRoute": "行程路线",
    "thCostUsd": "预估费用 (USD)",
    "thCostInr": "预估费用 (INR)",
    "pickupStrong": "我们提供专车接机服务：",
    "pickupTextRishikesh": "请向招生团队提供您的航班或火车车次信息，专属司机将持印有您姓名的接机牌在出站口迎候。",
    "pickupTextVarkala": "请提供您的航班信息，专属司机将在特里凡得琅（TRV）机场出站口静候您的到来。",
    "pickupBtn": "预约接机服务",
    "visaTitle": "国际学员印度签证及入境指引",
    "visaSub": "确保顺利通关入境的重要指南",
    "visaB1Title": "印度电子旅游签证（e-Visa）：",
    "visaB1Text": "多数国家公民可在出行前通过印度政府官方门户轻松在线申请电子旅游签证。",
    "visaB2Title": "推荐申请时间：",
    "visaB2Text": "建议至少在计划启程日期前两周完成签证申请提交。",
    "visaB3Title": "护照有效期限要求：",
    "visaB3Text": "入境时护照有效期必须在6个月以上，且至少备有两页空白盖章页。",
    "visaB4Title": "静修院抵埗外籍登记：",
    "visaB4Text": "抵达后，前台将协助您办理印度政府规定的Form-C外籍人员入住登记。",
    "airItemsRishikesh": [{"title": "德拉敦乔利格兰特机场 (DED)", "distance": "35公里 (乘车约45分钟到达静修院)", "description": "最近的国内机场。从新德里(DEL，45分钟飞行)、孟买、班加罗尔每日有多趟直飞航班。"}, {"title": "新德里英迪拉·甘地国际机场 (DEL)", "distance": "250公里 (乘车约5–6小时或转机)", "description": "国际学员的主要入境枢纽。每日有多个国内航班直达德拉敦，也可乘坐舒适的高速公路出租车。"}],
    "trainItemsRishikesh": [{"title": "约格纳加里里希开诗火车站 (YNRK)", "distance": "6公里 (乘车约15分钟)", "description": "里希开诗市内的现代化铁路总站，连接北印度各主要铁路枢纽。"}, {"title": "哈里德瓦尔枢纽站 (HW)", "distance": "25公里 (乘车约50分钟)", "description": "主要铁路枢纽，停靠包括范德·巴拉特号和沙塔布迪特快在内的多趟高速列车(距德里约4.5小时)。"}],
    "roadItemsRishikesh": [{"title": "德里 ISBT 卡什米尔门至里希开诗", "distance": "240公里 (经高速公路约5小时)", "description": "配备空调和卧铺的高级长途客车全天24小时每小时从德里发往里希开诗。"}, {"title": "德拉敦至里希开诗", "distance": "45公里 (约1小时)", "description": "路况优良的邦级公路，全天24小时提供频繁的公交、拼车及专属出租车服务。"}],
    "airItemsVarkala": [{"title": "特里凡得琅国际机场 (TRV)", "distance": "45公里 (乘车约1小时)", "description": "最近的机场。拥有来自德里、孟买以及中东、东南亚主要航空枢纽的每日直飞航班。"}, {"title": "科钦国际机场 (COK)", "distance": "190公里 (乘车约4.5小时)", "description": "长途国际航班的重要门户。经由NH 66沿海高速或特快列车便捷通往瓦尔卡拉。"}],
    "trainItemsVarkala": [{"title": "瓦尔卡拉希瓦吉里火车站 (VAK)", "distance": "3公里 (乘嘟嘟车约10分钟)", "description": "镇中心便利的火车站。每日有直达特快列车开往特里凡得琅、科钦、孟买和德里。"}, {"title": "奎隆枢纽站 (QLN)", "distance": "28公里 (乘车约45分钟)", "description": "区域主要铁路大站，停靠来自全国各地的特快列车。"}],
    "roadItemsVarkala": [{"title": "特里凡得琅至瓦尔卡拉悬崖", "distance": "45公里 (经NH 66约1小时)", "description": "沿海平坦的高速公路车程。全天有密集的公交车和出租车营运。"}, {"title": "科钦至瓦尔卡拉", "distance": "165公里 (经NH 66约4小时)", "description": "穿越喀拉拉邦海岸线的风景优美的自驾路线，沿途配套齐全。"}],
    "taxiFaresRishikesh": [{"route": "德拉敦机场 (DED) → 瑜伽静修院", "costUsd": "$15–$20", "costInr": "₹1,200"}, {"route": "德里机场 (DEL) → 瑜伽静修院", "costUsd": "$60–$70", "costInr": "₹5,000"}, {"route": "哈里德瓦尔火车站 → 瑜伽静修院", "costUsd": "$12–$15", "costInr": "₹1,000"}, {"route": "里希开诗火车站 (YNRK) → 瑜伽静修院", "costUsd": "$5", "costInr": "₹300"}],
    "taxiFaresVarkala": [{"route": "特里凡得琅机场 (TRV) → 瓦尔卡拉瑜伽院", "costUsd": "$25", "costInr": "₹2,000"}, {"route": "科钦机场 (COK) → 瓦尔卡拉瑜伽院", "costUsd": "$65", "costInr": "₹5,500"}, {"route": "瓦尔卡拉火车站 (VAK) → 瑜伽院", "costUsd": "$3", "costInr": "₹250"}, {"route": "奎隆火车站 (QLN) → 瓦尔卡拉瑜伽院", "costUsd": "$15", "costInr": "₹1,200"}],
    "openInMaps": "在Google地图中打开",
    "syllabusBtn": "下载详细课程大纲",
    "syllabusTitle": "下载课程大纲",
    "syllabusDesc": "选择您的课程并输入电子邮箱，即可免费获取完整的详细教学大纲。",
    "syllabusEmailPlaceholder": "您的电子邮箱",
    "syllabusSend": "发送课程大纲",
    "syllabusSending": "发送中...",
    "syllabusPrompt": "想查看按小时细分的教学时间表和推荐阅读书单吗？"
  }
};

export const FAQS_HEADER_UI: Record<string, FAQsHeaderUIData> = {
  "en": {
    "badge": "Got Questions?",
    "title": "Frequently Asked Questions",
    "subtitleRishikesh": "Everything you need to know about our {courseHours}-Hour Yoga Teacher Training in Tapovan, Rishikesh.",
    "subtitleVarkala": "Everything you need to know about our {courseHours}-Hour Yoga Teacher Training in Varkala, Kerala.",
    "chatWhatsApp": "WhatsApp 在线咨询",
    "helpDeskTitleRishikesh": "对里希开诗课程仍有疑问？",
    "helpDeskTitleVarkala": "对瓦尔卡拉课程仍有疑问？",
    "helpDeskSub": "我们的咨询顾问全天候通过 WhatsApp 为您量身规划学习旅程。"
  },
  "nl": {
    "badge": "Vragen?",
    "title": "Veelgestelde Vragen",
    "subtitleRishikesh": "Alles wat je moet weten over onze {courseHours}-Uurs Yogadocentenopleiding in Tapovan, Rishikesh.",
    "subtitleVarkala": "Alles wat je moet weten over onze {courseHours}-Uurs Yogadocentenopleiding in Varkala, Kerala.",
    "chatWhatsApp": "Chat via WhatsApp",
    "helpDeskTitleRishikesh": "Heb je nog vragen over Rishikesh?",
    "helpDeskTitleVarkala": "Heb je nog vragen over Varkala?",
    "helpDeskSub": "Ons toelatingsteam is 24/7 bereikbaar via WhatsApp om je reis te helpen plannen."
  },
  "de": {
    "badge": "Fragen?",
    "title": "Häufig Gestellte Fragen",
    "subtitleRishikesh": "Alles, was Sie über unsere {courseHours}-Stunden Yogalehrer-Ausbildung in Tapovan, Rishikesh, wissen müssen.",
    "subtitleVarkala": "Alles, was Sie über unsere {courseHours}-Stunden Yogalehrer-Ausbildung in Varkala, Kerala, wissen müssen.",
    "chatWhatsApp": "Auf WhatsApp chatten",
    "helpDeskTitleRishikesh": "Haben Sie noch Fragen zu Rishikesh?",
    "helpDeskTitleVarkala": "Haben Sie noch Fragen zu Varkala?",
    "helpDeskSub": "Unser Beratungsteam steht Ihnen rund um die Uhr auf WhatsApp bei der Reiseplanung zur Seite."
  },
  "fr": {
    "badge": "Des Questions ?",
    "title": "Foire Aux Questions",
    "subtitleRishikesh": "Tout ce que vous devez savoir sur notre formation de professeur de yoga de {courseHours} heures à Tapovan, Rishikesh.",
    "subtitleVarkala": "Tout ce que vous devez savoir sur notre formation de professeur de yoga de {courseHours} heures à Varkala, Kerala.",
    "chatWhatsApp": "Discuter sur WhatsApp",
    "helpDeskTitleRishikesh": "Une question concernant Rishikesh ?",
    "helpDeskTitleVarkala": "Une question concernant Varkala ?",
    "helpDeskSub": "Notre équipe d'admission est disponible 24h/24 et 7j/7 sur WhatsApp pour vous accompagner."
  },
  "es": {
    "badge": "¿Tienes Preguntas?",
    "title": "Preguntas Frecuentes",
    "subtitleRishikesh": "Todo lo que necesitas saber sobre nuestra formación de profesores de yoga de {courseHours} horas en Tapovan, Rishikesh.",
    "subtitleVarkala": "Todo lo que necesitas saber sobre nuestra formación de profesores de yoga de {courseHours} horas en Varkala, Kerala.",
    "chatWhatsApp": "Chatear por WhatsApp",
    "helpDeskTitleRishikesh": "¿Tienes dudas sobre Rishikesh?",
    "helpDeskTitleVarkala": "¿Tienes dudas sobre Varkala?",
    "helpDeskSub": "Nuestro equipo de admisiones está disponible las 24 horas en WhatsApp para resolver tus preguntas."
  },
  "it": {
    "badge": "Domande?",
    "title": "Domande Frequenti",
    "subtitleRishikesh": "Tutto quello che c'è da sapere sul nostro corso per insegnanti di yoga da {courseHours} ore a Tapovan, Rishikesh.",
    "subtitleVarkala": "Tutto quello che c'è da sapere sul nostro corso per insegnanti di yoga da {courseHours} ore a Varkala, Kerala.",
    "chatWhatsApp": "Chatta su WhatsApp",
    "helpDeskTitleRishikesh": "Hai ancora domande su Rishikesh?",
    "helpDeskTitleVarkala": "Hai ancora domande su Varkala?",
    "helpDeskSub": "Il nostro team è disponibile 24 ore su 24 su WhatsApp per aiutarti a organizzare il viaggio."
  },
  "ru": {
    "badge": "Остались вопросы?",
    "title": "Часто задаваемые вопросы",
    "subtitleRishikesh": "Всё, что вам необходимо знать о нашем курсе подготовки преподавателей йоги ({courseHours} часов) в Таповане, Ришикеш.",
    "subtitleVarkala": "Всё, что вам необходимо знать о нашем курсе подготовки преподавателей йоги ({courseHours} часов) в Варкале, Керала.",
    "chatWhatsApp": "Чат в WhatsApp",
    "helpDeskTitleRishikesh": "Остались вопросы о курсе в Ришикеше?",
    "helpDeskTitleVarkala": "Остались вопросы о курсе в Варкале?",
    "helpDeskSub": "Наша команда всегда на связи в WhatsApp, чтобы помочь вам спланировать вашу поездку."
  },
  "id": {
    "badge": "Punya Pertanyaan?",
    "title": "Pertanyaan yang Sering Diajukan",
    "subtitleRishikesh": "Semua hal yang perlu Anda ketahui tentang Pelatihan Guru Yoga {courseHours} Jam kami di Tapovan, Rishikesh.",
    "subtitleVarkala": "Semua hal yang perlu Anda ketahui tentang Pelatihan Guru Yoga {courseHours} Jam kami di Varkala, Kerala.",
    "chatWhatsApp": "Hubungi via WhatsApp",
    "helpDeskTitleRishikesh": "Masih ada pertanyaan tentang Rishikesh?",
    "helpDeskTitleVarkala": "Masih ada pertanyaan tentang Varkala?",
    "helpDeskSub": "Tim kami siap membantu Anda 24/7 di WhatsApp untuk merencanakan perjalanan Anda."
  },
  "ja": {
    "badge": "よくあるご質問",
    "title": "よくあるご質問（FAQ）",
    "subtitleRishikesh": "リシケシ・タポヴァンで開催される{courseHours}時間ヨガ指導者養成コースに関するすべてのご案内です。",
    "subtitleVarkala": "ケララ州バルカラで開催される{courseHours}時間ヨガ指導者養成コースに関するすべてのご案内です。",
    "chatWhatsApp": "WhatsAppで質問する",
    "helpDeskTitleRishikesh": "リシケシ校についてご不明な点はありますか？",
    "helpDeskTitleVarkala": "ヴァルカラ校についてご不明な点はありますか？",
    "helpDeskSub": "渡航前の準備やご相談は、アドミッションチームがWhatsAppで24時間受け付けています。"
  },
  "ko": {
    "badge": "궁금한 점이 있으신가요?",
    "title": "자주 묻는 질문",
    "subtitleRishikesh": "리시케시 타포반에서 진행되는 {courseHours}시간 요가 지도자 과정에 대해 알아야 할 모든 것.",
    "subtitleVarkala": "케랄라 바르칼라에서 진행되는 {courseHours}시간 요가 지도자 과정에 대해 알아야 할 모든 것.",
    "chatWhatsApp": "WhatsApp 실시간 상담",
    "helpDeskTitleRishikesh": "리시케시 과정에 대해 더 궁금한 점이 있으신가요?",
    "helpDeskTitleVarkala": "바르칼라 과정에 대해 더 궁금한 점이 있으신가요?",
    "helpDeskSub": "입학 상담팀이 24시간 언제나 여정 계획을 친절히 도와드립니다."
  },
  "zh": {
    "badge": "常见疑问",
    "title": "常见问题解答",
    "subtitleRishikesh": "关于我们在瑞诗凯诗塔波万举办的{courseHours}小时瑜伽教师培训课程所需了解的一切。",
    "subtitleVarkala": "关于我们在喀拉拉瓦尔卡拉举办的{courseHours}小时瑜伽教师培训课程所需了解的一切。",
    "chatWhatsApp": "通过 WhatsApp 咨询",
    "helpDeskTitleRishikesh": "关于瑞诗凯诗课程仍有疑问？",
    "helpDeskTitleVarkala": "关于瓦尔卡拉课程仍有疑问？",
    "helpDeskSub": "我们的招生咨询团队全天候在WhatsApp在线，随时协助您规划求学之旅。"
  }
};

export const PARTNERSHIPS_UI: Record<string, string> = {
  "en": "Recognized & Trusted Worldwide",
  "nl": "Wereldwijd Erkend & Vertrouwd",
  "de": "Weltweit Anerkannt & Geschätzt",
  "fr": "Reconnu & Approuvé dans le Monde Entier",
  "es": "Reconocido y de Confianza a Nivel Mundial",
  "it": "Riconosciuto e Apprezzato in Tutto il Mondo",
  "ru": "Признано и пользуется доверием во всем мире",
  "id": "Diakui & Dipercaya di Seluruh Dunia",
  "ja": "世界中で認められ、信頼される実績",
  "ko": "전 세계적으로 인정받고 신뢰받는 교육",
  "zh": "享誉全球的权威认证与信赖"
};

export const RETREAT_EXTRA_UI: Record<string, RetreatExtraUIData> = {
  "en": {
    "howToArriveTitle": "How to Arrive at YogaGarhi {loc}",
    "howToArriveDesc": "The most convenient way to reach YogaGarhi {loc} is by flight to the nearest airport. We arrange private transfers upon request.",
    "exploreOtherTitle": "Explore Other {loc} Retreat Options",
    "galleryTitle": "YogaGarhi {loc} Gallery",
    "galleryDesc": "Glimpses of life inside our peaceful {loc} sanctuary, lush tropical pools, and spiritual workshops.",
    "teacherTrainingTitle": "Looking to Become a Certified Yoga Teacher in {loc}?",
    "teacherTrainingDesc": "Explore our internationally accredited Yoga Alliance teacher training immersions in {loc}."
  },
  "nl": {
    "howToArriveTitle": "Routebeschrijving naar YogaGarhi {loc}",
    "howToArriveDesc": "De meest comfortabele manier om naar YogaGarhi {loc} te reizen is per vliegtuig naar de dichtstbijzijnde luchthaven. Wij verzorgen op verzoek privé-transfers.",
    "exploreOtherTitle": "Ontdek Andere Retraiteopties in {loc}",
    "galleryTitle": "Foto-impressie YogaGarhi {loc}",
    "galleryDesc": "Een impressie van onze vredige ashram in {loc}, weelderige zwembaden en spirituele workshops.",
    "teacherTrainingTitle": "Wil je een gecertificeerd yogadocent worden in {loc}?",
    "teacherTrainingDesc": "Verdiep je beoefening met onze Yoga Alliance gecertificeerde opleidingen (100, 200 en 300 uur) in {loc}."
  },
  "de": {
    "howToArriveTitle": "Anreise zu YogaGarhi {loc}",
    "howToArriveDesc": "Die bequemste Anreise zu YogaGarhi {loc} erfolgt per Flug zum nächstgelegenen Flughafen. Auf Wunsch organisieren wir private Transfers.",
    "exploreOtherTitle": "Entdecken Sie Weitere Retreat-Angebote in {loc}",
    "galleryTitle": "Bildergalerie YogaGarhi {loc}",
    "galleryDesc": "Einblicke in das Leben in unserem friedvollen Ashram in {loc}, die tropischen Pools und spirituellen Workshops.",
    "teacherTrainingTitle": "Möchten Sie zertifizierter Yogalehrer in {loc} werden?",
    "teacherTrainingDesc": "Vertiefen Sie Ihre Praxis mit unseren Yoga Alliance zertifizierten Ausbildungen (100, 200 und 300 Stunden) in {loc}."
  },
  "fr": {
    "howToArriveTitle": "Comment Arriver à YogaGarhi {loc}",
    "howToArriveDesc": "Le moyen le plus pratique pour rejoindre YogaGarhi {loc} est l'avion jusqu'à l'aéroport le plus proche. Nous organisons des transferts privés sur demande.",
    "exploreOtherTitle": "Découvrez d'Autres Retraites à {loc}",
    "galleryTitle": "Galerie Photos YogaGarhi {loc}",
    "galleryDesc": "Un aperçu de la vie dans notre havre de paix à {loc}, nos piscines tropicales et nos ateliers spirituels.",
    "teacherTrainingTitle": "Vous Souhaitez Devenir Professeur de Yoga Certifié à {loc} ?",
    "teacherTrainingDesc": "Explorez nos immersions de formation de professeur reconnues par Yoga Alliance à {loc}."
  },
  "es": {
    "howToArriveTitle": "Cómo Llegar a YogaGarhi {loc}",
    "howToArriveDesc": "La forma más cómoda de llegar a YogaGarhi {loc} es volar al aeropuerto más cercano. Organizamos traslados privados a petición.",
    "exploreOtherTitle": "Explora Otras Opciones de Retiro en {loc}",
    "galleryTitle": "Galería YogaGarhi {loc}",
    "galleryDesc": "Imágenes de la vida en nuestro sereno santuario en {loc}, piscinas tropicales y talleres espirituales.",
    "teacherTrainingTitle": "¿Deseas Convertirte en Profesor de Yoga Certificado en {loc}?",
    "teacherTrainingDesc": "Profundiza en tu práctica con nuestras formaciones acreditadas por Yoga Alliance en {loc}."
  },
  "it": {
    "howToArriveTitle": "Come Arrivare a YogaGarhi {loc}",
    "howToArriveDesc": "Il modo più comodo per raggiungere YogaGarhi {loc} è volare all'aeroporto più vicino. Su richiesta organizziamo transfer privati.",
    "exploreOtherTitle": "Esplora Altri Ritiri a {loc}",
    "galleryTitle": "Galleria YogaGarhi {loc}",
    "galleryDesc": "Uno sguardo alla vita nel nostro rifugio di pace a {loc}, tra piscine immerse nel verde e workshop spirituali.",
    "teacherTrainingTitle": "Vuoi Diventare un Insegnante di Yoga Certificato a {loc}?",
    "teacherTrainingDesc": "Approfondisci la tua pratica con i nostri percorsi per insegnanti accreditati Yoga Alliance a {loc}."
  },
  "ru": {
    "howToArriveTitle": "Как добраться до YogaGarhi в {loc}",
    "howToArriveDesc": "Самый удобный способ добраться до YogaGarhi в {loc} — прилететь в ближайший аэропорт. По запросу мы организуем трансфер.",
    "exploreOtherTitle": "Другие программы ретритов в {loc}",
    "galleryTitle": "Фотогалерея YogaGarhi в {loc}",
    "galleryDesc": "Взгляните на жизнь в нашем умиротворенном ашраме в {loc}, тропические бассейны и духовные практики.",
    "teacherTrainingTitle": "Хотите стать сертифицированным преподавателем йоги в {loc}?",
    "teacherTrainingDesc": "Углубите свою практику на наших курсах подготовки учителей, аккредитованных Yoga Alliance, в {loc}."
  },
  "id": {
    "howToArriveTitle": "Cara Menuju YogaGarhi {loc}",
    "howToArriveDesc": "Cara paling nyaman untuk mencapai YogaGarhi {loc} adalah dengan penerbangan ke bandara terdekat. Kami menyediakan antar-jemput pribadi berdasarkan permintaan.",
    "exploreOtherTitle": "Jelajahi Pilihan Retret Lainnya di {loc}",
    "galleryTitle": "Galeri Foto YogaGarhi {loc}",
    "galleryDesc": "Sekilas kehidupan di dalam sanctuary damai kami di {loc}, kolam tropis yang asri, dan lokakarya spiritual.",
    "teacherTrainingTitle": "Ingin Menjadi Guru Yoga Bersertifikat di {loc}?",
    "teacherTrainingDesc": "Tingkatkan latihan Anda dengan pelatihan guru bersertifikat Yoga Alliance kami di {loc}."
  },
  "ja": {
    "howToArriveTitle": "YogaGarhi {loc}校へのアクセス",
    "howToArriveDesc": "YogaGarhi {loc}校へは最寄りの空港へのフライトが最も便利です。ご希望に応じて個別送迎の手配も承ります。",
    "exploreOtherTitle": "{loc}のその他のリトリートプランを見る",
    "galleryTitle": "YogaGarhi {loc}校 フォトギャラリー",
    "galleryDesc": "{loc}の静寂なアシュラムでの生活、緑豊かなプール、スピリチュアルなワークショップの様子をご覧ください。",
    "teacherTrainingTitle": "{loc}で全米ヨガアライアンス認定指導者を目指しませんか？",
    "teacherTrainingDesc": "{loc}で開催される国際公認の全米ヨガアライアンス認定コースで学びを深めましょう。"
  },
  "ko": {
    "howToArriveTitle": "YogaGarhi {loc} 오시는 길",
    "howToArriveDesc": "YogaGarhi {loc}로 오시는 가장 편리한 방법은 인근 공항을 이용하는 항공편입니다. 요청 시 개별 픽업 차량을 안내해 드립니다.",
    "exploreOtherTitle": "{loc}의 다른 요가 리트리트 둘러보기",
    "galleryTitle": "YogaGarhi {loc} 갤러리",
    "galleryDesc": "{loc}의 평화로운 아슈람 힐링 공간, 열대 수영장, 깊이 있는 영적 워크숍 풍경을 미리 만나보세요.",
    "teacherTrainingTitle": "{loc}에서 국제 공인 요가 지도자가 되고 싶으신가요?",
    "teacherTrainingDesc": "{loc}에서 열리는 전미 요가 얼라이언스 공인 교사 양성 과정으로 배움을 확장하세요."
  },
  "zh": {
    "howToArriveTitle": "如何抵达YogaGarhi {loc}修道院",
    "howToArriveDesc": "前往YogaGarhi {loc}修道院最便捷的方式是搭乘航班飞抵最近的机场。我们可根据需求为你安排专车接送。",
    "exploreOtherTitle": "探索{loc}的其他静修之旅",
    "galleryTitle": "YogaGarhi {loc} 实景相册",
    "galleryDesc": "领略我们在{loc}静谧修道院的日常修习、热带泳池庭院与灵性工作坊的温馨点滴。",
    "teacherTrainingTitle": "渴望在{loc}成为国际认证的专业瑜伽导师吗？",
    "teacherTrainingDesc": "探索我们在{loc}开设的经由全美瑜伽联盟权威认证的专业教师培训项目。"
  }
};
