"use client";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    GraduationCap, BookOpen, Heart,
    Sparkles, CheckCircle2, Star,
    ChevronRight, Mail, Send, Check, X,
    Home, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import SacredGeometryBackground from "@/components/3d/SacredGeometryBackground";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { getCloudinaryImage } from "@/utils/cloudinary";

const logoImage = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

// Pre-YTTC Support Items
const preYTTCItems = [
    { icon: "📖", title: "Prepare Your Body", desc: "Start with gentle practices to prepare physically" },
    { icon: "🎯", title: "Get Familiar with Curriculum", desc: "Preview subjects and teaching methodology" },
    { icon: "🧘", title: "Understand Basic Concepts", desc: "Learn foundational yogic principles" },
    { icon: "💪", title: "Feel Confident & Clear", desc: "Arrive grounded, not overwhelmed" },
];

export default function PreYTTCPrep() {
    const router = useRouter();
    const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setShowEnrollDialog } = useEnrollment();

    const isValidEmail = email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
                    _subject: "New \"Before You Join\" Guide Request (Landing Page)",
                    _autoresponder: "Namaste! Thank you for requesting our \"Before You Join\" preparation guide. It's being sent to your email right now."
                }),
            });

            if (response.ok) {
                setShowPreYTTCDialog(false);
                setEmail("");
                // Redirect to thank you page
                setTimeout(() => {
                    router.push('/thank-you?type=guide-prep');
                }, 800);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-background min-h-screen">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Image
                                src={logoImage}
                                alt="YogaGarhi"
                                className="object-contain h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-primary text-sm sm:text-lg tracking-wide">
                                YOGAGARHI
                            </span>
                            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                                Transform Within
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/100-hour-yoga-teacher-training-in-bali" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Courses</Link>
                        <Link href="/contact" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Contact</Link>
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
                            Revolutionary Pre-YTTC Support
                        </div>
                        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
                            Don't Jump Into Transformation — <span className="text-primary italic">Be Gently Prepared For It</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                            At Yogagarhi, we believe your journey starts long before you arrive in Bali.
                            Our exclusive "Before You Join" program ensures you arrive grounded, confident, and ready for deep transformation.
                        </p>

                        {/* Top CTA Buttons - Visible Immediately */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button
                                onClick={() => setShowPreYTTCDialog(true)}
                                className="group relative h-16 overflow-hidden rounded-full px-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.4)] transition-all duration-300 border-0 flex-1 sm:flex-none"
                            >
                                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative flex items-center gap-2 text-lg">
                                    <Mail className="w-5 h-5" />
                                    Get Free Prep Guide
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>

                            <Button
                                onClick={() => setShowEnrollDialog(true)}
                                variant="outline"
                                className="h-16 rounded-full px-10 text-lg font-bold border-2 bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all flex-1 sm:flex-none border-primary/20"
                            >
                                Begin Your Journey
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 animate-pulse">
                            <Heart className="w-4 h-4 text-primary" />
                            Limited spots available for 2026 batches
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto border-t border-border/50 pt-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Interactive Card */}
                            <div className="relative group">
                                <div className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/20 rounded-[2.5rem] p-8 md:p-12 border border-amber-200/50 dark:border-amber-800/30 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)]">
                                    {/* 3D Sacred Geometry */}
                                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                        <Suspense fallback={<div className="w-full h-full" />}>
                                            <SacredGeometryBackground />
                                        </Suspense>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs md:text-sm font-bold mb-8 shadow-lg">
                                            <Star className="w-4 h-4 fill-white" />
                                            WORLD'S FIRST PRE-YTTC SCHOOL
                                        </div>

                                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                                            Begin Before You Begin
                                        </h2>

                                        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                            The <span className="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-sm font-bold border border-amber-200 dark:border-amber-700">Optional Complimentary Online</span> preparation
                                            is designed for those who want to arrive feeling 100% ready.
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
                                                        <h4 className="font-heading font-bold text-foreground group-hover/item:text-amber-600 transition-colors">
                                                            {item.title}
                                                        </h4>
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
                                        <span className="text-sm font-bold uppercase tracking-widest">Complimentary & Optional</span>
                                    </div>

                                    <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                        Start Your Transformation <span className="text-primary">Today</span>, Not Just in Bali.
                                    </h3>

                                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            Most yoga schools throw you straight into an intensive schedule. At Yogagarhi, we do something different.
                                        </p>
                                        <p>
                                            We offer a comprehensive "Before You Join" Online Preparation Program so that when training begins, <span className="text-foreground font-semibold underline decoration-primary/30 decoration-4">you don't panic</span>.
                                        </p>
                                        <p>
                                            You arrive grounded. You arrive clear. You arrive ready to embrace the life-changing experience awaiting you.
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
                            "The depth of transformation depends on the quality of preparation.
                            Our mission is to support you every step of the way—even before you step foot on the mat in Bali."
                        </p>
                        <footer className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
                            <cite className="not-italic font-bold text-lg">YogaGarhi Leadership Team</cite>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Bali, Indonesia</span>
                        </footer>
                    </blockquote>
                </div>
            </section>

            {/* Dialogs */}
            <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
                <DialogContent className="sm:max-w-md border-0 shadow-2xl p-0 overflow-hidden bg-background">
                    <div className="h-24 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                        <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-8">
                        <DialogHeader className="text-center space-y-2 mb-8">
                            <DialogTitle className="font-heading text-3xl font-bold">Free Prep Guide</DialogTitle>
                            <DialogDescription className="text-lg">
                                Enter your email to receive our exclusive "Before You Join" roadmap for 2026.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="Your best email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-12 h-14 rounded-xl border-2 focus:border-amber-500 text-lg"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={!isValidEmail || isSubmitting}
                                className="w-full h-14 rounded-xl font-bold text-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 transition-all text-white"
                            >
                                {isSubmitting ? "Sending..." : "Send My Guide Now"}
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
