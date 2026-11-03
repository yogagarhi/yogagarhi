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
  transparentPricing?: string;
  pricingDescription?: string;
  venueDetailsSoon?: string;
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
    ],
    "transparentPricing": "Transparent Pricing",
    "pricingDescription": "Choose the accommodation style that suits your journey. All packages include daily yoga, treatments, meals, and full campus access.",
    "venueDetailsSoon": "Accommodation and venue details will be shared soon."
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
    ],
    "transparentPricing": "Harga Transparan",
    "pricingDescription": "Pilih gaya akomodasi yang sesuai dengan perjalanan Anda. Semua paket mencakup yoga harian, perawatan, makanan sehat, dan akses kampus penuh.",
    "venueDetailsSoon": "Detail akomodasi dan lokasi akan segera dibagikan."
  },
  "de": {
    "signatureExperience": "Einzigartiges Erlebnis",
    "offersHeading": "YogaGarhi Angebote",
    "offersSub": {
      "bali": "Ein all-inclusive transformatives Wellness-Retreat, bei dem uralte Yoga-Tradition auf die heilende Energie von Bali trifft.",
      "rishikesh": "Ein authentisches Himalaya-Erlebnis, bei dem die heilige Energie des Ganges auf tiefgründige vedische Traditionen trifft.",
      "varkala": "Ein ayurvedisches Küsten-Retreat, bei dem der Blick auf die Klippen des Arabischen Meeres auf traditionelle Heiltherapien trifft."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Multi-Style Yoga-Praxis",
          "desc": "Tägliche Hatha Vinyasa Flows am Morgen für Kraft und sanftes Yin Yoga am Abend für tiefe Flexibilität und Entspannung."
        },
        {
          "icon": "🌺",
          "title": "Tägliche Balinesische Massagen",
          "desc": "Tägliche kostenlose Ganzkörper-Massagen mit warmen Bio-Kräuterölen zur Muskelentspannung und Beruhigung der Sinne."
        },
        {
          "icon": "🔔",
          "title": "Klangheilungs-Sitzungen",
          "desc": "Erlebe heilsame Klangbäder mit tibetischen Klangschalen und Gongs in unserer offenen Bambus-Yoga-Shala."
        },
        {
          "icon": "🌊",
          "title": "Heilige Melukat-Wassersegnung",
          "desc": "Traditionelle balinesische Wasserreinigung im Wassertempel Tirta Empul zur Reinigung von Geist und Seele."
        },
        {
          "icon": "✨",
          "title": "Reiki & Chakra-Ausgleich",
          "desc": "Tiefes Pranayama und sanfte Reiki-Energieheilung zum Ausgleich der Chakren und für geistige Klarheit."
        },
        {
          "icon": "🥗",
          "title": "Pflanzliche Ahimsa-Küche",
          "desc": "Drei tägliche vegane und vegetarische Mahlzeiten aus frischen Bio-Zutaten zur natürlichen Entgiftung."
        }
      ],
      "rishikesh": [
        {
          "icon": "🏔️",
          "title": "Himalaya Hatha & Ashtanga",
          "desc": "Authentische Hatha- und Ashtanga-Flow-Einheiten, geleitet von erfahrenen Himalaya-Yogacharyas."
        },
        {
          "icon": "🌿",
          "title": "Ayurvedische Heiltherapie",
          "desc": "Verjüngende ayurvedische Körpertherapien und warme Kräuteröl-Massagen zum Ausgleich der Doshas."
        },
        {
          "icon": "🌊",
          "title": "Meditation am Heiligen Ganges",
          "desc": "Achtsamkeitsmeditation an den Ufern des heiligen Ganges mit Teilnahme an der abendlichen Ganga Aarti Zeremonie."
        },
        {
          "icon": "💨",
          "title": "Meisterung des Pranayama",
          "desc": "Klassische yogische Atemtechniken (Kapalabhati, Nadi Shodhana, Bhastrika) zur Beruhigung des Nervensystems."
        },
        {
          "icon": "🔔",
          "title": "Klangheilung & Mantra-Singen",
          "desc": "Klangtherapie mit tibetischen Klangschalen und vedischen Gesängen zur Harmonisierung der Energiezentren."
        },
        {
          "icon": "🍲",
          "title": "Nahrhafte Sattvische Küche",
          "desc": "Drei tägliche nahrhafte ayurvedische Mahlzeiten, frisch und achtsam zubereitet nach dem Prinzip von Ahimsa."
        }
      ],
      "varkala": [
        {
          "icon": "🌅",
          "title": "Yoga auf den Klippen bei Sonnenaufgang",
          "desc": "Morgendliche Hatha- und Vinyasa-Praxis in unserer offenen Shala mit weitem Blick über das Arabische Meer."
        },
        {
          "icon": "🌺",
          "title": "Authentische Kerala Ayurveda Abhyanga",
          "desc": "Traditionelle warme Kräuteröl-Massagen durch erfahrene Therapeuten zur Tiefenentspannung."
        },
        {
          "icon": "🌊",
          "title": "Meditation am Meer bei Sonnenuntergang",
          "desc": "Geführte Meditation und beruhigende Atemübungen im Rhythmus der Wellen bei Sonnenuntergang."
        },
        {
          "icon": "🏖️",
          "title": "Achtsamer Strandspaziergang Papanasam",
          "desc": "Spaziergänge entlang der roten Klippen von Varkala und des heiligen Papanasam-Strands."
        },
        {
          "icon": "✨",
          "title": "Meeresbrise-Pranayama & Reiki",
          "desc": "Pranayama in der sauerstoffreichen Meeresluft, kombiniert mit sanfter Reiki-Therapie zur Vitalisierung."
        },
        {
          "icon": "🥥",
          "title": "Ayurvedische Küstenküche aus Kerala",
          "desc": "Drei tägliche frische vegetarische und vegane Mahlzeiten mit Kokosnuss, Kurkuma und heimischen Gewürzen."
        }
      ]
    },
    "datesTitle": "Retreat-Termine – Ganzjährig Verfügbar",
    "datesSub": "Wir bieten ganzjährig Yoga-Retreats an. Du kannst an jedem Wochentag starten.",
    "checkAvailability": "Verfügbarkeit Prüfen →",
    "mostPopular": "Beliebteste Wahl",
    "perPerson": "/ Person",
    "diningSubtitle": "Nahrung für Körper & Geist",
    "diningTableHeading": "Tägliche Essenszeiten",
    "mealsFallback": [
      {
        "meal": "Frühstück",
        "time": "09:30 Uhr",
        "notes": "Tropische Früchte, Smoothie Bowls, warmer Haferbrei, Kräutertee"
      },
      {
        "meal": "Mittagessen",
        "time": "12:30 – 13:30 Uhr",
        "notes": "Nahrhafte pflanzliche Bowls, Salate, gedünstetes Gemüse"
      },
      {
        "meal": "Abendessen",
        "time": "19:00 – 20:00 Uhr",
        "notes": "Warme Suppen, Currys, ayurvedische Verdauungstees"
      }
    ],
    "scheduleSub": "Klicke auf die Tage unten, um den genauen Tagesablauf vom Morgen bis zum Abend zu sehen.",
    "dayTabPrefix": "Tag",
    "dayTabSuffix": "",
    "dayOfPrefix": "Tag",
    "dayOfConnector": "von",
    "campusAmenitiesTitle": "Campus-Ausstattung & Komfort",
    "amenitiesList": [
      "🏊 Swimmingpool (10:00 - 20:00 Uhr)",
      "❄️ Leise Klimaanlage",
      "📶 High-Speed WLAN auf dem Campus",
      "🧘 Offene Bambus-Yoga-Shala",
      "🚿 Warme Regenduschen",
      "🧹 Täglicher Reinigungsservice"
    ],
    "campusOneTitle": "Deluxe Garten-Oase",
    "campusOneDesc": "Traditionelle balinesische Steinvillen inmitten tropischer Gärten mit privaten Balkonen und offener Bambus-Shala.",
    "campusOneFeatures": [
      "✓ King-Size-Bett oder 2 Einzelbetten",
      "✓ Halboffenes balinesisches Bad mit Warmwasserdusche",
      "✓ Eigene Terrasse mit tropischem Blick"
    ],
    "campusTwoTitle": "Neuer Luxus-Pool-Campus",
    "campusTwoDesc": "Moderne Zimmer direkt am Swimmingpool mit Teakholz-Design, Sonnenliegen und High-Speed WLAN.",
    "campusTwoFeatures": [
      "✓ Direkter Zugang zum Pool",
      "✓ Modernes Bad mit Regendusche",
      "✓ Eigene Sonnenterrasse mit Liegen"
    ],
    "studentGuaranteeTitle": "Teilnehmer-Garantie:",
    "studentGuaranteeText": "Reisepläne können sich ändern. Deine Anzahlung ist durch eine kostenlose Terminumbuchung geschützt.",
    "airportPickupTitle": "Privater Flughafentransfer:",
    "airportPickupText": "Wir organisieren zuverlässige, klimatisierte Taxis direkt von der Ankunftshalle zum Retreat.",
    "durationButtons": {
      "3-days": "3 Tage Wochenend-Reset",
      "7-days": "7 Tage Erneuerung",
      "14-days": "14 Tage Transformation"
    },
    "gallery": [
      {
        "title": "Sanctuary Swimming Pool",
        "desc": "Täglich geöffnet von 10:00 bis 20:00 Uhr inmitten tropischer Natur"
      },
      {
        "title": "Offene Bambus-Yoga-Shala",
        "desc": "Hohe Decken und natürliche Belüftung mit Blick auf die Palmen"
      },
      {
        "title": "Deluxe Private Garten-Suite",
        "desc": "Bequemes King-Bett, leise Klimaanlage & private Terrasse"
      },
      {
        "title": "Komfortables Zweibettzimmer",
        "desc": "Geräumiges Zimmer mit zwei getrennten Betten und eigenem Bad"
      },
      {
        "title": "Pflanzliche Ahimsa-Küche",
        "desc": "Dreimal täglich frische vegane und vegetarische Köstlichkeiten"
      },
      {
        "title": "Klangheilung & Meditation",
        "desc": "Tibetische Klangschalen und heilsame Schwingungstherapie"
      }
    ],
    "crossLinks": {
      "days12": "12 Tage",
      "days28": "28 Tage",
      "mostPopular": "Sehr Beliebt",
      "learnMore": "Mehr Erfahren",
      "fromLearnMore": "Ab {price} • Mehr Erfahren",
      "desc100": "Umfassende Grundausbildung für engagierte Yogapraktizierende.",
      "desc200": "Unsere renommierte, von der Yoga Alliance zertifizierte Ausbildung.",
      "desc300": "Aufbauausbildung auf dem Weg zum RYT 500 Zertifikat.",
      "desc100Varkala": "Einsteiger-Intensivkurs am Meer mit Grundlagen des Kerala Ayurveda.",
      "desc200Varkala": "Yoga Alliance RYT 200 Zertifizierung mit ayurvedischer Vertiefung.",
      "desc300Varkala": "Master-Ausbildung für Fortgeschrittene zum RYT 500 Zertifikat."
    },
    "facultySub": {
      "bali": "Lerne unter der Leitung erfahrener Himalaya-Yogacharyas mit jahrzehntelanger Unterrichtserfahrung.",
      "rishikesh": "Lerne unter der Leitung traditioneller Himalaya-Yogacharyas an der heiligen Quelle des Yoga.",
      "varkala": "Lerne unter erfahrenen Yogameistern und Ayurveda-Dozenten an der Küste Keralas."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Gründer & Spiritueller Leiter",
        "bio": {
          "bali": "Mit über 12 Jahren Himalaya-Sadhana verbindet Sachin Ji uralte vedische Weisheit mit moderner Achtsamkeit.",
          "rishikesh": "Mit über 12 Jahren Himalaya-Sadhana verbindet Sachin Ji uralte vedische Weisheit mit moderner Achtsamkeit.",
          "varkala": "Mit über 12 Jahren yogischer Praxis führt Sachin Ji Übende zu tiefer körperlicher und geistiger Regeneration."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Mitgründerin & Leitende Mentorin",
        "bio": "Aufgewachsen in einer traditionellen Yogi-Familie, widmet Chanda Ji ihr Leben dem Sadhana und Bhakti Yoga."
      },
      {
        "name": "Rahul Ji",
        "role": "Senior Vinyasa Meister",
        "bio": "Bekannt für fließende Sequenzen und anatomische Präzision bringt Rahul Ji dynamische Energie in den Unterricht."
      },
      {
        "name": "Rohit Ji",
        "role": "Pranayama & Meditationslehrer",
        "bio": {
          "bali": "Ausgebildet an heiligen Ashrams am Ganges, lehrt Rohit Ji subtile Atemmechanik und somatische Entspannung.",
          "rishikesh": "Ausgebildet an heiligen Ashrams am Ganges, lehrt Rohit Ji subtile Atemmechanik und somatische Entspannung.",
          "varkala": "Ausgebildet in klassischem Yoga und Atemwissenschaften, vermittelt Rohit Ji heilsame Tiefenentspannung."
        }
      }
    ],
    "transparentPricing": "Transparente Preise",
    "pricingDescription": "Wählen Sie den Unterkunftsstil, der zu Ihrer Reise passt. Alle Pakete beinhalten tägliches Yoga, Behandlungen, Mahlzeiten und vollen Campus-Zugang.",
    "venueDetailsSoon": "Details zu Unterkunft und Veranstaltungsort werden in Kürze bekannt gegeben."
  },
  "nl": {
    "signatureExperience": "Kenmerkende Ervaring",
    "offersHeading": "YogaGarhi Biedt",
    "offersSub": {
      "bali": "Een all-inclusive transformerende wellnessretraite waar oude yogische traditie de helende energie van Bali ontmoet.",
      "rishikesh": "Een authentieke onderdompeling in de Himalaya waar de heilige energie van de Ganges samenvloeit met diepe Vedische tradities.",
      "varkala": "Een Ayurvedische kustretraite waar de kliffen van de Arabische Zee samenkomen met de helende tradities van Kerala."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Multi-Stijl Yogapraktijk",
          "desc": "Ochtend Hatha Vinyasa voor fysieke kracht en zachte avond Yin yoga voor diepe flexibiliteit en ontspanning."
        },
        {
          "icon": "🌺",
          "title": "Dagelijkse Balinese Massage",
          "desc": "Dagelijks inbegrepen traditionele Balinese lichaamsmassage met warme botanische oliën om spieren te ontspannen en energie te herstellen."
        },
        {
          "icon": "🔔",
          "title": "Klankheling & Ademwerk",
          "desc": "Diep ontspannende Tibetaanse klankschalensessies en geleide Pranayama-ademhaling om het zenuwstelsel te kalmeren."
        },
        {
          "icon": "🥑",
          "title": "Voedzame Biologische Maaltijden",
          "desc": "Drie dagelijkse plantaardige maaltijden van boer tot bord, bereid met biologische ingrediënten om lichaam en geest te voeden."
        },
        {
          "icon": "🌊",
          "title": "Heilige Melukat Waterzuivering",
          "desc": "Bezoek aan een heilige watertempel voor het traditionele Balinese Melukat-zuiveringsritueel."
        },
        {
          "icon": "🌿",
          "title": "Jungle Toevluchtsoord & Zwembad",
          "desc": "Verblijf in een rustig toevluchtsoord in Ubud, omgeven door weelderige natuur met een groot zwembad en openlucht yogashala."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "Klassieke Hatha & Ashtanga",
          "desc": "Ochtend Hatha- en avond Ashtanga-Vinyasa sessies onder leiding van traditionele Himalaya yogameesters."
        },
        {
          "icon": "🌊",
          "title": "Ganges Meditatie & Aarti",
          "desc": "Ochtendmeditaties aan de oevers van de heilige Ganges en dagelijkse avond Ganga Aarti rituelen."
        },
        {
          "icon": "🌿",
          "title": "Ayurvedische Consultatie & Behandelingen",
          "desc": "Persoonlijk consult met een Ayurvedisch arts en traditionele Abhyanga-therapieën."
        },
        {
          "icon": "🍲",
          "title": "Puur Sattvisch Dieet",
          "desc": "Drie dagelijkse verse vegetarische maaltijden bereid volgens klassieke Ayurvedische principes."
        },
        {
          "icon": "🏔️",
          "title": "Himalaya Zonsopgang Excursie",
          "desc": "Vroege ochtend meditatie bij Kunjapuri Tempel met adembenemend uitzicht op de met sneeuw bedekte toppen."
        },
        {
          "icon": "🕉️",
          "title": "Filosofie & Vedische Mantra's",
          "desc": "Diepgaande filosofielessen over de Yoga Sutra's van Patanjali, Bhagavad Gita en dagelijkse Kirtan."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "Oceaan Yoga & Pranayama",
          "desc": "Dagelijkse yogasessies op het openluchtdek met het rustgevende geluid van de golven van de Arabische Zee."
        },
        {
          "icon": "🌿",
          "title": "Volledige Ayurvedische Panchakarma",
          "desc": "Gepersonaliseerde Ayurvedische behandelingen en Abhyanga massages met geneeskrachtige kruidenoliën uit Kerala."
        },
        {
          "icon": "🏖️",
          "title": "Papanasam Strand Zuivering",
          "desc": "Ochtendmeditatie en reinigingswandelingen langs het heilige Papanasam strand en de rode kliffen."
        },
        {
          "icon": "🍲",
          "title": "Kust-Ayurvedische Maaltijden",
          "desc": "Drie dagelijkse verse Sattvische maaltijden, bereid met lokale kruiden en verse kokosnoot."
        },
        {
          "icon": "🌅",
          "title": "Klif Zonsondergang Yin Yoga",
          "desc": "Diepe ontspannende Yin yoga en Yoga Nidra sessies tijdens de spectaculaire zonsondergangen van Varkala."
        },
        {
          "icon": "🥥",
          "title": "Kerala Backwaters Boottocht",
          "desc": "Ontspannende boottocht door de serene waterwegen van Kerala en culturele bezoeken aan lokale tempels."
        }
      ]
    },
    "datesTitle": "Retraitedata — Het Hele Jaar Beschikbaar",
    "datesSub": "Onze retraites starten flexibel op elke gewenste datum. Kies de aankomstdag die het beste bij uw schema past.",
    "checkAvailability": "Controleer Beschikbaarheid",
    "mostPopular": "Meest Populair",
    "perPerson": "/ persoon",
    "transparentPricing": "Transparante Prijzen",
    "pricingDescription": "Kies de accommodatiestijl die bij uw reis past. Alle pakketten zijn inclusief dagelijks yoga, behandelingen, maaltijden en volledige toegang tot de campus.",
    "venueDetailsSoon": "Details over accommodatie en locatie worden binnenkort bekendgemaakt.",
    "diningSubtitle": "Puur, voedzaam en bereid met liefde om uw helingsproces te ondersteunen.",
    "diningTableHeading": "Dagelijks Voedingsschema",
    "mealsFallback": [
      {
        "meal": "Ontbijt",
        "time": "08:30 - 09:30",
        "notes": "Vers tropisch fruit, warme havermoutpap, kruidenthee en kokoswater."
      },
      {
        "meal": "Lunch",
        "time": "13:00 - 14:00",
        "notes": "Voedzame plantaardige gerechten, verse salades, peulvruchten en volle granen."
      },
      {
        "meal": "Diner",
        "time": "19:00 - 20:00",
        "notes": "Lichte Ayurvedische soepen, gestoomde groenten en rustgevende kruidenthee."
      }
    ],
    "scheduleSub": "Een zorgvuldig ontworpen dagritme dat actieve beoefening, diepe ontspanning en innerlijke rust harmonieus combineert.",
    "dayTabPrefix": "Dag ",
    "dayTabSuffix": "",
    "dayOfPrefix": "Dag ",
    "dayOfConnector": " van ",
    "campusAmenitiesTitle": "Campusfaciliteiten & Voorzieningen",
    "amenitiesList": [
      "Openlucht yogashala met uitzicht op de natuur",
      "Groot buitenzwembad met ligstoelen",
      "Heilzame botanische kruidentuin",
      "Snelle glasvezel wifi op het hele terrein",
      "Ayurvedische behandelkamers en spa",
      "Stilteruimtes voor meditatie en reflectie",
      "24/7 gezuiverd mineraaldrinkwater en kruidenthee",
      "Dagelijkse schoonmaakservice en wasservice"
    ],
    "campusOneTitle": "Campus I — Hoofdverblijf & Tuinen",
    "campusOneDesc": "Het hart van onze retraite, omgeven door weelderige tropische tuinen met directe toegang tot de hoofdyogashala en het zwembad.",
    "campusOneFeatures": [
      "Traditionele Balinese architectuur met teak houten details",
      "Ruime kamers met eigen halfopen badkamer",
      "Directe toegang tot het zwembad en de zonnedekken",
      "Uitzicht op tropische palmbomen en bloementuinen"
    ],
    "campusTwoTitle": "Campus II — Rustig Natuurtoevluchtsoord",
    "campusTwoDesc": "Een intiem en vredig toevluchtsoord, ontworpen voor gasten die op zoek zijn naar diepe stilte en afzondering.",
    "campusTwoFeatures": [
      "Moderne luxe kamers met airconditioning",
      "Eigen balkon met uitzicht op het omliggende groen",
      "Toegang tot alle faciliteiten van Campus I",
      "Ideaal voor stille contemplatie en herstel"
    ],
    "studentGuaranteeTitle": "Onze Toewijding aan Jouw Welzijn",
    "studentGuaranteeText": "Wij garanderen een veilige, respectvolle en diep verzorgende omgeving. Onze docenten en therapeuten begeleiden je met persoonlijke aandacht en oprechte zorg.",
    "airportPickupTitle": "Inbegrepen Luchthaventransfer",
    "airportPickupText": "Je retraite begint zorgeloos. Wij zorgen voor een vriendelijke privéchauffeur die je opwacht bij aankomst op de luchthaven.",
    "durationButtons": {
      "3days": "3 Dagen Retraite",
      "7days": "7 Dagen Retraite",
      "14days": "14 Dagen Retraite"
    },
    "gallery": [
      {
        "title": "Hoofd Yogashala",
        "desc": "Onze open bamboeshala omgeven door rustgevende tropische natuur."
      },
      {
        "title": "Buitenzwembad",
        "desc": "Kristalhelder zwembad om af te koelen tussen de sessies door."
      },
      {
        "title": "Plantaardige Maaltijden",
        "desc": "Kleurrijke, voedzame gerechten bereid met biologische ingrediënten."
      },
      {
        "title": "Luxe Privékamers",
        "desc": "Rustgevende kamers met comfortabele bedden en moderne voorzieningen."
      },
      {
        "title": "Ayurvedische Spa",
        "desc": "Traditionele massageruimtes voor diepe ontspanning en verjonging."
      },
      {
        "title": "Tropische Tuinen",
        "desc": "Weelderige paden en serene zithoeken voor stille meditatie."
      }
    ],
    "crossLinks": {
      "days12": "12 Dagen Opleiding",
      "days28": "28 Dagen Opleiding",
      "mostPopular": "Meest Populair",
      "learnMore": "Meer Informatie",
      "fromLearnMore": "Vanaf $",
      "desc100": "100-Uur Opleiding: Een diepgaande basiscursus voor beginners.",
      "desc200": "200-Uur Opleiding: Onze internationaal erkende Yoga Alliance opleiding.",
      "desc300": "300-Uur Opleiding: Gevorderde meesteropleiding voor gecertificeerde docenten.",
      "desc100Varkala": "100-Uur Varkala: Een kustonderdompeling in yoga en Ayurveda.",
      "desc200Varkala": "200-Uur Varkala: Yoga Alliance certificering aan de Arabische Zee.",
      "desc300Varkala": "300-Uur Varkala: Gevorderde verdieping aan de kliffen van Kerala."
    },
    "facultySub": {
      "bali": "Leer van ervaren meesters met decennialange toewijding aan authentieke yogische tradities.",
      "rishikesh": "Onder leiding van traditionele Himalaya yogameesters geworteld in de Vedische traditie.",
      "varkala": "Ervaren yogadocenten en gediplomeerde Ayurvedische artsen uit Kerala."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Oprichter & Spiritueel Directeur",
        "bio": {
          "bali": "Met meer dan 12 jaar Himalaya sadhana overbrugt Sachin Ji oude Vedische technieken met moderne mindfulness, en begeleidt hij beoefenaars naar diepe innerlijke transformatie.",
          "rishikesh": "Geworteld in de heilige tradities van Rishikesh leidt Sachin Ji studenten met diepe toewijding door authentieke klassieke Hatha en meditatie.",
          "varkala": "Met diep respect voor de Vedische traditie integreert Sachin Ji klassieke yoga met de kust-energetica van Varkala voor diepe somatische rust."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Mede-oprichter & Hoofddocent",
        "bio": {
          "bali": "Geboren in een traditionele yogafamilie heeft Chanda Ji meer dan vier decennia diepe sadhana beoefend, en inspireert studenten met zachte uitlijning, mudra's en devotie.",
          "rishikesh": "Chanda Ji brengt decennia aan devotionele beoefening over aan de oevers van de Ganges, met de nadruk op hartopenende Hatha en pranayama.",
          "varkala": "Chanda Ji begeleidt deelnemers naar diepe ontspanning en innerlijke vrede door middel van zachte afstemming en helende ademhaling."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "Senior Anatomie- & Asanadocent",
        "bio": {
          "bali": "Opgeleid in klassieke yoga en ademwetenschappen leert Rohit Ji subtiele ademmechanica en diepe somatische ontspanning die zenuwspanning oplost.",
          "rishikesh": "Rohit Ji combineert een grondige kennis van anatomie met klassieke yogaprincipes om een veilige en transformerende asanapraktijk te waarborgen.",
          "varkala": "Rohit Ji combineert functionele anatomie met Ayurvedische fysiologie om studenten te helpen spanning los te laten en balans te herstellen."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "Filosofie & Meditatiedocent",
        "bio": {
          "bali": "Gespecialiseerd in Vedantische filosofie en mindfulness meditatie, helpt Priyanka Ji studenten om oude wijsheid praktisch toe te passen in het moderne leven.",
          "rishikesh": "Priyanka Ji leidt studenten door de diepzinnige teksten van de Yoga Sutra's en de Upanishads in de inspirerende omgeving van Rishikesh.",
          "varkala": "Priyanka Ji verzorgt diepgaande filosofische satsangs en geleide meditaties aan de rustgevende kust van Varkala."
        }
      }
    ]
  },
  "fr": {
    "signatureExperience": "Expérience Signature",
    "offersHeading": "YogaGarhi Vous Propose",
    "offersSub": {
      "bali": "Une retraite de bien-être immersive tout compris où la lignée yogique ancienne rencontre l'énergie bienfaisante de Bali.",
      "rishikesh": "Une immersion himalayenne authentique où l'énergie sacrée du Gange rencontre les profondes traditions védiques.",
      "varkala": "Une retraite ayurvédique côtière où les falaises de la mer d'Arabie rencontrent les traditions thérapeutiques du Kerala."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Pratique Multi-Styles de Yoga",
          "desc": "Séances matinales de Hatha Vinyasa pour la vitalité physique et séances douces de Yin yoga le soir pour une relaxation profonde."
        },
        {
          "icon": "🌺",
          "title": "Massage Balinais Quotidien Offert",
          "desc": "Massage corporel balinais complet quotidien avec des huiles botaniques chaudes pour dénouer les tensions musculaires."
        },
        {
          "icon": "🔔",
          "title": "Bain Sonore & Travail du Souffle",
          "desc": "Séances apaisantes aux bols tibétains chantants et Pranayama guidé pour rééquilibrer le système nerveux."
        },
        {
          "icon": "🥑",
          "title": "Repas Biologiques & Équilibrés",
          "desc": "Trois repas végétaux quotidiens préparés avec des ingrédients frais et biologiques pour revitaliser le corps."
        },
        {
          "icon": "🌊",
          "title": "Purification Sacrée de l'Eau Melukat",
          "desc": "Visite d'un temple de sources sacrées pour vivre le rituel traditionnel balinais de purification de l'eau Melukat."
        },
        {
          "icon": "🌿",
          "title": "Sanctuaire Paisible & Piscine",
          "desc": "Séjournez dans un sanctuaire serein à Ubud, entouré d'une végétation luxuriante avec piscine et shala de yoga en plein air."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "Hatha & Ashtanga Traditionnels",
          "desc": "Pratique du Hatha le matin et Ashtanga Vinyasa le soir guidée par des maîtres yogis de la lignée himalayenne."
        },
        {
          "icon": "🌊",
          "title": "Méditation au Gange & Ganga Aarti",
          "desc": "Méditations matinales sur les rives sacrées du Gange et participation aux cérémonies nocturnes de la Ganga Aarti."
        },
        {
          "icon": "🌿",
          "title": "Consultation & Soins Ayurvédiques",
          "desc": "Bilan de santé individuel avec un médecin ayurvédique et massages traditionnels Abhyanga aux huiles thérapeutiques."
        },
        {
          "icon": "🍲",
          "title": "Alimentation Sattvique Pure",
          "desc": "Trois repas végétariens frais par jour élaborés selon les principes classiques de la nutrition ayurvédique."
        },
        {
          "icon": "🏔️",
          "title": "Excursion au Lever du Soleil",
          "desc": "Méditation matinale au temple de Kunjapuri avec un panorama spectaculaire sur les sommets enneigés de l'Himalaya."
        },
        {
          "icon": "🕉️",
          "title": "Philosophie & Mantras Védiques",
          "desc": "Enseignements approfondis sur les Yoga Sutras de Patanjali, la Bhagavad Gita et chants dévotionnels Kirtan."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "Yoga Océanique & Pranayama",
          "desc": "Séances quotidiennes de yoga sur notre plateforme extérieure face à la brise marine bienfaisante de la mer d'Arabie."
        },
        {
          "icon": "🌿",
          "title": "Soins Ayurvédiques du Kerala",
          "desc": "Protocoles de soins personnalisés et massages Abhyanga réalisés avec les huiles médicinales réputées du Kerala."
        },
        {
          "icon": "🏖️",
          "title": "Plage Sacrée de Papanasam",
          "desc": "Promenades méditatives et baignades régénérantes le long des falaises rouges et de la plage sacrée de Papanasam."
        },
        {
          "icon": "🍲",
          "title": "Cuisine Ayurvédique Côtière",
          "desc": "Trois repas sattviques savoureux par jour cuisinés avec des herbes fraîches locales et du lait de coco frais."
        },
        {
          "icon": "🌅",
          "title": "Yin Yoga & Coucher de Soleil",
          "desc": "Séances relaxantes de Yin Yoga et Yoga Nidra au coucher du soleil sur les falaises spectaculaires de Varkala."
        },
        {
          "icon": "🥥",
          "title": "Balade en Bateau sur les Backwaters",
          "desc": "Croisière paisible sur les canaux traditionnels du Kerala et découverte du patrimoine culturel local."
        }
      ]
    },
    "datesTitle": "Dates de Retraite — Disponibilité Toute l'Année",
    "datesSub": "Nos retraites commencent avec une totale flexibilité. Choisissez la date d'arrivée qui convient le mieux à vos projets.",
    "checkAvailability": "Vérifier la Disponibilité",
    "mostPopular": "Le Plus Populaire",
    "perPerson": "/ personne",
    "transparentPricing": "Tarification Transparente",
    "pricingDescription": "Choisissez le style d'hébergement adapté à vos envies. Tous les forfaits incluent le yoga quotidien, les soins, les repas et l'accès complet au campus.",
    "venueDetailsSoon": "Les détails concernant l'hébergement et le lieu seront communiqués très prochainement.",
    "diningSubtitle": "Une alimentation saine, pure et préparée avec amour pour accompagner votre processus de guérison.",
    "diningTableHeading": "Programme Quotidien des Repas",
    "mealsFallback": [
      {
        "meal": "Petit-déjeuner",
        "time": "08:30 - 09:30",
        "notes": "Fruits tropicaux frais, porridge chaud, infusions aux herbes et eau de coco."
      },
      {
        "meal": "Déjeuner",
        "time": "13:00 - 14:00",
        "notes": "Plats végétaux équilibrés, salades croquantes, légumineuses et céréales complètes."
      },
      {
        "meal": "Dîner",
        "time": "19:00 - 20:00",
        "notes": "Soupes ayurvédiques légères, légumes vapeur et tisanes apaisantes pour le soir."
      }
    ],
    "scheduleSub": "Un rythme quotidien pensé avec soin pour équilibrer pratique dynamique, soins relaxants et repos intérieur.",
    "dayTabPrefix": "Jour ",
    "dayTabSuffix": "",
    "dayOfPrefix": "Jour ",
    "dayOfConnector": " sur ",
    "campusAmenitiesTitle": "Installations & Services du Campus",
    "amenitiesList": [
      "Shala de yoga en plein air entourée de verdure",
      "Grande piscine extérieure avec chaises longues",
      "Jardin botanique d'herbes médicinales",
      "Connexion Wi-Fi fibre optique haut débit gratuite",
      "Salles de soins ayurvédiques et spa traditionnel",
      "Espaces calmes pour la méditation et la contemplation",
      "Eau minérale filtrée et infusions ayurvédiques à volonté 24h/24",
      "Service de ménage quotidien et blanchisserie"
    ],
    "campusOneTitle": "Campus I — Résidence Principale & Jardins",
    "campusOneDesc": "Le cœur vibrant de notre retraite, niché dans des jardins tropicaux avec accès immédiat à la shala et à la piscine.",
    "campusOneFeatures": [
      "Architecture balinaise traditionnelle avec finitions en bois de teck",
      "Chambres spacieuses avec salle de bain semi-ouverte privative",
      "Accès direct à la piscine et aux terrasses ensoleillées",
      "Vue apaisante sur les palmiers et jardins fleuris"
    ],
    "campusTwoTitle": "Campus II — Refuge Intimiste en Pleine Nature",
    "campusTwoDesc": "Un havre de paix confidentiel conçu spécialement pour les voyageurs recherchant silence absolu et sérénité.",
    "campusTwoFeatures": [
      "Chambres contemporaines climatisées de grand confort",
      "Balcon privé ouvrant sur la forêt tropicale",
      "Accès complet à toutes les commodités du Campus I",
      "Parfait pour la méditation et le repos réparateur"
    ],
    "studentGuaranteeTitle": "Notre Engagement pour Votre Bien-Être",
    "studentGuaranteeText": "Nous vous assurons un cadre bienveillant, sécurisé et profondément ressourçant. Notre équipe et nos thérapeutes sont à votre écoute à chaque étape.",
    "airportPickupTitle": "Transfert Aéroport Inclus",
    "airportPickupText": "Votre voyage commence l'esprit serein : notre chauffeur privé vous accueille personnellement à la sortie de l'aéroport.",
    "durationButtons": {
      "3days": "Retraite de 3 Jours",
      "7days": "Retraite de 7 Jours",
      "14days": "Retraite de 14 Jours"
    },
    "gallery": [
      {
        "title": "Shala de Yoga Principale",
        "desc": "Notre shala en bambou ouverte sur la nature tropicale apaisante."
      },
      {
        "title": "Piscine Extérieure",
        "desc": "Bassin étincelant pour vous rafraîchir entre les séances de yoga."
      },
      {
        "title": "Cuisine Saine & Végétale",
        "desc": "Des mets savoureux et colorés cuisinés avec des produits bio."
      },
      {
        "title": "Chambres Privées de Charme",
        "desc": "Chambres confortables avec literie haut de gamme et vue apaisante."
      },
      {
        "title": "Spa & Soins Ayurvédiques",
        "desc": "Espaces dédiés aux massages traditionnels et soins régénérants."
      },
      {
        "title": "Jardins Tropicaux",
        "desc": "Allées verdoyantes et coins repos propices à la méditation silencieuse."
      }
    ],
    "crossLinks": {
      "days12": "Formation 12 Jours",
      "days28": "Formation 28 Jours",
      "mostPopular": "Le Plus Populaire",
      "learnMore": "En Savoir Plus",
      "fromLearnMore": "À partir de ",
      "desc100": "Formation 100 Heures : Immersion fondamentale pour débuter l'enseignement.",
      "desc200": "Formation 200 Heures : Notre formation certifiée Yoga Alliance de référence.",
      "desc300": "Formation 300 Heures : Perfectionnement avancé pour professeurs certifiés.",
      "desc100Varkala": "100 Heures Varkala : Immersion côtière alliant yoga et Ayurveda.",
      "desc200Varkala": "200 Heures Varkala : Certification Yoga Alliance sur les falaises du Kerala.",
      "desc300Varkala": "300 Heures Varkala : Maîtrise avancée face à la mer d'Arabie."
    },
    "facultySub": {
      "bali": "Apprenez auprès de maîtres dévoués à la transmission authentique du yoga traditionnel.",
      "rishikesh": "Guidé par des maîtres himalayens formés dans la plus pure tradition védique.",
      "varkala": "Praticiens experts du yoga et médecins ayurvédiques diplômés du Kerala."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Fondateur & Directeur Spirituel",
        "bio": {
          "bali": "Fort de plus de 12 ans de sadhana dans l'Himalaya, Sachin Ji relie les techniques védiques ancestrales à la pleine conscience moderne, guidant les élèves vers une transformation profonde.",
          "rishikesh": "Élevé dans les traditions sacrées de Rishikesh, Sachin Ji enseigne le Hatha classique et la méditation avec une remarquable profondeur spirituelle.",
          "varkala": "Puisant dans la sagesse védique, Sachin Ji harmonise la pratique yogique avec l'énergie régénérante des côtes de Varkala pour un apaisement complet."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Co-fondatrice & Mentor Principale",
        "bio": {
          "bali": "Issue d'une famille yogique traditionnelle, Chanda Ji consacre sa vie depuis plus de 40 ans à la sadhana, inspirant par la douceur de ses alignements, les mudras et la dévotion.",
          "rishikesh": "Chanda Ji transmet des décennies de pratique dévotionnelle au bord du Gange, avec un enseignement bienveillant axé sur l'ouverture du cœur et le souffle.",
          "varkala": "Chanda Ji accompagne chaque élève vers la paix intérieure grâce à des ajustements précis et une respiration réparatrice."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "Enseignant Principal d'Anatomie & Asanas",
        "bio": {
          "bali": "Formé au yoga classique et aux sciences respiratoires, Rohit Ji enseigne la mécanique subtile du souffle et le relâchement profond des tensions nerveuses.",
          "rishikesh": "Rohit Ji associe expertise anatomique et biomécanique pour guider une pratique des asanas sûre, puissante et durable.",
          "varkala": "Rohit Ji fusionne anatomie fonctionnelle et physiologie ayurvédique pour aider les étudiants à libérer leurs blocages et retrouver l'équilibre."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "Enseignante de Philosophie & Méditation",
        "bio": {
          "bali": "Spécialiste de la philosophie védantique et de la méditation de pleine conscience, Priyanka Ji aide les étudiants à incarner la sagesse ancienne dans leur vie quotidienne.",
          "rishikesh": "Priyanka Ji guide l'étude des textes sacrés des Yoga Sutras et des Upanishads dans le cadre inspirant de Rishikesh.",
          "varkala": "Priyanka Ji anime des cercles de philosophie et des méditations guidées apaisantes face à l'océan à Varkala."
        }
      }
    ]
  },
  "es": {
    "signatureExperience": "Experiencia Exclusiva",
    "offersHeading": "YogaGarhi Te Ofrece",
    "offersSub": {
      "bali": "Un retiro de bienestar transformador con todo incluido donde el linaje yóguico ancestral se une a la energía sanadora de Bali.",
      "rishikesh": "Una inmersión auténtica en el Himalaya donde la energía sagrada del río Ganges se encuentra con profundas tradiciones védicas.",
      "varkala": "Un retiro ayurvédico costero donde los acantilados del mar Arábigo se unen a las tradiciones curativas de Kerala."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Práctica de Yoga Multiestilo",
          "desc": "Sesiones matutinas de Hatha Vinyasa para la fuerza física y suaves sesiones vespertinas de Yin yoga para una flexibilidad profunda."
        },
        {
          "icon": "🌺",
          "title": "Masaje Balinés Diario Incluido",
          "desc": "Tratamiento de masaje corporal balinés gratuito todos los días con aceites botánicos cálidos para aliviar tensiones musculares."
        },
        {
          "icon": "🔔",
          "title": "Terapia de Sonido & Pranayama",
          "desc": "Relajantes baños de sonido con cuencos tibetanos y respiración guiada de Pranayama para equilibrar el sistema nervioso."
        },
        {
          "icon": "🥑",
          "title": "Comidas Saludables y Orgánicas",
          "desc": "Tres comidas nutritivas diarias de origen vegetal elaboradas con ingredientes locales y frescos para revitalizar tu organismo."
        },
        {
          "icon": "🌊",
          "title": "Purificación de Agua Melukat",
          "desc": "Excursión a un templo sagrado para experimentar el tradicional ritual balinés de purificación con agua Melukat."
        },
        {
          "icon": "🌿",
          "title": "Santuario en la Selva & Piscina",
          "desc": "Hospédate en un refugio tranquilo en Ubud, rodeado de frondosa naturaleza con una gran piscina y shala de yoga al aire libre."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "Hatha y Ashtanga Tradicional",
          "desc": "Hatha matutino y Ashtanga Vinyasa al atardecer guiados por maestros de la auténtica tradición yóguica del Himalaya."
        },
        {
          "icon": "🌊",
          "title": "Meditación en el Ganges & Aarti",
          "desc": "Meditaciones al amanecer a orillas del río Ganges y participación en las sagradas ceremonias vespertinas de Ganga Aarti."
        },
        {
          "icon": "🌿",
          "title": "Consulta y Terapias Ayurvédicas",
          "desc": "Diagnóstico personalizado con médico ayurvédico y masajes tradicionales Abhyanga con aceites medicados."
        },
        {
          "icon": "🍲",
          "title": "Nutrición Sátvica Pura",
          "desc": "Tres comidas vegetarianas diarias preparadas según los principios clásicos de la ciencia ayurvédica."
        },
        {
          "icon": "🏔️",
          "title": "Amanecer en los Himalayas",
          "desc": "Meditación al amanecer en el templo de Kunjapuri con vistas panorámicas a las cumbres nevadas del Himalaya."
        },
        {
          "icon": "🕉️",
          "title": "Filosofía Védica y Mantras",
          "desc": "Estudio profundo de los Yoga Sutras de Patanjali, la Bhagavad Gita y cantos devocionales de Kirtan."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "Yoga Oceánico y Respiración",
          "desc": "Prácticas diarias en una plataforma de madera al aire libre con la brisa marina del mar Arábigo."
        },
        {
          "icon": "🌿",
          "title": "Terapias Ayurvédicas de Kerala",
          "desc": "Tratamientos curativos tradicionales y masajes Abhyanga con auténticos aceites medicinales de Kerala."
        },
        {
          "icon": "🏖️",
          "title": "Playa Sagrada de Papanasam",
          "desc": "Paseos meditativos y baños renovadores junto a los emblemáticos acantilados rojos de Varkala."
        },
        {
          "icon": "🍲",
          "title": "Comida Ayurvédica Costera",
          "desc": "Tres comidas sátvicas diarias cocinadas con hierbas aromáticas locales y coco fresco."
        },
        {
          "icon": "🌅",
          "title": "Yin Yoga al Atardecer",
          "desc": "Sesiones relajantes de Yin Yoga y Yoga Nidra mientras el sol se oculta sobre el mar Arábigo."
        },
        {
          "icon": "🥥",
          "title": "Paseo en Barco por los Backwaters",
          "desc": "Travesía serena por los canales de Kerala y visitas enriquecedoras a templos tradicionales."
        }
      ]
    },
    "datesTitle": "Fechas de Retiro — Disponibilidad Todo el Año",
    "datesSub": "Nuestros retiros tienen fechas de inicio flexibles. Elige el día de llegada que mejor se adapte a tu agenda.",
    "checkAvailability": "Consultar Disponibilidad",
    "mostPopular": "Más Popular",
    "perPerson": "/ persona",
    "transparentPricing": "Precios Transparentes",
    "pricingDescription": "Elige el tipo de alojamiento que mejor se adapte a tu viaje. Todos los paquetes incluyen yoga diario, tratamientos, comidas y acceso completo al campus.",
    "venueDetailsSoon": "Los detalles del alojamiento y la sede se compartirán muy pronto.",
    "diningSubtitle": "Alimentación pura, nutritiva y preparada con esmero para apoyar tu proceso de bienestar.",
    "diningTableHeading": "Horario Diario de Comidas",
    "mealsFallback": [
      {
        "meal": "Desayuno",
        "time": "08:30 - 09:30",
        "notes": "Frutas tropicales frescas, gachas calientes, infusiones de hierbas y agua de coco."
      },
      {
        "meal": "Almuerzo",
        "time": "13:00 - 14:00",
        "notes": "Platos vegetales completos, ensaladas frescas, legumbres y cereales integrales."
      },
      {
        "meal": "Cena",
        "time": "19:00 - 20:00",
        "notes": "Sopas ayurvédicas suaves, verduras al vapor e infusiones relajantes."
      }
    ],
    "scheduleSub": "Un programa cuidadosamente diseñado para equilibrar práctica activa, relajación profunda y sosiego interior.",
    "dayTabPrefix": "Día ",
    "dayTabSuffix": "",
    "dayOfPrefix": "Día ",
    "dayOfConnector": " de ",
    "campusAmenitiesTitle": "Instalaciones y Servicios del Campus",
    "amenitiesList": [
      "Shala de yoga al aire libre inmersa en la naturaleza",
      "Gran piscina exterior con tumbonas para relajarse",
      "Jardín botánico de hierbas ayurvédicas",
      "Wifi por fibra óptica de alta velocidad en todo el recinto",
      "Salas de masajes ayurvédicos y centro de spa",
      "Zonas silenciosas para meditar y descansar",
      "Agua mineral filtrada e infusiones disponibles las 24 horas",
      "Servicio de limpieza diario y lavandería"
    ],
    "campusOneTitle": "Campus I — Residencia Principal y Jardines",
    "campusOneDesc": "El corazón de nuestro retiro, rodeado de frondosos jardines tropicales con acceso directo a la shala y la piscina.",
    "campusOneFeatures": [
      "Arquitectura balinesa tradicional con detalles en madera de teca",
      "Habitaciones amplias con baño privado semiabierto",
      "Acceso inmediato a la piscina y zonas de descanso",
      "Vistas apacibles a palmeras y jardines en flor"
    ],
    "campusTwoTitle": "Campus II — Refugio Tranquilo en la Naturaleza",
    "campusTwoDesc": "Un remanso de paz diseñado para aquellos que buscan máximo descanso, silencio y desconexión.",
    "campusTwoFeatures": [
      "Habitaciones modernas con aire acondicionado y gran confort",
      "Balcón privado con vistas a la exuberante vegetación",
      "Acceso total a todas las instalaciones del Campus I",
      "Entorno idóneo para la meditación y el sosiego"
    ],
    "studentGuaranteeTitle": "Nuestro Compromiso con tu Bienestar",
    "studentGuaranteeText": "Te ofrecemos un entorno seguro, respetuoso y profundamente sanador. Nuestros profesores y terapeutas te acompañarán con dedicación y calidez.",
    "airportPickupTitle": "Traslado desde el Aeropuerto Incluido",
    "airportPickupText": "Inicia tu retiro sin preocupaciones: un conductor privado te esperará en la terminal a tu llegada.",
    "durationButtons": {
      "3days": "Retiro de 3 Días",
      "7days": "Retiro de 7 Días",
      "14days": "Retiro de 14 Días"
    },
    "gallery": [
      {
        "title": "Shala Principal de Yoga",
        "desc": "Nuestra shala de bambú abierta a la serenidad de la selva tropical."
      },
      {
        "title": "Piscina al Aire Libre",
        "desc": "Piscina de aguas cristalinas para refrescarte entre clases."
      },
      {
        "title": "Comida Sana y Vegana",
        "desc": "Platos sabrosos y nutritivos elaborados con ingredientes orgánicos."
      },
      {
        "title": "Habitaciones Privadas",
        "desc": "Espacios acogedores con camas confortables y baños de ensueño."
      },
      {
        "title": "Spa y Terapias",
        "desc": "Salas tradicionales dedicadas a masajes y sanación holística."
      },
      {
        "title": "Jardines Exóticos",
        "desc": "Senderos verdes y rincones silenciosos para la introspección."
      }
    ],
    "crossLinks": {
      "days12": "Curso de 12 Días",
      "days28": "Curso de 28 Días",
      "mostPopular": "Más Popular",
      "learnMore": "Más Información",
      "fromLearnMore": "Desde $",
      "desc100": "Curso de 100 Horas: Inmersión básica ideal para comenzar tu camino.",
      "desc200": "Curso de 200 Horas: Certificación oficial de Yoga Alliance reconocida a nivel mundial.",
      "desc300": "Curso de 300 Horas: Formación avanzada para profesores ya certificados.",
      "desc100Varkala": "100 Horas Varkala: Retiro costero que aúna yoga y Ayurveda.",
      "desc200Varkala": "200 Horas Varkala: Certificación Yoga Alliance frente al mar Arábigo.",
      "desc300Varkala": "300 Horas Varkala: Perfeccionamiento superior en los acantilados de Kerala."
    },
    "facultySub": {
      "bali": "Aprende de maestros dedicados a la auténtica transmisión del yoga clásico.",
      "rishikesh": "Guiado por experimentados yogis formados en la cuna védica del Himalaya.",
      "varkala": "Profesores experimentados y médicos ayurvédicos diplomados de Kerala."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Fundador y Director Espiritual",
        "bio": {
          "bali": "Con más de 12 años de sadhana en el Himalaya, Sachin Ji fusiona técnicas védicas milenarias con la atención plena contemporánea, guiando a los alumnos hacia un despertar interior genuino.",
          "rishikesh": "Imbuido en las tradiciones espirituales de Rishikesh, Sachin Ji enseña Hatha clásico y meditación con una profunda autenticidad.",
          "varkala": "Inspirándose en la sabiduría védica, Sachin Ji une el yoga clásico con la serenidad marina de Varkala para brindar una profunda restauración."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Cofundadora y Mentora Principal",
        "bio": {
          "bali": "Nacida en una familia de tradición yóguica, Chanda Ji cuenta con más de cuatro décadas de sadhana, transmitiendo alineación suave, mudras y devoción.",
          "rishikesh": "Chanda Ji comparte décadas de práctica devocional a orillas del Ganges, poniendo el foco en el Hatha que abre el corazón y en el prana.",
          "varkala": "Chanda Ji guía a los participantes hacia una calma profunda y armonía interior mediante correcciones sutiles y respiración sanadora."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "Profesor Principal de Anatomía y Asanas",
        "bio": {
          "bali": "Formado en yoga clásico y ciencias de la respiración, Rohit Ji enseña la mecánica del aire y la relajación somática para disipar la tensión nerviosa.",
          "rishikesh": "Rohit Ji combina amplios conocimientos de anatomía con la tradición del yoga para ofrecer una práctica de asanas segura y transformadora.",
          "varkala": "Rohit Ji integra anatomía funcional con fisiología ayurvédica para desbloquear tensiones corporales y potenciar la energía vital."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "Profesora de Filosofía y Meditación",
        "bio": {
          "bali": "Especializada en filosofía Vedanta y meditación mindfulness, Priyanka Ji enseña a aplicar la sabiduría ancestral en los desafíos de la vida diaria.",
          "rishikesh": "Priyanka Ji imparte las enseñanzas de los Yoga Sutras y las Upanishads en el marco espiritual inigualable de Rishikesh.",
          "varkala": "Priyanka Ji ofrece encuentros filosóficos y meditaciones guiadas frente a la costa de Varkala para nutrir el alma."
        }
      }
    ]
  },
  "it": {
    "signatureExperience": "Esperienza Esclusiva",
    "offersHeading": "Cosa Offre YogaGarhi",
    "offersSub": {
      "bali": "Un ritiro di benessere trasformativo tutto compreso dove l'antico lignaggio yogico incontra l'energia rigenerante di Bali.",
      "rishikesh": "Un'autentica immersione himalayana dove l'energia sacra del fiume Gange incontra profonde tradizioni vediche.",
      "varkala": "Un ritiro ayurvedico costiero dove le scogliere del Mar Arabico incontrano le antiche tradizioni curative del Kerala."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Pratica di Yoga Multi-Stile",
          "desc": "Sessioni mattutine di Hatha Vinyasa per il vigore fisico e dolci sessioni serali di Yin yoga per una flessibilità profonda."
        },
        {
          "icon": "🌺",
          "title": "Massaggio Balinese Quotidiano Incluso",
          "desc": "Trattamento di massaggio balinese completo ogni giorno con oli caldi biologici per rilassare i muscoli e riequilibrare l'energia."
        },
        {
          "icon": "🔔",
          "title": "Bagno di Suoni & Pranayama",
          "desc": "Sessioni rilassanti con campane tibetane e respirazione Pranayama guidata per distendere il sistema nervoso."
        },
        {
          "icon": "🥑",
          "title": "Pasti Biologici e Nutrienti",
          "desc": "Tre pasti a base vegetale al giorno cucinati con ingredienti biologici a km zero per rinvigorire il corpo."
        },
        {
          "icon": "🌊",
          "title": "Purificazione con l'Acqua Melukat",
          "desc": "Visita guidata a un tempio d'acqua sacra per sperimentare il tradizionale rituale balinese di purificazione Melukat."
        },
        {
          "icon": "🌿",
          "title": "Santuario nella Giungla & Piscina",
          "desc": "Soggiorna in un'oasi di pace a Ubud, immerso nella natura rigogliosa con una grande piscina e shala di yoga all'aperto."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "Hatha e Ashtanga Classico",
          "desc": "Hatha yoga al mattino e Ashtanga Vinyasa al tramonto guidati da autentici maestri della tradizione himalayana."
        },
        {
          "icon": "🌊",
          "title": "Meditazione sul Gange & Aarti",
          "desc": "Meditazioni all'alba sulle rive sacre del Gange e partecipazione ai cerimoniali serali del Ganga Aarti."
        },
        {
          "icon": "🌿",
          "title": "Consulto e Terapie Ayurvediche",
          "desc": "Valutazione personalizzata con un medico ayurvedico e massaggi tradizionali Abhyanga con oli erboristici."
        },
        {
          "icon": "🍲",
          "title": "Dieta Sattvica Pura",
          "desc": "Tre pasti vegetariani sani al giorno preparati seguendo i principi classici della scienza ayurvedica."
        },
        {
          "icon": "🏔️",
          "title": "Escursione all'Alba sull'Himalaya",
          "desc": "Meditazione al sorgere del sole presso il tempio di Kunjapuri con vista mozzafiato sulle vette innevate dell'Himalaya."
        },
        {
          "icon": "🕉️",
          "title": "Filosofia Vedica & Canti Kirtan",
          "desc": "Studio approfondito degli Yoga Sutra di Patanjali, della Bhagavad Gita e canti devozionali Kirtan."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "Yoga sull'Oceano e Pranayama",
          "desc": "Sessioni giornaliere di yoga sulla terrazza in legno con la dolce brezza del Mar Arabico."
        },
        {
          "icon": "🌿",
          "title": "Trattamenti Ayurvedici del Kerala",
          "desc": "Cure rigeneranti personalizzate e massaggi Abhyanga con pregiati oli medicati della tradizione del Kerala."
        },
        {
          "icon": "🏖️",
          "title": "Spiaggia Sacra di Papanasam",
          "desc": "Passeggiate meditative e bagni purificatori lungo le caratteristiche scogliere rosse e la spiaggia di Papanasam."
        },
        {
          "icon": "🍲",
          "title": "Cucina Ayurvedica Costiera",
          "desc": "Tre pasti freschi e sattvici al giorno cucinati con spezie aromatiche locali e latte di cocco fresco."
        },
        {
          "icon": "🌅",
          "title": "Yin Yoga al Tramonto sulla Scogliera",
          "desc": "Pratiche rilassanti di Yin Yoga e Yoga Nidra ammirando i tramonti mozzafiato sul Mar Arabico."
        },
        {
          "icon": "🥥",
          "title": "Gita in Barca sulle Backwaters",
          "desc": "Navigazione serena lungo i canali del Kerala ed esplorazione delle tradizioni culturali locali."
        }
      ]
    },
    "datesTitle": "Date del Ritiro — Disponibilità Tutto l'Anno",
    "datesSub": "I nostri ritiri offrono date di inizio completamente flessibili. Scegli il giorno di arrivo più comodo per te.",
    "checkAvailability": "Verifica Disponibilità",
    "mostPopular": "Il Più Richiesto",
    "perPerson": "/ persona",
    "transparentPricing": "Prezzi Chiari e Trasparenti",
    "pricingDescription": "Scegli la tipologia di alloggio ideale per il tuo viaggio. Tutti i pacchetti comprendono yoga quotidiano, trattamenti, pasti e accesso libero al campus.",
    "venueDetailsSoon": "I dettagli su alloggi e strutture saranno comunicati a breve.",
    "diningSubtitle": "Alimentazione pura, nutriente e preparata con cura per favorire la tua rigenerazione interiore.",
    "diningTableHeading": "Orario Giornaliero dei Pasti",
    "mealsFallback": [
      {
        "meal": "Colazione",
        "time": "08:30 - 09:30",
        "notes": "Frutta tropicale fresca, porridge caldo, tisane benefiche e acqua di cocco."
      },
      {
        "meal": "Pranzo",
        "time": "13:00 - 14:00",
        "notes": "Piatti vegetali bilanciati, insalate fresche, legumi e cereali integrali."
      },
      {
        "meal": "Cena",
        "time": "19:00 - 20:00",
        "notes": "Zuppe ayurvediche leggere, verdure al vapore e infusi rilassanti per la sera."
      }
    ],
    "scheduleSub": "Un programma studiato con dedizione per unire attività rinvigorenti, rilassamento profondo e pace della mente.",
    "dayTabPrefix": "Giorno ",
    "dayTabSuffix": "",
    "dayOfPrefix": "Giorno ",
    "dayOfConnector": " di ",
    "campusAmenitiesTitle": "Servizi e Comfort del Campus",
    "amenitiesList": [
      "Shala di yoga all'aperto immersa nella natura lussureggiante",
      "Grande piscina scoperta con comodi lettini prendisole",
      "Giardino botanico con piante ed erbe medicinali",
      "Connessione Wi-Fi in fibra ottica ad alta velocità in tutta la proprietà",
      "Sale massaggi per trattamenti ayurvedici e area benessere",
      "Spazi riservati e silenziosi per la meditazione",
      "Acqua minerale filtrata e tisane disponibili 24 ore su 24",
      "Pulizia giornaliera delle camere e servizio lavanderia"
    ],
    "campusOneTitle": "Campus I — Dimora Principale e Giardini",
    "campusOneDesc": "Il cuore del nostro ritiro, circondato da giardini fioriti con accesso immediato alla shala di yoga e alla piscina.",
    "campusOneFeatures": [
      "Architettura tradizionale balinese con finiture in legno di teak",
      "Camere spaziose con bagno privato semi-aperto",
      "Accesso diretto alla piscina e alle aree relax",
      "Splendida vista su palme tropicali e giardini curati"
    ],
    "campusTwoTitle": "Campus II — Oasi Riservata nella Natura",
    "campusTwoDesc": "Un rifugio intimo e tranquillo pensato per chi desidera totale quiete, meditazione e rigenerazione.",
    "campusTwoFeatures": [
      "Camere moderne con aria condizionata e ogni comfort",
      "Balcone privato affacciato sulla foresta tropicale",
      "Pieno accesso a tutti i servizi del Campus I",
      "Atmosfera ideale per il raccoglimento e il riposo"
    ],
    "studentGuaranteeTitle": "Il Nostro Impegno per il Tuo Benessere",
    "studentGuaranteeText": "Ti garantiamo un ambiente sicuro, accogliente e rigenerante. I nostri docenti e operatori ti seguiranno con cura e dedizione costante.",
    "airportPickupTitle": "Transfer Aeroportuale Incluso",
    "airportPickupText": "Inizia la tua esperienza in tutta tranquillità: un autista privato ti attenderà all'uscita del terminal.",
    "durationButtons": {
      "3days": "Ritiro di 3 Giorni",
      "7days": "Ritiro di 7 Giorni",
      "14days": "Ritiro di 14 Giorni"
    },
    "gallery": [
      {
        "title": "Shala Principale di Yoga",
        "desc": "La nostra accogliente shala in bambù affacciata sulla giungla."
      },
      {
        "title": "Piscina all'Aperto",
        "desc": "Acque cristalline dove rinfrescarsi tra una pratica e l'altra."
      },
      {
        "title": "Cucina Sana e Vegetale",
        "desc": "Pietanze deliziose preparate con ingredienti biologici freschi."
      },
      {
        "title": "Camere Private di Charme",
        "desc": "Stanze curate con letti comodi e affacci rilassanti."
      },
      {
        "title": "Spa e Benessere Ayurvedico",
        "desc": "Sale tradizionali per massaggi rigeneranti e trattamenti corpo."
      },
      {
        "title": "Giardini Tropicali",
        "desc": "Sentieri verdeggianti e angoli appartati ideali per meditare."
      }
    ],
    "crossLinks": {
      "days12": "Corso di 12 Giorni",
      "days28": "Corso di 28 Giorni",
      "mostPopular": "Il Più Richiesto",
      "learnMore": "Scopri di Più",
      "fromLearnMore": "A partire da $",
      "desc100": "Corso 100 Ore: Solida formazione di base per principianti.",
      "desc200": "Corso 200 Ore: Certificazione Yoga Alliance riconosciuta a livello mondiale.",
      "desc300": "Corso 300 Ore: Corso avanzato di perfezionamento per insegnanti certificati.",
      "desc100Varkala": "100 Ore Varkala: Esperienza costiera che fonde yoga e Ayurveda.",
      "desc200Varkala": "200 Ore Varkala: Certificazione Yoga Alliance di fronte al mare.",
      "desc300Varkala": "300 Ore Varkala: Approfondimento avanzato sulle scogliere del Kerala."
    },
    "facultySub": {
      "bali": "Apprendi da maestri esperti dediti all'insegnamento autentico dello yoga tradizionale.",
      "rishikesh": "Guidato da autorevoli yogi dell'Himalaya formati nella più pura tradizione vedica.",
      "varkala": "Insegnanti esperti e medici ayurvedici qualificati del Kerala."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Fondatore e Direttore Spirituale",
        "bio": {
          "bali": "Con oltre 12 anni di sadhana sull'Himalaya, Sachin Ji fonde le antiche tecniche vediche con la consapevolezza moderna, guidando gli allievi verso un risveglio interiore profondo.",
          "rishikesh": "Cresciuto nella spiritualità di Rishikesh, Sachin Ji insegna Hatha classico e meditazione con profonda autorevolezza e devozione.",
          "varkala": "Ispirandosi alla saggezza dei Veda, Sachin Ji unisce lo yoga classico alla calma della costa di Varkala per un profondo sollievo psicofisico."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Co-fondatrice e Guida Spirituale",
        "bio": {
          "bali": "Nata in una tradizionale famiglia yogica, Chanda Ji pratica sadhana da oltre quattro decenni, ispirando gli studenti con dolci allineamenti, mudra e devozione sincera.",
          "rishikesh": "Chanda Ji condivide decenni di pratica devozionale lungo le sponde del Gange, ponendo l'accento sull'apertura del cuore e sulla respirazione.",
          "varkala": "Chanda Ji guida i partecipanti verso la quiete interiore attraverso correzioni gentili e una respirazione profondamente rilassante."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "Docente Principale di Anatomia e Asana",
        "bio": {
          "bali": "Formatosi nello yoga classico e nelle scienze del respiro, Rohit Ji insegna le sottili dinamiche respiratorie e il rilascio somatico delle tensioni.",
          "rishikesh": "Rohit Ji unisce una solida conoscenza dell'anatomia alla disciplina yogica per garantire una pratica di asana efficace e sicura.",
          "varkala": "Rohit Ji integra l'anatomia funzionale con l'Ayurveda per aiutare gli allievi a liberare le tensioni corporee e ritrovare vitalità."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "Docente di Filosofia e Meditazione",
        "bio": {
          "bali": "Esperta di filosofia Vedanta e meditazione mindfulness, Priyanka Ji aiuta gli studenti ad applicare l'antica saggezza nelle sfide quotidiane.",
          "rishikesh": "Priyanka Ji approfondisce gli Yoga Sutra e le Upanishad nella suggestiva cornice spirituale di Rishikesh.",
          "varkala": "Priyanka Ji guida incontri di filosofia e sessioni di meditazione riflessiva di fronte all'oceano a Varkala."
        }
      }
    ]
  },
  "ru": {
    "signatureExperience": "Фирменный Опыт",
    "offersHeading": "Программа YogaGarhi Включает",
    "offersSub": {
      "bali": "Трансформационный велнес-ретрит по системе «всё включено», где древняя йогическая традиция соединяется с целительной энергией Бали.",
      "rishikesh": "Аутентичное гималайское погружение, где священная энергия реки Ганги соединяется с глубокими ведическими традициями.",
      "varkala": "Прибрежный аюрведический ретрит, где утесы Аравийского моря соединяются с традиционными методами исцеления Кералы."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "Мульти-Стиль Практика Йоги",
          "desc": "Утренняя хатха-виньяса для физической силы и мягкая вечерняя инь-йога для глубокой гибкости и расслабления."
        },
        {
          "icon": "🌺",
          "title": "Ежедневный Балийский Массаж",
          "desc": "Бесплатный полный массаж тела в балийском стиле каждый день с теплыми натуральными маслами для снятия напряжения."
        },
        {
          "icon": "🔔",
          "title": "Звукотерапия & Пранаяма",
          "desc": "Глубокая релаксация с тибетскими поющими чашами и дыхательные практики пранаямы для восстановления нервной системы."
        },
        {
          "icon": "🥑",
          "title": "Свежее Органическое Питание",
          "desc": "Трехразовое сбалансированное растительное питание, приготовленное из свежих экологически чистых продуктов."
        },
        {
          "icon": "🌊",
          "title": "Священное Омовение Мелукат",
          "desc": "Посещение древнего водного храма для прохождения традиционного балийского ритуала очищения водой Мелукат."
        },
        {
          "icon": "🌿",
          "title": "Оазис в Джунглях & Бассейн",
          "desc": "Проживание в тихом святилище в Убуде среди тропической зелени с большим открытым бассейном и йога-шалой."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "Классическая Хатха и Аштанга",
          "desc": "Утренняя хатха и вечерняя аштанга-виньяса под руководством опытных гималайских мастеров йоги."
        },
        {
          "icon": "🌊",
          "title": "Медитация на Ганге и Аарти",
          "desc": "Медитации на рассвете у священных вод реки Ганги и участие в вечерних церемониях Ганга Аарти."
        },
        {
          "icon": "🌿",
          "title": "Аюрведическая Диагностика и Терапия",
          "desc": "Консультация с квалифицированным врачом аюрведы и традиционный массаж абхьянга с целебными маслами."
        },
        {
          "icon": "🍲",
          "title": "Чистое Саттвическое Питание",
          "desc": "Трехразовое здоровое вегетарианское питание, приготовленное по законам классической аюрведы."
        },
        {
          "icon": "🏔️",
          "title": "Рассвет в Гималаях",
          "desc": "Утренняя медитация в храме Кунджапури с панорамным видом на заснеженные вершины Гималаев."
        },
        {
          "icon": "🕉️",
          "title": "Ведическая Философия и Киртан",
          "desc": "Изучение Йога-сутр Патанджали, Бхагавад-гиты и вечерние совместные песнопения киртана."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "Йога у Океана и Пранаяма",
          "desc": "Ежедневные занятия йогой на открытой террасе под шум прибоя и свежий бриз Аравийского моря."
        },
        {
          "icon": "🌿",
          "title": "Аюрведические Процедуры Кералы",
          "desc": "Индивидуальный план оздоровления и массажи абхьянга с аутентичными лечебными травами Кералы."
        },
        {
          "icon": "🏖️",
          "title": "Священный Пляж Папанасам",
          "desc": "Медитативные прогулки и омовения у знаменитых красных утесов и целебных источников Папанасама."
        },
        {
          "icon": "🍲",
          "title": "Прибрежная Аюрведическая Кухня",
          "desc": "Трехразовое свежее саттвическое питание с местными пряностями и свежим кокосовым молоком."
        },
        {
          "icon": "🌅",
          "title": "Инь-Йога на Закате над Утесами",
          "desc": "Глубокое расслабление инь-йоги и йога-нидры в лучах заходящего солнца над Аравийским морем."
        },
        {
          "icon": "🥥",
          "title": "Прогулка на Лодке по Заводям",
          "desc": "Умиротворяющий круиз по живописным заводям Кералы и знакомство с древними храмами."
        }
      ]
    },
    "datesTitle": "Даты Ретритов — Круглогодичный Набор",
    "datesSub": "Наши программы имеют гибкие даты заезда. Выберите день прибытия, который идеально подходит под ваши планы.",
    "checkAvailability": "Проверить Наличие Мест",
    "mostPopular": "Популярный Выбор",
    "perPerson": "/ человек",
    "transparentPricing": "Прозрачные Цены",
    "pricingDescription": "Выберите стиль размещения, подходящий для вашего путешествия. Все пакеты включают ежедневную йогу, процедуры, питание и полный доступ на территорию кампуса.",
    "venueDetailsSoon": "Информация о месте проведения и деталях проживания будет опубликована в ближайшее время.",
    "diningSubtitle": "Чистая, богатая питательными веществами пища, приготовленная с заботой о вашем здоровье.",
    "diningTableHeading": "Ежедневное Расписание Питания",
    "mealsFallback": [
      {
        "meal": "Завтрак",
        "time": "08:30 - 09:30",
        "notes": "Свежие тропические фрукты, теплая каша, травяной чай и кокосовая вода."
      },
      {
        "meal": "Обед",
        "time": "13:00 - 14:00",
        "notes": "Сытные блюда из цельных злаков, свежие салаты, бобовые и овощи."
      },
      {
        "meal": "Ужин",
        "time": "19:00 - 20:00",
        "notes": "Легкие аюрведические супы, тушеные овощи и успокаивающие настои."
      }
    ],
    "scheduleSub": "Гармоничный распорядок дня, сочетающий активные практики, целебные процедуры и глубокий отдых.",
    "dayTabPrefix": "День ",
    "dayTabSuffix": "",
    "dayOfPrefix": "День ",
    "dayOfConnector": " из ",
    "campusAmenitiesTitle": "Удобства и Инфраструктура Кампуса",
    "amenitiesList": [
      "Йога-шала на открытом воздухе в окружении природы",
      "Большой открытый бассейн с шезлонгами",
      "Ботанический сад лекарственных трав",
      "Бесплатный высокоскоростной оптоволоконный Wi-Fi",
      "Кабинеты аюрведической терапии и спа",
      "Тихие зоны для медитации и уединения",
      "Очищенная питьевая вода и травяной чай 24 часа в сутки",
      "Ежедневная уборка номеров и услуги прачечной"
    ],
    "campusOneTitle": "Кампус I — Главная Резиденция и Сады",
    "campusOneDesc": "Сердце ретрита среди цветущих садов с прямым выходом к йога-шале и бассейну.",
    "campusOneFeatures": [
      "Традиционная балийская архитектура с отделкой из тика",
      "Просторные номера с полуоткрытой ванной комнатой",
      "Прямой выход к бассейну и террасам для отдыха",
      "Вид на тропические пальмы и сады"
    ],
    "campusTwoTitle": "Кампус II — Уединенный Оазис в Джунглях",
    "campusTwoDesc": "Тихий и спокойный уголок для тех, кто стремится к глубокому расслаблению и тишине.",
    "campusTwoFeatures": [
      "Современные комфортабельные номера с кондиционером",
      "Собственный балкон с видом на тропический лес",
      "Полный доступ ко всей инфраструктуре Кампуса I",
      "Идеально для медитации и безмятежного отдыха"
    ],
    "studentGuaranteeTitle": "Наша Забота о Вашем Благе",
    "studentGuaranteeText": "Мы создаем безопасное, поддерживающее и восстанавливающее пространство. Наши наставники сопровождают вас с чуткостью и искренним вниманием.",
    "airportPickupTitle": "Трансфер из Аэропорта Включен",
    "airportPickupText": "Ваш отдых начнется без лишних забот: персональный водитель встретит вас с табличкой в зоне прилета.",
    "durationButtons": {
      "3days": "Ретрит 3 Дня",
      "7days": "Ретрит 7 Дней",
      "14days": "Ретрит 14 Дней"
    },
    "gallery": [
      {
        "title": "Главная Йога-Шала",
        "desc": "Бамбуковая площадка, открытая навстречу тропической природе."
      },
      {
        "title": "Открытый Бассейн",
        "desc": "Освежающий бассейн с чистой водой для отдыха между занятиями."
      },
      {
        "title": "Органические Блюда",
        "desc": "Полезное и красивое питание из отборных фермерских продуктов."
      },
      {
        "title": "Уютные Номера",
        "desc": "Комнаты с удобными кроватями и всеми необходимыми удобствами."
      },
      {
        "title": "Аюрведический Спа-Центр",
        "desc": "Зона для оздоровительных массажей и традиционных ритуалов."
      },
      {
        "title": "Тропические Сады",
        "desc": "Зеленые дорожки и уединенные уголки для медитации."
      }
    ],
    "crossLinks": {
      "days12": "Курс 12 Дней",
      "days28": "Курс 28 Дней",
      "mostPopular": "Популярный Выбор",
      "learnMore": "Подробнее",
      "fromLearnMore": "От $",
      "desc100": "Курс 100 Часов: Фундаментальная программа для начинающих преподавателей.",
      "desc200": "Курс 200 Часов: Сертификация Yoga Alliance международного уровня.",
      "desc300": "Курс 300 Часов: Продвинутое обучение для сертифицированных инструкторов.",
      "desc100Varkala": "100 Часов Варкала: Погружение в йогу и аюрведу на побережье.",
      "desc200Varkala": "200 Часов Варкала: Сертификация у Аравийского моря в Керале.",
      "desc300Varkala": "300 Часов Варкала: Продвинутый уровень на живописных утесах Кералы."
    },
    "facultySub": {
      "bali": "Обучайтесь у мастеров, посвятивших жизнь аутентичной традиции йоги.",
      "rishikesh": "Под наставничеством гималайских учителей ведической традиции.",
      "varkala": "Опытные преподаватели йоги и дипломированные аюрведические врачи Кералы."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "Основатель и Духовный Руководитель",
        "bio": {
          "bali": "Более 12 лет гималайской садханы позволяют Сачину Джи соединять древние ведические техники с осознанностью, помогая практикующим обрести внутреннее равновесие.",
          "rishikesh": "Воспитанный в духовных традициях Ришикеша, Сачин Джи передает классическую хатху и медитацию с искренней преданностью.",
          "varkala": "Опираясь на ведическую мудрость, Сачин Джи сочетает йогу с целительной силой побережья Варкалы для глубокой релаксации."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "Сооснователь и Ведущий Наставник",
        "bio": {
          "bali": "Рожденная в традиционной семье йогов, Чанда Джи практикует садхану более 40 лет, вдохновляя мягкой отстройкой асан, мудрами и сердечной теплотой.",
          "rishikesh": "Чанда Джи делится многолетним опытом духовной практики на берегах Ганги, уделяя особое внимание открытию сердца и пранаяме.",
          "varkala": "Чанда Джи помогает участникам обрести покой и внутреннюю гармонию благодаря бережным правкам и дыханию."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "Преподаватель Анатомии и Асан",
        "bio": {
          "bali": "Изучая классическую йогу и механику дыхания, Рохит Джи обучает естественному расслаблению и снятию нервного напряжения.",
          "rishikesh": "Рохит Джи сочетает знание анатомии с принципами йоги для построения безопасной и эффективной практики асан.",
          "varkala": "Рохит Джи объединяет функциональную анатомию с аюрведой, помогая телу избавиться от зажимов и вернуть естественную гибкость."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "Преподаватель Философии и Медитации",
        "bio": {
          "bali": "Специализируясь на веданте и практиках внимательности, Приянка Джи помогает применять древнюю философию в повседневной жизни.",
          "rishikesh": "Приянка Джи проводит лекции по Йога-сутрам и Упанишадам в сакральной атмосфере Ришикеша.",
          "varkala": "Приянка Джи ведет вдохновляющие беседы о философии и медитации под шум волн Варкалы."
        }
      }
    ]
  },
  "ja": {
    "signatureExperience": "シグネチャー体験",
    "offersHeading": "YogaGarhiのリトリート特典",
    "offersSub": {
      "bali": "古代のヨーガの伝統とバリ島の癒しのエネルギーが融合した、オールインクルーシブの変容ウェルネスリトリート。",
      "rishikesh": "聖なるガンジス川のエネルギーと深遠なヴェーダの伝統が交差する、本格的なヒマラヤでのリトリート。",
      "varkala": "アラビア海の絶壁とケーララ州の伝統的なアーユルヴェーダ治癒法が出会う、沿岸のリトリート。"
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "マルチスタイル・ヨーガ実践",
          "desc": "体力を培う朝のハタ・ヴィンヤサと、深層の柔軟性と解放を促す夕暮れの優しい陰ヨガ。"
        },
        {
          "icon": "🌺",
          "title": "毎日の無料バリニーズマッサージ",
          "desc": "温かいオーガニックオイルを用いた本格的なバリ伝統マッサージを毎日受け、筋肉の緊張をほぐします。"
        },
        {
          "icon": "🔔",
          "title": "サウンドヒーリング＆呼吸法",
          "desc": "チベットのシンギングボウルによる深い音浴と、神経系を整えるガイド付きプラーナヤーマ。"
        },
        {
          "icon": "🥑",
          "title": "滋養豊かなオーガニック料理",
          "desc": "心身を清め活力を高める、地元産の新鮮な野菜を中心とした毎日のプラントベースのお食事。"
        },
        {
          "icon": "🌊",
          "title": "聖なるムルカット沐浴浄化ツアー",
          "desc": "聖なる泉の寺院を訪れ、バリ伝統の水による心身の浄化儀式（ムルカット）を体験します。"
        },
        {
          "icon": "🌿",
          "title": "ジャングルのサンクチュアリ＆プール",
          "desc": "ウブドの豊かな自然に包まれた静寂の環境、大型プール、開放的な竹造りのヨガシャラ。"
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "伝統的なハタ＆アシュタンガ",
          "desc": "ヒマラヤの正統なヨギが指導する、朝のハタヨガと夕方のアシュタンガ・ヴィンヤサの実践。"
        },
        {
          "icon": "🌊",
          "title": "ガンジス川での瞑想＆アールティ",
          "desc": "聖なるガンジス川のほとりでのサンライズ瞑想と、毎夜行われる幻想的な礼拝儀式への参加。"
        },
        {
          "icon": "🌿",
          "title": "アーユルヴェーダ問診＆施術",
          "desc": "アーユルヴェーダ専門医による個別診断と、薬草オイルを用いた伝統的なアビヤンガ療法。"
        },
        {
          "icon": "🍲",
          "title": "純粋なサットヴァ（浄化）食",
          "desc": "心身の調和を保つため、アーユルヴェーダの基本原則に沿って調理されたヘルシーな菜食。"
        },
        {
          "icon": "🏔️",
          "title": "ヒマラヤの日の出エクスカーション",
          "desc": "雪を頂くヒマラヤ山脈を一望するクンジャプリ寺院での早朝瞑想ツアー。"
        },
        {
          "icon": "🕉️",
          "title": "ヴェーダ哲学＆キールタン詠唱",
          "desc": "パタンジャリのヨーガ・スートラやバガヴァッド・ギーターの教えと、心を開くマントラ詠唱。"
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "オーシャンビュー・ヨガ＆呼吸法",
          "desc": "アラビア海からの心地よい潮風を感じながら、オープンエアのデッキで毎日行うヨガレッスン。"
        },
        {
          "icon": "🌿",
          "title": "本場ケーララ州のアーユルヴェーダ",
          "desc": "アーユルヴェーダ発祥の地ケーララの高品質な薬草オイルを使用した本格的なトリートメント。"
        },
        {
          "icon": "🏖️",
          "title": "聖なるパパナサムビーチの散策",
          "desc": "罪を洗い流すと伝えられるパパナサムビーチと赤い絶壁を巡る、静かな瞑想ウォーク。"
        },
        {
          "icon": "🍲",
          "title": "沿岸のアーユルヴェーダ料理",
          "desc": "新鮮なココナッツやスパイスを贅沢に使った、身体に優しい毎日のサットヴァ料理。"
        },
        {
          "icon": "🌅",
          "title": "夕暮れの絶壁での陰ヨガ",
          "desc": "アラビア海に沈む黄金の夕日を眺めながら行う、深いリラクゼーションの陰ヨガとヨガニードラ。"
        },
        {
          "icon": "🥥",
          "title": "ケーララのバックウォーター舟巡り",
          "desc": "水路が織りなす静穏な水郷地帯をボートで巡り、豊かな自然と現地文化に触れるツアー。"
        }
      ]
    },
    "datesTitle": "リトリート日程 — 通年参加可能",
    "datesSub": "いつでも柔軟にスタートできます。ご都合の良い日程に合わせてチェックインしていただけます。",
    "checkAvailability": "空き状況を確認する",
    "mostPopular": "一番人気",
    "perPerson": "/ 1名様",
    "transparentPricing": "明朗な料金体系",
    "pricingDescription": "ご希望の宿泊スタイルをお選びください。すべてのパッケージに毎日のヨガ、トリートメント、お食事、施設利用が含まれています。",
    "venueDetailsSoon": "宿泊施設および会場の詳細は近日中にご案内いたします。",
    "diningSubtitle": "お客様の心身の治癒と再生を支える、愛情を込めて作られた純粋で滋養豊かなお食事。",
    "diningTableHeading": "毎日の食事スケジュール",
    "mealsFallback": [
      {
        "meal": "朝食",
        "time": "08:30 - 09:30",
        "notes": "新鮮な南国フルーツ、温かいポリッジ、ハーブティー、ココナッツウォーター。"
      },
      {
        "meal": "昼食",
        "time": "13:00 - 14:00",
        "notes": "栄養バランスの取れたプラントベース料理、採れたてサラダ、穀物。"
      },
      {
        "meal": "夕食",
        "time": "19:00 - 20:00",
        "notes": "胃腸に優しいアーユルヴェーダスープ、蒸し野菜、夜のリラックスハーブティー。"
      }
    ],
    "scheduleSub": "活力ある実践、心地よいトリートメント、深い安らぎが調和するよう緻密に設計された1日の流れ。",
    "dayTabPrefix": "第",
    "dayTabSuffix": "日",
    "dayOfPrefix": "第",
    "dayOfConnector": "日 / 全",
    "campusAmenitiesTitle": "キャンパスの設備＆アメニティ",
    "amenitiesList": [
      "大自然に囲まれたオープンエアのヨガシャラ",
      "サンラウンジャーを備えた大型屋外プール",
      "薬草が息づくボタニカルハーブガーデン",
      "敷地全域をカバーする無料の高速光ファイバーWi-Fi",
      "アーユルヴェーダ施術専用ルーム＆スパ施設",
      "静寂の中で瞑想に浸れるクワイエットゾーン",
      "24時間いつでも利用可能な浄水ミネラルウォーター＆ハーブティー",
      "毎日の客室清掃およびランドリーサービス"
    ],
    "campusOneTitle": "キャンパスI — メインレジデンス＆ガーデン",
    "campusOneDesc": "緑あふれるガーデンに囲まれ、ヨガシャラやプールへのアクセスが抜群のリトリートの中心棟。",
    "campusOneFeatures": [
      "チーク材の風合いを生かした伝統的なバリ建築様式",
      "開放的な半露天専用バスルームを備えた広々とした客室",
      "プールやサンデッキへ直結する快適な導線",
      "ヤシの木や花々を眺める心安らぐガーデンビュー"
    ],
    "campusTwoTitle": "キャンパスII — 静寂に浸るジャングル別邸",
    "campusTwoDesc": "深い静けさとプライベートな空間を求めるお客様のための、隠れ家のような宿泊棟。",
    "campusTwoFeatures": [
      "エアコン完備のモダンで上質なプライベートルーム",
      "熱帯の森を見渡す専用バルコニー",
      "キャンパスIのすべての施設を自由にご利用可能",
      "静かな瞑想や心身の休息に最適なロケーション"
    ],
    "studentGuaranteeTitle": "安心と安全をお約束する私たちの理念",
    "studentGuaranteeText": "お一人おひとりを尊重し、深く心身を癒やす安全な環境をご用意しています。講師やセラピストが誠意を持って寄り添います。",
    "airportPickupTitle": "空港送迎サービス完備",
    "airportPickupText": "ご到着時からリラックスしていただけるよう、空港出口にて専用ドライバーがお出迎えいたします。",
    "durationButtons": {
      "3days": "3日間リトリート",
      "7days": "7日間リトリート",
      "14days": "14日間リトリート"
    },
    "gallery": [
      {
        "title": "メイン・ヨガシャラ",
        "desc": "熱帯の自然と一体になれる風通しの良い竹製シャラ。"
      },
      {
        "title": "屋外プール",
        "desc": "クラスの合間にクールダウンできる澄み切ったプール。"
      },
      {
        "title": "オーガニック料理",
        "desc": "新鮮なオーガニック食材を使った美しく美味しい食事。"
      },
      {
        "title": "快適なプライベートルーム",
        "desc": "良質な睡眠をサポートするベッドを備えた落ち着いたお部屋。"
      },
      {
        "title": "アーユルヴェーダ・スパ",
        "desc": "心身を解きほぐす伝統マッサージとトリートメントの空間。"
      },
      {
        "title": "トロピカルガーデン",
        "desc": "歩くだけで心が落ち着く、静かな小道と緑豊かな木々。"
      }
    ],
    "crossLinks": {
      "days12": "12日間トレーニング",
      "days28": "28日間トレーニング",
      "mostPopular": "一番人気",
      "learnMore": "詳しく見る",
      "fromLearnMore": "料金: $",
      "desc100": "100時間コース: 基礎を深く学びたい方のための集中入門講座。",
      "desc200": "200時間コース: 世界中で通用する全米ヨガアライアンス認定コース。",
      "desc300": "300時間コース: 200時間修了者のための上級指導者養成コース。",
      "desc100Varkala": "100時間 ヴァルカラ: 海辺でヨガとアーユルヴェーダを学ぶ旅。",
      "desc200Varkala": "200時間 ヴァルカラ: アラビア海を望むヨガアライアンス認定講座。",
      "desc300Varkala": "300時間 ヴァルカラ: ケーララの絶壁で深める上級マスター講座。"
    },
    "facultySub": {
      "bali": "本物のヨーガの伝統を伝える情熱あふれる指導者たちから直接学びます。",
      "rishikesh": "ヒマラヤの聖地で修練を積んだ正統派ヨガマスターが直接指導。",
      "varkala": "経験豊富なヨガ指導者とケーララ州公認のアーユルヴェーダ医師陣。"
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "創設者＆スピリチュアルディレクター",
        "bio": {
          "bali": "ヒマラヤでの12年以上にわたる過酷なサーダナ（修行）を経て、サチン師は古代ヴェーダの叡智と現代のマインドフルネスを融合させ、深い覚醒へと導きます。",
          "rishikesh": "リシケシの伝統を受け継ぐサチン師は、クラシカルなハタヨガと瞑想を深遠な精神性とともに指導します。",
          "varkala": "ヴェーダの伝統を大切にしつつ、ヴァルカラの海のエネルギーと調和させたヨガで心身の根本的な回復をもたらします。"
        }
      },
      {
        "name": "Chanda Ji",
        "role": "共同創設者＆主任メンター",
        "bio": {
          "bali": "伝統的なヨガ一家に生まれ、40年以上にわたりサーダナを実践。優美なアライメント、ムドラー、献身的な姿勢で生徒を導きます。",
          "rishikesh": "ガンジス川のほとりで培った長年の祈りと実践を通じ、心を開くハタヨガとプラーナヤーマを情熱的に伝えます。",
          "varkala": "繊細な指導と癒しの呼吸法を通じて、参加者一人ひとりを深い静寂と調和へと導きます。"
        }
      },
      {
        "name": "Rohit Ji",
        "role": "解剖学＆アーサナ主任講師",
        "bio": {
          "bali": "古典ヨガと呼吸科学を修めたロヒト師は、緻密な呼吸のメカニズムと神経の緊張を解くソマティック・リリースを指導します。",
          "rishikesh": "解剖学的な知見と伝統的なアプローチを組み合わせ、安全かつ効果的なアーサナの習得をサポートします。",
          "varkala": "機能解剖学とアーユルヴェーダの生理学を組み合わせ、身体の滞りを解消し本来の活力を呼び覚まします。"
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "哲学＆瞑想講師",
        "bio": {
          "bali": "ヴェーダンタ哲学とマインドフルネス瞑想を専門とし、古代の教えを日々の生活の中で実践するための智恵を授けます。",
          "rishikesh": "リシケシの静謐な環境の中で、ヨーガ・スートラやウパニシャッドの深遠な教えを分かりやすく紐解きます。",
          "varkala": "波の音を聴きながら行う哲学対話と瞑想セッションを通じ、参加者の内省を深めます。"
        }
      }
    ]
  },
  "ko": {
    "signatureExperience": "시그니처 경험",
    "offersHeading": "YogaGarhi 리트릿 프로그램",
    "offersSub": {
      "bali": "고대 요가 전통과 발리의 치유 에너지가 만나는 올인클루시브 웰니스 리트릿입니다.",
      "rishikesh": "성스러운 갠지스강의 에너지와 심오한 베다 전통이 어우러진 진정한 히말라야 몰입 리트릿입니다.",
      "varkala": "아라비아해 절벽의 절경과 케랄라의 전통 아유르베다 치유법이 만나는 해안 웰니스 리트릿입니다."
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "멀티 스타일 요가 수련",
          "desc": "신체적 활력을 높이는 아침 하타 빈야사와 깊은 이완 및 유연성을 길러주는 저녁 인 요가 수련."
        },
        {
          "icon": "🌺",
          "title": "매일 무료 발리 전통 마사지",
          "desc": "따뜻한 유기농 식물성 오일을 사용한 발리 전통 전신 마사지를 매일 받아 근육의 피로를 풀어줍니다."
        },
        {
          "icon": "🔔",
          "title": "사운드 힐링 & 호흡 수련",
          "desc": "티베트 싱잉볼의 깊은 진동과 전문 강사의 안내로 진행되는 프라나야마 호흡으로 신경계를 안정시킵니다."
        },
        {
          "icon": "🥑",
          "title": "신선한 유기농 채식 식단",
          "desc": "몸을 정화하고 에너지를 북돋아 주는 신선한 친환경 식재료 기반의 건강한 채식 식사가 매일 제공됩니다."
        },
        {
          "icon": "🌊",
          "title": "성스러운 멜루캇 성수 정화 의식",
          "desc": "발리의 유서 깊은 성수 사원을 방문하여 심신을 정화하는 전통 멜루캇(Melukat) 의식을 체험합니다."
        },
        {
          "icon": "🌿",
          "title": "정글 힐링 리조트 & 수영장",
          "desc": "우붓의 울창한 숲에 둘러싸인 평화로운 쉼터에서 대형 야외 수영장과 야외 요가 샬라를 만끽하세요."
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "정통 하타 및 아쉬탕가 요가",
          "desc": "히말라야 요가 마스터들이 이끄는 전통 아침 하타 요가와 저녁 아쉬탕가 빈야사 수련."
        },
        {
          "icon": "🌊",
          "title": "갠지스강 명상 및 아르티 의식",
          "desc": "신성한 갠지스 강변에서의 일출 명상과 매일 저녁 펼쳐지는 장엄한 갠지스 아르티 의식 참여."
        },
        {
          "icon": "🌿",
          "title": "아유르베다 진맥 상담 및 테라피",
          "desc": "아유르베다 전문의와의 맞춤형 건강 상담 및 천연 한방 오일을 이용한 아비양가 마사지."
        },
        {
          "icon": "🍲",
          "title": "순수 사트빅(Sattvic) 자연식",
          "desc": "고대 아유르베다 원리에 따라 조리된 소화가 편안하고 몸을 정화하는 매일의 채식 식단."
        },
        {
          "icon": "🏔️",
          "title": "히말라야 일출 사원 트레킹",
          "desc": "눈 덮인 히말라야 봉우리가 한눈에 내려다보이는 쿤자푸리 사원에서의 특별한 새벽 명상."
        },
        {
          "icon": "🕉️",
          "title": "베다 요가 철학 및 키르탄 찬팅",
          "desc": "파탄잘리 요가 수트라, 바가바드 기타 강독과 마음의 평온을 주는 만트라 찬팅."
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "오션뷰 요가 및 호흡 수련",
          "desc": "아라비아해의 시원한 바닷바람을 맞으며 야외 목재 데크에서 즐기는 매일의 요가 세션."
        },
        {
          "icon": "🌿",
          "title": "케랄라 본토 아유르베다 테라피",
          "desc": "아유르베다의 본고장 케랄라의 약초 오일을 사용한 맞춤형 아비양가 및 치유 마사지."
        },
        {
          "icon": "🏖️",
          "title": "파파나삼 해변 정화 산책",
          "desc": "붉은 절벽과 성스러운 파파나삼 해변을 따라 거닐며 즐기는 아침 해변 산책과 명상."
        },
        {
          "icon": "🍲",
          "title": "해안 아유르베다 힐링 식단",
          "desc": "신선한 코코넛과 천연 향신료로 풍미를 더한 매일 3회 정갈한 사트빅 식사."
        },
        {
          "icon": "🌅",
          "title": "선셋 클리프 인 요가 & 니드라",
          "desc": "바다로 지는 아름다운 노을을 바라보며 깊은 휴식을 선사하는 인 요가 및 요가 니드라."
        },
        {
          "icon": "🥥",
          "title": "케랄라 백워터 전통 보트 투어",
          "desc": "케랄라의 평화로운 수로를 보트로 유람하며 현지 자연과 전통 문화를 만끽하는 투어."
        }
      ]
    },
    "datesTitle": "리트릿 일정 — 연중 상시 참여 가능",
    "datesSub": "원하시는 일정에 맞춰 유연하게 시작하실 수 있습니다. 편하신 체크인 날짜를 선택해 보세요.",
    "checkAvailability": "예약 가능 여부 확인",
    "mostPopular": "인기 코스",
    "perPerson": "/ 1인 기준",
    "transparentPricing": "투명한 정찰제 가격",
    "pricingDescription": "원하시는 숙소 스타일을 선택하세요. 모든 패키지에는 매일 요가, 트리트먼트, 식사, 리조트 시설 무료 이용이 포함됩니다.",
    "venueDetailsSoon": "숙소 및 행사장 상세 정보는 곧 안내해 드릴 예정입니다.",
    "diningSubtitle": "몸과 마음의 온전한 회복을 돕기 위해 정성을 담아 준비한 건강하고 정갈한 식사.",
    "diningTableHeading": "일일 식사 시간표",
    "mealsFallback": [
      {
        "meal": "조식",
        "time": "08:30 - 09:30",
        "notes": "신선한 열대 과일, 따뜻한 오트밀 죽, 힐링 허브티, 생코코넛 워터."
      },
      {
        "meal": "중식",
        "time": "13:00 - 14:00",
        "notes": "영양 균형을 맞춘 채식 요리, 신선한 샐러드, 곡물 및 콩류 요리."
      },
      {
        "meal": "석식",
        "time": "19:00 - 20:00",
        "notes": "소화가 잘되는 따뜻한 아유르베다 수프, 찐 야채 요리, 숙면 허브티."
      }
    ],
    "scheduleSub": "활력 넘치는 요가 수련, 깊은 휴식, 내면의 평화가 조화롭게 어우러지도록 세심하게 구성된 하루 일정.",
    "dayTabPrefix": "제",
    "dayTabSuffix": "일",
    "dayOfPrefix": "제",
    "dayOfConnector": "일 / 총 ",
    "campusAmenitiesTitle": "캠퍼스 부대시설 및 편의 서비스",
    "amenitiesList": [
      "열대 자연과 호흡하는 오픈형 야외 요가 샬라",
      "선베드가 구비된 대형 야외 수영장",
      "아유르베다 약초가 자라는 힐링 가든",
      "전 구역 초고속 광랜 Wi-Fi 완비",
      "아유르베다 전문 트리트먼트 룸 및 스파 센터",
      "명상과 내면의 고요를 위한 콰이어트 존",
      "24시간 이용 가능한 미네랄 음용수 및 허브티",
      "매일 룸 클리닝 및 세탁 서비스"
    ],
    "campusOneTitle": "캠퍼스 I — 메인 레지던스 & 가든",
    "campusOneDesc": "열대 정원으로 둘러싸여 요가 샬라와 수영장으로 바로 이어지는 리트릿의 중심 숙소입니다.",
    "campusOneFeatures": [
      "티크 원목의 온기가 느껴지는 전통 발리풍 건축 양식",
      "반야외 프라이빗 전용 욕실이 딸린 넓은 객실",
      "수영장 및 선덱으로 바로 연결되는 편리한 동선",
      "야자수와 열대 꽃들이 어우러진 싱그러운 정원 뷰"
    ],
    "campusTwoTitle": "캠퍼스 II — 고요한 정글 힐링 별채",
    "campusTwoDesc": "깊은 휴식과 온전한 침묵을 원하는 분들을 위해 마련된 프라이빗하고 평화로운 공간입니다.",
    "campusTwoFeatures": [
      "에어컨이 완비된 모던하고 쾌적한 프라이빗 룸",
      "열대 정글의 절경이 펼쳐지는 전용 발코니",
      "캠퍼스 I의 모든 시설 자유롭게 이용 가능",
      "깊은 명상과 쉼에 최적화된 고요한 환경"
    ],
    "studentGuaranteeTitle": "수강생 여러분을 위한 진심 어린 약속",
    "studentGuaranteeText": "안전하고 존중받는 따뜻한 치유의 공간을 제공합니다. 경험 많은 강사진과 테라피스트들이 정성을 다해 함께합니다.",
    "airportPickupTitle": "공항 픽업 서비스 무료 포함",
    "airportPickupText": "도착하시는 순간부터 안심하실 수 있도록 전용 기사가 공항 출구에서 직접 마중을 나갑니다.",
    "durationButtons": {
      "3days": "3일 리트릿",
      "7days": "7일 리트릿",
      "14days": "14일 리트릿"
    },
    "gallery": [
      {
        "title": "메인 요가 샬라",
        "desc": "발리의 자연을 온몸으로 느끼는 통풍이 좋은 대나무 샬라."
      },
      {
        "title": "야외 수영장",
        "desc": "요가 수업 전후로 상쾌하게 휴식을 취할 수 있는 맑은 풀."
      },
      {
        "title": "유기농 자연식 식단",
        "desc": "신선한 채소와 곡물로 정성스레 만든 맛있고 건강한 요리."
      },
      {
        "title": "아늑한 프라이빗 룸",
        "desc": "편안한 침대와 현대식 시설을 갖춘 평온한 침실."
      },
      {
        "title": "아유르베다 스파",
        "desc": "피로를 풀고 활력을 되찾아주는 전통 마사지 공간."
      },
      {
        "title": "열대 정원 산책로",
        "desc": "마음을 차분하게 가라앉혀 주는 초록빛 힐링 산책길."
      }
    ],
    "crossLinks": {
      "days12": "12일 과정",
      "days28": "28일 과정",
      "mostPopular": "인기 코스",
      "learnMore": "자세히 보기",
      "fromLearnMore": "시작가 $",
      "desc100": "100시간 코스: 기초를 탄탄히 다지고 싶은 분들을 위한 입문 집중 과정.",
      "desc200": "200시간 코스: 전 세계에서 인정받는 요가 얼라이언스 국제 강사 자격 과정.",
      "desc300": "300시간 코스: 200시간 수료 강사를 위한 심화 지도자 과정.",
      "desc100Varkala": "100시간 바르칼라: 해변에서 요가와 아유르베다를 함께 배우는 여정.",
      "desc200Varkala": "200시간 바르칼라: 아라비아해 절벽에서 취득하는 요가 지도자 자격증.",
      "desc300Varkala": "300시간 바르칼라: 케랄라의 아름다운 자연 속에서 완성하는 마스터 과정."
    },
    "facultySub": {
      "bali": "요가의 전통을 올곧게 지켜온 헌신적인 요가 지도자들에게 직접 배웁니다.",
      "rishikesh": "히말라야 정통 베다 계보를 이어받은 마스터들의 직접 지도.",
      "varkala": "풍부한 경험의 요가 강사진과 케랄라 공인 아유르베다 전문의."
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "설립자 & 스피리추얼 디렉터",
        "bio": {
          "bali": "12년 이상 히말라야에서 사다나(수행)를 쌓은 사친 지는 고대 베다의 비법과 현대 마인드풀니스를 결합하여 수련자들을 깊은 내면의 깨달음으로 이끕니다.",
          "rishikesh": "리시케시의 신성한 계보를 이어받아 진정성 있는 정통 하타 요가와 명상을 열정적으로 지도합니다.",
          "varkala": "베다의 오랜 지혜를 바탕으로 바르칼라 해안의 치유 에너지와 조화를 이루는 요가를 통해 신체와 신경의 깊은 회복을 선사합니다."
        }
      },
      {
        "name": "Chanda Ji",
        "role": "공동 설립자 & 총괄 멘토",
        "bio": {
          "bali": "전통 요가 가문에서 태어나 40년 넘게 수행을 이어오며, 따뜻하고 섬세한 아사나 정렬과 무드라, 헌신적인 지도로 학생들에게 깊은 영감을 줍니다.",
          "rishikesh": "갠지스 강가에서 수십 년간 쌓아온 정성 어린 수련을 통해 가슴을 여는 하타 요가와 호흡의 정수를 가르칩니다.",
          "varkala": "따뜻한 배려와 깊은 치유의 호흡 수련을 통해 수련생들이 내면의 평온을 찾도록 안내합니다."
        }
      },
      {
        "name": "Rohit Ji",
        "role": "해부학 & 아사나 수석 강사",
        "bio": {
          "bali": "고전 요가와 호흡 과학을 두루 섭렵한 로힛 지는 정밀한 호흡 역학과 신경계의 긴장을 푸는 소마틱 이완 기법을 전문적으로 지도합니다.",
          "rishikesh": "체계적인 해부학 지식과 전통 요가 원리를 접목하여 부상 없이 안전하고 효과적인 아사나 수련을 완성하도록 돕습니다.",
          "varkala": "기능 해부학과 아유르베다 생리학을 결합하여 신체의 굳은 긴장을 풀고 균형을 되찾아줍니다."
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "요가 철학 & 명상 지도 강사",
        "bio": {
          "bali": "베단타 철학과 마음챙김 명상을 전공하여, 고대의 깊은 지혜를 현대인의 일상에 지혜롭게 적용할 수 있도록 안내합니다.",
          "rishikesh": "리시케시의 영적인 분위기 속에서 요가 수트라와 우파니샤드의 핵심을 쉽고 명쾌하게 가르칩니다.",
          "varkala": "파도 소리가 들리는 바르칼라 해변에서 깊이 있는 철학 강독과 안내 명상으로 마음에 평화를 심어줍니다."
        }
      }
    ]
  },
  "zh": {
    "signatureExperience": "标志性体验",
    "offersHeading": "YogaGarhi 静修专属礼遇",
    "offersSub": {
      "bali": "全包式身心蜕变疗愈静修营，将古老瑜伽传承与巴厘岛的疗愈能量完美融合。",
      "rishikesh": "地道的喜马拉雅静修沉浸体验，圣河恒河的灵性能量与深厚吠陀传统在此交汇。",
      "varkala": "沿海阿育吠陀疗愈静修，阿拉伯海的壮丽悬崖与喀拉拉邦传统疗愈智慧相得益彰。"
    },
    "offersCards": {
      "bali": [
        {
          "icon": "🧘",
          "title": "多流派经典瑜伽研练",
          "desc": "晨间哈他流瑜伽激活身心活力与力量，傍晚温和阴瑜伽带来深层柔韧舒展与压力释放。"
        },
        {
          "icon": "🌺",
          "title": "每日尊享巴厘岛古法按摩",
          "desc": "每日赠送传统巴厘岛全身植物精油按摩，温热天然草本渗透肌理，彻底缓解肌肉酸痛与疲劳。"
        },
        {
          "icon": "🔔",
          "title": "西藏颂钵音疗与呼吸调息",
          "desc": "沉浸于纯净西藏颂钵共振音疗，配合导师引导的调息法（Pranayama），平复自主神经系统。"
        },
        {
          "icon": "🥑",
          "title": "从农场到餐桌的有机纯素美食",
          "desc": "每日提供三餐新鲜美味、营养均衡的全植物性膳食，源头有机食材为身体注入轻盈活力。"
        },
        {
          "icon": "🌊",
          "title": "圣泉寺神圣水疗洗礼体验",
          "desc": "专程前往古老圣泉水庙，体验巴厘岛历史悠久的Melukat传统圣水灌顶与身心净化洗礼。"
        },
        {
          "icon": "🌿",
          "title": "乌布雨林静修圣所与景观泳池",
          "desc": "下榻乌布绿意盎然的天然养生圣地，坐拥开阔户外泳池与被大自然环抱的露天竹制瑜伽馆。"
        }
      ],
      "rishikesh": [
        {
          "icon": "🧘",
          "title": "正统哈他与阿斯汤加瑜伽",
          "desc": "由喜马拉雅深资正统瑜伽大师亲自传授，涵盖清晨经典哈他与傍晚阿斯汤加串联实修。"
        },
        {
          "icon": "🌊",
          "title": "圣河恒河畔冥想与夜祭祈福",
          "desc": "清晨于恒河之滨迎着朝阳入定冥想，傍晚亲历震撼心灵的恒河夜祭圣火祈福大典（Ganga Aarti）。"
        },
        {
          "icon": "🌿",
          "title": "阿育吠陀名医体质脉诊与调理",
          "desc": "阿育吠陀资深医师一对一问诊定制养生方案，尊享传统草本精油推拿理疗（Abhyanga）。"
        },
        {
          "icon": "🍲",
          "title": "纯净悦性（Sattvic）养生饮食",
          "desc": "严格遵循古印度阿育吠陀养生典籍烹饪的纯净素食，每日三餐温润清净，助益修行。"
        },
        {
          "icon": "🏔️",
          "title": "喜马拉雅晨曦日出朝圣之旅",
          "desc": "清晨前往昆贾普里（Kunjapuri）神庙登高远眺，在喜马拉雅皑皑雪峰辉映下静心打坐。"
        },
        {
          "icon": "🕉️",
          "title": "吠陀哲学精解与吉尔坦梵唱",
          "desc": "深入研读帕坦伽利《瑜伽经》与《薄伽梵歌》，每日参与触动灵魂的烛光吉尔坦梵唱共修。"
        }
      ],
      "varkala": [
        {
          "icon": "🧘",
          "title": "面朝大海户外瑜伽与调息",
          "desc": "在听涛木制平台上研习体式，伴随阿拉伯海清新海风与海浪律动深化呼吸感知。"
        },
        {
          "icon": "🌿",
          "title": "喀拉拉邦地道阿育吠陀调理",
          "desc": "体验阿育吠陀发源地喀拉拉邦的珍稀药草精油全身推拿与定制排毒理疗。"
        },
        {
          "icon": "🏖️",
          "title": "神圣Papanasam海滩漫步净心",
          "desc": "漫步于壮丽的红砂岩悬崖与传说具有消业净化功效的Papanasam神圣海岸。"
        },
        {
          "icon": "🍲",
          "title": "沿海风味阿育吠陀美馔",
          "desc": "选用新鲜椰汁与天然养生香料精心调配的每日三餐纯净悦性海滨美食。"
        },
        {
          "icon": "🌅",
          "title": "悬崖日落阴瑜伽与深眠冥想",
          "desc": "在阿拉伯海壮美的金色落日余晖中，体验深层舒缓的阴瑜伽与瑜伽深眠（Yoga Nidra）。"
        },
        {
          "icon": "🥥",
          "title": "喀拉拉水乡泛舟生态文化之旅",
          "desc": "乘舟漫游如诗如画的喀拉拉传统内陆水系（Backwaters），探索沿岸古老村落与历史神庙。"
        }
      ]
    },
    "datesTitle": "静修营排期 — 全年随时出发",
    "datesSub": "排期高度灵活，全年支持随时入住。您可以根据个人的假期规划自由选择抵达日期。",
    "checkAvailability": "查询空房与预订",
    "mostPopular": "最受欢迎",
    "perPerson": "/ 每位",
    "transparentPricing": "明码标价·公开透明",
    "pricingDescription": "随心选择适合您的住宿房型。所有套餐均包含每日瑜伽课程、疗愈理疗、全套膳食及校区全套设施使用权限。",
    "venueDetailsSoon": "住宿房型及场地设施详情即将正式公布，敬请期待。",
    "diningSubtitle": "选用纯净天然食材，满怀敬意用心烹调，为您的身心疗愈之旅提供丰沛滋养。",
    "diningTableHeading": "每日膳食时间安排",
    "mealsFallback": [
      {
        "meal": "晨光早餐",
        "time": "08:30 - 09:30",
        "notes": "新鲜热带时令水果、温热营养燕麦粥、草本养生茶及天然鲜椰水。"
      },
      {
        "meal": "能量午餐",
        "time": "13:00 - 14:00",
        "notes": "营养均衡的全植物热食、新鲜脆嫩沙拉、有机豆类与全谷杂粮。"
      },
      {
        "meal": "温润晚餐",
        "time": "19:00 - 20:00",
        "notes": "温和易消化的阿育吠陀清润靓汤、清蒸有机蔬菜及安神助眠草本茶饮。"
      }
    ],
    "scheduleSub": "精心设计的作息韵律，张弛有度地融汇活力体式、深度疗愈与内观宁静。",
    "dayTabPrefix": "第",
    "dayTabSuffix": "天",
    "dayOfPrefix": "第",
    "dayOfConnector": "天 / 共",
    "campusAmenitiesTitle": "校区设施与尊享礼遇",
    "amenitiesList": [
      "被郁郁葱葱大自然环抱的露天通风竹构瑜伽大厅",
      "配备充足日光浴躺椅的大型户外生态景观泳池",
      "培育珍贵阿育吠陀药用植物的草本生态花园",
      "全校区覆盖的高速光纤无线网络（Wi-Fi）",
      "专属阿育吠陀传统推拿理疗室与水疗中心",
      "供学员静默冥想、阅览沉思的静谧禅意空间",
      "24小时全天候供应高品质过滤饮用水与热草本茶",
      "每日客房保洁维护与贴心洗衣服务"
    ],
    "campusOneTitle": "一号校区 — 核心主楼与生态庭园",
    "campusOneDesc": "静修营的活力核心，坐落于热带花园深处，数步即达主瑜伽大厅与露天泳池。",
    "campusOneFeatures": [
      "融合传统巴厘岛风情与精致柚木装潢的建筑设计",
      "宽敞明亮客房配半露天私密独立卫浴与雨淋花洒",
      "直通户外泳池与日光休闲露台的便捷动线",
      "推窗即览热带棕榈树林与繁花似锦的花园景致"
    ],
    "campusTwoTitle": "二号校区 — 雨林幽境与静心禅居",
    "campusTwoDesc": "专为追求极致静谧、远离喧嚣与深度休养的学员打造的私密隐世之所。",
    "campusTwoFeatures": [
      "全空调配置的高端现代化精品独立客房",
      "享有热带丛林葱郁全景的私人观景阳台",
      "全权共享使用一号校区的所有公共设施与服务",
      "静思默想、身心深度修复的理想世外桃源"
    ],
    "studentGuaranteeTitle": "我们对每位学员的由衷承诺",
    "studentGuaranteeText": "我们承诺为您营造一个安全、受尊重且充满关爱的疗愈环境。资深导师与理疗团队将全心全意陪伴您的蜕变旅程。",
    "airportPickupTitle": "全流程贴心免费机场接送",
    "airportPickupText": "从抵埗之刻起便安心无忧：专属私家车司机将在机场出口举牌恭候，安全送达校区。",
    "durationButtons": {
      "3days": "3天短途静修",
      "7days": "7天深度静修",
      "14days": "14天焕新蜕变"
    },
    "gallery": [
      {
        "title": "主瑜伽静修厅",
        "desc": "通透明亮的天然竹构建筑，直面广袤热带丛林。"
      },
      {
        "title": "露天生态泳池",
        "desc": "在课间时段畅游一泓碧水，惬意享受清凉时光。"
      },
      {
        "title": "纯素养生膳食",
        "desc": "以有机时令农产品精心制作的色香味俱全素食。"
      },
      {
        "title": "温馨客房居所",
        "desc": "配备奢华亲肤床品与现代卫浴的高品质住宿空间。"
      },
      {
        "title": "阿育吠陀水疗馆",
        "desc": "以古法草本精油推拿舒缓筋骨、平衡能量的疗愈工坊。"
      },
      {
        "title": "热带禅意庭园",
        "desc": "漫步绿意盎然的幽静小径，随时随地开启内观冥想。"
      }
    ],
    "crossLinks": {
      "days12": "12天认证培训",
      "days28": "28天认证培训",
      "mostPopular": "最受欢迎",
      "learnMore": "了解详情",
      "fromLearnMore": "起价 $",
      "desc100": "100小时导师班：专为初学者打造的系统性入门与自我提升课程。",
      "desc200": "200小时导师班：全球通用的全美瑜伽联盟（Yoga Alliance）旗舰认证。",
      "desc300": "300小时高阶班：面向持证老师的高阶进阶名师修炼认证班。",
      "desc100Varkala": "100小时瓦卡拉：在印度海滨沉浸式研习瑜伽与阿育吠陀经典。",
      "desc200Varkala": "200小时瓦卡拉：面朝阿拉伯海荣获全美瑜伽联盟国际权威认证。",
      "desc300Varkala": "300小时瓦卡拉：在喀拉拉邦悬崖之上深造高阶瑜伽教学精髓。"
    },
    "facultySub": {
      "bali": "向毕生致力于传播正统古典瑜伽智慧的资深导师求教研习。",
      "rishikesh": "由深植于吠陀正统传统的喜马拉雅瑜伽宗师亲自引领导向真理。",
      "varkala": "由经验丰富的资深瑜伽导师与喀拉拉邦持牌正统阿育吠陀医师联合执教。"
    },
    "teachers": [
      {
        "name": "Yogacharya Sachin",
        "role": "创始人兼灵性总监",
        "bio": {
          "bali": "经历12载以上在喜马拉雅山脉的精进苦修与潜心研习，Sachin师父将古老吠陀智慧与现代正念融会贯通，引领数以千计的国际学员走向深邃的觉醒与内观。",
          "rishikesh": "生长于世界瑜伽之都瑞诗凯诗的灵性殿堂，Sachin师父以无比的赤诚传授经典哈他瑜伽与正统禅定冥想。",
          "varkala": "依托深厚的吠陀经典传承，Sachin师父将传统瑜伽精髓与瓦卡拉海滨疗愈气场有机融合，引导身心全面深度放松与能量归位。"
        }
      },
      {
        "name": "Chanda Ji",
        "role": "联合创始人兼首席导师",
        "bio": {
          "bali": "出生于传统瑜伽世家，四十余载潜心实修，Chanda师母以精准温和的体式正位、深奥手印及充满慈悲的奉献之心，深深启迪着每一位学员。",
          "rishikesh": "在圣洁的恒河水畔倾囊相授数十年积淀的虔诚实修法门，专注于开启心轮的哈他练习与纯正生命能量呼吸法。",
          "varkala": "Chanda师母以无微不至的耐心点拨与温和的呼吸疗法，引领研习者步入内在宁静祥和的安宁境界。"
        }
      },
      {
        "name": "Rohit Ji",
        "role": "高级解剖学与体式主讲导师",
        "bio": {
          "bali": "深研经典瑜伽与呼吸生理科学，Rohit师父善于传授精微的呼吸力学机制与躯体筋膜深层释放技巧，有效消解长年累积的神经紧绷感。",
          "rishikesh": "将严谨的运动解剖学前沿知识与传统瑜伽规程精妙结合，确保学员在安全稳健的前提下实现体式精进与内在突破。",
          "varkala": "深度融汇功能解剖学与阿育吠陀生理机制，针对性帮助学员疏通经络结节，重焕机体活力与灵动平衡。"
        }
      },
      {
        "name": "Priyanka Ji",
        "role": "瑜伽哲学与冥想主讲导师",
        "bio": {
          "bali": "专研吠檀多（Vedanta）深邃哲学与正念冥想实修，Priyanka导师善于化繁为简，引导学员将千年东方智慧巧妙运用于现代日常工作生活之中。",
          "rishikesh": "在瑞诗凯诗殊胜的灵修圣境中，深入浅出地精解帕坦伽利《瑜伽经》与《奥义书》的微言大义。",
          "varkala": "在海风吹拂的瓦卡拉海滨主持发人深省的哲学共修聚会（Satsang）与内观冥想，涤荡心灵尘埃。"
        }
      }
    ]
  }
};

