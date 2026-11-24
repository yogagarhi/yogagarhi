import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import SoundHealingCertificationRishikesh from "@/components/pages/SoundHealingCertificationRishikesh";
import { SOUND_HEALING_FAQS } from "@/constants/soundHealingData";
import { SOUND_HEALING_PAGE_READY } from "@/config/soundHealingConfig";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    return {
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = "Sound Healing Certification Course in Rishikesh, India";
  const description =
    "Sound healing certification course in Rishikesh, India. Learn singing bowls, gongs and sound baths in small groups. See dates, fees and what you get.";
  const url = "https://www.yogagarhi.com/sound-healing-certification-in-rishikesh";

  return {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "sound healing certification",
      "sound healing rishikesh",
      "sound therapy certification",
      "sound bath certification",
      "sound healer certification",
      "accredited sound healing certification",
      "how to become a sound healer",
      "sound healing course in rishikesh",
      "sound healing training rishikesh",
      "singing bowl certification",
      "nada yoga rishikesh",
    ],
    alternates: {
      canonical: url,
      languages: SOUND_HEALING_PAGE_READY
        ? {
            en: url,
            "x-default": url,
          }
        : undefined,
    },
    robots: SOUND_HEALING_PAGE_READY
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/workshop-sound-healing-update.png",
          width: 1024,
          height: 683,
          alt: "Sound healing certification class with singing bowls in Rishikesh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/workshop-sound-healing-update.png",
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  setRequestLocale(locale);

  const pageUrl = "https://www.yogagarhi.com/sound-healing-certification-in-rishikesh";

  /* =========================
     1. COURSE SCHEMA
  ========================= */
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Sound Healing Certification Course in Rishikesh",
    description:
      "Sound healing certification course in Rishikesh, India. Learn singing bowls, gongs and sound baths in small groups. See dates, fees and what you get.",
    inLanguage: "en",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://www.yogagarhi.com/#organization",
      name: "YogaGarhi",
      url: "https://www.yogagarhi.com",
    },
    location: {
      "@type": "Place",
      "@id": "https://www.yogagarhi.com/#localbusiness-rishikesh",
      name: "YogaGarhi Yoga School - Rishikesh",
    },
    offers: {
      "@type": "Offer",
      price: "[PRICE]",
      priceCurrency: "USD",
      // Note: Availability must match confirmed batch dates (InStock while seats are open)
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  /* =========================
     2. FAQ SCHEMA (7 FAQS MATCHING VISIBLE TEXT)
  ========================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOUND_HEALING_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  /* =========================
     3. BREADCRUMB SCHEMA
  ========================= */
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
        name: "Sound Healing Certification Course in Rishikesh",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* Mobile-optimized LCP Hero Image Preload */}
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_640/yogagarhi/assets/workshop-sound-healing-update.png"
        fetchPriority="high"
      />

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <SoundHealingCertificationRishikesh />
    </>
  );
}
