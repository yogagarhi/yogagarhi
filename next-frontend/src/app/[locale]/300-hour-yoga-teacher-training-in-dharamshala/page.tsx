import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Course300HourDharamshala from "@/components/pages/Course300HourDharamshala";
import { DHARAMSHALA_300_READY } from "@/config/dharamshalaConfig";
import { BATCHES_300_HOUR_DHARAMSHALA } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "300 Hour Yoga Teacher Training in Dharamshala | Advanced";
  const description =
    "28-day advanced 300 hour yoga teacher training in Dharamshala for 200hr graduates. Deepen asana, philosophy & teaching. Towards RYT 500. From €1850.";
  const canonicalUrl =
    "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-dharamshala";

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
    robots: DHARAMSHALA_300_READY
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
          alt: "300 Hour Yoga Teacher Training in Dharamshala - YogaGarhi Himalayan Sanctuary",
        },
      ],
    },
  };
}

export default async function Dharamshala300HourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl =
    "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-dharamshala";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_300_HOUR_DHARAMSHALA.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P28D",
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
    name: "300 Hour Yoga Teacher Training in Dharamshala",
    description:
      "28-day advanced residential yoga teacher training in Dharamshala, Himalayas, India for 200-hour graduates. Advanced Hatha, Ashtanga Vinyasa, subtle anatomy, higher philosophy, and adjustments on the pathway towards RYT 500.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "1850",
        priceCurrency: "EUR",
        category: "Twin Sharing Room Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "2250",
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
        name: "What is the prerequisite for the 300 hour yoga teacher training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applicants must hold a verifiable 200-hour yoga teacher training diploma from a recognized school. Whether you graduated from YogaGarhi or another accredited institution, your 200-hour certification provides the foundational framework in anatomy, alignment, and basic teaching pedagogy necessary to engage with this master-level curriculum.",
        },
      },
      {
        "@type": "Question",
        name: "Does this course qualify me for the Yoga Alliance RYT 500 credential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, on the RYT 500 pathway. Upon graduating from our 300-hour advanced training, you will receive an official 300-Hour Advanced Yoga Teacher Certification from YogaGarhi. When combined with your previously completed 200-hour diploma, this credential qualifies you to register with Yoga Alliance as a Registered Yoga Teacher at the 500-hour level (RYT 500) [[CONFIRM_YA_STATUS]]. Note: A 300-hour training alone does not grant RYT 500 without a prerequisite 200-hour certification.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Dharamshala for an advanced 300-hour immersion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dharamshala (frequently spelled Dharamsala), set against the dramatic granite peaks of the Dhauladhar mountain range in Himachal Pradesh, provides a rare, contemplative atmosphere free from the intense heat and crowded lanes of lower plains. At an altitude of around 1,400–2,100 m depending on the area [[CONFIRM_VENUE: exact altitude of the venue]], surrounded by ancient deodar cedar forests and Tibetan Buddhist monasteries, the sanctuary offers clean mountain air, pristine silence, and profound energetic purity conducive to serious, deep sadhana. We advise students to take it easy for the first few days, drink plenty of water, and bring warm layers for the cool mountain climate.",
        },
      },
      {
        "@type": "Question",
        name: "How does the 300-hour curriculum differ from the 200-hour course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While a 200-hour course focuses on foundational posture mechanics, basic anatomy, and fundamental teaching scripts, our 300-hour master training delves into nuanced sequencing (Vinyasa Krama), hands-on adjustments for diverse body architectures, adaptive yoga approaches, advanced pranayama (including long Kumbhaka and Bandha locks), subtle energy anatomy (Chakras, Nadis, Kundalini), deep study of the Upanishads and Patanjali's Yoga Sutras, and finding your distinct teaching presence.",
        },
      },
      {
        "@type": "Question",
        name: "What is the daily schedule like during the 28-day training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Days begin at 05:30 AM with herbal infusion and Shatkarmas, followed by morning meditation, advanced pranayama, and a 2-hour dynamic asana practice. After a nourishing sattvic breakfast, students engage in anatomy biomechanics and alignment workshops. Following lunch and personal study time, afternoon classes explore philosophy, teaching methodology, adjustments, and restorative/Yin yoga, concluding with evening meditation, satsang, and dinner by 19:30 PM.",
        },
      },
      {
        "@type": "Question",
        name: "What accommodation and meals are included in the tuition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The course investment (€1,850 for double sharing or €2,250 for a private room) includes 27 nights of comfortable residential accommodation with attached hot-water bathrooms, 3 daily organic, vegetarian/vegan Ayurvedic meals prepared fresh on-site, purified mountain spring drinking water, comprehensive printed course manuals, all yoga props, and guided weekend Himalayan nature excursions.",
        },
      },
      {
        "@type": "Question",
        name: "How do I travel to Dharamshala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book a domestic flight from New Delhi or Mumbai to Kangra Gaggal Airport (DHM), located approximately 15 to 20 km (35–45 minutes by taxi) from our campus. Alternatively, comfortable overnight AC Volvo sleeper buses run daily between New Delhi (Kashmiri Gate ISBT) and Dharamshala / McLeod Ganj (10–11 hours). Pathankot Railway Junction is approximately 85 km away.",
        },
      },
      {
        "@type": "Question",
        name: "What should I pack for an advanced month-long Himalayan training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pack breathable, flexible yoga attire along with warm layers—such as thermal tops, a fleece or woolen sweater, and warm socks—for crisp mountain mornings and evenings. We also recommend sturdy walking shoes for mountain trails, personal toiletries, a reusable water bottle, a small flashlight, and notebooks for extensive lecture notes.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I experience physical limitations or injuries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our senior lead trainers emphasize anatomical intelligence and sustainable longevity. One of the central pillars of our 300-hour training is learning how to safely modify postures with props, biomechanical alignment, and functional adaptations. We welcome teachers with physical variations or past injuries, as learning to adapt your own practice makes you a vastly more compassionate and skilled instructor.",
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
        name: "300 Hour Yoga Teacher Training in Dharamshala",
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
      <Course300HourDharamshala />
    </>
  );
}
