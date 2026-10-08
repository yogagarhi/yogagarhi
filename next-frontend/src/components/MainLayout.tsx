"use client"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import StickyContactButton from "./StickyContactButton"
import PartnershipsSection from "./home/PartnershipsSection"

const EarlyBirdPopup = dynamic(() => import("./EarlyBirdPopup"), { ssr: false });

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideHeader = [
        "/yoga-anatomy-masterclass",
        "/yoga-anatomy-mastery",
        "/pre-yttc-prep",
        "/teacher-training-foundation",
        "/yogic-energy"
    ].includes(pathname);

    const hideFooter = [
        "/yoga-anatomy-masterclass",
        "/yoga-anatomy-mastery",
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
