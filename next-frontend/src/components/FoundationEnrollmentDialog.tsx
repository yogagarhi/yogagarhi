"use client";
import { useState } from "react";
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
import { Loader2, Sparkles } from "lucide-react";

interface FoundationEnrollmentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function FoundationEnrollmentDialog({ open, onOpenChange }: FoundationEnrollmentDialogProps) {
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
                    title: "Registration Successful!",
                    description: "Namaste! We've received your details.",
                });
                onOpenChange(false);
                router.push('/thank-you?type=foundation');
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or contact us directly.",
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
                    <DialogTitle className="font-heading text-2xl font-bold">Claim Your Free Spot</DialogTitle>
                    <DialogDescription className="text-muted-foreground mt-2">
                        Enter your details below to get instant access to the Foundation Masterclass.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="foundation-name" className="text-sm font-semibold">Full Name</Label>
                        <Input
                            id="foundation-name"
                            placeholder="Enter your name"
                            required
                            className="h-12 border-border/50 focus:ring-primary"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="foundation-email" className="text-sm font-semibold">Email Address</Label>
                        <Input
                            id="foundation-email"
                            type="email"
                            placeholder="you@example.com"
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
                                Reserving...
                            </>
                        ) : (
                            "RESERVE MY FREE SPOT NOW"
                        )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground italic">
                        By signing up, you agree to receive workshop details via email.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}
