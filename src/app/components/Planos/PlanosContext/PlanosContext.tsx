"use client";
import { createContext, FC, useEffect, useState } from "react";
import { CordenadasType, PlanosContextType, PlanosType } from "@/types/planos";
import PlanoData from "../../../planos.json"


export const PlanosContext = createContext<PlanosContextType | null>(null)

const PlanosProvider: FC<any> = ({ children }) => {
    const [planos, setPlanos] = useState<PlanosType[]>([])
    const [localizacao, setLocalizacao] = useState<CordenadasType[]>([])

    const getPlanos = () => setPlanos(PlanoData)
    const getLocalizacao = () => navigator.geolocation.getCurrentPosition(function (position) {
        setLocalizacao([{ latitude: position.coords.latitude, longitude: position.coords.longitude }])
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
