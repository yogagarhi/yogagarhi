import { Metadata } from "next";
import AboutAshram from "@/components/pages/AboutAshram";

export const metadata: Metadata = {
  title: "About Our Yoga School & Himalayan Mission",
  description: "Learn about YogaGarhi's authentic Himalayan lineage, our sacred ashram in Gianyar Ubud, Bali, and our mission to train compassionate yoga teachers worldwide.",
  keywords: "about YogaGarhi, yoga school Bali, yoga ashram story, yoga teacher training mission, Ubud yoga center",
  alternates: {
    canonical: "/about-school",
  },
};

export default function AboutPage() {
  return <AboutAshram />;
}
