"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { timezones, countryCodes } from "@/constants/formOptions";

interface TourCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tourEmail: string;
  setTourEmail: (v: string) => void;
  tourDate: string;
  setTourDate: (v: string) => void;
  tourTime: string;
  setTourTime: (v: string) => void;
  tourTimezone: string;
  setTourTimezone: (v: string) => void;
  tourPhone: string;
  setTourPhone: (v: string) => void;
  tourCountryCode: string;
  setTourCountryCode: (v: string) => void;
  tourRoomPreference: string;
  setTourRoomPreference: (v: string) => void;
  tourQuestions: string;
  setTourQuestions: (v: string) => void;
  tourSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TourCallDialog({
  open,
  onOpenChange,
  tourEmail,
  setTourEmail,
  tourDate,
  setTourDate,
  tourTime,
  setTourTime,
  tourTimezone,
  setTourTimezone,
  tourPhone,
  setTourPhone,
  tourCountryCode,
  setTourCountryCode,
  tourRoomPreference,
  setTourRoomPreference,
  tourQuestions,
  setTourQuestions,
  tourSubmitting,
  onSubmit
}: TourCallDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6 bg-card rounded-2xl border border-border shadow-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-heading text-2xl font-bold text-foreground">
            Book a Live Tour & Call
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm mt-1">
            See the school, your room, and the yoga shala live. Fill in your details below to schedule.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <Input
              type="email"
              required
              placeholder="name@example.com"
              value={tourEmail}
              onChange={(e) => setTourEmail(e.target.value)}
              className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Preferred Date
            </label>
            <Input
              type="date"
              required
              value={tourDate}
              onChange={(e) => setTourDate(e.target.value)}
              className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Preferred Time
            </label>
            <Input
              type="time"
              required
              value={tourTime}
              onChange={(e) => setTourTime(e.target.value)}
              className="h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Your Timezone
            </label>
            <select
              value={tourTimezone}
              onChange={(e) => setTourTimezone(e.target.value)}
              className="w-full h-12 px-3 rounded-xl bg-background/50 border border-border/80 focus:border-primary text-sm focus:outline-none"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Phone / WhatsApp Number
            </label>
            <div className="flex gap-2">
              <select
                value={tourCountryCode}
                onChange={(e) => setTourCountryCode(e.target.value)}
                className="w-28 h-12 px-2 rounded-xl bg-background/50 border border-border/80 focus:border-primary text-xs focus:outline-none"
              >
                {countryCodes.map((c) => (
                  <option key={`${c.code}-${c.country}`} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </select>
              <Input
                type="tel"
                required
                placeholder="1234567890"
                value={tourPhone}
                onChange={(e) => setTourPhone(e.target.value)}
                className="flex-1 h-12 rounded-xl bg-background/50 border-border/80 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Room Preference
            </label>
            <select
              value={tourRoomPreference}
              onChange={(e) => setTourRoomPreference(e.target.value)}
              className="w-full h-12 px-3 rounded-xl bg-background/50 border border-border/80 focus:border-primary text-sm focus:outline-none"
            >
              <option value="triple">Shared Room</option>
              <option value="double">Private Room</option>
              <option value="private">Deluxe Private Room</option>
              <option value="vip">VIP Suite</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Specific Questions or Areas to Focus (Optional)
            </label>
            <Textarea
              placeholder="e.g. Can we look at the study hall, food area, or double room bathrooms?"
              value={tourQuestions}
              onChange={(e) => setTourQuestions(e.target.value)}
              className="min-h-[80px] rounded-xl bg-background/50 border-border/80 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={tourSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl mt-2 flex items-center justify-center gap-2 shadow-lg"
          >
            <Video className="w-4 h-4" />
            <span>{tourSubmitting ? "Submitting..." : "Schedule My Tour"}</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
