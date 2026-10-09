"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";

export default function HeroCTAButtons() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowBookingDialog } = useBooking();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
      <Button
        type="button"
        variant="hero"
        size="xl"
        onClick={() => setShowQuickEnquiry(true)}
      >
        Quick Enquiry
      </Button>
      <Button
        type="button"
        variant="heroOutline"
        size="xl"
        onClick={() => setShowBookingDialog(true)}
      >
        Book an Appointment
      </Button>
    </div>
  );
}
