import { Metadata } from "next";
import ThankYou from "@/components/pages/ThankYou";

export const metadata: Metadata = {
    title: "Thank You",
    description: "Thank you for your enrollment request.",
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: "https://www.yogagarhi.com/thank-you",
    },
};

export default function Page() {
    return <ThankYou />;
}
