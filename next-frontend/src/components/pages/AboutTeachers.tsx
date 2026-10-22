"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Award, Clock, Heart, Users, BookOpen, Mountain, Flame, Star, ChevronDown } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { useTranslations } from "next-intl";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");

// Teacher Images
const sachinJiImg = getCloudinaryImage("founder-image.png");
const chandaJiImg = getCloudinaryImage("chanda-ji-hd.png");
const rahulJiImg = getCloudinaryImage("rahul-ji-hd.png");
const rohitJiImg = getCloudinaryImage("rohit-ji-hd.png");
const abhishekJiImg = getCloudinaryImage("abhishek-ji-hd.png");
const ankitJiImg = getCloudinaryImage("ankit-ji-hd.png");

// Lotus SVG decoration
const LotusDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 55 C50 40, 30 30, 20 40 C10 50, 30 55, 50 55" />
    <path d="M50 55 C50 40, 70 30, 80 40 C90 50, 70 55, 50 55" />
    <path d="M50 55 C50 35, 35 20, 30 30 C25 40, 40 50, 50 55" />
    <path d="M50 55 C50 35, 65 20, 70 30 C75 40, 60 50, 50 55" />
    <path d="M50 55 C50 30, 50 15, 50 25 C50 35, 50 45, 50 55" />
  </svg>
);

interface Teacher {
  name: string;
  role: string;
  image: any;
  shortDesc: string;
  fullDesc: string;
  specialties: string[];
}

// Teacher Card Component with Read More
function TeacherCard({ teacher, t }: { teacher: Teacher; t: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group rounded-3xl overflow-hidden bg-card border border-border/40 transition-all hover:shadow-xl hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill sizes="(max-width: 768px) 100vw, 33vw" 
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 text-white">
          <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{teacher.role}</p>
          <h3 className="font-heading text-xl font-bold">{teacher.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-muted-foreground text-sm leading-relaxed">
          <p>{teacher.shortDesc}</p>

          {isExpanded && (
            <div className="mt-4 space-y-3 text-foreground/80">
              {teacher.fullDesc.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 mt-4 text-primary font-medium text-sm hover:underline transition-colors"
        >
          {isExpanded ? t("readLess") : t("readMore")}
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/40">
          {teacher.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutTeachers() {
  const { setShowEnrollDialog } = useEnrollment();
  const t = useTranslations("teachers");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [founderExpanded, setFounderExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const founderAchievements = [
    { icon: Users, label: t("achieveStudents") },
    { icon: Award, label: t("achieveCert") },
    { icon: Clock, label: t("achieveExp") },
    { icon: Heart, label: t("achieveSpec") },
  ];

  const teachingPillars = [
    {
      icon: Mountain,
      title: t("p1Title"),
      desc: t("p1Desc")
    },
    {
      icon: BookOpen,
      title: t("p2Title"),
      desc: t("p2Desc")
    },
    {
      icon: Flame,
      title: t("p3Title"),
      desc: t("p3Desc")
    },
    {
      icon: Users,
      title: t("p4Title"),
      desc: t("p4Desc")
    },
  ];

  const teachers: Teacher[] = [
    {
      name: "Chanda Ji",
      role: t("chandaRole"),
      image: chandaJiImg,
      shortDesc: t("chandaShort"),
      fullDesc: t("chandaFull"),
      specialties: [t("chandaSpec1"), t("chandaSpec2"), t("chandaSpec3")],
    },
    {
      name: "Rahul Ji",
      role: t("rahulRole"),
      image: rahulJiImg,
      shortDesc: t("rahulShort"),
      fullDesc: t("rahulFull"),
      specialties: [t("rahulSpec1"), t("rahulSpec2"), t("rahulSpec3")],
    },
    {
      name: "Rohit Ji",
      role: t("rohitRole"),
      image: rohitJiImg,
      shortDesc: t("rohitShort"),
      fullDesc: t("rohitFull"),
      specialties: [t("rohitSpec1"), t("rohitSpec2"), t("rohitSpec3")],
    },
    {
      name: "Abhishek Ji",
      role: t("abhishekRole"),
      image: abhishekJiImg,
      shortDesc: t("abhishekShort"),
      fullDesc: t("abhishekFull"),
      specialties: [t("abhishekSpec1"), t("abhishekSpec2"), t("abhishekSpec3")],
    },
    {
      name: "Ankit Ji",
      role: t("ankitRole"),
      image: ankitJiImg,
      shortDesc: t("ankitShort"),
      fullDesc: t("ankitFull"),
      specialties: [t("ankitSpec1"), t("ankitSpec2"), t("ankitSpec3")],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill sizes="100vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-foreground/40" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">{t("heroBadge")}</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("heroHeading")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {t("heroSub")}
          </p>
        </div>
      </section>

      {/* Teaching Philosophy Banner */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">
            {t("bannerLead")}
            <span className="text-foreground font-medium">{t("bannerEm")}</span>
          </p>
        </div>
      </section>

      {/* Founder Section - Sachin Ji */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image Column */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={sachinJiImg}
                    alt="Yogacharya Sachin - Founder of YogaGarhi"
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
                      <p className="text-sm text-muted-foreground">{t("founderCardRole")}</p>
                      <p className="font-heading text-lg font-semibold text-foreground">{t("founderCardSchool")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div>
                <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  {t("founderBadge")}
                </span>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {t("founderName")}
                </h2>
                <p className="text-primary font-medium text-lg mb-6">{t("founderTitle")}</p>

                <div className="space-y-5 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    {t("founderBioP1")}
                  </p>

                  {founderExpanded && (
                    <>
                      <p>
                        {t("founderBioP2")}
                      </p>

                      <p>
                        {t("founderBioP3")}
                      </p>

                      <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                        {t("founderQuote")}
                      </p>
                    </>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setFounderExpanded(!founderExpanded)}
                  className="flex items-center gap-1 mb-8 text-primary font-medium hover:underline transition-colors"
                >
                  {founderExpanded ? t("founderReadLess") : t("founderReadMore")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${founderExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3">
                  {founderAchievements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Pillars */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              {t("pillarsBadge")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("pillarsHeading")}
            </h2>
            <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachingPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              {t("facultyBadge")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("facultyHeading")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("facultySub")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.name} teacher={teacher} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Teaching Unique */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("uniqueHeading")}
              </h2>
              <p className="text-muted-foreground">
                {t("uniqueSub")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("u1Title")}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("u1Desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("u2Title")}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("u2Desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("u3Title")}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("u3Desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("u4Title")}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("u4Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <ReadyToBeginSection />
    </>
  );
}
