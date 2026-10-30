"use client";
import React, { useState } from "react";
import { Plane, Train, Bus, MapPin, Car, PhoneCall, Check, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { VARKALA_HOW_TO_REACH_INFO } from "@/constants/varkalaCourseData";
import { useLocale } from "next-intl";
import { HOW_TO_REACH_UI } from "@/constants/courseSectionsTranslations";

interface HowToReachVarkalaSectionProps {
  locale?: string;
}

export default function HowToReachVarkalaSection({ locale }: HowToReachVarkalaSectionProps = {}) {
  const [activeTab, setActiveTab] = useState<"air" | "train" | "road">("air");
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const ui = (isEn ? null : HOW_TO_REACH_UI[activeLocale || "en"]) || HOW_TO_REACH_UI.en;

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="how-to-reach" style={{ contentVisibility: "auto", containIntrinsicSize: "1100px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{ui.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {ui.titleVarkala}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {ui.subtitleVarkala}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-xl bg-background border border-border shadow-sm">
              <button
                onClick={() => setActiveTab("air")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "air"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>{ui.byAir}</span>
              </button>

              <button
                onClick={() => setActiveTab("train")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "train"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Train className="w-4 h-4" />
                <span>{ui.byTrain}</span>
              </button>

              <button
                onClick={() => setActiveTab("road")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "road"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bus className="w-4 h-4" />
                <span>{ui.byRoad}</span>
              </button>
            </div>
          </div>

          {/* Dynamic Tab Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {activeTab === "air" &&
              VARKALA_HOW_TO_REACH_INFO.air.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-border/80 shadow-md flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Plane className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary">{item.distance}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

            {activeTab === "train" &&
              VARKALA_HOW_TO_REACH_INFO.train.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-border/80 shadow-md flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Train className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{item.distance}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

            {activeTab === "road" &&
              VARKALA_HOW_TO_REACH_INFO.road.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-border/80 shadow-md flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Bus className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">{item.distance}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Taxi Fares Table */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/80 shadow-md mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                  Estimated Taxi Fares to YogaGarhi Varkala
                </h3>
                <p className="text-xs text-muted-foreground">Standard pre-negotiated driver rates direct to our coastal ashram gates</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/80 text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">Transit Route</th>
                    <th className="py-3 px-4 font-bold">Approx. Cost (USD)</th>
                    <th className="py-3 px-4 font-bold">Approx. Cost (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {VARKALA_HOW_TO_REACH_INFO.taxiFares.map((fare, idx) => (
                    <tr key={idx} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{fare.route}</span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-primary">{fare.costUsd}</td>
                      <td className="py-3.5 px-4 font-bold text-foreground">{fare.costInr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Airport Pickup Assistance Note */}
            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-foreground/90">
                  <strong>We Arrange Airport Pickup:</strong> Share your flight schedule with our admissions team, and our trusted driver will await you at Trivandrum (TRV) or Cochin (COK) arrivals with a personalized name card.
                </p>
              </div>
              <a
                href="https://wa.me/917895350563?text=Namaste!%20I%20would%20like%20to%20request%20airport%20pickup%20information%20for%20Varkala%20Kerala."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <span>Request Pickup</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visa & Travel Advice Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/80 shadow-md mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                  India Visa & Arrival Advice for International Students
                </h3>
                <p className="text-xs text-muted-foreground">Essential travel tips for a smooth arrival in Kerala, India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Indian e-Tourist Visa:</strong> Citizens of over 160 nations can easily apply online for an Indian e-Visa prior to departure via the official Government of India portal.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Validity:</strong> We suggest applying for a 30-day or 1-year multiple-entry e-Tourist visa approximately 2 to 3 weeks before your travel date.</span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Currency & Connectivity:</strong> ATMs and money exchange are widely available in Varkala town. High-speed Wi-Fi is provided at our ashram, and local 5G eSIMs/SIM cards are easily activated.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Check-in Timing:</strong> Official check-in begins at 12:00 PM on the 1st of every month, followed by an evening welcome circle and coastal sunset meditation.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-border/80 shadow-lg bg-card">
            <div className="p-4 border-b border-border/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>YogaGarhi Ashram, Varkala Cliff, Kerala 695141, India (8.7333, 76.7167)</span>
              </div>
              <a
                href="https://maps.google.com/?q=8.7333,76.7167"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative w-full h-72 md:h-80">
              <iframe
                title="YogaGarhi Ashram Varkala Kerala Google Map"
                src="https://maps.google.com/maps?q=8.7333,76.7167&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
