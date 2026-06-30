"use client";
import DynamicBatchDate from "@/components/DynamicBatchDate";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    Check,
    Gift,
    MessageCircle,
    Award,
    Clock,
    Users,
    Sparkles,
    ArrowRight,
    Star,
    Zap,
    Target,
    Heart,
    ChevronDown,
    Plus,
    Minus,
    BookOpen,
    X,
    ChevronLeft,
    ChevronRight,
    Calendar
} from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FoundationEnrollmentDialog from "@/components/FoundationEnrollmentDialog";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
const founderImage = getCloudinaryImage("founder-image.png");
const logoImage = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

// Features / What this experience can do for you
const transformationPoints = [
    { title: "Meaningful Career", desc: "Turn your passion for yoga into a career that fulfills you and helps others." },
    { title: "Personal Growth", desc: "Experience the profound shift yoga brings to your physical, emotional, and mental wellbeing." },
    { title: "Global Impact", desc: "Discover how yoga teaching creates community and spreads wellness worldwide." },
    { title: "Career Clarity", desc: "Understand the roadmap from practitioner to certified teacher with confidence." },
];

const detailedCurriculum = [
    {
        day: "Day 1",
        title: "Foundations of Yoga",
        items: [
            "Learn the fundamentals of alignment for a safe and effective practice",
            "Discover Your a unique yogic energy rooted in ancient Ayurvedic wisdom",
            "What is Yoga Teaching, beyond Asanas?",
            "8 Householder Foundations of Classical Yoga",
            "How Yoga Teachers Create Transformation in Real People",
            "The Role of Discipline, Breath & Lifestyle in Teaching",
            "Why Yoga Teaching Is Becoming a Purpose-Driven Career Path"
        ]
    },
    {
        day: "Day 2",
        title: "Turn Yoga into a Career",
        items: [
            "Experience a guided 30-minute yoga practice",
            "Explore the foundational principles of yoga philosophy",
            "How TTC Certification Shapes Modern Yoga Teaching",
            "The Teaching Skills: Sequencing, Cues, Safety & Presence",
            "The Modern Yoga Teaching Economy: Studios, Corporates, Online",
            "How to Build a Meaningful Teaching Career with Conscious Income",
            "How to Monetize Yoga Teaching Without Losing Authenticity"
        ]
    }
];

const curriculumImage = getCloudinaryImage("hero-yoga-bali.jpg");

const curriculum = [
    {
        label: "Before Joining",
        title: "You may be Feeling...",
        items: [
            "\"What if I choose the wrong yoga school?\"",
            "\"Am I flexible or advanced enough to join?\"",
            "\"Can I really trust what I see online?\"",
            "\"I want to do something more meaningful — something that helps people.\"",
            "\"Yoga has changed me personally… maybe it's time to share it.\"",
            "\"I've always wanted to teach, but I don't know how to begin.\"",
            "\"I'm looking for a path that gives both purpose and independence.\""
        ]
    },
    {
        label: "After Completing",
        title: "You'll walk away with...",
        items: [
            "Discover Your a unique yogic energy rooted in ancient Ayurvedic wisdom",
            "Understand how TTC certification opens real pathways to teach & earn",
            "Feel clarity about transitioning into a purpose-driven career",
            "Learn the first steps to becoming a certified yoga teacher",
            "Leave with direction, confidence, and a sense of calling"
        ]
    }
];

const bonuses = [
    { title: "2 Interactive Q&A Sessions", value: "$45", desc: "Get your specific questions answered by master teachers." },
    { title: "Guided Practice Simulation", value: "$60", desc: "Experience the first step of lead teaching in a safe environment." },
    { title: "Certificate of Participation", value: "$20", desc: "A mark of your initial step into the foundational pathway." },
];

