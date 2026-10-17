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
        title: {
            absolute: finalTitle,
        },
        description: meta.description,
        alternates: {
            canonical: `https://www.yogagarhi.com/blogs/${slug}`,
        },
    };
}

export default function BlogDetailPage() {
    return <BlogPost />;
}
