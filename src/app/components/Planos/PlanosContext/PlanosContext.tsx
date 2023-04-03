"use client";
import { createContext, FC, useEffect, useState } from "react";
import { PlanosContextType, PlanosType } from "@/types/planos";
import axios from "axios";


export const PlanosContext = createContext<PlanosContextType | null>(null)

const PlanosProvider: FC<any> = ({ children }) => {
    const [planos, setPlanos] = useState<PlanosType[]>([])

    const getPlanos = async () => axios.get("http://localhost:3000/api/planos").then(data => setPlanos(data.data))
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
