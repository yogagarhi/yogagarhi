import { Metadata } from "next";
import Course100Hour from "@/components/pages/Course100Hour";
import { courseData } from "@/constants/courses";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["100-hour"];

    const title = "100 Hour Yoga Teacher Training in Bali | Yogagarhi";

    const description = "Experience our Yoga Alliance certified 100 Hour Yoga Teacher Training in Bali. Deepen your yoga practice in a calm and natural setting with Yogagarhi.";

    const url =
        "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali";

    return {
        title,
        description,
        keywords: [
            "100 hour yoga teacher training in bali",
            "100 hour yoga TTC bali",
            "beginner yoga teacher training bali",
            "short yoga teacher training bali",
            "yoga certification bali",
            "yoga training ubud"
        ],
        alternates: {
            canonical: "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali",
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
    const course = courseData["100-hour"];
    const pageUrl =
        "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali";

    const fullDescription = "Our 100 Hour Yoga Teacher Training in Bali is for anyone who wants to deepen their yoga practice in a peaceful, natural space. Yoga Garhi is in Gianyar, just 15 km from Ubud, so you enjoy quiet village surroundings with easy access to Bali’s main yoga and cultural center. This short YTTC is perfect if you want more than normal classes but are not ready for a full 200 hour course. You learn asanas with safe alignment, basic pranayama, simple meditation, yoga philosophy, light anatomy, and the basics of how to guide a class. The mix of practice and theory helps you feel real changes in your body, mind, and daily life. The course suits beginners with some practice, intermediate students, and anyone curious about teaching. You do not need to be very flexible—only open to learning and following the daily routine. A typical day includes morning meditation and asana, followed by theory classes and afternoon workshops, with gentle practice and relaxation later. Yoga Garhi is run by sincere, experienced teachers who share yoga in clear, simple language. We keep groups small, give personal attention, and create a warm, non-competitive space. Our Gianyar location offers green views, fresh air, and a calm environment with Ubud’s cafes, markets, and temples nearby. By the end of your 100 hours with us, you will have a stronger, safer practice, more confidence, and practical tools to handle stress and stay balanced. This training can be a complete deepening experience on its own or the first step toward your 200 hour yoga teacher training journey with Yoga Garhi.";

    /* =========================
       ARTICLE SCHEMA
    ========================= */
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "100 Hour Yoga Teacher Training in Bali",
        "description": fullDescription,
        "image": "https://www.yogagarhi.com/og-image.jpg",
        "author": {
            "@type": "Organization",
            "name": "Yogagarhi"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Yogagarhi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.yogagarhi.com/logo.png"
            }
        },
        "datePublished": "2026-03-13",
        "dateModified": "2026-03-13"
    };

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "100 Hour Yoga Teacher Training in Bali",
        "description": fullDescription,
        "inLanguage": "en",
        "educationalCredentialAwarded":
            "Certificate of Completion – 100 Hour Yoga Teacher Training",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner yoga practitioners"
        },
        "coursePrerequisites": "No prior teaching experience required",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "duration": "P12D",
            "location": {
                "@type": "Place",
                "name": "YogaGarhi Ashram",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gianyar",
                    "addressRegion": "Bali",
                    "addressCountry": "Indonesia"
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
                "name": "100 Hour Yoga Teacher Training in Bali",
                "item": pageUrl
            }
        ]
    };

    /* =========================
       FAQ SCHEMA
    ========================= */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Where is Yoga Garhi located in Bali?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yoga Garhi is in Gianyar, Bali, surrounded by nature and local village life. We are only about 15 km from Ubud, so you enjoy a peaceful setting with easy access to Bali’s main yoga, culture, and cafe scene."
            }
        }, {
            "@type": "Question",
            "name": "Is this course suitable for beginners?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the 100-hour YTTC is suitable for beginners with some regular practice and for intermediate students. You do not need to be very flexible or advanced, you just need an open mind, a willing body, and readiness to learn."
            }
        }, {
            "@type": "Question",
            "name": "Can I teach yoga after completing the 100 hour YTTC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The 100 hour course gives you a strong base and basic teaching skills, but by itself it is not a full teaching qualification. Many students use it as their first step and later complete another 100 hours (or a full 200 hour YTTC) to become fully certified teachers."
            }
        }, {
            "@type": "Question",
            "name": "What style of yoga do you teach in this 100 hour Yoga TTC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We mainly teach traditional Hatha yoga with simple Vinyasa-style flows. The focus is on safe alignment, breath awareness, and building a balanced, mindful practice rather than very advanced or fast sequences."
            }
        }, {
            "@type": "Question",
            "name": "What will I learn during the 100 hours yoga teacher training course in bali?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You will learn correct alignment for key asanas, basic pranayama techniques, simple meditation practices, an introduction to yoga philosophy (including the 8 limbs of yoga), basic anatomy related to yoga, and foundations of teaching like cueing and structuring a class."
            }
        }, {
            "@type": "Question",
            "name": "What does a typical day in the training look like?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A normal day usually includes morning pranayama, meditation, and asana practice, followed by theory classes like philosophy or anatomy, and afternoon workshops on teaching methods, adjustments, or gentle practice. Evenings may include relaxation, mantra chanting, or sharing circles."
            }
        }, {
            "@type": "Question",
            "name": "Is accommodation and food included in the 100 hour yoga teacher training course?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer different package options. Private rooms, dual sharing, and triple sharing rooms. So, please contact us directly for current details about rooms, food, and prices for your chosen batch."
            }
        }, {
            "@type": "Question",
            "name": "How big are the groups at Yoga Garhi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We keep our groups small so each student gets personal attention, alignment correction, and enough time with the teachers. This creates a safe, friendly, and non-competitive learning space."
            }
        }]
    };

    return (
        <>
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />

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

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            {/* Page Content */}
            <Course100Hour />
        </>
    );
}
