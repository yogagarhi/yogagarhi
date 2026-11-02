// Comprehensive UI Translations for Retreat Detail Pages
// Covers all offers, daily schedules, campus amenities, faculty, and policies across locales.

export interface RetreatOfferCard {
  icon: string;
  title: string;
  desc: string;
}

export interface RetreatTeacherItem {
  name: string;
  role: string;
  bio: string | Record<string, string>;
}

export interface RetreatUIData {
  signatureExperience: string;
  offersHeading: string;
  offersSub: Record<string, string>;
  offersCards: Record<string, RetreatOfferCard[]>;
  datesTitle: string;
  datesSub: string;
  checkAvailability: string;
  mostPopular: string;
  perPerson: string;
  diningSubtitle: string;
  diningTableHeading: string;
  mealsFallback: Array<{ meal: string; time: string; notes: string }>;
  scheduleSub: string;
  dayTabPrefix: string;
  dayTabSuffix: string;
  dayOfPrefix: string;
  dayOfConnector: string;
  campusAmenitiesTitle: string;
  amenitiesList: string[];
  campusOneTitle: string;
  campusOneDesc: string;
  campusOneFeatures: string[];
  campusTwoTitle: string;
  campusTwoDesc: string;
  campusTwoFeatures: string[];
  studentGuaranteeTitle: string;
  studentGuaranteeText: string;
  airportPickupTitle: string;
  airportPickupText: string;
  durationButtons: Record<string, string>;
  gallery: Array<{ title: string; desc: string }>;
  crossLinks: {
    days12: string;
    days28: string;
    mostPopular: string;
    learnMore: string;
    fromLearnMore: string;
    desc100: string;
    desc200: string;
    desc300: string;
    desc100Varkala: string;
    desc200Varkala: string;
    desc300Varkala: string;
  };
  facultySub: Record<string, string>;
  teachers: RetreatTeacherItem[];
}

