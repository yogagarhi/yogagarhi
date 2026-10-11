"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, BookOpen, Sparkles, Video, Calendar, GraduationCap, Check } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useBooking } from "@/components/BookingDialog";

export default function ReadyToBeginActionsIsland() {
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowBookingDialog } = useBooking();
  const router = useRouter();

  // Free Manual Dialog
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [manualForm, setManualForm] = useState({ name: "", email: "" });
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);

  // Webinar Dialog
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [webinarForm, setWebinarForm] = useState({ name: "", email: "", timezone: "", date: "", time: "" });
  const [isSubmittingWebinar, setIsSubmittingWebinar] = useState(false);

  // Pre-YTTC Detail Dialog
  const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
  const [preYTTCForm, setPreYTTCForm] = useState({ name: "", email: "" });
  const [isSubmittingPreYTTC, setIsSubmittingPreYTTC] = useState(false);

  const isManualFormComplete = manualForm.name && manualForm.email;
  const isWebinarFormComplete =
    webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;
  const isPreYTTCFormComplete = preYTTCForm.name && preYTTCForm.email;

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingManual(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...manualForm,
          _subject: "Free YTTC Study Manual Request",
          _autoresponder: `Namaste ${manualForm.name},

Thank you for your interest in our YTTC Study Manual! 

We are excited to share this resource with you. You will receive the download link in a separate email shortly. This manual covers the foundation of Hatha and Vinyasa yoga, as well as the basics of Ayurvedic constitution.

If you have any questions about our upcoming teacher training in Bali, feel free to reply to this email.

With respect,
YogaGarhi Team`,
          source: "ReadyToBegin Section - Free Manual Button",
          form_type: "manual_download",
        }),
      });
      if (response.ok) {
        setShowManualDialog(false);
        router.push(`/thank-you?type=manual&name=${manualForm.name}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingManual(false);
    }
  };

  const handleWebinarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingWebinar(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...webinarForm,
          _subject: "Webinar Registration",
          _autoresponder: `Namaste ${webinarForm.name},

You have successfully registered for our Free Orientation Webinar!

Details of your session:
Date: ${webinarForm.date}
Time: ${webinarForm.time}
Timezone: ${webinarForm.timezone}

You will receive the meeting link (Zoom) 24 hours before the session begins. We look forward to meeting you and answering all your questions about our authentic yoga path in Bali.

With respect,
YogaGarhi Team`,
          source: "ReadyToBegin Section - Webinar Button",
          form_type: "webinar_registration",
        }),
      });
      if (response.ok) {
        setShowWebinarDialog(false);
        router.push(`/thank-you?type=webinar&name=${webinarForm.name}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingWebinar(false);
    }
  };

  const handlePreYTTCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPreYTTC(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...preYTTCForm,
          _subject: "Pre-YTTC Details Request",
          _autoresponder: `Namaste ${preYTTCForm.name},

Thank you for inquiring about our unique Pre-YTTC preparation program!

YogaGarhi is the world's first academy to offer a dedicated foundation building phase before your actual training begins. This ensures you arrive in Bali ready, confident, and with a strong physical and philosophical base.

We are sending our detailed Pre-YTTC curriculum and schedule to you in a follow-up email.

With respect,
YogaGarhi Team`,
          source: 'ReadyToBegin Section - Get "Before You Join" Detail Button',
          form_type: "pre_yttc_info",
        }),
      });
      if (response.ok) {
        setShowPreYTTCDialog(false);
        router.push(`/thank-you?type=pre-yttc&name=${preYTTCForm.name}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingPreYTTC(false);
    }
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("prakriti-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        <Button
          type="button"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          onClick={() => setShowEnrollDialog(true)}
        >
          Start Your Journey
        </Button>
        <Button
          type="button"
          size="lg"
          className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setShowManualDialog(true)}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Get Free Manual
        </Button>
        <Button
          type="button"
          size="lg"
          className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => scrollToQuiz()}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Reveal Your Unique Yogic Energy
        </Button>
        <Button
          type="button"
          size="lg"
          className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setShowWebinarDialog(true)}
        >
          <Video className="w-4 h-4 mr-2" />
          Free Webinar
        </Button>
        <Button
          type="button"
          size="lg"
          className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setShowBookingDialog(true)}
        >
          <Phone className="w-4 h-4 mr-2" />
          Book a Call
        </Button>
        <Button
          type="button"
          size="lg"
          className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setShowPreYTTCDialog(true)}
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          Get "Before You Join" Detail
        </Button>
        <Button
          size="lg"
          className="bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold border-0"
          asChild
        >
          <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </Button>
      </div>

      {/* Free Manual Dialog */}
      <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Get Your Free Study Manual
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-sm">
              Enter your details to receive our comprehensive YTTC Study Manual.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleManualSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-foreground">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={manualForm.name}
                onChange={(e) => setManualForm({ ...manualForm, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Your Email *</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={manualForm.email}
                onChange={(e) => setManualForm({ ...manualForm, email: e.target.value })}
              />
            </div>

            <div className="bg-secondary/30 p-3 rounded-lg text-xs text-muted-foreground">
              <p>📖 Includes: Yoga Philosophy, Anatomy Basics, Asana Alignment & Daily Schedule preview.</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5"
              disabled={isSubmittingManual || !isManualFormComplete}
            >
              {isSubmittingManual ? "Sending..." : "Download Free Manual"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Webinar Registration Dialog */}
      <Dialog open={showWebinarDialog} onOpenChange={setShowWebinarDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Register for Free Webinar
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-sm">
              Join our live orientation session and get your questions answered.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleWebinarSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-foreground">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={webinarForm.name}
                onChange={(e) => setWebinarForm({ ...webinarForm, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Your Email *</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={webinarForm.email}
                onChange={(e) => setWebinarForm({ ...webinarForm, email: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Your Timezone *</label>
              <select
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={webinarForm.timezone}
                onChange={(e) => setWebinarForm({ ...webinarForm, timezone: e.target.value })}
              >
                <option value="">Select your timezone</option>
                <option value="America/New_York">Eastern Time (US & Canada)</option>
                <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                <option value="America/Chicago">Central Time (US & Canada)</option>
                <option value="Europe/London">London (GMT/BST)</option>
                <option value="Europe/Paris">Central European Time (CET)</option>
                <option value="Asia/Dubai">Gulf Standard Time (GST)</option>
                <option value="Asia/Kolkata">India Standard Time (IST)</option>
                <option value="Asia/Singapore">Singapore Time (SGT)</option>
                <option value="Australia/Sydney">Sydney (AEST)</option>
                <option value="Pacific/Auckland">New Zealand (NZST)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-foreground">Preferred Date *</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground text-sm"
                  value={webinarForm.date}
                  onChange={(e) => setWebinarForm({ ...webinarForm, date: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Preferred Time *</label>
                <select
                  required
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground text-sm"
                  value={webinarForm.time}
                  onChange={(e) => setWebinarForm({ ...webinarForm, time: e.target.value })}
                >
                  <option value="">Select time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                </select>
              </div>
            </div>

            <div className="bg-secondary/30 p-3 rounded-lg text-xs text-muted-foreground space-y-1">
              <p className="flex items-center gap-1.5 font-medium text-foreground">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                Live 45-Min Session on Zoom
              </p>
              <p>Includes Q&A with Lead Teachers, Virtual Ashram Tour & Special Early Bird Offer.</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5"
              disabled={isSubmittingWebinar || !isWebinarFormComplete}
            >
              {isSubmittingWebinar ? "Registering..." : "Confirm Webinar Spot"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Pre-YTTC Detail Dialog */}
      <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Pre-YTTC Preparation Program
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-sm">
              Receive full details of our exclusive preparation phase included free with all courses.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePreYTTCSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-foreground">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={preYTTCForm.name}
                onChange={(e) => setPreYTTCForm({ ...preYTTCForm, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Your Email *</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                value={preYTTCForm.email}
                onChange={(e) => setPreYTTCForm({ ...preYTTCForm, email: e.target.value })}
              />
            </div>

            <div className="bg-secondary/30 p-3 rounded-lg text-xs text-muted-foreground space-y-1.5">
              <p className="font-medium text-foreground">What you receive:</p>
              <p className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                4-week pre-arrival video curriculum & study materials
              </p>
              <p className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                Basic Sanskrit terminology & pronunciation guide
              </p>
              <p className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                Foundational asana prep sequences for physical readiness
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5"
              disabled={isSubmittingPreYTTC || !isPreYTTCFormComplete}
            >
              {isSubmittingPreYTTC ? "Sending..." : 'Get "Before You Join" Details'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
