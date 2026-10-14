import { Metadata } from "next";
import Course200Hour from "@/components/pages/Course200Hour";
import { courseData } from "@/constants/courses";
import { BATCHES_200_HOUR, filterUpcomingBatches } from "@/constants/courseDates";
import { COURSE_200_FAQS } from "@/constants/course200Data";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["200-hour"];

    const title = "200 Hour Yoga Teacher Training in Bali | RYT 200 Ubud Bali";

    const description =
        "Become a certified yoga instructor with our 200-Hour Yoga TTC in Bali. Yoga Alliance RYT 200, authentic Hatha & Vinyasa in Ubud. Apply now for early-bird rates!";

    const url =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali";

    return {
        title: {
            absolute: title,
        },
        description,
        keywords: [
            "200 hour yoga teacher training in bali",
            "200 hour yoga TTC bali",
            "ryt 200 yoga teacher training bali",
            "yoga alliance 200 hour bali",
            "yoga teacher training bali"
        ],
        alternates: {
            canonical: "/200-hour-yoga-teacher-training-in-bali",
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
   ISR REVALIDATION
========================= */
export const revalidate = 86400; // Revalidate daily (24h) to keep batch dates fresh

/* =========================
   PAGE
========================= */
export default function Page() {
    const course = courseData["200-hour"];
    const initialBatches = filterUpcomingBatches(BATCHES_200_HOUR);
    const pageUrl =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali";

    const fullDescription = "Our 200 Hour Yoga Teacher Training in Bali is a full, beginner-to-intermediate level course for students who want to become confident yoga teachers or deeply understand yoga for their own life. Yoga Garhi is in Gianyar, only about 15 km from Ubud, so you enjoy a peaceful, green village setting close to nature with easy access to Bali’s main yoga and culture center. During the training, you practice asanas every day, learn correct alignment, study pranayama, meditation, yoga philosophy, anatomy, and full teaching methodology. Step by step, you build strength in your body, clarity in your mind, and the skills to guide safe and meaningful classes for others. Bali is one of the most loved places in the world for yoga, with rice fields, temples, daily prayers, and a gentle, spiritual feeling in the air. In Gianyar, you stay away from the crowded tourist areas but you can still visit Ubud’s cafes, markets, and healing centers in your free time. A typical day at Yoga Garhi starts with silence, pranayama, and meditation, followed by strong asana practice, then classes on philosophy or anatomy, and afternoon teaching practice or workshops. Evenings usually include gentle yoga, relaxation, chanting, or group sharing. This daily rhythm helps you live the yogic lifestyle, not just do yoga for one hour. Yoga Garhi is a heart-led school created by sincere yoga practitioners and teachers who truly live what they teach. We share yoga in a traditional yet simple way, using clear language and practical examples so you really understand. Our school in Gianyar has a calm, natural atmosphere with fresh air and village life around. We keep our groups small so every student gets personal guidance, alignment corrections, and support in their teaching practice. Our teachers are experienced and caring; they are patient with beginners, honest with feedback, and always open to questions. We believe yoga is not about perfect poses or performance. It is about awareness, kindness, balance, and connection with yourself and others. At Yoga Garhi, you will find discipline but also warmth, structure but also space to be yourself. Many students say our school feels like a home away from home where they feel safe to grow, release, and transform. By the end of your 200 hours, you will feel stronger, more centered, and ready to share yoga with others if you wish. If you are not ready for a full 200 hour course, or you prefer to study in parts, Yoga Garhi is also a great place for your 100 hour YTTC. Our 100 hour training offers the same peaceful location, small groups, and clear teaching in a shorter format. You can start with 100 hours to deepen your practice and sample training life.Then you can return later for another 100 hours.This will complete your 200-hour journey with teachers and a school you trust. Choosing Yoga Garhi—whether for 100 or 200 hours—means choosing a school that values authenticity, simplicity, and heart, and that truly cares about your growth as a practitioner and as a human being.";

    /* =========================
       ARTICLE SCHEMA
    ========================= */
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "200 Hour Yoga Teacher Training in Bali | Yogagarhi",
        "description": "Join our residential 200 Hour Yoga Teacher Training in Bali, a Yoga Alliance RYT 200 course offering authentic yoga, asana, pranayama, and meditation.",
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
        "name": "200 Hour Yoga Teacher Training in Bali | Yogagarhi",
        "description": "Join our residential 200 Hour Yoga Teacher Training in Bali, a Yoga Alliance RYT 200 course offering authentic yoga, asana, pranayama, and meditation.",
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
        "hasCourseInstance": initialBatches.map((batch) => ({
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "startDate": batch.startDate,
            "endDate": batch.endDate,
            "duration": "P24D",
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
        })),
        "offers": [
            {
                "@type": "Offer",
                "name": "Shared Room Package",
                "price": "999",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": pageUrl
            },
            {
                "@type": "Offer",
                "name": "Private Room Package",
                "price": "1750",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": pageUrl
            },
            {
                "@type": "Offer",
                "name": "Deluxe Private Room Package",
                "price": "1899",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": pageUrl
            },
            {
                "@type": "Offer",
                "name": "VIP Suite Package",
                "price": "2499",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": pageUrl
            }
        ]
    };

    /* =========================
       FAQ SCHEMA
    ========================= */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": COURSE_200_FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
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
                "name": "200 Hour Yoga Teacher Training in Bali",
                "item": pageUrl
            }
        ]
    };

    return (
        <>
            {/* Preload Hero image for instant browser scanner discovery on 200hr Course Page */}
            <link
                rel="preload"
                as="image"
                type="image/webp"
                href="/images/hero/hero-mobile-crop-420.webp"
                imageSrcSet="/images/hero/hero-mobile-crop-360.webp 360w, /images/hero/hero-mobile-crop-420.webp 420w"
                imageSizes="100vw"
                media="(max-width: 768px)"
                fetchPriority="high"
            />
            <link
                rel="preload"
                as="image"
                type="image/avif"
                href="/images/hero/hero-yoga-group-1920.avif"
                imageSrcSet="/images/hero/hero-yoga-group-1080.avif 1080w, /images/hero/hero-yoga-group-1280.avif 1280w, /images/hero/hero-yoga-group-1920.avif 1920w"
                imageSizes="100vw"
                media="(min-width: 769px)"
                fetchPriority="high"
            />

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

            <Course200Hour initialBatches={initialBatches} />
        </>
    );
}
