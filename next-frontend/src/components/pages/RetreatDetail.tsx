"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Check,
  X,
  ChevronDown,
  ShieldCheck,
  Heart,
  Users,
  Utensils,
  Home,
  MessageSquare,
  ArrowRight,
  Sun,
  Flame,
  Award,
  Waves,
  Palmtree,
  Phone,
  CheckCircle2,
  Info,
  Coffee,
  Bed,
  Compass
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RetreatPackage, RETREAT_LOCATIONS } from "@/constants/retreats";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { getCloudinaryUrl } from "@/utils/cloudinary";

interface RetreatDetailProps {
  retreat: RetreatPackage;
}

// Teacher profiles for the retreat faculty section
const RETREAT_TEACHERS = [
  {
    name: "Yogacharya Sachin",
    role: "Founder & Spiritual Director",
    credentials: "E-RYT 500 • Master in Yogic Science",
    image: getCloudinaryUrl("founder-image.png") || "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
    specialties: ["Hatha Yoga", "Ashtanga Flow", "Yoga Philosophy"],
    bio: "With over 12 years of Himalayan sadhana, Sachin Ji bridges ancient Vedic techniques with modern mindfulness, guiding thousands of international practitioners to profound awakening."
  },
  {
    name: "Chanda Ji",
    role: "Co-Founder & Lead Mentor",
    credentials: "Bhakti & Kriya Yoga Lineage",
    image: getCloudinaryUrl("chanda-ji-hd.png") || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    specialties: ["Hatha Yoga", "Bhakti Yoga", "Kriya & Breath"],
    bio: "Born into a traditional yogic family, Chanda Ji spent over four decades practicing deep sadhana, inspiring students through gentle alignment, mudras, and devotion."
  },
  {
    name: "Rahul Ji",
    role: "Senior Vinyasa Master",
    credentials: "E-RYT 500 • Alignment Specialist",
    image: getCloudinaryUrl("rahul-ji-hd.png") || "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80",
    specialties: ["Vinyasa Flow", "Alignment", "Sequencing"],
    bio: "Known for his fluid sequencing and anatomical precision, Rahul Ji brings vibrant energy to morning flows, making advanced asanas joyful and safe."
  },
  {
    name: "Rohit Ji",
    role: "Pranayama & Meditation Guru",
    credentials: "Traditional Hatha Yogic Scholar",
    image: getCloudinaryUrl("rohit-ji-hd.png") || "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
    specialties: ["Pranayama", "Yoga Nidra", "Shatkarma"],
    bio: "Trained at sacred ashrams along the Ganges, Rohit Ji teaches subtle breath mechanics and deep somatic release that melt nervous tension."
  }
];

// Campus gallery images
const CAMPUS_GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    title: "Sanctuary Swimming Pool",
    desc: "Open daily 10:00 AM – 8:00 PM amidst jungle greenery"
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    title: "Open-Air Bamboo Yoga Shala",
    desc: "High ceilings and natural airflow facing Ubud palms"
  },
  {
    url: getCloudinaryUrl("private-bedroom-1.png") || "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    title: "Deluxe Private Garden Suite",
    desc: "Plush king bed, silent air conditioning & terrace"
  },
  {
    url: getCloudinaryUrl("double-bedroom-1.png") || "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "Twin Shared Room Comfort",
    desc: "Spacious layout with two separate beds & ensuite bath"
  },
  {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    title: "Ahimsa Plant-Based Dining",
    desc: "Three daily fresh, organic vegan and vegetarian feasts"
  },
  {
    url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    title: "Sound Healing & Meditation",
    desc: "Tibetan singing bowls and sacred vibration therapy"
  }
];

