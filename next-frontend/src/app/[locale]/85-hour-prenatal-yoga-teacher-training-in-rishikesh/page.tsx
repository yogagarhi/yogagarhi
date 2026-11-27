import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePrenatalRishikesh from "@/components/pages/CoursePrenatalRishikesh";
import { PRENATAL_RISHIKESH_READY } from "@/config/specialtyCoursesConfig";
import { BATCHES_PRENATAL_RISHIKESH } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "Prenatal Yoga Teacher Training in Rishikesh | 85 Hour";
  const description =
    "85 hour prenatal & postnatal yoga teacher training and certification in Rishikesh. Safe sequencing, pregnancy anatomy, breath & birth prep. From €690.";
  const canonicalUrl =
    "https://www.yogagarhi.com/85-hour-prenatal-yoga-teacher-training-in-rishikesh";

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
    robots: PRENATAL_RISHIKESH_READY
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
          url: "https://res.cloudinary.com/dphocpt generic/image/upload/prenatal-anatomy.jpg",
          width: 1200,
          height: 630,
          alt: "85 Hour Prenatal Yoga Teacher Training in Rishikesh - YogaGarhi Ashram",
        },
      ],
    },
  };
}

export default async function PrenatalYogaCoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl =
    "https://www.yogagarhi.com/85-hour-prenatal-yoga-teacher-training-in-rishikesh";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_PRENATAL_RISHIKESH.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P9D",
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
    name: "85 Hour Prenatal Yoga Teacher Training in Rishikesh",
    description:
      "85-hour residential prenatal and postnatal yoga teacher training in Rishikesh, India. Specialized training in trimester-specific sequencing, pelvic floor anatomy, birth preparation, and postpartum recovery.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "690",
        priceCurrency: "EUR",
        category: "Double Sharing Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "890",
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
        name: "Do I need a 200 hour certificate first to join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No prior 200-hour certificate is mandatory to participate and graduate with our 85-Hour Certificate in Prenatal & Postnatal Yoga. Certified 200-hour yoga teachers can use this diploma toward their [[CONFIRM_YA_STATUS]] Registered Prenatal Yoga Teacher (RPYT) credentials. Doulas, midwives, healthcare workers, and pregnant mothers are warmly welcome for professional and personal development.",
        },
      },
      {
        "@type": "Question",
        name: "Can I join while pregnant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, pregnant practitioners who have completed their first trimester (14+ weeks gestation) are welcome to enroll, provided they submit prior written clearance from their licensed obstetrician, gynecologist, or certified midwife. All physical practices are adapted with gentle bolsters and props to ensure maternal and fetal comfort.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be able to register as an RPYT (Registered Prenatal Yoga Teacher)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you currently hold an accredited 200-hour Yoga Teacher Training certificate, completing this 85-hour comprehensive curriculum fulfills the continuing education criteria to apply for the [[CONFIRM_YA_STATUS]] RPYT designation upon fulfilling teaching practicum requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is covered in each trimester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We systematically examine physiological adaptations across all three trimesters: first-trimester energy management and nausea relief; second-trimester structural stabilization, pelvic opening, and belly expansion; and third-trimester birth readiness, optimal fetal positioning, labor breathing, and pelvic floor toning and release.",
        },
      },
      {
        "@type": "Question",
        name: "Prenatal vs postnatal — what's the difference?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prenatal yoga emphasizes opening, joint release, pelvic flexibility, breath awareness for labor, and emotional calm during gestation. Postnatal yoga (from 6 weeks post-vaginal birth or 10-12 weeks post-cesarean) shifts focus to gentle core re-knitting, diastasis recti rehabilitation, pelvic floor re-strengthening, and releasing shoulder tension from nursing.",
        },
      },
      {
        "@type": "Question",
        name: "Is this prenatal yoga certification recognized internationally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our 85-Hour Prenatal Yoga Teacher Training curriculum in Rishikesh meets rigorous international standards for maternal anatomy, biomechanics, safe sequencing, and ethical practice. Graduates receive an official 85-Hour Certificate from YogaGarhi Ashram in Rishikesh, India.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine it with the 200 hour course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All specialty batches at YogaGarhi are intentionally scheduled to start 2 days after our 200-hour residential teacher training finishes. This enables students to complete their foundational 200-hour training and seamlessly stack the 85-hour prenatal certification in one journey.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fee (€690 for double sharing, €890 for private room) covers 8 nights of residential ashram accommodation, 3 organic sattvic Ayurvedic meals daily, all comprehensive course manuals, prop usage, graduation ceremony, and excursions in Rishikesh.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reach Rishikesh and the ashram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The nearest airport is Dehradun Jolly Grant Airport (DED), located approximately 35 minutes by taxi from our ashram in Tapovan. Direct trains also run from New Delhi to Haridwar Junction (45 minutes away), or you can arrange private taxi transportation directly from Delhi.",
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
        name: "85 Hour Prenatal Yoga Teacher Training in Rishikesh",
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
      <CoursePrenatalRishikesh />
    </>
  );
}
