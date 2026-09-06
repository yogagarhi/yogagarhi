import { Metadata } from "next";
import Course200Hour from "@/components/pages/Course200Hour";
import { courseData } from "@/constants/courses";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["200-hour"];

    const title = "200 Hour Yoga Teacher Training in Bali | RYT 200 Ubud Bali";

    const description =
        "Become a certified yoga instructor with our 200-Hour Yoga TTC in Bali. Yoga Alliance RYT 200, authentic Hatha & Vinyasa in Ubud. Apply now for early-bird rates!";

    const url =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali";

    return {
        title: {
            absolute: title,
        },
        description,
        keywords: [
            "200 hour yoga teacher training in bali",
            "200 hour yoga TTC bali",
            "ryt 200 yoga teacher training bali",
            "yoga alliance 200 hour bali",
            "yoga teacher training bali"
        ],
        alternates: {
            canonical: "/200-hour-yoga-teacher-training-in-bali",
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
            images: [
                {
                    url: "https://www.yogagarhi.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

/* =========================
   PAGE
========================= */
export default function Page() {
    const course = courseData["200-hour"];
    const pageUrl =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali";

    const fullDescription = "Our 200 Hour Yoga Teacher Training in Bali is a full, beginner-to-intermediate level course for students who want to become confident yoga teachers or deeply understand yoga for their own life. Yoga Garhi is in Gianyar, only about 15 km from Ubud, so you enjoy a peaceful, green village setting close to nature with easy access to Bali’s main yoga and culture center. During the training, you practice asanas every day, learn correct alignment, study pranayama, meditation, yoga philosophy, anatomy, and full teaching methodology. Step by step, you build strength in your body, clarity in your mind, and the skills to guide safe and meaningful classes for others. Bali is one of the most loved places in the world for yoga, with rice fields, temples, daily prayers, and a gentle, spiritual feeling in the air. In Gianyar, you stay away from the crowded tourist areas but you can still visit Ubud’s cafes, markets, and healing centers in your free time. A typical day at Yoga Garhi starts with silence, pranayama, and meditation, followed by strong asana practice, then classes on philosophy or anatomy, and afternoon teaching practice or workshops. Evenings usually include gentle yoga, relaxation, chanting, or group sharing. This daily rhythm helps you live the yogic lifestyle, not just do yoga for one hour. Yoga Garhi is a heart-led school created by sincere yoga practitioners and teachers who truly live what they teach. We share yoga in a traditional yet simple way, using clear language and practical examples so you really understand. Our school in Gianyar has a calm, natural atmosphere with fresh air and village life around. We keep our groups small so every student gets personal guidance, alignment corrections, and support in their teaching practice. Our teachers are experienced and caring; they are patient with beginners, honest with feedback, and always open to questions. We believe yoga is not about perfect poses or performance. It is about awareness, kindness, balance, and connection with yourself and others. At Yoga Garhi, you will find discipline but also warmth, structure but also space to be yourself. Many students say our school feels like a home away from home where they feel safe to grow, release, and transform. By the end of your 200 hours, you will feel stronger, more centered, and ready to share yoga with others if you wish. If you are not ready for a full 200 hour course, or you prefer to study in parts, Yoga Garhi is also a great place for your 100 hour YTTC. Our 100 hour training offers the same peaceful location, small groups, and clear teaching in a shorter format. You can start with 100 hours to deepen your practice and sample training life.Then you can return later for another 100 hours.This will complete your 200-hour journey with teachers and a school you trust. Choosing Yoga Garhi—whether for 100 or 200 hours—means choosing a school that values authenticity, simplicity, and heart, and that truly cares about your growth as a practitioner and as a human being.";

    /* =========================
       ARTICLE SCHEMA
    ========================= */
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "200 Hour Yoga Teacher Training in Bali | Yogagarhi",
        "description": "Join our residential 200 Hour Yoga Teacher Training in Bali, a Yoga Alliance RYT 200 course offering authentic yoga, asana, pranayama, and meditation.",
        "image": "https://www.yogagarhi.com/og-image.jpg",
        "author": {
            "@type": "Organization",
            "name": "Yogagarhi"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Yogagarhi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.yogagarhi.com/logo.png"
            }
        },
        "datePublished": "2026-03-13",
        "dateModified": "2026-03-13"
    };

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "200 Hour Yoga Teacher Training in Bali | Yogagarhi",
        "description": "Join our residential 200 Hour Yoga Teacher Training in Bali, a Yoga Alliance RYT 200 course offering authentic yoga, asana, pranayama, and meditation.",
        "inLanguage": "en",
        "educationalCredentialAwarded":
            "RYT 200 Yoga Alliance Certification",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner to intermediate yoga practitioners"
        },
        "coursePrerequisites":
            "Basic yoga practice recommended but not mandatory",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "duration": "P24D",
            "location": {
                "@type": "Place",
                "name": "YogaGarhi Ashram",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gianyar",
                    "addressRegion": "Bali",
                    "addressCountry": "Indonesia"
                }
            }
        },
        "offers": {
            "@type": "Offer",
            "price": course.price.replace("$", ""),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": pageUrl
        }
    };

    /* =========================
       FAQ SCHEMA
    ========================= */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Where is your 200 hour YTTC held in Bali?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our 200 hour YTTC takes place at Yoga Garhi in Gianyar, Bali, just about 15 km from Ubud. You practice in a peaceful, green area with village life around, and you can easily visit Ubud, the main yoga and culture hub, in your free time."
            }
        }, {
            "@type": "Question",
            "name": "Will I be able to teach after the 200 hour YTTC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A 200 hour training is the standard level to start teaching yoga. After completing the course and meeting all requirements, you will have the knowledge and confidence to guide safe, basic group classes and one-to-one sessions."
            }
        }, {
            "@type": "Question",
            "name": "What style of yoga do you teach in the 200 hour course?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We mainly teach traditional Hatha yoga with elements of Vinyasa-style flow. The focus is on correct alignment, breath awareness, mindful movement, and balanced practice rather than only strong or fast sequences."
            }
        }, {
            "@type": "Question",
            "name": "How long is the 200 hour course, and what is the schedule like?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most 200 hour trainings run for around 3–4 weeks of intensive study. A typical day includes early morning pranayama and meditation, a strong asana practice, theory classes on philosophy or anatomy, afternoon workshops on teaching and adjustments, and evening gentle practice or group activities."
            }
        }, {
            "@type": "Question",
            "name": "Do I need to complete a 100 hour course before joining the 200 hour YTTC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, it is not required. You can directly join the 200 hour course if you have some basic yoga practice. However, if you have already done a 100 hour training (with us or elsewhere), it can help you feel more comfortable with the pace."
            }
        }, {
            "@type": "Question",
            "name": "Do you offer accommodation and food for the 200 hour YTTC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we usually offer course packages that include accommodation and yogic meals, as well as tuition-only options. Please contact us for current details about rooms, food, and prices for your chosen batch."
            }
        }, {
            "@type": "Question",
            "name": "What kind of food is served during the training?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When included, we serve simple, healthy, mostly sattvic meals that support your practice and digestion. The food is light, clean, and designed to keep your energy stable during full training days."
            }
        }, {
            "@type": "Question",
            "name": "Is the course safe and suitable for solo travelers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Many of our students come alone. Gianyar is generally calm, and our school atmosphere is friendly and supportive. We can help with airport pickup arrangements and give guidance about staying safe and comfortable in Bali."
            }
        }, {
            "@type": "Question",
            "name": "Will I get time to rest or explore Bali during the course?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You will have breaks during the day and usually one rest day per week. You can use this time to relax, journal, enjoy nature, or visit nearby places like Ubud, waterfalls, temples, and local markets."
            }
        }, {
            "@type": "Question",
            "name": "How do I apply and book my seat?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact Yoga Garhi through our website, email, or WhatsApp for upcoming dates and availability. After confirmation, you will be asked to pay a booking deposit to secure your spot, and we will send all details about what to bring, how to travel, and how to prepare."
            }
        }]
    };

    /* =========================
       BREADCRUMB SCHEMA
    ========================= */
    const breadcrumbSchema = {
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
                "name": "200 Hour Yoga Teacher Training in Bali",
                "item": pageUrl
            }
        ]
    };

    return (
        <>
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />

            {/* Course Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(courseSchema),
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <Course200Hour />
        </>
    );
}
