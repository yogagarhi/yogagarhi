import { Metadata } from "next";
import AboutTestimonials from "@/components/pages/AboutTestimonials";
import { googleReviews } from "@/constants/googleReviews";

export const metadata: Metadata = {
    title: "Reviews & Testimonials - Student Stories",
    description: "Read reviews and testimonials from our yoga teacher training graduates. Discover how YogaGarhi has transformed lives through authentic yoga education.",
    keywords: "yoga teacher training reviews, YogaGarhi testimonials, yoga school reviews Bali, student stories, yoga certification reviews",
    alternates: {
        canonical: "https://www.yogagarhi.com/testimonials",
    },
};

export default function AboutTestimonialsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
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
                                        "name": "Reviews & Testimonials",
                                        "item": "https://www.yogagarhi.com/testimonials"
                                    }
                                ]
                            },
                            {
                                "@type": "EducationalOrganization",
                                "@id": "https://www.yogagarhi.com/#organization",
                                "name": "YogaGarhi",
                                "url": "https://www.yogagarhi.com",
                                "review": googleReviews.map((review) => ({
                                    "@type": "Review",
                                    "author": {
                                        "@type": "Person",
                                        "name": review.name
                                    },
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": review.rating,
                                        "bestRating": "5",
                                        "worstRating": "1"
                                    },
                                    "reviewBody": review.text
                                }))
                            }
                        ]
                    })
                }}
            />
            <AboutTestimonials />
        </>
    );
}