const faqs = [
    {
        question: "Is this 2-Day foundation a full certification?",
        answer: "No. It’s a preparatory experience designed to give you clarity, confidence, and a roadmap toward the 200-Hour TTC certification."
    },
    {
        question: "Do I need prior yoga experience?",
        answer: "No prior teaching experience is required — only curiosity and a willingness to learn about the path of yoga."
    },
    {
        question: "Will I get a certificate?",
        answer: "Yes — a Participation Certificate showing you completed the foundational experience at YogaGarhi."
    },
    {
        question: "Does this guarantee TTC admission?",
        answer: "It gives you priority clarity and preparation — admission to our full TTC programs is still a separate process."
    }
];

const testimonials = [
    {
        name: "Gurpreet Kaur",
        text: "YogaGhari is truly authentic and deeply rooted in the real essence of yoga. From the very beginning, I felt seen and supported as a person, not treated as just another number in a group. The school offers an incredible amount of support before the training throughout the training and beyond. The teachers genuinely care about your growth, not only as a practitioner but especially as a yoga teacher. They take the time to guide you, encourage you, and help you build confidence in your own voice and teaching style. What makes YogaGhari stand out is the ongoing support and continuous education it provides even after the training is completed. You are never left on your own—there is a strong sense of community, mentorship, and continuous learning. A special thank you to my guru, Sachin ji, who is a true inspiration for me and for my practice. His wisdom, humility, and way of teaching go far beyond technique—they touch something much deeper. Learning from him has been a transformative experience. I am deeply grateful for this journey and would wholeheartedly recommend this school to anyone seeking an authentic, supportive, and life-changing yoga teacher training experience in Bali.",
        role: "Certified Yoga Teacher"
    },
    {
        name: "Lisa Beltman",
        text: "I really appreciate Sachin Ji’s calm, friendly, and welcoming energy. He is knowledgeable and takes the time to guide each student with care. His classes are structured in such a way that you find yourself doing more than you thought you could. It’s truly inspiring to learn from Sachin Ji. If you wish to deepen your understanding of yoga both in terms of asanas and spirituality then I wholeheartedly recommend this school.",
        role: "Yoga Student"
    },
    {
        name: "Viral Ashar",
        text: "I had the profound privilege of learning Ashtang Yoga under the guidance of Sachin Sir in the peaceful environment of Rishikesh. His impact on my yoga journey has been transformative. Sir's teaching methodologies were perfectly structured, helping me not just memorize poses, but genuinely understand the whole concept of yoga at its core. His knowledge base is truly immense; the way he connects deep yogic philosophy with a tremendous understanding of human body anatomy makes every class an enlightening experience. If you are looking for an authentic and knowledgeable instructor, Sachin Sir is the perfect yoga guru to learn from. Beyond his technical expertise, he has been an unwavering source of support throughout my entire journey. My mentor, and he will always hold that place in my life.",
        role: "Yoga Practitioner"
    },
    {
        name: "Alkesendra",
        text: "My experience has been extremely transformative. So grateful to choose this school. THE LEAD TEACHER SACHIN JI IS THE BEST YOGA TEACHER! 🙏 I completed my 200-hour yoga teacher training in Bali, and it was truly magical. 🌺 The knowledge I gained was so deep and authentic — something you can genuinely feel within yourself. The meditations had such a profound impact on me that even the taste of the air and food seemed to change. It was an experience that opened new dimensions of yoga and of life itself. I’m deeply grateful to my teachers for sharing such important wisdom and guidance.",
        role: "200-Hour TTC Graduate"
    },
    {
        name: "Yan Tan Chen",
        text: "I had a very nice 200ttc journey with Sachin Ji few years ago 🙏 The young teacher taught me more than I saw in myself. I didn't know exactly the changes in my body but Sachin Ji guided me to go further. At that moment, I explored the good experience of stretching both the physical and the psychological. I was inspired by Sachin Ji who is full of yoga knowledge and puts yoga habits into life practice, which is the most essential personality of a yoga teacher. I still smile when thinking about this journey, namaste🙏",
        role: "Yoga Graduate"
    },
    {
        name: "Ilksen Dogan",
        text: "Sachin’s instruction helped my practice and asana skills develop beyond what I believed I could achieve. I learned the traditional way to practice yoga with his help, and Sanskrit history and ancient Hinduism were woven into every class. His extensive knowledge in anatomy, traditional practice, and alignment truly helped me reach a practice where I am confident in my body and my own knowledge. I’m thankful for the time I spent under Sachin Ji’s instruction.",
        role: "Professional Student"
    },
    {
        name: "Chanda Maheshwari",
        text: "I feel so grateful to have had the chance to learn yoga from the great Gurus. From the moment I stepped into the school, I felt so much positivity that made everything so easy and enjoyable. Sachin Sir's presence itself creates magic. His way of teaching asanas, alignments, techniques, and deep yogic philosophy is truly brilliant and inspiring. Every class was full power-packed and filled with clarity and joy. YogaGarhi is the place where every yoga enthusiast should be at least once.",
        role: "Yoga Enthusiast"
    }
];

