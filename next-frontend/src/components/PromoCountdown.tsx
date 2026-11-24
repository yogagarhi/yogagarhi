"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface PromoCountdownProps {
    className?: string;
    targetDate?: string;
    onExpire?: () => void;
}

export function getOfferEndDate(): Date {
    const CYCLE_DAYS = 7;
    const now = new Date();

    // Use a fixed anchor date (site launch or any past Monday)
    const anchor = new Date('2024-01-01T00:00:00Z');

    // Calculate how many full 7-day cycles have passed
    const msElapsed = now.getTime() - anchor.getTime();
    const msCycle = CYCLE_DAYS * 24 * 60 * 60 * 1000;
    const cyclesPassed = Math.floor(msElapsed / msCycle);

    // Next end date = anchor + (cyclesPassed + 1) cycles
    const nextEnd = new Date(anchor.getTime() + (cyclesPassed + 1) * msCycle);
    return nextEnd;
}

function calculateTimeLeft(_targetDate?: string) {
    const now = new Date();
    const endDate = getOfferEndDate();

    const distance = endDate.getTime() - now.getTime();
    if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false };
    }
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isExpired: false
    };
}

const PromoCountdown = ({ className = "", targetDate, onExpire }: PromoCountdownProps) => {
    const t = useTranslations("promo");
    const [expired, setExpired] = useState(false);
    const daysRef = useRef<HTMLSpanElement>(null);
    const hoursRef = useRef<HTMLSpanElement>(null);
    const minsRef = useRef<HTMLSpanElement>(null);
    const secsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const endDate = getOfferEndDate();
        console.log("Offer ends at (7-day cycle):", endDate.toISOString());

        const initial = calculateTimeLeft(targetDate);
        if (initial.isExpired) {
            setExpired(true);
            onExpire?.();
            return;
        }

        const update = () => {
            const time = calculateTimeLeft(targetDate);
            if (time.isExpired) {
                setExpired(true);
                onExpire?.();
                return;
            }
            if (daysRef.current) daysRef.current.textContent = time.days.toString().padStart(2, '0');
            if (hoursRef.current) hoursRef.current.textContent = time.hours.toString().padStart(2, '0');
            if (minsRef.current) minsRef.current.textContent = time.minutes.toString().padStart(2, '0');
            if (secsRef.current) secsRef.current.textContent = time.seconds.toString().padStart(2, '0');
        };

        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, [targetDate, onExpire]);

    if (expired) {
        return null;
    }

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="flex items-center">
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={daysRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest whitespace-nowrap">{t("days")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={hoursRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest whitespace-nowrap">{t("hrs")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={minsRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest whitespace-nowrap">{t("mins")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={secsRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest whitespace-nowrap">{t("secs")}</span>
                </div>
            </div>
        </div>
    );
};

export default PromoCountdown;
