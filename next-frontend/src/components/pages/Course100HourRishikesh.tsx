"use client";
import React from "react";
import CoursePageTemplate from "./CoursePageTemplate";
import { BATCHES_100_HOUR, CourseBatch } from "@/constants/courseDates";

export default function Course100HourRishikesh({
  initialBatches,
  syllabusSlot
}: {
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  return (
    <CoursePageTemplate
      namespace="course100Rishikesh"
      courseKey="100-hour-rishikesh"
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
