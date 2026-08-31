export interface RetreatScheduleItem {
  time: string;
  activity: string;
  description: string;
}

export interface RetreatPackage {
  slug: string;
  durationKey: '3-days' | '7-days' | '14-days';
  locationKey: 'bali' | 'rishikesh' | 'warkala';
  locationName: string;
  locationStateOrCountry: string;
  durationDays: number;
  durationNights: number;
  title: string;
  tagline: string;
  badge: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  priceShared: string;
  pricePrivate: string;
  earlyBirdSaving: string;
  overview: string[];
  highlights: string[];
  schedule: RetreatScheduleItem[];
  included: string[];
  notIncluded: string[];
  accommodation: {
    title: string;
    description: string;
    features: string[];
  };
  meals: {
    title: string;
    description: string;
    types: string[];
  };
  faqs: { question: string; answer: string }[];
}

export interface LocationInfo {
  key: 'bali' | 'rishikesh' | 'warkala';
  name: string;
  fullName: string;
  country: string;
  heroSubtitle: string;
  description: string;
  vibe: string;
  bestTimeToVisit: string;
  nearestAirport: string;
}

export const RETREAT_LOCATIONS: Record<'bali' | 'rishikesh' | 'warkala', LocationInfo> = {
  bali: {
    key: 'bali',
    name: 'Bali',
    fullName: 'Ubud, Bali, Indonesia',
    country: 'Indonesia',
    heroSubtitle: 'Island of the Gods & Lush Tropical Serenity',
    description: 'Immerse in tropical rainforests, soothing rice paddies, and sacred water temple energy in Gianyar / Ubud, Bali.',
    vibe: 'Tranquil, tropical, artistic, and deeply rejuvenating.',
    bestTimeToVisit: 'Year-round tropical climate with balmy breezes.',
    nearestAirport: 'Ngurah Rai International Airport (DPS), Denpasar',
  },
  rishikesh: {
    key: 'rishikesh',
    name: 'Rishikesh',
    fullName: 'Tapovan, Rishikesh, Uttarakhand, India',
    country: 'India',
    heroSubtitle: 'World Yoga Capital & Holy Ganges River Energy',
    description: 'Breathe pure Himalayan mountain air on the serene banks of the sacred Ganges River where yogis have meditated for centuries.',
    vibe: 'Spiritual, grounded, ancient, and deeply transformational.',
    bestTimeToVisit: 'September through April for pleasant mountain breezes.',
    nearestAirport: 'Dehradun Airport (DED) / Indira Gandhi Intl Airport (DEL)',
  },
  warkala: {
    key: 'warkala',
    name: 'Warkala',
    fullName: 'Warkala Beach & Cliff, Kerala, India',
    country: 'India',
    heroSubtitle: 'Red Cliffs, Arabian Sea Breeze & Authentic Ayurveda',
    description: 'Experience dramatic laterite cliffs overlooking pristine Arabian Sea beaches coupled with authentic Kerala Ayurveda healing therapies.',
    vibe: 'Coastal, restorative, Ayurvedic, and deeply tranquil.',
    bestTimeToVisit: 'October through March for radiant sunshine and ocean breezes.',
    nearestAirport: 'Trivandrum International Airport (TRV)',
  },
};

