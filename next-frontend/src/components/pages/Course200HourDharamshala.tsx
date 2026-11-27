"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { BATCHES_200_HOUR_DHARAMSHALA } from "@/constants/courseDates";
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
} from "lucide-react";

export default function Course200HourDharamshala() {
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleEnrollClick = (batchDate?: string) => {
    openEnrollDialog(true);
  };

  const whatsappMessage = encodeURIComponent(
    "Namaste! I am interested in the 200 Hour Yoga Teacher Training in Dharamshala. Could you please share more information regarding upcoming batches and accommodation options?"
  );
  const whatsappUrl = `https://wa.me/919997111181?text=${whatsappMessage}`;

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Is Dharamshala good for yoga teacher training?",
      a: "Yes. Dharamshala, nestled in the elevated Dhauladhar range of the Indian Himalayas in Himachal Pradesh, is one of the world's premier destinations for authentic yoga and contemplative sadhana. Surrounded by majestic cedar and deodar forests, clean mountain springs, and Tibetan Buddhist monasteries, Dharamshala offers a tranquil, cool mountain climate with significantly less traffic and commercial bustle than lower-altitude destinations.",
    },
    {
      q: "Dharamshala or Rishikesh — which is better?",
      a: "Both destinations possess rich spiritual roots. Rishikesh is the historic birthplace of yoga on the sacred river Ganges, featuring warm subtropical weather and grand evening Aarti ceremonies. Dharamshala (often spelled Dharamsala) sits higher in the Himalayan foothills (1,400–2,100 m), offering cooler mountain breezes, lush pine forests, a strong Tibetan Buddhist meditation heritage, and a quieter, deeply introspective retreat atmosphere.",
    },
    {
      q: "What is the best time of year to take yoga teacher training in Dharamshala?",
      a: "The most pleasant seasons are spring (March through June) and autumn (September through November). Spring brings blooming rhododendrons and crisp, sunny days. Autumn provides golden Himalayan light, clear views of the Dhauladhar peaks, and ideal conditions for outdoor meditation. The winter months (December to February) are very cold with nearby snow, and July–August brings heavy Himalayan monsoon rains.",
    },
    {
      q: "What about the monsoon season in Dharamshala?",
      a: "Dharamshala experiences substantial rainfall during July and August. At YogaGarhi, our campus features fully enclosed, heated indoor yoga shalas with panoramic forest views. Practicing inside during the monsoon creates a deeply meditative, purifying environment. However, students should bring waterproof shoes, raincoats, and umbrella gear.",
    },
    {
      q: "How do I get to Dharamshala?",
      a: "The nearest domestic airport is Gaggal Kangra Airport (DHM), located approximately 15 to 20 km from our campus. Daily flights operate from New Delhi (DEL). Alternatively, comfortable overnight luxury Volvo buses run daily from New Delhi (Kashmiri Gate ISBT) to McLeod Ganj/Dharamshala (approx. 10–11 hours). The nearest major railway hub is Pathankot Junction (PTK), located about 85 km (2.5 hours by taxi).",
    },
    {
      q: "Will the altitude affect me in Dharamshala?",
      a: "The altitude is around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]. Most international travelers adjust easily within 24 to 48 hours without experiencing acute mountain sickness. We intentionally pace the first three days with gentle restorative practices, breath awareness, and hydration reminders, and recommend taking it easy for the first days, drinking plenty of water, and packing warm layers for cool mountain mornings and evenings.",
    },
    {
      q: "What should I pack for this Himalayan course?",
      a: "Pack comfortable cotton and stretch yoga wear, several warm thermal layers, a fleece or lightweight down jacket, woolen socks, slip-on shoes for temple entry, sturdy walking or trekking shoes for mountain paths, personal toiletries, a refillable stainless steel water bottle, a flashlight/headlamp, an umbrella, and an open journal.",
    },
    {
      q: "Is this 200 hour course beginner friendly?",
      a: "Yes. Our 200-hour curriculum is structured to support both enthusiastic beginners with a sincere interest in yogic discipline and intermediate practitioners aiming to deepen alignment and teaching skills. Lead teachers offer individualized hands-on modifications, postural progressions, and prop support for all body types.",
    },
    {
      q: "What is included in the course fee?",
      a: "The all-inclusive fee (€1450 for double sharing, €1850 for a private room) includes 21 nights of residential accommodation, 3 freshly cooked sattvic Ayurvedic vegetarian meals daily, comprehensive 200-hour course manuals, yoga props, filtered mountain drinking water, weekend mountain excursions (including a guided trek toward Triund / Bhagsu waterfall), and graduation certification.",
    },
    {
      q: "Will I be certified to teach after graduation?",
      a: "Upon completing all required training contact hours, assignments, and practical teaching assessments, graduates receive a comprehensive 200-Hour Yoga Teacher Training Certificate from YogaGarhi [[CONFIRM_YA_STATUS]]. This credential confirms that you have mastered foundational anatomy, alignment, Hatha and Ashtanga sequencing, and professional teaching methodology.",
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
            <span>Dhauladhar Himalayas · Dharamshala, Himachal Pradesh, India</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
            200 Hour Yoga Teacher Training in Dharamshala
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            An authentic 22-day residential Himalayan immersion in classical Hatha, Ashtanga Vinyasa, pranayama, meditation, and holistic teaching methodology. Live, breathe, and teach among the ancient deodar cedar forests of Himachal Pradesh from €1450.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-2xl shadow-sm text-sm">
            <span className="text-muted-foreground">All-Inclusive Residential Package:</span>
            <span className="font-bold text-foreground text-base">€1450 (Double Sharing)</span>
            <span className="text-muted-foreground">·</span>
            <span className="font-bold text-foreground text-base">€1850 (Private Room)</span>
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
              No Hidden Fees
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
              <span>Apply for Dharamshala 200hr</span>
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
                <p className="text-sm font-semibold text-foreground">200-Hour Diploma [[CONFIRM_YA_STATUS]]</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Duration</p>
                <p className="text-sm font-semibold text-foreground">22 Days / 21 Nights</p>
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Key Essentials</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Course at a Glance
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Duration & Schedule</h3>
              <p className="text-sm text-muted-foreground mt-1">22 Days / 21 Nights full residential ashram immersion.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Layers className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Skill Level</h3>
              <p className="text-sm text-muted-foreground mt-1">Beginner to Intermediate with sincere personal motivation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <BookOpen className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Styles Taught</h3>
              <p className="text-sm text-muted-foreground mt-1">Traditional Hatha, Ashtanga Vinyasa, Pranayama & Meditation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Venue Village</h3>
              <p className="text-sm text-muted-foreground mt-1">[[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]], Dharamshala.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Award className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Teaching Credential</h3>
              <p className="text-sm text-muted-foreground mt-1">200-Hour Yoga Teacher Certification [[CONFIRM_YA_STATUS]].</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Users className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Cohort Size</h3>
              <p className="text-sm text-muted-foreground mt-1">Intimate group work for personalized posture feedback [[TODO]].</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Utensils className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Sattvic Meals</h3>
              <p className="text-sm text-muted-foreground mt-1">3 freshly prepared Ayurvedic vegetarian & vegan meals daily.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Compass className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-base">Medium of Instruction</h3>
              <p className="text-sm text-muted-foreground mt-1">English (with clear Sanskrit terms, mantras, and anatomy explanations).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY DHARAMSHALA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Himalayan Sanctuary</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Choose Dharamshala for Your Yoga Teacher Training
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              When choosing where to dedicate 22 days of your life to self-discovery and rigorous teacher education, the external environment plays an indispensable role. Dharamshala (also frequently written as Dharamsala) offers an extraordinary energetic landscape for contemplative yogic study.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 transition-colors">
              <Mountain className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Dramatic Dhauladhar Setting
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Perched high on the rugged slopes of the Dhauladhar Himalayan range, our sanctuary is enveloped by aromatic Himalayan cedar (deodar) trees and whispering pine forests. Clean high-altitude mountain air naturally cools the mind and purifies the respiratory system during daily pranayama.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 transition-colors">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Tibetan Spiritual Heritage
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As the historic home in exile of His Holiness the Dalai Lama and the Tibetan community, Dharamshala—particularly McLeod Ganj and Dharamkot—radiates compassion, non-violence, and meditative peace. Monastic chanting, prayer wheels, and mindful walking trails create an inspiring backdrop for yogic philosophy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 transition-colors">
              <Sun className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Cool & Introspective Climate
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike the tropical heat of the plains, Dharamshala’s temperate mountain climate ensures sustained physical energy throughout intense 4-hour daily asana practices. Cool mountain evenings encourage early rest, deep journaling, and introspective study free from urban distractions.
              </p>
            </div>
          </div>

          {/* Additional Cultural Context */}
          <div className="mt-12 p-8 rounded-2xl bg-secondary/30 border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">
              Yoga Teacher Training in the Himalayas
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              For thousands of years, the great yogic rishis, siddhas, and Tibetan lamas retreated into the high caves and valleys of Himachal Pradesh to practice deep tapasya (disciplined spiritual heat). Dharamshala offers modern yogis an unbroken connection to this Himalayan lineage. Stepping onto your mat in these hills is more than physical exercise; it is an initiation into quiet discernment, balanced breathing, and mindful conscious presence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DHARAMSHALA VS RISHIKESH COMPARISON */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Honest Guidance</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Dharamshala vs Rishikesh: Which Location Fits You?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Both locations are world-renowned yogic centers. Compare them openly to determine which Himalayan sanctuary best suits your personal learning style.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-foreground border-b border-border">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature</th>
                  <th className="py-4 px-6 font-bold text-primary">Dharamshala (Himachal Pradesh)</th>
                  <th className="py-4 px-6 font-bold">Rishikesh (Uttarakhand)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Altitude & Terrain</td>
                  <td className="py-4 px-6 text-foreground font-medium">around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]; steep pine & cedar forested mountain trails</td>
                  <td className="py-4 px-6 text-muted-foreground">372 m; sacred Ganges river valley nestled in lower foothills</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Climate & Temperature</td>
                  <td className="py-4 px-6 text-foreground font-medium">Cool mountain climate; brisk mornings and pleasant sunny afternoons</td>
                  <td className="py-4 px-6 text-muted-foreground">Subtropical; warmer spring/summer with river swimming</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Atmosphere & Vibe</td>
                  <td className="py-4 px-6 text-foreground font-medium">Quiet, meditative, Tibetan Buddhist monasteries, reflective sadhana</td>
                  <td className="py-4 px-6 text-muted-foreground">Bustling spiritual capital, vibrant temple Aarti, historic ashram streets</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Weekend Excursions</td>
                  <td className="py-4 px-6 text-foreground font-medium">Triund mountain trek, Bhagsu waterfall, Dalai Lama Temple Complex</td>
                  <td className="py-4 px-6 text-muted-foreground">Beatles Ashram, Vashistha Cave, Ganga Aarti, Kunjapuri Temple</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Best For</td>
                  <td className="py-4 px-6 text-foreground font-medium">Seekers wanting cooler weather, quiet forest seclusion, and meditation</td>
                  <td className="py-4 px-6 text-muted-foreground">Seekers wanting classical river ashram culture and bustling energy</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">Explore Location</td>
                  <td className="py-4 px-6 text-foreground font-semibold">You are viewing Dharamshala</td>
                  <td className="py-4 px-6">
                    <Link
                      href="/200-hour-yoga-teacher-training-in-rishikesh"
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <span>View Rishikesh 200hr</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM (200 HOURS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Comprehensive Education</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Comprehensive 200-Hour Curriculum
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Our 200-hour curriculum adheres strictly to high international standards across six foundational educational pillars.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 1: Asana Techniques, Training & Practice
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  85 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Daily intensive morning and late-afternoon practice focusing on classical Hatha yoga postures and the primary series of Ashtanga Vinyasa. Emphasis on anatomical joint stacking, spine lengthening, bandha activation, and modifications for beginner, intermediate, and injured bodies.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Classical Surya Namaskar A & B with mantra</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Standing stability, balances, and forward folds</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Backbends and shoulder opening mechanics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Restorative Yin yoga and restorative relaxation</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 2: Pranayama, Shatkarma & Breath Science
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  30 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Mastering the expansion and control of vital prana. Systematically studying the traditional breathing methods outlined in the Hatha Yoga Pradipika alongside ancient nasal and digestive cleansing kriyas.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Nadi Shodhana (Alternate Nostril Purification)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Kapalabhati and Bhastrika metabolic cleansing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Ujjayi, Bhramari, Sheetali and Sheetkari</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Shatkarma practice: Jala Neti, Sutra Neti, Trataka</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 3: Anatomy, Biomechanics & Injury Prevention
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  25 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Demystifying human anatomy to ensure safe, sustainable teaching. Understanding skeletal variance, fascia, muscular agonists/antagonists, and common postural compensations.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pelvic-lumbar rhythm and spine biomechanics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Knee tracking, hip joint rotation, and shoulder girdle</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Diaphragm dynamics and autonomic nervous system</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Modifications for common repetitive-strain injuries</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 4: Yoga Philosophy, Lifestyle & Ethics
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  30 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Exploring the philosophical lineage of yoga from ancient Vedic scriptures to modern ethical application. Reading and discussing the core verses of Patanjali’s Yoga Sutras and the Bhagavad Gita.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> The 8 Limbs of Raja Yoga (Ashtanga)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Yamas & Niyamas as living ethical principles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Karma, Samskara, and the paths of Yoga (Jnana, Bhakti, Karma, Raja)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Teacher-student dynamics, boundaries, and professional ethics</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 5: Teaching Methodology, Sequencing & Adjustments
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  20 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Transforming from an enthusiastic practitioner into a poised, articulate instructor. Learning how to see bodies, command space with confidence, deliver crystal-clear verbal cues, and apply respectful hands-on assists.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Intelligent arc sequencing from warm-up to peak pose</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Voice modulation, projection, and energetic pacing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Safe, supportive hands-on assists and prop setups</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Designing themed classes for diverse audiences</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Module 6: Practicum & Teaching Assessment
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                  10 Contact Hours
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Hands-on peer teaching starting from the second week. Lead full 60-minute classes, receive immediate constructive feedback from senior mentors, and graduate with the practical confidence to teach immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE DAILY SCHEDULE */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ashram Discipline</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sample Daily Ashram Schedule
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              A balanced daily rhythm blending active asana, subtle breathwork, intellectual philosophy, and restorative mountain contemplation. Sundays are reserved for rest and excursions.
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
                  <td className="py-3.5 px-6 text-muted-foreground">Shatkarma practices (Jala Neti), warm ginger-lemon water, quiet morning silence</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">06:30 AM – 08:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Pranayama, Meditation & Asana</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Vital breathwork, mantra chanting, and classical Hatha / dynamic Ashtanga sadhana</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">08:30 AM – 09:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Sattvic Himalayan Breakfast</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Fresh seasonal fruits, porridge, herbal tea, Ayurvedic mountain preparations</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">10:00 AM – 11:30 AM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Yoga Philosophy & Sutras</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Patanjali’s 8 Limbs, Bhagavad Gita, koshas, chakras, and ethical living</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">11:45 AM – 01:15 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Anatomy & Posture Alignment</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Musculoskeletal biomechanics, joint protection, prop applications, and modifications</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">01:15 PM – 03:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Nutritious Lunch & Quiet Rest</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Fresh vegetarian lunch followed by forest walk, journaling, or self-study</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">03:00 PM – 04:30 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Teaching Methodology & Practicum</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Hands-on adjustments, class sequencing, cueing clinic, peer teaching</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">04:45 PM – 06:15 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Evening Asana & Vinyasa Flow</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Gentle alignment, restorative Yin yoga, or fluid breath-connected vinyasa</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">07:00 PM – 08:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Ayurvedic Vegetarian Dinner</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Warm, nourishing sattvic meal prepared according to seasonal Himalayan traditions</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-primary">08:00 PM – 09:00 PM</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">Satsang / Sound Meditation / Rest</td>
                  <td className="py-3.5 px-6 text-muted-foreground">Kirtan, singing bowl sound bath, Q&A, and quiet contemplation before early sleep</td>
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Enrollment Profile</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Who This Course Is For
              </h2>
              <div className="w-16 h-1 bg-primary mt-3 rounded-full mb-6" />
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Our 200-hour residential teacher training is created for sincere seekers who view yoga not merely as physical fitness, but as an integrated way of living with awareness, vitality, and equanimity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Aspiring Yoga Teachers</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Graduates seeking an internationally respected 200-hour certificate to teach worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Dedicated Practitioners</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Students seeking to immerse in 3 weeks of personal sadhana, break bad posture habits, and understand anatomy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Spiritual Seekers & Travelers</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Those yearning for a mindful, digital-detox Himalayan experience surrounded by pine forests and Buddhist wisdom.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Prerequisites & Admission Criteria
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                No advanced acrobatics, extreme flexibility, or prior teaching certification is required. We ask only for:
              </p>

              <div className="space-y-3 text-sm text-foreground/80">
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Activity className="w-5 h-5 text-primary shrink-0" />
                  <span>At least 3–6 months of regular yoga or movement practice</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary shrink-0" />
                  <span>Physical and mental fitness for 5–6 hours of daily study and practice</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <Compass className="w-5 h-5 text-primary shrink-0" />
                  <span>Willingness to respect ashram community rules and alcohol-free living</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <span>Open beginner’s mindset and sincere curiosity toward yogic philosophy</span>
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
              Upcoming Dharamshala Batches (2027)
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Batches start on the 1st of each month (March through November 2027). All rates include accommodation, meals, tuition, and certification.
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
                {BATCHES_200_HOUR_DHARAMSHALA.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>{batch.date}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €1450 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €1850 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Full Clarity</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Included in Your Course Fee
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
                  <span>21 nights of peaceful ashram accommodation (double sharing or private room)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>3 freshly prepared sattvic Ayurvedic vegetarian meals daily</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>200-Hour Yoga Teacher Training Certificate upon graduation [[CONFIRM_YA_STATUS]]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Comprehensive printed study manuals and textbook materials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Complete yoga prop kit for practice (mat, straps, blocks, bolster access)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Weekend guided trek to Triund and visit to Bhagsu waterfall</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Continuous filtered Himalayan drinking water and herbal teas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Complimentary Pre-YTTC online preparatory course access</span>
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
                  <span>International and domestic airfare to Gaggal/Kangra (DHM) or New Delhi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Indian tourist visa fees and travel medical insurance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Airport transfer from Gaggal or New Delhi [[CONFIRM: pickup included?]]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Personal laundry services and personal cafe expenditures in McLeod Ganj</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Yoga Alliance USA registration fee (paid directly to YA if you choose to register)</span>
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
              Accommodation & Sattvic Nutrition
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Rest deeply in clean, peaceful mountain accommodations designed for restorative sleep and introspective quiet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Peaceful Mountain Accommodation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Our residential rooms in [[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]] are quiet sanctuaries surrounded by towering Himalayan cedar trees. Each room is equipped with comfortable mattresses, clean linens, warm blankets for mountain evenings, private ensuite western bathrooms with hot water showers, and high-speed Wi-Fi.
              </p>
              <div className="p-4 rounded-xl bg-secondary/50 border border-dashed border-border text-center text-xs text-muted-foreground">
                [[TODO: Dharamshala photo — real bedroom photos with Himalayan forest view]]
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Ayurvedic Sattvic Cuisine
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Food is medicine on the yogic path. Our ashram kitchen prepares three nourishing vegetarian and vegan meals daily, combining classical Ayurvedic doshic wisdom with fresh seasonal Himalayan vegetables, lentils, whole grains, and herbal spices. We accommodate gluten-free and vegan dietary needs with advance notice.
              </p>
              <div className="p-4 rounded-xl bg-secondary/50 border border-dashed border-border text-center text-xs text-muted-foreground">
                [[TODO: Dharamshala photo — freshly prepared sattvic Himalayan meal]]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WEEKEND ACTIVITIES & NEARBY */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Himalayan Exploration</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Weekend Activities & Sacred Sites
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Sundays are your day of integration. Explore the stunning natural wonders and deep spiritual heritage of Kangra Valley.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Mountain className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Triund Mountain Trek</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The crown jewel of Dharamshala. A scenic mountain trail through oak and deodar forests leading to the breathtaking Triund ridge with panoramic views of the Moon Peak and Kangra Valley.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Compass className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Bhagsu Waterfall & Temple</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A short walking excursion to the refreshing mountain cascade of Bhagsu and the historic Bhagsunath Shiva temple, revered by yogis for centuries.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Tibetan Monasteries</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Visit the Tsuglagkhang Complex (the Dalai Lama Temple), the Norbulingka Institute preserving traditional Tibetan arts, and peaceful meditation gompas across McLeod Ganj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. HOW TO REACH & BEST TIME */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Travel Logistics</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              How to Reach Dharamshala & Weather Guide
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Transportation Options
              </h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div>
                  <h4 className="font-semibold text-foreground">By Air (Gaggal Kangra Airport - DHM):</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    Gaggal Airport is 15–20 km from our campus (30–45 min by taxi). Daily flights connect directly from New Delhi (DEL).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">By Luxury Bus from New Delhi:</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    Air-conditioned Volvo luxury sleeper buses depart every evening from New Delhi ISBT Kashmiri Gate directly to McLeod Ganj (10–11 hours).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">By Train via Pathankot:</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    Pathankot Junction (PTK) is the closest major railway hub, located 85 km away (2.5–3 hours by scenic taxi transfer).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Himalayan Seasons & Weather
              </h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div>
                  <h4 className="font-semibold text-foreground">Spring (March – June):</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    18°C to 28°C. Blooming rhododendrons, crisp clear mornings, and warm sunny days. Ideal for outdoor yoga.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Monsoon (July – August):</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    20°C to 25°C. Lush green mountains, atmospheric fog, and heavy rains. Practice shifts inside panoramic heated shalas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Autumn (September – November):</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    12°C to 22°C. Crystal clear skies, majestic snow-capped peak views, and cool contemplative evenings.
                  </p>
                </div>
              </div>
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
              Dharamshala Faculty & Reviews
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our master instructors are deeply rooted in the Himalayan lineage. Teacher profiles and student reviews will be populated upon final operational confirmation.
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
              Frequently Asked Questions
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
              <span className="font-bold">Health & Course Disclaimer: </span>
              Yoga teacher training is an intensive physical, energetic, and pedagogical course designed for personal education and professional instruction. It is not medical treatment, psychotherapy, or physical therapy. Practitioners with preexisting cardiovascular, joint, or spinal conditions should consult a qualified physician before enrolling.
            </div>
          </div>

          {/* Final CTA Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/20 text-center shadow-lg">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Begin Your Himalayan Yoga Journey
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in Dharamshala for 22 days of transformative learning, ancient deodar pine forests, and authentic Himalayan sadhana from €1450.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleEnrollClick()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for 200hr Dharamshala</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/200-hour-yoga-teacher-training-in-rishikesh"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Compare with Rishikesh 200hr</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
