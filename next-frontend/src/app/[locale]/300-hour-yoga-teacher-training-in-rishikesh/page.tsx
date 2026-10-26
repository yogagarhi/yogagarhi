import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";
import Course300HourRishikesh from "@/components/pages/Course300HourRishikesh";
import CourseSyllabusDetails from "@/components/course200/CourseSyllabusDetails";
import { courseData } from "@/constants/courses";
import { BATCHES_300_HOUR_RISHIKESH, filterUpcomingBatches } from "@/constants/courseDates";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

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
        const title = "300 Hour Yoga Teacher Training in Rishikesh | YogaGarhi";
        const description =
            "Advance your teaching with Yoga Alliance certified 300 hour yoga teacher training in Rishikesh. Pathway to RYT 500, E-RYT 500 faculty. Enroll now.";
        return {
            metadataBase: new URL("https://www.yogagarhi.com"),
            title: {
                absolute: title,
            },
            description,
            keywords: [
                "300 hour yoga teacher training in rishikesh",
                "advanced yoga teacher training rishikesh",
                "ryt 500 rishikesh"
            ],
            alternates: {
                canonical: "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-rishikesh",
                languages: getReviewedHreflang("/300-hour-yoga-teacher-training-in-rishikesh"),
            },
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title,
                description,
                url: "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-rishikesh",
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

    const title = messages.course300Rishikesh?.metaTitle || "300 Hour Yoga Teacher Training in Rishikesh | YogaGarhi";
    const description =
        messages.course300Rishikesh?.metaDesc ||
        "Advance your teaching with Yoga Alliance certified 300 hour yoga teacher training in Rishikesh. Pathway to RYT 500, E-RYT 500 faculty. Enroll now.";
    const url = `https://www.yogagarhi.com/${locale}/300-hour-yoga-teacher-training-in-rishikesh`;

    return applyQualityGate({
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: title,
        },
        description,
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/300-hour-yoga-teacher-training-in-rishikesh"),
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
   PAGE COMPONENT
========================= */
export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    let messages: any;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (e) {
        messages = (await import(`@/messages/en.json`)).default;
    }

    const course300Shared = locale === "en" ? undefined : {
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
        course300Rishikesh: messages.course300Rishikesh,
        course300: messages.course300,
        course200: course300Shared,
        common: messages.common,
        dialogs: messages.dialogs,
        whyChoose: messages.home?.whyChoose || messages.whyChoose,
        promo: messages.promo,
        faq: messages.faq,
        reviews: messages.reviews,
        home: homeTrimmed,
    };

    const course = courseData["300-hour-rishikesh"];
    const isEn = locale === "en";
    const pageUrl = isEn
        ? "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-rishikesh"
        : `https://www.yogagarhi.com/${locale}/300-hour-yoga-teacher-training-in-rishikesh`;

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": isEn
            ? "300 Hour Yoga Teacher Training in Rishikesh | YogaGarhi"
            : messages.course300Rishikesh?.metaTitle || "300 Hour Yoga Teacher Training in Rishikesh | YogaGarhi",
        "description": isEn
            ? "Advance your teaching with Yoga Alliance certified 300 hour yoga teacher training in Rishikesh. Pathway to RYT 500, E-RYT 500 faculty. Enroll now."
            : messages.course300Rishikesh?.metaDesc || "Advance your teaching with Yoga Alliance certified 300 hour yoga teacher training in Rishikesh. Pathway to RYT 500, E-RYT 500 faculty. Enroll now.",
        "inLanguage": "en",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Certified 200-Hour Yoga Teachers"
        },
        "coursePrerequisites": "200-Hour Yoga Teacher Training (RYT 200) certification required",
        "hasCourseInstance": filterUpcomingBatches(BATCHES_300_HOUR_RISHIKESH).map((batch) => ({
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "startDate": batch.startDate,
            "endDate": batch.endDate,
            "duration": "P28D",
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
        },
        "educationalCredentialAwarded": "RYT-500 Yoga Alliance Certification"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this 300 Hour YTTC in Rishikesh certified with Yoga Alliance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our 300 Hour Yoga Teacher Training in Rishikesh is fully certified with Yoga Alliance USA. Completing this course after your 200-Hour certification qualifies you to register as an RYT 500 advanced yoga instructor."
                }
            },
            {
                "@type": "Question",
                "name": "What is the prerequisite for the 300 Hour course in Rishikesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You must have completed a Yoga Alliance approved 200-Hour Yoga Teacher Training (from YogaGarhi or any recognized yoga school) before enrolling in the 300-Hour course."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the 300-Hour Rishikesh training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The course includes 28 days (27 nights) ashram accommodation in Tapovan, 3 daily organic Ayurvedic vegetarian/vegan meals, advanced course manual, Yoga Alliance certification, Ganga excursions, and instruction by senior E-RYT 500 Himalayan masters."
                }
            }
        ]
    };

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
                "name": "300 Hour Yoga Teacher Training in Rishikesh",
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

            <NextIntlClientProvider locale={locale} messages={courseClientMessages}>
                <Course300HourRishikesh
                    locale={locale}
                    initialBatches={filterUpcomingBatches(BATCHES_300_HOUR_RISHIKESH)}
                    syllabusSlot={<CourseSyllabusDetails courseKey="300-hour-rishikesh" />}
                />
            </NextIntlClientProvider>
        </>
    );
}
