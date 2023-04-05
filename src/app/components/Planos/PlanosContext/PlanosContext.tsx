"use client";
import { createContext, FC, useEffect, useState } from "react";
import { PlanosContextType, PlanosType } from "@/types/planos";
import PlanoData from "../../../planos.json"


export const PlanosContext = createContext<PlanosContextType | null>(null)

const PlanosProvider: FC<any> = ({ children }) => {
    const [planos, setPlanos] = useState<PlanosType[]>([])

    const getPlanos = () => setPlanos(PlanoData)
    useEffect(() => {
        getPlanos()
    }, [])

    return (
        <PlanosContext.Provider value={{ planos, getPlanos }}>
            {children}
        </PlanosContext.Provider>
    )
}
export default PlanosProvider
