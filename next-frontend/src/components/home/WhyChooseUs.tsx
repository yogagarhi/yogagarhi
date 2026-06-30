"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BookOpen, Leaf, Zap, Award, Users, GraduationCap, RefreshCw, Globe } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

// Cloudinary image paths
const imgPreTtc = getCloudinaryImage("pre-yttc-online.png");
const imgAyurveda = getCloudinaryImage("activity-ayurveda.jpg");
const imgShivShakti = getCloudinaryImage("himalayan-lineage.jpg");
const imgPhilosophy = getCloudinaryImage("living-philosophy.jpg");
const imgSmallGroup = getCloudinaryImage("small-group-work.jpg");
const imgSequencing = getCloudinaryImage("yoga-sequences.png");
const imgAssistant = getCloudinaryImage("warrior-sequence.png");
const imgRepeat = getCloudinaryImage("group-class.png");
const imgFamily = getCloudinaryImage("yoga-alliance-graduates.png");

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
          
          {/* ================= STAGE 1: BEFORE YOU ARRIVE ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                Stage 01
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                Before You Arrive
              </h3>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row items-stretch">
                {/* Left content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      World's 1st Pre-YTTC Support Academy
                    </div>
                    <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Pre-TTC Mentorship
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      Most schools start with day one. We start weeks earlier — online, free — so you arrive already grounded in the basics, not learning them under pressure.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Grounded Foundation First</span>
                  </div>
                </div>
                {/* Right image */}
                <div className="lg:w-2/5 min-h-[250px] relative overflow-hidden">
                  <Image
                    src={imgPreTtc}
                    alt="Pre-TTC Mentorship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center -45px" }}
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
