import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRetreat, RETREATS_DATA } from "@/constants/retreats";
import RetreatDetail from "@/components/pages/RetreatDetail";

interface Props {
  params: Promise<{
    location: string;
    duration: string;
  }>;
}

export async function generateStaticParams() {
  const params: { location: string; duration: string }[] = [];

  Object.values(RETREATS_DATA).forEach((retreat) => {
    params.push({
      location: retreat.locationKey,
      duration: retreat.slug,
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, duration } = await params;
  const retreat = getRetreat(location, duration);

  if (!retreat) {
    return {
      title: "Retreat Not Found | YogaGarhi",
      description: "Discover transformative yoga retreats in Bali, Rishikesh, and Warkala with YogaGarhi.",
    };
  }

  const canonicalUrl = `https://www.yogagarhi.com/retreat/${retreat.locationKey}/${retreat.slug}`;

  return {
    title: {
      absolute: retreat.seoTitle,
    },
    description: retreat.seoDescription,
    keywords: retreat.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: retreat.seoTitle,
      description: retreat.seoDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "YogaGarhi",
      images: [
        {
          url: retreat.heroImage,
          width: 1200,
          height: 630,
          alt: retreat.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: retreat.seoTitle,
      description: retreat.seoDescription,
      images: [retreat.heroImage],
      creator: "@YogaGarhi",
    },
  };
}

export default async function RetreatDetailPage({ params }: Props) {
  const { location, duration } = await params;
  const retreat = getRetreat(location, duration);

  if (!retreat) {
    notFound();
  }

  return <RetreatDetail retreat={retreat} />;
}
