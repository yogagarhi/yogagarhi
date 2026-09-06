import { Metadata } from "next";
import Blog from "@/components/pages/Blog";

export const metadata: Metadata = {
    title: "Yoga Articles & Wisdom Blog",
    description: "Explore authentic articles on yoga philosophy, teacher training guides, asana alignment, and ashram life in Bali & Rishikesh. Read our latest insights!",
    keywords: "yoga blog, yoga articles, yoga philosophy, yoga teacher training tips, YogaGarhi blog",
    alternates: {
        canonical: "/blogs",
    },
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.yogagarhi.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://www.yogagarhi.com/blogs"
                            }
                        ]
                    })
                }}
            />
            <Blog />
        </>
    );
}

