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
  Phone,
  ThumbsUp,
  ShieldAlert,
  Flame,
  BadgeCheck,
  Volume2,
  HelpCircle,
  Tv,
  CheckCheck,
  CreditCard
} from "lucide-react";
import { getCloudinaryUrl, getCloudinaryImage } from "@/utils/cloudinary";

const logo = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

// Dynamic Next Sunday Date Calculator (Auto-calculates every week in IST)
function getUpcomingSunday(): { fullDate: string; shortDate: string; ordinalDate: string; isoDate: string } {
  const now = new Date();
  // Compute current time in IST (UTC + 5:30)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istNow = new Date(utc + (3600000 * 5.5));

  const currentDay = istNow.getDay(); // 0 is Sunday
  let daysUntilSunday = (7 - currentDay) % 7;

  // If today is Sunday in IST and past 1:00 PM IST (workshop finished), target next Sunday
  const currentISTHour = istNow.getHours();
  const currentISTMinute = istNow.getMinutes();
  if (currentDay === 0 && (currentISTHour > 13 || (currentISTHour === 13 && currentISTMinute >= 0))) {
    daysUntilSunday = 7;
  }

  const targetDate = new Date(istNow.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000);

  const dayNum = targetDate.getDate();
  const suffix = (dayNum % 10 === 1 && dayNum !== 11) ? "st" :
                 (dayNum % 10 === 2 && dayNum !== 12) ? "nd" :
                 (dayNum % 10 === 3 && dayNum !== 13) ? "rd" : "th";
  
  const monthName = targetDate.toLocaleDateString("en-US", { month: "short" });
  const monthFullName = targetDate.toLocaleDateString("en-US", { month: "long" });
  const year = targetDate.getFullYear();

  const ordinalDate = `Sunday, ${dayNum}${suffix} ${monthName}`;
  const fullDate = `Sunday, ${dayNum}${suffix} ${monthFullName} ${year}`;
  const shortDate = `${dayNum} ${monthName} ${year}`;
  const isoDate = targetDate.toISOString().split("T")[0];

  return { fullDate, shortDate, ordinalDate, isoDate };
}

