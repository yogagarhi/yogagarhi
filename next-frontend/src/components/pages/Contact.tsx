"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Navigation, Plane, Sparkles } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";
const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");
import Image from "next/image";

export default function Contact() {
  const router = useRouter();
  const [activeCampus, setActiveCampus] = useState<"bali" | "rishikesh">("bali");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Enquiry: ${formData.name}`,
          _autoresponder: "Namaste! Thank you for reaching out to YogaGarhi. We have received your message and will get back to you within 24 hours. Have a beautiful day!"
        }),
      });

      if (response.ok) {
        router.push('/thank-you?type=enquiry');
      } else {
        throw new Error('Failed to send enquiry');
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="YogaGarhi Ashram & Yoga School Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact YogaGarhi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Connect with our spiritual ashrams in Bali & Rishikesh. We are here to guide your yogic path.
          </p>
        </div>
      </section>

      {/* Quick Contact & Admissions Hours */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917895350563"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border border-border/60"
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#25D366] transition-colors">
                <svg className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <p className="font-semibold text-foreground text-sm">+91-7895350563</p>
              <p className="text-xs text-muted-foreground mt-1">24/7 WhatsApp Chat</p>
            </a>

            {/* Call */}
            <a
              href="tel:+917895350563"
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border border-border/60"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground text-sm">+91-7895350563</p>
              <p className="text-xs text-muted-foreground mt-1">Direct Phone Call</p>
            </a>

            {/* Email */}
            <a
              href="mailto:yogagarhi@gmail.com"
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border border-border/60"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground text-sm">yogagarhi@gmail.com</p>
              <p className="text-xs text-muted-foreground mt-1">Admissions Desk</p>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-card border border-border/60">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-7 h-7 text-amber-600" />
              </div>
              <p className="font-semibold text-foreground text-sm">08:00 AM – 08:00 PM</p>
              <p className="text-xs text-muted-foreground mt-1">Daily Support (WITA / IST)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Campus Details (NAP Cards) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Global Ashram Locations</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Visit Our Sacred Spaces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bali Ashram */}
            <div className="p-8 rounded-3xl bg-secondary/50 border border-border relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase">
                    Headquarters & Main Ashram
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  YogaGarhi Bali Ashram
                </h3>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p>
                    Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Located in the serene tropical jungle highlands near Ubud, surrounded by rice terraces and sacred spring water temples.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/80 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Open Daily: 24 Hours</span>
                <a
                  href="https://maps.google.com/?q=Ds+madangan+kaja,+Desa+petak,+Petak+kaja,+Kec.+Gianyar,+Kabupaten+Gianyar,+Bali+80515,+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Bali Directions
                </a>
              </div>
            </div>

            {/* Rishikesh Center */}
            <div className="p-8 rounded-3xl bg-secondary/50 border border-border relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 uppercase">
                    Himalayan Campus
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  YogaGarhi Rishikesh Center
                </h3>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p>
                    Tapovan, Badrinath Road, Rishikesh, Uttarakhand 249192, India
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nestled at the foothills of the Himalayas along the sacred Ganges river, the global yoga capital of the world.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/80 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Open Daily: 24 Hours</span>
                <a
                  href="https://maps.google.com/?q=Tapovan,+Rishikesh,+Uttarakhand+249192,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Rishikesh Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Embed & Transit Section */}
      <section className="py-16 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Interactive Ashram Map
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Select a campus to explore location coordinates and nearby landmarks
            </p>

            {/* Campus Toggle Buttons */}
            <div className="inline-flex p-1 bg-secondary rounded-xl mt-6 border border-border">
              <button
                type="button"
                onClick={() => setActiveCampus("bali")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCampus === "bali"
                    ? "bg-primary text-white shadow-md"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                🌴 Bali Ashram (Gianyar/Ubud)
              </button>
              <button
                type="button"
                onClick={() => setActiveCampus("rishikesh")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCampus === "rishikesh"
                    ? "bg-primary text-white shadow-md"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                ⛰️ Rishikesh Campus (Tapovan)
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div className="rounded-3xl overflow-hidden shadow-card border border-border bg-card h-[420px] w-full relative">
            {activeCampus === "bali" ? (
              <iframe
                title="YogaGarhi Bali Ashram Map"
                src="https://maps.google.com/maps?q=-8.4649127,115.3258379&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            ) : (
              <iframe
                title="YogaGarhi Rishikesh Center Map"
                src="https://maps.google.com/maps?q=30.1313,78.3245&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            )}
          </div>

          {/* Transit & Airport Transfer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Getting to Bali Ashram</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Fly into <strong>Ngurah Rai International Airport (DPS)</strong> in Denpasar. Our ashram is approximately 60–75 minutes by car. We provide private airport pickup for all residential YTTC students.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Getting to Rishikesh Center</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Fly into <strong>Dehradun Jolly Grant Airport (DED)</strong> (35 mins away) or take a direct train from New Delhi (DEL) to Haridwar/Rishikesh. Dedicated campus transfers are arranged upon arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Direct Enquiry */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Form Info */}
            <div className="space-y-6">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
                Special Seasonal Offer 🎉 Flat $300 OFF
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Send Us a Message & Begin Your Transformation
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you have questions regarding syllabus modules, Yoga Alliance accreditation, accommodation choices, or upcoming batch availability, our admissions advisors are ready to assist.
              </p>

              <div className="p-4 rounded-xl bg-background/80 border border-border text-xs text-muted-foreground space-y-2">
                <p className="flex items-center gap-2 font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Typical response time: under 2 hours
                </p>
                <p>All enquiries receive a free 2026 Yoga Teacher Training Prospectus & Syllabus Guide via email.</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    aria-label="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    aria-label="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Question / Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    aria-label="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[140px]"
                    placeholder="Tell us about your yoga journey and preferred course or location..."
                  />
                </div>
                <Button variant="cta" size="xl" type="submit" className="w-full font-bold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
