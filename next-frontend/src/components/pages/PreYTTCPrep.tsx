"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
    Heart, Sparkles, CheckCircle2, Star, Mail, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SacredGeometryLazy from "@/components/3d/SacredGeometryLazy";
import { getCloudinaryImage } from "@/utils/cloudinary";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const logoImage = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

// Pre-YTTC Support Items (English default / baseline)
const preYTTCItemsEn = [
    { icon: "📖", title: "Prepare Your Body", desc: "Start with gentle practices to prepare physically" },
    { icon: "🎯", title: "Get Familiar with Curriculum", desc: "Preview subjects and teaching methodology" },
    { icon: "🧘", title: "Understand Basic Concepts", desc: "Learn foundational yogic principles" },
    { icon: "💪", title: "Feel Confident & Clear", desc: "Arrive grounded, not overwhelmed" },
];

interface PreYTTCPrepProps {
    locale?: string;
}

export default function PreYTTCPrep({ locale: propLocale }: PreYTTCPrepProps) {
    const hookLocale = useLocale();
    const locale = propLocale || hookLocale || "en";
    const isEn = locale === "en";
    const t = useTranslations("preYttc");

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidEmail = email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Items mapped by locale
    let preYTTCItems = preYTTCItemsEn;
    if (!isEn) {
        try {
            const rawItems = t.raw("card.items");
            if (Array.isArray(rawItems) && rawItems.length === 4) {
                preYTTCItems = preYTTCItemsEn.map((item, idx) => ({
                    ...item,
                    title: rawItems[idx].title || item.title,
                    desc: rawItems[idx].desc || item.desc,
                }));
            }
        } catch (e) {
            preYTTCItems = preYTTCItemsEn;
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidEmail) return;
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    language: locale,
                    _subject: "New \"Before You Join\" Guide Request (Landing Page)",
                    _autoresponder: "Namaste! Thank you for requesting our \"Before You Join\" preparation guide. It's being sent to your email right now."
                }),
            });

            if (response.ok) {
                setEmail("");
                const redirectPath = isEn ? '/thank-you?type=guide-prep' : `/${locale}/thank-you?type=guide-prep`;
                setTimeout(() => {
                    router.push(redirectPath);
                }, 800);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const coursesLink = isEn ? "/100-hour-yoga-teacher-training-in-bali" : `/${locale}/100-hour-yoga-teacher-training-in-bali`;
    const contactLink = isEn ? "/contact-us" : `/${locale}/contact-us`;

    return (
        <div className="bg-background min-h-screen">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href={isEn ? "/" : `/${locale}`} className="flex items-center gap-2 group">
                        <div className="relative">
                            <Image
                                src={logoImage}
                                alt="YogaGarhi"
                                width={48}
                                height={48}
                                className="object-contain h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-primary text-sm sm:text-lg tracking-wide">
                                YOGAGARHI
                            </span>
                            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                                {isEn ? "Transform Within" : t("nav.transformWithin")}
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href={coursesLink} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                            {isEn ? "Courses" : t("nav.courses")}
                        </Link>
                        <Link href={contactLink} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                            {isEn ? "Contact" : t("nav.contact")}
                        </Link>
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                            <Sparkles className="w-4 h-4" />
                            {isEn ? "Revolutionary Pre-YTTC Support" : t("hero.badge")}
                        </div>
                        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
                            {isEn ? "Don't Jump Into Transformation — " : `${t("hero.titlePart1")} `}
                            <span className="text-primary italic">
                                {isEn ? "Be Gently Prepared For It" : t("hero.titleHighlight")}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                            {isEn 
                                ? "At Yogagarhi, we believe your journey starts long before you arrive in Bali. Our exclusive \"Before You Join\" program ensures you arrive grounded, confident, and ready for deep transformation." 
                                : t("hero.description")}
                        </p>

                        {/* Inline Email Capture Form */}
                        <div className="max-w-xl mx-auto mb-10">
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 p-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-[2rem] border border-primary/20 shadow-xl">
                                <div className="relative flex-1 group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <Input
                                        type="email"
                                        placeholder={isEn ? "Enter your email for the guide" : t("hero.form.emailPlaceholder")}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 pl-12 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg rounded-full"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={!isValidEmail || isSubmitting}
                                    className="h-14 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        isEn ? "Sending..." : t("hero.form.submitting")
                                    ) : (
                                        <>
                                            {isEn ? "Get Free Prep Guide" : t("hero.form.submitBtn")}
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 animate-pulse">
                            <Heart className="w-4 h-4 text-primary" />
                            {isEn ? "Limited spots available for 2026 batches" : t("hero.form.limitedSpots")}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto border-t border-border/50 pt-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Interactive Card */}
                            <div className="relative group">
                                <div className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/20 rounded-[2.5rem] p-8 md:p-12 border border-amber-200/50 dark:border-amber-800/30 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)]">
                                    {/* 3D Sacred Geometry with SVG Fallback */}
                                    <SacredGeometryLazy />

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs md:text-sm font-bold mb-8 shadow-lg">
                                            <Star className="w-4 h-4 fill-white" />
                                            {isEn ? "WORLD'S FIRST PRE-YTTC SCHOOL" : t("card.badge")}
                                        </div>

                                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                                            {isEn ? "Begin Before You Begin" : t("card.title")}
                                        </h2>

                                        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                            {isEn ? "The " : `${t("card.descPart1")} `}
                                            <span className="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-sm font-bold border border-amber-200 dark:border-amber-700">
                                                {isEn ? "Optional Complimentary Online" : t("card.descBadge")}
                                            </span>
                                            {isEn ? " preparation is designed for those who want to arrive feeling 100% ready." : ` ${t("card.descPart2")}`}
                                        </p>

                                        <div className="space-y-4">
                                            {preYTTCItems.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4 p-5 bg-white/95 dark:bg-background/95 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400 group/item transition-all duration-300 backdrop-blur-sm shadow-sm"
                                                >
                                                    <div className="text-3xl bg-amber-50 dark:bg-amber-900/20 w-12 h-12 flex items-center justify-center rounded-xl shrink-0">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-heading font-bold text-foreground group-hover/item:text-amber-600 transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content Section */}
                            <div className="lg:pl-8 space-y-8">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 text-primary">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest">
                                            {isEn ? "Complimentary & Optional" : t("content.badge")}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                        {isEn ? "Start Your Transformation " : `${t("content.headingPart1")} `}
                                        <span className="text-primary">
                                            {isEn ? "Today" : t("content.headingToday")}
                                        </span>
                                        {isEn ? ", Not Just in Bali." : t("content.headingPart2")}
                                    </h3>

                                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            {isEn 
                                                ? "Most yoga schools throw you straight into an intensive schedule. At Yogagarhi, we do something different." 
                                                : t("content.para1")}
                                        </p>
                                        <p>
                                            {isEn 
                                                ? "We offer a comprehensive \"Before You Join\" Online Preparation Program so that when training begins, " 
                                                : `${t("content.para2Part1")} `}
                                            <span className="text-foreground font-semibold underline decoration-primary/30 decoration-4">
                                                {isEn ? "you don't panic" : t("content.para2Panic")}
                                            </span>
                                            {isEn ? "." : t("content.para2Part2")}
                                        </p>
                                        <p>
                                            {isEn 
                                                ? "You arrive grounded. You arrive clear. You arrive ready to embrace the life-changing experience awaiting you." 
                                                : t("content.para3")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Quote Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <blockquote className="space-y-6">
                        <p className="font-heading text-2xl md:text-3xl italic text-foreground/80 leading-relaxed">
                            {isEn 
                                ? "\"The depth of transformation depends on the quality of preparation. Our mission is to support you every step of the way—even before you step foot on the mat in Bali.\"" 
                                : t("quote.text")}
                        </p>
                        <footer className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
                            <cite className="not-italic font-bold text-lg">
                                {isEn ? "YogaGarhi Leadership Team" : t("quote.author")}
                            </cite>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">
                                {isEn ? "Bali, Indonesia" : t("quote.location")}
                            </span>
                        </footer>
                    </blockquote>
                </div>
            </section>

        </div>
    );
}