// Razorpay Dynamic Script Loader
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if ((window as any).Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Video Testimonials Data
const videoTestimonials = [
  {
    id: "KFnHagVMDtI",
    name: "Fernanda",
    country: "Australia",
    role: "RYT 200 Teacher",
    quote: "Sachin Ji transformed my understanding of spine & hip alignment completely.",
    thumb: "https://img.youtube.com/vi/KFnHagVMDtI/hqdefault.jpg"
  },
  {
    id: "3_mJI4flz_4",
    name: "Gana",
    country: "India",
    role: "Yoga Instructor",
    quote: "The clinical biomechanics perspective is something you will never get in standard TTCs.",
    thumb: "https://img.youtube.com/vi/3_mJI4flz_4/hqdefault.jpg"
  },
  {
    id: "ta-5jHBCpKY",
    name: "Joss",
    country: "France",
    role: "Dedicated Practitioner",
    quote: "Rotator cuff safety in Chaturanga finally made practical sense without medical jargon.",
    thumb: "https://img.youtube.com/vi/ta-5jHBCpKY/hqdefault.jpg"
  },
  {
    id: "9uGW2o3jTGM",
    name: "Aarzu",
    country: "Germany",
    role: "Vinyasa Teacher",
    quote: "I went from being terrified of student injuries to teaching with total clinical precision.",
    thumb: "https://img.youtube.com/vi/9uGW2o3jTGM/hqdefault.jpg"
  },
];

// WhatsApp Unfiltered Chat Reviews Data
const whatsappReviews = [
  {
    sender: "Pooja Mehta (Mumbai)",
    time: "Yesterday at 7:42 PM",
    message: "Sachin Sir, the explanation of SI joint torsion in twists was pure gold 🙏! I applied your pelvic stabilizing cues in my morning 7 AM batch and 3 students with chronic lower back pain said they felt completely supported for the first time!",
    tag: "Verified Yoga Teacher"
  },
  {
    sender: "Daniel K. (London)",
    time: "Sunday at 1:15 PM",
    message: "Just finished the live masterclass session. Outstanding clarity. The way he explained shoulder packing vs impingement in Downward Dog is worth 100x the registration fee. Thank you YogaGarhi team!",
    tag: "Studio Instructor"
  },
  {
    sender: "Ananya Roy (Bengaluru)",
    time: "Monday at 11:20 AM",
    message: "Sachin Ji breaks down anatomy in such relatable English. No dry memorization, just pure functional movement. The bonus sequencing PDF is also super practical!",
    tag: "TTC Graduate"
  },
  {
    sender: "Elena Petrova (Moscow)",
    time: "2 days ago",
    message: "The distinction between bone compression and tissue tension saved my knees in Lotus posture. Truly grateful for this authentic Himalayan teaching.",
    tag: "International Student"
  }
];



export default function YogaAnatomyMasterclass() {
  const [sundayInfo, setSundayInfo] = useState(() => getUpcomingSunday());

  // Countdown timer: 14 mins 59 secs
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<"form" | "processing" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [paymentId, setPaymentId] = useState<string>("");
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // Reviews Holder Active Tab
  const [reviewTab, setReviewTab] = useState<"videos" | "whatsapp" | "teachers">("videos");
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [activeAnatomyTab, setActiveAnatomyTab] = useState<"spine" | "pelvis" | "shoulder">("spine");
  const [selectedQuizOption, setSelectedQuizOption] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    setSundayInfo(getUpcomingSunday());

    // Preload Razorpay Checkout Script in background
    loadRazorpayScript();

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;

    setBookingStep("processing");

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay payment gateway failed to load. Please check your internet connection.");
      setBookingStep("form");
      return;
    }

    const razorpayKey =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      process.env.VITE_RAZORPAY_KEY_ID ||
      "rzp_live_TiX95mBO2U2F1q";

    const options = {
      key: razorpayKey,
      amount: 9900, // 9900 paise = ₹99.00
      currency: "INR",
      name: "YogaGarhi Ashram",
      description: `Applied Yoga Anatomy Masterclass (${sundayInfo.ordinalDate})`,
      image: "https://www.yogagarhi.com/icon.png",
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp,
      },
      notes: {
        workshop: "Applied Yoga Anatomy & Biomechanics Masterclass (2-Hour Live)",
        date: sundayInfo.fullDate,
        time: "11:00 AM IST",
      },
      theme: {
        color: "#120D09",
      },
      modal: {
        ondismiss: () => {
          setBookingStep("form");
        },
      },
      handler: async (response: any) => {
        const pId = response.razorpay_payment_id || "pay_verified";
        setPaymentId(pId);
        setBookingStep("success");

        // Payload for Masterclass Confirmation API
        const confirmPayload = {
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          whatsapp: formData.whatsapp,
          payment_id: pId,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          workshop_date: `${sundayInfo.fullDate} at 11:00 AM – 1:00 PM IST (2-Hour Live Workshop)`,
        };

        // Dispatch to dedicated Masterclass confirmation route
        try {
          await fetch("/api/masterclass-confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(confirmPayload),
          });
        } catch (err) {
          console.error("Masterclass email dispatch error:", err);
        }
      },
    };

    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (failResponse: any) {
        alert("Payment failed: " + (failResponse.error?.description || "Transaction declined"));
        setBookingStep("form");
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay launch error:", err);
      setBookingStep("form");
      alert("Unable to open Razorpay checkout. Please check your details and try again.");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans selection:bg-[#F59E0B]/30 selection:text-[#78350F] relative">
      {/* ========================================================================= */}
      {/* 1. DEDICATED HEADER WITH YOGAGARHI LOGO */}
      {/* ========================================================================= */}
      <header className="bg-white/95 text-[#1C1917] border-b border-[#E7E5E4] sticky top-0 z-40 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/yogagarhi-logo-hd-preview.png"
                alt="YogaGarhi Official Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#f5b942]">
                  YogaGarhi
                </span>
              </div>
              <span className="text-[10px] md:text-[11px] text-[#78716C] tracking-wide font-medium">
                Learn what most yoga schools never teach
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={openBookingModal}
              className="bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white shadow-md text-xs sm:text-sm font-bold py-2.5 px-5 sm:px-7 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all"
            >
              Book Now — ₹99
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ========================================================================= */}
        {/* 2. HERO SECTION (PHOTO CLEARLY VISIBLE WITH ZERO WASHOUT) */}
        {/* ========================================================================= */}
        <section className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[760px] bg-[#0B0806] md:bg-[#FAF7F2] text-[#1C1917] overflow-hidden border-b border-[#E7E5E4] flex flex-col justify-between">
          
          {/* Background Image: 100% Visible Full Resolution Photo */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/sachin-anatomy-projection.jpg"
              alt="Acharya Sachin Kotiyal live yoga anatomy projection mapping on student"
              fill
              className="object-cover object-[72%_center] md:object-[80%_center] scale-100"
              priority
            />
            {/* Mobile Gradient Overlay: dark scrim at top and bottom so text is razor sharp while keeping projection visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/75 md:hidden" />
            {/* Desktop Gradient Overlay: subtle soft fade on left side */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent w-2/3" />
          </div>

          {/* Main Hero Content: Direct text overlay on mobile, frosted card on desktop */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-10 pb-12 md:pt-14 md:pb-18 my-auto">
            <div className="max-w-xl text-left bg-transparent md:bg-white/90 md:backdrop-blur-md p-0 md:p-9 rounded-none md:rounded-3xl border-0 md:border md:border-[#E7E5E4] shadow-none md:shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] md:text-[#B45309] font-mono drop-shadow-sm md:drop-shadow-none">
                  YOGAGARHI — 2-HOUR LIVE ONLINE MASTERCLASS
                </span>
              </div>

              {/* Main Heading (H1) Matching Screenshot */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white md:text-[#1C1917] leading-[1.18] tracking-tight mb-3.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:drop-shadow-none">
                Master{" "}
                <span className="text-[#FBBF24] md:text-[#B45309] font-bold">
                  Yoga Anatomy
                </span>{" "}
                <br className="hidden sm:inline" />
                & Learn How to{" "}
                <span className="text-[#FBBF24] md:text-[#B45309] font-bold">
                  Apply It
                </span>{" "}
                in Every Pose
              </h1>

              {/* Subheading Matching Screenshot */}
              <p className="text-sm sm:text-base md:text-lg font-semibold text-stone-200 md:text-[#44403C] leading-relaxed mb-2.5 drop-shadow-md md:drop-shadow-none">
                Understand movement, alignment, mobility, and injury prevention.
              </p>

              {/* Tagline / Formats with Highlighted 2-Hour Tag */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-stone-300 md:text-[#78716C] mb-6 font-medium tracking-wide drop-shadow-sm md:drop-shadow-none">
                <span>Live on Zoom</span>
                <span>·</span>
                <span className="text-[#FBBF24] md:text-[#B45309] font-bold bg-amber-500/20 md:bg-amber-100 px-2 py-0.5 rounded-md border border-amber-500/30 md:border-amber-300">
                  2-Hour Intensive
                </span>
                <span>·</span>
                <span>Interactive Q&A</span>
              </div>

              {/* Action Buttons & Highly Visible Date / Time Badge */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  onClick={openBookingModal}
                  className="bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-bold text-xs sm:text-sm py-3.5 px-6 sm:px-7 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2 shrink-0"
                >
                  <span>Book Workshop — ₹99</span>
                  <span className="text-base">→</span>
                </button>

                {/* Prominent Variable Date & Time Pill (Every Sunday 11:00 AM IST + 2 Hours) */}
                <div className="inline-flex items-center gap-2 bg-black/75 md:bg-white border-2 border-[#F59E0B]/60 md:border-[#F59E0B]/40 backdrop-blur-md px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
                  <span className="text-white md:text-[#1C1917] tracking-tight">{sundayInfo.ordinalDate} · 11:00 AM IST</span>
                  <span className="bg-[#D97706]/30 md:bg-[#D97706]/15 text-[#FBBF24] md:text-[#B45309] font-bold text-[10px] sm:text-xs px-2 py-0.5 rounded-md border border-[#D97706]/30 shrink-0">
                    2 Hours
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Floating Translucent Bar (Matching Reference) */}
          <div className="w-full relative z-10 pb-4 px-4">
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-[#E7E5E4] rounded-2xl p-3 sm:p-4 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-[#E7E5E4]">
                
                <div className="flex items-center justify-center sm:justify-start gap-2.5 px-2 py-1">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b942]/10 border border-[#f5b942]/30 flex items-center justify-center text-[#D97706] shrink-0">
                    📜
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A89482] uppercase font-bold tracking-wider">Certified</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">Yoga Alliance Continuing Ed</p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2.5 px-2 py-1">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b942]/10 border border-[#f5b942]/30 flex items-center justify-center text-[#D97706] shrink-0">
                    🌍
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A89482] uppercase font-bold tracking-wider">Ashram Hubs</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">Rishikesh & Bali Campuses</p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2.5 px-2 py-1">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b942]/10 border border-[#f5b942]/30 flex items-center justify-center text-[#D97706] shrink-0">
                    🎓
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A89482] uppercase font-bold tracking-wider">Alumni</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">5,000+ Students Trained</p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2.5 px-2 py-1">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b942]/10 border border-[#f5b942]/30 flex items-center justify-center text-[#D97706] shrink-0">
                    🔬
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A89482] uppercase font-bold tracking-wider">Expertise</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">10+ Years Biomechanics</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>


        {/* ========================================================================= */}
        {/* 2.6 WORKSHOP EVENT DETAILS & VIDEO REVIEWS */}
        {/* ========================================================================= */}
        <section className="py-14 md:py-20 bg-white text-[#1C1917] border-b border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">


            {/* ========================================================================= */}
            {/* TRUST & GOOGLE REVIEW RATING BADGE (MATCHING USER REFERENCE SCREENSHOT) */}
            {/* ========================================================================= */}
            <div className="max-w-2xl mx-auto mb-4 bg-white border border-[#E7E5E4] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-md flex items-center justify-between gap-3 text-left">
              {/* Overlapping Student Avatars Cluster */}
              <div className="flex items-center shrink-0">
                <div className="flex -space-x-2 sm:-space-x-2.5 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Yoga Teacher Alumni"
                    width={36}
                    height={36}
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Yoga Teacher Alumni"
                    width={36}
                    height={36}
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Yoga Teacher Alumni"
                    width={36}
                    height={36}
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#EA580C] text-white ring-2 ring-white flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0 shadow-sm">
                    5K+
                  </div>
                </div>
              </div>

              {/* Rating & Trust Text (Matching Reference Layout) */}
              <div className="flex-1 min-w-0 pl-1 sm:pl-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="flex text-[#EA580C] text-xs sm:text-sm tracking-tighter">
                    ★★★★★
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#1C1917]">5.0/5</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#44403C] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E7E5E4] flex items-center gap-1.5 shadow-xs">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Google Reviews</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#1C1917] tracking-tight mt-0.5 truncate">
                  Trusted by 5,000+ Yoga Teachers
                </p>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* HERO VIDEO HOLDER (CLEAN AESTHETIC STUDIO FRAME MATCHING REFERENCE) */}
            {/* ========================================================================= */}
            <div className="max-w-2xl mx-auto mb-8 bg-white rounded-3xl border border-[#E7E5E4] p-2 sm:p-3 shadow-md overflow-hidden backdrop-blur-md">
              {/* Video Preview Container */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden bg-black group cursor-pointer"
                onClick={() => setActiveVideoModal("9uGW2o3jTGM")}
              >
                <Image
                  src="https://img.youtube.com/vi/9uGW2o3jTGM/hqdefault.jpg"
                  alt="Student Review - Acharya Sachin Kotiyal Yoga Anatomy Masterclass"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                {/* Compact Clean White Play Button (Face Fully Visible) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl transform group-hover:scale-115 transition-transform duration-300 ring-2 sm:ring-4 ring-white/60">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* VIBRANT YELLOW BANNER CTA (SCREENSHOT 2) */}
            {/* ========================================================================= */}
            <div 
              onClick={openBookingModal}
              className="max-w-2xl mx-auto mb-8 bg-[#f5b942] hover:bg-[#eab308] cursor-pointer text-[#0E0A07] py-3.5 px-5 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-between font-extrabold text-sm sm:text-base border-2 border-yellow-300 group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg text-[#b45309]">»</span>
                <span>Become a confident, injury-free Yoga Teacher now!</span>
                <span className="text-xs sm:text-sm font-bold text-[#b45309]">
                  (Only <span className="line-through text-red-700">₹499</span> <strong className="text-[#0E0A07]">₹99</strong>)
                </span>
              </div>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* ========================================================================= */}
            {/* EVENT HIGHLIGHTS CARD (CLEAN WHITE STUDIO CONTAINER) */}
            {/* ========================================================================= */}
            <div className="max-w-2xl mx-auto mb-10 bg-white border border-[#E7E5E4] rounded-3xl p-5 sm:p-7 shadow-xl text-left">
              
              {/* 5 Details Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                
                <div className="bg-white border border-[#E7E5E4] p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-wider">DATE</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">{sundayInfo.ordinalDate}</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E7E5E4] p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-wider">TIME</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">11:00 AM IST</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E7E5E4] p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <span className="text-xl">⏳</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-wider">DURATION</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">2 Hours Live</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E7E5E4] p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <span className="text-xl">📺</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-wider">PLATFORM</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">Live on Zoom</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E7E5E4] p-3 rounded-2xl flex items-center gap-3 shadow-sm sm:col-span-2 lg:col-span-1">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-wider">LANGUAGE</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1C1917]">English Only</p>
                  </div>
                </div>

              </div>

              {/* ========================================================================= */}
              {/* IS THIS WORKSHOP RIGHT FOR YOU IF... (MATCHING REFERENCE UI) */}
              {/* ========================================================================= */}
              <div className="border-t border-[#E7E5E4] pt-6 mb-6">
                <div className="mb-4">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#1C1917] flex items-center gap-2 flex-wrap">
                    <span>Is This Workshop Right</span>
                    <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 text-xs sm:text-sm px-2 py-0.5 rounded-lg border border-emerald-300 font-bold">
                      ✅
                    </span>
                    <span>For You If...</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Point 1 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You want to <strong className="text-[#1C1917] font-bold">apply anatomy</strong>, not just learn it.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You know anatomy, but <strong className="text-[#1C1917] font-bold">don't know how to use it</strong> in class.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You want to <strong className="text-[#1C1917] font-bold">become a yoga teacher</strong> one day.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You want to <strong className="text-[#1C1917] font-bold">help people with pain</strong> & become a yoga therapist.
                    </p>
                  </div>

                  {/* Point 5 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You've completed your 200 or 300-hour training, or a bachelor's or master's in yoga, and want to take your understanding to a <strong className="text-[#1C1917] font-bold">deeper, more practical & Applied level</strong>.
                    </p>
                  </div>

                  {/* Point 6 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You want to teach but don't have confidence & knowledge — <strong className="text-[#1C1917] font-bold">this will be your first step</strong>.
                    </p>
                  </div>

                  {/* Point 7 */}
                  <div className="bg-white border border-[#E7E5E4] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm md:text-[15px] text-[#1C1917] font-semibold leading-snug">
                      You want to <strong className="text-[#1C1917] font-bold">earn more money</strong> as a yoga teacher.
                    </p>
                  </div>

                  {/* Point 8 (HIGHLIGHTED AS REQUESTED) */}
                  <div className="bg-white border-2 border-[#D97706] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-md">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm">
                      ★
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-[#1C1917] font-extrabold leading-snug">
                      ✨ And most of all, if you want to teach yoga to <span className="text-[#B45309] underline decoration-[#B45309] decoration-2 underline-offset-2">heal, not just to stretch</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Button Row */}
              <div className="bg-white p-4 rounded-2xl border border-[#E7E5E4] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] text-[#78716C]">Regular Price: <span className="line-through">₹499</span></p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-serif text-3xl font-extrabold text-[#D97706]">₹99</span>
                    <span className="bg-white border border-[#E7E5E4] text-[#B45309] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
                      Limited Time Offer
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white shadow-md font-extrabold text-sm sm:text-base py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book My Seat — ₹99</span>
                  <span>→</span>
                </button>
              </div>

            </div>


          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ALIGNMENT QUIZ INTERACTIVE SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1c2420] border-b border-[#E7E5E4]">
          <div className="max-w-4xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-4 py-1.5 rounded-full border border-[#FDE68A] mb-3">
                ALIGNMENT QUIZ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] leading-tight mb-3">
                Which Alignment Is Correct?
              </h2>
              <p className="text-sm sm:text-base text-[#78716C]">
                Take a look at both variations below. Tap on the one you believe is the correct alignment.
              </p>
            </div>

            {/* 2 Comparison Cards (Option A vs Option B) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Option A */}
              <div
                onClick={() => setSelectedQuizOption("A")}
                className={`bg-white rounded-3xl p-4 sm:p-5 border-2 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col items-center text-center group ${
                  selectedQuizOption === "A"
                    ? "border-[#D97706] ring-2 ring-[#D97706]/20 shadow-md"
                    : "border-[#E7E5E4] hover:border-[#D97706]/60"
                }`}
              >
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden mb-4 bg-white border border-[#E7E5E4]">
                  <Image
                    src="/quiz-trikonasana-a.jpg"
                    alt="Trikonasana Alignment Option A"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#1C1917]/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    Option A
                  </div>
                  {selectedQuizOption === "A" && (
                    <div className="absolute top-2.5 right-2.5 bg-[#D97706] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                      ✓
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                    selectedQuizOption === "A"
                      ? "bg-[#D97706] text-white shadow-xs"
                      : "bg-white text-[#44403C] group-hover:bg-[#D97706] group-hover:text-white border border-[#E7E5E4]"
                  }`}
                >
                  {selectedQuizOption === "A" ? "Selected: Option A ✓" : "Choose Option A"}
                </button>
              </div>

              {/* Option B */}
              <div
                onClick={() => setSelectedQuizOption("B")}
                className={`bg-white rounded-3xl p-4 sm:p-5 border-2 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col items-center text-center group ${
                  selectedQuizOption === "B"
                    ? "border-[#D97706] ring-2 ring-[#D97706]/20 shadow-md"
                    : "border-[#E7E5E4] hover:border-[#D97706]/60"
                }`}
              >
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden mb-4 bg-white border border-[#E7E5E4]">
                  <Image
                    src="/quiz-trikonasana-b.jpg"
                    alt="Trikonasana Alignment Option B"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#1C1917]/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    Option B
                  </div>
                  {selectedQuizOption === "B" && (
                    <div className="absolute top-2.5 right-2.5 bg-[#D97706] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                      ✓
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                    selectedQuizOption === "B"
                      ? "bg-[#D97706] text-white shadow-xs"
                      : "bg-white text-[#44403C] group-hover:bg-[#D97706] group-hover:text-white border border-[#E7E5E4]"
                  }`}
                >
                  {selectedQuizOption === "B" ? "Selected: Option B ✓" : "Choose Option B"}
                </button>
              </div>
            </div>

            {/* Revealed Answer Block */}
            {selectedQuizOption && (
              <div className="mt-8 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E5E4] shadow-md text-left">
                {/* 1. Big heading */}
                <h3
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] leading-tight mb-4 quiz-stagger-item"
                  style={{ animationDelay: "0s" }}
                >
                  Surprise: both are right.
                </h3>

                {/* 2. Paragraph */}
                <p
                  className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-4 quiz-stagger-item"
                  style={{ animationDelay: "0.15s" }}
                >
                  Whichever one you picked, you picked it for a reason. Maybe that's how your teacher taught you. Maybe that's what you saw online.
                </p>

                {/* 3. Paragraph */}
                <p
                  className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-5 quiz-stagger-item"
                  style={{ animationDelay: "0.30s" }}
                >
                  That's exactly what is happening all around the world. Every teacher teaches a little differently, and we believe what we were taught is 'the right way.'
                </p>

                {/* 4. Short standalone line (slightly larger, medium weight) */}
                <p
                  className="text-base sm:text-lg font-medium text-[#1C1917] mb-5 quiz-stagger-item"
                  style={{ animationDelay: "0.45s" }}
                >
                  But alignment is not about chasing a shape.
                </p>

                {/* 5. Highlight box (pure white background, rounded corners, bold text, clean border) */}
                <div
                  className="bg-white border-2 border-[#D97706]/40 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs quiz-stagger-item"
                  style={{ animationDelay: "0.60s" }}
                >
                  <p className="text-sm sm:text-base md:text-lg font-bold text-[#1C1917] leading-snug">
                    Every alignment comes from anatomy. More importantly, from functional anatomy.
                  </p>
                </div>

                {/* 6. Paragraph */}
                <p
                  className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-5 quiz-stagger-item"
                  style={{ animationDelay: "0.75s" }}
                >
                  When you understand why a pose works, you stop copying and start knowing.
                </p>

                {/* 7. Emphasis line (bold, larger, the strongest text in the block) */}
                <p
                  className="text-base sm:text-lg text-[#292524] leading-relaxed mb-5 quiz-stagger-item"
                  style={{ animationDelay: "0.90s" }}
                >
                  <strong className="font-extrabold text-lg sm:text-xl text-[#1C1917]">This is the code.</strong>{" "}
                  Once you learn it, you can decode any pose, and every alignment starts to make sense.
                </p>

                {/* 8. Paragraph */}
                <p
                  className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-6 quiz-stagger-item"
                  style={{ animationDelay: "1.05s" }}
                >
                  In this workshop, you'll learn functional anatomy and exactly how to apply it in your own practice.
                </p>

                {/* 9. Tagline (bold, centered) */}
                <p
                  className="text-base sm:text-lg font-bold text-center text-[#B45309] mb-6 quiz-stagger-item"
                  style={{ animationDelay: "1.20s" }}
                >
                  Stop memorizing poses. Start decoding them.
                </p>

                {/* 10. Button & Try again */}
                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 quiz-stagger-item"
                  style={{ animationDelay: "1.35s" }}
                >
                  <button
                    onClick={openBookingModal}
                    className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white shadow-md font-extrabold text-base py-3.5 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Join the workshop →</span>
                  </button>

                  <button
                    onClick={() => setSelectedQuizOption(null)}
                    className="text-xs sm:text-sm text-[#78716C] hover:text-[#1C1917] font-semibold underline underline-offset-4 transition-colors py-2 px-3 cursor-pointer"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.5 "WHAT YOU'LL LEARN IN 2 HOURS" (3-STEP METHOD SECTION) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1c2420] border-b border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-4 py-1.5 rounded-full border border-[#FDE68A] mb-3">
                WHAT YOU'LL LEARN
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] leading-tight mb-3">
                What you'll learn in 2 hours
              </h2>
              <p className="text-sm sm:text-base text-[#78716C]">
                One simple method, in three steps.
              </p>
            </div>

            {/* 3 Step Cards Grid with Connecting Journey Line */}
            <div className="relative mb-12">
              
              {/* Desktop Horizontal Journey Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#D97706]/20 via-[#D97706]/40 to-[#D97706]/20 -translate-y-12 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                {/* Card 1 — 01 Understand */}
                <div 
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E5E4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D97706]/50 group relative quiz-stagger-item"
                  style={{ animationDelay: "0.15s" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] font-mono font-extrabold text-lg sm:text-xl flex items-center justify-center border border-[#FDE68A] shadow-xs group-hover:scale-105 transition-transform">
                        01
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7E5E4]">
                        Step 1
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-5">
                      Understand
                    </h3>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>What alignment really means, and why there's no single "perfect" pose</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Why every body is different: how your bones and joints shape your poses</span>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Journey Arrow Down */}
                  <div className="md:hidden flex justify-center pt-4 text-[#D97706] opacity-60">
                    ↓
                  </div>
                </div>

                {/* Card 2 — 02 Decode */}
                <div 
                  className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#D97706]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D97706] group relative quiz-stagger-item"
                  style={{ animationDelay: "0.30s" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#D97706] text-white font-mono font-extrabold text-lg sm:text-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        02
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FEF3C7] px-2.5 py-1 rounded-full border border-[#FDE68A]">
                        Step 2 • Core
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-5">
                      Decode
                    </h3>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Functional anatomy, made simple: which joints should move and which should stay stable</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Tension or compression: when to go deeper, and when your body says "this is your limit"</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Passive vs. active stretching, and why active stretching makes you stronger and safer</span>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Journey Arrow Down */}
                  <div className="md:hidden flex justify-center pt-4 text-[#D97706] opacity-60">
                    ↓
                  </div>
                </div>

                {/* Card 3 — 03 Apply */}
                <div 
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E5E4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D97706]/50 group relative quiz-stagger-item"
                  style={{ animationDelay: "0.45s" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] font-mono font-extrabold text-lg sm:text-xl flex items-center justify-center border border-[#FDE68A] shadow-xs group-hover:scale-105 transition-transform">
                        03
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7E5E4]">
                        Step 3
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-5">
                      Apply
                    </h3>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Break down key poses step by step, so you can decode any pose</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>Build a smart sequence that prepares your body for a key pose</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Centered CTA Block */}
            <div 
              className="text-center max-w-xl mx-auto pt-2 quiz-stagger-item"
              style={{ animationDelay: "0.60s" }}
            >
              <p className="font-bold text-base sm:text-lg text-[#1C1917] mb-5">
                Two hours. One method. Every pose starts making sense.
              </p>
              
              <button
                onClick={openBookingModal}
                className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-extrabold text-base py-3.5 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Save my spot →</span>
              </button>
            </div>

          </div>
        </section>





        {/* ========================================================================= */}
        {/* 5. INSTRUCTOR SPOTLIGHT: ACHARYA SACHIN KOTIYAL */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1C1917] border-b border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto px-4">
            
            {/* Header Badge & Title */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-4 py-1.5 rounded-full border border-[#FDE68A] mb-3">
                MEET YOUR INSTRUCTOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
                Acharya Sachin Kotiyal
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#B45309] mt-1.5">
                Founder, YogaGarhi Ashram (Bali & Rishikesh) • 10+ Years Global Teaching • Armed Forces Yoga Therapy Specialist
              </p>
            </div>

            {/* Main Instructor Card */}
            <div className="bg-white rounded-3xl border border-[#E7E5E4] shadow-md p-5 sm:p-8 lg:p-10 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: 2 Portrait Photos (Teaching & Hands-On) */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-sm bg-stone-100 group">
                    <Image
                      src="/instructor-teaching-block.jpg"
                      alt="Acharya Sachin Kotiyal teaching active biomechanics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                      Active Biomechanics
                    </span>
                  </div>

                  <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-sm bg-stone-100 group">
                    <Image
                      src="/instructor-hands-on.jpg"
                      alt="Hands-on alignment correction"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                      Clinical Adjustments
                    </span>
                  </div>
                </div>

                {/* Right Side: Bio & 4 Key Highlights */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <p className="text-sm sm:text-[15px] text-[#44403C] leading-relaxed">
                    Having trained over <strong>5,000+ yoga teachers worldwide</strong> and rehabilitated complex spinal, hip, and shoulder injuries for elite <strong>Indian Armed Forces personnel</strong>, Acharya Sachin bridges ancient Himalayan alignment with modern orthopaedic biomechanics.
                  </p>

                  {/* 4 Feature Checkboxes (Pure White Backgrounds) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] flex items-center gap-2.5 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs text-[#1C1917] font-semibold">Armed Forces posture & injury analysis</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] flex items-center gap-2.5 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs text-[#1C1917] font-semibold">Hands-on alignment & adjustment cues</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] flex items-center gap-2.5 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs text-[#1C1917] font-semibold">Direct live Q&A on your personal cases</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] flex items-center gap-2.5 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs text-[#1C1917] font-semibold">Taught 100% in English Only</span>
                    </div>
                  </div>

                  {/* Pricing Row CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-[#78716C]">
                      Live 2-Hour Interactive Masterclass • <strong>{sundayInfo.ordinalDate} at 11:00 AM IST</strong>
                    </p>
                    <button
                      onClick={openBookingModal}
                      className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-extrabold text-xs sm:text-sm py-2.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Book Seat — ₹99</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Proof Strip: 3 Credibility Photos (Armed Forces Training, Award & 5,000+ Graduates) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Photo 1: Military Session */}
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-2.5 shadow-sm group">
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-2">
                  <Image
                    src="/instructor-military-training.jpg"
                    alt="Acharya Sachin Kotiyal training Indian Armed Forces"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[11px] sm:text-xs font-bold text-[#1C1917] text-center">
                  Specialist for Indian Armed Forces
                </p>
              </div>

              {/* Photo 2: Award Recognition */}
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-2.5 shadow-sm group">
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-2">
                  <Image
                    src="/instructor-award.jpg"
                    alt="Acharya Sachin Kotiyal felicitation award"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[11px] sm:text-xs font-bold text-[#1C1917] text-center">
                  Honored for Yoga Therapy Excellence
                </p>
              </div>

              {/* Photo 3: 5,000+ Graduates */}
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-2.5 shadow-sm group">
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-2">
                  <Image
                    src="/instructor-graduates.jpg"
                    alt="5,000+ Yoga Teachers Mentored Worldwide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[11px] sm:text-xs font-bold text-[#1C1917] text-center">
                  5,000+ Yoga Teachers Mentored Globally
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DEDICATED REVIEWS & STUDENT PROOF HOLDER (3 TABS) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1C1917] border-b border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-4 py-1.5 rounded-full border border-[#FDE68A] mb-3 inline-block">
                Social Proof & Unfiltered Feedback
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mt-2 mb-3">
                Loved by 5,000+ Students & Practitioners Worldwide
              </h2>
              <p className="text-sm text-[#78716C]">
                Explore verified video stories, WhatsApp community messages, and teacher reviews.
              </p>

              {/* 3 Review Tabs Switcher */}
              <div className="flex items-center justify-center gap-2 mt-6 p-1.5 bg-[#FAF7F2] border border-[#E7E5E4] rounded-2xl max-w-md mx-auto">
                <button
                  onClick={() => setReviewTab("videos")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "videos"
                      ? "bg-[#1C1917] text-white shadow-md"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                >
                  🎥 Video Stories ({videoTestimonials.length})
                </button>

                <button
                  onClick={() => setReviewTab("whatsapp")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "whatsapp"
                      ? "bg-[#1C1917] text-white shadow-md"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                >
                  💬 WhatsApp Feedback
                </button>

                <button
                  onClick={() => setReviewTab("teachers")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "teachers"
                      ? "bg-[#1C1917] text-white shadow-md"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                >
                  ⭐ Teacher Reviews
                </button>
              </div>
            </div>

            {/* TAB 1: VIDEO TESTIMONIALS */}
            {reviewTab === "videos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fadeIn">
                {videoTestimonials.map((v) => (
                  <div
                    key={v.id}
                    className="bg-white rounded-2xl border border-[#E7E5E4] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer"
                    onClick={() => setActiveVideoModal(v.id)}
                  >
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <Image
                        src={v.thumb}
                        alt={`${v.name} YogaGarhi Review`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                      <p className="text-xs text-[#44403C] italic line-clamp-3 mb-3 leading-relaxed">
                        "{v.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#E7E5E4]">
                        <div>
                          <h4 className="font-bold text-xs text-[#1C1917]">{v.name}</h4>
                          <p className="text-[10px] text-[#78716C]">{v.role}, {v.country}</p>
                        </div>
                        <span className="text-[10px] text-[#B45309] font-bold">Watch ▶</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: WHATSAPP SCREENSHOT CHAT FEEDBACK */}
            {reviewTab === "whatsapp" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fadeIn">
                {whatsappReviews.map((msg, i) => (
                  <div key={i} className="bg-white border border-[#E7E5E4] p-4 sm:p-5 rounded-2xl shadow-sm relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold">
                          WA
                        </div>
                        <div>
                          <p className="font-bold text-xs text-[#1C1917]">{msg.sender}</p>
                          <p className="text-[10px] text-[#78716C]">{msg.time}</p>
                        </div>
                      </div>
                      <span className="bg-[#25D366]/20 text-[#127a38] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {msg.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#1C1917] font-medium leading-relaxed bg-[#FAF7F2] p-3 rounded-xl border border-[#E7E5E4]">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: TEACHER REVIEWS */}
            {reviewTab === "teachers" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fadeIn">
                <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#1C1917] mb-1">"Finally understood shoulder impingement"</h4>
                  <p className="text-xs text-[#44403C] leading-relaxed mb-4">
                    In my 5 years of teaching, no one broke down the scapulohumeral rhythm like Sachin Ji. My students immediately felt the difference in downward dog and plank.
                  </p>
                  <p className="text-[11px] font-bold text-[#1C1917]">— Priya Sharma, Studio Owner (Delhi)</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#1C1917] mb-1">"The best ₹99 I ever invested"</h4>
                  <p className="text-xs text-[#44403C] leading-relaxed mb-4">
                    The value delivered in 2 hours is greater than what most TTC schools teach across 4 weeks of anatomy modules. Clear, precise, no fluff.
                  </p>
                  <p className="text-[11px] font-bold text-[#1C1917]">— Rajesh Varma, RYT 500 (Bengaluru)</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#1C1917] mb-1">"Essential for every serious yogi"</h4>
                  <p className="text-xs text-[#44403C] leading-relaxed mb-4">
                    His clinical examples regarding SI joint compression and hip socket variations completely changed how I adjust students in forward folds.
                  </p>
                  <p className="text-[11px] font-bold text-[#1C1917]">— Sarah M., Vinyasa Teacher (Melbourne)</p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. COMPARISON TABLE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-white text-[#1C1917] border-b border-[#E7E5E4]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-3.5 py-1 rounded-full border border-[#FDE68A]">
                Why YogaGarhi Biomechanics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mt-3">
                Standard Studio Anatomy vs. YogaGarhi Clinical Biomechanics
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden shadow-md border border-[#E7E5E4]">
                <thead>
                  <tr className="border-b border-[#E7E5E4]">
                    <th className="p-4 bg-[#FAF7F2] text-[#1C1917] font-bold">Feature / Topic</th>
                    <th className="p-4 bg-stone-100 text-[#78716C] font-semibold">Standard 200-Hr TTC Anatomy</th>
                    <th className="p-4 bg-[#FEF3C7] text-[#B45309] font-black">YogaGarhi Clinical Masterclass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5E4] bg-white">
                  <tr>
                    <td className="p-4 font-bold text-[#1C1917]">Teaching Focus</td>
                    <td className="p-4 text-[#78716C]">Dry Latin bone & muscle names</td>
                    <td className="p-4 text-[#1C1917] font-semibold bg-[#FFFBEB]/40">Live dynamic joint loading & injury prevention</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#1C1917]">Spine & Disc Safety</td>
                    <td className="p-4 text-[#78716C]">"Lengthen your spine" (vague)</td>
                    <td className="p-4 text-[#1C1917] font-semibold bg-[#FFFBEB]/40">Exact segmental mechanics for safe lumbar flexion/extension</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#1C1917]">Pelvis & Hip Depth</td>
                    <td className="p-4 text-[#78716C]">One-size-fits-all cueing</td>
                    <td className="p-4 text-[#1C1917] font-semibold bg-[#FFFBEB]/40">Identifying skeletal compression vs muscular tension</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#1C1917]">Shoulder & Rotator Cuff</td>
                    <td className="p-4 text-[#78716C]">"Draw shoulders away from ears"</td>
                    <td className="p-4 text-[#1C1917] font-semibold bg-[#FFFBEB]/40">Clinical scapular rhythm to avoid rotator cuff impingement</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#1C1917]">Instructor Pedigree</td>
                    <td className="p-4 text-[#78716C]">General yoga instructor</td>
                    <td className="p-4 text-[#B45309] font-black bg-[#FFFBEB]/40">Ex-Armed Forces Yoga Therapy Specialist (10+ Yrs)</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. WHAT YOU GET FOR ₹99 & FINAL PRICING CARD */}
        {/* ========================================================================= */}
        <section id="pricing-section" className="py-16 md:py-24 bg-white text-[#1C1917] border-b border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto px-4">
            
            <div className="bg-white rounded-3xl border-2 border-[#D97706] p-6 sm:p-10 shadow-xl relative overflow-hidden text-left">
              
              <div className="absolute top-0 right-0 bg-[#D97706] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1 px-5 rounded-bl-xl shadow">
                99% Off Limited Time
              </div>

              <div className="text-center pb-6 border-b border-[#E7E5E4]">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  Join the Live Applied Anatomy Masterclass
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] mt-1">
                  Strictly 2 Hours • Live Interactive Session • Direct Q&A
                </p>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="text-sm sm:text-base text-gray-400 line-through">₹499 / ₹999</span>
                  <span className="font-serif text-4xl sm:text-5xl font-black text-[#D97706]">₹99</span>
                  <span className="text-xs bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] font-bold px-2.5 py-1 rounded-full uppercase">
                    Only Today
                  </span>
                </div>
              </div>

              {/* What is Included */}
              <div className="py-6 space-y-3.5 text-xs sm:text-sm text-[#292524]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p><strong className="text-[#1C1917]">Live 2-Hour Interactive Masterclass</strong> with Acharya Sachin Kotiyal</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p><strong className="text-[#1C1917]">Live Functional Joint Analysis</strong> (Spine, Hips, Shoulders & Knees)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p><strong className="text-[#1C1917]">Interactive Q&A Session</strong> — Get your specific student injury questions answered</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p><strong className="text-[#1C1917]">Bonus #1:</strong> PDF Anatomy Cheat-Sheet & Injury Matrix (Value ₹499)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p><strong className="text-[#1C1917]">Bonus #2:</strong> VIP YogaGarhi Teachers WhatsApp Community Access</p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#D97706] hover:bg-[#B45309] active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Your Masterclass Spot for ₹99 Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[11px] text-[#78716C] mt-2 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Official Live Razorpay Checkout • Instant Zoom Pass Issued</span>
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white text-[#1C1917] border-t border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#D97706] bg-[#FEF3C7] px-3.5 py-1 rounded-full border border-[#FDE68A]">
                FAQ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 text-left">
              {[
                {
                  q: "Who is this workshop for?",
                  a: "This workshop is built specifically for Yoga Teachers (RYT 200 / 300 / 500), fitness trainers, and serious practitioners who want to understand anatomy functionally and teach without fear of injuring students."
                },
                {
                  q: "What language will the masterclass be in?",
                  a: "The masterclass will be conducted 100% in clear, simple English without complex medical jargon, making it easy to understand for yoga teachers and practitioners globally."
                },
                {
                  q: "Will I get the Zoom link immediately after paying ₹99 via Razorpay?",
                  a: "Yes! As soon as your ₹99 payment is completed via Razorpay UPI / Cards, you will instantly receive the Zoom Meeting ID & Passcode on your screen, plus an email confirmation and VIP WhatsApp community invite."
                },
                {
                  q: "Why is it priced at only ₹99?",
                  a: "YogaGarhi believes essential joint safety and injury prevention knowledge should be accessible to every yoga teacher worldwide. The ₹99 fee simply filters out casual spammers so only dedicated teachers attend."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-[#1C1917] hover:text-[#D97706] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-[#D97706]" /> : <ChevronDown className="w-4 h-4 text-[#78716C]" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-[#44403C] leading-relaxed border-t border-[#E7E5E4] bg-[#FAF7F2] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Talk to Us: Mail & Message Support Card */}
            <div className="mt-8 bg-white border border-[#E7E5E4] rounded-3xl p-6 sm:p-8 text-center shadow-sm max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mx-auto mb-3 border border-[#FDE68A]">
                <HelpCircle className="w-6 h-6 text-[#D97706]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-1.5">
                Still have questions? Talk to us
              </h3>
              <p className="text-xs sm:text-sm text-[#78716C] mb-6 max-w-md mx-auto">
                Have a question about the curriculum, timing, or payment? Our support team is here to help you.
              </p>

              <div className="flex items-center justify-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yogagarhi@gmail.com&su=Query%20Regarding%20Yoga%20Anatomy%20Masterclass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#1C1917] border border-[#E7E5E4] font-bold text-xs sm:text-sm py-3 px-8 rounded-xl shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#D97706]" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 10. DEDICATED LANDING FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-white text-[#78716C] py-8 px-4 text-center text-xs border-t border-[#E7E5E4]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} YogaGarhi Ashram & Yoga School. All Rights Reserved.</p>
          <div className="flex gap-4 text-[#44403C]">
            <Link href="/privacy-policy" className="hover:underline hover:text-[#1C1917]">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline hover:text-[#1C1917]">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:underline hover:text-[#1C1917]">Refund Policy</Link>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 11. VIDEO MODAL PLAYER */}
      {/* ========================================================================= */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-black rounded-3xl max-w-2xl w-full p-2 relative shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black p-2 rounded-full z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal}?autoplay=1&rel=0`}
                title="Student Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 12. ₹99 RAZORPAY BOOKING & INSTANT ZOOM PASS MODAL */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-[#1C1917] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#E7E5E4] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#78716C] hover:text-[#1C1917] p-1.5 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === "form" && (
              <div>
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#B45309] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> Official Live Razorpay ₹99 Checkout
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Claim Your Masterclass Seat</h3>
                  <p className="text-xs text-[#78716C] mt-1">Live this {sundayInfo.ordinalDate} • 11:00 AM IST (2-Hour Live Workshop)</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7E5E4] text-[#1C1917] text-xs sm:text-sm focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7E5E4] text-[#1C1917] text-xs sm:text-sm focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">WhatsApp Number (For Zoom Pass & Reminders)</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7E5E4] text-[#1C1917] text-xs sm:text-sm focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E7E5E4] flex items-center justify-between text-xs font-bold text-[#1C1917]">
                    <span>Total Amount Payable:</span>
                    <span className="text-base font-black text-[#D97706]">₹99 Only <span className="text-xs line-through text-gray-400 font-normal">₹499</span></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D97706] hover:bg-[#B45309] active:scale-98 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹99 via Razorpay (UPI / Cards / GPay)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-[#78716C] pt-1">
                    🔒 Secured by 256-bit encryption • Supports UPI, Google Pay, PhonePe, Cards & NetBanking
                  </p>
                </form>
              </div>
            )}

            {bookingStep === "processing" && (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#D97706] border-t-transparent animate-spin mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">Opening Razorpay Checkout...</h4>
                <p className="text-xs text-[#78716C]">Please complete your ₹99 payment in the popup window.</p>
              </div>
            )}

            {bookingStep === "success" && (
              <div className="text-center space-y-4 py-2">
                <div className="w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto border-2 border-[#22c55e]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Payment Received! Seat Confirmed 🎉</h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    Receipt ID: <strong className="text-[#1C1917] font-mono">{paymentId}</strong> for <strong>{formData.name}</strong>
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E5E4] text-left space-y-2 text-xs text-[#1C1917]">
                  <p className="font-bold text-sm text-[#D97706] flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#D97706]" />
                    Live Zoom Meeting Pass:
                  </p>
                  <p><strong>Meeting ID:</strong> 890 4962 6217</p>
                  <p><strong>Passcode:</strong> 260670</p>
                  <p><strong>Date & Time:</strong> {sundayInfo.ordinalDate} at 11:00 AM IST</p>
                  <p><strong>Duration:</strong> Strictly 2 Hours Live (11:00 AM – 1:00 PM IST)</p>
                  <div className="pt-1">
                    <a
                      href="https://us06web.zoom.us/j/89049626217?pwd=582v4nKvrQ54BOTHleb1H1c7f0sX35.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#B45309] hover:underline font-bold flex items-center gap-1"
                    >
                      🔗 Click here to Open Zoom Directly →
                    </a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="https://us06web.zoom.us/j/89049626217?pwd=582v4nKvrQ54BOTHleb1H1c7f0sX35.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all block"
                  >
                    <Video className="w-4 h-4" />
                    Join Live Zoom Class
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=917895350563&text=Hi+YogaGarhi,+I+have+paid+Rs.99+for+the+Applied+Anatomy+Masterclass!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all block"
                  >
                    <Smartphone className="w-4 h-4" />
                    Join VIP WhatsApp Masterclass Group
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-[#1C1917] font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    Done / Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 13. STICKY BOTTOM BAR (FOR MOBILE & DESKTOP CONVERSIONS) */}
      {/* ========================================================================= */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E7E5E4] py-3 px-4 shadow-2xl animate-fadeIn">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-[#1C1917]">Applied Yoga Anatomy Masterclass</p>
              <p className="text-[11px] text-[#B45309] font-semibold">{sundayInfo.ordinalDate} • 11:00 AM IST (2-Hr Live) • Only ₹99</p>
            </div>

            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-gray-400 line-through">₹499</span>
                <span className="text-base sm:text-lg font-black text-[#D97706] ml-1.5">₹99</span>
              </div>
              <button
                onClick={openBookingModal}
                className="bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 sm:px-7 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Book My Seat — ₹99 →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
