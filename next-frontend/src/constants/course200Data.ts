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
  // TODO: Yoga Alliance profile URL: [PASTE URL] - Currently empty, guarded so no empty link renders
  publicProfileUrl: "",
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
    answer: "Yes, this course is great for beginners. We build your practice step by step from basic postures to intermediate flows. You also get free access to our online preparation course to build strength and flexibility before you fly to Bali."
  },
  {
    question: "What styles of yoga are taught in this 200-Hour TTC?",
    answer: "You will study traditional Himalayan yoga across several styles. These include Classical Hatha, energetic Vinyasa Flow, the Ashtanga Primary Series, and Iyengar alignment with props."
  },
  {
    question: "What is the daily schedule during the training?",
    answer: "A typical training day at YogaGarhi follows our verified daily schedule:\n• 6:00 AM – Wake Up & Morning Cleansing\n• 6:30 AM – Pranayama & Meditation\n• 7:30 AM – Hatha & Vinyasa\n• 9:00 AM – Breakfast\n• 10:00 AM – Yoga Philosophy\n• 12:00 PM – Lunch & Rest\n• 3:00 PM – Applied Anatomy & Bio Mechanics\n• 4:30 PM – Alignment, Adjustments & Teaching Methodology\n• 6:00 PM – Ashtanga & Iyengar with Yoga Therapy\n• 7:30 PM – Dinner\n• 9:00 PM – Self-Study / Lights Off"
  },
  {
    question: "What is the batch size at YogaGarhi Bali?",
    answer: "We keep our groups small with only 8 to 10 students per batch. This small class size ensures you get personal care, hands-on posture adjustments, and direct feedback from your lead teachers."
  },
  {
    question: "What certification will I receive, and is it globally recognized?",
    answer: "Yes. Once you pass your practical exams, you earn a Yoga Alliance RYT 200 certificate. This qualifies you to teach yoga professionally anywhere in the world."
  },
  {
    question: "What room accommodation options and prices are available?",
    answer: "We offer four clear package options. Tuition-Only is $999 USD (early-bird from $1,299), with meals and room arranged on your own. For residential stays, choose Triple Sharing ($1,750 USD, early-bird from $2,050), Double Sharing ($1,899 USD, early-bird from $2,199), or Private Room ($2,499 USD, early-bird from $2,799). All room packages include 23 nights accommodation and 3 daily meals."
  },
  {
    question: "What is included in the course fee?",
    answer: "For residential packages, the fee includes everything you need for your stay:\n• 23 nights accommodation (with attached bathroom, hot water, AC or fan, Wi-Fi, and daily cleaning)\n• 3 healthy vegetarian meals daily, plus herbal teas and drinking water\n• Official study manuals and notebooks\n• Yoga mats and props for practice\n• Airport pickup from DPS\n• Cultural excursions (rice field trek, Balinese dance show, and sacred water temple visits)\n• A Balinese massage\n• Pre-TTC online preparation\n• Special workshops in Arm Balance and Ayurveda\n• YogaGarhi 35+ creative sequencing book\n• Yoga Alliance RYT 200 certification upon graduation\n• Lifetime course repetition privileges\nFor the Tuition-Only package ($999 USD), accommodation and meals are not included."
  },
  {
    question: "What is the refund and cancellation policy?",
    answer: "Your $250 deposit is non-refundable. If you must cancel because of an emergency, you can move it to a future batch within 12 months. The rest of the fee is due 30 days before the course starts. If you cancel 30 or more days before the start, we refund the full balance you paid; bank fees are deducted. If you cancel later, the balance becomes credit for any course within 12 months. There are no refunds after the course begins."
  },
  {
    question: "What kind of food is served during the training?",
    answer: "We serve three fresh, delicious vegetarian and vegan meals each day. Our kitchen uses local organic produce and follows Ayurvedic principles. Every meal is wholesome, balanced, and easy to digest to keep your energy high."
  }
];

