"use client";
import React from "react";
import { useLocale } from "next-intl";
import CoursePageTemplate from "./CoursePageTemplate";
import { BATCHES_200_HOUR, CourseBatch } from "@/constants/courseDates";
import Course200HourRishikeshEnglish from "./Course200HourRishikeshEnglish";

export default function Course200HourRishikesh({
  initialBatches,
  syllabusSlot
}: {
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  const locale = useLocale();

  if (locale === "en") {
    return (
      <Course200HourRishikeshEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  return (
    <CoursePageTemplate
      namespace="course200Rishikesh"
      courseKey="200-hour-rishikesh"
      defaultBatches={BATCHES_200_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        tuition: { originalPrice: "$1,299", price: "$999" },
        triple: { originalPrice: "$2,187", price: "$1,750" },
        double: { originalPrice: "$2,370", price: "$1,899" },
        private: { originalPrice: "$3,125", price: "$2,499" },
      }}
    />
  );
}
