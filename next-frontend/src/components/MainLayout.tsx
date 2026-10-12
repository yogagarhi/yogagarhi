"use client";
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import dynamic from "next/dynamic"

const EarlyBirdPopup = dynamic(() => import("./EarlyBirdPopup"), { ssr: false });
const StickyContactButton = dynamic(() => import("./StickyContactButton"), { ssr: false });
const PartnershipsSection = dynamic(() => import("./home/PartnershipsSection"), { ssr: true });


export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mountEarlyBird, setMountEarlyBird] = useState(false);

    useEffect(() => {
        // Defer popup loading until after initial hydration and idle time
        const schedule = typeof window !== 'undefined' && 'requestIdleCallback' in window
            ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 4000 })
            : (cb: () => void) => setTimeout(cb, 3500);

        const handle = schedule(() => setMountEarlyBird(true));
        return () => {
            if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof handle === 'number') {
                window.cancelIdleCallback(handle);
            } else {
                clearTimeout(handle as any);
            }
        };
    }, []);

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
                    {mountEarlyBird && <EarlyBirdPopup />}
                    {!hideHeader && <StickyContactButton />}
                </>
            )}
        </div>
    );
}
