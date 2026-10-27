"use client";
import React from "react";
import Link from "next/link";
import { Check, ArrowRight, TableProperties } from "lucide-react";
import { COMPARE_VARKALA_COURSES_DATA } from "@/constants/varkalaCourseData";

export default function CompareVarkalaCoursesTable() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="compare-courses" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <TableProperties className="w-3.5 h-3.5" />
              <span>Program Comparison</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Compare Our Varkala Yoga Teacher Trainings
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Choose the program that matches your personal journey, schedule availability, and professional certification aspirations.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-card rounded-2xl border border-border/80 shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-foreground">
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4">Key Features</th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground block mb-1">
                      Immersion
                    </span>
                    100-Hour YTT
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center bg-primary/5 border-x border-primary/20">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary block mb-1">
                      Most Popular
                    </span>
                    200-Hour YTT
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-base w-1/4 text-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                      Master Level
                    </span>
                    300-Hour YTT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-sm">
                {COMPARE_VARKALA_COURSES_DATA.slice(0, -1).map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.c100}</td>
                    <td className="py-4 px-6 text-center font-bold text-foreground bg-primary/5 border-x border-primary/20">
                      {row.c200}
                    </td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.c300}</td>
                  </tr>
                ))}
                {/* CTA Row */}
                <tr className="bg-muted/40">
                  <td className="py-6 px-6 font-bold text-foreground">Explore Details</td>
                  <td className="py-6 px-6 text-center">
                    <Link
                      href="/100-hour-yoga-teacher-training-in-varkala"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-foreground text-xs font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>View 100-Hour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-6 px-6 text-center bg-primary/5 border-x border-primary/20">
                    <Link
                      href="/200-hour-yoga-teacher-training-in-varkala"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-lg shadow-md hover:opacity-90 transition-all hover:scale-105"
                    >
                      <span>View 200-Hour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Link
                      href="/300-hour-yoga-teacher-training-in-varkala"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-foreground text-xs font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>View 300-Hour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {/* 100-Hour Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Foundation Immersion
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">100-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">From $599</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Duration: 12 Days (11 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Level: Beginner & Foundation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Certification: Foundation Immersion</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Batch Size: 8–10 Students Max</span>
                </li>
              </ul>
              <Link
                href="/100-hour-yoga-teacher-training-in-varkala"
                className="w-full py-3 bg-secondary text-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>Explore 100-Hour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 200-Hour Card */}
            <div className="bg-card rounded-2xl p-6 border-2 border-primary shadow-xl relative">
              <span className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md">
                Most Popular
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                International Standard
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">200-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">From $999</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Duration: 28 Days (27 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Level: All Levels (Beginner to Intermediate)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Certification: Yoga Alliance RYT 200</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Batch Size: 8–10 Students Max</span>
                </li>
              </ul>
              <Link
                href="/200-hour-yoga-teacher-training-in-varkala"
                className="w-full py-3 bg-primary text-primary-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <span>Explore 200-Hour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 300-Hour Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                Advanced Master Track
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">300-Hour YTT</h3>
              <p className="text-primary font-bold text-lg mb-4">From $1,099</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Duration: 28 Days (27 Nights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Level: Intermediate to Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Certification: RYT 500 Pathway</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Prerequisite: 200-Hour YTT Certificate</span>
                </li>
              </ul>
              <Link
                href="/300-hour-yoga-teacher-training-in-varkala"
                className="w-full py-3 bg-secondary text-foreground text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>Explore 300-Hour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