export const RETREAT_DETAIL_UI: Record<string, RetreatUIData> = {
  "en": {
    "signatureExperience": "Signature Experience",
    "offersHeading": "YogaGarhi Offers",
    "offersSub": {
      "bali": "An all-inclusive transformative wellness retreat where ancient yogic lineage meets the healing energy of Bali.",
      "rishikesh": "An authentic Himalayan immersion where sacred Ganga river energy meets profound Vedic traditions.",
      "varkala": "A coastal Ayurvedic retreat where Arabian Sea cliff views meet traditional healing therapies."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Multi-Style Yoga Practice",
          "desc": "Daily morning Hatha Vinyasa flows for strength followed by gentle evening Yin yoga for deep flexibility, tension release, and spinal alignment."
        },
        {
          "icon": "🌺",
          "title": "Daily Balinese Massages",
          "desc": "Full-body complimentary Balinese massage treatments using warm organic botanical oils to soothe muscles, boost lymphatic flow, and calm the senses."
        },
        {
          "icon": "🔔",
          "title": "Sound Healing Sessions",
          "desc": "Immerse in restorative sound baths featuring handcrafted Tibetan singing bowls and gong resonance inside our peaceful open-air bamboo shala."
        },
        {
          "icon": "🌊",
          "title": "Sacred Melukat Water Blessing",
          "desc": "Experience ancient Balinese water purification at the sacred Tirta Empul spring temple led by a local priest to wash away stress and revitalize the spirit."
        },
        {
          "icon": "✨",
          "title": "Reiki & Chakra Alignment",
          "desc": "Deep breathwork (pranayama) and gentle hands-on Reiki healing to balance your vital chakras, release emotional weight, and restore mental clarity."
        },
        {
          "icon": "🥗",
          "title": "Ahimsa Plant-Based Dining",
          "desc": "Three daily chef-prepared vegan and vegetarian feasts made from clean, organic volcanic-soil ingredients supporting digestion and natural cellular detox."
        }
      ],
      "rishikesh": [
        {
          "icon": "🏔️",
          "title": "Himalayan Hatha & Ashtanga",
          "desc": "Authentic morning Hatha and traditional Ashtanga flow sessions taught by Himalayan yogacharyas for core vitality, posture, and inner stillness."
        },
        {
          "icon": "🌿",
          "title": "Ayurvedic Healing Therapy",
          "desc": "Rejuvenating traditional Ayurvedic body therapies and herbal warm oil treatments to balance doshas, reduce fatigue, and restore bodily harmony."
        },
        {
          "icon": "🌊",
          "title": "Holy Ganga River Meditation",
          "desc": "Sunset mindfulness meditation along the sacred banks of Mother Ganga, accompanied by the uplifting spiritual chants of the evening Ganga Aarti."
        },
        {
          "icon": "💨",
          "title": "Himalayan Pranayama Mastery",
          "desc": "Classical yogic breathing techniques (Kapalabhati, Nadi Shodhana, Bhastrika) designed to expand lung capacity, calm the mind, and purify energy channels."
        },
        {
          "icon": "🔔",
          "title": "Sound Bath & Sacred Mantras",
          "desc": "Restorative sound healing journeys with antique Tibetan bronze bowls and Vedic chanting sessions creating profound vibrational realignment."
        },
        {
          "icon": "🍲",
          "title": "Pure Sattvic Yogic Meals",
          "desc": "Three daily nourishing, freshly cooked Ayurvedic vegetarian meals prepared with mindful devotion (Ahimsa) to support physical and mental clarity."
        }
      ],
      "varkala": [
        {
          "icon": "🌅",
          "title": "Cliffside Sunrise Yoga",
          "desc": "Morning Hatha and Vinyasa practices on our cliffside open-air shala facing the vast horizon of the Arabian Sea as gentle sea breezes awaken your senses."
        },
        {
          "icon": "🌺",
          "title": "Authentic Kerala Abhyanga",
          "desc": "Traditional Kerala Ayurvedic herbal warm oil massages administered by experienced local therapists to relieve deep muscular stress and nourish tissues."
        },
        {
          "icon": "🌊",
          "title": "Sunset Ocean Meditation",
          "desc": "Evening guided meditation and calming breathwork listening to the natural rhythmic crash of ocean waves as the sun sinks into the Arabian Sea."
        },
        {
          "icon": "🏖️",
          "title": "Papanasam Mineral Beach Walk",
          "desc": "Therapeutic walks along Varkala's famous red cliffs and Papanasam Beach, famed for natural holy mineral spring waters that cleanse fatigue."
        },
        {
          "icon": "✨",
          "title": "Coastal Breathwork & Reiki",
          "desc": "Restorative pranayama sessions harnessing high negative ions from the ocean, paired with gentle energy alignment to dissolve chronic exhaustion."
        },
        {
          "icon": "🥥",
          "title": "South Indian Ayurvedic Dining",
          "desc": "Three daily farm-fresh coastal vegetarian and vegan meals enriched with organic coconut, turmeric, curry leaves, and traditional Kerala healing herbs."
        }
      ]
    },
    "datesTitle": "Retreat Dates – Year-Round Availability",
    "datesSub": "We offer yoga retreats year-round. You can start on any day of the week based on your travel schedule.",
    "checkAvailability": "Check Date Availability →",
    "mostPopular": "Most Popular Choice",
    "perPerson": "/ person",
    "diningSubtitle": "Nourishment for Body & Mind",
    "diningTableHeading": "Daily Meal Timings",
    "mealsFallback": [
      {
        "meal": "Breakfast",
        "time": "09:30 AM",
        "notes": "Tropical fruits, smoothie bowls, porridge, herbal tea"
      },
      {
        "meal": "Lunch",
        "time": "12:30 PM – 01:30 PM",
        "notes": "Nutritious organic plant-based bowls, steamed vegetables"
      },
      {
        "meal": "Dinner",
        "time": "07:00 PM – 08:00 PM",
        "notes": "Warm soul soups, roasted vegetables, curries, and herbal digestion tonics"
      }
    ],
    "scheduleSub": "Click on each day below to see the precise schedule from morning awakening to evening silence.",
    "dayTabPrefix": "Day",
    "dayTabSuffix": "Schedule",
    "dayOfPrefix": "Day",
    "dayOfConnector": "of",
    "campusAmenitiesTitle": "Campus Amenities & Facilities",
    "amenitiesList": [
      "🏊 Swimming Pool (10 AM - 8 PM)",
      "❄️ Silent Air Conditioning",
      "📶 High-Speed Campus Wi-Fi",
      "🧘 Bamboo Open-Air Yoga Shala",
      "🚿 Hot Rainfall Showers",
      "🧹 Daily Housekeeping Service"
    ],
    "campusOneTitle": "Deluxe Garden Sanctuary",
    "campusOneDesc": "Traditional Balinese stone villas nestled amongst lush tropical frangipani and palm gardens. Features private balconies and serene open-air bamboo shalas.",
    "campusOneFeatures": [
      "✓ King Bed or Twin Bed options",
      "✓ Semi-open Balinese hot shower bath",
      "✓ Peaceful jungle view patio"
    ],
    "campusTwoTitle": "New Luxury Pool Campus",
    "campusTwoDesc": "Brand new boutique rooms situated right along our sparkling swimming pool with contemporary teakwood styling, sun loungers, and high-speed Wi-Fi.",
    "campusTwoFeatures": [
      "✓ Direct swimming pool steps",
      "✓ Modern rainfall shower suite",
      "✓ Private sun deck and lounger area"
    ],
    "studentGuaranteeTitle": "Student-First Guarantee:",
    "studentGuaranteeText": "We understand travel circumstances change. Your retreat deposit remains protected with one free date reschedule with 15 days notice.",
    "airportPickupTitle": "Private Airport Pickup:",
    "airportPickupText": "We arrange reliable, air-conditioned private taxi transfers directly from airport arrivals to our campus reception.",
    "durationButtons": {
      "3-days": "3 Days Weekend Reset",
      "7-days": "7 Days Signature Renewal",
      "14-days": "14 Days Deep Transformation"
    },
    "gallery": [
      {
        "title": "Sanctuary Swimming Pool",
        "desc": "Open daily 10:00 AM – 8:00 PM amidst jungle greenery"
      },
      {
        "title": "Open-Air Bamboo Yoga Shala",
        "desc": "High ceilings and natural airflow facing Ubud palms"
      },
      {
        "title": "Deluxe Private Garden Suite",
        "desc": "Plush king bed, silent air conditioning & terrace"
      },
      {
        "title": "Twin Shared Room Comfort",
        "desc": "Spacious layout with two separate beds & ensuite bath"
      },
      {
        "title": "Ahimsa Plant-Based Dining",
        "desc": "Three daily fresh, organic vegan and vegetarian feasts"
      },
      {
        "title": "Sound Healing & Meditation",
        "desc": "Tibetan singing bowls and sacred vibration therapy"
      }
    ],
    "crossLinks": {
      "days12": "12 Days",
      "days28": "28 Days",
      "mostPopular": "Most Popular",
      "learnMore": "Learn More",
      "fromLearnMore": "From {price} • Learn More",
      "desc100": "Comprehensive foundation training for dedicated practitioners.",
      "desc200": "Our flagship Yoga Alliance accredited teacher training.",
      "desc300": "Advanced teacher training pathway to RYT 500 credential.",
      "desc100Varkala": "Beachside beginner immersion with foundational Kerala Ayurveda.",
      "desc200Varkala": "Yoga Alliance RYT 200 certification with Ayurvedic immersion.",
      "desc300Varkala": "Advanced master training leading to RYT 500 credential."
    },
    "facultySub": {
      "bali": "Learn under authentic Himalayan-trained yogacharyas and master teachers with decades of dedicated teaching experience.",
      "rishikesh": "Learn under authentic Himalayan-trained yogacharyas and master teachers with decades of dedicated teaching experience.",
      "varkala": "Learn under authentic yoga masters and Ayurvedic teachers with decades of dedicated practice."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Founder & Spiritual Director",
        "bio": {
          "bali": "With over 12 years of Himalayan sadhana, Sachin Ji bridges ancient Vedic techniques with modern mindfulness, guiding thousands of international practitioners to profound awakening.",
          "rishikesh": "With over 12 years of Himalayan sadhana, Sachin Ji bridges ancient Vedic techniques with modern mindfulness, guiding thousands of international practitioners to profound awakening.",
          "varkala": "With over 12 years of dedicated yogic sadhana, Sachin Ji bridges ancient Vedic wisdom with modern mindfulness, guiding practitioners to deep somatic restoration."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Co-Founder & Lead Mentor",
        "bio": "Born into a traditional yogic family, Chanda Ji spent over four decades practicing deep sadhana, inspiring students through gentle alignment, mudras, and devotion."
      },
      {
        "name": "Rahul Ji",
        "role": "Senior Vinyasa Master",
        "bio": "Known for his fluid sequencing and anatomical precision, Rahul Ji brings vibrant energy to morning flows, making advanced asanas joyful and safe."
      },
      {
        "name": "Rohit Ji",
        "role": "Pranayama & Meditation Guru",
        "bio": {
          "bali": "Trained at sacred ashrams along the Ganges, Rohit Ji teaches subtle breath mechanics and deep somatic release that melt nervous tension.",
          "rishikesh": "Trained at sacred ashrams along the Ganges, Rohit Ji teaches subtle breath mechanics and deep somatic release that melt nervous tension.",
          "varkala": "Trained in classical yoga and breath sciences, Rohit Ji teaches subtle breath mechanics and deep somatic release that melt nervous tension."
        }
      }
    ]
  },
  "id": {
    "signatureExperience": "Pengalaman Khas",
    "offersHeading": "Keunggulan & Fasilitas YogaGarhi",
    "offersSub": {
      "bali": "Retret kebugaran transformatif inklusif di mana tradisi yoga kuno menyatu dengan energi penyembuhan Bali yang asri.",
      "rishikesh": "Imersi spiritual autentik di mana energi suci Sungai Gangga berpadu dengan kearifan Veda kuno Himalaya.",
      "varkala": "Retret Ayurveda pesisir di mana panorama tebing Samudra Hindia berpadu dengan terapi penyembuhan tradisional Kerala."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Latihan Yoga Multi-Gaya",
          "desc": "Sesi pagi Hatha Vinyasa untuk kekuatan fisik dilanjutkan sesi sore Yin yoga yang lembut untuk fleksibilitas mendalam dan pelepasan ketegangan tubuh."
        },
        {
          "icon": "🌺",
          "title": "Pijat Tradisional Bali Harian",
          "desc": "Perawatan pijat seluruh tubuh khas Bali gratis setiap hari dengan minyak botani organik hangat untuk merelaksasi otot dan melancarkan peredaran darah."
        },
        {
          "icon": "🔔",
          "title": "Sesi Terapi Suara (Sound Healing)",
          "desc": "Rasakan relaksasi mendalam melalui mandi suara mangkuk bernyanyi Tibet (Tibetan singing bowls) dan resonansi gong di dalam shala bambu terbuka kami."
        },
        {
          "icon": "🌊",
          "title": "Upacara Pembersihan Air Suci Melukat",
          "desc": "Ikuti tradisi pembersihan air suci kuno Bali di pura mata air Tirta Empul yang dipimpin oleh pemangku lokal untuk membuang stres dan menyegarkan jiwa."
        },
        {
          "icon": "✨",
          "title": "Penyelarasan Cakra & Terapi Reiki",
          "desc": "Latihan pernapasan mendalam (pranayama) dan terapi energi Reiki lembut untuk menyeimbangkan cakra vital, melepaskan beban emosi, dan menjernihkan pikiran."
        },
        {
          "icon": "🥗",
          "title": "Hidangan Nabati Ahimsa",
          "desc": "Tiga kali makan sehari sajian lezat vegan dan vegetarian dari bahan organik tanah vulkanik segar yang mendukung pencernaan sehat dan detoksifikasi alami."
        }
      ],
      "rishikesh": [
        {
          "icon": "🏔️",
          "title": "Yoga Hatha & Ashtanga Himalaya",
          "desc": "Sesi yoga Hatha dan Ashtanga pagi autentik dipandu langsung oleh yogacharya Himalaya untuk vitalitas fisik, postur tubuh ideal, dan ketenangan batin."
        },
        {
          "icon": "🌿",
          "title": "Terapi Penyembuhan Ayurveda",
          "desc": "Perawatan tubuh Ayurveda tradisional dan pijat minyak herbal hangat untuk menyeimbangkan dosha tubuh, meredakan kelelahan, dan memulihkan harmoni alami."
        },
        {
          "icon": "🌊",
          "title": "Meditasi di Tepi Sungai Gangga",
          "desc": "Meditasi kesadaran sore di tepian suci Sungai Gangga, ditemani lantunan doa spiritual yang meneduhkan dalam upacara Ganga Aarti."
        },
        {
          "icon": "💨",
          "title": "Penguasaan Pranayama Kuno",
          "desc": "Teknik pernapasan yogik klasik (Kapalabhati, Nadi Shodhana, Bhastrika) untuk memperluas kapasitas paru-paru, menenangkan pikiran, dan memurnikan saluran energi."
        },
        {
          "icon": "🔔",
          "title": "Sound Healing & Kidung Mantra",
          "desc": "Perjalanan terapi suara dengan mangkuk perunggu Tibet kuno dan lantunan mantra Veda untuk penyelarasan getaran energi tubuh secara menyeluruh."
        },
        {
          "icon": "🍲",
          "title": "Makanan Sattvic Bernutrisi Ashram",
          "desc": "Tiga kali makan sehari hidangan vegetarian Ayurveda segar yang dimasak dengan penuh cinta dan kesadaran (Ahimsa) untuk kejernihan pikiran dan tubuh."
        }
      ],
      "varkala": [
        {
          "icon": "🌅",
          "title": "Yoga Matahari Terbit di Atas Tebing",
          "desc": "Latihan Hatha dan Vinyasa pagi di shala kayu terbuka menghadap samudra lepas saat semilir angin laut yang menyegarkan membangkitkan energi tubuh."
        },
        {
          "icon": "🌺",
          "title": "Pijat Abhyanga Ayurveda Kerala Autentik",
          "desc": "Pijat minyak herbal hangat tradisional Kerala oleh terapis lokal berpengalaman untuk melemaskan otot tegang dan menutrisi jaringan tubuh secara mendalam."
        },
        {
          "icon": "🌊",
          "title": "Meditasi Matahari Terbenam Tepi Laut",
          "desc": "Meditasi terpandu dan latihan pernapasan menenangkan dengan irama deburan ombak samudra saat matahari terbenam di balik cakrawala Laut Arab."
        },
        {
          "icon": "🏖️",
          "title": "Jalan Sehat Pantai Suci Papanasam",
          "desc": "Berjalan santai di sepanjang tebing merah Varkala dan Pantai Papanasam yang terkenal dengan mata air mineral alami yang diyakini menyucikan kelelahan."
        },
        {
          "icon": "✨",
          "title": "Latihan Pernapasan Laut & Reiki",
          "desc": "Sesi pranayama menyerap ion negatif alami laut yang melimpah, dipadukan dengan terapi Reiki lembut untuk memulihkan kelelahan fisik dan mental."
        },
        {
          "icon": "🥥",
          "title": "Santapan Sehat Ayurveda Pesisir Kerala",
          "desc": "Tiga kali makan sehari hidangan vegetarian dan vegan pesisir kaya kelapa segar, kunyit, daun kari, dan rempah alami yang menyegarkan sel-sel tubuh."
        }
      ]
    },
    "datesTitle": "Tanggal Retret – Tersedia Sepanjang Tahun",
    "datesSub": "Kami menyelenggarakan retret yoga sepanjang tahun. Anda dapat mulai pada hari apa pun sesuai jadwal perjalanan Anda.",
    "checkAvailability": "Cek Ketersediaan Tanggal →",
    "mostPopular": "Pilihan Paling Populer",
    "perPerson": "/ orang",
    "diningSubtitle": "Nutrisi untuk Tubuh & Pikiran",
    "diningTableHeading": "Jadwal Waktu Makan Harian",
    "mealsFallback": [
      {
        "meal": "Sarapan Pagi",
        "time": "09:30 AM",
        "notes": "Buah-buahan tropis segar, smoothie bowl, bubur bernutrisi, teh herbal"
      },
      {
        "meal": "Makan Siang",
        "time": "12:30 PM – 01:30 PM",
        "notes": "Hidangan mangkuk nabati organik bergizi, sayuran kukus lezat"
      },
      {
        "meal": "Makan Malam",
        "time": "07:00 PM – 08:00 PM",
        "notes": "Sup hangat bernutrisi, kari sayuran, dan tonik pencernaan herbal"
      }
    ],
    "scheduleSub": "Klik setiap hari di bawah ini untuk melihat jadwal rinci mulai dari bangun pagi hingga ketenangan malam.",
    "dayTabPrefix": "Jadwal Hari",
    "dayTabSuffix": "",
    "dayOfPrefix": "Hari",
    "dayOfConnector": "dari",
    "campusAmenitiesTitle": "Fasilitas & Kenyamanan Kampus",
    "amenitiesList": [
      "🏊 Kolam Renang (10:00 - 20:00)",
      "❄️ Pendingin Ruangan (AC) Sunyi",
      "📶 Wi-Fi Berkecepatan Tinggi",
      "🧘 Shala Yoga Bambu Terbuka",
      "🚿 Pancuran Air Panas",
      "🧹 Layanan Kebersihan Harian"
    ],
    "campusOneTitle": "Sanctuary Taman Tropis Deluxe",
    "campusOneDesc": "Vila batu tradisional Bali di tengah rimbunnya tanaman kamboja dan palem tropis. Dilengkapi teras pribadi dan shala yoga bambu yang tenang.",
    "campusOneFeatures": [
      "✓ Pilihan Tempat Tidur King atau Twin",
      "✓ Kamar mandi semi-terbuka dengan pancuran air panas",
      "✓ Teras santai dengan pemandangan alam asri"
    ],
    "campusTwoTitle": "Kampus Kolam Renang Mewah Baru",
    "campusTwoDesc": "Kamar butik modern yang terletak tepat di tepi kolam renang dengan desain kayu jati elegan, kursi berjemur santai, dan Wi-Fi cepat.",
    "campusTwoFeatures": [
      "✓ Akses langsung beberapa langkah ke kolam renang",
      "✓ Kamar mandi modern dengan shower rainfall",
      "✓ Area berjemur dan bersantai pribadi"
    ],
    "studentGuaranteeTitle": "Garansi Siswa:",
    "studentGuaranteeText": "Kami memahami rencana perjalanan dapat berubah. Deposit retret Anda tetap terlindungi dengan satu kali penjadwalan ulang gratis dengan pemberitahuan 15 hari.",
    "airportPickupTitle": "Penjemputan Bandara Pribadi:",
    "airportPickupText": "Kami menyediakan layanan taksi pribadi ber-AC yang nyaman langsung dari area kedatangan bandara menuju resepsionis kampus kami.",
    "durationButtons": {
      "3-days": "Reset Akhir Pekan 3 Hari",
      "7-days": "Pembaruan Diri 7 Hari",
      "14-days": "Transformasi Mendalam 14 Hari"
    },
    "gallery": [
      {
        "title": "Kolam Renang Sanctuary",
        "desc": "Buka setiap hari pukul 10:00 – 20:00 di tengah asrinya alam tropis"
      },
      {
        "title": "Shala Yoga Bambu Terbuka",
        "desc": "Langit-langit tinggi dan sirkulasi udara alami menghadap pepohonan asri"
      },
      {
        "title": "Suite Taman Pribadi Deluxe",
        "desc": "Tempat tidur king nyaman, pendingin ruangan sunyi & teras pribadi"
      },
      {
        "title": "Kenyamanan Kamar Bersama Twin",
        "desc": "Tata ruang luas dengan dua tempat tidur terpisah & kamar mandi dalam"
      },
      {
        "title": "Santapan Nabati Ahimsa",
        "desc": "Tiga kali sehari hidangan lezat vegan dan vegetarian segar bernutrisi"
      },
      {
        "title": "Sound Healing & Meditasi",
        "desc": "Mangkuk bernyanyi Tibet dan terapi getaran sakral menenangkan jiwa"
      }
    ],
    "crossLinks": {
      "days12": "12 Hari",
      "days28": "28 Hari",
      "mostPopular": "Paling Populer",
      "learnMore": "Pelajari Lebih Lanjut",
      "fromLearnMore": "Mulai {price} • Pelajari Lebih Lanjut",
      "desc100": "Pelatihan dasar komprehensif bagi praktisi yang berdedikasi.",
      "desc200": "Pelatihan guru unggulan kami yang terakreditasi Yoga Alliance.",
      "desc300": "Jalur pelatihan guru tingkat lanjut menuju kualifikasi RYT 500.",
      "desc100Varkala": "Imersi pemula di tepi pantai dengan dasar-dasar Ayurveda Kerala.",
      "desc200Varkala": "Sertifikasi Yoga Alliance RYT 200 dengan imersi penyembuhan Ayurveda.",
      "desc300Varkala": "Pelatihan guru tingkat master lanjutan menuju kualifikasi RYT 500."
    },
    "facultySub": {
      "bali": "Belajar di bawah bimbingan yogacharya dan master guru berpengalaman dengan dedikasi pengajaran puluhan tahun.",
      "rishikesh": "Belajar di bawah bimbingan yogacharya Himalaya autentik dan master guru berpengalaman dengan dedikasi pengajaran puluhan tahun.",
      "varkala": "Belajar di bawah bimbingan master yoga dan pengajar Ayurveda berpengalaman dengan dedikasi praktik puluhan tahun."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Pendiri & Direktur Spiritual",
        "bio": {
          "bali": "Dengan lebih dari 12 tahun disiplin sadhana Himalaya, Sachin Ji memadukan teknik Veda kuno dengan kesadaran modern, membimbing ribuan praktisi internasional menuju transformasi mendalam.",
          "rishikesh": "Dengan lebih dari 12 tahun disiplin sadhana Himalaya, Sachin Ji memadukan teknik Veda kuno dengan kesadaran modern, membimbing ribuan praktisi internasional menuju transformasi mendalam.",
          "varkala": "Dengan lebih dari 12 tahun disiplin sadhana yoga, Sachin Ji memadukan kearifan Veda kuno dengan kesadaran modern, membimbing praktisi menuju pemulihan tubuh dan ketenangan batin."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Co-Founder & Mentor Utama",
        "bio": "Lahir dalam keluarga yogi tradisional, Chanda Ji mendedikasikan lebih dari empat dekade dalam sadhana mendalam, membimbing siswa melalui keselarasan lembut, mudra, dan bhakti yoga."
      },
      {
        "name": "Rahul Ji",
        "role": "Master Vinyasa Senior",
        "bio": "Dikenal dengan alur sekuens yang mengalir dan ketepatan anatomi, Rahul Ji membawa energi dinamis ke kelas pagi, menjadikan latihan asana tingkat lanjut terasa menyenangkan dan aman."
      },
      {
        "name": "Rohit Ji",
        "role": "Guru Pranayama & Meditasi",
        "bio": {
          "bali": "Terlatih di ashram suci di tepi Sungai Gangga, Rohit Ji mengajarkan mekanika pernapasan halus dan pelepasan somatik mendalam untuk meredakan ketegangan sistem saraf.",
          "rishikesh": "Terlatih di ashram suci di tepi Sungai Gangga, Rohit Ji mengajarkan mekanika pernapasan halus dan pelepasan somatik mendalam untuk meredakan ketegangan sistem saraf.",
          "varkala": "Terlatih dalam yoga klasik dan ilmu pernapasan tubuh, Rohit Ji mengajarkan teknik pernapasan halus dan pelepasan somatik untuk meredakan stres dan menenangkan sistem saraf."
        }
      }
    ]
  }
};

export function getRetreatUI(locale: string): RetreatUIData {
  return RETREAT_DETAIL_UI[locale] || RETREAT_DETAIL_UI['en'];
}
