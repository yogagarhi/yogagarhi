import { BATCHES_300_HOUR_RISHIKESH, CourseBatch } from "@/constants/courseDates";
import { COURSE_300_HOUR_RISHIKESH_PRICING } from "@/constants/pricing";

export default async function Course300HourRishikesh({
  locale = "en",
  initialBatches,
  syllabusSlot
}: {
  locale?: string;
  initialBatches?: CourseBatch[];
  syllabusSlot?: React.ReactNode;
} = {}) {
  if (locale === "en") {
    const Course300HourRishikeshEnglish = (await import("./Course300HourRishikeshEnglish")).default;
    return (
      <Course300HourRishikeshEnglish
        initialBatches={initialBatches}
        syllabusSlot={syllabusSlot}
      />
    );
  }

  const CoursePageTemplate = (await import("./CoursePageTemplate")).default;
  return (
    <CoursePageTemplate
      namespace="course300Rishikesh"
      courseKey="300-hour-rishikesh"
      defaultBatches={BATCHES_300_HOUR_RISHIKESH}
      initialBatches={initialBatches}
      syllabusSlot={syllabusSlot}
      pricingConfig={{
        heroStartingPrice: {
          originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.shared.originalPrice,
          price: COURSE_300_HOUR_RISHIKESH_PRICING.shared.price
        },
        tuition: {
          originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.shared.originalPrice,
          price: COURSE_300_HOUR_RISHIKESH_PRICING.shared.price
        },
        triple: {
          originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.triple.originalPrice,
          price: COURSE_300_HOUR_RISHIKESH_PRICING.triple.price
        },
        double: {
          originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.deluxe.originalPrice,
          price: COURSE_300_HOUR_RISHIKESH_PRICING.deluxe.price
        },
        private: {
          originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.vip.originalPrice,
          price: COURSE_300_HOUR_RISHIKESH_PRICING.vip.price
        },
        datesCard: {
          tuition: {
            originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.shared.originalPrice,
            price: COURSE_300_HOUR_RISHIKESH_PRICING.shared.price
          },
          triple: {
            originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.triple.originalPrice,
            price: COURSE_300_HOUR_RISHIKESH_PRICING.triple.price
          },
          double: {
            originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.deluxe.originalPrice,
            price: COURSE_300_HOUR_RISHIKESH_PRICING.deluxe.price
          },
          private: {
            originalPrice: COURSE_300_HOUR_RISHIKESH_PRICING.vip.originalPrice,
            price: COURSE_300_HOUR_RISHIKESH_PRICING.vip.price
          },
        }
      }}
    />
  );
}
