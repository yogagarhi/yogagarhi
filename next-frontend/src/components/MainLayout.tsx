"use client"
import { usePathname } from "next/navigation"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import EarlyBirdPopup from "./EarlyBirdPopup"
import StickyContactButton from "./StickyContactButton"
import PartnershipsSection from "./home/PartnershipsSection"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideHeader = [
        "/yoga-anatomy-masterclass",
        "/yoga-anatomy-mastery",
        "/200-hour-yoga-teacher-training-rishikesh",
        "/200-hour-yoga-teacher-training-in-rishikesh",
        "/pre-yttc-prep",
        "/teacher-training-foundation",
        "/yogic-energy"
    ].includes(pathname);

    const hideFooter = [
        "/yoga-anatomy-masterclass",
        "/yoga-anatomy-mastery",
        "/200-hour-yoga-teacher-training-rishikesh",
        "/200-hour-yoga-teacher-training-in-rishikesh",
        "/pre-yttc-prep",
        "/yogic-energy"
    ].includes(pathname);

    return (
        <div className="min-h-screen flex flex-col">
            {!hideHeader && <Header />}
            <main className={`flex-grow${!hideHeader ? ' pt-[132px] sm:pt-[104px]' : ''}`}>{children}</main>
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
