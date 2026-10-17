import { Metadata } from "next";
import PreYTTCPrep from "@/components/pages/PreYTTCPrep";

export const metadata: Metadata = {
    title: "Begin Before You Begin | Pre-YTTC Support",
    description: "Prepare gently for transformation. Discover our exclusive 'Before You Join' preparation program for yoga teacher training in Bali.",
    alternates: {
        canonical: "https://www.yogagarhi.com/pre-yttc-prep",
    },
    robots: {
        index: false, // Recommended for PPC/Ads landing pages unless they offer SEO value
        follow: true,
    },
};

export default function Page() {
    return <PreYTTCPrep />;
}
