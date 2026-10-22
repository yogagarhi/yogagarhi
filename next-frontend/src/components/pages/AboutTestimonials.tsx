"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote, Star, MapPin, ArrowRight } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import { getCloudinaryImage } from "@/utils/cloudinary";
const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
import Image from "next/image";
import { googleReviews, GoogleReview } from "@/constants/googleReviews";
import { useTranslations } from "next-intl";

export default function AboutTestimonials() {
  const { setShowEnrollDialog } = useEnrollment();
  const t = useTranslations("testimonials");

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

      {/* Student Stories Section */}
      <StudentStoriesSection initialVisibleCount={5} />

      {/* Stats Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm">{t("statsGraduates")}</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground text-sm">{t("statsCountries")}</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
              <p className="text-muted-foreground text-sm">{t("statsRating")}</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-sm">{t("statsRecommend")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid - Single Unified Responsive Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">{t("gridBadge")}</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t("gridHeading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {googleReviews.map((review, index) => (
              <TestimonialCard key={review.name} review={review} index={index} t={t} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Yoga+Teacher+Training+in+Bali+-+Yogagarhi/@-8.4645426,115.3278308,18z/data=!4m6!3m5!1s0x2dd219e70aa3e43d:0x281930517f104591!8m2!3d-8.4649127!4d115.3258379!16s%2Fg%2F11xywjhmnz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {t("viewAllGoogle")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <ReadyToBeginSection />
    </>
  );
}

function TestimonialCard({ review, index, t }: { review: GoogleReview; index: number; t: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-3xl overflow-hidden transition-all hover:shadow-xl bg-card flex flex-col ${
        index === 0 ? 'ring-2 ring-primary/20' : 'border border-border/40'
      }`}
    >
      {index === 0 && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
          {t("featuredStory")}
        </div>
      )}
      <div className="bg-muted/30 p-6 flex flex-col flex-1">
        <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />
        <div className="flex-1 mb-6">
          <p className={`text-foreground/80 leading-relaxed italic ${!expanded ? 'line-clamp-6 md:line-clamp-none' : ''}`}>
            "{review.text}"
          </p>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-primary hover:text-primary/80 font-medium mt-2 md:hidden"
          >
            {expanded ? t("readLess") : t("readMore")}
          </button>
        </div>
        <div className="pt-4 border-t border-border/40 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{review.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {review.location}
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            {review.date}
          </div>
        </div>
      </div>
    </div>
  );
}
