import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Course200HourDharamshala from "@/components/pages/Course200HourDharamshala";
import { DHARAMSHALA_200_READY } from "@/config/dharamshalaConfig";
import { BATCHES_200_HOUR_DHARAMSHALA } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "Yoga Teacher Training in Dharamshala | 200 Hour YTT";
  const description =
    "22-day 200 hour yoga teacher training in Dharamshala, in the Himalayas. Hatha, Ashtanga, pranayama, meditation & teaching practice. From €1450.";
  const canonicalUrl =
    "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-dharamshala";

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
    robots: DHARAMSHALA_200_READY
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
          alt: "200 Hour Yoga Teacher Training in Dharamshala - YogaGarhi Ashram",
        },
      ],
    },
  };
}

export default async function Dharamshala200HourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl =
    "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-dharamshala";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_200_HOUR_DHARAMSHALA.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P22D",
    location: {
      "@type": "Place",
      name: "YogaGarhi Himalayan Ashram",
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
    name: "200 Hour Yoga Teacher Training in Dharamshala",
    description:
      "22-day residential 200-hour yoga teacher training in Dharamshala, Himalayas, India. Authentic Hatha, Ashtanga Vinyasa, pranayama, meditation, anatomy, and teaching methodology.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "1450",
        priceCurrency: "EUR",
        category: "Double Sharing Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "1850",
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
        name: "Is Dharamshala good for yoga teacher training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dharamshala, nestled in the elevated Dhauladhar range of the Indian Himalayas in Himachal Pradesh, is one of the world's premier destinations for authentic yoga and contemplative sadhana. Surrounded by majestic cedar and deodar forests, clean mountain springs, and Tibetan Buddhist monasteries, Dharamshala offers a tranquil, cool mountain climate with significantly less traffic and commercial bustle than lower-altitude destinations.",
        },
      },
      {
        "@type": "Question",
        name: "Dharamshala or Rishikesh — which is better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both destinations possess rich spiritual roots. Rishikesh is the historic birthplace of yoga on the sacred river Ganges, featuring warm subtropical weather and grand evening Aarti ceremonies. Dharamshala (often spelled Dharamsala) sits higher in the Himalayan foothills (1,400–2,100 m), offering cooler mountain breezes, lush pine forests, a strong Tibetan Buddhist meditation heritage, and a quieter, deeply introspective retreat atmosphere.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time of year to take yoga teacher training in Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most pleasant seasons are spring (March through June) and autumn (September through November). Spring brings blooming rhododendrons and crisp, sunny days. Autumn provides golden Himalayan light, clear views of the Dhauladhar peaks, and ideal conditions for outdoor meditation. The winter months (December to February) are very cold with nearby snow, and July–August brings heavy Himalayan monsoon rains.",
        },
      },
      {
        "@type": "Question",
        name: "What about the monsoon season in Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dharamshala experiences substantial rainfall during July and August. At YogaGarhi, our campus features fully enclosed, heated indoor yoga shalas with panoramic forest views. Practicing inside during the monsoon creates a deeply meditative, purifying environment. However, students should bring waterproof shoes, raincoats, and umbrella gear.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get to Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The nearest domestic airport is Gaggal Kangra Airport (DHM), located approximately 15 to 20 km from our campus. Daily flights operate from New Delhi (DEL). Alternatively, comfortable overnight luxury Volvo buses run daily from New Delhi (Kashmiri Gate ISBT) to McLeod Ganj/Dharamshala (approx. 10–11 hours). The nearest major railway hub is Pathankot Junction (PTK), located about 85 km (2.5 hours by taxi).",
        },
      },
      {
        "@type": "Question",
        name: "Will the altitude affect me in Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The altitude is around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]]. Most international travelers adjust easily within 24 to 48 hours without experiencing acute mountain sickness. We intentionally pace the first three days with gentle restorative practices, breath awareness, and hydration reminders, and recommend taking it easy for the first days, drinking plenty of water, and packing warm layers for cool mountain mornings and evenings.",
        },
      },
      {
        "@type": "Question",
        name: "What should I pack for this Himalayan course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pack comfortable cotton and stretch yoga wear, several warm thermal layers, a fleece or lightweight down jacket, woolen socks, slip-on shoes for temple entry, sturdy walking or trekking shoes for mountain paths, personal toiletries, a refillable stainless steel water bottle, a flashlight/headlamp, an umbrella, and an open journal.",
        },
      },
      {
        "@type": "Question",
        name: "Is this 200 hour course beginner friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our 200-hour curriculum is structured to support both enthusiastic beginners with a sincere interest in yogic discipline and intermediate practitioners aiming to deepen alignment and teaching skills. Lead teachers offer individualized hands-on modifications, postural progressions, and prop support for all body types.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the course fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The all-inclusive fee (€1450 for double sharing, €1850 for a private room) includes 21 nights of residential accommodation, 3 freshly cooked sattvic Ayurvedic vegetarian meals daily, comprehensive 200-hour course manuals, yoga props, filtered mountain drinking water, weekend mountain excursions (including a guided trek toward Triund / Bhagsu waterfall), and graduation certification.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be certified to teach after graduation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon completing all required training contact hours, assignments, and practical teaching assessments, graduates receive a comprehensive 200-Hour Yoga Teacher Training Certificate from YogaGarhi [[CONFIRM_YA_STATUS]]. This credential confirms that you have mastered foundational anatomy, alignment, Hatha and Ashtanga sequencing, and professional teaching methodology.",
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
        name: "200 Hour Yoga Teacher Training in Dharamshala",
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
      <Course200HourDharamshala />
    </>
  );
}
