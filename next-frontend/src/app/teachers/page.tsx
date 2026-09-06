import { Metadata } from "next";
import AboutTeachers from "@/components/pages/AboutTeachers";

export const metadata: Metadata = {
    title: "Our Teachers - Experienced Yoga Masters",
    description: "Meet our experienced yoga teachers at YogaGarhi. Learn from Yogacharya Sachin and our expert faculty with decades of combined teaching experience.",
    keywords: "yoga teachers Bali, yoga masters, YogaGarhi instructors, Sachin Ji, yoga teacher training faculty",
    alternates: {
        canonical: "/teachers",
    },
};

export default function AboutTeachersPage() {
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
                "image": "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/founder-sachin-ji.jpg",
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
            <AboutTeachers />
        </>
    );
}

