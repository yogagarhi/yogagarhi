import { Metadata } from "next";
import Gallery from "@/components/pages/Gallery";
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

    const title = locale === "en" ? "Gallery - Yoga Teacher Training Photos" : (messages.gallery?.metaTitle || "Gallery - Yoga Teacher Training Photos");
    const description = locale === "en" ? "Explore our yoga teacher training gallery. See photos from our ashram in Bali, yoga classes, ceremonies, and the beautiful surroundings of Ubud." : (messages.gallery?.metaDesc || "Explore our yoga teacher training gallery. See photos from our ashram in Bali, yoga classes, ceremonies, and the beautiful surroundings of Ubud.");
    const url = locale === "en" ? "https://www.yogagarhi.com/gallery" : `https://www.yogagarhi.com/${locale}/gallery`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "yoga training photos, YTTC gallery, yoga ashram pictures, Bali yoga images, Ubud retreat photos",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/gallery"),
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

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const clientMessages = {
        gallery: messages.gallery,
        home: {
            videoGallery: messages.home?.videoGallery,
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
                                "name": "Gallery",
                                "item": "https://www.yogagarhi.com/gallery"
                            }
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={clientMessages}>
                <Gallery />
            </NextIntlClientProvider>
        </>
    );
}
