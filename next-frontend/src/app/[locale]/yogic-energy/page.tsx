import type { Metadata } from "next";
import YogicEnergyLanding from "@/components/pages/YogicEnergyLanding";
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
        ? "Reveal Your Unique Yogic Energy" 
        : (messages.yogicEnergy?.metaTitle || "Reveal Your Unique Yogic Energy");

    const description = locale === "en"
        ? "Take our 6-question Prakriti quiz and discover whether you are Vata, Pitta or Kapha — and which yoga practice will truly transform your life."
        : (messages.yogicEnergy?.metaDesc || "Take our 6-question Prakriti quiz and discover whether you are Vata, Pitta or Kapha — and which yoga practice will truly transform your life.");

    const ogTitle = locale === "en"
        ? "What Is Your Yogic Energy Type?"
        : (messages.yogicEnergy?.ogTitle || title);

    const ogDesc = locale === "en"
        ? "Discover your unique Dosha constitution with this free 6-question Prakriti quiz from YogaGarhi."
        : (messages.yogicEnergy?.ogDesc || description);

    const canonicalUrl = locale === "en"
        ? "https://www.yogagarhi.com/yogic-energy"
        : `https://www.yogagarhi.com/${locale}/yogic-energy`;

    const metadata: Metadata = {
        title,
        description,
        robots: locale === "en" 
            ? "noindex, nofollow" 
            : { index: false, follow: true },
        alternates: {
            canonical: canonicalUrl,
            languages: getReviewedHreflang("/yogic-energy"),
        },
        openGraph: {
            title: ogTitle,
            description: ogDesc,
            type: "website",
            url: canonicalUrl,
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export default async function YogicEnergyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const allMessages: any = await getMessages();
    const pageMessages = {
        yogicEnergy: allMessages.yogicEnergy,
        common: allMessages.common,
        switcher: allMessages.switcher,
    };

    return (
        <NextIntlClientProvider locale={locale} messages={pageMessages}>
            <YogicEnergyLanding locale={locale} />
        </NextIntlClientProvider>
    );
}
