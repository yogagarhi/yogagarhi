import { Metadata } from "next";
import ThankYou from "@/components/pages/ThankYou";
import { applyQualityGate } from "@/utils/seoQualityGate";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  let messages: any;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`@/messages/en.json`)).default;
  }

  if (locale === "en") {
    return {
      metadataBase: new URL("https://www.yogagarhi.com"),
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
  }

  const title = messages.thankYou?.metaTitle || "Thank You | YogaGarhi";
  const description = messages.thankYou?.metaDesc || "Thank you for your enrollment request.";

  return applyQualityGate({
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      absolute: title,
    },
    description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: locale === "en" ? "https://www.yogagarhi.com/thank-you" : `https://www.yogagarhi.com/${locale}/thank-you`,
    },
  }, locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages: any = await getMessages();
  const thankYouClientMessages = {
    thankYou: messages.thankYou,
    common: messages.common,
    dialogs: messages.dialogs,
    nav: messages.nav,
    navDropdown: messages.navDropdown,
    footer: messages.footer,
    switcher: messages.switcher,
    stickyContact: messages.stickyContact,
  };

  return (
    <NextIntlClientProvider locale={locale} messages={thankYouClientMessages}>
      <ThankYou />
    </NextIntlClientProvider>
  );
}
