import { Metadata } from "next";
import SundaySchedule from "@/components/pages/SundaySchedule";
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

    const title = locale === "en" ? "Sunday Schedule - Tourism & Activities" : (messages.sundaySchedule?.metaTitle || "Sunday Schedule - Tourism & Activities");
    const description = locale === "en" ? "Explore our Sunday excursion schedule at Yogagarhi. From Beach Yoga to Monkey Forest, see how our students spend their free Sundays in Bali." : (messages.sundaySchedule?.metaDesc || "Explore our Sunday excursion schedule at Yogagarhi. From Beach Yoga to Monkey Forest, see how our students spend their free Sundays in Bali.");
    const url = locale === "en" ? "https://www.yogagarhi.com/sunday-schedule" : `https://www.yogagarhi.com/${locale}/sunday-schedule`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "Sunday yoga schedule, Bali excursions, Monkey Forest, Beach Yoga Bali, Yogagarhi activities",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/sunday-schedule"),
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

export default async function SundaySchedulePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const clientMessages = {
        sundaySchedule: messages.sundaySchedule,
        home: {
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
                                "name": "Sunday Schedule",
                                "item": "https://www.yogagarhi.com/sunday-schedule"
                            }
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={clientMessages}>
                <SundaySchedule />
            </NextIntlClientProvider>
        </>
    );
}
