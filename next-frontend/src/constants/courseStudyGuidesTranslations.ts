// Localized translations for Rishikesh and Varkala Study Guides

export interface StudyGuideModule {
  title: string;
  subtitle: string;
  description: string;
}

export interface PracticalScheduleItem {
  title: string;
  time: string;
  description: string;
}

export interface StudyGuideData {
  badge: string;
  title: string;
  subtitle: string;
  coreBadge: string;
  specialBadge?: string;
  dailyBadge: string;
  dailyTitle: string;
  dailyDesc: string;
  scheduleTag: string;
  modules: StudyGuideModule[];
  practicalItems: PracticalScheduleItem[];
}

export const STUDY_GUIDE_RISHIKESH: Record<string, StudyGuideData> = {
  "en": {
    "badge": "Academic Rigor & Spiritual Depth",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional Himalayan sadhana with evidence-based biomechanics, philosophy, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "dailyBadge": "Daily Immersive Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Practical Training Components",
    "dailyDesc": "Authentic yogic education requires experiential immersion. Every single training day is structured to cultivate internal silence, physical stamina, and refined sensory awareness. By stepping away from the demands of everyday modern life and immersing yourself into the disciplined rhythm of our Tapovan ashram, theory turns into embodied truth.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Module 1: Classical Asana Practice & Precision Alignment",
        "subtitle": "Mastering Asana Mechanics from the Ground Up",
        "description": "Our asana curriculum bridges classical Himalayan Hatha Yoga with dynamic Ashtanga Vinyasa flow. You will systematically deconstruct over 75 fundamental and intermediate postures, exploring the biomechanics of Surya Namaskar A and B, grounding standing series, hip opening progressions, core stabilizing arm balances, and therapeutic inversions. Rather than enforcing an arbitrary aesthetic shape, we teach you how to honor individual skeletal variations, use props intelligently, and guide students safely into optimal stability and ease (Sthira Sukham Asanam)."
      },
      {
        "title": "Module 2: Pranayama, Shatkriyas & Energetic Anatomy",
        "subtitle": "The Science of Pranic Control & Subtle Channels",
        "description": "Breath is the bridge between body and mind. You will practice and master classical yogic breathing techniques, including Nadi Shodhana (Alternate Nostril Breathing), Kapalabhati (Skull Shining Breath), Bhastrika (Bellows Breath), Ujjayi (Victorious Ocean Breath), and cooling Sheetali/Sheetkari. Learn the profound science of the energetic body: the 72,000 Nadis (Ida, Pingala, Sushumna), the 7 major Chakras, and the Five Vayus (Prana, Apana, Samana, Udana, Vyana). You will also learn traditional yogic purification kriyas (Jala Neti, Sutra Neti, Nauli) to clear the respiratory tract and heighten mental clarity."
      },
      {
        "title": "Module 3: Applied Anatomy & Functional Biomechanics",
        "subtitle": "Western Science Meets Eastern Somatic Wisdom",
        "description": "Taught by senior anatomy specialists, this module demystifies human biomechanics for yoga teachers. You will examine the musculoskeletal system, joint articulation types, connective fascial meridians, and spinal column mechanics. Understand how skeletal compression differs from soft-tissue tension, and discover why certain postures must be modified for different hip sockets and femur angles. We emphasize injury prevention, contraindications for hypertension and pregnancy, and the neuromuscular science of the parasympathetic nervous system."
      },
      {
        "title": "Module 4: Yogic Philosophy, Classical Texts & Lifestyle",
        "subtitle": "Living the Wisdom of Patanjali & the Bhagavad Gita",
        "description": "True yoga extends far beyond the physical mat. Immerse in the foundational classical scriptures of yoga, analyzing Patanjali's Yoga Sutras and the Eight Limbs of Ashtanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi). Explore the ethical tenets of non-violence (Ahimsa), truthfulness (Satya), and self-study (Svadhyaya) in modern context. Study the Bhagavad Gita's pathways of Karma Yoga (selfless action), Bhakti Yoga (devotion), and Jnana Yoga (wisdom), cultivating a resilient spiritual foundation for conscious daily living."
      },
      {
        "title": "Module 5: Teaching Methodology, Sequencing & Hands-On Adjustments",
        "subtitle": "From Self-Practitioner to Confident, Inspiring Leader",
        "description": "Transition seamlessly from personal practice into inspiring, authentic teaching. You will master the art of intelligent class sequencing—from gentle somatic warm-ups and progressive peak-pose progressions to grounding counter-postures and deep Savasana relaxation. Develop your unique teaching voice with confident verbal cueing, clear body language, and non-invasive hands-on adjustments. Beginning in your very first week, you will teach micro-sessions with peer feedback, graduating with the confidence to lead full 60-to-90-minute classes anywhere in the world."
      }
    ],
    "practicalItems": [
      {
        "title": "Morning Kriyas & Shatkarma Cleansing",
        "time": "6:00 AM – 6:30 AM",
        "description": "Awaken the respiratory pathways with Jala Neti, Kapalabhati, and mindful morning hydration with warm herbal infusions."
      },
      {
        "title": "Pranayama & Silent Meditation Sadhana",
        "time": "6:30 AM – 7:30 AM",
        "description": "Harness the pristine Himalayan prana through classical breath regulation, bandhas, and silent sunrise meditation."
      },
      {
        "title": "Dynamic Asana Alignment & Vinyasa Lab",
        "time": "7:30 AM – 9:00 AM",
        "description": "Intensive physical practice analyzing posture lines, muscular activation, skeletal modifications, and transitions."
      },
      {
        "title": "Anatomy Clinic & Hands-On Correction Practicum",
        "time": "3:00 PM – 4:30 PM",
        "description": "Partner alignment clinics, touch ethics, verbal cueing practice, and anatomical adjustment methodologies."
      },
      {
        "title": "Evening Chanting, Kirtan & Satsang",
        "time": "6:00 PM – 7:00 PM",
        "description": "Immersive traditional Sanskrit mantra singing, sound resonance, and philosophical inquiry with our resident acharyas."
      }
    ]
  },
  "de": {
    "badge": "Akademische Exzellenz & Spirituelle Tiefe",
    "title": "Umfassender Lehrplan & Studienmodule",
    "subtitle": "Unser bei der Yoga Alliance registrierter Lehrplan verbindet traditionelle Himalaya-Sadhana harmonisch mit moderner Biomechanik, Philosophie und fundierter Unterrichtsmethodik.",
    "coreBadge": "Kernmodul",
    "dailyBadge": "Tägliche Vertiefungsdisziplinen",
    "dailyTitle": "Tägliche Ashram-Sadhana & Praktische Trainingselemente",
    "dailyDesc": "Echte yogische Bildung verlangt gelebte Erfahrung. Jeder Ausbildungstag ist darauf ausgerichtet, innere Stille, körperliche Ausdauer und feine Wahrnehmung zu schulen. Durch den bewussten Rückzug aus dem Alltag in unseren Tapovan Ashram wird Theorie zu lebendiger Wirklichkeit.",
    "scheduleTag": "Teil des täglichen Ashram-Tagesablaufs",
    "modules": [
      {
        "title": "Modul 1: Klassische Asana-Praxis & Präzise Ausrichtung",
        "subtitle": "Grundlegende Asana-Mechanik von Grund auf meistern",
        "description": "Unser Lehrplan verbindet traditionelles Hatha Yoga mit fließendem Ashtanga Vinyasa. Sie lernen die biomechanische Analyse von über 75 Haltungen, Sonnengrüße A und B, Standhaltungen, Hüftöffner und Umkehrhaltungen unter Berücksichtigung individueller anatomischer Besonderheiten."
      },
      {
        "title": "Modul 2: Pranayama, Shatkriyas & Energetische Anatomie",
        "subtitle": "Die Wissenschaft der Atemkontrolle & Feinstofflichen Kanäle",
        "description": "Der Atem ist die Brücke zwischen Körper und Geist. Meistern Sie Nadi Shodhana, Kapalabhati, Bhastrika, Ujjayi und Sheetali sowie die Reinigungsübungen Jala Neti und Nauli. Verstehen Sie die 72.000 Nadis, die 7 Hauptchakren und die fünf Vayus."
      },
      {
        "title": "Modul 3: Angewandte Anatomie & Funktionelle Biomechanik",
        "subtitle": "Westliche Wissenschaft trifft auf östliche Körperweisheit",
        "description": "Erkunden Sie den Bewegungsapparat, Gelenktypen und Faszienzüge. Verstehen Sie den Unterschied zwischen Kompression und Gewebespannung, um Verletzungen vorzubeugen und Haltungen für unterschiedliche Körpertypen sicher anzupassen."
      },
      {
        "title": "Modul 4: Yogaphilosophie, Klassische Texte & Lebensführung",
        "subtitle": "Die Weisheit von Patanjali & der Bhagavad Gita leben",
        "description": "Tauchen Sie ein in Patanjalis Yoga Sutras und den achtgliedrigen Pfad des Ashtanga Yoga. Erforschen Sie Ahimsa, Satya und Svadhyaya sowie die Pfade des Karma-, Bhakti- und Jnana-Yoga für ein bewusstes spirituelles Leben."
      },
      {
        "title": "Modul 5: Unterrichtsmethodik, Sequenzierung & Hands-On Assists",
        "subtitle": "Vom Übenden zum souveränen, inspirierenden Lehrer",
        "description": "Lernen Sie intelligente Kursaufbauten zu gestalten – vom sanften Ankommen über dynamische Höhepunkte bis zum tiefen Savasana. Entwickeln Sie Ihre Lehrstimme und üben Sie einfühlsame manuelle Hilfestellungen ab der ersten Woche."
      }
    ],
    "practicalItems": [
      {
        "title": "Morgendliche Kriyas & Shatkarma-Reinigung",
        "time": "06:00 – 06:30 Uhr",
        "description": "Befreiung der Atemwege mit Jala Neti, Kapalabhati und wärmenden Kräutertees."
      },
      {
        "title": "Pranayama & Stille Meditations-Sadhana",
        "time": "06:30 – 07:30 Uhr",
        "description": "Atemregulierung, Bandhas und stille Meditation im klaren morgendlichen Himalaya-Prana."
      },
      {
        "title": "Dynamisches Asana-Labor & Ausrichtung",
        "time": "07:30 – 09:00 Uhr",
        "description": "Intensive Praxis mit biomechanischer Haltungsanalyse, Aktivierung und Übergängen."
      },
      {
        "title": "Anatomie-Klinik & Hands-On Korrekturpraxis",
        "time": "15:00 – 16:30 Uhr",
        "description": "Partnerausrichtung, taktile Ethik, verbale Anleitung und anatomische Anpassungen."
      },
      {
        "title": "Abendliches Chanten, Kirtan & Satsang",
        "time": "18:00 – 19:00 Uhr",
        "description": "Traditionelles Sanskrit-Chanten, Klangschwingungen und philosophischer Austausch mit Acharyas."
      }
    ]
  },
  "fr": {
    "badge": "Rigueur Académique & Profondeur Spirituelle",
    "title": "Programme d'Études Complet & Modules Académiques",
    "subtitle": "Notre cursus certifié Yoga Alliance synthétise avec rigueur la sadhana traditionnelle de l'Himalaya, la biomécanique moderne, la philosophie et la pédagogie d'enseignement.",
    "coreBadge": "Module Fondamental",
    "dailyBadge": "Disciplines Immersives Quotidiennes",
    "dailyTitle": "Sadhana Quotidienne à l'Ashram & Pratiques d'Entraînement",
    "dailyDesc": "L'apprentissage véritable du yoga exige une expérience vécue. Chaque journée est structurée pour développer le calme intérieur, l'endurance physique et la sensibilité subtile. En vous retirant dans notre ashram de Tapovan, l'enseignement devient une vérité incarnée.",
    "scheduleTag": "Inclus dans l'emploi du temps quotidien de l'ashram",
    "modules": [
      {
        "title": "Module 1 : Pratique Classique des Asanas & Alignement de Précision",
        "subtitle": "Maîtriser les Fondements Biomécaniques Posturaux",
        "description": "Notre enseignement postural associe le Hatha Yoga traditionnel et le dynamisme de l'Ashtanga Vinyasa. Déconstruisez plus de 75 postures en respectant les spécificités squelettiques individuelles et en guidant vos futurs élèves vers la stabilité et l'aisance (Sthira Sukham Asanam)."
      },
      {
        "title": "Module 2 : Pranayama, Shatkriyas & Anatomie Énergétique",
        "subtitle": "La Science du Contrôle du Prana & Canaux Subtils",
        "description": "Le souffle relie le corps à l'esprit. Maîtrisez Nadi Shodhana, Kapalabhati, Bhastrika, Ujjayi, ainsi que les kriyas purificateurs (Jala Neti, Nauli). Découvrez le fonctionnement des 72 000 nadis, des 7 chakras principaux et des cinq vayus."
      },
      {
        "title": "Module 3 : Anatomie Appliquée & Biomécanique Fonctionnelle",
        "subtitle": "La Science Occidentale Rencontre la Sagesse Somatique",
        "description": "Comprenez le système musculo-squelettique, les articulations et les fascias. Distinguez la compression osseuse de la tension musculaire pour prévenir les blessures et adapter chaque posture avec discernement."
      },
      {
        "title": "Module 4 : Philosophie du Yoga, Textes Anciens & Éthique",
        "subtitle": "Vivre la Sagesse de Patanjali & de la Bhagavad Gita",
        "description": "Explorez les Yoga Sutras de Patanjali et les huit membres de l'Ashtanga Yoga. Approfondissez les concepts d'Ahimsa, Satya et Svadhyaya ainsi que les voies du Karma, Bhakti et Jnana Yoga."
      },
      {
        "title": "Module 5 : Méthodologie d'Enseignement & Ajustements Manuels",
        "subtitle": "De la Pratique Personnelle à la Pédagogie Inspirée",
        "description": "Apprenez à concevoir des séquences équilibrées et cohérentes. Développez une voix claire, une présence confiante et pratiquez des ajustements manuels bienveillants dès votre première semaine de formation."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriyas Matinaux & Purification Shatkarma",
        "time": "06h00 – 06h30",
        "description": "Éveil des voies respiratoires par Jala Neti, Kapalabhati et infusions ayurvédiques."
      },
      {
        "title": "Pranayama & Méditation Silencieuse",
        "time": "06h30 – 07h30",
        "description": "Respiration consciente, pratique des bandhas et méditation au lever du soleil."
      },
      {
        "title": "Laboratoire d'Asanas Dynamiques & Alignement",
        "time": "07h30 – 09h00",
        "description": "Pratique physique intensive, analyse biomécanique et transitions fluides."
      },
      {
        "title": "Atelier d'Anatomie & Ajustements Manuels",
        "time": "15h00 – 16h30",
        "description": "Clinique d'ajustement en binôme, éthique du toucher et guidage verbal."
      },
      {
        "title": "Chants Védiques du Soir, Kirtan & Satsang",
        "time": "18h00 – 19h00",
        "description": "Chants traditionnels de mantras en sanskrit et échanges philosophiques."
      }
    ]
  },
  "es": {
    "badge": "Rigor Académico y Profundidad Espiritual",
    "title": "Plan de Estudios Integral y Módulos Académicos",
    "subtitle": "Nuestro plan de estudios avalado por Yoga Alliance une la sadhana tradicional del Himalaya con la biomecánica, filosofía y metodología pedagógica contemporánea.",
    "coreBadge": "Módulo Principal",
    "dailyBadge": "Disciplinas Diarias Inmersivas",
    "dailyTitle": "Sadhana Diaria en el Ashram y Componentes Prácticos",
    "dailyDesc": "La verdadera enseñanza del yoga requiere inmersión viva. Cada día está diseñado para cultivar el silencio interior y la claridad mental en el ambiente sereno de nuestro ashram de Tapovan.",
    "scheduleTag": "Incluido en el horario diario del ashram",
    "modules": [
      {
        "title": "Módulo 1: Práctica Clásica de Asanas y Alineación Precisa",
        "subtitle": "Mecánica Postural desde sus Cimientos",
        "description": "Uniendo Hatha tradicional y Ashtanga Vinyasa, analizamos más de 75 posturas para enseñar una alineación segura y adaptada a la estructura ósea de cada alumno (Sthira Sukham Asanam)."
      },
      {
        "title": "Módulo 2: Pranayama, Shatkriyas y Anatomía Energética",
        "subtitle": "La Ciencia del Prana y los Canales Sutiles",
        "description": "Domina técnicas respiratorias como Nadi Shodhana, Kapalabhati, Bhastrika y Ujjayi, junto a kriyas como Jala Neti. Comprende los 72.000 nadis, los chakras principales y los vayus."
      },
      {
        "title": "Módulo 3: Anatomía Aplicada y Biomecánica Funcional",
        "subtitle": "Ciencia Médica y Sabiduría Corporal",
        "description": "Estudio del sistema musculoesquelético y fascias. Distingue compresión ósea de tensión muscular para prevenir lesiones y adaptar posturas a todo tipo de cuerpos."
      },
      {
        "title": "Módulo 4: Filosofía del Yoga, Textos Clásicos y Ética",
        "subtitle": "Viviendo las Enseñanzas de Patanjali y el Bhagavad Gita",
        "description": "Estudio de los Yoga Sutras de Patanjali, los ocho pasos del yoga (Yamas y Niyamas) y los caminos del Karma, Bhakti y Jnana Yoga para una vida consciente."
      },
      {
        "title": "Módulo 5: Metodología de Enseñanza y Ajustes Manuales",
        "subtitle": "De la Práctica Individual al Liderazgo Pedagógico",
        "description": "Aprende a secuenciar clases inteligentes de 60 a 90 minutos con voz firme, presencia pedagógica y ajustes manuales respetuosos mediante prácticas en clase desde la primera semana."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriyas Matutinos y Limpieza Shatkarma",
        "time": "06:00 – 06:30",
        "description": "Despertar de las vías respiratorias con Jala Neti, Kapalabhati e infusiones herbales."
      },
      {
        "title": "Pranayama y Meditación Silenciosa",
        "time": "06:30 – 07:30",
        "description": "Regulación de la respiración, bandhas y meditación durante el amanecer del Himalaya."
      },
      {
        "title": "Laboratorio de Asanas Dinámicas y Alineación",
        "time": "07:30 – 09:00",
        "description": "Práctica postural intensiva, alineación funcional y transiciones seguras."
      },
      {
        "title": "Clínica de Anatomía y Práctica de Ajustes",
        "time": "15:00 – 16:30",
        "description": "Prácticas de alineación en parejas, ética del tacto y guía verbal de posturas."
      },
      {
        "title": "Cantos Védicos al Atardecer, Kirtan y Satsang",
        "time": "18:00 – 19:00",
        "description": "Canto de mantras sagrados en sánscrito y diálogo filosófico con nuestros maestros."
      }
    ]
  },
  "ja": {
    "badge": "学問の厳格さと精神の深遠さ",
    "title": "網羅的なカリキュラム＆学習モジュール",
    "subtitle": "全米ヨガアライアンス認定カリキュラムに基づき、ヒマラヤ伝統のサーダナ、現代バイオメカニクス、哲学、指導法を体系的に学びます。",
    "coreBadge": "主要モジュール",
    "dailyBadge": "日々の集中修練",
    "dailyTitle": "アシュラムでの日々のサーダナ＆実践カリキュラム",
    "dailyDesc": "本物のヨガ教育は体験を通してのみ身につきます。タポヴァン・アシュラムの規則正しい環境で過ごすことで、知識が生きた実感へと昇華されます。",
    "scheduleTag": "アシュラムの日課に含まれます",
    "modules": [
      {
        "title": "モジュール1：伝統的アーサナの習熟と精密なアライメント",
        "subtitle": "基礎から極めるアーサナのバイオメカニクス",
        "description": "古典ハタヨガとダイナミックなアシュタンガ・ヴィンヤサを融合。75種類以上の基本・中級ポーズを解剖学的に分解し、骨格の違いに応じた安全なアライメント指導を習得します。"
      },
      {
        "title": "モジュール2：プラーナヤーマ、シャットクリヤ＆微細解剖学",
        "subtitle": "プラーナ制御と微細エネルギーの科学",
        "description": "ナディ・ショーダナ、カパラバティ、バストリカ、ウジャイなどの古典呼吸法と、ジャラ・ネティ等の浄化法を習得。72,000のナディ、7つのチャクラ、5つのヴァーユの理論を深く学びます。"
      },
      {
        "title": "モジュール3：応用解剖学と機能バイオメカニクス",
        "subtitle": "西洋医学と東洋の身体叡智の統合",
        "description": "骨格、関節、筋膜、脊椎の構造を理解。骨の圧迫と筋肉の緊張の違いを見極め、怪我を予防しながら安全に生徒を導く実践的解剖学を学びます。"
      },
      {
        "title": "モジュール4：ヨガ哲学、古典文献＆ライフスタイル",
        "subtitle": "パタンジャリとバガヴァッド・ギーターの智慧を生きる",
        "description": "ヨーガ・スートラの八支則（ヤマ・ニヤマ等）を現代の文脈で探求。カルマ・ヨガ、バクティ・ヨガ、ジュニャーナ・ヨガを学び、精神的な基盤を確立します。"
      },
      {
        "title": "モジュール5：指導法、シークエンス構築＆アジャストメント",
        "subtitle": "実践者から確信と温かみある指導者へ",
        "description": "60〜90分のクラスシークエンス構築法、明確な声の誘導、身体に負担をかけないアジャスト技術を習得。第1週目から模擬レッスンを実践します。"
      }
    ],
    "practicalItems": [
      {
        "title": "朝のクリヤ法＆シャットカルマ浄化",
        "time": "06:00 – 06:30",
        "description": "ジャラ・ネティとカパラバティ、温かいハーブティーで呼吸器官を清めます。"
      },
      {
        "title": "プラーナヤーマ＆静寂の瞑想サーダナ",
        "time": "06:30 – 07:30",
        "description": "ヒマラヤの澄んだプラーナを吸収しながら行う古典呼吸法と朝日の中での瞑想。"
      },
      {
        "title": "ダイナミック・アーサナ実習＆アライメント",
        "time": "07:30 – 09:00",
        "description": "正しい身体の使い方、筋肉の活性化、安全なトランジションを学ぶ集中実技。"
      },
      {
        "title": "解剖学クリニック＆手技アジャスト実習",
        "time": "15:00 – 16:30",
        "description": "ペアワークを通じたアライメント確認、触覚倫理、口頭指示の実践練習。"
      },
      {
        "title": "夕べのサンスクリット・チャンティング＆サットサング",
        "time": "18:00 – 19:00",
        "description": "伝統的なマントラ詠唱とキールタン、講師陣との哲学的な対話の時間。"
      }
    ]
  },
  "ko": {
    "badge": "학문적 엄격함과 영적 깊이",
    "title": "포괄적인 교육 과정 및 학술 모듈",
    "subtitle": "요가 얼라이언스 공인 커리큘럼을 통해 히말라야 정통 사다나, 최신 생체역학, 철학 및 전문 지도법을 체계적으로 이수합니다.",
    "coreBadge": "핵심 모듈",
    "dailyBadge": "일일 몰입 수행 규율",
    "dailyTitle": "일일 아쉬람 사다나 및 실기 수련 구성",
    "dailyDesc": "진정한 요가 교육은 직접 체득하는 경험에서 비롯됩니다. 타포반 아쉬람의 규율 있는 리듬에 몰입함으로써 배운 지식이 삶의 지혜로 체화됩니다.",
    "scheduleTag": "일일 아쉬람 일정에 포함",
    "modules": [
      {
        "title": "모듈 1: 고전 아사나 수련 및 정밀 정렬",
        "subtitle": "기초부터 완성하는 아사나 생체역학",
        "description": "전통 하타 요가와 역동적인 아쉬탕가 빈야사를 융합하여 75가지 이상의 기본 및 중급 아사나를 골격 특성에 맞춰 안전하게 지도하는 방법을 배웁니다."
      },
      {
        "title": "모듈 2: 프라나야마, 샷크리야 및 에너지 해부학",
        "subtitle": "프라나 조절과 미세 통로의 과학",
        "description": "나디 쇼다나, 카팔바티, 바스트리카 등 고전 호흡법과 잘라 네티 정화법을 익히고 72,000 나디, 차크라, 바유 체계를 깊이 이해합니다."
      },
      {
        "title": "모듈 3: 응용 해부학 및 기능 생체역학",
        "subtitle": "서양 의학 과학과 동양 신체 지혜의 만남",
        "description": "근골격계, 관절, 근막 구조를 분석하고 골격 압박과 연부 조직 긴장의 차이를 학습하여 부상을 방지하고 체형별 맞춤 지도를 익힙니다."
      },
      {
        "title": "모듈 4: 요가 철학, 고전 경전 및 생활양식",
        "subtitle": "파탄잘리와 바가바드 기타의 지혜 실천",
        "description": "요가 수트라의 8단계 경로(야마, 니야마 등)와 바가바드 기타의 카르마, 박티, 즈냐나 요가를 일상에서 실천하는 법을 배웁니다."
      },
      {
        "title": "모듈 5: 지도 방법론, 시퀀싱 및 핸즈온 어시스트",
        "subtitle": "수련생에서 자신감 넘치는 지도자로의 도약",
        "description": "60~90분 수업 시퀀스 구성, 명확한 음성 큐잉, 안전하고 정중한 핸즈온 어시스트 기법을 첫 주부터 동료 피드백을 통해 훈련합니다."
      }
    ],
    "practicalItems": [
      {
        "title": "아침 크리야 및 샷카르마 정화",
        "time": "06:00 – 06:30",
        "description": "잘라 네티와 카팔바티, 따뜻한 허브차로 호흡기를 깨우는 아침 정화 루틴."
      },
      {
        "title": "프라나야마 및 고요한 명상 사다나",
        "time": "06:30 – 07:30",
        "description": "히말라야의 신선한 프라나를 호흡하며 진행하는 고전 호흡법 및 일출 명상."
      },
      {
        "title": "동적 아사나 정렬 및 빈야사 랩",
        "time": "07:30 – 09:00",
        "description": "신체 정렬선, 근육 활성화 및 전환 동작을 정밀하게 분석하는 집중 실기."
      },
      {
        "title": "해부학 클리닉 및 핸즈온 교정 실습",
        "time": "15:00 – 16:30",
        "description": "짝을 이룬 정렬 실습, 터치 에티켓 및 언어적 큐잉 집중 연습."
      },
      {
        "title": "저녁 찬팅, 키르탄 및 사트상",
        "time": "18:00 – 19:00",
        "description": "전통 산스크리트 만트라 찬팅, 소리 명상 및 스승과의 철학적 질의응답."
      }
    ]
  },
  "zh": {
    "badge": "严谨学术与深厚灵性",
    "title": "全面教学大纲与学术模块",
    "subtitle": "全美瑜伽联盟认证体系，系统融合喜马拉雅传统修行、循证生物力学、古典哲学及专业导师教学法。",
    "coreBadge": "核心模块",
    "dailyBadge": "每日沉浸式修习纪律",
    "dailyTitle": "阿育吠陀静修院每日修行与实操训练",
    "dailyDesc": "真正的瑜伽教学源于亲身实践。在塔波万静修院规律的环境中，远离尘嚣，将深奥的理论内化为身体的觉知与直觉。",
    "scheduleTag": "包含在静修院每日日程中",
    "modules": [
      {
        "title": "模块一：经典体式修习与精准正位",
        "subtitle": "从根基掌握体式生物力学机制",
        "description": "融合经典哈他与流动的阿斯汤加，系统拆解75个以上基础与进阶体式。依据个人骨骼差异提供安全正位指导与辅具运用（Sthira Sukham Asanam）。"
      },
      {
        "title": "模块二：调息法、清洁法与微妙能量解剖学",
        "subtitle": "生命能量控制与微妙脉道的科学",
        "description": "深入修习交替鼻孔呼吸法、头颅光明呼吸法、蜂鸣呼吸法与涅涕清洁法。解析72,000脉道、七大脉轮与五种主要能量风（Vayus）。"
      },
      {
        "title": "模块三：应用解剖学与功能生物力学",
        "subtitle": "现代西方医学融合东方身心智慧",
        "description": "探讨骨骼肌肉、关节结构与肌膜系统。准确区分骨骼挤压与软组织紧张，掌握避免运动损伤与因材施教的解剖原则。"
      },
      {
        "title": "模块四：瑜伽哲学、经典文献与生活之道",
        "subtitle": "践行帕坦伽利与薄伽梵歌的智慧",
        "description": "深度研读《瑜伽经》八支法则（持戒、精进等），以及《薄伽梵歌》业报、奉爱与智瑜伽之道，奠定坚实的精神导师底蕴。"
      },
      {
        "title": "模块五：教学法、编排逻辑与手法调整",
        "subtitle": "从自修者蜕变为自信从容的专业导师",
        "description": "掌握60至90分钟完整课程的逻辑编排，锻炼清晰的口头指令与安全得体的手法辅助。第一周起即开展模拟试讲实践。"
      }
    ],
    "practicalItems": [
      {
        "title": "晨间清洁法与净道仪式",
        "time": "06:00 – 06:30",
        "description": "通过涅涕洗鼻法、头颅光明呼吸法及温热草本茶唤醒呼吸通道。"
      },
      {
        "title": "调息法与静默冥想修习",
        "time": "06:30 – 07:30",
        "description": "沐浴喜马拉雅纯净晨间能量，练习经典呼吸控制法与日出静坐。"
      },
      {
        "title": "动态体式正位与流瑜伽实操",
        "time": "07:30 – 09:00",
        "description": "高强度体式精进练习，细致剖析肌肉发力点、正位线与过渡动作。"
      },
      {
        "title": "解剖学工坊与手法调整实操",
        "time": "15:00 – 16:30",
        "description": "搭档辅助练习、触碰伦理规范与口头提示词精准度训练。"
      },
      {
        "title": "晚间梵文唱诵、奉爱之歌与灵性答疑",
        "time": "18:00 – 19:00",
        "description": "传统的梵文曼陀罗唱诵与静修院资深导师哲学问答交流。"
      }
    ]
  },
  "ru": {
    "badge": "Академическая Глубина и Духовность",
    "title": "Полная Учебная Программа и Модули",
    "subtitle": "Программа, сертифицированная Yoga Alliance, объединяет гималайскую садхану, биомеханику, философию и методику преподавания.",
    "coreBadge": "Основной модуль",
    "dailyBadge": "Ежедневная Практика",
    "dailyTitle": "Распорядок Дня в Ашраме и Практические Занятия",
    "dailyDesc": "Подлинное обучение йоге основано на личном опыте. В спокойной атмосфере ашрама в Таповане знания превращаются в глубокую внутреннюю мудрость.",
    "scheduleTag": "Включено в ежедневный распорядок ашрама",
    "modules": [
      {
        "title": "Модуль 1: Классическая практика асан и точная отстройка",
        "subtitle": "Биомеханика движений с фундаментальных основ",
        "description": "Изучение более 75 поз классической хатха-йоги и виньясы с учетом индивидуальных анатомических особенностей каждого ученика."
      },
      {
        "title": "Модуль 2: Пранаяма, шаткрийи и тонкая анатомия",
        "subtitle": "Наука управления праной и энергетическими каналами",
        "description": "Освоение Нади Шодхана, Капалабхати, Бхастрики и очистительных практик (Джала Нети). Изучение 72 000 нади, чакр и пяти вайю."
      },
      {
        "title": "Модуль 3: Прикладная анатомия и биомеханика",
        "subtitle": "Западная наука и восточная мудрость тела",
        "description": "Анализ мышечно-скелетной системы и фасций. Различие между костной компрессией и натяжением связок для безопасной практики."
      },
      {
        "title": "Модуль 4: Философия йоги, классические тексты и образ жизни",
        "subtitle": "Мудрость Патанджали и Бхагавад-гиты",
        "description": "Изучение Йога-сутр Патанджали, восьми ступеней йоги (Яма, Нияма), а также путей Карма-, Бхакти- и Джнана-йоги."
      },
      {
        "title": "Модуль 5: Методология преподавания и правки асан",
        "subtitle": "От личной практики к уверенному ведению классов",
        "description": "Построение логичных занятий от 60 до 90 минут, четкие голосовые инструкции и бережные тактильные правки с первой недели."
      }
    ],
    "practicalItems": [
      {
        "title": "Утренние крийи и очищение шаткарма",
        "time": "06:00 – 06:30",
        "description": "Очищение дыхательных путей с Джала Нети, Капалабхати и травяным чаем."
      },
      {
        "title": "Пранаяма и тихая медитация на рассвете",
        "time": "06:30 – 07:30",
        "description": "Дыхательные техники, бандхи и медитация в чистом горном воздухе."
      },
      {
        "title": "Динамическая практика асан и отстройка",
        "time": "07:30 – 09:00",
        "description": "Глубокая физическая практика, разбор биомеханики и переходов."
      },
      {
        "title": "Анатомический класс и практика правок",
        "time": "15:00 – 16:30",
        "description": "Работа в парах, этика прикосновений и постановка командного голоса."
      },
      {
        "title": "Вечернее пение мантр, киртан и сатсанг",
        "time": "18:00 – 19:00",
        "description": "Традиционные мантры на санскрите и беседы о философии йоги."
      }
    ]
  },
  "it": {
    "badge": "Rigore Accademico e Profondità Spirituale",
    "title": "Programma Didattico Completo e Moduli Accademici",
    "subtitle": "Il nostro programma registrato Yoga Alliance combina la sadhana tradizionale dell'Himalaya con la moderna biomeccanica, la filosofia e la metodologia didattica.",
    "coreBadge": "Modulo Fondamentale",
    "dailyBadge": "Discipline Immersive Quotidiane",
    "dailyTitle": "Sadhana Quotidiana all'Ashram e Formazione Pratica",
    "dailyDesc": "La vera comprensione dello yoga nasce dall'esperienza diretta. Nel ritmo disciplinato del nostro ashram a Tapovan, la teoria si trasforma in consapevolezza vissuta.",
    "scheduleTag": "Incluso nel programma giornaliero dell'ashram",
    "modules": [
      {
        "title": "Modulo 1: Pratica Classica degli Asana e Allineamento di Precisione",
        "subtitle": "Meccanica Posturale dalle Basi",
        "description": "Unendo Hatha classico e Ashtanga Vinyasa, scomponiamo oltre 75 posture per insegnare allineamenti sicuri e personalizzati per ogni conformazione ossea."
      },
      {
        "title": "Modulo 2: Pranayama, Shatkriya e Anatomia Energetica",
        "subtitle": "La Scienza del Respiro e dei Canali Sottili",
        "description": "Pratica di Nadi Shodhana, Kapalabhati, Bhastrika e Ujjayi con tecniche di purificazione come Jala Neti. Studio dei 72.000 nadis, chakra e vayus."
      },
      {
        "title": "Modulo 3: Anatomia Applicata e Biomeccanica Funzionale",
        "subtitle": "Scienza Occidentale e Sapienza Somatica",
        "description": "Studio del sistema muscolo-scheletrico e delle fasce. Distinzione tra compressione scheletrica e tensione per prevenire infortuni."
      },
      {
        "title": "Modulo 4: Filosofia dello Yoga, Testi Classici ed Etica",
        "subtitle": "Vivere la Saggezza di Patanjali e della Bhagavad Gita",
        "description": "Studio degli Yoga Sutra, degli otto stadi dell'Ashtanga Yoga e delle vie del Karma, Bhakti e Jnana Yoga per una vita consapevole."
      },
      {
        "title": "Modulo 5: Metodologia di Insegnamento e Aggiustamenti Manuali",
        "subtitle": "Dalla Pratica Personale alla Guida Sicura",
        "description": "Sequenze intelligenti da 60 a 90 minuti, voce sicura, indicazioni verbali chiare e aggiustamenti manuali rispettosi con esercitazioni sin dalla prima settimana."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriya Mattutini e Purificazione Shatkarma",
        "time": "06:00 – 06:30",
        "description": "Risveglio delle vie respiratorie con Jala Neti, Kapalabhati e tisane calde."
      },
      {
        "title": "Pranayama e Meditazione Silenziosa",
        "time": "06:30 – 07:30",
        "description": "Controllo del respiro, bandha e meditazione all'alba himalayana."
      },
      {
        "title": "Laboratorio di Asana Dinamici e Allineamento",
        "time": "07:30 – 09:00",
        "description": "Pratica fisica intensa con analisi dell'allineamento e transizioni."
      },
      {
        "title": "Clinica di Anatomia e Pratica di Aggiustamenti",
        "time": "15:00 – 16:30",
        "description": "Lavoro a coppie, etica del tocco e correzioni posturali."
      },
      {
        "title": "Canti Vedici Serali, Kirtan e Satsang",
        "time": "18:00 – 19:00",
        "description": "Mantra in sanscrito e approfondimenti filosofici con i maestri."
      }
    ]
  },
  "nl": {
    "badge": "Academische Diepgang & Spirituele Zuiverheid",
    "title": "Volledig Curriculum & Academische Modules",
    "subtitle": "Ons bij Yoga Alliance geregistreerde curriculum combineert traditionele Himalaya-sadhana met evidence-based biomechanica, filosofie en professionele lesmethodiek.",
    "coreBadge": "Kernmodule",
    "dailyBadge": "Dagelijkse Verdiepende Disciplines",
    "dailyTitle": "Dagelijkse Ashram Sadhana & Praktische Trainingselementen",
    "dailyDesc": "Echt yoga-onderwijs vraagt om doorleefde ervaring. Elke dag is opgebouwd om innerlijke stilte, fysieke kracht en subtiele aandacht te ontwikkelen in onze ashram in Tapovan.",
    "scheduleTag": "Onderdeel van het dagelijkse ashramschema",
    "modules": [
      {
        "title": "Module 1: Klassieke Asana-beoefening & Nauwkeurige Uitlijning",
        "subtitle": "Biomechanica van Asana's van Basis tot Meesterschap",
        "description": "We combineren klassieke Hatha Yoga met vloeiende Ashtanga Vinyasa. Leer meer dan 75 houdingen biomechanisch analyseren met respect voor individuele botstructuren."
      },
      {
        "title": "Module 2: Pranayama, Shatkriya's & Energetische Anatomie",
        "subtitle": "De Wetenschap van Ademkracht & Subtiele Kanalen",
        "description": "Beheers technieken zoals Nadi Shodhana, Kapalabhati, Bhastrika en Ujjayi, evenals zuiverende kriya's zoals Jala Neti. Begrijp de 72.000 nadi's, chakra's en vayu's."
      },
      {
        "title": "Module 3: Toegepaste Anatomie & Functionele Biomechanica",
        "subtitle": "Westerse Wetenschap ontmoet Oosterse Lichaamswijsheid",
        "description": "Onderzoek botten, gewrichten en fascia. Begrijp het verschil tussen botcompressie en weefselspanning om blessures te voorkomen en houdingen veilig aan te passen."
      },
      {
        "title": "Module 4: Yogafilosofie, Klassieke Geschriften & Levensstijl",
        "subtitle": "Leef de Wijsheid van Patanjali & de Bhagavad Gita",
        "description": "Bestudeer de Yoga Sutra's van Patanjali, het achtledige pad (Yama's en Niyama's) en de wegen van Karma, Bhakti en Jnana Yoga voor een bewuste levenshouding."
      },
      {
        "title": "Module 5: Lesmethodiek, Lesopbouw & Hands-On Aanpassingen",
        "subtitle": "Van Eigen Beoefening naar Zelfverzekerd Lesgeven",
        "description": "Leer doordachte lessen van 60 tot 90 minuten samenstellen met duidelijke stembegeleiding, respectvolle fysieke aanpassingen en praktijkoefeningen vanaf week 1."
      }
    ],
    "practicalItems": [
      {
        "title": "Ochtend Kriya's & Shatkarma Zuivering",
        "time": "06:00 – 06:30 uur",
        "description": "Vrijmaken van de luchtwegen met Jala Neti, Kapalabhati en warme kruidenthee."
      },
      {
        "title": "Pranayama & Stille Meditatie Sadhana",
        "time": "06:30 – 07:30 uur",
        "description": "Ademhalingsoefeningen, bandha's en stille meditatie tijdens de zonsopgang."
      },
      {
        "title": "Dynamisch Asana Lab & Uitlijning",
        "time": "07:30 – 09:00 uur",
        "description": "Intensieve fysieke asana-training met biomechanische houdingsanalyses."
      },
      {
        "title": "Anatomie-Kliniek & Hands-On Correcties",
        "time": "15:00 – 16:30 uur",
        "description": "Oefenen in tweetallen, aanraakethiek en verbale instructies."
      },
      {
        "title": "Avond Chanten, Kirtan & Satsang",
        "time": "18:00 – 19:00 uur",
        "description": "Sanskriet mantra-zingen, klankresonantie en filosofische gesprekken."
      }
    ]
  },
  "id": {
    "badge": "Ketelitian Akademik & Kedalaman Spiritual",
    "title": "Kurikulum Komprehensif & Modul Akademik",
    "subtitle": "Kurikulum terdaftar Yoga Alliance kami memadukan sadhana Himalaya tradisional dengan biomekanika modern, filosofi, dan metodologi pengajaran profesional.",
    "coreBadge": "Modul Utama",
    "dailyBadge": "Disiplin Imersif Harian",
    "dailyTitle": "Sadhana Harian Ashram & Komponen Pelatihan Praktis",
    "dailyDesc": "Pendidikan yoga autentik membutuhkan pengalaman nyata. Setiap hari dirancang untuk membina keheningan batin, ketahanan fisik, dan kepekaan indra di ashram Tapovan kami.",
    "scheduleTag": "Termasuk dalam jadwal harian ashram",
    "modules": [
      {
        "title": "Modul 1: Latihan Asana Klasik & Penyelarasan Presisi",
        "subtitle": "Menguasai Mekanika Asana dari Dasar",
        "description": "Menjembatani Hatha tradisional dan Ashtanga Vinyasa, mempelajari lebih dari 75 postur secara biomekanis agar aman dan sesuai dengan variasi tubuh setiap siswa."
      },
      {
        "title": "Modul 2: Pranayama, Shatkriya & Anatomi Energi",
        "subtitle": "Ilmu Pengendalian Prana & Saluran Halus",
        "description": "Kuasai teknik pernapasan klasik seperti Nadi Shodhana, Kapalabhati, Bhastrika, serta kriya pembersihan seperti Jala Neti. Pelajari 72.000 nadi, cakra, dan vayu."
      },
      {
        "title": "Modul 3: Anatomi Terapan & Biomekanika Fungsional",
        "subtitle": "Ilmu Pengetahuan Modern Bertemu Kearifan Tubuh",
        "description": "Pahami sistem otot, sendi, dan fasia untuk membedakan kompresi tulang dan ketegangan otot agar dapat mencegah cedera saat mengajar."
      },
      {
        "title": "Modul 4: Filosofi Yoga, Teks Klasik & Gaya Hidup",
        "subtitle": "Menghayati Kebijaksanaan Patanjali & Bhagavad Gita",
        "description": "Pelajari Yoga Sutra Patanjali, delapan cabang yoga, serta jalur Karma, Bhakti, dan Jnana Yoga sebagai landasan hidup berkesadaran."
      },
      {
        "title": "Modul 5: Metodologi Pengajaran & Penyesuaian Sentuhan",
        "subtitle": "Dari Praktisi Pribadi Menjadi Guru yang Percaya Diri",
        "description": "Rancang kelas 60–90 menit yang runtut dengan intonasi suara percaya diri dan penyesuaian tubuh yang aman melalui latihan mengajar langsung sejak minggu pertama."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriya Pagi & Pembersihan Shatkarma",
        "time": "06.00 – 06.30",
        "description": "Membuka saluran pernapasan dengan Jala Neti, Kapalabhati, dan teh herbal hangat."
      },
      {
        "title": "Pranayama & Sadhana Meditasi Hening",
        "time": "06.30 – 07.30",
        "description": "Pengaturan napas klasik, bandha, dan meditasi saat fajar di pegunungan Himalaya."
      },
      {
        "title": "Laboratorium Asana Dinamis & Penyelarasan",
        "time": "07.30 – 09.00",
        "description": "Latihan fisik intensif yang menganalisis postur, aktivasi otot, dan transisi aman."
      },
      {
        "title": "Klinik Anatomi & Praktik Penyesuaian Sentuhan",
        "time": "15.00 – 16.30",
        "description": "Latihan berpasangan, etika sentuhan, dan panduan aba-aba verbal yang jelas."
      },
      {
        "title": "Pelantunan Mantra Malam, Kirtan & Satsang",
        "time": "18.00 – 19.00",
        "description": "Lantunan mantra Sanskerta tradisional dan sesi tanya jawab filosofis bersama acharya."
      }
    ]
  }
};

