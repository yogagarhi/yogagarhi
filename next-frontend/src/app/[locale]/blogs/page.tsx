import { Metadata } from "next";
import Blog from "@/components/pages/Blog";
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
    } catch {
        messages = (await import(`@/messages/en.json`)).default;
    }

    const title = locale === "en" ? "Yoga Articles & Wisdom Blog" : (messages.blogsListing?.metaTitle || "Yoga Articles & Wisdom Blog");
    const description = locale === "en" ? "Explore authentic articles on yoga philosophy, teacher training, asana alignment, and ashram life in Bali & Rishikesh. Read our latest insights!" : (messages.blogsListing?.metaDesc || "Explore authentic articles on yoga philosophy, teacher training, asana alignment, and ashram life in Bali & Rishikesh. Read our latest insights!");
    const url = locale === "en" ? "https://www.yogagarhi.com/blogs" : `https://www.yogagarhi.com/${locale}/blogs`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            default: title,
            template: "%s | YogaGarhi",
        },
        description,
        keywords: "yoga blog, yoga articles, yoga philosophy, yoga teacher training tips, YogaGarhi blog",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/blogs"),
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

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const blogMessages = {
        blogsListing: messages.blogsListing,
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
                                "name": "Blog",
                                "item": "https://www.yogagarhi.com/blogs"
                            }
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={blogMessages}>
                <Blog locale={locale} />
            </NextIntlClientProvider>
        </>
    );
}
