import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SoundHealingCourseRishikesh from "@/components/pages/SoundHealingCourseRishikesh";
import { SOUND_HEALING_RISHIKESH_READY } from "@/config/specialtyCoursesConfig";
import { BATCHES_SOUND_HEALING_RISHIKESH } from "@/constants/courseDates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const title = "Sound Healing Course in Rishikesh | Level 1–3 Certification";
  const description = "7-day sound healing course & certification in Rishikesh, India. Tibetan singing bowls, chakra sound work, Nada Yoga & group sessions. From €590.";
  const canonicalUrl = "https://www.yogagarhi.com/sound-healing-course-in-rishikesh";

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
    robots: SOUND_HEALING_RISHIKESH_READY
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
          url: "https://res.cloudinary.com/dphocpt generic/image/upload/activity-sound-healing.jpg",
          width: 1200,
          height: 630,
          alt: "Sound Healing Course in Rishikesh - Singing Bowls Training at YogaGarhi",
        },
      ],
    },
  };
}

export default async function SoundHealingCoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  const pageUrl = "https://www.yogagarhi.com/sound-healing-course-in-rishikesh";

  // CourseInstance schema per batch
  const courseInstances = BATCHES_SOUND_HEALING_RISHIKESH.filter((b) => !!b.startDate).map((batch) => ({
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: batch.startDate,
    endDate: batch.endDate,
    duration: "P7D",
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
    name: "Sound Healing Course in Rishikesh",
    description:
      "7-day residential Level 1–3 sound healing course in Rishikesh, India. Hands-on Himalayan singing bowl therapy, chakra resonance, on-body vibrational work, and group sound bath facilitation.",
    provider: {
      "@type": "Organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    offers: [
      {
        "@type": "Offer",
        price: "590",
        priceCurrency: "EUR",
        category: "Double Sharing Accommodation",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        price: "750",
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
        name: "Do I need prior musical or yoga experience to join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No musical background, formal instrument training, or previous yoga experience is required. Our 7-day sound healing course in Rishikesh is designed progressively from the foundational acoustics of Himalayan singing bowls up to advanced clinical protocols.",
        },
      },
      {
        "@type": "Question",
        name: "Will I get a sound healing certification upon completion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Upon completing the 50 hours of intensive lectures, hands-on lab practice, and final practicum sessions, you receive a Level 1–3 Sound Healing Practitioner Certificate from YogaGarhi Ashram in Rishikesh.",
        },
      },
      {
        "@type": "Question",
        name: "Can I work professionally as a sound healer after this course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Level 3 of the curriculum specifically trains you in client intake, ethical space-holding, acoustic safety, session sequencing, and professional integration for private sessions and group sound baths.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to buy and bring my own singing bowls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All professional handcrafted 7-metal Tibetan and Himalayan singing bowls, crystal singing bowls, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]], tingshas, and specialized mallets are provided for your daily practice during the training.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Level 1, Level 2, and Level 3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Level 1 focuses on foundations of sound physics and self-practice. Level 2 advances into chakra harmonic mapping and on-body vibrational therapy. Level 3 covers professional multi-instrument sound baths and client consultation protocols.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the course fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fee covers 6 nights of ashram accommodation, 3 freshly cooked sattvic vegetarian meals daily, all study manuals, full access to instruments during classes, your Level 1–3 certificate, and sacred excursions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time of year to visit Rishikesh for sound healing training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rishikesh offers a sacred atmosphere year-round. October through March provides crisp sunny days, April through June brings warm sunlight, and July to September offers a peaceful monsoon backdrop.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reach the ashram in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The closest airport is Dehradun Jolly Grant Airport (DED), located approximately 35 minutes by taxi from our ashram in Tapovan, Rishikesh.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine this sound healing course with the 200 hour yoga teacher training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All specialty courses at YogaGarhi are intentionally scheduled to start 2 days after our 200-hour residential teacher training finishes, allowing students to stack courses effortlessly.",
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
        name: "Sound Healing Course in Rishikesh",
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
      <SoundHealingCourseRishikesh />
    </>
  );
}
