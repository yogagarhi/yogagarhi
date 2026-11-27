"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Volume2,
  ShieldAlert,
  ArrowRight,
  Heart,
  BookOpen,
  Award,
  Users,
  Compass,
  Utensils,
  Bed,
  Check,
  X,
  MessageCircle,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { BATCHES_SOUND_HEALING_RISHIKESH, CourseBatch } from "@/constants/courseDates";
import { useEnrollment } from "@/components/EnrollmentDialog";

// Reused Cloudinary assets
const heroImage = getCloudinaryImage("activity-sound-healing.jpg");
const bowlDetailImage = getCloudinaryImage("workshop-sound-healing-update.png");
const himalayanLineage = getCloudinaryImage("himalayan-lineage.jpg");
const doubleBedroom1 = getCloudinaryImage("double-bedroom-1.png");
const privateBedroom1 = getCloudinaryImage("private-bedroom-1.png");
const sattvicBreakfast = getCloudinaryImage("sattvic-breakfast-new.jpg");
const sattvicDinner = getCloudinaryImage("sattvic-dinner-new.jpg");

export default function SoundHealingCourseRishikesh() {
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Reviews placeholder state (hidden while empty per Honesty Rules)
  const reviews: Array<{ author: string; text: string; location: string }> = [
    // [[TODO: Real student reviews and testimonials will be populated here]]
  ];

  const handleEnrollClick = (batchDate?: string) => {
    openEnrollDialog(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Namaste! I am interested in the 7-day Sound Healing Course in Rishikesh. Could you please share more details regarding upcoming batches and registration?"
    );
    window.open(`https://wa.me/919319018444?text=${message}`, "_blank");
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Do I need prior musical or yoga experience to join?",
      a: "No musical background, formal instrument training, or previous yoga experience is required. Our 7-day sound healing course in Rishikesh is designed progressively from the foundational acoustics of Himalayan singing bowls up to advanced clinical protocols. Sincere curiosity, active listening, and an open heart are all you need to begin.",
    },
    {
      q: "Will I get a sound healing certification upon completion?",
      a: "Yes. Upon completing the 50 hours of intensive lectures, hands-on lab practice, and final practicum sessions, you receive a [[CONFIRM_YA_STATUS]] Level 1–3 Sound Healing Practitioner Certificate from YogaGarhi Ashram in Rishikesh, qualifying you to lead both 1-on-1 therapeutic sessions and group sound journeys.",
    },
    {
      q: "Can I work professionally as a sound healer after this course?",
      a: "Yes. Level 3 of the curriculum specifically trains you in client intake, ethical space-holding, acoustic safety, session sequencing, and professional integration. Graduates incorporate sound healing into yoga studios, wellness clinics, retreats, private holistic practices, and corporate mindfulness offerings worldwide.",
    },
    {
      q: "Do I need to buy and bring my own singing bowls?",
      a: "No. All professional handcrafted 7-metal Tibetan and Himalayan singing bowls, crystal singing bowls, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]], tingshas, and specialized mallets are provided for your daily practice during the training. You will learn how to evaluate frequencies, note harmonics, and strike quality so that you can make informed choices should you wish to curate your own set after graduation.",
    },
    {
      q: "What is the difference between Level 1, Level 2, and Level 3?",
      a: "Level 1 focuses on the fundamentals of sound physics, self-practice, bowl selection, and holding techniques. Level 2 advances into subtle body anatomy, chakra harmonic mapping, on-body vibrational therapy, and pairing Vedic mantras with sound frequencies. Level 3 covers professional multi-instrument orchestration, full-length 60-to-90 minute sound bath design, client consultation protocols, and safety ethics.",
    },
    {
      q: "What is included in the course fee?",
      a: "The fee (€590 for double sharing, €750 for private room) covers 6 nights of ashram accommodation, 3 freshly cooked sattvic vegetarian and vegan Ayurvedic meals daily, all course manuals and workbooks, full access to training instruments during classes, your Level 1–3 certificate, and sacred excursions around the holy Ganges River in Rishikesh.",
    },
    {
      q: "What is the best time of year to visit Rishikesh for sound healing training?",
      a: "Rishikesh offers a sacred atmosphere year-round. October through March provides crisp, sunny days and cool Himalayan evenings ideal for deep contemplative study. April through June brings warm energetic sunlight and vibrant river life, while the July to September monsoon season fills the valley with lush green hills, roaring waterfalls, and serene introspective rainfall.",
    },
    {
      q: "How do I reach the ashram in Rishikesh?",
      a: "The closest airport is Dehradun Jolly Grant Airport (DED), located approximately 35 minutes by taxi from our ashram. Alternatively, you can take a direct train from New Delhi Railway Station to Haridwar Junction (45 minutes from Rishikesh) or travel by direct private vehicle. Ashram airport and station pick-ups can be arranged upon request.",
    },
    {
      q: "Can I combine this sound healing course with the 200 hour yoga teacher training?",
      a: "Yes! All specialty courses at YogaGarhi are intentionally scheduled to start 2 days after our 200-hour residential teacher training finishes. This allows dedicated students to stack their foundational 200-hour training with specialized sound healing certification without needing separate travel arrangements.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Sound Healing Course in Rishikesh - Himalayan Singing Bowls Training at YogaGarhi Ashram"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>50-Hour Residential Certification • Level 1–3</span>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-6">
            Sound Healing Course in Rishikesh
          </h1>

          {/* 1-Line Promise & First 100 Words Intro */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            Immerse yourself in authentic Himalayan singing bowl therapy, chakra resonance, and nada yoga roots on the banks of the sacred Ganges River. Master professional Level 1–3 sound healing certification from €590 in Rishikesh, India.
          </p>

          <p className="text-xs sm:text-sm text-foreground/80 max-w-2xl mx-auto mb-8 bg-card/60 backdrop-blur-sm border border-border/40 py-2.5 px-4 rounded-xl">
            <span className="font-semibold text-primary">Next 2027 Cohort:</span> March 24 – March 30, 2027 • Double Sharing: <span className="font-bold text-foreground">€590</span> | Private Room: <span className="font-bold text-foreground">€750</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Apply for Sound Healing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card border-2 border-border hover:border-primary/40 text-foreground font-semibold hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSE AT A GLANCE */}
      <section className="py-12 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Duration & Hours</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">7 Days / 6 Nights</div>
              <div className="text-xs text-muted-foreground">50 Intensive Hours</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Certification</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">Level 1–3 Certified</div>
              <div className="text-xs text-muted-foreground">[[CONFIRM_YA_STATUS]]</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">Rishikesh, India</div>
              <div className="text-xs text-muted-foreground">YogaGarhi Himalayan Ashram</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Batch Size & Food</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">[[TODO: Group Size]]</div>
              <div className="text-xs text-muted-foreground">3 Sattvic Meals Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS SOUND HEALING */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Ancient Science of Resonance</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Sound Healing?
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Sound healing is the mindful application of acoustic sound waves, harmonic overtones, and therapeutic vibrational frequencies to facilitate holistic relaxation, mental stillness, and energetic alignment. Rooted in the ancient Vedic discipline of <em>Nada Yoga</em> (the yoga of sacred sound), this modality recognizes that every cell, tissue, and energy pathway in the human body vibrates at specific frequencies.
            </p>
            <p>
              When physical fatigue, emotional turbulence, or chronic stress dysregulates the body’s natural rhythm, harmonious frequencies from hand-hammered 7-metal Tibetan and Himalayan singing bowls, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]], and crystal vessels offer acoustic entrainment. The soothing resonance guides brainwave states from hyper-vigilant beta into deeply restorative alpha and theta patterns, supporting the body’s innate parasympathetic restoration.
            </p>
            <p>
              In our <strong>sound healing course in Rishikesh</strong>, we honor both the mystical heritage of traditional Vedic sound and modern psychoacoustic understanding. We approach sound therapy as a non-invasive complementary wellness discipline that may support stress relief, emotional catharsis, enhanced meditative focus, and balanced vital prana without making unsubstantiated curative claims.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY LEARN IN RISHIKESH (EXACT H2) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sacred Setting</span>
            {/* Required exact H2 */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sound Healing Certification in Rishikesh
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  01
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">The Cradle of Nada Yoga</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For thousands of years, Himalayan masters and rishis gathered along the Ganges to explore primordial sound (Om) and sacred chanting. Studying sound healing in Rishikesh connects you directly to the living spiritual roots of this lineage.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  02
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Pristine River & Mountain Acoustics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The natural frequency of fast-flowing river water combined with the sheltered tranquility of the Himalayan foothills creates an environment virtually free from metropolitan acoustic dissonance, heightening your sensory perception.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  03
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Authentic Artisan Craftsmanship</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Northern India remains a global epicenter for traditional hand-forged bronze singing bowls crafted according to planetary alignments and harmonic proportions. You train on genuine master-grade instruments under seasoned guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM BY LEVEL (50 HOURS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Complete 3-Tier Syllabus</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Comprehensive 50-Hour Curriculum by Level
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Progressive mastery covering theory, tactile bowl handling, acoustic physics, on-body vibrational therapy, and clinical 1-on-1 space holding.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-8">
            {/* Level 1 */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                    Level 1 • 15 Hours
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-2">
                    Foundations of Himalayan Sound & Singing Bowls
                  </h3>
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Self-Practice & Instrument Mastery
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>History and metallurgical alchemy of 7-metal bronze and crystal singing bowls</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>How to select and test bowls by primary tone, fundamental pitch, and sustained overtones</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Proper ergonomic holding methods, mallet pressures, striking angles, and circular rimming</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Daily self-healing protocol: auric cleansing, morning sound sadhana, and grounding</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Science of binaural acoustic beats, cymatics, and parasympathetic nervous system response</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Clearing negative environmental energy in personal meditation spaces</span>
                </li>
              </ul>
            </div>

            {/* Level 2 */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase">
                    Level 2 • 18 Hours
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-2">
                    Chakra Resonance, On-Body Therapy & Mantras
                  </h3>
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Vibrational Protocols & Bodywork
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Anatomy of the 7 main energy centers (Chakras), nadis (Ida, Pingala, Sushumna) & koshas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Precise placement of vibrating bowls directly onto physical meridian points and joints</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Safety guidelines for on-body vibrational application, sound dampening, and bone conduction</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Integrating sacred Vedic Bīja mantras (Lam, Vam, Ram, Yam, Ham, Om) with bowl frequencies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Warm water bowl immersion and therapeutic sound massage techniques for muscle relaxation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Energy body scanning: identifying energetic blockages, disharmonies, and auric leaks</span>
                </li>
              </ul>
            </div>

            {/* Level 3 */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                    Level 3 • 17 Hours
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-2">
                    Professional Session Design, Group Sound Baths & Ethics
                  </h3>
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Clinical Practice & Master Space Holding
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Designing full 60-to-90 minute immersive group sound bath journeys with layered instrumentation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Conducting professional 1-on-1 client intakes, client consent documentation, and post-session grounding</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Harmonizing multi-instrument setups: Tibetan singing bowls, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]], tingshas, rainsticks, and ocean drums</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Trauma-informed facilitation: holding safe boundaries during emotional releases and abreactions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Professional code of ethics, client confidentiality, scope of practice, and practitioner self-care</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Live supervised practicum: facilitate a complete sound healing session with peer & master feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE DAILY SCHEDULE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ashram Daily Rhythm</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sample Daily Schedule
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              A balanced daily cadence balancing lecture, tactile instrument practice, nourishing sattvic food, and silence.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="divide-y divide-border">
              {[
                { time: "06:30 AM – 07:45 AM", title: "Morning Pranayama & Silent Sound Meditation", desc: "Awakening breathwork, inner silence, and Bīja mantra chanting" },
                { time: "08:00 AM – 09:00 AM", title: "Nourishing Ayurvedic Breakfast", desc: "Wholesome sattvic porridge, fresh fruits, herbal teas, and seasonal dishes" },
                { time: "09:30 AM – 12:30 PM", title: "Theory & Principles of Vibrational Acoustics", desc: "Chakra anatomy, acoustic science, frequency analysis, and bowl techniques" },
                { time: "01:00 PM – 02:30 PM", title: "Sattvic Lunch & Mindful Rest", desc: "Wholesome vegetarian meal followed by quiet contemplation or river walk" },
                { time: "03:00 PM – 05:30 PM", title: "Hands-on Sound Lab & Partner Practice", desc: "Supervised on-body bowl placement, striking drills, and 1-on-1 protocols" },
                { time: "06:00 PM – 07:15 PM", title: "Evening Group Sound Bath & Kirtan", desc: "Restorative sound immersion, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]] immersion, and collective sound integration" },
                { time: "07:30 PM – 08:30 PM", title: "Ayurvedic Dinner", desc: "Light, easily digestible sattvic dinner cooked fresh in the ashram kitchen" },
                { time: "08:30 PM – 10:00 PM", title: "Journaling, Self-Reflection & Lights Out", desc: "Quiet study, peaceful sleep, and auditory recovery" },
              ].map((slot, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-secondary/40 transition-colors">
                  <div className="w-48 flex-shrink-0 font-mono text-xs sm:text-sm font-semibold text-primary">
                    {slot.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-bold text-sm sm:text-base text-foreground">{slot.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{slot.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO THIS COURSE IS FOR & PREREQUISITES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Open to Sincere Seekers</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-6">
                Who Is This Course For?
              </h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Yoga Teachers & Fitness Professionals:</strong> Add restorative sound bath journeys and chakra chanting to your existing classes and retreats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Therapists & Healers:</strong> Integrate gentle vibrational frequencies into Reiki, psychotherapy, bodywork, or wellness consulting practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Meditators & Beginners:</strong> Deepen your personal self-healing and learn to cultivate deep mental stillness through sacred acoustic instruments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Aspiring Sound Facilitators:</strong> Launch a dedicated independent practice offering group sound sessions and individual therapeutic appointments.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Prerequisites & Preparation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                There are <strong>no formal academic, musical, or physical prerequisites</strong> to attend this course. You do not need to be able to read sheet music, play an instrument, or perform advanced yoga postures.
              </p>
              <div className="p-4 rounded-xl bg-card border border-border/80 text-xs text-muted-foreground space-y-2">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>What to Bring:</span>
                </div>
                <p>Comfortable loose natural cotton clothing, a notebook and pen, a reusable water bottle, and an open, receptive mindset ready for deep auditory exploration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SAFETY & CONTRAINDICATIONS */}
      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10 border-y border-amber-200/50 dark:border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex-shrink-0 mt-1">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Safety Guidelines & Medical Contraindications
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                While ambient sound baths are gentle and safe for the vast majority of individuals, therapeutic vibrational acoustic work (particularly direct on-body bowl placement) involves mechanical vibrational frequencies. Please consult a qualified medical professional prior to enrolling if you have:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Cardiac pacemaker or internal electronic defibrillator</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Metallic implants, artificial joints, or surgical pins (for direct on-body work)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Sound-induced epilepsy or acute neurological conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>First trimester of pregnancy (ambient listening permitted with caution)</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Severe active psychiatric conditions, clinical psychosis, or deep unmanaged acute trauma</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                Our instructors adapt all hands-on exercises to ensure a completely safe, comfortable, and supportive learning environment for every enrolled student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DATES & FEES TABLE */}
      <section id="dates-and-fees" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Schedule & Investment</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Upcoming Rishikesh Batches (2027)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Each 7-day sound healing course begins 2 days after our 200-hour TTC concludes, allowing effortless course stacking.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-4 px-6 font-semibold">Cohort Dates</th>
                  <th className="py-4 px-6 font-semibold">Double Sharing</th>
                  <th className="py-4 px-6 font-semibold">Private Room</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 text-right font-semibold">Enroll</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {BATCHES_SOUND_HEALING_RISHIKESH.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{batch.date}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €590 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €750 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {batch.spotsText || "Booking Open"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleEnrollClick(batch.startDate)}
                        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-sm"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. INCLUDED / NOT INCLUDED */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Transparent Investment</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Included in Your Course Fee
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Check className="w-6 h-6" />
                <span>What Is Included</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>6 nights residential accommodation at YogaGarhi Ashram</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>3 freshly prepared sattvic Ayurvedic vegetarian/vegan meals daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Complete access to practice singing bowls, [[CONFIRM_INSTRUMENTS: gongs / tuning forks]], and instruments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Comprehensive 50-hour printed study manual and course materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Level 1–3 Sound Healing Practitioner Certificate upon graduation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Sacred Ganga Aarti ceremony and Himalayan temple excursion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Complimentary sound meditation wellness kit and mala beads</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <X className="w-6 h-6" />
                <span>What Is Not Included</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Domestic or international flight tickets to India / Dehradun</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Indian Visa fees and government travel documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Airport transfer from Dehradun (available upon request for ~€20)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Personal travel and medical insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Personal singing bowl purchase (all bowls are provided during class; buying personal bowls is strictly optional)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ACCOMMODATION & FOOD */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ashram Living in Rishikesh</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Comfortable Stay & Pure Sattvic Nutrition
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={doubleBedroom1}
                  alt="Double Sharing Room at YogaGarhi Ashram Rishikesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Double Sharing Room (€590)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Spacious twin bedroom with two single beds, attached modern Western bathroom, 24/7 solar hot water, fresh linens, study desk, high-speed Wi-Fi, and a mountain-view balcony. Shared with a fellow student of the same gender.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={privateBedroom1}
                  alt="Private Room at YogaGarhi Ashram Rishikesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Private Deluxe Room (€750)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your personal sanctuary for deep contemplative rest. Features a queen-sized bed, private attached bathroom, continuous hot water, private balcony overlooking the Tapovan greenery, work desk, and quiet privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col md:flex-row gap-8 items-center">
            <div className="relative h-48 w-full md:w-1/3 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={sattvicBreakfast}
                alt="Sattvic Ayurvedic Nutrition in Rishikesh"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Nourishing Ayurvedic Meals (3 Times Daily)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clean food supports subtle auditory sensitivity. All meals are prepared fresh in our ashram kitchen following seasonal Ayurvedic guidelines. Rich in organic vegetables, lentils, seasonal fruits, grains, and detoxifying herbal infusions. Vegan and gluten-free dietary needs are gladly accommodated with advanced notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TEACHERS PLACEHOLDER */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Master Guidance</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">
            Our Sound Healing Masters
          </h2>
          <div className="w-16 h-1 bg-primary/40 mx-auto mb-8 rounded-full" />
          <div className="p-8 rounded-2xl bg-card border border-dashed border-border/80 text-muted-foreground text-sm max-w-xl mx-auto">
            <p className="font-medium text-foreground">[[TODO: Real teacher names, photos, and verified lineage bios]]</p>
            <p className="text-xs mt-2 text-muted-foreground">
              Our faculty features traditional Himalayan Nada Yoga masters and certified psychoacoustic sound practitioners with decades of combined teaching experience in Rishikesh.
            </p>
          </div>
        </div>
      </section>

      {/* 13. REVIEWS PLACEHOLDER (Hidden while empty per Honesty Rules) */}
      {reviews.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              Student Experiences
            </h2>
            {/* [[TODO: Render authentic student reviews once collected]] */}
          </div>
        </section>
      )}

      {/* 14. FAQ ACCORDION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. DISCLAIMER & FINAL CTA */}
      <section className="py-20 bg-gradient-to-t from-primary/10 via-background to-background border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          {/* Medical Disclaimer */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 text-xs text-muted-foreground leading-relaxed mb-12 text-left max-w-3xl mx-auto shadow-sm">
            <strong className="text-foreground block mb-1">Wellness & Educational Disclaimer:</strong>
            The sound healing courses, singing bowl demonstrations, and vibrational modalities taught at YogaGarhi Ashram in Rishikesh are designed solely for educational, cultural, and holistic personal wellness enrichment. Sound therapy is a complementary practice and does not diagnose, treat, prevent, or cure any medical or psychological condition, nor is it a substitute for certified medical care or clinical psychological therapy. Participants are advised to consult their healthcare provider regarding specific health concerns.
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Begin Your Sound Healing Journey in Rishikesh
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Learn the transformative art of Himalayan sound therapy from €590 with all-inclusive ashram living, master guidance, and Level 1–3 certification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Enroll in Sound Healing Course</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card border-2 border-border hover:border-primary/40 text-foreground font-semibold hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Internal Links for SEO */}
          <div className="border-t border-border/60 pt-8 text-xs text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground uppercase tracking-wider">Explore Other Programs at YogaGarhi Rishikesh:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/100-hour-yoga-teacher-training-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                100 Hour Yoga TTC in Rishikesh
              </Link>
              <Link href="/200-hour-yoga-teacher-training-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                200 Hour Yoga Teacher Training in Rishikesh
              </Link>
              <Link href="/200-hour-kundalini-yoga-teacher-training-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                200 Hour Kundalini Yoga TTC in Rishikesh
              </Link>
              <Link href="/85-hour-prenatal-yoga-teacher-training-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                85 Hour Prenatal Yoga TTC in Rishikesh
              </Link>
              <Link href="/apply-now" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                Apply Online Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
