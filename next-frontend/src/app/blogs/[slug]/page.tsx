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
            description: "Discover why Bali is the world's premier yoga training hub. Learn how a Yoga TTC transforms your practice, mindset & teaching skills. Read our guide!",
        },
        "what-to-expect-200hr": {
            title: "What to Expect in a 200 Hour YTTC in Bali | Complete Guide",
            description: "Wondering what happens in a 200-Hour Yoga Teacher Training in Bali? Discover daily schedules, difficulty, anatomy, exams & packing tips in this full guide.",
        },
        "himalayan-roots-yoga": {
            title: "Himalayan Roots of Authentic Yoga | Bali YTTC Lineage",
            description: "Learn why authentic Himalayan lineage matters for your yoga teacher training in Bali. Discover traditional Hatha wisdom and lineage teachings at YogaGarhi.",
        },
        "bali-vs-rishikesh-yttc-comparison": {
            title: "Bali vs Rishikesh Yoga Teacher Training: Complete 2026 Comparison Guide",
            description: "Comparing a Yoga Teacher Training in Bali vs Rishikesh? Discover costs, atmosphere, curriculum, weather, and spiritual vibe to choose your ideal YTTC.",
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
