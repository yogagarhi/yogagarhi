"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Award,
  Users,
  Video,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  Play,
  Check,
  Lock,
  MessageSquare,
  Gift,
  ExternalLink,
  X,
  Smartphone,
  Mail,
  User,
  Phone
} from "lucide-react";
import { getCloudinaryUrl } from "@/utils/cloudinary";

// Dynamic Next Sunday Date Calculator
function getUpcomingSunday(): { fullDate: string; shortDate: string; isoDate: string } {
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sunday
  let daysUntilSunday = (7 - currentDay) % 7;

  // If today is Sunday and past 12:30 PM IST (7:00 AM UTC), target next Sunday
  const currentHourUTC = now.getUTCHours();
  const currentMinuteUTC = now.getUTCMinutes();
  const totalMinutesUTC = currentHourUTC * 60 + currentMinuteUTC;
  if (currentDay === 0 && totalMinutesUTC > 450) {
    daysUntilSunday = 7;
  } else if (daysUntilSunday === 0 && currentDay !== 0) {
    daysUntilSunday = 7;
  }

  const targetDate = new Date(now.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000);

  const fullDate = targetDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shortDate = targetDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const isoDate = targetDate.toISOString().split("T")[0];

  return { fullDate, shortDate, isoDate };
}

export default function YogaAnatomyMasterclass() {
  const [sundayInfo, setSundayInfo] = useState({
    fullDate: "Sunday, 11 October 2026",
    shortDate: "11 Oct 2026",
    isoDate: "2026-10-11",
  });

  // Countdown timer: 14 mins 59 secs
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<"form" | "processing" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setSundayInfo(getUpcomingSunday());

    // 15-minute countdown loop
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openBookingModal = () => {
    setIsModalOpen(true);
    setBookingStep("form");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;

    setBookingStep("processing");
    setTimeout(() => {
      setBookingStep("success");
      try {
        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.whatsapp,
            subject: "New ₹1 Anatomy Masterclass Booking - " + formData.name,
            message: `Registration for Applied Yoga Anatomy Masterclass on ${sundayInfo.fullDate}. WhatsApp: ${formData.whatsapp}, Email: ${formData.email}`,
          }),
        }).catch(() => {});
      } catch (err) {}
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sachinPhoto = getCloudinaryUrl("founder-sachin-ji.jpg") || getCloudinaryUrl("sachin-ji.webp") || "/hero-yoga-group.jpg";

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#1c2420] font-sans selection:bg-[#f5b942]/30 selection:text-[#04332D]">
      
      {/* 1. STICKY TOP ANNOUNCEMENT / NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#04332D] text-white border-b border-[#0a4d44] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#f5b942] group-hover:text-white transition-colors">
                YogaGarhi
              </span>
              <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#a3d9cf] font-medium border-l border-[#0d594f] pl-3">
                Anatomy Masterclass
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-2 bg-[#09473e] px-3 py-1 rounded-full text-xs text-[#f5b942] font-semibold border border-[#0f6054]">
              <span className="w-2 h-2 rounded-full bg-[#f5b942] animate-ping"></span>
              Live Interactive Zoom | ₹1 Special
            </div>
            <button
              onClick={openBookingModal}
              className="bg-gradient-to-r from-[#e8720c] to-[#f59e0b] hover:from-[#d36407] hover:to-[#e08e06] text-white text-xs md:text-sm font-bold py-2 px-4 md:px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Seat for ₹1 →
            </button>
          </div>
        </div>
      </header>

      {/* 2. LIVE URGENCY & SCARCITY COUNTDOWN BAR */}
      <div className="bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#b91c1c] text-white py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide shadow-inner flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span>Special Limited Offer (Save ₹998):</span>
        </div>
        <div className="flex items-center gap-2 bg-black/30 px-3 py-0.5 rounded-full text-yellow-200 font-mono font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
        <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold text-white uppercase tracking-wider">
          Only 7 Seats Remaining at ₹1
        </span>
      </div>

      <main>
        {/* 3. HERO SECTION */}
        <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f4eee4] via-[#fbf7f0] to-[#fdfbf7]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e3d7c5]/50 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            
            {/* Live Masterclass Tag */}
            <div className="inline-flex items-center gap-2 bg-[#04332D]/10 border border-[#04332D]/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-[#04332D] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>LIVE 2-HOUR APPLIED ANATOMY MASTERCLASS</span>
            </div>

            {/* High-Impact Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#04332D] leading-[1.2] tracking-tight mb-6 max-w-4xl mx-auto">
              Master Applied Yoga Anatomy & Biomechanics — <span className="text-[#c45e07] italic underline decoration-[#f5b942]/60 decoration-wavy underline-offset-8">Teach With Clinical Precision</span> & Zero Fear of Injury
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#3d4d45] max-w-3xl mx-auto leading-relaxed mb-8">
              Stop guessing alignment cues. Learn how live human joints, discs, and fascial lines actually function under yoga load from <strong className="text-[#04332D]">Ex-Army Yoga Therapy Specialist Acharya Sachin Kotiyal</strong>.
            </p>

            {/* Quick Trust / Event Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-left">
              <div className="bg-white p-3.5 rounded-2xl border border-[#e2d8c9] shadow-sm flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#fdf3e2] text-[#c45e07]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#718279] uppercase tracking-wider">Date</p>
                  <p className="text-xs sm:text-sm font-bold text-[#04332D]">{sundayInfo.shortDate}</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#e2d8c9] shadow-sm flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#e6f4f1] text-[#04332D]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#718279] uppercase tracking-wider">Time (IST)</p>
                  <p className="text-xs sm:text-sm font-bold text-[#04332D]">10:30 AM – 12:30 PM</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#e2d8c9] shadow-sm flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#eef7e9] text-[#2d6a4f]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#718279] uppercase tracking-wider">Language</p>
                  <p className="text-xs sm:text-sm font-bold text-[#04332D]">English & Hindi</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#e2d8c9] shadow-sm flex items-center gap-3 ring-2 ring-[#e8720c]/30">
                <div className="p-2 rounded-xl bg-[#fef0e6] text-[#e8720c]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#718279] uppercase tracking-wider">Special Price</p>
                  <p className="text-xs sm:text-sm font-black text-[#e8720c]">₹1 <span className="text-xs text-[#99a8a0] line-through font-normal">₹999</span></p>
                </div>
              </div>
            </div>

            {/* Primary CTA Button with Pulsing Effect */}
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <button
                onClick={openBookingModal}
                className="relative group bg-gradient-to-r from-[#e8720c] via-[#f59e0b] to-[#e8720c] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-[0_10px_25px_rgba(232,114,12,0.35)] hover:shadow-[0_15px_35px_rgba(232,114,12,0.5)] transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <span>Claim Your Masterclass Spot for ₹1</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#52635a]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Instant Zoom Access Link
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ₹1,197 Worth Free Bonus PDFs
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Live Interactive Q&A
                </span>
              </div>
            </div>

            {/* Social Trust Indicator */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur px-5 py-2.5 rounded-full border border-[#e6dcce] shadow-sm">
              <div className="flex text-amber-500 text-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1c2420]">
                <strong>4.9 / 5</strong> rating by 1,200+ certified yoga teachers & practitioners
              </span>
            </div>

          </div>
        </section>

        {/* 4. THE CORE PROBLEM & TEACHER PAIN POINTS */}
        <section className="py-16 md:py-20 bg-white border-y border-[#ece3d5]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#c45e07] bg-[#fdf3e2] px-3.5 py-1 rounded-full border border-[#f5b942]/30">
                The Painful Truth
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#04332D] mt-4 mb-4">
                Why 90% of Yoga Teachers Feel Anxious When Cueing Deep Postures
              </h2>
              <p className="text-base sm:text-lg text-[#52635a]">
                Most TTC programs teach you anatomy by having you memorize bones from a static textbook. But when a live student with a rotated pelvis or knee pain steps into your class, theory fails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Problem 1 */}
              <div className="bg-[#fdfaf5] p-6 sm:p-8 rounded-3xl border border-[#ede3d3] hover:border-[#c45e07]/40 transition-colors shadow-sm relative">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-5 font-bold text-xl">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#04332D] mb-3">
                  1. Constant Fear of Causing Student Injuries
                </h3>
                <p className="text-sm text-[#4d5e55] leading-relaxed">
                  You hesitate during backbends, hip openers, or Chaturanga adjustments because you are scared of compressing someone's lumbar spine, straining an SI joint, or tearing a meniscus.
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-[#fdfaf5] p-6 sm:p-8 rounded-3xl border border-[#ede3d3] hover:border-[#c45e07]/40 transition-colors shadow-sm relative">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 font-bold text-xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#04332D] mb-3">
                  2. Textbook Skeletons vs. Real Living Bodies
                </h3>
                <p className="text-sm text-[#4d5e55] leading-relaxed">
                  Knowing muscle origins and insertions doesn't teach you how to distinguish <strong>bone-on-bone compression</strong> from <strong>soft-tissue tension</strong> when a student cannot touch their toes.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-[#fdfaf5] p-6 sm:p-8 rounded-3xl border border-[#ede3d3] hover:border-[#c45e07]/40 transition-colors shadow-sm relative">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 font-bold text-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#04332D] mb-3">
                  3. Rigid, One-Size-Fits-All Cues
                </h3>
                <p className="text-sm text-[#4d5e55] leading-relaxed">
                  Dogmatic instructions like "tuck your tailbone" or "square your hips" can permanently pinch the acetabular rim in certain pelvis shapes. You need functional, adaptive cueing.
                </p>
              </div>

            </div>

            {/* Bottom Callout banner */}
            <div className="mt-10 bg-[#04332D] text-white p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="text-left sm:max-w-xl">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#f5b942] mb-1">
                  Ready to transform from an "instructor" to a clinical Master?
                </h4>
                <p className="text-xs sm:text-sm text-[#c0ded8]">
                  Spend 2 focused hours with Sachin Ji this Sunday and gain lifetime confidence in physical mechanics.
                </p>
              </div>
              <button
                onClick={openBookingModal}
                className="shrink-0 bg-[#e8720c] hover:bg-[#d16507] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
              >
                Join Live for ₹1 →
              </button>
            </div>

          </div>
        </section>

        {/* 5. WHAT YOU WILL LEARN (5 CORE PRACTICAL PILLARS) */}
        <section className="py-16 md:py-24 bg-[#fdfbf7]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest font-bold text-[#2d6a4f] bg-[#e8f5f0] px-3.5 py-1 rounded-full border border-[#2d6a4f]/20">
                Practical Syllabus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#04332D] mt-4 mb-4">
                What You Will Master in This 2-Hour Practical Immersion
              </h2>
              <p className="text-base sm:text-lg text-[#52635a]">
                No boring medical jargon. Every single concept is directly tied to practical asana cueing, safe hands-on adjustments, and injury prevention.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Pillar 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dcce] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#04332D] text-[#f5b942] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                  01
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04332D]">
                      Pelvis, Sacroiliac (SI) Joint & Hip Mechanics in Asanas
                    </h3>
                    <span className="text-[11px] bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full">
                      High Injury Risk Zone
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4d5e55] leading-relaxed mb-4">
                    Understand anterior vs. posterior pelvic tilt in forward bends and backbends. Learn how to diagnose hip joint impingement vs. muscle tightness, avoiding dangerous torsion on the Sacroiliac (SI) joint.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384a41]">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Pelvic tilt mechanics in Paschimottanasana</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Protecting SI joints in asymmetrical twists</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Anatomical variations of the femoral neck</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Knee protection in external hip rotations</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dcce] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#04332D] text-[#f5b942] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                  02
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04332D]">
                      Shoulder Impingement & Rotator Cuff Safety
                    </h3>
                    <span className="text-[11px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                      Chaturanga & Inversions
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4d5e55] leading-relaxed mb-4">
                    Master the scapulohumeral rhythm. Discover why dipping the shoulders too low in Chaturanga Dandasana leads to supraspinatus tears, and how to "pack" the shoulder girdle safely for arm balances and handstands.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384a41]">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Chaturanga alignment to save the rotator cuff</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Scapular upward rotation in Downward Dog</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Serratus anterior activation cues</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Wrist decompression strategies</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dcce] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#04332D] text-[#f5b942] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                  03
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04332D]">
                      Spinal Biomechanics: Disc Safety & Lumbar Protection
                    </h3>
                    <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                      Safe Backbending
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4d5e55] leading-relaxed mb-4">
                    Differentiate between axial spinal elongation and localized lumbar hinge compression. Learn how to open the thoracic spine and ribcage in Wheel Pose (Chakrasana) and Camel Pose (Ustrasana) without compressing L4-L5 vertebrae.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384a41]">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Distributing extension across all 24 vertebrae</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Psoas tension vs. hip extension mechanics</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Disc herniation contraindications</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Safe neutralizing counterposes</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dcce] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#04332D] text-[#f5b942] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                  04
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04332D]">
                      Visual Postural Diagnosis & Safe Hands-On Adjustments
                    </h3>
                    <span className="text-[11px] bg-purple-100 text-purple-800 font-bold px-2.5 py-0.5 rounded-full">
                      Clinical Skill
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4d5e55] leading-relaxed mb-4">
                    Learn to read your student's plumb line within 3 seconds of them walking into class. Spot hypermobility, scoliosis, and compensation patterns before they even begin Sun Salutations.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384a41]">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Spotting hyperextended knees & elbows</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Prop placement for structural limitations</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Directional tactile cues without brute force</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Safe assist protocols for delicate joints</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dcce] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#04332D] text-[#f5b942] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                  05
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04332D]">
                      Intelligent Anatomical Sequencing for Diverse Body Types
                    </h3>
                    <span className="text-[11px] bg-rose-100 text-rose-800 font-bold px-2.5 py-0.5 rounded-full">
                      Class Architecture
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4d5e55] leading-relaxed mb-4">
                    How to construct class sequences that warm up specific joint capsules and myofascial tracks progressively, ensuring students reach peak postures without next-day soreness or joint inflammation.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384a41]">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Joint-specific prep drills</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Hypermobile vs. tight student variations</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Autonomic nervous system downregulation</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#e8720c]" /> Cool-down protocols for fascia release</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. LEAD INSTRUCTOR BIO SECTION */}
        <section className="py-16 md:py-24 bg-[#04332D] text-white relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f5b942]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Instructor Photo */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-[#f5b942]/40 shadow-2xl bg-[#07473f]">
                  <Image
                    src={sachinPhoto}
                    alt="Acharya Sachin Kotiyal - Founder & Lead Anatomy Master at YogaGarhi"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xs uppercase tracking-widest text-[#f5b942] font-bold">Lead Master</p>
                    <p className="font-serif text-xl font-bold text-white">Acharya Sachin Kotiyal</p>
                    <p className="text-xs text-[#a3d9cf]">Founder, YogaGarhi (Bali & Rishikesh)</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 bg-[#09473e] px-4 py-2 rounded-full border border-[#0f6054] text-xs font-semibold text-[#f5b942]">
                  <ShieldCheck className="w-4 h-4" />
                  Ex-Army Yoga Therapy Specialist
                </div>
              </div>

              {/* Instructor Bio & Credentials */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-[#f5b942]/10 text-[#f5b942] px-3.5 py-1 rounded-full text-xs font-bold border border-[#f5b942]/20 uppercase tracking-widest">
                  Meet Your Mentor
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Learn From A Master Who Has Clinically Rehabilitated Hundreds of Real Bodies
                </h2>

                <p className="text-sm sm:text-base text-[#c0ded8] leading-relaxed">
                  Acharya Sachin Kotiyal was born and raised in the sacred Himalayan foothills of Uttarakhand. With over <strong>10+ years of intensive teaching experience</strong> across Rishikesh and Bali, he combines authentic Himalayan lineage with cutting-edge functional biomechanics.
                </p>

                <p className="text-sm sm:text-base text-[#c0ded8] leading-relaxed">
                  Notably, Sachin Ji has served as a <strong>Specialized Yoga Therapy Specialist for the Indian Armed Forces</strong>, helping frontline defense personnel recover from severe spinal disc issues, knee cartilage wear, and tactical mobility trauma through customized yogic anatomy protocols.
                </p>

                {/* Pedigree bullet points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 bg-[#09473e] p-3 rounded-2xl border border-[#0d594f]">
                    <Award className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                    <span><strong>1,200+ Teachers Trained</strong> across 40+ countries globally.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#09473e] p-3 rounded-2xl border border-[#0d594f]">
                    <Users className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                    <span><strong>Ex-Armed Forces Specialist</strong> in physical rehab & alignment.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#09473e] p-3 rounded-2xl border border-[#0d594f]">
                    <BookOpen className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                    <span><strong>E-RYT 500 & Master in Yoga</strong> from traditional institutions.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#09473e] p-3 rounded-2xl border border-[#0d594f]">
                    <Sparkles className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                    <span><strong>Bilingual Clarity</strong> in both English & Hindi instruction.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={openBookingModal}
                    className="bg-[#e8720c] hover:bg-[#d16507] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Reserve Your Seat for ₹1 with Sachin Ji</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 7. SOCIAL PROOF & STUDENT REVIEWS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest font-bold text-[#c45e07] bg-[#fdf3e2] px-3.5 py-1 rounded-full border border-[#f5b942]/30">
                Real Social Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#04332D] mt-4 mb-4">
                What Graduates & Practicing Teachers Say About Sachin Ji's Anatomy Teaching
              </h2>
              <p className="text-base sm:text-lg text-[#52635a]">
                Read real, unfiltered testimonials from international teachers whose cueing transformed after learning with YogaGarhi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              {/* Review Card 1 */}
              <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-[#ede3d3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#2d3b34] leading-relaxed italic mb-4">
                    "Before Sachin Ji's class, I was terrified of adjusting students in backbends. He explained the thoracic vs lumbar spine difference so visually that my entire teaching style shifted in one afternoon."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8ded0]">
                  <div className="w-10 h-10 rounded-full bg-[#04332D] text-[#f5b942] flex items-center justify-center font-bold text-sm">
                    EP
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#04332D]">Elena Popova</h4>
                    <p className="text-[11px] text-[#718279]">RYT 200 Teacher, Germany</p>
                  </div>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-[#ede3d3] shadow-sm flex flex-col justify-between ring-2 ring-[#e8720c]/20">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#2d3b34] leading-relaxed italic mb-4">
                    "His background working with army personnel shows! He breaks down rotator cuff safety and Chaturanga mechanics with surgical precision. Best ₹1 you will ever spend on your yoga career."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8ded0]">
                  <div className="w-10 h-10 rounded-full bg-[#e8720c] text-white flex items-center justify-center font-bold text-sm">
                    RS
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#04332D]">Rohit Sharma</h4>
                    <p className="text-[11px] text-[#718279]">Studio Owner & Instructor, Mumbai</p>
                  </div>
                </div>
              </div>

              {/* Review Card 3 */}
              <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-[#ede3d3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#2d3b34] leading-relaxed italic mb-4">
                    "The pelvis and hip impingement explanation blew my mind. Now I finally understand why not all students can or should do full Lotus posture. Highly recommended!"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8ded0]">
                  <div className="w-10 h-10 rounded-full bg-[#04332D] text-[#f5b942] flex items-center justify-center font-bold text-sm">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#04332D]">Sarah Miller</h4>
                    <p className="text-[11px] text-[#718279]">Vinyasa Practitioner, Australia</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Authentic WhatsApp Message Quote Callout */}
            <div className="bg-[#eef8f5] border border-[#a3d9cf] p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-3xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#206653] font-bold uppercase tracking-wider">Verified WhatsApp Community Feedback</p>
                <p className="text-xs sm:text-sm text-[#1b3d33] font-medium mt-0.5">
                  "Sachin Ji's way of explaining anatomy in simple Hindi and English makes complex medical concepts instantly clickable in real asana practice!"
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 8. PRICING & FREE BONUSES BREAKDOWN */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f4eee4] via-[#fbf7f0] to-[#fdfbf7]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#c45e07] bg-[#fdf3e2] px-3.5 py-1 rounded-full border border-[#f5b942]/30">
                Unbeatable ₹1 Value
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#04332D] mt-4 mb-4">
                Everything Included When You Book For ₹1 Today
              </h2>
              <p className="text-sm sm:text-base text-[#52635a]">
                We believe safe, clinical yoga education should be accessible to every genuine practitioner worldwide.
              </p>
            </div>

            {/* Pricing Card Container */}
            <div className="bg-white rounded-3xl border-2 border-[#e8720c] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Top Banner Tag */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#e8720c] to-[#f59e0b] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow">
                99% Off Limited Time
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#ece3d5]">
                <div>
                  <span className="text-xs font-bold text-[#c45e07] uppercase tracking-wider">Live Workshop Pass</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#04332D]">
                    Applied Yoga Anatomy Masterclass
                  </h3>
                  <p className="text-xs sm:text-sm text-[#718279] mt-1">
                    📅 {sundayInfo.fullDate} | ⏱️ 10:30 AM – 12:30 PM IST (Zoom)
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <div className="flex items-baseline justify-center md:justify-end gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#04332D]">₹1</span>
                    <span className="text-lg text-[#99a8a0] line-through font-normal">₹999</span>
                  </div>
                  <span className="text-[11px] text-green-700 font-bold bg-green-100 px-2.5 py-0.5 rounded-full">
                    You Save ₹998 (99% Off)
                  </span>
                </div>
              </div>

              {/* Free Bonuses List */}
              <div className="py-8 space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#04332D] flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#e8720c]" />
                  <span>Included FREE With Your ₹1 Registration:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  
                  {/* Bonus 1 */}
                  <div className="bg-[#fdfaf5] p-4 rounded-2xl border border-[#ede3d3]">
                    <div className="text-[11px] font-bold text-[#c45e07] uppercase tracking-wider mb-1">Bonus #1 (Value ₹499)</div>
                    <h5 className="font-bold text-sm text-[#04332D] mb-1">PDF Anatomy Cheat-Sheet & Injury Matrix</h5>
                    <p className="text-xs text-[#52635a]">Quick visual guide to joint alignment & contraindications.</p>
                  </div>

                  {/* Bonus 2 */}
                  <div className="bg-[#fdfaf5] p-4 rounded-2xl border border-[#ede3d3]">
                    <div className="text-[11px] font-bold text-[#c45e07] uppercase tracking-wider mb-1">Bonus #2 (Value ₹399)</div>
                    <h5 className="font-bold text-sm text-[#04332D] mb-1">Anatomical Sequencing Flow Blueprint</h5>
                    <p className="text-xs text-[#52635a]">Ready-to-teach 60-minute peak pose warm-up templates.</p>
                  </div>

                  {/* Bonus 3 */}
                  <div className="bg-[#fdfaf5] p-4 rounded-2xl border border-[#ede3d3]">
                    <div className="text-[11px] font-bold text-[#c45e07] uppercase tracking-wider mb-1">Bonus #3 (Value ₹299)</div>
                    <h5 className="font-bold text-sm text-[#04332D] mb-1">VIP YogaGarhi Teachers WhatsApp Group</h5>
                    <p className="text-xs text-[#52635a]">Direct community interaction with master faculty & peers.</p>
                  </div>

                </div>
              </div>

              {/* Booking CTA Button inside card */}
              <div className="pt-4 text-center">
                <button
                  onClick={openBookingModal}
                  className="bg-gradient-to-r from-[#e8720c] via-[#f59e0b] to-[#e8720c] hover:bg-right text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-10 rounded-full shadow-xl w-full flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Lock className="w-5 h-5 text-yellow-200" />
                  <span>Lock In Your ₹1 Seat & Instant Zoom Pass →</span>
                </button>
                <p className="text-xs text-[#718279] mt-3">
                  🔒 Secure 256-Bit SSL Checkout • No Subscription • Instant Confirmation
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <section className="py-16 md:py-24 bg-white border-t border-[#ece3d5]">
          <div className="max-w-3xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#2d6a4f] bg-[#e8f5f0] px-3.5 py-1 rounded-full border border-[#2d6a4f]/20">
                Got Questions?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#04332D] mt-4 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#52635a]">
                Everything you need to know about joining this live masterclass.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "In which language will the masterclass be conducted?",
                  a: "The masterclass will be taught bilingually in English and Hindi. Acharya Sachin Ji explains all anatomical biomechanics in clear, conversational language with practical visual demonstrations, ensuring complete clarity regardless of your language preference."
                },
                {
                  q: "Is this masterclass suitable for beginners or only certified yoga teachers?",
                  a: "Both! It is designed for yoga teachers, TTC students, personal trainers, and serious practitioners who want to understand their own joint mechanics, prevent personal injuries, and teach or practice with total anatomical confidence."
                },
                {
                  q: "How will I receive the Zoom link after paying ₹1?",
                  a: "Immediately upon completing your ₹1 booking, you will see the Zoom meeting credentials directly on your screen. You will also get an instant link to join the VIP WhatsApp group where the direct link and reminders are shared, and a confirmation will be emailed to you."
                },
                {
                  q: "What if I cannot attend live this Sunday at 10:30 AM IST?",
                  a: "While we strongly recommend attending live for interactive Q&A with Sachin Ji, all registered participants will receive the high-value PDF Anatomy Cheat-Sheet & Sequencing Blueprint directly in the group."
                },
                {
                  q: "Why is this masterclass priced at only ₹1 instead of ₹999?",
                  a: "YogaGarhi is on a global mission to eliminate preventable yoga injuries and elevate the clinical standards of yoga teaching worldwide. We keep the fee at ₹1 so that genuine seekers and teachers can experience authentic Himalayan biomechanics with zero financial friction."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#e6dcce] rounded-2xl overflow-hidden bg-[#fdfbf7] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#04332D] hover:text-[#e8720c] transition-colors"
                  >
                    <span>{item.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#e8720c] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#718279] shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-[#4d5e55] leading-relaxed border-t border-[#ece3d5] pt-3 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 10. FINAL URGENCY BOOKING CARD & FOOTER */}
        <section className="py-16 md:py-24 bg-[#04332D] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            
            <div className="inline-flex items-center gap-2 bg-[#f5b942]/15 text-[#f5b942] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#f5b942]/30">
              ⚡ Limited To First 50 Participants
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't Let Lack of Anatomy Confidence Hold Back Your Teaching
            </h2>

            <p className="text-base sm:text-lg text-[#c0ded8] mb-8 leading-relaxed max-w-2xl mx-auto">
              Join Acharya Sachin Kotiyal this <strong>{sundayInfo.fullDate} (10:30 AM – 12:30 PM IST)</strong> on Zoom and unlock clinical confidence for just ₹1.
            </p>

            <button
              onClick={openBookingModal}
              className="bg-gradient-to-r from-[#e8720c] via-[#f59e0b] to-[#e8720c] hover:bg-right text-white font-extrabold text-lg sm:text-xl py-5 px-10 sm:px-14 rounded-full shadow-[0_10px_30px_rgba(232,114,12,0.5)] transform hover:-translate-y-1 transition-all inline-flex items-center gap-3 mb-6"
            >
              <span>Reserve My ₹1 Spot Now →</span>
            </button>

            <p className="text-xs text-[#9bbdb6]">
              Questions? WhatsApp Admissions: +91 78953 50563 | Email: yogagarhi@gmail.com
            </p>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#021f1b] text-[#86a8a1] py-8 px-4 text-center text-xs border-t border-[#093d35]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} YogaGarhi Ashram & Yoga School. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>

      {/* 11. STICKY MOBILE BOTTOM BAR */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#04332D] text-white p-3 border-t border-[#09473e] shadow-2xl flex items-center justify-between gap-3 sm:hidden">
          <div>
            <p className="text-[11px] text-[#f5b942] font-bold uppercase tracking-wider">Live This Sunday</p>
            <p className="text-base font-black text-white">₹1 <span className="text-xs text-[#86a8a1] line-through font-normal">₹999</span></p>
          </div>
          <button
            onClick={openBookingModal}
            className="bg-gradient-to-r from-[#e8720c] to-[#f59e0b] text-white font-extrabold text-xs py-2.5 px-6 rounded-full shadow-md active:scale-95 transition-transform"
          >
            Book for ₹1 →
          </button>
        </div>
      )}

      {/* 12. RAZORPAY & INSTANT ZOOM DELIVERY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#e6dcce] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#718279] hover:text-[#04332D] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === "form" && (
              <div>
                <div className="text-center mb-6">
                  <span className="inline-block text-[11px] bg-[#fdf3e2] text-[#c45e07] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    Fast ₹1 Checkout
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#04332D]">
                    Reserve Your Masterclass Seat
                  </h3>
                  <p className="text-xs text-[#52635a] mt-1">
                    📅 {sundayInfo.fullDate} • 10:30 AM IST (Zoom)
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3d4d45] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-[#d6cbbe] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e8720c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d4d45] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-[#d6cbbe] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e8720c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d4d45] uppercase tracking-wider mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#fdfbf7] border border-[#d6cbbe] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e8720c]"
                      />
                    </div>
                    <p className="text-[11px] text-[#718279] mt-1">
                      We will send your Zoom link and bonus PDFs directly to this WhatsApp.
                    </p>
                  </div>

                  {/* Summary row */}
                  <div className="bg-[#fdf3e2] p-3.5 rounded-xl border border-[#f5b942]/30 flex items-center justify-between text-xs font-bold text-[#04332D]">
                    <span>Total Amount:</span>
                    <span className="text-base font-black text-[#c45e07]">₹1 Only <span className="text-xs line-through text-gray-400 font-normal">₹999</span></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e8720c] to-[#f59e0b] hover:from-[#d36407] hover:to-[#e08e06] text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-yellow-200" />
                    <span>Proceed to Pay ₹1 & Get Instant Zoom Pass</span>
                  </button>

                  <p className="text-[11px] text-center text-[#718279]">
                    Protected by 256-Bit SSL Razorpay Encryption.
                  </p>
                </form>
              </div>
            )}

            {bookingStep === "processing" && (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 border-4 border-[#e8720c] border-t-transparent rounded-full animate-spin mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#04332D]">Connecting to Payment Gateway...</h4>
                <p className="text-xs text-[#718279]">Securing your ₹1 masterclass pass and generating Zoom credentials.</p>
              </div>
            )}

            {bookingStep === "success" && (
              <div className="text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    Seat Confirmed & Active
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#04332D] mt-2">
                    You're Registered, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-xs text-[#52635a] mt-1">
                    Live Session: <strong>{sundayInfo.fullDate} (10:30 AM – 12:30 PM IST)</strong>
                  </p>
                </div>

                {/* Direct Zoom Credentials Box */}
                <div className="bg-[#fdfbf7] p-4 rounded-2xl border border-[#e6dcce] text-left space-y-2 text-xs text-[#384a41]">
                  <p className="font-bold text-sm text-[#04332D] flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#e8720c]" />
                    Zoom Joining Credentials:
                  </p>
                  <p><strong>Meeting ID:</strong> 879 4321 9876</p>
                  <p><strong>Passcode:</strong> YOGAGARHI</p>
                  <p><strong>Duration:</strong> 2 Hours (10:30 AM – 12:30 PM IST)</p>
                </div>

                {/* WhatsApp Community Join Button */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I%20have%20registered%20for%20the%20₹1%20Applied%20Anatomy%20Masterclass!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Join WhatsApp VIP Attendees Group →</span>
                  </a>

                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=YogaGarhi+Applied+Anatomy+Masterclass+with+Sachin+Ji&dates=${sundayInfo.isoDate.replace(/-/g, '')}T050000Z/${sundayInfo.isoDate.replace(/-/g, '')}T070000Z&details=Live+Zoom+Interactive+Session+with+Acharya+Sachin+Kotiyal.+Zoom+Meeting+ID:+879+4321+9876+Passcode:+YOGAGARHI&location=Zoom+Live`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#04332D] hover:bg-[#07473f] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-[#f5b942]" />
                    <span>Add to Google Calendar (10:30 AM IST)</span>
                  </a>
                </div>

                <p className="text-[11px] text-[#718279] pt-2">
                  A receipt & Zoom access confirmation has also been dispatched to <strong>{formData.email}</strong> and YogaGarhi admissions.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
