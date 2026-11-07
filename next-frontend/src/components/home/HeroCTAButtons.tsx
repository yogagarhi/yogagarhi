"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";

import { useTranslations } from "next-intl";

export default function HeroCTAButtons() {
  const t = useTranslations("home.hero");
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowBookingDialog } = useBooking();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-6 w-full max-w-md mx-auto px-4">
      <Button
        type="button"
        variant="hero"
        size="xl"
        className="w-full sm:w-auto max-w-[320px] min-h-[44px] h-auto py-3 px-6 text-xs min-[375px]:text-sm sm:text-base break-words text-center leading-tight whitespace-normal shadow-lg"
        onClick={() => setShowQuickEnquiry(true)}
      >
        {t("quickEnquiry")}
      </Button>
      <Button
        type="button"
        variant="heroOutline"
        size="xl"
        className="w-full sm:w-auto max-w-[320px] min-h-[44px] h-auto py-3 px-6 text-xs min-[375px]:text-sm sm:text-base break-words text-center leading-tight whitespace-normal shadow-lg"
        onClick={() => setShowBookingDialog(true)}
      >
        {t("bookCall")}
      </Button>
    </div>
  );
}
