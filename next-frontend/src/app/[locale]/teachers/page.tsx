import { Metadata } from "next";
import AboutTeachers from "@/components/pages/AboutTeachers";
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

    const title = locale === "en" ? "Our Teachers - Experienced Yoga Masters" : (messages.teachers?.metaTitle || "Our Teachers - Experienced Yoga Masters");
    const description = locale === "en" ? "Meet our experienced yoga teachers at YogaGarhi. Learn from Yogacharya Sachin and our expert faculty with decades of combined teaching experience." : (messages.teachers?.metaDesc || "Meet our experienced yoga teachers at YogaGarhi. Learn from Yogacharya Sachin and our expert faculty with decades of combined teaching experience.");
    const url = locale === "en" ? "https://www.yogagarhi.com/teachers" : `https://www.yogagarhi.com/${locale}/teachers`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: `${title} | YogaGarhi`,
        },
        description,
        keywords: "yoga teachers Bali, yoga masters, YogaGarhi instructors, Sachin Ji, yoga teacher training faculty",
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/teachers"),
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

export default async function AboutTeachersPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages: any = await getMessages();
    const clientMessages = {
        teachers: messages.teachers,
        home: {
            ready: messages.home?.ready,
        },
    };

    const teachersListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "YogaGarhi Teaching Faculty & Yoga Masters",
        "description": "Experienced Yoga Masters and Himalayan Lineage Teachers at YogaGarhi.",
        "itemListElement": [
            {
                "@type": "Person",
                "position": 1,
                "name": "Yogacharya Sachin",
                "jobTitle": "Founder & Lead Yoga Master",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/founder-image.png",
                "description": "Born in the foothills of the Himalayas, Yogacharya Sachin has dedicated over 15 years to authentic Hatha, Ashtanga, Pranayama, and Yogic Philosophy sadhana. E-RYT 500 accredited.",
                "knowsAbout": [
                    "Traditional Hatha Yoga",
                    "Ashtanga Vinyasa",
                    "Pranayama",
                    "Yoga Philosophy",
                    "Alignment & Adjustment"
                ],
                "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "E-RYT 500, Master in Yoga"
                }
            },
            {
                "@type": "Person",
                "position": 2,
                "name": "Chanda Ji",
                "jobTitle": "Co-Founder & Senior Master",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/chanda-ji-hd.png",
                "description": "Over 40 years of sadhana in traditional Hatha, Bhakti, and Kriya Yoga traditions with 15+ years of international teaching.",
                "knowsAbout": [
                    "Hatha Yoga",
                    "Bhakti Yoga",
                    "Kriya Yoga",
                    "Vedic Mantra & Meditation"
                ]
            },
            {
                "@type": "Person",
                "position": 3,
                "name": "Rahul Ji",
                "jobTitle": "Senior Teacher - Vinyasa & Methodology",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/rahul-ji-hd.png",
                "description": "Specialist in Vinyasa Flow, intelligent sequencing, and teacher practicum with over 7 years of teaching experience across Mysore and Rishikesh.",
                "knowsAbout": [
                    "Vinyasa Flow Sequencing",
                    "Teaching Methodology",
                    "Mindful Alignment"
                ]
            },
            {
                "@type": "Person",
                "position": 4,
                "name": "Rohit Ji",
                "jobTitle": "Senior Teacher - Hatha & Pranayama",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/rohit-ji-hd.png",
                "description": "Over 10 years of teaching traditional Hatha yoga and classical breathwork techniques rooted in Rishikesh lineage.",
                "knowsAbout": [
                    "Classical Hatha Yoga",
                    "Advanced Pranayama",
                    "Shatkarmas & Kriyas"
                ]
            },
            {
                "@type": "Person",
                "position": 5,
                "name": "Abhishek Ji",
                "jobTitle": "Teacher - Alignment & Safe Practice",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/abhishek-ji-hd.png",
                "description": "Bachelor in Yoga and 500-hour TTC certified instructor specializing in biomechanics, posture correction, and injury prevention.",
                "knowsAbout": [
                    "Anatomical Alignment",
                    "Injury Prevention",
                    "Functional Movement"
                ],
                "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "Bachelor's Degree in Yoga, 500-Hour YTTC"
                }
            },
            {
                "@type": "Person",
                "position": 6,
                "name": "Ankit Ji",
                "jobTitle": "Teacher - Ashtanga Flow & Yogic Science",
                "worksFor": {
                    "@type": "EducationalOrganization",
                    "name": "YogaGarhi",
                    "url": "https://www.yogagarhi.com"
                },
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/ankit-ji-hd.png",
                "description": "Born in Devprayag and raised in Rishikesh, holding a Master's degree in Yogic Science and 500-Hour Yoga Alliance certification.",
                "knowsAbout": [
                    "Ashtanga Primary Series",
                    "Yogic Science",
                    "Dynamic Sequencing"
                ],
                "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "Master's Degree in Yogic Science, RYT 500"
                }
            }
        ]
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
                                "name": "Our Teachers",
                                "item": "https://www.yogagarhi.com/teachers"
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(teachersListSchema)
                }}
            />
            <NextIntlClientProvider locale={locale} messages={clientMessages}>
                <AboutTeachers />
            </NextIntlClientProvider>
        </>
    );
}
