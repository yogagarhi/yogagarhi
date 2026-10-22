import { Metadata } from "next";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";
import Contact from "@/components/pages/Contact";
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

    const title = locale === "en" ? "Contact Us - Get in Touch" : (messages.contactUs?.metaTitle || "Contact Us - Get in Touch");
    const description = locale === "en" ? "Contact YogaGarhi for yoga teacher training inquiries. Reach us via WhatsApp, phone, or email. We respond within 24 hours." : (messages.contactUs?.metaDesc || "Contact YogaGarhi for yoga teacher training inquiries. Reach us via WhatsApp, phone, or email. We respond within 24 hours.");
    const url = locale === "en" ? "https://www.yogagarhi.com/contact-us" : `https://www.yogagarhi.com/${locale}/contact-us`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "contact YogaGarhi, yoga training inquiry, YTTC questions, yoga school contact Bali",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/contact-us"),
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
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export const revalidate = 86400;

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const contactMessages = {
        contactUs: messages.contactUs,
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
                                "name": "Contact",
                                "item": "https://www.yogagarhi.com/contact-us"
                            }
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={contactMessages}>
                <Contact />
            </NextIntlClientProvider>
        </>
    );
}
