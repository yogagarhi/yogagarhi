"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Sparkles, ArrowRight, ArrowLeft, Check, Star,
    Wind, Flame, Droplets, ChevronDown, Shield, Users, Award
} from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

const logoSrc = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

// ─── Quiz Data ───────────────────────────────────────────────────────────────
const quizQuestions = [
    {
        question: "How does your body typically feel in the morning?",
        emoji: "🌅",
        options: [
            { text: "Light and energetic — I'm ready to move", dosha: "vata" },
            { text: "Warm and fired up — Let's get started", dosha: "pitta" },
            { text: "Heavy and slow to start — I need time", dosha: "kapha" },
        ],
    },
    {
        question: "What describes your mental pattern under stress?",
        emoji: "🧠",
        options: [
            { text: "Racing thoughts and anxiety", dosha: "vata" },
            { text: "Irritability and intense focus", dosha: "pitta" },
            { text: "Withdrawal and low motivation", dosha: "kapha" },
        ],
    },
    {
        question: "How would you describe your natural energy rhythm?",
        emoji: "⚡",
        options: [
            { text: "Variable — I work in creative bursts", dosha: "vata" },
            { text: "Focused and consistent with clear goals", dosha: "pitta" },
            { text: "Calm, steady and very enduring", dosha: "kapha" },
        ],
    },
    {
        question: "What is your relationship with heat?",
        emoji: "🔥",
        options: [
            { text: "I love warmth and dislike the cold", dosha: "vata" },
            { text: "I run warm and prefer cool environments", dosha: "pitta" },
            { text: "I'm neutral and adaptable to temperature", dosha: "kapha" },
        ],
    },
    {
        question: "How do you typically process emotions?",
        emoji: "💫",
        options: [
            { text: "Quick to feel, quick to release", dosha: "vata" },
            { text: "Intense feelings that leave lasting impressions", dosha: "pitta" },
            { text: "Deep, slow processing — I hold on", dosha: "kapha" },
        ],
    },
    {
        question: "What best describes your lifestyle tendency?",
        emoji: "🌿",
        options: [
            { text: "I crave movement, change and variety", dosha: "vata" },
            { text: "I thrive on achievement, structure and goals", dosha: "pitta" },
            { text: "I value routine, stability and comfort", dosha: "kapha" },
        ],
    },
];

