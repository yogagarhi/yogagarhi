// Localized translations for AlsoAvailableInRishikesh and AlsoAvailableInVarkala sections

export interface SisterCourseItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  certification: string;
  description: string;
}

export interface SisterCampusData {
  badge: string;
  title: string;
  subtitle: string;
  exploreBtn: string;
  fromText: string;
  location: string;
  courses: SisterCourseItem[];
}

export const ALSO_AVAILABLE_RISHIKESH: Record<string, SisterCampusData> = {
  "en": {
    "badge": "Himalayan Sister Campus",
    "title": "Also Available in Rishikesh, India",
    "subtitle": "Prefer to study in the Birthplace of Yoga? Explore our Yoga Alliance certified programs at our peaceful Tapovan ashram overlooking the holy Ganges.",
    "exploreBtn": "Explore Course Details",
    "fromText": "From",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "100 Hour Yoga Teacher Training in Rishikesh",
        "duration": "12 Days (11 Nights)",
        "price": "$599",
        "certification": "Foundation Immersion",
        "description": "12-day beginner immersion along the holy Ganges in Tapovan, Rishikesh. Small batch size 8–10 students."
      },
      {
        "id": "200-rishikesh",
        "title": "200 Hour Yoga Teacher Training in Rishikesh",
        "duration": "28 Days (27 Nights)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Flagship 200-hour Yoga Alliance training in the Yoga Capital of the World. Pre-YTTC online prep & lifetime re-attendance."
      },
      {
        "id": "300-rishikesh",
        "title": "300 Hour Yoga Teacher Training in Rishikesh",
        "duration": "28 Days (27 Nights)",
        "price": "$1,099",
        "certification": "RYT 500 Pathway",
        "description": "Advanced 300-hour master training with Himalayan lineage masters. Pathway to elite Yoga Alliance RYT 500."
      }
    ]
  },
  "de": {
    "badge": "Himalaya Partner-Campus",
    "title": "Auch in Rishikesh, Indien verfügbar",
    "subtitle": "Möchten Sie im Geburtsort des Yoga lernen? Entdecken Sie unsere zertifizierten Yoga Alliance Ausbildungen in unserem friedvollen Tapovan Ashram an der heiligen Ganga.",
    "exploreBtn": "Kursdetails ansehen",
    "fromText": "Ab",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "100-Stunden Yogalehrerausbildung in Rishikesh",
        "duration": "12 Tage (11 Nächte)",
        "price": "$599",
        "certification": "Grundlagen-Immersion",
        "description": "12-tägige Grundausbildung am Ufer der heiligen Ganga in Tapovan. Kleine Gruppen von maximal 8–10 Schülern."
      },
      {
        "id": "200-rishikesh",
        "title": "200-Stunden Yogalehrerausbildung in Rishikesh",
        "duration": "28 Tage (27 Nächte)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Unsere renommierte 200-Stunden-Ausbildung in der Yoga-Hauptstadt der Welt. Inklusive Online-Vorbereitung & lebenslanger Wiederholung."
      },
      {
        "id": "300-rishikesh",
        "title": "300-Stunden Yogalehrerausbildung in Rishikesh",
        "duration": "28 Tage (27 Nächte)",
        "price": "$1.099",
        "certification": "Weg zum RYT 500",
        "description": "Fortgeschrittene 300-Stunden-Ausbildung mit erfahrenen Himalaya-Meistern zur Erlangung des Yoga Alliance RYT 500."
      }
    ]
  },
  "fr": {
    "badge": "Campus Sœur de l'Himalaya",
    "title": "Également Disponible à Rishikesh, Inde",
    "subtitle": "Vous préférez étudier au berceau du yoga ? Découvrez nos formations certifiées Yoga Alliance dans notre ashram paisible de Tapovan face au Gange sacré.",
    "exploreBtn": "Découvrir la Formation",
    "fromText": "Dès",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "Formation de Yoga 100 Heures à Rishikesh",
        "duration": "12 Jours (11 Nuits)",
        "price": "$599",
        "certification": "Immersion Fondamentale",
        "description": "Immersion de 12 jours le long du Gange sacré à Tapovan, Rishikesh. Petits groupes de 8 à 10 élèves."
      },
      {
        "id": "200-rishikesh",
        "title": "Formation de Professeur de Yoga 200 Heures à Rishikesh",
        "duration": "28 Jours (27 Nuits)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Formation phare certifiée dans la capitale mondiale du yoga. Préparation en ligne et répétition gratuite à vie."
      },
      {
        "id": "300-rishikesh",
        "title": "Formation Supérieure de Yoga 300 Heures à Rishikesh",
        "duration": "28 Jours (27 Nuits)",
        "price": "$1 099",
        "certification": "Vers le RYT 500",
        "description": "Formation avancée de niveau maître avec des maîtres himalayens vers le statut Yoga Alliance RYT 500."
      }
    ]
  },
  "es": {
    "badge": "Sede Hermana del Himalaya",
    "title": "También Disponible en Rishikesh, India",
    "subtitle": "¿Prefieres estudiar en la cuna del yoga? Explora nuestros programas certificados por Yoga Alliance en nuestro tranquilo ashram de Tapovan junto al sagrado río Ganges.",
    "exploreBtn": "Ver Detalles del Curso",
    "fromText": "Desde",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "Formación de Yoga 100 Horas en Rishikesh",
        "duration": "12 Días (11 Noches)",
        "price": "$599",
        "certification": "Inmersión Fundamental",
        "description": "Inmersión inicial de 12 días a orillas del Ganges sagrado en Tapovan, Rishikesh. Grupos reducidos de 8 a 10 alumnos."
      },
      {
        "id": "200-rishikesh",
        "title": "Formación de Profesores de Yoga 200 Horas en Rishikesh",
        "duration": "28 Días (27 Noches)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Programa estrella de 200 horas en la capital mundial del yoga. Preparación previa online y repetición gratuita de por vida."
      },
      {
        "id": "300-rishikesh",
        "title": "Formación Avanzada de Yoga 300 Horas en Rishikesh",
        "duration": "28 Días (27 Noches)",
        "price": "$1.099",
        "certification": "Hacia RYT 500",
        "description": "Formación superior de 300 horas con maestros tradicionales del Himalaya para alcanzar el nivel Yoga Alliance RYT 500."
      }
    ]
  },
  "ja": {
    "badge": "ヒマラヤ・姉妹キャンパス",
    "title": "インド・リシケシ校でも開講中",
    "subtitle": "ヨガ発祥の聖地で学びたい方へ。聖なるガンジス川を見下ろす静寂のタポヴァン・アシュラムで、全米ヨガアライアンス認定コースを開講しています。",
    "exploreBtn": "コース詳細を見る",
    "fromText": "料金：",
    "location": "リシケシ・タポヴァン",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "100時間ヨガ指導者養成コース（リシケシ）",
        "duration": "12日間（11泊）",
        "price": "$599",
        "certification": "基礎イマージョン修了証",
        "description": "タポヴァンの聖なるガンジス河畔で学ぶ12日間の集中基礎コース。8〜10名の少人数制指導。"
      },
      {
        "id": "200-rishikesh",
        "title": "200時間ヨガ指導者養成コース（リシケシ）",
        "duration": "28日間（27泊）",
        "price": "$999",
        "certification": "全米ヨガアライアンス RYT 200",
        "description": "世界のヨガの聖地で取得する本格的な200時間認定コース。渡航前オンライン講座＆生涯無料再受講特典付き。"
      },
      {
        "id": "300-rishikesh",
        "title": "300時間ヨガ指導者養成コース（リシケシ）",
        "duration": "28日間（27泊）",
        "price": "$1,099",
        "certification": "RYT 500 取得コース",
        "description": "ヒマラヤ伝統のマスターから直伝で学ぶ300時間上級コース。全米ヨガアライアンス最高峰RYT 500へ。"
      }
    ]
  },
  "ko": {
    "badge": "히말라야 자매 캠퍼스",
    "title": "인도 리시케시에서도 수강 가능",
    "subtitle": "요가의 본고장에서 수련하고 싶으신가요? 성스러운 갠지스강이 내려다보이는 타포반 아쉬람에서 요가 얼라이언스 공인 프로그램을 만나보세요.",
    "exploreBtn": "과정 상세 보기",
    "fromText": "시작가",
    "location": "리시케시 타포반",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "리시케시 100시간 요가 지도자 과정",
        "duration": "12일 (11박)",
        "price": "$599",
        "certification": "기초 몰입 수료증",
        "description": "타포반 갠지스 강변에서 진행되는 12일 입문 몰입 과정. 8~10명 소수 정예 운영."
      },
      {
        "id": "200-rishikesh",
        "title": "리시케시 200시간 요가 지도자 과정",
        "duration": "28일 (27박)",
        "price": "$999",
        "certification": "요가 얼라이언스 RYT 200",
        "description": "세계 요가의 수도에서 진행되는 대표 200시간 공인 과정. 사전 온라인 교육 및 평생 무료 재수강 제공."
      },
      {
        "id": "300-rishikesh",
        "title": "리시케시 300시간 요가 지도자 과정",
        "duration": "28일 (27박)",
        "price": "$1,099",
        "certification": "RYT 500 취득 과정",
        "description": "히말라야 정통 스승들과 함께하는 심화 300시간 마스터 과정. 요가 얼라이언스 최고 등급 RYT 500 취득."
      }
    ]
  },
  "zh": {
    "badge": "喜马拉雅姊妹校区",
    "title": "亦在印度瑞诗凯诗校区同步开设",
    "subtitle": "希望在瑜伽的发源圣地深造？在俯瞰神圣恒河的塔波万静修院中，体验全美瑜伽联盟认证的权威课程。",
    "exploreBtn": "查看课程详情",
    "fromText": "起价",
    "location": "瑞诗凯诗塔波万",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "瑞诗凯诗100小时瑜伽导师培训",
        "duration": "12天（11晚）",
        "price": "$599",
        "certification": "基础浸润证书",
        "description": "在神圣恒河畔开展的12天初学者基础沉浸课程。8–10人小班授课。"
      },
      {
        "id": "200-rishikesh",
        "title": "瑞诗凯诗200小时瑜伽导师培训",
        "duration": "28天（27晚）",
        "price": "$999",
        "certification": "全美瑜伽联盟 RYT 200",
        "description": "世界瑜伽之都的旗舰200小时认证课程。赠送行前线上预备课及终身免费重修资格。"
      },
      {
        "id": "300-rishikesh",
        "title": "瑞诗凯诗300小时进阶瑜伽导师培训",
        "duration": "28天（27晚）",
        "price": "$1,099",
        "certification": "通往 RYT 500 阶梯",
        "description": "跟随喜马拉雅传统大师进修的高阶300小时大师课，迈向全美瑜伽联盟RYT 500最高认证。"
      }
    ]
  },
  "ru": {
    "badge": "Гималайский Кампус",
    "title": "Также доступно в Ришикеше, Индия",
    "subtitle": "Мечтаете учиться на родине йоги? Ознакомьтесь с программами Yoga Alliance в нашем спокойном ашраме в Таповане на берегу священной Ганги.",
    "exploreBtn": "Подробнее о курсе",
    "fromText": "От",
    "location": "Тапован, Ришикеш",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "100-часовой курс инструкторов йоги в Ришикеше",
        "duration": "12 дней (11 ночей)",
        "price": "$599",
        "certification": "Базовое погружение",
        "description": "12-дневный курс на берегу священной Ганги в Таповане, Ришикеш. Группы до 8–10 студентов."
      },
      {
        "id": "200-rishikesh",
        "title": "200-часовой курс инструкторов йоги в Ришикеше",
        "duration": "28 дней (27 ночей)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Флагманский сертифицированный курс в столице йоги. Онлайн-подготовка и бесплатное повторное посещение на всю жизнь."
      },
      {
        "id": "300-rishikesh",
        "title": "300-часовой продвинутый курс йоги в Ришикеше",
        "duration": "28 дней (27 ночей)",
        "price": "$1 099",
        "certification": "Путь к RYT 500",
        "description": "Продвинутый мастер-курс с гималайскими учителями для получения наивысшего статуса Yoga Alliance RYT 500."
      }
    ]
  },
  "it": {
    "badge": "Campus Gemello dell'Himalaya",
    "title": "Disponibile anche a Rishikesh, India",
    "subtitle": "Preferisci studiare nel luogo di nascita dello yoga? Esplora i nostri corsi certificati Yoga Alliance nel nostro tranquillo ashram di Tapovan affacciato sul sacro Gange.",
    "exploreBtn": "Scopri il Corso",
    "fromText": "Da",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "Corso Insegnanti Yoga 100 Ore a Rishikesh",
        "duration": "12 Giorni (11 Notti)",
        "price": "$599",
        "certification": "Immersione di Base",
        "description": "Immersione di 12 giorni lungo il sacro Gange a Tapovan, Rishikesh. Gruppi di 8–10 studenti."
      },
      {
        "id": "200-rishikesh",
        "title": "Corso Insegnanti Yoga 200 Ore a Rishikesh",
        "duration": "28 Giorni (27 Notti)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Corso principale certificato nella capitale mondiale dello yoga. Preparazione online e frequenza gratuita a vita."
      },
      {
        "id": "300-rishikesh",
        "title": "Corso Superiore di Yoga 300 Ore a Rishikesh",
        "duration": "28 Giorni (27 Notti)",
        "price": "$1.099",
        "certification": "Verso RYT 500",
        "description": "Corso avanzato di 300 ore con maestri himalayani per raggiungere la certificazione Yoga Alliance RYT 500."
      }
    ]
  },
  "nl": {
    "badge": "Himalaya Zuster Campus",
    "title": "Ook Beschikbaar in Rishikesh, India",
    "subtitle": "Wil je liever studeren in de bakermat van yoga? Ontdek onze Yoga Alliance gecertificeerde opleidingen in onze serene ashram in Tapovan met uitzicht op de heilige Ganges.",
    "exploreBtn": "Bekijk Opleidingsdetails",
    "fromText": "Vanaf",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "100-Uurs Yogadocentenopleiding in Rishikesh",
        "duration": "12 Dagen (11 Nachten)",
        "price": "$599",
        "certification": "Basis Immersie",
        "description": "12-daagse beginnerscursus langs de heilige Ganges in Tapovan, Rishikesh. Kleine groepen van 8–10 studenten."
      },
      {
        "id": "200-rishikesh",
        "title": "200-Uurs Yogadocentenopleiding in Rishikesh",
        "duration": "28 Dagen (27 Nachten)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Toonaangevende 200-uurs Yoga Alliance opleiding in de Yoga Hoofdstad van de Wereld. Inclusief online voorbereiding en levenslang gratis herkansen."
      },
      {
        "id": "300-rishikesh",
        "title": "300-Uurs Yogadocentenopleiding in Rishikesh",
        "duration": "28 Dagen (27 Nachten)",
        "price": "$1.099",
        "certification": "Traject naar RYT 500",
        "description": "Geavanceerde 300-uurs masteropleiding met traditionele Himalaya-meesters. Directe weg naar Yoga Alliance RYT 500."
      }
    ]
  },
  "id": {
    "badge": "Kampus Saudara Himalaya",
    "title": "Juga Tersedia di Rishikesh, India",
    "subtitle": "Ingin belajar langsung di tempat lahirnya yoga? Temukan program bersertifikat Yoga Alliance kami di ashram Tapovan yang damai di tepi Sungai Gangga suci.",
    "exploreBtn": "Lihat Detail Kursus",
    "fromText": "Mulai dari",
    "location": "Tapovan, Rishikesh",
    "courses": [
      {
        "id": "100-rishikesh",
        "title": "Pelatihan Guru Yoga 100 Jam di Rishikesh",
        "duration": "12 Hari (11 Malam)",
        "price": "$599",
        "certification": "Imersi Dasar",
        "description": "Imersi 12 hari untuk pemula di sepanjang Sungai Gangga suci di Tapovan, Rishikesh. Kelas kecil 8–10 siswa."
      },
      {
        "id": "200-rishikesh",
        "title": "Pelatihan Guru Yoga 200 Jam di Rishikesh",
        "duration": "28 Hari (27 Malam)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Pelatihan unggulan 200 jam di Ibu Kota Yoga Dunia. Dilengkapi persiapan online dan gratis mengulang seumur hidup."
      },
      {
        "id": "300-rishikesh",
        "title": "Pelatihan Guru Yoga 300 Jam di Rishikesh",
        "duration": "28 Hari (27 Malam)",
        "price": "$1.099",
        "certification": "Jalur Menuju RYT 500",
        "description": "Pelatihan tingkat lanjut 300 jam bersama para master garis keturunan Himalaya menuju status bergengsi Yoga Alliance RYT 500."
      }
    ]
  }
};

