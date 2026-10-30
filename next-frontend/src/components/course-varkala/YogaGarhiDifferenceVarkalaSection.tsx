"use client";
import React from "react";
import { Users, Sparkles, Waves, Leaf, RefreshCw } from "lucide-react";
import { useLocale } from "next-intl";
import { YOGAGARHI_DIFFERENCE_VARKALA } from "@/constants/courseSectionsTranslations";

interface YogaGarhiDifferenceVarkalaSectionProps {
  locale?: string;
}

export default function YogaGarhiDifferenceVarkalaSection({ locale }: YogaGarhiDifferenceVarkalaSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : YOGAGARHI_DIFFERENCE_VARKALA[activeLocale || "en"]) || YOGAGARHI_DIFFERENCE_VARKALA.en;

  const icons = [Users, Sparkles, Waves, Leaf, RefreshCw];

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

          {/* 5 Distinct Difference Cards */}
          <div className="space-y-6">
            {data.pillars.map((diff, idx) => {
              const Icon = icons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon Column */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content Column */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                          {diff.badge}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">Pillar 0{idx + 1}</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {diff.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-1">
                        {diff.description}
                      </p>
                    </div>
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
