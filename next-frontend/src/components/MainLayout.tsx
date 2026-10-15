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

        const onScroll = () => {
            if (window.scrollY > 150) {
                trigger();
            }
        };

        const cleanup = () => {
            if (timer) clearTimeout(timer);
            if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
                window.cancelIdleCallback(idleHandle);
            }
            window.removeEventListener('scroll', onScroll);
        };

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Mobile: listen to scroll (>150px) OR idle + 8s
            window.addEventListener('scroll', onScroll, { passive: true });
            if ('requestIdleCallback' in window) {
                idleHandle = window.requestIdleCallback(() => {
                    timer = setTimeout(trigger, 8000);
                }, { timeout: 4000 });
            } else {
                timer = setTimeout(trigger, 8000);
            }
        } else {
            // Desktop: exact previous behavior (idle/3500ms then mount)
            const schedule = 'requestIdleCallback' in window
                ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 4000 })
                : (cb: () => void) => setTimeout(cb, 3500);
            idleHandle = schedule(trigger);
        }

        return cleanup;
    }, []);

    const hideHeader = [
        "/yoga-anatomy-masterclass",
        "/pre-yttc-prep",
        "/teacher-training-foundation",
        "/yogic-energy"
    ].includes(pathname);

    const hideFooter = [
        "/yoga-anatomy-masterclass",
        "/pre-yttc-prep",
        "/yogic-energy"
    ].includes(pathname);

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
