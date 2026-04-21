import { Metadata } from "next";
import BlogPost from "@/components/pages/BlogPost";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    // Map slugs to better titles/descriptions if possible, or use a generic pattern
    const titles: Record<string, string> = {
        "benefits-yttc-bali": "Benefits of Yoga Teacher Training in Bali",
        "what-to-expect-200hr": "What to Expect in Your 200 Hour YTTC",
        "himalayan-roots-yoga": "The Himalayan Roots of Authentic Yoga",
    };

    const title = titles[slug] || "Blog - YogaGarhi Insights & Wisdom";

    return {
        title: title,
        description: "Deepen your understanding of yoga with YogaGarhi's latest articles on philosophy, training, and holistic living.",
        alternates: {
            canonical: `/blogs/${slug}`,
        },
    };
}

export default function BlogDetailPage() {
    return <BlogPost />;
}
