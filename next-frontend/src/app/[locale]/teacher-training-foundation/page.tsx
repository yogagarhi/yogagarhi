import { Metadata } from "next";
import TeacherTrainingFoundation from "@/components/pages/TeacherTrainingFoundation";
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

    const title = locale === "en"
        ? "2-Day Yoga Teacher Foundation Course | YogaGarhi"
        : (messages.foundation?.metaTitle ? `${messages.foundation.metaTitle} | YogaGarhi` : "2-Day Yoga Teacher Foundation Course | YogaGarhi");

    const description = locale === "en"
        ? "Join YogaGarhi's 2-Day Yoga Teacher Foundation Masterclass. Discover how to become a certified teacher and launch a purpose-driven career."
        : (messages.foundation?.metaDesc || "Join YogaGarhi's 2-Day Yoga Teacher Foundation Masterclass. Discover how to become a certified teacher and launch a purpose-driven career.");

    const ogTitle = locale === "en"
        ? "2-Day Yoga Teacher Foundation | Start Your Career"
        : (messages.foundation?.ogTitle || title);

    const ogDesc = locale === "en"
        ? "Join YogaGarhi's 2-Day Yoga Teacher Foundation Masterclass. Discover the path to becoming a certified yoga teacher and building a purpose-driven career."
        : (messages.foundation?.ogDesc || description);

    const canonicalUrl = locale === "en"
        ? "https://www.yogagarhi.com/teacher-training-foundation"
        : `https://www.yogagarhi.com/${locale}/teacher-training-foundation`;

    const metadata: Metadata = {
        title: {
            absolute: title,
        },
        description,
        keywords: [
            "yoga teacher training foundation",
            "2 day yoga workshop",
            "become yoga teacher",
            "yoga career path",
            "YogaGarhi masterclass"
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: getReviewedHreflang("/teacher-training-foundation"),
        },
        openGraph: {
            title: ogTitle,
            description: ogDesc,
            url: canonicalUrl,
            type: "website",
            images: [
                {
                    url: "https://www.yogagarhi.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Yoga Teacher Foundation",
                },
            ],
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export default async function TeacherTrainingFoundationPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const allMessages: any = await getMessages();
    const pageMessages = {
        foundation: allMessages.foundation,
        common: allMessages.common,
        switcher: allMessages.switcher,
        nav: allMessages.nav,
        navDropdown: allMessages.navDropdown,
        footer: allMessages.footer,
        dialogs: allMessages.dialogs,
        stickyContact: allMessages.stickyContact,
        promo: allMessages.promo,
    };

    return (
        <NextIntlClientProvider locale={locale} messages={pageMessages}>
            <TeacherTrainingFoundation locale={locale} />
        </NextIntlClientProvider>
    );
}
