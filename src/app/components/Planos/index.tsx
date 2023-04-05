"use client";
import { useContext } from "react"
import { Plano } from "./Plano"
import { PlanosContext } from "./PlanosContext/PlanosContext"
import { PlanosContextType, PlanosType } from "@/types/planos";
interface listType {
    list: PlanosType[];
}
export const RenderPlano: any = ({ list }: listType) => list.map(plano => <Plano key={plano.id} id={plano.id} tipo={plano.tipo} velocidade={plano.velocidade} mensalidade={plano.mensalidade} instalacao={plano.instalacao} name={plano.name} roteador={plano.roteador} upload="150" />)

export const Planos = () => {
    const { planos } = useContext(PlanosContext) as PlanosContextType;
    const filterPlano = (planoList: PlanosType[], filtro: string) => planoList.filter(list => list.tipo === filtro)
    return (
        <div className="text-white justify-center content-center items-center flex flex-col w-full">
            <div className="flex container justify-evenly w-full flex-wrap">
                <RenderPlano list={filterPlano(planos, "Fibra")} />
            </div>
            <div className="flex container justify-evenly w-full flex-wrap">
                <RenderPlano list={filterPlano(planos, "Rádio")} />
            </div>
        </div>
    )
}