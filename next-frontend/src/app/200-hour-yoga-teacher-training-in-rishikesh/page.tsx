import { Metadata } from "next";
import Course200HourRishikesh from "@/components/pages/Course200HourRishikesh";
import { courseData } from "@/constants/courses";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["200-hour-rishikesh"];

    const title =
        "200 Hour Yoga Teacher Training Rishikesh | RYT 200 India";

    const description =
        "Master traditional yoga with our 200-Hour Yoga TTC in Rishikesh. Yoga Alliance certified RYT 200 residential course by the Ganges. Register for upcoming batch!";

    const url =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh";

    return {
        title: {
            absolute: title,
        },
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "195",
            "bestRating": "5",
            "worstRating": "1"
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
       FAQ SCHEMA
    ========================= */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this 200 Hour YTTC in Rishikesh certified with Yoga Alliance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our 200 Hour Yoga Teacher Training in Rishikesh is fully certified with Yoga Alliance USA (RYT 200). Upon completion, you can register as a certified yoga teacher internationally."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the 200 Hour Rishikesh course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The course includes 24 days residential stay, 3 daily Ayurvedic vegetarian meals, course manual, Yoga Alliance certification, Ganga excursions, and full instruction in Hatha, Ashtanga, Anatomy, and Philosophy."
                }
            }
        ]
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

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
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
