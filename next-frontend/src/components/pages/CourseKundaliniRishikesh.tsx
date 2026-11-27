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
  Flame,
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
  Activity,
  Zap,
} from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { BATCHES_KUNDALINI_RISHIKESH, CourseBatch } from "@/constants/courseDates";
import { useEnrollment } from "@/components/EnrollmentDialog";

// Reused Cloudinary assets
const heroImage = getCloudinaryImage("himalayan-lineage.jpg");
const kriyaPractice = getCloudinaryImage("meditation-mantra.jpg");
const pranayamaImage = getCloudinaryImage("living-philosophy.jpg");
const doubleBedroom1 = getCloudinaryImage("double-bedroom-1.png");
const privateBedroom1 = getCloudinaryImage("private-bedroom-1.png");
const sattvicBreakfast = getCloudinaryImage("sattvic-breakfast-new.jpg");

export default function CourseKundaliniRishikesh() {
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
      "Namaste! I am interested in the 200 Hour Kundalini Yoga Teacher Training in Rishikesh. Could you please share more information on upcoming batches and enrollment?"
    );
    window.open(`https://wa.me/919319018444?text=${message}`, "_blank");
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Is Kundalini yoga safe for beginners?",
      a: "Yes, when taught through classical Tantric and Hatha foundations under experienced guidance. Unlike sensationalized modern portrayals, classical Kundalini training at YogaGarhi begins with physical alignment, gentle nervous system strengthening, and balanced breath control. You will learn to awaken prana gradually, safely, and with deep grounding.",
    },
    {
      q: "Do I need prior experience with Kundalini yoga?",
      a: "No prior Kundalini practice is necessary. Having a regular self-practice in any style of yoga (such as Hatha, Vinyasa, or Ashtanga) or meditation for at least 3 to 6 months is recommended, as it prepares the physical body for sustained sitting, breathwork, and kriyas.",
    },
    {
      q: "Can I teach after completing this course?",
      a: "Yes. This 200-hour comprehensive training equips you with in-depth knowledge of Kundalini kriya sequencing, hands-on adjustments, vocal cues, pranayama pacing, meditation instruction, and student safety. You will graduate with the pedagogical confidence to lead classes, workshops, and retreats worldwide.",
    },
    {
      q: "Kundalini vs Hatha — what is the difference?",
      a: "Classical Hatha Yoga focuses on purifying the physical body, stabilizing postures (asanas), and balancing solar (Ha) and lunar (Tha) energies. Kundalini Yoga builds upon Hatha foundations by utilizing dynamic repetitive movement sets (kriyas), intense focused pranayama, internal energy locks (bandhas), and sacred sound currents (mantras) to stimulate the dormant spiritual energy within the Sushumna nadi.",
    },
    {
      q: "What is the daily ashram schedule like?",
      a: "Training days begin at 6:00 AM with morning tea and cleansing kriyas, followed by pranayama, bandhas, and dynamic Kundalini asana practice. Midday is devoted to philosophy, subtle anatomy (nadis, chakras, koshas), and teaching methodology. Late afternoons feature specialized meditation, yoga nidra, and student practicum, concluding with evening chanting, dinner, and quiet reflection by 9:00 PM.",
    },
    {
      q: "What is included in the fee?",
      a: "The all-inclusive fee (€1350 for double sharing, €1750 for private deluxe room) includes 21 nights of residential ashram accommodation, 3 freshly prepared sattvic Ayurvedic meals daily, comprehensive 200-hour training manuals, practical teaching materials, all excursion activities around sacred Rishikesh, and your certification upon successful graduation.",
    },
    {
      q: "What is the best time of year to come to Rishikesh for Kundalini training?",
      a: "Rishikesh is blessed with a vibrant spiritual climate all year round. October through March offers pleasant daytime temperatures and cool mountain evenings. April to June brings warm sunshine and active river flow, while July through September offers lush green Himalayan landscapes, sacred monsoon rains, and an introspective ashram atmosphere.",
    },
    {
      q: "How do I reach Rishikesh and the ashram?",
      a: "You can fly into Dehradun Jolly Grant Airport (DED), which is approximately 35 minutes by car from our ashram in Tapovan. You can also take a high-speed train from New Delhi to Haridwar Junction (45 minutes away) or hire a direct private taxi from Indira Gandhi International Airport in Delhi. Ashram airport pickups are gladly arranged upon request.",
    },
    {
      q: "Can I combine this course with sound healing or prenatal training?",
      a: "Yes. All specialty programs at YogaGarhi are intentionally scheduled to start 2 days after our residential trainings finish. You can easily stack your 200-hour Kundalini training with our 7-day sound healing course or 85-hour prenatal certification without extra travel overhead.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="200 Hour Kundalini Yoga Teacher Training in Rishikesh - YogaGarhi Ashram"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-sm">
            <Flame className="w-4 h-4 text-primary" />
            <span>22-Day Residential Immersion • Classical Tantric Lineage</span>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-6">
            200 Hour Kundalini Yoga Teacher Training in Rishikesh
          </h1>

          {/* 1-Line Promise & First 100 Words */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            Awaken your vital spiritual energy through classical kriyas, pranayama, bandhas, sacred mantra, and chakra alchemy on the banks of the sacred Ganges River. Master authentic 200-hour Kundalini yoga teacher training in Rishikesh from €1350 with all-inclusive ashram living.
          </p>

          <p className="text-xs sm:text-sm text-foreground/80 max-w-2xl mx-auto mb-8 bg-card/60 backdrop-blur-sm border border-border/40 py-2.5 px-4 rounded-xl">
            <span className="font-semibold text-primary">Next 2027 Cohort:</span> March 24 – April 14, 2027 • Double Sharing: <span className="font-bold text-foreground">€1350</span> | Private Room: <span className="font-bold text-foreground">€1750</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Apply for Kundalini TTC</span>
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
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">22 Days / 21 Nights</div>
              <div className="text-xs text-muted-foreground">200 Comprehensive Hours</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Certification</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">200-Hour RYT Pathway</div>
              <div className="text-xs text-muted-foreground">[[CONFIRM_YA_STATUS]]</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">Rishikesh, India</div>
              <div className="text-xs text-muted-foreground">YogaGarhi Ashram Tapovan</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Class Format</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">[[TODO: Group Size]]</div>
              <div className="text-xs text-muted-foreground">Beginner to Intermediate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS KUNDALINI YOGA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Traditional Tantric Foundations</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Traditional Kundalini Yoga?
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Classical Kundalini Yoga is an ancient esoteric science originating within the earliest Shaiva-Shakta Tantric traditions and the Hatha Yoga Pradipika. The word <em>Kundalini</em> derives from the Sanskrit root <em>kundal</em>, symbolizing the coiled potential of dormant evolutionary consciousness resting at the base of the spine in the <em>Muladhara</em> chakra.
            </p>
            <p>
              In our training in Rishikesh, we teach Kundalini Yoga in its authentic, traditional lineage. Unlike modern branded interpretations, classical Kundalini integrates dynamic repetitive movement sets (kriyas), pranic breath control, energy locks (Mula, Uddiyana, and Jalandhara Bandhas), acoustic sound currents (Nada and Mantra), and deep meditative absorption (Dhyana).
            </p>
            <p>
              Through systematic purification of the 72,000 nadis (subtle energy channels), particularly Ida and Pingala, the vital life-force prana is gently directed into the central conduit, <em>Sushumna Nadi</em>. This process may support enhanced vitality, mental clarity, emotional release, and expanded spiritual awareness, anchored always by grounded physical alignment and mindful restraint.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY STUDY KUNDALINI IN RISHIKESH */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Spiritual Heart of India</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Study Kundalini Yoga in Rishikesh?
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  01
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">High-Frequency Pranic Environment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rishikesh sits at the meeting point of the swift glacial Ganges and the foothills of the Himalayas. The clean Himalayan mountain prana provides the ideal energetic foundation for intensive breathwork and kriya sadhana.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  02
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Unbroken Vedic & Tantric Lineage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Here, the teachings have not been watered down into commercial fitness. You study under authentic Himalayan masters who have practiced, refined, and lived traditional Tantric Kundalini science for decades.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  03
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Sacred Meditation Caves & Ganga Aarti</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deepen your inner experience with guided meditations at Vashistha Cave, silent walks along the sacred riverbanks, and evening fire ceremonies (Ganga Aarti) that ground and purify the energetic field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM WITH HOURS (200 TOTAL) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">In-Depth Syllabus</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Comprehensive 200-Hour Curriculum Modules
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Every module is designed to give you a profound experiential understanding and the technical skills to teach Kundalini safely and with authenticity.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Kundalini Kriyas</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">35 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dynamic repetitive movement sequences for spinal flexibility, nervous system recalibration, glandular balance, auric radiance, and pranic circulation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Pranayama & Bandhas</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">25 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Breath of Fire (Agni Prasana), Kapalbhati, Bhastrika, Nadi Shodhana, and mastering the three primary energy locks: Mula, Uddiyana, and Jalandhara Bandha.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Mantra, Japa & Nada Yoga</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">20 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The science of sacred phonetics: Vedic Bīja mantras, Gayatri Mantra, Mahamrityunjaya, japa meditation with rudraksha mala, and internal sound listening.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Meditation & Dhyana</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">25 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Third-eye focus (Ajna), Trataka (candle gazing), chakra visualization, dynamic movement meditations, and silent witness consciousness (Sakshi Bhav).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Chakras, Nadis & Koshas</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">20 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In-depth study of the 7 major chakras, the 5 Prana Vayus (Prana, Apana, Samana, Udana, Vyana), Ida, Pingala, and Sushumna nadis, and the 5 sheath layers (Koshas).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Hatha Asana Foundation</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">30 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Classical seated and standing postures to build physical endurance, pelvic floor stability, open hips, and protect the lower spine during intense pranic work.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Philosophy & Tantra Roots</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">20 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Study of Patanjali’s Yoga Sutras, Hatha Yoga Pradipika, Shiva Samhita, and classical Non-Dual Tantric philosophy explaining Shakti and Shiva consciousness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Anatomy & Physiology</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">15 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Endocrine system, nervous system regulation (sympathetic vs parasympathetic), vagus nerve stimulation, respiratory mechanics, and safety against hyperventilation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Teaching Methodology & Practicum</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">15 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Class pacing, voice projection, holding sacred group containers, modifying kriyas for diverse body types, and supervised teaching practicum with master critique.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Shatkarma, Nidra & Ayurveda</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">20 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yogic cleansing techniques (Jala Neti, Sutra Neti, Nauli), therapeutic Yoga Nidra for integration, and Ayurvedic principles of sattvic nutrition and doshas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE DAILY SCHEDULE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ashram Daily Cadence</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sample Daily Ashram Schedule (6 AM – 9 PM)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              A deeply disciplined Himalayan routine to support energetic awakening and grounded integration.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="divide-y divide-border">
              {[
                { time: "06:00 AM – 06:30 AM", title: "Morning Herbal Tea & Shatkarma Cleansing", desc: "Jala Neti and digestive cleansing kriyas to prepare the respiratory channels" },
                { time: "06:30 AM – 08:30 AM", title: "Classical Pranayama, Bandhas & Kundalini Asana", desc: "Dynamic kriya sets, spinal activation, and energetic locks in the yoga hall" },
                { time: "08:30 AM – 09:30 AM", title: "Nourishing Ayurvedic Breakfast", desc: "Fresh organic seasonal fruits, porridge, herbal teas, and sattvic dishes" },
                { time: "10:00 AM – 11:30 AM", title: "Philosophy & Tantric Texts Lecture", desc: "Patanjali Yoga Sutras, Hatha Yoga Pradipika, and Kundalini scriptures" },
                { time: "11:45 AM – 01:00 PM", title: "Subtle Anatomy, Chakras & Nadis", desc: "Mapping the energy pathways, five vayus, and energetic safety" },
                { time: "01:00 PM – 02:30 PM", title: "Sattvic Lunch & Rest", desc: "Wholesome vegetarian feast followed by restful digestion and silence" },
                { time: "03:00 PM – 04:30 PM", title: "Teaching Methodology, Sequencing & Practicum", desc: "Hands-on instruction practice, vocal cues, and kriya modifications" },
                { time: "05:00 PM – 06:30 PM", title: "Evening Kriya, Mantra Chanting & Meditation", desc: "Bīja mantra resonance, deep meditation, and soothing Yoga Nidra" },
                { time: "07:00 PM – 08:00 PM", title: "Ayurvedic Dinner", desc: "Light, warm, freshly cooked sattvic dinner supporting sound sleep" },
                { time: "08:15 PM – 09:00 PM", title: "Satsang, Q&A & Quiet Contemplation", desc: "Spiritual discourse, journaling, lights out by 10:00 PM" },
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Target Audience</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-6">
                Who Is This Kundalini Training For?
              </h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Yoga Practitioners:</strong> Ready to move beyond physical postures into energetic awakening, subtle body anatomy, and deep meditation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Existing Yoga Teachers:</strong> Expand your teaching portfolio by adding authentic Kundalini kriyas, pranayama series, and mantra sessions to your classes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Spiritual Seekers & Meditators:</strong> Seeking authentic Himalayan ashram immersion and the profound experiential truth of the chakras and nadis.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Prerequisites & Sincerity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This course is open to beginners and intermediate students with sincere dedication. Prior experience in Kundalini yoga is not mandatory, but at least 3 months of consistent yoga practice or meditation is recommended.
              </p>
              <div className="p-4 rounded-xl bg-card border border-border/80 text-xs text-muted-foreground space-y-2">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Ashram Readiness:</span>
                </div>
                <p>Willingness to adhere to ashram discipline, maintain alcohol-free and tobacco-free living, respect early morning sadhana, and embrace pure vegetarian nutrition.</p>
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
                Kundalini Safety Guidelines & Medical Advisory
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Kundalini yoga involves rapid diaphragmatic breathing, breath retention (kumbhaka), and intense energetic activation. Kundalini practice must be built up gradually under experienced supervision. Please consult your physician before enrolling if you have any of the following conditions:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Pregnancy (vigorous kriyas, bandhas & breath of fire are contraindicated)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Epilepsy or history of sound- or hyperventilation-induced seizures</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Serious cardiovascular conditions, aneurysms, or uncontrolled high blood pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Recent major abdominal or ocular surgery, acute hernia, or retinal detachment</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Active psychiatric illness, bipolar disorder, schizophrenia, or severe unmanaged PTSD</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                Our masters offer personalized pacing and gentle modifications to ensure that your energetic progression is safe, grounded, and harmoniously integrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DATES & FEES TABLE */}
      <section id="dates-and-fees" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Cohort Dates & Tuition</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Upcoming Rishikesh Kundalini Batches (2027)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Each 22-day residential course starts 2 days after our 200hr general TTC finishes, offering ideal stacking for dedicated students.
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
                {BATCHES_KUNDALINI_RISHIKESH.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{batch.date}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €1350 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €1750 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">All-Inclusive Tuition</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Included in Your Training Package
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
                  <span>21 nights accommodation at YogaGarhi Ashram in Tapovan, Rishikesh</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>3 freshly cooked organic Ayurvedic vegetarian/vegan meals daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>200-Hour Kundalini Yoga Teacher Training Certificate upon graduation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Comprehensive printed course manuals, kriya guidebooks, and notebooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Sacred Shatkarma cleansing kit (Jala Neti pot and rubber catheter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Spiritual Himalayan excursions (Vashistha Cave, Kunjapuri sunrise, Ganga Aarti)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Traditional Rudraksha japa mala blessed during opening fire ceremony</span>
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
                  <span>International and domestic flights to Dehradun or Delhi</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Indian tourist visa fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Airport transfer from Dehradun (available upon request)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Personal travel and health insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Personal expenses, laundry, and Ayurvedic massage therapies</span>
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
              Peaceful Living & Pure Sattvic Nourishment
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
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Double Sharing Room (€1350)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Spacious room with two twin beds, attached private bathroom with 24/7 hot water, high-speed Wi-Fi, wardrobe, study space, and balcony overlooking the green foothills. Shared with another student of the same gender.
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
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Private Room (€1750)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A peaceful private retreat featuring a large queen bed, private ensuite bathroom, continuous hot water, private balcony, dedicated study table, and complete privacy for deep introspection between training sessions.
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
                Pure Sattvic Pranic Nutrition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kundalini kriya practice requires clean, easily assimilable food that calms the mind and purifies the nadis. Our ashram kitchen serves three wholesome Ayurvedic meals every day, freshly prepared with organic grains, lentils, seasonal vegetables, herbal teas, and healthy fats. Completely free from onions, garlic, excess spices, and processed ingredients.
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
            Our Kundalini Masters & Faculty
          </h2>
          <div className="w-16 h-1 bg-primary/40 mx-auto mb-8 rounded-full" />
          <div className="p-8 rounded-2xl bg-card border border-dashed border-border/80 text-muted-foreground text-sm max-w-xl mx-auto">
            <p className="font-medium text-foreground">[[TODO: Real teacher names, photos, and verified lineage bios]]</p>
            <p className="text-xs mt-2 text-muted-foreground">
              Our faculty comprises experienced Himalayan yogis, traditional Tantric scholars, and anatomical experts dedicated to guiding you through safe, grounded Kundalini awakening.
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Common Inquiries</span>
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
            <strong className="text-foreground block mb-1">Health & Spiritual Disclaimer:</strong>
            The Kundalini yoga teacher training, breathwork techniques, and kriyas taught at YogaGarhi Ashram in Rishikesh are intended for educational, spiritual, and holistic wellness training. This program is not designed to diagnose, treat, prevent, or cure any physical or psychiatric disease. Pranic breathing and energetic kriyas can be physically and emotionally demanding; prospective students with pre-existing medical or psychological conditions should consult their licensed healthcare practitioner prior to enrollment.
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Embrace the Living Fire of Traditional Kundalini
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join our 22-day residential 200-hour Kundalini Yoga Teacher Training in Rishikesh from €1350 with all-inclusive ashram living, Himalayan master guidance, and internationally recognized certification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Enroll in Kundalini TTC</span>
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
              <Link href="/sound-healing-course-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                Sound Healing Course in Rishikesh
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
