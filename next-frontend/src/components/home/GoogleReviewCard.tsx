"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { GoogleReview } from "@/constants/googleReviews";

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const tCommon = useTranslations("common");
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 150;

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
          <h3 className="font-medium text-foreground text-sm leading-tight">{review.name}</h3>
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
      <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded && isLongText ? 'line-clamp-4' : ''}`}>
        {review.text}
      </p>
      {isLongText && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
        >
          {expanded ? tCommon("readLess") : tCommon("readMore")}
        </button>
      )}
    </div>
  );
}
