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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, GraduationCap, ChevronDown } from "lucide-react";
import { countryCodes } from "@/constants/formOptions";

interface EnrollmentContextType {
  showEnrollDialog: boolean;
  setShowEnrollDialog: (show: boolean) => void;
  navigateToEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
}

const courses = [
  { value: "100hr", label: "100-Hour YTTC" },
  { value: "200hr", label: "200-Hour YTTC" },
  { value: "300hr", label: "300-Hour YTTC" },
  { value: "foundation", label: "2-Day Foundation Workshop" },
];


export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    country: "",
    course: "200hr",
    courseDate: "",
    accommodation: "",
    gender: "",
    referralSource: "",
    message: "",
  });

  const navigateToEnrollment = () => {
    setShowEnrollDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Enrollment Request from ${formData.name}`,
          _autoresponder: "Namaste! Thank you for applying to YogaGarhi. We have received your enrollment request. Our admissions team will review your application and contact you within 24 hours with the next steps. We look forward to having you with us!"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Small delay to allow the success UI to be seen before redirect
        setTimeout(() => {
          router.push('/thank-you?type=enrollment');
        }, 1500);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send enrollment');
      }
    } catch (error: any) {
      console.error("Error submitting enrollment:", error);
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
    setShowEnrollDialog(open);
    if (!open) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        country: "",
        course: "200hr",
        courseDate: "",
        accommodation: "",
        gender: "",
        referralSource: "",
        message: "",
      });
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.countryCode && formData.country && formData.course && formData.courseDate && formData.accommodation && formData.gender && formData.referralSource;

  return (
    <EnrollmentContext.Provider value={{ showEnrollDialog, setShowEnrollDialog, navigateToEnrollment }}>
      {children}
      <Dialog open={showEnrollDialog} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden border-0 shadow-2xl bg-background">
          {/* Premium Gradient Header */}
          <div className="bg-gradient-to-br from-primary to-primary/80 px-6 pt-8 pb-6 sm:px-8 text-primary-foreground relative">
            <div className="pr-8">
              <DialogTitle className="font-heading text-2xl sm:text-3xl font-bold mb-1 text-primary-foreground flex items-center gap-3">
                {isSubmitted ? (
                  "Enrollment Successful!"
                ) : (
                  <>
                    <GraduationCap className="w-8 h-8" />
                    Begin Your Yoga Journey
                  </>
                )}
              </DialogTitle>
              {!isSubmitted && (
                <p className="text-primary-foreground/80 text-sm">Fill in your details and we&#39;ll be in touch shortly</p>
              )}
            </div>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 space-y-6 bg-background">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Welcome to the YogaGarhi family, {formData.name}!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We&#39;ve received your enrollment request and our team will contact you within 24 hours to guide you through the next steps.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-6 text-sm text-muted-foreground w-full border border-border space-y-2">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  📧 Confirmation: <span className="font-semibold text-foreground">{formData.email}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  📱 Phone: <span className="font-semibold text-foreground">{formData.countryCode} {formData.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  🎓 Course: <span className="font-semibold text-foreground">{courses.find(c => c.value === formData.course)?.label}</span>
                </p>
              </div>
              <Button 
                onClick={() => handleOpenChange(false)}
                className="w-full h-12 rounded-xl font-bold"
              >
                Continue Exploring
              </Button>
            </div>
          ) : (
            <>
              {/* Scrollable Form Body */}
              <div className="px-6 sm:px-8 py-6 space-y-4 overflow-y-auto max-h-[65vh] bg-background">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-name" className="text-sm font-semibold text-foreground">Full Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="enroll-name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="h-12 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:ring-0 transition-colors"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-email" className="text-sm font-semibold text-foreground">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="enroll-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-12 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:ring-0 transition-colors"
                    required
                  />
                </div>

                {/* Contact / WhatsApp */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-phone" className="text-sm font-semibold text-foreground">Contact / WhatsApp <span className="text-destructive">*</span></Label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleChange("countryCode", e.target.value)}
                      className="w-28 px-2 h-12 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm cursor-pointer"
                      required
                    >
                      <option value="" disabled>Code</option>
                      {countryCodes.map((country) => (
                        <option key={`${country.code}-${country.country}`} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <Input
                      id="enroll-phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="flex-1 h-12 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus-visible:ring-0 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Grid: Course and Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="enroll-course" className="text-sm font-semibold text-foreground">Course <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <select
                        id="enroll-course"
                        value={formData.course}
                        onChange={(e) => handleChange("course", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm"
                        required
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="enroll-course-date" className="text-sm font-semibold text-foreground">Date <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <select
                        id="enroll-course-date"
                        value={formData.courseDate}
                        onChange={(e) => handleChange("courseDate", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm"
                        required
                      >
                        <option value="">Choose</option>
                        <option value="February 2026">Feb 2026</option>
                        <option value="March 2026">Mar 2026</option>
                        <option value="April 2026">Apr 2026</option>
                        <option value="May 2026">May 2026</option>
                        <option value="June 2026">June 2026</option>
                        <option value="July 2026">July 2026</option>
                        <option value="August 2026">Aug 2026</option>
                        <option value="September 2026">Sep 2026</option>
                        <option value="October 2026">Oct 2026</option>
                        <option value="November 2026">Nov 2026</option>
                        <option value="December 2026">Dec 2026</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Grid: Room and Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="enroll-accommodation" className="text-sm font-semibold text-foreground">Room <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <select
                        id="enroll-accommodation"
                        value={formData.accommodation}
                        onChange={(e) => handleChange("accommodation", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Triple Sharing">Triple Sharing</option>
                        <option value="Double Sharing">Double Sharing</option>
                        <option value="Private Room">Private Room</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="enroll-gender" className="text-sm font-semibold text-foreground">Gender <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <select
                        id="enroll-gender"
                        value={formData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Country Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-country" className="text-sm font-semibold text-foreground">Country <span className="text-destructive">*</span></Label>
                  <Input
                    id="enroll-country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="h-12 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus-visible:ring-0 transition-colors"
                    required
                  />
                </div>

                {/* Referral Source */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-referral" className="text-sm font-semibold text-foreground">How did you hear about us? <span className="text-destructive">*</span></Label>
                  <div className="relative">
                    <select
                      id="enroll-referral"
                      value={formData.referralSource}
                      onChange={(e) => handleChange("referralSource", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Friend/Family Referral">Friend/Family</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-1.5">
                  <Label htmlFor="enroll-message" className="text-sm font-semibold text-foreground">Message (Optional)</Label>
                  <Textarea
                    id="enroll-message"
                    placeholder="Any questions or specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="rounded-xl border-2 border-border focus:border-primary focus-visible:ring-0 transition-colors resize-none"
                    rows={3}
                  />
                </div>
              </div>

              {/* Sticky Action Footer */}
              <div className="px-6 sm:px-8 py-4 border-t border-border bg-background rounded-b-xl">
                <Button
                  onClick={handleSubmit}
                  className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  size="lg"
                  disabled={isLoading || !isFormValid}
                >
                  {isLoading ? "Submitting..." : "Submit Enrollment Request"}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground mt-3 flex items-center justify-center gap-1.5 uppercase tracking-wider font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Your information is secure and never shared
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </EnrollmentContext.Provider>
  );
}
