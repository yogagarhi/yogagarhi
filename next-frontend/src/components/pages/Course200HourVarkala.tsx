import { BATCHES_200_HOUR_VARKALA, CourseBatch } from "@/constants/courseDates";

export default async function Course200HourVarkala({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course200HourVarkalaEnglish = (await import("./Course200HourVarkalaEnglish")).default;
    return (
      <Course200HourVarkalaEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course200Varkala"
      courseKey="200-hour-varkala"
      defaultBatches={BATCHES_200_HOUR_VARKALA}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$1,199", price: "$999" },
        tuition: { originalPrice: "$1,199", price: "$999" },
        triple: { originalPrice: "$1,499", price: "$1,299" },
        double: { originalPrice: "$1,699", price: "$1,499" },
        private: { originalPrice: "$1,999", price: "$1,799" },
        datesCard: {
          tuition: { originalPrice: "$1,199", price: "$999" },
          triple: { originalPrice: "$1,499", price: "$1,299" },
          double: { originalPrice: "$1,699", price: "$1,499" },
          private: { originalPrice: "$1,999", price: "$1,799" },
        }
      }}
    />
  );
}
