"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import {
  FAQItem,
  VARKALA_FAQS_200_HOUR,
  VARKALA_FAQS_100_HOUR,
  VARKALA_FAQS_300_HOUR
} from "@/constants/varkalaCourseData";

interface VarkalaFAQSectionProps {
  courseHours?: "100" | "200" | "300";
}

export default function VarkalaFAQSection({ courseHours = "200" }: VarkalaFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] =
    courseHours === "100"
      ? VARKALA_FAQS_100_HOUR
      : courseHours === "300"
      ? VARKALA_FAQS_300_HOUR
      : VARKALA_FAQS_200_HOUR;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="faqs" style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Everything you need to know about our {courseHours}-Hour Yoga Teacher Training in Varkala, Kerala.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border/80 bg-card overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base md:text-lg text-foreground hover:text-primary transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Desk CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-secondary/40 border border-border/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-heading text-base font-bold text-foreground">
                Still have a question about Varkala?
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Our admissions team is available 24/7 on WhatsApp to help you plan your coastal training.
              </p>
            </div>
            <a
              href="https://wa.me/917895350563?text=Namaste!%20I%20have%20a%20question%20about%20the%20Yoga%20Teacher%20Training%20in%20Varkala%20Kerala."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
