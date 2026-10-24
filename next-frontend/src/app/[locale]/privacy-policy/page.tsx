import { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";
import { setRequestLocale } from "next-intl/server";
import LegalNoticeBanner from "@/components/LegalNoticeBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  let messages: any;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`@/messages/en.json`)).default;
  }

  const title = locale === "en" ? "Privacy Policy | YogaGarhi" : (messages.privacyPolicy?.metaTitle || "Privacy Policy | YogaGarhi");
  const description = locale === "en" ? "Read YogaGarhi's privacy policy. Learn how we protect your personal information when you inquire or enroll in our yoga training courses." : (messages.privacyPolicy?.metaDesc || "Read YogaGarhi's privacy policy. Learn how we protect your personal information when you inquire or enroll in our yoga training courses.");
  const url = locale === "en" ? "https://www.yogagarhi.com/privacy-policy" : `https://www.yogagarhi.com/${locale}/privacy-policy`;

  const metadata: Metadata = {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      default: title,
      template: "%s | YogaGarhi",
    },
    description,
    alternates: {
      canonical: url,
      languages: getReviewedHreflang("/privacy-policy"),
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
    },
  };

  return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  let messages: any;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`@/messages/en.json`)).default;
  }

  const isEn = locale === "en";
  const p = messages.privacyPolicy || {};

  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl prose prose-neutral">
        {!isEn && (
          <LegalNoticeBanner
            locale={locale}
            disclaimerNotice={messages.legalCommon?.disclaimerNotice}
          />
        )}
        <h1 className="font-heading text-4xl font-bold mb-8">
          {isEn ? "Privacy Policy" : p.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {isEn
            ? "At YogaGarhi, your privacy is important to us. This policy describes how we handle any information you provide through our website. We only collect data that is necessary for processing your course inquiries, enrollment, and providing our holistic yoga services."
            : p.intro}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {isEn ? "What Data We Collect" : p.section1Title}
        </h2>
        <p className="text-muted-foreground">
          {isEn
            ? "Information such as your name, email address, and phone number when you fill out contact or booking forms."
            : p.section1Text}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {isEn ? "How We Use It" : p.section2Title}
        </h2>
        <p className="text-muted-foreground">
          {isEn
            ? "To communicate with you about your requested training, updates on your chosen batch, and relevant ashram news."
            : p.section2Text}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {isEn ? "Consent" : p.section3Title}
        </h2>
        <p className="text-muted-foreground">
          {isEn ? (
            <>By using our site, you consent to our privacy policy. If you have any questions, please contact us at <a href="mailto:yogagarhi@gmail.com">yogagarhi@gmail.com</a>.</>
          ) : (
            <>
              {p.section3Text?.replace("{email}", "")} <a href="mailto:yogagarhi@gmail.com">yogagarhi@gmail.com</a>.
            </>
          )}
        </p>
      </div>
    </Layout>
  );
}
