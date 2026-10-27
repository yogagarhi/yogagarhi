"use client";
import React from "react";
import { Calendar, Sun, CloudRain, Sparkles, Thermometer } from "lucide-react";
import { RISHIKESH_SEASONS } from "@/constants/rishikeshCourseData";

export default function BestTimeToVisitRishikeshSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="best-time-to-visit" style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Seasonal Climate</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Best Time to Visit Rishikesh for Yoga Training
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Plan your spiritual immersion according to the Himalayan weather patterns and personal practice goals.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* 3 Season Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RISHIKESH_SEASONS.map((season, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${season.badgeColor}`}>
                      {season.badge}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-primary" />
                      {season.temp}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {season.period}
                  </h3>
                  <p className="text-xs font-bold text-primary mb-3">
                    {season.climate}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {season.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-foreground/80 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Monthly 1st start date</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
