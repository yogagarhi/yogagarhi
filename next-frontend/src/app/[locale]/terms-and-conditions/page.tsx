import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollText, Award, Heart, CheckCircle2 } from 'lucide-react';
import { applyQualityGate, getReviewedHreflang } from '@/utils/seoQualityGate';
import { setRequestLocale } from 'next-intl/server';
import LegalNoticeBanner from '@/components/LegalNoticeBanner';

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

  const title = locale === "en" ? "Terms & Conditions | YogaGarhi Ashram" : (messages.termsConditions?.metaTitle || "Terms & Conditions | YogaGarhi Ashram");
  const description = locale === "en" ? "Review YogaGarhi terms and conditions, ashram rules, code of conduct, and Yoga Alliance certification graduation guidelines." : (messages.termsConditions?.metaDesc || "Review YogaGarhi terms and conditions, ashram rules, code of conduct, and Yoga Alliance certification graduation guidelines.");
  const url = locale === "en" ? "https://www.yogagarhi.com/terms-and-conditions" : `https://www.yogagarhi.com/${locale}/terms-and-conditions`;

  const metadata: Metadata = {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
      languages: getReviewedHreflang("/terms-and-conditions"),
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

export default async function TermsAndConditions({
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
  const t = messages.termsConditions || {};
  const contactHref = isEn ? "/contact-us" : `/${locale}/contact-us`;

  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl">
        {!isEn && (
          <LegalNoticeBanner
            locale={locale}
            disclaimerNotice={messages.legalCommon?.disclaimerNotice}
          />
        )}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            {isEn ? "Ashram Guidelines & Student Agreement" : t.badge}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            {isEn ? "Terms & Conditions" : t.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isEn
              ? "Welcome to YogaGarhi. By enrolling in our courses, retreats, or online programs, you agree to uphold our ashram ethos, code of conduct, and community guidelines."
              : t.intro}
          </p>
        </div>

        <div className="space-y-8 max-w-none text-foreground">
          {/* Section 1 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <ScrollText className="w-6 h-6 text-primary" />
              {isEn ? "1. Ashram Code of Conduct (Yama & Niyama)" : t.section1Title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "YogaGarhi is a consecrated spiritual learning sanctuary. In reverence to yogic traditions, all students and guests are required to observe:"
                : t.section1Intro}
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>
                <strong>{isEn ? "Substance-Free Environment:" : t.section1Point1Title}</strong>{" "}
                {isEn ? "Alcohol, recreational drugs, and smoking are strictly prohibited within ashram premises." : t.section1Point1Text}
              </li>
              <li>
                <strong>{isEn ? "Pure Satvic Diet:" : t.section1Point2Title}</strong>{" "}
                {isEn ? "All meals served are 100% vegetarian, Ayurvedic, and freshly prepared. Non-vegetarian food is not permitted in rooms." : t.section1Point2Text}
              </li>
              <li>
                <strong>{isEn ? "Mindful Respect:" : t.section1Point3Title}</strong>{" "}
                {isEn ? "Respectful interaction with fellow sadhakas (students), monastic masters, and local community customs in Bali and Rishikesh." : t.section1Point3Text}
              </li>
              <li>
                <strong>{isEn ? "Silence Periods (Mauna):" : t.section1Point4Title}</strong>{" "}
                {isEn ? "Observance of designated morning meditation silence hours to deepen inward awareness." : t.section1Point4Text}
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-600" />
              {isEn ? "2. Yoga Alliance Certification Requirements" : t.section2Title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "To graduate and receive your Yoga Alliance RYT (Registered Yoga Teacher) Certificate (100, 200, or 300 Hour), students must satisfy:"
                : t.section2Intro}
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>
                {isEn
                  ? "Minimum 90% attendance across practical asana, pranayama, anatomy, and philosophy contact hours."
                  : t.section2Point1}
              </li>
              <li>
                {isEn
                  ? "Completion of teaching practicum, alignment demonstrations, and final assessment."
                  : t.section2Point2}
              </li>
              <li>
                {isEn
                  ? "Completion of foundational pre-course study manual readings."
                  : t.section2Point3}
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <Heart className="w-6 h-6 text-emerald-600" />
              {isEn ? "3. Health, Wellness & Liability" : t.section3Title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "Students are advised to consult their medical practitioner prior to undertaking intensive physical yoga training. Please inform our teaching team of any pre-existing medical conditions or injuries so appropriate posture modifications can be provided. Students participate willingly at their own physical pace."
                : t.section3Text}
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              {isEn ? "4. Governing Law & Inquiries" : t.section4Title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn ? (
                <>
                  For any clarification regarding ashram rules or certification criteria, please reach out to our administration team at{" "}
                  <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">
                    yogagarhi@gmail.com
                  </a>.
                </>
              ) : (
                <>
                  {t.section4Text?.replace("{email}", "")}{" "}
                  <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">
                    yogagarhi@gmail.com
                  </a>.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="xl" asChild>
            <Link href={contactHref}>
              {isEn ? "Contact Our Team" : t.contactBtn}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
