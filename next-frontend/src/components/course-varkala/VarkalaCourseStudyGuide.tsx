"use client";
import React from "react";
import { BookOpen, Brain, Activity, HeartHandshake, Compass, CheckCircle2, Clock, Leaf, Waves, Sun, Sparkles } from "lucide-react";

export default function VarkalaCourseStudyGuide() {
  const modules = [
    {
      icon: Activity,
      title: "Module 1: Classical Hatha & Dynamic Ashtanga Asana Lab",
      subtitle: "Biomechanical Foundations, Alignment & Modifications",
      description:
        "Master the foundational standing, seated, twisting, backbending, and inverted postures. Explore classical Hatha alignments and the complete Ashtanga Primary Series with dynamic breath cues, drishti focus, and intelligent prop integrations for safe joint longevity."
    },
    {
      icon: Compass,
      title: "Module 2: Pranayama, Shatkriyas & Respiratory Mastery",
      subtitle: "Harnessing Prana with Coastal Ocean Air",
      description:
        "Master traditional cleansing shatkriyas (Jala Neti, Kapalbhati, Agnisara) and classical breathwork (Nadi Shodhana with ratios, Bhastrika, Surya/Chandra Bhedi, and cooling Sitali). Learn how marine air rich in negative ions enhances oxygen uptake and soothes the nervous system."
    },
    {
      icon: Brain,
      title: "Module 3: Functional Anatomy & Joint Biomechanics",
      subtitle: "Anatomy of Movement, Spine Health & Injury Prevention",
      description:
        "Study skeletal variations, fascial planes, pelvic stability, spinal decompression, and shoulder girdle dynamics. Understand compression versus tension, preventing hamstring/knee strains, and tailoring postures to diverse student body types."
    },
    {
      icon: BookOpen,
      title: "Module 4: Yoga Philosophy & Patanjali's Yoga Sutras",
      subtitle: "Living the Eight Limbs & Ancient Vedic Wisdom",
      description:
        "Immerse in the timeless philosophy of Patanjali's Yoga Sutras, exploring Yamas, Niyamas, and the journey toward Samadhi. Contrast the Bhagavad Gita's four yogic paths (Karma, Jnana, Bhakti, Raja) and learn to embody spiritual ethics in modern daily life."
    },
    {
      icon: HeartHandshake,
      title: "Module 5: Teaching Methodology & Confident Sequencing",
      subtitle: "Voice Modulation, Class Structuring & Room Management",
      description:
        "Learn to construct intelligent 60-to-90-minute class arcs with thematic peak-pose progressions and grounding counter-postures. Practice verbal cueing, pacing, non-intrusive assists, and trauma-informed adjustments through daily peer-teaching clinics from Week 2."
    },
    {
      icon: Sparkles,
      title: "Module 6: Meditation, Mantra & Sound Resonance",
      subtitle: "Cultivating Inner Stillness (Dharana & Dhyana)",
      description:
        "Practice Japa mala chanting, Vedic mantra recitation, Trataka candle gazing, and breath-focused mindfulness. Experience deep restorative Yoga Nidra (conscious psychic sleep) and sound immersion tuned to the soothing natural frequency of ocean waves."
    },
    {
      icon: Compass,
      title: "Module 7: Mudras, Bandhas & Energetic Anatomy",
      subtitle: "The Subtle Body, Nadis & Chakra Awakening",
      description:
        "Explore the 72,000 Nadis (Ida, Pingala, Sushumna), 7 Major Chakras, 5 Koshas (sheaths of being), and 5 Prana Vayus. Master the three great locks (Mula, Uddiyana, Jalandhara Bandha) and Hasta Mudras to seal and direct subtle vital energy."
    },
    {
      icon: HeartHandshake,
      title: "Module 8: Hands-On Adjustments & Body Reading",
      subtitle: "Anatomical Touch, Ethics & Assistive Labs",
      description:
        "Develop the tactile sensitivity and biomechanical understanding required for safe, transformative physical assists. Learn to read students' structural habits, recognize compensation patterns, and offer respectful modifications with clear consent."
    },
    {
      icon: BookOpen,
      title: "Module 9: Yoga Business, Ethics & Digital Marketing",
      subtitle: "Building a Sustainable Global Yoga Career",
      description:
        "Understand Yoga Alliance accreditation guidelines, insurance, studio teaching, and private client management. Learn authentic digital branding, workshop architecture, retreat organizing, and how to cultivate a dedicated, supportive student community."
    },
    {
      icon: Activity,
      title: "Module 10: Teaching Practicum & Master Mentorship",
      subtitle: "Live Evaluated Classes with Senior Faculty",
      description:
        "Lead complete yoga classes independently under the observation of our senior E-RYT 500 mentors. Receive rigorous, constructive feedback on sequencing logic, posture adjustments, presence, and cueing to graduate with total classroom confidence."
    },
    {
      icon: Leaf,
      title: "Module 11: Ayurveda & Panchakarma Basics (Kerala Special)",
      subtitle: "Constitutional Healing in the Cradle of Ayurveda",
      description:
        "Discover the science of Tridoshas (Vata, Pitta, Kapha), personal Prakriti evaluation, Dinacharya daily rhythms, and Sattvic nutritional therapy. Explore traditional Kerala Panchakarma therapies, herbal pharmacology, and adapting yoga sequences to doshic imbalances."
    },
    {
      icon: Waves,
      title: "Module 12: Beach & Sunset Yoga Practice",
      subtitle: "Grounding Nature Immersion & Tidal Flow",
      description:
        "Experience grounding barefoot practice along the sands of sacred Papanasam Beach, strengthening foot arches and stability. Practice sunset Yin Yoga and open-horizon gazing (Drishti) on Varkala Cliff decks, harmonizing body and mind with tidal rhythms."
    }
  ];

  const practicalComponents = [
    {
      title: "Morning Kriyas & Coastal Cleansing",
      time: "6:00 AM – 6:30 AM",
      description: "Awaken respiratory pathways with Jala Neti, Kapalbhati, and warm herbal tea overlooking the Arabian Sea."
    },
    {
      title: "Pranayama & Ocean Sunrise Meditation",
      time: "6:30 AM – 7:30 AM",
      description: "Absorb vital marine prana and negative ions through classical breath regulation, bandhas, and silent meditation."
    },
    {
      title: "Dynamic Asana Alignment & Flow",
      time: "7:30 AM – 9:00 AM",
      description: "Intensive physical asana practice analyzing posture mechanics, anatomical alignment, transitions, and modifications."
    },
    {
      title: "Kerala Ayurveda & Anatomy Clinic",
      time: "3:00 PM – 4:30 PM",
      description: "Hands-on alignment clinics, partner adjustments, touch ethics, and constitutional Ayurvedic dosha analysis."
    },
    {
      title: "Sunset Beach Yoga & Sound Healing",
      time: "5:30 PM – 6:45 PM",
      description: "Restorative Yin yoga and sound meditation on the cliffside deck as the golden sun sets into the Arabian Sea."
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
              <span>Academic Rigor & Coastal Healing</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Comprehensive Curriculum & Academic Modules
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Our Yoga Alliance registered curriculum systematically synthesizes traditional yogic sadhana with Kerala Ayurveda, biomechanics, beach practice, and professional teaching methodology.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Modules List (12 Modules) */}
          <div className="space-y-6 mb-16">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              const isSpecial = idx >= 10;
              return (
                <div
                  key={idx}
                  className={`bg-card rounded-2xl p-6 sm:p-8 border ${isSpecial ? 'border-primary/50 shadow-md ring-1 ring-primary/20' : 'border-border/80 shadow-md'} hover:shadow-lg transition-all`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                          {mod.title}
                        </h3>
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start ${isSpecial ? 'bg-primary text-primary-foreground' : 'text-primary bg-primary/10'}`}>
                          {isSpecial ? 'Kerala Specialty' : 'Core Module'}
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
                Daily Coastal Ashram Sadhana & Practical Training Components
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Authentic yogic education requires experiential immersion. Every single training day in Varkala is structured to cultivate internal silence, physical stamina, and refined sensory awareness amidst the calming sound of ocean waves.
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
