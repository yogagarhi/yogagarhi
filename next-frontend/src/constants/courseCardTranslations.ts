// Localized data for Course Cards, Helpful Guides, Post-Training Support, and Accommodation Notices

export interface LocalizedGuide {
  title: string;
  excerpt: string;
}

export interface LocalizedSupportCard {
  title: string;
  description: string;
}

export interface LocalizedAccommodationNotice {
  heading: string;
  sub: string;
}

export const LOCALIZED_HELPFUL_GUIDES: Record<string, LocalizedGuide[]> = {
  en: [
    {
      title: "Benefits of Yoga Teacher Training in Bali",
      excerpt: "Discover why Bali is the world's premier yoga training hub and how a Yoga TTC transforms your practice, mindset, and teaching skills."
    },
    {
      title: "What to Expect in a 200 Hour YTTC in Bali",
      excerpt: "A complete guide to daily schedules, training intensity, anatomy study, teaching practicums, and preparation tips."
    },
    {
      title: "Himalayan Roots of Authentic Yoga",
      excerpt: "Learn why authentic Himalayan lineage matters for your yoga teacher training in Bali, preserving traditional Hatha wisdom."
    }
  ],
  nl: [
    {
      title: "Voordelen van een Yogadocentenopleiding op Bali",
      excerpt: "Ontdek waarom Bali 's werelds toonaangevende centrum voor yogatraining is en hoe een Yoga TTC je beoefening, mindset en lesvaardigheden transformeert."
    },
    {
      title: "Wat je Kunt Verwachten van een 200-Uurs YTTC op Bali",
      excerpt: "Een complete gids voor dagelijkse schema's, trainingsintensiteit, anatomie-studie, lespraktijk en voorbereidingstips."
    },
    {
      title: "Himalaya-Wortels van Authentieke Yoga",
      excerpt: "Leer waarom een authentieke Himalaya-traditie essentieel is voor je yogadocentenopleiding op Bali en de traditionele Hatha-wijsheid bewaart."
    }
  ],
  de: [
    {
      title: "Vorteile einer Yogalehrerausbildung auf Bali",
      excerpt: "Entdecken Sie, warum Bali das weltweit führende Zentrum für Yogaausbildungen ist und wie ein Yoga TTC Ihre Praxis und Lehrkompetenz transformiert."
    },
    {
      title: "Was Sie bei einer 200-Stunden-YTT auf Bali erwartet",
      excerpt: "Ein umfassender Leitfaden zu Tagesabläufen, Trainingsintensität, Anatomiestudium, Lehrpraktika und Vorbereitungstipps."
    },
    {
      title: "Himalaya-Wurzeln des authentischen Yoga",
      excerpt: "Erfahren Sie, warum die authentische Himalaya-Tradition für Ihre Yogalehrerausbildung auf Bali so entscheidend ist."
    }
  ],
  es: [
    {
      title: "Beneficios de la Formación de Profesores de Yoga en Bali",
      excerpt: "Descubre por qué Bali es el centro neurálgico del yoga y cómo un TTC transforma tu práctica, mentalidad y habilidades docentes."
    },
    {
      title: "Qué esperar de un profesorado de 200 horas en Bali",
      excerpt: "Una guía completa sobre horarios diarios, intensidad del entrenamiento, anatomía, prácticas docentes y consejos de preparación."
    },
    {
      title: "Raíces del Himalaya en el Yoga Auténtico",
      excerpt: "Descubre por qué el linaje auténtico del Himalaya es fundamental para tu profesorado de yoga en Bali, preservando la sabiduría del Hatha tradicional."
    }
  ],
  fr: [
    {
      title: "Les bienfaits de la formation de professeur de yoga à Bali",
      excerpt: "Découvrez pourquoi Bali est la capitale mondiale du yoga et comment un YTTC transforme votre pratique, votre état d'esprit et votre enseignement."
    },
    {
      title: "À quoi s'attendre lors d'une formation 200 heures à Bali",
      excerpt: "Un guide complet sur les horaires quotidiens, l'intensité de la formation, l'anatomie, les ateliers pédagogiques et la préparation."
    },
    {
      title: "Les racines himalayennes du yoga authentique",
      excerpt: "Comprenez pourquoi une lignée himalayenne authentique est essentielle pour votre formation de yoga à Bali et la sagesse du Hatha traditionnel."
    }
  ],
  id: [
    {
      title: "Manfaat Pelatihan Guru Yoga di Bali",
      excerpt: "Temukan mengapa Bali adalah pusat pelatihan yoga terkemuka di dunia dan bagaimana Yoga TTC mentransformasikan latihan, pola pikir, dan kemampuan mengajar Anda."
    },
    {
      title: "Apa yang Diharapkan dalam 200 Jam YTTC di Bali",
      excerpt: "Panduan lengkap mengenai jadwal harian, intensitas pelatihan, studi anatomi, praktik mengajar, dan tips persiapan."
    },
    {
      title: "Akar Himalaya dari Yoga Otentik",
      excerpt: "Pelajari mengapa silsilah Himalaya yang otentik sangat penting untuk pelatihan guru yoga Anda di Bali dalam menjaga kemurnian Hatha tradisional."
    }
  ],
  it: [
    {
      title: "I benefici della formazione per insegnanti di yoga a Bali",
      excerpt: "Scopri perché Bali è il centro di riferimento mondiale per lo yoga e come un corso TTC trasforma la tua pratica e le tue capacità di insegnamento."
    },
    {
      title: "Cosa aspettarsi da un corso di 200 ore a Bali",
      excerpt: "Una guida completa agli orari quotidiani, all'intensità del percorso, allo studio dell'anatomia, ai tirocini e ai consigli di preparazione."
    },
    {
      title: "Le radici himalayane dello yoga autentico",
      excerpt: "Scopri perché la tradizione himalayana autentica è fondamentale per la tua formazione a Bali nel custodire la saggezza dell'Hatha yoga."
    }
  ],
  ja: [
    {
      title: "バリ島でのヨガ指導者養成コースのメリット",
      excerpt: "なぜバリ島が世界的なヨガの聖地なのか、そしてTTCがあなたの実践、指導力、マインドセットをどのように変革するのかをご紹介します。"
    },
    {
      title: "バリ島200時間ヨガTTCで体験できること",
      excerpt: "毎日のスケジュール、修練の強度、解剖学の学習、指導実習、渡航準備のポイントを網羅した完全ガイド。"
    },
    {
      title: "正統派ヨガが受け継ぐヒマラヤの源流",
      excerpt: "伝統的なハタヨガの英知を守り伝えるヒマラヤの正統な系譜が、なぜ指導者養成において大切なのかを解説します。"
    }
  ],
  ko: [
    {
      title: "발리 요가 지도자 과정(YTTC)의 특별한 혜택",
      excerpt: "발리가 왜 전 세계 요가 수련의 중심지인지, 그리고 요가 TTC가 수련과 지도 역량을 어떻게 변화시키는지 알아보세요."
    },
    {
      title: "발리 200시간 요가 지도자 과정에서 기대할 수 있는 것",
      excerpt: "일과표, 수련 강도, 해부학 학습, 티칭 실습 및 사전 준비 팁에 대한 완전한 가이드."
    },
    {
      title: "정통 요가의 뿌리: 히말라야의 지혜",
      excerpt: "발리 요가 지도자 과정에서 정통 히말라야 라인리지가 왜 중요한지, 전통 하타의 깊이를 이해합니다."
    }
  ],
  ru: [
    {
      title: "Преимущества курса подготовки преподавателей йоги на Бали",
      excerpt: "Узнайте, почему Бали считается мировым центром йоги и как курс TTC трансформирует вашу практику, мышление и преподавательские навыки."
    },
    {
      title: "Чего ожидать от 200-часового курса YTTC на Бали",
      excerpt: "Полное руководство по ежедневному расписанию, интенсивности практики, изучению анатомии, преподавательской практике и подготовке."
    },
    {
      title: "Гималайские истоки аутентичной йоги",
      excerpt: "Узнайте, почему подлинная гималайская линия передачи имеет решающее значение для обучения на Бали и сохранения традиций хатха-йоги."
    }
  ],
  zh: [
    {
      title: "在巴厘岛参加瑜伽导师培训的核心益处",
      excerpt: "探索为何巴厘岛是全球顶尖的瑜伽静修圣地，以及TTC如何全面升华您的习练、心智与教学技能。"
    },
    {
      title: "巴厘岛200小时瑜伽导师培训完整指南",
      excerpt: "关于每日日程、练习强度、解剖学研习、试讲实训以及行前准备建议的详尽指南。"
    },
    {
      title: "纯正瑜伽传承之源：喜马拉雅古老智慧",
      excerpt: "深入了解为何喜马拉雅正统传承对于巴厘岛瑜伽导师培训至关重要，守护传统哈他瑜伽的源头智慧。"
    }
  ]
};

