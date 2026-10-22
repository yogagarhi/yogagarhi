import { Metadata } from "next";
import AboutTestimonials from "@/components/pages/AboutTestimonials";
import { googleReviews } from "@/constants/googleReviews";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

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

    const title = locale === "en" ? "Reviews & Testimonials - Student Stories" : (messages.testimonials?.metaTitle || "Reviews & Testimonials - Student Stories");
    const description = locale === "en" ? "Read reviews and testimonials from our yoga teacher training graduates. Discover how YogaGarhi has transformed lives through authentic yoga education." : (messages.testimonials?.metaDesc || "Read reviews and testimonials from our yoga teacher training graduates. Discover how YogaGarhi has transformed lives through authentic yoga education.");
    const url = locale === "en" ? "https://www.yogagarhi.com/testimonials" : `https://www.yogagarhi.com/${locale}/testimonials`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "yoga teacher training reviews, YogaGarhi testimonials, yoga school reviews Bali, student stories, yoga certification reviews",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/testimonials"),
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export const revalidate = 86400;

export default async function AboutTestimonialsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const clientMessages = {
        testimonials: messages.testimonials,
        home: {
            studentStories: messages.home?.studentStories,
            ready: messages.home?.ready,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
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
                                        "name": "Reviews & Testimonials",
                                        "item": "https://www.yogagarhi.com/testimonials"
                                    }
                                ]
                            },
                            {
                                "@type": "EducationalOrganization",
                                "@id": "https://www.yogagarhi.com/#organization",
                                "name": "YogaGarhi",
                                "url": "https://www.yogagarhi.com",
                                "review": googleReviews.map((review) => ({
                                    "@type": "Review",
                                    "author": {
                                        "@type": "Person",
                                        "name": review.name
                                    },
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": review.rating,
                                        "bestRating": "5",
                                        "worstRating": "1"
                                    },
                                    "reviewBody": review.text
                                }))
                            }
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={clientMessages}>
                <AboutTestimonials />
            </NextIntlClientProvider>
        </>
    );
}
