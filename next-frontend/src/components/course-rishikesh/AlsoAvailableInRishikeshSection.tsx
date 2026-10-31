"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Award, MapPin, Mountain } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { useLocale } from "next-intl";
import { ALSO_AVAILABLE_RISHIKESH } from "@/constants/alsoAvailableTranslations";

const rishikeshSurroundings = getCloudinaryImage("rishikesh-surroundings.png");
const groupPose = getCloudinaryImage("group-pose.png");
const warriorSequence = getCloudinaryImage("warrior-sequence.png");

interface AlsoAvailableInRishikeshSectionProps {
  locale?: string;
}

export default function AlsoAvailableInRishikeshSection({ locale }: AlsoAvailableInRishikeshSectionProps = {}) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const data = (isEn ? null : ALSO_AVAILABLE_RISHIKESH[activeLocale || "en"]) || ALSO_AVAILABLE_RISHIKESH.en;

  const images = [rishikeshSurroundings, groupPose, warriorSequence];
  const paths = [
    "/100-hour-yoga-teacher-training-in-rishikesh",
    "/200-hour-yoga-teacher-training-in-rishikesh",
    "/300-hour-yoga-teacher-training-in-rishikesh"
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="also-in-rishikesh" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Mountain className="w-3.5 h-3.5" />
              <span>{data.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {data.subtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.courses.map((course, idx) => {
              const image = images[idx] || rishikeshSurroundings;
              const path = paths[idx] || "/200-hour-yoga-teacher-training-in-rishikesh";
              const href = isEn ? path : `/${activeLocale}${path}`;

              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold">
                        {data.fromText} {course.price}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{data.location}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-primary" />
                          {course.certification}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={href}
                      className="w-full py-3 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{data.exploreBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
