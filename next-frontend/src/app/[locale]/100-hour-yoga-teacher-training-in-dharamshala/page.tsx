import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Course100HourDharamshala from "@/components/pages/Course100HourDharamshala";
import { DHARAMSHALA_100_READY } from "@/config/dharamshalaConfig";
import { BATCHES_100_HOUR_DHARAMSHALA } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "100 Hour Yoga Teacher Training in Dharamshala, Himalayas";
  const description =
    "12-day 100 hour yoga teacher training in Dharamshala, Himalayas. Build a strong foundation in asana, pranayama & meditation. From €850.";
  const canonicalUrl =
    "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-dharamshala";

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
    robots: DHARAMSHALA_100_READY
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
          alt: "100 Hour Yoga Teacher Training in Dharamshala - YogaGarhi Himalayan Sanctuary",
        },
      ],
    },
  };
}

export default async function Dharamshala100HourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl =
    "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-dharamshala";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_100_HOUR_DHARAMSHALA.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P12D",
    location: {
      "@type": "Place",
      name: "YogaGarhi Himalayan Sanctuary",
      address: {
        "@type": "PostalAddress",
        streetAddress: "[[CONFIRM_VENUE: McLeod Ganj / Dharamkot / Bhagsu]]",
        addressLocality: "Dharamshala",
        addressRegion: "Himachal Pradesh",
        postalCode: "176219",
        addressCountry: "India",
      },
    },
  }));

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "100 Hour Yoga Teacher Training in Dharamshala",
    description:
      "12-day foundational residential yoga teacher training in Dharamshala, Himalayas, India. Authentic Hatha and Ashtanga alignment, daily pranayama, mindfulness meditation, philosophy, and practical adjustments.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "850",
        priceCurrency: "EUR",
        category: "Double Sharing Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "1050",
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
        name: "Can I teach professionally after completing 100 hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 100-hour program is an intensive foundational immersion and deepening retreat. While you receive an official 100-Hour Yoga Foundation Certificate from YogaGarhi upon graduation, international registration as a Registered Yoga Teacher (RYT 200) requires completing a full 200-hour curriculum. The 100-hour course is perfect for personal practice, self-transformation, or as a stepping stone.",
        },
      },
      {
        "@type": "Question",
        name: "Can I continue to the 200 hour course later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. [[CONFIRM: can 100hr be credited towards 200hr?]] Students who complete our 100-hour foundational training can return to complete their remaining 100 hours within 12 months to earn their full 200-hour Yoga Teacher Training Diploma.",
        },
      },
      {
        "@type": "Question",
        name: "Is Dharamshala good for a short yoga immersion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dharamshala (also spelled Dharamsala), nestled in the Himalayan foothills of Himachal Pradesh, provides an unmatched serene setting for a 12-day retreat. Crisp mountain breezes, clean natural springs, and pine forests allow you to disconnect from hectic routines and reconnect with your inner stillness.",
        },
      },
      {
        "@type": "Question",
        name: "Will the altitude affect me during this 12-day course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our sanctuary is located at an altitude of around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]. Most students acclimate easily within 24 to 36 hours. Because this is a 12-day course, we pace the initial days with grounding restorative asana, conscious diaphragmatic breathwork, gentle stretching, and hydration reminders to ensure full physical vitality without fatigue. We recommend taking it easy for the first few days, drinking plenty of water, and bringing warm layers for cool mountain mornings and evenings.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time of year to take the 100-hour training in Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spring (March to June) and autumn (September to November) provide ideal conditions with sunny, pleasant days and cool mountain nights. July and August bring lush monsoon rains with meditative indoor practice, while winter months are very cold.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reach the ashram in Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can fly directly into Gaggal Kangra Airport (DHM), approximately 15 to 20 km away (30–45 minutes by taxi). Alternatively, regular overnight AC Volvo sleeper buses connect New Delhi (Kashmiri Gate ISBT) to McLeod Ganj/Dharamshala in 10–11 hours. Pathankot railway junction is 85 km away.",
        },
      },
      {
        "@type": "Question",
        name: "Is this course suitable for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. The 100-hour immersion was designed specifically for beginners and curious practitioners who wish to build a rock-solid foundation in postures, alignment, breath mechanics, and meditation without committing to an entire month away from work.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the €850 fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The all-inclusive fee covers 11 nights of residential accommodation, 3 freshly cooked sattvic Ayurvedic vegetarian meals daily, comprehensive course manuals, yoga prop access, guided Sunday excursion to Bhagsu waterfall, and your 100-Hour Certificate.",
        },
      },
      {
        "@type": "Question",
        name: "What should I pack for Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bring comfortable yoga clothing, warm thermal layers and a fleece jacket for cool mornings and evenings, walking or trekking shoes, personal toiletries, a refillable water bottle, a small flashlight, and a notebook for journaling.",
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
        name: "Yoga Teacher Training Dharamshala",
        item: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-dharamshala",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "100 Hour Yoga Teacher Training in Dharamshala",
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
      <Course100HourDharamshala />
    </>
  );
}
