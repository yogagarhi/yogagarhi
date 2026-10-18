import { Metadata } from "next";
import Index from "@/components/pages/Index";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { applyQualityGate } from "@/utils/seoQualityGate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  let messages: any;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`@/messages/en.json`)).default;
  }

  const tHero = messages.home?.hero;
  const title = `${tHero?.h1 || "Yoga Alliance Certified Yoga Teacher Training in Bali & Rishikesh"} | YogaGarhi`;
  const description = tHero?.tagline || "Ancient Himalayan wisdom. Authentic yoga, lived & taught.";

  return applyQualityGate({
    title: {
      absolute: title,
    },
    description,
    keywords: "yoga teacher training Bali, YTTC Ubud, 200 hour yoga certification, yoga alliance certified, yoga retreat Bali, yoga school Indonesia, RYT 200, yoga ashram Bali, meditation training, pranayama course, YogaGarhi",
    alternates: {
      canonical: "https://www.yogagarhi.com",
    },
    openGraph: {
      title,
      description,
      url: "/",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  }, locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages: any = await getMessages();
  const pageMessages = {
    home: messages.home,
    common: messages.common,
    dialogs: messages.dialogs,
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is YogaGarhi accredited with Yoga Alliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, YogaGarhi is a Registered Yoga School (RYS 200, RYS 300, RYS 500) with Yoga Alliance. Upon successful completion of our courses, you receive an internationally recognized certificate to register as an RYT."
        }
      },
      {
        "@type": "Question",
        "name": "Can beginners join the 200 Hour Yoga Teacher Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our 200-hour YTTC is designed for beginner to intermediate practitioners. We provide pre-training preparation and teach foundational asana, alignment, and philosophy from the ground up."
        }
      },
      {
        "@type": "Question",
        "name": "Where are YogaGarhi ashrams located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary ashrams and training centers are located in Gianyar / Ubud (Bali, Indonesia) and Tapovan / Laxman Jhula (Rishikesh, India)."
        }
      },
      {
        "@type": "Question",
        "name": "What yoga styles are taught during the teacher training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in authentic Multi-Style training including Traditional Classical Hatha, Ashtanga Vinyasa Primary Series, Iyengar-informed Alignment with Props, Pranayama, and Meditation."
        }
      }
    ]
  };

  const homeVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Yoga Teacher Training Student Experience & Review at YogaGarhi Bali",
    "description": "Watch graduates share their authentic transformation and training experience at YogaGarhi Ashram in Ubud, Bali.",
    "thumbnailUrl": "https://img.youtube.com/vi/aM3Qx1fHk88/hqdefault.jpg",
    "uploadDate": "2025-01-15",
    "contentUrl": "https://www.youtube.com/watch?v=aM3Qx1fHk88",
    "embedUrl": "https://www.youtube.com/embed/aM3Qx1fHk88"
  };

  return (
    <>
      {/* Preload Hero image for instant browser scanner discovery on Homepage */}
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/images/hero/hero-mobile-crop-420.webp"
        imageSrcSet="/images/hero/hero-mobile-crop-360.webp 360w, /images/hero/hero-mobile-crop-420.webp 420w"
        imageSizes="100vw"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        type="image/avif"
        href="/images/hero/hero-yoga-group-1920.avif"
        imageSrcSet="/images/hero/hero-yoga-group-1080.avif 1080w, /images/hero/hero-yoga-group-1280.avif 1280w, /images/hero/hero-yoga-group-1920.avif 1920w"
        imageSizes="100vw"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeVideoSchema) }}
      />
      <NextIntlClientProvider locale={locale} messages={pageMessages}>
        <Index />
      </NextIntlClientProvider>
    </>
  );
}
