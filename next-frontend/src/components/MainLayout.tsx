"use client"
import { usePathname } from "next/navigation"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import EarlyBirdPopup from "./EarlyBirdPopup"
import StickyContactButton from "./StickyContactButton"
import PartnershipsSection from "./home/PartnershipsSection"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLandingPage = pathname === "/pre-yttc-prep";

    return (
        <div className="min-h-screen flex flex-col">
            {!isLandingPage && <Header />}
            <main className="flex-grow">{children}</main>
            {!isLandingPage && (
                <>
                    <PartnershipsSection />
                    <Footer />
                    <EarlyBirdPopup />
                    <StickyContactButton />
                </>
            )}
        </div>
    )
}
