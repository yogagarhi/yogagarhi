"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Award, MapPin, Sparkles } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { useLocale } from "next-intl";
import { EXPLORE_MORE_COURSES_UI } from "@/constants/courseSectionsTranslations";

const rishikeshSurroundings = getCloudinaryImage("rishikesh-surroundings.png");
const groupPose = getCloudinaryImage("group-pose.png");
const warriorSequence = getCloudinaryImage("warrior-sequence.png");
const heroBali = getCloudinaryImage("hero-yoga-bali.jpg");

interface ExploreMoreCoursesSectionProps {
  currentCourse?: "100-rishikesh" | "200-rishikesh" | "300-rishikesh";
  locale?: string;
}

export default function ExploreMoreCoursesSection({ currentCourse = "200-rishikesh", locale }: ExploreMoreCoursesSectionProps) {
  let activeLocale = locale;
  try {
    const intlLoc = useLocale();
    if (!activeLocale) activeLocale = intlLoc;
  } catch (e) {}

  const isEn = !activeLocale || activeLocale === "en";
  const ui = (isEn ? null : EXPLORE_MORE_COURSES_UI[activeLocale || "en"]) || EXPLORE_MORE_COURSES_UI.en;

  const allCourses = [
    {
      id: "100-rishikesh",
      title: "100 Hour Yoga Teacher Training in Rishikesh",
      location: "Tapovan, Rishikesh, India",
      duration: "12 Days (11 Nights)",
      price: "$599",
      certification: "Foundation Immersion",
      image: rishikeshSurroundings,
      href: "/100-hour-yoga-teacher-training-in-rishikesh",
      description: "Ideal foundation course for beginners or time-constrained yogis seeking deep spiritual immersion along the sacred Ganges."
    },
    {
      id: "200-rishikesh",
      title: "200 Hour Yoga Teacher Training in Rishikesh",
      location: "Tapovan, Rishikesh, India",
      duration: "28 Days (27 Nights)",
      price: "$999",
      certification: "Yoga Alliance RYT 200",
      image: groupPose,
      href: "/200-hour-yoga-teacher-training-in-rishikesh",
      description: "Internationally accredited flagship teacher training. Master multi-style asana, anatomy, philosophy, and alignment in an 8-10 student batch."
    },
    {
      id: "300-rishikesh",
      title: "300 Hour Yoga Teacher Training in Rishikesh",
      location: "Tapovan, Rishikesh, India",
      duration: "28 Days (27 Nights)",
      price: "$1,099",
      certification: "RYT 500 Pathway",
      image: warriorSequence,
      href: "/300-hour-yoga-teacher-training-in-rishikesh",
      description: "Advanced master-level training for 200-hour certified teachers. Deepen into therapeutic sequencing, advanced asanas, and classical texts."
    },
    {
      id: "200-bali",
      title: "200 Hour Yoga Teacher Training in Bali",
      location: "Gianyar, Bali, Indonesia",
      duration: "28 Days (27 Nights)",
      price: "$1,299",
      certification: "Yoga Alliance RYT 200",
      image: heroBali,
      href: "/200-hour-yoga-teacher-training-in-bali",
      description: "Immerse in tropical jungle serenity, sacred water cleansing, sound healing, and holistic yoga teacher training in Bali."
    }
  ];

  const displayCourses = allCourses.filter((c) => c.id !== currentCourse);

  const getHref = (path: string) => {
    if (isEn) return path;
    return `/${activeLocale}${path}`;
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="explore-more-courses" style={{ contentVisibility: "auto", containIntrinsicSize: "850px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{ui.badge}</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {ui.title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {ui.subtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      {course.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {course.location.split(",")[0]}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {course.duration.split("(")[0]}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {course.certification}
                    </p>

                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={getHref(course.href)}
                    className="w-full py-3 px-4 rounded-xl bg-secondary text-foreground text-xs font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <span>{ui.exploreCourse}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
