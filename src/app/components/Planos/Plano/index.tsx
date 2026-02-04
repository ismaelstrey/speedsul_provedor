import { PlanosContextType, PlanosType } from "@/types/planos"
import { Fibra } from "../../Tecnologia/Fibra"
import { useContext } from "react"
import { PlanosContext } from "../PlanosContext/PlanosContext"

export const Plano = ({ mensalidade, roteador, velocidade, instalacao, tipo }: PlanosType) => {
    const { localizacao } = useContext(PlanosContext) as PlanosContextType;
    const { latitude, longitude } = localizacao

    const geraMessage = (message: string) => {
        const url = localizacao ? `https://www.google.com/maps/@${latitude},${longitude},243m/data=!3m1!1e3?hl=pt-BR` : ''
        const msg = `https://wa.me/5551997940960?text=${message}: Plano selecionado: 👉 ${mensalidade}  🌐 ${url}`
        return msg
    }

    const colorPlano = (tipoCor: string) => tipoCor === 'Fibra' ? "text-emerald-200" : "text-sky-200"
    return (
        <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-50px_rgba(15,23,42,1)] transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">{tipo}</span>
                    <div className={`mt-2 text-4xl font-semibold ${colorPlano(tipo)}`}>{velocidade} MB</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    Premium
                </div>
            </div>
            <div className="mt-4 flex w-full">
                <Fibra tipo={tipo} />
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
                <div className="flex items-center justify-between">
                    <span>Mensalidade</span>
                    <span className="text-lg font-semibold text-white">R$ {mensalidade}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Instalação</span>
                    <span className="font-semibold text-emerald-200">{instalacao}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Wi-Fi</span>
                    <span className="text-white">{roteador.wifi}</span>
                </div>
            </div>
            <a
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white/90"
                href={geraMessage("Gostaria de saber mais sobre o ")}
            >
                Quero este plano
            </a>
        </div>
    )
}
