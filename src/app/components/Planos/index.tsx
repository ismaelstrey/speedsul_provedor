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
    const { planos, loadPlanos } = useContext(PlanosContext) as PlanosContextType;
    const filterPlano = (planoList: PlanosType[], filtro: string) => planoList.filter(list => list.tipo === filtro)
    return (
        loadPlanos ? <div className="text-white justify-center content-center items-center flex flex-col w-full">
            <div className="flex container justify-evenly w-full flex-wrap">
                <RenderPlano list={filterPlano(planos, "Fibra")} />
            </div>
            <div className="flex container justify-evenly w-full flex-wrap">
                <RenderPlano list={filterPlano(planos, "Rádio")} />
            </div>
        </div>
            : <div className="flex absolute bg-black w-screen h-screen z-50 top-0 justify-center content-center items-center">

                <div className="gradient_text animate-pulse h-40"> <div className="bg-backLogo bg-cover w-[204px] h-[54px] mt-4 ml-4 m-2"></div><span>Carregando...</span></div>
            </div>
    )
}