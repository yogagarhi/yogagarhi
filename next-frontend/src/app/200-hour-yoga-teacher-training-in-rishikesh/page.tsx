import { Metadata } from "next";
import Course200HourRishikesh from "@/components/pages/Course200HourRishikesh";
import { courseData } from "@/constants/courses";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["200-hour-rishikesh"];

    const title =
        "200 Hour Yoga Teacher Training in Rishikesh | RYT 200 Yoga TTC – YogaGarhi";

    const description =
        "Join YogaGarhi’s 200 Hour Yoga Teacher Training in Rishikesh. A residential RYT 200 Yoga Alliance certified course offering authentic yogic education, asana, pranayama, meditation, philosophy, and teaching methodology in Rishikesh, India.";

    const url =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh";

    return {
        title,
        description,
        keywords: [
            "200 hour yoga teacher training in rishikesh",
            "200 hour yoga TTC rishikesh",
            "ryt 200 yoga teacher training rishikesh",
            "yoga alliance 200 hour rishikesh",
            "yoga teacher training rishikesh"
        ],
        alternates: {
            canonical: "/200-hour-yoga-teacher-training-in-rishikesh",
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [
                {
                    url: "https://www.yogagarhi.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

/* =========================
   PAGE
========================= */
export default function Page() {
    const course = courseData["200-hour-rishikesh"];
    const pageUrl =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "200 Hour Yoga Teacher Training in Rishikesh",
        "description": course.welcomeText,
        "inLanguage": "en",
        "educationalCredentialAwarded":
            "RYT 200 Yoga Alliance Certification",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner to intermediate yoga practitioners"
        },
        "coursePrerequisites":
            "Basic yoga practice recommended but not mandatory",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "duration": "P24D",
            "location": {
                "@type": "Place",
                "name": "YogaGarhi Ashram",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Rishikesh",
                    "addressRegion": "Uttarakhand",
                    "addressCountry": "India"
                }
            }
        },
        "offers": {
            "@type": "Offer",
            "price": course.price.replace("$", ""),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": pageUrl
        }
    };

    /* =========================
       BREADCRUMB SCHEMA
    ========================= */
    const breadcrumbSchema = {
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
                "name": "200 Hour Yoga Teacher Training in Rishikesh",
                "item": pageUrl
            }
        ]
    };

    return (
        <>
            {/* Course Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(courseSchema),
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <Course200HourRishikesh />
        </>
    );
}
