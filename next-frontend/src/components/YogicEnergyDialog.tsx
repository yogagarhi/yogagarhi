"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import dynamic from "next/dynamic";

const YogicEnergyModal = dynamic(() => import("./dialogs/YogicEnergyModal"), { ssr: false });

interface YogicEnergyContextType {
    showYogicEnergy: boolean;
    setShowYogicEnergy: (show: boolean) => void;
}

const YogicEnergyContext = createContext<YogicEnergyContextType | undefined>(undefined);

export function useYogicEnergy() {
    const context = useContext(YogicEnergyContext);
    if (!context) {
        throw new Error("useYogicEnergy must be used within a YogicEnergyProvider");
    }
    return context;
}

export function YogicEnergyProvider({ children }: { children: ReactNode }) {
    const [showYogicEnergy, setShowYogicEnergy] = useState(false);

    return (
        <YogicEnergyContext.Provider value={{ showYogicEnergy, setShowYogicEnergy }}>
            {children}
            {showYogicEnergy && <YogicEnergyModal />}
        </YogicEnergyContext.Provider>
    );
}
