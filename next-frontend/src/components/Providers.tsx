"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("@/components/ui/toaster").then((mod) => mod.Toaster), { ssr: false });
const Sonner = dynamic(() => import("@/components/ui/sonner").then((mod) => mod.Toaster), { ssr: false });
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EnrollmentProvider } from "@/components/EnrollmentDialog";
import { BookingProvider } from "@/components/BookingDialog";
import { QuickEnquiryProvider } from "@/components/QuickEnquiryDialog";
import { YogicEnergyProvider } from "@/components/YogicEnergyDialog";
import { ContactDialogProvider } from "@/components/ContactDialog";
import ScrollToTop from "@/components/ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <EnrollmentProvider>
                    <BookingProvider>
                        <QuickEnquiryProvider>
                            <YogicEnergyProvider>
                                <ContactDialogProvider>
                                    <ScrollToTop />
                                    {children}
                                    <Toaster />
                                    <Sonner />
                                </ContactDialogProvider>
                            </YogicEnergyProvider>
                        </QuickEnquiryProvider>
                    </BookingProvider>
                </EnrollmentProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
}
