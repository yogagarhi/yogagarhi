// Configuration for 200-Hour Yoga Teacher Training Bali
// NOTE: Sections will ONLY render on the live page if data is present and confirmed.
// Placeholders stay here in comments/config and NEVER appear as raw text to visitors.

export interface TeacherMember {
  name: string;
  role: string;
  speciality: string;
  bio?: string;
  image?: string;
}

export interface HoursBreakdown {
  totalHours: number;
  contactHours?: number;
  selfStudyHours?: number;
  categories?: { title: string; hours: number; description?: string }[];
}

export interface HowToReachInfo {
  nearestAirport?: string;
  airportDistanceKm?: number | string;
  airportPickupDetails?: string;
  checkInTime?: string;
  checkOutTime?: string;
  arrivalDayDetails?: string;
}

export interface YogaAllianceProfile {
  schoolName: string;
  rysDesignation: string;
  publicProfileUrl?: string; // [CONFIRM: Yoga Alliance public directory link]
  description?: string;
}

export interface HelpfulGuide {
  title: string;
  slug: string;
  excerpt: string;
}

// [CONFIRM: Teachers list - add when confirmed: name, role, speciality, bio, image]
// Empty array = section does NOT render on the live page
export const TEACHERS_LIST: TeacherMember[] = [];

// [CONFIRM: Hours breakdown e.g. contact hours + self-study]
// null = section does NOT render on the live page
export const HOURS_BREAKDOWN: HoursBreakdown | null = null;

// [CONFIRM: How to Reach YogaGarhi Bali details: distance from DPS, airport pickup instructions, check-in / check-out times]
// null = section does NOT render on the live page
export const HOW_TO_REACH: HowToReachInfo | null = null;

// Yoga Alliance School info
// If publicProfileUrl is empty string or not set, the public profile button will not render
export const YOGA_ALLIANCE_PROFILE: YogaAllianceProfile = {
  schoolName: "YogaGarhi",
  rysDesignation: "RYS 200",
  publicProfileUrl: "", // [CONFIRM: Add Yoga Alliance public directory link here]
};

