"use client";
import DynamicBatchDate from "@/components/DynamicBatchDate";
import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COURSE_200_HOUR_PRICING } from "@/constants/pricing";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import SEO, { generateCourseSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BATCHES_200_HOUR, CourseBatch, getBatchBadge } from "@/constants/courseDates";
import { useUpcomingBatches } from "@/hooks/useUpcomingBatches";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useBooking } from "@/components/BookingDialog";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useYogicEnergy } from "@/components/YogicEnergyDialog";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import {
  Award, Users, Leaf, MapPin, BookOpen, Heart,
  Check, X, ChevronDown, Play, Download, Phone,
  Calendar, Clock, Star, Instagram, MessageCircle, Sparkles,
  GraduationCap, Repeat, Mountain, Handshake, Zap, Layers,
  UserCheck, Brain, BookMarked, UsersRound, RefreshCw,
  Salad, Coffee, Apple, Soup, UtensilsCrossed, Wheat, Milk,
  Cherry, Sprout, CircleDot, Sun, MessageSquare, Mail,
  Wifi, Droplets, Wind, Activity, ShieldCheck, ArrowRight, Globe, Video, ExternalLink
} from "lucide-react";
import { timezones, countryCodes } from "@/constants/formOptions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CourseVideoFacade from "@/components/common/CourseVideoFacade";
import FounderSection from "@/components/home/FounderSection";
import HomeGallerySection from "@/components/home/HomeGallerySection";
import RoomCard from "./RoomCard";
import WhyYogaGarhiBox from "@/components/course200/WhyYogaGarhiBox";
import CourseFAQSection from "@/components/course200/CourseFAQSection";
import MeetYourTeachersSection from "@/components/course200/MeetYourTeachersSection";
import CourseHoursStructureSection from "@/components/course200/CourseHoursStructureSection";
import HowToReachSection from "@/components/course200/HowToReachSection";
import HelpfulGuidesSection from "@/components/course200/HelpfulGuidesSection";
import TopVideoReviewsSection from "@/components/course200/TopVideoReviewsSection";
import { YOGA_ALLIANCE_PROFILE } from "@/constants/course200Data";
import { trackEvent } from "@/utils/analytics";
import { getCloudinaryImage } from "@/utils/cloudinary";
import TrustBadgesRow from "@/components/course-rishikesh/TrustBadgesRow";
import WhyRishikeshSection from "@/components/course-rishikesh/WhyRishikeshSection";
import YogaGarhiDifferenceSection from "@/components/course-rishikesh/YogaGarhiDifferenceSection";
import HowToReachRishikeshSection from "@/components/course-rishikesh/HowToReachRishikeshSection";
import BestTimeToVisitRishikeshSection from "@/components/course-rishikesh/BestTimeToVisitRishikeshSection";
import RishikeshFAQSection from "@/components/course-rishikesh/RishikeshFAQSection";
import CompareCoursesTable from "@/components/course-rishikesh/CompareCoursesTable";
import ExploreMoreCoursesSection from "@/components/course-rishikesh/ExploreMoreCoursesSection";
import AlsoAvailableInRishikeshSection from "@/components/course-rishikesh/AlsoAvailableInRishikeshSection";
import RishikeshCourseStudyGuide from "@/components/course-rishikesh/RishikeshCourseStudyGuide";
import TrustBadgesRowVarkala from "@/components/course-varkala/TrustBadgesRow";
import WhyVarkalaSection from "@/components/course-varkala/WhyVarkalaSection";
import YogaGarhiDifferenceVarkalaSection from "@/components/course-varkala/YogaGarhiDifferenceVarkalaSection";
import HowToReachVarkalaSection from "@/components/course-varkala/HowToReachVarkalaSection";
import BestTimeToVisitVarkalaSection from "@/components/course-varkala/BestTimeToVisitVarkalaSection";
import VarkalaFAQSection from "@/components/course-varkala/VarkalaFAQSection";
import CompareVarkalaCoursesTable from "@/components/course-varkala/CompareVarkalaCoursesTable";
import ExploreMoreVarkalaCoursesSection from "@/components/course-varkala/ExploreMoreVarkalaCoursesSection";
import AlsoAvailableInVarkalaSection from "@/components/course-varkala/AlsoAvailableInVarkalaSection";
import VarkalaCourseStudyGuide from "@/components/course-varkala/VarkalaCourseStudyGuide";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
const preYttcOnline = getCloudinaryImage("pre-yttc-online.png");
const activityAyurveda = getCloudinaryImage("activity-ayurveda.jpg");
const transformYou = getCloudinaryImage("transform-you.jpg");
const activitySoundHealing = getCloudinaryImage("activity-sound-healing.jpg");
const activityWaterfall = getCloudinaryImage("activity-waterfall-new.jpg");
const lifetimeReattendance = getCloudinaryImage("lifetime-reattendance.jpg");
const smallGroupWork = getCloudinaryImage("small-group-work.jpg");
const yogaSequences = getCloudinaryImage("yoga-sequences.png");
const himalayanLineage = getCloudinaryImage("himalayan-lineage.jpg");
const livingPhilosophy = getCloudinaryImage("living-philosophy.jpg");
const webinarBackground = getCloudinaryImage("webinar-background.jpg");
const insta1 = getCloudinaryImage("insta-1.jpg");
const insta2 = getCloudinaryImage("insta-2.jpg");
const insta3 = getCloudinaryImage("insta-3.jpg");
const insta4 = getCloudinaryImage("insta-4.jpg");
const insta5 = getCloudinaryImage("insta-5.jpg");
const yogaAllianceBg = getCloudinaryImage("yoga-alliance-graduates-hd.jpg");
const healthyMeals = getCloudinaryImage("healthy-meals.jpg");
const yaRyt200 = getCloudinaryImage("ya-ryt-200.png");
const yaRys100 = getCloudinaryImage("ya-rys-100.png");
const yaRys200 = getCloudinaryImage("ya-rys-200.jpg");
const yaAllCertifications = getCloudinaryImage("ya-all-certifications.jpg");

import WhyFeatureItem from "@/components/home/WhyFeatureItem";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import HomeVideoGallerySection from "@/components/home/HomeVideoGallerySection";
import { googleReviews } from "@/constants/googleReviews";
import { GOOGLE_REVIEWS_CONFIG } from "@/constants/reviews";

// User-provided photos for different sections
const apartHammock = getCloudinaryImage("hammock.png");
const apartSeatedTalk = getCloudinaryImage("seated-talk.png");
const apartGroupPose = getCloudinaryImage("group-pose.png");
const apartCeremony = getCloudinaryImage("ceremony.png");
const apartGroupClass = getCloudinaryImage("group-class.png");
const apartChildPose = getCloudinaryImage("child-pose.png");
const apartWaterTemple = getCloudinaryImage("water-temple.png");
const apartRiceFieldTrek = getCloudinaryImage("rice-field-trek.png");
const apartPoolVilla = getCloudinaryImage("pool-villa.png");
const apartMountainPose = getCloudinaryImage("mountain-pose.png");
const apartWarriorSequence = getCloudinaryImage("warrior-sequence.png");
const apartYogaAllianceGraduates = getCloudinaryImage("yoga-alliance-graduates.png");
const apartBaliSurroundings = getCloudinaryImage("bali-surroundings.png");
const postSupport1 = getCloudinaryImage("post-support-1.jpg");
const postSupport2 = getCloudinaryImage("post-support-2.jpg");
const postSupport3 = getCloudinaryImage("post-support-3.jpg");
const postSupport4 = getCloudinaryImage("post-support-4.jpg");
const syllabus1 = getCloudinaryImage("syllabus-1.jpg");
const syllabus2 = getCloudinaryImage("syllabus-2.png");
const syllabus3 = getCloudinaryImage("syllabus-3.jpg");
const syllabus4 = getCloudinaryImage("syllabus-4.png");
const syllabus5 = getCloudinaryImage("syllabus-5.png");
const syllabus6 = getCloudinaryImage("syllabus-6.png");
const syllabus7 = getCloudinaryImage("syllabus-7.png");
const syllabus8 = getCloudinaryImage("syllabus-8.jpg");
const syllabus9 = getCloudinaryImage("syllabus-9.jpg");
const syllabus10 = getCloudinaryImage("syllabus-10.jpg");
const syllabusMudras = getCloudinaryImage("syllabus-mudras.png");
const apartCommunityBeach = getCloudinaryImage("community-beach.png");
const apartKecakDance = getCloudinaryImage("balinese-dance-new.jpg");
const apartInstructorAnatomy = getCloudinaryImage("instructor-anatomy.png");
const apartBalineseMassage = getCloudinaryImage("balinese-massage.jpg");
const apartAyurvedicMeals = getCloudinaryImage("ayurvedic-meals.jpg");
const apartMeditationPractice = getCloudinaryImage("meditation-practice.jpg");
const apartYogaLifestyle = getCloudinaryImage("yoga-lifestyle.jpg");
const syllabusAshtanga = getCloudinaryImage("ashtanga-yoga.png");
const syllabusHathaVinyasa = getCloudinaryImage("hatha-vinyasa.png");
const syllabusPranayamaBreathing = getCloudinaryImage("pranayama-breathing.png");
const syllabusAnatomyPhysiology = getCloudinaryImage("anatomy-physiology.png");
const syllabusMeditationMantra = getCloudinaryImage("meditation-mantra.jpg");

// Workshop Images
const workshopAyurveda = getCloudinaryImage("workshop-ayurveda.png");
const workshopArmBalance = getCloudinaryImage("workshop-arm-balance.jpg");
const workshopHandstand = getCloudinaryImage("workshop-handstand.jpg");
const workshopBalinese = getCloudinaryImage("workshop-balinese.png");
const workshopSoundHealing = getCloudinaryImage("workshop-sound-healing.jpg");
const workshopSoundHealingUpdate = getCloudinaryImage("workshop-sound-healing-update.png");
const workshopBhakti = getCloudinaryImage("workshop-bhakti.jpg");

// Triple Sharing room images
const tripleBalcony = getCloudinaryImage("triple-balcony.png");
const tripleBathroom = getCloudinaryImage("triple-bathroom.png");
const tripleBedroom1 = getCloudinaryImage("triple-bedroom-1.png");
const tripleBedroom2 = getCloudinaryImage("triple-bedroom-2.png");
const tripleBedroom3 = getCloudinaryImage("triple-bedroom-3.png");

// Double Sharing room images
const doubleBedroom1 = getCloudinaryImage("double-bedroom-1.png");
const doubleBedroom2 = getCloudinaryImage("double-bedroom-2.png");
const doubleBedroom3 = getCloudinaryImage("double-bedroom-3.png");
const doubleBedroom4 = getCloudinaryImage("double-bedroom-4.png");
const doubleBalcony = getCloudinaryImage("double-balcony.png");

// Private Room images
const privateBedroom1 = getCloudinaryImage("private-bedroom-1.png");
const privateBedroom2 = getCloudinaryImage("private-bedroom-2.png");
const privateBedroom3 = getCloudinaryImage("private-bedroom-3.png");
const privateBathroom = getCloudinaryImage("private-bathroom.png");
const privateBalcony = getCloudinaryImage("private-balcony.png");

// Newly uploaded Private Room images
const privateNew1 = getCloudinaryImage("private-new-1.jpg");
const privateNew2 = getCloudinaryImage("private-new-2.png");
const privateNew3 = getCloudinaryImage("private-new-3.png");
const privateNew4 = getCloudinaryImage("private-new-4.png");
const privateNew5 = getCloudinaryImage("private-new-5.png");
const apartGallery1 = getCloudinaryImage("gallery-1.png");
const apartGallery2 = getCloudinaryImage("gallery-2.png");
const apartGallery3 = getCloudinaryImage("gallery-3.png");
const apartGallery4 = getCloudinaryImage("gallery-4.png");
const apartGallery5 = getCloudinaryImage("gallery-5.png");
const apartGallery6 = getCloudinaryImage("gallery-6.png");
const apartGallery7 = getCloudinaryImage("gallery-7.png");
const apartGallery8 = getCloudinaryImage("gallery-8.png");
const apartGallery9 = getCloudinaryImage("gallery-9.jpg");
const apartGallery10 = getCloudinaryImage("gallery-10.jpg");
const sattvicBreakfast = getCloudinaryImage("sattvic-breakfast-new.jpg");
const sattvicDinner = getCloudinaryImage("sattvic-dinner-new.jpg");



