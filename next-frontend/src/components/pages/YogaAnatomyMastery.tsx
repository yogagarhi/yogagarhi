"use client";

import { useState } from "react";
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
  ChevronDown,
  Play,
  Heart
} from "lucide-react";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { getCloudinaryImage } from "@/utils/cloudinary";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
const instructorAnatomy = getCloudinaryImage("instructor-anatomy.png");
const childPose = getCloudinaryImage("child-pose.png");
const mindfulness = getCloudinaryImage("gallery-10.jpg");

export default function YogaAnatomyMastery() {
  const { setShowQuickEnquiry } = useQuickEnquiry();

  const SectionHeading = ({ children, centered = true, light = false }: { children: React.ReactNode, centered?: boolean, light?: boolean }) => (
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${centered ? 'text-center' : ''} ${light ? 'text-white' : 'text-foreground'}`}>
      {children}
    </h2>
  );

  return (
    <Layout>
      {/* 🧘‍♂️ HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Yoga Practice"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 px-4 py-2 rounded-full text-accent-foreground font-semibold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">New Core Positioning</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Master Yoga Through <span className="text-accent italic">Anatomy</span>, Not Guesswork
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-4 italic opacity-90 border-l-4 border-accent pl-6 py-2">
              "Asana brings awareness — anatomy gives it direction."
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/80">
              Understand your body. Transform your practice. Teach with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="cta" 
                className="text-lg group"
                onClick={() => setShowQuickEnquiry(true)}
              >
                Book Your Free Live Demo Session Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 🌿 CORE PHILOSOPHY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src={childPose}
                  alt="Yoga Awareness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-xl hidden md:block max-w-[280px]">
                <p className="text-primary-foreground font-heading text-lg italic leading-relaxed">
                  "At Yogagarhi, we bridge the gap between what you feel and what is happening."
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Core Philosophy</span>
                <SectionHeading centered={false}>
                  Asana Brings Awareness. <br/>
                  <span className="text-primary">We Teach You How to Understand It.</span>
                </SectionHeading>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In yoga, awareness begins with movement. 
                  But without understanding the body, that awareness stays incomplete.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-2xl border border-secondary">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-foreground">What you feel in asana</span>
                  </div>
                  <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-2xl border border-primary/10 italic">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-primary">And what is actually happening inside your body</span>
                  </div>
                </div>
                
                <p className="font-bold text-foreground text-xl pt-4">
                  ✨ This is where real transformation begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌿 TRUST + AUTHORITY */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading>Why Yogagarhi?</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            We don’t believe in memorizing muscles. We believe in practical, experiential wisdom.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Asana brings awareness", color: "text-amber-500" },
              { icon: Brain, title: "Anatomy brings clarity", color: "text-blue-500" },
              { icon: Zap, title: "Application brings transformation", color: "text-orange-500" }
            ].map((pillar, i) => (
              <div key={i} className="bg-card p-10 rounded-3xl shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground">Deeply practical and rooted in real yoga practice.</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 bg-primary rounded-[2rem] text-white">
            <p className="text-2xl font-heading font-medium mb-8">
              ✨ We trust the depth of our knowledge — so we invite you to experience it yourself.
            </p>
            <Button 
              size="lg" 
              variant="cta" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Join a Free Live Demo Session
            </Button>
          </div>
        </div>
      </section>

      {/* 🔀 CHOOSE YOUR PATH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Two Levels. One Deep Understanding.</span>
            <SectionHeading>Choose Your Path</SectionHeading>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Level 1 */}
            <div className="border-2 border-secondary rounded-[2.5rem] overflow-hidden flex flex-col hover:border-primary/20 transition-colors">
              <div className="bg-secondary p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <span className="font-bold text-xl">01</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary">$99</span>
                    <span className="block text-xs uppercase tracking-widest font-bold opacity-60">Investment</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Level 1 – Foundation Anatomy</h3>
                <p className="text-primary font-medium italic">Perfect for: Beginners & those who feel confused in yoga practice</p>
              </div>
              
              <div className="p-10 flex-grow space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    What You’ll Experience:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Build body awareness through asana",
                      "Understand what you feel in each pose",
                      "Develop safe & confident practice"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-tight">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-secondary">
                  <h4 className="font-bold text-lg mb-6 text-primary">🔥 Interesting Topics:</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Why Your Hamstrings Feel Tight",
                      "Awareness vs Forcing Flexibility",
                      "Spine Basics",
                      "Hips: What You Think vs Reality",
                      "Knee Pain Prevention",
                      "Breath & Awareness",
                      "Balance Through Awareness"
                    ].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-10 pt-0">
                <Button className="w-full h-14 text-lg" onClick={() => setShowQuickEnquiry(true)}>
                  Book Now
                </Button>
              </div>
            </div>

            {/* Level 2 */}
            <div className="border-2 border-primary/20 bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl">
              <div className="bg-primary p-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary">
                    <span className="font-bold text-xl">02</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-white">$199</span>
                    <span className="block text-xs uppercase tracking-widest font-bold opacity-60">Investment</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Level 2 – Applied Anatomy & Biomechanics</h3>
                <p className="text-accent font-medium italic">Perfect for: Teachers who want to go deeper</p>
              </div>
              
              <div className="p-10 flex-grow space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-primary">
                    <Target className="w-5 h-5 text-primary" />
                    What You’ll Master:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Turn awareness into intelligent teaching",
                      "Apply biomechanics in real yoga",
                      "Refine alignment beyond surface-level cues"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80 leading-tight">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-primary/10">
                  <h4 className="font-bold text-lg mb-6 text-primary">🔥 Advanced Topics:</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Glutes & Back: Awareness in Backbends",
                      "Deep Core Activation",
                      "Conscious Chaturanga",
                      "Hip Joint Reality",
                      "Spinal Segmentation",
                      "Fascia & Awareness",
                      "Load vs Mobility",
                      "Alignment vs Awareness"
                    ].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-10 pt-0">
                <Button variant="cta" className="w-full h-14 text-lg" onClick={() => setShowQuickEnquiry(true)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 COURSE APPROACH */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeading light>From Awareness to Understanding</SectionHeading>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { title: "Awareness", desc: "Asana builds awareness", icon: Activity },
                { title: "Understanding", desc: "Anatomy explains that awareness", icon: Brain },
                { title: "Mastery", desc: "Application transforms your teaching", icon: Zap }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-xl relative">
                    <step.icon className="w-10 h-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground border-2 border-primary">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {["Learn through movement", "Feel before you analyze", "Understand your body's language"].map((tag, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <span className="font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👨‍🏫 TEACHER SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading centered={false}>
                Learn From Teachers Who <br/>
                <span className="text-primary">Go Beyond Theory</span>
              </SectionHeading>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our teachers don’t just explain anatomy — <br/>
                <span className="font-bold text-foreground">they help you feel it inside your practice.</span>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Yoga teaching excellence",
                  "Functional anatomy experts",
                  "Applied biomechanics focus",
                  "Years of real-world research"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-secondary p-8 rounded-3xl border border-secondary">
                <p className="text-lg font-bold mb-4">They guide you from:</p>
                <div className="flex items-center gap-3 text-primary text-xl font-heading">
                  <span>Awareness</span>
                  <ArrowRight className="w-5 h-5 opacity-50" />
                  <span>Understanding</span>
                  <ArrowRight className="w-5 h-5 opacity-50" />
                  <span className="text-accent underline underline-offset-8">Teaching Mastery</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image
                  src={instructorAnatomy}
                  alt="Anatomy Instructor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-secondary max-w-[200px]">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold leading-tight">Expert Guidance for all levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 DEMO SESSION */}
      <section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-secondary relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-[10rem] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 space-y-8">
                <div>
                  <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">High-Conversion Experience</span>
                  <SectionHeading centered={false}>Experience the Depth Yourself</SectionHeading>
                </div>
                
                <p className="text-xl text-muted-foreground italic">
                  "If you experience it once, you’ll understand the difference."
                </p>
                
                <div className="space-y-4">
                  <p className="font-bold flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary fill-primary" />
                    In this session:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Experience how awareness is built through asana",
                      "Understand the science behind what you feel",
                      "Learn practical insights instantly"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4 pt-4">
                  <Button size="xl" className="w-full text-lg shadow-xl hover:shadow-2xl transition-all" onClick={() => setShowQuickEnquiry(true)}>
                    Book Your Free Demo Session Today
                  </Button>
                  <p className="text-center text-muted-foreground">
                    Or reply <span className="font-bold text-foreground">"YES"</span> to reserve your spot via WhatsApp
                  </p>
                </div>
              </div>
              
              <div className="relative min-h-[400px] hidden lg:block">
                <Image
                  src={mindfulness}
                  alt="Yoga Session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 OUTCOME */}
      <section className="py-24 bg-white border-t border-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <SectionHeading>After This Course, You Will:</SectionHeading>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Practice with deep awareness",
              "Teach with clarity & confidence",
              "Understand the science behind yoga",
              "Prevent injuries with intelligence"
            ].map((outcome, i) => (
              <div key={i} className="flex items-center gap-4 bg-secondary/30 p-6 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
                </div>
                <span className="font-bold text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚡ FINAL CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading light>Awareness is the First Step. <br/> Understanding is the Next.</SectionHeading>
          
          <div className="flex flex-col gap-4 mt-12 items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">May 2026 Batch Enrollment Open</span>
              </div>
            </div>
            
            <Button 
              size="xl" 
              variant="cta" 
              className="bg-accent text-accent-foreground px-12 group h-20 text-xl font-bold"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Book Your FREE Demo Session Now
              <Play className="ml-3 w-6 h-6 fill-accent-foreground group-hover:scale-110 transition-transform" />
            </Button>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-70">
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-2xl">800+</h4>
                <span className="text-sm uppercase tracking-tighter">Students Taught</span>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-2xl">Certified</h4>
                <span className="text-sm uppercase tracking-tighter">Yoga Alliance RYS</span>
              </div>
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <h4 className="font-bold text-2xl">Infinite</h4>
                <span className="text-sm uppercase tracking-tighter">Deep Awareness</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function UserCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}
