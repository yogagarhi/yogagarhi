"use client";
import React from "react";
import { BookOpen, Brain, Activity, HeartHandshake, Compass, CheckCircle2, Clock, Sun, Moon, Sparkles } from "lucide-react";

export default function RishikeshCourseStudyGuide() {
  const modules = [
    {
      icon: Activity,
      title: "Module 1: Classical Asana Practice & Precision Alignment",
      subtitle: "Mastering Asana Mechanics from the Ground Up",
      description:
        "Our asana curriculum bridges classical Himalayan Hatha Yoga with dynamic Ashtanga Vinyasa flow. You will systematically deconstruct over 75 fundamental and intermediate postures, exploring the biomechanics of Surya Namaskar A and B, grounding standing series, hip opening progressions, core stabilizing arm balances, and therapeutic inversions. Rather than enforcing an arbitrary aesthetic shape, we teach you how to honor individual skeletal variations, use props intelligently, and guide students safely into optimal stability and ease (Sthira Sukham Asanam)."
    },
    {
      icon: Compass,
      title: "Module 2: Pranayama, Shatkriyas & Energetic Anatomy",
      subtitle: "The Science of Pranic Control & Subtle Channels",
      description:
        "Breath is the bridge between body and mind. You will practice and master classical yogic breathing techniques, including Nadi Shodhana (Alternate Nostril Breathing), Kapalabhati (Skull Shining Breath), Bhastrika (Bellows Breath), Ujjayi (Victorious Ocean Breath), and cooling Sheetali/Sheetkari. Learn the profound science of the energetic body: the 72,000 Nadis (Ida, Pingala, Sushumna), the 7 major Chakras, and the Five Vayus (Prana, Apana, Samana, Udana, Vyana). You will also learn traditional yogic purification kriyas (Jala Neti, Sutra Neti, Nauli) to clear the respiratory tract and heighten mental clarity."
    },
    {
      icon: Brain,
      title: "Module 3: Applied Anatomy & Functional Biomechanics",
      subtitle: "Western Science Meets Eastern Somatic Wisdom",
      description:
        "Taught by senior anatomy specialists, this module demystifies human biomechanics for yoga teachers. You will examine the musculoskeletal system, joint articulation types, connective fascial meridians, and spinal column mechanics. Understand how skeletal compression differs from soft-tissue tension, and discover why certain postures must be modified for different hip sockets and femur angles. We emphasize injury prevention, contraindications for hypertension and pregnancy, and the neuromuscular science of the parasympathetic nervous system."
    },
    {
      icon: BookOpen,
      title: "Module 4: Yogic Philosophy, Classical Texts & Lifestyle",
      subtitle: "Living the Wisdom of Patanjali & the Bhagavad Gita",
      description:
        "True yoga extends far beyond the physical mat. Immerse in the foundational classical scriptures of yoga, analyzing Patanjali's Yoga Sutras and the Eight Limbs of Ashtanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi). Explore the ethical tenets of non-violence (Ahimsa), truthfulness (Satya), and self-study (Svadhyaya) in modern context. Study the Bhagavad Gita's pathways of Karma Yoga (selfless action), Bhakti Yoga (devotion), and Jnana Yoga (wisdom), cultivating a resilient spiritual foundation for conscious daily living."
    },
    {
      icon: HeartHandshake,
      title: "Module 5: Teaching Methodology, Sequencing & Hands-On Adjustments",
      subtitle: "From Self-Practitioner to Confident, Inspiring Leader",
      description:
        "Transition seamlessly from personal practice into inspiring, authentic teaching. You will master the art of intelligent class sequencing—from gentle somatic warm-ups and progressive peak-pose progressions to grounding counter-postures and deep Savasana relaxation. Develop your unique teaching voice with confident verbal cueing, clear body language, and non-invasive hands-on adjustments. Beginning in your very first week, you will teach micro-sessions with peer feedback, graduating with the confidence to lead full 60-to-90-minute classes anywhere in the world."
    }
  ];

  const practicalComponents = [
    {
      title: "Morning Kriyas & Shatkarma Cleansing",
      time: "6:00 AM – 6:30 AM",
      description: "Awaken the respiratory pathways with Jala Neti, Kapalabhati, and mindful morning hydration with warm herbal infusions."
    },
    {
      title: "Pranayama & Silent Meditation Sadhana",
      time: "6:30 AM – 7:30 AM",
      description: "Harness the pristine Himalayan prana through classical breath regulation, bandhas, and silent sunrise meditation."
    },
    {
      title: "Dynamic Asana Alignment & Vinyasa Lab",
      time: "7:30 AM – 9:00 AM",
      description: "Intensive physical practice analyzing posture lines, muscular activation, skeletal modifications, and transitions."
    },
    {
      title: "Anatomy Clinic & Hands-On Correction Practicum",
      time: "3:00 PM – 4:30 PM",
      description: "Partner alignment clinics, touch ethics, verbal cueing practice, and anatomical adjustment methodologies."
    },
    {
      title: "Evening Chanting, Kirtan & Satsang",
      time: "6:00 PM – 7:00 PM",
      description: "Immersive traditional Sanskrit mantra singing, sound resonance, and philosophical inquiry with our resident acharyas."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="curriculum-overview" style={{ contentVisibility: "auto", containIntrinsicSize: "1400px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Rigor & Spiritual Depth</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Comprehensive Curriculum & Academic Modules
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Our Yoga Alliance registered curriculum systematically synthesizes traditional Himalayan sadhana with evidence-based biomechanics, philosophy, and professional teaching methodology.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Modules List */}
          <div className="space-y-6 mb-16">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 sm:p-8 border border-border/80 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                          {mod.title}
                        </h3>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 self-start">
                          Core Module
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {mod.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical Sadhana & Training Disciplines Section */}
          <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 border border-border/80 shadow-lg">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                Daily Immersive Disciplines
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Daily Ashram Sadhana & Practical Training Components
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Authentic yogic education requires experiential immersion. Every single training day is structured to cultivate internal silence, physical stamina, and refined sensory awareness. By stepping away from the demands of everyday modern life and immersing yourself into the disciplined rhythm of our Tapovan ashram, theory turns into embodied truth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalComponents.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Included in Daily Ashram Schedule</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
