"use client";
import React from "react";
import { Users, Sparkles, Waves, Leaf, RefreshCw } from "lucide-react";

export default function YogaGarhiDifferenceVarkalaSection() {
  const differences = [
    {
      icon: Users,
      badge: "Intimate Mentorship",
      title: "Small Batches: 8–10 Students Max",
      description:
        "While typical commercial yoga teacher trainings across India crowd 25 to 35 students into an echoing hall, YogaGarhi strictly caps every cohort at 8 to 10 practitioners. This intimate cohort size ensures our master teachers observe your breathing rhythms, skeletal alignment, and muscular engagement throughout each asana. You receive daily one-on-one anatomical feedback, postural adjustments tailored specifically to your unique bone structure, and direct answers to your personal philosophical inquiries. You will never be a faceless number in the back row; you are an individual whose unique yogic growth matters."
    },
    {
      icon: Sparkles,
      badge: "Exclusive to YogaGarhi",
      title: "Prakriti-Based Personalized Yoga",
      description:
        "We reject rigid, one-size-fits-all sequencing that risks student injury. Drawing directly from classical Ayurveda and yogic therapy, our senior faculty evaluate your individual Prakriti—your innate constitutional balance of Vata, Pitta, and Kapha doshas. Throughout your training in Varkala, you learn how to modify asanas, pranayama ratios, and daily meditation routines to balance your personal doshic nature and optimize your energy. More importantly, you graduate with the rare diagnostic ability to customize safe, therapeutic yoga sequences for students of all ages, body types, and health conditions."
    },
    {
      icon: Waves,
      badge: "Oceanfront Practice",
      title: "Beach & Cliff Shala with Ocean Prana",
      description:
        "Our practice shalas are perched above the Arabian Sea amidst swaying palm trees, allowing you to practice with the rhythmic sound of crashing waves as your natural metronome. Coastal negative ions naturally purify your respiratory system, deepen your pranayama practice, and soothe your nervous system. From sunrise Surya Namaskars on the cliff deck to bare-foot grounding meditation on sacred Papanasam Beach, practicing immersed in nature deepens your connection to the Panchamahabhutas (the five universal elements)."
    },
    {
      icon: Leaf,
      badge: "Ayurvedic Heritage",
      title: "Kerala Ayurveda Immersion & Panchakarma",
      description:
        "Because Varkala is situated in the historic homeland of Ayurveda, our curriculum provides deep immersion in classical Ayurvedic medicine. Learn Dinacharya (daily health rituals), Ritucharya (seasonal lifestyle), pulse diagnosis basics, and the therapeutic applications of native Kerala herbs like Brahmi and Ashwagandha. Residential students experience authentic Ayurvedic body treatments (including Abhyanga and Kizhi herbal poultices) administered by certified traditional practitioners, grounding theoretical knowledge in lived somatic rejuvenation."
    },
    {
      icon: RefreshCw,
      badge: "Lifelong Community",
      title: "Lifetime Free Re-attendance",
      description:
        "Our sacred relationship does not conclude when you receive your certificate on graduation day. As a YogaGarhi alumnus, you belong to our global spiritual sangha for life. We offer a revolutionary lifetime free re-attendance guarantee: you can return to re-attend future batches of your completed course at any of our global campuses—Varkala, Rishikesh, or Bali—completely tuition-free anytime in the future. Whether you wish to brush up on sequencing, refresh your anatomy knowledge, or simply recharge your spirit by the sea, our doors are always open to you."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="yogagarhi-difference" style={{ contentVisibility: "auto", containIntrinsicSize: "980px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Distinctive Excellence</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              The YogaGarhi Difference in Varkala
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              How our capped cohort sizes, personalized Ayurvedic Prakriti assessment, oceanfront shalas, and lifetime support elevate your training beyond commercial certification mills.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* 5 Distinct Difference Cards */}
          <div className="space-y-6">
            {differences.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon Column */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content Column */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                          {diff.badge}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">Pillar 0{idx + 1}</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {diff.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-1">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
