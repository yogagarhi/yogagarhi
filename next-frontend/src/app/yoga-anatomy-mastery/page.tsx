import { Metadata } from "next";
import YogaAnatomyMastery from "@/components/pages/YogaAnatomyMastery";

export const metadata: Metadata = {
  title: "Yoga Anatomy Mastery - Awareness Through Asana",
  description: "Master yoga through anatomy, not guesswork. Asana brings awareness, anatomy gives it direction. Book your free live demo session today.",
  keywords: "yoga anatomy, yoga awareness, asana anatomy, biomechanics, yoga teacher training, yogagarhi",
};

export default function Page() {
  return <YogaAnatomyMastery />;
}
