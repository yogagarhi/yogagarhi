"use client";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { googleReviews } from "@/constants/googleReviews";
import { GoogleReviewCard } from "./GoogleReviewCard";

export default function GoogleReviewsMobileCarousel() {
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

  return (
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
              <GoogleReviewCard review={review} />
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
        <div className="flex gap-1.5 items-center">
          {googleReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              className="relative p-2.5 flex items-center justify-center -m-1 focus:outline-none"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-primary w-5"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
              />
            </button>
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
  );
}
