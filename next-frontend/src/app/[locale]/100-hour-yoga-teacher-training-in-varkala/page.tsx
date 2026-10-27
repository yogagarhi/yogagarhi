import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";

import Course100HourVarkala from "@/components/pages/Course100HourVarkala";
import CourseSyllabusDetails from "@/components/course200/CourseSyllabusDetails";
import { courseData } from "@/constants/courses";
import { BATCHES_100_HOUR_VARKALA, filterUpcomingBatches } from "@/constants/courseDates";
import { VARKALA_FAQS_100_HOUR } from "@/constants/varkalaCourseData";
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
        const title = "100 Hour Yoga Teacher Training in Varkala | YogaGarhi";
        const description = "Start your yoga journey with 100 hour yoga teacher training in Varkala, Kerala. 12-day beachside intensive, Yoga Alliance certified, small group. Apply today.";
        return {
            metadataBase: new URL("https://www.yogagarhi.com"),
            title: {
                absolute: title,
            },
            description,
            keywords: ["100 hour yoga teacher training in varkala","short yoga course varkala kerala","yttc varkala","yoga teacher training kerala"],
            alternates: {
                canonical: "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-varkala",
                languages: getReviewedHreflang("/100-hour-yoga-teacher-training-in-varkala"),
            },
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title,
                description,
                url: "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-varkala",
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

    const title = messages.course100Varkala?.metaTitle || "100 Hour Yoga Teacher Training in Varkala | YogaGarhi";
    const description = messages.course100Varkala?.metaDesc || "Start your yoga journey with 100 hour yoga teacher training in Varkala, Kerala. 12-day beachside intensive, Yoga Alliance certified, small group. Apply today.";
    const url = `https://www.yogagarhi.com/${locale}/100-hour-yoga-teacher-training-in-varkala`;

    return applyQualityGate({
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: title,
        },
        description,
        keywords: ["100 hour yoga teacher training in varkala","short yoga course varkala kerala","yttc varkala","yoga teacher training kerala"],
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/100-hour-yoga-teacher-training-in-varkala"),
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
        course100Varkala: messages.course100Varkala,
        course200: course200Shared,
        common: messages.common,
        dialogs: messages.dialogs,
        whyChoose: messages.home?.whyChoose || messages.whyChoose,
        promo: messages.promo,
        faq: messages.faq,
        reviews: messages.reviews,
        home: homeTrimmed,
    };

    const course = courseData["100-hour-varkala"];
    const upcomingBatches = filterUpcomingBatches(BATCHES_100_HOUR_VARKALA);
    const pageUrl = locale === "en"
        ? "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-varkala"
        : `https://www.yogagarhi.com/${locale}/100-hour-yoga-teacher-training-in-varkala`;

    const isEn = locale === "en";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": isEn
            ? "100 Hour Yoga Teacher Training in Varkala, Kerala"
            : messages.course100Varkala?.metaTitle || "100 Hour Yoga Teacher Training in Varkala, Kerala",
        "description": isEn
            ? course.welcomeText
            : messages.course100Varkala?.metaDesc || course.welcomeText,
        "inLanguage": "en",
        "educationalCredentialAwarded": "YogaGarhi 100-Hour Foundation Yoga Immersion Certificate",
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
        "hasCourseInstance": filterUpcomingBatches(BATCHES_100_HOUR_VARKALA).map((batch) => ({
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "startDate": batch.startDate,
            "endDate": batch.endDate,
            "duration": "P12D",
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
        "mainEntity": VARKALA_FAQS_100_HOUR.map((faq) => ({
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
                "name": "100 Hour Yoga Teacher Training in Varkala, Kerala",
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
                <Course100HourVarkala
                    locale={locale}
                    initialBatches={upcomingBatches}
                    syllabusSlot={<CourseSyllabusDetails courseKey="100-hour-varkala" />}
                />
            </NextIntlClientProvider>
        </>
    );
}
