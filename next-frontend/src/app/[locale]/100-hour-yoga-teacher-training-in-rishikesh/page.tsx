import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";

import Course100HourRishikesh from "@/components/pages/Course100HourRishikesh";
import CourseSyllabusDetails from "@/components/course200/CourseSyllabusDetails";
import { courseData } from "@/constants/courses";
import { BATCHES_100_HOUR, filterUpcomingBatches } from "@/constants/courseDates";
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
        const title = "100 Hour Yoga Teacher Training Rishikesh | Short Yoga TTC";
        const description =
            "Residential 100-Hour Yoga Teacher Training in Rishikesh, India. Authentic Himalayan master teachers, sacred Ganga ashram & certification.";
        return {
            metadataBase: new URL("https://www.yogagarhi.com"),
            title: {
                absolute: title,
            },
            description,
            keywords: [
                "100 hour yoga teacher training in rishikesh",
                "100 hour yoga TTC rishikesh",
                "beginner yoga teacher training rishikesh",
                "short yoga teacher training rishikesh",
                "yoga certification rishikesh"
            ],
            alternates: {
                canonical: "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-rishikesh",
                languages: getReviewedHreflang("/100-hour-yoga-teacher-training-in-rishikesh"),
            },
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title,
                description,
                url: "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-rishikesh",
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

    const title = messages.course100Rishikesh?.metaTitle || "100 Hour Yoga Teacher Training Rishikesh | Short Yoga TTC";
    const description =
        messages.course100Rishikesh?.metaDesc ||
        "Residential 100-Hour Yoga Teacher Training in Rishikesh, India. Authentic Himalayan master teachers, sacred Ganga ashram & certification.";
    const url = `https://www.yogagarhi.com/${locale}/100-hour-yoga-teacher-training-in-rishikesh`;

    return applyQualityGate({
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: title,
        },
        description,
        keywords: [
            "100 hour yoga teacher training in rishikesh",
            "100 hour yoga TTC rishikesh",
            "beginner yoga teacher training rishikesh",
            "short yoga teacher training rishikesh",
            "yoga certification rishikesh"
        ],
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/100-hour-yoga-teacher-training-in-rishikesh"),
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
    const courseClientMessages = {
        course100Rishikesh: messages.course100Rishikesh,
        common: messages.common,
        dialogs: messages.dialogs,
        whyChoose: messages.home?.whyChoose || messages.whyChoose,
        promo: messages.promo,
        stickyContact: messages.stickyContact,
        switcher: messages.switcher,
        nav: messages.nav,
        navDropdown: messages.navDropdown,
        footer: messages.footer,
        faq: messages.faq,
        reviews: messages.reviews,
        home: messages.home,
    };

    const course = courseData["100-hour-rishikesh"];
    const upcomingBatches = filterUpcomingBatches(BATCHES_100_HOUR);
    const pageUrl = locale === "en"
        ? "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-rishikesh"
        : `https://www.yogagarhi.com/${locale}/100-hour-yoga-teacher-training-in-rishikesh`;

    const isEn = locale === "en";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": isEn
            ? "100 Hour Yoga Teacher Training in Rishikesh"
            : messages.course100Rishikesh?.metaTitle || "100 Hour Yoga Teacher Training in Rishikesh",
        "description": isEn
            ? course.welcomeText
            : messages.course100Rishikesh?.metaDesc || course.welcomeText,
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
        "hasCourseInstance": filterUpcomingBatches(BATCHES_100_HOUR).map((batch) => ({
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
                    "addressLocality": "Rishikesh",
                    "addressRegion": "Uttarakhand",
                    "addressCountry": "India"
                }
            }
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "184",
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
                "name": "Why choose a 100 Hour Yoga Teacher Training in Rishikesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rishikesh is the Yoga Capital of the World. Our 100-hour course offers authentic Himalayan teachings, daily Ganga Aarti, and foundational yoga discipline in an intensive residential format."
                }
            },
            {
                "@type": "Question",
                "name": "Is this 100-hour training suitable for beginners?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is designed for students of all levels wanting to deepen their personal practice, learn proper alignment, pranayama, and meditation."
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
                "name": "100 Hour Yoga Teacher Training in Rishikesh",
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

            {/* Page Content */}
            <NextIntlClientProvider locale={locale} messages={courseClientMessages}>
                <Course100HourRishikesh
                    locale={locale}
                    initialBatches={upcomingBatches}
                    syllabusSlot={<CourseSyllabusDetails courseKey="100-hour-rishikesh" />}
                />
            </NextIntlClientProvider>
        </>
    );
}
