import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Award,
  Users,
  DollarSign,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Plane,
  Sparkles,
  Music,
  Waves,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import SoundHealingCTAButtons from "./SoundHealingCTAButtons";
import SoundHealingFAQAccordion from "./SoundHealingFAQAccordion";

export default function SoundHealingCertificationRishikesh() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rishikesh, India</span>
            </span>
            <h1 className="font-heading font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
              Sound Healing Certification Course in Rishikesh
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8">
              Become a certified sound healer in the yoga capital of the world
            </p>
            <SoundHealingCTAButtons />
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border shadow-sm mb-12">
            <div className="text-center p-2">
              <Award className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Certificate</p>
              <p className="text-sm font-bold text-foreground">[CERTIFICATE NAME]</p>
            </div>
            <div className="text-center p-2">
              <Clock className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Duration</p>
              <p className="text-sm font-bold text-foreground">[DURATION]</p>
            </div>
            <div className="text-center p-2">
              <Calendar className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Next Dates</p>
              <p className="text-sm font-bold text-foreground">[DATES]</p>
            </div>
            <div className="text-center p-2">
              <DollarSign className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Investment</p>
              <p className="text-sm font-bold text-foreground">[PRICE]</p>
            </div>
            <div className="text-center p-2 col-span-2 sm:col-span-1">
              <Users className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Group Size</p>
              <p className="text-sm font-bold text-foreground">[GROUP SIZE]</p>
            </div>
          </div>

          {/* LCP Hero Image: Optimized Responsive Cloudinary Picture (w_640 on mobile, w_1024 on desktop) */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-border">
            <picture className="w-full h-full block">
              <source
                media="(max-width: 640px)"
                type="image/png"
                srcSet="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_640/yogagarhi/assets/workshop-sound-healing-update.png"
              />
              <source
                media="(min-width: 641px)"
                type="image/png"
                srcSet="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/workshop-sound-healing-update.png"
              />
              <img
                src="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_640/yogagarhi/assets/workshop-sound-healing-update.png"
                alt="Sound healing certification class with singing bowls in Rishikesh"
                width={1024}
                height={683}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS SOUND HEALING? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Music className="w-3.5 h-3.5" />
            <span>Sacred Vibration</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Is Sound Healing?
          </h2>
          <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 text-left sm:text-center">
            <p>
              Rooted in the tradition of nada yoga, sound healing uses steady tones and rhythm as a focus for relaxation and meditation. By experiencing harmonic sounds produced by traditional instruments ([CONFIRM INSTRUMENTS]), practitioners enjoy a peaceful auditory environment that supports rest, presence, and personal reflection.
            </p>
            <p>
              In our Rishikesh ashram, this practice connects authentic <strong className="text-foreground font-semibold">sound healing rishikesh</strong> with traditional <strong className="text-foreground font-semibold">nada yoga rishikesh</strong>—the yogic discipline of inner sound awareness and hands-on acoustic exploration.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOUR SOUND HEALING CERTIFICATION INCLUDES */}
      <section className="py-16 md:py-20 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Credential & Scope</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Your Sound Healing Certification Includes
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Comprehensive training credentials designed to establish your foundation as a certified sound practitioner.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm max-w-3xl mx-auto">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Official Credential:</strong> Awarded as [CERTIFICATE NAME] upon completion of all contact hours and assessments.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Curriculum & Hours:</strong> [CERTIFICATION DETAILS]
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Professional Scope:</strong> Prepares graduates for their <strong className="text-foreground">sound healing practitioner certification</strong>, enabling them to facilitate private 1-on-1 relaxation sessions and lead community sound meditation gatherings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IS THIS CERTIFICATION ACCREDITED? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparency First</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Is This Certification Accredited?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              An honest, objective look at accreditation within the global sound healing discipline.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <p>
              Prospective students seeking an <strong className="text-foreground font-semibold">accredited sound healing certification</strong> should understand that unlike licensed healthcare or medical professions, sound healing and vibrational wellbeing practices do not have a single centralized government regulatory agency anywhere in the world.
            </p>
            <p>
              Instead, certification credibility depends on educational depth: comprehensive in-person practice hours, practical student assessments, instructor experience, and adherence to established ethical standards for wellbeing practitioners.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border">
              <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                Our Institutional Affiliation & Recognition:
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                [ACCREDITATION DETAILS]
              </p>
            </div>
            <p>
              Whether your goal is a <strong className="text-foreground font-semibold">sound therapy certification</strong> for relaxation or a traditional ashram immersion, our training focuses on practical acoustic skill and responsible facilitation so graduates lead sessions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU'LL LEARN */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Waves className="w-3.5 h-3.5" />
              <span>Curriculum Modules</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Hands-on mastery of acoustic instruments, relaxation methodology, and group orchestration during your <strong className="text-foreground font-semibold">sound healing course in rishikesh</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Singing Bowls ([CONFIRM INSTRUMENTS])
              </h3>
              <p className="text-sm text-muted-foreground">
                Master striking techniques, rim play, tone layering, and multi-bowl harmonizing for your <strong className="text-foreground">singing bowl certification</strong> module.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Gongs ([CONFIRM INSTRUMENTS])
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn mallet techniques, suspended gong dynamics, wash strokes, and controlling acoustic volume to create a comfortable, gentle listening environment.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Tuning Forks ([CONFIRM INSTRUMENTS])
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore acoustic tuning fork techniques, vibrational resonance, and how acoustic tones complement guided relaxation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Voice, Mantra & Nada Yoga
              </h3>
              <p className="text-sm text-muted-foreground">
                Integrate gentle vocal toning, mindful mantra repetition, and classical nada yoga awareness into your sound meditation sessions.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-card border border-border text-center text-xs sm:text-sm text-muted-foreground">
            Detailed modular breakdown: [CONFIRM SYLLABUS]
          </div>
        </div>
      </section>

      {/* 6. SOUND BATH CERTIFICATION */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Group Facilitation</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sound Bath Certification
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Techniques and competencies for orchestrating immersive group sound journeys.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Leading a group sound journey requires specialized acoustic awareness, stage setup, and thoughtful facilitation. Our dedicated <strong className="text-foreground font-semibold">sound bath certification</strong> curriculum equips you to design smooth 45-to-90 minute multi-instrument sessions.
            </p>
            <p>
              Students learn session pacing, instrument placement for balanced stereo distribution, holding calm group space, gentle integration practices, and participant comfort considerations.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border text-xs sm:text-sm text-foreground">
              Scope of group certification: [CONFIRM GROUP SOUND BATH SCOPE]
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW TO BECOME A SOUND HEALER */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Pathway</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Become a Sound Healer
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A straightforward 4-step path to starting your practice as a certified sound healer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Master Instruments</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn fundamental acoustic qualities, tone layering, and live playing techniques on acoustic instruments ([CONFIRM INSTRUMENTS]).
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Supervised Practice</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Facilitate live practice sessions and group sound baths under instructor supervision with constructive guidance.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Get Certified</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Complete your practical assessment to earn your official <strong className="text-foreground">sound healer certification</strong> credential.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Launch Sessions</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Begin facilitating private relaxation sessions, studio sound baths, and community wellbeing workshops worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY LEARN SOUND HEALING IN RISHIKESH */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location Advantages</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Learn Sound Healing in Rishikesh
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              The incomparable value of immersive in-person study in the world capital of spiritual discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">In-Person Resonance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Short online video courses cannot transmit physical acoustic vibrations. In Rishikesh, you experience live acoustic resonance and learn tactile instrument technique in person.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Small Group Attention</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our limited student capacity guarantees individual instrument time, personalized acoustic corrections, and intimate mentoring throughout your <strong className="text-foreground">sound healing training rishikesh</strong>.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Sacred Ganga Setting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nestled in the Himalayan foothills of Tapovan along the holy River Ganga, Rishikesh provides a serene environment ideal for focused acoustic and meditative study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHO THIS COURSE IS FOR */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Audience</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who This Course Is For
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Designed for dedicated practitioners seeking to deepen their understanding of vibrational wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Aspiring Healers</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Beginners with a calling toward sound meditation and vibrational wellness who want structured, certified training.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Yoga Teachers</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Instructors seeking to integrate acoustic instruments ([CONFIRM INSTRUMENTS]) into savasana, lead dedicated sound baths, and offer distinct studio workshops.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Wellness Guides</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Meditation teachers, breathwork facilitators, and bodyworkers looking to incorporate acoustic tools into private relaxation sessions.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Personal Seekers</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Practitioners seeking personal rejuvenation, sound self-care protocols, and immersion in the Himalayas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. A DAY IN THE COURSE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Immersion Routine</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Day in the Course
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A balanced daily rhythm integrating theory, hands-on practice, and ashram life.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Daily schedule details: [SCHEDULE]
            </p>
          </div>
        </div>
      </section>

      {/* 11. YOUR TEACHERS */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Instruction</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Teachers
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Learn from experienced instructors dedicated to authentic vibrational instruction.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              Teacher profiles and credentials: [TEACHER NAMES / BIOS]
            </p>
          </div>
        </div>
      </section>

      {/* 12. ACCOMMODATION & FOOD IN RISHIKESH */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ashram Stay</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accommodation & Food in Rishikesh
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Clean residential rooms and wholesome sattvic nutrition in Tapovan.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              Accommodation and meal package details: [ACCOMMODATION DETAILS]
            </p>
          </div>
        </div>
      </section>

      {/* 13. FEES & WHAT'S INCLUDED */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Investment</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fees & What&apos;s Included
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8">
            Transparent pricing in USD with all core training materials included.
          </p>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm max-w-lg mx-auto mb-8">
            <p className="text-xs uppercase font-semibold text-muted-foreground mb-1">Tuition & Residential Package</p>
            <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">[PRICE]</p>
            <div className="text-left text-sm text-muted-foreground space-y-2 mb-6">
              <p>[INCLUSIONS]</p>
            </div>
            <SoundHealingCTAButtons
              className="w-full flex flex-col gap-3"
              enquiryText="Enroll Now"
              bookingText="Book a Call"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* 14. UPCOMING DATES */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Dates
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8">
            Plan your training dates in Rishikesh with small, personalized cohorts.
          </p>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <p className="text-sm sm:text-base text-muted-foreground">
              Confirmed upcoming batch schedule: [DATES]
            </p>
          </div>
        </div>
      </section>

      {/* 15. TRAVELING TO RISHIKESH FROM THE US */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>US Student Guide</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traveling to Rishikesh from the US
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Straightforward logistics for international students traveling from North America.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Plane className="w-4 h-4 text-primary" />
                Flights & Transit
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Book a flight from the US to New Delhi (DEL). From Delhi, take a quick 45-minute domestic flight to Dehradun (DED), located approximately 35 minutes by taxi from our Tapovan campus.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                Indian e-Visa
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                US passport holders must obtain an official Indian e-Visa prior to departure. Always apply through the official Government of India portal:
              </p>
              <a
                href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <span>indianvisaonline.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Best Time to Visit
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most pleasant seasons are October to November (clear post-monsoon Himalayan skies) and February to April (delightful spring weather ideal for sound immersion).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 16. STUDENT REVIEWS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Graduate Feedback</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Reviews
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8">
            Direct feedback from students who have participated in our sound healing sessions.
          </p>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <p className="text-sm sm:text-base text-muted-foreground">
              [SOUND HEALING REVIEWS]
            </p>
          </div>
        </div>
      </section>

      {/* 17. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Clear answers to help you plan your sound healing education.
            </p>
          </div>

          <SoundHealingFAQAccordion />
        </div>
      </section>

      {/* 18. FINAL CTA */}
      <section className="py-16 md:py-20 bg-background text-center border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your Training</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Begin Your Sound Healing Journey in Rishikesh
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Take the first step toward becoming a qualified sound practitioner along the sacred banks of the Ganga.
          </p>
          <SoundHealingCTAButtons />
        </div>
      </section>
    </div>
  );
}
