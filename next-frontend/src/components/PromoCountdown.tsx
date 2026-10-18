"use client";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface PromoCountdownProps {
    className?: string;
}

function calculateTimeLeft() {
    const now = new Date();
    const referenceDate = new Date("2026-05-22T00:00:00Z");
    const cycleMs = 15 * 24 * 60 * 60 * 1000; // 15 days in ms

    let distance;
    if (now.getTime() < referenceDate.getTime()) {
        distance = referenceDate.getTime() - now.getTime();
    } else {
        const elapsedMs = now.getTime() - referenceDate.getTime();
        const timeInCurrentCycle = elapsedMs % cycleMs;
        distance = cycleMs - timeInCurrentCycle;
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
}

const PromoCountdown = ({ className = "" }: PromoCountdownProps) => {
    const t = useTranslations("promo");
    const daysRef = useRef<HTMLSpanElement>(null);
    const hoursRef = useRef<HTMLSpanElement>(null);
    const minsRef = useRef<HTMLSpanElement>(null);
    const secsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const update = () => {
            const time = calculateTimeLeft();
            if (daysRef.current) daysRef.current.textContent = time.days.toString().padStart(2, '0');
            if (hoursRef.current) hoursRef.current.textContent = time.hours.toString().padStart(2, '0');
            if (minsRef.current) minsRef.current.textContent = time.minutes.toString().padStart(2, '0');
            if (secsRef.current) secsRef.current.textContent = time.seconds.toString().padStart(2, '0');
        };

        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="flex items-center">
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={daysRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest">{t("days")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={hoursRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest">{t("hrs")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={minsRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest">{t("mins")}</span>
                </div>
                <span className="text-xs sm:text-lg font-bold mb-3 sm:mb-4 opacity-50">:</span>
                <div className="flex flex-col items-center mx-0.5 sm:mx-1.5">
                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[1.75rem] sm:min-w-[2.5rem] shadow-inner border border-white/20 text-center">
                        <span ref={secsRef} className="text-xs sm:text-lg font-bold tracking-tighter block leading-tight">00</span>
                    </div>
                    <span className="text-[7px] sm:text-[9px] uppercase font-bold mt-0.5 sm:mt-1 opacity-80 tracking-wider sm:tracking-widest">{t("secs")}</span>
                </div>
            </div>
        </div>
    );
};

export default PromoCountdown;
