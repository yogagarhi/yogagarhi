import { Metadata } from "next";
import PreYTTCPrep from "@/components/pages/PreYTTCPrep";
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
        ? "Begin Before You Begin | Pre-YTTC Support"
        : (messages.preYttc?.metaTitle || "Begin Before You Begin | Pre-YTTC Support");

    const description = locale === "en"
        ? "Prepare gently for transformation. Discover our exclusive 'Before You Join' preparation program for yoga teacher training in Bali."
        : (messages.preYttc?.metaDesc || "Prepare gently for transformation. Discover our exclusive 'Before You Join' preparation program for yoga teacher training in Bali.");

    const canonicalUrl = locale === "en"
        ? "https://www.yogagarhi.com/pre-yttc-prep"
        : `https://www.yogagarhi.com/${locale}/pre-yttc-prep`;

    const metadata: Metadata = {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: getReviewedHreflang("/pre-yttc-prep"),
        },
        robots: {
            index: false,
            follow: true,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: "website",
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export default async function PreYTTCPrepPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const allMessages: any = await getMessages();
    const pageMessages = {
        preYttc: allMessages.preYttc,
        common: allMessages.common,
        switcher: allMessages.switcher,
    };

    return (
        <NextIntlClientProvider locale={locale} messages={pageMessages}>
            <PreYTTCPrep locale={locale} />
        </NextIntlClientProvider>
    );
}
