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
        loadPlanos ?
            <div className="flex flex-col gap-20 pb-24 text-white">
                <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-16 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex max-w-2xl flex-col gap-6">
                        <span className="w-fit rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
                            Conexão inteligente
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                            Internet ultrarrápida com design moderno e suporte humano.
                        </h1>
                        <p className="text-base text-white/60 sm:text-lg">
                            Planos de fibra e rádio que entregam estabilidade, baixa latência e
                            experiência premium para sua casa ou empresa.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#planos"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white/90"
                            >
                                Ver planos
                            </a>
                            <a
                                href="#contato"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/60"
                            >
                                Fale conosco
                            </a>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { label: "Disponibilidade", value: "99,9%" },
                                { label: "Suporte", value: "24/7" },
                                { label: "Instalação", value: "Em até 48h" },
                            ].map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-2xl font-semibold">{item.value}</p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_20px_60px_-40px_rgba(59,130,246,0.8)]">
                        <h2 className="text-xl font-semibold">Conectividade sob medida</h2>
                        <p className="text-sm text-white/60">
                            Escolha o plano ideal para streaming, home office ou negócios com alto desempenho.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-white/70">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                Wi-Fi com cobertura inteligente
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-sky-400"></span>
                                Monitoramento proativo da rede
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
                                Atendimento humano e rápido
                            </span>
                        </div>
                    </div>
                </section>
                <section id="planos" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
                    <div className="flex flex-col gap-3">
                        <span className="text-xs uppercase tracking-[0.4em] text-white/50">Planos</span>
                        <h2 className="text-3xl font-semibold">Escolha a tecnologia ideal</h2>
                        <p className="text-sm text-white/60">
                            Planos fibra para máxima performance ou rádio para locais específicos.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">Fibra óptica</h3>
                            <span className="rounded-full border border-emerald-400/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                                Mais veloz
                            </span>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <RenderPlano list={filterPlano(planos, "Fibra")} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">Rádio</h3>
                            <span className="rounded-full border border-sky-400/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
                                Cobertura ampla
                            </span>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <RenderPlano list={filterPlano(planos, "Rádio")} />
                        </div>
                    </div>
                </section>
            </div>

            : <div className="flex absolute bg-black w-screen h-screen z-50 top-0 justify-center content-center items-center">

                <div className="gradient_text animate-pulse h-40"> <div className="bg-backLogo bg-cover w-[204px] h-[54px] mt-4 ml-4 m-2"></div><span>Carregando...</span></div>
            </div>
    )
}
