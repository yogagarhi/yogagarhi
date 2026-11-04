import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw, Calendar, HeartHandshake } from 'lucide-react';
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

  const title = locale === "en" ? "Refund & Cancellation Policy | YogaGarhi" : (messages.refundPolicy?.metaTitle || "Refund & Cancellation Policy | YogaGarhi");
  const description = locale === "en" ? "YogaGarhi official refund, booking deposit, and cancellation policy for Yoga Teacher Training courses and retreats in Bali, Rishikesh, and Varkala." : (messages.refundPolicy?.metaDesc || "YogaGarhi official refund, booking deposit, and cancellation policy for Yoga Teacher Training courses and retreats in Bali, Rishikesh, and Varkala.");
  const url = locale === "en" ? "https://www.yogagarhi.com/refund-policy" : `https://www.yogagarhi.com/${locale}/refund-policy`;

  const metadata: Metadata = {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      default: title,
      template: "%s | YogaGarhi",
    },
    description,
    alternates: {
      canonical: url,
      languages: getReviewedHreflang("/refund-policy"),
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

export default async function RefundPolicy({
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
  const t = messages.refundPolicy || {};
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
            {isEn ? "Official Booking Terms" : (t.badge || "Official Booking Terms")}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            {isEn ? "Refund & Cancellation Policy" : (t.title || "Refund & Cancellation Policy")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isEn
              ? "We want you to feel confident when you book. Here is our official policy regarding booking deposits, balance payments, and course cancellations."
              : (t.intro || "We want you to feel confident when you book. Here is our official policy regarding booking deposits, balance payments, and course cancellations.")}
          </p>
        </div>

        {/* Feature Highlights */}
        <h2 className="sr-only">{isEn ? "Policy Highlights" : (t.highlightsSr || "Policy Highlights")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {isEn ? "Deposit Transfer" : (t.highlight1Title || "Deposit Transfer")}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "If you must cancel due to an emergency, you can move your deposit to a future batch within 12 months."
                : (t.highlight1Text || "If you must cancel due to an emergency, you can move your deposit to a future batch within 12 months.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {isEn ? "30-Day Balance Refund" : (t.highlight2Title || "30-Day Balance Refund")}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "Cancel 30 or more days before start to receive a full refund of your balance; bank fees are deducted."
                : (t.highlight2Text || "Cancel 30 or more days before start to receive a full refund of your balance; bank fees are deducted.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {isEn ? "Late Cancellation Credit" : (t.highlight3Title || "Late Cancellation Credit")}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "If you cancel less than 30 days before start, 100% of your balance becomes credit valid for 12 months."
                : (t.highlight3Text || "If you cancel less than 30 days before start, 100% of your balance becomes credit valid for 12 months.")}
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 max-w-none text-foreground">
          {/* Section 1 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "1. Booking Deposit" : (t.section1Title || "1. Booking Deposit")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "To reserve your place and your room, we ask for a $250 USD deposit once your application is approved. This deposit is non-refundable. We use it right away to book your room and plan meals and staff for your batch."
                : (t.section1Text || "To reserve your place and your room, we ask for a $250 USD deposit once your application is approved. This deposit is non-refundable. We use it right away to book your room and plan meals and staff for your batch.")}
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "2. Deposit Transfer (Within 12 Months)" : (t.section2Title || "2. Deposit Transfer (Within 12 Months)")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "Life can change suddenly. If you must cancel because of a flight problem, a medical issue, or another emergency, you can move your deposit to a future batch. The new start date must be within 12 months of your original start date."
                : (t.section2Text || "Life can change suddenly. If you must cancel because of a flight problem, a medical issue, or another emergency, you can move your deposit to a future batch. The new start date must be within 12 months of your original start date.")}
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "3. Remaining Balance & Cancellations" : (t.section3Title || "3. Remaining Balance & Cancellations")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "The rest of your course fee is due at least 30 days before your course starts."
                : (t.section3Intro || "The rest of your course fee is due at least 30 days before your course starts.")}
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                {isEn
                  ? "If you cancel 30 or more days before the start date: We refund the full balance you paid. The $250 deposit is non-refundable, and any bank fees are deducted."
                  : (t.section3Bullet1 || "If you cancel 30 or more days before the start date: We refund the full balance you paid. The $250 deposit is non-refundable, and any bank fees are deducted.")}
              </li>
              <li>
                {isEn
                  ? "If you cancel less than 30 days before the start date: The balance is not refunded. Instead, we save 100% of it as credit you can use for any course within 12 months."
                  : (t.section3Bullet2 || "If you cancel less than 30 days before the start date: The balance is not refunded. Instead, we save 100% of it as credit you can use for any course within 12 months.")}
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "4. After the Course Begins" : (t.sectionAfterStartTitle || "4. After the Course Begins")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "Once the course starts, we cannot give refunds or credits for leaving early, choosing to stop, or missing classes because of illness or personal reasons."
                : (t.sectionAfterStartText || "Once the course starts, we cannot give refunds or credits for leaving early, choosing to stop, or missing classes because of illness or personal reasons.")}
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "5. If YogaGarhi Cancels a Batch" : (t.sectionSchoolCancelTitle || "5. If YogaGarhi Cancels a Batch")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isEn
                ? "If we ever need to cancel a batch, you can choose a full refund of everything you paid, or move to another batch at no extra cost."
                : (t.sectionSchoolCancelText || "If we ever need to cancel a batch, you can choose a full refund of everything you paid, or move to another batch at no extra cost.")}
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "6. Questions & Admissions Support" : (t.section4Title || "6. Questions & Admissions Support")}
            </h2>
            {(() => {
              const defaultText = "For any questions regarding your booking or cancellations, our admissions team is available daily via email at {email} or WhatsApp at {phone}.";
              const text = isEn ? defaultText : (t.section4Text || defaultText);
              const partsEmail = text.split("{email}");
              if (partsEmail.length === 2) {
                const beforeEmail = partsEmail[0];
                const partsPhone = partsEmail[1].split("{phone}");
                if (partsPhone.length === 2) {
                  return (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {beforeEmail}
                      <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">yogagarhi@gmail.com</a>
                      {partsPhone[0]}
                      <a href="https://wa.me/917895350563" className="text-primary font-semibold hover:underline">+91-7895350563</a>
                      {partsPhone[1]}
                    </p>
                  );
                }
              }
              return <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>;
            })()}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="xl" asChild>
            <Link href={contactHref}>
              {isEn ? "Contact Admissions Desk" : (t.contactBtn || "Contact Admissions Desk")}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
