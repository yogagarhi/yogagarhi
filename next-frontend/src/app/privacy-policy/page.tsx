import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Privacy Policy | YogaGarhi",
  description: "Read YogaGarhi's privacy policy. Learn how we handle and protect your personal information when you inquire or enroll in our yoga teacher training courses.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl prose prose-neutral">
        <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground leading-relaxed">
          At YogaGarhi, your privacy is important to us. This policy describes how we handle any information you provide through our website. 
          We only collect data that is necessary for processing your course inquiries, enrollment, and providing our holistic yoga services.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">What Data We Collect</h2>
        <p className="text-muted-foreground">Information such as your name, email address, and phone number when you fill out contact or booking forms.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use It</h2>
        <p className="text-muted-foreground">To communicate with you about your requested training, updates on your chosen batch, and relevant ashram news.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
        <p className="text-muted-foreground">By using our site, you consent to our privacy policy. If you have any questions, please contact us at <a href="mailto:yogagarhi@gmail.com">yogagarhi@gmail.com</a>.</p>
      </div>
    </Layout>
  );
}
