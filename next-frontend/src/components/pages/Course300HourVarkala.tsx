import { BATCHES_300_HOUR_VARKALA, CourseBatch } from "@/constants/courseDates";

export default async function Course300HourVarkala({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course300HourVarkalaEnglish = (await import("./Course300HourVarkalaEnglish")).default;
    return (
      <Course300HourVarkalaEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course300Varkala"
      courseKey="300-hour-varkala"
      defaultBatches={BATCHES_300_HOUR_VARKALA}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$1,299", price: "$1,099" },
        tuition: { originalPrice: "$1,299", price: "$1,099" },
        triple: { originalPrice: "$1,599", price: "$1,399" },
        double: { originalPrice: "$1,899", price: "$1,699" },
        private: { originalPrice: "$2,199", price: "$1,999" },
        datesCard: {
          tuition: { originalPrice: "$1,299", price: "$1,099" },
          triple: { originalPrice: "$1,599", price: "$1,399" },
          double: { originalPrice: "$1,899", price: "$1,699" },
          private: { originalPrice: "$2,199", price: "$1,999" },
        }
      }}
    />
  );
}
