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
        "what-to-expect-200hr": "What to Expect in Your 200 Hour YTTC in Bali: A Complete Guide",
        "himalayan-roots-yoga": "The Himalayan Roots of Authentic Yoga",
    };

    const title = titles[slug] || "Blog - Insights & Wisdom";

    return {
        title: title,
        description: "Discover what to expect in a 200 hour YTTC in Bali, from daily classes and teaching practice to accommodation, preparation, and certification.",
        alternates: {
            canonical: `/blogs/${slug}`,
        },
    };
}

export default function BlogDetailPage() {
    return <BlogPost />;
}
