"use client";
import React from "react";
import { Award, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";
import { TRUST_BADGES_RISHIKESH } from "@/constants/courseSectionsTranslations";

interface TrustBadgesRowProps {
  locale?: string;
}

export default function TrustBadgesRow({ locale }: TrustBadgesRowProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const badges = (isEn ? null : TRUST_BADGES_RISHIKESH[activeLocale || "en"]) || TRUST_BADGES_RISHIKESH.en;

  return (
    <section className="py-6 bg-secondary/40 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Badge 1: Yoga Alliance */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/60 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {badges[0].tag}
              </p>
              <p className="text-xs font-bold text-foreground">
                {badges[0].title}
              </p>
            </div>
          </div>

          {/* Badge 2: Small Batches */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/60 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-primary">
                {badges[1].tag}
              </p>
              <p className="text-xs font-bold text-foreground">
                {badges[1].title}
              </p>
            </div>
          </div>

          {/* Badge 3: Teaching Lineage */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/60 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {badges[2].tag}
              </p>
              <p className="text-xs font-bold text-foreground">
                {badges[2].title}
              </p>
            </div>
          </div>

          {/* Badge 4: Pure Ashram Stay */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/60 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                {badges[3].tag}
              </p>
              <p className="text-xs font-bold text-foreground">
                {badges[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