// ─── Dosha Results ────────────────────────────────────────────────────────────
const doshaResults: Record<string, { name: string; element: string; icon: React.FC<{ className?: string }>; color: string; gradient: string; border: string; headline: string; description: string; practice: string; badge: string }> = {
    vata: {
        name: "Vata",
        element: "Air & Ether",
        icon: Wind,
        color: "text-sky-600",
        gradient: "from-sky-400 to-indigo-500",
        border: "border-sky-200",
        headline: "You are a Vata soul — Creative, Free & Ethereal",
        description:
            "Your mind moves like the wind — fast, imaginative and full of ideas. You are gifted with creativity and an open heart, but you need grounding practices to channel your energy with consistency.",
        practice: "Grounding Hatha Yoga, slow Vinyasa flows, and deep Pranayama to calm your busy mind.",
        badge: "🌬️ Air Type",
    },
    pitta: {
        name: "Pitta",
        element: "Fire & Water",
        icon: Flame,
        color: "text-orange-600",
        gradient: "from-orange-400 to-red-500",
        border: "border-orange-200",
        headline: "You are a Pitta soul — Focused, Fierce & Passionate",
        description:
            "You are a natural leader with a sharp intellect and burning ambition. Your fire drives transformation — in yourself and others. Your yoga practice should channel, not amplify, your intensity.",
        practice: "Cooling Yin Yoga, moderate Vinyasa flows, and Sitali breathing to balance your inner fire.",
        badge: "🔥 Fire Type",
    },
    kapha: {
        name: "Kapha",
        element: "Earth & Water",
        icon: Droplets,
        color: "text-emerald-600",
        gradient: "from-emerald-400 to-teal-500",
        border: "border-emerald-200",
        headline: "You are a Kapha soul — Steady, Nurturing & Deep",
        description:
            "You are the bedrock that others depend on — patient, warm and deeply loving. Your practice needs to awaken and invigorate your steady nature, helping you flow more freely through transformation.",
        practice: "Dynamic Ashtanga, energising Vinyasa flows, and Kapalabhati breathing to spark your inner vitality.",
        badge: "🌊 Earth Type",
    },
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: "Aleksandra D.",
        location: "Russia",
        text: "The knowledge I gained was so deep and authentic — something you can genuinely feel in every class. Like being part of a big, warm family.",
        avatar: "A",
    },
    {
        name: "Gurpreet K.",
        location: "Canada",
        text: "From the very beginning, I felt seen and supported. The teachers genuinely care about your growth, not only as a practitioner but as a human being.",
        avatar: "G",
    },
    {
        name: "Amy L.",
        location: "Canada",
        text: "This training was the start of a beautiful yoga journey — confident enough to teach in multiple countries around the world.",
        avatar: "A",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function YogicEnergyLanding() {
    const router = useRouter();
    const [step, setStep] = useState<number>(0); // 0 = intro, 1-6 = questions, 7 = capture, 8 = done
    const [answers, setAnswers] = useState<string[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const getDominantDosha = () => {
        const counts = { vata: 0, pitta: 0, kapha: 0 };
        answers.forEach((a) => { counts[a as keyof typeof counts]++; });
        return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    };

    const handleAnswer = (dosha: string) => {
        const newAnswers = [...answers, dosha];
        setAnswers(newAnswers);
        if (newAnswers.length < 6) {
            setStep(newAnswers.length + 1);
        } else {
            setStep(7);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) { setError("Please enter your name and email."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
        setError("");
        setIsSubmitting(true);
        const dosha = getDominantDosha();
        const result = doshaResults[dosha];
        try {
            await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    _subject: `Yogic Energy Quiz Result: ${result.name.toUpperCase()} — ${name}`,
                    source: "Yogic Energy Landing Page — Meta Ad",
                    form_type: "prakriti_quiz_landing",
                    dominant_dosha: dosha,
                    answers: answers.join(", "),
                    _autoresponder: `Namaste ${name},\n\nYou are a ${result.name} type — ${result.element}.\n\n${result.description}\n\nYOUR IDEAL YOGA PRACTICE:\n${result.practice}\n\nOur teachers will reach out within 24 hours with a personalised yoga plan for your energy type.\n\nWith respect,\nYogaGarhi — Bali & Rishikesh`,
                }),
            });
            router.push(`/thank-you?type=quiz&name=${dosha}`);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentQuestion = step >= 1 && step <= 6 ? quizQuestions[step - 1] : null;
    const progress = step === 0 ? 0 : Math.min((step / 6) * 100, 100);

    return (
        <div className="min-h-screen bg-[#FBF8F3] flex flex-col">
            {/* ── Logo at Top ── */}
            <div className="w-full flex justify-center bg-[#FBF8F3] py-8">
                <div className="flex flex-col items-center gap-1">
                    {/* Spiral icon */}
                    <Image
                        src={logoSrc}
                        alt="YogaGarhi spiral logo"
                        width={72}
                        height={72}
                        className="object-contain w-16 h-16"
                        priority
                    />
                    {/* YOGAGARHI — same style as Header */}
                    <span className="font-heading font-bold text-primary text-2xl tracking-[0.15em] uppercase mt-1">
                        YOGAGARHI
                    </span>
                    {/* Tagline with decorative lines */}
                    <div className="flex items-center gap-3 mt-0.5">
                        <span className="block w-8 h-px bg-[#2D7A70]/40" />
                        <span className="text-[10px] text-muted-foreground tracking-[0.22em] uppercase font-medium">
                            Authentic Yoga School in Bali
                        </span>
                        <span className="block w-8 h-px bg-[#2D7A70]/40" />
                    </div>
                </div>
            </div>

            <main className="flex-1 flex flex-col items-center px-4 pb-16">

                {/* ── INTRO SECTION ── */}
                {step === 0 && (
                    <div className="w-full max-w-2xl pt-8 pb-4 flex flex-col items-center text-center">

                        {/* Hero Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6">
                            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                            <span className="text-sm font-semibold text-amber-700">Free Prakriti Quiz — Takes 30 Seconds</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1A4D45] leading-tight mb-4">
                            What Is Your <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Unique Yogic Energy?</span>
                        </h1>
                        <p className="text-lg text-[#1A4D45]/70 max-w-lg leading-relaxed mb-8">
                            Answer 6 simple questions to discover your Dosha — and the exact yoga practice that will <strong className="text-[#1A4D45]">transform your body, calm your mind</strong>, and awaken your true nature.
                        </p>

                        {/* Visual energy types preview */}
                        <div className="flex items-center justify-center gap-4 mb-10 w-full max-w-sm">
                            {[
                                { label: "Vata", emoji: "🌬️", color: "bg-sky-50 border-sky-200 text-sky-700" },
                                { label: "Pitta", emoji: "🔥", color: "bg-orange-50 border-orange-200 text-orange-700" },
                                { label: "Kapha", emoji: "🌊", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                            ].map((d) => (
                                <div key={d.label} className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 rounded-2xl border ${d.color} text-sm font-semibold`}>
                                    <span className="text-2xl">{d.emoji}</span>
                                    {d.label}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => setStep(1)}
                            className="relative w-full max-w-md h-16 text-lg font-bold rounded-2xl overflow-hidden group
                bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
                text-white shadow-2xl shadow-orange-500/40
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                Reveal My Yogic Energy Type
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </button>

                        <p className="mt-4 text-sm text-[#1A4D45]/50">
                            Free · No credit card · Trusted by 500+ yoga students worldwide
                        </p>

                        {/* Scroll cue */}
                        <ChevronDown className="w-5 h-5 text-[#1A4D45]/30 mt-8 animate-bounce" />

                        {/* Trust strip */}
                        <div className="mt-10 w-full grid grid-cols-3 gap-3 text-center">
                            {[
                                { icon: Award, label: "Yoga Alliance", sub: "Certified School" },
                                { icon: Users, label: "500+ Graduates", sub: "Worldwide" },
                                { icon: Star, label: "5★ Rated", sub: "On Google" },
                            ].map(({ icon: Icon, label, sub }) => (
                                <div key={label} className="flex flex-col items-center gap-1 py-4 rounded-2xl bg-white border border-[#2D7A70]/10">
                                    <Icon className="w-5 h-5 text-[#2D7A70]" />
                                    <p className="text-xs font-bold text-[#1A4D45]">{label}</p>
                                    <p className="text-xs text-[#1A4D45]/50">{sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── QUIZ QUESTIONS (Steps 1–6) ── */}
                {step >= 1 && step <= 6 && currentQuestion && (
                    <div className="w-full max-w-xl pt-8 flex flex-col gap-6">

                        {/* Progress */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-[#1A4D45]/60 font-medium px-1">
                                <span>Question {step} of 6</span>
                                <span>{Math.round(progress)}% complete</span>
                            </div>
                            <div className="h-2 bg-[#2D7A70]/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white rounded-3xl shadow-lg border border-[#2D7A70]/10 p-8">
                            <div className="text-5xl text-center mb-4">{currentQuestion.emoji}</div>
                            <h2 className="font-heading text-2xl font-bold text-[#1A4D45] text-center mb-6 leading-snug">
                                {currentQuestion.question}
                            </h2>

                            <div className="flex flex-col gap-3">
                                {currentQuestion.options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(opt.dosha)}
                                        className="w-full p-5 text-left rounded-2xl border-2 border-[#2D7A70]/10 bg-[#FBF8F3]
                      hover:border-orange-400 hover:bg-orange-50
                      active:scale-[0.98]
                      transition-all duration-200
                      text-[#1A4D45] font-medium text-base
                      group flex items-center gap-4"
                                    >
                                        <span className="w-8 h-8 rounded-full border-2 border-[#2D7A70]/20 group-hover:border-orange-400 group-hover:bg-orange-100 flex items-center justify-center text-sm font-bold text-[#1A4D45]/50 group-hover:text-orange-600 transition-all flex-shrink-0">
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        {opt.text}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {step > 1 && (
                            <button
                                onClick={() => { setAnswers(answers.slice(0, -1)); setStep(step - 1); }}
                                className="flex items-center gap-1.5 text-sm text-[#1A4D45]/50 hover:text-[#1A4D45] transition-colors self-start"
                            >
                                <ArrowLeft className="w-4 h-4" /> Go back
                            </button>
                        )}
                    </div>
                )}

                {/* ── EMAIL CAPTURE (Step 7) ── */}
                {step === 7 && (
                    <div className="w-full max-w-xl pt-8 flex flex-col gap-6">
                        <div className="bg-white rounded-3xl shadow-lg border border-[#2D7A70]/10 p-8 text-center">

                            {/* Success icon */}
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-5">
                                <Check className="w-10 h-10 text-orange-500" />
                            </div>

                            <h2 className="font-heading text-2xl font-bold text-[#1A4D45] mb-2">
                                Your result is ready! ✨
                            </h2>
                            <p className="text-[#1A4D45]/70 mb-8 leading-relaxed">
                                Enter your details and we'll instantly reveal your unique yogic energy type — along with a personalised yoga practice recommendation.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                                <div>
                                    <label className="text-sm font-semibold text-[#1A4D45] block mb-1.5">Your Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full h-12 px-4 rounded-xl border-2 border-[#2D7A70]/15 bg-[#FBF8F3] focus:border-[#2D7A70] focus:outline-none transition-colors text-[#1A4D45]"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-[#1A4D45] block mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full h-12 px-4 rounded-xl border-2 border-[#2D7A70]/15 bg-[#FBF8F3] focus:border-[#2D7A70] focus:outline-none transition-colors text-[#1A4D45]"
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative w-full h-14 text-base font-bold rounded-2xl overflow-hidden group
                    bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
                    text-white shadow-xl shadow-orange-500/40
                    hover:scale-[1.02] active:scale-[0.98]
                    disabled:opacity-70 disabled:scale-100
                    transition-all duration-300 mt-2"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? "Revealing..." : (
                                            <>
                                                <Sparkles className="w-5 h-5" />
                                                Reveal My Energy Type →
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </button>

                                <p className="text-xs text-center text-[#1A4D45]/40">
                                    We respect your privacy. No spam, ever. Unsubscribe anytime.
                                </p>
                            </form>
                        </div>
                    </div>
                )}

                {/* ── TESTIMONIALS ── */}
                {step === 0 && (
                    <div className="w-full max-w-2xl mt-12">
                        <h2 className="font-heading text-2xl font-bold text-center text-[#1A4D45] mb-6">
                            What Our Students Say
                        </h2>
                        <div className="flex flex-col gap-4">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-[#2D7A70]/10 shadow-sm">
                                    <div className="flex items-center gap-0.5 mb-3">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-[#1A4D45]/80 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#2D7A70]/10 flex items-center justify-center font-bold text-[#2D7A70] text-sm">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1A4D45]">{t.name}</p>
                                            <p className="text-xs text-[#1A4D45]/50">{t.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA — 2 Days Free Program */}
                        <div className="mt-8 text-center">
                            <Link
                                href="/teacher-training-foundation"
                                className="relative w-full max-w-md h-16 text-lg font-bold rounded-2xl overflow-hidden group
                  bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
                  text-white shadow-2xl shadow-orange-500/40
                  hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-300 flex items-center justify-center mx-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    Join 2 Days Free Yoga Teacher Training
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </Link>
                        </div>
                    </div>
                )}

            </main>

            {/* ── Sticky Bottom CTA (only on intro) ── */}
            {step === 0 && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-[#2D7A70]/10 shadow-lg z-40 sm:hidden">
                    <Link
                        href="/teacher-training-foundation"
                        className="w-full h-14 text-base font-bold rounded-2xl
              bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
              text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-4 h-4" />
                        Join 2 Days Free Training
                    </Link>
                </div>
            )}

            {/* ── Footer ── */}
            <footer className="text-center py-6 text-xs text-[#1A4D45]/40 border-t border-[#2D7A70]/10">
                © {new Date().getFullYear()} YogaGarhi · Bali & Rishikesh ·{" "}
                <a href="/privacy-policy" className="hover:text-[#2D7A70] underline">Privacy</a> ·{" "}
                <a href="/contact" className="hover:text-[#2D7A70] underline">Contact</a>
            </footer>
        </div>
    );
}
