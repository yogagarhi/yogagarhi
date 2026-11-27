import { BATCHES_100_HOUR_RISHIKESH, CourseBatch } from "@/constants/courseDates";

export default async function Course100HourRishikesh({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course100HourRishikeshEnglish = (await import("./Course100HourRishikeshEnglish")).default;
    return (
      <Course100HourRishikeshEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course100Rishikesh"
      courseKey="100-hour-rishikesh"
      defaultBatches={BATCHES_100_HOUR_RISHIKESH}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: { originalPrice: "€900", price: "€900" },
        triple: { originalPrice: "€900", price: "€900" },
        double: { originalPrice: "€900", price: "€900" },
        private: { originalPrice: "€900", price: "€900" },
        datesCard: {
          tuition: { originalPrice: "€900", price: "€900" },
          triple: { originalPrice: "€900", price: "€900" },
          double: { originalPrice: "€900", price: "€900" },
          private: { originalPrice: "€900", price: "€900" },
        }
      }}
    />
  );
}
