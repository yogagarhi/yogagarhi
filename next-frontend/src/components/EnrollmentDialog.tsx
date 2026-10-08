"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import dynamic from "next/dynamic";

const EnrollmentModal = dynamic(() => import("./dialogs/EnrollmentModal"), { ssr: false });

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

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);

  const navigateToEnrollment = () => {
    setShowEnrollDialog(true);
  };

  return (
    <EnrollmentContext.Provider value={{ showEnrollDialog, setShowEnrollDialog, navigateToEnrollment }}>
      {children}
      {showEnrollDialog && <EnrollmentModal />}
    </EnrollmentContext.Provider>
  );
}