function ReviewCard({ review }: { review: { name: string; location: string; avatar: string; rating: number; date: string; text: string } }) {
  const tCommon = useTranslations("common");
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 120;

  return (
    <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-primary">{review.avatar}</span>
        </div>

        {/* Name & Location */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground text-sm">{review.name}</h3>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>

        {/* Google Icon */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-muted-foreground leading-relaxed break-words">
        {review.text}
      </p>
    </div>
  );
}

// Icon Highlights Section
const iconHighlights = [
  { icon: Award, title: "Yoga Alliance Certified", subtitle: "RYS 200" },
  { icon: Leaf, title: "Multi-Style Yoga", subtitle: "Authentic Teaching" },
  { icon: Heart, title: "Prakriti-Based", subtitle: "Personalized Learning" },
  { icon: Users, title: "Small Batch", subtitle: "8-10 Students" },
  { icon: BookOpen, title: "Traditional + Practical", subtitle: "Complete System" },
  { icon: MapPin, title: "Bali Immersion", subtitle: "24-Day Retreat" },
];

// What Sets Apart Data
const whatSetsApart = [
  {
    title: "Teaching Depth Beyond Certification",
    description: "We don't teach yoga to create instructors. We teach yoga to awaken teachers. There is a difference. Instructors repeat. Teachers respond. Our curriculum focuses on inner development alongside technical skill.",
  },
  {
    title: "Lineage & Sincerity",
    description: "Our approach is rooted in authentic Himalayan yogic traditions. Each technique taught has been practiced for generations. We honor this lineage not as nostalgia, but as living wisdom.",
  },
  {
    title: "The Shiv-Shakti Sadhana",
    description: "Beyond asana and pranayama, students are introduced to the subtle practices of Shiv-Shakti Sadhana — awakening the inner masculine and feminine energies that govern transformation.",
  },
  {
    title: "Beyond the Certification Mindset",
    description: "Many come for a certificate. We prepare you for a calling. The certificate is a formality. The transformation is the reality. Our graduates don't just teach yoga — they live it.",
  },
];

// Daily Schedule
const dailySchedule = [
  { time: "6:00 AM", activity: "Wake Up & Morning Cleansing" },
  { time: "6:30 AM", activity: "Pranayama & Meditation" },
  { time: "7:30 AM", activity: "Hatha & Vinyasa" },
  { time: "9:00 AM", activity: "Breakfast" },
  { time: "10:00 AM", activity: "Yoga Philosophy" },
  { time: "12:00 PM", activity: "Lunch & Rest" },
  { time: "3:00 PM", activity: "Applied Anatomy & Bio Mechanics" },
  { time: "4:30 PM", activity: "Alignment, Adjustments & Teaching Methodology" },
  { time: "6:00 PM", activity: "Ashtanga & Iyengar with Yoga Therapy" },
  { time: "7:30 PM", activity: "Dinner" },
  { time: "9:00 PM", activity: "Self-Study / Lights Off" },
];

// Course Curriculum
const curriculum = [
  {
    category: "Asana & Alignment",
    items: [
      "Ashtanga Yoga Primary Series",
      "Hatha Yoga & Vinyasa Flow",
      "Iyengar Alignment Principles",
      "Standing, Seated, Backbends, Inversions",
      "Arm Balancing Workshop",
    ],
  },
  {
    category: "Pranayama & Breath",
    items: [
      "Complete Breathing Techniques",
      "Shatkarma Cleansing Practices",
      "Bandhas & Energy Locks",
      "Breath Integration with Asana",
      "Advanced Kumbhaka Practice",
    ],
  },
  {
    category: "Philosophy & Self-Study",
    items: [
      "Yoga Sutras of Patanjali",
      "Eight Limbs of Ashtanga Yoga",
      "Chakras & Nadis System",
      "Introduction to Vedas",
      "Lives of Great Yogis",
    ],
  },
  {
    category: "Teaching & Methodology",
    items: [
      "Class Sequencing Principles",
      "Verbal & Hands-on Adjustments",
      "Working with Different Bodies",
      "Voice & Communication",
      "Practicum & Evaluations",
    ],
  },
  {
    category: "Meditation & Inner Practices",
    items: [
      "Multiple Meditation Techniques",
      "Mantra Chanting & Sacred Sound",
      "Mudras & Gestures",
      "Trataka & Concentration",
      "Silence Practices",
    ],
  },
];

// Inclusions/Exclusions
const inclusions = [
  "Clean and comfortable room",
  "Attached bathroom with hot water",
  "Air conditioning / fan",
  "Free Wi-Fi access",
  "Three healthy vegetarian meals daily",
  "Herbal teas and drinking water",
  "Study material (manuals, notebooks, pens)",
  "Yoga mats and props",
  "Outdoor excursions / weekend trips",
  "Airport pickup (nearest airport)",
  "24/7 campus support team",
  "Certification upon completion",
  "Balinese massage",
  "Balinese dance show",
  "Rice field trek",
  "Pre-TTC preparation",
  "Arm balance workshop",
  "Ayurveda workshop",
  "Course repetition included",
  "Yogagarhi 35+ creative sequencing book",
];

const exclusions = [
  "Airfare and travel expenses",
  "Visa and travel insurance",
  "Airport drop",
  "Laundry service",
  "Personal shopping & extra activities",
];

// What You Will Receive - using user photos
const whatYouWillReceive = [
  {
    title: "Multi Style Yoga Training",
    description: "Learn yoga in its authentic, time-tested way. Our teachers preserve the wisdom of yogic tradition.",
    icon: Leaf,
    image: apartGroupClass
  },
  {
    title: "Yoga Alliance Certified",
    description: "Receive globally recognized certification. Begin teaching yoga with confidence worldwide.",
    icon: Award,
    image: apartYogaAllianceGraduates
  },
  {
    title: "Peaceful Bali Surroundings",
    description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice.",
    icon: Mountain,
    image: apartBaliSurroundings
  },
  {
    title: "Outdoor Excursions",
    description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture.",
    icon: MapPin,
    image: apartWaterTemple
  },
  {
    title: "Small Batch Sizes",
    description: "Get personal attention and guidance. Every student's growth matters to us.",
    icon: Users,
    image: apartGroupPose
  },
  {
    title: "Supportive Community",
    description: "Be part of a warm and positive family. Grow together in a caring environment.",
    icon: Heart,
    image: apartCommunityBeach
  },
  {
    title: "Balinese Massage",
    description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing.",
    icon: Sparkles,
    image: apartBalineseMassage
  },
  {
    title: "Balinese Dance Performance",
    description: "Ancient, dynamic and highly expressive dance form that reflects Bali's rich cultural heritage.",
    icon: Star,
    image: apartKecakDance
  },
  {
    title: "Healthy Meals",
    description: "Enjoy sattvic and healthy meals supporting your practice.",
    icon: Heart,
    image: apartAyurvedicMeals
  },
  {
    title: "Meditation Practice",
    description: "Deepen inner peace and mindfulness with guided sessions.",
    icon: Sparkles,
    image: apartMeditationPractice
  },
  {
    title: "Experienced Instructors",
    description: "Learn from certified teachers with years of expertise.",
    icon: GraduationCap,
    image: apartInstructorAnatomy
  },
  {
    title: "Yoga Lifestyle",
    description: "Adopt the yogic way of living for body, mind, and spirit.",
    icon: Leaf,
    image: apartYogaLifestyle
  },
];

// Workshops - using user photos
// Workshops - using user photos
const workshops = [
  {
    title: "Ayurveda Workshop & Ayurveda Cooking Workshop",
    description: "Understand your unique constitution (Prakriti) and learn how to balance your doshas through diet, lifestyle, and yogic practices for optimal health.",
    image: workshopAyurveda
  },
  {
    title: "Arm Balance Mastery",
    description: "Build the strength, technique and confidence needed to master arm balances like Crow, Side Crow, and Flying Pigeon with proper alignment.",
    image: workshopArmBalance
  },
  {
    title: "Handstand Workshop",
    description: "Overcome fear and find your center through progressive drills, wall work, and partner exercises to achieve a confident freestanding handstand.",
    image: workshopHandstand
  },
  {
    title: "Yin Yoga Deep Stretch",
    description: "Access deeper connective tissue layers through long-held passive poses. Release tension, increase flexibility, and cultivate inner stillness.",
    image: apartChildPose
  },
  {
    title: "Sound Healing Session",
    description: "Experience the transformative power of Tibetan singing bowls, gongs, and mantras. Vibration therapy for deep relaxation and inner calm.",
    image: workshopSoundHealingUpdate
  },
  {
    title: "Bhakti Yoga & Kirtan",
    description: "Open your heart through devotional practice. Learn sacred chants, mantras, and kirtan to connect with the spiritual essence of yoga.",
    image: workshopBhakti
  },
];

// Excursions - using user photos
const excursions = [
  {
    title: "Balinese Dance Performance",
    description: "Witness the ancient art of Balinese dance — a mesmerizing display of grace, storytelling, and spiritual devotion passed down through generations.",
    image: apartKecakDance,
    icon: Star
  },
  {
    title: "Rice Field Trek",
    description: "Walk through Ubud's iconic terraced rice paddies. Experience the harmony of nature, traditional farming, and the peaceful rhythm of rural Bali.",
    image: apartRiceFieldTrek,
    icon: Leaf
  },
  {
    title: "Sacred Waterfall Visit",
    description: "Journey to a sacred waterfall for a traditional cleansing ritual. Let the pure waters wash away what no longer serves you.",
    image: activityWaterfall,
    icon: Sparkles
  },
];


// Sattvic Food Menu
const foodMenu = [
  {
    meal: "Breakfast",
    time: "7:00 AM",
    icon: Coffee,
    items: ["Fresh tropical fruits", "Homemade granola with coconut yogurt", "Herbal teas & fresh juices", "Balinese rice porridge"],
    image: sattvicBreakfast
  },
  {
    meal: "Lunch",
    time: "12:30 PM",
    icon: Salad,
    items: ["Nourishing Buddha bowls", "Tempeh & tofu preparations", "Fresh garden salads", "Traditional Balinese vegetables"],
    image: healthyMeals
  },
  {
    meal: "Dinner",
    time: "6:30 PM",
    icon: Soup,
    items: ["Light sattvic soups", "Wholesome grain dishes", "Steamed vegetables", "Healing Ayurvedic preparations"],
    image: sattvicDinner
  },
];

// Food Philosophy Points
const foodPhilosophy = [
  { icon: Leaf, title: "Nutrition & Healthy Food", description: "Pure vegetarian & vegan cuisine" },
  { icon: Heart, title: "Sattvic Principles", description: "Food that promotes clarity & peace" },
  { icon: Apple, title: "Locally Sourced", description: "Fresh ingredients from Bali farms" },
  { icon: Sparkles, title: "Ayurvedic Balance", description: "Meals designed for your dosha" },
];


// Dietary Options
const dietaryOptions = [
  { icon: Leaf, name: "Vegan", description: "100% vegan-based meals" },
  { icon: Milk, name: "Lactose Free", description: "Dairy-free alternatives" },
  { icon: Wheat, name: "Gluten Free", description: "No wheat or gluten" },
  { icon: Sprout, name: "Raw Food", description: "Living food options" },
  { icon: CircleDot, name: "Nutrition & Healthy Food", description: "Nutrition and healthy food" },
  { icon: Cherry, name: "Fruitarian", description: "Fruit-based meals" },
  { icon: Sun, name: "Yogic Diet", description: "Traditional sattvic food" },
  { icon: MessageSquare, name: "Custom Request", description: "Other diets on request" },
];

// Yogic Energy Quiz Questions
const quizQuestions = [
  {
    question: "How does your body typically feel in the morning?",
    options: ["Light and energetic", "Steady and grounded", "Heavy and slow to start"],
  },
  {
    question: "What describes your mental pattern during stress?",
    options: ["Racing thoughts, anxiety", "Irritability, intensity", "Withdrawal, lethargy"],
  },
  {
    question: "How would you describe your natural energy rhythm?",
    options: ["Variable, creative bursts", "Focused, consistent drive", "Calm, steady, enduring"],
  },
  {
    question: "What is your relationship with heat?",
    options: ["Prefer warmth, dislike cold", "Run warm, seek cooling", "Neutral, adaptable"],
  },
  {
    question: "How do you typically process emotions?",
    options: ["Quick to feel, quick to release", "Intense, lasting impressions", "Deep, slow processing"],
  },
  {
    question: "What describes your lifestyle tendency?",
    options: ["Movement, change, variety", "Achievement, structure, goals", "Routine, stability, comfort"],
  },
];

export interface CoursePricingTier {
  originalPrice: string;
  price: string;
}

export interface CoursePageTemplateProps {
  namespace?: string;
  courseKey?: string;
  defaultBatches?: CourseBatch[];
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
  pricingConfig?: {
    tuition?: CoursePricingTier;
    triple: CoursePricingTier;
    double: CoursePricingTier;
    private: CoursePricingTier;
    heroStartingPrice?: CoursePricingTier;
    datesCard?: {
      tuition?: CoursePricingTier;
      triple: CoursePricingTier;
      double: CoursePricingTier;
      private: CoursePricingTier;
    };
  };
}

export default function CoursePageTemplate({
  namespace = "course200",
  courseKey = "200-hour",
  defaultBatches = BATCHES_200_HOUR,
  initialBatches,
  syllabusSlot,
  pricingConfig = {
    tuition: COURSE_200_HOUR_PRICING.shared,
    triple: COURSE_200_HOUR_PRICING.private,
    double: COURSE_200_HOUR_PRICING.deluxe,
    private: COURSE_200_HOUR_PRICING.vip,
  }
}: CoursePageTemplateProps) {
  const t = useTranslations(namespace as any);
  const tAcc = useTranslations("common.accommodationExtra");
  const tDialog = useTranslations("dialogs");
  const tCommon = useTranslations("common");
  const tPromo = useTranslations("promo");
  const tWhy = useTranslations("whyChoose");
  const tHome = useTranslations("home");
  const locale = useLocale();
  const startingPrice = pricingConfig.heroStartingPrice || pricingConfig.tuition || pricingConfig.triple;
  const datesPricing = pricingConfig.datesCard || pricingConfig;
  const isRishikesh = courseKey?.includes("rishikesh") || namespace?.includes("rishikesh");
  const isVarkala = courseKey?.includes("varkala") || namespace?.includes("varkala");

  const localizedWorkshops = useMemo(() => {
    try {
      const list = t.raw("workshopsList");
      if (Array.isArray(list) && list.length > 0) {
        return workshops.map((w, idx) => ({
          ...w,
          title: list[idx]?.title || w.title,
          description: list[idx]?.description || w.description,
        }));
      }
    } catch {}
    return workshops;
  }, [t]);

  const localizedExcursions = useMemo(() => {
    try {
      const list = t.raw("excursionsList");
      if (Array.isArray(list) && list.length > 0) {
        return excursions.map((e, idx) => ({
          ...e,
          title: list[idx]?.title || e.title,
          description: list[idx]?.description || e.description,
        }));
      }
    } catch {}
    return excursions;
  }, [t]);

  const localizedFoodMenu = useMemo(() => {
    try {
      const list = t.raw("foodMenuList");
      if (Array.isArray(list) && list.length > 0) {
        return foodMenu.map((m, idx) => ({
          ...m,
          meal: list[idx]?.meal || m.meal,
          items: Array.isArray(list[idx]?.items) ? list[idx].items : m.items,
        }));
      }
    } catch {}
    return foodMenu;
  }, [t]);

  const roomFeatures = useMemo(() => [
    t("accommodationExtra.hotWater"),
    t("accommodationExtra.acFan"),
    t("accommodationExtra.wifi"),
    t("accommodationExtra.cleaning"),
  ], [t]);

  const localizedWhatYouWillReceive = useMemo(() => {
    try {
      const list = t.raw("whatYouWillReceiveList");
      if (Array.isArray(list) && list.length > 0) {
        return whatYouWillReceive.map((item, idx) => ({
          ...item,
          title: list[idx]?.title || item.title,
          description: list[idx]?.description || item.description,
        }));
      }
    } catch {}
    return whatYouWillReceive;
  }, [t]);
  const upcomingDates = useUpcomingBatches(defaultBatches, initialBatches);
  const { toast } = useToast();
  const router = useRouter();
  const { setShowBookingDialog: openBookingDialog } = useBooking();
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const { setShowYogicEnergy } = useYogicEnergy();
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [showQuizThankYou, setShowQuizThankYou] = useState(false);
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [showManualThankYou, setShowManualThankYou] = useState(false);
  const [showSyllabusDialog, setShowSyllabusDialog] = useState(false);
  const [showSyllabusThankYou, setShowSyllabusThankYou] = useState(false);
  const [syllabusEmail, setSyllabusEmail] = useState("");
  const [syllabusEmailError, setSyllabusEmailError] = useState("");
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState("200");
  const [showWebinarThankYou, setShowWebinarThankYou] = useState(false);
  const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
  const [showPreYTTCThankYou, setShowPreYTTCThankYou] = useState(false);
  const [preYTTCForm, setPreYTTCForm] = useState({ name: '', email: '' });
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [manualForm, setManualForm] = useState({ name: '', email: '' });
  const [manualEmail, setManualEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [manualEmailError, setManualEmailError] = useState("");
  const [showWelcomeExpanded, setShowWelcomeExpanded] = useState(false);
  const [activeInclusionTab, setActiveInclusionTab] = useState<'inclusions' | 'exclusions'>('inclusions');
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [webinarForm, setWebinarForm] = useState({
    name: '',
    email: '',
    timezone: '',
    date: '',
    time: ''
  });
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showCalendarDialog, setShowCalendarDialog] = useState(false);
  const [showTourCallDialog, setShowTourCallDialog] = useState(false);
  const [tourEmail, setTourEmail] = useState("");
  const [tourDate, setTourDate] = useState("");
  const [tourTime, setTourTime] = useState("");
  const [tourTimezone, setTourTimezone] = useState("");
  const [isSubmittingTour, setIsSubmittingTour] = useState(false);

  // Carousel state for syllabus
  const [syllabusApi, setSyllabusApi] = useState<CarouselApi>();
  const [currentSyllabus, setCurrentSyllabus] = useState(1);
  const syllabusTotalItems = 11;

  useEffect(() => {
    if (!syllabusApi) return;

    const updateProgress = () => {
      const selected = syllabusApi.selectedScrollSnap();
      const totalSnaps = syllabusApi.scrollSnapList().length;

      if (totalSnaps <= 1) {
        setCurrentSyllabus(1);
        return;
      }

      // Map snap index 0...totalSnaps-1 to item index 1...11
      const scaledCurrent = Math.round((selected / (totalSnaps - 1)) * (syllabusTotalItems - 1)) + 1;
      setCurrentSyllabus(scaledCurrent);
    };

    updateProgress();
    syllabusApi.on("select", updateProgress);
    syllabusApi.on("reInit", updateProgress);
  }, [syllabusApi]);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [showQuickEnquiryDialog, setShowQuickEnquiryDialog] = useState(false);
  const [quickEnquiryForm, setQuickEnquiryForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    countryCode: '',
    contact: '',
    email: '',
    course: ''
  });
  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    countryCode: '',
    contact: '',
    courseName: '',
    courseDate: '',
    accommodation: '',
    gender: '',
    country: '',
    source: '',
    message: ''
  });

  const isEnrollFormComplete = enrollForm.name && enrollForm.email && enrollForm.contact &&
    enrollForm.countryCode &&
    enrollForm.courseName && enrollForm.courseDate && enrollForm.accommodation &&
    enrollForm.gender && enrollForm.country && enrollForm.source;

  const courseDates = [
    "December, 2025", "January, 2026", "February, 2026", "March, 2026", "April, 2026",
    "May, 2026", "June, 2026", "July, 2026", "August, 2026", "September, 2026",
    "October, 2026", "November, 2026", "December, 2026", "January, 2027", "February, 2027",
    "March, 2027", "April, 2027", "May, 2027", "June, 2027", "July, 2027",
    "August, 2027", "September, 2027", "October, 2027", "November, 2027", "December, 2027"
  ];
  const [selectedTimezone, setSelectedTimezone] = useState('UTC +05:30 New Delhi, Mumbai');
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [isFoodSectionOpen, setIsFoodSectionOpen] = useState(true);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(true);
  const foodTriggerRef = useRef<HTMLDivElement>(null);

  // Handle food section toggle with scroll position preservation
  const handleFoodSectionToggle = (open: boolean) => {
    setIsFoodSectionOpen(open);

    // If opening, scroll to the trigger after a brief delay for content to render
    if (open) {
      setTimeout(() => {
        if (foodTriggerRef.current) {
          const yOffset = -100;
          const element = foodTriggerRef.current;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Scroll to top functionality
  const [showPreYttcOptions, setShowPreYttcOptions] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check for #book-now hash and open enrollment dialog
  useEffect(() => {
    const checkAndOpenBookNow = () => {
      if (window.location.hash === '#book-now') {
        setTimeout(() => {
          const bookNowSection = document.getElementById('book-now');
          if (bookNowSection) {
            bookNowSection.scrollIntoView({ behavior: 'smooth' });
          }
          setShowEnrollDialog(true);
          // Clear the hash to allow re-triggering on subsequent visits
          window.history.replaceState(null, '', window.location.pathname);
        }, 300);
      }
    };

    // Check on mount
    checkAndOpenBookNow();

    // Also listen for hash changes (for SPA navigation)
    window.addEventListener('hashchange', checkAndOpenBookNow);
    return () => window.removeEventListener('hashchange', checkAndOpenBookNow);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const isBookingFormComplete = bookingForm.name && bookingForm.contact && bookingForm.countryCode && bookingForm.email && bookingForm.course;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isWebinarFormComplete = webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setShowCompactHeader(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length); // Show email input
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
    setShowQuizThankYou(false);
  };

  const [isMounted, setIsMounted] = useState(false);

  /* Form Submission States */
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);
  const [isSubmittingSyllabus, setIsSubmittingSyllabus] = useState(false);
  const [isSubmittingWebinar, setIsSubmittingWebinar] = useState(false);
  const [isSubmittingPreYTTC, setIsSubmittingPreYTTC] = useState(false);
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [isSubmittingEnroll, setIsSubmittingEnroll] = useState(false);
  const [isSubmittingQuick, setIsSubmittingQuick] = useState(false);

  const submitToFormSubmit = async (fields: Record<string, any>) => {
    const thankYouBase = locale === 'en' ? '' : `/${locale}`;
    let nextUrl = fields._next;
    if (nextUrl && !nextUrl.includes(`/${locale}/thank-you`) && locale !== 'en') {
      nextUrl = nextUrl.replace('/thank-you', `${thankYouBase}/thank-you`);
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language: locale, ...fields }),
    });

    if (response.ok) {
      if (nextUrl) {
        window.location.href = nextUrl;
      }
    } else {
      throw new Error('Failed to send form');
    }
  };

  const handleTourCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourEmail.trim()) return;
    setIsSubmittingTour(true);
    try {
      await submitToFormSubmit({
        formType: 'Book a Call & Virtual Tour',
        email: tourEmail,
        preferredDate: tourDate,
        preferredTime: tourTime,
        timezone: tourTimezone,
        _next: '/thank-you?type=booking'
      });
      setShowTourCallDialog(false);
      // reset fields
      setTourEmail("");
      setTourDate("");
      setTourTime("");
      setTourTimezone("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmittingTour(false);
    }
  };

  const handleQuizSubmit = async () => {
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmittingQuiz(true);

    try {
      await submitToFormSubmit({
        email: email,
        quiz_answers: quizAnswers.join(", "),
        _subject: "New Quiz Result: Yogic Energy",
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for participating in our Yogic Energy Quiz. We have received your results and will reach out to you shortly to discuss your journey!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  const handleBookingSubmit = async () => {
    setIsSubmittingBooking(true);
    const bookingDate = selectedDay && selectedMonth !== null
      ? `${selectedDay} ${new Date(2026, selectedMonth, 1).toLocaleDateString(locale, { month: "long", year: "numeric" })}`
      : "";

    try {
      await submitToFormSubmit({
        ...bookingForm,
        appointment_date: bookingDate,
        appointment_time: selectedTime,
        timezone: selectedTimezone,
        _subject: `New Call Booking: ${bookingForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=booking`,
        _autoresponder: "Namaste! Your call with YogaGarhi has been scheduled. We look forward to connecting with you on the selected date and time to discuss your yoga journey. See you soon!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingBooking(false);
    }
  };

  const handleEnrollSubmit = async () => {
    setIsSubmittingEnroll(true);
    try {
      await submitToFormSubmit({
        ...enrollForm,
        _subject: `New Enrollment: ${enrollForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enrollment`,
        _autoresponder: "Namaste! Thank you for applying to YogaGarhi. We have received your enrollment request. Our admissions team will review your application and contact you within 24 hours with the next steps."
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingEnroll(false);
    }
  };

  const handleQuickEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuick(true);
    try {
      await submitToFormSubmit({
        ...quickEnquiryForm,
        _subject: `New Quick Enquiry: ${quickEnquiryForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for contacting YogaGarhi. We have received your quick enquiry and our team will get back to you within 24 hours."
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingQuick(false);
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingManual(true);
    try {
      await submitToFormSubmit({
        name: manualForm.name,
        email: manualForm.email,
        _subject: "New Free 200-Hour Manual Request",
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=manual`,
        _autoresponder: "Namaste! Thank you for your interest in our Free Yoga Manual. It is on its way to your inbox. We hope it supports your practice and journey. Enjoy!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingManual(false);
    }
  };

  const handleSyllabusSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syllabusEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(syllabusEmail)) {
      setSyllabusEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmittingSyllabus(true);
    trackEvent("download_syllabus_click", { course: "200-hour-bali", email: syllabusEmail });
    try {
      await submitToFormSubmit({
        email: syllabusEmail,
        course: selectedSyllabusCourse,
        _subject: `New Syllabus Request: ${selectedSyllabusCourse} Hour`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=syllabus`,
        _autoresponder: "Namaste! Your requested syllabus guide is being sent to your email. We look forward to seeing you at our Yoga Teacher Training in Bali!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingSyllabus(false);
    }
  };

  const handleWebinarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingWebinar(true);
    try {
      await submitToFormSubmit({
        ...webinarForm,
        _subject: `New Webinar Registration: ${webinarForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=webinar`,
        _autoresponder: "Namaste! You have successfully registered for our Free Orientation Webinar. We will send you the join link and further details shortly. See you there!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingWebinar(false);
    }
  };

  const handlePreYTTCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPreYTTC(true);
    try {
      await submitToFormSubmit({
        ...preYTTCForm,
        _subject: "New Pre-YTTC Info Request",
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for your interest in our Pre-YTTC preparation. We have received your request and will send you all the information shortly. Get ready for transformation!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingPreYTTC(false);
    }
  };

  return (
    <>
      <Layout>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-20">
          {/* Background Container: Full-bleed smart crop on mobile (zero cut faces), full cover on desktop */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1c130d]">
            {/* Single Responsive Picture & exactly ONE <img> in DOM (LCP element) */}
            <picture className="w-full h-full block relative z-10">
              {/* Mobile smart-cropped responsive sources (WebP first for ultra-fast mobile decode) */}
              <source
                media="(max-width: 768px)"
                type="image/avif"
                srcSet="/images/hero/hero-mobile-crop-360.avif 360w, /images/hero/hero-mobile-crop-420.avif 420w"
                sizes="100vw"
              />
              <source
                media="(max-width: 768px)"
                type="image/webp"
                srcSet="/images/hero/hero-mobile-crop-360.webp 360w, /images/hero/hero-mobile-crop-420.webp 420w"
                sizes="100vw"
              />
              {/* Desktop responsive sources (AVIF with WebP fallback) */}
              <source
                media="(min-width: 769px)"
                type="image/avif"
                srcSet="/images/hero/hero-yoga-group-1080.avif 1080w, /images/hero/hero-yoga-group-1280.avif 1280w, /images/hero/hero-yoga-group-1920.avif 1920w"
                sizes="100vw"
              />
              <source
                media="(min-width: 769px)"
                type="image/webp"
                srcSet="/images/hero/hero-yoga-group-1080.webp 1080w, /images/hero/hero-yoga-group-1280.webp 1280w, /images/hero/hero-yoga-group-1920.webp 1920w"
                sizes="100vw"
              />
              {/* Single Image Tag in entire DOM */}
              <img
                src="/images/hero/hero-mobile-crop-420.webp"
                alt={`${t("hero.h1")} - YogaGarhi`}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                width={420}
                height={640}
                className="w-full h-full object-cover object-[47%_68%] md:object-center block"
              />
            </picture>

            {/* Contrast overlay for WCAG AA text readability */}
            <div className="absolute inset-0 z-10 bg-black/45 md:bg-black/40 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight opacity-0 animate-fade-in text-white leading-tight mb-8" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {t("hero.h1")}
              </h1>

              <div className="space-y-6 opacity-0 animate-fade-in mb-8" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed text-white/90">
                  {t("hero.sub")}
                </p>
              </div>

              {/* Trust Line & Pricing */}
              <div className="space-y-4 opacity-0 animate-fade-in mb-8" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <p className="text-lg md:text-xl font-medium text-white/90">
                  {t("hero.quickBatch")} • {t("hero.quickLevel")} • {t("hero.badge")}
                </p>
                {courseKey === "200-hour" && (
                  <div className="inline-block bg-black/30 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10">
                    <p className="text-white font-semibold">
                      Tuition only from {COURSE_200_HOUR_PRICING.shared.price} | Residential packages from {COURSE_200_HOUR_PRICING.private.price}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      Next available training: <span suppressHydrationWarning>{upcomingDates[0]?.date || initialBatches?.[0]?.date || BATCHES_200_HOUR[0].date}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center pt-4 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <Button
                    variant="hero"
                    size="xl"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                    onClick={() => {
                      trackEvent("enroll_click", { course: "200-hour-bali", section: "hero" });
                      setShowEnrollDialog(true);
                    }}
                  >
                    {t("hero.btnReserve")}
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-xl"
                    onClick={() => {
                      trackEvent("video_call_click", { course: "200-hour-bali", section: "hero" });
                      setShowCalendarDialog(true);
                    }}
                  >
                    {t("hero.btnCounselor")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ===== COURSE DETAILS BAR ===== */}
        <section className="py-8 bg-secondary/50 border-b border-border/50">
          <div className="container mx-auto px-4">
            {/* Main Course Info Row - Static Border Container */}
            <div className="relative rounded-xl border-2 border-primary/40 bg-background shadow-card p-4 sm:p-6 md:p-8">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 items-center min-w-0">
                  {/* Course Duration */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.course")}</p>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base break-words hyphens-auto">{t("quickInfo.courseVal")}</p>
                  </div>

                  {/* Course Length */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.duration")}</p>
                    <p data-course-duration className="font-heading font-semibold text-foreground text-sm sm:text-base break-words hyphens-auto">{t("quickInfo.durationVal")}</p>
                  </div>

                  {/* Yoga Style */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.style")}</p>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base break-words hyphens-auto">{t("quickInfo.styleVal")}</p>
                  </div>

                  {/* Level */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.level")}</p>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base break-words hyphens-auto">{t("quickInfo.levelVal")}</p>
                  </div>

                  {/* Certification */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.certification")}</p>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base break-words hyphens-auto">{t("quickInfo.certificationVal")}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center lg:text-left border-b sm:border-b-0 sm:border-r border-border/30 pb-3 sm:pb-0 sm:pr-4 last:border-0 min-w-0 break-words">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t("quickInfo.startingFrom")}</p>
                    <div className="flex flex-col items-center lg:items-start min-w-0">
                      <div className="flex items-baseline gap-2 justify-center lg:justify-start flex-wrap">
                        <span className="text-base text-muted-foreground line-through opacity-60">{startingPrice.originalPrice}</span>
                        <div className="relative group">
                          <span className="font-heading text-4xl md:text-5xl font-extrabold text-primary drop-shadow-[0_0_15px_rgba(255,140,0,0.3)] animate-pulse inline-block">
                            {startingPrice.price}
                          </span>
                          <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </div>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold bg-green-500 text-white rounded-full shadow-lg shadow-green-500/20 transform hover:scale-105 transition-transform max-w-full break-words">
                        <Zap className="w-3.5 h-3.5 fill-current shrink-0" />
                        <span>{t("quickInfo.earlyBirdDiscount")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="col-span-1 sm:col-span-2 md:col-span-1 flex justify-center lg:justify-end min-w-0 pt-2 sm:pt-0">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full md:w-auto"
                      onClick={() => {
                        trackEvent("book_now_click", { course: courseKey, section: "details_bar" });
                        setShowEnrollDialog(true);
                      }}
                    >
                      {tCommon("bookNow")}
                    </Button>
                  </div>
                </div>

                {/* What's Included / Bonus Row */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-4 min-w-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground break-words">{t("highlights.smallGroups")}</p>
                        <p className="text-xs text-muted-foreground break-words">{t("highlights.smallGroupsSub")}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground break-words">{t("highlights.preYttc")}</p>
                        <p className="text-xs text-muted-foreground break-words">{t("highlights.preYttcSub")}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground break-words">{t("highlights.mentorship")}</p>
                        <p className="text-xs text-muted-foreground break-words">{t("highlights.mentorshipSub")}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground break-words">{t("highlights.goodieBag")}</p>
                        <p className="text-xs text-muted-foreground break-words">{t("highlights.goodieBagSub")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY YOGAGARHI HIGHLIGHT BOX & RISHIKESH / VARKALA SECTIONS ===== */}
        {isRishikesh ? (
          <>
            <TrustBadgesRow />
            <WhyRishikeshSection />
            <YogaGarhiDifferenceSection />
          </>
        ) : isVarkala ? (
          <>
            <TrustBadgesRowVarkala />
            <WhyVarkalaSection />
            <YogaGarhiDifferenceVarkalaSection />
          </>
        ) : (
          courseKey !== "200-hour-rishikesh" && (
            <WhyYogaGarhiBox namespace={namespace}
              onCheckAvailability={() => {
                trackEvent("enroll_click", { course: courseKey, section: "why_yogagarhi" });
                setShowEnrollDialog(true);
              }}
              onBookCall={() => {
                trackEvent("video_call_click", { course: courseKey, section: "why_yogagarhi" });
                setShowCalendarDialog(true);
              }}
            />
          )
        )}

        {/* ===== REAL STUDENT VIDEO REVIEWS & BOOK CALL (HIGH CONVERSION) ===== */}
        {!isRishikesh && !isVarkala && (
          <TopVideoReviewsSection
            onBookCall={() => {
              trackEvent("video_call_click", { course: courseKey, section: "top_video_reviews" });
              setShowCalendarDialog(true);
            }}
          />
        )}

        <WhyChooseUs />

        {/* ===== STUDENT TESTIMONIALS SECTION ===== */}
        <section className="py-20 bg-secondary/20 overflow-hidden relative">
          {/* Subtle background decorative shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest mb-3">
                {t("studentStories.badge")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
                {t("studentStories.heading")}
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground italic">
                {t("studentStories.sub")}
              </p>
            </div>

            {/* Horizontal Scrollable Testimonial Cards */}
            <div className="relative">
              {/* Gradient fade edges for scroll visual */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/10 to-transparent z-10 pointer-events-none" />

              <div className="w-full max-w-full overflow-x-auto scrollbar-hide pb-6 px-1 flex gap-4 md:gap-6 snap-x snap-mandatory">
                {((t.raw("studentStories.stories") as any[]) || [
                  {
                    name: "Gurpreet Kaur Dhou",
                    country: "Canada",
                    quote: "YogaGhari is truly authentic and deeply rooted in the real essence of yoga. From the very beginning, I felt seen and supported as a person, not treated as just another number. The teachers genuinely care about your growth and help you build confidence in your own voice.",
                    avatarLetter: "G"
                  },
                  {
                    name: "Ilksen Doğan",
                    country: "Turkey",
                    quote: "Sachin is hands down one of the most knowledgeable yoga teachers I have been taught by. Despite me being an absolute beginner, he was patient and encouraging. I was able to confidently understand the foundations of asana alignment.",
                    avatarLetter: "I"
                  },
                  {
                    name: "Aleksandra Dyachenko",
                    country: "Russia",
                    quote: "I completed my 200-hour yoga teacher training in Bali, and it was truly magical. 🌺 The knowledge I gained was deep and authentic. The teachers are real mentors who teach from the heart with kindness and wisdom. Felt like being part of a big, warm family.",
                    avatarLetter: "A"
                  },
                  {
                    name: "Amy Letourneau",
                    country: "Canada",
                    quote: "Sachin is such an amazing teacher and human. The training I did here in Bali was the start of a beautiful yoga journey, which has now led me to be confident enough to teach in multiple countries around the world.",
                    avatarLetter: "A"
                  },
                  {
                    name: "Lisa Beltman",
                    country: "Germany",
                    quote: "I really appreciate Sachin Ji’s calm, friendly, and welcoming energy. He is knowledgeable and takes the time to guide each student with care. His classes are structured in such a way that you find yourself doing more than you thought you could.",
                    avatarLetter: "L"
                  },
                  {
                    name: "Nicole Drake",
                    country: "Australia",
                    quote: "Sachin’s instruction helped my practice and asana skills develop beyond what I believed I could achieve. I learned the traditional way to practice yoga, with extensive knowledge in anatomy, traditional practice, and alignment.",
                    avatarLetter: "N"
                  }
                ]).map((story, idx) => (
                  <div
                    key={idx}
                    className="w-[300px] md:w-[380px] bg-card rounded-2xl border border-border/80 p-8 shadow-sm flex flex-col justify-between flex-shrink-0 snap-align-start hover:shadow-md hover:border-primary/30 transition-all duration-300 relative group"
                  >
                    {/* Quotation icon overlay */}
                    <span className="absolute right-6 top-6 text-primary/10 text-6xl font-serif pointer-events-none group-hover:text-primary/20 transition-colors select-none">
                      “
                    </span>

                    <div className="space-y-4">
                      {/* Rating stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic relative z-10">
                        "{story.quote}"
                      </p>
                    </div>

                    {/* Student Info */}
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/60">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-heading text-lg flex-shrink-0 border border-primary/20">
                        {story.avatarLetter}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors break-words">
                          {story.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                            {story.country}
                          </p>
                          <span className="text-[10px] text-primary/80 font-medium">
                            • Google Review
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Video Testimonials */}
            <div className="text-center mt-10">
              <a
                href="#student-stories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-medium text-sm transition-all duration-300 border border-border shadow-sm group"
              >
                <span>{t("watchVideoStories")}</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== WELCOME SECTION ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Heading (shows first on mobile, top right on desktop) */}
              <div className="order-1 lg:col-start-2 lg:row-start-1 space-y-4 mb-2 lg:mb-0 text-left">
                <span className="text-accent font-bold uppercase tracking-widest text-xs">YogaGarhi</span>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground leading-tight">
                  {t("overview.heading")}
                </h2>
                <div className="w-16 h-1 bg-accent rounded-full" />
              </div>

              {/* Single YouTube Facade instance for both Mobile and Desktop */}
              <div className="relative w-full order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 mb-6 lg:mb-0 lg:sticky lg:top-24 self-start">
                <CourseVideoFacade youtubeVideoId="U1r2mQRmWXM" title={`${t("hero.h1")} - YogaGarhi Campus Tour`} />
              </div>

              {/* Text Body & Tour Call (order 3 on mobile, below heading in right column on desktop) */}
              <div className="order-3 lg:col-start-2 lg:row-start-2 space-y-6 text-muted-foreground leading-relaxed text-left">
                {/* First 2 paragraphs - always visible */}
                <p className="text-base sm:text-lg text-foreground/80 font-medium">
                  {t("storyP1")}
                </p>

                <p>
                  {t("storyP2")}
                </p>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${showWelcomeExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="pt-6">
                    {t("overview.story")}
                  </p>
                </div>

                {/* Read More / Read Less Button */}
                <button
                  onClick={() => setShowWelcomeExpanded(!showWelcomeExpanded)}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-2 group"
                >
                  {showWelcomeExpanded ? tCommon("readLess") : tCommon("readMore")}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showWelcomeExpanded ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Consolidated Tour Call Card */}
                <div className="mt-8 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-primary/10 shadow-sm text-center md:text-left">
                  <h3 className="font-heading text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">
                    {t("tourCall.heading")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 lg:mb-6">
                    {t("tourCall.sub")}
                  </p>
                  <Button
                    className="w-full h-auto py-3.5 lg:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold hover:opacity-95 transition-all shadow-lg text-sm md:text-base flex items-center justify-center gap-2 lg:gap-3 rounded-xl whitespace-normal"
                    onClick={() => {
                      trackEvent("video_call_click", { course: "200-hour-bali", section: "tour_call" });
                      setShowTourCallDialog(true);
                    }}
                  >
                    <Video className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0" />
                    <span className="text-center">{t("tourCall.cta")}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COURSE SYLLABUS ===== */}
        <section className="py-20 bg-background overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 979px" }}>
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              {t("curriculum.heading")}
            </h2>
            {/* Decorative Book/Scroll Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 6 C24 6 18 4 8 4 C4 4 2 6 2 8 L2 26 C2 28 4 30 8 30 C18 30 24 28 24 28" />
                <path d="M24 6 C24 6 30 4 40 4 C44 4 46 6 46 8 L46 26 C46 28 44 30 40 30 C30 30 24 28 24 28" />
                <line x1="24" y1="6" x2="24" y2="28" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("curriculum.sub")}
            </p>

            {/* Horizontal Scrollable Cards */}
            <div className="relative">
              <div tabIndex={0} role="region" aria-label="Course schedule and activities" className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 focus:outline-none">
                {[
                  syllabusAshtanga,
                  syllabusHathaVinyasa,
                  syllabus3,
                  syllabusPranayamaBreathing,
                  syllabusAnatomyPhysiology,
                  syllabus6,
                  syllabusMeditationMantra,
                  syllabus8,
                  syllabus9,
                  syllabus10,
                  syllabusMudras,
                ].map((image, index) => {
                  const card = (t.raw("syllabus.cards") as any[])?.[index] || {};
                  return (
                    <div key={index} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center">
                      <div className="flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 group">
                        {/* Rectangular Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={image}
                            alt={card.title || ""}
                            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Slide Counter - Mobile Friendly */}
                          <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-primary-foreground rounded-full px-3 py-1 text-xs font-bold shadow-lg flex items-center gap-1">
                            <span className="text-secondary">{index + 1}</span>
                            <span className="opacity-60">/</span>
                            <span>11</span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expandable Detailed Syllabus (Semantic HTML) */}
            {syllabusSlot}

            {/* Comprehensive Curriculum & Academic Modules */}
            {isRishikesh && <RishikeshCourseStudyGuide />}
            {isVarkala && <VarkalaCourseStudyGuide />}

            <div className="text-center mt-12">
              <Dialog open={showSyllabusDialog} onOpenChange={setShowSyllabusDialog}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white hover:from-[#FF4500] hover:to-[#FF8C00] font-bold px-10 shadow-xl shadow-orange-500/30 hover:scale-105 transition-all duration-300 border-none h-14 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Detailed Syllabus
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center">
                      Download Syllabus
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground text-sm">
                      Select your course and enter email to receive the detailed syllabus.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSyllabusSubmit} className="space-y-4 pt-4">
                    <select
                      value={selectedSyllabusCourse}
                      onChange={(e) => setSelectedSyllabusCourse(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="100">100 Hour YTTC</option>
                      <option value="200">200 Hour YTTC</option>
                      <option value="300">300 Hour YTTC</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={syllabusEmail}
                      onChange={(e) => {
                        setSyllabusEmail(e.target.value);
                        setSyllabusEmailError("");
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${syllabusEmailError ? 'border-red-500' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {syllabusEmailError && (
                      <p className="text-sm text-red-500">{syllabusEmailError}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmittingSyllabus}
                    >
                      {isSubmittingSyllabus ? "Sending..." : "Send Syllabus"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Want to see the hour-by-hour breakdown and reading list?
              </p>

              {/* Syllabus Thank You Dialog */}
              <Dialog open={showSyllabusThankYou} onOpenChange={(open) => {
                setShowSyllabusThankYou(open);
                if (!open) {
                  setSyllabusEmail("");
                  setSyllabusEmailError("");
                }
              }}>
                <DialogContent className="sm:max-w-md text-center">
                  <div className="py-6 space-y-6">
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                        Thank You! 🙏
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Your {selectedSyllabusCourse}-hour YTTC syllabus is on its way to <span className="font-medium text-foreground">{syllabusEmail}</span>
                      </DialogDescription>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>{tDialog("inboxNotice")}</p>
                    </div>
                    <Button
                      onClick={() => {
                        setShowSyllabusThankYou(false);
                        setSyllabusEmail("");
                        setSyllabusEmailError("");
                      }}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== HOURS STRUCTURE (CONDITIONAL) ===== */}
        <CourseHoursStructureSection namespace={namespace} />

        {/* ===== MEET YOUR TEACHERS (CONDITIONAL) ===== */}
        <MeetYourTeachersSection />

        {/* ===== SPECIAL WORKSHOPS ===== */}
        <section className="py-20 bg-secondary/30" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 2426px" }}>
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Special Workshops Included
            </h2>
            {/* Decorative Hands/Mudra Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-12 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 28 L12 16 C12 12 16 10 20 14 L20 8 C20 4 24 4 24 8 L24 14 C24 10 28 10 28 14 L28 20 C28 18 32 18 32 22 L32 28" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="20" r="6" fill="none" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Enhance your training with these exclusive bonus workshops — all included free
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {localizedWorkshops.map((workshop, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                    {/* Workshop Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-heading font-bold text-primary-foreground text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title on Image */}
                    <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-bold text-white leading-tight">
                      {workshop.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {workshop.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-4 h-0.5 w-12 bg-primary/50 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== POST-PROGRAM SUPPORT ===== */}
        <section className="py-24 bg-background" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 2248px" }}>
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Post-Program Support
              </h2>
              {/* Decorative Flourish */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-12 h-6 text-primary" viewBox="0 0 48 24" fill="none">
                  <path d="M24 12C24 12 20 4 12 4C4 4 0 12 0 12C0 12 4 20 12 20C20 20 24 12 24 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M24 12C24 12 28 4 36 4C44 4 48 12 48 12C48 12 44 20 36 20C28 20 24 12 24 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="36" cy="12" r="2" fill="currentColor" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>

            {/* Support Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: postSupport1,
                  title: "Bi-annual Upgrade Programs",
                  description: "Programs to deepen your experience of the practices and upgrade your teaching skills"
                },
                {
                  image: postSupport2,
                  title: "Extensive Alumni Support",
                  description: "A dedicated alumni platform for queries, clarifications, and continuous learning"
                },
                {
                  image: postSupport3,
                  title: "Community Connection",
                  description: "Integration into a vibrant and supportive global community of YogaGarhi alumni"
                },
                {
                  image: postSupport4,
                  title: "Teaching Resources",
                  description: "Access to a repository of articles, videos, and teaching materials"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  {/* Circular Image */}
                  <div className="relative mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary/30 transition-all duration-300 shadow-card group-hover:shadow-elevated flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Highlights - Important Support Pillars */}
            <div className="mt-20">
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Lifetime Course Repetition */}
                <div className="group relative p-6 rounded-2xl bg-white dark:bg-card border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">{tWhy("repeatTitle")}</h4>
                  <p className="text-xs text-muted-foreground">{tWhy("repeatDesc")}</p>
                </div>

                {/* Assistant Teaching Opportunities */}
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2 break-words hyphens-auto min-w-0">{tWhy("assistantTitle")}</h4>
                  <p className="text-xs text-muted-foreground break-words">{tWhy("assistantDesc")}</p>
                </div>

                {/* Global Alumni Network */}
                <div className="group relative p-6 rounded-2xl bg-white dark:bg-card border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">{tWhy("communityTitle")}</h4>
                  <p className="text-xs text-muted-foreground">{tWhy("communityDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FounderSection researchLink="#sachinji-research" />

        <StudentStoriesSection />

        {/* ===== DAILY SCHEDULE ===== */}
        <section className="py-20 bg-secondary/30" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1467px" }}>
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              {t("schedule.heading")}
            </h2>
            {/* Decorative Sun Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="9" />
                {/* Sun rays */}
                {isMounted && [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line key={i} x1={20 + 11 * Math.cos(angle * Math.PI / 180)} y1={20 + 11 * Math.sin(angle * Math.PI / 180)} x2={20 + 16 * Math.cos(angle * Math.PI / 180)} y2={20 + 16 * Math.sin(angle * Math.PI / 180)} />
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("schedule.sub")}
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-4">
                {/* Vertical connecting line */}
                <div className="absolute left-[calc(6rem+1.5rem+0.5rem-1px)] md:left-[calc(7rem+1.5rem+0.5rem-1px)] top-2 bottom-2 w-0.5 bg-primary/30" />

                {[
                  { time: t("schedule.time1"), activity: t("schedule.act1") },
                  { time: t("schedule.time2"), activity: t("schedule.act2") },
                  { time: t("schedule.time3"), activity: t("schedule.act3") },
                  { time: t("schedule.time4"), activity: t("schedule.act4") },
                  { time: t("schedule.time5"), activity: t("schedule.act5") },
                  { time: t("schedule.time6"), activity: t("schedule.act6") },
                  { time: t("schedule.time7"), activity: t("schedule.act7") },
                  { time: t("schedule.time8"), activity: t("schedule.act8") },
                  { time: t("schedule.time9"), activity: t("schedule.act9") },
                  { time: t("schedule.time10"), activity: t("schedule.act10") },
                  { time: t("schedule.time11"), activity: t("schedule.act11") },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-2.5 sm:gap-6 min-w-0"
                  >
                    {/* Time */}
                    <div className="w-20 sm:w-24 md:w-28 flex-shrink-0 text-right min-w-0">
                      <span className="font-heading text-sm sm:text-lg md:text-xl font-semibold text-primary break-words">{item.time}</span>
                    </div>

                    {/* Timeline dot with pulse animation */}
                    <div className="flex-shrink-0 z-10">
                      <div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary animate-pulse-dot"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </div>

                    {/* Activity card */}
                    <div className="flex-1 min-w-0 bg-card border border-border rounded-lg px-3.5 sm:px-6 py-3 sm:py-4 shadow-sm">
                      <span className="text-foreground font-medium text-xs sm:text-base break-words">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-center text-sm text-muted-foreground">
                {t("sunday.note")}
              </p>

              {/* Sunday Schedule CTA Button */}
              <div className="flex flex-col items-center gap-6 mt-8">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/sunday-schedule">
                    {t("sunday.cta")}
                  </Link>
                </Button>

                {/* Special Offer Box */}
                <div className="bg-amber-100/95 dark:bg-amber-900/40 border border-amber-200/50 dark:border-amber-800/50 px-6 py-3 rounded-xl shadow-xl animate-bounce-subtle backdrop-blur-md text-center max-w-lg mx-auto">
                  <p className="text-amber-900 dark:text-amber-100 text-sm font-bold leading-relaxed">
                    {tPromo("heroSpecialOfferPrefix")} <span className="text-amber-600 dark:text-amber-400">{tPromo("heroSpecialOfferHighlight")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section >




        {/* ===== UPCOMING DATES ===== */}
        <section id="book-now" className="py-20 bg-background scroll-mt-24" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 2932px" }}>
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
              {courseKey.includes("100") ? "100" : courseKey.includes("300") ? "300" : "200"} Hour Yoga Teacher Training
            </h2>
            <p className="text-center text-primary font-heading text-lg tracking-[0.3em] uppercase mb-2">
              Upcoming Dates
            </p>
            {/* Decorative Calendar Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="10" width="28" height="24" rx="3" />
                <line x1="6" y1="18" x2="34" y2="18" />
                <line x1="14" y1="6" x2="14" y2="12" />
                <line x1="26" y1="6" x2="26" y2="12" />
                <circle cx="14" cy="26" r="2" fill="currentColor" />
                <circle cx="20" cy="26" r="2" fill="currentColor" />
                <circle cx="26" cy="26" r="2" fill="currentColor" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Dates List */}
                <div className="lg:col-span-2 space-y-0 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
                  {upcomingDates.map((item, index) => {
                    const { isFull, isUrgent, text: badgeText, colorClass: badgeColorClass } = getBatchBadge(item);
                    return (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-4 hover:bg-secondary/30 transition-colors duration-200"
                      >
                        {/* Date */}
                        <div className="flex flex-col gap-1 min-w-[200px]">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-foreground">{item.date}</span>
                          </div>
                          {isUrgent && (
                            <span className="text-xs font-semibold text-amber-600 dark:text-amber-500 flex items-center gap-1 mt-1 animate-pulse">
                              🔥 Hurry up! Limited seats, fast filling. Book quickly!
                            </span>
                          )}
                        </div>

                        {/* Spots Left, Early Bird & Button */}
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
                          {isFull ? (
                            <span className="text-sm px-3 py-1.5 rounded-md whitespace-nowrap bg-muted text-muted-foreground">
                              Fully Booked
                            </span>
                          ) : (
                            <span className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap ${badgeColorClass}`}>
                              {badgeText}
                            </span>
                          )}

                          {/* Early Bird */}
                          <div className={`text-center ${isFull ? "opacity-40" : ""}`}>
                            <p className="font-heading font-bold text-foreground text-sm">{t("pricing.earlyBirdPrice")}</p>
                            <p className="text-primary text-sm font-medium">{tCommon("save")} {item.earlyBirdSaving}</p>
                          </div>

                          {/* Book Button */}
                          {isFull ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="whitespace-nowrap bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground border border-border"
                              onClick={() => {
                                toast({
                                  title: "Full Now",
                                  description: "This batch is fully booked.",
                                  variant: "destructive",
                                });
                              }}
                            >
                              Full
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                trackEvent("book_now_click", { course: "200-hour-bali", section: "dates_table", batch: item.date });
                                setShowEnrollDialog(true);
                              }}
                            >
                              {tCommon("bookNow")}
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pricing Card */}
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-xl overflow-hidden sticky top-24">
                    {/* Header */}
                    <div className="bg-primary text-primary-foreground p-4 text-center">
                      <h3 className="font-heading font-bold text-lg tracking-wide">{t("pricing.heading")}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-5">
                      <p className="text-center text-foreground font-medium border-b border-border pb-4">
                        {t("pricing.residentialDuration")}
                      </p>

                      {/* Tuition Fees */}
                      {datesPricing.tuition && (
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("pricing.tuitionFees")}</p>
                          <p className="font-heading text-2xl font-bold text-foreground">
                            {datesPricing.tuition.price}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span className="line-through">{datesPricing.tuition.originalPrice}</span>
                            <span className="ml-2 text-green-600 font-semibold">({t("pricing.saveUSD")})</span>
                          </p>
                        </div>
                      )}

                      {/* Triple Sharing */}
                      {datesPricing.triple && (
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("pricing.tripleSharing")}</p>
                          <p className="font-heading text-2xl font-bold text-foreground">
                            {datesPricing.triple.price}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span className="line-through">{datesPricing.triple.originalPrice}</span>
                            <span className="ml-2 text-green-600 font-semibold">({t("pricing.saveUSD")})</span>
                          </p>
                        </div>
                      )}

                      {/* Double Sharing */}
                      {datesPricing.double && (
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("pricing.doubleSharing")}</p>
                          <p className="font-heading text-2xl font-bold text-foreground">
                            {datesPricing.double.price}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span className="line-through">{datesPricing.double.originalPrice}</span>
                            <span className="ml-2 text-green-600 font-semibold">({t("pricing.saveUSD")})</span>
                          </p>
                        </div>
                      )}

                      {/* Private Room */}
                      {datesPricing.private && (
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("pricing.privateRoom")}</p>
                          <p className="font-heading text-2xl font-bold text-foreground">
                            {datesPricing.private.price}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span className="line-through">{datesPricing.private.originalPrice}</span>
                            <span className="ml-2 text-green-600 font-semibold">({t("pricing.saveUSD")})</span>
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => {
                          trackEvent("enroll_click", { course: "200-hour-bali", section: "dates_pricing_card" });
                          setShowEnrollDialog(true);
                        }}
                      >
                        {tCommon("applyNow")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ===== INCLUSIONS / EXCLUSIONS ===== */}
        < section className="py-20 bg-secondary/30" >
          <div className="container mx-auto px-4">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveInclusionTab('inclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${activeInclusionTab === 'inclusions'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border border-border hover:bg-secondary'
                  }`}
              >
                {t("inclusions.heading")}
              </button>
              <button
                onClick={() => setActiveInclusionTab('exclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${activeInclusionTab === 'exclusions'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border border-border hover:bg-secondary'
                  }`}
              >
                {t("inclusions.notIncHeading")}
              </button>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              {activeInclusionTab === 'inclusions' ? (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    {t("inclusions.heading")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {((t.raw("inclusionsList") as string[]) || inclusions).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    {t("inclusions.notIncHeading")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {((t.raw("exclusionsList") as string[]) || exclusions).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section >


        {/* ===== WHAT YOU WILL RECEIVE ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              {t("inclusions.heading")}
            </h2>
            {/* Decorative Mandala Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="20" cy="20" r="16" />
                <circle cx="20" cy="20" r="6" strokeDasharray="2 2" />
                {/* Orbital dots */}
                {isMounted && [0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <circle key={i} cx={20 + 10 * Math.cos(angle * Math.PI / 180)} cy={20 + 10 * Math.sin(angle * Math.PI / 180)} r="3" fill="currentColor" />
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto italic">
              {t("inclusions.sub")}
            </p>

            {/* Horizontal Scrollable Flip Cards */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div tabIndex={0} role="region" aria-label="What you will receive" className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 focus:outline-none">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {localizedWhatYouWillReceive.map((item, index) => (
                    <div
                      key={index}
                      className="flip-card w-64 h-72 flex-shrink-0 cursor-pointer"
                      onClick={(e) => {
                        const card = e.currentTarget;
                        card.classList.toggle('flipped');
                      }}
                    >
                      <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                        {/* Front - Image */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-heading text-lg font-semibold text-white text-center">
                              {(t.raw("whatYouWillReceiveList") as any[])?.[index]?.title || item.title}
                            </h3>
                            <p className="text-xs text-white/70 mt-1 text-center md:hidden">{t("tapHover.tap")}</p>
                            <p className="text-xs text-white/70 mt-1 text-center hidden md:block">{t("tapHover.hover")}</p>
                          </div>
                        </div>

                        {/* Back - Content */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card rotate-y-180 bg-card">
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                              <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                              {(t.raw("whatYouWillReceiveList") as any[])?.[index]?.title || item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {(t.raw("whatYouWillReceiveList") as any[])?.[index]?.description || item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ===== WHAT YOU'LL CARRY HOME - UNIQUE COMPACT DESIGN ===== */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left Column: Heading */}
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Heart className="w-3 h-3 text-primary" fill="currentColor" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">{t("takeaway.badge")}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {t("takeaway.heading")} <br />
                  <span className="text-primary italic">{t("takeaway.headingItalic")}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("takeaway.sub")}
                </p>
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden group/box">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <p className="text-xs md:text-sm text-foreground font-medium leading-relaxed relative z-10">
                    <span className="text-primary font-bold">{t("takeaway.careerImpactTitle")}</span> {t("takeaway.careerImpactDesc")}
                  </p>
                  <Globe className="absolute -bottom-2 -right-2 w-12 h-12 text-primary/10 group-hover/box:text-primary/20 transition-colors duration-500" />
                </div>
                <div className="mt-8 hidden lg:block">
                  <div className="w-12 h-1 bg-primary/30 rounded-full" />
                </div>
              </div>

              {/* Right Column: Compact Grid */}
              <div className="lg:w-2/3 grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12">
                {[
                  {
                    title: t("takeaway.card1Title"),
                    desc: t("takeaway.card1Desc"),
                    icon: Award
                  },
                  {
                    title: t("takeaway.card2Title"),
                    desc: t("takeaway.card2Desc"),
                    icon: Activity
                  },
                  {
                    title: t("takeaway.card3Title"),
                    desc: t("takeaway.card3Desc"),
                    icon: ShieldCheck
                  },
                  {
                    title: t("takeaway.card4Title"),
                    desc: t("takeaway.card4Desc"),
                    icon: Sparkles
                  },
                  {
                    title: t("takeaway.card5Title"),
                    desc: t("takeaway.card5Desc"),
                    icon: GraduationCap
                  },
                  {
                    title: t("takeaway.card6Title"),
                    desc: t("takeaway.card6Desc"),
                    icon: Users
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex flex-col items-start">
                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAM TIMELINE HIGHLIGHTS ===== */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Preparation */}
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {t("timeline.prepTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("timeline.prepDesc")}
                  </p>
                </div>

                {/* Training Dates */}
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {t("timeline.datesTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("timeline.datesDesc")}
                  </p>
                </div>

                {/* Lifetime Support */}
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {t("timeline.supportTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("timeline.supportDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ACCOMMODATION ===== */}
        {/* Hero Banner with Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image src={apartPoolVilla} alt="Bali yoga retreat accommodation" fill sizes="100vw" className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Main Title */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.15em] uppercase mb-8">
              {t("accommodationExtra.featuresTitle")}
            </h2>

            {/* Subtitle */}
            <p className="font-heading text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed">
              {t("accommodationExtra.featuresSub")}
            </p>

            {/* Location Features */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 - Waterfalls */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  {t("accommodationExtra.feat1")}
                </p>
              </div>

              {/* Feature 2 - Private Forest */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  {t("accommodationExtra.feat2")}
                </p>
              </div>

              {/* Feature 3 - Rice-field Trekking */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  {t("accommodationExtra.feat3")}
                </p>
              </div>

              {/* Feature 4 - Distance to Ubud */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  {t("accommodationExtra.feat4")}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ===== ACCOMMODATION GALLERY ===== */}
        <section className="py-12 bg-background border-t border-border/50">
          <div className="container mx-auto px-4">
            <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-8">
              {t("accommodationExtra.glimpses")}
            </h3>

            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div tabIndex={0} role="region" aria-label="Special workshops" className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 focus:outline-none">
                {[
                  apartGallery1, apartGallery2, apartGallery3, apartGallery4, apartGallery5,
                  apartGallery6, apartGallery7, apartGallery8, apartGallery9, apartGallery10
                ].map((img, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-[85vw] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden snap-center group"
                  >
                    <Image
                      src={img}
                      alt={`Accommodation Gallery ${index + 1}`}
                      fill sizes="(max-width: 768px) 85vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-20 bg-background" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 2374px" }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">{t("pricing.choosePackage")}</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("accommodation.heading")}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("accommodation.sub")}
              </p>
            </div>

            <div className={pricingConfig.tuition ? "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" : "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"}>
              {[
                ...(pricingConfig.tuition ? [{
                  title: t("pricing.tuitionOnly"),
                  beds: t("accommodationExtra.courseOnly"),
                  description: t("pricing.tuitionOnlyDesc"),
                  originalPrice: pricingConfig.tuition.originalPrice,
                  price: pricingConfig.tuition.price,
                  images: [apartGroupClass, apartSeatedTalk, apartGroupPose, apartChildPose, apartMountainPose],
                  features: ["Yoga Shala", "TTC Manual", "Wi-Fi", "All Classes"],
                  badge: t("accommodationExtra.courseOnly"),
                  isPopular: false,
                }] : []),
                {
                  title: t("pricing.triple"),
                  beds: 3,
                  description: t("pricing.tripleDesc"),
                  originalPrice: pricingConfig.triple.originalPrice,
                  price: pricingConfig.triple.price,
                  images: [tripleBalcony, tripleBathroom, tripleBedroom1, tripleBedroom2, tripleBedroom3],
                  features: roomFeatures,
                  badge: null,
                  isPopular: false,
                },
                {
                  title: t("pricing.double"),
                  beds: 2,
                  description: t("pricing.doubleDesc"),
                  originalPrice: pricingConfig.double.originalPrice,
                  price: pricingConfig.double.price,
                  images: [doubleBedroom1, doubleBedroom2, doubleBedroom3, doubleBedroom4, doubleBalcony],
                  features: roomFeatures,
                  badge: t("accommodationExtra.mostPopular"),
                  isPopular: true,
                },
                {
                  title: t("pricing.private"),
                  beds: 1,
                  description: t("pricing.privateDesc"),
                  originalPrice: pricingConfig.private.originalPrice,
                  price: pricingConfig.private.price,
                  images: [
                    privateNew2,
                    privateNew3,
                    privateNew4,
                    privateNew1,
                    privateBedroom1,
                    privateBedroom2,
                    privateBedroom3,
                    privateBathroom,
                    privateBalcony,
                  ],
                  features: roomFeatures,
                  badge: t("accommodationExtra.premium"),
                  isPopular: false,
                },
              ].map((room, roomIndex) => (
                <RoomCard
                  key={roomIndex}
                  room={room}
                  onBookNow={() => {
                    trackEvent("book_now_click", { course: courseKey, section: "room_card", room: room.title });
                    setShowEnrollDialog(true);
                  }}
                />
              ))}
            </div>

            {/* Common Amenities */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-center text-foreground mb-8">
                {t("accommodationExtra.allRooms")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: t("accommodationExtra.wifi") },
                  { icon: Droplets, label: t("accommodationExtra.hotWater") },
                  { icon: Wind, label: t("accommodationExtra.acFan") },
                  { icon: Sparkles, label: t("accommodationExtra.cleaning") },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>



        {/* ===== SATTVIC FOOD ===== */}
        <section className="py-20 bg-secondary/20 relative overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 3346px" }}>
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header - Always Visible */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <UtensilsCrossed className="w-4 h-4" />
                Nourishment for Body & Soul
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Sattvic Food Experience
              </h2>
              {/* Decorative Leaf/Plant Icon */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 36 C20 36 20 20 20 12 C20 4 28 2 36 6 C36 14 30 20 20 20" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 20 C10 20 4 14 4 6 C12 2 20 4 20 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Three daily meals prepared with love, following ancient yogic principles
                to support your practice and elevate your consciousness.
              </p>
            </div>

            {/* Food Philosophy Grid - Always Visible */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {foodPhilosophy.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Collapsible Section - Daily Meals & More */}
            <Collapsible open={isFoodSectionOpen} onOpenChange={handleFoodSectionToggle}>
              {/* Collapse Trigger */}
              <CollapsibleTrigger asChild>
                <button type="button" ref={foodTriggerRef as any} className="text-center mb-10 cursor-pointer group scroll-mt-24 w-full bg-transparent border-0 p-0 block focus:outline-none">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-card">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {t("mindfulEating")}
                    </h3>
                    <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isFoodSectionOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <p className="text-primary/70 text-sm mt-3 group-hover:text-primary transition-colors">
                    {isFoodSectionOpen ? t('clickToCollapse') : t('clickToExpand')}
                  </p>
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="pb-8">
                  {/* Daily Meals */}
                  <div className="max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-3 gap-8">
                      {localizedFoodMenu.map((defaultMeal, index) => {
                        const rawList = (t.raw("foodMenuList") as any[]) || [];
                        const localizedMeal = rawList[index] || {};
                        const MealIcon = defaultMeal.icon;
                        const mealImage = defaultMeal.image;
                        const mealTitle = localizedMeal.meal || defaultMeal.meal;
                        const mealTime = localizedMeal.time || defaultMeal.time;
                        const mealItems = localizedMeal.items || defaultMeal.items;

                        return (
                          <div
                            key={index}
                            className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
                          >
                            {/* Meal Image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={mealImage}
                                alt={mealTitle}
                                fill sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                              {/* Meal Badge */}
                              <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                                <MealIcon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">{mealTime}</span>
                              </div>

                              {/* Meal Title Overlay */}
                              <div className="absolute bottom-4 left-4">
                                <h4 className="font-heading text-2xl font-bold text-background">{mealTitle}</h4>
                              </div>
                            </div>

                            {/* Meal Items */}
                            <div className="p-6">
                              <ul className="space-y-3">
                                {mealItems.map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Hover Accent Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dietary Options Grid */}
                  <div className="mt-20">
                    <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-4">
                      {t("caterDietsTitle")}
                    </h3>
                    <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
                      {t("caterDietsDesc")}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {dietaryOptions.map((diet, index) => {
                        const DietIcon = diet.icon;
                        return (
                          <div
                            key={index}
                            className="group text-center p-5 bg-background rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card cursor-default"
                          >
                            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <DietIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-heading font-bold text-foreground text-sm mb-1">{diet.name}</h4>
                            <p className="text-xs text-muted-foreground">{diet.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Food Info */}
                  <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Fresh coconut water daily
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Seasonal tropical fruits
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Special requests welcome
                      </span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* ===== INSTAGRAM FOLLOW ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                {tCommon("instagram.badge")}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {tCommon("instagram.heading")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {tCommon("instagram.sub")}
              </p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto mb-12">
              {[
                { img: insta1, likes: "16", type: "image", url: "https://www.instagram.com/p/DQndCYAkrtF/" },
                { img: insta2, likes: "81", type: "reel", url: "https://www.instagram.com/reel/DP1YgMtCc5z/" },
                { img: insta3, likes: "37", type: "image", url: "https://www.instagram.com/p/DO-sSZACYSg/" },
                { img: insta4, likes: "35", type: "image", url: "https://www.instagram.com/p/DO25IFjCTbB/" },
                { img: insta5, likes: "92", type: "reel", url: "https://www.instagram.com/reel/DPl0yZCCVa6/" },
              ].map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
                >
                  <Image
                    src={post.img}
                    alt={`Instagram post ${index + 1}`}
                    fill sizes="(max-width: 640px) 50vw, 250px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-3 text-primary-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-primary-foreground" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  {/* Reel indicator */}
                  {post.type === "reel" && (
                    <div className="absolute top-2 right-2">
                      <Play className="w-5 h-5 text-primary-foreground drop-shadow-lg" />
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Follow CTA */}
            <div className="text-center">
              <a
                href="https://www.instagram.com/yogagarhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] rounded-full group"
              >
                <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 group-hover:bg-transparent transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                  <span className="font-heading font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                    @yogagarhi
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors text-sm">
                    {tCommon("instagram.followUs")}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===== EXCURSIONS ===== */}
        < section className="py-24 bg-background relative overflow-hidden" >
          {/* Decorative Elements */}
          < div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/50 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">{t("excursionsSection.badge")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("excursionsSection.heading")}
              </h2>
              {/* Decorative Mountain/Nature Icon */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-12 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 28 L16 8 L24 18 L32 10 L44 28 Z" strokeLinejoin="round" />
                  <circle cx="38" cy="8" r="4" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("excursionsSection.sub")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {localizedExcursions.map((excursion, index) => {
                const IconComponent = excursion.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Hexagonal Image Container */}
                    <div className="relative mb-6">
                      <div className="relative aspect-square max-w-[280px] mx-auto overflow-hidden rounded-[2.5rem] shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                        <Image
                          src={excursion.image}
                          alt={excursion.title}
                          fill sizes="(max-width: 640px) 100vw, 280px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Floating Icon Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center pt-4">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        {(t.raw("excursionsList") as any[])?.[index]?.title || excursion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed px-2">
                        {(t.raw("excursionsList") as any[])?.[index]?.description || excursion.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== YOGA ALLIANCE CERTIFICATION ===== */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 773px' }}
        >
          <Image
            src={apartYogaAllianceGraduates}
            alt="Yoga Alliance USA Certified School in Bali"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center -z-10"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Subtitle */}
              <p className="text-white/90 text-lg mb-2 font-medium">
                "YOGAGARHI – 200 Hour YTTC"
              </p>

              {/* Main Title */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-amber-500 mb-6">
                Yoga Alliance USA CERTIFIED
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                Our school, YogaGarhi, is registered with Yoga Alliance USA. Upon completing this course,
                you will receive an internationally recognized certification, allowing you to become a
                <span className="text-white font-medium"> Registered Yoga Teacher (RYT)</span>.
                This certification opens doors for you to teach yoga anywhere in the world.
              </p>

              {/* RYS vs RYT Explanation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    RYS (Registered Yoga School)
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    YogaGarhi is an accredited school qualified to train and certify yoga teachers according to rigorous global Yoga Alliance curriculum standards.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    RYT (Registered Yoga Teacher)
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    The international credential you earn upon graduation, empowering you to register with Yoga Alliance and lead classes worldwide.
                  </p>
                </div>
              </div>

              {/* Public Profile Link (Conditional) */}
              {YOGA_ALLIANCE_PROFILE.publicProfileUrl && !YOGA_ALLIANCE_PROFILE.publicProfileUrl.includes("[CONFIRM]") && (
                <div className="mb-8">
                  <a
                    href={YOGA_ALLIANCE_PROFILE.publicProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>View Yoga Alliance School Registry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Certification Badges - Real Images */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <Image src={yaRys100} alt="RYS 100" width={96} height={96} className="w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <Image src={yaRys200} alt="RYS 200" width={96} height={96} className="w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <Image src={yaRyt200} alt="RYT 200" width={96} height={96} className="w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Full Certification Banner */}
              <div className="mt-10">
                <Image src={yaAllCertifications} alt="All Yoga Alliance Certifications" width={672} height={400} className="rounded-lg shadow-lg mx-auto" />
              </div>
            </div>
          </div>
        </section>









        <HomeGallerySection />





        {/* ===== GOOGLE REVIEWS ===== */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1118px" }}>
          {/* Yoga-themed Background Art */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Sri Yantra Pattern - Top Left */}
            <svg className="absolute top-10 left-10 w-48 h-48 text-primary/[0.04] animate-float" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,5 95,95 5,95" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,95 5,5 95,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,20 80,80 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,80 20,20 80,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Lotus Pattern - Bottom Right */}
            <svg className="absolute bottom-10 right-10 w-64 h-64 text-primary/[0.03] animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 100 100" fill="currentColor">
              {/* Lotus petals */}
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(90 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(120 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(150 50 50)" />
              <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Om Symbol - Top Right */}
            <svg className="absolute top-20 right-24 w-32 h-32 text-primary/[0.05] animate-float-gentle" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="currentColor">
              <path d="M30,70 C20,70 15,60 15,50 C15,35 25,25 40,25 C55,25 60,35 60,45 C60,55 50,60 45,60 C40,60 35,55 35,50 C35,45 40,42 45,42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M60,45 C60,35 70,30 75,35 C80,40 75,50 70,55 L65,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M70,20 C75,20 78,25 78,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="80" cy="18" r="3" fill="currentColor" />
            </svg>

            {/* Mandala Circle - Bottom Left */}
            <svg className="absolute bottom-20 left-20 w-40 h-40 text-primary/[0.03] animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="30" strokeDasharray="2 4" />
              {/* Outer dots */}
              {isMounted && [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle key={i} cx={50 + 40 * Math.cos(angle * Math.PI / 180)} cy={50 + 40 * Math.sin(angle * Math.PI / 180)} r="2" fill="currentColor" opacity="0.5" />
              ))}
            </svg>

            {/* Chakra Symbol - Center Faded */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-primary/[0.02] animate-float-gentle" style={{ animationDelay: '4s' }} viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="18" />
              <circle cx="50" cy="50" r="9" />
              {/* Radial lines */}
              {isMounted && [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <line key={i} x1="50" y1="50" x2={50 + 48 * Math.cos(angle * Math.PI / 180)} y2={50 + 48 * Math.sin(angle * Math.PI / 180)} stroke="currentColor" strokeWidth="0.15" />
              ))}
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header with Google Branding */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-heading text-xl font-semibold text-foreground">Google Reviews</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("ethicsExtra.reviewsHeading")}
              </h2>

              {/* Overall Rating */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="font-heading text-5xl font-bold text-foreground">{GOOGLE_REVIEWS_CONFIG.rating}</span>
                <div className="text-left">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {GOOGLE_REVIEWS_CONFIG.displayCount && !GOOGLE_REVIEWS_CONFIG.displayCount.includes("[CONFIRM]") && (
                    <p className="text-sm text-muted-foreground">{t("ethicsExtra.basedOnReviews")} {GOOGLE_REVIEWS_CONFIG.displayCount}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {googleReviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>

            {/* View All Reviews Link */}
            <div className="text-center mt-10">
              <a
                href={GOOGLE_REVIEWS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {t("ethicsExtra.viewAllGoogle")}
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>
        </section>



        {/* ===== CODE OF CONDUCT & REFUND ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Code of Conduct */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{t("ethics.codeOfConduct")}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("ethicsExtra.code1"), t("ethicsExtra.code2"), t("ethicsExtra.code3"),
                    t("ethicsExtra.code4"), t("ethicsExtra.code5"), t("ethicsExtra.code6"),
                    t("ethicsExtra.code7"), t("ethicsExtra.code8")
                  ].map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border flex items-center gap-2">
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Refund & Cancellation */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{t("ethics.refundCancellation")}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("ethicsExtra.refund1"), t("ethicsExtra.refund2"),
                    t("ethicsExtra.refund3"), t("ethicsExtra.refund4"),
                    t("ethicsExtra.refund5")
                  ].map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border flex items-center gap-2">
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <Dialog open={showQuizDialog} onOpenChange={(open) => {
          setShowQuizDialog(open);
          if (!open) resetQuiz();
        }}>

          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">
                {quizStep < quizQuestions.length
                  ? "Discover Your Yogic Energy"
                  : "Your Insight Awaits"}
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm">
                {quizStep < quizQuestions.length
                  ? `Question ${quizStep + 1} of ${quizQuestions.length}: ${quizQuestions[quizStep].question}`
                  : "Thank you for sharing. Enter your email to receive your personalized insight."
                }
              </DialogDescription>
            </DialogHeader>

            <div className="pt-4">
              {quizStep < quizQuestions.length ? (
                <div className="space-y-6">
                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">
                    Thank you for sharing. Enter your email and we will send you
                    your personalized yogic energy insight shortly.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address *"
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary ${emailError ? 'border-red-500' : 'border-border'}`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                    />
                    {emailError && (
                      <p className="text-sm text-red-500">{emailError}</p>
                    )}
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleQuizSubmit}
                    disabled={isSubmittingQuiz}
                  >
                    {isSubmittingQuiz ? "Submitting..." : "Submit & Receive My Insight"}
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Quiz Thank You Dialog */}
        <Dialog open={showQuizThankYou} onOpenChange={(open) => {
          setShowQuizThankYou(open);
          if (!open) resetQuiz();
        }}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                  Thank You! 🙏
                </DialogTitle>
                <p className="text-muted-foreground">
                  Your personalized yogic energy insight is on its way to <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p>{tDialog("inboxNotice")}</p>
              </div>
              <Button
                onClick={() => {
                  setShowQuizThankYou(false);
                  resetQuiz();
                }}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>




        <Dialog open={showWebinarDialog} onOpenChange={setShowWebinarDialog}>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">
                Register for Free Webinar
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm">
                Fill in your details to join our live orientation session
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleWebinarSubmit} className="space-y-4 pt-4">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={webinarForm.name}
                  onChange={(e) => setWebinarForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={webinarForm.email}
                  onChange={(e) => setWebinarForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Timezone */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Your Timezone <span className="text-destructive">*</span>
                </label>
                <select
                  required
                  value={webinarForm.timezone}
                  onChange={(e) => setWebinarForm(prev => ({ ...prev, timezone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{tDialog("selectTimezone")}</option>
                  <option value="UTC-12:00">(UTC-12:00) Baker Island</option>
                  <option value="UTC-11:00">(UTC-11:00) American Samoa</option>
                  <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                  <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                  <option value="UTC-08:00">(UTC-08:00) Pacific Time (US & Canada)</option>
                  <option value="UTC-07:00">(UTC-07:00) Mountain Time (US & Canada)</option>
                  <option value="UTC-06:00">(UTC-06:00) Central Time (US & Canada)</option>
                  <option value="UTC-05:00">(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option value="UTC-04:00">(UTC-04:00) Atlantic Time (Canada)</option>
                  <option value="UTC-03:00">(UTC-03:00) Buenos Aires, São Paulo</option>
                  <option value="UTC-02:00">(UTC-02:00) Mid-Atlantic</option>
                  <option value="UTC-01:00">(UTC-01:00) Azores</option>
                  <option value="UTC+00:00">(UTC+00:00) London, Dublin, Lisbon</option>
                  <option value="UTC+01:00">(UTC+01:00) Berlin, Paris, Rome, Madrid</option>
                  <option value="UTC+02:00">(UTC+02:00) Cairo, Athens, Istanbul</option>
                  <option value="UTC+03:00">(UTC+03:00) Moscow, Nairobi, Kuwait</option>
                  <option value="UTC+03:30">(UTC+03:30) Tehran</option>
                  <option value="UTC+04:00">(UTC+04:00) Dubai, Abu Dhabi</option>
                  <option value="UTC+04:30">(UTC+04:30) Kabul</option>
                  <option value="UTC+05:00">(UTC+05:00) Karachi, Tashkent</option>
                  <option value="UTC+05:30">(UTC+05:30) Mumbai, New Delhi, Kolkata</option>
                  <option value="UTC+05:45">(UTC+05:45) Kathmandu</option>
                  <option value="UTC+06:00">(UTC+06:00) Dhaka, Almaty</option>
                  <option value="UTC+06:30">(UTC+06:30) Yangon</option>
                  <option value="UTC+07:00">(UTC+07:00) Bangkok, Jakarta, Hanoi</option>
                  <option value="UTC+08:00">(UTC+08:00) Singapore, Kuala Lumpur, Bali</option>
                  <option value="UTC+09:00">(UTC+09:00) Tokyo, Seoul</option>
                  <option value="UTC+09:30">(UTC+09:30) Adelaide</option>
                  <option value="UTC+10:00">(UTC+10:00) Sydney, Melbourne</option>
                  <option value="UTC+11:00">(UTC+11:00) Solomon Islands</option>
                  <option value="UTC+12:00">(UTC+12:00) Auckland, Fiji</option>
                  <option value="UTC+13:00">(UTC+13:00) Samoa, Tonga</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Preferred Date <span className="text-destructive">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={webinarForm.date}
                  onChange={(e) => setWebinarForm(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Preferred Time <span className="text-destructive">*</span>
                </label>
                <select
                  required
                  value={webinarForm.time}
                  onChange={(e) => setWebinarForm(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{tDialog("selectPreferredTime")}</option>
                  <option value="morning">{tDialog("slotMorning")}</option>
                  <option value="afternoon">{tDialog("slotAfternoon")}</option>
                  <option value="evening">{tDialog("slotEvening")}</option>
                </select>
              </div>

              <Button
                type="submit"
                className={`w-full transition-all ${isWebinarFormComplete ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                size="lg"
                disabled={!isWebinarFormComplete || isSubmittingWebinar}
              >
                {isSubmittingWebinar ? "Registering..." : "Register Now"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                You'll receive a confirmation email with the webinar link
              </p>
            </form>
          </DialogContent>
        </Dialog>

        {/* Webinar Thank You Dialog */}
        <Dialog open={showWebinarThankYou} onOpenChange={(open) => {
          setShowWebinarThankYou(open);
          if (!open) {
            setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' });
          }
        }}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                  {tDialog("registeredTitle")}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Thank you, <span className="font-medium text-foreground">{webinarForm.name}</span>! Your webinar registration is confirmed.
                </DialogDescription>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
                <p>📧 {tDialog("confirmationSentTo")} <span className="font-medium text-foreground">{webinarForm.email}</span></p>
                <p>📅 {tDialog("webinarLinkNotice")}</p>
              </div>
              <Button
                onClick={() => {
                  setShowWebinarThankYou(false);
                  setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' });
                }}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pre-YTTC Detail Dialog */}
        <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">
                Get Pre-YTTC Details
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm">
                Learn about our world-first Pre-YTTC preparation program
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handlePreYTTCSubmit} className="space-y-4 pt-4">

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={preYTTCForm.name}
                  onChange={(e) => setPreYTTCForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={preYTTCForm.email}
                  onChange={(e) => setPreYTTCForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className={`w-full transition-all ${preYTTCForm.name && preYTTCForm.email ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                size="lg"
                disabled={!preYTTCForm.name || !preYTTCForm.email || isSubmittingPreYTTC}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                {isSubmittingPreYTTC ? "Sending..." : "Get Pre-YTTC Details"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Pre-YTTC Thank You Dialog */}
        <Dialog open={showPreYTTCThankYou} onOpenChange={(open) => {
          setShowPreYTTCThankYou(open);
          if (!open) setPreYTTCForm({ name: '', email: '' });
        }}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                  Details on the Way! 🎓
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Thank you, <span className="font-medium text-foreground">{preYTTCForm.name}</span>! Your Pre-YTTC program details will be sent to your email.
                </DialogDescription>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                📧 Sent to: <span className="font-medium text-foreground">{preYTTCForm.email}</span>
              </div>
              <Button
                onClick={() => {
                  setShowPreYTTCThankYou(false);
                  setPreYTTCForm({ name: '', email: '' });
                }}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Manual Download Dialog */}
        <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">
                Get Free Study Manual
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm">
                Enter your details to receive our comprehensive yoga training manual
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleManualSubmit} className="space-y-4 pt-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={manualForm.name}
                  onChange={(e) => setManualForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={manualForm.email}
                  onChange={(e) => setManualForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!manualForm.name || !manualForm.email || isSubmittingManual}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {isSubmittingManual ? "Sending..." : "Get Free Manual"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Manual Thank You Dialog */}
        <Dialog open={showManualThankYou} onOpenChange={setShowManualThankYou}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                  Manual on the Way! 📚
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Thank you! The study manual has been sent to <span className="font-medium text-foreground">{manualForm.email}</span>
                </DialogDescription>
              </div>
              <Button
                onClick={() => setShowManualThankYou(false)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>







        {/* ===== TOUR BOOKING DIALOG ===== */}
        {showTourCallDialog && (
        <Dialog open={showTourCallDialog} onOpenChange={setShowTourCallDialog}>
          <DialogContent className="max-w-md p-6 bg-card rounded-2xl border border-border shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="font-heading text-2xl font-bold text-foreground">
                Book a Live Tour & Call
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm mt-1">
                See the school, your room, and the yoga shala live. Fill in your details below to schedule.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleTourCallSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={tourEmail}
                  onChange={(e) => setTourEmail(e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Preferred Date
                </label>
                <Input
                  type="date"
                  required
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Preferred Time
                </label>
                <Input
                  type="text"
                  required
                  placeholder="e.g. 3:00 PM, or Morning call"
                  value={tourTime}
                  onChange={(e) => setTourTime(e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Time Zone
                </label>
                <select
                  required
                  value={tourTimezone}
                  onChange={(e) => setTourTimezone(e.target.value)}
                  className="w-full h-12 px-3 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="">{tDialog("selectTimezone")}</option>
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmittingTour}
                className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-xl mt-2 transition-all hover:bg-primary/90"
              >
                {isSubmittingTour ? "Scheduling..." : "Submit Booking"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        )}

        {/* ===== BOOK A CALL DIALOG ===== */}
        {showCalendarDialog && (
        <Dialog open={showCalendarDialog} onOpenChange={setShowCalendarDialog}>
          <DialogContent className="max-w-5xl p-0 overflow-y-auto max-h-[92vh] bg-card border-none rounded-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Left: Calendar Section */}
              <div className="bg-foreground text-primary-foreground p-8">
                {/* Logo/Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold">YG</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-center mb-6">
                  {tDialog("meetYogaGarhi")}
                </h3>

                {/* Month Navigation */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}
                    className="p-1 hover:bg-primary-foreground/10 rounded transition-colors" aria-label="Previous month"
                  >
                    <ChevronDown className="w-5 h-5 rotate-90" />
                  </button>
                  <span className="font-heading font-bold text-lg min-w-[140px] text-center">
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} 2026
                  </span>
                  <button
                    onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}
                    className="p-1 hover:bg-primary-foreground/10 rounded transition-colors" aria-label="Next month"
                  >
                    <ChevronDown className="w-5 h-5 -rotate-90" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {[0, 1, 2, 3, 4, 5, 6].map(i => new Date(2026, 0, 4 + i).toLocaleDateString(locale, { weekday: "short" }).toUpperCase()).map(day => (
                    <div key={day} className="py-2 text-xs font-medium text-primary-foreground/60">
                      {day}
                    </div>
                  ))}
                  {/* Empty cells for offset */}
                  {Array.from({ length: new Date(2026, selectedMonth, 1).getDay() }).map((_, i) => (
                    <div key={`empty-${i}`} className="py-2" />
                  ))}
                  {/* Days */}
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDay === day;
                    // All upcoming dates (today and future) are available
                    const today = new Date();
                    const currentYear = 2026;
                    const calendarDate = new Date(currentYear, selectedMonth, day);
                    const isUpcoming = calendarDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    // Check if the day exists in this month
                    const daysInMonth = new Date(currentYear, selectedMonth + 1, 0).getDate();
                    const isValidDay = day <= daysInMonth;
                    const isAvailable = isValidDay && isUpcoming;

                    if (!isValidDay) return null;

                    return (
                      <button
                        key={day}
                        onClick={() => isAvailable && setSelectedDay(day)}
                        disabled={!isAvailable}
                        className={`py-2 rounded-full text-sm transition-all ${isSelected
                          ? "bg-primary text-primary-foreground"
                          : isAvailable
                            ? "text-primary-foreground hover:bg-primary-foreground/10"
                            : "text-primary-foreground/30 cursor-not-allowed"
                          }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Time Slots Section */}
              <div className="p-8">
                {/* Meeting Duration */}
                <div className="mb-8">
                  <h4 className="font-medium text-foreground mb-3">{tDialog("meetingDuration")}</h4>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-muted-foreground">
                    30 mins
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <h4 className="font-medium text-foreground mb-1">{tDialog("whatTimeBest")}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tDialog("showingTimesFor")} <span className="font-medium text-foreground">{selectedDay ? new Date(2026, selectedMonth, selectedDay).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" }) : ""}</span>
                  </p>

                  {/* Timezone Dropdown */}
                  <div className="relative mb-4">
                    <button
                      onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                      className="flex items-center gap-2 text-primary text-sm hover:underline"
                    >
                      <Clock className="w-4 h-4" />
                      {selectedTimezone}
                      <ChevronDown className={`w-4 h-4 transition-transform ${showTimezoneDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showTimezoneDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-full max-w-xs bg-card border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                        {timezones.map((tz) => (
                          <button
                            key={tz.value}
                            onClick={() => {
                              setSelectedTimezone(tz.value);
                              setShowTimezoneDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${selectedTimezone === tz.value ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                              }`}
                          >
                            {tz.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
                    {["10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-3 px-4 rounded-lg border text-center transition-all ${selectedTime === time
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border hover:border-primary/50 text-foreground"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Confirm Button */}
                  <Button
                    className="w-full mt-6"
                    size="lg"
                    disabled={!selectedDay || !selectedTime}
                    onClick={() => {
                      setShowCalendarDialog(false);
                      setShowBookingDialog(true);
                    }}
                  >
                    {tDialog("confirmBooking")}
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full mt-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowCalendarDialog(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        )}

        {/* Booking Confirmation Dialog */}
        {showBookingDialog && (
        <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">{tDialog("bookingTitle")}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-2">
                {selectedDay && selectedTime && (
                  <>Scheduled for {selectedDay} {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} 2026 at {selectedTime}</>
                )}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("fullName")} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={tDialog("fullName")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Contact/WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("phone")} <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={bookingForm.countryCode}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="w-28 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    required
                  >
                    <option value="" disabled>Code</option>
                    {countryCodes.map((country) => (
                      <option key={`${country.country}-${country.code}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={bookingForm.contact}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, contact: e.target.value }))}
                    placeholder={tDialog("phone")}
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("email")} <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("course")} <span className="text-destructive">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    { value: '100', label: '100 Hour YTTC' },
                    { value: '200', label: '200 Hour YTTC' },
                    { value: '300', label: '300 Hour YTTC' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${bookingForm.course === option.value
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <input
                        type="radio"
                        name="course"
                        value={option.value}
                        checked={bookingForm.course === option.value}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, course: e.target.value }))}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-6"
              size="lg"
              disabled={!isBookingFormComplete || isSubmittingBooking}
              onClick={handleBookingSubmit}
            >
              {isSubmittingBooking ? tCommon("loading") : tDialog("confirmBooking")}
            </Button>
          </DialogContent>
        </Dialog>
        )}

        {/* ===== SACHIN JI'S RESEARCH & PRAKRITI SECTION ===== */}
        <section id="sachinji-research" className="py-24 bg-background relative overflow-hidden scroll-mt-24" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 3613px" }}>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t("prakritiResearch.heading")}
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
              </div>
              <p className="font-heading text-2xl md:text-3xl text-primary font-medium italic max-w-3xl mx-auto leading-relaxed">
                {t("prakritiResearch.quote")}
              </p>
            </div>

            {/* Research Journey - Circular Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">
              {[
                {
                  title: t("prakritiResearch.card1Title"),
                  text: t("prakritiResearch.card1Text"),
                  icon: Brain,
                  color: "bg-amber-500/10 text-amber-600 border-amber-500/20"
                },
                {
                  title: t("prakritiResearch.card2Title"),
                  text: t("prakritiResearch.card2Text"),
                  icon: BookOpen,
                  color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
                },
                {
                  title: t("prakritiResearch.card3Title"),
                  text: t("prakritiResearch.card3Text"),
                  icon: Zap,
                  color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
                },
                {
                  title: t("prakritiResearch.card4Title"),
                  text: t("prakritiResearch.card4Text"),
                  icon: Layers,
                  color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                },
                {
                  title: t("prakritiResearch.card5Title"),
                  text: t("prakritiResearch.card5Text"),
                  icon: RefreshCw,
                  color: "bg-rose-500/10 text-rose-600 border-rose-500/20"
                },
                {
                  title: t("prakritiResearch.card6Title"),
                  text: t("prakritiResearch.card6Text"),
                  icon: Heart,
                  color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
                }
              ].map((card, index) => (
                <div key={index} className="group relative">
                  {/* Decorative orbital line for mobile/desktop staggered effect */}
                  <div className="absolute inset-0 border-2 border-dashed border-primary/10 rounded-full group-hover:border-primary/30 transition-all duration-500 -m-4 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105" />

                  <div className="relative aspect-square rounded-full bg-card border border-border shadow-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 group">
                    {/* Inner Radial Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--card-hover-bg)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ '--card-hover-bg': 'rgba(var(--primary-rgb), 0.05)' } as any} />

                    <div className={`w-16 h-16 rounded-full ${card.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <card.icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed px-4 break-words">
                      {card.text}
                    </p>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-10 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-primary text-xs font-bold border border-primary/20">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Conclusion */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden group">
                {/* Floating Om Icon background */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-125">
                  <svg className="w-64 h-64 text-primary" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M28,68 C18,68 12,58 12,48 C12,32 24,22 40,22 C56,22 62,34 62,44 C62,56 50,62 44,62 C38,62 32,56 32,48 C32,42 38,38 44,38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M62,44 C62,32 74,26 80,32 C86,38 80,50 74,56 L68,72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M74,18 C80,18 84,24 84,30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="88" cy="14" r="4" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-6">
                    {t("prakritiResearch.conclusion1")}
                  </p>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic border-t border-primary/20 pt-8 mb-8">
                    {t("prakritiResearch.conclusion2")}
                  </p>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="
                        relative overflow-hidden
                        bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 
                        bg-[length:200%_100%]
                        hover:bg-[position:100%_0]
                        text-white font-semibold 
                        shadow-lg hover:shadow-xl
                        transition-all duration-500
                        group
                      "
                      onClick={() => setShowQuizDialog(true)}
                    >
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      {tCommon("revealYogicEnergy")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>






        {isRishikesh ? (
          <>
            <HowToReachRishikeshSection />
            <BestTimeToVisitRishikeshSection />
            <RishikeshFAQSection courseHours={courseKey?.includes("100") ? "100" : courseKey?.includes("300") ? "300" : "200"} />
            <CompareCoursesTable />
            <ExploreMoreCoursesSection currentCourse={courseKey?.includes("100") ? "100-rishikesh" : courseKey?.includes("300") ? "300-rishikesh" : "200-rishikesh"} />
            <AlsoAvailableInVarkalaSection />
          </>
        ) : isVarkala ? (
          <>
            <HowToReachVarkalaSection />
            <BestTimeToVisitVarkalaSection />
            <VarkalaFAQSection courseHours={courseKey?.includes("100") ? "100" : courseKey?.includes("300") ? "300" : "200"} />
            <CompareVarkalaCoursesTable />
            <ExploreMoreVarkalaCoursesSection currentCourse={courseKey?.includes("100") ? "100-varkala" : courseKey?.includes("300") ? "300-varkala" : "200-varkala"} />
            <AlsoAvailableInRishikeshSection />
          </>
        ) : (
          <>
            {/* ===== HOW TO REACH SECTION (CONDITIONAL) ===== */}
            <HowToReachSection />

            {/* ===== LOCATION & MAP ===== */}
            <section className="py-20 bg-secondary/30">
              <div className="container mx-auto px-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                  Location
                </h2>
                <p className="text-center text-muted-foreground mb-12">
                  YogaGarhi, Gianyar, Bali 80515, Indonesia
                </p>

                <div className="max-w-4xl mx-auto">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-elevated">
                    <iframe
                      src="https://maps.google.com/maps?q=-8.4982,115.3051&hl=en&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Yogagarhi Location - Gianyar, Bali"
                    />
                  </div>

                  {/* Location Details */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="outline" asChild>
                      <a
                        href="https://maps.app.goo.gl/VSRyCTgeJJBCBPrU7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {t("ethicsExtra.openGoogleMaps")}
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{t("ethicsExtra.open24Hours")}</span> • Gianyar, Bali
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== HELPFUL GUIDES SECTION ===== */}
            <HelpfulGuidesSection />

            {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
            {courseKey === "200-hour" && (
              <CourseFAQSection namespace={namespace} />
            )}

            {/* ===== ALSO AVAILABLE IN RISHIKESH & VARKALA ===== */}
            <AlsoAvailableInRishikeshSection />
            <AlsoAvailableInVarkalaSection />
          </>
        )}

        {/* ===== FINAL CONVERSION HUB ===== */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${t("hero.h1")} - YogaGarhi`}
              fill sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <p className="text-center text-primary-foreground/70 uppercase tracking-widest text-sm mb-4">
              {tHome("ready.tag")}
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
              {tHome("ready.title")}
            </h2>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              {tHome("ready.desc")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() => {
                  trackEvent("enroll_click", { course: "200-hour-bali", section: "bottom_cta" });
                  setShowEnrollDialog(true);
                }}
              >
                {tCommon("applyNow")}
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowManualDialog(true)}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {tCommon("getFreeManual")}
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowQuizDialog(true)}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {tCommon("revealYogicEnergy")}
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowWebinarDialog(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                {tCommon("freeWebinar")}
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => openBookingDialog(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                {tCommon("bookCall")}
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowPreYTTCDialog(true)}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Get Pre-YTTC Detail
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold border-0"
                asChild
              >
                <a
                  href="https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I'm%20interested%20in%20the%20200%20Hour%20Yoga%20Teacher%20Training%20in%20Bali.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { course: "200-hour-bali", section: "bottom_cta" })}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== QUICK ENQUIRY DIALOG ===== */}
        {showQuickEnquiryDialog && (
        <Dialog open={showQuickEnquiryDialog} onOpenChange={setShowQuickEnquiryDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">{tDialog("enquiryTitle")}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {tDialog("enquiryDesc")}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleQuickEnquirySubmit} className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("fullName")} <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  required
                  value={quickEnquiryForm.name}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={tDialog("fullName")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("email")} <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={quickEnquiryForm.email}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={tDialog("email")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {tDialog("message")} <span className="text-destructive">*</span>
                </label>
                <Textarea
                  required
                  value={quickEnquiryForm.message}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your interest in yoga teacher training..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {isSubmittingQuick ? tCommon("loading") : tCommon("submit")}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        )}

        {/* ===== PRE-YTTC CONTACT OPTIONS DIALOG ===== */}
        {showPreYttcOptions && (
        <Dialog open={showPreYttcOptions} onOpenChange={setShowPreYttcOptions}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">{tDialog("preYttcTitle")}</DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                {tDialog("preYttcDesc")}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <Button
                variant="outline"
                className="h-16 rounded-2xl text-lg gap-4 border-primary/20 bg-background hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href="https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I'm%20interested%20in%20the%20200%20Hour%20Yoga%20Teacher%20Training%20in%20Bali.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { course: "200-hour-bali", section: "pre_yttc_dialog" })}
                >
                  <div className="p-2 bg-[#25D366]/10 rounded-full group-hover:bg-white/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  {tDialog("continueWhatsApp")}
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-16 rounded-2xl text-lg gap-4 border-primary/20 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                asChild
              >
                <a href="mailto:yogagarhi@gmail.com">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-white/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  {tDialog("sendEmail")}
                </a>
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Typically replies within a few hours to help you get started.
            </p>
          </DialogContent>
        </Dialog>
        )}
        {/* ===== ENROLLMENT FORM DIALOG ===== */}
        {showEnrollDialog && (
        <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
          <DialogContent className="sm:max-w-lg p-0 gap-0">
            {/* Gradient Header */}
            <div className="bg-gradient-to-br from-primary to-primary/80 px-6 pt-8 pb-6 sm:px-8 text-primary-foreground rounded-t-2xl sm:rounded-t-xl">
              <div className="pr-8">
                <DialogTitle className="font-heading text-2xl sm:text-3xl font-bold mb-1 text-primary-foreground">{tDialog("enrollTitle")}</DialogTitle>
                <p className="text-primary-foreground/80 text-sm">{tDialog("enrollDesc")}</p>
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="px-6 sm:px-8 py-6 space-y-4 overflow-y-auto max-h-[60vh] sm:max-h-[65vh]">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("fullName")} <span className="text-destructive">*</span></label>
                <input
                  type="text"
                  aria-label="Full Name"
                  value={enrollForm.name}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={tDialog("fullName")}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("email")} <span className="text-destructive">*</span></label>
                <input
                  type="email"
                  aria-label="Email Address"
                  value={enrollForm.email}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={tDialog("email")}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("phone")} <span className="text-destructive">*</span></label>
                <div className="flex gap-2">
                  <select
                    aria-label="Country Code"
                    value={enrollForm.countryCode}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="w-24 px-2 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                    required
                  >
                    <option value="" disabled>Code</option>
                    {countryCodes.map((country) => (
                      <option key={`${country.country}-${country.code}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    aria-label="Phone number"
                    value={enrollForm.contact}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, contact: e.target.value }))}
                    placeholder={tDialog("phone")}
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-foreground">{tDialog("course")} <span className="text-destructive">*</span></label>
                  <select
                    aria-label="Select Course"
                    value={enrollForm.courseName}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, courseName: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="">{tDialog("select")}</option>
                    <option value="100 Hour Yoga Teacher Training Course in Bali">100 Hr YTTC</option>
                    <option value="200 Hour Yoga Teacher Training Course in Bali">200 Hr YTTC</option>
                    <option value="300 Hour Yoga Teacher Training Course in Bali">300 Hr YTTC</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-foreground">{locale === 'en' ? 'Date' : tDialog("date")} <span className="text-destructive">*</span></label>
                  <select
                    aria-label="Select Date"
                    value={enrollForm.courseDate}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, courseDate: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="">{tDialog("choose")}</option>
                    {courseDates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-foreground">{locale === 'en' ? 'Room' : tDialog("room")} <span className="text-destructive">*</span></label>
                  <select
                    aria-label="Select Room"
                    value={enrollForm.accommodation}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, accommodation: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="">{tDialog("select")}</option>
                    <option value="Private Room">{t("pricing.privateRoom")}</option>
                    <option value="Double Sharing">{t("pricing.doubleSharing")}</option>
                    <option value="Triple Sharing">{t("pricing.tripleSharing")}</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-foreground">{tDialog("gender")} <span className="text-destructive">*</span></label>
                  <select
                    aria-label="Select Gender"
                    value={enrollForm.gender}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="">{tDialog("select")}</option>
                    <option value="Male">{tDialog("male")}</option>
                    <option value="Female">{tDialog("female")}</option>
                    <option value="Others">{tDialog("others")}</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("country")} <span className="text-destructive">*</span></label>
                <input
                  type="text"
                  aria-label="Country"
                  value={enrollForm.country}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, country: e.target.value }))}
                  placeholder={locale === 'en' ? "Your country" : tDialog("country")}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("howHeard")} <span className="text-destructive">*</span></label>
                <select
                  aria-label="How did you hear about us"
                  value={enrollForm.source}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, source: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                >
                  <option value="">{tDialog("choose")}</option>
                  <option value="Google Search">{tDialog("srcGoogle")}</option>
                  <option value="Social Media">{tDialog("srcSocial")}</option>
                  <option value="Recommendation">{tDialog("srcRecommendation")}</option>
                  <option value="Any other source">{tDialog("srcOther")}</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-foreground">{tDialog("messageOptional")}</label>
                <textarea
                  aria-label="Optional message"
                  value={enrollForm.message}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder={tDialog("placeholderMessage")}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                />
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-border bg-background">
              <Button
                className="w-full h-12 text-base font-bold"
                size="lg"
                disabled={!isEnrollFormComplete || isSubmittingEnroll}
                onClick={handleEnrollSubmit}
              >
                {isSubmittingEnroll ? (locale === 'en' ? "Submitting..." : tCommon("loading")) : (locale === 'en' ? "Submit Enrollment" : tDialog("submitApplication"))}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                &#128274; {tDialog("securityNote")}
              </p>
            </div>
          </DialogContent>
        </Dialog>
        )}



        {/* Scroll to Top Button */}
        {
          showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevated hover:bg-primary/90 transition-all duration-300 hidden md:flex items-center justify-center animate-fade-in hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronDown className="w-6 h-6 rotate-180" />
            </button>
          )
        }
      </Layout >
    </>
  );
}