export default function TeacherTrainingFoundation() {
    const [showFoundationForm, setShowFoundationForm] = useState(false);
    const [expandedReview, setExpandedReview] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const container = document.getElementById('testimonial-scroll');
        if (!container) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        };

        container.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-4 pb-20 lg:pt-8 lg:pb-32 overflow-hidden bg-background">
                {/* Spiritual Pattern Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none pattern-lotus" />

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex justify-center mb-8 md:mb-10">
                        <div className="flex flex-col items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src={logoImage}
                                    alt="Yogagarhi Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-heading font-bold text-primary tracking-wider text-xl md:text-2xl leading-none">
                                    YOGAGARHI
                                </span>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="w-6 h-px bg-primary/20" />
                                    <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase whitespace-nowrap">
                                        Authentic Yoga School in Bali
                                    </span>
                                    <span className="w-6 h-px bg-primary/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6 shadow-md">
                            <Sparkles className="w-4 h-4 fill-current" />
                            Next Batch: <DynamicBatchDate /> | 10:00 AM CET (German Time) | 5:00 PM (Singapore) | 6:00 PM (South Korea)
                        </div>
                        <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-[1.2] md:leading-[1.1]">
                            Not Sure Which YTTC to Trust? <span className="text-primary italic">Experience It First</span> Free 2-Day Yoga teacher training Foundation
                        </h1>
                        <div className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
                            <p className="mb-4">At Yogagarhi, we understand that choosing a YTTC is about much more than just a certificate.</p>
                            <p className="text-foreground/90 font-medium text-lg md:text-xl italic">
                                It’s about <span className="text-primary not-italic">feeling safe</span>, it’s about <span className="text-primary not-italic">feeling guided</span>, and it’s about knowing you are finally in the <span className="text-primary not-italic">right hands</span>.
                            </p>
                            <p className="mt-6 font-semibold text-accent uppercase tracking-wider text-sm">That’s why we keep things simple and transparent.</p>
                        </div>

                        <div className="bg-card shadow-elevated rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 max-w-lg mx-auto border border-border/50 relative">
                            {/* "Only 12 Seats Left" Badge */}
                            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 md:px-6 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg animate-pulse whitespace-nowrap">
                                ONLY 12 SEATS LEFT
                            </div>

                            <div className="flex flex-col items-center gap-1 md:gap-2 mb-6 md:mb-8">
                                <span className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">FREE</span>
                                <span className="text-lg md:text-xl text-muted-foreground line-through opacity-70">Regular Price $99</span>
                            </div>

                            <Button
                                variant="cta"
                                size="lg"
                                className="w-full text-base md:text-lg shadow-elevated hover:scale-[1.02] transition-all py-6 md:py-7"
                                onClick={() => setShowFoundationForm(true)}
                            >
                                RESERVE MY FREE SPOT NOW
                                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                            </Button>

                            <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-8">
                                <div className="flex flex-col items-center">
                                    <span className="text-primary font-bold text-lg md:text-xl">2,500+</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">Students</span>
                                </div>
                                <div className="w-px h-8 md:h-10 bg-border/50" />
                                <div className="flex flex-col items-center">
                                    <span className="text-primary font-bold text-lg md:text-xl">5/5</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4 block">Your Path Forward</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">What This 2-Day Experience Can Do for You</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {curriculum.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-border shadow-soft group hover:border-primary/30 transition-all">
                                    <div className="inline-block px-5 md:px-6 py-1.5 md:py-2 bg-primary text-primary-foreground font-bold rounded-full text-xs md:text-sm mb-6 md:mb-8 shadow-sm">
                                        {item.label}
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-6 md:mb-8 text-foreground">{item.title}</h3>
                                    <ul className="space-y-4 md:space-y-5">
                                        {item.items.map((point, pointIdx) => (
                                            <li key={pointIdx} className="flex items-start gap-3 md:gap-4">
                                                <div className={`mt-1 rounded-full p-1.5 flex-shrink-0 ${idx === 0 ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                                                    {idx === 0 ? (
                                                        <X className="w-3 h-3 md:w-3.5 md:h-3.5 text-destructive" />
                                                    ) : (
                                                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                                                    )}
                                                </div>
                                                <span className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <Button variant="cta" size="xl" onClick={() => setShowFoundationForm(true)} className="shadow-elevated">
                                YES, I WANT THIS CURRICULUM
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Curriculum Section */}
            <section className="py-24 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4 block">Your CURRICULUM</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Here's What You Will Learn</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A structured 2-day journey from yoga foundations to career clarity</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl rotate-3" />
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <Image
                                        src={curriculumImage}
                                        alt="Yoga Curriculum Journey"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8 md:space-y-10">
                                {detailedCurriculum.map((dayItem, idx) => (
                                    <div key={idx} className="relative pl-8 md:pl-10 border-l-2 border-primary/20">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg border-2 border-white" />

                                        <div className="mb-4">
                                            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{dayItem.day}</span>
                                            <h3 className="font-heading text-2xl md:text-3xl font-bold mt-3 text-foreground">{dayItem.title}</h3>
                                        </div>

                                        <ul className="space-y-3 md:space-y-4">
                                            {dayItem.items.map((point, pointIdx) => (
                                                <li key={pointIdx} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-foreground/80 font-medium text-sm md:text-base">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <div className="pt-6">
                                    <Button variant="cta" size="xl" onClick={() => setShowFoundationForm(true)} className="w-full md:w-auto shadow-elevated">
                                        YES, I WANT THIS CURRICULUM
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonuses Section */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-card rounded-[3rem] p-8 md:p-16 border border-border shadow-elevated relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 p-8 hidden md:block opacity-20">
                                <Gift className="w-48 h-48 text-primary -rotate-12" />
                            </div>

                            <div className="relative z-10 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-8 shadow-sm">
                                    <Zap className="w-4 h-4 fill-current" />
                                    💥 EXCLUSIVE BONUSES ($120+ VALUE) — FREE
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-foreground">Get These Bonuses <span className="text-primary underline decoration-primary/20">When You Register Now</span></h2>

                                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                                    {bonuses.map((bonus, idx) => (
                                        <div key={idx} className="bg-background rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 hover:border-accent/30 transition-all group">
                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                                                    <Check className="w-5 h-5 md:w-6 md:h-6" />
                                                </div>
                                                <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest bg-primary/10 px-2.5 md:px-3 py-1 rounded-full whitespace-nowrap">Worth {bonus.value}</span>
                                            </div>
                                            <h3 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{bonus.title}</h3>
                                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{bonus.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 md:mt-16 p-6 md:p-8 bg-primary rounded-[2rem] md:rounded-3xl text-primary-foreground text-center shadow-lg">
                                    <p className="font-bold text-lg md:text-xl mb-4 leading-relaxed">Total Worth: $120+ • Today it’s yours for FREE</p>

                                    {/* Countdown Timer */}
                                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                                        <div className="flex flex-col items-center">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[60px] border border-white/20">
                                                <span className="text-xl md:text-2xl font-bold font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-widest mt-1 opacity-70">Hrs</span>
                                        </div>
                                        <span className="text-xl md:text-2xl font-bold -mt-6">:</span>
                                        <div className="flex flex-col items-center">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[60px] border border-white/20">
                                                <span className="text-xl md:text-2xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-widest mt-1 opacity-70">Min</span>
                                        </div>
                                        <span className="text-xl md:text-2xl font-bold -mt-6">:</span>
                                        <div className="flex flex-col items-center">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[60px] border border-white/20">
                                                <span className="text-xl md:text-2xl font-bold font-mono font-variant-numeric:tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-widest mt-1 opacity-70">Sec</span>
                                        </div>
                                    </div>

                                    <Button variant="hero" size="lg" className="w-full md:w-auto bg-white text-primary hover:bg-white/90 shadow-xl px-12 py-6 md:py-7 text-lg font-bold" onClick={() => setShowFoundationForm(true)}>
                                        RESERVE MY FREE SPOT
                                    </Button>
                                    <p className="mt-4 text-xs opacity-70 italic">*Bonuses expire when the timer hits zero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={founderImage}
                                        alt="YogaGarhi Founder"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-card p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-primary/10 max-w-[220px] md:max-w-xs">
                                    <div className="flex gap-1 text-amber-500 mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
                                    </div>
                                    <p className="text-[10px] md:text-sm italic text-muted-foreground mb-3 md:mb-4">"Our mission is to bring people back to the roots of Yoga, where every breath becomes a doorway to inner stillness."</p>
                                    <p className="font-bold text-xs md:text-base text-foreground">Sachin Ji</p>
                                    <p className="text-[10px] md:text-xs text-muted-foreground">Founder, YogaGarhi</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold">Why Join This Foundation?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">YogaGarhi represents an authentic Himalayan lineage. We don't just teach asanas; we provide a way of living that has transformed thousands of lives.</p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Award className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Authentic Lineage</h4>
                                            <p className="text-muted-foreground">Rooted in traditional Himalayan wisdom, not commercial trends.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Users className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Proven Results</h4>
                                            <p className="text-muted-foreground">Join 2,500+ professionals who started their journey with us.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <BookOpen className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">TTC Pathway</h4>
                                            <p className="text-muted-foreground">The perfect bridge to our globally recognized Yoga Alliance certifications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground text-lg">Everything you need to know before joining.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-secondary/50 rounded-2xl border border-border px-6 py-2">
                                <AccordionTrigger className="font-heading text-lg font-bold hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-secondary/30 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div className="text-left">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 italic">Verified Google Reviews</h2>
                            <p className="text-muted-foreground flex items-center gap-2">
                                <span className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current shadow-sm" />)}
                                </span>
                                <span className="font-bold text-foreground">5.0/5 Star Rating</span> • Transformation stories from around the world
                            </p>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all"
                                onClick={() => {
                                    const container = document.getElementById('testimonial-scroll');
                                    if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                                }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all"
                                onClick={() => {
                                    const container = document.getElementById('testimonial-scroll');
                                    if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                                }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div
                        id="testimonial-scroll"
                        className="flex gap-6 md:gap-8 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((t, idx) => {
                            const isExpanded = expandedReview === idx;
                            const isLong = t.text.length > 200;
                            const displayText = isLong && !isExpanded ? t.text.slice(0, 200) + "..." : t.text;

                            return (
                                <div
                                    key={idx}
                                    className="min-w-[300px] md:min-w-[450px] bg-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-border shadow-soft italic flex flex-col snap-start transition-all hover:shadow-lg h-full max-h-fit"
                                >
                                    <div className="flex-grow pt-4">
                                        <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed line-clamp-none">
                                            "{displayText}"
                                        </p>
                                        {isLong && (
                                            <button
                                                onClick={() => setExpandedReview(isExpanded ? null : idx)}
                                                className="text-primary font-bold text-sm hover:underline mb-6 block not-italic"
                                            >
                                                {isExpanded ? "Read Less" : "Read More"}
                                            </button>
                                        )}
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-border/50">
                                        <p className="font-bold text-sm md:text-base text-foreground not-italic">{t.name}</p>
                                        <p className="text-[10px] md:text-sm text-muted-foreground not-italic">{t.role}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Custom Scroll Progress Indicator */}
                    <div className="flex justify-center mt-8">
                        <div className="w-64 h-1.5 bg-border/40 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${Math.max(10, scrollProgress)}%` }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== LIVE Q&A SESSIONS ===== */}
            <section className="py-20 bg-background relative overflow-hidden border-t border-border/30">
              <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-primary font-heading text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    Global Support
                  </span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4 leading-tight">
                    Live Support & Q&A Schedule
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Connect with our founders and lead teachers live to get answers to all your course-related questions. Select the session that best matches your local timezone.
                  </p>
                </div>

                {/* Session Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                  {/* Session A */}
                  <div className="group relative bg-card/60 backdrop-blur-md border border-border/80 hover:border-primary/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                          Session A
                        </span>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md">
                          APAC Friendly
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Asia-Pacific Friendly
                      </h3>
                      <ul className="space-y-3.5 mb-8">
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Day:</strong> Tuesday
                        </li>
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Time (Bali):</strong> 5:00 PM WITA
                        </li>
                        <li className="flex flex-col gap-1 text-xs text-muted-foreground pl-5 border-l border-border/60">
                          <span>• Sydney: 7:00 PM AEST</span>
                          <span>• US East: 7:00 AM EDT</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Best for:</strong> Australia, New Zealand, and early-rising US East Coast prospects.
                      </p>
                    </div>
                  </div>

                  {/* Session B */}
                  <div className="group relative bg-card/60 backdrop-blur-md border border-border/80 hover:border-primary/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                          Session B
                        </span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-md">
                          Europe Friendly
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Europe Friendly
                      </h3>
                      <ul className="space-y-3.5 mb-8">
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Day:</strong> Thursday
                        </li>
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Time (Bali):</strong> 7:00 PM WITA
                        </li>
                        <li className="flex flex-col gap-1 text-xs text-muted-foreground pl-5 border-l border-border/60">
                          <span>• United Kingdom: 12:00 PM BST</span>
                          <span>• Germany: 1:00 PM CEST</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Best for:</strong> UK, Germany, and the rest of Europe.
                      </p>
                    </div>
                  </div>

                  {/* Session C */}
                  <div className="group relative bg-card/60 backdrop-blur-md border border-border/80 hover:border-primary/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                          Session C
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md">
                          Americas Friendly
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Americas Friendly
                      </h3>
                      <ul className="space-y-3.5 mb-8">
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Day:</strong> Saturday
                        </li>
                        <li className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <strong>Time (Bali):</strong> 9:00 AM WITA
                        </li>
                        <li className="flex flex-col gap-1 text-xs text-muted-foreground pl-5 border-l border-border/60">
                          <span>• US West Coast: 7:00 PM (Friday)</span>
                          <span>• US East Coast: 10:00 PM (Friday)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Best for:</strong> United States and Canada.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timezone Comparison Table */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-card/40 border border-border/60 rounded-2xl p-6 md:p-8 shadow-inner backdrop-blur-sm">
                    <h4 className="font-heading text-lg font-bold text-foreground mb-6 text-center">
                      Quick Timezone Translation Table
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border/40 text-xs tracking-wider text-muted-foreground uppercase">
                            <th className="py-3 px-4">Region</th>
                            <th className="py-3 px-4">Timezone</th>
                            <th className="py-3 px-4">Your Local Time</th>
                            <th className="py-3 px-4 text-right">Bali Time (Base)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20 text-sm">
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-foreground">Australia (Sydney/Melbourne)</td>
                            <td className="py-3.5 px-4 text-muted-foreground">AEST (UTC+10/+11)</td>
                            <td className="py-3.5 px-4 text-primary font-semibold">7:00 – 8:00 PM</td>
                            <td className="py-3.5 px-4 text-right text-muted-foreground font-mono">5:00 – 6:00 PM</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-foreground">United Kingdom (London)</td>
                            <td className="py-3.5 px-4 text-muted-foreground">BST/GMT (UTC+0/+1)</td>
                            <td className="py-3.5 px-4 text-primary font-semibold">12:00 – 1:00 PM</td>
                            <td className="py-3.5 px-4 text-right text-muted-foreground font-mono">7:00 – 8:00 PM</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-foreground">
                              Germany (Berlin)
                            </td>
                            <td className="py-3.5 px-4 text-muted-foreground">CEST (UTC+1/+2)</td>
                            <td className="py-3.5 px-4 text-primary font-semibold">7:00 – 8:00 PM</td>
                            <td className="py-3.5 px-4 text-right text-muted-foreground font-mono">1:00 – 2:00 AM</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-foreground">US East Coast (New York)</td>
                            <td className="py-3.5 px-4 text-muted-foreground">EDT (UTC-4)</td>
                            <td className="py-3.5 px-4 text-primary font-semibold">7:00 – 8:00 PM</td>
                            <td className="py-3.5 px-4 text-right text-muted-foreground font-mono">6:00 – 7:00 AM</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-foreground">US West Coast (Los Angeles)</td>
                            <td className="py-3.5 px-4 text-muted-foreground">PDT (UTC-7)</td>
                            <td className="py-3.5 px-4 text-primary font-semibold">7:00 – 8:00 PM</td>
                            <td className="py-3.5 px-4 text-right text-muted-foreground font-mono">9:00 – 10:00 AM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-8 max-w-4xl mx-auto">Ready to Begin Your Yoga Teaching Path?</h2>
                    <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">Secure your spot in our next 2-Day Foundation Masterclass for <span className="text-accent underline decoration-accent/30 font-bold uppercase">Free</span> (Limited Spots Available).</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button variant="cta" size="xl" onClick={() => setShowFoundationForm(true)} className="bg-accent text-accent-foreground hover:bg-accent/90 px-12">
                            YES, LET'S BEGIN FOR FREE
                        </Button>
                        <Link href="/contact-us" className="text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity">
                            Have questions? Talk to us <MessageCircle className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-[45] bg-background/95 backdrop-blur-md border-t border-border p-3 md:p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
                <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-xl md:text-3xl font-bold text-foreground">FREE</span>
                            <span className="text-sm md:text-lg text-muted-foreground/60 line-through">$99</span>
                        </div>
                        <span className="text-[10px] md:text-xs text-red-500 font-bold tracking-tight md:tracking-normal animate-pulse">ONLY 12 SEATS LEFT</span>
                    </div>

                    <Button
                        variant="cta"
                        size="lg"
                        onClick={() => setShowFoundationForm(true)}
                        className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 md:px-10 py-5 md:py-7 rounded-xl md:rounded-2xl shadow-lg transform active:scale-95 transition-all text-sm md:text-lg font-bold group"
                    >
                        Join Now <ArrowRight className="ml-2 w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            <FoundationEnrollmentDialog
                open={showFoundationForm}
                onOpenChange={setShowFoundationForm}
            />
        </Layout>
    );
}
