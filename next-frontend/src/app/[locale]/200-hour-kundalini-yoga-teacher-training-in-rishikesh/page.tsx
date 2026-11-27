import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseKundaliniRishikesh from "@/components/pages/CourseKundaliniRishikesh";
import { KUNDALINI_RISHIKESH_READY } from "@/config/specialtyCoursesConfig";
import { BATCHES_KUNDALINI_RISHIKESH } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "Kundalini Yoga Teacher Training in Rishikesh | 200 Hour";
  const description =
    "22-day residential 200 hour Kundalini Yoga Teacher Training in Rishikesh, India. Kriya, pranayama, mantra, meditation & chakra study. From €1350.";
  const canonicalUrl =
    "https://www.yogagarhi.com/200-hour-kundalini-yoga-teacher-training-in-rishikesh";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    robots: KUNDALINI_RISHIKESH_READY
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "YogaGarhi",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dphocpt generic/image/upload/himalayan-lineage.jpg",
          width: 1200,
          height: 630,
          alt: "200 Hour Kundalini Yoga Teacher Training in Rishikesh - YogaGarhi Ashram",
        },
      ],
    },
  };
}

export default async function KundaliniYogaCoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl =
    "https://www.yogagarhi.com/200-hour-kundalini-yoga-teacher-training-in-rishikesh";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_KUNDALINI_RISHIKESH.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P22D",
    location: {
      "@type": "Place",
      name: "YogaGarhi Ashram",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tapovan, Badrinath Road",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249192",
        addressCountry: "India",
      },
    },
  }));

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "200 Hour Kundalini Yoga Teacher Training in Rishikesh",
    description:
      "22-day residential 200-hour traditional Kundalini Yoga teacher training in Rishikesh, India. In-depth study of Kundalini kriyas, pranayama, bandhas, mantras, nadis, and chakras.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "1350",
        priceCurrency: "EUR",
        category: "Double Sharing Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "1750",
        priceCurrency: "EUR",
        category: "Private Room Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
    ],
    hasCourseInstance: courseInstances,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Kundalini yoga safe for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when taught through classical Tantric and Hatha foundations under experienced guidance. Classical Kundalini training at YogaGarhi begins with physical alignment, gentle nervous system strengthening, and balanced breath control.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need prior experience with Kundalini yoga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No prior Kundalini practice is necessary. Having a regular self-practice in any style of yoga or meditation for at least 3 to 6 months is recommended.",
        },
      },
      {
        "@type": "Question",
        name: "Can I teach after completing this course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This 200-hour comprehensive training equips you with in-depth knowledge of Kundalini kriya sequencing, hands-on adjustments, vocal cues, pranayama pacing, meditation instruction, and student safety.",
        },
      },
      {
        "@type": "Question",
        name: "Kundalini vs Hatha — what is the difference?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Classical Hatha Yoga focuses on purifying the physical body, stabilizing postures, and balancing solar and lunar energies. Kundalini Yoga builds upon Hatha foundations by utilizing dynamic repetitive movement sets, intense focused pranayama, energy locks, and sacred mantras.",
        },
      },
      {
        "@type": "Question",
        name: "What is the daily ashram schedule like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Training days begin at 6:00 AM with cleansing kriyas, followed by pranayama, bandhas, and dynamic Kundalini asana. Midday covers philosophy and subtle anatomy, while late afternoon features meditation, practicum, and evening chanting.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The all-inclusive fee covers 21 nights of residential accommodation, 3 freshly cooked sattvic Ayurvedic meals daily, comprehensive 200-hour training manuals, sacred excursions, and certification upon graduation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time of year to come to Rishikesh for Kundalini training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rishikesh offers a sacred atmosphere year-round. October through March provides crisp sunny days, April through June brings warm energetic sunlight, and July through September offers lush Himalayan monsoon tranquility.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reach Rishikesh and the ashram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The closest airport is Dehradun Jolly Grant Airport (DED), located approximately 35 minutes by car from our ashram in Tapovan, Rishikesh.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine this course with sound healing or prenatal training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All specialty programs at YogaGarhi are intentionally scheduled to start 2 days after residential trainings finish, allowing seamless stacking without extra travel overhead.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.yogagarhi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "200 Hour Kundalini Yoga Teacher Training in Rishikesh",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CourseKundaliniRishikesh />
    </>
  );
}
