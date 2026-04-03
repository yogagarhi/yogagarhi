import { Metadata } from "next";
import BlogPost from "@/components/pages/BlogPost";

export const metadata: Metadata = {
    title: "Blog - YogaGarhi Insights & Wisdom",
    description: "Deepen your understanding of yoga with YogaGarhi's latest articles on philosophy, training, and holistic living.",
    // Additional SEO can be generated dynamically based on the slug if needed, but keeping it simple for now.
};

export default function BlogDetailPage() {
    return <BlogPost />;
}
