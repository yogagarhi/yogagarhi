"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  Play,
  Check,
  X,
  Smartphone,
  Mail,
  User,
  Phone,
  MessageSquare,
  BookOpen,
  Heart,
  Flame,
  Globe,
  Sun,
  Moon,
  Compass,
  CheckCheck,
  Building,
  Coffee,
  HelpCircle,
  Video,
  Shield,
  FileText
} from "lucide-react";
import { getCloudinaryUrl } from "@/utils/cloudinary";

export default function Rishikesh200HourLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<"twin" | "private">("twin");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(0);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Early Bird Countdown to 30 November 2026 (23:59:59 IST)
  const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(true);
  const [earlyBirdTimeLeft, setEarlyBirdTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Application Form State
  const [appStep, setAppStep] = useState<"form" | "submitting" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    experience: "1-3 years regular practice",
    goal: "Both (Deepen practice & teach confidently)",
    roomType: "Twin Sharing (USD 1,550)",
    motivation: "",
  });

  useEffect(() => {
    // Early Bird Deadline: 30 November 2026 23:59:59 IST (UTC 18:29:59)
    const deadline = new Date("2026-11-30T23:59:59+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference <= 0) {
        setIsEarlyBirdActive(false);
      } else {
        setIsEarlyBirdActive(true);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setEarlyBirdTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const openApplication = (room: "twin" | "private" = "twin") => {
    setSelectedRoom(room);
    setFormData((prev) => ({
      ...prev,
      roomType: room === "twin" ? "Twin Sharing (USD 1,550)" : "Private Room (USD 2,000)",
    }));
    setAppStep("form");
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;

    setAppStep("submitting");
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          subject: "New Rishikesh 200-Hour TTC Conversation Application - " + formData.name,
          message: `Application for 200-Hour Yoga TTC in Rishikesh (4 Jan - 31 Jan 2027)
Name: ${formData.name}
Email: ${formData.email}
WhatsApp/Phone: ${formData.whatsapp}
Country: ${formData.country}
Experience Level: ${formData.experience}
Primary Goal: ${formData.goal}
Preferred Room: ${formData.roomType}
Motivation / Background:
${formData.motivation}`,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setAppStep("success");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCurriculum = (index: number) => {
    setOpenCurriculum(openCurriculum === index ? null : index);
  };

  const curriculumItems = [
    {
      title: "1. Asana Practice & 5 Living Traditions",
      details: "Comprehensive immersion into 5 key lineages (3 dedicated days each): Vinyasa Flow, Ashtanga Primary Series, Traditional Classical Hatha, Iyengar-based precision alignment, and Therapeutic Restorative Yoga. Learn how each system addresses anatomy and energy differently.",
    },
    {
      title: "2. Functional Anatomy & Biomechanics",
      details: "Not dry rote memorization. Master real joint kinematics, scapulohumeral rhythm, SI joint stabilization, spine compression vs. tension, and myofascial pathways. The clinical knowledge that experienced teachers normally pay thousands for years later.",
    },
    {
      title: "3. Hands-on Adjustments & Prop Mastery",
      details: "Learn safe, consent-based, anatomically sound hands-on adjustments. Discover how to read diverse skeletal bodies instantly and use blocks, straps, bolsters, and chairs to unlock postures safely.",
    },
    {
      title: "4. Teaching Methodology & Practice Teaching from Week 1",
      details: "You will NOT wait until the last 2 days to teach. From the very first week, you lead mini-sequences, learn clear verbal cueing in English, voice projection, class staging, and how to create balanced 60 & 90-minute class arcs.",
    },
    {
      title: "5. Alignment & Intelligent Sequencing",
      details: "Step-by-step principles of peak-pose sequencing, counter-posing, warm-up biomechanics, and thematic integration so your classes flow with physiological logic and spiritual depth.",
    },
    {
      title: "6. Authentic Himalayan Yoga Philosophy & Sutras",
      details: "Patanjali's Yoga Sutras, Bhagavad Gita insights, Hatha Yoga Pradipika, and the Eight Limbs of Yoga explained through practical modern life application rather than abstract academic theories.",
    },
    {
      title: "7. Pranayama & Breath Science",
      details: "Master classical breathing techniques: Nadi Shodhana, Kapalabhati, Bhastrika, Ujjayi, Bhramari, and Sheetali. Understand autonomic nervous system regulation and CO2 tolerance.",
    },
    {
      title: "8. Meditation & Mindfulness Techniques",
      details: "Daily structured silent meditation, Antar Mouna (inner silence), Vipassana grounding, Trataka (candle gazing), and dynamic breath-focused concentration.",
    },
    {
      title: "9. Traditional Mantra Chanting & Sound Vibration",
      details: "Vedic and Tantric mantras with correct Sanskrit pronunciation and tonal resonance to awaken inner clarity and focus the wandering mind.",
    },
    {
      title: "10. Shatkarma (Yogic Cleansing Practices)",
      details: "Gentle guided instruction in classical cleansing techniques: Jala Neti, Sutra Neti, Kunjal Kriya, and Agnisar Kriya under senior traditional guidance.",
    },
    {
      title: "11. Yoga Nidra & Conscious Deep Rest",
      details: "The science of psychic sleep and guided subconscious relaxation. Learn how to guide your own students through restorative deep delta-wave journeys.",
    },
    {
      title: "12. Ayurveda Fundamentals & Lifestyle",
      details: "Understanding the three Doshas (Vata, Pitta, Kapha), Dincharya (daily yogic routine), seasonal living (Ritucharya), and Ayurvedic nutritional principles for yogic vitality.",
    },
    {
      title: "13. Sound Healing & Vibrational Therapy",
      details: "Tibetan singing bowls and sound frequency immersion classes to cleanse energetic blocks and deepen cellular relaxation.",
    },
    {
      title: "14. Weekly Workshops & Special Excursions",
      details: "Specialized weekend deep-dives: Ganga Aarti ceremony at Parmarth Niketan, Himalayan sunrise meditation, Kunjapuri Temple pilgrimage, and sacred Ganga dip.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1c2420] font-sans selection:bg-[#F5B942]/30 selection:text-[#0B3B2C]">
      
      {/* ========================================================================= */}
      {/* 1. TOP ANNOUNCEMENT BAR (SELECTIVE COHORT + EARLY BIRD COUNTDOWN) */}
      {/* ========================================================================= */}
      <div className="bg-[#0B3B2C] text-white py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-[#144f3c] sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f5b942] animate-ping" />
            <span className="font-bold text-[#f5b942]">Strictly 10 Students per Cohort</span>
            <span className="hidden md:inline text-gray-300">• Admission by Conversation Only</span>
          </div>

          {isEarlyBirdActive ? (
            <div className="flex items-center gap-2 text-[11px] sm:text-xs">
              <span className="bg-[#ea580c] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                USD 100 Early Bird
              </span>
              <span className="text-gray-300 hidden sm:inline">Ends 30 Nov 2026:</span>
              <span className="font-mono font-bold text-[#f5b942] bg-[#06281e] px-2 py-0.5 rounded border border-[#1b614b]">
                {earlyBirdTimeLeft.days}d {earlyBirdTimeLeft.hours}h {earlyBirdTimeLeft.minutes}m {earlyBirdTimeLeft.seconds}s
              </span>
            </div>
          ) : (
            <span className="text-xs text-gray-300">4 Jan – 31 Jan 2027 • Rishikesh, India</span>
          )}

          <div>
            <button
              onClick={() => openApplication("twin")}
              className="bg-[#ea580c] hover:bg-[#d94e07] text-white text-xs font-bold py-1 px-3.5 rounded-lg shadow transition-all"
            >
              Apply for a Conversation →
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DEDICATED HEADER */}
      {/* ========================================================================= */}
      <header className="bg-white border-b border-[#e8dfd3] py-3.5 px-4 sticky top-[37px] z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#0B3B2C]">
              Yoga Gadhi
            </span>
            <span className="text-[10px] text-[#52635a] tracking-wider uppercase font-medium">
              Ashram & Yoga School • Rishikesh & Bali
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 bg-[#f4eee4] px-3 py-1.5 rounded-full border border-[#e2d8c9] text-xs text-[#0B3B2C] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#0B3B2C]" />
              <span>Yoga Alliance Certified RYS 200</span>
            </div>

            <button
              onClick={() => openApplication("twin")}
              className="bg-[#0B3B2C] hover:bg-[#072c22] text-white text-xs sm:text-sm font-bold py-2 px-4 sm:px-6 rounded-xl shadow transition-all flex items-center gap-2"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ========================================================================= */}
        {/* 3. HERO SECTION (HIGH CONVERSION + CLEAR SELECTIVITY) */}
        {/* ========================================================================= */}
        <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f4eee4] via-[#fbf7f0] to-[#FDFBF7] border-b border-[#e8dfd3] overflow-hidden">
          
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#0B3B2C] text-[#f5b942] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                <Award className="w-4 h-4 text-[#f5b942]" />
                Yoga Alliance Certified RYS 200
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#fdf3e2] border border-[#f5b942]/40 text-[#c45e07] text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Users className="w-3.5 h-3.5" />
                Maximum 10 Students per Batch
              </span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-[#0B3B2C] leading-[1.18] tracking-tight mb-5 max-w-4xl mx-auto">
              200 Hour Yoga Teacher Training in Rishikesh
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#3d4d45] max-w-3xl mx-auto leading-relaxed mb-8">
              A 28-day immersive residential training for serious practitioners who want to teach with authentic confidence and anatomical clarity — not just collect a certificate.
            </p>

            {/* Core Facts Cards Grid (4 Highlights) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-left">
              
              <div className="bg-white p-4 rounded-2xl border border-[#e2d8c9] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#718279] uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4 text-[#ea580c]" />
                  <span>Dates</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0B3B2C]">4 Jan – 31 Jan 2027</p>
                <p className="text-[10px] text-[#718279] mt-0.5">Arrive 3 Jan • Depart 1 Feb</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e2d8c9] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#718279] uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-[#ea580c]" />
                  <span>Location</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0B3B2C]">Rishikesh, India</p>
                <p className="text-[10px] text-[#718279] mt-0.5">Himalayan Foothills & Ganga</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e2d8c9] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#718279] uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4 text-[#ea580c]" />
                  <span>Batch Size</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0B3B2C]">Strictly 10 Seats</p>
                <p className="text-[10px] text-[#718279] mt-0.5">Intimate personal mentoring</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e2d8c9] shadow-sm ring-2 ring-[#ea580c]/30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#718279] uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-[#ea580c]" />
                  <span>Price All-Inclusive</span>
                </div>
                <p className="text-xs sm:text-sm font-black text-[#ea580c]">From USD 1,550</p>
                {isEarlyBirdActive && (
                  <p className="text-[10px] text-green-700 font-bold mt-0.5">USD 100 Off before 30 Nov</p>
                )}
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={() => openApplication("twin")}
                className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-base sm:text-lg py-4 px-8 sm:px-10 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply for a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/917895350563?text=Hi%20Yoga%20Gadhi,%20I%20am%20interested%20in%20applying%20for%20the%20200-Hour%20Yoga%20TTC%20in%20Rishikesh%20(Jan%202027)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0B3B2C] border-2 border-[#0B3B2C] font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-green-600" />
                <span>Chat with Admissions on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-[#718279]">
              🔒 <strong>No immediate payment required.</strong> Admission is confirmed only after a mutual alignment call.
            </p>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CORE POSITIONING STATEMENT ("THIS TTC IS NOT FOR EVERYONE") */}
        {/* ========================================================================= */}
        <section className="py-14 md:py-18 bg-[#0B3B2C] text-white border-b border-[#144f3c]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="bg-[#06281e] border-2 border-[#f5b942]/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              <div className="inline-flex items-center gap-2 bg-[#0B3B2C] border border-[#1b614b] text-[#f5b942] text-xs font-bold px-3.5 py-1 rounded-full mb-4 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#f5b942]" />
                Important Notice on Admission
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                This Teacher Training Is NOT For Everyone
              </h2>

              <p className="text-sm sm:text-base text-[#d4ebe2] leading-relaxed mb-6">
                We are deliberately selective. Yoga Gadhi is not a commercial yoga factory churning out 50 graduates every month. We cap our cohort strictly at <strong>10 students</strong> so every single individual receives rigorous personal correction, voice coaching, and hands-on diagnostic training.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                
                <div className="bg-[#0b3b2c] p-4 sm:p-5 rounded-2xl border border-[#1b614b]">
                  <p className="text-xs font-bold text-[#f5b942] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    This Course Was Built For You If:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#e1f0ea]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#f5b942]">•</span>
                      <span>You truly want to <strong>teach yoga with clinical confidence</strong> and intelligently design your own class sequences.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f5b942]">•</span>
                      <span>You want to <strong>deeply transform your personal practice</strong> under authentic Himalayan masters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f5b942]">•</span>
                      <span>You appreciate direct, constructive feedback and intimate small-group mentorship.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0b3b2c] p-4 sm:p-5 rounded-2xl border border-[#1b614b]">
                  <p className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-400" />
                    Please Do NOT Apply If:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#e1f0ea]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>You are looking for a casual holiday, tourist getaway, or vacation retreat.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>You just want a quick stamp on a certificate without doing the inner discipline and daily homework.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>You prefer hiding in the back row of a crowded 40-person lecture hall.</span>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => openApplication("twin")}
                  className="bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-lg transition-all"
                >
                  Apply for a Conversation with Sachin Ji →
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OUR STORY / WHY THIS TTC EXISTS (IN FOUNDER'S VOICE) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#FDFBF7] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-3xl overflow-hidden border-4 border-[#0B3B2C] shadow-2xl bg-[#041a14]">
                  <Image
                    src="/sachin-ji-instructor.jpg"
                    alt="Acharya Sachin Kotiyal - Founder Yoga Gadhi"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                    <p className="font-serif font-bold text-white text-base">Acharya Sachin Kotiyal</p>
                    <p className="text-[11px] text-[#f5b942]">Founder & Lead Master Educator</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-[#52635a]">
                  10+ Years International TTC Faculty • Yoga Therapy Specialist for the Indian Armed Forces
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-3.5 py-1.5 rounded-full border border-[#cbd8d2] inline-block">
                  Founder's Note
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B2C] leading-tight">
                  "Why I Created Yoga Gadhi's 200-Hour Training"
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base text-[#3d4d45] leading-relaxed">
                  <p>
                    Over the last decade, I have trained thousands of students across India, Bali, and Europe. Most students genuinely enjoyed their time at standard TTCs — but when they returned home, something was broken.
                  </p>
                  <p className="font-medium text-[#0B3B2C]">
                    They could not design their own classes. They hesitated to give adjustments. They were terrified of student injuries because they had only memorized skeletal bones from a 2D book. And worst of all, they did not feel ready to teach.
                  </p>
                  <p>
                    Why does this happen? Because in standard commercial programs with 30–50 students, <strong>teaching practice is crammed into the final 2 days</strong>. And the moment the graduation photo is taken, there is zero ongoing guidance.
                  </p>
                  <p>
                    We built Yoga Gadhi to solve this. We cap each batch at <strong>10 students</strong>, start teaching practicum from Week 1, cover 5 distinct lineages, and provide <strong>1 full year of continuous post-course mentorship</strong>.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openApplication("twin")}
                    className="bg-[#0B3B2C] hover:bg-[#072c22] text-white font-bold text-sm py-3 px-6 rounded-xl shadow transition-all flex items-center gap-2"
                  >
                    <span>Schedule an Admissions Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHAT MAKES US DIFFERENT (9 PILLARS) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#f4eee4] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-3.5 py-1.5 rounded-full border border-[#cbd8d2] inline-block mb-3">
                The Yoga Gadhi Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B2C]">
                9 Reasons Why Our 200-Hour TTC Is Different
              </h2>
              <p className="text-sm sm:text-base text-[#52635a] mt-2">
                Engineered for practical mastery, anatomical safety, and lifelong teaching capability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Strictly Max 10 Students
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  You are not a face in the crowd. Every posture, alignment cue, and adjustment you perform is personally reviewed by lead masters daily.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Teaching Practice from Week 1
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  No waiting until the final 2 days. You begin teaching mini-drills in small groups right from your first week, building authentic presence and voice.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Five Living Traditions (3 Days Each)
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Deep practical immersion in Vinyasa, Ashtanga, Traditional Classical Hatha, Iyengar alignment, and Restorative Yoga Therapy.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  4
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Applied Functional Anatomy
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Learn real human biomechanics, spinal disc loading, and SI joint mechanics — the exact clinical insights experienced teachers pay extra for years later.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  5
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Biomechanics & Hands-on Adjustments
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Distinguish skeletal bone compression from muscular tension. Learn safe, confident adjustments without causing injuries.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  6
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  Intelligent Class Methodology
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Learn how to construct, counter-pose, and pace 60 and 90-minute classes from scratch, tailored for all student levels and injuries.
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white p-6 rounded-3xl border-2 border-[#ea580c] shadow-md hover:shadow-lg transition-shadow relative">
                <div className="w-11 h-11 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center font-bold text-base mb-4">
                  7
                </div>
                <div className="absolute top-4 right-4 bg-[#fdf3e2] text-[#c45e07] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                  Included Free
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  1-Year Post-Course Mentorship
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Free 12-month access to all monthly online workshops by our masters, plus live interactive Q&A mentorship calls every 2 months.
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  8
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  1:1 Pre-Course Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Personalized pre-course reading lists, philosophy groundwork, and asana readiness guidance so you arrive fully prepared.
                </p>
              </div>

              {/* Card 9 */}
              <div className="bg-white p-6 rounded-3xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B2C] text-[#f5b942] flex items-center justify-center font-bold text-base mb-4">
                  9
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3B2C] mb-2">
                  100% All-Inclusive (Zero Hidden Fees)
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  Accommodation, 3 organic sattvic meals daily, Ayurveda sessions, sound healing, study kit, and all excursions are completely included.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. FULL CURRICULUM (INTERACTIVE ACCORDION) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#FDFBF7] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-3.5 py-1.5 rounded-full border border-[#cbd8d2] inline-block mb-3">
                Complete Syllabus
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B2C]">
                Full 200-Hour Curriculum Breakdown
              </h2>
              <p className="text-sm text-[#52635a] mt-2">
                Certified by Yoga Alliance USA (RYS 200) • Recognized internationally worldwide.
              </p>
            </div>

            <div className="space-y-3">
              {curriculumItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e4dcce] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleCurriculum(index)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between text-[#0B3B2C] hover:text-[#ea580c] transition-colors"
                  >
                    <span>{item.title}</span>
                    {openCurriculum === index ? (
                      <ChevronUp className="w-5 h-5 text-[#ea580c] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#718279] shrink-0" />
                    )}
                  </button>
                  {openCurriculum === index && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#52635a] leading-relaxed border-t border-[#f2ebe1] pt-3">
                      {item.details}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. ASHRAM DAILY SCHEDULE */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#06281e] text-white border-b border-[#144f3c]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#f5b942] bg-[#0b3b2c] px-3.5 py-1 rounded-full border border-[#1b614b]">
                Daily Immersion
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                A Day in the Life at Rishikesh Ashram
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              
              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">06:00 AM</span>
                <div>
                  <p className="font-bold text-white">Wake Up & Himalayan Herbal Tea</p>
                  <p className="text-[#a3c9bd] text-[11px]">Silent morning wake-up call in nature</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">06:30 AM</span>
                <div>
                  <p className="font-bold text-white">Shatkarma, Pranayama & Meditation</p>
                  <p className="text-[#a3c9bd] text-[11px]">Breathwork science and purification kriyas</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">07:30 AM</span>
                <div>
                  <p className="font-bold text-white">Morning Dynamic Asana Practice</p>
                  <p className="text-[#a3c9bd] text-[11px]">Vinyasa / Ashtanga / Hatha flow immersion</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">09:30 AM</span>
                <div>
                  <p className="font-bold text-white">Nutritious Sattvic Breakfast</p>
                  <p className="text-[#a3c9bd] text-[11px]">Freshly cooked organic Ayurvedic meal</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">10:30 AM</span>
                <div>
                  <p className="font-bold text-white">Functional Anatomy & Biomechanics</p>
                  <p className="text-[#a3c9bd] text-[11px]">Joint loading, injury prevention & spinal mechanics</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">12:00 PM</span>
                <div>
                  <p className="font-bold text-white">Alignment, Props & Hands-on Adjustments</p>
                  <p className="text-[#a3c9bd] text-[11px]">Interactive posture clinic & diagnostic review</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">01:30 PM</span>
                <div>
                  <p className="font-bold text-white">Yogic Lunch & Dedicated Rest</p>
                  <p className="text-[#a3c9bd] text-[11px]">Wholesome lunch, personal study & relaxation</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">03:30 PM</span>
                <div>
                  <p className="font-bold text-white">Yoga Philosophy / Ayurveda / Workshops</p>
                  <p className="text-[#a3c9bd] text-[11px]">Patanjali Sutras & practical yogic lifestyle</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">05:00 PM</span>
                <div>
                  <p className="font-bold text-white">Teaching Practicum & Restorative Flow</p>
                  <p className="text-[#a3c9bd] text-[11px]">Student-led practice teaching & feedback</p>
                </div>
              </div>

              <div className="bg-[#0b3b2c] p-4 rounded-2xl border border-[#1b614b] flex items-start gap-3">
                <span className="font-mono font-bold text-[#f5b942] shrink-0">06:30 PM</span>
                <div>
                  <p className="font-bold text-white">Meditation, Mantra & Sound Healing</p>
                  <p className="text-[#a3c9bd] text-[11px]">Evening relaxation, chanting & singing bowls</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. PRICING & ADMISSION PACKAGES (ALL INCLUSIVE) */}
        {/* ========================================================================= */}
        <section id="pricing" className="py-16 md:py-24 bg-[#FDFBF7] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-3.5 py-1.5 rounded-full border border-[#cbd8d2] inline-block mb-3">
                All-Inclusive Investment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B2C]">
                Course Dates & Investment
              </h2>
              <p className="text-sm sm:text-base text-[#52635a] mt-2">
                <strong>4 January – 31 January 2027</strong> • Rishikesh, India (Arrival 3 Jan, Departure 1 Feb)
              </p>
            </div>

            {/* 2 Pricing Cards (Twin vs Private) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              
              {/* Card 1: Twin Sharing */}
              <div className="bg-white rounded-3xl border-2 border-[#e2d8c9] p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold text-[#718279] tracking-wider">Shared Room</span>
                    {isEarlyBirdActive && (
                      <span className="bg-[#ea580c] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                        USD 100 Early Bird
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#0B3B2C] mb-2">
                    Twin Sharing Room
                  </h3>
                  <p className="text-xs text-[#52635a] mb-5">
                    Spacious room shared with one fellow practitioner of the same gender. High-speed Wi-Fi, attached bathroom & mountain views.
                  </p>

                  <div className="mb-6">
                    {isEarlyBirdActive ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-4xl font-black text-[#0B3B2C]">USD 1,450</span>
                        <span className="text-base text-gray-400 line-through">USD 1,550</span>
                      </div>
                    ) : (
                      <span className="font-serif text-4xl font-black text-[#0B3B2C]">USD 1,550</span>
                    )}
                    <p className="text-[11px] text-[#718279] mt-1">All-inclusive: tuition, room, 3 meals daily & excursions</p>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#3d4d45] border-t border-[#f0e8dc] pt-5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>28 Days Shared Ashram Accommodation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>3 Daily Organic Sattvic Meals + Herbal Teas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>Yoga Alliance RYS 200 Certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>1-Year Post-Course Mentorship & Masterclasses</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openApplication("twin")}
                    className="w-full bg-[#0B3B2C] hover:bg-[#072c22] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply for Twin Sharing →</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Private Room */}
              <div className="bg-white rounded-3xl border-2 border-[#ea580c] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 bg-[#ea580c] text-white text-[10px] font-black uppercase tracking-widest py-1 px-5 rounded-bl-xl shadow">
                  Most Popular
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold text-[#c45e07] tracking-wider">Private Sanctuary</span>
                    {isEarlyBirdActive && (
                      <span className="bg-[#ea580c] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                        USD 100 Early Bird
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#0B3B2C] mb-2">
                    Private Room
                  </h3>
                  <p className="text-xs text-[#52635a] mb-5">
                    Your own quiet private room with private en-suite bathroom, work desk, high-speed Wi-Fi, and panoramic balcony.
                  </p>

                  <div className="mb-6">
                    {isEarlyBirdActive ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-4xl font-black text-[#ea580c]">USD 1,900</span>
                        <span className="text-base text-gray-400 line-through">USD 2,000</span>
                      </div>
                    ) : (
                      <span className="font-serif text-4xl font-black text-[#ea580c]">USD 2,000</span>
                    )}
                    <p className="text-[11px] text-[#718279] mt-1">All-inclusive: tuition, room, 3 meals daily & excursions</p>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#3d4d45] border-t border-[#f0e8dc] pt-5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>28 Days Private Room with En-Suite Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>3 Daily Organic Sattvic Meals + Herbal Teas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>Yoga Alliance RYS 200 Certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>1-Year Post-Course Mentorship & Masterclasses</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openApplication("private")}
                    className="w-full bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply for Private Room →</span>
                  </button>
                </div>
              </div>

            </div>

            {/* PAYMENT & REFUND POLICY NOTICE (TRANSPARENT & CALM) */}
            <div className="bg-[#f4eee4] border border-[#e2d8c9] p-5 sm:p-6 rounded-2xl max-w-3xl mx-auto text-xs text-[#52635a] leading-relaxed text-left space-y-1.5">
              <p className="font-bold text-[#0B3B2C] text-sm flex items-center gap-1.5 mb-1">
                <Shield className="w-4 h-4 text-[#0B3B2C]" />
                Transparent Deposit & Refund Policy:
              </p>
              <p>• Your seat is officially reserved only after the conversation and mutual acceptance, by paying a <strong>USD 200 deposit</strong>.</p>
              <p>• The <strong>USD 200 deposit is non-refundable</strong> to protect cohort integrity and room reservations.</p>
              <p>• The remaining course fee balance is payable on arrival in Rishikesh.</p>
              <p>• There are no refunds on the course fee once the course has started or after booking.</p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1c2420]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-3.5 py-1.5 rounded-full border border-[#cbd8d2] inline-block mb-3">
                Got Questions?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B2C]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 text-left">
              {[
                {
                  q: "Why is admission by conversation only? Can I just pay online?",
                  a: "Because we cap every batch at strictly 10 students, we protect the high standard and serious energetic focus of the training. The conversation is a friendly, no-pressure 15-minute call to ensure our intensive pedagogical style matches your personal goals."
                },
                {
                  q: "How does the reservation deposit work?",
                  a: "Once accepted after our conversation, you reserve your seat by paying a USD 200 non-refundable deposit. The remaining balance is payable upon your arrival at the ashram in Rishikesh."
                },
                {
                  q: "What is the refund policy?",
                  a: "The USD 200 deposit is non-refundable. Once booked or once the course begins, there are no refunds on the course fee. We keep this policy firm because with only 10 seats, every accepted student takes a reserved spot."
                },
                {
                  q: "How do I reach Rishikesh? Is airport pickup available?",
                  a: "The nearest airport is Dehradun (DED - Jolly Grant Airport), located 45 minutes by taxi from our ashram. Alternatively, you can fly into New Delhi (DEL) and take a short domestic flight or private car to Rishikesh. We assist you with pre-arranged verified airport transfers."
                },
                {
                  q: "Will I be certified to teach internationally?",
                  a: "Yes! Yoga Gadhi is a registered Yoga Alliance school (RYS 200). Upon successful completion of the 28-day course, you receive your worldwide-recognized RYT 200 certification."
                },
                {
                  q: "What if I am a practitioner who does not plan to teach right away?",
                  a: "Many students join specifically for deep personal sadhana, alignment mastery, and physiological understanding. You are warmly welcome as long as you are dedicated to the practice."
                },
                {
                  q: "What kind of food is served?",
                  a: "We serve 3 wholesome, freshly prepared vegetarian Sattvic meals daily, prepared with seasonal organic vegetables and Ayurvedic balancing herbs, plus fresh fruits and herbal teas."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#FDFBF7] border border-[#e4dcce] rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-[#0B3B2C] hover:text-[#ea580c] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4 text-[#ea580c] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#718279] shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#52635a] leading-relaxed border-t border-[#f2ebe1] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FINAL CONVERSATION CTA CALLOUT */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#0B3B2C] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            
            <span className="text-xs uppercase tracking-widest font-bold text-[#f5b942] bg-[#06281e] px-3.5 py-1.5 rounded-full border border-[#1b614b] inline-block mb-4">
              January 2027 Cohort
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Deepen Your Practice in Rishikesh?
            </h2>

            <p className="text-sm sm:text-base text-[#d4ebe2] max-w-2xl mx-auto mb-8">
              Strictly limited to 10 practitioners. Apply now to schedule your direct admissions alignment conversation.
            </p>

            <button
              onClick={() => openApplication("twin")}
              className="bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-base sm:text-lg py-4 px-10 rounded-2xl shadow-2xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Apply for a Conversation →</span>
            </button>

          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 12. DEDICATED FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#041a14] text-[#7fa396] py-8 px-4 text-center text-xs border-t border-[#0d3b2e]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Yoga Gadhi Ashram & Yoga School. All Rights Reserved.</p>
          <div className="flex gap-4 text-[#a3c9bd]">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. "APPLY FOR A CONVERSATION" MODAL (NO BUY NOW, STRICT ADMISSIONS) */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-[#1c2420] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#e4dcce] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#718279] hover:text-[#0B3B2C] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {appStep === "form" && (
              <div>
                <div className="text-center mb-5">
                  <span className="inline-block text-[10px] uppercase font-bold text-[#c45e07] bg-[#fdf3e2] px-3 py-1 rounded-full border border-[#f5b942]/40 mb-2">
                    Step 1 of 2: Admissions Application
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0B3B2C]">
                    Apply for a Conversation
                  </h3>
                  <p className="text-xs text-[#52635a] mt-1">
                    200-Hour Yoga TTC in Rishikesh • 4 Jan – 31 Jan 2027 (Max 10 Students)
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3 text-left">
                  
                  <div>
                    <label className="block text-xs font-bold text-[#0B3B2C] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0B3B2C] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jessica@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B3B2C] mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 555 123 4567"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0B3B2C] mb-1">Your Country</label>
                      <input
                        type="text"
                        placeholder="e.g. United States / UK"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B3B2C] mb-1">Preferred Room</label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C] bg-white"
                      >
                        <option value="Twin Sharing (USD 1,550)">Twin Sharing (USD 1,550)</option>
                        <option value="Private Room (USD 2,000)">Private Room (USD 2,000)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3B2C] mb-1">Current Yoga Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C] bg-white"
                    >
                      <option value="Less than 1 year (Dedicated beginner)">Less than 1 year (Dedicated beginner)</option>
                      <option value="1-3 years regular practice">1–3 years regular practice</option>
                      <option value="3+ years advanced practice">3+ years advanced practice</option>
                      <option value="Currently teaching / Yoga instructor">Currently teaching / Yoga instructor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3B2C] mb-1">
                      Why do you want to join this training? (Brief note)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your motivation or any specific questions you have..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8cfc0] text-xs sm:text-sm focus:outline-none focus:border-[#0B3B2C]"
                    />
                  </div>

                  <div className="bg-[#fdf8f0] p-3 rounded-xl border border-[#f0e4d2] text-[11px] text-[#52635a] leading-relaxed">
                    ℹ️ <strong>Admission Policy:</strong> No payment is charged right now. We review your details and send you a link to book a 15-min alignment conversation.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-sm sm:text-base py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Application for Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </form>
              </div>
            )}

            {appStep === "submitting" && (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#0B3B2C] border-t-transparent animate-spin mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#0B3B2C]">Sending Your Application...</h4>
                <p className="text-xs text-[#52635a]">Connecting with the Yoga Gadhi admissions team.</p>
              </div>
            )}

            {appStep === "success" && (
              <div className="text-center space-y-4 py-3">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto border-2 border-green-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B3B2C]">Application Received 🙏</h3>
                  <p className="text-xs text-[#52635a] mt-1">
                    Thank you <strong>{formData.name}</strong>. We have received your application for the <strong>January 2027 Rishikesh 200-Hour TTC</strong>.
                  </p>
                </div>

                <div className="bg-[#f4eee4] p-4 rounded-2xl border border-[#e2d8c9] text-left text-xs text-[#3d4d45] space-y-2">
                  <p className="font-bold text-[#0B3B2C]">What Happens Next:</p>
                  <p>1. Our admissions team will review your application details within 24 hours.</p>
                  <p>2. We will contact you via WhatsApp and Email with available slots for your 15-minute admissions conversation.</p>
                  <p>3. If accepted, your seat is secured with the USD 200 deposit.</p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/917895350563?text=Hi%20Yoga%20Gadhi,%20I%20just%20submitted%20my%20application%20for%20the%20200-Hour%20Rishikesh%20TTC%20(Name:%20${encodeURIComponent(formData.name)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all block"
                  >
                    <Smartphone className="w-4 h-4" />
                    Connect Directly on WhatsApp Now
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-[#0B3B2C] font-bold text-xs py-2.5 rounded-xl transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
