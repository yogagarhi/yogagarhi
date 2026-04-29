"use client";
import { useState, useEffect } from "react";

interface PromoCountdownProps {
    className?: string;
}

const PromoCountdown = ({ className = "" }: PromoCountdownProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            // Target: 20 days from April 29th, 2026
            const target = new Date("2026-05-19T00:00:00");

            const distance = target.getTime() - now.getTime();

            if (distance < 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        };

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-1 sm:mx-1.5">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-2 py-1 min-w-[2.2rem] sm:min-w-[2.5rem] shadow-inner border border-white/20">
                <span className="text-base sm:text-lg font-bold tracking-tighter">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold mt-1 opacity-80 tracking-widest">{label}</span>
        </div>
    );

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="flex items-center">
                <TimeUnit value={timeLeft.days} label="Days" />
                <span className="text-lg font-bold mb-4 opacity-50">:</span>
                <TimeUnit value={timeLeft.hours} label="Hrs" />
                <span className="text-lg font-bold mb-4 opacity-50">:</span>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <span className="text-lg font-bold mb-4 opacity-50">:</span>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
        </div>
    );
};

export default PromoCountdown;
