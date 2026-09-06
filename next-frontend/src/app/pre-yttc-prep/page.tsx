import { Metadata } from "next";
import PreYTTCPrep from "@/components/pages/PreYTTCPrep";

export const metadata: Metadata = {
    title: "Begin Before You Begin | Pre-YTTC Support",
    description: "Don't jump into transformation, be gently prepared for it. Discover our exclusive 'Before You Join' preparation program for yoga teacher training in Bali.",
    alternates: {
        canonical: "/pre-yttc-prep",
    },
    robots: {
        index: false, // Recommended for PPC/Ads landing pages unless they offer SEO value
        follow: true,
    },
};

export default function Page() {
    return <PreYTTCPrep />;
}