export const LOCALIZED_POST_SUPPORT: Record<string, LocalizedSupportCard[]> = {
  en: [
    {
      title: "Bi-annual Upgrade Programs",
      description: "Programs to deepen your experience of the practices and upgrade your teaching skills"
    },
    {
      title: "Extensive Alumni Support",
      description: "A dedicated alumni platform for queries, clarifications, and continuous learning"
    },
    {
      title: "Community Connection",
      description: "Integration into a vibrant and supportive global community of YogaGarhi alumni"
    },
    {
      title: "Teaching Resources",
      description: "Access to a repository of articles, videos, and teaching materials"
    }
  ],
  nl: [
    {
      title: "Halfjaarlijkse Vervolgprogramma's",
      description: "Verdiepingsprogramma's om je beoefening te verrijken en je lesvaardigheden continu te verbeteren"
    },
    {
      title: "Uitgebreide Alumni-Ondersteuning",
      description: "Een speciaal alumni-platform voor al je vragen, begeleiding en voortdurende persoonlijke groei"
    },
    {
      title: "Hechte Yogagemeenschap",
      description: "Levenslange verbinding met een inspirerende, ondersteunende wereldwijde familie van YogaGarhi-afgestudeerden"
    },
    {
      title: "Lesmateriaal & Bronnen",
      description: "Toegang tot een uitgebreide bibliotheek met vakinformatie, video's en didactisch lesmateriaal"
    }
  ],
  de: [
    {
      title: "Halbjährliche Aufbauprogramme",
      description: "Vertiefungsprogramme zur Erweiterung Ihrer Praxis und kontinuierlichen Verfeinerung Ihrer Unterrichtskompetenz"
    },
    {
      title: "Umfassende Alumni-Unterstützung",
      description: "Eine eigene Alumni-Plattform für Fachfragen, Klärungen und fortlaufendes Lernen"
    },
    {
      title: "Globale Gemeinschaft",
      description: "Einbindung in eine weltweite, unterstützende Familie von YogaGarhi-Absolventen"
    },
    {
      title: "Lehrmaterialien & Ressourcen",
      description: "Zugang zu einer reichhaltigen Wissensdatenbank mit Fachartikeln, Videos und Unterrichtshilfen"
    }
  ],
  es: [
    {
      title: "Programas de actualización semestrales",
      description: "Programas para profundizar en tu práctica y perfeccionar tus habilidades docentes"
    },
    {
      title: "Amplio apoyo para graduados",
      description: "Una plataforma exclusiva para exalumnos para consultas, tutorías y aprendizaje continuo"
    },
    {
      title: "Comunidad global de yoga",
      description: "Integración en una comunidad internacional activa y solidaria de graduados de YogaGarhi"
    },
    {
      title: "Recursos didácticos",
      description: "Acceso a un repositorio de artículos, videos y materiales de enseñanza"
    }
  ],
  fr: [
    {
      title: "Programmes de perfectionnement semestriels",
      description: "Des modules avancés pour enrichir votre pratique et développer vos compétences pédagogiques"
    },
    {
      title: "Soutien continu aux anciens élèves",
      description: "Une plateforme dédiée pour répondre à vos questions et poursuivre votre apprentissage"
    },
    {
      title: "Connexion communautaire mondiale",
      description: "Intégration au sein d'une communauté internationale chaleureuse et solidaire de diplômés YogaGarhi"
    },
    {
      title: "Ressources pédagogiques",
      description: "Accès à un ensemble d'articles, de vidéos et de supports d'enseignement"
    }
  ],
  id: [
    {
      title: "Program Peningkatan Dua Tahunan",
      description: "Program terstruktur untuk memperdalam latihan dan meningkatkan keterampilan mengajar Anda"
    },
    {
      title: "Dukungan Alumni Menyeluruh",
      description: "Platform khusus alumni untuk bimbingan, konsultasi, dan pembelajaran berkelanjutan"
    },
    {
      title: "Komunitas Global YogaGarhi",
      description: "Terhubung selamanya dengan komunitas internasional lulusan YogaGarhi yang saling mendukung"
    },
    {
      title: "Materi & Sumber Belajar Mengajar",
      description: "Akses ke perpustakaan artikel, video panduan, dan materi pengajaran yoga lengkap"
    }
  ],
  it: [
    {
      title: "Programmi semestrali di perfezionamento",
      description: "Percorsi per approfondire la tua pratica e perfezionare le tue capacità didattiche"
    },
    {
      title: "Supporto continuo per ex allievi",
      description: "Una piattaforma dedicata agli alumni per domande, chiarimenti e crescita costante"
    },
    {
      title: "Connessione alla comunità globale",
      description: "Integrazione in una calorosa comunità internazionale di diplomati YogaGarhi"
    },
    {
      title: "Risorse didattiche",
      description: "Accesso a una raccolta di articoli, video e materiali didattici di approfondimento"
    }
  ],
  ja: [
    {
      title: "年2回のスキルアッププログラム",
      description: "修練をさらに深め、指導技術を継続的に高めるためのフォローアップ講座"
    },
    {
      title: "充実した卒業生サポート",
      description: "疑問の解消や継続的な学びを支える卒業生専用のサポートプラットフォーム"
    },
    {
      title: "世界に広がるコミュニティ",
      description: "世界中のYogaGarhi修了生とつながる温かく心強いグローバルネットワーク"
    },
    {
      title: "指導教材＆リソース",
      description: "指導に役立つ専門記事、解説動画、指導資料ライブラリへのアクセス"
    }
  ],
  ko: [
    {
      title: "반기별 실력 향상 프로그램",
      description: "수련을 더욱 심화하고 티칭 역량을 지속적으로 업그레이드하는 전문 프로그램"
    },
    {
      title: "풍부한 졸업생 사후 지원",
      description: "궁금증 해결과 지속적인 학습을 위한 동문 전용 서포트 플랫폼"
    },
    {
      title: "글로벌 동문 커뮤니티",
      description: "전 세계 YogaGarhi 졸업생들이 서로 응원하고 교류하는 따뜻한 네트워크"
    },
    {
      title: "티칭 자료 및 교육 리소스",
      description: "전문 아티클, 강의 영상, 수업 지도 자료 라이브러리 상시 제공"
    }
  ],
  ru: [
    {
      title: "Полугодовые программы повышения квалификации",
      description: "Программы для углубления личной практики и постоянного совершенствования преподавательских навыков"
    },
    {
      title: "Всесторонняя поддержка выпускников",
      description: "Специальная платформа для выпускников для ответов на вопросы и непрерывного развития"
    },
    {
      title: "Глобальное сообщество выпускников",
      description: "Интеграция в дружную международную семью выпускников школы YogaGarhi"
    },
    {
      title: "Учебные ресурсы и материалы",
      description: "Доступ к библиотеке статей, обучающих видео и методических материалов"
    }
  ],
  zh: [
    {
      title: "半年度进阶提升计划",
      description: "旨在持续深化个人习练体验并升级教学技能的进阶学习项目"
    },
    {
      title: "全方位校友后续支持",
      description: "专属校友学习平台，提供解答指导、答疑解惑与持续深造交流"
    },
    {
      title: "全球瑜伽校友社群",
      description: "融入互勉互助的YogaGarhi全球毕业导师温馨大家庭"
    },
    {
      title: "丰富教学资源库",
      description: "专享专业文章、指导视频及详尽教学备课资料库"
    }
  ]
};

