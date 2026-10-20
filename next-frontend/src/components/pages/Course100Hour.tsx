import { BATCHES_100_HOUR, CourseBatch } from "@/constants/courseDates";

export default async function Course100Hour({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course100HourEnglish = (await import("./Course100HourEnglish")).default;
    return (
      <Course100HourEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course100"
      courseKey="100-hour"
      defaultBatches={BATCHES_100_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$899", price: "$599" },
        triple: { originalPrice: "$1,399", price: "$1,149" },
        double: { originalPrice: "$1,649", price: "$1,349" },
        private: { originalPrice: "$1,999", price: "$1,649" },
        datesCard: {
          tuition: { originalPrice: "$899", price: "$599" },
          triple: { originalPrice: "$1,449", price: "$1,149" },
          double: { originalPrice: "$1,649", price: "$1,349" },
          private: { originalPrice: "$1,949", price: "$1,649" },
        }
      }}
    />
  );
}
