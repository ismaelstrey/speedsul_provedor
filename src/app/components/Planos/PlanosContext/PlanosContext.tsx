"use client";
import { createContext, FC, useEffect, useState } from "react";
import { CordenadasType, PlanosContextType, PlanosType } from "@/types/planos";
import PlanoData from "../../../planos.json"

export const PlanosContext = createContext<PlanosContextType | null>(null)
const PlanosProvider: FC<any> = ({ children }) => {
    const [planos, setPlanos] = useState<PlanosType[]>([])
    const [localizacao, setLocalizacao] = useState<CordenadasType | any>([])

    const getPlanos = () => setPlanos(PlanoData)
    const getLocalizacao = () => navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords
        setLocalizacao({ latitude: latitude, longitude: longitude })
    });
    useEffect(() => {
        getPlanos()
        getLocalizacao()
    }, [])
    return (
        <PlanosContext.Provider value={{ localizacao, planos, getPlanos, getLocalizacao }}>
            {children}
        </PlanosContext.Provider>
    )
}
export default PlanosProvider
