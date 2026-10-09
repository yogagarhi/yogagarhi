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
    const [hasOpened, setHasOpened] = useState(false);

    const handleSetShowYogicEnergy = (show: boolean) => {
        if (show) setHasOpened(true);
        setShowYogicEnergy(show);
    };

    return (
        <YogicEnergyContext.Provider value={{ showYogicEnergy, setShowYogicEnergy: handleSetShowYogicEnergy }}>
            {children}
            {hasOpened && <YogicEnergyModal />}
        </YogicEnergyContext.Provider>
    );
}
