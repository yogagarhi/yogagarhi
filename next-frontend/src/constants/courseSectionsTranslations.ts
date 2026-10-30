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
}

export interface FAQsHeaderUIData {
  badge: string;
  title: string;
  subtitleRishikesh: string;
  subtitleVarkala: string;
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
    "f_price": "Starting Price"
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
    "f_price": "Vanaf-prijs"
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
    "f_price": "Startpreis"
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
    "f_price": "Tarif à partir de"
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
    "f_price": "Precio desde"
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
    "f_price": "Prezzo a partire da"
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
    "f_price": "Стоимость от"
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
    "f_price": "Mulai dari"
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
    "f_price": "最低受講料"
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
    "f_price": "시작 가격"
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
    "f_price": "起步学费"
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
    "monthlyStart": "Monthly 1st start date"
  },
  "nl": {
    "badgeRishikesh": "Seizoensklimaat",
    "badgeVarkala": "Kustklimaat",
    "titleRishikesh": "Beste Reistijd naar Rishikesh voor Yoga Opleiding",
    "titleVarkala": "Beste Reistijd naar Varkala voor Yoga Opleiding",
    "subtitleRishikesh": "Plan je spirituele verdieping aan de hand van het weer in de Himalaya en je persoonlijke doelen.",
    "subtitleVarkala": "Plan je training aan zee aan de hand van de tropische seizoenen en het klimaat in Kerala.",
    "monthlyStart": "Start elke 1e van de maand"
  },
  "de": {
    "badgeRishikesh": "Saisonales Klima",
    "badgeVarkala": "Küstenklima",
    "titleRishikesh": "Beste Reisezeit für Yoga in Rishikesh",
    "titleVarkala": "Beste Reisezeit für Yoga in Varkala",
    "subtitleRishikesh": "Planen Sie Ihre Reise abgestimmt auf das Klima im Himalaya und Ihre Übungsziele.",
    "subtitleVarkala": "Planen Sie Ihre Ausbildung am Meer abgestimmt auf Keralas Tropenklima.",
    "monthlyStart": "Beginn jeden 1. des Monats"
  },
  "fr": {
    "badgeRishikesh": "Climat Saisonnier",
    "badgeVarkala": "Climat Côtier",
    "titleRishikesh": "Meilleure Période pour Se Former au Yoga à Rishikesh",
    "titleVarkala": "Meilleure Période pour Se Former au Yoga à Varkala",
    "subtitleRishikesh": "Planifiez votre formation selon le climat himalayen et vos objectifs personnels.",
    "subtitleVarkala": "Planifiez votre séjour selon les saisons tropicales du Kerala.",
    "monthlyStart": "Début le 1er de chaque mois"
  },
  "es": {
    "badgeRishikesh": "Clima Estacional",
    "badgeVarkala": "Clima Costero",
    "titleRishikesh": "Mejor Época para Formarse en Yoga en Rishikesh",
    "titleVarkala": "Mejor Época para Formarse en Yoga en Varkala",
    "subtitleRishikesh": "Planifica tu viaje según las estaciones del Himalaya y tus metas de práctica.",
    "subtitleVarkala": "Planifica tu formación según las temporadas tropicales de Kerala.",
    "monthlyStart": "Inicio el día 1 de cada mes"
  },
  "it": {
    "badgeRishikesh": "Clima Stagionale",
    "badgeVarkala": "Clima Costiero",
    "titleRishikesh": "Il Periodo Migliore per la Formazione Yoga a Rishikesh",
    "titleVarkala": "Il Periodo Migliore per la Formazione Yoga a Varkala",
    "subtitleRishikesh": "Pianifica il soggiorno in base al clima himalayano e ai tuoi traguardi personali.",
    "subtitleVarkala": "Pianifica il soggiorno in base alle stagioni tropicali del Kerala.",
    "monthlyStart": "Inizio il 1° di ogni mese"
  },
  "ru": {
    "badgeRishikesh": "Сезонный климат",
    "badgeVarkala": "Прибрежный климат",
    "titleRishikesh": "Лучшее время для обучения йоге в Ришикеше",
    "titleVarkala": "Лучшее время для обучения йоге в Варкале",
    "subtitleRishikesh": "Планируйте поездку с учетом климатических особенностей Гималаев и личных целей.",
    "subtitleVarkala": "Планируйте поездку с учетом тропического климата Кералы.",
    "monthlyStart": "Начало 1-го числа каждого месяца"
  },
  "id": {
    "badgeRishikesh": "Iklim Musiman",
    "badgeVarkala": "Iklim Pesisir",
    "titleRishikesh": "Waktu Terbaik Mengikuti Pelatihan Yoga di Rishikesh",
    "titleVarkala": "Waktu Terbaik Mengikuti Pelatihan Yoga di Varkala",
    "subtitleRishikesh": "Rencanakan perjalanan Anda sesuai dengan pola cuaca Himalaya dan tujuan latihan Anda.",
    "subtitleVarkala": "Rencanakan pelatihan tepi pantai Anda sesuai musim tropis Kerala.",
    "monthlyStart": "Mulai setiap tanggal 1 tiap bulan"
  },
  "ja": {
    "badgeRishikesh": "季節と気候",
    "badgeVarkala": "沿岸の気候",
    "titleRishikesh": "リシケシでのヨガ受講に最適な時期",
    "titleVarkala": "バルカラでのヨガ受講に最適な時期",
    "subtitleRishikesh": "ヒマラヤの気候サイクルとご自身の修練目的に合わせて最適な時期をご検討ください。",
    "subtitleVarkala": "ケララの熱帯気候と海の状況に合わせて受講時期をご検討ください。",
    "monthlyStart": "毎月1日開講"
  },
  "ko": {
    "badgeRishikesh": "계절별 기후",
    "badgeVarkala": "해안 기후",
    "titleRishikesh": "리시케시 요가 유학에 가장 좋은 시기",
    "titleVarkala": "바르칼라 요가 유학에 가장 좋은 시기",
    "subtitleRishikesh": "히말라야의 계절 변화와 개인 수련 목적에 맞춰 일정을 계획하세요.",
    "subtitleVarkala": "케랄라의 열대 계절과 기후 조건에 맞춰 일정을 계획하세요.",
    "monthlyStart": "매월 1일 개강"
  },
  "zh": {
    "badgeRishikesh": "季节气候",
    "badgeVarkala": "海滨气候",
    "titleRishikesh": "前往瑞诗凯诗修习瑜伽的最佳时节",
    "titleVarkala": "前往瓦尔卡拉修习瑜伽的最佳时节",
    "subtitleRishikesh": "根据喜马拉雅的气候变化与个人的修习目标，规划你的灵性之旅。",
    "subtitleVarkala": "根据喀拉拉的热带季节特征，规划你的海滨修习之旅。",
    "monthlyStart": "每月1日开营"
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
    "checkInOut": "Check-In & Check-Out"
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
    "checkInOut": "Inchecken & Uitchecken"
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
    "checkInOut": "Check-in & Check-out"
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
    "checkInOut": "Arrivée & Départ"
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
    "checkInOut": "Llegada y Salida"
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
    "checkInOut": "Check-In e Check-Out"
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
    "checkInOut": "Заезд и выезд"
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
    "checkInOut": "Check-In & Check-Out"
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
    "checkInOut": "チェックイン・チェックアウト"
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
    "checkInOut": "체크인 및 체크아웃"
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
    "checkInOut": "入住与退房"
  }
};

