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
  const description = locale === "en" ? "YogaGarhi transparent refund, booking deposit, and batch transfer policy for Yoga Teacher Training courses and retreats in Bali and Rishikesh." : (messages.refundPolicy?.metaDesc || "YogaGarhi transparent refund, booking deposit, and batch transfer policy for Yoga Teacher Training courses and retreats in Bali and Rishikesh.");
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
            {isEn ? "Confidence & Flexibility Guarantee" : t.badge}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            {isEn ? "Refund & Batch Transfer Policy" : t.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isEn
              ? "We understand that life circumstances change. At YogaGarhi, we offer transparent, flexible booking terms designed to protect your investment in your spiritual journey."
              : t.intro}
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
              {isEn ? "100% Transferable" : t.highlight1Title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "Your deposit is 100% transferable to any future batch or different location (Bali / Rishikesh) within 12 months."
                : t.highlight1Text}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {isEn ? "12-Month Validity" : t.highlight2Title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "Need to reschedule? You have 1 full year from your original date to attend your teacher training or retreat."
                : t.highlight2Text}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {isEn ? "Medical Emergencies" : t.highlight3Title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isEn
                ? "In cases of unforeseen health or travel emergencies with documentation, priority batch rebooking is provided at zero fee."
                : t.highlight3Text}
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 max-w-none text-foreground">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "1. Booking Deposit & Seat Reservation" : t.section1Title}
            </h2>
            {isEn ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                To guarantee your spot and accommodation in your chosen Yoga Teacher Training Course or Retreat, a deposit of <strong>$250 USD</strong> (or equivalent) is required at the time of enrollment. This allows our ashram to reserve your room, prepare educational materials, and assign dedicated faculty mentors.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.section1Text}
              </p>
            )}
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "2. Batch Rescheduling & Date Changes" : t.section2Title}
            </h2>
            {isEn ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are unable to join your scheduled start date, you may reschedule to any upcoming batch within <strong>12 months</strong> at zero penalty, provided you inform our admissions office at least <strong>15 days</strong> prior to the course start date.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.section2Text}
              </p>
            )}
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "3. Balance Payment Terms" : t.section3Title}
            </h2>
            {isEn ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                The remaining course fee balance is payable upon arrival at the ashram on orientation day (or via bank transfer / credit card link prior to arrival). Once a course has commenced and student has checked in, tuition fees and accommodation costs are non-refundable as resources and room allocations have been committed.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.section3Text}
              </p>
            )}
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {isEn ? "4. Questions & Admissions Support" : t.section4Title}
            </h2>
            {isEn ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                For any questions regarding batch rescheduling or custom payment plans, our admissions team is available daily via email at <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">yogagarhi@gmail.com</a> or WhatsApp at <a href="https://wa.me/917895350563" className="text-primary font-semibold hover:underline">+91-7895350563</a>.
              </p>
            ) : (
              (() => {
                const text = t.section4Text || "";
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
              })()
            )}
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
