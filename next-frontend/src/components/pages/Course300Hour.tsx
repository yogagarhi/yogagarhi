"use client";
import React from "react";
import { useLocale } from "next-intl";
import CoursePageTemplate from "./CoursePageTemplate";
import { BATCHES_300_HOUR, CourseBatch } from "@/constants/courseDates";
import Course300HourEnglish from "./Course300HourEnglish";

export default function Course300Hour({
  initialBatches,
  syllabusSlot
}: {
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  const locale = useLocale();

  if (locale === "en") {
    return (
      <Course300HourEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  return (
    <CoursePageTemplate
      namespace="course300"
      courseKey="300-hour"
      defaultBatches={BATCHES_300_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        triple: { originalPrice: "$3,125", price: "$2,499" },
        double: { originalPrice: "$3,375", price: "$2,699" },
        private: { originalPrice: "$4,375", price: "$3,499" },
      }}
    />
  );
}
