export interface RetreatScheduleItem {
  time: string;
  activity: string;
  description: string;
}

export interface DaySchedule {
  dayNumber: number;
  dayLabel: string;
  title: string;
  items: { time: string; activity: string }[];
}

export interface CampusPricingOption {
  roomType: string;
  campus: string;
  regularPrice: string;
  discountedPrice: string;
  features: string[];
  popular?: boolean;
}

export interface RetreatTeacher {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
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
  dayByDaySchedule?: DaySchedule[];
  campusPricing?: CampusPricingOption[];
  teachersList?: RetreatTeacher[];
  mealTimings?: { meal: string; time: string; notes?: string }[];
  policy?: {
    reschedule: string;
    airportGuide: string;
    arrivalInfo: string;
  };
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
    title: '3 DAYS & 2 NIGHTS YOGA RETREAT IN UBUD BALI',
    tagline: 'Step into your zen zone through an enlightening 3 day journey in the cultural capital of Bali – Ubud amidst its tranquility.',
    badge: 'Short Wellness Reset',
    seoTitle: '3 Day Bali Yoga Retreat | Weekend Wellness Escape Ubud | YogaGarhi',
    seoDescription: 'Find peace with our 3 Days & 2 Nights Yoga Retreat in Ubud Bali. Daily Hatha Vinyasa yoga, 2 Balinese massages, sound healing, and organic plant-based dining.',
    keywords: ['3 day yoga retreat bali', 'weekend yoga retreat ubud', 'short wellness retreat bali', 'ubud yoga escape', 'yoga retreat bali 3 days'],
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Yoga practice surrounded by Bali tropical nature',
    priceShared: '$299',
    pricePrivate: '$390',
    earlyBirdSaving: '$80',
    overview: [
      'Step into your zen zone through an enlightening 3-day journey in the cultural capital of Bali – Ubud amidst its tranquility. Find the best 3 days yoga retreat in Ubud Bali to achieve your purpose and restore inner balance.',
      'Escape the hustle of daily routines and nourish yourself with authentic Hatha Vinyasa yoga, restorative evening sound healing, daily Balinese massage treatments, and wholesome plant-based dining in a lush tropical sanctuary.'
    ],
    highlights: [
      'Daily authentic Hatha & Vinyasa Flow yoga sessions',
      'Daily complimentary Full-Body Balinese Massage treatments (2 sessions)',
      'Evening Tibetan singing bowl sound healing & aura cleansing',
      'Morning Himalayan breathwork (Pranayama) & guided meditation',
      'Full access to campus swimming pool, lush tropical gardens, and bamboo shala',
      'Three daily delicious, hygienic plant-based / vegan meals prepared with Ahimsa love'
    ],
    campusPricing: [
      {
        roomType: 'Private Room in Campus-I',
        campus: 'Deluxe Garden Villa',
        regularPrice: '$480 USD',
        discountedPrice: '$390 USD',
        popular: true,
        features: ['King / Queen Bed with luxury mattress', 'Silent Air Conditioning & ceiling fan', 'Ensuite Balinese semi-open bathroom', 'Private balcony overlooking lush tropical foliage', 'Complimentary High-Speed Wi-Fi']
      },
      {
        roomType: 'Twin Shared Room in Campus-I',
        campus: 'Twin Share Comfort',
        regularPrice: '$390 USD',
        discountedPrice: '$299 USD',
        features: ['Two separate comfortable single beds', 'Shared with one retreat companion (same gender)', 'Silent Air Conditioning & ensuite bathroom', 'Direct tropical garden & pool access', 'Complimentary High-Speed Wi-Fi']
      },
      {
        roomType: 'Private Room in Campus-II',
        campus: 'New Luxury Pool Campus',
        regularPrice: '$440 USD',
        discountedPrice: '$350 USD',
        features: ['Spacious modern private room', 'Direct sparkling swimming pool views', 'Premium bathroom with rainfall hot shower', 'Work desk, safe box & wardrobe', 'Peaceful sanctuary location in Ubud']
      }
    ],
    dayByDaySchedule: [
      {
        dayNumber: 1,
        dayLabel: 'Day 1 Schedule',
        title: 'Arrival, Check-in & Relaxation',
        items: [
          { time: '12:00 PM', activity: 'Check in & Welcome Coconut Water' },
          { time: '12:30 PM', activity: 'Nutritious & Delicious Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Complimentary Full-Body Balinese Massage Treatment' },
          { time: '05:30 PM – 06:30 PM', activity: 'Sunset Welcome Meditation & Gentle Stretch' },
          { time: '07:00 PM', activity: 'Wholesome Vegetarian / Vegan Dinner' }
        ]
      },
      {
        dayNumber: 2,
        dayLabel: 'Day 2 Schedule',
        title: 'Yoga, Sound Healing & Spa Care',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Silent Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nutritious & Energizing Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Sound Healing & Tibetan Singing Bowls Session' },
          { time: '12:30 PM', activity: 'Fresh Organic Plant-Based Lunch' },
          { time: '02:00 PM – 04:00 PM', activity: 'Free Time for Swimming Pool & Jungle Relaxation' },
          { time: '04:00 PM – 05:00 PM', activity: 'Complimentary Full-Body Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Candlelight Dinner & Heart Circle' }
        ]
      },
      {
        dayNumber: 3,
        dayLabel: 'Day 3 Schedule',
        title: 'Morning Yoga, Closing Blessing & Departure',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama & Mindfulness Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Morning Energizing Hatha Yoga Practice' },
          { time: '09:30 AM', activity: 'Farewell Tropical Breakfast' },
          { time: '11:00 AM', activity: 'Closing Blessing Ceremony & Retreat Certificate' },
          { time: '12:00 PM', activity: 'Check out with renewed energy and peace' }
        ]
      }
    ],
    schedule: [
      { time: '07:00 AM', activity: 'Pranayama & Meditation', description: 'Centering breathwork and morning silence.' },
      { time: '08:00 AM', activity: 'Hatha Vinyasa Yoga', description: 'Fluid, mindful alignment flow.' },
      { time: '09:30 AM', activity: 'Nutritious Breakfast', description: 'Fresh tropical fruit, smoothie bowls, and porridge.' },
      { time: '11:00 AM', activity: 'Sound Healing Session', description: 'Tibetan singing bowl resonance and nervous system relaxation.' },
      { time: '12:30 PM', activity: 'Plant-Based Lunch', description: 'Vibrant organic vegetarian and vegan cuisine.' },
      { time: '04:00 PM', activity: 'Balinese Massage', description: 'Daily 60-min complimentary traditional full-body massage.' },
      { time: '07:00 PM', activity: 'Wholesome Dinner', description: 'Nourishing dinner prepared with Ahimsa love.' }
    ],
    mealTimings: [
      { meal: 'Breakfast', time: '09:30 AM', notes: 'Fresh tropical fruits, smoothie bowls, chia puddings, herbal tea' },
      { meal: 'Lunch', time: '12:30 PM – 01:30 PM', notes: 'Nutritious Balinese & Indian Sattvic bowls, fresh steamed greens' },
      { meal: 'Dinner', time: '07:00 PM – 08:00 PM', notes: 'Warm soul soups, roasted vegetables, curries, and herbal digestion tonics' }
    ],
    policy: {
      reschedule: 'Each student is eligible for one course reschedule free of charge. Once rescheduled, your dates are firmly reserved for maximum flexibility.',
      airportGuide: 'The best and most convenient way to travel to YogaGarhi Bali is to take a flight to Denpasar Bali Airport (DPS). Denpasar Airport is merely 38 km away from our Ubud campus.',
      arrivalInfo: 'Campus check-in begins at 12:00 PM on your arrival day. Early arrival and luggage storage are gladly assisted.'
    },
    included: [
      'Chosen Accommodation (Campus-I or Campus-II)',
      '3 Times a Day Nutritious and Delicious vegan/Vegetarian Meals',
      'Mentioned Daily Yoga Classes (Hatha & Vinyasa)',
      '10:00 AM to 8:00 PM Swimming Pool Access',
      'Complimentary High-Speed Wi-Fi anywhere in the Campus',
      '2 Full-Body Complimentary Balinese Massage Treatments',
      'Sound Healing & Tibetan Singing Bowls Session',
      'All necessary yoga items and props available in the yoga shala',
      'Unlimited purified drinking water and fresh herbal tea'
    ],
    notIncluded: [
      'Flight tickets to/from Denpasar Bali (DPS)',
      'Airport drop-off transfer (easily booked for $25–$30)',
      'Personal expenses and shopping'
    ],
    accommodation: {
      title: 'YogaGarhi Ubud Campus-I & Campus-II',
      description: 'Nestled amidst lush green rice terraces and tropical palms in Ubud, our campuses offer peaceful garden sanctuaries with sparkling swimming pools, airy bamboo yoga shalas, and modern air-conditioned rooms.',
      features: ['Air Conditioning & ceiling fan in every room', 'Ensuite bathroom with hot & cold water', '10:00 AM to 8:00 PM swimming pool access', 'High-Speed Wi-Fi across the entire sanctuary', 'Daily housekeeping service']
    },
    meals: {
      title: 'YogaGarhi Dining – Pure Plant-Based & Ahimsa Nutrition',
      description: 'We believe that food is a sacred expression of care and one of the ways to enhance our spirit. We serve plant-based meals, prepared with the highest standards of hygiene, cleanliness, and love to support your yoga journey. One of the primary practices in yoga is Ahimsa, meaning non-violence. By following a pure vegetarian and vegan diet, our meals heal the gut and energize the soul.',
      types: ['100% Vegetarian & Vegan Plant-Based Cuisine', 'Fresh tropical fruits, juices & digestive herbal infusions', 'Gluten-Free & Dairy-Free friendly menu']
    },
    faqs: [
      { question: 'What is the check-in and check-out time?', answer: 'Check-in is at 12:00 PM on Day 1, and check-out is at 12:00 PM on Day 3.' },
      { question: 'Are beginners welcome on this 3-day retreat?', answer: 'Yes! All classes are tailored with variations for complete beginners through intermediate practitioners.' },
      { question: 'Is the Balinese massage really complimentary?', answer: 'Yes, 2 full-body Balinese massages are fully complimentary and included in your retreat fees.' },
      { question: 'How do I reach the retreat campus from the airport?', answer: 'Denpasar International Airport (DPS) is approximately 38 km away. We provide hassle-free private taxi pickup upon request.' }
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
    title: '7 DAYS & 6 NIGHTS YOGA RETREAT IN UBUD BALI',
    tagline: 'Step into your zen zone through an enlightening 7 day journey in the cultural capital of Bali – Ubud amidst its tranquility.',
    badge: 'Most Popular',
    seoTitle: '7 Day Bali Yoga Retreat | Rejuvenating Wellness in Ubud | YogaGarhi',
    seoDescription: 'Find the Best 7 days yoga retreat in Ubud Bali. Experience daily Hatha Vinyasa yoga, 6 complimentary Balinese massages, sound healing, Reiki, water blessing, and organic dining.',
    keywords: ['7 day yoga retreat bali', '7 days 6 nights yoga retreat ubud', 'best yoga retreat in bali', 'ubud yoga retreat 7 days', 'bali yoga school retreat'],
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Woman meditating at sunrise in Bali retreat center',
    priceShared: '$650',
    pricePrivate: '$800',
    earlyBirdSaving: '$200',
    overview: [
      'Step into your zen zone through an enlightening 7-day journey in the cultural capital of Bali – Ubud amidst its tranquility. Find the Best 7 days yoga retreat in Ubud Bali to achieve your purpose. And you will certainly find the best retreat at YogaGarhi due to our authentic Himalayan teaching lineage, experienced gurus, and peaceful tropical sanctuary.',
      'Our 7-day retreat is uniquely designed to give you profound holistic rejuvenation. Every single day features daily Hatha Vinyasa yoga, soothing Himalayan pranayama, daily complimentary full-body Balinese massage treatments, and healing modalities like Sound Healing and Reiki. Immerse in sacred temple water purification at Tirta Empul and taste delicious, hygienic plant-based meals prepared with love and Ahimsa.'
    ],
    highlights: [
      'Daily authentic Hatha & Vinyasa Flow yoga sessions with expert teachers',
      '6 Full-Body Complimentary Balinese Massage Treatments (daily spa care)',
      'Transformative Sound Healing & Tibetan Singing Bowls therapy sessions',
      'Traditional Reiki Healing & Chakra Aura Cleansing session',
      'Sacred Melukat Water Blessing & Temple Excursion (Tirta Empul)',
      '3 Nutritious and delicious vegan/vegetarian meals daily based on Ahimsa',
      '10:00 AM to 8:00 PM Swimming Pool Access & high-speed Wi-Fi everywhere'
    ],
    campusPricing: [
      {
        roomType: 'Private Room in Campus-I',
        campus: 'Deluxe Garden Villa',
        regularPrice: '$1,000 USD',
        discountedPrice: '$800 USD',
        popular: true,
        features: [
          'King / Queen Bed with plush luxury mattress',
          'Silent Air Conditioning & ceiling fan',
          'Ensuite semi-open Balinese bathroom with hot rainfall shower',
          'Private balcony overlooking tropical palm gardens',
          'Daily housekeeping, fresh organic towels & linens',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      },
      {
        roomType: 'Twin Shared Room in Campus-I',
        campus: 'Twin Share Comfort',
        regularPrice: '$812.5 USD',
        discountedPrice: '$650 USD',
        features: [
          'Two comfortable single beds for two students (same gender)',
          'Ensuite spacious bathroom with hot water shower',
          'Silent Air Conditioning & tropical garden view',
          'Safety locker, wardrobe & luggage storage',
          'Perfect for friends or solo travelers seeking companion value',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      },
      {
        roomType: 'Private Room in Campus-II',
        campus: 'New Luxury Pool Campus',
        regularPrice: '$875 USD',
        discountedPrice: '$700 USD',
        features: [
          'Brand new boutique private room overlooking swimming pool',
          'Modern Balinese design with teakwood finishes',
          'Silent Air Conditioning & luxury ensuite bath',
          'Writing desk, reading lounge & private terrace',
          'Direct steps to outdoor swimming pool and sun loungers',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      }
    ],
    dayByDaySchedule: [
      {
        dayNumber: 1,
        dayLabel: 'Day 1 Schedule',
        title: 'Check-In, Welcome & Balinese Massage',
        items: [
          { time: '12:00 PM', activity: 'Check in & Fresh Welcome Young Coconut' },
          { time: '12:30 PM', activity: 'Delicious Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '05:30 PM – 06:30 PM', activity: 'Welcome Circle & Twilight Gentle Stretch' },
          { time: '07:00 PM', activity: 'Nutritious Vegetarian / Vegan Dinner' }
        ]
      },
      {
        dayNumber: 2,
        dayLabel: 'Day 2 Schedule',
        title: 'Yoga, Sound Healing & Spa Treatment',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nutritious & Delicious Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Sound Healing Session (Tibetan Singing Bowls)' },
          { time: '12:30 PM', activity: 'Plant-Based Organic Lunch' },
          { time: '02:00 PM – 04:00 PM', activity: 'Pool Relaxation, Reading & Jungle Leisure' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Wholesome Sattvic Dinner' }
        ]
      },
      {
        dayNumber: 3,
        dayLabel: 'Day 3 Schedule',
        title: 'Reiki Healing, Energy Flow & Massage',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nourishing Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Reiki Healing & Energy Balancing Session' },
          { time: '12:30 PM', activity: 'Nutritious Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '05:30 PM – 06:30 PM', activity: 'Restorative Yin Yoga & Yoga Nidra' },
          { time: '07:00 PM', activity: 'Nutritious Vegetarian / Vegan Dinner' }
        ]
      },
      {
        dayNumber: 4,
        dayLabel: 'Day 4 Schedule',
        title: 'Sacred Temple Water Blessing Excursion',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama & Gentle Morning Practice' },
          { time: '08:00 AM', activity: 'Hearty Breakfast' },
          { time: '09:30 AM – 01:30 PM', activity: 'Sacred Melukat Water Purification Temple Tour (Tirta Empul)' },
          { time: '01:30 PM', activity: 'Fresh Lunch at Sanctuary' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Nutritious Dinner & Quiet Integration' }
        ]
      },
      {
        dayNumber: 5,
        dayLabel: 'Day 5 Schedule',
        title: 'Sound Healing, Vinyasa & Deep Rest',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nutritious Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Sound Healing & Breath Alignment Session' },
          { time: '12:30 PM', activity: 'Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Nutritious Vegetarian / Vegan Dinner' }
        ]
      },
      {
        dayNumber: 6,
        dayLabel: 'Day 6 Schedule',
        title: 'Culture Workshop, Farewell Kirtan & Celebration',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nutritious Breakfast' },
          { time: '11:00 AM – 12:30 PM', activity: 'Balinese Herbal Offering (Canang Sari) & Culture Session' },
          { time: '12:30 PM', activity: 'Plant-Based Organic Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '06:00 PM', activity: 'Candlelight Kirtan Chanting & Farewell Celebration' },
          { time: '07:30 PM', activity: 'Special Feast Dinner' }
        ]
      },
      {
        dayNumber: 7,
        dayLabel: 'Day 7 Schedule',
        title: 'Morning Yoga, Closing Blessing & Check-Out',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Farewell Tropical Breakfast' },
          { time: '11:00 AM', activity: 'Closing Blessing Ceremony & Certificate Presentation' },
          { time: '12:00 PM', activity: 'Check out with rejuvenated body, mind, and spirit' }
        ]
      }
    ],
    schedule: [
      { time: '07:00 to 08:00 AM', activity: 'Pranayama & Meditation', description: 'Centering breathwork and morning silence.' },
      { time: '08:00 to 09:00 AM', activity: 'Hatha Vinyasa Yoga', description: 'Dynamic, mindful alignment flow.' },
      { time: '09:30 AM', activity: 'Nutritious Breakfast', description: 'Fresh tropical fruit, smoothie bowls, and porridge.' },
      { time: '11:00 AM to 12:00 PM', activity: 'Healing Session (Sound / Reiki)', description: 'Tibetan singing bowls and energy alignment.' },
      { time: '12:30 PM', activity: 'Nutritious Lunch', description: 'Vibrant organic vegetarian and vegan cuisine.' },
      { time: '04:00 to 05:00 PM', activity: 'Balinese Massage Treatment', description: 'Daily 60-min complimentary full-body traditional massage.' },
      { time: '07:00 PM', activity: 'Wholesome Dinner', description: 'Nourishing dinner prepared with Ahimsa love.' }
    ],
    mealTimings: [
      { meal: 'Breakfast', time: '09:30 AM', notes: 'Fresh tropical fruits, smoothie bowls, chia puddings, herbal tea' },
      { meal: 'Lunch', time: '12:30 PM – 01:30 PM', notes: 'Nutritious Balinese & Indian Sattvic bowls, fresh steamed greens' },
      { meal: 'Dinner', time: '07:00 PM – 08:00 PM', notes: 'Warm soul soups, roasted vegetables, curries, and herbal digestion tonics' }
    ],
    policy: {
      reschedule: 'Each student is eligible for one course reschedule free of charge. Once the course has been rescheduled, no further changes to the course dates will be permitted. We provide complete booking flexibility.',
      airportGuide: 'The best and most convenient way to travel to YogaGarhi Bali is to take a flight to Denpasar Bali Airport (DPS). Denpasar Airport is merely 38 km away from our Ubud retreat campus.',
      arrivalInfo: 'Campus check-in begins at 12:00 PM on Day 1. If you arrive early, feel free to relax by the swimming pool or enjoy our herbal welcome drinks.'
    },
    included: [
      'Chosen Accommodation (Campus-I or Campus-II)',
      '3 Times a Day Nutritious and Delicious vegan/Vegetarian Meals',
      'Mentioned Daily Yoga Classes (Hatha & Vinyasa Flow)',
      '10:00 AM to 8:00 PM Swimming Pool Access',
      'Complimentary High-Speed Wi-Fi anywhere in the Campus',
      '6 Full-Body Complimentary Balinese Massage Treatments (1 per day)',
      'Sound Healing & Tibetan Singing Bowls Session',
      'Reiki Healing & Aura Balancing Session',
      'Sacred Melukat Water Purification Temple Tour (Tirta Empul)',
      'All necessary items & props for the classes available in the yoga shala',
      'Unlimited purified drinking water and fresh herbal tea'
    ],
    notIncluded: [
      'Flight tickets to/from Denpasar Bali (DPS)',
      'Airport drop-off transfer (can be easily arranged for $25–$30)',
      'Personal laundry and shopping expenses'
    ],
    accommodation: {
      title: 'YogaGarhi Ubud Campus-I & Campus-II',
      description: 'We offer two tranquil campus sanctuaries in Ubud. Campus-I offers authentic Balinese boutique villas with lush jungle and garden views. Campus-II is our newly opened luxury pool campus featuring contemporary design, private sun balconies, and immediate pool access.',
      features: [
        'Air Conditioning & ceiling fan in all rooms',
        'Attached semi-open Balinese bathroom with hot rainfall shower',
        'Large outdoor swimming pool open 10:00 AM to 8:00 PM',
        'Traditional open-air bamboo yoga shala surrounded by nature',
        'Complimentary High-Speed Wi-Fi throughout the property',
        'Daily housekeeping and fresh linens'
      ]
    },
    meals: {
      title: 'YogaGarhi Dining – Pure Plant-Based & Ahimsa Nutrition',
      description: 'At YogaGarhi, we believe that food is a sacred expression of care and one of the most powerful ways to enhance our spirit. What we serve is plant-based meals, prepared with the highest standards of hygiene, cleanliness, and love to support your yoga journey. One of the primary ethical pillars of yoga is Ahimsa, meaning non-violence. By honoring a vegetarian and vegan lifestyle, our kitchen provides clean, easily digestible, and deeply nourishing meals that promote physical vitality and mental clarity.',
      types: [
        '100% Nutritious Vegetarian & Vegan Plant-Based Cuisine',
        'Daily fresh tropical fruits (papaya, dragon fruit, mango, banana)',
        'Freshly pressed juices, detox elixirs & Balinese herbal Jamu',
        'Gluten-Free and dairy-free friendly choices upon request'
      ]
    },
    faqs: [
      { question: 'What is the check-in and check-out time?', answer: 'Check-in is at 12:00 PM on Day 1, and check-out is at 12:00 PM on Day 7.' },
      { question: 'Is the daily Balinese massage really included every day?', answer: 'Yes! You receive 6 full-body complimentary Balinese massage treatments (one on each full day of your retreat).' },
      { question: 'What is the Melukat Water Blessing ceremony?', answer: 'Melukat is an ancient Balinese water purification ritual at the sacred Tirta Empul spring temple, guided by a traditional Balinese priest to cleanse emotional burdens and restore clarity.' },
      { question: 'What is your Course Reschedule Policy?', answer: 'Each student is eligible for one free course reschedule. You can reschedule your retreat dates with prior notice, ensuring complete peace of mind when booking.' },
      { question: 'How do I arrive at the retreat from the airport?', answer: 'Fly to Denpasar International Airport (DPS), which is 38 km away. We coordinate reliable private driver transfers directly to our Ubud campus.' }
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
    title: '14 DAYS & 13 NIGHTS YOGA RETREAT IN UBUD BALI',
    tagline: 'Step into your zen zone through a profound two-week life transformation in Ubud amidst deep jungle tranquility and authentic sadhana.',
    badge: 'Deep Immersion',
    seoTitle: '14 Day Bali Yoga Retreat | Two Week Life Transformation | YogaGarhi',
    seoDescription: 'Experience complete mind-body transformation with our 14 Days & 13 Nights Yoga Retreat in Ubud Bali. Daily Hatha Vinyasa, 12 Balinese massages, sound healing, Reiki, and temple pilgrimages.',
    keywords: ['14 day yoga retreat bali', 'two week yoga retreat ubud', 'long term yoga retreat bali', '14 days 13 nights yoga retreat bali', 'deep healing retreat ubud'],
    heroImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Serene yoga shala in the rice fields of Bali',
    priceShared: '$1,250',
    pricePrivate: '$1,590',
    earlyBirdSaving: '$360',
    overview: [
      'Two weeks in Bali gives your mind, nervous system, and body the luxury of time – allowing you to truly decompress, heal chronic fatigue, and establish a profound yoga and meditation habit that lasts forever.',
      'Our 14-day retreat in Ubud Bali features 12 complimentary full-body Balinese massages, multiple Sound Healing and Reiki sessions, deep Himalayan pranayama, alignment masterclasses, sacred water temple ceremonies, and exquisite plant-based dining.'
    ],
    highlights: [
      'Two full weeks of daily Hatha & Vinyasa Flow yoga classes',
      '12 Full-Body Complimentary Balinese Massage Treatments (regular spa care)',
      'Multiple Sound Healing & Tibetan Singing Bowls energy alignment sessions',
      'Reiki Healing & Chakra purification therapies',
      'Sacred Melukat Water Temple Excursion (Tirta Empul) & Waterfall Pilgrimage',
      '3 Daily chef-prepared organic plant-based meals based on Ahimsa',
      '10:00 AM to 8:00 PM Swimming Pool Access & high-speed Wi-Fi throughout'
    ],
    campusPricing: [
      {
        roomType: 'Private Room in Campus-I',
        campus: 'Deluxe Garden Villa',
        regularPrice: '$1,950 USD',
        discountedPrice: '$1,590 USD',
        popular: true,
        features: [
          'King / Queen Bed with plush luxury mattress',
          'Silent Air Conditioning & ceiling fan',
          'Ensuite semi-open Balinese bathroom with hot rainfall shower',
          'Private balcony overlooking tropical palm gardens',
          'Daily housekeeping, fresh organic towels & linens',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      },
      {
        roomType: 'Twin Shared Room in Campus-I',
        campus: 'Twin Share Comfort',
        regularPrice: '$1,550 USD',
        discountedPrice: '$1,250 USD',
        features: [
          'Two comfortable single beds for two students (same gender)',
          'Ensuite spacious bathroom with hot water shower',
          'Silent Air Conditioning & tropical garden view',
          'Safety locker, wardrobe & luggage storage',
          'Ideal for two friends or solo travelers seeking shared value',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      },
      {
        roomType: 'Private Room in Campus-II',
        campus: 'New Luxury Pool Campus',
        regularPrice: '$1,750 USD',
        discountedPrice: '$1,390 USD',
        features: [
          'Brand new boutique private room overlooking swimming pool',
          'Modern Balinese design with teakwood finishes',
          'Silent Air Conditioning & luxury ensuite bath',
          'Writing desk, reading lounge & private terrace',
          'Direct steps to outdoor swimming pool and sun loungers',
          'Complimentary High-Speed Wi-Fi anywhere in Campus'
        ]
      }
    ],
    dayByDaySchedule: [
      {
        dayNumber: 1,
        dayLabel: 'Day 1 Schedule',
        title: 'Check-In, Welcome & Balinese Massage',
        items: [
          { time: '12:00 PM', activity: 'Check in & Fresh Welcome Young Coconut' },
          { time: '12:30 PM', activity: 'Delicious Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '05:30 PM – 06:30 PM', activity: 'Welcome Circle & Twilight Gentle Stretch' },
          { time: '07:00 PM', activity: 'Nutritious Vegetarian / Vegan Dinner' }
        ]
      },
      {
        dayNumber: 2,
        dayLabel: 'Day 2 Schedule',
        title: 'Hatha Flow, Sound Healing & Spa Care',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nutritious & Delicious Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Sound Healing Session (Tibetan Singing Bowls)' },
          { time: '12:30 PM', activity: 'Plant-Based Organic Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Wholesome Sattvic Dinner' }
        ]
      },
      {
        dayNumber: 3,
        dayLabel: 'Day 3 Schedule',
        title: 'Reiki Energy Healing & Yin Yoga',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama Breathwork & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Flow' },
          { time: '09:30 AM', activity: 'Nourishing Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Reiki Healing & Energy Balancing' },
          { time: '12:30 PM', activity: 'Nutritious Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '05:30 PM – 06:30 PM', activity: 'Restorative Yin Yoga' },
          { time: '07:00 PM', activity: 'Nutritious Dinner' }
        ]
      },
      {
        dayNumber: 4,
        dayLabel: 'Day 4 Schedule',
        title: 'Sacred Water Temple Excursion (Tirta Empul)',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Pranayama & Gentle Stretch' },
          { time: '08:00 AM', activity: 'Hearty Breakfast' },
          { time: '09:30 AM – 01:30 PM', activity: 'Sacred Melukat Water Purification Temple Tour' },
          { time: '01:30 PM', activity: 'Fresh Lunch at Sanctuary' },
          { time: '04:00 PM – 05:00 PM', activity: 'Full-Body Complimentary Balinese Massage Treatment' },
          { time: '07:00 PM', activity: 'Nutritious Dinner' }
        ]
      },
      {
        dayNumber: 5,
        dayLabel: 'Days 5–13',
        title: 'Deep Sadhana, Sound Baths, Massages & Waterfall Excursions',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Advanced Pranayama Breathwork & Silent Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Hatha Vinyasa Yoga Alignment & Sequencing' },
          { time: '09:30 AM', activity: 'Abundant Tropical Breakfast' },
          { time: '11:00 AM – 12:00 PM', activity: 'Alternating Sound Baths, Reiki & Philosophy Workshops' },
          { time: '12:30 PM', activity: 'Gourmet Organic Plant-Based Lunch' },
          { time: '04:00 PM – 05:00 PM', activity: 'Daily Complimentary Full-Body Balinese Massage' },
          { time: '05:30 PM – 06:30 PM', activity: 'Sunset Yin Yoga / Yoga Nidra / Candlelight Kirtan' },
          { time: '07:00 PM', activity: 'Wholesome Community Dinner' }
        ]
      },
      {
        dayNumber: 14,
        dayLabel: 'Day 14 Schedule',
        title: 'Closing Puja, Blessings & Check-Out',
        items: [
          { time: '07:00 AM – 08:00 AM', activity: 'Final Celebration Pranayama & Meditation' },
          { time: '08:00 AM – 09:00 AM', activity: 'Heart-Opening Hatha Yoga' },
          { time: '09:30 AM', activity: 'Celebration Tropical Breakfast' },
          { time: '11:00 AM', activity: 'Closing Fire Blessing & Certificate Presentation' },
          { time: '12:00 PM', activity: 'Check out with lifelong transformation' }
        ]
      }
    ],
    schedule: [
      { time: '07:00 to 08:00 AM', activity: 'Pranayama & Meditation', description: 'Deep breathwork and Himalayan stillness.' },
      { time: '08:00 to 09:00 AM', activity: 'Hatha Vinyasa Yoga', description: 'Dynamic, mindful alignment practice.' },
      { time: '09:30 AM', activity: 'Nutritious Breakfast', description: 'Fresh tropical fruit, smoothie bowls, and porridge.' },
      { time: '11:00 AM to 12:00 PM', activity: 'Healing Session (Sound / Reiki)', description: 'Tibetan singing bowls and energy alignment.' },
      { time: '12:30 PM', activity: 'Nutritious Lunch', description: 'Vibrant organic vegetarian and vegan cuisine.' },
      { time: '04:00 to 05:00 PM', activity: 'Balinese Massage Treatment', description: 'Daily 60-min complimentary full-body traditional massage.' },
      { time: '07:00 PM', activity: 'Wholesome Dinner', description: 'Nourishing dinner prepared with Ahimsa love.' }
    ],
    mealTimings: [
      { meal: 'Breakfast', time: '09:30 AM', notes: 'Fresh tropical fruits, smoothie bowls, chia puddings, herbal tea' },
      { meal: 'Lunch', time: '12:30 PM – 01:30 PM', notes: 'Nutritious Balinese & Indian Sattvic bowls, fresh steamed greens' },
      { meal: 'Dinner', time: '07:00 PM – 08:00 PM', notes: 'Warm soul soups, roasted vegetables, curries, and herbal digestion tonics' }
    ],
    policy: {
      reschedule: 'Each student is eligible for one course reschedule free of charge. Once rescheduled, your dates are firmly reserved for maximum flexibility.',
      airportGuide: 'The best and most convenient way to travel to YogaGarhi Bali is to take a flight to Denpasar Bali Airport (DPS). Denpasar Airport is merely 38 km away from our Ubud retreat campus.',
      arrivalInfo: 'Campus check-in begins at 12:00 PM on Day 1. If you arrive early, feel free to relax by the swimming pool or enjoy our herbal welcome drinks.'
    },
    included: [
      'Chosen Accommodation (Campus-I or Campus-II)',
      '3 Times a Day Nutritious and Delicious vegan/Vegetarian Meals',
      'Mentioned Daily Yoga Classes across 14 Days',
      '10:00 AM to 8:00 PM Swimming Pool Access',
      'Complimentary High-Speed Wi-Fi anywhere in the Campus',
      '12 Full-Body Complimentary Balinese Massage Treatments',
      'Multiple Sound Healing & Reiki Energy sessions',
      'Two Cultural Excursions (Water Temple & Jungle Waterfall Pilgrimage)',
      'All necessary yoga props available in the yoga shala',
      'Round-trip Airport Pickup and Drop-off included'
    ],
    notIncluded: [
      'Flight tickets to/from Denpasar Bali (DPS)',
      'Personal laundry and shopping expenses'
    ],
    accommodation: {
      title: 'YogaGarhi Ubud Campus-I & Campus-II',
      description: 'Experience your two-week transformation in complete comfort. Choose between Campus-I (Deluxe Garden Villa with traditional Balinese stonework) and Campus-II (New Luxury Pool Campus with modern aesthetic, pool views, and expansive sun deck).',
      features: [
        'Air Conditioning & ceiling fan in all rooms',
        'Attached semi-open Balinese bathroom with hot rainfall shower',
        'Large outdoor swimming pool open 10:00 AM to 8:00 PM',
        'Traditional open-air bamboo yoga shala surrounded by nature',
        'Complimentary High-Speed Wi-Fi throughout the property',
        'Daily housekeeping and fresh linens'
      ]
    },
    meals: {
      title: 'YogaGarhi Dining – Pure Plant-Based & Ahimsa Nutrition',
      description: 'At YogaGarhi, we believe that food is a sacred expression of care and one of the most powerful ways to enhance our spirit. What we serve is plant-based meals, prepared with the highest standards of hygiene, cleanliness, and love to support your yoga journey. One of the primary ethical pillars of yoga is Ahimsa, meaning non-violence. By honoring a vegetarian and vegan lifestyle, our kitchen provides clean, easily digestible, and deeply nourishing meals that promote physical vitality and mental clarity.',
      types: [
        '100% Nutritious Vegetarian & Vegan Plant-Based Cuisine',
        'Daily fresh tropical fruits (papaya, dragon fruit, mango, banana)',
        'Freshly pressed juices, detox elixirs & Balinese herbal Jamu',
        'Gluten-Free and dairy-free friendly choices upon request'
      ]
    },
    faqs: [
      { question: 'What is the check-in and check-out time?', answer: 'Check-in is at 12:00 PM on Day 1, and check-out is at 12:00 PM on Day 14.' },
      { question: 'How many massages are included in 14 days?', answer: 'You receive 12 full-body complimentary Balinese massages during your two-week stay.' },
      { question: 'Is round-trip airport transfer included?', answer: 'Yes, for the 14-day retreat, both airport pickup and airport drop-off from Denpasar (DPS) are included.' },
      { question: 'What is your Course Reschedule Policy?', answer: 'Each student is eligible for one free course reschedule with prior notice.' }
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
