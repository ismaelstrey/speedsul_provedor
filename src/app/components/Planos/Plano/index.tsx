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

    const colorPlano = (tipoCor: string) =>
        tipoCor === 'Fibra' ? "from-emerald-400 via-cyan-300 to-fuchsia-400" : "from-sky-400 via-purple-400 to-rose-400"
    return (
        <div className="glow-card group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))] p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,1)] transition hover:-translate-y-2 hover:border-white/30">
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-xs uppercase tracking-[0.4em] text-white/60">{tipo}</span>
                    <div
                        className={`mt-2 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${colorPlano(tipo)} animate-[gradient-shift_8s_ease_infinite]`}
                    >
                        {velocidade} MB
                    </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Ultra
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
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_12px_30px_-18px_rgba(244,114,182,1)] transition hover:scale-[1.02]"
                href={geraMessage("Gostaria de saber mais sobre o ")}
            >
                Quero este plano
            </a>
        </div>
    )
}