export default function RetreatDetail({ retreat }: RetreatDetailProps) {
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const locationInfo = RETREAT_LOCATIONS[retreat.locationKey];
  const isBali = retreat.locationKey === "bali";

  // WhatsApp prefilled booking message
  const whatsappUrl = `https://wa.me/918279705844?text=${encodeURIComponent(
    `Hello YogaGarhi! I am interested in booking the ${retreat.title}. Please share availability and current discounts.`
  )}`;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "name": retreat.title,
        "description": retreat.seoDescription,
        "touristType": ["Yoga Enthusiast", "Wellness Traveler", "Solo Traveler"],
        "provider": {
          "@type": "Organization",
          "name": "YogaGarhi",
          "url": "https://www.yogagarhi.com",
          "logo": "https://www.yogagarhi.com/favicon.png"
        },
        "offers": {
          "@type": "Offer",
          "price": retreat.priceShared.replace("$", "").replace(",", ""),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": `https://www.yogagarhi.com/retreat/${retreat.locationKey}/${retreat.slug}`
        },
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": retreat.schedule.length,
          "itemListElement": retreat.schedule.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `${item.time} - ${item.activity}`,
            "description": item.description
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yogagarhi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Retreats",
            "item": "https://www.yogagarhi.com/retreat"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": retreat.locationName,
            "item": `https://www.yogagarhi.com/retreat/${retreat.locationKey}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${retreat.durationDays} Days`,
            "item": `https://www.yogagarhi.com/retreat/${retreat.locationKey}/${retreat.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": retreat.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const daySchedules = retreat.dayByDaySchedule || [];

  return (
    <Layout>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Special Offer Announcement Bar (Bali Yoga School Style) */}
      <aside aria-label="Special Offer" className="bg-[#460e40] text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="bg-amber-400 text-stone-900 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase">
            Limited Time Offer
          </span>
          <span>
            Save up to <strong>${retreat.earlyBirdSaving} USD</strong> on all upcoming {retreat.locationName} retreat dates!
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white underline underline-offset-2 transition-colors ml-1"
          >
            WhatsApp for Quick Booking →
          </a>
        </div>
      </aside>

      {/* ========================================================
          HERO & HEADER (Bali Yoga School Style)
      ======================================================== */}
      <header className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0]/70 to-background border-b border-amber-900/10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-stone-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-amber-800 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/retreat" className="hover:text-amber-800 transition-colors">Retreats</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/retreat/${retreat.locationKey}`} className="hover:text-amber-800 transition-colors">
                  {retreat.locationName}
                </Link>
              </li>
              <li>/</li>
              <li className="text-stone-900 font-semibold" aria-current="page">
                {retreat.durationDays} Days
              </li>
            </ol>
          </nav>

          {/* Subtitle Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
              ✦ {isBali ? "AUTHENTIC YOGIC JOURNEY IN UBUD, BALI" : retreat.badge}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-stone-200/60 text-stone-700 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              {locationInfo.fullName}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-stone-200/60 text-stone-700 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              {retreat.durationDays} Days / {retreat.durationNights} Nights
            </span>
          </div>

          {/* Main Title - Bali Yoga School Uppercase Serif Style */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-amber-950 uppercase tracking-tight leading-[1.2] mb-5 max-w-4xl">
            {retreat.title}
          </h1>

          {/* Zen Zone Statement / Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mb-8 font-serif italic">
            "{retreat.tagline}"
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 md:p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm mb-8 max-w-4xl">
            <div>
              <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Duration</span>
              <p className="font-heading font-bold text-base sm:text-lg text-amber-950 mt-0.5">
                {retreat.durationDays} Days / {retreat.durationNights} Nights
              </p>
            </div>
            <div>
              <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Yoga Style</span>
              <p className="font-heading font-bold text-base sm:text-lg text-amber-950 mt-0.5">
                Hatha & Vinyasa Flow
              </p>
            </div>
            <div>
              <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Skill Level</span>
              <p className="font-heading font-bold text-base sm:text-lg text-amber-950 mt-0.5">
                Beginner to Advanced
              </p>
            </div>
            <div>
              <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Starting From</span>
              <p className="font-heading font-bold text-lg sm:text-xl text-amber-800 mt-0.5">
                {retreat.priceShared} USD
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-900 text-white font-bold px-7 py-6 text-sm sm:text-base rounded-xl shadow-md transition-transform active:scale-95"
              onClick={() => setShowEnrollDialog(true)}
            >
              Book Your Retreat Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              Book via WhatsApp
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-5 py-6 text-sm sm:text-base border-stone-300 text-stone-700 hover:bg-stone-100"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Ask a Question
            </Button>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <Image
              src={retreat.heroImage}
              alt={retreat.heroImageAlt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white flex-wrap gap-2">
              <span className="text-sm font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-amber-300" />
                {locationInfo.fullName}
              </span>
              <span className="bg-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider shadow-sm">
                Year-Round Availability • Start Any Date
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          MAIN ARTICLE CONTENT
      ======================================================== */}
      <main className="py-16 bg-white">
        <article className="container mx-auto px-4 max-w-6xl space-y-20">

          {/* ========================================================
              SECTION 1: OVERVIEW
          ======================================================== */}
          <section id="overview" className="max-w-4xl">
            <div className="text-center sm:text-left mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Ubud Sanctuary Immersion
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                {retreat.durationDays} Days & {retreat.durationNights} Nights Yoga Retreat in {retreat.locationName}
              </h2>
            </div>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-[1.85]">
              {retreat.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 2: YOGAGARHI OFFERS (Bali Yoga School 6-Card Grid)
          ======================================================== */}
          <section id="offers" className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-amber-900/10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Signature Experience
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                YogaGarhi Offers
              </h2>
              <p className="text-stone-600 mt-2 text-sm sm:text-base">
                An all-inclusive transformative wellness retreat where ancient yogic lineage meets the healing energy of Bali.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Hatha & Vinyasa */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  🧘
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Multi-Style Yoga Practice
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Daily morning Hatha Vinyasa flows for physical strength followed by gentle evening Yin yoga for deep flexibility, tension release, and spinal alignment.
                </p>
              </div>

              {/* Card 2: Balinese Massages */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  🌺
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Daily Balinese Massages
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Full-body complimentary Balinese massage treatments using warm organic botanical oils to soothe muscles, boost lymphatic flow, and calm the senses.
                </p>
              </div>

              {/* Card 3: Sound Healing */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  🔔
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Sound Healing Sessions
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Immerse in restorative sound baths featuring handcrafted Tibetan singing bowls and gong resonance inside our peaceful open-air bamboo shala.
                </p>
              </div>

              {/* Card 4: Water Blessing */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  🌊
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Sacred Melukat Water Blessing
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Experience ancient Balinese water purification at the sacred Tirta Empul spring temple led by a local priest to wash away stress and revitalize the spirit.
                </p>
              </div>

              {/* Card 5: Reiki & Breathwork */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  ✨
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Reiki & Chakra Alignment
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Himalayan breathwork (pranayama) and gentle hands-on Reiki healing to balance your vital chakras, release emotional weight, and restore mental clarity.
                </p>
              </div>

              {/* Card 6: Pure Plant-Based Dining */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-xl">
                  🥗
                </div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2 uppercase">
                  Ahimsa Plant-Based Dining
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Three daily chef-prepared vegan and vegetarian feasts made from clean, organic volcanic-soil ingredients supporting digestion and natural cellular detox.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 3: RETREAT FEES & DATES (Bali Yoga School Pricing)
          ======================================================== */}
          <section id="pricing" className="scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Transparent Pricing
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                Retreat Fees & Dates
              </h2>
              <p className="text-stone-600 mt-2 text-sm sm:text-base">
                Choose the accommodation style that suits your journey. All packages include daily yoga, treatments, meals, and full campus access.
              </p>
            </div>

            {/* Dates & Flexibility Banner */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-950 text-sm sm:text-base">
                    Retreat Dates – Year-Round Availability
                  </h3>
                  <p className="text-stone-700 text-xs sm:text-sm">
                    We offer yoga retreats year-round. You can start on any day of the week based on your travel schedule.
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
              >
                Check Date Availability →
              </a>
            </div>

            {/* Pricing Cards Grid (Bali Yoga School 3-Option Structure) */}
            {retreat.campusPricing && retreat.campusPricing.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {retreat.campusPricing.map((card, idx) => (
                  <div
                    key={idx}
                    className={`relative p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                      card.popular
                        ? "bg-white border-amber-800/60 shadow-xl ring-2 ring-amber-700/20"
                        : "bg-white border-stone-200 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {card.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        Most Popular Choice
                      </div>
                    )}

                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-amber-800 mb-1">
                        {card.campus}
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-amber-950 mb-3">
                        {card.roomType}
                      </h3>

                      {/* Price Display: Strikethrough Regular + Discounted */}
                      <div className="flex items-baseline gap-2.5 mb-5 pb-5 border-b border-stone-200">
                        <span className="text-stone-400 line-through text-sm sm:text-base font-semibold">
                          {card.regularPrice}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#b40000]">
                          {card.discountedPrice}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">/ person</span>
                      </div>

                      {/* Feature Bullet Points */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 mb-8">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-stone-100">
                      <Button
                        className={`w-full py-5 rounded-xl font-bold text-sm ${
                          card.popular
                            ? "bg-amber-800 hover:bg-amber-900 text-white shadow-md"
                            : "bg-stone-900 hover:bg-stone-800 text-white"
                        }`}
                        onClick={() => setShowEnrollDialog(true)}
                      >
                        Enroll in this Room
                      </Button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        Inquire via WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Fallback pricing cards
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-800">Twin Share</span>
                    <h3 className="font-heading text-xl font-bold text-amber-950 mb-2">Shared Room</h3>
                    <div className="text-2xl font-bold text-amber-900 mb-4">{retreat.priceShared} USD</div>
                    <p className="text-sm text-stone-600">Shared with another retreat participant. Separate beds.</p>
                  </div>
                  <Button className="mt-6 bg-stone-900 text-white" onClick={() => setShowEnrollDialog(true)}>
                    Book Shared
                  </Button>
                </div>
                <div className="p-7 rounded-3xl bg-white border border-amber-800 shadow-md flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-800">Private Villa</span>
                    <h3 className="font-heading text-xl font-bold text-amber-950 mb-2">Private Room</h3>
                    <div className="text-2xl font-bold text-amber-900 mb-4">{retreat.pricePrivate} USD</div>
                    <p className="text-sm text-stone-600">Complete privacy with king bed and private terrace.</p>
                  </div>
                  <Button className="mt-6 bg-amber-800 text-white" onClick={() => setShowEnrollDialog(true)}>
                    Book Private
                  </Button>
                </div>
              </div>
            )}
          </section>

          {/* ========================================================
              SECTION 4: WHAT IS INCLUDED / NOT INCLUDED
          ======================================================== */}
          <section id="inclusions" className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-50/40 border border-emerald-200/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-amber-950 uppercase tracking-tight">
                  What is included in the Retreat Fees?
                </h2>
              </div>
              <ul className="space-y-3.5 text-stone-700 text-sm sm:text-base">
                {retreat.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="p-7 sm:p-8 rounded-3xl bg-rose-50/30 border border-rose-200/70">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">
                  <X className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-amber-950 uppercase tracking-tight">
                  What is Not Included
                </h2>
              </div>
              <ul className="space-y-3.5 text-stone-700 text-sm sm:text-base">
                {retreat.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ========================================================
              SECTION 5: YOGAGARHI DINING (Ahimsa & Meal Timings)
          ======================================================== */}
          <section id="dining" className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-amber-900/10">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                  Nourishment for Body & Mind
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                  YogaGarhi Dining
                </h2>
              </div>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8">
                {retreat.meals.description}
              </p>

              {/* Meal Timings Table (Bali Yoga School Style) */}
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm mb-6">
                <div className="bg-amber-900 text-white py-3.5 px-6 font-heading font-bold uppercase tracking-wider text-sm">
                  Daily Meal Timings
                </div>
                <div className="divide-y divide-stone-100">
                  {retreat.mealTimings && retreat.mealTimings.length > 0 ? (
                    retreat.mealTimings.map((m, idx) => (
                      <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="font-bold text-amber-950 text-base sm:w-1/3">
                          {m.meal}
                        </div>
                        <div className="font-mono text-sm font-semibold text-amber-800 sm:w-1/4">
                          {m.time}
                        </div>
                        <div className="text-xs sm:text-sm text-stone-600 sm:w-5/12">
                          {m.notes}
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-bold text-amber-950 text-base">Breakfast</span>
                        <span className="font-mono text-sm font-semibold text-amber-800">09:30 AM</span>
                        <span className="text-xs sm:text-sm text-stone-600">Tropical fruits, smoothie bowls, porridge, herbal tea</span>
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-bold text-amber-950 text-base">Lunch</span>
                        <span className="font-mono text-sm font-semibold text-amber-800">12:30 PM – 01:30 PM</span>
                        <span className="text-xs sm:text-sm text-stone-600">Nutritious organic plant-based bowls, steamed vegetables</span>
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-bold text-amber-950 text-base">Dinner</span>
                        <span className="font-mono text-sm font-semibold text-amber-800">07:00 PM – 08:00 PM</span>
                        <span className="text-xs sm:text-sm text-stone-600">Warm soul soups, roasted vegetables, curries, and herbal digestion tonics</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Dietary Tags */}
              <div className="flex flex-wrap gap-2.5">
                {retreat.meals.types.map((type, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 text-xs font-semibold"
                  >
                    ✓ {type}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 6: DAY-BY-DAY SCHEDULE (Interactive Day Tabs)
          ======================================================== */}
          <section id="schedule" className="scroll-mt-20">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                  Daily Itinerary
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                  Day-by-Day Schedule
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-1">
                  Click on each day below to see the precise schedule from morning awakening to evening silence.
                </p>
              </div>

              {daySchedules.length > 0 ? (
                <div>
                  {/* Day Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
                    {daySchedules.map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveDayIndex(idx)}
                        className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                          activeDayIndex === idx
                            ? "bg-amber-800 text-white shadow-sm"
                            : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                        }`}
                      >
                        {day.dayLabel}
                      </button>
                    ))}
                  </div>

                  {/* Active Day Schedule Content */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6 flex-wrap gap-2">
                      <h3 className="font-heading font-bold text-xl text-amber-950">
                        {daySchedules[activeDayIndex]?.dayLabel}: {daySchedules[activeDayIndex]?.title}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                        Day {daySchedules[activeDayIndex]?.dayNumber} of {retreat.durationDays}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {daySchedules[activeDayIndex]?.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-amber-700/40 transition-colors"
                        >
                          <div className="sm:w-48 flex-shrink-0">
                            <span className="inline-block px-3 py-1 rounded-md bg-white border border-stone-200 text-amber-900 font-mono text-xs font-bold shadow-2xs">
                              {item.time}
                            </span>
                          </div>
                          <div className="text-stone-800 font-medium text-sm sm:text-base">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Fallback standard schedule
                <div className="space-y-3">
                  {retreat.schedule.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row gap-3">
                      <span className="font-mono text-xs font-bold text-amber-800 w-32 flex-shrink-0">{item.time}</span>
                      <div>
                        <div className="font-bold text-stone-900 text-sm">{item.activity}</div>
                        <div className="text-xs text-stone-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ========================================================
              SECTION 7: ACCOMMODATION & CAMPUS (Campus-I & Campus-II)
          ======================================================== */}
          <section id="accommodation" className="max-w-4xl">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Peaceful Sanctuary
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                {retreat.accommodation.title}
              </h2>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8">
              {retreat.accommodation.description}
            </p>

            {/* Campus Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">Campus-I</div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2">Deluxe Garden Sanctuary</h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-4">
                  Traditional Balinese stone villas nestled amongst lush tropical frangipani and palm gardens. Features private balconies and serene open-air bamboo shalas.
                </p>
                <div className="text-xs font-semibold text-stone-700 space-y-1">
                  <div>✓ King Bed or Twin Bed options</div>
                  <div>✓ Semi-open Balinese hot shower bath</div>
                  <div>✓ Peaceful jungle view patio</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">Campus-II</div>
                <h3 className="font-heading font-bold text-lg text-amber-950 mb-2">New Luxury Pool Campus</h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-4">
                  Brand new boutique rooms situated right along our sparkling swimming pool with contemporary teakwood styling, sun loungers, and high-speed Wi-Fi.
                </p>
                <div className="text-xs font-semibold text-stone-700 space-y-1">
                  <div>✓ Direct swimming pool steps</div>
                  <div>✓ Modern rainfall shower suite</div>
                  <div>✓ Private sun deck and lounger area</div>
                </div>
              </div>
            </div>

            {/* Amenities Badges */}
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-amber-900/10">
              <h3 className="font-bold text-sm uppercase text-amber-950 tracking-wider mb-4">
                Campus Amenities & Facilities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-stone-700">
                <span className="flex items-center gap-2">🏊 Swimming Pool (10 AM - 8 PM)</span>
                <span className="flex items-center gap-2">❄️ Silent Air Conditioning</span>
                <span className="flex items-center gap-2">📶 High-Speed Campus Wi-Fi</span>
                <span className="flex items-center gap-2">🧘 Bamboo Open-Air Yoga Shala</span>
                <span className="flex items-center gap-2">🚿 Hot Rainfall Showers</span>
                <span className="flex items-center gap-2">🧹 Daily Housekeeping Service</span>
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 8: OUR YOGA TEACHERS / GURUS
          ======================================================== */}
          <section id="teachers" className="scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Authentic Mentorship
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                Our Yoga Teachers
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2">
                Learn under authentic Himalayan-trained yogacharyas and master teachers with decades of dedicated teaching experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RETREAT_TEACHERS.map((teacher, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-64 w-full bg-stone-100">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-amber-950">
                        {teacher.name}
                      </h3>
                      <p className="text-xs font-bold text-amber-800 mb-1">{teacher.role}</p>
                      <p className="text-[11px] text-stone-500 font-mono mb-3">{teacher.credentials}</p>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {teacher.bio}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1">
                      {teacher.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 9: CAMPUS PHOTO GALLERY
          ======================================================== */}
          <section id="gallery">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Visual Tour
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                YogaGarhi Bali Gallery
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2">
                Glimpses of life inside our peaceful Ubud sanctuary, lush tropical pools, and spiritual workshops.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {CAMPUS_GALLERY.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-sm border border-stone-200"
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-bold text-xs sm:text-sm font-heading">{item.title}</h3>
                    <p className="text-[11px] text-stone-200 hidden sm:block">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 10: COURSE RESCHEDULE POLICY & ARRIVAL GUIDE
          ======================================================== */}
          <section id="policy" className="grid md:grid-cols-2 gap-8">
            {/* Policy */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-amber-900/10">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-800 flex-shrink-0" />
                <h2 className="font-heading text-lg sm:text-xl font-bold text-amber-950 uppercase">
                  Course Reschedule Terms & Conditions
                </h2>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                {retreat.policy?.reschedule ||
                  "Each student is eligible for one course reschedule free of charge. Once the course has been rescheduled, no further changes to the course dates will be permitted."}
              </p>
              <div className="text-xs text-stone-600 bg-white p-4 rounded-xl border border-stone-200">
                🔒 <strong>Student-First Guarantee:</strong> We understand travel circumstances change. Your retreat deposit remains protected with one free date reschedule with 15 days notice.
              </div>
            </div>

            {/* Arrival Guide */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-amber-900/10">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-amber-800 flex-shrink-0" />
                <h2 className="font-heading text-lg sm:text-xl font-bold text-amber-950 uppercase">
                  How to Arrive at YogaGarhi Bali
                </h2>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                {retreat.policy?.airportGuide ||
                  "The best and most convenient way to travel to YogaGarhi Bali is to take a flight to Denpasar Bali Airport (DPS). Denpasar Airport is merely 38 km away from our Ubud campus."}
              </p>
              <div className="text-xs text-stone-600 bg-white p-4 rounded-xl border border-stone-200">
                🚕 <strong>Private Airport Pickup:</strong> We arrange reliable, air-conditioned private taxi transfers directly from DPS airport arrivals to our campus reception.
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 11: FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
          <section id="faqs" className="max-w-4xl">
            <div className="mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                Got Questions?
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {retreat.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      className="w-full text-left p-5 font-heading font-bold text-sm sm:text-base text-amber-950 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-800 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-100 bg-[#FAF6F0]/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================================
              SECTION 12: EXPLORE OTHER DURATIONS
          ======================================================== */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-900 to-amber-950 text-white shadow-xl">
            <div className="max-w-3xl">
              <span className="text-amber-300 text-xs uppercase font-bold tracking-widest">
                Flexible Durations
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mt-1 mb-3">
                Explore Other Bali Retreat Options
              </h2>
              <p className="text-amber-100 text-sm sm:text-base mb-6">
                Choose the timeframe that matches your life. Whether a quick 3-day weekend reset, our signature 7-day rejuvenation, or an immersive 14-day transformation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/retreat/bali/3-days"
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    retreat.durationKey === "3-days"
                      ? "bg-amber-400 text-stone-950 shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  3 Days Weekend Reset
                </Link>
                <Link
                  href="/retreat/bali/7-days"
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    retreat.durationKey === "7-days"
                      ? "bg-amber-400 text-stone-950 shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  7 Days Signature Renewal
                </Link>
                <Link
                  href="/retreat/bali/14-days"
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    retreat.durationKey === "14-days"
                      ? "bg-amber-400 text-stone-950 shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  14 Days Deep Transformation
                </Link>
              </div>
            </div>
          </section>

        </article>
      </main>

      {/* ========================================================
          FLOATING WHATSAPP CHAT BUTTON (Bali Yoga School Style)
      ======================================================== */}
      <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe5d] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Chat with YogaGarhi on WhatsApp"
        >
          <div className="relative">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span className="font-bold text-sm hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </Layout>
  );
}
