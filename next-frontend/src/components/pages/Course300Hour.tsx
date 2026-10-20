import { BATCHES_300_HOUR, CourseBatch } from "@/constants/courseDates";

export default async function Course300Hour({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course300HourEnglish = (await import("./Course300HourEnglish")).default;
    return (
      <Course300HourEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course300"
      courseKey="300-hour"
      defaultBatches={BATCHES_300_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$3,125", price: "$2,499" },
        triple: { originalPrice: "$3,125", price: "$2,499" },
        double: { originalPrice: "$3,375", price: "$2,699" },
        private: { originalPrice: "$4,375", price: "$3,499" },
        datesCard: {
          triple: { originalPrice: "$2,799", price: "$2,499" },
          double: { originalPrice: "$2,999", price: "$2,699" },
          private: { originalPrice: "$3,799", price: "$3,499" },
        }
      }}
    />
  );
}
