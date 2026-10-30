"use client";
import React from "react";
import { Plane, Clock, MapPin } from "lucide-react";
import { HOW_TO_REACH } from "@/constants/course200Data";
import { useLocale } from "next-intl";
import { HOW_TO_REACH_UI } from "@/constants/courseSectionsTranslations";

interface HowToReachSectionProps {
  locale?: string;
}

export default function HowToReachSection({ locale }: HowToReachSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const ui = (isEn ? null : HOW_TO_REACH_UI[activeLocale || "en"]) || HOW_TO_REACH_UI.en;

  // If how to reach is null or unconfirmed, DO NOT RENDER anything
  if (!HOW_TO_REACH) {
    return null;
  }

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="how-to-reach">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{ui.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {ui.titleBali}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {ui.subtitleBali}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOW_TO_REACH.nearestAirport && (
              <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {ui.airportTransfers}
                  </h3>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-0.5">
                    {HOW_TO_REACH.nearestAirport}
                    {HOW_TO_REACH.airportDistanceKm && ` • approx ${HOW_TO_REACH.airportDistanceKm} km`}
                  </p>
                  {HOW_TO_REACH.airportPickupDetails && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {HOW_TO_REACH.airportPickupDetails}
                    </p>
                  )}
                </div>
              </div>
            )}

            {(HOW_TO_REACH.checkInTime || HOW_TO_REACH.checkOutTime) && (
              <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {ui.checkInOut}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {HOW_TO_REACH.checkInTime && `Check-in: ${HOW_TO_REACH.checkInTime}`}
                    {HOW_TO_REACH.checkInTime && HOW_TO_REACH.checkOutTime && " • "}
                    {HOW_TO_REACH.checkOutTime && `Check-out: ${HOW_TO_REACH.checkOutTime}`}
                  </p>
                  {HOW_TO_REACH.arrivalDayDetails && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {HOW_TO_REACH.arrivalDayDetails}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
