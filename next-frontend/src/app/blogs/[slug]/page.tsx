import { Metadata } from "next";
import BlogPost from "@/components/pages/BlogPost";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const postMetadata: Record<string, { title: string; description: string }> = {
        "benefits-yttc-bali": {
            title: "Benefits of Yoga Teacher Training in Bali | YogaGarhi",
            description: "Discover why Bali has become the premier destination for yoga teacher training and how it can transform your practice.",
        },
        "what-to-expect-200hr": {
            title: "What to Expect in Your 200 Hour YTTC in Bali: A Complete Guide | YogaGarhi",
            description: "Discover what to expect in a 200 hour YTTC in Bali, from daily classes and teaching practice to accommodation, preparation, and certification.",
        },
        "himalayan-roots-yoga": {
            title: "The Himalayan Roots of Authentic Yoga: Why It Matters for Your Training in Bali | YogaGarhi",
            description: "Discover the Himalayan roots of authentic yoga and why this lineage matters for your yoga teacher training in Bali. Learn what makes training truly traditional.",
        },
    };

    const meta = postMetadata[slug] || {
        title: "Blog - Insights & Wisdom | YogaGarhi",
        description: "Discover authentic yogic wisdom, teacher training insights, and Himalayan lineage practices at YogaGarhi.",
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://www.yogagarhi.com/blogs/${slug}`,
        },
    };
}

export default function BlogDetailPage() {
    return <BlogPost />;
}
