import { Metadata } from "next";
import BlogPost from "@/components/pages/BlogPost";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const postMetadata: Record<string, { title: string; description: string; image?: string; imageAlt?: string }> = {
        "yoga-instructor-certification-bali": {
            title: "Yoga Instructor Certification in Bali: 2027 Guide | YogaGarhi",
            description: "How to get a yoga instructor certification in Bali: RYT 200 rules, real costs, visas, where to train and how to choose a school. Updated for 2027.",
            image: "https://www.yogagarhi.com/images/blogs/yoga-instructor-certification-bali-poster.jpg",
            imageAlt: "Students practising yoga in an open-air shala in Bali during a yoga instructor certification course",
        },
        "benefits-yttc-bali": {
            title: "Benefits of Yoga Teacher Training in Bali | YogaGarhi",
            description: "Discover why Bali is the premier yoga training hub. Learn how a Yoga TTC transforms practice, mindset & teaching skills. Read our guide!",
        },
        "what-to-expect-200hr": {
            title: "What to Expect in 200-Hour Yoga TTC Bali | YogaGarhi",
            description: "What happens in a 200-Hour Yoga TTC in Bali? Discover daily schedules, difficulty, anatomy, exams & packing tips in this complete guide.",
        },
        "himalayan-roots-yoga": {
            title: "Himalayan Roots of Authentic Yoga in Bali | YogaGarhi",
            description: "Discover why authentic Himalayan lineage matters for your yoga teacher training in Bali. Explore traditional Hatha wisdom and lineage teachings.",
        },
        "bali-vs-rishikesh-yttc-comparison": {
            title: "Bali vs Rishikesh Yoga TTC Comparison | YogaGarhi",
            description: "Comparing a Yoga Teacher Training in Bali vs Rishikesh? Discover costs, atmosphere, curriculum, weather, and spiritual vibe to choose your ideal YTTC.",
        },
    };

    const meta = postMetadata[slug] || {
        title: "Blog - Insights & Wisdom | YogaGarhi",
        description: "Discover authentic yogic wisdom, teacher training insights, and Himalayan lineage practices at YogaGarhi.",
    };

    const finalTitle = meta.title.includes("YogaGarhi") ? meta.title : `${meta.title} | YogaGarhi`;

    return {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: finalTitle,
        },
        description: meta.description,
        alternates: {
            canonical: `https://www.yogagarhi.com/blogs/${slug}`,
        },
        openGraph: {
            title: finalTitle,
            description: meta.description,
            url: `https://www.yogagarhi.com/blogs/${slug}`,
            siteName: "YogaGarhi",
            locale: "en_US",
            type: "article",
            images: [
                {
                    url: meta.image || "https://www.yogagarhi.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: meta.imageAlt || meta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: finalTitle,
            description: meta.description,
            images: [meta.image || "https://www.yogagarhi.com/og-image.jpg"],
        },
    };
}

export default function BlogDetailPage() {
    return <BlogPost />;
}
