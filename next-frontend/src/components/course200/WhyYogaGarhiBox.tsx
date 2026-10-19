"use client";
import React from "react";
import { Users, GraduationCap, Video, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface WhyYogaGarhiBoxProps {
  onCheckAvailability?: () => void;
  onBookCall?: () => void;
  namespace?: string;
}

export default function WhyYogaGarhiBox({ onCheckAvailability, onBookCall, namespace = "course200" }: WhyYogaGarhiBoxProps) {
  const t = useTranslations(`${namespace}.whyYogaGarhiBox` as any);

  const pillars = [
    {
      icon: Users,
      title: t("p1Title"),
      description: t("p1Desc"),
      highlight: t("p1Highlight")
    },
    {
      icon: Video,
      title: t("p2Title"),
      description: t("p2Desc"),
      highlight: t("p2Highlight")
    },
    {
      icon: GraduationCap,
      title: t("p3Title"),
      description: t("p3Desc"),
      highlight: t("p3Highlight")
    },
    {
      icon: RefreshCw,
      title: t("p4Title"),
      description: t("p4Desc"),
      highlight: t("p4Highlight")
    }
  ];

  return (
    <section className="py-12 bg-secondary/30 relative overflow-hidden border-y border-border/60">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {t("heading")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {t("sub")}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {pillar.highlight}
                      </span>
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transparent Verified Pricing Banner */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {t("pkgBadge")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-extrabold font-heading text-primary">
                    {t("tuitionFrom")}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                    {t("saveEarlyBird")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {t("breakdown")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-end">
                {onCheckAvailability && (
                  <button
                    type="button"
                    onClick={onCheckAvailability}
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    {t("checkAvailability")}
                  </button>
                )}
                {onBookCall && (
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="px-6 py-3 rounded-full bg-background border border-primary/40 text-foreground font-semibold text-sm hover:bg-primary/10 transition-all"
                  >
                    {t("bookFreeCall")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
