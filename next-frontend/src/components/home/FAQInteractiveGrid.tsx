"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ChevronDown, MessageCircle, HelpCircle, Plane, Calendar, Clock, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqCategories: FAQCategory[] = [
  { id: "travel", icon: Plane },
  { id: "schedule", icon: Calendar },
  { id: "stay", icon: MapPin },
  { id: "courses", icon: Home },
];

export default function FAQInteractiveGrid() {
  const t = useTranslations("home.faq");
  const [activeCategory, setActiveCategory] = useState("travel");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    { category: "travel", question: t("q1"), answer: t("a1") },
    { category: "travel", question: t("q2"), answer: t("a2") },
    { category: "travel", question: t("q3"), answer: t("a3") },
    { category: "schedule", question: t("q4"), answer: t("a4") },
    { category: "schedule", question: t("q5"), answer: t("a5") },
    { category: "schedule", question: t("q6"), answer: t("a6") },
    { category: "courses", question: t("q7"), answer: t("a7") },
    { category: "courses", question: t("q8"), answer: t("a8") },
    { category: "stay", question: t("q9"), answer: t("a9") },
    { category: "courses", question: t("q10"), answer: t("a10") },
    { category: "stay", question: t("q11"), answer: t("a11") },
    { category: "courses", question: t("q12"), answer: t("a12") },
  ];

  const top5MobileFaqs: FAQItem[] = [
    faqs[0],
    faqs[1],
    faqs[6],
    faqs[7],
    faqs[8],
  ];

  const getCategoryLabel = (id: string) => {
    switch(id) {
      case "travel": return t("tabTravel");
      case "schedule": return t("tabSchedule");
      case "stay": return t("tabStay");
      case "courses": return t("tabCourses");
      default: return id;
    }
  };

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      {/* Mobile Lite View: Top 5 FAQs + Contact link (preserves fast scroll & clean UI) */}
      <div className="lg:hidden space-y-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-amber-800 dark:text-amber-300 font-bold tracking-wide uppercase text-sm">
              {t("badge")}
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
            {t("desc")}
          </p>
        </div>

        <div className="space-y-3">
          {top5MobileFaqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                mobileOpenIndex === index
                  ? "bg-card border-primary/30 shadow-card"
                  : "bg-card/50 border-border"
              }`}
            >
              <button
                onClick={() => setMobileOpenIndex(mobileOpenIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xs shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-heading font-semibold text-base text-foreground">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-primary shrink-0 transition-transform ${
                    mobileOpenIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenIndex === index && (
                <div className="px-4 pb-4 pt-1 border-t border-border/40 text-sm text-muted-foreground leading-relaxed pl-14">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-5 bg-secondary/30 rounded-xl border border-border text-center space-y-3 mt-4">
          <p className="font-medium text-foreground text-sm">{t("moreQuestions")}</p>
          <div className="flex gap-3 justify-center">
            <Button variant="default" size="sm" asChild>
              <Link href="/contact-us">{t("askDirectly")}</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">{t("whatsappUs")}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Full 2-Column Interactive Grid */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Header & Categories */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <span className="text-amber-800 dark:text-amber-300 font-bold tracking-wide uppercase text-sm">
              {t("badge")}
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t("desc")}
          </p>

          {/* Category Tabs */}
          <div className="space-y-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 hover:bg-secondary text-foreground"
                }`}
              >
                <cat.icon
                  className={`w-5 h-5 ${
                    activeCategory === cat.id ? "text-primary-foreground" : "text-primary"
                  }`}
                />
                <span className="font-medium">{getCategoryLabel(cat.id)}</span>
                <ChevronDown
                  className={`w-4 h-4 ml-auto transition-transform ${
                    activeCategory === cat.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="p-6 bg-secondary/30 rounded-2xl border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">{t("stillQuestions")}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("hereToHelp")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact-us">{t("contactUs")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - FAQ Items */}
      <div className="lg:col-span-7">
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-card border-primary/30 shadow-card"
                  : "bg-card/50 border-border hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-6 text-left"
              >
                {/* Number Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm transition-colors ${
                    openIndex === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 pt-2">
                  <h3
                    className={`font-heading text-lg font-semibold transition-colors ${
                      openIndex === index ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-foreground" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{t("responseTiming")}</span>
        </div>

        {/* Unique Testimonial Card */}
        <div className="mt-10 relative">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-primary/10 relative overflow-hidden">
            {/* Decorative Mandala */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-10">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="95"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    transform={`rotate(${angle} 50 50)`}
                  />
                ))}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="50"
                    cy="15"
                    rx="8"
                    ry="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    transform={`rotate(${angle} 50 50)`}
                  />
                ))}
              </svg>
            </div>

            {/* Quote Icon */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
              </svg>
            </div>

            <p className="text-lg italic text-foreground/80 leading-relaxed mb-6 relative z-10">
              "The team answered all my questions before I even arrived. From visa guidance to what to pack —
              they made me feel completely prepared and supported."
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                JL
              </div>
              <div>
                <p className="font-medium text-foreground">Jessica L.</p>
                <p className="text-sm text-muted-foreground">200hr Graduate • Australia</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-primary/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["SM", "PK", "EL"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-foreground"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{t("happyStudents")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
