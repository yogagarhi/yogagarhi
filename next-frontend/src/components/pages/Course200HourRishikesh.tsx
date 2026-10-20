import { BATCHES_200_HOUR, CourseBatch } from "@/constants/courseDates";

export default async function Course200HourRishikesh({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course200HourRishikeshEnglish = (await import("./Course200HourRishikeshEnglish")).default;
    return (
      <Course200HourRishikeshEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course200Rishikesh"
      courseKey="200-hour-rishikesh"
      defaultBatches={BATCHES_200_HOUR}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "$1,299", price: "$999" },
        tuition: { originalPrice: "$1,299", price: "$999" },
        triple: { originalPrice: "$2,187", price: "$1,750" },
        double: { originalPrice: "$2,370", price: "$1,899" },
        private: { originalPrice: "$3,125", price: "$2,499" },
        datesCard: {
          tuition: { originalPrice: "$1,299", price: "$999" },
          triple: { originalPrice: "$2,050", price: "$1,750" },
          double: { originalPrice: "$2,199", price: "$1,899" },
          private: { originalPrice: "$2,799", price: "$2,499" },
        }
      }}
    />
  );
}
