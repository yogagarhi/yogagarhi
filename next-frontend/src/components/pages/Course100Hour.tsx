"use client";
import React from "react";
import { useLocale } from "next-intl";
import CoursePageTemplate from "./CoursePageTemplate";
import { BATCHES_100_HOUR, CourseBatch } from "@/constants/courseDates";
import Course100HourEnglish from "./Course100HourEnglish";

export default function Course100Hour({
  initialBatches,
  syllabusSlot
}: {
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  const locale = useLocale();

  if (locale === "en") {
    return (
      <Course100HourEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  return (
    <CoursePageTemplate
      namespace="course100"
      courseKey="100-hour"
      defaultBatches={BATCHES_100_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        triple: { originalPrice: "$1,399", price: "$1,149" },
        double: { originalPrice: "$1,649", price: "$1,349" },
        private: { originalPrice: "$1,999", price: "$1,649" },
      }}
    />
  );
}
