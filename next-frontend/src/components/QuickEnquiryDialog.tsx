"use client";
import { createContext, useContext, ReactNode, useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, GraduationCap, Send, ArrowRight } from "lucide-react";

interface QuickEnquiryContextType {
  showQuickEnquiry: boolean;
  setShowQuickEnquiry: (show: boolean) => void;
}

const QuickEnquiryContext = createContext<QuickEnquiryContextType | undefined>(undefined);

export function useQuickEnquiry() {
  const context = useContext(QuickEnquiryContext);
  if (!context) {
    throw new Error("useQuickEnquiry must be used within a QuickEnquiryProvider");
  }
  return context;
}

export function QuickEnquiryProvider({ children }: { children: ReactNode }) {
  console.log("PREMIUM QUICK ENQUIRY LOADED");
  const [showQuickEnquiry, setShowQuickEnquiry] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Free Demo Request from ${formData.name}`,
          _autoresponder: "Namaste! Thank you for your interest in our free demo session. We have received your request and will contact you within 24 hours to schedule the demo. We look forward to meeting you!"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please check your internet connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenChange = (open: boolean) => {
    setShowQuickEnquiry(open);
    if (!open) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        level: "",
        message: "",
      });
    }
  };

  return (
    <QuickEnquiryContext.Provider value={{ showQuickEnquiry, setShowQuickEnquiry }}>
      {children}
      <Dialog open={showQuickEnquiry} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-lg !p-0 gap-0 overflow-hidden border-0 shadow-2xl bg-white rounded-3xl">
          {/* Header Section - Vibrant Brand Gradient */}
          <div className="bg-[#2D7A70] bg-gradient-to-br from-[#2D7A70] to-[#1a4d46] px-6 pt-10 pb-8 sm:px-10 text-white relative text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <DialogTitle className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-white">
                {isSubmitted ? "Thank You!" : "Book Free Demo Now"}
              </DialogTitle>
              {!isSubmitted && (
                <p className="text-white/80 text-sm max-w-[280px] mx-auto leading-relaxed font-medium">
                  Experience our authentic yoga path. Fill the form to book your free orientation demo.
                </p>
              )}
            </div>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-16 px-10 space-y-8 text-center bg-white">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-bold text-[#2D7A70]">
                  Inquiry Received!
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Namaste! We&#39;ve received your request. Our team will contact you within 24 hours to schedule your free demo.
                </p>
              </div>
              <Button 
                onClick={() => handleOpenChange(false)}
                className="w-full h-14 rounded-2xl font-bold bg-[#2D7A70] hover:bg-[#1a4d46] transition-all shadow-lg"
              >
                Continue Exploring
              </Button>
            </div>
          ) : (
            <>
              {/* Form Body - Premium Card Layout */}
              <div className="px-6 sm:px-10 py-8 space-y-6 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="q-name" className="text-sm font-bold text-gray-700 ml-1">Full Name</Label>
                    <Input
                      id="q-name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 text-gray-900 transition-all focus:border-[#2D7A70] focus:bg-white focus:ring-0"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="q-email" className="text-sm font-bold text-gray-700 ml-1">Email Address</Label>
                    <Input
                      id="q-email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 text-gray-900 transition-all focus:border-[#2D7A70] focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>



                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="q-message" className="text-sm font-bold text-gray-700 ml-1">Message (Optional)</Label>
                  <Textarea
                    id="q-message"
                    placeholder="Tell us about the suitable time and date for free session..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    className="rounded-xl border-2 border-gray-100 bg-gray-50/50 text-gray-900 focus:border-[#2D7A70] focus:bg-white focus:ring-0 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Footer - Sticky */}
              <div className="px-6 sm:px-10 pb-10 pt-2 bg-white rounded-b-2xl">
                <Button
                  onClick={handleSubmit}
                  className={`w-full h-14 text-lg font-bold rounded-2xl shadow-xl transition-all duration-500 flex items-center justify-center gap-3 ${
                    formData.name && formData.email
                      ? "bg-[#2D7A70] hover:bg-[#1a4d46] hover:scale-[1.01] shadow-[#2D7A70]/20 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={isLoading || !formData.name || !formData.email}
                >
                  {isLoading ? (
                    "Sending Inquiry..."
                  ) : (
                    <>
                      Book Free Demo
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
                <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Free 60-Min Live Demo Session
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </QuickEnquiryContext.Provider>
  );
}
