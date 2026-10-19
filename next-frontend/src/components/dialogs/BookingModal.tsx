"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, ChevronDown, Calendar, Phone } from "lucide-react";
import { countryCodes, timezones } from "@/constants/formOptions";

interface BookingModalProps {
  source: string;
  showBookingDialog: boolean;
  setShowBookingDialog: (show: boolean) => void;
  showThankYou: boolean;
  setShowThankYou: (show: boolean) => void;
}

export default function BookingModal({
  source,
  showBookingDialog,
  setShowBookingDialog,
  showThankYou,
  setShowThankYou,
}: BookingModalProps) {
  const t = useTranslations("dialogs");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();

  // Calendar state: initialize dynamically to current month and year
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(() => new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC +05:30 New Delhi, Mumbai");
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);

  // Form state
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    message: ''
  });

  const isFormComplete = bookingForm.name.trim() && bookingForm.email.trim() && bookingForm.phone.trim() && bookingForm.countryCode;
  const canProceedToForm = selectedDay && selectedTime;

  const isCurrentMonthOrPast = () => {
    const today = new Date();
    return selectedYear < today.getFullYear() || (selectedYear === today.getFullYear() && selectedMonth <= today.getMonth());
  };

  const handlePrevMonth = () => {
    if (isCurrentMonthOrPast()) return;
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(prev => prev - 1);
    } else {
      setSelectedMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(prev => prev + 1);
    } else {
      setSelectedMonth(prev => prev + 1);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const formattedBookingDate = `${selectedDay} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(selectedYear, selectedMonth, selectedDay || 1))} ${selectedYear}`;
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: locale,
          _subject: `New Booking Request: ${bookingForm.name}`,
          form_type: "booking_request",
          booking_date: formattedBookingDate,
          booking_time: selectedTime || "",
          timezone: selectedTimezone,
          ...bookingForm,
          _autoresponder: "Namaste! Your call with YogaGarhi has been scheduled. We look forward to connecting with you on the selected date and time to discuss your yoga journey. See you soon!"
        }),
      });

      if (response.ok) {
        router.push('/thank-you?type=booking');
      } else {
        throw new Error('Failed to send booking');
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Something went wrong. Please try again or contact us directly on WhatsApp.");
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setStep('calendar');
    setSelectedDay(null);
    setSelectedTime(null);
    setShowTimezoneDropdown(false);
    setBookingForm({ name: '', email: '', countryCode: '', phone: '', message: '' });
  };

  const handleClose = (open: boolean) => {
    setShowBookingDialog(open);
    if (!open) {
      resetForm();
    }
  };

  const handleThankYouClose = (open: boolean) => {
    setShowThankYou(open);
    if (!open) {
      resetForm();
    }
  };

  // Get days in selected month
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  return (
    <>
      {/* Main Booking Dialog */}
      {showBookingDialog && (
        <Dialog open={showBookingDialog} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="font-heading text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                {step === 'calendar' ? t("bookingTitle") : t("bookingTitle")}
              </DialogTitle>
              <DialogDescription className={`text-sm text-muted-foreground mt-2 ${step === 'calendar' ? 'sr-only' : ''}`}>
                {step === 'calendar'
                  ? t("bookingDesc")
                  : `Scheduled for ${selectedDay} ${new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(selectedYear, selectedMonth, 1))} at ${selectedTime}`
                }
              </DialogDescription>
            </DialogHeader>

            {step === 'calendar' ? (
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Calendar */}
                <div className="bg-foreground text-primary-foreground p-6">
                  {/* Logo/Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold">YG</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-center mb-4">
                    {t("selectDate")}
                  </h3>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <button
                      onClick={handlePrevMonth}
                      disabled={isCurrentMonthOrPast()}
                      className={`p-1 rounded transition-colors ${isCurrentMonthOrPast() ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary-foreground/10'}`}
                      aria-label={t("prevMonth") || "Previous month"}
                    >
                      <ChevronDown className="w-5 h-5 rotate-90" />
                    </button>
                    <span className="font-heading font-bold text-base min-w-[120px] text-center capitalize">
                      {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(selectedYear, selectedMonth, 1))}
                    </span>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
                      aria-label={t("nextMonth") || "Next month"}
                    >
                      <ChevronDown className="w-5 h-5 -rotate-90" />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                      <div key={i} className="py-1.5 text-xs font-medium text-primary-foreground/60">
                        {day}
                      </div>
                    ))}
                    {/* Empty cells for offset */}
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                      <div key={`empty-${i}`} className="py-1.5" />
                    ))}
                    {/* Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDay === day;
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const calendarDate = new Date(selectedYear, selectedMonth, day);
                      calendarDate.setHours(0, 0, 0, 0);
                      const isUpcoming = calendarDate >= today;

                      return (
                        <button
                          key={day}
                          onClick={() => isUpcoming && setSelectedDay(day)}
                          disabled={!isUpcoming}
                          className={`py-1.5 rounded-full text-sm transition-all ${isSelected
                            ? "bg-primary text-primary-foreground"
                            : isUpcoming
                              ? "text-primary-foreground hover:bg-primary-foreground/10"
                              : "text-primary-foreground/30 cursor-not-allowed line-through opacity-40"
                            }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Time Slots */}
                <div className="p-6 bg-background">
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2 text-sm">{t("meetingDuration")}</h4>
                    <div className="bg-secondary/50 rounded-lg p-2.5 text-center text-muted-foreground text-sm font-medium">
                      {locale === 'de' ? '20 - 30 Min.' : locale === 'fr' ? '20 - 30 min' : locale === 'ja' ? '20〜30分' : locale === 'ko' ? '20 - 30분' : locale === 'zh' ? '20 - 30分钟' : locale === 'ru' ? '20 - 30 мин.' : '20 - 30 mins'}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">{t("whatTimeBest")}</h4>
                    {selectedDay && (
                      <p className="text-xs text-muted-foreground mb-3 font-medium">
                        {selectedDay} {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(selectedYear, selectedMonth, 1))}
                      </p>
                    )}

                    {/* Timezone Dropdown */}
                    <div className="relative mb-3">
                      <button
                        onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                        className="flex items-center gap-1.5 text-primary text-xs hover:underline"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {timezones.find(tz => tz.value === selectedTimezone)?.label || selectedTimezone}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTimezoneDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      {showTimezoneDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-full max-w-[200px] bg-card border border-border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                          {timezones.map((tz) => (
                            <button
                              key={tz.value}
                              onClick={() => {
                                setSelectedTimezone(tz.value);
                                setShowTimezoneDropdown(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${selectedTimezone === tz.value ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                                }`}
                            >
                              {tz.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                      {["10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-lg border text-center transition-all text-sm ${selectedTime === time
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border hover:border-primary/50 text-foreground"
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    {/* Continue Button */}
                    <Button
                      className="w-full mt-4"
                      size="lg"
                      disabled={!canProceedToForm}
                      onClick={() => setStep('form')}
                    >
                      {locale === 'de' ? 'Weiter' : locale === 'fr' ? 'Continuer' : locale === 'ja' ? '次へ' : locale === 'es' ? 'Continuar' : locale === 'it' ? 'Continua' : locale === 'nl' ? 'Doorgaan' : locale === 'ru' ? 'Продолжить' : locale === 'ko' ? '다음' : locale === 'zh' ? '下一步' : locale === 'id' ? 'Lanjutkan' : 'Continue'}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 pt-4 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("fullName")} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={t("fullName")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("email")} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("phone")} <span className="text-destructive">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={bookingForm.countryCode}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, countryCode: e.target.value }))}
                      className="w-24 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      required
                    >
                      <option value="" disabled>{locale === 'de' ? 'Vorwahl' : locale === 'fr' ? 'Indicatif' : locale === 'ja' ? '国番号' : 'Code'}</option>
                      {countryCodes.map((country) => (
                        <option key={`${country.country}-${country.code}`} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder={t("phone")}
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("message")}
                  </label>
                  <textarea
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={t("placeholderMessage")}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep('calendar')}
                  >
                    {tCommon("back") || "Back"}
                  </Button>
                  <Button
                    className="flex-1"
                    size="lg"
                    disabled={!isFormComplete || isSubmitting}
                    onClick={handleSubmit}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {isSubmitting ? (tCommon("loading") || "Processing...") : t("confirmBooking")}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}

      {/* Thank You Dialog */}
      {showThankYou && (
        <Dialog open={showThankYou} onOpenChange={handleThankYouClose}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                  {t("registeredTitle") || "Call Booked! 🎉"}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {t("toastSuccess")}
                </DialogDescription>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
                <p>📅 <span className="font-medium text-foreground">{selectedDay} {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(selectedYear, selectedMonth, 1))}</span> at <span className="font-medium text-foreground">{selectedTime}</span></p>
                <p>📧 <span className="font-medium text-foreground">{bookingForm.email}</span></p>
                <p>📱 <span className="font-medium text-foreground">{bookingForm.countryCode} {bookingForm.phone}</span></p>
              </div>
              <Button
                onClick={() => handleThankYouClose(false)}
                className="w-full"
              >
                {tCommon("close") || "Close"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
