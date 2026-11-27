"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { BATCHES_300_HOUR_DHARAMSHALA } from "@/constants/courseDates";
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Sparkles,
  MapPin,
  Award,
  Users,
  BookOpen,
  Sun,
  Compass,
  Heart,
  ArrowRight,
  MessageCircle,
  ShieldAlert,
  Mountain,
  Utensils,
  Layers,
  Activity,
  HelpCircle,
  GraduationCap,
} from "lucide-react";

export default function Course300HourDharamshala() {
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleEnrollClick = (batchDate?: string) => {
    openEnrollDialog(true);
  };

  const whatsappMessage = encodeURIComponent(
    "Namaste! I am interested in the 300 Hour Yoga Teacher Training in Dharamshala. Could you please share more information regarding upcoming batches and the advanced curriculum?"
  );
  const whatsappUrl = `https://wa.me/919997111181?text=${whatsappMessage}`;

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is the prerequisite for the 300 hour yoga teacher training?",
      a: "Applicants must hold a verifiable 200-hour yoga teacher training diploma from a recognized school. Whether you graduated from YogaGarhi or another accredited institution, your 200-hour certification provides the foundational framework in anatomy, alignment, and basic teaching pedagogy necessary to engage with this master-level curriculum.",
    },
    {
      q: "Does this course qualify me for the Yoga Alliance RYT 500 credential?",
      a: "Yes, on the RYT 500 pathway. Upon graduating from our 300-hour advanced training, you will receive an official 300-Hour Advanced Yoga Teacher Certification from YogaGarhi. When combined with your previously completed 200-hour diploma, this credential qualifies you to register with Yoga Alliance as a Registered Yoga Teacher at the 500-hour level (RYT 500) [[CONFIRM_YA_STATUS]]. Note: A 300-hour training alone does not grant RYT 500 without a prerequisite 200-hour certification.",
    },
    {
      q: "Why choose Dharamshala for an advanced 300-hour immersion?",
      a: "Dharamshala (frequently spelled Dharamsala), set against the dramatic granite peaks of the Dhauladhar mountain range in Himachal Pradesh, provides a rare, contemplative atmosphere free from the intense heat and crowded lanes of lower plains. At an altitude of around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]], surrounded by ancient deodar cedar forests and Tibetan Buddhist monasteries, the sanctuary offers clean mountain air, pristine silence, and profound energetic purity conducive to serious, deep sadhana. We advise students to take it easy for the first few days, drink plenty of water, and bring warm layers for the cool mountain climate.",
    },
    {
      q: "How does the 300-hour curriculum differ from the 200-hour course?",
      a: "While a 200-hour course focuses on foundational posture mechanics, basic anatomy, and fundamental teaching scripts, our 300-hour master training delves into nuanced sequencing (Vinyasa Krama), hands-on adjustments for diverse body architectures, adaptive yoga approaches, advanced pranayama (including long Kumbhaka and Bandha locks), subtle energy anatomy (Chakras, Nadis, Kundalini), deep study of the Upanishads and Patanjali's Yoga Sutras, and finding your distinct teaching presence.",
    },
    {
      q: "What is the daily schedule like during the 28-day training?",
      a: "Days begin at 05:30 AM with herbal infusion and Shatkarmas, followed by morning meditation, advanced pranayama, and a 2-hour dynamic asana practice. After a nourishing sattvic breakfast, students engage in anatomy biomechanics and alignment workshops. Following lunch and personal study time, afternoon classes explore philosophy, teaching methodology, adjustments, and restorative/Yin yoga, concluding with evening meditation, satsang, and dinner by 19:30 PM.",
    },
    {
      q: "What accommodation and meals are included in the tuition?",
      a: "The course investment (€1,850 for double sharing or €2,250 for a private room) includes 27 nights of comfortable residential accommodation with attached hot-water bathrooms, 3 daily organic, vegetarian/vegan Ayurvedic meals prepared fresh on-site, purified mountain spring drinking water, comprehensive printed course manuals, all yoga props, and guided weekend Himalayan nature excursions.",
    },
    {
      q: "How do I travel to Dharamshala?",
      a: "You can book a domestic flight from New Delhi or Mumbai to Kangra Gaggal Airport (DHM), located approximately 15 to 20 km (35–45 minutes by taxi) from our campus. Alternatively, comfortable overnight AC Volvo sleeper buses run daily between New Delhi (Kashmiri Gate ISBT) and Dharamshala / McLeod Ganj (10–11 hours). Pathankot Railway Junction is approximately 85 km away.",
    },
    {
      q: "What should I pack for an advanced month-long Himalayan training?",
      a: "Pack breathable, flexible yoga attire along with warm layers—such as thermal tops, a fleece or woolen sweater, and warm socks—for crisp mountain mornings and evenings. We also recommend sturdy walking shoes for mountain trails, personal toiletries, a reusable water bottle, a small flashlight, and notebooks for extensive lecture notes.",
    },
    {
      q: "What happens if I experience physical limitations or injuries?",
      a: "Our senior lead trainers emphasize anatomical intelligence and sustainable longevity. One of the central pillars of our 300-hour training is learning how to safely modify postures with props, biomechanical alignment, and functional adaptations. We welcome teachers with physical variations or past injuries, as learning to adapt your own practice makes you a vastly more compassionate and skilled instructor.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-brand-secondary/40 via-background to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-medium tracking-wide">
                <Mountain className="w-4 h-4 text-brand-primary" />
                <span>Himalayan Master Sanctuary • Dharamshala, India</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                300 Hour Yoga Teacher Training in Dharamshala
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Take your practice and teaching to master level with our 28-day residential 
                <strong> 300 hour yoga teacher training in Dharamshala</strong>. Designed exclusively 
                for 200-hour graduates, this intensive Himalayan sadhana deepens advanced asana, 
                mindful alignment, high-level pranayama, classical philosophy, and intelligent sequencing 
                amidst the peaceful pine forests of Himachal Pradesh.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                <div className="p-3 rounded-xl bg-card border border-border shadow-xs">
                  <span className="text-xs text-muted-foreground block">Duration</span>
                  <span className="text-sm sm:text-base font-semibold text-foreground">28 Days / 27 Nights</span>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border shadow-xs">
                  <span className="text-xs text-muted-foreground block">Prerequisite</span>
                  <span className="text-sm sm:text-base font-semibold text-foreground">200-Hour Diploma</span>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border shadow-xs">
                  <span className="text-xs text-muted-foreground block">Pathway</span>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Towards RYT 500</span>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border shadow-xs">
                  <span className="text-xs text-muted-foreground block">Investment</span>
                  <span className="text-sm sm:text-base font-semibold text-brand-primary">From €1,850</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => handleEnrollClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary text-white font-medium shadow-md hover:bg-brand-primary/90 transition-all cursor-pointer"
                >
                  <span>Apply for 300-Hour Training</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-muted-foreground italic">
                * Venue Village: [[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]], Dharamshala, HP, India. Yoga Alliance registration status [[CONFIRM_YA_STATUS]].
              </p>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg p-2 sm:p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <Image
                    src="https://res.cloudinary.com/dphocpt generic/image/upload/himalayan-lineage.jpg"
                    alt="300 Hour Yoga Teacher Training in Dharamshala Himalayas - YogaGarhi"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                      Master Sadhana in Dharamsala
                    </span>
                    <p className="text-sm font-medium text-white/95">
                      Intensive residential training for dedicated teachers and serious practitioners.
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-2">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <GraduationCap className="w-4 h-4 text-brand-primary" />
                      Master Level Course
                    </span>
                    <span>Intimate Group (14 Max)</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">
                    [[TODO: Dharamshala photo — senior students refining advanced inversion assists against snow-capped Dhauladhar backdrop]]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Overview & Key Highlights */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Elevate Your Pedagogical & Personal Practice
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Advanced Yoga Teacher Training in the Himalayas
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Completing a 200-hour certification gives you the wings to teach; our 300-hour residential sadhana 
              gives you the deep roots of wisdom, structural refinement, and pedagogical mastery needed to guide students safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Advanced Asana & Intelligent Vinyasa Krama
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Refine complex arm balances, inversions, and backbends with anatomical precision. Master the art of 
                Vinyasa Krama—the science of progressive, deliberate sequencing that guides students into deep states of stability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Subtle Anatomy, Pranayama & Kundalini
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Move past basic breathing techniques. Learn the rigorous application of internal retention (Kumbhaka), 
                three main Bandhas, Shatkarmas, and the energetic mapping of Chakras, Nadis, and Prana Vayus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Classical Philosophy & Advaita Vedanta
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engage in scholarly, contemplative study of the Bhagavad Gita, Mandukya and Katha Upanishads, 
                and deeper commentaries on Patanjali&apos;s Yoga Sutras, bridging ancient insights with modern existential living.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Biomechanics, Adjustments & Restorative Alignment
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn advanced hands-on adjustments for common structural variations: lumbar lordosis, scoliosis, cervical tension, 
                and sacroiliac stability. Understand fascia lines and functional movement adaptations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Ayurveda, Doshic Principles & Lifestyle
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrate the wisdom of Ayurveda into your teaching. Understand how seasonal changes (Ritucharya), 
                daily routines (Dinacharya), and constitutional balances (Vata, Pitta, Kapha) are traditionally used to inform practice adaptations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-brand-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Authentic Teaching Voice & Mentorship
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive direct, personalized feedback through daily teaching practicums. Transition from delivering instructions 
                to creating a holding environment where students undergo profound internal shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Is This Course For? */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Eligibility & Readiness
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Who Should Attend the 300-Hour Training?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              This intensive master-level program is crafted specifically for practitioners who have already laid the 
              groundwork and feel called toward genuine depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                200-Hour Certified Teachers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Teachers who have completed their initial 200 hours and desire to expand their teaching repertoire, 
                hone advanced adjustments, master multi-level sequencing, and qualify for the RYT 500 credential.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Experienced Studio Instructors
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instructors seeking to break through teaching plateaus, overcome burnout, and refresh their own personal 
                sadhana in the inspiring, cool heights of the Dhauladhar Himalayas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Deep Seekers & Sadhakas
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated students who hold a 200-hour certificate and wish to immerse themselves in 28 days of uninterrupted 
                spiritual study, deep meditative introspection, and classical yogic living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison: 200-Hour vs 300-Hour */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Evolutionary Step
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              200-Hour vs 300-Hour: Stepping into Mastery
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Understanding the difference between foundational certification and master teacher sadhana.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground font-semibold border-b border-border">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5">200-Hour Training</th>
                  <th className="p-4 sm:p-5 text-brand-primary">300-Hour Advanced Training</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Target Focus</td>
                  <td className="p-4 sm:p-5">Foundational alignment, basic pedagogy, establishing personal practice</td>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Mastery, adaptive modifications, advanced Vinyasa Krama & subtlety</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Asana Practice</td>
                  <td className="p-4 sm:p-5">Primary Series Ashtanga & foundational Hatha postures</td>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Intermediate series, arm balances, deep backbends & customized sequencing</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Anatomy & Physiology</td>
                  <td className="p-4 sm:p-5">Major muscle groups, skeletal structure, basic safety contraindications</td>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Functional biomechanics, fascial networks, postural dysfunctions & adjustments</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Pranayama & Kriyas</td>
                  <td className="p-4 sm:p-5">Nadi Shodhana, Kapalabhati, Ujjayi, basic Jalandhara Bandha</td>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Maha Bandha, extensive Kumbhakas, Kundalini kriyas & pranic energy direction</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Philosophy Texts</td>
                  <td className="p-4 sm:p-5">Overview of Patanjali&apos;s 8 Limbs & history of modern yoga</td>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Upanishads, Bhagavad Gita, Advaita Vedanta & Kashmir Shaivism</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-foreground">Credentials</td>
                  <td className="p-4 sm:p-5">Qualifies for RYT 200 with Yoga Alliance</td>
                  <td className="p-4 sm:p-5 font-medium text-brand-primary">Combined with 200hr, qualifies for RYT 500 [[CONFIRM_YA_STATUS]]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Advanced Curriculum & Syllabus */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Comprehensive Syllabus
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Advanced 300-Hour Curriculum Breakdown
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Six interconnected modules covering the full depth of classical yoga science, biomechanics, and pedagogic leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Advanced Asana Mastery & Vinyasa Krama
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Mastery of Pincha Mayurasana, Adho Mukha Vrksasana (handstand), Sirsasana variations, and transitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Advanced backbends (Kapotasana, Urdhva Dhanurasana drops & tick-tocks) with thoracic opening mechanics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Vinyasa Krama principles: structuring peak-pose sequences without anatomical fatigue or jarring transitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Restorative & Yin Yoga practices that may support relaxation and joint mobility.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Subtle Energy, Pranayama & Bandhas
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Systematic mastery of internal (Antar) and external (Bahir) Kumbhaka breath retentions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Mula, Uddiyana, and Jalandhara Bandha locks integrated into seated pranayama and active vinyasa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>The seven major Chakras, Ida/Pingala/Sushumna Nadis, and directional Prana Vayus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Traditional Shatkarmas: Jala Neti, Sutra Neti, Nauli Kriya, and Trataka candle gazing.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Applied Biomechanics & Advanced Hands-on Adjustments
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Functional anatomy of spinal segments: assessing kyphosis, lordosis, and disc decompression.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Shoulder girdle stability: rotator cuff mechanics, scapulohumeral rhythm, and impingement prevention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Pelvic biomechanics, sacroiliac joint safety, and hip joint morphology in forward folding and hip rotation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Safe, assertive, non-invasive hands-on assists tailored to diverse body types and flexibility levels.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Classical Philosophy & Advaita Vedanta
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>In-depth study of the Yoga Sutras: Vibhuti Pada and Kaivalya Pada (transcendence and liberation).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>The principal Upanishads: Katha, Mandukya, and Taittiriya philosophies of non-dual consciousness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>The Bhagavad Gita: Karma Yoga, Jnana Yoga, and Bhakti Yoga integrated into modern daily living.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Introduction to Kashmir Shaivism, the Spanda teachings, and Tantric meditation methodologies.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Daily Schedule */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Ashram Discipline
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              The 300-Hour Daily Himalayan Timetable
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              A disciplined, contemplative daily rhythm designed to support deep cognitive focus, energetic vitality, 
              and physical recuperation throughout the 28-day residency.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { time: "05:30 AM", title: "Wake-Up Bell & Herbal Infusion", desc: "Awaken to crisp mountain air, warm herbal tea, and Shatkarma cleansing." },
              { time: "06:00 – 07:30 AM", title: "Pranayama, Mudras & Himalayan Meditation", desc: "Kumbhaka techniques, Bandhas, Mantra chanting, and Silent Dhyana." },
              { time: "07:45 – 09:45 AM", title: "Advanced Asana Sadhana (Hatha / Ashtanga)", desc: "Deep morning practice focusing on advanced transitions, inversions, and alignment." },
              { time: "10:00 – 11:00 AM", title: "Sattvic Ayurvedic Breakfast", desc: "Freshly prepared vegetarian porridge, seasonal fruits, nuts, and herbal decoctions." },
              { time: "11:15 AM – 12:45 PM", title: "Applied Biomechanics & Advanced Adjustments", desc: "Hands-on lab examining joint kinetics, advanced assists, and injury prevention." },
              { time: "01:00 – 02:00 PM", title: "Ayurvedic Lunch & Rest", desc: "Warm thali meal with nourishing lentils, greens, grain chapatis, and fresh salads." },
              { time: "02:00 – 03:30 PM", title: "Personal Study, Contemplation & Reflection", desc: "Time for journaling, reviewing texts, or quiet walking meditation in cedar woods." },
              { time: "03:30 – 05:00 PM", title: "Higher Philosophy: Upanishads & Sutras", desc: "Scholarly lectures and interactive group discourse on non-dual Vedantic scriptures." },
              { time: "05:15 – 06:45 PM", title: "Teaching Practicum & Restorative Yin", desc: "Peer teaching laboratories, intelligent Vinyasa Krama, voice work, and Yin integration." },
              { time: "07:00 – 08:00 PM", title: "Sattvic Dinner", desc: "Light, grounding Ayurvedic dinner crafted for evening ease and restful sleep." },
              { time: "08:15 – 09:00 PM", title: "Evening Satsang, Kirtan & Guided Yoga Nidra", desc: "Kirtan chanting, philosophical Q&A, and grounding nervous system integration." },
              { time: "09:30 PM", title: "Mauna (Noble Silence) & Lights Out", desc: "Cultivating inner peace and deep physiological cellular restoration." },
            ].map((slot, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-card border border-border/80 hover:border-brand-primary/30 transition-all gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-brand-primary min-w-[130px]">
                    {slot.time}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {slot.title}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground sm:text-right pl-5 sm:pl-0">
                  {slot.desc}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6 italic">
            * Sundays are reserved for guided Himalayan nature walks, waterfall visits, or rest. Schedule subject to minor seasonal adjustments.
          </p>
        </div>
      </section>

      {/* 7. Himalayan Study Setting */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
                Sacred Himalayan Atmosphere
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Study in the Tranquil Foothills of Dharamshala
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Located in the high Kangra Valley of Himachal Pradesh, Dharamshala (and its serene upper village areas of 
                McLeod Ganj, Dharamkot, and Bhagsu) is celebrated worldwide as the spiritual residence of His Holiness the 
                Dalai Lama and a historic crossroads of yogic and Buddhist contemplation.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Surrounded by fragrant pine and deodar forests, fresh mountain springs, and the snow-crested Dhauladhar 
                cliffs towering above 4,000 meters, our sanctuary provides an unpolluted sanctuary where you can hear your 
                breath, quiet the restless mind, and dedicate 28 uninterrupted days to your evolution.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Himalayan Mountain Altitude</h3>
                    <p className="text-xs text-muted-foreground">
                      Situated at around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]], offering clean, crisp alpine air, pristine nature, and cool evenings where warm layers are recommended.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Deep Contemplative Silence</h3>
                    <p className="text-xs text-muted-foreground">
                      Far removed from chaotic urban traffic, creating the ideal container for profound meditation and self-reflection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-3 shadow-md">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                  <Image
                    src="https://res.cloudinary.com/dphocpt generic/image/upload/himalayan-lineage.jpg"
                    alt="Dhauladhar Mountain Range near Dharamshala, Himachal Pradesh - YogaGarhi"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Sanctuary Setting
                    </span>
                    <h3 className="text-base font-bold text-white">
                      [[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]]
                    </h3>
                    <p className="text-xs text-white/90">
                      Surrounded by cedar ridges and pristine alpine silence.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  [[TODO: Dharamshala photo — panoramic view of the Dhauladhar mountains from the ashram yoga hall balcony]]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dates & Upcoming Batches */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40" id="dates">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Upcoming Batches • Season 2027
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              300-Hour Dharamshala Course Dates
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              All 300-hour batches run for 28 consecutive days (27 nights), beginning on the 1st of each month 
              from March through November.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BATCHES_300_HOUR_DHARAMSHALA.map((batch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-card border border-border shadow-xs hover:border-brand-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground border-b border-border/60 pb-2.5 mb-3">
                    <span className="flex items-center gap-1.5 text-brand-primary">
                      <Calendar className="w-4 h-4" />
                      28 Days Immersion
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">
                      Open for Admissions
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {batch.date}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {batch.spotsText || "Booking Open"}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-muted-foreground block">Tuition</span>
                    <span className="font-bold text-foreground">€1,850 / €2,250</span>
                  </div>
                  <button
                    onClick={() => handleEnrollClick(batch.date)}
                    className="px-4 py-2 rounded-lg bg-brand-primary text-white text-xs font-medium hover:bg-brand-primary/90 transition-all cursor-pointer"
                  >
                    Reserve Seat
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border text-center text-xs text-muted-foreground">
            <strong>Group Size Policy:</strong> To ensure high-quality individual mentorship and personalized adjustments, 
            each 300-hour batch in Dharamshala is capped at a maximum of 14 students.
          </div>
        </div>
      </section>

      {/* 9. Course Investment & Accommodation */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Transparent Pricing
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Course Investment & Accommodation
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              All-inclusive tuition covering accommodation, 3 sattvic meals daily, training manuals, and excursions. 
              No hidden fees, registration surcharges, or surprise costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Shared Option */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-brand-primary/50 transition-all relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground block mb-2">
                  Shared Sanctum
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Twin Sharing Room
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-foreground">€1,850</span>
                  <span className="text-xs text-muted-foreground ml-2">/ full 28-day course</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Spacious mountain room shared with one fellow yogic trainee of the same gender. Includes two comfortable 
                  single beds with warm winter duvets and private ensuite hot-water bathroom.
                </p>

                <ul className="space-y-2.5 text-xs text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>27 nights shared residential accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 freshly cooked Ayurvedic vegetarian meals daily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full 300-hour comprehensive training manuals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sunday Himalayan waterfall & temple excursion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official 300-Hour Advanced Yoga Teacher Diploma</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleEnrollClick()}
                className="w-full py-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium text-sm transition-all cursor-pointer"
              >
                Select Twin Sharing
              </button>
            </div>

            {/* Private Option */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border-2 border-brand-primary shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-semibold">
                Most Popular for Deep Sadhana
              </div>

              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-primary block mb-2">
                  Private Sanctuary
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Private Room
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-foreground">€2,250</span>
                  <span className="text-xs text-muted-foreground ml-2">/ full 28-day course</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Your own peaceful private sanctuary. Ideal for intensive contemplative sadhana, deep rest, uninterrupted 
                  journaling, and personal rejuvenation between rigorous daily training modules.
                </p>

                <ul className="space-y-2.5 text-xs text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>27 nights private single-occupancy accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Private attached bathroom with 24/7 hot shower</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 freshly cooked Ayurvedic vegetarian meals daily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Comprehensive advanced manuals & study guides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Guided Sunday Himalayan monastery excursions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official 300-Hour Advanced Yoga Teacher Diploma</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleEnrollClick()}
                className="w-full py-3 rounded-xl bg-brand-primary text-white font-medium text-sm shadow-md hover:bg-brand-primary/90 transition-all cursor-pointer"
              >
                Select Private Room
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Certification & Yoga Alliance Pathway */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="p-6 sm:p-10 rounded-2xl bg-card border border-border shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  International Credentialing Pathway
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  Certification & The Pathway Towards RYT 500
                </h2>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Upon successful completion of all written evaluations, practical adjustment assessments, and teaching 
              practicums, students are awarded the official <strong>300-Hour Advanced Yoga Teacher Training Diploma</strong> from 
              YogaGarhi.
            </p>

            <div className="p-4 rounded-xl bg-brand-secondary/30 border border-brand-primary/20 space-y-2 text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground block">How the 500-Hour Pathway Operates:</strong>
              <p>
                To hold the prestigious <strong>Registered Yoga Teacher 500 (RYT 500)</strong> credential through Yoga Alliance 
                [[CONFIRM_YA_STATUS]], an instructor must complete two essential educational benchmarks: an accredited 200-Hour 
                training followed by an accredited 300-Hour advanced training.
              </p>
              <p>
                This 300-hour program fulfills the advanced educational requirement. Combined with your existing 200-hour 
                certificate, you will possess 500 total hours of formal lineage-based education, enabling you to step into 
                senior leadership, mentor emerging teachers, and lead international workshops worldwide.
              </p>
            </div>

            <p className="text-xs text-muted-foreground italic">
              * Note: A 300-hour course cannot award an RYT 500 credential on its own without the foundational 200-hour training.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Prerequisites & Eligibility */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Admission Requirements
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Prerequisites & Application Criteria
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">200-Hour Certification (Mandatory)</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  You must submit a copy of your completed 200-hour certificate (from YogaGarhi or any recognized yoga school) upon application.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">Active Sadhana Practice</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  At least 6 to 12 months of consistent personal asana and meditation practice following your initial 200-hour graduation.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">Open Mind & Humility</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  A willingness to adopt beginner&apos;s mind (Shoshin), embrace direct feedback on adjustments, and respect ashram codes.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">Physical & Mental Stamina</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Physical endurance to engage in 4–5 hours of active daily physical practice and contemplative seated meditation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Teaching Faculty & Lineage */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
            Traditional Himalayan Lineage
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Led by Master Yogic Faculty
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Our Dharamshala master teacher training is conducted exclusively by seasoned yogis with decades of ashram sadhana, 
            mastery in traditional Himalayan pranayama, and functional biomechanics expertise.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-card border border-border max-w-xl mx-auto text-left space-y-3">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-brand-primary shrink-0" />
              <h3 className="font-heading text-base font-bold text-foreground">
                Lineage-Rooted Master Mentors
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              [[TODO: Faculty bios — confirmed Himalayan lead trainers]]
            </p>
            <p className="text-xs text-muted-foreground italic">
              Our faculty members preserve the unbroken oral traditions of Himalayan yoga, upholding classical non-commercial 
              rigor while integrating contemporary evidence-based movement science.
            </p>
          </div>
        </div>
      </section>

      {/* 13. How to Reach Dharamshala */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Travel & Logistics
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              How to Reach Our Dharamshala Campus
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Dharamshala is accessible via air, road, and rail connections from New Delhi and major Indian transport hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">By Air (Fastest)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fly directly to <strong>Kangra Airport, Gaggal (DHM)</strong>. Daily 75-minute flights connect New Delhi (DEL) 
                and Chandigarh. The airport is located just 15 to 20 km from our campus (approximately 35–45 minutes by taxi).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">By Overnight Volvo Bus</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comfortable AC Volvo sleeper and semi-sleeper buses depart every evening from ISBT Kashmiri Gate or Majnu Ka Tila in 
                New Delhi, arriving in Dharamshala / McLeod Ganj the next morning (10 to 11 hours).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">By Train</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The nearest major broad-gauge railway junction is <strong>Pathankot Cantt (PTKC)</strong>, approximately 85 km 
                away. Express trains connect Delhi to Pathankot in 6–8 hours, followed by a scenic 3-hour taxi drive through the Kangra Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. What to Pack */}
      <section className="py-14 sm:py-20 border-b border-border/60 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Packing Checklist
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              What to Pack for Your Himalayan Month
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="p-4 rounded-xl bg-card border border-border space-y-2">
              <h3 className="font-bold text-foreground">Clothing & Practice Gear</h3>
              <ul className="space-y-1 list-disc pl-4">
                <li>Comfortable, modest yoga clothing (cotton or bamboo blends preferred)</li>
                <li>Warm thermal innerwear and woolen/fleece jackets for mornings & evenings</li>
                <li>Sturdy hiking shoes or trail runners for mountain paths</li>
                <li>Light rain jacket or travel umbrella (especially for July–August monsoons)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border space-y-2">
              <h3 className="font-bold text-foreground">Essentials & Study Tools</h3>
              <ul className="space-y-1 list-disc pl-4">
                <li>Personal journaling notebook and durable pens for anatomy & philosophy</li>
                <li>Reusable insulated water bottle or thermos flask for warm herbal tea</li>
                <li>Headlamp or pocket flashlight for quiet evening village walks</li>
                <li>Personal eco-friendly toiletries, sun protection, and lip balm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ Accordion */}
      <section className="py-14 sm:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Common Inquiries
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Everything you need to know about the 300-hour master training in Dharamshala.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-heading font-semibold text-foreground flex items-center justify-between gap-4 hover:text-brand-primary transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-brand-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Safety, Health & Medical Disclaimer */}
      <section className="py-12 bg-muted/30 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-heading text-base font-bold text-foreground">
                Health, Safety & Mountain Altitude Guidance
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The 300-hour yoga teacher training is a physically and mentally rigorous master program conducted at a 
                Himalayan altitude of around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]. We advise participants to take it easy during the first days, stay well-hydrated, and pack warm layers. The curriculum includes advanced asanas, long-duration pranayama 
                retentions, and intensive study. While yoga offers profound physical and psychological benefits, this training 
                is not a substitute for medical treatment, psychotherapy, or physical rehabilitation.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If you have cardiovascular conditions, respiratory complications, spinal disc injuries, or are pregnant, 
                please consult your healthcare physician prior to enrolling and inform our faculty during your application. 
                Students are responsible for listening to their bodies and practicing with mindful self-honesty at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky / Final CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-card to-background text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-primary">
            Step Into Pedagogical Mastery
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground">
            Advance Your Lineage Teaching in the Himalayas
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Join a small, dedicated group of fellow teachers for 28 transformative days in Dharamshala. 
            Deepen your practice, cultivate wisdom, and earn your 300-hour diploma on the pathway toward RYT 500.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={() => handleEnrollClick()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-white font-medium shadow-md hover:bg-brand-primary/90 transition-all cursor-pointer"
            >
              <span>Apply for 300-Hour Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Contact Admissions Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
