import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { COURSE_200_FAQS } from "@/constants/course200Data";

export default function CourseFAQSection() {
  if (!COURSE_200_FAQS || COURSE_200_FAQS.length === 0) return null;

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Everything you need to know about our 200-hour residential teacher training in Gianyar, Bali.
            </p>
          </div>

          {/* Accordion / Details List */}
          <div className="space-y-4">
            {COURSE_200_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-card rounded-2xl border border-border/80 shadow-sm transition-all duration-300 hover:border-primary/40 open:border-primary/50 open:bg-card/90 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 text-foreground font-heading font-semibold text-base md:text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 group-open:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center flex-shrink-0 group-open:bg-primary group-open:text-primary-foreground group-open:rotate-180 transition-all duration-300">
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  </div>
                </summary>
                <div className="px-5 pb-6 md:px-6 md:pb-6 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/40 pt-4">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