export const STUDY_GUIDE_VARKALA: Record<string, StudyGuideData> = {
  "en": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Module 1: Classical Hatha & Dynamic Ashtanga Asana Lab",
        "subtitle": "Biomechanical Foundations, Alignment & Modifications",
        "description": "Master foundational standing, seated, twisting, backbending, and inverted postures. Explore classical Hatha alignments and the complete Ashtanga Primary Series with dynamic breath cues, drishti focus, and intelligent prop integrations for safe joint longevity."
      },
      {
        "title": "Module 2: Pranayama, Shatkriyas & Respiratory Mastery",
        "subtitle": "Harnessing Prana with Coastal Ocean Air",
        "description": "Master traditional cleansing shatkriyas (Jala Neti, Kapalbhati, Agnisara) and classical breathwork (Nadi Shodhana with ratios, Bhastrika, Surya/Chandra Bhedi, and cooling Sitali). Learn how marine air rich in negative ions enhances oxygen uptake and soothes the nervous system."
      },
      {
        "title": "Module 3: Functional Anatomy & Joint Biomechanics",
        "subtitle": "Anatomy of Movement, Spine Health & Injury Prevention",
        "description": "Study skeletal variations, fascial planes, pelvic stability, spinal decompression, and shoulder girdle dynamics. Understand compression versus tension, preventing hamstring/knee strains, and tailoring postures to diverse student body types."
      },
      {
        "title": "Module 4: Yoga Philosophy & Patanjali's Yoga Sutras",
        "subtitle": "Living the Eight Limbs & Ancient Vedic Wisdom",
        "description": "Immerse in the timeless philosophy of Patanjali's Yoga Sutras, exploring Yamas, Niyamas, and the journey toward Samadhi. Contrast the Bhagavad Gita's four yogic paths (Karma, Jnana, Bhakti, Raja) and learn to embody spiritual ethics in modern daily life."
      },
      {
        "title": "Module 5: Teaching Methodology & Confident Sequencing",
        "subtitle": "Voice Modulation, Class Structuring & Room Management",
        "description": "Learn to construct intelligent 60-to-90-minute class arcs with thematic peak-pose progressions and grounding counter-postures. Practice verbal cueing, pacing, non-intrusive assists, and trauma-informed adjustments through daily peer-teaching clinics from Week 2."
      },
      {
        "title": "Module 6: Meditation, Mantra & Sound Resonance",
        "subtitle": "Cultivating Inner Stillness (Dharana & Dhyana)",
        "description": "Practice Japa mala chanting, Vedic mantra recitation, Trataka candle gazing, and breath-focused mindfulness. Experience deep restorative Yoga Nidra and sound immersion tuned to the soothing natural frequency of ocean waves."
      },
      {
        "title": "Module 7: Mudras, Bandhas & Energetic Anatomy",
        "subtitle": "The Subtle Body, Nadis & Chakra Awakening",
        "description": "Explore the 72,000 Nadis (Ida, Pingala, Sushumna), 7 Major Chakras, 5 Koshas, and 5 Prana Vayus. Master the three great locks (Mula, Uddiyana, Jalandhara Bandha) and Hasta Mudras to seal and direct subtle vital energy."
      },
      {
        "title": "Module 8: Hands-On Adjustments & Body Reading",
        "subtitle": "Anatomical Touch, Ethics & Assistive Labs",
        "description": "Develop tactile sensitivity and biomechanical understanding required for safe physical assists. Learn to read students' structural habits, recognize compensation patterns, and offer respectful modifications with clear consent."
      },
      {
        "title": "Module 9: Yoga Business, Ethics & Digital Marketing",
        "subtitle": "Building a Sustainable Global Yoga Career",
        "description": "Understand Yoga Alliance accreditation guidelines, insurance, studio teaching, and private client management. Learn authentic digital branding, workshop architecture, retreat organizing, and how to cultivate a dedicated student community."
      },
      {
        "title": "Module 10: Teaching Practicum & Master Mentorship",
        "subtitle": "Live Evaluated Classes with Senior Faculty",
        "description": "Lead complete yoga classes independently under the observation of senior E-RYT 500 mentors. Receive constructive feedback on sequencing logic, posture adjustments, presence, and cueing to graduate with total classroom confidence."
      },
      {
        "title": "Module 11: Ayurveda & Panchakarma Basics (Kerala Special)",
        "subtitle": "Constitutional Healing in the Cradle of Ayurveda",
        "description": "Discover Tridoshas (Vata, Pitta, Kapha), Prakriti evaluation, Dinacharya daily rhythms, and Sattvic nutritional therapy. Explore traditional Kerala Panchakarma therapies, herbal pharmacology, and adapting yoga sequences to doshic imbalances."
      },
      {
        "title": "Module 12: Beach & Sunset Yoga Practice",
        "subtitle": "Grounding Nature Immersion & Tidal Flow",
        "description": "Experience grounding barefoot practice along the sands of sacred Papanasam Beach, strengthening foot arches and stability. Practice sunset Yin Yoga and open-horizon gazing (Drishti) on Varkala Cliff decks, harmonizing body and mind with tidal rhythms."
      }
    ],
    "practicalItems": [
      {
        "title": "Morning Kriyas & Coastal Cleansing",
        "time": "6:00 AM – 6:30 AM",
        "description": "Awaken respiratory pathways with Jala Neti, Kapalbhati, and warm herbal tea overlooking the Arabian Sea."
      },
      {
        "title": "Pranayama & Ocean Sunrise Meditation",
        "time": "6:30 AM – 7:30 AM",
        "description": "Absorb vital marine prana and negative ions through classical breath regulation, bandhas, and silent meditation."
      },
      {
        "title": "Dynamic Asana Alignment & Flow",
        "time": "7:30 AM – 9:00 AM",
        "description": "Intensive physical asana practice analyzing posture mechanics, anatomical alignment, transitions, and modifications."
      },
      {
        "title": "Kerala Ayurveda & Anatomy Clinic",
        "time": "3:00 PM – 4:30 PM",
        "description": "Hands-on alignment clinics, partner adjustments, touch ethics, and constitutional Ayurvedic dosha analysis."
      },
      {
        "title": "Sunset Beach Yoga & Sound Healing",
        "time": "5:30 PM – 6:45 PM",
        "description": "Restorative Yin yoga and sound meditation on the cliffside deck as the golden sun sets into the Arabian Sea."
      }
    ]
  },
  "de": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Modul 1: Klassisches Hatha & Dynamisches Ashtanga Asana Labor",
        "subtitle": "Biomechanische Grundlagen, Ausrichtung & Modifikationen",
        "description": "Meistern Sie Stehhaltungen, Sitzhaltungen, Drehungen, Rückbeugen und Umkehrhaltungen mit Atemführung und Hilfsmitteln für gesunde Gelenke."
      },
      {
        "title": "Modul 2: Pranayama, Shatkriyas & Atemkontrolle",
        "subtitle": "Prana-Kultivierung mit ionenreicher Meeresluft",
        "description": "Klassische Reinigungsübungen (Jala Neti, Kapalbhati) und Pranayama (Nadi Shodhana, Bhastrika). Erfahren Sie, wie jodhaltige Meeresluft die Lungenkapazität stärkt."
      },
      {
        "title": "Modul 3: Funktionelle Anatomie & Gelenkbiomechanik",
        "subtitle": "Bewegungsanatomie, Wirbelsäulengesundheit & Verletzungsprävention",
        "description": "Verstehen Sie Skelettvariationen, Beckenstabilität, Dekompression der Wirbelsäule und Schultermechanik zur individuellen Haltungsanpassung."
      },
      {
        "title": "Modul 4: Yogaphilosophie & Patanjalis Yoga Sutras",
        "subtitle": "Der achtgliedrige Pfad & uralte vedische Weisheit",
        "description": "Erforschen Sie Yamas, Niyamas und den Weg zum Samadhi. Verstehen Sie die vier Pfade der Bhagavad Gita im modernen Alltag."
      },
      {
        "title": "Modul 5: Unterrichtsmethodik & Durchdachte Sequenzierung",
        "subtitle": "Stimmführung, Kursaufbau & Raumpräsenz",
        "description": "Lernen Sie 60- bis 90-minütige Yogastunden zu planen, mit verbalen Hinweisen und achtsamen Korrekturen ab Woche 2."
      },
      {
        "title": "Modul 6: Meditation, Mantra & Klangresonanz",
        "subtitle": "Innere Stille kultivieren (Dharana & Dhyana)",
        "description": "Japa-Mala-Chanten, vedische Mantras, Trataka und Yoga Nidra im natürlichen Rhythmus der Meereswellen."
      },
      {
        "title": "Modul 7: Mudras, Bandhas & Energetische Anatomie",
        "subtitle": "Feinstofflicher Körper, Nadis & Chakren",
        "description": "Erkunden Sie 72.000 Nadis, 7 Hauptchakren, Bandhas (Mula, Uddiyana, Jalandhara) und Hasta Mudras zur Energielenkung."
      },
      {
        "title": "Modul 8: Hands-On Hilfestellungen & Körperlesen",
        "subtitle": "Taktile Ethik & Partnerausrichtung",
        "description": "Schulen Sie Ihr Gespür für sichere Berührungen, erkennen Sie Ausweichmuster und passen Sie Haltungen respektvoll an."
      },
      {
        "title": "Modul 9: Yoga-Business, Ethik & Marketing",
        "subtitle": "Aufbau einer nachhaltigen weltweiten Yoga-Karriere",
        "description": "Yoga Alliance Richtlinien, Studio-Management, Retreat-Organisation und authentischer Markenaufbau."
      },
      {
        "title": "Modul 10: Lehrpraxis & Mentorenbegleitung",
        "subtitle": "Live-Unterricht unter Aufsicht erfahrener E-RYT 500 Dozenten",
        "description": "Leiten Sie eigenständig Yogastunden mit konstruktivem Feedback zur Sequenzierung und Präsenz."
      },
      {
        "title": "Modul 11: Ayurveda & Panchakarma Grundlagen (Kerala Spezial)",
        "subtitle": "Konstitutionelle Heilung an der Wiege des Ayurveda",
        "description": "Tridosha-Lehre, persönliche Prakriti-Bestimmung, Dinacharya-Rhythmen und Anpassung von Asanas an Dosha-Ungleichgewichte."
      },
      {
        "title": "Modul 12: Strand- & Sonnenuntergangs-Yoga",
        "subtitle": "Naturverbundenheit & Fluss der Gezeiten",
        "description": "Barfußpraxis am heiligen Papanasam-Strand und Yin-Yoga bei Sonnenuntergang auf den Klippen von Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Morgendliche Kriyas & Küstenreinigung",
        "time": "6:00 AM – 6:30 AM",
        "description": "Befreiung der Atemwege mit Jala Neti und Kräutertee mit Blick auf das Arabische Meer."
      },
      {
        "title": "Pranayama & Sonnenaufgangsmeditation am Ozean",
        "time": "6:30 AM – 7:30 AM",
        "description": "Aufnahme von marinem Prana durch Atemkontrolle und stille Meditation."
      },
      {
        "title": "Dynamisches Asana-Training & Flow",
        "time": "7:30 AM – 9:00 AM",
        "description": "Intensive Haltungsausrichtung, Übergänge und Modifikationen."
      },
      {
        "title": "Kerala Ayurveda & Anatomieklinik",
        "time": "3:00 PM – 4:30 PM",
        "description": "Praktische Partnerausrichtung, taktile Ethik und Dosha-Analyse."
      },
      {
        "title": "Sonnenuntergangs-Strandyoga & Klangschalen",
        "time": "5:30 PM – 6:45 PM",
        "description": "Regeneratives Yin Yoga und Klangmeditation auf den Klippen bei Sonnenuntergang."
      }
    ]
  },
  "fr": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Module 1: Laboratoire d'Asanas : Hatha Classique & Ashtanga Dynamique",
        "subtitle": "Bases Biomécaniques, Alignement & Adaptations",
        "description": "Maîtrisez postures debout, assises, torsions et inversions avec respiration dynamique et accessoires pour préserver les articulations."
      },
      {
        "title": "Module 2: Pranayama, Shatkriyas & Maîtrise Respiratoire",
        "subtitle": "Capter le Prana avec l'Air Marin Côtier",
        "description": "Shatkriyas traditionnels (Jala Neti, Kapalbhati) et techniques de pranayama. L'air marin chargé d'ions négatifs stimule l'oxygénation."
      },
      {
        "title": "Module 3: Anatomie Fonctionnelle & Biomécanique Articulaire",
        "subtitle": "Anatomie du Mouvement, Santé du Dos & Prévention",
        "description": "Comprenez les variations squelettiques, le bassin, la décompression vertébrale et les épaules pour adapter chaque posture."
      },
      {
        "title": "Module 4: Philosophie du Yoga & Yoga Sutras de Patanjali",
        "subtitle": "Les Huit Membres & Sagesse Védique Millénaire",
        "description": "Étudiez les Yamas, Niyamas et le Samadhi. Appliquez les voies de la Bhagavad Gita dans votre vie moderne."
      },
      {
        "title": "Module 5: Méthodologie Pédagogique & Séquençage Fluide",
        "subtitle": "Pose de la Voix, Structure de Séance & Gestion de Salle",
        "description": "Apprenez à concevoir des séances de 60 à 90 minutes avec des instructions précises et des ajustements bienveillants dès la semaine 2."
      },
      {
        "title": "Module 6: Méditation, Mantras & Résonance Sonore",
        "subtitle": "Cultiver le Calme Intérieur (Dharana & Dhyana)",
        "description": "Chants de mantras védiques, Trataka et Yoga Nidra au rythme apaisant des vagues de l'océan."
      },
      {
        "title": "Module 7: Mudras, Bandhas & Anatomie Énergétique",
        "subtitle": "Corps Subtil, Nadis & Réveil des Chakras",
        "description": "Explorez les 72 000 nadis, les 7 chakras majeurs, les bandhas (Mula, Uddiyana) et les mudras pour guider l'énergie vitale."
      },
      {
        "title": "Module 8: Ajustements Manuels & Lecture Corporelle",
        "subtitle": "Éthique du Toucher & Ateliers d'Assistance",
        "description": "Développez un toucher respectueux et sécurisant pour corriger les compensations posturales des élèves avec discernement."
      },
      {
        "title": "Module 9: Entrepreneuriat du Yoga, Éthique & Communication",
        "subtitle": "Construire une Carrière Pérenne dans le Yoga",
        "description": "Critères Yoga Alliance, gestion de cours, organisation de stages et création d'une communauté engagée."
      },
      {
        "title": "Module 10: Pratique d'Enseignement & Mentorat Approfondi",
        "subtitle": "Cours Évalués avec des Formateurs Expérimentés",
        "description": "Enseignez en conditions réelles avec retours constructifs de nos mentors E-RYT 500 pour acquérir une totale assurance."
      },
      {
        "title": "Module 11: Initiation à l'Ayurveda & Panchakarma (Spécial Kerala)",
        "subtitle": "Guérison Constitutionnelle au Berceau de l'Ayurveda",
        "description": "Découvrez les Tridoshas, l'évaluation de la Prakriti, la Dinacharya et l'adaptation des asanas aux profils énergétiques."
      },
      {
        "title": "Module 12: Yoga sur la Plage & au Coucher du Soleil",
        "subtitle": "Immersion Naturelle & Connexion Océanique",
        "description": "Pratique pieds nus sur le sable de la plage sacrée de Papanasam et Yin Yoga au coucher du soleil sur les falaises de Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriyas Matinaux & Purification Côtière",
        "time": "6:00 AM – 6:30 AM",
        "description": "Éveil des voies respiratoires par Jala Neti face à la mer d'Oman."
      },
      {
        "title": "Pranayama & Méditation au Lever du Soleil",
        "time": "6:30 AM – 7:30 AM",
        "description": "Absorption du prana marin et méditation silencieuse."
      },
      {
        "title": "Alignement Postural Dynamique & Vinyasa",
        "time": "7:30 AM – 9:00 AM",
        "description": "Pratique intensive des asanas, biomécanique et transitions."
      },
      {
        "title": "Atelier d'Ayurveda & d'Anatomie du Kerala",
        "time": "3:00 PM – 4:30 PM",
        "description": "Ajustements en binôme, éthique du toucher et analyse des doshas."
      },
      {
        "title": "Yoga au Coucher du Soleil & Bain Sonore",
        "time": "5:30 PM – 6:45 PM",
        "description": "Yin Yoga régénérant et sonothérapie sur la falaise face au coucher du soleil."
      }
    ]
  },
  "es": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Módulo 1: Laboratorio de Asanas: Hatha Clásico y Ashtanga Dinámico",
        "subtitle": "Fundamentos Biomecánicos, Alineación y Modificaciones",
        "description": "Domina posturas de pie, sentadas e invertidas con enfoque anatómico y uso inteligente de accesorios para proteger articulaciones."
      },
      {
        "title": "Módulo 2: Pranayama, Shatkriyas y Maestría Respiratoria",
        "subtitle": "Canalización del Prana con Brisa Marina",
        "description": "Shatkriyas tradicionales (Jala Neti, Kapalbhati) y pranayamas clásicos. El aire marino enriquecido en iones calma el sistema nervioso."
      },
      {
        "title": "Módulo 3: Anatomía Funcional y Biomecánica Articular",
        "subtitle": "Anatomía del Movimiento, Salud Espinal y Prevención",
        "description": "Estudio de variaciones esqueléticas, pelvis y columna vertebral para adaptar posturas con seguridad a todo practicante."
      },
      {
        "title": "Módulo 4: Filosofía del Yoga y Yoga Sutras de Patanjali",
        "subtitle": "Los Ocho Pasos y Sabiduría Védica Ancestral",
        "description": "Explora Yamas, Niyamas y el camino al Samadhi. Aplica las enseñanzas de la Bhagavad Gita en la vida cotidiana."
      },
      {
        "title": "Módulo 5: Metodología Pedagógica y Secuenciación Segura",
        "subtitle": "Modulación de Voz, Estructura y Manejo de Grupo",
        "description": "Aprende a estructurar clases completas de 60 a 90 minutos con voz clara y ajustes manuales respetuosos desde la semana 2."
      },
      {
        "title": "Módulo 6: Meditación, Mantras y Resonancia Sonora",
        "subtitle": "Cultivo de la Quietud Interior (Dharana y Dhyana)",
        "description": "Canto de mantras védicos, Trataka y Yoga Nidra en sintonía con el vaivén natural de las olas del mar."
      },
      {
        "title": "Módulo 7: Mudras, Bandhas y Anatomía Energética",
        "subtitle": "Cuerpo Sutil, Nadis y Despertar de Chakras",
        "description": "Descubre los 72.000 nadis, los 7 chakras mayores, los tres bandhas principales y mudras para dirigir la energía vital."
      },
      {
        "title": "Módulo 8: Ajustes Manuales y Lectura Corporal",
        "subtitle": "Tacto Anatómico, Ética y Prácticas Asistidas",
        "description": "Desarrolla sensibilidad táctil y criterio para ofrecer ajustes manuales seguros y con claro consentimiento."
      },
      {
        "title": "Módulo 9: Emprendimiento del Yoga, Ética y Marketing",
        "subtitle": "Construyendo una Carrera Sostenible en el Yoga",
        "description": "Pautas de Yoga Alliance, administración de clases, organización de retiros y gestión de comunidades."
      },
      {
        "title": "Módulo 10: Prácticas de Enseñanza y Mentoría Experta",
        "subtitle": "Clases Evaluadas en Vivo con Formadores E-RYT 500",
        "description": "Dirige sesiones completas con retroalimentación constructiva sobre presencia, voz y secuenciación."
      },
      {
        "title": "Módulo 11: Ayurveda y Panchakarma Básicos (Especial Kerala)",
        "subtitle": "Sanación Constitucional en la Cuna del Ayurveda",
        "description": "Aprende sobre Tridoshas, evaluación de Prakriti, Dinacharya y adecuación de asanas a los desequilibrios energéticos."
      },
      {
        "title": "Módulo 12: Yoga en la Playa y al Atardecer",
        "subtitle": "Inmersión en la Naturaleza y Ritmo Marino",
        "description": "Práctica descalza sobre la arena de la playa de Papanasam y Yin Yoga al atardecer sobre los acantilados de Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriyas Matutinos y Purificación Costera",
        "time": "6:00 AM – 6:30 AM",
        "description": "Apertura de vías respiratorias con Jala Neti frente al Mar Arábigo."
      },
      {
        "title": "Pranayama y Meditación al Amanecer Marino",
        "time": "6:30 AM – 7:30 AM",
        "description": "Absorción de prana puro y meditación en silencio."
      },
      {
        "title": "Alineación Postural Dinámica y Flujo",
        "time": "7:30 AM – 9:00 AM",
        "description": "Práctica intensiva analizando biomecánica y transiciones."
      },
      {
        "title": "Clínica de Anatomía y Ayurveda de Kerala",
        "time": "3:00 PM – 4:30 PM",
        "description": "Alineación en parejas, ética táctil y análisis de doshas."
      },
      {
        "title": "Yoga al Atardecer y Sanación Sonora",
        "time": "5:30 PM – 6:45 PM",
        "description": "Yin Yoga relajante y terapia de sonido al ponerse el sol en el océano."
      }
    ]
  },
  "ja": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "モジュール 1: 古典ハタ＆ダイナミック・アシュタンガ・アーサナ実習",
        "subtitle": "バイオメカニクスの基礎、アライメントと修正法",
        "description": "立位、座位、ねじり、後屈、逆転の基本ポーズを網羅。骨格に応じた無理のないアライメントとプロップスの活用法を学びます。"
      },
      {
        "title": "モジュール 2: プラーナヤーマ、シャットクリヤ＆呼吸の極意",
        "subtitle": "豊かな潮風とともにプラーナを取り込む",
        "description": "ジャラ・ネティなどの伝統浄化法と古典呼吸法。マイナスイオン豊富な海風が神経系を鎮め、呼吸容量を拡大します。"
      },
      {
        "title": "モジュール 3: 機能解剖学＆関節バイオメカニクス",
        "subtitle": "運動の解剖学、脊椎の健康と傷害予防",
        "description": "骨格の個体差、骨盤の安定性、脊椎の減圧、肩関節の仕組みを理解し、生徒一人ひとりに合わせたポーズ指導法を習得します。"
      },
      {
        "title": "モジュール 4: ヨガ哲学＆パタンジャリのヨーガ・スートラ",
        "subtitle": "八支則と古代ヴェーダの叡智を生きる",
        "description": "ヤマ、ニヤマからサマーディへの歩み。バガヴァッド・ギーターの教えを現代生活に生かす精神的実践法を探求します。"
      },
      {
        "title": "モジュール 5: 指導法とインテリジェントなシークエンス構築",
        "subtitle": "声の抑揚、クラス構成、空間コントロール",
        "description": "60〜90分の完成されたクラス構成、的確な声の誘導、思いやりのあるアジャスト法を2週目からの模擬授業で実践します。"
      },
      {
        "title": "モジュール 6: 瞑想、マントラ＆サウンドヒーリング",
        "subtitle": "内なる静寂を培う（ダーラナ＆ディヤーナ）",
        "description": "ジャパ瞑想、マントラ詠唱、トラタカ、そして波の音に包まれながら行う極上のヨガニードラを体験します。"
      },
      {
        "title": "モジュール 7: ムドラ、バンダ＆エネルギー解剖学",
        "subtitle": "微細身、ナディとチャクラの覚醒",
        "description": "72,000のナディ、主要7チャクラ、三大バンダ（ムーラ、ウディヤナ、ジャーランダラ）、ハスタ・ムドラを深く探求します。"
      },
      {
        "title": "モジュール 8: 手技アジャストメント＆ボディリーディング",
        "subtitle": "触覚の倫理とアシスト実技",
        "description": "生徒の身体の癖を見極め、代償運動を防ぎ、同意に基づいた安全で効果的なアジャスト技術を習得します。"
      },
      {
        "title": "モジュール 9: ヨガビジネス、指導倫理＆マーケティング",
        "subtitle": "持続可能なヨガ指導者キャリアの確立",
        "description": "ヨガアライアンス基準、スタジオ運営、リトリート企画、コミュニティ運営など、プロとしての実践力を身につけます。"
      },
      {
        "title": "モジュール 10: 教育実習＆マスター講師によるメンターシップ",
        "subtitle": "E-RYT 500講師陣によるクラス評価とフィードバック",
        "description": "フルクラスを実際にリードし、講師から的確で建設的なアドバイスを受けて指導への絶対的自信を掴みます。"
      },
      {
        "title": "モジュール 11: アーユルヴェーダ＆パンチャカルマ基礎（ケーララ特別講座）",
        "subtitle": "本場ケーララで学ぶ体質改善と自然治癒",
        "description": "トリドーシャ（ヴァータ、ピッタ、カパ）、体質診断、日課法（ディナチャリヤ）、ドーシャに応じた食事とヨガ指導法。"
      },
      {
        "title": "モジュール 12: ビーチ＆サンセット・ヨガ実践",
        "subtitle": "大自然へのグラウンディングと潮のリズム",
        "description": "聖なるパパナサム・ビーチでの裸足の実践と、ヴァルカラ・クリフから夕日を眺めながら行う陰ヨガで心身を調和させます。"
      }
    ],
    "practicalItems": [
      {
        "title": "朝のクリヤ浄化＆ハーブティー",
        "time": "6:00 AM – 6:30 AM",
        "description": "アラビア海を望みながら行うジャラ・ネティと温かいハーブティー。"
      },
      {
        "title": "プラーナヤーマ＆海辺の朝日瞑想",
        "time": "6:30 AM – 7:30 AM",
        "description": "澄んだ潮風の中で行う古典呼吸法と静寂の瞑想。"
      },
      {
        "title": "ダイナミック・アーサナ実習＆フロー",
        "time": "7:30 AM – 9:00 AM",
        "description": "解剖学的に精密なアライメントとヴィンヤサの実践。"
      },
      {
        "title": "ケーララ・アーユルヴェーダ＆解剖学クリニック",
        "time": "3:00 PM – 4:30 PM",
        "description": "ペアでのアジャスト練習とドーシャ診断の実践。"
      },
      {
        "title": "夕暮れのビーチヨガ＆音響瞑想",
        "time": "5:30 PM – 6:45 PM",
        "description": "断崖の上で夕日を見ながら行う陰ヨガとシンギングボウル。"
      }
    ]
  },
  "ko": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "모듈 1: 클래식 하타 및 역동적 아쉬탕가 아사나 랩",
        "subtitle": "생체역학적 기초, 정렬 및 수정법",
        "description": "서기, 앉기, 비틀기, 후굴, 역자세 등 기본 동작을 분석하고 관절 건강을 지키는 소도구 활용법을 배웁니다."
      },
      {
        "title": "모듈 2: 프라나야마, 샷크리야 및 호흡 완성",
        "subtitle": "청정 해풍과 함께 프라나 조절하기",
        "description": "잘라 네티 등의 정화법과 나디 쇼다나 호흡법. 음이온이 풍부한 해풍이 산소 흡수를 돕고 신경계를 안정시킵니다."
      },
      {
        "title": "모듈 3: 기능 해부학 및 관절 생체역학",
        "subtitle": "움직임 해부학, 척추 건강 및 부상 예방",
        "description": "골격 차이, 골반 안정성, 척추 감압을 이해하여 수련생 맞춤형 아사나를 안전하게 지도합니다."
      },
      {
        "title": "모듈 4: 요가 철학 및 파탄잘리 요가 수트라",
        "subtitle": "8단계 경로와 베다 지혜의 실천",
        "description": "야마와 니야마를 배우고 바가바드 기타의 네 가지 요가 경로를 현대 일상에서 구현합니다."
      },
      {
        "title": "모듈 5: 지도 방법론 및 안전한 시퀀싱",
        "subtitle": "목소리 조절, 수업 구조화 및 공간 관리",
        "description": "60~90분 수업 시퀀스 구성법과 정중한 핸즈온 어시스트 기법을 2주차부터 실습합니다."
      },
      {
        "title": "모듈 6: 명상, 만트라 및 소리 치유",
        "subtitle": "내면의 고요함 가꾸기 (다라나 & 디야나)",
        "description": "자파 명상, 베다 만트라 찬팅, 파도 소리에 맞춘 요가 니드라를 통해 깊은 이완을 체득합니다."
      },
      {
        "title": "모듈 7: 무드라, 반다 및 에너지 해부학",
        "subtitle": "미세 신체, 나디 및 차크라 각성",
        "description": "72,000 나디, 7대 차크라, 세 가지 주요 반다 및 무드라로 생명 에너지를 제어합니다."
      },
      {
        "title": "모듈 8: 핸즈온 어시스트 및 신체 분석",
        "subtitle": "해부학적 터치, 에티켓 및 보조 실습",
        "description": "학생의 보상 동작을 파악하고 동의에 기초한 안전한 교정 기술을 연마합니다."
      },
      {
        "title": "모듈 9: 요가 비즈니스, 윤리 및 마케팅",
        "subtitle": "지속 가능한 글로벌 요가 지도자 경력",
        "description": "요가 얼라이언스 공인 지침, 스튜디오 운영, 워크숍 기획 및 커뮤니티 구축 노하우."
      },
      {
        "title": "모듈 10: 티칭 실습 및 마스터 멘토링",
        "subtitle": "E-RYT 500 마스터 평가 수업",
        "description": "전체 클래스를 직접 리드하고 지도진으로부터 세심한 피드백을 받아 완전한 지도력을 갖춥니다."
      },
      {
        "title": "모듈 11: 아유르베다 및 판차카르마 기초 (케랄라 특화)",
        "subtitle": "아유르베다 본고장에서 배우는 체질 치유",
        "description": "트리도샤 이론, 프라크리티 체질 평가, 디나차리야 생활 습관 및 체질 맞춤 요가 처방."
      },
      {
        "title": "모듈 12: 비치 & 선셋 요가 수련",
        "subtitle": "자연 몰입과 바다 리듬 속 그라운딩",
        "description": "신성한 파파나삼 해변 맨발 수련과 바르칼라 절벽 위에서 펼쳐지는 일몰 인요가."
      }
    ],
    "practicalItems": [
      {
        "title": "아침 크리야 및 해안 정화",
        "time": "6:00 AM – 6:30 AM",
        "description": "아라비아해를 바라보며 잘라 네티와 따뜻한 허브차로 시작하는 하루."
      },
      {
        "title": "프라나야마 & 해변 일출 명상",
        "time": "6:30 AM – 7:30 AM",
        "description": "상쾌한 해풍을 마시며 진행하는 고전 호흡과 고요한 명상."
      },
      {
        "title": "동적 아사나 정렬 및 플로우",
        "time": "7:30 AM – 9:00 AM",
        "description": "생체역학적 분석과 안전한 아사나 연결 실습."
      },
      {
        "title": "케랄라 아유르베다 & 해부학 클리닉",
        "time": "3:00 PM – 4:30 PM",
        "description": "파트너 교정 실습과 체질 분석 연구."
      },
      {
        "title": "일몰 비치 요가 & 사운드 힐링",
        "time": "5:30 PM – 6:45 PM",
        "description": "붉게 물드는 바다를 바라보며 진행하는 인요가와 소리 치유."
      }
    ]
  },
  "zh": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "模块 1: 体式工坊：经典哈他与活力阿斯汤加",
        "subtitle": "生物力学基础、正位原则与变体调整",
        "description": "精研站立、坐立、扭转、后弯与倒立动作，结合呼吸节奏与辅具，保障关节的长久健康。"
      },
      {
        "title": "模块 2: 调息法、清洁法与呼吸控制之道",
        "subtitle": "纳海滨清风以驭生命能量",
        "description": "传统净道清洁法与经典呼吸控制。海滨高浓度负离子深度舒缓神经系统，提升含氧量。"
      },
      {
        "title": "模块 3: 功能解剖学与关节生物力学",
        "subtitle": "运动解剖学、脊柱保养与运动防护",
        "description": "深入剖析骨骼差异、骨盆稳定与脊柱伸展，掌握因人而异的安全调整方法。"
      },
      {
        "title": "模块 4: 瑜伽哲学与帕坦伽利《瑜伽经》",
        "subtitle": "践行八支分法与吠陀古老智慧",
        "description": "深度解析持戒、精进至三摩地的修习之路，将经典智慧融入现代日常教学。"
      },
      {
        "title": "模块 5: 教学法与科学课程编排",
        "subtitle": "口令艺术、课程架构与课堂掌控",
        "description": "学习设计60至90分钟的专业课程，第二周起通过模拟授课演练安全手法调整。"
      },
      {
        "title": "模块 6: 冥想、曼陀罗唱诵与声音疗愈",
        "subtitle": "培植内在定力与安详（专注与禅那）",
        "description": "念珠唱诵、烛光凝视冥想，以及伴随海浪自然音律的深度瑜伽睡眠术（Yoga Nidra）。"
      },
      {
        "title": "模块 7: 手印、收束法与精微能量解剖",
        "subtitle": "精微身、脉道与脉轮觉醒",
        "description": "探索七万二千脉道、七大脉轮、三大主要收束法（Bandhas）与手印能量封锁。"
      },
      {
        "title": "模块 8: 手法辅助正位与身体解读",
        "subtitle": "解剖触感、职业操守与辅助训练",
        "description": "提升触觉灵敏度，识别体态代偿习惯，在获得充分知情同意的前提下实施安全调整。"
      },
      {
        "title": "模块 9: 瑜伽商业道德与数字运营",
        "subtitle": "构建可持续发展的国际瑜伽事业",
        "description": "全美瑜伽联盟资质要求、工作室运营、静修营组织及学员社群建设。"
      },
      {
        "title": "模块 10: 教学实战演练与资深导师督导",
        "subtitle": "E-RYT 500资深导师现场评定指导",
        "description": "独立带领完整公开课堂，获得关于口令节奏、体态调整与气场表现的针对性反馈。"
      },
      {
        "title": "模块 11: 阿育吠陀与排毒净化基础（喀拉拉特色）",
        "subtitle": "在阿育吠陀发祥地体验体质疗愈",
        "description": "三大体质理论（Tridoshas）、身心体质测评、日常养生节律及根据失衡调整体式。"
      },
      {
        "title": "模块 12: 海滩与日落瑜伽实修",
        "subtitle": "自然沉浸与潮汐节律共振",
        "description": "在神圣帕帕纳萨姆海滩赤足练习扎根，在悬崖露台伴着金黄落日修习阴瑜伽。"
      }
    ],
    "practicalItems": [
      {
        "title": "晨间清洁法与海滨唤醒",
        "time": "6:00 AM – 6:30 AM",
        "description": "面向阿拉伯海练习洗鼻法，饮用温热草本调理茶。"
      },
      {
        "title": "调息法与海滨日出冥想",
        "time": "6:30 AM – 7:30 AM",
        "description": "呼吸海洋纯净生命能量，进行静默日出禅修。"
      },
      {
        "title": "动态体式正位与流动",
        "time": "7:30 AM – 9:00 AM",
        "description": "高强度体式实操，精细拆解发力与过渡细节。"
      },
      {
        "title": "喀拉拉阿育吠陀与解剖工坊",
        "time": "3:00 PM – 4:30 PM",
        "description": "双人正位练习、触碰伦理及体质分析实务。"
      },
      {
        "title": "日落海滩瑜伽与颂钵疗愈",
        "time": "5:30 PM – 6:45 PM",
        "description": "夕阳余晖下舒展身心的阴瑜伽与铜钵声波冥想。"
      }
    ]
  },
  "ru": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Модуль 1: Лаборатория асан: классическая хатха и аштанга",
        "subtitle": "Биомеханика, отстройка и модификации",
        "description": "Освоение асан стоя, сидя, прогибов и перевернутых поз с учетом анатомических особенностей и использованием пропсов."
      },
      {
        "title": "Модуль 2: Пранаяма, шаткрийи и контроль дыхания",
        "subtitle": "Накопление праны со свежим морским воздухом",
        "description": "Очистительные техники (Джала Нети, Капалабхати) и классическая пранаяма. Морской воздух с отрицательными ионами успокаивает ум."
      },
      {
        "title": "Модуль 3: Функциональная анатомия и биомеханика",
        "subtitle": "Анатомия движения, здоровье позвоночника и безопасность",
        "description": "Изучение строения суставов, костей и таза для безопасной отстройки асан под любые особенности тела учеников."
      },
      {
        "title": "Модуль 4: Философия йоги и Йога-сутры Патанджали",
        "subtitle": "Восьмеричный путь и ведическая мудрость",
        "description": "Яма, Нияма и путь к Самадхи. Интеграция мудрости Бхагавад-гиты в повседневную жизнь современного человека."
      },
      {
        "title": "Модуль 5: Методология преподавания и построение занятий",
        "subtitle": "Постановка голоса, структура урока и ведение группы",
        "description": "Учитесь создавать 60–90 минутные классы, подавать четкие голосовые команды и применять бережные правки."
      },
      {
        "title": "Модуль 6: Медитация, мантры и звуковая терапия",
        "subtitle": "Культивирование внутреннего покоя (Дхарана и Дхьяна)",
        "description": "Медитация с четками, ведические мантры и йога-нидра под умиротворяющий шум прибоя океана."
      },
      {
        "title": "Модуль 7: Мудры, бандхи и тонкая анатомия",
        "subtitle": "Тонкое тело, нади и пробуждение чакр",
        "description": "Изучение 72 000 нади, чакр, трех главных энергетических замков (бандх) и мудр для управления праной."
      },
      {
        "title": "Модуль 8: Правки асан и считывание тела",
        "subtitle": "Тактильная этика и безопасность правок",
        "description": "Развитие навыка бережных физических правок с предварительного согласия ученика для исправления компенсаций."
      },
      {
        "title": "Модуль 9: Бизнес йоги, этика и продвижение",
        "subtitle": "Создание успешной карьеры преподавателя",
        "description": "Требования Yoga Alliance, преподавание в студиях, организация йога-туров и создание сообщества учеников."
      },
      {
        "title": "Модуль 10: Преподавательская практика и наставничество",
        "subtitle": "Проведение уроков под оценкой учителей E-RYT 500",
        "description": "Самостоятельное проведение классов с подробной конструктивной обратной связью от ведущих преподавателей."
      },
      {
        "title": "Модуль 11: Аюрведа и основы панчакармы (Керала)",
        "subtitle": "Исцеление на родине древнейшей медицины",
        "description": "Изучение трех дош (Вата, Питта, Капха), определение конституции тела и подбор асан с учетом баланса дош."
      },
      {
        "title": "Модуль 12: Йога на пляже и на закате",
        "subtitle": "Единение с природой под шум океана",
        "description": "Практика босиком на священном пляже Папанасам и расслабляющая инь-йога на закате на утесах Варкалы."
      }
    ],
    "practicalItems": [
      {
        "title": "Утренние крийи и очищение у океана",
        "time": "6:00 AM – 6:30 AM",
        "description": "Джала Нети и теплый травяной чай с видом на Аравийское море."
      },
      {
        "title": "Пранаяма и медитация на рассвете",
        "time": "6:30 AM – 7:30 AM",
        "description": "Дыхательные практики и тишина на морском берегу."
      },
      {
        "title": "Динамическая отстройка асан",
        "time": "7:30 AM – 9:00 AM",
        "description": "Интенсивная физическая практика с разбором биомеханики."
      },
      {
        "title": "Аюрведа Кералы и анатомический класс",
        "time": "3:00 PM – 4:30 PM",
        "description": "Практика правок в парах и конституциональный анализ дош."
      },
      {
        "title": "Закатная йога на пляже и поющие чаши",
        "time": "5:30 PM – 6:45 PM",
        "description": "Мягкая инь-йога и звуковая релаксация на закате солнца."
      }
    ]
  },
  "it": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Modulo 1: Laboratorio Asana: Hatha Classico & Ashtanga Dinamico",
        "subtitle": "Basi Biomeccaniche, Allineamento & Modifiche",
        "description": "Padroneggia asana in piedi, seduti e invertiti con respirazione dinamica e uso di supporti per la salute delle articolazioni."
      },
      {
        "title": "Modulo 2: Pranayama, Shatkriya & Controllo del Respiro",
        "subtitle": "Assorbire il Prana con la Brezza Marina",
        "description": "Purificazioni tradizionali (Jala Neti, Kapalbhati) e pranayama. L'aria ricca di ioni negativi calma la mente e rigenera i polmoni."
      },
      {
        "title": "Modulo 3: Anatomia Funzionale & Biomeccanica Articolare",
        "subtitle": "Anatomia del Movimento, Salute della Colonna & Prevenzione",
        "description": "Studio delle variazioni scheletriche, stabilità del bacino e decompressione per adattare le posture in modo sicuro a chiunque."
      },
      {
        "title": "Modulo 4: Filosofia dello Yoga & Yoga Sutra di Patanjali",
        "subtitle": "Gli Otto Stadi & Saggezza Vedica Antica",
        "description": "Approfondisci Yama, Niyama e Samadhi. Applica gli insegnamenti della Bhagavad Gita alla vita di tutti i giorni."
      },
      {
        "title": "Modulo 5: Metodologia Didattica & Sequenze Intelligenti",
        "subtitle": "Modulazione della Voce, Struttura & Gestione dell'Aula",
        "description": "Impara a ideare lezioni da 60 a 90 minuti con istruzioni verbali chiare e correzioni manuali rispettose sin dalla seconda settimana."
      },
      {
        "title": "Modulo 6: Meditazione, Mantra & Risonanza Sonora",
        "subtitle": "Coltivare la Calma Interiore (Dharana & Dhyana)",
        "description": "Mantra tradizionali, Trataka e Yoga Nidra guidati dal ritmo naturale delle onde del mare."
      },
      {
        "title": "Modulo 7: Mudra, Bandha & Anatomia Energetica",
        "subtitle": "Corpo Sottile, Nadi & Risveglio dei Chakra",
        "description": "Studio dei 72.000 nadis, 7 chakra principali, bandha e mudra per canalizzare l'energia vitale."
      },
      {
        "title": "Modulo 8: Aggiustamenti Manuali & Lettura Posturale",
        "subtitle": "Etica del Contatto & Laboratorio di Assistenza",
        "description": "Sviluppa sensibilità tattile e sicurezza nell'offrire correzioni rispettose con il chiaro consenso dell'allievo."
      },
      {
        "title": "Modulo 9: Business dello Yoga, Etica & Promozione",
        "subtitle": "Costruire una Carriera Sostenibile nel Mondo dello Yoga",
        "description": "Requisiti Yoga Alliance, gestione dello studio, organizzazione di ritiri e creazione di una community fedele."
      },
      {
        "title": "Modulo 10: Tirocinio Didattico & Tutorato Superiore",
        "subtitle": "Lezioni dal Vivo Valutate da Maestri E-RYT 500",
        "description": "Guida lezioni complete con feedback costruttivo per laurearti con totale sicurezza didattica."
      },
      {
        "title": "Modulo 11: Basi di Ayurveda & Panchakarma (Speciale Kerala)",
        "subtitle": "Guarigione Olistica nella Terra dell'Ayurveda",
        "description": "Teoria dei Tridosha, valutazione della Prakriti, Dinacharya e personalizzazione delle pratiche sui dosha."
      },
      {
        "title": "Modulo 12: Yoga in Spiaggia & al Tramonto",
        "subtitle": "Connessione con la Natura & Ritmo del Mare",
        "description": "Pratica a piedi nudi sulla spiaggia di Papanasam e Yin Yoga al tramonto sulle spettacolari scogliere di Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriya Mattutini & Purificazione Marina",
        "time": "6:00 AM – 6:30 AM",
        "description": "Risveglio delle vie respiratorie con Jala Neti di fronte al mare."
      },
      {
        "title": "Pranayama & Meditazione all'Alba sull'Oceano",
        "time": "6:30 AM – 7:30 AM",
        "description": "Assorbimento del prana puro e meditazione silenziosa."
      },
      {
        "title": "Allineamento Asana Dinamico & Flow",
        "time": "7:30 AM – 9:00 AM",
        "description": "Pratica intensa con analisi biomeccanica e transizioni."
      },
      {
        "title": "Laboratorio di Ayurveda del Kerala & Anatomia",
        "time": "3:00 PM – 4:30 PM",
        "description": "Aggiustamenti a coppie e valutazione dei dosha."
      },
      {
        "title": "Yoga al Tramonto in Spiaggia & Campane Tibetane",
        "time": "5:30 PM – 6:45 PM",
        "description": "Yin Yoga ristorativo e bagno di suoni con vista tramonto."
      }
    ]
  },
  "nl": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Module 1: Asana Lab: Klassieke Hatha & Dynamische Ashtanga",
        "subtitle": "Biomechanische Basis, Uitlijning & Modificaties",
        "description": "Beheers staande, zittende en omgekeerde houdingen met ademhaling en doordacht gebruik van props voor gezonde gewrichten."
      },
      {
        "title": "Module 2: Pranayama, Shatkriya's & Ademkracht",
        "subtitle": "Prana Versterken met Zilte Zeelucht",
        "description": "Traditionele zuiveringen (Jala Neti, Kapalbhati) en pranayama. Ionenrijke zeelucht verbetert zuurstofopname en ontspant."
      },
      {
        "title": "Module 3: Functionele Anatomie & Gewrichtsbiomechanica",
        "subtitle": "Bewegingsanatomie, Wervelkolom & Blessurepreventie",
        "description": "Bestudeer skeletvariaties, bekkenstabiliteit en schouderdynamiek om houdingen veilig aan te passen aan elk lichaam."
      },
      {
        "title": "Module 4: Yogafilosofie & Patanjali's Yoga Sutra's",
        "subtitle": "Het Achtledige Pad & Vedische Wijsheid",
        "description": "Onderzoek Yama's, Niyama's en Samadhi. Vertaal de vier wegen van de Bhagavad Gita naar het hedendaagse leven."
      },
      {
        "title": "Module 5: Lesmethodiek & Doordachte Lesopbouw",
        "subtitle": "Stemgebruik, Lesstructuur & Ruimtebeheer",
        "description": "Leer lessen van 60 tot 90 minuten opbouwen met duidelijke aanwijzingen en veilige fysieke correcties vanaf week 2."
      },
      {
        "title": "Module 6: Meditatie, Mantra's & Klankresonantie",
        "subtitle": "Innerlijke Stilte Cultiveren (Dharana & Dhyana)",
        "description": "Vedic mantra's, Trataka en Yoga Nidra afgestemd op de rustgevende frequentie van de oceaanbranding."
      },
      {
        "title": "Module 7: Mudra's, Bandha's & Energetische Anatomie",
        "subtitle": "Het Subtiele Lichaam, Nadi's & Chakra-ontwaking",
        "description": "Verken de 72.000 nadi's, de 7 hoofdchakra's, de bandha's en hasta mudra's om vitale energie te bundelen."
      },
      {
        "title": "Module 8: Hands-On Aanpassingen & Lichaamslezen",
        "subtitle": "Anatomische Aanraking, Ethiek & Correcties",
        "description": "Ontwikkel een verfijnd aanraakgevoel om compensatiepatronen bij studenten respectvol en veilig bij te sturen."
      },
      {
        "title": "Module 9: Yoga Ondernemerschap, Ethiek & Marketing",
        "subtitle": "Bouwen aan een Duurzame Internationale Yoga Loopbaan",
        "description": "Yoga Alliance standaarden, studio-management, retreat-organisatie en authentieke branding."
      },
      {
        "title": "Module 10: Docentenpracticum & Master Mentorschap",
        "subtitle": "Beoordeelde Lessen met Ervaren E-RYT 500 Mentoren",
        "description": "Geef zelfstandig volledige lessen met opbouwende feedback om met maximaal zelfvertrouwen af te studeren."
      },
      {
        "title": "Module 11: Ayurveda & Panchakarma Basis (Kerala Special)",
        "subtitle": "Constitutionele Heling aan de Bakermat van Ayurveda",
        "description": "Tridosha's (Vata, Pitta, Kapha), Prakriti-analyse, Dinacharya en aanpassing van asana's aan dosha-onbalansen."
      },
      {
        "title": "Module 12: Strand- & Zonsondergangsyoga",
        "subtitle": "Gronding in de Natuur & Getijdenritme",
        "description": "Blootvoets oefenen op het strand van Papanasam en Yin Yoga bij zonsondergang op de kliffen van Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Ochtend Kriya's & Kustzuivering",
        "time": "6:00 AM – 6:30 AM",
        "description": "Luchtwegen vrijmaken met Jala Neti en kruidenthee met uitzicht op zee."
      },
      {
        "title": "Pranayama & Zonsopgangmeditatie aan de Oceaan",
        "time": "6:30 AM – 7:30 AM",
        "description": "Maritieme prana opnemen door ademcontrole en stilte."
      },
      {
        "title": "Dynamisch Asana Lab & Uitlijning",
        "time": "7:30 AM – 9:00 AM",
        "description": "Intensieve asana-training met analyses van houding en overgangen."
      },
      {
        "title": "Kerala Ayurveda & Anatomie-Kliniek",
        "time": "3:00 PM – 4:30 PM",
        "description": "Oefenen in tweetallen, aanraakethiek en dosha-analyse."
      },
      {
        "title": "Zonsondergang Strand-Yoga & Klankschalen",
        "time": "5:30 PM – 6:45 PM",
        "description": "Herstellende Yin Yoga en klankmeditatie op de klif bij zonsondergang."
      }
    ]
  },
  "id": {
    "badge": "Academic Rigor & Coastal Healing",
    "title": "Comprehensive Curriculum & Academic Modules",
    "subtitle": "Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.",
    "coreBadge": "Core Module",
    "specialBadge": "Kerala Specialty",
    "dailyBadge": "Coastal Daily Disciplines",
    "dailyTitle": "Daily Ashram Sadhana & Coastal Training Components",
    "dailyDesc": "Immerse in holistic daily sadhana enriched by negative ion sea breezes, Ayurvedic healing food, and disciplined practice along the sacred red cliffs of Varkala.",
    "scheduleTag": "Included in Daily Ashram Schedule",
    "modules": [
      {
        "title": "Modul 1: Laboratorium Asana: Hatha Klasik & Ashtanga Dinamis",
        "subtitle": "Fondasi Biomekanika, Penyelarasan & Modifikasi",
        "description": "Kuasai postur berdiri, duduk, puntiran, lengkungan, dan terbalik dengan dukungan alat bantu untuk melindungi persendian."
      },
      {
        "title": "Modul 2: Pranayama, Shatkriya & Penguasaan Pernapasan",
        "subtitle": "Menyerap Prana Bersama Udara Laut Segar",
        "description": "Pembersihan tradisional (Jala Neti, Kapalbhati) dan pranayama klasik. Udara laut kaya ion negatif menenangkan sistem saraf."
      },
      {
        "title": "Modul 3: Anatomi Fungsional & Biomekanika Sendi",
        "subtitle": "Anatomi Gerak, Kesehatan Tulang Belakang & Pencegahan Cedera",
        "description": "Pelajari variasi kerangka, stabilitas panggul, dan bahu untuk menyesuaikan postur dengan aman pada setiap siswa."
      },
      {
        "title": "Modul 4: Filosofi Yoga & Yoga Sutra Patanjali",
        "subtitle": "Delapan Cabang Yoga & Kebijaksanaan Veda Kuno",
        "description": "Pelajari Yama, Niyama hingga Samadhi. Terapkan ajaran Bhagavad Gita dalam kehidupan sehari-hari."
      },
      {
        "title": "Modul 5: Metodologi Pengajaran & Penyusunan Kelas yang Runtut",
        "subtitle": "Modulasi Suara, Struktur Kelas & Pengelolaan Ruangan",
        "description": "Rancang kelas 60–90 menit yang runtut dengan instruksi verbal yang jelas dan penyesuaian tubuh yang aman sejak minggu ke-2."
      },
      {
        "title": "Modul 6: Meditasi, Mantra & Penyembuhan Suara",
        "subtitle": "Membina Ketenangan Batin (Dharana & Dhyana)",
        "description": "Pelantunan mantra Veda, Trataka, dan Yoga Nidra yang diiringi oleh deburan ombak alami Laut Arab."
      },
      {
        "title": "Modul 7: Mudra, Bandha & Anatomi Energi Halus",
        "subtitle": "Tubuh Halus, Nadi & Kebangkitan Cakra",
        "description": "Pelajari 72.000 nadi, 7 cakra utama, bandha pengunci energi, dan hasta mudra."
      },
      {
        "title": "Modul 8: Penyesuaian Sentuhan & Membaca Tubuh Siswa",
        "subtitle": "Sentuhan Anatomis, Etika & Praktik Asistensi",
        "description": "Kembangkan kepekaan taktil untuk memberikan koreksi postur yang aman dan penuh rasa hormat dengan izin siswa."
      },
      {
        "title": "Modul 9: Bisnis Yoga, Etika & Pemasaran Digital",
        "subtitle": "Membangun Karier Guru Yoga Global yang Berkelanjutan",
        "description": "Panduan Yoga Alliance, manajemen studio, penyelenggaraan retret, dan membangun komunitas siswa."
      },
      {
        "title": "Modul 10: Praktik Mengajar Nyata & Mentorship Master",
        "subtitle": "Kelas Evaluasi Langsung Bersama Mentor E-RYT 500",
        "description": "Pimpin kelas secara mandiri dengan umpan balik konstruktif untuk mengajar dengan percaya diri."
      },
      {
        "title": "Modul 11: Dasar Ayurveda & Panchakarma (Khusus Kerala)",
        "subtitle": "Penyembuhan Alami di Tempat Lahirnya Ayurveda",
        "description": "Ketahui Tridosha, evaluasi Prakriti tubuh, ritme Dinacharya, dan penyesuaian asana dengan kondisi dosha."
      },
      {
        "title": "Modul 12: Latihan Yoga Pantai & Matahari Terbenam",
        "subtitle": "Penyelarasan dengan Alam & Irama Pasang Surut",
        "description": "Latihan tanpa alas kaki di Pantai Papanasam dan Yin Yoga saat matahari terbenam di atas tebing Varkala."
      }
    ],
    "practicalItems": [
      {
        "title": "Kriya Pagi & Pembersihan Tepi Laut",
        "time": "6:00 AM – 6:30 AM",
        "description": "Jala Neti dan teh herbal hangat menghadap pemandangan Laut Arab."
      },
      {
        "title": "Pranayama & Meditasi Fajar di Tepi Laut",
        "time": "6:30 AM – 7:30 AM",
        "description": "Menghirup prana laut segar dan meditasi hening."
      },
      {
        "title": "Penyelarasan Asana Dinamis & Vinyasa Flow",
        "time": "7:30 AM – 9:00 AM",
        "description": "Latihan intensif dengan analisis biomekanika dan transisi."
      },
      {
        "title": "Klinik Anatomi & Ayurveda Kerala",
        "time": "3:00 PM – 4:30 PM",
        "description": "Praktik koreksi berpasangan dan analisis dosha."
      },
      {
        "title": "Yoga Pantai Matahari Terbenam & Sound Healing",
        "time": "5:30 PM – 6:45 PM",
        "description": "Yin Yoga restoratif dan meditasi suara saat matahari tenggelam di laut."
      }
    ]
  }
};
