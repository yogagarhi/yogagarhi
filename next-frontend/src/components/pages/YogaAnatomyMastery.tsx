"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Brain,
  ShieldCheck,
  Activity,
  Play,
  Heart,
  BookOpen,
  Clock,
  Award,
  Video,
  Users,
  ChevronDown,
  Globe
} from "lucide-react";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { getCloudinaryImage } from "@/utils/cloudinary";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
const anatomyImg = getCloudinaryImage("instructor-anatomy.png");
const sachinJiImg = getCloudinaryImage("founder-image.png");

const founderAchievements = [
  { icon: Users, label: "2500+ Students Trained" },
  { icon: Award, label: "E-RYT 500 & Master in Yoga" },
  { icon: Clock, label: "8+ Years Teaching" },
  { icon: Heart, label: "Specialization in Asana & Pranayama" },
];

export default function YogaAnatomyMastery() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const [founderExpanded, setFounderExpanded] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState<number | null>(null);

  useEffect(() => {
    setSeatsLeft(Math.floor(Math.random() * 5) + 1);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SectionHeading = ({ children, centered = true, light = false }: { children: React.ReactNode, centered?: boolean, light?: boolean }) => (
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${centered ? 'text-center' : ''} ${light ? 'text-white' : 'text-foreground'}`}>
      {children}
    </h2>
  );

  return (
    <Layout>
      {/* 🧘‍♂️ ONLINE COURSES HERO HUB */}
      <section className="relative min-h-[90vh] flex items-center py-24 bg-gradient-to-br from-[#1a4a42] to-[#0f2e29] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-30 pointer-events-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Yoga Anatomy Mastery</h1>
          
          {/* Founder's Message Card */}
          <div className="bg-[#fcf8f2] text-foreground rounded-3xl p-8 md:p-12 shadow-2xl w-full border border-accent/20 h-full flex flex-col justify-center">
            <div className="flex flex-col text-center lg:text-left gap-8">
              {/* Photo & Heading */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-accent shadow-xl">
                  <Image
                    src={sachinJiImg}
                    alt="Sachin Ji"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 sm:text-left">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Why Join Us?
                  </h2>
                </div>
              </div>
              
              {/* Message */}
              <div className="flex-1 space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Be guided through the fundamental concepts of yoga anatomy.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We know anatomy can feel overwhelming at first. That’s why we created this course to make anatomy feel simple, practical, and deeply connected to your yoga journey.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  This live online course is designed to help you understand the body with more awareness, clarity, and confidence in your practice.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  There is no perfect moment to begin learning anatomy. You simply have to start the journey.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Start your journey with Yogagarhi today.
                </p>
                
                <div className="pt-4">
                  <span className="font-serif italic text-4xl text-accent block mb-1">Sachin Ji</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-primary/60">Founder, Yogagarhi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Selection Cards */}
          <div className="flex flex-col gap-8 w-full h-full justify-between">
            {/* 15 Hour Course */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-[300px] flex flex-col justify-end p-8 border border-white/10 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 z-0">
                <Image
                  src={anatomyImg}
                  alt="15 Hrs Course"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                  <Clock className="w-3.5 h-3.5" /> 15 Hours
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight group-hover:text-amber-400 transition-colors">
                    15 Hrs Functional Yoga Anatomy Course
                  </h3>
                  <div className="mt-3 inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-2xl font-bold shadow-lg border border-accent/20">
                    $149
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {[
                    "15 live sessions",
                    "1 hour interactive applied anatomy live session",
                    "10 minutes for Q & A",
                    "Comprehensive Study material for yoga teachers & practitioners",
                    "Yoga Alliance certification on completion",
                    "Perfect for beginners or new anatomy students & teachers"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-white/90">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg" onClick={() => window.open("https://youtu.be/4c_U9bEJSNo?si=IsW2XCl6Uxad4STh", "_blank")}>
                  Watch Demo Session
                </Button>
              </div>
            </div>

            {/* 25 Hour Course */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-[300px] flex flex-col justify-end p-8 border border-white/10 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 z-0">
                <Image
                  src={heroImage}
                  alt="25 Hrs Course"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                  <Clock className="w-3.5 h-3.5" /> 25 Hours
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight group-hover:text-amber-400 transition-colors">
                    25 Hrs Functional Yoga Anatomy Course
                  </h3>
                  <div className="mt-3 inline-block bg-amber-400 text-black px-4 py-1.5 rounded-full text-2xl font-bold shadow-lg border border-amber-300">
                    $289
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {[
                    "20 live sessions",
                    "1:15 hour interactive applied anatomy live session",
                    "10 minutes for Q & A",
                    "Comprehensive Study material for yoga teachers",
                    "Yoga Alliance certification on completion",
                    "Perfect for a yoga teacher who wants to become a yoga therapist & deep down into more Alignment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-white/90">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg" onClick={() => window.open("https://youtu.be/4c_U9bEJSNo?si=IsW2XCl6Uxad4STh", "_blank")}>
                  Watch Demo Session
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🎥 VIDEOS SECTION */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading>Experience Our Teacher & Hear Our Students' Voices</SectionHeading>
          
          {/* Horizontal Videos */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-border/50">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0-uWiqJgw7Y" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-border/50">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ipnGYnma1mI" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Vertical Shorts */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
            <div className="w-full sm:w-72 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-border/50 mx-auto sm:mx-0">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/OGmWr_aC4WA" 
                title="YouTube Shorts" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="w-full sm:w-72 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-border/50 mx-auto sm:mx-0">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ta-5jHBCpKY" 
                title="YouTube Shorts" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 📅 UPCOMING DATES & SCHEDULE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="bg-amber-50 rounded-[3rem] p-10 md:p-16 border border-amber-200/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                <Clock className="w-4 h-4" /> Schedule
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-10">
                Upcoming Dates & Schedule
              </h2>
              
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 flex flex-col gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">Batch Starts</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Both 15 Hrs & 25 Hrs Functional Anatomy courses begin on the <strong>1st of every month</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 flex flex-col gap-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Activity className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">Weekly Classes</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Live interactive sessions run from <strong>Monday to Friday</strong>. <br/>
                      <strong>Saturday & Sunday</strong> are dedicated to revision and assignments.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 flex flex-col gap-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">Flexible Timings</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Our batch timings are updated regularly to create the best learning experience for students <strong>worldwide</strong>. Reach out to explore upcoming schedules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📚 CURRICULUM (TWO CARDS) */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 15 Hours Card */}
            <div className="relative bg-white rounded-[2rem] shadow-xl border border-primary/10 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 w-full bg-gradient-to-r from-primary/60 to-primary"></div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 w-fit">
                  Foundational
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-3">15 Hours</h3>
                <h4 className="text-xl font-bold text-primary mb-5">Functional Yoga Anatomy</h4>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  A foundational journey into understanding the body through the lens of yoga. Perfect for yoga students and teachers who want clarity in movement, alignment, and awareness.
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 flex-grow border border-slate-100">
                  <h5 className="font-bold text-base mb-5 text-foreground flex items-center gap-2 pb-3 border-b border-slate-200">
                    <BookOpen className="w-5 h-5 text-primary" /> You will explore:
                  </h5>
                  <ul className="space-y-3.5">
                    {[
                      "The language of movement in yoga",
                      "Spine wisdom & postural awareness",
                      "Joint stability vs mobility",
                      "Different types of stretching & how to apply them in yoga classes",
                      "Functional yoga sequencing for balanced practice",
                      "Breath, fascia & body connection",
                      "Functional alignment in asana",
                      "Understanding pain & injury prevention",
                      "The anatomy of forward folds, twists & backbends",
                      "Building awareness through mindful movement"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <div className="mt-0.5 bg-primary/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Action */}
                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center">
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-5xl font-heading font-bold text-primary">$149</span>
                    <span className="text-muted-foreground font-medium pb-1">USD</span>
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl rounded-2xl py-7 text-lg" onClick={() => setShowQuickEnquiry(true)}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* 25 Hours Card */}
            <div className="relative bg-white rounded-[2rem] shadow-xl border border-amber-500/20 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 w-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 w-fit">
                  Advanced Immersion
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-3">25 Hours</h3>
                <h4 className="text-xl font-bold text-amber-600 mb-5">Functional Yoga Anatomy</h4>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  A deeper immersion for dedicated practitioners and yoga teachers who want to understand the body not only anatomically — but energetically and therapeutically within the practice of yoga.
                </p>
                
                <div className="bg-amber-50/50 rounded-2xl p-6 flex-grow border border-amber-100/50">
                  <h5 className="font-bold text-base mb-5 text-foreground flex items-center gap-2 pb-3 border-b border-amber-200/50">
                    <Sparkles className="w-5 h-5 text-amber-500" /> Everything from 15-hour, plus:
                  </h5>
                  <ul className="space-y-3.5">
                    {[
                      "Bandhas & the energetic locks of the body",
                      "Yoga therapy based functional understanding",
                      "Nervous system regulation through yoga",
                      "Functional sequencing for different body types",
                      "The biomechanics of inversions & arm balances",
                      "Anatomy of pranayama & diaphragmatic breathing",
                      "Fascia lines & energetic movement pathways",
                      "Understanding compression vs limitation in asana",
                      "Yoga for longevity & sustainable practice",
                      "Core intelligence & bandha integration",
                      "Functional anatomy for teaching safely & confidently",
                      "Reading bodies with deeper awareness as a teacher"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <div className="mt-0.5 bg-amber-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-amber-600" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Action */}
                <div className="mt-8 pt-8 border-t border-amber-100/50 flex flex-col items-center">
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-5xl font-heading font-bold text-amber-600">$289</span>
                    <span className="text-muted-foreground font-medium pb-1">USD</span>
                  </div>
                  <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-xl rounded-2xl py-7 text-lg" onClick={() => setShowQuickEnquiry(true)}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16 bg-white/50 p-8 rounded-3xl border border-primary/10">
            <p className="text-2xl md:text-3xl font-heading font-semibold text-primary italic leading-relaxed">
              "This is not memorizing anatomy.<br/>
              This is learning to understand the body through the wisdom of yoga."
            </p>
          </div>

          {/* Still Confused / Watch Demo */}
          <div className="max-w-xl mx-auto text-center mt-12 bg-white/80 p-8 md:p-10 rounded-[2rem] border border-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-heading">Still Confused?</h4>
              <p className="text-muted-foreground mb-8 text-lg">Watch our free demo session to experience our teaching style.</p>
              <a href="https://youtu.be/4c_U9bEJSNo?si=IsW2XCl6Uxad4STh" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold rounded-full px-8 py-7 flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Watch Demo Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 WHO IS THIS COURSE FOR? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src={anatomyImg}
                  alt="Yoga Anatomy Students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-3xl shadow-xl border border-accent/20 hidden md:block">
                <p className="text-accent-foreground font-bold text-lg leading-tight">
                  For Teachers, Students,<br/> & Movement Explorers
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <SectionHeading centered={false}>Who Is This Course For?</SectionHeading>
                <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                  Whether you are guiding others or deepening your own practice, this course brings crucial clarity.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Yoga Teachers", desc: "who want deeper anatomical clarity." },
                  { title: "Yoga Students", desc: "who want to avoid injuries and practice safely." },
                  { title: "Fitness Professionals", desc: "exploring the science of yoga and movement." },
                  { title: "Movement Enthusiasts", desc: "anyone serious about understanding body movement." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1 shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 WHY JOIN & OUTCOMES */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-12">
            <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
            <SectionHeading light>Why Join This Course?</SectionHeading>
            <p className="text-2xl md:text-3xl font-heading font-medium leading-relaxed italic mt-8 text-white/90">
              "Because yoga is not about achieving shapes — it’s about understanding your body and moving with awareness."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Teach with confidence", icon: Award },
              { title: "Practice without fear of injury", icon: ShieldCheck },
              { title: "See yoga through a scientific lens", icon: Brain }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧘‍♂️ TEACHER SECTION */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image Column */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={sachinJiImg}
                    alt="Yogacharya Sachin - Founder of YogaGarhi"
                    className="w-full h-auto object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float-ultra-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Founder & Lead Teacher</p>
                      <p className="font-heading text-lg font-semibold text-foreground">YogaGarhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div>
                <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Meet The Teacher Behind YogaGarhi
                </span>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Sachin Ji
                </h2>
                <p className="text-primary font-medium text-lg mb-6">Founder & Lead Teacher, YogaGarhi</p>

                <div className="space-y-5 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Born and raised in the sacred land of Devprayag India, where Mother Ganga takes her first divine form,
                    Sachin Ji's journey into yoga was not a choice but a calling. Growing up amidst rivers, temples, and the
                    quiet discipline of a yogic lifestyle, yoga became woven into his breath, his thoughts, and his way of living.
                  </p>

                  {founderExpanded && (
                    <>
                      <p>
                        With over 8 years of dedicated teaching experience at renowned yoga institutions in Rishikesh,
                        Sachin Ji has guided more than 2,500 students through Yoga Teacher Training Courses and intensive
                        practice programs. Each student, for him, is not a number but a soul on a unique journey. His teaching
                        is shaped by deep traditional roots, supported by modern clarity holding 200-hour and 300-hour YTTC
                        certifications along with a Master's Degree in Yogic Sciences.
                      </p>

                      <p>
                        As the founder of YogaGarhi, Sachin Ji envisioned a space where yoga is taught with honesty, depth,
                        and respect for its ancient lineage—free from shortcuts and commercial noise. His specialization in
                        Asana and Pranayama reflects his belief that the body is a temple and the breath is the bridge to
                        inner stillness. His classes are known for their personal attention, precise alignment, soulful silence,
                        and transformative energy.
                      </p>

                      <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                        "Students often say that learning with Sachin Ji feels less like attending a class and more like
                        being gently guided back to oneself."
                      </p>
                    </>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setFounderExpanded(!founderExpanded)}
                  className="flex items-center gap-1 mb-8 text-primary font-medium hover:underline transition-colors"
                >
                  {founderExpanded ? 'Read Less' : 'Read More'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${founderExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3">
                  {founderAchievements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Sticky Footer */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-border/50 p-4 z-50 transition-transform duration-500 transform ${showSticky ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-red-600 animate-pulse" />
            </div>
            <div>
              <p className="text-foreground font-bold text-sm md:text-base">
                Hurry! Only <span className="text-red-600 text-lg md:text-xl font-extrabold">{seatsLeft}</span> seats left for the upcoming batch.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 sm:flex-none border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000]/10 font-bold"
              onClick={() => window.open("https://youtu.be/4c_U9bEJSNo?si=IsW2XCl6Uxad4STh", "_blank")}
            >
              <Play className="w-4 h-4 mr-2" /> Watch Free Demo
            </Button>
            <Button 
              size="lg" 
              className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

    </Layout>
  );
}
