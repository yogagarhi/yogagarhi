import { Metadata } from "next";
import TeacherTrainingFoundation from "@/components/pages/TeacherTrainingFoundation";

export const metadata: Metadata = {
    title: "2-Day Yoga Teacher Foundation | Start Your Career - YogaGarhi",
    description: "Join YogaGarhi's 2-Day Yoga Teacher Foundation Masterclass. Discover the path to becoming a certified yoga teacher and building a purpose-driven career.",
    keywords: [
        "yoga teacher training foundation",
        "2 day yoga workshop",
        "become yoga teacher",
        "yoga career path",
        "YogaGarhi masterclass"
    ],
    alternates: {
        canonical: "/teacher-training-foundation",
    },
    openGraph: {
        title: "2-Day Yoga Teacher Foundation | Start Your Career - YogaGarhi",
        description: "Join YogaGarhi's 2-Day Yoga Teacher Foundation Masterclass. Discover the path to becoming a certified yoga teacher and building a purpose-driven career.",
        url: "https://yogagarhi.com/teacher-training-foundation",
        type: "website",
        images: [
            {
                url: "https://yogagarhi.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Yoga Teacher Foundation",
            },
        ],
    },
};

export default function Page() {
    return <TeacherTrainingFoundation />;
}
