"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import dynamic from "next/dynamic";

const ContactModal = dynamic(() => import("./dialogs/ContactModal"), { ssr: false });

interface ContactDialogContextType {
  showContactDialog: boolean;
  setShowContactDialog: (show: boolean) => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error("useContactDialog must be used within a ContactDialogProvider");
  }
  return context;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <ContactDialogContext.Provider value={{ showContactDialog, setShowContactDialog }}>
      {children}
      {showContactDialog && <ContactModal />}
    </ContactDialogContext.Provider>
  );
}
