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
  Play,
  Heart,
  BookOpen,
  Clock,
  Award,
  Video,
  Users,
  ChevronDown
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

  const SectionHeading = ({ children, centered = true, light = false }: { children: React.ReactNode, centered?: boolean, light?: boolean }) => (
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${centered ? 'text-center' : ''} ${light ? 'text-white' : 'text-foreground'}`}>
      {children}
    </h2>
  );

  return (
    <Layout>
      {/* 🧘‍♂️ HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={heroImage}
            alt="Functional Anatomy of Yoga"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-30 text-white pointer-events-auto">
          <div className="max-w-3xl pt-20 pb-16 lg:pb-0">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 px-4 py-2 rounded-full text-accent font-semibold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">Yogagarhi Presents</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Functional <span className="text-accent italic">Anatomy</span> of Yoga
            </h1>
            
            <p className="text-2xl md:text-3xl font-medium mb-6 text-amber-400">
              25-Hour Functional Yoga Anatomy Course
            </p>

            <p className="text-xl md:text-2xl font-medium mb-4 italic opacity-90 border-l-4 border-accent pl-6 py-2">
              "Understand the 'Why' Behind Every Asana"
            </p>

            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Move beyond simply practicing yoga — start understanding the science of movement, alignment, and the body. We are excited to offer our 25-hour Functional Anatomy of Yoga Course, designed to help you build a deep, practical understanding of how the body moves in yoga — so you can practice and teach safely, intelligently, and effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-50">
              <Button
                size="xl"
                variant="cta"
                className="text-lg group bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                onClick={() => setShowQuickEnquiry(true)}
              >
                Book Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 COURSE HIGHLIGHTS */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Video, title: "20 Live Sessions", desc: "Interactive classes" },
                { icon: Clock, title: "25 Hours", desc: "Total duration" },
                { icon: Activity, title: "All Levels", desc: "Beginner to Intermediate" },
                { icon: Award, title: "Yoga Alliance", desc: "Globally Recognized" },
                { icon: BookOpen, title: "Study Materials", desc: "Plus practical assignments" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📚 WHAT YOU WILL LEARN (CURRICULUM) */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Curriculum</span>
            <SectionHeading>What You Will Learn & Experience</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Module 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Foundations of Functional Yoga</h3>
              <ul className="space-y-3">
                {[
                  "Understanding functional anatomy in yoga",
                  "Basics of biomechanics and joint movement",
                  "How alignment differs from person to person"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Spine & Postural Intelligence</h3>
              <ul className="space-y-3">
                {[
                  "Natural curves of the spine & their importance",
                  "Can the mid-back really extend? (Thoracic mechanics)",
                  "Spinal rhythm in yoga movements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Joint Mechanics & Injury Prevention</h3>
              <ul className="space-y-3">
                {[
                  "How joints actually move in asanas",
                  "Understanding SI joint dysfunction",
                  "Preventing injuries through smarter alignment",
                  "Safe transitions between poses"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deep Dive into Key Yoga Poses</h3>
              <ul className="space-y-3">
                {[
                  "How to teach and align Trikonasana (Triangle Pose)",
                  "Understanding limitations in Padmasana (Lotus Pose)",
                  "Why Padahastasana isn't for everyone",
                  "Posture breakdowns with real-life examples"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hip & Pelvis Mastery</h3>
              <ul className="space-y-3">
                {[
                  "How to open hips naturally (without force)",
                  "Hip dominance vs knee dominance explained",
                  "The pelvis as a 'bowl' — understanding all movements: Anterior, Posterior, Lateral tilt, Rotation",
                  "How pelvic positioning affects your entire practice"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Muscles, Stretching & Control</h3>
              <ul className="space-y-3">
                {[
                  "Active vs passive stretching",
                  "When and how to use active stretching safely",
                  "Muscle engagement for stability and strength",
                  "Building control instead of forcing flexibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module 7 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-elevated transition-shadow border border-primary/10 md:col-span-2 lg:col-span-3 lg:w-2/3 mx-auto">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Teaching Skills</h3>
              <ul className="space-y-3">
                {[
                  "Posture analysis and correction techniques",
                  "Understanding individual body differences",
                  "How to guide students safely in group classes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
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

      {/* 🎥 VIDEOS SECTION */}
      <section className="py-24 bg-white">
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

      {/* ⚡ FINAL CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeading>Join Us & Transform Your Understanding of Yoga</SectionHeading>
          <p className="text-xl text-muted-foreground mt-4 mb-10">
            Build a strong anatomical foundation and take your practice or teaching to the next level with Yogagarhi.
          </p>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-primary/10 max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold mb-2">Course Fee</h3>
            <p className="text-5xl font-heading font-bold text-primary mb-6">$149 <span className="text-xl text-muted-foreground font-normal">USD</span></p>
            <Button
              size="xl"
              className="w-full text-lg h-16 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all relative z-50"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Book Free Demo
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Reserve your spot today. Limited seats for live interactive sessions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
