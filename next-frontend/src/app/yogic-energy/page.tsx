import type { Metadata } from "next";
import YogicEnergyLanding from "@/components/pages/YogicEnergyLanding";

export const metadata: Metadata = {
    title: "Reveal Your Unique Yogic Energy | YogaGarhi",
    description:
        "Take our 6-question Prakriti quiz and discover whether you are Vata, Pitta or Kapha — and which yoga practice will truly transform your life.",
    robots: "noindex, nofollow",
    openGraph: {
        title: "What Is Your Yogic Energy Type?",
        description:
            "Discover your unique Dosha constitution with this free 6-question Prakriti quiz from YogaGarhi.",
        type: "website",
    },
};

export default function YogicEnergyPage() {
    return <YogicEnergyLanding />;
}
