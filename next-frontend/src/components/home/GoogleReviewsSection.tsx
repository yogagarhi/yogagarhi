"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { googleReviews, GoogleReview } from "@/constants/googleReviews";

// Review Card Component
function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 150;
  const displayText = expanded || !isLongText ? review.text : review.text.slice(0, 150) + "...";

  return (
    <div className="bg-card rounded-xl border border-border p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      {/* Header Row */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-primary-foreground">{review.avatar}</span>
        </div>

        {/* Name & Location */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm leading-tight">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>

        {/* Google Icon */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <use href="#icon-google" />
        </svg>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-2">
        <svg className="h-3.5 w-[76px]" viewBox="0 0 116 20">
          <use href="#icon-5-stars" />
        </svg>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {displayText}
      </p>
      {isLongText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const el = viewportRef.current;
    if (!el) return;

    const width = el.clientWidth;
    el.scrollTo({ left: index * width, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    scrollToIndex((currentIndex + 1) % googleReviews.length);
  }, [currentIndex, scrollToIndex]);

  const prevSlide = useCallback(() => {
    scrollToIndex((currentIndex - 1 + googleReviews.length) % googleReviews.length);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    // Only run on client-side to avoid hydration mismatch
    const timer = setTimeout(() => {
      scrollToIndex(0);
    }, 0);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-md mb-6">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <use href="#icon-google" />
            </svg>
            <span className="text-xl font-bold text-foreground">5.0</span>
            <svg className="h-4 w-[92px]" viewBox="0 0 116 20">
              <use href="#icon-5-stars" />
            </svg>
            <span className="text-muted-foreground text-xs border-l border-border pl-2">100+ Reviews</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Students Say on Google
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Real experiences from our yoga teacher training graduates
          </p>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {googleReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Reviews Carousel - Mobile */}
        <div className="md:hidden relative">
          <div
            ref={viewportRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const width = el.clientWidth || 1;
              const idx = Math.round(el.scrollLeft / width);
              if (idx !== currentIndex) setCurrentIndex(idx);
            }}
          >
            <div className="flex">
              {googleReviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1 snap-start">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-8 h-8"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {googleReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-primary w-5"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-8 h-8"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Yoga+Teacher+Training+in+Bali+-+Yogagarhi/@-8.4645426,115.3278308,18z/data=!4m6!3m5!1s0x2dd219e70aa3e43d:0x281930517f104591!8m2!3d-8.4649127!4d115.3258379!16s%2Fg%2F11xywjhmnz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <use href="#icon-google" />
            </svg>
            <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              View all reviews on Google
            </span>
            <span className="text-blue-500 group-hover:translate-x-1 transition-transform text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
