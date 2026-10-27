import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";

import Course300HourVarkala from "@/components/pages/Course300HourVarkala";
import CourseSyllabusDetails from "@/components/course200/CourseSyllabusDetails";
import { courseData } from "@/constants/courses";
import { BATCHES_300_HOUR_VARKALA, filterUpcomingBatches } from "@/constants/courseDates";
import { VARKALA_FAQS_300_HOUR } from "@/constants/varkalaCourseData";
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
        const title = "300 Hour Yoga Teacher Training in Varkala | YogaGarhi";
        const description = "Advance your teaching with 300 hour yoga teacher training in Varkala, Kerala. Pathway to RYT 500, Ayurveda & beach yoga, E-RYT 500 faculty. Enroll now.";
        return {
            metadataBase: new URL("https://www.yogagarhi.com"),
            title: {
                absolute: title,
            },
            description,
            keywords: ["300 hour yoga teacher training in varkala","advanced yoga teacher training kerala","ryt 500 varkala","yoga teacher training varkala"],
            alternates: {
                canonical: "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-varkala",
                languages: getReviewedHreflang("/300-hour-yoga-teacher-training-in-varkala"),
            },
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title,
                description,
                url: "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-varkala",
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

    const title = messages.course300Varkala?.metaTitle || "300 Hour Yoga Teacher Training in Varkala | YogaGarhi";
    const description = messages.course300Varkala?.metaDesc || "Advance your teaching with 300 hour yoga teacher training in Varkala, Kerala. Pathway to RYT 500, Ayurveda & beach yoga, E-RYT 500 faculty. Enroll now.";
    const url = `https://www.yogagarhi.com/${locale}/300-hour-yoga-teacher-training-in-varkala`;

    return applyQualityGate({
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: title,
        },
        description,
        keywords: ["300 hour yoga teacher training in varkala","advanced yoga teacher training kerala","ryt 500 varkala","yoga teacher training varkala"],
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/300-hour-yoga-teacher-training-in-varkala"),
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
   SERVER COMPONENT
========================= */
export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const messages = await getMessages({ locale }) as any;

    const course200Shared = messages.course200 ? {
        curriculum: messages.course200.curriculum,
        syllabus: messages.course200.syllabus,
        syllabusDetails: messages.course200.syllabusDetails,
        schedule: messages.course200.schedule,
        excursions: messages.course200.excursions,
        food: messages.course200.food,
        accommodation: messages.course200.accommodation,
        inclusions: messages.course200.inclusions,
        courseOverview: messages.course200.courseOverview,
        stats: messages.course200.stats,
        whyYogaGarhi: messages.course200.whyYogaGarhi,
        highlights: messages.course200.highlights,
        dailySchedule: messages.course200.dailySchedule,
        upcomingDates: messages.course200.upcomingDates,
        readArticle: messages.course200.readArticle,
    } : undefined;

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
        course300Varkala: messages.course300Varkala,
        course200: course200Shared,
        common: messages.common,
        dialogs: messages.dialogs,
        whyChoose: messages.home?.whyChoose || messages.whyChoose,
        promo: messages.promo,
        faq: messages.faq,
        reviews: messages.reviews,
        home: homeTrimmed,
    };

    const course = courseData["300-hour-varkala"];
    const upcomingBatches = filterUpcomingBatches(BATCHES_300_HOUR_VARKALA);
    const pageUrl = locale === "en"
        ? "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-varkala"
        : `https://www.yogagarhi.com/${locale}/300-hour-yoga-teacher-training-in-varkala`;

    const isEn = locale === "en";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": isEn
            ? "300 Hour Yoga Teacher Training in Varkala, Kerala"
            : messages.course300Varkala?.metaTitle || "300 Hour Yoga Teacher Training in Varkala, Kerala",
        "description": isEn
            ? course.welcomeText
            : messages.course300Varkala?.metaDesc || course.welcomeText,
        "inLanguage": "en",
        "educationalCredentialAwarded": "RYT 500 Pathway Yoga Alliance Certification",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner to advanced yoga practitioners"
        },
        "coursePrerequisites": "Basic yoga practice recommended but not mandatory",
        "hasCourseInstance": filterUpcomingBatches(BATCHES_300_HOUR_VARKALA).map((batch) => ({
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
                    "streetAddress": "Varkala Cliff, Papanasam Beach",
                    "addressLocality": "Varkala",
                    "addressRegion": "Kerala",
                    "postalCode": "695141",
                    "addressCountry": "India"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 8.7333,
                    "longitude": 76.7167
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
            "price": course.price.replace("$", "").replace(",", ""),
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
        "mainEntity": VARKALA_FAQS_300_HOUR.map((faq) => ({
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
                "name": "300 Hour Yoga Teacher Training in Varkala, Kerala",
                "item": pageUrl
            }
        ]
    };

    /* =========================
       LOCAL BUSINESS SCHEMA
    ========================= */
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "YogaGarhi Varkala",
        "url": "https://www.yogagarhi.com",
        "logo": "https://www.yogagarhi.com/yogagarhi-logo.jpg",
        "image": "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
        "description": "Yoga Alliance certified yoga teacher training and authentic Ayurveda immersion school in Varkala, Kerala, India.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Varkala Cliff, Papanasam Beach",
            "addressLocality": "Varkala",
            "addressRegion": "Kerala",
            "postalCode": "695141",
            "addressCountry": "India"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 8.7333,
            "longitude": 76.7167
        },
        "telephone": "+91-7895350563",
        "priceRange": "$$"
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

            {/* Local Business Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

            {/* Page Content */}
            <NextIntlClientProvider locale={locale} messages={courseClientMessages}>
                <Course300HourVarkala
                    locale={locale}
                    initialBatches={upcomingBatches}
                    syllabusSlot={<CourseSyllabusDetails courseKey="300-hour-varkala" />}
                />
            </NextIntlClientProvider>
        </>
    );
}