export function getRetreatUI(locale: string): RetreatUIData {
  return RETREAT_DETAIL_UI[locale] || RETREAT_DETAIL_UI['en'];
}

export const ROOM_FEATURES_I18N: Record<string, Record<string, string>> = {
  "10:00 AM to 8:00 PM swimming pool access": {
    "en": "10:00 AM to 8:00 PM swimming pool access",
    "id": "Akses kolam renang pukul 10:00 hingga 20:00",
    "de": "Zugang zum Swimmingpool von 10:00 bis 20:00 Uhr",
    "fr": "Accès à la piscine de 10h00 à 20h00",
    "es": "Acceso a la piscina de 10:00 a 20:00",
    "it": "Accesso alla piscina dalle 10:00 alle 20:00",
    "nl": "Toegang tot het zwembad van 10:00 tot 20:00 uur",
    "ru": "Доступ к бассейну с 10:00 до 20:00",
    "ja": "10:00〜20:00 スイミングプール利用可能",
    "ko": "오전 10:00 ~ 오후 8:00 수영장 이용 가능",
    "zh": "上午10:00至晚上8:00开放泳池使用"
  },
  "Air Conditioning & ceiling fan in all rooms": {
    "en": "Air Conditioning & ceiling fan in all rooms",
    "id": "AC & kipas angin gantung di semua kamar",
    "de": "Klimaanlage & Deckenventilator in allen Zimmern",
    "fr": "Climatisation et ventilateur de plafond dans toutes les chambres",
    "es": "Aire acondicionado y ventilador de techo en todas las habitaciones",
    "it": "Aria condizionata e ventilatore a soffitto in tutte le camere",
    "nl": "Airconditioning & plafondventilator in alle kamers",
    "ru": "Кондиционер и потолочный вентилятор во всех номерах",
    "ja": "全室エアコン・シーリングファン完備",
    "ko": "모든 객실 에어컨 및 천장 선풍기 완비",
    "zh": "全房型配备独立空调与吊扇"
  },
  "Air Conditioning & ceiling fan in every room": {
    "en": "Air Conditioning & ceiling fan in every room",
    "id": "AC & kipas angin gantung di setiap kamar",
    "de": "Klimaanlage & Deckenventilator in jedem Zimmer",
    "fr": "Climatisation et ventilateur de plafond dans chaque chambre",
    "es": "Aire acondicionado y ventilador de techo en cada habitación",
    "it": "Aria condizionata e ventilatore a soffitto in ogni camera",
    "nl": "Airconditioning & plafondventilator in elke kamer",
    "ru": "Кондиционер и потолочный вентилятор в каждом номере",
    "ja": "全室エアコン・シーリングファン完備",
    "ko": "객실마다 에어컨 및 천장 선풍기 완비",
    "zh": "每间客房均配备空调与吊扇"
  },
  "Air conditioning and ceiling fan": {
    "en": "Air conditioning and ceiling fan",
    "id": "AC dan kipas angin gantung",
    "de": "Klimaanlage und Deckenventilator",
    "fr": "Climatisation et ventilateur de plafond",
    "es": "Aire acondicionado y ventilador de techo",
    "it": "Aria condizionata e ventilatore a soffitto",
    "nl": "Airconditioning en plafondventilator",
    "ru": "Кондиционер и потолочный вентилятор",
    "ja": "エアコンとシーリングファン",
    "ko": "에어컨 및 천장 선풍기",
    "zh": "空调与吊扇"
  },
  "Air conditioning and heating": {
    "en": "Air conditioning and heating",
    "id": "AC dan pemanas ruangan",
    "de": "Klimaanlage und Heizung",
    "fr": "Climatisation et chauffage",
    "es": "Aire acondicionado y calefacción",
    "it": "Aria condizionata e riscaldamento",
    "nl": "Airconditioning en verwarming",
    "ru": "Кондиционер и отопление",
    "ja": "冷暖房エアコン完備",
    "ko": "냉난방 시설 완비",
    "zh": "冷暖空调"
  },
  "Air conditioning and high-speed Wi-Fi": {
    "en": "Air conditioning and high-speed Wi-Fi",
    "id": "AC dan Wi-Fi berkecepatan tinggi",
    "de": "Klimaanlage und Highspeed-WLAN",
    "fr": "Climatisation et Wi-Fi haut débit",
    "es": "Aire acondicionado y wifi de alta velocidad",
    "it": "Aria condizionata e Wi-Fi ad alta velocità",
    "nl": "Airconditioning en snelle wifi",
    "ru": "Кондиционер и высокоскоростной Wi-Fi",
    "ja": "エアコン＆高速Wi-Fi",
    "ko": "에어컨 및 초고속 Wi-Fi",
    "zh": "空调与高速Wi-Fi"
  },
  "Attached modern bathroom with hot water": {
    "en": "Attached modern bathroom with hot water",
    "id": "Kamar mandi modern dalam kamar dengan air panas",
    "de": "Eigenes modernes Badezimmer mit Warmwasser",
    "fr": "Salle de bain moderne attenante avec eau chaude",
    "es": "Baño moderno privado con agua caliente",
    "it": "Bagno moderno privato con acqua calda",
    "nl": "Eigen moderne badkamer met warm water",
    "ru": "Собственная современная ванная комната с горячей водой",
    "ja": "専用モダンバスルーム（給湯完備）",
    "ko": "온수 시설이 완비된 현대식 전용 욕실",
    "zh": "独立现代化卫浴（配24小时热水）"
  },
  "Attached semi-open Balinese bathroom with hot rainfall shower": {
    "en": "Attached semi-open Balinese bathroom with hot rainfall shower",
    "id": "Kamar mandi semi-terbuka khas Bali dengan shower hujan air panas",
    "de": "Eigenes halboffenes balinesisches Badezimmer mit warmer Regendusche",
    "fr": "Salle de bain balinaise semi-ouverte avec douche à effet de pluie chaude",
    "es": "Baño balinés semiabierto privado con ducha de lluvia de agua caliente",
    "it": "Bagno balinese semi-aperto privato con doccia a pioggia calda",
    "nl": "Eigen halfopen Balinese badkamer met warme regendouche",
    "ru": "Собственная полуоткрытая балийская ванная с теплым тропическим душем",
    "ja": "バリ風半露天専用バスルーム（温水レインシャワー付）",
    "ko": "온수 레인샤워가 갖춰진 발리식 반야외 전용 욕실",
    "zh": "巴厘岛半露天独立卫浴（配热水雨淋花洒）"
  },
  "Attached western bathroom with hot water": {
    "en": "Attached western bathroom with hot water",
    "id": "Kamar mandi barat dalam kamar dengan air panas",
    "de": "Eigenes Badezimmer nach westlichem Standard mit Warmwasser",
    "fr": "Salle de bain privative de style occidental avec eau chaude",
    "es": "Baño privado de estilo occidental con agua caliente",
    "it": "Bagno privato in stile occidentale con acqua calda",
    "nl": "Eigen westerse badkamer met warm water",
    "ru": "Собственная ванная комната европейского стандарта с горячей водой",
    "ja": "洋式専用バスルーム（給湯完備）",
    "ko": "온수 시설이 갖춰진 서양식 전용 욕실",
    "zh": "独立西式卫浴（配24小时热水）"
  },
  "Balcony with Himalayan green views": {
    "en": "Balcony with Himalayan green views",
    "id": "Balkon dengan pemandangan hijau pegunungan Himalaya",
    "de": "Balkon mit Blick auf die grünen Ausläufer des Himalaya",
    "fr": "Balcon avec vue sur les collines verdoyantes de l'Himalaya",
    "es": "Balcón con vistas a la exuberante vegetación del Himalaya",
    "it": "Balcone con vista sul verde dell'Himalaya",
    "nl": "Balkon met uitzicht op het weelderige groen van de Himalaya",
    "ru": "Балкон с видом на зеленые склоны Гималаев",
    "ja": "ヒマラヤの緑を望むバルコニー",
    "ko": "히말라야 산자락의 푸른 전경이 펼쳐지는 발코니",
    "zh": "带阳台（俯瞰喜马拉雅翠绿山景）"
  },
  "Brand new boutique private room overlooking swimming pool": {
    "en": "Brand new boutique private room overlooking swimming pool",
    "id": "Kamar pribadi butik baru yang menghadap ke kolam renang",
    "de": "Brandneues Boutique-Privatzimmer mit Blick auf den Swimmingpool",
    "fr": "Chambre privée boutique flambant neuve avec vue sur la piscine",
    "es": "Habitación privada boutique a estrenar con vistas a la piscina",
    "it": "Nuovissima camera privata boutique con vista sulla piscina",
    "nl": "Gloednieuwe boetiek privékamer met uitzicht op het zwembad",
    "ru": "Абсолютно новый бутик-номер с видом на бассейн",
    "ja": "プールを望む真新しいブティックプライベートルーム",
    "ko": "수영장 전망의 신축 부티크 프라이빗 룸",
    "zh": "全新泳池景观精品独立客房"
  },
  "Complimentary High-Speed Wi-Fi": {
    "en": "Complimentary High-Speed Wi-Fi",
    "id": "Wi-Fi berkecepatan tinggi gratis",
    "de": "Kostenloses Highspeed-WLAN",
    "fr": "Wi-Fi haut débit gratuit",
    "es": "Wifi de alta velocidad de cortesía",
    "it": "Wi-Fi ad alta velocità gratuito",
    "nl": "Gratis snelle wifi",
    "ru": "Бесплатный высокоскоростной Wi-Fi",
    "ja": "無料高速Wi-Fi",
    "ko": "무료 초고속 Wi-Fi",
    "zh": "免费高速Wi-Fi"
  },
  "Complimentary High-Speed Wi-Fi anywhere in Campus": {
    "en": "Complimentary High-Speed Wi-Fi anywhere in Campus",
    "id": "Wi-Fi berkecepatan tinggi gratis di seluruh area kampus",
    "de": "Kostenloses Highspeed-WLAN auf dem gesamten Campus",
    "fr": "Wi-Fi haut débit gratuit dans tout le campus",
    "es": "Wifi de alta velocidad gratuito en todo el campus",
    "it": "Wi-Fi ad alta velocità gratuito in tutto il campus",
    "nl": "Gratis snelle wifi over de hele campus",
    "ru": "Бесплатный высокоскоростной Wi-Fi на всей территории кампуса",
    "ja": "キャンパス全域で利用可能な無料高速Wi-Fi",
    "ko": "캠퍼스 전 구역 무료 초고속 Wi-Fi",
    "zh": "全校区免费高速无线网络覆盖"
  },
  "Complimentary High-Speed Wi-Fi throughout the property": {
    "en": "Complimentary High-Speed Wi-Fi throughout the property",
    "id": "Wi-Fi berkecepatan tinggi gratis di seluruh properti",
    "de": "Kostenloses Highspeed-WLAN auf dem gesamten Anwesen",
    "fr": "Wi-Fi haut débit gratuit dans tout l'établissement",
    "es": "Wifi de alta velocidad gratuito en todo el recinto",
    "it": "Wi-Fi ad alta velocità gratuito in tutta la struttura",
    "nl": "Gratis snelle wifi op het hele terrein",
    "ru": "Бесплатный высокоскоростной Wi-Fi на всей территории",
    "ja": "施設内全域で利用可能な無料高速Wi-Fi",
    "ko": "리조트 전 구역 무료 초고속 Wi-Fi",
    "zh": "全区免费高速Wi-Fi覆盖"
  },
  "Daily housekeeping and fresh linens": {
    "en": "Daily housekeeping and fresh linens",
    "id": "Pembersihan kamar harian dan sprei bersih",
    "de": "Tägliche Zimmerreinigung und frische Bettwäsche",
    "fr": "Ménage quotidien et linge de lit propre",
    "es": "Limpieza diaria y sábanas limpias",
    "it": "Pulizia giornaliera e lenzuola fresche",
    "nl": "Dagelijkse schoonmaak en fris beddengoed",
    "ru": "Ежедневная уборка и свежее постельное белье",
    "ja": "毎日の客室清掃・リネン交換",
    "ko": "매일 룸 클리닝 및 깨끗한 린넨 제공",
    "zh": "每日客房清洁与床品更换"
  },
  "Daily housekeeping service": {
    "en": "Daily housekeeping service",
    "id": "Layanan tata graha harian",
    "de": "Täglicher Reinigungsservice",
    "fr": "Service de ménage quotidien",
    "es": "Servicio de limpieza diario",
    "it": "Servizio di pulizia giornaliero",
    "nl": "Dagelijkse schoonmaakservice",
    "ru": "Ежедневная уборка номеров",
    "ja": "毎日のハウスキーピングサービス",
    "ko": "매일 하우스키핑 서비스",
    "zh": "每日客房清洁服务"
  },
  "Daily housekeeping, fresh organic towels & linens": {
    "en": "Daily housekeeping, fresh organic towels & linens",
    "id": "Tata graha harian, handuk organik segar & sprei bersih",
    "de": "Tägliche Reinigung, frische Bio-Handtücher und Bettwäsche",
    "fr": "Ménage quotidien, serviettes et draps biologiques frais",
    "es": "Limpieza diaria, toallas y ropa de cama orgánicas frescas",
    "it": "Pulizia quotidiana, asciugamani in cotone organico e lenzuola fresche",
    "nl": "Dagelijkse schoonmaak, frisse biologische handdoeken en beddengoed",
    "ru": "Ежедневная уборка, свежие органические полотенца и белье",
    "ja": "毎日の清掃、オーガニックタオル＆リネン交換",
    "ko": "매일 청소, 친환경 오가닉 타월 및 침구 교체",
    "zh": "每日客房保洁、有机毛巾与洁净床品"
  },
  "Direct sparkling swimming pool views": {
    "en": "Direct sparkling swimming pool views",
    "id": "Pemandangan langsung ke kolam renang yang jernih",
    "de": "Direkter Blick auf den glitzernden Pool",
    "fr": "Vue directe sur la piscine étincelante",
    "es": "Vistas directas a la resplandeciente piscina",
    "it": "Vista diretta sulla splendida piscina",
    "nl": "Direct uitzicht op het glinsterende zwembad",
    "ru": "Прямой вид на сверкающий бассейн",
    "ja": "プールを望むダイレクトビュー",
    "ko": "수영장 직망 뷰",
    "zh": "直面波光粼粼的私享泳池景观"
  },
  "Direct steps to outdoor swimming pool and sun loungers": {
    "en": "Direct steps to outdoor swimming pool and sun loungers",
    "id": "Langkah langsung ke kolam renang luar ruangan dan kursi berjemur",
    "de": "Nur wenige Schritte zum Außenpool und den Sonnenliegen",
    "fr": "Accès direct à la piscine extérieure et aux chaises longues",
    "es": "Acceso directo a la piscina exterior y tumbonas",
    "it": "Accesso diretto alla piscina all'aperto e ai lettini prendisole",
    "nl": "Directe toegang tot het buitenzwembad en de ligstoelen",
    "ru": "Прямой выход к открытому бассейну и шезлонгам",
    "ja": "屋外プールやサンラウンジャーへ直接アクセス可能",
    "ko": "야외 수영장 및 선베드로 바로 연결",
    "zh": "数步直达户外泳池与日光躺椅"
  },
  "Direct tropical garden & pool access": {
    "en": "Direct tropical garden & pool access",
    "id": "Akses langsung ke taman tropis & kolam renang",
    "de": "Direkter Zugang zu den tropischen Gärten und dem Pool",
    "fr": "Accès direct au jardin tropical et à la piscine",
    "es": "Acceso directo al jardín tropical y la piscina",
    "it": "Accesso diretto al giardino tropicale e alla piscina",
    "nl": "Directe toegang tot de tropische tuin en het zwembad",
    "ru": "Прямой выход в тропический сад и к бассейну",
    "ja": "トロピカルガーデンとプールへのダイレクトアクセス",
    "ko": "열대 정원 및 수영장으로 바로 연결",
    "zh": "直通热带花园与泳池"
  },
  "Elevator & Wi-Fi access": {
    "en": "Elevator & Wi-Fi access",
    "id": "Akses lift & Wi-Fi",
    "de": "Aufzug & WLAN-Zugang",
    "fr": "Ascenseur et accès Wi-Fi",
    "es": "Ascensor y acceso a wifi",
    "it": "Ascensore e accesso Wi-Fi",
    "nl": "Lift & wifi-toegang",
    "ru": "Лифт и доступ к Wi-Fi",
    "ja": "エレベーター＆Wi-Fi完備",
    "ko": "엘리베이터 및 Wi-Fi 완비",
    "zh": "配电梯与Wi-Fi连接"
  },
  "Ensuite Balinese semi-open bathroom": {
    "en": "Ensuite Balinese semi-open bathroom",
    "id": "Kamar mandi semi-terbuka khas Bali di dalam kamar",
    "de": "Eigenes balinesisches halboffenes Badezimmer",
    "fr": "Salle de bain balinaise semi-ouverte attenante",
    "es": "Baño privado balinés semiabierto",
    "it": "Bagno privato balinese semi-aperto",
    "nl": "Eigen halfopen Balinese badkamer",
    "ru": "Собственная полуоткрытая ванная в балийском стиле",
    "ja": "バリ風半露天専用バスルーム",
    "ko": "발리식 반야외 전용 욕실",
    "zh": "套内巴厘岛半露天卫浴"
  },
  "Ensuite bathroom with hot & cold water": {
    "en": "Ensuite bathroom with hot & cold water",
    "id": "Kamar mandi dalam dengan air panas & dingin",
    "de": "Eigenes Badezimmer mit warmem und kaltem Wasser",
    "fr": "Salle de bain attenante avec eau chaude et froide",
    "es": "Baño privado con agua fría y caliente",
    "it": "Bagno privato con acqua calda e fredda",
    "nl": "Eigen badkamer met warm en koud water",
    "ru": "Собственная ванная комната с горячей и холодной водой",
    "ja": "専用バスルーム（温冷水完備）",
    "ko": "온수/냉수 완비 전용 욕실",
    "zh": "套内冷热水独立卫浴"
  },
  "Ensuite bathroom with modern fittings": {
    "en": "Ensuite bathroom with modern fittings",
    "id": "Kamar mandi dalam dengan perlengkapan modern",
    "de": "Eigenes Badezimmer mit moderner Ausstattung",
    "fr": "Salle de bain attenante avec équipements modernes",
    "es": "Baño privado con accesorios modernos",
    "it": "Bagno privato con sanitari moderni",
    "nl": "Eigen badkamer met moderne voorzieningen",
    "ru": "Собственная ванная комната с современной сантехникой",
    "ja": "モダンな設備を備えた専用バスルーム",
    "ko": "현대식 설비가 완비된 전용 욕실",
    "zh": "配备现代卫浴设施的独立卫生间"
  },
  "Ensuite semi-open Balinese bathroom with hot rainfall shower": {
    "en": "Ensuite semi-open Balinese bathroom with hot rainfall shower",
    "id": "Kamar mandi semi-terbuka khas Bali dengan shower hujan air panas",
    "de": "Eigenes halboffenes balinesisches Badezimmer mit warmer Regendusche",
    "fr": "Salle de bain balinaise semi-ouverte avec douche à effet pluie chaude",
    "es": "Baño balinés semiabierto en suite con ducha de lluvia de agua caliente",
    "it": "Bagno privato balinese semi-aperto con doccia a pioggia calda",
    "nl": "Eigen halfopen Balinese badkamer met warme regendouche",
    "ru": "Собственная полуоткрытая балийская ванная с теплым тропическим душем",
    "ja": "バリ風半露天専用バスルーム（温水レインシャワー付）",
    "ko": "온수 레인샤워가 갖춰진 발리식 반야외 전용 욕실",
    "zh": "套内巴厘岛半露天卫浴（配热水雨淋花洒）"
  },
  "Ensuite spacious bathroom with hot water shower": {
    "en": "Ensuite spacious bathroom with hot water shower",
    "id": "Kamar mandi dalam yang luas dengan shower air panas",
    "de": "Geräumiges eigenes Badezimmer mit Warmwasserdusche",
    "fr": "Spacieuse salle de bain attenante avec douche chaude",
    "es": "Amplio baño privado con ducha de agua caliente",
    "it": "Spazioso bagno privato con doccia calda",
    "nl": "Ruime eigen badkamer met warme douche",
    "ru": "Просторная собственная ванная комната с горячим душем",
    "ja": "広々とした専用バスルーム（温水シャワー完備）",
    "ko": "온수 샤워 시설이 완비된 넓은 전용 욕실",
    "zh": "宽敞套内卫浴（配热水淋浴）"
  },
  "Free high-speed fiber Wi-Fi": {
    "en": "Free high-speed fiber Wi-Fi",
    "id": "Wi-Fi fiber optik berkecepatan tinggi gratis",
    "de": "Kostenloses Highspeed-Glasfaser-WLAN",
    "fr": "Wi-Fi fibre optique haut débit gratuit",
    "es": "Wifi de fibra de alta velocidad gratuito",
    "it": "Wi-Fi in fibra ottica ad alta velocità gratuito",
    "nl": "Gratis snelle glasvezel-wifi",
    "ru": "Бесплатный высокоскоростной оптоволоконный Wi-Fi",
    "ja": "無料高速光ファイバーWi-Fi",
    "ko": "무료 초고속 광랜 Wi-Fi",
    "zh": "免费高速光纤Wi-Fi"
  },
  "High-Speed Wi-Fi across the entire sanctuary": {
    "en": "High-Speed Wi-Fi across the entire sanctuary",
    "id": "Wi-Fi berkecepatan tinggi di seluruh area suaka",
    "de": "Highspeed-WLAN im gesamten Refugium",
    "fr": "Wi-Fi haut débit dans l'ensemble du sanctuaire",
    "es": "Wifi de alta velocidad en todo el santuario",
    "it": "Wi-Fi ad alta velocità in tutto il santuario",
    "nl": "Snelle wifi over het hele terrein",
    "ru": "Высокоскоростной Wi-Fi на всей территории святилища",
    "ja": "施設全域で利用可能な高速Wi-Fi",
    "ko": "리조트 전 구역 초고속 Wi-Fi 완비",
    "zh": "静修圣地全覆盖高速Wi-Fi"
  },
  "Hot water shower 24 hours": {
    "en": "Hot water shower 24 hours",
    "id": "Shower air panas 24 jam",
    "de": "24 Stunden Warmwasserdusche",
    "fr": "Douche chaude 24h/24",
    "es": "Ducha de agua caliente 24 horas",
    "it": "Doccia calda 24 ore su 24",
    "nl": "24 uur per dag warm water",
    "ru": "Круглосуточный горячий душ",
    "ja": "24時間利用可能な温水シャワー",
    "ko": "24시간 온수 샤워 가능",
    "zh": "24小时热水淋浴"
  },
  "Ideal for two friends or solo travelers seeking shared value": {
    "en": "Ideal for two friends or solo travelers seeking shared value",
    "id": "Ideal untuk dua teman atau pelancong solo yang mencari efisiensi bersama",
    "de": "Ideal für zwei Freunde oder Alleinreisende, die Wert auf geteilte Kosten legen",
    "fr": "Idéal pour deux amis ou voyageurs solos recherchant une formule partagée",
    "es": "Ideal para dos amigos o viajeros solos que buscan compartir gastos",
    "it": "Ideale per due amici o viaggiatori singoli che desiderano condividere la stanza",
    "nl": "Ideaal voor twee vrienden of soloreizigers die kosten willen delen",
    "ru": "Идеально для двух друзей или соло-путешественников, желающих разделить номер",
    "ja": "ご友人同士や相部屋を希望される一人旅の方に最適",
    "ko": "친구 2명 또는 실속 있는 트윈룸을 원하는 나홀로 여행객에게 이상적",
    "zh": "适合好友同行或希望结伴分担费用的独自旅行者"
  },
  "King / Queen Bed with luxury mattress": {
    "en": "King / Queen Bed with luxury mattress",
    "id": "Tempat tidur King / Queen dengan kasur mewah",
    "de": "King- oder Queen-Size-Bett mit Luxusmatratze",
    "fr": "Lit King ou Queen-size avec matelas de luxe",
    "es": "Cama King o Queen con colchón de lujo",
    "it": "Letto King o Queen size con materasso di lusso",
    "nl": "King of Queen bed met luxueus matras",
    "ru": "Кровать King или Queen с роскошным матрасом",
    "ja": "高級マットレス付きキング／クイーンベッド",
    "ko": "고급 매트리스가 구비된 킹/퀸 사이즈 침대",
    "zh": "配奢华床垫的大床（特大床/大床）"
  },
  "King / Queen Bed with plush luxury mattress": {
    "en": "King / Queen Bed with plush luxury mattress",
    "id": "Tempat tidur King / Queen dengan kasur empuk mewah",
    "de": "King- oder Queen-Size-Bett mit besonders bequemer Luxusmatratze",
    "fr": "Lit King ou Queen avec matelas grand confort haut de gamme",
    "es": "Cama King o Queen con lujoso y mullido colchón",
    "it": "Letto King o Queen con morbido materasso di lusso",
    "nl": "King of Queen bed met zacht luxe matras",
    "ru": "Кровать King или Queen с мягким ортопедическим матрасом премиум-класса",
    "ja": "極上の寝心地を約束する高級マットレス付キング／クイーンベッド",
    "ko": "푹신한 프리미엄 매트리스가 갖춰진 킹/퀸 침대",
    "zh": "配备顶级舒适软垫的特大号/大号床"
  },
  "Large outdoor swimming pool open 10:00 AM to 8:00 PM": {
    "en": "Large outdoor swimming pool open 10:00 AM to 8:00 PM",
    "id": "Kolam renang luar ruangan besar buka pukul 10:00 hingga 20:00",
    "de": "Großer Außenpool, geöffnet von 10:00 bis 20:00 Uhr",
    "fr": "Grande piscine extérieure ouverte de 10h00 à 20h00",
    "es": "Gran piscina al aire libre abierta de 10:00 a 20:00",
    "it": "Grande piscina all'aperto aperta dalle 10:00 alle 20:00",
    "nl": "Groot buitenzwembad geopend van 10:00 tot 20:00 uur",
    "ru": "Большой открытый бассейн, открыт с 10:00 до 20:00",
    "ja": "大型屋外プール（10:00〜20:00オープン）",
    "ko": "오전 10:00 ~ 오후 8:00 운영 대형 야외 수영장",
    "zh": "大型户外泳池（开放时间：10:00 - 20:00）"
  },
  "Modern Balinese design with teakwood finishes": {
    "en": "Modern Balinese design with teakwood finishes",
    "id": "Desain Bali modern dengan sentuhan kayu jati",
    "de": "Modernes balinesisches Design mit Teakholz-Akzenten",
    "fr": "Design balinais contemporain avec finitions en bois de teck",
    "es": "Diseño balinés moderno con acabados en madera de teca",
    "it": "Design balinese moderno con finiture in legno di teak",
    "nl": "Modern Balinees design met teakhouten afwerking",
    "ru": "Современный балийский дизайн с отделкой из тикового дерева",
    "ja": "チーク材を使用したモダンなバリ風デザイン",
    "ko": "티크 원목 마감의 모던 발리식 인테리어",
    "zh": "融入现代巴厘岛风格与优质柚木饰面"
  },
  "Peaceful rooftop with panoramic Himalayan vistas": {
    "en": "Peaceful rooftop with panoramic Himalayan vistas",
    "id": "Rooftop yang tenang dengan pemandangan panorama Himalaya",
    "de": "Ruhige Dachterrasse mit Panoramablick auf den Himalaya",
    "fr": "Toit-terrasse paisible avec vue panoramique sur l'Himalaya",
    "es": "Tranquila azotea con vistas panorámicas al Himalaya",
    "it": "Tranquilla terrazza sul tetto con vista panoramica sull'Himalaya",
    "nl": "Rustig dakterras met panoramisch uitzicht op de Himalaya",
    "ru": "Умиротворяющая терраса на крыше с панорамным видом на Гималаи",
    "ja": "ヒマラヤのパノラマビューを望む静寂のルーフトップ",
    "ko": "히말라야 파노라마 전망을 자랑하는 평화로운 옥상 테라스",
    "zh": "享有喜马拉雅全景的宁静屋顶露台"
  },
  "Peaceful sanctuary location in Ubud": {
    "en": "Peaceful sanctuary location in Ubud",
    "id": "Lokasi suaka yang tenang di Ubud",
    "de": "Ruhiges Refugium in Ubud",
    "fr": "Emplacement paisible dans un sanctuaire à Ubud",
    "es": "Ubicación en un santuario tranquilo en Ubud",
    "it": "Posizione tranquilla nel santuario a Ubud",
    "nl": "Rustige toevluchtsoordlocatie in Ubud",
    "ru": "Тихий уединенный оазис в Убуде",
    "ja": "ウブドの静穏なサンクチュアリロケーション",
    "ko": "우붓의 평화로운 생태 힐링 리조트",
    "zh": "坐落于乌布宁静清幽的自然养生胜地"
  },
  "Perfect for friends or solo travelers seeking companion value": {
    "en": "Perfect for friends or solo travelers seeking companion value",
    "id": "Sempurna untuk teman atau pelancong solo yang mencari rekan berbagi",
    "de": "Perfekt für Freunde oder Alleinreisende, die Gesellschaft und ein gutes Preis-Leistungs-Verhältnis suchen",
    "fr": "Parfait pour des amis ou voyageurs solos souhaitant partager une chambre",
    "es": "Perfecto para amigos o viajeros solos que buscan compartir habitación y optimizar costes",
    "it": "Perfetto per amici o viaggiatori singoli che desiderano condividere la camera",
    "nl": "Perfect voor vrienden of soloreizigers die een kamer willen delen",
    "ru": "Идеально для друзей или путешественников-одиночек, ищущих соседа по номеру",
    "ja": "ご友人同士や、同室シェアを希望される一人旅の方に最適",
    "ko": "친구 또는 룸메이트를 원하는 솔로 여행자에게 안성맞춤",
    "zh": "适宜好友同住或寻求分摊住宿费用的独自研习者"
  },
  "Premium bathroom with rainfall hot shower": {
    "en": "Premium bathroom with rainfall hot shower",
    "id": "Kamar mandi premium dengan shower air panas hujan",
    "de": "Premium-Badezimmer mit warmer Regendusche",
    "fr": "Salle de bain haut de gamme avec douche à effet pluie chaude",
    "es": "Baño premium con ducha de lluvia de agua caliente",
    "it": "Bagno premium con doccia a pioggia calda",
    "nl": "Luxe badkamer met warme regendouche",
    "ru": "Премиальная ванная комната с горячим тропическим душем",
    "ja": "温水レインシャワー付きプレミアムバスルーム",
    "ko": "온수 레인샤워가 구비된 프리미엄 욕실",
    "zh": "配备热水雨淋花洒的高端卫浴"
  },
  "Private balcony overlooking lush tropical foliage": {
    "en": "Private balcony overlooking lush tropical foliage",
    "id": "Balkon pribadi dengan pemandangan dedaunan tropis yang rimbun",
    "de": "Privater Balkon mit Blick auf üppige tropische Vegetation",
    "fr": "Balcon privé avec vue sur la végétation tropicale luxuriante",
    "es": "Balcón privado con vistas a la exuberante vegetación tropical",
    "it": "Balcone privato con vista sulla lussureggiante vegetazione tropicale",
    "nl": "Privébalkon met uitzicht op weelderige tropische natuur",
    "ru": "Собственный балкон с видом на пышную тропическую зелень",
    "ja": "青々としたトロピカルガーデンを望む専用バルコニー",
    "ko": "울창한 열대 숲 전망의 프라이빗 발코니",
    "zh": "俯瞰郁郁葱葱热带绿植的独立私享阳台"
  },
  "Private balcony overlooking tropical palm gardens": {
    "en": "Private balcony overlooking tropical palm gardens",
    "id": "Balkon pribadi dengan pemandangan taman kelapa tropis",
    "de": "Privater Balkon mit Blick auf tropische Palmengärten",
    "fr": "Balcon privé donnant sur des jardins de palmiers tropicaux",
    "es": "Balcón privado con vistas a jardines de palmeras tropicales",
    "it": "Balcone privato con vista sui giardini di palme tropicali",
    "nl": "Privébalkon met uitzicht op tropische palmentuinen",
    "ru": "Собственный балкон с видом на тропические пальмовые сады",
    "ja": "パームツリーガーデンを一望する専用バルコニー",
    "ko": "열대 야자수 정원 전망의 프라이빗 발코니",
    "zh": "俯瞰热带棕榈花园的私人阳台"
  },
  "Private balcony with Himalayan valley views": {
    "en": "Private balcony with Himalayan valley views",
    "id": "Balkon pribadi dengan pemandangan lembah Himalaya",
    "de": "Privater Balkon mit Blick auf das Himalaya-Tal",
    "fr": "Balcon privé avec vue sur la vallée de l'Himalaya",
    "es": "Balcón privado con vistas al valle del Himalaya",
    "it": "Balcone privato con vista sulla valle dell'Himalaya",
    "nl": "Privébalkon met uitzicht op de vallei van de Himalaya",
    "ru": "Собственный балкон с видом на долину Гималаев",
    "ja": "ヒマラヤ渓谷の絶景を望む専用バルコニー",
    "ko": "히말라야 계곡 절경이 펼쳐지는 전용 발코니",
    "zh": "眺望喜马拉雅山谷的独立私享阳台"
  },
  "Private balcony with mountain views": {
    "en": "Private balcony with mountain views",
    "id": "Balkon pribadi dengan pemandangan pegunungan",
    "de": "Privater Balkon mit Bergblick",
    "fr": "Balcon privé avec vue sur les montagnes",
    "es": "Balcón privado con vistas a la montaña",
    "it": "Balcone privato con vista sulle montagne",
    "nl": "Privébalkon met uitzicht op de bergen",
    "ru": "Собственный балкон с видом на горы",
    "ja": "山並みを望む専用バルコニー",
    "ko": "마운틴 뷰 전용 발코니",
    "zh": "山景私享阳台"
  },
  "Private sit-out overlooking tropical gardens": {
    "en": "Private sit-out overlooking tropical gardens",
    "id": "Area duduk pribadi yang menghadap ke taman tropis",
    "de": "Eigener Sitzbereich mit Blick auf die tropischen Gärten",
    "fr": "Espace détente privé donnant sur les jardins tropicaux",
    "es": "Zona de descanso privada con vistas a los jardines tropicales",
    "it": "Spazio relax privato con vista sui giardini tropicali",
    "nl": "Eigen zitje met uitzicht op tropische tuinen",
    "ru": "Собственная зона отдыха с видом на тропический сад",
    "ja": "トロピカルガーデンを眺めるプライベートシッティングエリア",
    "ko": "열대 정원을 마주하는 프라이빗 테라스 휴식 공간",
    "zh": "面朝热带花园的私密休憩座区"
  },
  "Private sit-out with garden or pool view": {
    "en": "Private sit-out with garden or pool view",
    "id": "Area duduk pribadi dengan pemandangan taman atau kolam renang",
    "de": "Eigener Sitzbereich mit Garten- oder Poolblick",
    "fr": "Espace détente privé avec vue sur le jardin ou la piscine",
    "es": "Zona de descanso privada con vistas al jardín o a la piscina",
    "it": "Spazio relax privato con vista giardino o piscina",
    "nl": "Eigen zitje met uitzicht op de tuin of het zwembad",
    "ru": "Собственная зона отдыха с видом на сад или бассейн",
    "ja": "庭園またはプールを望む専用シッティングスペース",
    "ko": "가든 또는 수영장 전망의 프라이빗 테라스 공간",
    "zh": "配花园或泳池景观的私享露台座区"
  },
  "Private veranda with garden or sea view": {
    "en": "Private veranda with garden or sea view",
    "id": "Beranda pribadi dengan pemandangan taman atau laut",
    "de": "Private Veranda mit Garten- oder Meerblick",
    "fr": "Véranda privée avec vue sur le jardin ou la mer",
    "es": "Veranda privada con vistas al jardín o al mar",
    "it": "Veranda privata con vista giardino o mare",
    "nl": "Privéveranda met uitzicht op de tuin of de zee",
    "ru": "Собственная веранда с видом на сад или море",
    "ja": "ガーデンまたはオーシャンビューの専用ベランダ",
    "ko": "정원 또는 바다 전망의 전용 베란다",
    "zh": "享有花园或海景的私密阳台"
  },
  "Quiet yoga deck with ocean breeze": {
    "en": "Quiet yoga deck with ocean breeze",
    "id": "Dek yoga yang tenang dengan hembusan angin laut",
    "de": "Ruhiges Yogadeck mit sanfter Meeresbrise",
    "fr": "Plateforme de yoga paisible bercée par la brise marine",
    "es": "Tranquila terraza de yoga con brisa marina",
    "it": "Tranquilla piattaforma yoga con brezza oceanica",
    "nl": "Rustig yogadek met een zeebries",
    "ru": "Тихая йога-терраса со свежим океанским бризом",
    "ja": "潮風が心地よい静寂のヨガデッキ",
    "ko": "바닷바람이 스치는 고요한 요가 데크",
    "zh": "海风微拂的宁静户外瑜伽平台"
  },
  "Rooftop yoga shala overlooking mountains": {
    "en": "Rooftop yoga shala overlooking mountains",
    "id": "Shala yoga di atap dengan pemandangan pegunungan",
    "de": "Dach-Yogashala mit Blick auf die Berge",
    "fr": "Shala de yoga sur le toit avec vue sur les montagnes",
    "es": "Shala de yoga en la azotea con vistas a las montañas",
    "it": "Shala yoga panoramica sul tetto con vista sulle montagne",
    "nl": "Yogashala op het dak met uitzicht op de bergen",
    "ru": "Йога-шала на крыше с видом на горы",
    "ja": "山並みを見渡す屋上ヨガシャラ",
    "ko": "산 전망이 펼쳐지는 루프탑 요가 샬라",
    "zh": "俯瞰壮丽山峦的屋顶瑜伽馆"
  },
  "Rooftop yoga shala overlooking the mountains": {
    "en": "Rooftop yoga shala overlooking the mountains",
    "id": "Shala yoga di atap dengan pemandangan pegunungan",
    "de": "Dach-Yogashala mit Blick auf die Berge",
    "fr": "Shala de yoga sur le toit surplombant les montagnes",
    "es": "Shala de yoga en la azotea con vistas a las montañas",
    "it": "Shala yoga sul tetto con vista spettacolare sulle montagne",
    "nl": "Yogashala op het dak met uitzicht op de bergen",
    "ru": "Йога-шала на крыше с видом на горы",
    "ja": "山々を一望する屋上ヨガシャラ",
    "ko": "장엄한 산세를 마주하는 루프탑 요가 샬라",
    "zh": "环抱群山景致的屋顶瑜伽静修厅"
  },
  "Safety locker, wardrobe & luggage storage": {
    "en": "Safety locker, wardrobe & luggage storage",
    "id": "Brankas keamanan, lemari pakaian & penyimpanan bagasi",
    "de": "Zimmersafe, Kleiderschrank und Gepäckaufbewahrung",
    "fr": "Coffre-fort, armoire et espace pour bagages",
    "es": "Caja fuerte, armario y espacio para equipaje",
    "it": "Cassaforte, armadio e deposito bagagli",
    "nl": "Kluisje, kledingkast en bagageopslag",
    "ru": "Сейф, шкаф для одежды и место для багажа",
    "ja": "セーフティボックス・クローゼット・荷物収納完備",
    "ko": "안전 금고, 옷장 및 수하물 보관 공간",
    "zh": "配保险箱、大容量衣柜及行李寄存空间"
  },
  "Shared with one retreat companion (same gender)": {
    "en": "Shared with one retreat companion (same gender)",
    "id": "Berbagi dengan satu rekan retret (sesama jenis)",
    "de": "Geteilt mit einem weiteren Teilnehmer (gleiches Geschlecht)",
    "fr": "Chambre partagée avec un(e) autre participant(e) (même genre)",
    "es": "Compartida con un compañero de retiro (mismo género)",
    "it": "Condivisa con un compagno di ritiro (stesso genere)",
    "nl": "Gedeeld met één mededeelnemer (hetzelfde geslacht)",
    "ru": "Совместное проживание с другим участником (одного пола)",
    "ja": "同性の参加者1名との相部屋",
    "ko": "동성 참가자 1인과 룸 셰어",
    "zh": "与另一位同性静修同修共享双人房"
  },
  "Short walk to beach and cliff cafes": {
    "en": "Short walk to beach and cliff cafes",
    "id": "Cukup berjalan kaki singkat ke pantai dan kafe tebing",
    "de": "Nur ein kurzer Spaziergang zum Strand und den Klippen-Cafés",
    "fr": "À quelques pas de la plage et des cafés de la falaise",
    "es": "A pocos pasos de la playa y las cafeterías del acantilado",
    "it": "A pochi passi dalla spiaggia e dai caffè sulla scogliera",
    "nl": "Op korte loopafstand van het strand en klifcafés",
    "ru": "Короткая прогулка до пляжа и прибрежных кафе на утесе",
    "ja": "ビーチや崖の上のカフェまで徒歩圏内",
    "ko": "해변 및 절벽 카페까지 도보로 이동 가능",
    "zh": "漫步数分钟即可抵海滩与悬崖景观咖啡馆"
  },
  "Silent Air Conditioning & ceiling fan": {
    "en": "Silent Air Conditioning & ceiling fan",
    "id": "AC hening & kipas angin gantung",
    "de": "Flüsterleise Klimaanlage und Deckenventilator",
    "fr": "Climatisation silencieuse et ventilateur de plafond",
    "es": "Aire acondicionado silencioso y ventilador de techo",
    "it": "Aria condizionata silenziosa e ventilatore a soffitto",
    "nl": "Stille airconditioning & plafondventilator",
    "ru": "Бесшумный кондиционер и потолочный вентилятор",
    "ja": "静音エアコン＆シーリングファン",
    "ko": "저소음 에어컨 및 천장 선풍기",
    "zh": "静音空调与静音吊扇"
  },
  "Silent Air Conditioning & ensuite bathroom": {
    "en": "Silent Air Conditioning & ensuite bathroom",
    "id": "AC hening & kamar mandi dalam",
    "de": "Flüsterleise Klimaanlage und eigenes Badezimmer",
    "fr": "Climatisation silencieuse et salle de bain attenante",
    "es": "Aire acondicionado silencioso y baño privado",
    "it": "Aria condizionata silenziosa e bagno privato",
    "nl": "Stille airconditioning & eigen badkamer",
    "ru": "Бесшумный кондиционер и собственная ванная комната",
    "ja": "静音エアコン＆専用バスルーム",
    "ko": "저소음 에어컨 및 전용 욕실",
    "zh": "静音空调及套内独立卫浴"
  },
  "Silent Air Conditioning & luxury ensuite bath": {
    "en": "Silent Air Conditioning & luxury ensuite bath",
    "id": "AC hening & kamar mandi mewah dalam kamar",
    "de": "Flüsterleise Klimaanlage und luxuriöses eigenes Badezimmer",
    "fr": "Climatisation silencieuse et luxueuse salle de bain attenante",
    "es": "Aire acondicionado silencioso y lujoso baño privado",
    "it": "Aria condizionata silenziosa e lussuoso bagno privato",
    "nl": "Stille airconditioning & luxe eigen badkamer",
    "ru": "Бесшумный кондиционер и роскошная собственная ванная комната",
    "ja": "静音エアコン＆高級専用バスルーム",
    "ko": "저소음 에어컨 및 럭셔리 전용 욕실",
    "zh": "静音空调与高端套内独立卫浴"
  },
  "Silent Air Conditioning & tropical garden view": {
    "en": "Silent Air Conditioning & tropical garden view",
    "id": "AC hening & pemandangan taman tropis",
    "de": "Flüsterleise Klimaanlage und tropischer Gartenblick",
    "fr": "Climatisation silencieuse et vue sur le jardin tropical",
    "es": "Aire acondicionado silencioso y vistas al jardín tropical",
    "it": "Aria condizionata silenziosa e vista sul giardino tropicale",
    "nl": "Stille airconditioning & uitzicht op tropische tuin",
    "ru": "Бесшумный кондиционер и вид на тропический сад",
    "ja": "静音エアコン＆トロピカルガーデンビュー",
    "ko": "저소음 에어컨 및 열대 정원 전망",
    "zh": "静音空调与热带花园景致"
  },
  "Spacious modern private room": {
    "en": "Spacious modern private room",
    "id": "Kamar pribadi modern yang luas",
    "de": "Geräumiges, modernes Privatzimmer",
    "fr": "Chambre privée spacieuse et moderne",
    "es": "Amplia y moderna habitación privada",
    "it": "Spaziosa e moderna camera privata",
    "nl": "Ruime moderne privékamer",
    "ru": "Просторный современный отдельный номер",
    "ja": "広々としたモダンなプライベートルーム",
    "ko": "넓고 모던한 프라이빗 룸",
    "zh": "宽敞现代风独立单间"
  },
  "Swimming pool & shaded hammocks": {
    "en": "Swimming pool & shaded hammocks",
    "id": "Kolam renang & tempat tidur gantung teduh",
    "de": "Swimmingpool und schattige Hängematten",
    "fr": "Piscine et hamacs ombragés",
    "es": "Piscina y hamacas a la sombra",
    "it": "Piscina e amache all'ombra",
    "nl": "Zwembad en schaduwrijke hangmatten",
    "ru": "Бассейн и гамаки в тени",
    "ja": "スイミングプール＆木陰のハンモック",
    "ko": "수영장 및 그늘진 해먹",
    "zh": "户外泳池与绿荫吊床区"
  },
  "Swimming pool and open-air wooden yoga deck": {
    "en": "Swimming pool and open-air wooden yoga deck",
    "id": "Kolam renang dan dek yoga kayu terbuka",
    "de": "Swimmingpool und offenes Holz-Yogadeck",
    "fr": "Piscine et plateforme de yoga en bois en plein air",
    "es": "Piscina y plataforma de yoga de madera al aire libre",
    "it": "Piscina e terrazza yoga in legno all'aperto",
    "nl": "Zwembad en open houten yogadek",
    "ru": "Бассейн и деревянная йога-терраса на открытом воздухе",
    "ja": "スイミングプールと開放的な木製ヨガデッキ",
    "ko": "수영장 및 야외 목재 요가 데크",
    "zh": "景观泳池与露天木制瑜伽平台"
  },
  "Swimming pool with sun loungers": {
    "en": "Swimming pool with sun loungers",
    "id": "Kolam renang dengan kursi berjemur",
    "de": "Swimmingpool mit Sonnenliegen",
    "fr": "Piscine avec chaises longues",
    "es": "Piscina con tumbonas",
    "it": "Piscina con lettini prendisole",
    "nl": "Zwembad met ligstoelen",
    "ru": "Бассейн с шезлонгами для отдыха",
    "ja": "サンラウンジャー付きスイミングプール",
    "ko": "선베드가 마련된 수영장",
    "zh": "配日光躺椅的户外泳池"
  },
  "Traditional open-air bamboo yoga shala surrounded by nature": {
    "en": "Traditional open-air bamboo yoga shala surrounded by nature",
    "id": "Shala yoga bambu tradisional terbuka yang dikelilingi alam",
    "de": "Traditionelle, offene Bambus-Yogashala mitten in der Natur",
    "fr": "Shala de yoga traditionnelle en bambou à ciel ouvert en pleine nature",
    "es": "Shala de yoga tradicional de bambú al aire libre rodeada de naturaleza",
    "it": "Tradizionale shala yoga in bambù all'aperto immersa nella natura",
    "nl": "Traditionele open bamboe yogashala omringd door de natuur",
    "ru": "Традиционная бамбуковая йога-шала на открытом воздухе в окружении природы",
    "ja": "自然に囲まれた伝統的な竹造りのオープンエア・ヨガシャラ",
    "ko": "자연에 둘러싸인 전통 오픈형 대나무 요가 샬라",
    "zh": "被大自然环抱的传统露天竹造瑜伽馆"
  },
  "Two comfortable single beds for two students (same gender)": {
    "en": "Two comfortable single beds for two students (same gender)",
    "id": "Dua tempat tidur single yang nyaman untuk dua siswa (sesama jenis)",
    "de": "Zwei bequeme Einzelbetten für zwei Teilnehmer (gleiches Geschlecht)",
    "fr": "Deux lits simples confortables pour deux étudiants (même genre)",
    "es": "Dos cómodas camas individuales para dos estudiantes (del mismo género)",
    "it": "Due comodi letti singoli per due studenti (dello stesso genere)",
    "nl": "Twee comfortabele eenpersoonsbedden voor twee studenten (hetzelfde geslacht)",
    "ru": "Две удобные односпальные кровати для двоих участников (одного пола)",
    "ja": "同性2名用の快適なシングルベッド2台",
    "ko": "동성 2인을 위한 편안한 싱글 침대 2개",
    "zh": "为两位同性学员配备的两张舒适单人床"
  },
  "Two separate comfortable single beds": {
    "en": "Two separate comfortable single beds",
    "id": "Dua tempat tidur single terpisah yang nyaman",
    "de": "Zwei getrennte, bequeme Einzelbetten",
    "fr": "Deux lits simples séparés et très confortables",
    "es": "Dos camas individuales confortables y separadas",
    "it": "Due comodi letti singoli separati",
    "nl": "Twee aparte comfortabele eenpersoonsbedden",
    "ru": "Две отдельные удобные односпальные кровати",
    "ja": "独立した快適なシングルベッド2台",
    "ko": "독립된 편안한 싱글 침대 2개",
    "zh": "两张独立的舒适单人床"
  },
  "Work desk, safe box & wardrobe": {
    "en": "Work desk, safe box & wardrobe",
    "id": "Meja kerja, brankas & lemari pakaian",
    "de": "Schreibtisch, Safe und Kleiderschrank",
    "fr": "Bureau de travail, coffre-fort et armoire",
    "es": "Escritorio de trabajo, caja fuerte y armario",
    "it": "Scrivania, cassaforte e guardaroba",
    "nl": "Werkbureau, kluis en kledingkast",
    "ru": "Рабочий стол, сейф и шкаф для одежды",
    "ja": "ワークデスク・金庫・クローゼット完備",
    "ko": "업무용 데스크, 안전 금고 및 옷장",
    "zh": "工作书桌、保险箱与衣柜"
  },
  "Writing desk, reading lounge & private terrace": {
    "en": "Writing desk, reading lounge & private terrace",
    "id": "Meja tulis, ruang baca santai & teras pribadi",
    "de": "Schreibtisch, Leseecke und private Terrasse",
    "fr": "Bureau, coin lecture et terrasse privée",
    "es": "Escritorio, rincón de lectura y terraza privada",
    "it": "Scrivania, angolo lettura e terrazza privata",
    "nl": "Schrijfbureau, leeshoek en privéterras",
    "ru": "Письменный стол, зона для чтения и собственная терраса",
    "ja": "ライティングデスク・読書ラウンジ・専用テラス",
    "ko": "서재 데스크, 독서 라운지 및 프라이빗 테라스",
    "zh": "书桌、阅读休闲角与独立私人露台"
  }
};

