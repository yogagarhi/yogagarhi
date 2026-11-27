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
  HeartHandshake,
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
  Baby,
  Smile,
} from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { BATCHES_PRENATAL_RISHIKESH, CourseBatch } from "@/constants/courseDates";
import { useEnrollment } from "@/components/EnrollmentDialog";

// Reused Cloudinary assets
const heroImage = getCloudinaryImage("activity-ayurveda.jpg");
const yogaChildPose = getCloudinaryImage("child-pose.png");
const prenatalSupport = getCloudinaryImage("post-support-1.jpg");
const doubleBedroom1 = getCloudinaryImage("double-bedroom-1.png");
const privateBedroom1 = getCloudinaryImage("private-bedroom-1.png");
const sattvicBreakfast = getCloudinaryImage("sattvic-breakfast-new.jpg");

export default function CoursePrenatalRishikesh() {
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
      "Namaste! I am interested in the 85 Hour Prenatal Yoga Teacher Training in Rishikesh. Could you please share more information regarding upcoming batches and registration?"
    );
    window.open(`https://wa.me/919319018444?text=${message}`, "_blank");
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Do I need a 200 hour certificate first to join?",
      a: "No prior 200-hour certificate is mandatory to participate and graduate with our 85-Hour Certificate in Prenatal & Postnatal Yoga. Certified 200-hour yoga teachers can use this diploma toward their [[CONFIRM_YA_STATUS]] Registered Prenatal Yoga Teacher (RPYT) credentials. Doulas, midwives, healthcare workers, and pregnant mothers are warmly welcome for professional and personal development.",
    },
    {
      q: "Can I join while pregnant?",
      a: "Yes, pregnant practitioners who have completed their first trimester (14+ weeks gestation) are welcome to enroll, provided they submit prior written clearance from their licensed obstetrician, gynecologist, or certified midwife. All physical practices are adapted with gentle bolsters and props to ensure maternal and fetal comfort.",
    },
    {
      q: "Will I be able to register as an RPYT (Registered Prenatal Yoga Teacher)?",
      a: "If you currently hold an accredited 200-hour Yoga Teacher Training certificate, completing this 85-hour comprehensive curriculum fulfills the continuing education criteria to apply for the [[CONFIRM_YA_STATUS]] RPYT designation upon fulfilling teaching practicum requirements.",
    },
    {
      q: "What is covered in each trimester?",
      a: "We systematically examine physiological adaptations across all three trimesters: first-trimester energy management and nausea relief; second-trimester structural stabilization, pelvic opening, and belly expansion; and third-trimester birth readiness, optimal fetal positioning, labor breathing, and pelvic floor toning and release.",
    },
    {
      q: "Prenatal vs postnatal — what's the difference?",
      a: "Prenatal yoga emphasizes opening, joint release, pelvic flexibility, breath awareness for labor, and emotional calm during gestation. Postnatal yoga (from 6 weeks post-vaginal birth or 10-12 weeks post-cesarean) shifts focus to gentle core re-knitting, diastasis recti rehabilitation, pelvic floor re-strengthening, and releasing shoulder tension from nursing.",
    },
    {
      q: "Is this prenatal yoga certification recognized internationally?",
      a: "Yes. Our 85-Hour Prenatal Yoga Teacher Training curriculum in Rishikesh meets rigorous international standards for maternal anatomy, biomechanics, safe sequencing, and ethical practice. Graduates receive an official 85-Hour Certificate from YogaGarhi Ashram in Rishikesh, India.",
    },
    {
      q: "Can I combine it with the 200 hour course?",
      a: "Yes. All specialty batches at YogaGarhi are intentionally scheduled to start 2 days after our 200-hour residential teacher training finishes. This enables students to complete their foundational 200-hour training and seamlessly stack the 85-hour prenatal certification in one journey.",
    },
    {
      q: "What's included in the fee?",
      a: "The fee (€690 for double sharing, €890 for private room) covers 8 nights of residential ashram accommodation, 3 organic sattvic Ayurvedic meals daily, all comprehensive course manuals, prop usage, graduation ceremony, and excursions in Rishikesh.",
    },
    {
      q: "How do I reach Rishikesh and the ashram?",
      a: "The nearest airport is Dehradun Jolly Grant Airport (DED), located approximately 35 minutes by taxi from our ashram in Tapovan. Direct trains also run from New Delhi to Haridwar Junction (45 minutes away), or you can arrange private taxi transportation directly from Delhi.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="85 Hour Prenatal Yoga Teacher Training in Rishikesh - YogaGarhi Ashram"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-sm">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>85-Hour Residential Certification • Prenatal & Postnatal Mastery</span>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-6">
            85 Hour Prenatal Yoga Teacher Training in Rishikesh
          </h1>

          {/* 1-Line Promise & First 100 Words */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            Empower mothers through every stage of motherhood with compassionate anatomy, trimester-wise modifications, pelvic floor biomechanics, labor breathwork, and postnatal recovery. Master certified prenatal yoga teacher training in Rishikesh from €690.
          </p>

          <p className="text-xs sm:text-sm text-foreground/80 max-w-2xl mx-auto mb-8 bg-card/60 backdrop-blur-sm border border-border/40 py-2.5 px-4 rounded-xl">
            <span className="font-semibold text-primary">Next 2027 Cohort:</span> March 24 – April 1, 2027 • Double Sharing: <span className="font-bold text-foreground">€690</span> | Private Room: <span className="font-bold text-foreground">€890</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Apply for Prenatal TTC</span>
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
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">9 Days / 8 Nights</div>
              <div className="text-xs text-muted-foreground">85 Specialized Hours</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/60 shadow-sm">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Certification</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">RPYT Pathway</div>
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
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Cohort Format</div>
              <div className="font-heading font-bold text-base sm:text-lg text-foreground mt-1">[[TODO: Group Size]]</div>
              <div className="text-xs text-muted-foreground">Intimate & Supportive</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS PRENATAL & POSTNATAL YOGA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sacred Maternal Science</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Prenatal & Postnatal Yoga?
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Prenatal and postnatal yoga is an evidence-based, compassionate specialization that supports a woman’s physical, mental, and energetic transformation from conception through birth and the fourth trimester. During pregnancy, significant hormonal surges—most notably relaxin—soften ligaments and loosen joint capsules, while the shifting center of gravity places unique mechanical demands on the spine and pelvis.
            </p>
            <p>
              Prenatal yoga adapts classical asana principles into safe, restorative postures utilizing bolsters, wall supports, chairs, and straps. The practice builds stamina for childbirth, relieves common gestational discomforts like lower back aches, pelvic girdle pain, and swollen extremities, and nurtures deep emotional connection between mother and growing baby through conscious breathwork and visualization.
            </p>
            <p>
              Following birth, postnatal yoga provides specialized rehabilitation. It gently supports core re-activation, diastasis recti recovery, pelvic floor restoration, and mental relaxation during early postpartum adjustment, empowering mothers to reclaim vitality with grace and patience.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY STUDY IN RISHIKESH (EXACT H2) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nurturing Environment</span>
            {/* Required exact H2 */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Prenatal Yoga Certification in Rishikesh
            </h2>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  01
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Serene Riverside Sanctuary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Located in peaceful Tapovan away from traffic noise, our ashram provides clean Himalayan mountain air and gentle river breezes, creating a deeply relaxing environment to study sacred maternal wellness.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  02
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Ancient Maternal Heritage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In India, pregnancy has long been revered as a sacred sadhana. You learn how classical Ayurvedic principles and traditional mindfulness support mother and child in harmony with modern physiological science.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  03
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Holistic Community Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Train within an intimate, compassionate circle of female practitioners, doulas, and yoga teachers sharing wisdom, peer support, and practical teaching practicums under seasoned maternal health educators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM WITH HOURS (85 TOTAL) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Comprehensive Curriculum</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              85-Hour Specialized Prenatal Modules
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              A comprehensive blend of maternal anatomy, trimester sequencing, labor breathwork, prop biomechanics, and postpartum recovery.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Pregnancy Anatomy & Trimesters</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">15 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Anatomical and physiological changes across the 1st, 2nd, and 3rd trimesters: hormonal dynamics (relaxin, progesterone), uterine expansion, postural shifts, and circulatory adaptations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Contraindications & Modifications</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">10 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive red flags, positions to avoid (deep twists, prone lying, deep backbends, supine vena cava compression), and safe adaptations for common conditions like sciatica and SPD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Trimester-Wise Asana Sequencing</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">15 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing tailored class sequences for every stage: grounding and gentle movement in the 1st trimester; strength and hip opening in the 2nd; birth preparation and rest in the 3rd.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Pranayama & Labor Breathwork</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">10 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Safe maternal pranayama: Nadi Shodhana, Brahmari, golden-thread breath, vocal toning for down-regulating pain during surges, and understanding Apana Vayu in natural birth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Pelvic Floor Awareness & Health</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">10 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pelvic anatomy, cultivating muscular responsiveness versus hypertonicity, conscious relaxation of the pelvic floor for labor, and gentle postpartum rehabilitation techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Props, Wall Work & Restorative Yoga</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">8 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Skillful application of bolsters, blocks, straps, chairs, and birth balls to support optimal fetal positioning, relieve maternal fatigue, and create weightless comfort.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Postnatal Recovery & Diastasis Recti</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">10 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The fourth trimester: assessing diastasis recti, safe progressive core re-activation, healing after cesarean or vaginal birth, and relieving upper back tension from nursing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Practicum, Ethics & Medical Scope</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">10 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hands-on teaching practicum, voice cues, trauma-informed boundary holding, clear legal scope of practice, and collaborating respectfully with doctors, midwives, and doulas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm md:col-span-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">Cultural Heritage: Garbh Sanskar Traditions</h3>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">5 Hours</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Appreciating India’s traditional cultural heritage of <em>Garbh Sanskar</em> (prenatal mental conditioning through uplifting stories, sacred chanting, and positive environmental harmony). Presented strictly as a rich historical and cultural wellness practice without medical claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE DAILY SCHEDULE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Daily Cadence</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sample Daily Ashram Schedule (6:30 AM – 8:30 PM)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              A balanced daily rhythm designed for maternal wellness education, practical labs, and wholesome rest.
            </p>
            <div className="w-16 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="divide-y divide-border">
              {[
                { time: "06:30 AM – 07:45 AM", title: "Morning Gentle Prenatal Sadhana & Labor Breathwork", desc: "Soothing joint mobility, gentle warm-ups, and maternal breathing techniques" },
                { time: "08:00 AM – 09:00 AM", title: "Ayurvedic Breakfast", desc: "Nourishing, easily digestible organic porridge, fruits, and herbal teas" },
                { time: "09:30 AM – 12:30 PM", title: "Maternal Anatomy, Trimester Physiology & Posture Labs", desc: "Interactive lectures on pregnancy biomechanics and posture adaptation" },
                { time: "01:00 PM – 02:30 PM", title: "Sattvic Lunch & Mindful Rest", desc: "Balanced vegetarian lunch followed by restorative quiet time or river walk" },
                { time: "03:00 PM – 05:00 PM", title: "Prop Work, Modifications & Partner Teaching Practicum", desc: "Hands-on prop placement, vocal cueing, and simulated client scenarios" },
                { time: "05:30 PM – 06:45 PM", title: "Restorative Yoga & Yoga Nidra for Mothers", desc: "Deep relaxation with bolsters, blankets, and guided visualization" },
                { time: "07:00 PM – 08:00 PM", title: "Sattvic Dinner", desc: "Freshly cooked warm Ayurvedic soup, seasonal vegetables, and grains" },
                { time: "08:00 PM – 08:30 PM", title: "Evening Reflection & Journaling", desc: "Self-study, quiet contemplation, and early bedtime" },
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

      {/* 7. WHO CAN JOIN */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Welcoming Diverse Students</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-6">
                Who Can Join This Course?
              </h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Certified 200-Hour Yoga Teachers:</strong> Gain continuing education hours and qualify to register as an RPYT ([[CONFIRM_YA_STATUS]]) upon fulfilling requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Doulas, Midwives & Birth Workers:</strong> Add movement-based biomechanics, breath management, and relaxation tools to your maternal care toolkit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Expectant Mothers & Dedicated Yoginis:</strong> Deepen your personal connection to pregnancy, birth preparation, and safe home self-practice.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Participation by Pregnant Students
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pregnant practitioners are warmly welcomed into the training. To ensure maximum safety for both mother and child, pregnant participants must be in their <strong>second or third trimester (14+ weeks)</strong> and must provide <strong>written medical clearance from their licensed obstetrician, gynecologist, or certified midwife</strong> prior to arrival.
              </p>
              <div className="p-4 rounded-xl bg-card border border-border/80 text-xs text-muted-foreground space-y-2">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Supportive Environment:</span>
                </div>
                <p>All physical asana labs are modified according to individual gestational stages and maternal energy levels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEDICAL DISCLAIMER */}
      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10 border-y border-amber-200/50 dark:border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex-shrink-0 mt-1">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Medical Disclaimer & Scope of Practice
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                This 85-hour prenatal and postnatal yoga teacher training course is designed exclusively for educational, instructional, and wellness coaching purposes. It does not qualify graduates to provide obstetrical care, clinical diagnosis, midwifery services, or medical advice.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Yoga teachers must always operate strictly within their professional scope of practice, encouraging pregnant and postpartum clients to maintain close, ongoing supervision with licensed medical practitioners.
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
              Upcoming Rishikesh Prenatal Batches (2027)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Each 9-day residential training starts 2 days after our 200-hour TTC finishes, allowing seamless course stacking.
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
                {BATCHES_PRENATAL_RISHIKESH.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{batch.date}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €690 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      €890 <span className="text-xs text-muted-foreground">(all-inclusive)</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">All-Inclusive Living</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Is Included in Your Prenatal Course Fee
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
                  <span>8 nights residential accommodation at YogaGarhi Ashram</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>3 freshly prepared sattvic Ayurvedic vegetarian/vegan meals daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>85-Hour Prenatal & Postnatal Yoga Teacher Certificate upon graduation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Comprehensive printed course manual, trimester guidebooks, and sequencing templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Complete access to specialized yoga props (bolsters, blocks, straps, birth balls)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Evening Ganga Aarti ceremony and sacred temple visit in Rishikesh</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Maternal wellness care package and guided audio meditations</span>
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
                  <span>Domestic and international flight tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span>Indian Visa fees</span>
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
                  <span>Optional personal Ayurvedic spa treatments and laundry services</span>
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
              Clean Living & Sattvic Nutrition
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
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Double Sharing Room (€690)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Spacious room with two single beds, attached modern bathroom with 24/7 hot water, high-speed Wi-Fi, study table, and balcony overlooking Tapovan. Shared with a fellow student of the same gender.
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
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Private Room (€890)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A peaceful private sanctuary featuring a queen-sized bed, ensuite private bathroom, continuous hot water, private mountain-view balcony, work desk, and complete quiet for study and personal rest.
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
                Nourishing Sattvic Ayurvedic Meals
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Maternal health requires balanced, pure nutrition. Our kitchen provides three warm, wholesome vegetarian and vegan meals daily, made from seasonal vegetables, legumes, whole grains, and herbal teas. Cooked with gentle spices to promote optimal digestion without irritation.
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
            Our Prenatal & Postnatal Faculty
          </h2>
          <div className="w-16 h-1 bg-primary/40 mx-auto mb-8 rounded-full" />
          <div className="p-8 rounded-2xl bg-card border border-dashed border-border/80 text-muted-foreground text-sm max-w-xl mx-auto">
            <p className="font-medium text-foreground">[[TODO: Real teacher names, photos, and verified lineage bios]]</p>
            <p className="text-xs mt-2 text-muted-foreground">
              Our faculty comprises certified maternal health yoga educators, experienced doulas, and seasoned Ayurvedic practitioners committed to safe, empowered birthing education.
            </p>
          </div>
        </div>
      </section>

      {/* 13. REVIEWS PLACEHOLDER (Hidden while empty per Honesty Rules) */}
      {reviews.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              Student Testimonials
            </h2>
            {/* [[TODO: Render authentic student reviews once collected]] */}
          </div>
        </section>
      )}

      {/* 14. FAQ ACCORDION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Common Questions</span>
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

      {/* 15. FINAL CTA & DISCLAIMER */}
      <section className="py-20 bg-gradient-to-t from-primary/10 via-background to-background border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Begin Your Prenatal Teaching Journey in Rishikesh
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join our 9-day residential 85-Hour Prenatal & Postnatal Yoga Teacher Training in Rishikesh from €690 with all-inclusive ashram living, master maternal educators, and certification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleEnrollClick("2027-03-24")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Enroll in Prenatal TTC</span>
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
              <Link href="/200-hour-kundalini-yoga-teacher-training-in-rishikesh" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">
                200 Hour Kundalini Yoga TTC in Rishikesh
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
