"use client";
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

import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("home.whyChoose");
  return (
    <section
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 7600px' }}
    >
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
            {t("heading")}
          </h2>
          <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* ================= STAGE 1: BEFORE & AFTER THE COURSE ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                {t("stage1")}
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                {t("stage1Title")}
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
                      {t("preTtcBadge")}
                    </div>
                    <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t("preTtcTitle")}
                    </h4>
                    {/* Desktop full text */}
                    <p className="hidden md:block text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      {t("preTtcDesc")}
                    </p>
                    {/* Mobile accordion */}
                    <div className="md:hidden text-muted-foreground text-xs leading-relaxed">
                      <p>{t("preTtcDesc")}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider">{t("preTtcTag")}</span>
                    </div>

                    <a
                      href="https://wa.me/917895350563?text=Hello%20Yogagarhi%2C%20I%20would%20like%20to%20join%20the%20free%20Preparation%20for%20YTTC%20Program.%20Please%20guide%20me."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-sm font-bold shadow-md transition-all duration-300 w-fit self-start sm:self-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("joinUs")}
                    </a>
                  </div>
                </div>
                {/* Right image */}
                <div className="lg:w-2/5 min-h-[250px] relative overflow-hidden">
                  <Image
                    src={imgPreTtc}
                    alt={t("preTtcTitle")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
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
                      {t("postTtcBadge")}
                    </div>
                    <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t("postTtcTitle")}
                    </h4>
                    {/* Full text on both desktop and mobile */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-2xl break-words">
                      {t("postTtcDesc")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">{t("postTtcTag")}</span>
                  </div>
                </div>
                {/* Left image */}
                <div className="lg:w-2/5 min-h-[250px] relative overflow-hidden">
                  <Image
                    src={imgFamily}
                    alt={t("postTtcBadge")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
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
                {t("stage2")}
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                {t("stage2Title")}
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
                      alt={t("multiStyleTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("multiStyleBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Leaf className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("multiStyleCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("multiStyleTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("multiStyleDesc")}
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
                      alt={t("methodTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("methodBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("methodCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("methodTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("methodDesc")}
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
                      alt={t("philosophyTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("philosophyBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("philosophyCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("philosophyTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("philosophyDesc")}
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
                      alt={t("traditionTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("traditionBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("traditionCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("traditionTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("traditionDesc")}
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
                      alt={t("smallGroupCardTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("smallGroupBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("smallGroupCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("smallGroupCardTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("smallGroupCardDesc")}
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
                      alt={t("careerTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("careerBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("careerCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("careerTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("careerDesc")}
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
                {t("stage3")}
              </span>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                {t("stage3Title")}
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
                      {t("manifestoBadge")}
                    </div>
                    <h4 className="font-heading text-xl lg:text-2xl font-black text-foreground leading-tight group-hover:text-accent transition-colors text-left">
                      {t("manifestoHeading")}
                    </h4>
                    <p className="text-muted-foreground text-sm italic font-medium text-left">
                      {t("manifestoQuote")}
                    </p>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6 text-left">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("manifestoIntro")}
                    </p>
                    
                    <ul className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-foreground/80 font-medium">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">{t("manifestoB1Title")}</strong> {t("manifestoB1Desc")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">{t("manifestoB2Title")}</strong> {t("manifestoB2Desc")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">{t("manifestoB3Title")}</strong> {t("manifestoB3Desc")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">{t("manifestoB4Title")}</strong> {t("manifestoB4Desc")}</span>
                      </li>
                    </ul>
                    
                    <div className="pt-4 border-t border-border/50 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <span>{t("manifestoFooter")}</span>
                      <span className="font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                        {t("manifestoPill")}
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
                      alt={t("seqBookTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("seqBookBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("seqBookCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("seqBookTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("seqBookDesc")}
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
                      alt={t("assistantTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("assistantBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("assistantCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("assistantTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("assistantDesc")}
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
                      alt={t("repeatCardTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("repeatBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <RefreshCw className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("repeatCategory")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("repeatCardTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("repeatCardDesc")}
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
                      alt={t("communityTitle")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/95 text-primary-foreground text-[10px] font-bold z-10 shadow-sm">
                      {t("communityBadge")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t("communityBadge")}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t("communityTitle")}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t("communityDesc")}
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
