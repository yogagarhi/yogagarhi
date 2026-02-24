"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Check, ArrowRight, X } from "lucide-react";

// Yogic Energy Quiz Questions (Dosha Test)
const quizQuestions = [
    {
        question: "How does your body typically feel in the morning?",
        options: [
            { text: "Light and energetic", dosha: "vata" },
            { text: "Warm and ready to go", dosha: "pitta" },
            { text: "Heavy and slow to start", dosha: "kapha" },
        ],
    },
    {
        question: "What describes your mental pattern during stress?",
        options: [
            { text: "Racing thoughts, anxiety", dosha: "vata" },
            { text: "Irritability, intensity", dosha: "pitta" },
            { text: "Withdrawal, lethargy", dosha: "kapha" },
        ],
    },
    {
        question: "How would you describe your natural energy rhythm?",
        options: [
            { text: "Variable, creative bursts", dosha: "vata" },
            { text: "Focused, consistent drive", dosha: "pitta" },
            { text: "Calm, steady, enduring", dosha: "kapha" },
        ],
    },
    {
        question: "What is your relationship with heat?",
        options: [
            { text: "Prefer warmth, dislike cold", dosha: "vata" },
            { text: "Run warm, seek cooling", dosha: "pitta" },
            { text: "Neutral, adaptable", dosha: "kapha" },
        ],
    },
    {
        question: "How do you typically process emotions?",
        options: [
            { text: "Quick to feel, quick to release", dosha: "vata" },
            { text: "Intense, lasting impressions", dosha: "pitta" },
            { text: "Deep, slow processing", dosha: "kapha" },
        ],
    },
    {
        question: "What describes your lifestyle tendency?",
        options: [
            { text: "Movement, change, variety", dosha: "vata" },
            { text: "Achievement, structure, goals", dosha: "pitta" },
            { text: "Routine, stability, comfort", dosha: "kapha" },
        ],
    },
];

interface YogicEnergyContextType {
    showYogicEnergy: boolean;
    setShowYogicEnergy: (show: boolean) => void;
}

const YogicEnergyContext = createContext<YogicEnergyContextType | undefined>(undefined);

export function useYogicEnergy() {
    const context = useContext(YogicEnergyContext);
    if (!context) {
        throw new Error("useYogicEnergy must be used within a YogicEnergyProvider");
    }
    return context;
}

export function YogicEnergyProvider({ children }: { children: ReactNode }) {
    const [showYogicEnergy, setShowYogicEnergy] = useState(false);
    const [quizStep, setQuizStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const handleOpenChange = (open: boolean) => {
        setShowYogicEnergy(open);
        if (!open) {
            setQuizStep(0);
            setQuizAnswers([]);
            setEmail("");
            setName("");
        }
    };

    const handleQuizAnswer = (dosha: string) => {
        setQuizAnswers([...quizAnswers, dosha]);
        setQuizStep(quizStep + 1);
    };

    const getDominantDosha = () => {
        const counts = { vata: 0, pitta: 0, kapha: 0 };
        quizAnswers.forEach(answer => {
            counts[answer as keyof typeof counts]++;
        });
        return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const dominantDosha = getDominantDosha();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    _subject: `Yogic Energy (Prakriti) Quiz Result: ${dominantDosha.toUpperCase()}`,
                    _autoresponder: `Namaste ${name},

Thank you for discovering your Prakriti (yogic constitution) with YogaGarhi!

Your dominant Dosha is: ${dominantDosha.toUpperCase()}

This unique constitution is the blueprint of your nature, and understanding it is the first step toward a balanced yoga practice. We are preparing a detailed analysis of your results and tips on how to align your yoga practice with your energy.

Our lead teachers will review your answers and reach out to you within 24 hours with more insights.

Until then, stay conscious and breathe deep.

With respect,
YogaGarhi – Bali`,
                    source: "Yogic Energy Dialog - Quiz",
                    form_type: "prakriti_quiz",
                    dominant_dosha: dominantDosha,
                    results: quizAnswers
                })
            });

            if (response.ok) {
                setShowYogicEnergy(false);
                router.push(`/thank-you?type=quiz&name=${dominantDosha}`);
            } else {
                throw new Error('Failed to send quiz results');
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <YogicEnergyContext.Provider value={{ showYogicEnergy, setShowYogicEnergy }}>
            {children}
            <Dialog open={showYogicEnergy} onOpenChange={handleOpenChange}>
                <DialogContent className="sm:max-w-md bg-[#FDFBF7] border-none shadow-2xl rounded-3xl overflow-hidden p-0">
                    <div className="p-8">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-center font-heading text-3xl text-[#2D7A70] tracking-tight leading-tight">
                                {quizStep < quizQuestions.length
                                    ? "Discover Your Yogic Energy"
                                    : "Your Insight Awaits"}
                            </DialogTitle>
                            <DialogDescription className="text-center text-[#1A4D45]/70 mt-2 text-base">
                                {quizStep < quizQuestions.length
                                    ? `Question ${quizStep + 1} of ${quizQuestions.length}: How does your body typically feel in the morning?`
                                    : "Enter your details to receive your personalized yogic energy analysis."}
                            </DialogDescription>
                        </DialogHeader>

                        {quizStep < quizQuestions.length ? (
                            <div className="space-y-4">
                                {/* Custom Progress Dots */}
                                <div className="flex justify-center gap-2 mb-6">
                                    {quizQuestions.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === quizStep ? "w-6 bg-[#2D7A70]" : "w-1.5 bg-[#2D7A70]/20"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    {quizQuestions[quizStep].options.map((option, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleQuizAnswer(option.dosha)}
                                            className="
                        w-full p-5 text-center rounded-2xl 
                        border border-[#2D7A70]/10 bg-white/50
                        hover:border-[#2D7A70] hover:bg-white
                        transition-all duration-300
                        hover:shadow-md active:scale-[0.98]
                        text-[#1A4D45] font-medium text-lg
                        group
                      "
                                        >
                                            {option.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="quiz-name" className="text-[#1A4D45] font-semibold text-sm">Full Name *</Label>
                                    <Input
                                        id="quiz-name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="bg-white/80 border-teal-100 focus:border-[#87BCB4] rounded-xl h-12"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="quiz-email" className="text-[#1A4D45] font-semibold text-sm">Email *</Label>
                                    <Input
                                        id="quiz-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-white/80 border-teal-100 focus:border-[#87BCB4] rounded-xl h-12"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !name || !email}
                                    className="w-full bg-[#2D7A70] hover:bg-[#1A4D45] text-white rounded-xl h-14 text-lg font-bold shadow-lg mt-4"
                                >
                                    {isSubmitting ? "Submitting..." : "Reveal My Energy"}
                                </Button>
                            </form>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </YogicEnergyContext.Provider>
    );
}
