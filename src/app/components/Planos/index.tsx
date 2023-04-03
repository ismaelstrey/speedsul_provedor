"use client";
import { useContext } from "react"
import { Plano } from "./Plano"
import { PlanosContext } from "./PlanosContext/PlanosContext"
import { PlanosContextType } from "@/types/planos";


export const Planos = () => {
    const { planos } = useContext(PlanosContext) as PlanosContextType;



    const roteador =
    {
        "id": '01',
        "name": "intelbras",
        "wifi": "5ghz"

    }
    const RenderPlano = () => {

        return planos.map(plano => <Plano key={plano.id} id={plano.id} download={plano.velocidade} mensalidade={plano.mensalidade} instalacao={plano.instalacao} name={plano.name} roteador={plano.roteador} link="#" upload="150" />)
    }

    return (

        <div className="text-white justify-center content-center items-center flex flex-col w-full">

            <div className="flex container justify-evenly">

                <RenderPlano />
            </div>
        </div>

    )
}