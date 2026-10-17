import { Metadata } from "next";
import Link from "next/link";
import { 
    CheckCircle2, 
    Calendar, 
    ShieldCheck, 
    BookOpen, 
    Users, 
    GraduationCap, 
    Sparkles, 
    ArrowRight,
    MessageCircle,
    Clock,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: {
        absolute: "Apply for Yoga Teacher Training | YogaGarhi",
    },
    description: "Apply for Yoga Alliance certified 100, 200 & 300-hour yoga teacher training courses in Bali and Rishikesh. Admissions, prerequisites & dates.",
    alternates: {
        canonical: "https://www.yogagarhi.com/apply-now",
    },
    openGraph: {
        title: "Apply for Yoga Teacher Training | YogaGarhi",
        description: "Apply for Yoga Alliance certified 100, 200, and 300-hour yoga teacher training courses in Bali and Rishikesh. Step-by-step admissions, prerequisites, and dates.",
        url: "https://www.yogagarhi.com/apply-now",
        type: "website",
    },
};

export default function ApplyNowPage() {
    const admissionsSteps = [
        {
            step: "01",
            title: "Select Your Course & Destination",
            description: "Choose between 100-Hr, 200-Hr, or 300-Hr teacher training programs in Ubud, Bali or Rishikesh, Himalayas based on your learning goals.",
            icon: GraduationCap,
        },
        {
            step: "02",
            title: "Check Prerequisites & Eligibility",
            description: "100-Hr & 200-Hr are open to dedicated beginners and experienced practitioners alike. 300-Hr requires a certified 200-Hour RYT certificate.",
            icon: CheckCircle2,
        },
        {
            step: "03",
            title: "Reserve Seat with $250 Deposit",
            description: "Lock in your dates, room tier, and early bird pricing. Protected by our 12-month free rescheduling policy and seat transfer flexibility.",
            icon: ShieldCheck,
        },
        {
            step: "04",
            title: "Immediate Pre-YTTC Online Access",
            description: "Receive your YogaGarhi Welcome Guide and instant access to our Pre-YTTC online preparation video modules and anatomy foundations.",
            icon: BookOpen,
        },
        {
            step: "05",
            title: "Arrive on Campus & Immerse",
            description: "Small cohorts strictly capped at 8–10 students ensure personal mentorship, 1-on-1 alignment corrections, and authentic ashram immersion.",
            icon: Users,
        },
    ];

    const courses = [
        {
            title: "200-Hour Yoga Teacher Training",
            tag: "Most Popular • Yoga Alliance RYT 200",
            duration: "24 Days / 23 Nights",
            description: "The complete foundational certification covering classical Hatha, Ashtanga Vinyasa, alignment, biomechanics, philosophy, and practical teaching.",
            baliLink: "/200-hour-yoga-teacher-training-in-bali",
            rishikeshLink: "/200-hour-yoga-teacher-training-in-rishikesh",
            features: [
                "Worldwide Yoga Alliance RYT 200 Certification",
                "Full Hatha, Ashtanga & Vinyasa teaching methodology",
                "23 nights accommodation & 3 daily Sattvic meals (residential)",
                "Pre-YTTC online study materials included immediately",
            ],
        },
        {
            title: "100-Hour Yoga Teacher Training",
            tag: "Foundational Reset • Continuing Education",
            duration: "12 Days / 11 Nights",
            description: "An intensive immersion ideal for practitioners seeking deep personal transformation, or those wanting to complete Part 1 of the 200-Hour TTC.",
            baliLink: "/100-hour-yoga-teacher-training-in-bali",
            rishikeshLink: "/100-hour-yoga-teacher-training-in-rishikesh",
            features: [
                "Yoga Alliance 100-Hour Continuing Education credits",
                "Core pranayama, meditation, and posture alignment",
                "11 nights stay with healthy plant-based meals",
                "Option to complete remaining 100 hours within 12 months",
            ],
        },
        {
            title: "300-Hour Advanced Teacher Training",
            tag: "Advanced Mastery • RYT 300 / RYT 500",
            duration: "28 Days / 27 Nights",
            description: "Designed exclusively for 200-Hour graduates ready to master advanced adjustments, hands-on assists, anatomy pathology, and subtle yogic energy.",
            baliLink: "/300-hour-yoga-teacher-training-in-bali",
            rishikeshLink: null,
            features: [
                "Advanced Yoga Alliance RYT 300 / 500 qualification",
                "Advanced sequencing, injury therapeutics & biomechanics",
                "27 nights deluxe accommodation & nutrition in Ubud",
                "Subtle body, chakras, and advanced teaching practicum",
            ],
        },
    ];

    const faqs = [
        {
            q: "Do I need to be advanced or flexible to apply for the 200-Hour TTC?",
            a: "No. Our 200-Hour curriculum is structured from foundational roots to advanced applications. We welcome passionate practitioners of all ages, backgrounds, and flexibility levels. What matters most is dedication, openness, and sincere curiosity.",
        },
        {
            q: "What is the deposit requirement and payment terms?",
            a: "A $250 deposit reserves your seat and locks in any applicable early-bird tuition discounts and your preferred room tier. The remaining balance is payable upon arrival on Campus (Day 1).",
        },
        {
            q: "What if my schedule changes after paying the deposit?",
            a: "We offer complete peace of mind: your deposit includes a 12-Month Free Reschedule policy. You may transfer your booking to any future batch in Bali or Rishikesh within 12 months with zero penalty, or transfer your seat to a family member or friend with prior notice.",
        },
        {
            q: "What is included with my enrollment?",
            a: "Residential packages include full tuition, Yoga Alliance accredited certificate, printed training manual, accommodation for the full course duration, 3 daily nourishing Sattvic/vegetarian meals, weekend excursions, and immediate access to the Pre-YTTC online prep portal. Tuition-only options are also available.",
        },
        {
            q: "How many students are in each cohort?",
            a: "To ensure rigorous pedagogical quality and individual hands-on attention, our cohorts are strictly capped at 8–10 students in Bali and 10–12 in Rishikesh.",
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Header / Hero */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/30 border-b border-border/50">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Yoga Alliance RYS Registered School • Admissions Open 2026–2027</span>
                    </div>
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Apply for Yoga Teacher Training
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Begin your journey to becoming an authentic, certified yoga teacher. Select your program, explore prerequisites, and reserve your seat in our intimate cohorts.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>8–10 Student Small Cohorts</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>12-Month Free Reschedule</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span>Yoga Alliance RYT Certification</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16 md:py-20 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                        Step 1: Choose Your Course
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        Select the teacher training that aligns with your current practice and career aspirations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {courses.map((course, idx) => (
                        <div 
                            key={idx}
                            className="bg-card border border-border/70 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                        >
                            <div>
                                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-secondary/80 text-secondary-foreground mb-3">
                                    {course.tag}
                                </span>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                                    {course.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-4">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{course.duration}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    {course.description}
                                </p>
                                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-foreground/90">
                                    {course.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-border/50">
                                <Link href={course.baliLink} className="block">
                                    <Button className="w-full justify-between group">
                                        <span>Apply in Bali</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                {course.rishikeshLink && (
                                    <Link href={course.rishikeshLink} className="block">
                                        <Button variant="outline" className="w-full justify-between">
                                            <span>Apply in Rishikesh</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admissions Steps */}
            <section className="py-16 md:py-20 bg-muted/20 border-y border-border/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                            The Admissions & Enrollment Process
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                            From application to on-campus arrival, our enrollment process is simple, clear, and fully supportive.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {admissionsSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-card border border-border/60 rounded-xl p-5 relative"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-2xl font-bold font-mono text-muted-foreground/30">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Admissions FAQ */}
            <section className="py-16 md:py-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Everything you need to know about applying and securing your training place.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx}
                            className="bg-card border border-border/60 rounded-xl p-5 md:p-6"
                        >
                            <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admissions Support CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                        Need Guidance Choosing the Right Training?
                    </h2>
                    <p className="text-primary-foreground/90 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                        Our admissions counselors are available daily to answer questions regarding course syllabi, travel arrangements, room choices, and prerequisites.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a 
                            href="https://wa.me/6282144027878" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button 
                                size="lg" 
                                variant="secondary" 
                                className="font-semibold gap-2 shadow-md"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Chat on WhatsApp</span>
                            </Button>
                        </a>
                        <Link href="/contact-us">
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
                            >
                                <span>Book Video Consultation</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
