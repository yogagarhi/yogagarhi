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

  const openBooking = (source: string = "Direct/Unknown") => {
    setBookingSource(source);
    setShowBookingDialog(true);
  };

  return (
    <BookingContext.Provider value={{ showBookingDialog, setShowBookingDialog, openBooking }}>
      {children}
      {(showBookingDialog || showThankYou) && (
        <BookingModal
          source={bookingSource}
          showBookingDialog={showBookingDialog}
          setShowBookingDialog={setShowBookingDialog}
          showThankYou={showThankYou}
          setShowThankYou={setShowThankYou}
        />
      )}
    </BookingContext.Provider>
  );
}