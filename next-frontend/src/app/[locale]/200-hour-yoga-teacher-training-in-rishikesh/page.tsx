import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";

import Course200HourRishikesh from "@/components/pages/Course200HourRishikesh";
import CourseSyllabusDetails from "@/components/course200/CourseSyllabusDetails";
import { courseData } from "@/constants/courses";
import { BATCHES_200_HOUR, filterUpcomingBatches } from "@/constants/courseDates";
import { RISHIKESH_FAQS_200_HOUR } from "@/constants/rishikeshCourseData";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

/* =========================
   SEO METADATA
========================= */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    let messages: any;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (e) {
        messages = (await import(`@/messages/en.json`)).default;
    }

    if (locale === "en") {
        const title = "200 Hour Yoga Teacher Training in Rishikesh | YogaGarhi";
        const description =
            "Yoga Alliance certified 200 hour yoga teacher training in Rishikesh, India. Small batches 8-10, E-RYT 500 teachers, Himalayan ashram. Enroll from $999.";
        return {
            metadataBase: new URL("https://www.yogagarhi.com"),
            title: {
                absolute: title,
            },
            description,
            keywords: [
                "200 hour yoga teacher training in rishikesh",
                "200 hour yoga teacher training rishikesh india",
                "yoga teacher training rishikesh",
                "yttc rishikesh"
            ],
            alternates: {
                canonical: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh",
                languages: getReviewedHreflang("/200-hour-yoga-teacher-training-in-rishikesh"),
            },
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title,
                description,
                url: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh",
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

    const title = messages.course200Rishikesh?.metaTitle || "200 Hour Yoga Teacher Training Rishikesh | RYT 200 India";
    const description =
        messages.course200Rishikesh?.metaDesc ||
        "Master authentic yoga with 200-Hour Yoga TTC in Rishikesh. Yoga Alliance certified RYT 200 residential course by the Ganges. Register now!";
    const url = `https://www.yogagarhi.com/${locale}/200-hour-yoga-teacher-training-in-rishikesh`;

    return applyQualityGate({
        metadataBase: new URL("https://www.yogagarhi.com"),
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
            canonical: url,
            languages: getReviewedHreflang("/200-hour-yoga-teacher-training-in-rishikesh"),
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
    }, locale);
}

/* =========================
   PAGE (ISR 24 Hours)
========================= */
export const revalidate = 86400;

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const course200Shared = locale === "en" ? undefined : {
        videoStoriesBadge: messages.course200?.videoStoriesBadge,
        videoStoriesHeading: messages.course200?.videoStoriesHeading,
        videoStoriesSub: messages.course200?.videoStoriesSub,
        verifiedGraduate: messages.course200?.verifiedGraduate,
        speakTeacherTitle: messages.course200?.speakTeacherTitle,
        speakTeacherDesc: messages.course200?.speakTeacherDesc,
        whyYogaGarhiBox: {
            bookFreeCall: messages.course200?.whyYogaGarhiBox?.bookFreeCall,
        },
        helpfulGuidesBadge: messages.course200?.helpfulGuidesBadge,
        helpfulGuidesTitle: messages.course200?.helpfulGuidesTitle,
        helpfulGuidesDesc: messages.course200?.helpfulGuidesDesc,
        readArticle: messages.course200?.readArticle,
    };

    const homeTrimmed = messages.home ? {
        ready: messages.home.ready,
        dosha: messages.home.dosha,
        webinar: messages.home.webinar,
        support: messages.home.support,
        whyChoose: messages.home.whyChoose,
        founder: messages.home.founder,
        gallery: messages.home.gallery,
        videoGallery: messages.home.videoGallery,
        studentStories: messages.home.studentStories,
    } : undefined;

    const courseClientMessages = {
        course200Rishikesh: messages.course200Rishikesh,
        course200: course200Shared,
        common: messages.common,
        dialogs: messages.dialogs,
        whyChoose: messages.home?.whyChoose || messages.whyChoose,
        promo: messages.promo,
        faq: messages.faq,
        reviews: messages.reviews,
        home: homeTrimmed,
    };

    const course = courseData["200-hour-rishikesh"];
    const upcomingBatches = filterUpcomingBatches(BATCHES_200_HOUR);
    const pageUrl = locale === "en"
        ? "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh"
        : `https://www.yogagarhi.com/${locale}/200-hour-yoga-teacher-training-in-rishikesh`;

    const isEn = locale === "en";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": isEn
            ? "200 Hour Yoga Teacher Training in Rishikesh"
            : messages.course200Rishikesh?.metaTitle || "200 Hour Yoga Teacher Training in Rishikesh",
        "description": isEn
            ? course.welcomeText
            : messages.course200Rishikesh?.metaDesc || course.welcomeText,
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
        "hasCourseInstance": filterUpcomingBatches(BATCHES_200_HOUR).map((batch) => ({
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
                    "streetAddress": "Tapovan",
                    "addressLocality": "Rishikesh",
                    "addressRegion": "Uttarakhand",
                    "postalCode": "249192",
                    "addressCountry": "India"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 30.1312,
                    "longitude": 78.3245
                }
            }
        })),
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
       FAQ SCHEMA (16 Comprehensive Questions)
    ========================= */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": RISHIKESH_FAQS_200_HOUR.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
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

            {/* Preload Hero image for instant browser scanner discovery */}
            <link rel="preload" as="image" type="image/avif" href="/images/hero/hero-mobile-crop-420.avif" imageSrcSet="/images/hero/hero-mobile-crop-360.avif 360w, /images/hero/hero-mobile-crop-420.avif 420w"
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

            {/* Page Content */}
            <NextIntlClientProvider locale={locale} messages={courseClientMessages}>
                <Course200HourRishikesh
                    locale={locale}
                    initialBatches={upcomingBatches}
                    syllabusSlot={<CourseSyllabusDetails courseKey="200-hour-rishikesh" />}
                />
            </NextIntlClientProvider>
        </>
    );
}
