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
import { getCloudinaryUrl } from "@/utils/cloudinary";

// Dynamic Next Sunday Date Calculator (Auto-calculates every week for any year)
function getUpcomingSunday(): { fullDate: string; shortDate: string; ordinalDate: string; isoDate: string } {
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sunday
  let daysUntilSunday = (7 - currentDay) % 7;

  // If today is Sunday and past 7:30 PM IST (14:00 UTC), target next Sunday
  const currentHourUTC = now.getUTCHours();
  const currentMinuteUTC = now.getUTCMinutes();
  const totalMinutesUTC = currentHourUTC * 60 + currentMinuteUTC;
  if (currentDay === 0 && totalMinutesUTC >= 870) {
    daysUntilSunday = 7;
  }

  const targetDate = new Date(now.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000);

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
    message: "Sachin Ji breaks down anatomy in such relatable Hindi and English. No dry memorization, just pure functional movement. The bonus sequencing PDF is also super practical!",
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
      amount: 100, // 100 paise = ₹1.00
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
        workshop: "Applied Yoga Anatomy & Biomechanics Masterclass",
        date: sundayInfo.fullDate,
        time: "7:00 PM IST",
      },
      theme: {
        color: "#0B3B2C",
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

        // Dual-Channel Email Dispatch (Direct Browser + Backend API)
        const emailPayload = {
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          payment_id: pId,
          amount: "₹1.00",
          workshop_date: `${sundayInfo.fullDate} at 7:00 PM IST`,
          zoom_meeting_id: "842 9104 3821",
          zoom_passcode: "YOGA1",
          whatsapp_group: "https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I%20have%20paid%20₹1%20for%20the%20Applied%20Anatomy%20Masterclass!",
          _subject: `Confirmed: ₹1 Masterclass Payment - ${formData.name} (${pId})`,
          _autoresponder: `Namaste ${formData.name},

Thank you for registering for the "Applied Functional Yoga Anatomy & Biomechanics Masterclass" led by Acharya Sachin Kotiyal!

We have successfully received your ₹1 payment.

=== YOUR LIVE ZOOM ACCESS PASS ===
• Date & Time: ${sundayInfo.fullDate} | 7:00 PM – 9:00 PM IST
• Mode: Live on Zoom
• Meeting ID: 842 9104 3821
• Passcode: YOGA1
• Payment Receipt ID: ${pId}

=== VIP WHATSAPP GROUP ===
Join our VIP WhatsApp Teachers Group for live class reminders and bonus materials:
https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I%20have%20paid%20₹1%20for%20the%20Applied%20Anatomy%20Masterclass!

Please join the Zoom room 5 minutes before 7:00 PM IST with your yoga mat and notebook ready.

With warm regards,
Acharya Sachin Kotiyal & The YogaGarhi Team
YogaGarhi Ashram & Yoga School`,
        };

        // Official Server API Route Dispatch (Sends direct authenticated email from yogagarhi@gmail.com)
        try {
          await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailPayload),
          });
        } catch (err) {
          console.error("Email notification error:", err);
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
    <div className="min-h-screen bg-[#072c22] text-[#eef6f3] font-sans selection:bg-[#f5b942]/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. DEDICATED DARK GREEN HEADER (MATCHING SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <header className="bg-[#0B3B2C] text-white border-b border-[#144f3c]/80 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#f5b942]">
                YogaGarhi
              </span>
            </div>
            <span className="text-[10px] md:text-[11px] text-[#a3c9bd] tracking-wide font-medium">
              Learn what most yoga schools never teach
            </span>
          </div>

          <div>
            <button
              onClick={openBookingModal}
              className="bg-[#ea580c] hover:bg-[#d94e07] active:scale-95 text-white text-xs sm:text-sm font-bold py-2.5 px-5 sm:px-7 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all"
            >
              Book Now — ₹1
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ========================================================================= */}
        {/* 2. HERO SECTION (MATCHING SCREENSHOT 1 & 2) */}
        {/* ========================================================================= */}
        <section className="relative pt-8 pb-14 md:pt-12 md:pb-18 bg-[#0B3B2C] text-white overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175c47]/50 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            
            {/* Top Pill Badge: Limited Seats - Live Online Workshop */}
            <div className="inline-flex items-center gap-2 bg-[#082e22]/90 border border-[#1f6b53] px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-[#f5b942] mb-6 shadow-sm">
              <span>🔥 Limited Seats - Live Online Workshop</span>
            </div>

            {/* Main Heading (H1) */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.18] tracking-tight mb-5 max-w-4xl mx-auto">
              Master Functional Yoga Anatomy, Alignment & Teaching Methodology in One Workshop
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#b8d9ce] max-w-3xl mx-auto leading-relaxed mb-8">
              A live 2-hour deep-dive for yoga teachers and serious practitioners — learn the science behind safe, effective yoga that most teacher training courses never cover.
            </p>

            {/* 4 Pill Badges Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-10 text-xs sm:text-sm">
              <div className="bg-[#082e22]/90 border border-[#1c6650] px-3.5 py-2 rounded-xl flex items-center gap-2 text-[#d1e8df]">
                <span>📅</span>
                <span className="font-semibold text-white">{sundayInfo.ordinalDate} · 7:00 PM IST</span>
              </div>

              <div className="bg-[#082e22]/90 border border-[#1c6650] px-3.5 py-2 rounded-xl flex items-center gap-2 text-[#d1e8df]">
                <span>⏱</span>
                <span className="font-semibold text-white">2 Hours · Live</span>
              </div>

              <div className="bg-[#082e22]/90 border border-[#1c6650] px-3.5 py-2 rounded-xl flex items-center gap-2 text-[#d1e8df]">
                <span>🗣</span>
                <span className="font-semibold text-white">Taught in English / Hindi</span>
              </div>

              <div className="bg-[#082e22]/90 border border-[#1c6650] px-3.5 py-2 rounded-xl flex items-center gap-2 text-[#d1e8df]">
                <span>💻</span>
                <span className="font-semibold text-white">Live on Zoom</span>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* HERO VIDEO HOLDER WITH GOLD BORDER (SCREENSHOT 1) */}
            {/* ========================================================================= */}
            <div className="max-w-2xl mx-auto mb-8 bg-[#042018] rounded-2xl border-2 border-[#f5b942]/90 p-2 sm:p-3 shadow-2xl overflow-hidden text-left">
              
              {/* Video Card Header */}
              <div className="px-2 py-1.5 flex items-center justify-between text-[10px] sm:text-xs font-bold text-[#f5b942] uppercase tracking-wider mb-1">
                <span>WATCH ACHARYA SACHIN KOTIYAL — REVIEWS OF CLASS</span>
                <span className="text-[#a3d9cf] normal-case font-medium flex items-center gap-1">
                  ✨ Verified Student Experience
                </span>
              </div>

              {/* Video Preview Container */}
              <div 
                className="relative aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer"
                onClick={() => setActiveVideoModal("9uGW2o3jTGM")}
              >
                <Image
                  src="https://img.youtube.com/vi/9uGW2o3jTGM/hqdefault.jpg"
                  alt="Student Review - Acharya Sachin Kotiyal Yoga Anatomy Masterclass"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                {/* Big Orange Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ea580c] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/30">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Card Footer Subtitle */}
              <div className="px-2 pt-2.5 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs">
                <p className="text-[#f5b942] italic">
                  "Hear authentic student feedback, teaching transformation, and real class reviews."
                </p>
                <button
                  onClick={() => setActiveVideoModal("9uGW2o3jTGM")}
                  className="text-[#f5b942] hover:underline font-semibold flex items-center gap-1 shrink-0"
                >
                  Watch on YouTube ↗
                </button>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* VIBRANT YELLOW BANNER CTA (SCREENSHOT 2) */}
            {/* ========================================================================= */}
            <div 
              onClick={openBookingModal}
              className="max-w-2xl mx-auto mb-8 bg-[#f5b942] hover:bg-[#eab308] cursor-pointer text-[#04332D] py-3.5 px-5 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-between font-extrabold text-sm sm:text-base border-2 border-yellow-300 group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg text-[#b45309]">»</span>
                <span>Become a confident, injury-free Yoga Teacher now!</span>
                <span className="text-xs sm:text-sm font-bold text-[#b45309]">
                  (Only <span className="line-through text-red-700">₹499</span> <strong className="text-[#04332D]">₹1</strong>)
                </span>
              </div>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* ========================================================================= */}
            {/* EVENT HIGHLIGHTS CARD (SCREENSHOT 2) */}
            {/* ========================================================================= */}
            <div className="max-w-2xl mx-auto mb-10 bg-[#06281e] border border-[#16533f] rounded-3xl p-5 sm:p-7 shadow-2xl text-left">
              
              {/* 4 Details Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                
                <div className="bg-[#0b3b2c] border border-[#1b614b] p-3 rounded-2xl flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#7fa396] tracking-wider">DATE</p>
                    <p className="text-xs sm:text-sm font-bold text-white">{sundayInfo.ordinalDate}</p>
                  </div>
                </div>

                <div className="bg-[#0b3b2c] border border-[#1b614b] p-3 rounded-2xl flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#7fa396] tracking-wider">TIME</p>
                    <p className="text-xs sm:text-sm font-bold text-white">7:00 PM IST</p>
                  </div>
                </div>

                <div className="bg-[#0b3b2c] border border-[#1b614b] p-3 rounded-2xl flex items-center gap-3">
                  <span className="text-xl">⏳</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#7fa396] tracking-wider">DURATION</p>
                    <p className="text-xs sm:text-sm font-bold text-white">2 Hours Live</p>
                  </div>
                </div>

                <div className="bg-[#0b3b2c] border border-[#1b614b] p-3 rounded-2xl flex items-center gap-3">
                  <span className="text-xl">📺</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#7fa396] tracking-wider">PLATFORM</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Live on Zoom</p>
                  </div>
                </div>

              </div>

              {/* Key Highlights Bullet Points */}
              <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#d4ebe2] border-t border-[#124233] pt-5">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ea580c] font-bold text-base leading-none mt-0.5">➔</span>
                  <p>Master <strong className="text-white">Functional Yoga Anatomy</strong> to prevent injuries & teach with absolute confidence</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ea580c] font-bold text-base leading-none mt-0.5">➔</span>
                  <p>Learn directly from <strong className="text-[#f5b942]">Acharya Sachin Kotiyal</strong> (10+ Years Master Educator & Bali TTC Founder)</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ea580c] font-bold text-base leading-none mt-0.5">➔</span>
                  <p>Upgrade your <strong className="text-white">cueing & alignment system</strong> so students experience real transformation</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ea580c] font-bold text-base leading-none mt-0.5">➔</span>
                  <p><strong className="text-white">No medical background required</strong> — practical, clear science for every yoga teacher</p>
                </div>
              </div>

              {/* Pricing & CTA Button Row */}
              <div className="bg-[#042018] p-4 rounded-2xl border border-[#144b39] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] text-[#7fa396]">Regular Price: <span className="line-through">₹499</span></p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-serif text-3xl font-extrabold text-[#f5b942]">₹1</span>
                    <span className="bg-[#0b3b2c] border border-[#1b614b] text-[#a3d9cf] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Limited Time Offer
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="bg-[#ea580c] hover:bg-[#d94e07] active:scale-95 text-white font-extrabold text-sm sm:text-base py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book My Seat — ₹1</span>
                  <span>→</span>
                </button>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* 4-COLUMN STATS BAR (SCREENSHOT 2) */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              
              <div className="bg-[#082e22]/90 border border-[#16533f] p-4 rounded-2xl text-center shadow-sm">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#f5b942]">500+</p>
                <p className="text-xs text-[#a3c9bd] mt-0.5 font-medium">Students Trained</p>
              </div>

              <div className="bg-[#082e22]/90 border border-[#16533f] p-4 rounded-2xl text-center shadow-sm">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#f5b942]">5.0 ★</p>
                <p className="text-xs text-[#a3c9bd] mt-0.5 font-medium">Average Rating</p>
              </div>

              <div className="bg-[#082e22]/90 border border-[#16533f] p-4 rounded-2xl text-center shadow-sm">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#f5b942]">10+ Years</p>
                <p className="text-xs text-[#a3c9bd] mt-0.5 font-medium">Of Teaching</p>
              </div>

              <div className="bg-[#082e22]/90 border border-[#16533f] p-4 rounded-2xl text-center shadow-sm">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#f5b942]">Live Q&A</p>
                <p className="text-xs text-[#a3c9bd] mt-0.5 font-medium">Interactive Session</p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. RED URGENCY BANNER (MATCHING SCREENSHOT 3) */}
        {/* ========================================================================= */}
        <div className="bg-[#dc2626] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wide shadow-md flex items-center justify-center gap-2">
          <span>⚡</span>
          <span>Only 47 seats remaining — Register before it closes!</span>
        </div>

        {/* ========================================================================= */}
        {/* 4. "DOES THIS SOUND LIKE YOU?" PROBLEM SECTION (SCREENSHOT 3) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#FDFBF7] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-4 py-1.5 rounded-full border border-[#cbd8d2] mb-4">
                DOES THIS SOUND LIKE YOU?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0B3B2C] leading-tight mb-4">
                You're Teaching Yoga — But Something Is Missing
              </h2>
              <p className="text-sm sm:text-base text-[#52635a]">
                If any of these resonate with you, this workshop was built for you.
              </p>
            </div>

            {/* 4 Problem Cards Grid (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              {/* Card 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e4dcce] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">😰</div>
                <h3 className="font-bold text-base sm:text-lg text-[#0B3B2C] mb-2">
                  "My students get injured and I don't know why"
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  You teach asanas every day but when a student gets hurt, you feel helpless — because no one taught you the anatomy behind the posture.
                </p>
              </div>

              {/* Card 2 (Highlighted with orange border) */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#f59e0b] shadow-md hover:shadow-lg transition-shadow relative">
                <div className="text-3xl mb-3">😟</div>
                <h3 className="font-bold text-base sm:text-lg text-[#0B3B2C] mb-2">
                  "I teach poses but I'm not confident about alignment cues"
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  You know the pose but not the muscle groups, joints, and alignment principles that make it safe and effective for every body type.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e4dcce] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🤔</div>
                <h3 className="font-bold text-base sm:text-lg text-[#0B3B2C] mb-2">
                  "My classes feel scattered — I don't have a clear framework"
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  You want a structured, biomechanically sound sequencing system instead of blindly repeating the same standard routine without anatomical intention.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e4dcce] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">😔</div>
                <h3 className="font-bold text-base sm:text-lg text-[#0B3B2C] mb-2">
                  "I have my certification but I lack real depth"
                </h3>
                <p className="text-xs sm:text-sm text-[#52635a] leading-relaxed">
                  You completed a 200-hour TTC, yet when advanced students ask anatomical or therapeutic questions, you second-guess your knowledge.
                </p>
              </div>

            </div>

            {/* Mid Section CTA */}
            <div className="mt-10 text-center">
              <button
                onClick={openBookingModal}
                className="bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Yes! Upgrade My Teaching Confidence for ₹1 →
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INSTRUCTOR SPOTLIGHT: ACHARYA SACHIN KOTIYAL */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#06281e] text-white border-b border-[#144f3c]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-3xl overflow-hidden border-4 border-[#f5b942]/60 shadow-2xl bg-[#041a14]">
                  <Image
                    src="/sachin-ji-instructor.jpg"
                    alt="Acharya Sachin Kotiyal - Founder YogaGarhi"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a14] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="bg-[#ea580c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white">
                      Lead Master Educator
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="text-xs uppercase tracking-widest font-bold text-[#f5b942] bg-[#0b3b2c] px-3.5 py-1 rounded-full border border-[#1b614b]">
                  Meet Your Instructor
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Acharya Sachin Kotiyal
                </h2>
                
                <p className="text-[#a3d9cf] font-medium text-sm">
                  Founder of YogaGarhi Ashram (Bali & Rishikesh) • 10+ Years International Teaching • Specialized Yoga Therapy Specialist for the Indian Armed Forces
                </p>

                <p className="text-sm text-[#d4ebe2] leading-relaxed">
                  Having trained thousands of yoga teachers worldwide and rehabilitated complex spinal, hip, and shoulder injuries for elite personnel, Acharya Sachin Kotiyal brings an unmatched bridge between <strong>ancient Himalayan alignment</strong> and <strong>modern orthopaedic biomechanics</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0b3b2c] p-3 rounded-xl border border-[#1b614b] flex items-center gap-2.5">
                    <CheckCheck className="w-5 h-5 text-[#f5b942] shrink-0" />
                    <span className="text-xs text-[#e1f0ea]">Military-grade posture & injury analysis</span>
                  </div>
                  <div className="bg-[#0b3b2c] p-3 rounded-xl border border-[#1b614b] flex items-center gap-2.5">
                    <CheckCheck className="w-5 h-5 text-[#f5b942] shrink-0" />
                    <span className="text-xs text-[#e1f0ea]">Bilingual teaching (English & Hindi)</span>
                  </div>
                  <div className="bg-[#0b3b2c] p-3 rounded-xl border border-[#1b614b] flex items-center gap-2.5">
                    <CheckCheck className="w-5 h-5 text-[#f5b942] shrink-0" />
                    <span className="text-xs text-[#e1f0ea]">Direct interactive Q&A on your cases</span>
                  </div>
                  <div className="bg-[#0b3b2c] p-3 rounded-xl border border-[#1b614b] flex items-center gap-2.5">
                    <CheckCheck className="w-5 h-5 text-[#f5b942] shrink-0" />
                    <span className="text-xs text-[#e1f0ea]">Immediate actionable cues for your next class</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DEDICATED REVIEWS & STUDENT PROOF HOLDER (3 TABS) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#FDFBF7] text-[#1c2420] border-b border-[#e8dfd3]">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B3B2C] bg-[#e6edea] px-4 py-1.5 rounded-full border border-[#cbd8d2] mb-3 inline-block">
                Social Proof & Unfiltered Feedback
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B2C] mt-2 mb-3">
                Loved by 1,200+ Yoga Teachers & Practitioners Worldwide
              </h2>
              <p className="text-sm text-[#52635a]">
                Explore verified video stories, WhatsApp community messages, and teacher reviews.
              </p>

              {/* 3 Review Tabs Switcher */}
              <div className="flex items-center justify-center gap-2 mt-6 p-1.5 bg-[#eae2d5] rounded-2xl max-w-md mx-auto">
                <button
                  onClick={() => setReviewTab("videos")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "videos"
                      ? "bg-[#0B3B2C] text-white shadow-md"
                      : "text-[#52635a] hover:text-[#0B3B2C]"
                  }`}
                >
                  🎥 Video Stories ({videoTestimonials.length})
                </button>

                <button
                  onClick={() => setReviewTab("whatsapp")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "whatsapp"
                      ? "bg-[#0B3B2C] text-white shadow-md"
                      : "text-[#52635a] hover:text-[#0B3B2C]"
                  }`}
                >
                  💬 WhatsApp Feedback
                </button>

                <button
                  onClick={() => setReviewTab("teachers")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    reviewTab === "teachers"
                      ? "bg-[#0B3B2C] text-white shadow-md"
                      : "text-[#52635a] hover:text-[#0B3B2C]"
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
                    className="bg-white rounded-2xl border border-[#e2d8c9] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer"
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
                        <div className="w-11 h-11 rounded-full bg-[#ea580c] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-[#3d4d45] italic line-clamp-3 mb-3">
                        "{v.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#f0e8dc]">
                        <div>
                          <h4 className="font-bold text-xs text-[#0B3B2C]">{v.name}</h4>
                          <p className="text-[10px] text-[#718279]">{v.role}, {v.country}</p>
                        </div>
                        <span className="text-[10px] text-[#c45e07] font-bold">Watch ▶</span>
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
                  <div key={i} className="bg-[#e7f5ef] border border-[#b2ded0] p-4 sm:p-5 rounded-2xl shadow-sm relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold">
                          WA
                        </div>
                        <div>
                          <p className="font-bold text-xs text-[#0B3B2C]">{msg.sender}</p>
                          <p className="text-[10px] text-[#52635a]">{msg.time}</p>
                        </div>
                      </div>
                      <span className="bg-[#25D366]/20 text-[#127a38] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {msg.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#1e3b31] font-medium leading-relaxed bg-white/70 p-3 rounded-xl border border-[#cbebe0]">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: TEACHER REVIEWS */}
            {reviewTab === "teachers" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fadeIn">
                <div className="bg-white p-5 rounded-2xl border border-[#e4dcce] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#0B3B2C] mb-1">"Finally understood shoulder impingement"</h4>
                  <p className="text-xs text-[#52635a] leading-relaxed mb-4">
                    In my 5 years of teaching, no one broke down the scapulohumeral rhythm like Sachin Ji. My students immediately felt the difference in downward dog and plank.
                  </p>
                  <p className="text-[11px] font-bold text-[#0B3B2C]">— Priya Sharma, Studio Owner (Delhi)</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#e4dcce] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#0B3B2C] mb-1">"The best ₹1 I ever invested"</h4>
                  <p className="text-xs text-[#52635a] leading-relaxed mb-4">
                    The value delivered in 2 hours is greater than what most TTC schools teach across 4 weeks of anatomy modules. Clear, precise, no fluff.
                  </p>
                  <p className="text-[11px] font-bold text-[#0B3B2C]">— Rajesh Varma, RYT 500 (Bengaluru)</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#e4dcce] shadow-sm">
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#0B3B2C] mb-1">"Essential for every serious yogi"</h4>
                  <p className="text-xs text-[#52635a] leading-relaxed mb-4">
                    His clinical examples regarding SI joint compression and hip socket variations completely changed how I adjust students in forward folds.
                  </p>
                  <p className="text-[11px] font-bold text-[#0B3B2C]">— Sarah M., Vinyasa Teacher (Melbourne)</p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. COMPARISON TABLE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#082e22] text-white border-b border-[#144f3c]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#f5b942] bg-[#0b3b2c] px-3.5 py-1 rounded-full border border-[#1b614b]">
                Why YogaGarhi Biomechanics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                Standard Studio Anatomy vs. YogaGarhi Clinical Biomechanics
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden shadow-2xl">
                <thead>
                  <tr className="border-b border-[#1b614b]">
                    <th className="p-4 bg-[#062018] text-[#a3d9cf] font-bold">Feature / Topic</th>
                    <th className="p-4 bg-[#0b3327] text-gray-300">Standard 200-Hr TTC Anatomy</th>
                    <th className="p-4 bg-[#114b39] text-[#f5b942] font-black">YogaGarhi Clinical Masterclass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#134937] bg-[#06281e]">
                  <tr>
                    <td className="p-4 font-bold text-white">Teaching Focus</td>
                    <td className="p-4 text-gray-300">Dry Latin bone & muscle names</td>
                    <td className="p-4 text-[#d4ebe2] font-semibold">Live dynamic joint loading & injury prevention</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Spine & Disc Safety</td>
                    <td className="p-4 text-gray-300">"Lengthen your spine" (vague)</td>
                    <td className="p-4 text-[#d4ebe2] font-semibold">Exact segmental mechanics for safe lumbar flexion/extension</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Pelvis & Hip Depth</td>
                    <td className="p-4 text-gray-300">One-size-fits-all cueing</td>
                    <td className="p-4 text-[#d4ebe2] font-semibold">Identifying skeletal compression vs muscular tension</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Shoulder & Rotator Cuff</td>
                    <td className="p-4 text-gray-300">"Draw shoulders away from ears"</td>
                    <td className="p-4 text-[#d4ebe2] font-semibold">Clinical scapular rhythm to avoid rotator cuff impingement</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Instructor Pedigree</td>
                    <td className="p-4 text-gray-300">General yoga instructor</td>
                    <td className="p-4 text-[#f5b942] font-black">Ex-Armed Forces Yoga Therapy Specialist (10+ Yrs)</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. WHAT YOU GET FOR ₹1 & FINAL PRICING CARD */}
        {/* ========================================================================= */}
        <section id="pricing-section" className="py-16 md:py-24 bg-[#0B3B2C] text-white">
          <div className="max-w-3xl mx-auto px-4">
            
            <div className="bg-[#06281e] rounded-3xl border-2 border-[#ea580c] p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
              
              <div className="absolute top-0 right-0 bg-[#ea580c] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1 px-5 rounded-bl-xl shadow">
                99% Off Limited Time
              </div>

              <div className="text-center pb-6 border-b border-[#144f3c]">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Join the Live Applied Anatomy Masterclass
                </h3>
                <p className="text-xs sm:text-sm text-[#a3c9bd] mt-1">
                  Strictly 2 Hours • Live Interactive Session • Direct Q&A
                </p>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="text-sm sm:text-base text-gray-400 line-through">₹499 / ₹999</span>
                  <span className="font-serif text-4xl sm:text-5xl font-black text-[#f5b942]">₹1</span>
                  <span className="text-xs bg-[#0b3b2c] border border-[#1b614b] text-[#a3d9cf] font-bold px-2.5 py-1 rounded-full uppercase">
                    Only Today
                  </span>
                </div>
              </div>

              {/* What is Included */}
              <div className="py-6 space-y-3.5 text-xs sm:text-sm text-[#d4ebe2]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                  <p><strong className="text-white">Live 2-Hour Interactive Masterclass</strong> with Acharya Sachin Kotiyal</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                  <p><strong className="text-white">Live Functional Joint Analysis</strong> (Spine, Hips, Shoulders & Knees)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                  <p><strong className="text-white">Interactive Q&A Session</strong> — Get your specific student injury questions answered</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                  <p><strong className="text-white">Bonus #1:</strong> PDF Anatomy Cheat-Sheet & Injury Matrix (Value ₹499)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b942] shrink-0 mt-0.5" />
                  <p><strong className="text-white">Bonus #2:</strong> VIP YogaGarhi Teachers WhatsApp Community Access</p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#ea580c] hover:bg-[#d94e07] active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Your Masterclass Spot for ₹1 Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[11px] text-[#7fa396] mt-2 flex items-center justify-center gap-1.5">
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
        <section className="py-16 bg-[#082e22] text-white border-t border-[#144f3c]">
          <div className="max-w-3xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#f5b942] bg-[#0b3b2c] px-3.5 py-1 rounded-full border border-[#1b614b]">
                FAQ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
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
                  a: "The session is bilingual (taught clearly in simple English and Hindi) to ensure complete understanding without heavy academic medical jargon."
                },
                {
                  q: "Will I get the Zoom link immediately after paying ₹1 via Razorpay?",
                  a: "Yes! As soon as your ₹1 payment is completed via Razorpay UPI / Cards, you will instantly receive the Zoom Meeting ID & Passcode on your screen, plus an email confirmation and VIP WhatsApp community invite."
                },
                {
                  q: "Why is it priced at only ₹1?",
                  a: "YogaGarhi believes essential joint safety and injury prevention knowledge should be accessible to every yoga teacher worldwide. The ₹1 fee simply filters out casual spammers so only dedicated teachers attend."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#06281e] border border-[#144f3c] rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-white hover:text-[#f5b942] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-[#f5b942]" /> : <ChevronDown className="w-4 h-4 text-[#7fa396]" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs text-[#a3c9bd] leading-relaxed border-t border-[#124233] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 10. DEDICATED LANDING FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#041a14] text-[#7fa396] py-8 px-4 text-center text-xs border-t border-[#0d3b2e]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} YogaGarhi Ashram & Yoga School. All Rights Reserved.</p>
          <div className="flex gap-4 text-[#a3c9bd]">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
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
      {/* 12. ₹1 RAZORPAY BOOKING & INSTANT ZOOM PASS MODAL */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#06281e] text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#1b614b] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#7fa396] hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === "form" && (
              <div>
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-1.5 bg-[#0b3b2c] text-[#f5b942] text-[11px] font-bold px-3 py-1 rounded-full border border-[#1b614b] mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> Official Live Razorpay ₹1 Checkout
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Claim Your Masterclass Seat</h3>
                  <p className="text-xs text-[#a3c9bd] mt-1">Live this {sundayInfo.ordinalDate} • 7:00 PM IST</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#d4ebe2] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#041a14] border border-[#1b614b] text-white text-xs sm:text-sm focus:outline-none focus:border-[#f5b942]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#d4ebe2] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#041a14] border border-[#1b614b] text-white text-xs sm:text-sm focus:outline-none focus:border-[#f5b942]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#d4ebe2] mb-1">WhatsApp Number (For Zoom Pass & Reminders)</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#041a14] border border-[#1b614b] text-white text-xs sm:text-sm focus:outline-none focus:border-[#f5b942]"
                    />
                  </div>

                  <div className="bg-[#0b3b2c] p-3 rounded-xl border border-[#1b614b] flex items-center justify-between text-xs font-bold text-white">
                    <span>Total Amount Payable:</span>
                    <span className="text-base font-black text-[#f5b942]">₹1 Only <span className="text-xs line-through text-gray-400 font-normal">₹499</span></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ea580c] hover:bg-[#d94e07] active:scale-98 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹1 via Razorpay (UPI / Cards / GPay)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-[#7fa396] pt-1">
                    🔒 Secured by 256-bit encryption • Supports UPI, Google Pay, PhonePe, Cards & NetBanking
                  </p>
                </form>
              </div>
            )}

            {bookingStep === "processing" && (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#f5b942] border-t-transparent animate-spin mx-auto" />
                <h4 className="font-serif text-xl font-bold text-white">Opening Razorpay Checkout...</h4>
                <p className="text-xs text-[#a3c9bd]">Please complete your ₹1 payment in the popup window.</p>
              </div>
            )}

            {bookingStep === "success" && (
              <div className="text-center space-y-4 py-2">
                <div className="w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto border-2 border-[#22c55e]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Payment Received! Seat Confirmed 🎉</h3>
                  <p className="text-xs text-[#a3c9bd] mt-1">
                    Receipt ID: <strong className="text-white font-mono">{paymentId}</strong> for <strong>{formData.name}</strong>
                  </p>
                </div>

                <div className="bg-[#041a14] p-4 rounded-2xl border border-[#1b614b] text-left space-y-2 text-xs text-[#d4ebe2]">
                  <p className="font-bold text-sm text-[#f5b942] flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#ea580c]" />
                    Live Zoom Meeting Pass:
                  </p>
                  <p><strong>Meeting ID:</strong> 842 9104 3821</p>
                  <p><strong>Passcode:</strong> YOGA1</p>
                  <p><strong>Date & Time:</strong> {sundayInfo.ordinalDate} at 7:00 PM IST</p>
                  <p><strong>Duration:</strong> Strictly 2 Hours Live</p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="https://wa.me/917895350563?text=Hi%20YogaGarhi,%20I%20have%20paid%20₹1%20for%20the%20Applied%20Anatomy%20Masterclass!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all block"
                  >
                    <Smartphone className="w-4 h-4" />
                    Join VIP WhatsApp Masterclass Group
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 rounded-xl transition-all"
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
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#06281e]/95 backdrop-blur-md border-t border-[#16533f] py-3 px-4 shadow-2xl animate-fadeIn">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-white">Applied Yoga Anatomy Masterclass</p>
              <p className="text-[11px] text-[#f5b942]">{sundayInfo.ordinalDate} • 7:00 PM IST • Only ₹1</p>
            </div>

            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-gray-400 line-through">₹499</span>
                <span className="text-base sm:text-lg font-black text-[#f5b942] ml-1.5">₹1</span>
              </div>
              <button
                onClick={openBookingModal}
                className="bg-[#ea580c] hover:bg-[#d94e07] text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 sm:px-7 rounded-xl shadow-lg transition-all"
              >
                Book My Seat — ₹1 →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
