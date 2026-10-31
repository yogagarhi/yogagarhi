"use client";
import React from "react";
import { BookOpen, Brain, Activity, HeartHandshake, Compass, CheckCircle2, Clock } from "lucide-react";
import { useLocale } from "next-intl";
import { STUDY_GUIDE_RISHIKESH } from "@/constants/courseStudyGuidesTranslations";

interface RishikeshCourseStudyGuideProps {
  locale?: string;
}

export default function RishikeshCourseStudyGuide({ locale }: RishikeshCourseStudyGuideProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : STUDY_GUIDE_RISHIKESH[activeLocale || "en"]) || STUDY_GUIDE_RISHIKESH.en;

  const icons = [Activity, Compass, Brain, BookOpen, HeartHandshake];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="curriculum-overview" style={{ contentVisibility: "auto", containIntrinsicSize: "1400px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
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

          {/* Modules List */}
          <div className="space-y-6 mb-16">
            {data.modules.map((mod, idx) => {
              const Icon = icons[idx] || Activity;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 sm:p-8 border border-border/80 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                          {mod.title}
                        </h3>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 self-start">
                          {data.coreBadge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {mod.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical Sadhana & Training Disciplines Section */}
          <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 border border-border/80 shadow-lg">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                {data.dailyBadge}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                {data.dailyTitle}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {data.dailyDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.practicalItems.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>{data.scheduleTag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