export function getLocalizedRoomFeature(feature: string, locale: string): string {
  const map = ROOM_FEATURES_I18N[feature];
  if (!map) return feature;
  return map[locale] || map['en'] || feature;
}

export const ROOM_TYPES_I18N: Record<string, Record<string, string>> = {
  "Private Room in Campus-I": {
    "en": "Private Room in Campus-I",
    "id": "Kamar Pribadi di Kampus-I",
    "de": "Privatzimmer auf Campus-I",
    "fr": "Chambre privée sur le Campus-I",
    "es": "Habitación privada en el Campus-I",
    "it": "Camera privata nel Campus-I",
    "nl": "Privékamer op Campus-I",
    "ru": "Отдельный номер в Кампусе-I",
    "ja": "キャンパスI プライベートルーム",
    "ko": "캠퍼스-I 프라이빗 룸",
    "zh": "一校区独立单人间"
  },
  "Private Room in Campus-II": {
    "en": "Private Room in Campus-II",
    "id": "Kamar Pribadi di Kampus-II",
    "de": "Privatzimmer auf Campus-II",
    "fr": "Chambre privée sur le Campus-II",
    "es": "Habitación privada en el Campus-II",
    "it": "Camera privata nel Campus-II",
    "nl": "Privékamer op Campus-II",
    "ru": "Отдельный номер в Кампусе-II",
    "ja": "キャンパスII プライベートルーム",
    "ko": "캠퍼스-II 프라이빗 룸",
    "zh": "二校区独立单人间"
  },
  "Twin Shared Room in Campus-I": {
    "en": "Twin Shared Room in Campus-I",
    "id": "Kamar Bersama Twin di Kampus-I",
    "de": "Zweibett-Gemeinschaftszimmer auf Campus-I",
    "fr": "Chambre partagée lits jumeaux sur le Campus-I",
    "es": "Habitación compartida con dos camas en el Campus-I",
    "it": "Camera doppia condivisa nel Campus-I",
    "nl": "Gedeelde tweepersoonskamer op Campus-I",
    "ru": "Двухместный номер на двоих в Кампусе-I",
    "ja": "キャンパスI ツイン相部屋",
    "ko": "캠퍼스-I 트윈 셰어룸",
    "zh": "一校区双人共享间"
  }
};

