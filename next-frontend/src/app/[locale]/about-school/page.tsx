import { Metadata } from "next";
import AboutAshram from "@/components/pages/AboutAshram";
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

    const title = locale === "en" ? "About Our Yoga School & Himalayan Mission" : (messages.aboutSchool?.metaTitle || "About Our Yoga School & Himalayan Mission");
    const description = locale === "en" ? "Learn about YogaGarhi's Himalayan lineage, our sacred ashram in Ubud Bali, and our mission to train compassionate yoga teachers worldwide." : (messages.aboutSchool?.metaDesc || "Learn about YogaGarhi's Himalayan lineage, our sacred ashram in Ubud Bali, and our mission to train compassionate yoga teachers worldwide.");
    const url = locale === "en" ? "https://www.yogagarhi.com/about-school" : `https://www.yogagarhi.com/${locale}/about-school`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "about YogaGarhi, yoga school Bali, yoga ashram story, yoga teacher training mission, Ubud yoga center",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/about-school"),
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

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const clientMessages = {
        aboutSchool: messages.aboutSchool,
        common: messages.common,
        nav: messages.nav,
        dialogs: messages.dialogs,
        home: {
            ready: messages.home?.ready,
            dosha: messages.home?.dosha,
            webinar: messages.home?.webinar,
            support: messages.home?.support,
        },
    };

    return (
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
            <AboutAshram />
        </NextIntlClientProvider>
    );
}