// Helpful Guides: verified published blogs on the site
export const HELPFUL_GUIDES: HelpfulGuide[] = [
  {
    title: "Benefits of Yoga Teacher Training in Bali",
    slug: "benefits-yttc-bali",
    excerpt: "Discover why Bali is the world's premier yoga training hub and how a Yoga TTC transforms your practice, mindset, and teaching skills."
  },
  {
    title: "What to Expect in a 200 Hour YTTC in Bali",
    slug: "what-to-expect-200hr",
    excerpt: "A complete guide to daily schedules, training intensity, anatomy study, teaching practicums, and preparation tips."
  },
  {
    title: "Himalayan Roots of Authentic Yoga",
    slug: "himalayan-roots-yoga",
    excerpt: "Learn why authentic Himalayan lineage matters for your yoga teacher training in Bali, preserving traditional Hatha wisdom."
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const COURSE_200_FAQS: FAQItem[] = [
  {
    question: "Is this 200-Hour Yoga Teacher Training suitable for beginners?",
    answer: "Yes. The course is thoughtfully designed to guide students from foundational principles to intermediate practice. In addition, every enrolled student receives access to our complimentary Pre-TTC online preparation to build essential strength, flexibility, and foundational alignment before arriving in Bali."
  },
  {
    question: "What styles of yoga are taught in this 200-Hour TTC?",
    answer: "You will study multi-style yoga grounded in authentic Himalayan tradition, including Classical Hatha Yoga, dynamic Vinyasa Flow, Ashtanga Primary Series (by K. Pattabhi Jois), and precision alignment inspired by Iyengar yoga."
  },
  {
    question: "What is the daily schedule during the training?",
    answer: "A typical training day at YogaGarhi runs as follows: 6:00 AM Wake Up & Morning Cleansing; 6:30 AM Pranayama & Meditation; 7:30 AM Asana Practice (Hatha/Ashtanga); 9:00 AM Breakfast; 10:00 AM Yoga Philosophy or Anatomy; 12:00 PM Lunch & Rest; 3:00 PM Teaching Methodology & Alignment; 5:00 PM Asana Practice (Vinyasa Flow); 7:00 PM Dinner; 8:00 PM Evening Meditation, Kirtan, or Group Reflection."
  },
  {
    question: "What is the batch size at YogaGarhi Bali?",
    answer: "We strictly limit our batches to 8–10 students maximum. This intimate class size ensures personalized attention, individual posture corrections, and close mentorship from our senior teaching faculty."
  },
  {
    question: "What certification will I receive, and is it globally recognized?",
    answer: "Upon successful completion of the course and practical assessments, you receive a Yoga Alliance Registered Yoga Teacher (RYT 200) certificate, qualifying you to teach yoga professionally anywhere in the world."
  },
  {
    question: "What room accommodation options and prices are available?",
    answer: "We offer four all-inclusive residential packages: Shared Room ($999 USD, early-bird discount from $1,299), Private Room ($1,750 USD, early-bird from $2,050), Deluxe Private Room ($1,899 USD, early-bird from $2,199), and VIP Suite ($2,499 USD, early-bird from $2,799). Tuition-only options are also available on request."
  },
  {
    question: "What is included in the course fee?",
    answer: "The course fee includes 24 nights accommodation, 3 wholesome sattvic vegetarian/vegan meals daily, all official course textbooks and manuals, Yoga Alliance RYT 200 certification upon graduation, airport pickup, sacred Bali temple and cultural excursions, 2 Balinese massages, complimentary non-slip yoga mat, free Pre-TTC online preparation course, and lifetime course re-attendance privileges."
  },
  {
    question: "What is the refund and cancellation policy?",
    answer: "You can reschedule your course within 12 months free of charge or transfer your reserved seat to another practitioner. We provide a full refund if the school cancels a batch, alongside a Day 1 trial policy. Due to strictly limited batch capacity, bookings are non-refundable once Day 1 begins."
  },
  {
    question: "What kind of food is served during the training?",
    answer: "We serve three freshly prepared, nutritious sattvic vegetarian and vegan meals daily, prepared with fresh local Balinese ingredients according to yogic dietary principles (Ahimsa) to support your digestive health, physical energy, and mental clarity."
  },
  {
    question: "Are there rest days during the 24-day training?",
    answer: "Yes. Sundays are designated rest and rejuvenation days. Students can relax, visit Ubud's cafes and markets, explore local waterfalls, or join our organized sacred cultural excursions across Bali."
  },
  {
    question: "Do I need a visa to travel to Bali for the course?",
    answer: "Visa requirements depend on your nationality and passport. We advise checking the official Indonesian Immigration website or your nearest Indonesian embassy for the most up-to-date entry rules. Our admissions team provides official enrollment letters and guidance upon registration."
  },
  {
    question: "How does the Free Pre-TTC online preparation work?",
    answer: "Upon confirming your enrollment, you gain access to our online Pre-TTC preparation module. This enables you to review fundamental asana postures, basic Sanskrit terms, and breathing practices in advance so you arrive in Bali confident and well-prepared."
  },
  {
    question: "What is the Lifetime Course Repeat policy?",
    answer: "YogaGarhi graduates can return to future 200-hour batches in Bali tuition-free at any time (only covering personal accommodation and meals) to refresh their teaching skills, deepen their sadhana, or assist as an apprentice teacher."
  },
  {
    question: "What post-program mentorship is provided after graduation?",
    answer: "We provide 1 full year of post-graduation mentorship. This includes ongoing guidance on class sequencing, hands-on adjustments, yoga career advice, and continuous access to the global YogaGarhi teacher alumni network."
  },
  {
    question: "What language is the training conducted in?",
    answer: "All classes, lectures, methodology workshops, and manuals are delivered in clear, accessible English. Our instructors ensure a supportive environment for non-native English speakers."
  },
  {
    question: "Can I join if I don't intend to become a professional teacher?",
    answer: "Yes. Many of our students enroll primarily for personal growth, deep spiritual immersion, and understanding the complete science of yoga for their own life and well-being."
  }
];