export const LOCALIZED_ACCOMMODATION_NOTICE: Record<string, LocalizedAccommodationNotice> = {
  en: {
    heading: "Accommodation & Campus",
    sub: "Accommodation and venue details will be shared soon."
  },
  nl: {
    heading: "Accommodatie & Ashramcampus",
    sub: "De gedetailleerde accommodatie- en campusgegevens worden binnenkort bekendgemaakt."
  },
  de: {
    heading: "Unterkunft & Campus",
    sub: "Detaillierte Informationen zu Unterkunft und Veranstaltungsort werden in Kürze bekanntgegeben."
  },
  es: {
    heading: "Alojamiento y Campus",
    sub: "Los detalles del alojamiento y del recinto se compartirán muy pronto."
  },
  fr: {
    heading: "Hébergement et Campus",
    sub: "Les détails concernant l'hébergement et le campus seront partagés très prochainement."
  },
  id: {
    heading: "Akomodasi & Fasilitas Kampus",
    sub: "Rincian akomodasi dan lokasi kampus akan segera dibagikan."
  },
  it: {
    heading: "Alloggio e Campus",
    sub: "I dettagli sull'alloggio e sulla struttura saranno condivisi a breve."
  },
  ja: {
    heading: "宿泊施設＆キャンパス",
    sub: "宿泊施設およびキャンパスの詳細情報は近日中にご案内いたします。"
  },
  ko: {
    heading: "숙소 및 캠퍼스 시설 안내",
    sub: "숙소 및 캠퍼스 시설에 관한 상세 정보는 곧 안내될 예정입니다."
  },
  ru: {
    heading: "Проживание и кампус",
    sub: "Подробная информация о вариантах размещения и кампусе будет опубликована в ближайшее время."
  },
  zh: {
    heading: "住宿与校区设施",
    sub: "住宿与教学道场的详细信息将于近期正式发布。"
  }
};
