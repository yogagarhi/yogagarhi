"use client"
import { usePathname } from "next/navigation"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import EarlyBirdPopup from "./EarlyBirdPopup"
import StickyContactButton from "./StickyContactButton"
import PartnershipsSection from "./home/PartnershipsSection"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideHeader = ["/pre-yttc-prep", "/teacher-training-foundation", "/yogic-energy"].includes(pathname);
    const hideFooter = ["/pre-yttc-prep", "/yogic-energy"].includes(pathname);

    return (
        <div className="min-h-screen flex flex-col">
            {!hideHeader && <Header />}
            <main className="flex-grow">{children}</main>
            {!hideFooter && (
                <>
                    <PartnershipsSection />
                    <Footer />
                    <EarlyBirdPopup />
                    {!hideHeader && <StickyContactButton />}
                </>
            )}
        </div>
    );
}
