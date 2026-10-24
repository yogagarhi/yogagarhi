"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
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
import { Loader2, Sparkles } from "lucide-react";

interface FoundationEnrollmentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    locale?: string;
}

export default function FoundationEnrollmentDialog({ open, onOpenChange, locale: propLocale }: FoundationEnrollmentDialogProps) {
    const hookLocale = useLocale();
    const locale = propLocale || hookLocale || "en";
    const isEn = locale === "en";
    const t = useTranslations("foundation.dialog");

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    course: "2-Day Foundation Workshop (Free)",
                    language: locale,
                    _subject: `New Free Workshop Registration from ${formData.name}`,
                    _autoresponder: `Namaste ${formData.name}! 

Thank you for registering for our 2-Day Yoga Teacher Training Foundation Masterclass (Free). We have received your request.

Our team will contact you shortly with the session links and welcome kit. 

We look forward to beginning this journey with you!

With respect,
YogaGarhi Team`
                }),
            });

            if (response.ok) {
                toast({
                    title: isEn ? "Registration Successful!" : (t("toastSuccessTitle") || "Registration Successful!"),
                    description: isEn ? "Namaste! We've received your details." : (t("toastSuccessDesc") || "Namaste! We've received your details."),
                });
                onOpenChange(false);
                const redirectPath = isEn ? '/thank-you?type=foundation' : `/${locale}/thank-you?type=foundation`;
                router.push(redirectPath);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            toast({
                title: isEn ? "Something went wrong" : (t("toastErrorTitle") || "Something went wrong"),
                description: isEn ? "Please try again or contact us directly." : (t("toastErrorDesc") || "Please try again or contact us directly."),
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-8">
                <DialogHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="font-heading text-2xl font-bold">
                        {isEn ? "Claim Your Free Spot" : t("title")}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground mt-2">
                        {isEn ? "Enter your details below to get instant access to the Foundation Masterclass." : t("desc")}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="foundation-name" className="text-sm font-semibold">
                            {isEn ? "Full Name" : t("nameLabel")}
                        </Label>
                        <Input
                            id="foundation-name"
                            placeholder={isEn ? "Enter your name" : t("namePlaceholder")}
                            required
                            className="h-12 border-border/50 focus:ring-primary"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="foundation-email" className="text-sm font-semibold">
                            {isEn ? "Email Address" : t("emailLabel")}
                        </Label>
                        <Input
                            id="foundation-email"
                            type="email"
                            placeholder={isEn ? "you@example.com" : t("emailPlaceholder")}
                            required
                            className="h-12 border-border/50 focus:ring-primary"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full h-12 text-lg font-bold shadow-lg"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                {isEn ? "Reserving..." : t("submitting")}
                            </>
                        ) : (
                            isEn ? "RESERVE MY FREE SPOT NOW" : t("submitButton")
                        )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground italic">
                        {isEn ? "By signing up, you agree to receive workshop details via email." : t("trustNote")}
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}