export const RETREATS_DATA: Record<string, RetreatPackage> = {
  // ==================== BALI ====================
  'bali-3-days': {
    slug: '3-days',
    durationKey: '3-days',
    locationKey: 'bali',
    locationName: 'Bali',
    locationStateOrCountry: 'Indonesia',
    durationDays: 3,
    durationNights: 2,
    title: '3 Day Weekend Yoga & Nature Retreat in Bali',
    tagline: 'A revitalizing weekend escape amidst Ubud’s tropical jungles and sacred water springs.',
    badge: 'Quick Reset',
    seoTitle: '3 Day Bali Yoga Retreat | Weekend Wellness Escape Ubud | YogaGarhi',
    seoDescription: 'Recharge your mind and body with our 3 Day Yoga Retreat in Ubud, Bali. Enjoy daily Hatha/Vinyasa yoga, sound healing, organic Sattvic meals, and lush nature.',
    keywords: ['3 day yoga retreat bali', 'weekend yoga retreat ubud', 'short wellness retreat bali', 'ubud yoga escape', 'yoga retreat bali 3 days'],
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Yoga practice surrounded by Bali tropical nature',
    priceShared: '$350',
    pricePrivate: '$480',
    earlyBirdSaving: '$50',
    overview: [
      'Need a quick, powerful pause from daily hustle? Our 3-day Ubud weekend retreat is carefully tailored to release physical tension, quiet mental noise, and recharge your vitality in a serene sanctuary surrounded by rainforests and birdsong.',
      'Enjoy morning revitalizing yoga, afternoon grounding pranayama, Balinese sound bath meditation, and wholesome farm-to-table Sattvic cuisine designed to bring you into deep harmony within a short getaway.'
    ],
    highlights: [
      'Twice daily yoga sessions: Energizing morning Vinyasa & calming evening Yin/Hatha',
      'Daily guided pranayama breathwork and Himalayan meditation',
      'One complimentary 60-minute traditional Balinese massage',
      'Authentic Balinese Agnihotra fire blessing or sacred sound bath',
      '2 nights luxury stay in a boutique resort surrounded by nature',
      'Delicious organic vegan & vegetarian meals, detox smoothies, and herbal teas'
    ],
    schedule: [
      { time: '06:30 AM', activity: 'Morning Herbal Tea & Awakening', description: 'Fresh ginger-lemongrass tea with sunrise view.' },
      { time: '07:00 AM', activity: 'Morning Flow Yoga & Breathwork', description: 'Gentle somatic warm-up followed by uplifting Vinyasa.' },
      { time: '08:45 AM', activity: 'Nourishing Sattvic Breakfast', description: 'Tropical smoothie bowls, exotic fruits, and wholesome proteins.' },
      { time: '10:30 AM', activity: 'Mindfulness / Sound Healing Workshop', description: 'Tibetan singing bowls and guided deep sensory relaxation.' },
      { time: '01:00 PM', activity: 'Wholesome Organic Lunch', description: 'Fresh Balinese-inspired farm-to-table cuisine.' },
      { time: '02:30 PM', activity: 'Spa & Rest Time', description: 'Balinese massage session or relaxing by the infinity pool.' },
      { time: '05:00 PM', activity: 'Restorative Yin Yoga & Nidra', description: 'Deep muscle release and guided sleep meditation.' },
      { time: '07:00 PM', activity: 'Community Dinner & Circle', description: 'Warm evening meal and relaxing fireside chat.' }
    ],
    included: [
      '2 Nights accommodation in luxury garden or pool villa',
      '3 Daily healthy, nourishing vegan/vegetarian meals',
      'All daily yoga, pranayama, and meditation sessions',
      '1x 60-minute traditional Balinese massage',
      'Unlimited herbal teas, purified water, and fresh fruit',
      'Access to yoga props (mats, blocks, straps, bolsters)',
      'High-speed Wi-Fi and swimming pool access'
    ],
    notIncluded: [
      'Flight tickets to/from Denpasar Bali (DPS)',
      'Airport transfers (can be arranged on request for $30)',
      'Personal expenses and additional spa treatments'
    ],
    accommodation: {
      title: 'Serene Nature’s Escape Resort, Ubud',
      description: 'Sleep in comfortable, eco-luxe villas featuring private balconies overlooking lush tropical ravines, ensuite bathrooms, air conditioning, and plush bedding.',
      features: ['Air Conditioning & Ceiling Fan', 'Ensuite semi-open Balinese bathroom', 'Swimming pool amidst rainforest', 'Daily housekeeping & fresh linens']
    },
    meals: {
      title: 'Wholesome Farm-to-Table Nutrition',
      description: 'Every dish is lovingly crafted with organic ingredients sourced from local volcanic soil farms to balance digestion and awaken your energy.',
      types: ['100% Vegetarian & Vegan Options', 'Gluten-Free & Dairy-Free friendly', 'Herbal teas, fresh coconut water & tonics']
    },
    faqs: [
      { question: 'Is this retreat suitable for beginners?', answer: 'Yes! All classes provide beginner-friendly modifications and props so you can practice comfortably at your own pace.' },
      { question: 'Can I extend my stay after 3 days?', answer: 'Subject to room availability, you can easily extend into a 7-day retreat or book extra nights.' }
    ]
  },

  'bali-7-days': {
    slug: '7-days',
    durationKey: '7-days',
    locationKey: 'bali',
    locationName: 'Bali',
    locationStateOrCountry: 'Indonesia',
    durationDays: 7,
    durationNights: 6,
    title: '7 Day Rejuvenating Yoga & Holistic Wellness Retreat in Bali',
    tagline: 'A week of complete mind, body, and soul renewal in the spiritual heart of Ubud, Bali.',
    badge: 'Most Popular',
    seoTitle: '7 Day Bali Yoga Retreat | Rejuvenating Wellness in Ubud | YogaGarhi',
    seoDescription: 'Transform your energy with our 7 Day Yoga Retreat in Ubud, Bali. Experience daily multi-style yoga, Tirta Empul water blessing, Balinese massages, and Sattvic dining.',
    keywords: ['7 day yoga retreat bali', '1 week yoga retreat ubud', 'wellness holiday bali', 'best yoga retreat bali', 'bali yoga rejuvenation'],
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Woman meditating at sunrise in Bali retreat center',
    priceShared: '$750',
    pricePrivate: '$990',
    earlyBirdSaving: '$100',
    overview: [
      'Our 7-day signature retreat in Bali is an invitation to pause, breathe deeply, and reconnect with your inner light. Designed around the five elements (Pancha Mahabhuta), this week-long journey gently melts stress, boosts flexibility, and revitalizes your nervous system.',
      'From authentic Himalayan pranayama and daily multi-style asana classes to visiting the sacred Tirta Empul water temple for holy purification, you will experience the genuine spiritual essence of Bali.'
    ],
    highlights: [
      'Daily morning Hatha/Vinyasa and evening Yin/Restorative yoga',
      'Sacred Melukat Water Purification ceremony at an ancient temple',
      'Sound healing & Tibetan singing bowl immersion in a bamboo shala',
      '2x Rejuvenating Balinese spa treatments included',
      'Excursion to scenic Tegalalang rice terraces and hidden waterfalls',
      '6 nights accommodation in premium tropical villas with infinity pool',
      'All organic, chef-curated Sattvic vegetarian and vegan meals'
    ],
    schedule: [
      { time: '06:30 AM', activity: 'Pranayama & Himalayan Meditation', description: 'Breath of life (Nadi Shodhana, Kapalabhati) and inner stillness.' },
      { time: '07:30 AM', activity: 'Energizing Morning Asana Practice', description: 'Dynamic Vinyasa Flow integrating alignment and breath.' },
      { time: '09:15 AM', activity: 'Abundant Tropical Breakfast', description: 'Freshly cut fruits, chia pudding, fresh juices, and warm entrees.' },
      { time: '11:00 AM', activity: 'Yogic Philosophy / Chakra Workshop', description: 'Practical wisdom for stress-free living and emotional balance.' },
      { time: '01:00 PM', activity: 'Sattvic Lunch & Leisure', description: 'Delicious, nourishing dishes followed by pool time or massage.' },
      { time: '04:30 PM', activity: 'Gentle Hatha & Somatic Release', description: 'Deep tissue stretching, fascial release, and yoga therapy.' },
      { time: '06:00 PM', activity: 'Sunset Meditation or Kirtan Chanting', description: 'Heart-opening devotional singing or silent twilight sitting.' },
      { time: '07:30 PM', activity: 'Candlelight Dinner', description: 'Nutritious gourmet cuisine with international retreat companions.' }
    ],
    included: [
      '6 Nights accommodation in luxury garden or pool villa',
      '3 Nutritious organic meals daily + healthy snacks & juices',
      'All daily yoga, breathwork, and guided meditation classes',
      'Sacred Tirta Empul Water Blessing temple excursion',
      '2x 60-minute Balinese oil massages',
      'Airport pickup from Denpasar (DPS) Airport',
      'Full retreat welcome kit, yoga mat, and journal'
    ],
    notIncluded: [
      'International flight tickets',
      'Airport drop-off (can be easily organized for $30)',
      'Travel insurance and personal shopping'
    ],
    accommodation: {
      title: 'Luxury Eco-Villas in Gianyar / Ubud',
      description: 'Nestled beside flowing jungle streams, our rooms offer natural wood furnishings, private verandas, silent air conditioning, and serene garden views.',
      features: ['Private or shared luxury options', 'Organic cotton bedding', 'Balinese outdoor rain shower', 'Infinity swimming pool looking out to jungle']
    },
    meals: {
      title: 'Conscious Culinary Experience',
      description: 'Clean, anti-inflammatory, vitality-enhancing cuisine prepared with fresh herbs, cold-pressed oils, and vibrant seasonal vegetables.',
      types: ['Ayurvedic & Sattvic principles', '100% Vegetarian with extensive Vegan & GF dishes', 'Daily fresh young coconuts & detox elixirs']
    },
    faqs: [
      { question: 'What is the Melukat Water Ceremony?', answer: 'Melukat is a sacred Balinese purification ritual performed by a traditional priest at holy natural springs to cleanse negative energy and renew clarity.' },
      { question: 'Are solo travelers common on this retreat?', answer: 'Over 80% of our retreat guests travel solo. You will find a warm, inclusive, and heartfelt community here.' }
    ]
  },

  'bali-14-days': {
    slug: '14-days',
    durationKey: '14-days',
    locationKey: 'bali',
    locationName: 'Bali',
    locationStateOrCountry: 'Indonesia',
    durationDays: 14,
    durationNights: 13,
    title: '14 Day Deep Healing & Mind-Body Transformation Retreat in Bali',
    tagline: 'An immersive two-week life transformation combining ancient yogic sadhana, holistic cleansing, and Balinese mysticism.',
    badge: 'Deep Immersion',
    seoTitle: '14 Day Bali Yoga Retreat | Two Week Life Transformation | YogaGarhi',
    seoDescription: 'Experience true metamorphosis on our 14 Day Yoga & Healing Retreat in Ubud, Bali. Two full weeks of multi-style yoga, Ayurvedic bodywork, temple pilgrimages, and inner peace.',
    keywords: ['14 day yoga retreat bali', '2 week yoga retreat ubud', 'deep healing retreat bali', 'transformational yoga retreat bali', 'long term yoga retreat'],
    heroImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Serene yoga shala in the rice fields of Bali',
    priceShared: '$1,390',
    pricePrivate: '$1,850',
    earlyBirdSaving: '$200',
    overview: [
      'Two weeks in Bali offers the rare luxury of time: time for the nervous system to fully downshift, time for your physical practice to break through old barriers, and time for true mental renewal.',
      'Our 14-day retreat allows you to delve into advanced pranayama, master asana alignment, enjoy multiple Ayurvedic and Balinese body treatments, and build mindful habits that remain with you for a lifetime.'
    ],
    highlights: [
      '14 days of comprehensive yoga instruction across Hatha, Vinyasa, and Ashtanga',
      '4x Therapeutic massages and Ayurvedic treatments',
      'Two sacred cultural excursions: Besakih Mother Temple and hidden jungle waterfalls',
      'Personalized 1-on-1 yoga and lifestyle consultation with lead yogacharya',
      'Comprehensive workshops on Yoga Nidra, breath mechanics, and somatic release',
      '13 nights peaceful accommodation in our quiet Ubud sanctuary',
      'Three daily chef-prepared organic meals tailored to your dosha'
    ],
    schedule: [
      { time: '06:15 AM', activity: 'Japa & Morning Silent Meditation', description: 'Traditional mantra meditation as the jungle awakens.' },
      { time: '07:00 AM', activity: 'Masterclass Asana & Alignment', description: 'Multi-style practice with personalized hands-on adjustments.' },
      { time: '09:00 AM', activity: 'Gourmet Organic Breakfast', description: 'Energizing fresh tropical fare and specialty teas.' },
      { time: '11:00 AM', activity: 'Interactive Yogic Wisdom Session', description: 'Patanjali Yoga Sutras, lifestyle medicine, and energetic anatomy.' },
      { time: '01:00 PM', activity: 'Sattvic Lunch & Quiet Integration', description: 'Rest, read in garden hammocks, or take a refreshing swim.' },
      { time: '04:00 PM', activity: 'Pranayama Science & Restorative Yoga', description: 'Advanced breath control and profound nervous system healing.' },
      { time: '06:00 PM', activity: 'Sunset Sound Bath or Fire Ceremony', description: 'Sacred ceremonies to release old emotional blocks.' },
      { time: '07:30 PM', activity: 'Nutritious Community Dinner', description: 'Wholesome dinner cooked with love and mindful intention.' }
    ],
    included: [
      '13 Nights accommodation in premium villa',
      'All meals (3x daily gourmet organic breakfast, lunch, and dinner)',
      'Daily morning & afternoon yoga and meditation sessions',
      '4x 60-minute Balinese and Ayurvedic massages',
      'Full day cultural excursions to temples, rice terraces, and waterfalls',
      'Two-way airport transfers (DPS Airport pickup & drop-off)',
      '1-on-1 Personalized Yogic lifestyle consultation',
      'Welcome pack, yoga mat, journals, and reusable copper water bottle'
    ],
    notIncluded: [
      'Flight tickets to Bali',
      'Visa fees (Visa on Arrival is approx $35 USD)',
      'Personal medical expenses'
    ],
    accommodation: {
      title: 'Boutique Ashram-Style Resort Living',
      description: 'Spacious private or shared suites designed with sustainable materials, quiet air conditioning, high-speed fiber internet, and panoramic views of tropical greenery.',
      features: ['Private terrace with hammock', 'Ensuite stone bathtub and rain shower', 'Daily laundry service available', 'Swimming pool & meditation gardens']
    },
    meals: {
      title: 'Two-Week Detox & Vitality Culinary Plan',
      description: 'Scientifically crafted to reduce inflammation, improve gut microbiome health, and elevate energy levels without feeling restricted.',
      types: ['Sattvic vegetarian & vegan culinary art', 'Nutritional consultation support', 'Custom dietary modifications upon request']
    },
    faqs: [
      { question: 'Do I get free time during the 14 days?', answer: 'Yes, Sundays and select afternoons are intentionally left open for personal exploration, visits to Ubud market, or simple quiet rest.' },
      { question: 'Can I do this retreat if I have physical injuries?', answer: 'Absolutely. Our teachers assess your mobility on Day 1 and tailor props, adjustments, and pose variations specifically for your body.' }
    ]
  },

  // ==================== RISHIKESH ====================
  'rishikesh-3-days': {
    slug: '3-days',
    durationKey: '3-days',
    locationKey: 'rishikesh',
    locationName: 'Rishikesh',
    locationStateOrCountry: 'India',
    durationDays: 3,
    durationNights: 2,
    title: '3 Day Himalayan Weekend Yoga Retreat in Rishikesh',
    tagline: 'A spiritual weekend recharge in the world capital of yoga beside the sacred Ganges.',
    badge: 'Quick Reset',
    seoTitle: '3 Day Rishikesh Yoga Retreat | Himalayan Weekend Escape | YogaGarhi',
    seoDescription: 'Rebalance your spirit with our 3 Day Himalayan Yoga Retreat in Rishikesh, India. Traditional Hatha yoga, evening Ganga Aarti, and pure mountain air.',
    keywords: ['3 day yoga retreat rishikesh', 'weekend yoga retreat rishikesh', 'himalayan yoga retreat', 'rishikesh spiritual retreat 3 days', 'ganga yoga retreat'],
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Yoga practice overlooking the holy river Ganges in Rishikesh',
    priceShared: '$180',
    pricePrivate: '$260',
    earlyBirdSaving: '$40',
    overview: [
      'Escape to the foothills of the mighty Himalayas for a transformative weekend retreat in Rishikesh, India. Situated where the sacred river Ganges emerges into the plains, Rishikesh has been charged with spiritual energy for millennia.',
      'Our 3-day retreat offers authentic classical Hatha yoga, traditional pranayama passed down by Himalayan masters, and attendance at the world-renowned evening Ganga Aarti ceremony.'
    ],
    highlights: [
      'Daily traditional Hatha and Ashtanga Vinyasa classes',
      'Breath science & meditation facing the Himalayan foothills',
      'Guided visit to the sacred Triveni Ghat or Parmarth Niketan Ganga Aarti',
      'One 60-minute Ayurvedic Abhyanga warm oil massage',
      '2 nights stay in a clean, modern, peaceful Tapovan ashram retreat',
      'Pure Ayurvedic Sattvic vegetarian meals and Himalayan herbal teas'
    ],
    schedule: [
      { time: '06:00 AM', activity: 'Himalayan Sunrise Meditation', description: 'Chanting of Gayatri Mantra and pranayama as the sun rises over the peaks.' },
      { time: '06:45 AM', activity: 'Classical Hatha Asana Practice', description: 'Traditional postures held with steady breath and focus.' },
      { time: '08:30 AM', activity: 'Ayurvedic Breakfast', description: 'Fresh seasonal fruits, warm porridge, herbal tea, and Indian breakfast staples.' },
      { time: '10:30 AM', activity: 'Yogic Philosophy & Self-Inquiry', description: 'Introduction to the Eight Limbs of Yoga (Ashtanga) in daily life.' },
      { time: '01:00 PM', activity: 'Sattvic Lunch & Rest', description: 'Nutritious balanced lunch followed by quiet contemplation.' },
      { time: '03:30 PM', activity: 'Ayurvedic Abhyanga Therapy', description: 'Traditional full-body warm herbal oil massage.' },
      { time: '05:30 PM', activity: 'Evening Ganga Aarti Pilgrimage', description: 'Experience the mesmerizing lamps, bells, and chants on the banks of Ganga.' },
      { time: '08:00 PM', activity: 'Nourishing Dinner', description: 'Warm comforting vegetarian meal and peaceful rest.' }
    ],
    included: [
      '2 Nights accommodation in Tapovan, Rishikesh',
      '3 Daily wholesome vegetarian/vegan meals',
      'All yoga, pranayama, and meditation sessions',
      '1x 60-minute Ayurvedic Abhyanga massage',
      'Guided attendance at sacred Ganga Aarti ceremony',
      'Filtered drinking water and herbal teas 24/7'
    ],
    notIncluded: [
      'Travel to/from Rishikesh',
      'Dehradun Airport (DED) or Delhi Airport transfers (available upon request)',
      'Personal shopping and laundry'
    ],
    accommodation: {
      title: 'Peaceful Ashram Sanctuary in Tapovan',
      description: 'Located away from city traffic in the spiritual enclave of Tapovan, our rooms feature clean private bathrooms, mountain-view balconies, high-speed Wi-Fi, and air conditioning.',
      features: ['Attached modern bathroom with hot water', 'Balcony with Himalayan green views', 'Rooftop yoga shala overlooking the mountains', 'Elevator & Wi-Fi access']
    },
    meals: {
      title: 'Authentic Himalayan Sattvic Cuisine',
      description: 'Prepared following ancient Ayurvedic guidelines to soothe the nervous system, nourish the doshas, and promote lightness of body.',
      types: ['Pure vegetarian and vegan dishes', 'Freshly ground spices and herbs', 'Digestive herbal teas & golden milk']
    },
    faqs: [
      { question: 'How do I reach Rishikesh?', answer: 'You can fly into Dehradun Airport (35 minutes away) or take a train/taxi from New Delhi (approx 4.5 hours). We can arrange a trusted private driver.' },
      { question: 'Is the ashram suitable for solo female travelers?', answer: 'Rishikesh is one of the safest spiritual destinations in India, and our center has 24/7 reception and dedicated security.' }
    ]
  },

  'rishikesh-7-days': {
    slug: '7-days',
    durationKey: '7-days',
    locationKey: 'rishikesh',
    locationName: 'Rishikesh',
    locationStateOrCountry: 'India',
    durationDays: 7,
    durationNights: 6,
    title: '7 Day Sacred Ganga Yoga & Meditation Retreat in Rishikesh',
    tagline: 'Immerse in the holy energy of the Himalayas and the Ganges for deep spiritual restoration.',
    badge: 'Most Popular',
    seoTitle: '7 Day Rishikesh Yoga Retreat | Sacred Ganga & Himalaya Wellness | YogaGarhi',
    seoDescription: 'Transform in the birthplace of yoga with our 7 Day Yoga Retreat in Rishikesh, India. Daily Himalayan yoga, river meditation, Ayurvedic healing, and temple treks.',
    keywords: ['7 day yoga retreat rishikesh', '1 week yoga retreat rishikesh', 'rishikesh meditation retreat', 'ganga yoga retreat rishikesh', 'ayurveda retreat rishikesh'],
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Meditating on the rocks beside the holy river Ganga in Rishikesh',
    priceShared: '$390',
    pricePrivate: '$550',
    earlyBirdSaving: '$80',
    overview: [
      'Spend a full week in the spiritual haven of Rishikesh, where sages and yogis have meditated for centuries. This 7-day retreat is a deep dive into authentic yogic living designed to clear emotional clutter and build lasting spiritual strength.',
      'Enjoy daily sunrise pranayama overlooking the mountain ridges, classical Hatha & dynamic Vinyasa, holy riverbank meditations, traditional Ayurvedic massages, and an inspiring sunrise trek to Kunjapuri Temple.'
    ],
    highlights: [
      'Twice daily yoga classes taught by master Indian teachers',
      'Sunrise excursion to Kunjapuri Devi Temple with panoramic Himalayan peaks',
      '2x Authentic Ayurvedic treatments (Abhyanga & Shirodhara)',
      'Meditative silence and sacred walk along the clean white beaches of Ganga',
      'Attendance at Parmarth Niketan and Triveni Ghat evening Aartis',
      '6 nights stay in comfortable mountain retreat accommodation',
      'Three freshly prepared Sattvic Ayurvedic meals daily'
    ],
    schedule: [
      { time: '06:00 AM', activity: 'Shatkarma & Jal Neti Cleansing', description: 'Optional traditional nasal cleansing and eye exercises.' },
      { time: '06:30 AM', activity: 'Pranayama & Himalayan Dhyana', description: 'Prana expansion, breath retention, and silent meditation.' },
      { time: '07:30 AM', activity: 'Classical Hatha Yoga', description: 'Alignment-focused postures to build stamina and balance.' },
      { time: '09:15 AM', activity: 'Ayurvedic Breakfast', description: 'Warm porridge, fresh papaya, spiced nuts, and herbal infusions.' },
      { time: '11:00 AM', activity: 'Yoga Philosophy & Bhagavad Gita Insights', description: 'Living with wisdom, non-attachment, and inner peace.' },
      { time: '01:00 PM', activity: 'Healthy Sattvic Lunch', description: 'Lentil soups (dahl), organic rice, steamed greens, and chapatis.' },
      { time: '03:30 PM', activity: 'Ayurvedic Therapy / Rest', description: 'Shirodhara oil stream therapy for calming the mind.' },
      { time: '05:00 PM', activity: 'Sunset Riverbank Meditation & Asana', description: 'Gentle stretches and meditation beside Mother Ganga.' },
      { time: '07:00 PM', activity: 'Ganga Aarti Ceremony or Kirtan', description: 'Soul-stirring devotional music and river blessing.' },
      { time: '08:15 PM', activity: 'Community Dinner', description: 'Warm comforting meal and bedtime herbal milk.' }
    ],
    included: [
      '6 Nights accommodation in Tapovan, Rishikesh',
      '3 Daily freshly prepared vegetarian & vegan meals',
      'All yoga, breathwork, and meditation classes',
      'Excursion to Kunjapuri Himalayan Sunrise Temple',
      '2x Ayurvedic spa therapies (Abhyanga massage & Shirodhara)',
      'Airport transfer from Dehradun Airport (DED)',
      'Yoga kit: Mat, meditation cushion, and neti pot'
    ],
    notIncluded: [
      'Flight tickets to India / Dehradun',
      'Indian Visa fees',
      'Personal expenses and tips'
    ],
    accommodation: {
      title: 'Himalayan Foothills Sanctuary',
      description: 'Quiet, well-ventilated rooms with private balconies, ensuite modern bathrooms, clean white linens, air conditioning, and peaceful rooftop yoga facilities.',
      features: ['Air conditioning and heating', 'Private balcony with mountain views', 'Hot water shower 24 hours', 'Peaceful rooftop with panoramic Himalayan vistas']
    },
    meals: {
      title: 'Mindful Ayurvedic Nutrition',
      description: 'Cooked with organic Himalayan grains, fresh lentils, garden vegetables, and ghee, completely free from onion, garlic, and processed ingredients.',
      types: ['Pure Sattvic vegetarian cuisine', 'Vegan and dairy-free options available', 'Digestive spices: Cumin, coriander, turmeric, fennel']
    },
    faqs: [
      { question: 'What is Shirodhara?', answer: 'Shirodhara is a classical Ayurvedic treatment where a gentle stream of warm medicated herbal oil is poured continuously over the third eye center to dissolve mental tension.' },
      { question: 'Can I attend if I am new to yoga philosophy?', answer: 'Yes, our teachers explain ancient Indian philosophy in simple, everyday language that is easy to understand and apply.' }
    ]
  },

  'rishikesh-14-days': {
    slug: '14-days',
    durationKey: '14-days',
    locationKey: 'rishikesh',
    locationName: 'Rishikesh',
    locationStateOrCountry: 'India',
    durationDays: 14,
    durationNights: 13,
    title: '14 Day Deep Himalayan Ashram Sadhana & Yoga Retreat in Rishikesh',
    tagline: 'An authentic two-week immersion into classical yogic sadhana, inner silence, and Himalayan mastery.',
    badge: 'Deep Immersion',
    seoTitle: '14 Day Rishikesh Yoga Retreat | Two Week Himalayan Sadhana | YogaGarhi',
    seoDescription: 'Embark on a profound 14 Day Yoga Retreat in Rishikesh, India. Deepen asana, master Himalayan pranayama, experience Ayurvedic detox, and connect with ancient sages.',
    keywords: ['14 day yoga retreat rishikesh', '2 week yoga retreat rishikesh', 'himalayan sadhana retreat', 'deep spiritual retreat india', 'ashram retreat rishikesh'],
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Yogi meditating in Himalayan ashram in Rishikesh',
    priceShared: '$750',
    pricePrivate: '$1,050',
    earlyBirdSaving: '$150',
    overview: [
      'For seekers ready for genuine inner change, our 14-day Himalayan Sadhana in Rishikesh is an unforgettable spiritual journey. Two weeks in this sacred valley creates the spaciousness needed to peel back layers of mental conditioning and experience profound clarity.',
      'Under the guidance of master yogacharyas, you will develop a steadfast self-practice, learn traditional cleansing kriyas, receive regular Ayurvedic body therapies, and visit secluded cave hermitages where saints have sat for centuries.'
    ],
    highlights: [
      'Comprehensive 14-day progressive training in Hatha, Vinyasa, and Kundalini fundamentals',
      '4x Ayurvedic therapies including Abhyanga, Shirodhara, and Herbal Potli massage',
      'Spiritual pilgrimage to Vashistha Guha (ancient sage cave) and Kunjapuri Temple',
      'Daily deep pranayama, mudras, bandhas, and Yoga Nidra',
      'Personal mentorship and customized home-practice blueprint from our lead teacher',
      '13 nights peaceful accommodation in the spiritual hub of Tapovan',
      'Complete Ayurvedic dietary regimen with three nourishing daily meals'
    ],
    schedule: [
      { time: '05:45 AM', activity: 'Wake Up & Herbal Tea', description: 'Tulsi-ginger tea to awaken the digestive fire.' },
      { time: '06:15 AM', activity: 'Shatkarma & Cleansing Kriyas', description: 'Jal Neti, Kapalabhati, and eye cleansing.' },
      { time: '06:45 AM', activity: 'Pranayama & Chanting', description: 'Vedic mantras and breath retention practices.' },
      { time: '07:45 AM', activity: 'Dynamic & Classical Asana', description: 'Deep posture alignment, breath synchronization, and joint opening.' },
      { time: '09:30 AM', activity: 'Nourishing Breakfast', description: 'Fresh local fruit, warm spiced porridge, and Ayurvedic bread.' },
      { time: '11:00 AM', activity: 'Patanjali Sutras & Practical Philosophy', description: 'Deconstructing the nature of the mind and overcoming mental patterns.' },
      { time: '01:00 PM', activity: 'Sattvic Lunch & Self-Study', description: 'Balanced meal followed by mindful journaling or rest.' },
      { time: '04:00 PM', activity: 'Ayurvedic Treatment or Excursion', description: 'Scheduled therapeutic massages or temple cave visit.' },
      { time: '05:30 PM', activity: 'Gentle Yin & Yoga Nidra', description: 'Subtle body awareness and deep psychic sleep.' },
      { time: '07:00 PM', activity: 'Evening Ganga Aarti or Satsang', description: 'Q&A discussions with teachers and devotional singing.' },
      { time: '08:15 PM', activity: 'Dinner & Noble Silence', description: 'Light dinner and transition into mindful nighttime silence.' }
    ],
    included: [
      '13 Nights accommodation in serene Tapovan retreat',
      '3 Daily nourishing Ayurvedic meals + fresh juices and teas',
      'All daily yoga, pranayama, kriya, and meditation sessions',
      '4x Ayurvedic full-body therapies',
      'Guided excursions to Vashistha Cave, Beatles Ashram, and Kunjapuri',
      'Two-way airport transfers from Dehradun Airport (DED)',
      'Comprehensive retreat manual and personal practice guide'
    ],
    notIncluded: [
      'International flights to Delhi / Dehradun',
      'Indian Visa fees',
      'Personal expenses and shopping'
    ],
    accommodation: {
      title: 'Spiritual Tapovan Ashram Sanctuary',
      description: 'Bright, airy, clean rooms designed to foster inner tranquility, featuring private modern bathrooms, scenic mountain balconies, air conditioning, and quiet meditation spaces.',
      features: ['Private balcony with Himalayan valley views', 'Attached western bathroom with hot water', 'Rooftop yoga shala overlooking mountains', 'Free high-speed fiber Wi-Fi']
    },
    meals: {
      title: 'Ayurvedic Vitality Dining',
      description: 'Seasonal, freshly cooked organic meals created by trained ashram chefs to support vitality, deep detox, and mental peace.',
      types: ['100% Vegetarian and Vegan options', 'Zero refined sugars or preservatives', 'Therapeutic digestive herbal teas provided all day']
    },
    faqs: [
      { question: 'What is Vashistha Guha?', answer: 'Vashistha Cave is a famous sacred rock cave situated directly on the banks of the Ganges where Sage Vashistha meditated. It carries an extraordinary aura of stillness.' },
      { question: 'Will I be able to continue this practice at home?', answer: 'Yes, on the final two days, our lead teacher creates a customized daily home practice routine tailored specifically to your schedule and goals.' }
    ]
  },

  // ==================== WARKALA ====================
  'warkala-3-days': {
    slug: '3-days',
    durationKey: '3-days',
    locationKey: 'warkala',
    locationName: 'Warkala',
    locationStateOrCountry: 'Kerala, India',
    durationDays: 3,
    durationNights: 2,
    title: '3 Day Ocean Breeze Yoga Retreat in Warkala',
    tagline: 'A revitalizing coastal weekend retreat perched above the dramatic red cliffs of Warkala, Kerala.',
    badge: 'Quick Reset',
    seoTitle: '3 Day Warkala Yoga Retreat | Cliffside Beach Wellness Kerala | YogaGarhi',
    seoDescription: 'Unwind with our 3 Day Ocean Breeze Yoga Retreat in Warkala, Kerala. Enjoy cliffside sunrise yoga, soothing ocean waves, Ayurvedic massage, and fresh coastal food.',
    keywords: ['3 day yoga retreat warkala', 'varkala yoga retreat', 'weekend yoga retreat kerala', 'cliff yoga retreat warkala', 'beach yoga retreat kerala'],
    heroImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Stunning red cliffs and ocean sunset in Warkala Kerala',
    priceShared: '$220',
    pricePrivate: '$320',
    earlyBirdSaving: '$40',
    overview: [
      'Perched along the stunning red laterite cliffs of the Arabian Sea, Warkala (Varkala) is one of India’s most breathtaking natural wellness sanctuaries. Here, the fresh salty ocean breeze and tropical coconut groves create the ideal environment to release stress and recalibrate your senses.',
      'Our 3-day weekend retreat combines morning sunrise yoga facing the ocean, gentle sunset Yin yoga, one authentic Kerala Ayurvedic oil massage, and mouthwatering South Indian vegetarian delicacies.'
    ],
    highlights: [
      'Daily morning yoga on our cliffside open-air wooden shala',
      'Evening sunset meditation listening to the rhythm of ocean waves',
      'One 60-minute traditional Kerala Ayurvedic Abhyanga massage',
      'Walk along the famous Papanasam Beach with holy mineral springs',
      '2 nights stay in a tranquil coastal boutique resort',
      'Delicious South Indian Ayurvedic and tropical vegetarian cuisine'
    ],
    schedule: [
      { time: '06:30 AM', activity: 'Oceanfront Sunrise Pranayama', description: 'Deep breathwork absorbing the negative ions from ocean waves.' },
      { time: '07:15 AM', activity: 'Invigorating Morning Vinyasa', description: 'Flowing movement to open the hips, spine, and shoulders.' },
      { time: '08:45 AM', activity: 'Coastal Ayurvedic Breakfast', description: 'Fresh tropical fruits, idlis, coconut chutney, fresh juices, and herbal tea.' },
      { time: '10:30 AM', activity: 'Free Time & Beach Exploration', description: 'Relax on Papanasam beach or explore the charming cliffside boutique cafes.' },
      { time: '01:00 PM', activity: 'Traditional Kerala Lunch', description: 'Nutritious coastal vegetarian meal served with red rice and coconut curries.' },
      { time: '03:30 PM', activity: 'Ayurvedic Rejuvenation Massage', description: 'Warm herbal oils tailored to balance your body constitution.' },
      { time: '05:30 PM', activity: 'Sunset Yin Yoga & Sound Waves', description: 'Gentle restorative stretches as the sun dips into the Arabian Sea.' },
      { time: '07:30 PM', activity: 'Dinner by Candlelight', description: 'Wholesome dinner and warm evening conversation.' }
    ],
    included: [
      '2 Nights accommodation in a boutique cliffside resort',
      '3 Daily delicious Kerala Ayurvedic vegetarian meals',
      'All daily yoga, breathwork, and meditation sessions',
      '1x 60-minute traditional Kerala Abhyanga massage',
      'Drinking water, fresh coconut water, and herbal teas',
      'Yoga mats and props provided'
    ],
    notIncluded: [
      'Flights to Trivandrum (TRV) Airport',
      'Airport taxi transfer (available for approx $35)',
      'Personal beach activities and boat rides'
    ],
    accommodation: {
      title: 'Boutique Coastal Retreat near Warkala Cliff',
      description: 'Nestled amidst swaying palm trees just a short stroll from the main cliff, our rooms provide air conditioning, private balconies, clean ensuite bathrooms, and serene sea breeze.',
      features: ['Air conditioning and ceiling fan', 'Private veranda with garden or sea view', 'Ensuite bathroom with modern fittings', 'Swimming pool & shaded hammocks']
    },
    meals: {
      title: 'Flavors of Kerala & Ayurvedic Healing',
      description: 'Delight in authentic Kerala plant-based cooking featuring fresh coconuts, turmeric, curry leaves, and farm-grown spices known for deep cellular nourishment.',
      types: ['Traditional Kerala vegetarian meals', 'Vegan and gluten-free friendly', 'Fresh young coconuts & spiced buttermilk']
    },
    faqs: [
      { question: 'Why is Papanasam Beach famous?', answer: 'Papanasam means "cleansing of sins". The natural mineral water springs and sea waters are revered for their therapeutic and purifying properties.' },
      { question: 'What is the nearest airport to Warkala?', answer: 'Trivandrum International Airport (TRV) is only 45 km away (about an hour drive). We can arrange a smooth private pickup.' }
    ]
  },

  'warkala-7-days': {
    slug: '7-days',
    durationKey: '7-days',
    locationKey: 'warkala',
    locationName: 'Warkala',
    locationStateOrCountry: 'Kerala, India',
    durationDays: 7,
    durationNights: 6,
    title: '7 Day Ayurveda & Beach Yoga Retreat in Warkala, Kerala',
    tagline: 'Harmonize your doshas with authentic Kerala Ayurveda, cliffside yoga, and ocean tranquility.',
    badge: 'Most Popular',
    seoTitle: '7 Day Warkala Yoga Retreat | Kerala Ayurveda & Beach Wellness | YogaGarhi',
    seoDescription: 'Restore your natural balance with our 7 Day Yoga & Ayurveda Retreat in Warkala, Kerala. Authentic Kerala massages, cliffside yoga, backwater boat cruise, and Sattvic food.',
    keywords: ['7 day yoga retreat warkala', 'varkala ayurveda yoga retreat', '1 week yoga retreat kerala', 'kerala wellness holiday', 'ayurvedic retreat warkala'],
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Yoga practice on the cliff overlooking the sea in Warkala Kerala',
    priceShared: '$490',
    pricePrivate: '$690',
    earlyBirdSaving: '$80',
    overview: [
      'Kerala is globally renowned as the authentic birthplace of Ayurveda. Our 7-day retreat in Warkala merges the timeless wisdom of traditional yoga with classical Kerala Ayurvedic therapies to rejuvenate your entire being.',
      'Wake up to the sound of crashing waves, practice invigorating multi-style asana and breathwork on our oceanview deck, receive personalized Ayurvedic body therapies, and take a peaceful canoe tour through Kerala’s famous emerald backwaters.'
    ],
    highlights: [
      'Twice daily yoga sessions: Morning energizing flow & evening restorative Yin',
      'Personal consultation with an experienced Kerala Ayurvedic doctor (Vaidya)',
      '3x Traditional Ayurvedic therapies (Abhyanga, Kizhi herbal pouch, and Shirodhara)',
      'Sunset country boat cruise through the tranquil Kerala backwaters',
      'Visit to ancient Janardhana Swamy Temple and natural mineral springs',
      '6 nights stay in a tranquil resort steps away from Warkala cliff',
      'All nourishing, chef-prepared Ayurvedic vegetarian and vegan meals'
    ],
    schedule: [
      { time: '06:30 AM', activity: 'Pranayama & Ocean Meditation', description: 'Prana awakening overlooking the radiant morning Arabian Sea.' },
      { time: '07:15 AM', activity: 'Morning Hatha-Vinyasa Flow', description: 'Joint-strengthening and energizing sequence.' },
      { time: '09:00 AM', activity: 'Ayurvedic Breakfast', description: 'Fresh tropical fruits, appams, fresh fruit juices, and digestive teas.' },
      { time: '11:00 AM', activity: 'Ayurvedic Doctor Consultation / Workshop', description: 'Learn your personal Prakriti (Vata, Pitta, Kapha) and lifestyle medicine.' },
      { time: '01:00 PM', activity: 'Sattvic Coastal Lunch', description: 'Freshly prepared traditional Kerala Sadya-inspired dishes.' },
      { time: '03:00 PM', activity: 'Ayurvedic Treatment Session', description: 'Kizhi herbal pouch therapy or warm oil Shirodhara.' },
      { time: '05:00 PM', activity: 'Gentle Sunset Restorative & Sound Healing', description: 'Deep calming stretches as the sea breeze cools down.' },
      { time: '07:30 PM', activity: 'Gourmet Dinner & Beach Stroll', description: 'Warm comforting dinner and optional moonlit walk along the cliff.' }
    ],
    included: [
      '6 Nights accommodation in a boutique resort near Warkala cliff',
      '3 Daily authentic Ayurvedic vegetarian meals',
      'Daily morning and afternoon yoga and meditation sessions',
      'Ayurvedic doctor consultation with custom dosha assessment',
      '3x Traditional Ayurvedic treatments (Abhyanga, Kizhi, Shirodhara)',
      'Scenic Kerala backwaters boat excursion',
      'Airport pickup from Trivandrum (TRV) Airport',
      'Welcome pack, yoga mat, and personalized herbal prescription'
    ],
    notIncluded: [
      'Flight tickets to Trivandrum',
      'Airport drop-off (can be easily organized for $35)',
      'Personal expenses and shopping'
    ],
    accommodation: {
      title: 'Coastal Haven by the Cliffs',
      description: 'Charming, eco-conscious rooms surrounded by tropical foliage, featuring air conditioning, ensuite modern bathrooms, solar water heating, and private sit-outs.',
      features: ['Air conditioning and high-speed Wi-Fi', 'Private sit-out overlooking tropical gardens', 'Swimming pool with sun loungers', 'Quiet yoga deck with ocean breeze']
    },
    meals: {
      title: 'Ayurvedic Dosha-Balancing Diet',
      description: 'Prepared strictly according to Ayurvedic healing principles to restore gut health, eliminate toxins (Ama), and revitalize skin glow.',
      types: ['Pure vegetarian and vegan dishes', 'Gluten-free and dairy-free friendly', 'Freshly pressed organic juices & herbal infusions']
    },
    faqs: [
      { question: 'What is Kizhi treatment?', answer: 'Kizhi is a traditional Ayurvedic therapy using warm pouches filled with therapeutic herbs and medicated oils pounded gently over the body to relieve joint pain and tension.' },
      { question: 'Is Warkala crowded like other tourist beaches?', answer: 'No, Warkala is famous for its serene, bohemian, and spiritual atmosphere, making it a peaceful retreat destination.' }
    ]
  },

  'warkala-14-days': {
    slug: '14-days',
    durationKey: '14-days',
    locationKey: 'warkala',
    locationName: 'Warkala',
    locationStateOrCountry: 'Kerala, India',
    durationDays: 14,
    durationNights: 13,
    title: '14 Day Complete Ayurvedic Healing & Yoga Immersion in Warkala',
    tagline: 'A comprehensive two-week body transformation, detox, and yogic reset on Kerala’s sacred coast.',
    badge: 'Deep Immersion',
    seoTitle: '14 Day Warkala Yoga Retreat | Two Week Ayurvedic Detox Kerala | YogaGarhi',
    seoDescription: 'Transform your health with our 14 Day Yoga & Ayurvedic Healing Retreat in Warkala, Kerala. Complete panchakarma-inspired bodywork, daily yoga, and tropical coastal serenity.',
    keywords: ['14 day yoga retreat warkala', '2 week ayurveda retreat kerala', 'panchakarma retreat warkala', 'complete healing retreat kerala', 'long term yoga retreat warkala'],
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Woman practicing yoga at sunset on the beach in Warkala Kerala',
    priceShared: '$890',
    pricePrivate: '$1,290',
    earlyBirdSaving: '$180',
    overview: [
      'Two weeks in Warkala provides the ideal timeframe for authentic Ayurvedic rejuvenation and deep yogic transformation. When bodywork and mindful movement are practiced consistently over 14 days, the body naturally releases deep-seated stress and resets metabolic harmony.',
      'This immersion includes continuous monitoring by an Ayurvedic physician, 6 specialized healing treatments, daily classical yoga classes, breath mastery, backwater canoe trips, and pure coastal living.'
    ],
    highlights: [
      '14 days of progressive yoga instruction across Hatha, Vinyasa, and restorative styles',
      'Comprehensive Ayurvedic lifestyle & constitutional diagnosis',
      '6x Specialized Ayurvedic body treatments tailored to your health goals',
      'Traditional cooking workshop: Learn to cook Ayurvedic meals at home',
      'Two cultural excursions: Munroe Island backwater cruise & ancient temple trail',
      '13 nights relaxing stay in a boutique resort near the cliffs',
      'All chef-curated Ayurvedic vegetarian and vegan meals'
    ],
    schedule: [
      { time: '06:15 AM', activity: 'Sunrise Breathwork & Japa Meditation', description: 'Early morning ocean meditation as the sun warms the sky.' },
      { time: '07:00 AM', activity: 'Morning Asana Practice', description: 'Strengthening flow with posture alignment and pranic focus.' },
      { time: '09:00 AM', activity: 'Wholesome Ayurvedic Breakfast', description: 'Seasonal fruit platters, steamed rice cakes, and herbal digestives.' },
      { time: '10:30 AM', activity: 'Ayurveda & Lifestyle Workshop', description: 'Understanding herbs, nutrition, and daily rhythm (Dinacharya).' },
      { time: '01:00 PM', activity: 'Sattvic Coastal Lunch', description: 'Delicious regional vegetable dishes and organic red rice.' },
      { time: '03:30 PM', activity: 'Ayurvedic Treatment / Therapy', description: 'Assigned personalized oil therapy or steam bath.' },
      { time: '05:30 PM', activity: 'Sunset Yin & Yoga Nidra', description: 'Deep nervous system unwinding and conscious sleep guidance.' },
      { time: '07:30 PM', activity: 'Community Dinner', description: 'Nutritious dinner with retreat guests and teachers.' }
    ],
    included: [
      '13 Nights accommodation in a boutique coastal resort',
      '3 Daily organic Ayurvedic vegetarian meals + healthy juices',
      'Daily morning and afternoon yoga and meditation sessions',
      'Initial and exit consultations with Ayurvedic doctor',
      '6x Specialized Ayurvedic treatments',
      'Munroe Island backwaters cruise and temple excursions',
      'Two-way airport transfers from Trivandrum (TRV) Airport',
      'Ayurvedic cooking workshop and take-home recipe book'
    ],
    notIncluded: [
      'International / domestic flight tickets',
      'Indian Visa fees',
      'Personal purchases and laundry'
    ],
    accommodation: {
      title: 'Tranquil Cliffside Coastal Sanctuary',
      description: 'Spacious, peaceful suites designed with traditional Kerala architectural aesthetics, featuring air conditioning, ensuite modern bathrooms, private balconies, and lush tropical gardens.',
      features: ['Air conditioning and high-speed Wi-Fi', 'Private sit-out with garden or pool view', 'Swimming pool and open-air wooden yoga deck', 'Short walk to beach and cliff cafes']
    },
    meals: {
      title: 'Two-Week Ayurvedic Cellular Rejuvenation',
      description: 'Carefully planned to cleanse impurities from the digestive tract, re-establish digestive fire (Agni), and promote enduring vitality.',
      types: ['100% Ayurvedic vegetarian and vegan diet', 'Specialized herbal decoctions (Kashayams)', 'Zero processed foods, white sugar, or chemicals']
    },
    faqs: [
      { question: 'What conditions can this retreat help with?', answer: 'Guests frequently report relief from chronic stress, fatigue, digestive issues, insomnia, and joint stiffness after two weeks of consistent yoga and Ayurveda.' },
      { question: 'Can special dietary needs be accommodated?', answer: 'Yes! Our kitchen caters easily to vegan, gluten-free, nut-free, and specific dosha-pacifying requirements.' }
    ]
  }
};

export function getRetreat(locationKey: string, durationKey: string): RetreatPackage | undefined {
  return RETREATS_DATA[`${locationKey}-${durationKey}`];
}
