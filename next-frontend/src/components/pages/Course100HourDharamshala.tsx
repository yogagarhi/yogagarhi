"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { BATCHES_100_HOUR_DHARAMSHALA } from "@/constants/courseDates";
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
} from "lucide-react";

export default function Course100HourDharamshala() {
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleEnrollClick = (batchDate?: string) => {
    openEnrollDialog(true);
  };

  const whatsappMessage = encodeURIComponent(
    "Namaste! I am interested in the 100 Hour Yoga Teacher Training in Dharamshala. Could you please share more details regarding upcoming batches and registration?"
  );
  const whatsappUrl = `https://wa.me/919997111181?text=${whatsappMessage}`;

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Can I teach professionally after completing 100 hours?",
      a: "The 100-hour program is an intensive foundational immersion and deepening retreat. While you receive an official 100-Hour Yoga Foundation Certificate from YogaGarhi upon graduation, international registration as a Registered Yoga Teacher (RYT 200) requires completing a full 200-hour curriculum. The 100-hour course is perfect for personal practice, self-transformation, or as a stepping stone.",
    },
    {
      q: "Can I continue to the 200 hour course later?",
      a: "Yes. [[CONFIRM: can 100hr be credited towards 200hr?]] Students who complete our 100-hour foundational training can return to complete their remaining 100 hours within 12 months to earn their full 200-hour Yoga Teacher Training Diploma.",
    },
    {
      q: "Is Dharamshala good for a short yoga immersion?",
      a: "Dharamshala (also spelled Dharamsala), nestled in the Himalayan foothills of Himachal Pradesh, provides an unmatched serene setting for a 12-day retreat. Crisp mountain breezes, clean natural springs, and pine forests allow you to disconnect from hectic routines and reconnect with your inner stillness.",
    },
    {
      q: "Will the altitude affect me during this 12-day course?",
      a: "Our sanctuary is located at an altitude of around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]. Most students acclimate easily within 24 to 36 hours. Because this is a 12-day course, we pace the initial days with grounding restorative asana, conscious diaphragmatic breathwork, gentle stretching, and hydration reminders to ensure full physical vitality without fatigue. We recommend taking it easy for the first few days, drinking plenty of water, and bringing warm layers for cool mountain mornings and evenings.",
    },
    {
      q: "What is the best time of year to take the 100-hour training in Dharamshala?",
      a: "Spring (March to June) and autumn (September to November) provide ideal conditions with sunny, pleasant days and cool mountain nights. July and August bring lush monsoon rains with meditative indoor practice, while winter months are very cold.",
    },
    {
      q: "How do I reach the ashram in Dharamshala?",
      a: "You can fly directly into Gaggal Kangra Airport (DHM), approximately 15 to 20 km away (30–45 minutes by taxi). Alternatively, regular overnight AC Volvo sleeper buses connect New Delhi (Kashmiri Gate ISBT) to McLeod Ganj/Dharamshala in 10–11 hours. Pathankot railway junction is 85 km away.",
    },
    {
      q: "Is this course suitable for beginners?",
      a: "Yes, absolutely. The 100-hour immersion was designed specifically for beginners and curious practitioners who wish to build a rock-solid foundation in postures, alignment, breath mechanics, and meditation without committing to an entire month away from work.",
    },
    {
      q: "What is included in the €850 fee?",
      a: "The all-inclusive fee covers 11 nights of residential accommodation, 3 freshly cooked sattvic Ayurvedic vegetarian meals daily, comprehensive course manuals, yoga prop access, guided Sunday excursion to Bhagsu waterfall, and your 100-Hour Certificate.",
    },
    {
      q: "What should I pack for Dharamshala?",
      a: "Bring comfortable yoga clothing, warm thermal layers and a fleece jacket for cool mornings and evenings, walking or trekking shoes, personal toiletries, a refillable water bottle, a small flashlight, and a notebook for journaling.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-950/20 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-6">
            <Mountain className="w-4 h-4 text-primary" />
            <span>Himalayan Mountain Immersion · Dharamshala, Himachal Pradesh, India</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
            100 Hour Yoga Teacher Training in Dharamshala
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A transformative 12-day residential yoga course in Dharamshala, nestled in the serene Dhauladhar Himalayas. Build an unwavering foundation in classical Hatha postures, dynamic Ashtanga Vinyasa, pranayama, and meditation from €850.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-2xl shadow-sm text-sm">
            <span className="text-muted-foreground">All-Inclusive 12-Day Package:</span>
            <span className="font-bold text-foreground text-base">€850 (Double Sharing)</span>
            <span className="text-muted-foreground">·</span>
            <span className="font-bold text-foreground text-base">€1050 (Private Room)</span>
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
              Transparent Pricing
            </span>
          </div>

          {/* Next Batch Date Banner */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground/80 font-medium">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Next Batch Starts: 1 March 2027 · Open for Enrollment</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleEnrollClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Dharamshala 100hr</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Certification</p>
                <p className="text-sm font-semibold text-foreground">100-Hour Certificate [[CONFIRM_YA_STATUS]]</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Duration</p>
                <p className="text-sm font-semibold text-foreground">12 Days / 11 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Location</p>
                <p className="text-sm font-semibold text-foreground">Dharamshala, Himalayas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Utensils className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Nutrition</p>
                <p className="text-sm font-semibold text-foreground">3 Organic Meals Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE AT A GLANCE */}
      <section className="py-16 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Overview</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Course at a Glance
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Duration</h3>
              <p className="text-sm text-muted-foreground mt-1">12 Days / 11 Nights residential ashram immersion.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Layers className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Skill Level</h3>
              <p className="text-sm text-muted-foreground mt-1">Beginner to Intermediate practitioners welcome.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <BookOpen className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Core Styles</h3>
              <p className="text-sm text-muted-foreground mt-1">Classical Hatha, Ashtanga foundations, Pranayama & Meditation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Venue</h3>
              <p className="text-sm text-muted-foreground mt-1">[[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]], Dharamshala.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Award className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Certificate</h3>
              <p className="text-sm text-muted-foreground mt-1">100-Hour Foundation Certificate [[CONFIRM_YA_STATUS]].</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Users className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Cohort Size</h3>
              <p className="text-sm text-muted-foreground mt-1">Small dedicated group for direct posture guidance [[TODO]].</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Utensils className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Ayurvedic Diet</h3>
              <p className="text-sm text-muted-foreground mt-1">3 nourishing seasonal vegetarian meals every day.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Compass className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Language</h3>
              <p className="text-sm text-muted-foreground mt-1">English (with clear Sanskrit terminology and alignment cues).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY DHARAMSHALA FOR SHORT IMMERSION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Mountain Sanctuary</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Dharamshala for a 100-Hour Yoga Immersion
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Stepping away from modern obligations for 12 days requires an environment that accelerates rejuvenation. Dharamshala (also spelled Dharamsala) offers an extraordinary setting where the altitude, pine forests, and contemplative culture support immediate mental stillness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <Mountain className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                High-Altitude Prana
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Breathing deeply in clean mountain air speeds cellular oxygenation and prana circulation. The pure atmosphere around Dharamkot and Bhagsu makes breathwork remarkably refreshing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Peaceful Digital Detox
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Without the noise, traffic, and commercial rush of larger tourist towns, Dharamshala invites deep contemplative rest. Quiet evenings among deodar trees restore circadian balance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <Sun className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Tibetan Contemplative Culture
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Walking past prayer flags, listening to distant monastic bells, and observing monks engaged in mindful meditation enriches your understanding of non-attachment and inner peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 100 HOUR VS 200 HOUR COMPARISON */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Choosing Your Path</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              100 Hour vs 200 Hour: Which One Is Right for You?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Selecting the appropriate program duration ensures your study aligns with your professional aspirations and schedule constraints.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-foreground border-b border-border">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature</th>
                  <th className="py-4 px-6 font-bold text-primary">100 Hour Dharamshala</th>
                  <th className="py-4 px-6 font-bold">200 Hour Dharamshala</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Duration</td>
                  <td className="py-4 px-6 text-foreground font-medium">12 Days / 11 Nights</td>
                  <td className="py-4 px-6 text-muted-foreground">22 Days / 21 Nights</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Primary Purpose</td>
                  <td className="py-4 px-6 text-foreground font-medium">Personal immersion, habit building, foundational alignment</td>
                  <td className="py-4 px-6 text-muted-foreground">Full professional teaching certification and comprehensive pedagogy</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Teaching Credential</td>
                  <td className="py-4 px-6 text-foreground font-medium">100-Hour Foundation Certificate [[CONFIRM_YA_STATUS]]</td>
                  <td className="py-4 px-6 text-muted-foreground">200-Hour Yoga Teacher Diploma [[CONFIRM_YA_STATUS]]</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Credit Toward 200hr</td>
                  <td className="py-4 px-6 text-foreground font-medium">Can be credited toward 200hr later [[CONFIRM: can 100hr be credited towards 200hr?]]</td>
                  <td className="py-4 px-6 text-muted-foreground">Complete comprehensive diploma in a single residential journey</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">All-Inclusive Fee</td>
                  <td className="py-4 px-6 text-foreground font-semibold">€850 (Double) / €1050 (Private)</td>
                  <td className="py-4 px-6 text-muted-foreground">€1450 (Double) / €1850 (Private)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Explore Option</td>
                  <td className="py-4 px-6 text-foreground font-semibold">You are viewing 100 Hour</td>
                  <td className="py-4 px-6">
                    <Link
                      href="/200-hour-yoga-teacher-training-in-dharamshala"
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <span>Explore 200hr Dharamshala</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM (100 HOURS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Focused Curriculum</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Foundational 100-Hour Curriculum
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Concentrated modules focusing on fundamental posture stability, injury prevention, breath expansion, and the essentials of yogic living.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 1: Foundational Asana & Alignment
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  45 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Detailed postural mechanics of classical Hatha and Ashtanga Vinyasa Sun Salutations (A & B), standing stability poses, seated forward bends, and hip openers with props.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Joint stacking in Tadasana, Warrior postures, and Triangles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Safe lumbar-pelvic alignment in forward folds and twists</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Effective use of blocks, straps, and bolsters for safe modification</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Developing home self-practice routines (sadhana)</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 2: Pranayama & Cleansing Science
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  20 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Studying the mechanics of diaphragmatic breath control. Learning vital pranayamas to calm anxiety, balance the solar/lunar nervous system, and clear nasal passages with Jala Neti.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 3: Functional Anatomy & Joint Protection
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  15 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Practical, accessible anatomy focused on knee stability, spine decompression, rotator cuff safety, and pelvic positioning in daily movement.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 4: Philosophy, Meditation & Mindful Living
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  20 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Exploring the Yamas and Niyamas of Patanjali’s Yoga Sutras, learning how to sit comfortably for silent meditation, and introducing mantra and kirtan chanting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE DAILY SCHEDULE */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Daily Cadence</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              100-Hour Daily Ashram Schedule
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              A balanced daily routine balancing physical effort with nourishing rest. Sundays are reserved for rest and guided mountain excursions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-foreground border-b border-border">
                <tr>
                  <th className="py-4 px-6 font-bold w-1/4">Time</th>
                  <th className="py-4 px-6 font-bold w-1/3">Activity</th>
                  <th className="py-4 px-6 font-bold">Focus & Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">06:00 AM – 06:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Morning Cleansing & Herbal Tea</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Gentle Jala Neti, warm herbal tea, quiet morning silence</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">06:30 AM – 08:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Hatha & Ashtanga Asana Practice</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Foundational posture alignment, sun salutations, standing series</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">08:30 AM – 09:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Sattvic Himalayan Breakfast</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Fresh mountain porridge, fruits, and warm herbal tea</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">10:00 AM – 11:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Yoga Philosophy & Sutras</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Patanjali’s Eight Limbs, Yamas & Niyamas, yogic lifestyle</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">11:45 AM – 01:15 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Anatomy & Alignment Lab</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Joint mechanics, safe prop setup, avoiding common yoga injuries</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">01:15 PM – 03:30 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Lunch & Pine Forest Walk</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Fresh vegetarian lunch, journaling, mountain rest</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">03:30 PM – 05:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Pranayama & Breath Science</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Nadi Shodhana, Kapalabhati, Ujjayi, breath holding awareness</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">05:15 PM – 06:45 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Gentle Vinyasa & Restorative Yin</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Evening relaxation, deep stretching, joint decompression</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">07:00 PM – 08:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Ayurvedic Dinner</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Wholesome, easy-to-digest vegetarian Himalayan meal</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">08:00 PM – 09:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Guided Meditation & Rest</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Sound bowl relaxation, mantra chanting, silent self-reflection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. WHO THIS COURSE IS FOR & PREREQUISITES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Who Should Join</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Ideal Candidates for 100-Hour Training
              </h2>
              <div className="w-16 h-1 bg-primary mt-3 rounded-full mb-6" />
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Designed for those who cannot commit to an entire month away but still desire an authentic, immersive Himalayan ashram experience.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Working Professionals on Leave</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Enjoy a 2-week active wellness and mindfulness retreat that resets mental stress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Curious Beginners</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Learn how to practice safely from scratch under the personal care of master teachers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Future 200hr Students</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Complete the first 100 hours now and return later for the second half [[CONFIRM: can 100hr be credited towards 200hr?]].</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Prerequisites & Guidelines
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                No formal prerequisites or acrobatic flexibility are necessary:
              </p>

              <div className="space-y-3 text-sm text-foreground/80">
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Activity className="w-5 h-5 text-primary shrink-0" />
                  <span>Beginner to intermediate familiarity with movement is welcome</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary shrink-0" />
                  <span>Physical ability to engage in 3–4 hours of physical practice daily</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Compass className="w-5 h-5 text-primary shrink-0" />
                  <span>Commitment to non-smoking, alcohol-free ashram living</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <span>Curiosity and openness to Himalayan yogic tradition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DATES & FEES TABLE */}
      <section className="py-20 bg-secondary/20 border-y border-border" id="dates">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Pricing</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Upcoming 100-Hour Batches (2027)
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Batches run from the 1st to the 12th of each month (March to November 2027). All rates include accommodation, food, and tuition.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-foreground border-b border-border">
                <tr>
                  <th className="py-4 px-6 font-semibold">Course Dates</th>
                  <th className="py-4 px-6 font-semibold">Double Sharing</th>
                  <th className="py-4 px-6 font-semibold">Private Room</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 text-right font-semibold">Enroll</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {BATCHES_100_HOUR_DHARAMSHALA.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>{batch.date}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €850 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €1050 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {batch.spotsText || "Booking Open"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleEnrollClick(batch.startDate)}
                        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-sm"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. INCLUDED / NOT INCLUDED */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Inclusions</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Course Fee Inclusions & Exclusions
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <h3 className="font-heading text-xl font-bold text-foreground">Included</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-foreground/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>11 nights of peaceful ashram stay in [[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>3 freshly prepared Ayurvedic vegetarian and vegan meals daily</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>100-Hour Yoga Foundation Certificate upon successful course completion</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Comprehensive printed study manual and course materials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Use of yoga props, mats, and studio facilities</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Weekend guided excursion to Bhagsu waterfall</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Unlimited filtered Himalayan drinking water and herbal teas</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-muted-foreground shrink-0" />
                <h3 className="font-heading text-xl font-bold text-foreground">Not Included</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-foreground/80">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Airfare to Gaggal Kangra (DHM) or New Delhi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Indian tourist visa fees and travel insurance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Airport transfer from Gaggal or New Delhi [[CONFIRM: pickup included?]]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Personal expenses, laundry, and cafe visits in McLeod Ganj</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ACCOMMODATION & FOOD */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ashram Living</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Mountain Accommodation & Sattvic Food
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Quiet Cedar Forest Rooms
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Relax in cozy residential rooms nestled amidst deodar pine trees in [[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]]. Featuring comfortable bedding, hot water showers, clean linens, and balconies overlooking forested Himalayan ridges.
              </p>
              <div className="p-4 rounded-xl bg-secondary/50 border border-dashed border-border text-center text-xs text-muted-foreground">
                [[TODO: Dharamshala photo — real bedroom photos with Himalayan forest view]]
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Pure Ayurvedic Mountain Meals
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Experience the restorative power of fresh Himalayan nutrition. Every meal is vegetarian, gluten-friendly, freshly cooked with local mountain vegetables and whole grains, and designed to support mental clarity.
              </p>
              <div className="p-4 rounded-xl bg-secondary/50 border border-dashed border-border text-center text-xs text-muted-foreground">
                [[TODO: Dharamshala photo — freshly prepared sattvic Himalayan meal]]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WEEKEND ACTIVITIES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Excursions</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Weekend Relaxation in Dharamshala
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Compass className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Bhagsu Waterfall Walk</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A refreshing nature walk through village trails to the pristine waters of Bhagsu waterfall and the historic mountain temple.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Dalai Lama Temple</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experience quiet mindfulness at Tsuglagkhang, spinning prayer wheels and observing Tibetan monastic debate traditions.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Mountain className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Dharamkot Pine Walks</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quiet strolls through serene cedar woods with panoramic valley views, quiet cafes, and peaceful reading corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TRAVEL & WEATHER */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Logistics</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              How to Reach Dharamshala & Weather Overview
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Travel Directions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Direct daily flights from New Delhi arrive at Gaggal Kangra Airport (DHM), roughly 35 minutes by taxi to our campus. Overnight semi-sleeper Volvo buses leave daily from New Delhi ISBT directly to McLeod Ganj.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Mountain Climate</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Spring (Mar–Jun) and Autumn (Sep–Nov) feature clear mountain skies and sunny afternoons with cool evenings. Summer monsoon (Jul–Aug) brings atmospheric mist and lush forest foliage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TEACHERS & REVIEWS PLACEHOLDERS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 rounded-2xl bg-secondary/30 border border-border text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Faculty & Student Reviews
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our lead mentors belong to traditional Himalayan lineages. Teacher profiles and verified student experiences will be showcased here upon operational launch.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground/60">
              <span>[[TODO: Teacher bios and headshots]]</span>
              <span>·</span>
              <span>[[TODO: Verified student reviews]]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQS */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked Questions (100 Hour)
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. DISCLAIMER & FINAL CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Health Disclaimer */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed mb-12 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Health & Educational Disclaimer: </span>
              This 100-hour course is an educational foundation in yogic sadhana and lifestyle philosophy. It is not medical treatment or therapy. Students with existing physical injuries or medical conditions should seek physician approval prior to joining.
            </div>
          </div>

          {/* Final CTA Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/20 text-center shadow-lg">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Begin Your 100-Hour Himalayan Immersion
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in Dharamshala for 12 days of personal transformation, mountain stillness, and classical yoga sadhana from €850.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleEnrollClick()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for 100hr Dharamshala</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/100-hour-yoga-teacher-training-in-rishikesh"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Compare with Rishikesh 100hr</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
