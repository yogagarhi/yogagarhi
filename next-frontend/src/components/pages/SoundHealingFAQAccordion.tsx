"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SOUND_HEALING_FAQS } from "@/constants/soundHealingData";

export default function SoundHealingFAQAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {SOUND_HEALING_FAQS.map((faq, idx) => (
        <div
          key={idx}
          className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all"
        >
          <button
            type="button"
            onClick={() => toggleFaq(idx)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-foreground hover:text-primary transition-colors gap-3"
            aria-expanded={openFaq === idx}
          >
            <span className="text-sm sm:text-base font-semibold">{faq.q}</span>
            <ChevronDown
              className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                openFaq === idx ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
          {openFaq === idx && (
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
