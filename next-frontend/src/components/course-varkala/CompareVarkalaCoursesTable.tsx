"use client";
import React from "react";
import Link from "next/link";
import { Check, ArrowRight, TableProperties } from "lucide-react";
import { COMPARE_VARKALA_COURSES_DATA } from "@/constants/varkalaCourseData";
import { useLocale } from "next-intl";
import { COMPARE_COURSES_UI } from "@/constants/courseSectionsTranslations";

interface CompareVarkalaCoursesTableProps {
  locale?: string;
}

export default function CompareVarkalaCoursesTable({ locale }: CompareVarkalaCoursesTableProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const ui = (isEn ? null : COMPARE_COURSES_UI[activeLocale || "en"]) || COMPARE_COURSES_UI.en;

  const getFeatureLabel = (feature: string) => {
    switch (feature) {
      case "Duration": return ui.f_duration;
      case "Experience Level": return ui.f_level;
      case "Prerequisite": return ui.f_prereq;
      case "Certification": return ui.f_cert;
      case "Core Focus": return ui.f_focus;
      case "Batch Size": return ui.f_batch;
      case "Starting Price": return ui.f_price;
      default: return feature;
    }
  };

  const getHref = (path: string) => {
    if (isEn) return path;
    return `/${activeLocale}${path}`;
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="compare-courses" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <TableProperties className="w-3.5 h-3.5" />
              <span>{ui.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {ui.titleVarkala}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {ui.subtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-card rounded-2xl border border-border/80 shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-foreground">
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4">{ui.keyFeatures}</th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground block mb-1">
                      {ui.immersion}
                    </span>
                    100-Hour YTT
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center bg-primary/5 border-x border-primary/20">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary block mb-1">
                      {ui.mostPopular}
                    </span>
                    200-Hour YTT
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                      {ui.masterLevel}
                    </span>
                    300-Hour YTT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-sm">
                {COMPARE_VARKALA_COURSES_DATA.slice(0, -1).map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-foreground">{getFeatureLabel(row.feature)}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.c100}</td>
                    <td className="py-4 px-6 text-center font-bold text-foreground bg-primary/5 border-x border-primary/20">
                      {row.c200}
                    </td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.c300}</td>
                  </tr>
                ))}

                {/* Action Links Row */}
                <tr className="bg-muted/40">
                  <td className="py-5 px-6 font-bold text-foreground">{ui.viewDetails}</td>
                  <td className="py-5 px-6 text-center">
                    <Link
                      href={getHref("/100-hour-yoga-teacher-training-in-varkala")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-foreground text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>{ui.c100Btn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-center bg-primary/10 border-x border-primary/30">
                    <Link
                      href={getHref("/200-hour-yoga-teacher-training-in-varkala")}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-md hover:opacity-90 transition-all hover:scale-105"
                    >
                      <span>{ui.c200Btn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <Link
                      href={getHref("/300-hour-yoga-teacher-training-in-varkala")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-foreground text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>{ui.c300Btn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {/* 100-Hour Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                {ui.immersion}
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">100-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">{ui.from} $599</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_duration}: 12 Days (11 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_level}: Beginner & Personal Immersion</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_cert}: YogaGarhi Foundation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_batch}: 8–10 Students Max</span>
                </li>
              </ul>
              <Link
                href={getHref("/100-hour-yoga-teacher-training-in-varkala")}
                className="w-full py-3 bg-secondary text-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>{ui.explore100}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 200-Hour Card (Featured) */}
            <div className="bg-card rounded-2xl p-6 border-2 border-primary shadow-xl relative">
              <span className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                {ui.mostPopular}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                {ui.mostPopular}
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">200-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">{ui.from} $999</p>
              <ul className="space-y-2 text-sm text-foreground/90 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_duration}: 28 Days (27 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_level}: All Levels (Beginner to Intermediate)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_cert}: Yoga Alliance RYT 200</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_batch}: 8–10 Students Max</span>
                </li>
              </ul>
              <Link
                href={getHref("/200-hour-yoga-teacher-training-in-varkala")}
                className="w-full py-3 bg-primary text-primary-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <span>{ui.explore200}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 300-Hour Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                {ui.masterLevel}
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">300-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">{ui.from} $1,099</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_duration}: 28 Days (27 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_level}: Intermediate to Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_cert}: RYT 500 Pathway</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{ui.f_prereq}: 200-Hour YTT Certificate</span>
                </li>
              </ul>
              <Link
                href={getHref("/300-hour-yoga-teacher-training-in-varkala")}
                className="w-full py-3 bg-secondary text-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>{ui.explore300}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
