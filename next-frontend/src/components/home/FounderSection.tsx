import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { useTranslations } from "next-intl";

const founderImage = getCloudinaryImage("founder-image.png");

interface FounderSectionProps {
  researchLink?: string;
}

export default function FounderSection({
  researchLink = "/200-hour-yoga-teacher-training-in-bali#sachinji-research"
}: FounderSectionProps) {
  const t = useTranslations("home.founder");
  const tCommon = useTranslations("common");

  const achievements = [
    { icon: Users, label: t("trainedCount") },
    { icon: Award, label: "E-RYT 500" },
    { icon: Award, label: "Master in Yoga" },
    { icon: Heart, label: t("experienceYears") },
    { icon: Award, label: t("armyTherapy") },
  ];

  return (
    <section
      className="py-12 md:py-24 bg-background relative overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1630px' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - Single Responsive Markup */}
          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-amber-800 dark:text-amber-300 text-sm font-bold tracking-widest uppercase mb-4">
              <Heart className="w-4 h-4" fill="currentColor" />
              {t("meetTeacher")}
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
              Yogacharya Sachin
            </h2>
            <p className="text-primary font-medium text-lg">{t("role")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Image Column */}
            <div className="relative order-1 lg:order-1">
              {/* Decorative Ring */}
              <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={founderImage}
                  alt={t("imageAlt") || "Founder of YogaGarhi"}
                  width={864}
                  height={1184}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float-ultra-smooth">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("founderLeadBadge")}</p>
                    <p className="font-heading text-lg font-semibold text-foreground">YogaGarhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-2 lg:order-2">

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                  >
                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                <p>
                  {t("bio.p1Part1")}<em className="text-foreground font-medium">{t("bio.p1Em")}</em>{t("bio.p1Part2")}
                </p>

                <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                  "{t("bio.quote")}"
                </p>

                <p>
                  {t("bio.p2Part1")}<strong className="text-foreground">{t("bio.p2Strong1")}</strong>{t("bio.p2Part2")}<strong className="text-foreground">{t("bio.p2Strong2")}</strong>{t("bio.p2Part3")}<em className="text-foreground font-medium">{t("bio.p2Em1")}</em>{t("bio.p2Part4")}<em className="text-foreground font-medium">{t("bio.p2Em2")}</em>{t("bio.p2Part5")}
                </p>

                <p>
                  {t("bio.p3Part1")}<strong className="text-foreground">{t("bio.p3Strong")}</strong>{t("bio.p3Part2")}
                </p>
              </div>



              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/teachers" className="flex items-center gap-2">
                    {t("knowMoreTeam")}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>

                <Button size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary/5 px-6" asChild>
                  <Link href={researchLink} className="flex items-center gap-2">
                    {t("discoverResearch")}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
