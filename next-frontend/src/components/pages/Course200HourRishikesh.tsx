import { BATCHES_200_HOUR_RISHIKESH, CourseBatch } from "@/constants/courseDates";

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
      defaultBatches={BATCHES_200_HOUR_RISHIKESH}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "€1,550", price: "€1,550" },
        tuition: { originalPrice: "€1,550", price: "€1,550" },
        triple: { originalPrice: "€1,550", price: "€1,550" },
        double: { originalPrice: "€1,550", price: "€1,550" },
        private: { originalPrice: "€2,000", price: "€2,000" },
        datesCard: {
          tuition: { originalPrice: "€1,550", price: "€1,550" },
          triple: { originalPrice: "€1,550", price: "€1,550" },
          double: { originalPrice: "€1,550", price: "€1,550" },
          private: { originalPrice: "€2,000", price: "€2,000" },
        }
      }}
    />
  );
}
