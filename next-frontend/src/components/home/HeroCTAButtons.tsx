"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useYogicEnergy } from "@/components/YogicEnergyDialog";

export default function HeroCTAButtons() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowYogicEnergy } = useYogicEnergy();

  return (
    <>
      {/* Primary CTA Buttons */}
      <div className="flex flex-col items-center justify-center pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Button
            type="button"
            variant="hero"
            size="xl"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowQuickEnquiry(true);
            }}
          >
            Quick Enquiry
          </Button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowYogicEnergy(true);
            }}
            className="relative h-14 px-10 text-base font-bold rounded-lg overflow-hidden group/yogic
              bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
              text-white shadow-xl shadow-orange-500/40
              hover:shadow-orange-500/60 hover:scale-105
              transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Reveal Your Unique Yogic Energy
            </span>
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover/yogic:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </button>
        </div>
      </div>

      {/* Secondary WhatsApp Gift CTA */}
      <div className="flex justify-center pt-4">
        <Button
          type="button"
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open("https://wa.me/917895350563?text=Namaste!%20I'd%20like%20to%20claim%20the%20$450%20Bali%20Explorer%20Gift.", "_blank");
          }}
        >
          Claim $450 Bali Explorer Gift
        </Button>
      </div>
    </>
  );
}
