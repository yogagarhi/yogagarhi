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
        if (typeof window === 'undefined') return;
        if (sessionStorage.getItem('earlyBirdDismissed') === 'true') return;

        let timer: any = null;
        let idleHandle: any = null;
        let triggered = false;

        const trigger = () => {
            if (triggered) return;
            triggered = true;
            setMountEarlyBird(true);
            cleanup();
        };

        const cleanup = () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
                window.cancelIdleCallback(idleHandle);
                idleHandle = null;
            }
        };

        const media = window.matchMedia('(min-width: 769px)');

        const scheduleDesktop = () => {
            if ('requestIdleCallback' in window) {
                idleHandle = window.requestIdleCallback(trigger, { timeout: 4000 });
            } else {
                timer = setTimeout(trigger, 3500);
            }
        };

        if (media.matches) {
            scheduleDesktop();
        }

        const handleMediaChange = (e: MediaQueryListEvent) => {
            if (e.matches && !triggered) {
                scheduleDesktop();
            } else if (!e.matches && !triggered) {
                cleanup();
            }
        };
        media.addEventListener('change', handleMediaChange);

        return () => {
            cleanup();
            media.removeEventListener('change', handleMediaChange);
        };
    }, []);

    // Strip optional locale prefix (e.g. /de/yoga-anatomy-masterclass -> /yoga-anatomy-masterclass)
    const normalizedPathname = pathname?.replace(/^\/(id|de|ko|ja|zh|nl|ru|it|es|fr)(\/|$)/, '/') || pathname;

    const hideHeader = [
        "/yoga-anatomy-masterclass",
        "/pre-yttc-prep",
        "/teacher-training-foundation",
        "/yogic-energy"
    ].includes(normalizedPathname);

    const hideFooter = [
        "/yoga-anatomy-masterclass",
        "/pre-yttc-prep",
        "/yogic-energy"
    ].includes(normalizedPathname);

    return (
        <div className="min-h-screen flex flex-col">
            {!hideHeader && <Header />}
            <main className={`flex-grow${!hideHeader ? ' pt-[144px] min-[375px]:pt-[154px] sm:pt-[104px]' : ''}`}>{children}</main>
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