export const ALSO_AVAILABLE_VARKALA: Record<string, SisterCampusData> = {
  "en": {
    "badge": "Coastal Sister Campus",
    "title": "Also Available in Varkala, Kerala",
    "subtitle": "Prefer to study along the soothing Arabian Sea? Explore our Yoga Alliance certified programs at our peaceful cliffside ashram in God's Own Country.",
    "exploreBtn": "Explore Course Details",
    "fromText": "From",
    "location": "Varkala Cliff, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "100 Hour Yoga Teacher Training in Varkala",
        "duration": "12 Days (11 Nights)",
        "price": "$599",
        "certification": "Foundation Immersion",
        "description": "12-day coastal immersion atop the red cliffs of Varkala, Kerala. Small batch of 8–10 students, beach yoga, and Ayurveda basics."
      },
      {
        "id": "200-varkala",
        "title": "200 Hour Yoga Teacher Training in Varkala",
        "duration": "28 Days (27 Nights)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Flagship 200-hour Yoga Alliance training on Kerala's sacred coast. Beach shala, Ayurveda immersion, and lifetime free re-attendance."
      },
      {
        "id": "300-varkala",
        "title": "300 Hour Yoga Teacher Training in Varkala",
        "duration": "28 Days (27 Nights)",
        "price": "$1,099",
        "certification": "RYT 500 Pathway",
        "description": "Advanced 300-hour master training with Himalayan lineage masters and clinical Ayurveda. Pathway to elite Yoga Alliance RYT 500."
      }
    ]
  },
  "de": {
    "badge": "Küsten Partner-Campus",
    "title": "Auch in Varkala, Kerala verfügbar",
    "subtitle": "Möchten Sie lieber am beruhigenden Arabischen Meer lernen? Entdecken Sie unsere zertifizierten Yoga Alliance Ausbildungen in unserem friedvollen Klippen-Ashram in Gottes eigenem Land.",
    "exploreBtn": "Kursdetails ansehen",
    "fromText": "Ab",
    "location": "Klippe Varkala, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "100-Stunden Yogalehrerausbildung in Varkala",
        "duration": "12 Tage (11 Nächte)",
        "price": "$599",
        "certification": "Grundlagen-Immersion",
        "description": "12-tägige Ausbildung auf den roten Klippen von Varkala, Kerala. Kleine Gruppen, Strand-Yoga und Ayurveda-Grundlagen."
      },
      {
        "id": "200-varkala",
        "title": "200-Stunden Yogalehrerausbildung in Varkala",
        "duration": "28 Tage (27 Nächte)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Unsere renommierte 200-Stunden-Ausbildung an Keralas Küste. Strand-Shala, Ayurveda-Einführung und lebenslange kostenlose Wiederholung."
      },
      {
        "id": "300-varkala",
        "title": "300-Stunden Yogalehrerausbildung in Varkala",
        "duration": "28 Tage (27 Nächte)",
        "price": "$1.099",
        "certification": "Weg zum RYT 500",
        "description": "Fortgeschrittene 300-Stunden-Masterausbildung mit Himalaya-Meistern und klinischem Ayurveda zur RYT 500 Zertifizierung."
      }
    ]
  },
  "fr": {
    "badge": "Campus Côtier Sœur",
    "title": "Également Disponible à Varkala, Kerala",
    "subtitle": "Vous préférez étudier le long de la mer d'Oman ? Découvrez nos formations certifiées Yoga Alliance dans notre ashram sur les falaises de la terre des dieux.",
    "exploreBtn": "Découvrir la Formation",
    "fromText": "Dès",
    "location": "Falaise de Varkala, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "Formation de Yoga 100 Heures à Varkala",
        "duration": "12 Jours (11 Nuits)",
        "price": "$599",
        "certification": "Immersion Fondamentale",
        "description": "Immersion côtière de 12 jours au sommet des falaises de Varkala. Petits groupes de 8 à 10 élèves et bases de l'Ayurveda."
      },
      {
        "id": "200-varkala",
        "title": "Formation de Professeur de Yoga 200 Heures à Varkala",
        "duration": "28 Jours (27 Nuits)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Formation phare de 200 heures sur la côte sacrée du Kerala. Shala en bord de mer, Ayurveda et répétition gratuite à vie."
      },
      {
        "id": "300-varkala",
        "title": "Formation Supérieure de Yoga 300 Heures à Varkala",
        "duration": "28 Jours (27 Nuits)",
        "price": "$1 099",
        "certification": "Vers le RYT 500",
        "description": "Formation supérieure de 300 heures avec maîtres himalayens et Ayurveda clinique vers le titre Yoga Alliance RYT 500."
      }
    ]
  },
  "es": {
    "badge": "Sede Costera Hermana",
    "title": "También Disponible en Varkala, Kerala",
    "subtitle": "¿Prefieres formarte junto a la serenidad del Mar Arábigo? Explora nuestros programas de Yoga Alliance en nuestro tranquilo ashram sobre los acantilados de Kerala.",
    "exploreBtn": "Ver Detalles del Curso",
    "fromText": "Desde",
    "location": "Acantilado de Varkala, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "Formación de Yoga 100 Horas en Varkala",
        "duration": "12 Días (11 Noches)",
        "price": "$599",
        "certification": "Inmersión Fundamental",
        "description": "Inmersión de 12 días sobre los acantilados rojos de Varkala, Kerala. Grupos reducidos de 8 a 10 alumnos y yoga en la playa."
      },
      {
        "id": "200-varkala",
        "title": "Formación de Profesores de Yoga 200 Horas en Varkala",
        "duration": "28 Días (27 Noches)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Curso insignia de 200 horas en la costa sagrada de Kerala. Shala con vistas al mar, Ayurveda y repetición gratuita de por vida."
      },
      {
        "id": "300-varkala",
        "title": "Formación Avanzada de Yoga 300 Horas en Varkala",
        "duration": "28 Días (27 Noches)",
        "price": "$1.099",
        "certification": "Hacia RYT 500",
        "description": "Formación superior de 300 horas con maestros del linaje del Himalaya y Ayurveda clínico para la credencial RYT 500."
      }
    ]
  },
  "ja": {
    "badge": "沿岸部・姉妹キャンパス",
    "title": "ケーララ州ヴァルカラ校でも開講中",
    "subtitle": "穏やかなアラビア海を望むリゾート環境で学びたい方へ。「神の国」ケーララ州の赤い断崖の上に佇む静寂のアシュラムで全米ヨガアライアンス認定コースを開講しています。",
    "exploreBtn": "コース詳細を見る",
    "fromText": "料金：",
    "location": "ヴァルカラ・クリフ、ケーララ",
    "courses": [
      {
        "id": "100-varkala",
        "title": "100時間ヨガ指導者養成コース（ヴァルカラ）",
        "duration": "12日間（11泊）",
        "price": "$599",
        "certification": "基礎イマージョン修了証",
        "description": "ヴァルカラの赤い断崖の上で学ぶ12日間の集中基礎コース。8〜10名の少人数制、ビーチヨガ、アーユルヴェーダ入門。"
      },
      {
        "id": "200-varkala",
        "title": "200時間ヨガ指導者養成コース（ヴァルカラ）",
        "duration": "28日間（27泊）",
        "price": "$999",
        "certification": "全米ヨガアライアンス RYT 200",
        "description": "ケーララの聖なる海岸で取得する本格的な200時間認定コース。海風を感じるシャラ、アーユルヴェーダ、生涯無料再受講特典付き。"
      },
      {
        "id": "300-varkala",
        "title": "300時間ヨガ指導者養成コース（ヴァルカラ）",
        "duration": "28日間（27泊）",
        "price": "$1,099",
        "certification": "RYT 500 取得コース",
        "description": "ヒマラヤ伝統のマスターと本格アーユルヴェーダを組み合わせた300時間上級コース。最高峰RYT 500へ。"
      }
    ]
  },
  "ko": {
    "badge": "해안 자매 캠퍼스",
    "title": "케랄라 바르칼라에서도 수강 가능",
    "subtitle": "평화로운 아라비아해를 바라보며 수련하고 싶으신가요? '신의 나라' 케랄라 절벽 위에 위치한 아쉬람에서 요가 얼라이언스 공인 과정을 확인해보세요.",
    "exploreBtn": "과정 상세 보기",
    "fromText": "시작가",
    "location": "바르칼라 절벽, 케랄라",
    "courses": [
      {
        "id": "100-varkala",
        "title": "바르칼라 100시간 요가 지도자 과정",
        "duration": "12일 (11박)",
        "price": "$599",
        "certification": "기초 몰입 수료증",
        "description": "케랄라 바르칼라 붉은 절벽에서 펼쳐지는 12일 해안 몰입 과정. 8~10명 소수 정예, 비치 요가 및 아유르베다 기초."
      },
      {
        "id": "200-varkala",
        "title": "바르칼라 200시간 요가 지도자 과정",
        "duration": "28일 (27박)",
        "price": "$999",
        "certification": "요가 얼라이언스 RYT 200",
        "description": "케랄라의 신성한 해안에서 진행되는 대표 200시간 공인 과정. 오션 샬라, 아유르베다 체험 및 평생 무료 재수강 제공."
      },
      {
        "id": "300-varkala",
        "title": "바르칼라 300시간 요가 지도자 과정",
        "duration": "28일 (27박)",
        "price": "$1,099",
        "certification": "RYT 500 취득 과정",
        "description": "히말라야 정통 스승 및 임상 아유르베다가 결합된 심화 300시간 마스터 과정. 요가 얼라이언스 RYT 500 취득."
      }
    ]
  },
  "zh": {
    "badge": "海滨姊妹校区",
    "title": "亦在喀拉拉邦瓦尔卡拉校区同步开设",
    "subtitle": "希望在宁静的阿拉伯海畔修习？在“神之故乡”悬崖之巅的静修院中，体验全美瑜伽联盟认证的权威课程。",
    "exploreBtn": "查看课程详情",
    "fromText": "起价",
    "location": "瓦尔卡拉悬崖，喀拉拉",
    "courses": [
      {
        "id": "100-varkala",
        "title": "瓦尔卡拉100小时瑜伽导师培训",
        "duration": "12天（11晚）",
        "price": "$599",
        "certification": "基础浸润证书",
        "description": "在瓦尔卡拉红色悬崖上开展的12天海滨基础沉浸课程。8–10人小班授课，涵盖沙滩瑜伽与阿育吠陀基础。"
      },
      {
        "id": "200-varkala",
        "title": "瓦尔卡拉200小时瑜伽导师培训",
        "duration": "28天（27晚）",
        "price": "$999",
        "certification": "全美瑜伽联盟 RYT 200",
        "description": "在喀拉拉圣洁海岸举行的200小时认证课程。海滨练功房、阿育吠陀疗愈及终身免费重修资格。"
      },
      {
        "id": "300-varkala",
        "title": "瓦尔卡拉300小时进阶瑜伽导师培训",
        "duration": "28天（27晚）",
        "price": "$1,099",
        "certification": "通往 RYT 500 阶梯",
        "description": "结合喜马拉雅导师传承与正统阿育吠陀医学的300小时高阶大师课，迈向全美瑜伽联盟最高RYT 500认证。"
      }
    ]
  },
  "ru": {
    "badge": "Прибрежный Кампус",
    "title": "Также доступно в Варкале, Керала",
    "subtitle": "Предпочитаете практику у теплого Аравийского моря? Ознакомьтесь с программами Yoga Alliance в нашем ашраме на живописных утесах Кералы.",
    "exploreBtn": "Подробнее о курсе",
    "fromText": "От",
    "location": "Клиф Варкалы, Керала",
    "courses": [
      {
        "id": "100-varkala",
        "title": "100-часовой курс инструкторов йоги в Варкале",
        "duration": "12 дней (11 ночей)",
        "price": "$599",
        "certification": "Базовое погружение",
        "description": "12-дневный курс на красных утесах Варкалы, Керала. Группы до 8–10 студентов, йога на пляже и основы Аюрведы."
      },
      {
        "id": "200-varkala",
        "title": "200-часовой курс инструкторов йоги в Варкале",
        "duration": "28 дней (27 ночей)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Флагманский 200-часовой курс на священном побережье Кералы. Шала у океана, Аюрведа и пожизненное бесплатное повторение."
      },
      {
        "id": "300-varkala",
        "title": "300-часовой продвинутый курс йоги в Варкале",
        "duration": "28 дней (27 ночей)",
        "price": "$1 099",
        "certification": "Путь к RYT 500",
        "description": "Мастер-курс 300 часов с гималайскими учителями и клинической Аюрведой для получения статуса Yoga Alliance RYT 500."
      }
    ]
  },
  "it": {
    "badge": "Campus Costiero Gemello",
    "title": "Disponibile anche a Varkala, Kerala",
    "subtitle": "Preferisci studiare lungo le acque rilassanti del Mar Arabico? Scopri i nostri corsi Yoga Alliance nel nostro ashram sulle scogliere del Kerala.",
    "exploreBtn": "Scopri il Corso",
    "fromText": "Da",
    "location": "Scogliera di Varkala, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "Corso Insegnanti Yoga 100 Ore a Varkala",
        "duration": "12 Giorni (11 Notti)",
        "price": "$599",
        "certification": "Immersione di Base",
        "description": "Immersione costiera di 12 giorni sulle scogliere rosse di Varkala. Piccoli gruppi da 8–10 studenti, yoga in spiaggia e Ayurveda."
      },
      {
        "id": "200-varkala",
        "title": "Corso Insegnanti Yoga 200 Ore a Varkala",
        "duration": "28 Giorni (27 Notti)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Corso di punta di 200 ore sulla costa sacra del Kerala. Shala sull'oceano, Ayurveda e frequenza gratuita a vita."
      },
      {
        "id": "300-varkala",
        "title": "Corso Superiore di Yoga 300 Ore a Varkala",
        "duration": "28 Giorni (27 Notti)",
        "price": "$1.099",
        "certification": "Verso RYT 500",
        "description": "Formazione avanzata di 300 ore con maestri himalayani e Ayurveda clinica per raggiungere la qualifica Yoga Alliance RYT 500."
      }
    ]
  },
  "nl": {
    "badge": "Kust Zuster Campus",
    "title": "Ook Beschikbaar in Varkala, Kerala",
    "subtitle": "Wil je liever studeren aan de kalmerende Arabische Zee? Ontdek onze Yoga Alliance gecertificeerde opleidingen in onze ashram op de kliffen in God's Own Country.",
    "exploreBtn": "Bekijk Opleidingsdetails",
    "fromText": "Vanaf",
    "location": "Varkala Kliffen, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "100-Uurs Yogadocentenopleiding in Varkala",
        "duration": "12 Dagen (11 Nachten)",
        "price": "$599",
        "certification": "Basis Immersie",
        "description": "12-daagse kustopleiding bovenop de rode kliffen van Varkala, Kerala. Kleine groepen van 8–10 studenten, strand-yoga en Ayurveda."
      },
      {
        "id": "200-varkala",
        "title": "200-Uurs Yogadocentenopleiding in Varkala",
        "duration": "28 Dagen (27 Nachten)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Toonaangevende 200-uurs Yoga Alliance opleiding aan de heilige kust van Kerala. Strandshala, Ayurveda en levenslang gratis herkansen."
      },
      {
        "id": "300-varkala",
        "title": "300-Uurs Yogadocentenopleiding in Varkala",
        "duration": "28 Dagen (27 Nachten)",
        "price": "$1.099",
        "certification": "Traject naar RYT 500",
        "description": "Geavanceerde 300-uurs masteropleiding met Himalaya-meesters en klinische Ayurveda. Weg naar Yoga Alliance RYT 500."
      }
    ]
  },
  "id": {
    "badge": "Kampus Saudara Pesisir",
    "title": "Juga Tersedia di Varkala, Kerala",
    "subtitle": "Ingin belajar di sepanjang Laut Arab yang menenangkan? Temukan program bersertifikat Yoga Alliance kami di ashram atas tebing Kerala yang indah.",
    "exploreBtn": "Lihat Detail Kursus",
    "fromText": "Mulai dari",
    "location": "Tebing Varkala, Kerala",
    "courses": [
      {
        "id": "100-varkala",
        "title": "Pelatihan Guru Yoga 100 Jam di Varkala",
        "duration": "12 Hari (11 Malam)",
        "price": "$599",
        "certification": "Imersi Dasar",
        "description": "Imersi pesisir 12 hari di atas tebing merah Varkala, Kerala. Kelas kecil 8–10 siswa, yoga pantai, dan dasar Ayurveda."
      },
      {
        "id": "200-varkala",
        "title": "Pelatihan Guru Yoga 200 Jam di Varkala",
        "duration": "28 Hari (27 Malam)",
        "price": "$999",
        "certification": "Yoga Alliance RYT 200",
        "description": "Pelatihan unggulan 200 jam di pantai suci Kerala. Shala tepi laut, Ayurveda, dan gratis mengulang seumur hidup."
      },
      {
        "id": "300-varkala",
        "title": "Pelatihan Guru Yoga 300 Jam di Varkala",
        "duration": "28 Hari (27 Malam)",
        "price": "$1.099",
        "certification": "Jalur Menuju RYT 500",
        "description": "Pelatihan master 300 jam bersama guru garis keturunan Himalaya dan Ayurveda klinis menuju Yoga Alliance RYT 500."
      }
    ]
  }
};
