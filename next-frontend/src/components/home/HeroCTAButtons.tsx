"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";

export default function HeroCTAButtons() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowBookingDialog } = useBooking();

  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-4 pt-2 sm:pt-6">
      <Button
        type="button"
        variant="hero"
        size="xl"
        className="h-10 min-[375px]:h-11 sm:h-14 px-3.5 min-[375px]:px-5 sm:px-10 text-xs min-[375px]:text-sm sm:text-base"
        onClick={() => setShowQuickEnquiry(true)}
      >
        Quick Enquiry
      </Button>
      <Button
        type="button"
        variant="heroOutline"
        size="xl"
        className="h-10 min-[375px]:h-11 sm:h-14 px-3.5 min-[375px]:px-5 sm:px-10 text-xs min-[375px]:text-sm sm:text-base"
        onClick={() => setShowBookingDialog(true)}
      >
        Book an Appointment
      </Button>
    </div>
  );
}
