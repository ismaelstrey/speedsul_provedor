import { PlanosType } from "@/types/planos"
import { Fibra } from "../../Tecnologia/Fibra"

export const Plano = ({ id, name, mensalidade, roteador, velocidade, upload, instalacao, tipo }: PlanosType) => {
    const colorPlano = (tipoCor: string) => tipoCor === 'Fibra' ? "text_plano_borda_azul" : "gradient"

    return (
        <div className="flex flex-col justify-center content-center items-center rounded-full bg-black  w-80 h-80 border-8 border-blue-700 border-solid bg-[url('/img/gameBack.png')] bg-cover hover:border-blue-200">
            <div className={`font-bold text-5xl ${colorPlano(tipo)}`}>{velocidade} MB</div>
            <div className="flex w-full"><Fibra tipo={tipo} /></div>
            <div className="text_plano_borda_preto text-center mt-4 text_plano"><div className="text-xl">Mensalidade: <span className="text-3xl font-bold">R$ {mensalidade}</span></div>
                <div>Instalação: <span className="text-2xl p-2 font-bold text-yellow-300">{instalacao}</span></div>
                <div>Wifi: <span>{roteador.wifi}</span></div></div>
            <button className="bg-blue-600 p-2 rounded-lg border-2 border-white mt-4 shadow-lg hover:shadow-slate-200" >Saiba Mais</button>
        </div>
    )
}