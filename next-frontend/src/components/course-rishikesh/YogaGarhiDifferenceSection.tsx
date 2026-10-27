"use client";
import React from "react";
import { Users, Sparkles, GraduationCap, BookOpen, RefreshCw, CheckCircle2 } from "lucide-react";

export default function YogaGarhiDifferenceSection() {
  const differences = [
    {
      icon: Users,
      badge: "Intimate Mentorship",
      title: "Small Batches: 8–10 Students Max",
      description:
        "While most commercial yoga institutions across Rishikesh crowd 25 to 35 students into a single echoing hall, YogaGarhi strictly caps every cohort at 8 to 10 practitioners. This intimate environment allows our master teachers to observe every student's breath, skeletal alignment, and muscular engagement throughout each asana. You receive daily one-on-one anatomical feedback, postural adjustments tailored specifically to your unique bone structure, and direct answers to your personal philosophical inquiries. You will never be a faceless number in the back row; you are an individual whose teaching voice matters."
    },
    {
      icon: Sparkles,
      badge: "Exclusive to YogaGarhi",
      title: "Prakriti-Based Personalized Yoga",
      description:
        "We reject rigid, one-size-fits-all sequencing that risks student injury. Drawing directly from classical Ayurveda and yogic therapy, our senior faculty evaluate your individual Prakriti—your innate constitutional balance of Vata, Pitta, and Kapha doshas. Throughout the course, you learn how to modify asanas, pranayama ratios, and daily meditation routines to balance your personal doshic nature and optimize your energy. More importantly, you graduate with the rare diagnostic ability to customize safe, therapeutic yoga sequences for students of all ages, body types, and health conditions."
    },
    {
      icon: GraduationCap,
      badge: "Authentic Lineage",
      title: "E-RYT 500 Himalayan Masters",
      description:
        "At YogaGarhi, you train directly under authentic Himalayan masters led by Sachin Ji and our senior faculty. Our teachers hold elite E-RYT 500 designations, postgraduate university degrees in Yogic Science, and decades of lived gurukul training. They do not merely teach academic concepts; they embody the spiritual ethics, humility, and disciplined lifestyle of traditional sadhakas. By combining ancient Himalayan lineages with cutting-edge functional anatomy, biomechanics, and evidence-based sequencing, our faculty equip you with timeless wisdom and modern credibility."
    },
    {
      icon: BookOpen,
      badge: "Immediate Lifetime Access",
      title: "Pre-YTTC Online Preparation",
      description:
        "Your transformational journey begins the moment your registration is confirmed. You immediately receive lifetime access to our comprehensive Pre-YTTC online video preparation portal. Designed by our lead teachers, these preparatory modules walk you through essential Sanskrit pronunciation, primary asana alignments, breathwork basics, and foundational joint mobilization. By establishing regular daily sadhana before landing in India, you arrive at our Tapovan ashram physically prepared, mentally confident, and ready to dive directly into advanced immersion from day one."
    },
    {
      icon: RefreshCw,
      badge: "Lifelong Community",
      title: "Lifetime Free Re-attendance",
      description:
        "Our sacred relationship does not conclude when you receive your certificate on graduation day. As a YogaGarhi alumnus, you belong to our global spiritual sangha for life. We offer a revolutionary lifetime free re-attendance guarantee: you can return to re-attend future batches of your completed course at either our Rishikesh or Bali campus completely tuition-free anytime in the future. Whether you wish to brush up on sequencing, refresh your Sanskrit philosophy, or simply recharge your spirit in our ashram, our doors are always open to you."
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
              The YogaGarhi Difference
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              How our conscious teaching philosophy, strict cohort limits, Ayurvedic diagnostic methods, and Himalayan lineage stand distinctly apart from commercial training mills.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-card rounded-2xl p-6 sm:p-8 border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    idx === 0 || idx === 1 ? "md:col-span-1" : ""
                  } ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary text-foreground/80 text-[11px] font-bold tracking-wide">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>YogaGarhi Standard Guaranteed</span>
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
