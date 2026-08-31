"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Check,
  X,
  ChevronDown,
  ShieldCheck,
  Heart,
  Users,
  Utensils,
  Home,
  MessageSquare,
  ArrowRight,
  Sun,
  Flame,
  Award
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RetreatPackage, RETREAT_LOCATIONS } from "@/constants/retreats";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";

interface RetreatDetailProps {
  retreat: RetreatPackage;
}

export default function RetreatDetail({ retreat }: RetreatDetailProps) {
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const locationInfo = RETREAT_LOCATIONS[retreat.locationKey];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "name": retreat.title,
        "description": retreat.seoDescription,
        "touristType": ["Yoga Enthusiast", "Wellness Traveler", "Solo Traveler"],
        "provider": {
          "@type": "Organization",
          "name": "YogaGarhi",
          "url": "https://www.yogagarhi.com",
          "logo": "https://www.yogagarhi.com/favicon.png"
        },
        "offers": {
          "@type": "Offer",
          "price": retreat.priceShared.replace("$", "").replace(",", ""),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": `https://www.yogagarhi.com/retreat/${retreat.locationKey}/${retreat.slug}`
        },
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": retreat.schedule.length,
          "itemListElement": retreat.schedule.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `${item.time} - ${item.activity}`,
            "description": item.description
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yogagarhi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Retreats",
            "item": "https://www.yogagarhi.com/retreat"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": retreat.locationName,
            "item": `https://www.yogagarhi.com/retreat/${retreat.locationKey}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${retreat.durationDays} Days`,
            "item": `https://www.yogagarhi.com/retreat/${retreat.locationKey}/${retreat.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": retreat.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero & Header Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/retreat" className="hover:text-primary transition-colors">Retreats</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/retreat/${retreat.locationKey}`} className="hover:text-primary transition-colors">
                  {retreat.locationName}
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold" aria-current="page">
                {retreat.durationDays} Days
              </li>
            </ol>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              ✦ {retreat.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {retreat.locationStateOrCountry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {retreat.durationDays} Days / {retreat.durationNights} Nights
            </span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.18] tracking-tight mb-6 max-w-4xl">
            {retreat.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            {retreat.tagline}
          </p>

          {/* Hero Meta Card & Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border shadow-sm mb-10 max-w-4xl">
            <div>
              <span className="text-xs text-muted-foreground uppercase font-medium">Duration</span>
              <p className="font-heading font-bold text-lg md:text-xl text-foreground">{retreat.durationDays} Days / {retreat.durationNights} Nights</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase font-medium">Yoga Style</span>
              <p className="font-heading font-bold text-lg md:text-xl text-foreground">Multi-Style & Yin</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase font-medium">Skill Level</span>
              <p className="font-heading font-bold text-lg md:text-xl text-foreground">Beginner to Adv.</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase font-medium">Starting From</span>
              <p className="font-heading font-bold text-lg md:text-xl text-primary">{retreat.priceShared} USD</p>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setShowEnrollDialog(true)}
            >
              Book Your Retreat
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 py-6 text-base border-border hover:bg-secondary"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Ask a Question
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 mt-12 max-w-6xl">
          <div className="relative h-[360px] sm:h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-elevated border border-border/50">
            <Image
              src={retreat.heroImage}
              alt={retreat.heroImageAlt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-sm sm:text-base font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300" />
                {locationInfo.fullName}
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Save {retreat.earlyBirdSaving} Early Bird
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Semantic Article Content */}
      <main className="py-16 bg-background">
        <article className="container mx-auto px-4 max-w-6xl space-y-20">
          
          {/* Section: Overview */}
          <section id="overview" className="max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border/60">
              Retreat Overview & Purpose
            </h2>
            <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-[1.85]">
              {retreat.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* Section: Key Highlights */}
          <section id="highlights">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 pb-3 border-b border-border/60">
              Retreat Experience Highlights
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {retreat.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="font-medium text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Daily Schedule */}
          <section id="itinerary" className="max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-border/60">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Sample Daily Rhythm
              </h2>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                Flexible & Relaxed Pace
              </span>
            </div>
            <div className="space-y-4">
              {retreat.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors"
                >
                  <div className="sm:w-32 flex-shrink-0">
                    <span className="inline-block px-3 py-1 rounded-lg bg-secondary text-primary font-mono text-xs font-bold">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                      {item.activity}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: What's Included & Excluded */}
          <section id="inclusions" className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="p-8 rounded-3xl bg-card border border-border/70 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">What Is Included</h2>
              </div>
              <ul className="space-y-3.5">
                {retreat.included.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                  <X className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">What Is Not Included</h2>
              </div>
              <ul className="space-y-3.5">
                {retreat.notIncluded.map((exc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Accommodation & Nourishment */}
          <section id="accommodation-meals" className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border/60">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                {retreat.accommodation.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {retreat.accommodation.description}
              </p>
              <ul className="space-y-2">
                {retreat.accommodation.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/60">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                {retreat.meals.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {retreat.meals.description}
              </p>
              <ul className="space-y-2">
                {retreat.meals.types.map((type, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Pricing & Booking */}
          <section id="pricing" className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-secondary/30 border border-primary/20 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-primary">Simple Transparent Pricing</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                Reserve Your Retreat Package
              </h2>
              <p className="text-muted-foreground">
                Enjoy Early Bird Savings of <span className="font-semibold text-primary">{retreat.earlyBirdSaving}</span> when booking in advance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Shared Room */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Shared Room</span>
                  <div className="mt-3 mb-4">
                    <span className="font-heading font-bold text-4xl text-foreground">{retreat.priceShared}</span>
                    <span className="text-muted-foreground text-sm"> / person</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Twin-share villa with another conscious retreat participant of the same gender.
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/80 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> 2 Single luxury beds
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> Ensuite bathroom & AC
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> All meals & activities included
                    </li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl"
                  onClick={() => setShowEnrollDialog(true)}
                >
                  Book Shared Room
                </Button>
              </div>

              {/* Private Room */}
              <div className="p-8 rounded-3xl bg-card border-2 border-primary shadow-md flex flex-col justify-between relative">
                <div className="absolute -top-3.5 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                  Recommended
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Private Villa / Suite</span>
                  <div className="mt-3 mb-4">
                    <span className="font-heading font-bold text-4xl text-foreground">{retreat.pricePrivate}</span>
                    <span className="text-muted-foreground text-sm"> / person</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Full private villa suite with king bed, dedicated balcony, and total peace.
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/80 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> Private King bed & terrace
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> Ensuite stone bath & pool access
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> All meals, spa & excursions included
                    </li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl"
                  onClick={() => setShowEnrollDialog(true)}
                >
                  Book Private Villa
                </Button>
              </div>
            </div>
          </section>

          {/* Section: Location Guide */}
          <section id="location-guide" className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border/60">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-bold tracking-widest text-primary">Destination Guide</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                About {locationInfo.fullName}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {locationInfo.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Nearest Airport:</span> {locationInfo.nearestAirport}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Best Time to Visit:</span> {locationInfo.bestTimeToVisit}
                </div>
              </div>
            </div>
          </section>

          {/* Section: FAQs */}
          <section id="faqs" className="max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border/60">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {retreat.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/60 bg-card overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base md:text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Other Durations in same location */}
          <section className="pt-8 border-t border-border/60">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Other Retreat Durations in {retreat.locationName}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {(['3-days', '7-days', '14-days'] as const).map((dur) => {
                const isCurrent = dur === retreat.durationKey;
                const daysNum = dur === '3-days' ? 3 : dur === '7-days' ? 7 : 14;
                return (
                  <Link
                    key={dur}
                    href={`/retreat/${retreat.locationKey}/${dur}`}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      isCurrent
                        ? "bg-primary/10 border-primary shadow-sm"
                        : "bg-card border-border hover:border-primary hover:shadow-md"
                    }`}
                  >
                    <span className="text-xs uppercase font-bold tracking-wider text-primary">
                      {daysNum} Days Retreat
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-1">
                      {retreat.locationName} {daysNum} Days
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isCurrent ? "You are viewing this package" : `Explore ${daysNum}-day immersive itinerary →`}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

        </article>
      </main>
    </Layout>
  );
}