export const FAQS_HEADER_UI: Record<string, FAQsHeaderUIData> = {
  "en": {
    "badge": "Got Questions?",
    "title": "Frequently Asked Questions",
    "subtitleRishikesh": "Everything you need to know about our {courseHours}-Hour Yoga Teacher Training in Tapovan, Rishikesh.",
    "subtitleVarkala": "Everything you need to know about our {courseHours}-Hour Yoga Teacher Training in Varkala, Kerala."
  },
  "nl": {
    "badge": "Vragen?",
    "title": "Veelgestelde Vragen",
    "subtitleRishikesh": "Alles wat je moet weten over onze {courseHours}-Uurs Yogadocentenopleiding in Tapovan, Rishikesh.",
    "subtitleVarkala": "Alles wat je moet weten over onze {courseHours}-Uurs Yogadocentenopleiding in Varkala, Kerala."
  },
  "de": {
    "badge": "Fragen?",
    "title": "Häufig Gestellte Fragen",
    "subtitleRishikesh": "Alles, was Sie über unsere {courseHours}-Stunden Yogalehrer-Ausbildung in Tapovan, Rishikesh, wissen müssen.",
    "subtitleVarkala": "Alles, was Sie über unsere {courseHours}-Stunden Yogalehrer-Ausbildung in Varkala, Kerala, wissen müssen."
  },
  "fr": {
    "badge": "Des Questions ?",
    "title": "Foire Aux Questions",
    "subtitleRishikesh": "Tout ce que vous devez savoir sur notre formation de professeur de yoga de {courseHours} heures à Tapovan, Rishikesh.",
    "subtitleVarkala": "Tout ce que vous devez savoir sur notre formation de professeur de yoga de {courseHours} heures à Varkala, Kerala."
  },
  "es": {
    "badge": "¿Tienes Preguntas?",
    "title": "Preguntas Frecuentes",
    "subtitleRishikesh": "Todo lo que necesitas saber sobre nuestra formación de profesores de yoga de {courseHours} horas en Tapovan, Rishikesh.",
    "subtitleVarkala": "Todo lo que necesitas saber sobre nuestra formación de profesores de yoga de {courseHours} horas en Varkala, Kerala."
  },
  "it": {
    "badge": "Domande?",
    "title": "Domande Frequenti",
    "subtitleRishikesh": "Tutto quello che c'è da sapere sul nostro corso per insegnanti di yoga da {courseHours} ore a Tapovan, Rishikesh.",
    "subtitleVarkala": "Tutto quello che c'è da sapere sul nostro corso per insegnanti di yoga da {courseHours} ore a Varkala, Kerala."
  },
  "ru": {
    "badge": "Остались вопросы?",
    "title": "Часто задаваемые вопросы",
    "subtitleRishikesh": "Всё, что вам необходимо знать о нашем курсе подготовки преподавателей йоги ({courseHours} часов) в Таповане, Ришикеш.",
    "subtitleVarkala": "Всё, что вам необходимо знать о нашем курсе подготовки преподавателей йоги ({courseHours} часов) в Варкале, Керала."
  },
  "id": {
    "badge": "Punya Pertanyaan?",
    "title": "Pertanyaan yang Sering Diajukan",
    "subtitleRishikesh": "Semua hal yang perlu Anda ketahui tentang Pelatihan Guru Yoga {courseHours} Jam kami di Tapovan, Rishikesh.",
    "subtitleVarkala": "Semua hal yang perlu Anda ketahui tentang Pelatihan Guru Yoga {courseHours} Jam kami di Varkala, Kerala."
  },
  "ja": {
    "badge": "よくあるご質問",
    "title": "よくあるご質問（FAQ）",
    "subtitleRishikesh": "リシケシ・タポヴァンで開催される{courseHours}時間ヨガ指導者養成コースに関するすべてのご案内です。",
    "subtitleVarkala": "ケララ州バルカラで開催される{courseHours}時間ヨガ指導者養成コースに関するすべてのご案内です。"
  },
  "ko": {
    "badge": "궁금한 점이 있으신가요?",
    "title": "자주 묻는 질문",
    "subtitleRishikesh": "리시케시 타포반에서 진행되는 {courseHours}시간 요가 지도자 과정에 대해 알아야 할 모든 것.",
    "subtitleVarkala": "케랄라 바르칼라에서 진행되는 {courseHours}시간 요가 지도자 과정에 대해 알아야 할 모든 것."
  },
  "zh": {
    "badge": "常见疑问",
    "title": "常见问题解答",
    "subtitleRishikesh": "关于我们在瑞诗凯诗塔波万举办的{courseHours}小时瑜伽教师培训课程所需了解的一切。",
    "subtitleVarkala": "关于我们在喀拉拉瓦尔卡拉举办的{courseHours}小时瑜伽教师培训课程所需了解的一切。"
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
