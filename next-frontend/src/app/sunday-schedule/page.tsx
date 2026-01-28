import { Metadata } from "next";
import SundaySchedule from "@/components/pages/SundaySchedule";

export const metadata: Metadata = {
    title: "Sunday Schedule - Yogagarhi Tourism & Activities",
    description: "Explore our Sunday excursion schedule at Yogagarhi. From Beach Yoga to Monkey Forest, see how our students spend their free Sundays in Bali.",
    keywords: "Sunday yoga schedule, Bali excursions, Monkey Forest, Beach Yoga Bali, Yogagarhi activities",
    alternates: {
        canonical: "/sunday-schedule",
    },
};

export default function SundaySchedulePage() {
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
                                "item": "https://yogagarhi.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Sunday Schedule",
                                "item": "https://yogagarhi.com/sunday-schedule"
                            }
                        ]
                    })
                }}
            />
            <SundaySchedule />
        </>
    );
}
