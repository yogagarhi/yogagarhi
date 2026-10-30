"use client";
import React from "react";
import { Users, Sparkles, GraduationCap, BookOpen, RefreshCw, CheckCircle2 } from "lucide-react";
import { useLocale } from "next-intl";
import { YOGAGARHI_DIFFERENCE_RISHIKESH } from "@/constants/courseSectionsTranslations";

interface YogaGarhiDifferenceSectionProps {
  locale?: string;
}

export default function YogaGarhiDifferenceSection({ locale }: YogaGarhiDifferenceSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : YOGAGARHI_DIFFERENCE_RISHIKESH[activeLocale || "en"]) || YOGAGARHI_DIFFERENCE_RISHIKESH.en;

  const icons = [Users, Sparkles, GraduationCap, BookOpen, RefreshCw];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="yogagarhi-difference" style={{ contentVisibility: "auto", containIntrinsicSize: "980px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pillars.map((item, idx) => {
              const Icon = icons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className={`bg-card rounded-2xl p-6 sm:p-8 border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    idx === 0 || idx === 1 ? "md:col-span-1" : ""
                  } ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary text-foreground/80 text-[11px] font-bold tracking-wide">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{data.guaranteed}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
