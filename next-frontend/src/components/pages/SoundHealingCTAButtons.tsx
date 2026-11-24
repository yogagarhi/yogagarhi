"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";

interface SoundHealingCTAButtonsProps {
  className?: string;
  enquiryText?: string;
  bookingText?: string;
  size?: "default" | "sm" | "lg" | "xl";
}

export default function SoundHealingCTAButtons({
  className = "flex flex-col sm:flex-row items-center justify-center gap-4",
  enquiryText = "Quick Enquiry",
  bookingText = "Book a Call",
  size = "xl",
}: SoundHealingCTAButtonsProps) {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowBookingDialog } = useBooking();

  return (
    <div className={className}>
      <Button
        type="button"
        variant="hero"
        size={size}
        className="w-full sm:w-auto min-w-[200px]"
        onClick={() => setShowQuickEnquiry(true)}
      >
        {enquiryText}
      </Button>
      <Button
        type="button"
        variant="heroOutline"
        size={size}
        className="w-full sm:w-auto min-w-[200px]"
        onClick={() => setShowBookingDialog(true)}
      >
        {bookingText}
      </Button>
    </div>
  );
}