export function getLocalizedRoomType(roomType: string, locale: string): string {
  const map = ROOM_TYPES_I18N[roomType];
  if (!map) return roomType;
  return map[locale] || map['en'] || roomType;
}

export const SCHEDULE_ACTIVITIES_I18N: Record<string, Record<string, string>> = {
  "Abundant Tropical Breakfast": {
    "en": "Abundant Tropical Breakfast",
    "id": "Sarapan Tropis Berlimpah",
    "de": "Reichhaltiges tropisches Frühstück",
    "fr": "Petit-déjeuner tropical copieux",
    "es": "Abundante desayuno tropical",
    "it": "Abbondante colazione tropicale",
    "nl": "Rijkelijk tropisch ontbijt",
    "ru": "Обильный тропический завтрак",
    "ja": "贅沢なトロピカルブレックファスト",
    "ko": "풍성한 열대식 조식",
    "zh": "丰盛热带风味早餐"
  },
  "Advanced Pranayama Breathwork & Silent Meditation": {
    "en": "Advanced Pranayama Breathwork & Silent Meditation",
    "id": "Latihan Pernapasan Pranayama Lanjutan & Meditasi Hening",
    "de": "Fortgeschrittene Pranayama-Atemarbeit & Stille Meditation",
    "fr": "Pranayama avancé (travail du souffle) et méditation silencieuse",
    "es": "Pranayama avanzado y meditación silenciosa",
    "it": "Pranayama avanzato e meditazione silenziosa",
    "nl": "Gevorderde Pranayama ademhalingsoefeningen & stille meditatie",
    "ru": "Продвинутая дыхательная практика пранаямы и безмолвная медитация",
    "ja": "上級プラーナヤーマ呼吸法＆サイレント瞑想",
    "ko": "심화 프라나야마 호흡 수련 및 묵언 명상",
    "zh": "高阶调息呼吸法与静默冥想"
  },
  "Alternating Sound Baths, Reiki & Philosophy Workshops": {
    "en": "Alternating Sound Baths, Reiki & Philosophy Workshops",
    "id": "Lokakarya Bergantian: Mandi Suara (Sound Bath), Reiki & Filosofi",
    "de": "Abwechselnde Klangbäder, Reiki & Philosophie-Workshops",
    "fr": "Bains sonores, Reiki et ateliers de philosophie en alternance",
    "es": "Baños de sonido, Reiki y talleres de filosofía rotativos",
    "it": "Bagni sonori, Reiki e workshop di filosofia alternati",
    "nl": "Afwisselende klankschalenbaden, Reiki & filosofieworkshops",
    "ru": "Чередующиеся звуковые ванны, сеансы рейки и философские семинары",
    "ja": "サウンドバス（音浴）、レイキ、哲学ワークショップ（日替わり）",
    "ko": "사운드배스, 레이키 치유 및 철학 워크숍 (교차 진행)",
    "zh": "颂钵音疗、灵气疗愈与瑜伽哲学研习坊（交替进行）"
  },
  "Ayurveda & Lifestyle Workshop": {
    "en": "Ayurveda & Lifestyle Workshop",
    "id": "Lokakarya Ayurveda & Gaya Hidup Sehat",
    "de": "Ayurveda- & Lifestyle-Workshop",
    "fr": "Atelier Ayurveda et mode de vie sain",
    "es": "Taller de Ayurveda y estilo de vida",
    "it": "Workshop su Ayurveda e stile di vita",
    "nl": "Ayurveda & levensstijl workshop",
    "ru": "Семинар по аюрведе и образу жизни",
    "ja": "アーユルヴェーダ＆ライフスタイル・ワークショップ",
    "ko": "아유르베다 및 라이프스타일 워크숍",
    "zh": "阿育吠陀养生与健康生活方式工作坊"
  },
  "Ayurvedic Abhyanga Therapy": {
    "en": "Ayurvedic Abhyanga Therapy",
    "id": "Terapi Abhyanga Tradisional Ayurveda",
    "de": "Ayurvedische Abhyanga-Therapie",
    "fr": "Thérapie ayurvédique Abhyanga",
    "es": "Terapia ayurvédica Abhyanga",
    "it": "Terapia ayurvedica Abhyanga",
    "nl": "Ayurvedische Abhyanga-therapie",
    "ru": "Аюрведическая терапия абхьянга",
    "ja": "伝統アーユルヴェーダ・アビヤンガセラピー",
    "ko": "전통 아유르베다 아비양가 오일 마사지 테라피",
    "zh": "传统阿育吠陀阿育草本精油推拿（Abhyanga）"
  },
  "Ayurvedic Breakfast": {
    "en": "Ayurvedic Breakfast",
    "id": "Sarapan Bergizi Khas Ayurveda",
    "de": "Ayurvedisches Frühstück",
    "fr": "Petit-déjeuner ayurvédique",
    "es": "Desayuno ayurvédico",
    "it": "Colazione ayurvedica",
    "nl": "Ayurvedisch ontbijt",
    "ru": "Аюрведический завтрак",
    "ja": "アーユルヴェーダ式ブレックファスト",
    "ko": "아유르베다 치유 조식",
    "zh": "阿育吠陀养生早餐"
  },
  "Ayurvedic Doctor Consultation / Workshop": {
    "en": "Ayurvedic Doctor Consultation / Workshop",
    "id": "Konsultasi Dokter Ayurveda / Lokakarya",
    "de": "Konsultation beim Ayurveda-Arzt / Workshop",
    "fr": "Consultation avec un médecin ayurvédique / Atelier",
    "es": "Consulta con médico ayurvédico / Taller",
    "it": "Consulto con medico ayurvedico / Workshop",
    "nl": "Consult met Ayurvedische arts / Workshop",
    "ru": "Консультация с врачом аюрведы / Семинар",
    "ja": "アーユルヴェーダ医師による個別問診・ワークショップ",
    "ko": "아유르베다 전문의 상담 및 진맥 / 워크숍",
    "zh": "阿育吠陀医师脉诊咨询与研讨会"
  },
  "Ayurvedic Rejuvenation Massage": {
    "en": "Ayurvedic Rejuvenation Massage",
    "id": "Pijat Peremajaan Khas Ayurveda",
    "de": "Ayurvedische Verjüngungsmassage",
    "fr": "Massage de rajeunissement ayurvédique",
    "es": "Masaje ayurvédico de rejuvenecimiento",
    "it": "Massaggio ayurvedico rigenerante",
    "nl": "Ayurvedische verjongingsmassage",
    "ru": "Аюрведический омолаживающий массаж",
    "ja": "アーユルヴェーダ・リジュベネーション（若返り）マッサージ",
    "ko": "아유르베다 활력 회춘 마사지",
    "zh": "阿育吠陀草本回春焕活按摩"
  },
  "Ayurvedic Therapy / Rest": {
    "en": "Ayurvedic Therapy / Rest",
    "id": "Terapi Ayurveda / Istirahat",
    "de": "Ayurveda-Therapie / Erholung",
    "fr": "Thérapie ayurvédique / Repos",
    "es": "Terapia ayurvédica / Descanso",
    "it": "Terapia ayurvedica / Riposo",
    "nl": "Ayurvedische therapie / Rust",
    "ru": "Аюрведическая процедура / Отдых",
    "ja": "アーユルヴェーダ施術／休養",
    "ko": "아유르베다 테라피 / 휴식",
    "zh": "阿育吠陀调理疗程 / 休息放松"
  },
  "Ayurvedic Treatment / Therapy": {
    "en": "Ayurvedic Treatment / Therapy",
    "id": "Perawatan Ayurveda / Terapi",
    "de": "Ayurvedische Behandlung / Therapie",
    "fr": "Soin ayurvédique / Thérapie",
    "es": "Tratamiento / terapia ayurvédica",
    "it": "Trattamento / terapia ayurvedica",
    "nl": "Ayurvedische behandeling / therapie",
    "ru": "Аюрведическая процедура / Терапия",
    "ja": "アーユルヴェーダ トリートメント／セラピー",
    "ko": "아유르베다 트리트먼트 / 테라피",
    "zh": "阿育吠陀传统理疗与护理"
  },
  "Ayurvedic Treatment Session": {
    "en": "Ayurvedic Treatment Session",
    "id": "Sesi Perawatan Ayurveda",
    "de": "Ayurvedische Behandlungssitzung",
    "fr": "Séance de soin ayurvédique",
    "es": "Sesión de tratamiento ayurvédico",
    "it": "Seduta di trattamento ayurvedico",
    "nl": "Ayurvedische behandelingssessie",
    "ru": "Сеанс аюрведического лечения",
    "ja": "アーユルヴェーダ トリートメントセッション",
    "ko": "아유르베다 전문 트리트먼트 세션",
    "zh": "阿育吠陀专业疗愈护理时段"
  },
  "Ayurvedic Treatment or Excursion": {
    "en": "Ayurvedic Treatment or Excursion",
    "id": "Perawatan Ayurveda atau Ekskursi Budaya",
    "de": "Ayurveda-Behandlung oder Ausflug",
    "fr": "Soin ayurvédique ou excursion",
    "es": "Tratamiento ayurvédico o excursión",
    "it": "Trattamento ayurvedico o escursione",
    "nl": "Ayurvedische behandeling of excursie",
    "ru": "Аюрведическая процедура или экскурсия",
    "ja": "アーユルヴェーダ施術または近郊エクスカーション",
    "ko": "아유르베다 트리트먼트 또는 주변 문화 탐방",
    "zh": "阿育吠陀疗程或文化短途游"
  },
  "Balinese Herbal Offering (Canang Sari) & Culture Session": {
    "en": "Balinese Herbal Offering (Canang Sari) & Culture Session",
    "id": "Membuat Persembahan Tradisional (Canang Sari) & Sesi Budaya Bali",
    "de": "Balinesische Kräuteropfer (Canang Sari) & Kultursitzung",
    "fr": "Offrandes florales balinaises (Canang Sari) et session culturelle",
    "es": "Ofrenda de hierbas balinesa (Canang Sari) y sesión cultural",
    "it": "Offerte floreali balinesi (Canang Sari) e sessione culturale",
    "nl": "Balinese kruidenoffers (Canang Sari) & culturele sessie",
    "ru": "Балийские подношения (чананг сари) и знакомство с культурой",
    "ja": "バリ伝統ハーブ供物（チャナン・サリ）作り＆文化体験",
    "ko": "발리 전통 꽃 공양(차낭 사리) 만들기 및 문화 체험 세션",
    "zh": "巴厘岛传统供品（Canang Sari）制作与文化体验"
  },
  "Balinese Massage": {
    "en": "Balinese Massage",
    "id": "Pijat Tradisional Bali",
    "de": "Balinesische Massage",
    "fr": "Massage balinais traditionnel",
    "es": "Masaje balinés",
    "it": "Massaggio balinese",
    "nl": "Balinese massage",
    "ru": "Балийский массаж",
    "ja": "伝統バリニーズマッサージ",
    "ko": "발리 전통 마사지",
    "zh": "传统巴厘岛古法按摩"
  },
  "Balinese Massage Treatment": {
    "en": "Balinese Massage Treatment",
    "id": "Perawatan Pijat Khas Bali",
    "de": "Balinesische Massagebehandlung",
    "fr": "Soin de massage balinais",
    "es": "Tratamiento de masaje balinés",
    "it": "Trattamento di massaggio balinese",
    "nl": "Balinese massagebehandeling",
    "ru": "Сеанс балийского массажа",
    "ja": "バリニーズマッサージ・トリートメント",
    "ko": "발리 전통 마사지 트리트먼트",
    "zh": "巴厘岛全身精油舒缓疗程"
  },
  "Candlelight Dinner & Heart Circle": {
    "en": "Candlelight Dinner & Heart Circle",
    "id": "Makan Malam Romantis Cahaya Lilin & Lingkaran Berbagi Hati",
    "de": "Abendessen bei Kerzenschein & Herzenskreis",
    "fr": "Dîner aux chandelles et cercle de partage",
    "es": "Cena a la luz de las velas y círculo de apertura",
    "it": "Cena a lume di candela e cerchio del cuore",
    "nl": "Diner bij kaarslicht & deelcirkel",
    "ru": "Ужин при свечах и душевный круг общения",
    "ja": "キャンドルライトディナー＆ハートサークル（分かち合いの集い）",
    "ko": "캔들라이트 디너 및 하트 서클(마음 나눔)",
    "zh": "烛光晚宴与心灵共鸣分享会"
  },
  "Candlelight Kirtan Chanting & Farewell Celebration": {
    "en": "Candlelight Kirtan Chanting & Farewell Celebration",
    "id": "Lantunan Kirtan Cahaya Lilin & Perayaan Perpisahan",
    "de": "Kirtan-Singen bei Kerzenschein & Abschiedsfeier",
    "fr": "Chants Kirtan aux chandelles et célébration d'adieu",
    "es": "Cantos Kirtan a la luz de las velas y celebración de despedida",
    "it": "Canti Kirtan a lume di candela e celebrazione d'addio",
    "nl": "Kirtan-zang bij kaarslicht & feestelijke afsluiting",
    "ru": "Пение киртана при свечах и прощальный праздник",
    "ja": "キャンドルライト・キールタン詠唱＆送別セレブレーション",
    "ko": "캔들라이트 키르탄 찬팅 및 환송 축하연",
    "zh": "烛光吉尔坦（Kirtan）梵唱与温馨欢送典礼"
  },
  "Celebration Tropical Breakfast": {
    "en": "Celebration Tropical Breakfast",
    "id": "Sarapan Tropis Perayaan",
    "de": "Festliches tropisches Frühstück",
    "fr": "Petit-déjeuner tropical de célébration",
    "es": "Desayuno tropical de celebración",
    "it": "Colazione tropicale di festa",
    "nl": "Feestelijk tropisch ontbijt",
    "ru": "Праздничный тропический завтрак",
    "ja": "セレブレーション・トロピカルブレックファスト",
    "ko": "축하 열대 과일 뷔페 조식",
    "zh": "庆祝典礼丰盛热带早餐"
  },
  "Check in & Fresh Welcome Young Coconut": {
    "en": "Check in & Fresh Welcome Young Coconut",
    "id": "Check-in & Kelapa Muda Segar Selamat Datang",
    "de": "Check-in & frische Begrüßungskokosnuss",
    "fr": "Enregistrement et noix de coco fraîche de bienvenue",
    "es": "Llegada y bienvenida con coco joven fresco",
    "it": "Check-in e noce di cocco fresca di benvenuto",
    "nl": "Inchecken & welkomstkokosnoot",
    "ru": "Заселение и приветственный свежий кокос",
    "ja": "チェックイン＆ウェルカムフレッシュヤングココナッツ",
    "ko": "체크인 및 웰컴 생코코넛 음료 제공",
    "zh": "办理入住与迎宾新鲜天然椰青"
  },
  "Check in & Welcome Coconut Water": {
    "en": "Check in & Welcome Coconut Water",
    "id": "Check-in & Air Kelapa Selamat Datang",
    "de": "Check-in & Begrüßungs-Kokoswasser",
    "fr": "Enregistrement et eau de coco de bienvenue",
    "es": "Check-in y agua de coco de bienvenida",
    "it": "Check-in e acqua di cocco di benvenuto",
    "nl": "Inchecken & welkomst-kokoswater",
    "ru": "Заселение и приветственная кокосовая вода",
    "ja": "チェックイン＆ウェルカムココナッツウォーター",
    "ko": "체크인 및 웰컴 코코넛 워터",
    "zh": "办理入住与迎宾椰汁"
  },
  "Check out with lifelong transformation": {
    "en": "Check out with lifelong transformation",
    "id": "Check-out dengan transformasi seumur hidup",
    "de": "Abreise mit lebensverändernder Transformation",
    "fr": "Départ avec une transformation durable",
    "es": "Check-out con una transformación para toda la vida",
    "it": "Check-out con una trasformazione che dura tutta la vita",
    "nl": "Uitchecken met een blijvende transformatie",
    "ru": "Выезд с ощущением глубокой внутренней трансформации",
    "ja": "生涯続く変容を胸にチェックアウト",
    "ko": "평생의 내면적 변화를 안고 체크아웃",
    "zh": "满载相伴一生的身心蜕变办理退房"
  },
  "Check out with rejuvenated body, mind, and spirit": {
    "en": "Check out with rejuvenated body, mind, and spirit",
    "id": "Check-out dengan tubuh, pikiran, dan jiwa yang diremajakan",
    "de": "Abreise mit verjüngtem Körper, Geist und Seele",
    "fr": "Départ avec un corps, un esprit et une âme régénérés",
    "es": "Salida con cuerpo, mente y espíritu rejuvenecidos",
    "it": "Check-out con corpo, mente e spirito rigenerati",
    "nl": "Uitchecken met een verjongd lichaam, geest en ziel",
    "ru": "Выезд с обновленным телом, ясным умом и одухотворенной душой",
    "ja": "心身ともに美しくリフレッシュしてチェックアウト",
    "ko": "몸과 마음, 영혼이 완전히 재충전된 상태로 체크아웃",
    "zh": "身心与灵性全然焕发新生，办理退房"
  },
  "Check out with renewed energy and peace": {
    "en": "Check out with renewed energy and peace",
    "id": "Check-out dengan energi baru dan kedamaian hati",
    "de": "Abreise mit neuer Energie und innerem Frieden",
    "fr": "Départ avec une énergie nouvelle et une profonde sérénité",
    "es": "Salida con energía renovada y paz interior",
    "it": "Check-out con energia rinnovata e pace interiore",
    "nl": "Uitchecken met hernieuwde energie en diepe rust",
    "ru": "Выезд с приливом новой энергии и внутренним покоем",
    "ja": "新たなエネルギーと安らぎと共にチェックアウト",
    "ko": "새로운 활력과 평온함을 가득 품고 체크아웃",
    "zh": "怀揣丰沛活力与宁静内心办理退房"
  },
  "Classical Hatha Asana Practice": {
    "en": "Classical Hatha Asana Practice",
    "id": "Latihan Asana Hatha Klasik",
    "de": "Klassische Hatha-Asana-Praxis",
    "fr": "Pratique classique des asanas de Hatha",
    "es": "Práctica clásica de asanas de Hatha",
    "it": "Pratica classica di Hatha Asana",
    "nl": "Klassieke Hatha Asana beoefening",
    "ru": "Классическая практика хатха-асан",
    "ja": "クラシカル・ハタヨーガ アーサナ実技",
    "ko": "전통 하타 요가 아사나 수련",
    "zh": "经典哈他（Hatha）体式精准研练"
  },
  "Classical Hatha Yoga": {
    "en": "Classical Hatha Yoga",
    "id": "Yoga Hatha Klasik",
    "de": "Klassisches Hatha Yoga",
    "fr": "Hatha Yoga traditionnel",
    "es": "Hatha Yoga clásico",
    "it": "Hatha Yoga classico",
    "nl": "Klassieke Hatha Yoga",
    "ru": "Классическая хатха-йога",
    "ja": "古典ハタヨーガ",
    "ko": "정통 하타 요가",
    "zh": "正统经典哈他瑜伽"
  },
  "Closing Blessing Ceremony & Certificate Presentation": {
    "en": "Closing Blessing Ceremony & Certificate Presentation",
    "id": "Upacara Pemberkatan Penutupan & Penyerahan Sertifikat",
    "de": "Feierliche Abschlusszeremonie & Zertifikatsübergabe",
    "fr": "Cérémonie de bénédiction de clôture et remise des certificats",
    "es": "Ceremonia de bendición final y entrega de certificados",
    "it": "Cerimonia di benedizione conclusiva e consegna dei certificati",
    "nl": "Afsluitende zegeningsceremonie & uitreiking van certificaten",
    "ru": "Церемония благословения закрытия и вручение сертификатов",
    "ja": "修了祝福セレモニー＆修了証授与",
    "ko": "수료 축복 세레모니 및 수료증 수여식",
    "zh": "圆满结业祈福典礼与结业证书颁发"
  },
  "Closing Blessing Ceremony & Retreat Certificate": {
    "en": "Closing Blessing Ceremony & Retreat Certificate",
    "id": "Upacara Pemberkatan Penutupan & Sertifikat Retret",
    "de": "Abschlusszeremonie & Übergabe der Retreat-Zertifikate",
    "fr": "Cérémonie de bénédiction finale et certificat de retraite",
    "es": "Ceremonia de bendición de cierre y certificado del retiro",
    "it": "Cerimonia di benedizione conclusiva e certificato di partecipazione",
    "nl": "Afsluitende zegening & retraite-certificaat",
    "ru": "Заключительная церемония благословения и сертификаты участников",
    "ja": "修了祝福式＆リトリート修了証授与",
    "ko": "축복 종결 의식 및 리트릿 수료증 수여",
    "zh": "闭幕祈福典礼与静修结业证书颁发"
  },
  "Closing Fire Blessing & Certificate Presentation": {
    "en": "Closing Fire Blessing & Certificate Presentation",
    "id": "Upacara Pemberkatan Api Suci Penutupan & Penyerahan Sertifikat",
    "de": "Abschließende Feuerzeremonie & Zertifikatsübergabe",
    "fr": "Bénédiction du feu sacré de clôture et remise des certificats",
    "es": "Ceremonia sagrada del fuego de cierre y entrega de certificados",
    "it": "Cerimonia conclusiva del fuoco e consegna dei certificati",
    "nl": "Afsluitende vuurceremonie & certificaatuitreiking",
    "ru": "Заключительная огненная церемония благословения и вручение сертификатов",
    "ja": "火の祝福セレモニー（ホーマ）＆修了証授与式",
    "ko": "수료 성화 축복 의식(하반) 및 수료증 수여식",
    "zh": "圆满圣火祈福仪式（Havan）与结业证书授发"
  },
  "Coastal Ayurvedic Breakfast": {
    "en": "Coastal Ayurvedic Breakfast",
    "id": "Sarapan Ayurveda Pesisir",
    "de": "Ayurvedisches Küsten-Frühstück",
    "fr": "Petit-déjeuner ayurvédique côtier",
    "es": "Desayuno ayurvédico costero",
    "it": "Colazione ayurvedica costiera",
    "nl": "Ayurvedisch ontbijt aan de kust",
    "ru": "Прибрежный аюрведический завтрак",
    "ja": "海岸の心地よいアーユルヴェーダ朝食",
    "ko": "해변가 아유르베다 힐링 조식",
    "zh": "沿海风味阿育吠陀养生早餐"
  },
  "Community Dinner": {
    "en": "Community Dinner",
    "id": "Makan Malam Bersama Komunitas",
    "de": "Gemeinsames Abendessen",
    "fr": "Dîner communautaire",
    "es": "Cena comunitaria",
    "it": "Cena comunitaria",
    "nl": "Gezamenlijk diner",
    "ru": "Ужин в кругу единомышленников",
    "ja": "コミュニティ・ディナー（夕食懇親会）",
    "ko": "커뮤니티 만찬",
    "zh": "学员社群暖心晚餐"
  },
  "Complimentary Full-Body Balinese Massage Treatment": {
    "en": "Complimentary Full-Body Balinese Massage Treatment",
    "id": "Perawatan Pijat Seluruh Tubuh Khas Bali Gratis",
    "de": "Kostenlose balinesische Ganzkörpermassage",
    "fr": "Massage balinais complet du corps offert",
    "es": "Masaje balinés corporal completo de cortesía",
    "it": "Trattamento di massaggio balinese completo gratuito",
    "nl": "Gratis complete Balinese lichaamsmassage",
    "ru": "Бесплатный полный балийский массаж тела",
    "ja": "無料フルボディ・バリニーズマッサージ施術",
    "ko": "무료 전신 발리 전통 마사지 트리트먼트",
    "zh": "免费尊享巴厘岛全身深度精油按摩"
  },
  "Daily Complimentary Full-Body Balinese Massage": {
    "en": "Daily Complimentary Full-Body Balinese Massage",
    "id": "Pijat Seluruh Tubuh Khas Bali Gratis Setiap Hari",
    "de": "Täglich kostenlose balinesische Ganzkörpermassage",
    "fr": "Massage balinais complet du corps gratuit chaque jour",
    "es": "Masaje balinés de cuerpo entero gratuito diario",
    "it": "Massaggio balinese completo gratuito tutti i giorni",
    "nl": "Dagelijks gratis complete Balinese lichaamsmassage",
    "ru": "Ежедневный бесплатный балийский массаж всего тела",
    "ja": "毎日の無料フルボディ・バリニーズマッサージ",
    "ko": "매일 무료 제공 전신 발리 마사지",
    "zh": "每日免费尊享巴厘岛全身古法按摩"
  },
  "Delicious Plant-Based Lunch": {
    "en": "Delicious Plant-Based Lunch",
    "id": "Makan Siang Nabati yang Lezat",
    "de": "Köstliches pflanzliches Mittagessen",
    "fr": "Délicieux déjeuner végétal",
    "es": "Delicioso almuerzo a base de plantas",
    "it": "Delizioso pranzo a base vegetale",
    "nl": "Heerlijke plantaardige lunch",
    "ru": "Вкусный растительный обед",
    "ja": "美味しくヘルシーなプラントベース昼食",
    "ko": "맛있고 건강한 플랜트 베이스 중식",
    "zh": "美味营养全植物性午餐"
  },
  "Dinner & Noble Silence": {
    "en": "Dinner & Noble Silence",
    "id": "Makan Malam & Keheningan Mulia (Noble Silence)",
    "de": "Abendessen & Edle Stille",
    "fr": "Dîner et noble silence",
    "es": "Cena y noble silencio",
    "it": "Cena e nobile silenzio",
    "nl": "Diner & nobele stilte",
    "ru": "Ужин и практика благородного безмолвия",
    "ja": "ディナー＆ノーブルサイレンス（聖なる沈黙）",
    "ko": "저녁 식사 및 묵언 정진(고귀한 침묵)",
    "zh": "晚餐与尊贵静默（Noble Silence）内观"
  },
  "Dinner by Candlelight": {
    "en": "Dinner by Candlelight",
    "id": "Makan Malam dengan Cahaya Lilin",
    "de": "Abendessen bei Kerzenschein",
    "fr": "Dîner à la lueur des bougies",
    "es": "Cena a la luz de las velas",
    "it": "Cena a lume di candela",
    "nl": "Diner bij kaarslicht",
    "ru": "Ужин при свечах",
    "ja": "キャンドルの灯りで楽しむディナー",
    "ko": "캔들라이트 디너",
    "zh": "温馨烛光晚餐"
  },
  "Dynamic & Classical Asana": {
    "en": "Dynamic & Classical Asana",
    "id": "Asana Dinamis & Klasik",
    "de": "Dynamische & klassische Asana-Praxis",
    "fr": "Asanas dynamiques et classiques",
    "es": "Asanas dinámicas y clásicas",
    "it": "Asana dinamiche e classiche",
    "nl": "Dynamische & klassieke asana's",
    "ru": "Динамические и классические асаны",
    "ja": "ダイナミック＆クラシカル・アーサナ実技",
    "ko": "다이내믹 & 클래식 아사나 수련",
    "zh": "活力流动与经典体式研习"
  },
  "Evening Ganga Aarti Pilgrimage": {
    "en": "Evening Ganga Aarti Pilgrimage",
    "id": "Ziarah Upacara Malam Ganga Aarti",
    "de": "Pilgergang zur abendlichen Ganga Aarti",
    "fr": "Pèlerinage au rituel du soir de la Ganga Aarti",
    "es": "Peregrinación a la ceremonia vespertina de Ganga Aarti",
    "it": "Pellegrinaggio serale per la cerimonia del Ganga Aarti",
    "nl": "Pelgrimstocht naar de avondceremonie van de Ganga Aarti",
    "ru": "Паломничество на вечернюю церемонию Ганга Аарти",
    "ja": "夕暮れのガンガー・アールティ（祈りの儀式）参拝",
    "ko": "저녁 갠지스강 아르티(Ganga Aarti) 순례 의식",
    "zh": "恒河夜祭圣火祈福朝圣（Ganga Aarti）"
  },
  "Evening Ganga Aarti or Satsang": {
    "en": "Evening Ganga Aarti or Satsang",
    "id": "Upacara Malam Ganga Aarti atau Satsang",
    "de": "Abendliche Ganga Aarti oder Satsang",
    "fr": "Ganga Aarti du soir ou Satsang",
    "es": "Ganga Aarti vespertino o Satsang",
    "it": "Ganga Aarti serale o Satsang",
    "nl": "Avond Ganga Aarti of Satsang",
    "ru": "Вечерняя Ганга Аарти или сатсанг",
    "ja": "夕暮れのガンガー・アールティまたはサットサンガ",
    "ko": "저녁 갠지스 아르티 또는 사트상",
    "zh": "恒河祈福夜祭或真理共修（Satsang）"
  },
  "Farewell Tropical Breakfast": {
    "en": "Farewell Tropical Breakfast",
    "id": "Sarapan Tropis Perpisahan",
    "de": "Abschiedsfrühstück mit tropischen Früchten",
    "fr": "Petit-déjeuner tropical d'adieu",
    "es": "Desayuno tropical de despedida",
    "it": "Colazione tropicale d'addio",
    "nl": "Afscheidsontbijt met tropisch fruit",
    "ru": "Прощальный тропический завтрак",
    "ja": "フェアウェル・トロピカルブレックファスト",
    "ko": "환송 열대 조식",
    "zh": "欢送告别热带美馔早餐"
  },
  "Final Celebration Pranayama & Meditation": {
    "en": "Final Celebration Pranayama & Meditation",
    "id": "Pranayama & Meditasi Perayaan Penutup",
    "de": "Abschließende Pranayama- & Meditationssitzung",
    "fr": "Pranayama et méditation de célébration finale",
    "es": "Pranayama y meditación de celebración final",
    "it": "Pranayama e meditazione di celebrazione finale",
    "nl": "Feestelijke afsluitende Pranayama & meditatie",
    "ru": "Праздничная заключительная сессия пранаямы и медитации",
    "ja": "ファイナル・セレブレーション・プラーナヤーマ＆瞑想",
    "ko": "수료 축하 최종 프라나야마 및 명상",
    "zh": "终章庆典呼吸调息与静心冥想"
  },
  "Free Time & Beach Exploration": {
    "en": "Free Time & Beach Exploration",
    "id": "Waktu Luang & Menjelajahi Pantai",
    "de": "Freizeit & Stranderkundung",
    "fr": "Temps libre et découverte de la plage",
    "es": "Tiempo libre y exploración de la playa",
    "it": "Tempo libero ed esplorazione della spiaggia",
    "nl": "Vrije tijd & strandverkenning",
    "ru": "Свободное время и прогулки по пляжу",
    "ja": "自由時間＆ビーチ散策",
    "ko": "자유 시간 및 해변 산책 탐방",
    "zh": "自由活动与海滩漫步探索"
  },
  "Free Time for Swimming Pool & Jungle Relaxation": {
    "en": "Free Time for Swimming Pool & Jungle Relaxation",
    "id": "Waktu Luang untuk Kolam Renang & Relaksasi Hutan",
    "de": "Freizeit für Pool & Dschungel-Entspannung",
    "fr": "Temps libre pour la piscine et la détente dans la jungle",
    "es": "Tiempo libre para piscina y relax en la selva",
    "it": "Tempo libero per piscina e relax nella giungla",
    "nl": "Vrije tijd voor het zwembad en ontspanning in de jungle",
    "ru": "Свободное время для отдыха у бассейна и релаксации в джунглях",
    "ja": "プール＆ジャングルでのんびり過ごす自由時間",
    "ko": "수영장 및 정글 힐링 자유 시간",
    "zh": "泳池畅游与热带雨林漫享自由时光"
  },
  "Fresh Lunch at Sanctuary": {
    "en": "Fresh Lunch at Sanctuary",
    "id": "Makan Siang Segar di Suaka",
    "de": "Frisches Mittagessen im Refugium",
    "fr": "Déjeuner frais au sanctuaire",
    "es": "Almuerzo fresco en el santuario",
    "it": "Pranzo fresco nel santuario",
    "nl": "Verse lunch in het toevluchtsoord",
    "ru": "Свежий обед в святилище",
    "ja": "サンクチュアリ特製フレッシュランチ",
    "ko": "리조트 신선 런치",
    "zh": "养生圣殿健康新鲜午餐"
  },
  "Fresh Organic Plant-Based Lunch": {
    "en": "Fresh Organic Plant-Based Lunch",
    "id": "Makan Siang Nabati Organik Segar",
    "de": "Frisches, biologisches, pflanzliches Mittagessen",
    "fr": "Déjeuner végétal bio et frais",
    "es": "Almuerzo fresco orgánico a base de plantas",
    "it": "Pranzo fresco biologico a base vegetale",
    "nl": "Verse biologische plantaardige lunch",
    "ru": "Свежий органический растительный обед",
    "ja": "新鮮なオーガニック・プラントベース昼食",
    "ko": "신선한 유기농 플랜트 베이스 중식",
    "zh": "新鲜有机纯素植物午餐"
  },
  "Full-Body Complimentary Balinese Massage Treatment": {
    "en": "Full-Body Complimentary Balinese Massage Treatment",
    "id": "Perawatan Pijat Seluruh Tubuh Khas Bali Gratis",
    "de": "Kostenlose balinesische Ganzkörpermassage",
    "fr": "Soin complet du corps par massage balinais offert",
    "es": "Tratamiento de masaje balinés de cuerpo entero gratuito",
    "it": "Trattamento di massaggio balinese per tutto il corpo in omaggio",
    "nl": "Gratis complete Balinese lichaamsmassage",
    "ru": "Бесплатный полный балийский массаж всего тела",
    "ja": "無料フルボディ・バリニーズマッサージ",
    "ko": "무료 전신 발리 전통 마사지 테라피",
    "zh": "免费尊享巴厘岛全身深度舒缓按摩"
  },
  "Ganga Aarti Ceremony or Kirtan": {
    "en": "Ganga Aarti Ceremony or Kirtan",
    "id": "Upacara Suci Ganga Aarti atau Kirtan",
    "de": "Ganga Aarti Zeremonie oder Kirtan",
    "fr": "Cérémonie de Ganga Aarti ou Kirtan",
    "es": "Ceremonia de Ganga Aarti o Kirtan",
    "it": "Cerimonia del Ganga Aarti o Kirtan",
    "nl": "Ganga Aarti ceremonie of Kirtan",
    "ru": "Церемония Ганга Аарти или киртан",
    "ja": "ガンガー・アールティの儀式またはキールタン",
    "ko": "갠지스 아르티 의식 또는 키르탄 찬팅",
    "zh": "恒河祈福大祭或吉尔坦唱诵"
  },
  "Gentle Sunset Restorative & Sound Healing": {
    "en": "Gentle Sunset Restorative & Sound Healing",
    "id": "Yoga Restoratif Matahari Terbenam & Terapi Suara",
    "de": "Sanftes Restorative Yoga & Klangheilung zum Sonnenuntergang",
    "fr": "Yoga restauratif doux au coucher du soleil et thérapie sonore",
    "es": "Yoga restaurativo suave al atardecer y sanación con sonido",
    "it": "Yoga ristorativo dolce al tramonto e bagno di suoni",
    "nl": "Zachte herstellende yoga & klankheling bij zonsondergang",
    "ru": "Мягкая восстанавливающая йога на закате и звуковая терапия",
    "ja": "夕暮れの優しいリストラティブヨガ＆サウンドヒーリング",
    "ko": "선셋 힐링 리스토러티브 요가 & 사운드 테라피",
    "zh": "日落温和修复瑜伽与颂钵音疗"
  },
  "Gentle Yin & Yoga Nidra": {
    "en": "Gentle Yin & Yoga Nidra",
    "id": "Yin Yoga Lembut & Yoga Nidra",
    "de": "Sanftes Yin Yoga & Yoga Nidra",
    "fr": "Yin Yoga doux et Yoga Nidra",
    "es": "Yin Yoga suave y Yoga Nidra",
    "it": "Yin Yoga dolce e Yoga Nidra",
    "nl": "Zachte Yin Yoga & Yoga Nidra",
    "ru": "Мягкая инь-йога и йога-нидра",
    "ja": "ジェントル陰ヨガ＆ヨガニードラ",
    "ko": "부드러운 인 요가 & 요가 니드라 수면 명상",
    "zh": "柔和阴瑜伽与瑜伽深眠（Yoga Nidra）"
  },
  "Gourmet Dinner & Beach Stroll": {
    "en": "Gourmet Dinner & Beach Stroll",
    "id": "Makan Malam Lezat & Berjalan Santai di Pantai",
    "de": "Gourmet-Abendessen & Strandspaziergang",
    "fr": "Dîner gastronomique et promenade sur la plage",
    "es": "Cena gourmet y paseo por la playa",
    "it": "Cena gourmet e passeggiata sulla spiaggia",
    "nl": "Gourmet-diner & strandwandeling",
    "ru": "Изысканный ужин и вечерняя прогулка по побережью",
    "ja": "グルメディナー＆ビーチのお散歩",
    "ko": "고메 디너 및 해변 산책",
    "zh": "精致养生素食晚宴与海滩漫步"
  },
  "Gourmet Organic Plant-Based Lunch": {
    "en": "Gourmet Organic Plant-Based Lunch",
    "id": "Makan Siang Nabati Organik Lezat",
    "de": "Gourmet-Mittagessen aus biologischen, pflanzlichen Zutaten",
    "fr": "Déjeuner gastronomique bio et végétal",
    "es": "Almuerzo gourmet orgánico a base de plantas",
    "it": "Pranzo gourmet biologico a base vegetale",
    "nl": "Biologische plantaardige gourmet-lunch",
    "ru": "Изысканный органический растительный обед",
    "ja": "オーガニック・プラントベース・グルメランチ",
    "ko": "유기농 채식 고메 런치",
    "zh": "有机精纯植物养生精致午餐"
  },
  "Hatha Vinyasa Yoga": {
    "en": "Hatha Vinyasa Yoga",
    "id": "Yoga Hatha Vinyasa",
    "de": "Hatha Vinyasa Yoga",
    "fr": "Yoga Hatha Vinyasa",
    "es": "Hatha Vinyasa Yoga",
    "it": "Hatha Vinyasa Yoga",
    "nl": "Hatha Vinyasa Yoga",
    "ru": "Хатха-виньяса-йога",
    "ja": "ハタ・ヴィンヤサ・ヨーガ",
    "ko": "하타 빈야사 요가",
    "zh": "哈他流瑜伽（Hatha Vinyasa）"
  },
  "Hatha Vinyasa Yoga Alignment & Sequencing": {
    "en": "Hatha Vinyasa Yoga Alignment & Sequencing",
    "id": "Penyelarasan & Rangkaian Yoga Hatha Vinyasa",
    "de": "Ausrichtung und Sequencing im Hatha Vinyasa Yoga",
    "fr": "Alignement et séquençage en Hatha Vinyasa Yoga",
    "es": "Alineación y secuenciación en Hatha Vinyasa Yoga",
    "it": "Allineamento e sequenze di Hatha Vinyasa Yoga",
    "nl": "Uitlijning en opbouw in Hatha Vinyasa Yoga",
    "ru": "Отстройка асан и последовательности в хатха-виньяса-йоге",
    "ja": "ハタ・ヴィンヤサのアライメント＆シークエンス技術",
    "ko": "하타 빈야사 정렬법 및 시퀀싱 원리",
    "zh": "哈他流瑜伽正位技巧与序列编排"
  },
  "Hatha Vinyasa Yoga Flow": {
    "en": "Hatha Vinyasa Yoga Flow",
    "id": "Aliran Yoga Hatha Vinyasa",
    "de": "Hatha Vinyasa Yoga Flow",
    "fr": "Flow de Hatha Vinyasa Yoga",
    "es": "Fluir en Hatha Vinyasa Yoga",
    "it": "Hatha Vinyasa Yoga Flow",
    "nl": "Hatha Vinyasa Yoga Flow",
    "ru": "Хатха-виньяса йога-флоу",
    "ja": "ハタ・ヴィンヤサ・フローヨーガ",
    "ko": "하타 빈야사 요가 플로우",
    "zh": "哈他流瑜伽动态流动练习"
  },
  "Healing Session (Sound / Reiki)": {
    "en": "Healing Session (Sound / Reiki)",
    "id": "Sesi Penyembuhan (Mandi Suara / Reiki)",
    "de": "Heilsitzung (Klangtherapie / Reiki)",
    "fr": "Séance de guérison (Son / Reiki)",
    "es": "Sesión de sanación (Sonido / Reiki)",
    "it": "Seduta di guarigione (Suono / Reiki)",
    "nl": "Helingssessie (Klankschalen / Reiki)",
    "ru": "Сеанс исцеления (звукотерапия / рейки)",
    "ja": "ヒーリングセッション（サウンド／レイキ）",
    "ko": "힐링 세션 (사운드 / 레이키 에너지)",
    "zh": "身心疗愈时段（颂钵音疗 / 灵气疗愈）"
  },
  "Healthy Sattvic Lunch": {
    "en": "Healthy Sattvic Lunch",
    "id": "Makan Siang Sattvic yang Sehat",
    "de": "Gesundes sattvisches Mittagessen",
    "fr": "Déjeuner sattvique sain",
    "es": "Almuerzo sátvico saludable",
    "it": "Pranzo sattvico sano",
    "nl": "Gezonde sattvische lunch",
    "ru": "Здоровый саттвический обед",
    "ja": "身体を浄化するサットヴァ（純粋）ランチ",
    "ko": "건강한 사트빅(Sattvic) 런치",
    "zh": "纯净悦性（Sattvic）健康午餐"
  },
  "Heart-Opening Hatha Yoga": {
    "en": "Heart-Opening Hatha Yoga",
    "id": "Yoga Hatha Pembuka Hati",
    "de": "Herzöffnendes Hatha Yoga",
    "fr": "Hatha Yoga pour l'ouverture du cœur",
    "es": "Hatha Yoga de apertura de corazón",
    "it": "Hatha Yoga per l'apertura del cuore",
    "nl": "Hartopenende Hatha Yoga",
    "ru": "Хатха-йога для раскрытия сердечного центра",
    "ja": "胸を開くハートオープニング・ハタヨーガ",
    "ko": "가슴을 여는 하트 오프닝 하타 요가",
    "zh": "开启心轮的哈他经典瑜伽"
  },
  "Hearty Breakfast": {
    "en": "Hearty Breakfast",
    "id": "Sarapan Bergizi Penuh Semangat",
    "de": "Herzhaftes, stärkendes Frühstück",
    "fr": "Petit-déjeuner copieux",
    "es": "Desayuno nutritivo y reconfortante",
    "it": "Colazione sostanziosa",
    "nl": "Stevig ontbijt",
    "ru": "Сытный завтрак",
    "ja": "栄養満点ブレックファスト",
    "ko": "풍성하고 든든한 조식",
    "zh": "营养丰盛能量早餐"
  },
  "Himalayan Sunrise Meditation": {
    "en": "Himalayan Sunrise Meditation",
    "id": "Meditasi Matahari Terbit di Himalaya",
    "de": "Himalaya-Sonnenaufgangsmeditation",
    "fr": "Méditation au lever du soleil dans l'Himalaya",
    "es": "Meditación al amanecer en el Himalaya",
    "it": "Meditazione all'alba sull'Himalaya",
    "nl": "Zonsopgangmeditatie in de Himalaya",
    "ru": "Медитация на рассвете с видом на Гималаи",
    "ja": "ヒマラヤの日の出を仰ぐサンライズ瞑想",
    "ko": "히말라야 일출 고요 명상",
    "zh": "喜马拉雅晨曦日出冥想"
  },
  "Invigorating Morning Vinyasa": {
    "en": "Invigorating Morning Vinyasa",
    "id": "Vinyasa Pagi yang Menyegarkan",
    "de": "Belebendes morgendliches Vinyasa Yoga",
    "fr": "Vinyasa revigorant du matin",
    "es": "Vinyasa vigorizante matutino",
    "it": "Vinyasa mattutino rinvigorente",
    "nl": "Verkwikkende ochtend-Vinyasa",
    "ru": "Бодрящая утренняя виньяса",
    "ja": "朝のエネルギーを目覚めさせるヴィンヤサフロー",
    "ko": "활력을 깨우는 모닝 빈야사 요가",
    "zh": "晨间唤醒活力流瑜伽"
  },
  "Morning Asana Practice": {
    "en": "Morning Asana Practice",
    "id": "Latihan Asana Pagi Hari",
    "de": "Morgendliche Asana-Praxis",
    "fr": "Pratique matinale des asanas",
    "es": "Práctica matutina de asanas",
    "it": "Pratica mattutina di asana",
    "nl": "Ochtend Asana beoefening",
    "ru": "Утренняя практика асан",
    "ja": "朝のアーサナ実践",
    "ko": "모닝 아사나 수련",
    "zh": "清晨体式精进练习"
  },
  "Morning Energizing Hatha Yoga Practice": {
    "en": "Morning Energizing Hatha Yoga Practice",
    "id": "Latihan Yoga Hatha Pagi yang Menyegarkan Energi",
    "de": "Energetisierende Hatha-Yoga-Praxis am Morgen",
    "fr": "Pratique énergisante de Hatha Yoga le matin",
    "es": "Práctica matutina energizante de Hatha Yoga",
    "it": "Pratica energizzante di Hatha Yoga mattutina",
    "nl": "Ochtend stimulerende Hatha Yoga beoefening",
    "ru": "Утренняя заряжающая энергией практика хатха-йоги",
    "ja": "朝の活力を呼び覚ますハタヨーガ実践",
    "ko": "에너지를 채우는 모닝 하타 요가 수련",
    "zh": "晨间能量唤醒哈他瑜伽"
  },
  "Morning Hatha-Vinyasa Flow": {
    "en": "Morning Hatha-Vinyasa Flow",
    "id": "Aliran Yoga Hatha-Vinyasa Pagi Hari",
    "de": "Morgendlicher Hatha-Vinyasa-Flow",
    "fr": "Flow matinal de Hatha-Vinyasa",
    "es": "Flow matutino de Hatha-Vinyasa",
    "it": "Flow mattutino di Hatha-Vinyasa",
    "nl": "Ochtend Hatha-Vinyasa Flow",
    "ru": "Утренний хатха-виньяса флоу",
    "ja": "朝のハタ・ヴィンヤサ・フロー",
    "ko": "모닝 하타-빈야사 플로우",
    "zh": "晨间哈他流瑜伽顺畅流动"
  },
  "Nourishing Breakfast": {
    "en": "Nourishing Breakfast",
    "id": "Sarapan Bergizi",
    "de": "Nahrhaftes Frühstück",
    "fr": "Petit-déjeuner nourrissant",
    "es": "Desayuno nutritivo",
    "it": "Colazione nutriente",
    "nl": "Voedzaam ontbijt",
    "ru": "Питательный завтрак",
    "ja": "滋養豊かな朝食",
    "ko": "영양 가득한 조식",
    "zh": "滋养健康早餐"
  },
  "Nourishing Dinner": {
    "en": "Nourishing Dinner",
    "id": "Makan Malam Bergizi",
    "de": "Nahrhaftes Abendessen",
    "fr": "Dîner équilibré et nourrissant",
    "es": "Cena nutritiva",
    "it": "Cena nutriente",
    "nl": "Voedzaam diner",
    "ru": "Питательный ужин",
    "ja": "身体をいたわる夜の滋養食",
    "ko": "영양 가득한 석식",
    "zh": "温润滋养晚宴"
  },
  "Nourishing Tropical Breakfast": {
    "en": "Nourishing Tropical Breakfast",
    "id": "Sarapan Tropis yang Bergizi",
    "de": "Nahrhaftes tropisches Frühstück",
    "fr": "Petit-déjeuner tropical équilibré",
    "es": "Desayuno tropical nutritivo",
    "it": "Colazione tropicale nutriente",
    "nl": "Voedzaam tropisch ontbijt",
    "ru": "Питательный тропический завтрак",
    "ja": "栄養豊かなトロピカルブレックファスト",
    "ko": "영양 가득한 열대과일 조식",
    "zh": "滋养热带风味早餐"
  },
  "Nutritious & Delicious Plant-Based Lunch": {
    "en": "Nutritious & Delicious Plant-Based Lunch",
    "id": "Makan Siang Nabati yang Bergizi & Lezat",
    "de": "Nahrhaftes & köstliches pflanzliches Mittagessen",
    "fr": "Déjeuner végétal savoureux et nutritif",
    "es": "Almuerzo delicioso y nutritivo a base de plantas",
    "it": "Pranzo a base vegetale nutriente e delizioso",
    "nl": "Voedzame & heerlijke plantaardige lunch",
    "ru": "Питательный и вкусный растительный обед",
    "ja": "栄養満点で美味しいプラントベース昼食",
    "ko": "영양과 맛을 겸비한 채식 런치",
    "zh": "营养与美味兼具的纯植物午餐"
  },
  "Nutritious & Delicious Tropical Breakfast": {
    "en": "Nutritious & Delicious Tropical Breakfast",
    "id": "Sarapan Tropis yang Bergizi & Lezat",
    "de": "Nahrhaftes & köstliches tropisches Frühstück",
    "fr": "Petit-déjeuner tropical délicieux et équilibré",
    "es": "Desayuno tropical delicioso y nutritivo",
    "it": "Colazione tropicale nutriente e deliziosa",
    "nl": "Voedzaam & heerlijk tropisch ontbijt",
    "ru": "Питательный и вкусный тропический завтрак",
    "ja": "美味しく滋養に満ちたトロピカル朝食",
    "ko": "맛있고 영양가 높은 열대식 조식",
    "zh": "营养美味的热带元气早餐"
  },
  "Nutritious & Energizing Tropical Breakfast": {
    "en": "Nutritious & Energizing Tropical Breakfast",
    "id": "Sarapan Tropis yang Bergizi & Memberi Energi",
    "de": "Nahrhaftes & belebendes tropisches Frühstück",
    "fr": "Petit-déjeuner tropical énergisant et nutritif",
    "es": "Desayuno tropical energizante y nutritivo",
    "it": "Colazione tropicale energizzante e nutriente",
    "nl": "Voedzaam & energiegevend tropisch ontbijt",
    "ru": "Питательный и заряжающий энергией тропический завтрак",
    "ja": "エネルギーを高める栄養豊かなトロピカルブレックファスト",
    "ko": "활력을 돋우는 영양 열대 조식",
    "zh": "营养焕能热带风味早餐"
  },
  "Nutritious Breakfast": {
    "en": "Nutritious Breakfast",
    "id": "Sarapan Bergizi",
    "de": "Nahrhaftes Frühstück",
    "fr": "Petit-déjeuner nutritif",
    "es": "Desayuno nutritivo",
    "it": "Colazione nutriente",
    "nl": "Voedzaam ontbijt",
    "ru": "Питательный завтрак",
    "ja": "栄養バランスの良い朝食",
    "ko": "영양 조식",
    "zh": "均衡营养早餐"
  },
  "Nutritious Dinner": {
    "en": "Nutritious Dinner",
    "id": "Makan Malam Bergizi",
    "de": "Nahrhaftes Abendessen",
    "fr": "Dîner nutritif",
    "es": "Cena nutritiva",
    "it": "Cena nutriente",
    "nl": "Voedzaam diner",
    "ru": "Питательный ужин",
    "ja": "ヘルシーで栄養豊かな夕食",
    "ko": "영양 가득한 석식",
    "zh": "健康营养晚餐"
  },
  "Nutritious Dinner & Quiet Integration": {
    "en": "Nutritious Dinner & Quiet Integration",
    "id": "Makan Malam Bergizi & Integrasi yang Hening",
    "de": "Nahrhaftes Abendessen & ruhige Integration",
    "fr": "Dîner nutritif et intégration paisible",
    "es": "Cena nutritiva e integración serena",
    "it": "Cena nutriente e integrazione serena",
    "nl": "Voedzaam diner & rustige reflectie",
    "ru": "Питательный ужин и спокойное осмысление опыта",
    "ja": "栄養豊かな夕食と静かな内省の時間",
    "ko": "영양 만찬 및 고요한 내면 통합 시간",
    "zh": "营养晚宴与静心体悟整合"
  },
  "Nutritious Lunch": {
    "en": "Nutritious Lunch",
    "id": "Makan Siang Bergizi",
    "de": "Nahrhaftes Mittagessen",
    "fr": "Déjeuner nutritif",
    "es": "Almuerzo nutritivo",
    "it": "Pranzo nutriente",
    "nl": "Voedzame lunch",
    "ru": "Питательный обед",
    "ja": "バランスの取れたヘルシーランチ",
    "ko": "영양 런치",
    "zh": "营养午餐"
  },
  "Nutritious Plant-Based Lunch": {
    "en": "Nutritious Plant-Based Lunch",
    "id": "Makan Siang Nabati Bergizi",
    "de": "Nahrhaftes pflanzliches Mittagessen",
    "fr": "Déjeuner végétal et équilibré",
    "es": "Almuerzo nutritivo a base de plantas",
    "it": "Pranzo nutriente a base vegetale",
    "nl": "Voedzame plantaardige lunch",
    "ru": "Питательный растительный обед",
    "ja": "栄養満点プラントベース昼食",
    "ko": "영양 가득한 채식 중식",
    "zh": "营养均衡纯素午餐"
  },
  "Nutritious Vegetarian / Vegan Dinner": {
    "en": "Nutritious Vegetarian / Vegan Dinner",
    "id": "Makan Malam Vegetarian / Vegan Bergizi",
    "de": "Nahrhaftes vegetarisches / veganes Abendessen",
    "fr": "Dîner végétarien / végétalien savoureux et nutritif",
    "es": "Cena vegetariana / vegana nutritiva",
    "it": "Cena vegetariana / vegana nutriente",
    "nl": "Voedzaam vegetarisch / veganistisch diner",
    "ru": "Питательный вегетарианский / веганский ужин",
    "ja": "栄養豊かなベジタリアン／ヴィーガンディナー",
    "ko": "영양 채식 / 비건 디너",
    "zh": "营养素食 / 纯素晚餐"
  },
  "Oceanfront Sunrise Pranayama": {
    "en": "Oceanfront Sunrise Pranayama",
    "id": "Pranayama Matahari Terbit di Tepi Samudra",
    "de": "Pranayama bei Sonnenaufgang am Meer",
    "fr": "Pranayama au lever du soleil face à l'océan",
    "es": "Pranayama frente al mar al amanecer",
    "it": "Pranayama all'alba di fronte all'oceano",
    "nl": "Pranayama bij zonsopgang aan de oceaan",
    "ru": "Пранаяма на рассвете на берегу океана",
    "ja": "海辺を望むサンライズ・プラーナヤーマ（調息法）",
    "ko": "오션프론트 일출 프라나야마 호흡 수련",
    "zh": "海滨晨光调息法（Pranayama）"
  },
  "Patanjali Sutras & Practical Philosophy": {
    "en": "Patanjali Sutras & Practical Philosophy",
    "id": "Sutra Patanjali & Filosofi Praktis",
    "de": "Patanjali Yoga-Sutras & Praktische Philosophie",
    "fr": "Yoga Sutras de Patanjali et philosophie pratique",
    "es": "Sutras de Patanjali y filosofía práctica",
    "it": "Yoga Sutra di Patanjali e filosofia pratica",
    "nl": "Patanjali Yoga Sutra's & praktische filosofie",
    "ru": "Йога-сутры Патанджали и практическая философия",
    "ja": "パタンジャリ・ヨーガ・スートラと実践哲学",
    "ko": "파탄잘리 요가 수트라 및 실천 철학",
    "zh": "帕坦伽利《瑜伽经》精读与实修哲学"
  },
  "Plant-Based Lunch": {
    "en": "Plant-Based Lunch",
    "id": "Makan Siang Berbasis Nabati",
    "de": "Pflanzliches Mittagessen",
    "fr": "Déjeuner à base de plantes",
    "es": "Almuerzo a base de plantas",
    "it": "Pranzo a base vegetale",
    "nl": "Plantaardige lunch",
    "ru": "Растительный обед",
    "ja": "プラントベース昼食",
    "ko": "플랜트 베이스 런치",
    "zh": "植物性健康午餐"
  },
  "Plant-Based Organic Lunch": {
    "en": "Plant-Based Organic Lunch",
    "id": "Makan Siang Organik Berbasis Nabati",
    "de": "Biologisches, pflanzliches Mittagessen",
    "fr": "Déjeuner biologique à base de plantes",
    "es": "Almuerzo orgánico a base de plantas",
    "it": "Pranzo biologico a base vegetale",
    "nl": "Biologische plantaardige lunch",
    "ru": "Органический растительный обед",
    "ja": "オーガニック・プラントベース昼食",
    "ko": "유기농 채식 런치",
    "zh": "有机纯素天然午餐"
  },
  "Pool Relaxation, Reading & Jungle Leisure": {
    "en": "Pool Relaxation, Reading & Jungle Leisure",
    "id": "Santai di Kolam Renang, Membaca & Menikmati Suasana Hutan",
    "de": "Entspannung am Pool, Lesen & Mußestunden im Dschungel",
    "fr": "Détente au bord de la piscine, lecture et loisirs dans la jungle",
    "es": "Relax en la piscina, lectura y descanso en la selva",
    "it": "Relax in piscina, lettura e tranquillità nella giungla",
    "nl": "Ontspanning aan het zwembad, lezen & genieten van de jungle",
    "ru": "Отдых у бассейна, чтение и наслаждение природой джунглей",
    "ja": "プールサイドでの休息、読書、ジャングルの静けさに浸る時間",
    "ko": "수영장 휴식, 독서 및 정글 힐링 타임",
    "zh": "池畔放松、静心阅读与漫游雨林悠闲时光"
  },
  "Pranayama & Chanting": {
    "en": "Pranayama & Chanting",
    "id": "Pranayama & Lantunan Mantra",
    "de": "Pranayama & Mantra-Chanten",
    "fr": "Pranayama et chants de mantras",
    "es": "Pranayama y canto de mantras",
    "it": "Pranayama e canti sacri",
    "nl": "Pranayama & zingen van mantra's",
    "ru": "Пранаяма и пение мантр",
    "ja": "プラーナヤーマ＆マントラ詠唱",
    "ko": "프라나야마 호흡 및 만트라 찬팅",
    "zh": "呼吸调息与梵音唱诵"
  },
  "Pranayama & Gentle Morning Practice": {
    "en": "Pranayama & Gentle Morning Practice",
    "id": "Pranayama & Latihan Pagi yang Lembut",
    "de": "Pranayama & sanfte Morgenpraxis",
    "fr": "Pranayama et pratique matinale douce",
    "es": "Pranayama y práctica suave matutina",
    "it": "Pranayama e dolce pratica mattutina",
    "nl": "Pranayama & zachte ochtendbeoefening",
    "ru": "Пранаяма и мягкая утренняя практика",
    "ja": "プラーナヤーマ＆優しい朝のヨーガ",
    "ko": "프라나야마 & 부드러운 아침 수련",
    "zh": "调息法与晨间温和瑜伽舒展"
  },
  "Pranayama & Gentle Stretch": {
    "en": "Pranayama & Gentle Stretch",
    "id": "Pranayama & Peregangan Lembut",
    "de": "Pranayama & sanftes Dehnen",
    "fr": "Pranayama et étirements doux",
    "es": "Pranayama y estiramientos suaves",
    "it": "Pranayama e stretching dolce",
    "nl": "Pranayama & zachte rekoefeningen",
    "ru": "Пранаяма и мягкая растяжка",
    "ja": "プラーナヤーマ＆ジェントルストレッチ",
    "ko": "프라나야마 및 부드러운 스트레칭",
    "zh": "呼吸调息与轻柔肢体伸展"
  },
  "Pranayama & Himalayan Dhyana": {
    "en": "Pranayama & Himalayan Dhyana",
    "id": "Pranayama & Meditasi Dhyana Himalaya",
    "de": "Pranayama & Himalaya Dhyana (Meditation)",
    "fr": "Pranayama et Dhyana himalayenne (méditation)",
    "es": "Pranayama y Dhyana del Himalaya (meditación)",
    "it": "Pranayama e Dhyana himalayana (meditazione)",
    "nl": "Pranayama & Dhyana-meditatie uit de Himalaya",
    "ru": "Пранаяма и гималайская дхьяна (медитация)",
    "ja": "プラーナヤーマ＆ヒマラヤ・ディヤーナ（瞑想）",
    "ko": "프라나야마 호흡 및 히말라야 디야나(Dhyana) 명상",
    "zh": "调息法与喜马拉雅禅定冥想（Dhyana）"
  },
  "Pranayama & Meditation": {
    "en": "Pranayama & Meditation",
    "id": "Pranayama & Meditasi",
    "de": "Pranayama & Meditation",
    "fr": "Pranayama et méditation",
    "es": "Pranayama y meditación",
    "it": "Pranayama e meditazione",
    "nl": "Pranayama & meditatie",
    "ru": "Пранаяма и медитация",
    "ja": "プラーナヤーマ＆瞑想",
    "ko": "프라나야마 및 명상",
    "zh": "调息法与静心冥想"
  },
  "Pranayama & Mindfulness Meditation": {
    "en": "Pranayama & Mindfulness Meditation",
    "id": "Pranayama & Meditasi Kesadaran Penuh (Mindfulness)",
    "de": "Pranayama & Achtsamkeitsmeditation",
    "fr": "Pranayama et méditation de pleine conscience",
    "es": "Pranayama y meditación de atención plena",
    "it": "Pranayama e meditazione di consapevolezza",
    "nl": "Pranayama & mindfulness meditatie",
    "ru": "Пранаяма и медитация осознанности",
    "ja": "プラーナヤーマ＆マインドフルネス瞑想",
    "ko": "프라나야마 및 마음챙김 명상",
    "zh": "调息法与正念冥想"
  },
  "Pranayama & Ocean Meditation": {
    "en": "Pranayama & Ocean Meditation",
    "id": "Pranayama & Meditasi Samudra",
    "de": "Pranayama & Ozean-Meditation",
    "fr": "Pranayama et méditation face à l'océan",
    "es": "Pranayama y meditación frente al mar",
    "it": "Pranayama e meditazione dell'oceano",
    "nl": "Pranayama & oceaanmeditatie",
    "ru": "Пранаяма и медитация у океана",
    "ja": "プラーナヤーマ＆オーシャン瞑想",
    "ko": "프라나야마 및 바다 소리 명상",
    "zh": "调息法与听涛海洋冥想"
  },
  "Pranayama Breathwork & Meditation": {
    "en": "Pranayama Breathwork & Meditation",
    "id": "Latihan Pernapasan Pranayama & Meditasi",
    "de": "Pranayama-Atemarbeit & Meditation",
    "fr": "Travail du souffle Pranayama et méditation",
    "es": "Trabajo de respiración Pranayama y meditación",
    "it": "Lavoro sul respiro Pranayama e meditazione",
    "nl": "Pranayama ademwerk & meditatie",
    "ru": "Дыхательные техники пранаямы и медитация",
    "ja": "プラーナヤーマ呼吸法＆瞑想",
    "ko": "프라나야마 호흡 수련 및 명상",
    "zh": "调息呼吸法与静心冥想"
  },
  "Pranayama Breathwork & Silent Meditation": {
    "en": "Pranayama Breathwork & Silent Meditation",
    "id": "Latihan Pernapasan Pranayama & Meditasi Hening",
    "de": "Pranayama-Atemarbeit & stille Meditation",
    "fr": "Pranayama et méditation silencieuse",
    "es": "Pranayama y meditación silenciosa",
    "it": "Pranayama e meditazione silenziosa",
    "nl": "Pranayama ademwerk & stille meditatie",
    "ru": "Дыхание пранаямы и безмолвная медитация",
    "ja": "プラーナヤーマ呼吸法＆サイレント瞑想",
    "ko": "프라나야마 호흡 & 묵언 명상",
    "zh": "调息呼吸法与默观冥想"
  },
  "Reiki Healing & Energy Balancing": {
    "en": "Reiki Healing & Energy Balancing",
    "id": "Penyembuhan Reiki & Keseimbangan Energi",
    "de": "Reiki-Heilung & energetischer Ausgleich",
    "fr": "Guérison par le Reiki et rééquilibrage énergétique",
    "es": "Sanación Reiki y equilibrio de energías",
    "it": "Guarigione Reiki ed equilibrio energetico",
    "nl": "Reiki-heling & energiebalancering",
    "ru": "Исцеление рейки и балансировка энергии",
    "ja": "レイキヒーリング＆エネルギーバランシング",
    "ko": "레이키 힐링 및 에너지 밸런싱",
    "zh": "灵气（Reiki）能量平衡疗愈"
  },
  "Reiki Healing & Energy Balancing Session": {
    "en": "Reiki Healing & Energy Balancing Session",
    "id": "Sesi Penyembuhan Reiki & Keseimbangan Energi",
    "de": "Reiki-Heilsitzung & Energieausgleich",
    "fr": "Séance de soins Reiki et équilibrage des énergies",
    "es": "Sesión de sanación Reiki y armonización energética",
    "it": "Seduta di guarigione Reiki e bilanciamento energetico",
    "nl": "Reiki-helingssessie & energiebalancering",
    "ru": "Сеанс исцеления рейки и гармонизации энергии",
    "ja": "レイキヒーリング＆エネルギー調和セッション",
    "ko": "레이키 에너지 밸런싱 힐링 세션",
    "zh": "灵气调和与能量平衡专场疗愈"
  },
  "Restorative Yin Yoga": {
    "en": "Restorative Yin Yoga",
    "id": "Yoga Yin Restoratif",
    "de": "Regeneratives Yin Yoga",
    "fr": "Yin Yoga régénérant",
    "es": "Yin Yoga restaurativo",
    "it": "Yin Yoga rigenerante",
    "nl": "Herstellende Yin Yoga",
    "ru": "Восстанавливающая инь-йога",
    "ja": "リストラティブ陰ヨガ",
    "ko": "회복을 돕는 리스토러티브 인 요가",
    "zh": "深度修复阴瑜伽"
  },
  "Restorative Yin Yoga & Yoga Nidra": {
    "en": "Restorative Yin Yoga & Yoga Nidra",
    "id": "Yoga Yin Restoratif & Yoga Nidra",
    "de": "Regeneratives Yin Yoga & Yoga Nidra",
    "fr": "Yin Yoga restauratif et Yoga Nidra",
    "es": "Yin Yoga restaurativo y Yoga Nidra",
    "it": "Yin Yoga ristorativo e Yoga Nidra",
    "nl": "Herstellende Yin Yoga & Yoga Nidra",
    "ru": "Восстанавливающая инь-йога и йога-нидра",
    "ja": "リストラティブ陰ヨガ＆ヨガニードラ",
    "ko": "리스토러티브 인 요가 & 요가 니드라 수련",
    "zh": "修复性阴瑜伽与瑜伽深眠（Yoga Nidra）"
  },
  "Sacred Melukat Water Purification Temple Tour": {
    "en": "Sacred Melukat Water Purification Temple Tour",
    "id": "Tur Kuil Pembersihan Air Suci Melukat Tradisional",
    "de": "Heilige balinesische Wasserreinigungs-Tempeltour (Melukat)",
    "fr": "Excursion au temple sacré pour la purification par l'eau (Melukat)",
    "es": "Visita al templo sagrado para la purificación con agua Melukat",
    "it": "Tour al tempio sacro per la purificazione con l'acqua Melukat",
    "nl": "Heilige Melukat waterzuiveringstocht naar de tempel",
    "ru": "Паломничество в храм для священного водного очищения Мелукат",
    "ja": "聖なるムルカット（沐浴浄化）寺院ツアー",
    "ko": "신성한 멜루캇(Melukat) 성수 정화 사원 투어",
    "zh": "神圣Melukat水疗洗礼古寺净化之旅"
  },
  "Sacred Melukat Water Purification Temple Tour (Tirta Empul)": {
    "en": "Sacred Melukat Water Purification Temple Tour (Tirta Empul)",
    "id": "Tur Kuil Tirta Empul Pembersihan Air Suci Melukat",
    "de": "Heilige Wasserreinigungs-Tempeltour Tirta Empul (Melukat)",
    "fr": "Tour au temple de Tirta Empul pour la purification sacrée Melukat",
    "es": "Visita sagrada al templo Tirta Empul para purificación Melukat",
    "it": "Tour al tempio sacro di Tirta Empul per la purificazione Melukat",
    "nl": "Heilige waterzuiveringstour bij Tirta Empul tempel (Melukat)",
    "ru": "Священное водное очищение Мелукат в храме Тирта Эмпул",
    "ja": "ティルタ・エンプル寺院での聖なるムルカット（沐浴浄化）ツアー",
    "ko": "티르타 엠풀(Tirta Empul) 성수 정화 멜루캇 사원 투어",
    "zh": "圣泉寺（Tirta Empul）神圣水疗净化洗礼朝圣之旅"
  },
  "Sattvic Coastal Lunch": {
    "en": "Sattvic Coastal Lunch",
    "id": "Makan Siang Sattvic Pesisir",
    "de": "Sattvisches Küsten-Mittagessen",
    "fr": "Déjeuner sattvique côtier",
    "es": "Almuerzo sátvico costero",
    "it": "Pranzo sattvico costiero",
    "nl": "Sattvische kustlunch",
    "ru": "Саттвический прибрежный обед",
    "ja": "沿岸の恵みを取り入れたサットヴァ昼食",
    "ko": "해안가 사트빅 힐링 런치",
    "zh": "海滨纯净悦性午餐"
  },
  "Sattvic Lunch & Rest": {
    "en": "Sattvic Lunch & Rest",
    "id": "Makan Siang Sattvic & Istirahat",
    "de": "Sattvisches Mittagessen & Ruhepause",
    "fr": "Déjeuner sattvique et repos",
    "es": "Almuerzo sátvico y descanso",
    "it": "Pranzo sattvico e riposo",
    "nl": "Sattvische lunch & rust",
    "ru": "Саттвический обед и отдых",
    "ja": "サットヴァ昼食＆休憩",
    "ko": "사트빅 중식 및 휴식",
    "zh": "悦性午餐与午间静养"
  },
  "Sattvic Lunch & Self-Study": {
    "en": "Sattvic Lunch & Self-Study",
    "id": "Makan Siang Sattvic & Belajar Mandiri (Svadhyaya)",
    "de": "Sattvisches Mittagessen & Selbststudium (Svadhyaya)",
    "fr": "Déjeuner sattvique et étude personnelle (Svadhyaya)",
    "es": "Almuerzo sátvico y autoestudio (Svadhyaya)",
    "it": "Pranzo sattvico e studio personale (Svadhyaya)",
    "nl": "Sattvische lunch & zelfstudie (Svadhyaya)",
    "ru": "Саттвический обед и самостоятельное обучение (свадхьяя)",
    "ja": "サットヴァ昼食＆自習（スヴァディヤーヤ）",
    "ko": "사트빅 중식 및 자율 학습(스와디야야)",
    "zh": "悦性午餐与研习内省（Svadhyaya）"
  },
  "Shatkarma & Cleansing Kriyas": {
    "en": "Shatkarma & Cleansing Kriyas",
    "id": "Shatkarma & Kriya Pembersihan Tubuh",
    "de": "Shatkarma & Reinigungs-Kriyas",
    "fr": "Shatkarma et kriyas de purification",
    "es": "Shatkarma y kriyas de purificación",
    "it": "Shatkarma e kriya di purificazione",
    "nl": "Shatkarma & reinigende kriya's",
    "ru": "Шаткарма и очистительные крии",
    "ja": "シャットカルマ＆体内浄化クリヤ法",
    "ko": "샤트카르마 및 체내 정화 크리야 수련",
    "zh": "六正净法（Shatkarma）与身心排毒洁净功法"
  },
  "Shatkarma & Jal Neti Cleansing": {
    "en": "Shatkarma & Jal Neti Cleansing",
    "id": "Shatkarma & Pembersihan Saluran Hidung (Jal Neti)",
    "de": "Shatkarma & Jal Neti Nasenreinigung",
    "fr": "Shatkarma et purification nasale Jal Neti",
    "es": "Shatkarma y limpieza nasal Jal Neti",
    "it": "Shatkarma e purificazione nasale Jal Neti",
    "nl": "Shatkarma & Jal Neti neusreiniging",
    "ru": "Шаткарма и очищение носоглотки джала-нети",
    "ja": "シャットカルマ＆ジャラ・ネティ（鼻洗浄）実習",
    "ko": "샤트카르마 및 잘네티(Jal Neti) 비강 정화법",
    "zh": "六净法与传统温盐水洗鼻法（Jal Neti）"
  },
  "Sound Healing & Breath Alignment Session": {
    "en": "Sound Healing & Breath Alignment Session",
    "id": "Sesi Terapi Suara & Penyelarasan Napas",
    "de": "Klangheilung & Atem-Harmonisierung",
    "fr": "Séance de sonothérapie et alignement du souffle",
    "es": "Sesión de sanación sonora y alineación de la respiración",
    "it": "Seduta di bagno di suoni e armonizzazione del respiro",
    "nl": "Klankheling & ademhalingsafstemming",
    "ru": "Звукотерапия и гармонизация дыхания",
    "ja": "サウンドヒーリング＆ブレスアライメント（呼吸調和）セッション",
    "ko": "사운드 힐링 및 호흡 정렬 세션",
    "zh": "声音疗愈与呼吸律动调谐专场"
  },
  "Sound Healing & Tibetan Singing Bowls Session": {
    "en": "Sound Healing & Tibetan Singing Bowls Session",
    "id": "Sesi Terapi Suara Mangkuk Tibet (Tibetan Singing Bowls)",
    "de": "Klangheilung mit tibetischen Klangschalen",
    "fr": "Thérapie sonore aux bols tibétains chantants",
    "es": "Sesión de cuencos tibetanos y sanación con sonido",
    "it": "Bagno di suoni con campane tibetane",
    "nl": "Klankhelingssessie met Tibetaanse klankschalen",
    "ru": "Звукотерапия с тибетскими поющими чашами",
    "ja": "チベット・シンギングボウルによるサウンドヒーリング",
    "ko": "티베트 싱잉볼 사운드 힐링 세션",
    "zh": "西藏颂钵深层共振音疗专场"
  },
  "Sound Healing Session": {
    "en": "Sound Healing Session",
    "id": "Sesi Terapi Suara (Sound Healing)",
    "de": "Klangheilungssitzung",
    "fr": "Séance de sonothérapie",
    "es": "Sesión de sanación con sonido",
    "it": "Seduta di guarigione con i suoni",
    "nl": "Klankhelingssessie",
    "ru": "Сеанс звуковой терапии",
    "ja": "サウンドヒーリングセッション",
    "ko": "사운드 힐링 세션",
    "zh": "深层颂钵声音疗愈专场"
  },
  "Sound Healing Session (Tibetan Singing Bowls)": {
    "en": "Sound Healing Session (Tibetan Singing Bowls)",
    "id": "Sesi Terapi Suara (Mangkuk Bernyanyi Tibet)",
    "de": "Klangheilung mit tibetischen Klangschalen",
    "fr": "Séance de sonothérapie (bols tibétains)",
    "es": "Sesión de sanación con sonido (cuencos tibetanos)",
    "it": "Sessione di campane tibetane",
    "nl": "Klankhelingssessie (Tibetaanse klankschalen)",
    "ru": "Сеанс звуковой терапии (тибетские поющие чаши)",
    "ja": "サウンドヒーリング（チベット・シンギングボウル）",
    "ko": "사운드 힐링 세션 (티베트 싱잉볼)",
    "zh": "西藏颂钵沉浸式声音疗愈"
  },
  "Special Feast Dinner": {
    "en": "Special Feast Dinner",
    "id": "Makan Malam Pesta Istimewa",
    "de": "Festliches Abendessen",
    "fr": "Dîner festif d'exception",
    "es": "Cena festiva especial",
    "it": "Cena speciale di festa",
    "nl": "Speciaal feestelijk diner",
    "ru": "Особый праздничный ужин",
    "ja": "特製祝宴ディナー",
    "ko": "특별 축하 만찬",
    "zh": "特色盛宴美馔晚宴"
  },
  "Sunrise Breathwork & Japa Meditation": {
    "en": "Sunrise Breathwork & Japa Meditation",
    "id": "Latihan Pernapasan Fajar & Meditasi Japa",
    "de": "Atemarbeit zum Sonnenaufgang & Japa-Meditation",
    "fr": "Respiration au lever du soleil et méditation Japa",
    "es": "Respiración al amanecer y meditación Japa",
    "it": "Respirazione all'alba e meditazione Japa",
    "nl": "Ademwerk bij zonsopgang & Japa-meditatie",
    "ru": "Дыхание на рассвете и джапа-медитация с четками",
    "ja": "日の出の呼吸法＆ジャパ瞑想（数珠を用いたマントラ瞑想）",
    "ko": "일출 호흡 수련 및 자파(Japa) 명상",
    "zh": "晨曦调息与持珠念诵冥想（Japa）"
  },
  "Sunset Riverbank Meditation & Asana": {
    "en": "Sunset Riverbank Meditation & Asana",
    "id": "Meditasi di Tepi Sungai Saat Matahari Terbenam & Asana",
    "de": "Meditation & Asana am Flussufer zum Sonnenuntergang",
    "fr": "Méditation au bord du fleuve au coucher du soleil et asanas",
    "es": "Meditación y asanas en la orilla del río al atardecer",
    "it": "Meditazione ed asana in riva al fiume al tramonto",
    "nl": "Meditatie & asana's aan de rivier bij zonsondergang",
    "ru": "Медитация и асаны на закате на берегу священной реки",
    "ja": "夕暮れの聖なる川辺での瞑想＆アーサナ実技",
    "ko": "선셋 강변 명상 및 아사나 수련",
    "zh": "圣河畔日落静心冥想与体式研练"
  },
  "Sunset Welcome Meditation & Gentle Stretch": {
    "en": "Sunset Welcome Meditation & Gentle Stretch",
    "id": "Meditasi Selamat Datang Saat Senja & Peregangan Lembut",
    "de": "Willkommensmeditation zum Sonnenuntergang & sanftes Dehnen",
    "fr": "Méditation de bienvenue au coucher du soleil et étirements doux",
    "es": "Meditación de bienvenida al atardecer y estiramientos suaves",
    "it": "Meditazione di benvenuto al tramonto e dolce stretching",
    "nl": "Welkomstmeditatie bij zonsondergang & zachte stretching",
    "ru": "Приветственная медитация на закате и мягкая растяжка",
    "ja": "夕暮れのウェルカム瞑想＆優しいストレッチ",
    "ko": "선셋 웰컴 명상 및 부드러운 전신 스트레칭",
    "zh": "日落迎宾冥想与柔和全身拉伸"
  },
  "Sunset Yin & Yoga Nidra": {
    "en": "Sunset Yin & Yoga Nidra",
    "id": "Yin Yoga Saat Senja & Yoga Nidra",
    "de": "Yin Yoga & Yoga Nidra zum Sonnenuntergang",
    "fr": "Yin Yoga au coucher du soleil et Yoga Nidra",
    "es": "Yin Yoga al atardecer y Yoga Nidra",
    "it": "Yin Yoga al tramonto e Yoga Nidra",
    "nl": "Yin Yoga & Yoga Nidra bij zonsondergang",
    "ru": "Инь-йога на закате и йога-нидра",
    "ja": "夕暮れの陰ヨガ＆ヨガニードラ",
    "ko": "선셋 인 요가 & 요가 니드라 수련",
    "zh": "日落阴瑜伽与瑜伽深眠（Yoga Nidra）"
  },
  "Sunset Yin Yoga & Sound Waves": {
    "en": "Sunset Yin Yoga & Sound Waves",
    "id": "Yin Yoga Saat Senja & Gelombang Suara Terapi",
    "de": "Yin Yoga & Klangwellen zum Sonnenuntergang",
    "fr": "Yin Yoga au coucher du soleil et vibrations sonores",
    "es": "Yin Yoga al atardecer y ondas sonoras curativas",
    "it": "Yin Yoga al tramonto e onde sonore rigeneranti",
    "nl": "Yin Yoga & klankgolven bij zonsondergang",
    "ru": "Инь-йога на закате в сопровождении звуковых вибраций",
    "ja": "夕暮れの陰ヨガ＆サウンドウェーブ（音響共鳴）",
    "ko": "선셋 인 요가 및 힐링 사운드 웨이브",
    "zh": "日落阴瑜伽与疗愈声波共振"
  },
  "Sunset Yin Yoga / Yoga Nidra / Candlelight Kirtan": {
    "en": "Sunset Yin Yoga / Yoga Nidra / Candlelight Kirtan",
    "id": "Yin Yoga Saat Senja / Yoga Nidra / Kirtan Cahaya Lilin",
    "de": "Yin Yoga zum Sonnenuntergang / Yoga Nidra / Kirtan bei Kerzenschein",
    "fr": "Yin Yoga au coucher du soleil / Yoga Nidra / Kirtan aux chandelles",
    "es": "Yin Yoga al atardecer / Yoga Nidra / Kirtan a la luz de las velas",
    "it": "Yin Yoga al tramonto / Yoga Nidra / Kirtan a lume di candela",
    "nl": "Yin Yoga bij zonsondergang / Yoga Nidra / Kirtan bij kaarslicht",
    "ru": "Инь-йога на закате / йога-нидра / киртан при свечах",
    "ja": "夕暮れの陰ヨガ／ヨガニードラ／キャンドルライト・キールタン",
    "ko": "선셋 인 요가 / 요가 니드라 / 캔들라이트 키르탄",
    "zh": "日落阴瑜伽 / 瑜伽深眠 / 烛光吉尔坦梵唱"
  },
  "Traditional Kerala Lunch": {
    "en": "Traditional Kerala Lunch",
    "id": "Makan Siang Tradisional Kerala",
    "de": "Traditionelles Mittagessen aus Kerala",
    "fr": "Déjeuner traditionnel du Kerala",
    "es": "Almuerzo tradicional de Kerala",
    "it": "Pranzo tradizionale del Kerala",
    "nl": "Traditionele Kerala lunch",
    "ru": "Традиционный керальский обед",
    "ja": "伝統的なケーララ料理のランチ",
    "ko": "전통 케랄라 스타일 중식",
    "zh": "喀拉拉邦传统风味午宴"
  },
  "Wake Up & Herbal Tea": {
    "en": "Wake Up & Herbal Tea",
    "id": "Bangun Tidur & Teh Herbal Segar",
    "de": "Aufwachen & ayurvedischer Kräutertee",
    "fr": "Réveil et infusion aux plantes",
    "es": "Despertar y té de hierbas reconfortante",
    "it": "Risveglio e tisana alle erbe",
    "nl": "Ontwaken & kruidenthee",
    "ru": "Пробуждение и травяной чай",
    "ja": "起床＆温かいハーブティー",
    "ko": "기상 및 따뜻한 허브티",
    "zh": "晨起唤醒与天然草本养生茶"
  },
  "Welcome Circle & Twilight Gentle Stretch": {
    "en": "Welcome Circle & Twilight Gentle Stretch",
    "id": "Lingkaran Sambutan & Peregangan Lembut di Waktu Senja",
    "de": "Willkommenskreis & sanftes Dehnen in der Abenddämmerung",
    "fr": "Cercle de bienvenue et doux étirements au crépuscule",
    "es": "Círculo de bienvenida y estiramientos suaves al anochecer",
    "it": "Cerchio di benvenuto e stretching dolce al crepuscolo",
    "nl": "Welkomstkring & zachte stretching in de avondschemering",
    "ru": "Круг приветствия и мягкая растяжка в сумерках",
    "ja": "ウェルカムサークル＆夕暮れの優しいストレッチ",
    "ko": "웰컴 서클 및 황혼녘의 부드러운 스트레칭",
    "zh": "破冰迎新分享圈与暮色轻柔舒展"
  },
  "Wholesome Ayurvedic Breakfast": {
    "en": "Wholesome Ayurvedic Breakfast",
    "id": "Sarapan Bergizi Sehat Khas Ayurveda",
    "de": "Gesundes ayurvedisches Frühstück",
    "fr": "Petit-déjeuner ayurvédique sain et complet",
    "es": "Desayuno ayurvédico sano y completo",
    "it": "Colazione ayurvedica sana e completa",
    "nl": "Volwaardig Ayurvedisch ontbijt",
    "ru": "Полноценный аюрведический завтрак",
    "ja": "健やかなアーユルヴェーダ朝食",
    "ko": "정갈한 아유르베다 치유 조식",
    "zh": "营养阿育吠陀全维健康早餐"
  },
  "Wholesome Community Dinner": {
    "en": "Wholesome Community Dinner",
    "id": "Makan Malam Bersama Komunitas yang Sehat",
    "de": "Gesundes gemeinsames Abendessen",
    "fr": "Dîner communautaire convivial et sain",
    "es": "Cena comunitaria saludable y nutritiva",
    "it": "Cena comunitaria sana e conviviale",
    "nl": "Gezellig en gezond gezamenlijk diner",
    "ru": "Здоровый ужин в теплой атмосфере сообщества",
    "ja": "温かいコミュニティディナー",
    "ko": "건강한 커뮤니티 만찬",
    "zh": "温暖融洽的同修社群健康晚餐"
  },
  "Wholesome Dinner": {
    "en": "Wholesome Dinner",
    "id": "Makan Malam Sehat Bergizi",
    "de": "Gesundes Abendessen",
    "fr": "Dîner sain et complet",
    "es": "Cena sana y equilibrada",
    "it": "Cena sana e completa",
    "nl": "Volwaardig diner",
    "ru": "Полноценный здоровый ужин",
    "ja": "身体に優しい健康ディナー",
    "ko": "건강한 저녁 식사",
    "zh": "天然健康晚餐"
  },
  "Wholesome Sattvic Dinner": {
    "en": "Wholesome Sattvic Dinner",
    "id": "Makan Malam Sattvic yang Menyehatkan",
    "de": "Gesundes sattvisches Abendessen",
    "fr": "Dîner sattvique équilibré et sain",
    "es": "Cena sátvica sana y completa",
    "it": "Cena sattvica salutare e nutriente",
    "nl": "Gezond sattvisch diner",
    "ru": "Полноценный саттвический ужин",
    "ja": "心身を清めるサットヴァ夕食",
    "ko": "정갈하고 건강한 사트빅 디너",
    "zh": "纯净悦性素食营养晚餐"
  },
  "Wholesome Vegetarian / Vegan Dinner": {
    "en": "Wholesome Vegetarian / Vegan Dinner",
    "id": "Makan Malam Sehat Vegetarian / Vegan",
    "de": "Gesundes vegetarisches / veganes Abendessen",
    "fr": "Dîner végétarien / végétalien sain et complet",
    "es": "Cena vegetariana / vegana sana y equilibrada",
    "it": "Cena vegetariana / vegana sana e completa",
    "nl": "Gezond vegetarisch / veganistisch diner",
    "ru": "Полноценный вегетарианский / веганский ужин",
    "ja": "身体を整えるベジタリアン／ヴィーガンディナー",
    "ko": "건강한 채식 / 비건 디너",
    "zh": "全生态素食 / 纯素营养晚宴"
  },
  "Yoga Philosophy & Bhagavad Gita Insights": {
    "en": "Yoga Philosophy & Bhagavad Gita Insights",
    "id": "Filosofi Yoga & Wawasan Bhagavad Gita",
    "de": "Yoga-Philosophie & Einsichten aus der Bhagavad Gita",
    "fr": "Philosophie du yoga et enseignements de la Bhagavad Gita",
    "es": "Filosofía del yoga y enseñanzas del Bhagavad Gita",
    "it": "Filosofia dello yoga e insegnamenti della Bhagavad Gita",
    "nl": "Yogafilosofie & inzichten uit de Bhagavad Gita",
    "ru": "Философия йоги и мудрость Бхагавад-гиты",
    "ja": "ヨーガ哲学＆バガヴァッド・ギーターの深奥",
    "ko": "요가 철학 및 바가바드 기타의 지혜",
    "zh": "瑜伽经典哲学与《薄伽梵歌》智慧精解"
  },
  "Yogic Philosophy & Self-Inquiry": {
    "en": "Yogic Philosophy & Self-Inquiry",
    "id": "Filosofi Yoga & Penyelidikan Diri (Self-Inquiry)",
    "de": "Yogische Philosophie & Selbstergründung (Self-Inquiry)",
    "fr": "Philosophie yogique et introspection (Self-Inquiry)",
    "es": "Filosofía yóguica e indagación interior (Self-Inquiry)",
    "it": "Filosofia yogica e auto-indagine (Self-Inquiry)",
    "nl": "Yogische filosofie & zelfonderzoek",
    "ru": "Йогическая философия и практика самоисследования",
    "ja": "ヨーガ哲学＆自己探求（セルフ・インクワイアリー）",
    "ko": "요가 철학 및 자아 탐구(Self-Inquiry)",
    "zh": "瑜伽传统哲学与内在自我探究（Self-Inquiry）"
  }
};

export function getLocalizedScheduleActivity(activity: string, locale: string): string {
  const map = SCHEDULE_ACTIVITIES_I18N[activity];
  if (!map) return activity;
  return map[locale] || map['en'] || activity;
}
