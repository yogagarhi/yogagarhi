"use client";
import { useState, useEffect } from "react";

export default function DynamicBatchDate() {
    const [dateString, setDateString] = useState("");

    useEffect(() => {
        const referenceDate = new Date("2026-05-22T00:00:00Z");
        const cycleMs = 15 * 24 * 60 * 60 * 1000;
        const now = new Date();
        
        let nextTargetTime;
        if (now.getTime() < referenceDate.getTime()) {
            nextTargetTime = referenceDate.getTime();
        } else {
            const elapsedMs = now.getTime() - referenceDate.getTime();
            // Using Math.ceil to find the *end* of the current cycle, which is the start of the next batch
            const nextCycle = Math.ceil(elapsedMs / cycleMs);
            nextTargetTime = referenceDate.getTime() + (nextCycle * cycleMs);
        }

        const nextDate = new Date(nextTargetTime);
        const nextNextDate = new Date(nextTargetTime + 24 * 60 * 60 * 1000); // 1 day later
        
        const getOrdinalNum = (n: number) => {
            return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
        };
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        setDateString(`${getOrdinalNum(nextDate.getDate())} ${monthNames[nextDate.getMonth()]}`);
    }, []);

    // Prevent hydration mismatch by returning empty string initially or loading state
    return <>{dateString}</>;
}
