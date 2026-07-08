"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BookOpen, Leaf, Zap, Award, Users, GraduationCap, RefreshCw, Globe, MessageCircle } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

// Cloudinary image paths
const imgPreTtc = getCloudinaryImage("pre-yttc-online.png");
const imgAyurveda = getCloudinaryImage("yoga-lifestyle.jpg");
const imgShivShakti = getCloudinaryImage("himalayan-lineage.jpg");
const imgPhilosophy = getCloudinaryImage("living-philosophy.jpg");
const imgSmallGroup = getCloudinaryImage("small-group-work.jpg");
const imgSequencing = getCloudinaryImage("yoga-sequences.png");
const imgAssistant = getCloudinaryImage("warrior-sequence.png");
const imgRepeat = getCloudinaryImage("group-class.png");
const imgFamily = getCloudinaryImage("yoga-alliance-graduates.png");
const imgTradition = getCloudinaryImage("himalayan-lineage.jpg");

// Lotus SVG for decorative purposes
const LotusDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 55 C50 40, 30 30, 20 40 C10 50, 30 55, 50 55" />
    <path d="M50 55 C50 40, 70 30, 80 40 C90 50, 70 55, 50 55" />
    <path d="M50 55 C50 35, 35 20, 30 30 C25 40, 40 50, 50 55" />
    <path d="M50 55 C50 35, 65 20, 70 30 C75 40, 60 50, 50 55" />
    <path d="M50 55 C50 30, 50 15, 50 25 C50 35, 50 45, 50 55" />
  </svg>
);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-widest uppercase">
            THE YOGAGARHI DIFFERENCE
          </h2>
          <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* ================= STAGE 1: BEFORE & AFTER THE COURSE ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                Stage 01
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                Before & After The Course
              </h3>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* Pre-TTC Mentorship */}
              <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row items-stretch">
                {/* Left content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Preparation for your YTTC Free Program
                    </div>
                    <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Pre-TTC Mentorship
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      Wondering if you are truly ready for a Yoga Teacher Training Course (TTC)? This preparatory program is designed specifically for practitioners who want to test their readiness. While most schools start on day one, we begin weeks earlier — online and completely free — helping you build a solid foundation so you arrive confident, grounded, and stress-free.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider">Test Your Readiness First</span>
                    </div>

                    <a
                      href="https://wa.me/917895350563?text=Hello%20Yogagarhi%2C%20I%20would%20like%20to%20join%20the%20free%20Preparation%20for%20YTTC%20Program.%20Please%20guide%20me."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-sm font-bold shadow-md transition-all duration-300 w-fit self-start sm:self-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Join Us
                    </a>
                  </div>
                </div>
                {/* Right image */}
                <div className="lg:w-2/5 min-h-[250px] relative overflow-hidden">
                  <Image
                    src={imgPreTtc}
                    alt="Preparation for your YTTC Free Program"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center -45px" }}
                  />
                </div>
              </div>

              {/* 1-Year Post-TTC Support */}
              <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row-reverse items-stretch">
                {/* Right content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      1-Year Post-TTC Support
                    </div>
                    <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Your Teacher Stays With You For One Year
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      Most schools say goodbye on graduation day. We don't. For 12 months after your training, you get monthly live sessions with us — feedback on your real classes if you teach, guidance on your personal practice if you don't — and a teacher you can write to when you're stuck. This isn't a new idea we invented for marketing: students from our founder's past trainings have been practicing with him online for three, four, even five years after their course ended. We simply made into a promise what was already true.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Continuous Guidance Promise</span>
                  </div>
                </div>
                {/* Left image */}
                <div className="lg:w-2/5 min-h-[250px] relative overflow-hidden">
                  <Image
                    src={imgFamily}
                    alt="1-Year Post-TTC Support"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= STAGE 2: GOING DEEP ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                Stage 02
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                Going Deep Into Yourself
              </h3>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Multi-Style & Ayurveda */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgAyurveda}
                      alt="Multi-Style & Ayurveda"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Integrated
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Leaf className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Ayurveda</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Multi-Style & Ayurveda
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Vinyasa, Hatha, Ashtanga, and Iyengar taught with a strong foundation in Ayurveda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shiv-Shakti Method */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgShivShakti}
                      alt="Shiv-Shakti Method"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Signature
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Methodology</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Shiv-Shakti Method
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Our signature approach that converts ancient yogic theory into practical, life-changing wisdom.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy-Driven */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgPhilosophy}
                      alt="Philosophy-Driven"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Authentic
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Yogic Wisdom</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Philosophy-Driven
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Highest yogic philosophy through rituals, meditation, and satsang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real tradition, taught clearly */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgTradition}
                      alt="Real tradition, taught clearly"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Traditional
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Authentic Texts</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Real Tradition, Taught Clearly
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      We study the actual texts — Yoga Sutras, Hatha Yoga Pradipika, Bhagavad Gita — and live the practice daily. Clear, structured, modern English. Traditional does not have to mean confusing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intimate learning */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgSmallGroup}
                      alt="Intimate learning"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      8-10 Max
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Mentorship</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Intimate learning
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Only 8-10 students per batch. Intimacy = real mentorship, not crowd teaching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn how to actually work as a teacher */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgAssistant}
                      alt="Learn how to actually work as a teacher"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Career
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Livelihood</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Learn How to Work as a Teacher
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Before you leave, we cover the things no one teaches: how to structure your first classes, approach studios, what to charge, insurance, and online teaching. A certificate without a livelihood plan is only paper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= STAGE 3: TEACHING & AFTER ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                Stage 03
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                Teaching & Beyond
              </h3>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Not Planning to Teach? Manifesto Card */}
              <div className="col-span-full md:col-span-2 lg:col-span-4 group relative rounded-2xl overflow-hidden border-2 border-accent/20 bg-gradient-to-br from-accent/[0.05] via-transparent to-background p-8 lg:p-12 shadow-sm hover:shadow-md transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
                  <div className="lg:w-1/3 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      Student Manifesto
                    </div>
                    <h4 className="font-heading text-xl lg:text-2xl font-black text-foreground leading-tight group-hover:text-accent transition-colors text-left">
                      Not planning to teach? You are exactly who this school was made for.
                    </h4>
                    <p className="text-muted-foreground text-sm italic font-medium text-left">
                      "I don't actually want to teach. I just want to go deeper."
                    </p>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6 text-left">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      More than half the people who write to us say this, almost apologetically. Please don't apologize. In India, yoga was never a career course — it was a pathway to understand oneself. The student always came first.
                    </p>
                    
                    <ul className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-foreground/80 font-medium">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">You Are the Tradition:</strong> For thousands of years, people came to a teacher for one reason: self-discovery.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Practice-First Classroom:</strong> You will live yoga as it was meant to be lived: sadhana, pranayama, food, and texts.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Deepest Learning:</strong> Explaining postures is job-free training to help you understand them in your own body.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">1-Year Sadhana Support:</strong> Mentorship is for practitioners, not just teachers. We support your daily life sadhana.</span>
                      </li>
                    </ul>
                    
                    <div className="pt-4 border-t border-border/50 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <span>Come as a student. Leave as a deeper one. That is enough.</span>
                      <span className="font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                        No Pressure • No Expiry
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 35+ Sequencing Book */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgSequencing}
                      alt="35+ Sequencing Book"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Included
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Resources</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      35+ Sequencing Book
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Practical sequences you can teach from day one after graduation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Assistant Teacher */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgAssistant}
                      alt="Assistant Teacher"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Growth
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Teaching</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Assistant Teacher
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Apply to become an assistant teacher in future batches and grow your authentic experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Course Repeat */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgRepeat}
                      alt="Free Course Repeat"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Forever
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <RefreshCw className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Lifetime</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Free Course Repeat
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Revisit any training whenever it runs, at absolutely no extra tuition cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Family */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgFamily}
                      alt="Global Family"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      Lifetime
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Community</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Global Family
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Join a worldwide community that supports your growth forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
}
