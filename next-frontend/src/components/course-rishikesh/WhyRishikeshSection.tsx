"use client";
import React from "react";
import Image from "next/image";
import { Mountain, Compass } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { WHY_RISHIKESH_TRANSLATIONS } from "@/constants/whyLocationTranslations";
import { useLocale } from "next-intl";

const rishikeshSurroundings = getCloudinaryImage("rishikesh-surroundings.png");
const gangaCeremony = getCloudinaryImage("ceremony.png");
const himalayanMountain = getCloudinaryImage("mountain-pose.png");

interface WhyRishikeshSectionProps {
  locale?: string;
}

export default function WhyRishikeshSection({ locale }: WhyRishikeshSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : WHY_RISHIKESH_TRANSLATIONS[activeLocale || "en"]) || WHY_RISHIKESH_TRANSLATIONS.en;

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="why-rishikesh" style={{ contentVisibility: "auto", containIntrinsicSize: "950px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
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

          {/* Grid Layout: Content + Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Authoritative Text */}
            <div className="lg:col-span-7 space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Right Column: 3 Authentic Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/80 group">
                <Image
                  src={rishikeshSurroundings}
                  alt="Rishikesh Tapovan ashram serene surroundings overlooking the Himalayan foothills"
                  width={600}
                  height={400}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-4">
                  <p className="text-white text-xs md:text-sm font-semibold flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-primary shrink-0" />
                    <span>{data.photoCaptions.main}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src={gangaCeremony}
                    alt="Evening Ganga Aarti fire ceremony at Parmarth Niketan Rishikesh"
                    width={300}
                    height={220}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-[11px] font-medium leading-tight">
                      {data.photoCaptions.sub1}
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src={himalayanMountain}
                    alt="Outdoor meditation and yoga asana in the serene Tapovan sanctuary"
                    width={300}
                    height={220}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-[11px] font-medium leading-tight">
                      {data.photoCaptions.sub2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
