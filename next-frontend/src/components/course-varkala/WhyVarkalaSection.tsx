"use client";
import React from "react";
import Image from "next/image";
import { Waves, Sparkles, MapPin, Compass, Landmark, Sun } from "lucide-react";
import { WHY_VARKALA_TRANSLATIONS } from "@/constants/whyLocationTranslations";
import { useLocale } from "next-intl";

interface WhyVarkalaSectionProps {
  locale?: string;
}

export default function WhyVarkalaSection({ locale }: WhyVarkalaSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : WHY_VARKALA_TRANSLATIONS[activeLocale || "en"]) || WHY_VARKALA_TRANSLATIONS.en;
  const pillars = data.pillars || WHY_VARKALA_TRANSLATIONS.en.pillars!;

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="why-varkala" style={{ contentVisibility: "auto", containIntrinsicSize: "950px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>{data.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              {data.subtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Grid Layout: Content + Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Authoritative Text */}
            <div className="lg:col-span-7 space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Right Column: 3 Authentic Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
                  alt="Varkala red cliffs and Arabian Sea coastline"
                  width={600}
                  height={380}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {data.photoCaptions.main}
                    </p>
                    <p className="text-white/80 text-xs">Pristine coastal geology overlooking the Arabian Sea</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80"
                    alt="Beach yoga and meditation at Papanasam beach"
                    width={300}
                    height={200}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white font-bold text-xs flex items-center gap-1">
                      <Waves className="w-3.5 h-3.5 text-primary" />
                      {data.photoCaptions.sub1}
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
                    alt="Ayurvedic herbs and coastal sunset meditation"
                    width={300}
                    height={200}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white font-bold text-xs flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {data.photoCaptions.sub2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/60">
            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Waves className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{pillars.p1Title}</p>
                <p className="text-xs text-muted-foreground">{pillars.p1Desc}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{pillars.p2Title}</p>
                <p className="text-xs text-muted-foreground">{pillars.p2Desc}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sun className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{pillars.p3Title}</p>
                <p className="text-xs text-muted-foreground">{pillars.p3Desc}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Landmark className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{pillars.p4Title}</p>
                <p className="text-xs text-muted-foreground">{pillars.p4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
