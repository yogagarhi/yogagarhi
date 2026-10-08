"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import dynamic from "next/dynamic";

const QuickEnquiryModal = dynamic(() => import("./dialogs/QuickEnquiryModal"), { ssr: false });

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
  const [showQuickEnquiry, setShowQuickEnquiry] = useState(false);

  return (
    <QuickEnquiryContext.Provider value={{ showQuickEnquiry, setShowQuickEnquiry }}>
      {children}
      {showQuickEnquiry && <QuickEnquiryModal />}
    </QuickEnquiryContext.Provider>
  );
}
