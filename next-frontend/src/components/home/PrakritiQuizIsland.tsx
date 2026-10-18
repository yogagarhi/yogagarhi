"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, ArrowRight, Check } from "lucide-react";

// Yogic Energy Quiz Questions
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

export default function PrakritiQuizIsland() {
  const router = useRouter();
  const locale = useLocale();
  const tCommon = useTranslations("common");
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
  };

  const handleQuizAnswer = (dosha: string) => {
    setQuizAnswers([...quizAnswers, dosha]);
    setQuizStep(quizStep + 1);
  };

  // Calculate dominant dosha from answers
  const getDominantDosha = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    quizAnswers.forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });
    return Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const handleQuizSubmit = async () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    const dominantDosha = getDominantDosha();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: locale,
          email: email,
          _subject: `Prakriti Quiz Result: ${dominantDosha.toUpperCase()}`,
          _autoresponder: `Namaste,

Thank you for discovering your Prakriti (yogic constitution) with YogaGarhi!

Your dominant Dosha is: ${dominantDosha.toUpperCase()}

This unique constitution is the blueprint of your nature, and understanding it is the first step toward a balanced yoga practice. We are preparing a detailed analysis of your results and tips on how to align your yoga practice with your energy.

Our lead teachers will review your answers and reach out to you within 24 hours with more insights on how our Multi-Style training can specifically support your ${dominantDosha.toUpperCase()} nature.

Until then, stay conscious and breathe deep.

With respect,
YogaGarhi – Bali`,
          source: "WhyOneStyle Section - Quiz",
          form_type: "prakriti_quiz",
          dominant_dosha: dominantDosha,
          q1_morning_feel: quizAnswers[0],
          q2_stress_pattern: quizAnswers[1],
          q3_energy_rhythm: quizAnswers[2],
          q4_heat_relation: quizAnswers[3],
          q5_emotional_processing: quizAnswers[4],
          q6_lifestyle_tendency: quizAnswers[5],
        }),
      });

      if (response.ok) {
        setShowQuizDialog(false);
        router.push(`/thank-you?type=quiz&name=${dominantDosha}`);
      } else {
        throw new Error("Failed to send quiz results");
      }
    } catch (error) {
      console.error(error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <Dialog
        open={showQuizDialog}
        onOpenChange={(open) => {
          setShowQuizDialog(open);
          if (!open) resetQuiz();
        }}
      >
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="
              relative overflow-hidden
              bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 
              bg-[length:200%_100%]
              hover:bg-[position:100%_0]
              text-white font-semibold 
              shadow-lg hover:shadow-xl
              transition-all duration-500
              group
            "
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            {tCommon("revealYogicEnergy")}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-lg border-primary/20">
          <DialogHeader>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
            <DialogTitle className="font-heading text-2xl text-center">
              {quizStep < quizQuestions.length
                ? "Discover Your Yogic Energy"
                : "Your Insight Awaits"}
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-sm mt-1">
              {quizStep < quizQuestions.length
                ? `Step ${quizStep + 1} of ${quizQuestions.length}: Understand your unique constitution.`
                : "Enter your details to receive your personalized analysis."}
            </DialogDescription>
          </DialogHeader>

          <div className="pt-4">
            {quizStep < quizQuestions.length ? (
              <div className="space-y-6">
                {/* Progress bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="text-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {quizStep + 1} of {quizQuestions.length}
                  </span>
                </div>

                <p className="text-center font-medium text-lg text-foreground">
                  {quizQuestions[quizStep].question}
                </p>

                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuizAnswer(option.dosha)}
                      className="
                        w-full p-4 text-left rounded-xl 
                        border-2 border-border 
                        hover:border-primary hover:bg-primary/5 
                        transition-all duration-300
                        hover:translate-x-1 hover:shadow-md
                        group
                      "
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors flex items-center justify-center text-xs font-medium text-muted-foreground">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <div className="py-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mb-4">
                    <Check className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                  </div>
                  <p className="text-muted-foreground">
                    Thank you for sharing. Enter your email to receive
                    your personalized yogic energy insight.
                  </p>
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address *"
                    className={`
                      w-full px-4 py-3 rounded-xl border-2 bg-background 
                      focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                      transition-all duration-300
                      ${emailError ? "border-red-500" : "border-border"}
                    `}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                  size="lg"
                  disabled={isSubmitting}
                  onClick={handleQuizSubmit}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Receive My Insight"}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
        Answer 6 simple questions to understand your natural tendencies and how they influence your yoga practice
      </p>
    </div>
  );
}
