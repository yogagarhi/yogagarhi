"use client";
import { useState, createContext, useContext, ReactNode } from "react";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("./dialogs/BookingModal"), { ssr: false });

interface BookingContextType {
  showBookingDialog: boolean;
  setShowBookingDialog: (show: boolean) => void;
  openBooking: (source?: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [bookingSource, setBookingSource] = useState("Direct/Unknown");
  const [hasOpened, setHasOpened] = useState(false);

  const openBooking = (source: string = "Direct/Unknown") => {
    setBookingSource(source);
    setHasOpened(true);
    setShowBookingDialog(true);
  };

  const handleSetShowBookingDialog = (show: boolean) => {
    if (show) setHasOpened(true);
    setShowBookingDialog(show);
  };

  const handleSetShowThankYou = (show: boolean) => {
    if (show) setHasOpened(true);
    setShowThankYou(show);
  };

  return (
    <BookingContext.Provider value={{ showBookingDialog, setShowBookingDialog: handleSetShowBookingDialog, openBooking }}>
      {children}
      {hasOpened && (
        <BookingModal
          source={bookingSource}
          showBookingDialog={showBookingDialog}
          setShowBookingDialog={handleSetShowBookingDialog}
          showThankYou={showThankYou}
          setShowThankYou={handleSetShowThankYou}
        />
      )}
    </BookingContext.Provider>
  );
}