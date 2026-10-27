import { BATCHES_100_HOUR_VARKALA, CourseBatch } from "@/constants/courseDates";

export default async function Course100HourVarkala({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course100HourVarkalaEnglish = (await import("./Course100HourVarkalaEnglish")).default;
    return (
      <Course100HourVarkalaEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course100Varkala"
      courseKey="100-hour-varkala"
      defaultBatches={BATCHES_100_HOUR_VARKALA}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$799", price: "$599" },
        tuition: { originalPrice: "$799", price: "$599" },
        triple: { originalPrice: "$999", price: "$799" },
        double: { originalPrice: "$1,199", price: "$999" },
        private: { originalPrice: "$1,399", price: "$1,199" },
        datesCard: {
          tuition: { originalPrice: "$799", price: "$599" },
          triple: { originalPrice: "$999", price: "$799" },
          double: { originalPrice: "$1,199", price: "$999" },
          private: { originalPrice: "$1,399", price: "$1,199" },
        }
      }}
    />
  );
}
