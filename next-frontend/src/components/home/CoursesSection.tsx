import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import CoursesHelpButton from "./CoursesHelpButton";
import { getTranslations } from "next-intl/server";

const course100hr = getCloudinaryImage("course-100hr-new.png");
const course200hr = getCloudinaryImage("course-200hr-new.png");
const course300hr = getCloudinaryImage("course-300hr-v2.png");

export default async function CoursesSection() {
  const t = await getTranslations("home.courses");
  const tCommon = await getTranslations("common");

  const courses = [
    {
      hours: "100",
      title: t("c100Title"),
      badgeTitle: `${tCommon("hours")} YTTC`,
      tagline: t("c100Tagline"),
      description: t("c100Desc"),
      duration: `12 ${tCommon("days")}`,
      level: t("beginner"),
      price: "$599",
      originalPrice: "$899",
      savings: "$300",
      href: "/100-hour-yoga-teacher-training-in-bali",
      image: course100hr,
    },
    {
      hours: "200",
      title: t("c200Title"),
      badgeTitle: `${tCommon("hours")} YTTC`,
      tagline: t("c200Tagline"),
      description: t("c200Desc"),
      duration: `24 ${tCommon("days")}`,
      level: t("beginnerToIntermediate"),
      price: "$999",
      originalPrice: "$1299",
      savings: "$300",
      href: "/200-hour-yoga-teacher-training-in-bali",
      image: course200hr,
      featured: true,
    },
    {
      hours: "300",
      title: t("c300Title"),
      badgeTitle: `${tCommon("hours")} YTTC`,
      tagline: t("c300Tagline"),
      description: t("c300Desc"),
      duration: `28 ${tCommon("days")}`,
      level: t("intermediateToAdvanced"),
      price: "$2399",
      originalPrice: "$2999",
      savings: "$600",
      href: "/300-hour-yoga-teacher-training-in-bali",
      image: course300hr,
    },
  ];

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 2150px' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">{t("tag")}</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-primary">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.hours}
                className="w-full group"
              >
                {/* Card */}
                <div className={`relative h-full rounded-3xl overflow-hidden ${course.featured
                  ? 'ring-2 ring-primary/30'
                  : 'border border-border/40'
                  }`}>
                  {/* Featured Label */}
                  {course.featured && (
                    <div className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                      {t("popularChoice")}
                    </div>
                  )}

                  {/* Image Section */}
                  <div className={`relative h-56 md:h-64 overflow-hidden ${course.featured ? 'mt-8' : ''}`}>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 360px, (max-width: 1024px) 50vw, 380px"
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${course.hours === "200" ? "object-top" : ""
                        }`}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                    {/* Hours Badge */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-white/70 text-xs uppercase tracking-[0.15em] mb-1">{course.tagline}</p>
                      <h3 className="font-heading text-5xl font-bold text-white">
                        {course.hours}
                        <span className="text-lg font-normal ml-2 text-white/80">{course.badgeTitle}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="bg-muted/30 p-4 sm:p-6 min-w-0">
                    {/* Quick Info */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 pb-4 border-b border-border/40 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="w-px h-3.5 sm:h-4 bg-border hidden min-[400px]:block" />
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                        <span className="break-words">{course.level}</span>
                      </div>
                    </div>

                    {/* Course Description */}
                    <p className="text-sm text-sidebar-foreground/80 leading-relaxed mb-6 min-h-[40px] break-words">
                      {course.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("startingFrom")}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-bold text-foreground">{course.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/40 px-3 py-1.5 rounded-full">
                        {t("save")} {course.savings}
                      </span>
                    </div>

                    {/* CTA */}
                    <Button
                      size="lg"
                      className={`w-full group/btn ${course.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10'
                        }`}
                      asChild
                    >
                      <Link href={course.href} className="flex items-center justify-center gap-2">
                        {t("exploreCourse")}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Exploration Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-secondary/30 border border-border/60 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-foreground">Explore Our Global Training Campuses</p>
            <p className="text-xs text-muted-foreground">Yoga Alliance certified residential courses in Bali, Rishikesh & Varkala (Kerala)</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/200-hour-yoga-teacher-training-in-bali" className="px-3.5 py-1.5 rounded-lg bg-background border border-border text-xs font-semibold hover:border-primary transition-colors">
              🌴 Bali Campus
            </Link>
            <Link href="/200-hour-yoga-teacher-training-in-rishikesh" className="px-3.5 py-1.5 rounded-lg bg-background border border-border text-xs font-semibold hover:border-primary transition-colors">
              ⛰️ Rishikesh Campus
            </Link>
            <Link href="/200-hour-yoga-teacher-training-in-varkala" className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
              🌊 Varkala (Kerala) Campus
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-3">{t("needHelp")}</p>
          <CoursesHelpButton />
        </div>
      </div>
    </section>
  );
}
