"use client";
import { useContext } from "react"
import { PlanosContext } from "../Planos/PlanosContext/PlanosContext"
import { PlanosContextType } from "@/types/planos";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const { localizacao } = useContext(PlanosContext) as PlanosContextType;
    const { latitude, longitude } = localizacao
    const url = `https://www.google.com/maps/@${latitude},${longitude},243m/data=!3m1!1e3?hl=pt-BR`

    const geraMessage = (message: string) => {
        const url = localizacao ? `https://www.google.com/maps/@${latitude},${longitude},243m/data=!3m1!1e3?hl=pt-BR` : ''
        const msg = `https://wa.me/5551997940960?text=${message}:🌐 ${url}`
        return msg
    }

    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 text-white/70 md:flex-row">
                <div className="flex flex-1 flex-col gap-4">
                    <div className="bg-backLogo bg-cover w-[180px] h-[50px]"></div>
                    <p className="text-sm leading-relaxed text-white/60">
                        Conectividade premium para sua casa e seu negócio, com suporte humano e
                        performance de ponta.
                    </p>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                        <span>SpeedSul</span>
                        <span className="h-1 w-1 rounded-full bg-white/30"></span>
                        <span>Internet de alta performance</span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 text-sm">
                    <h2 className="text-base font-semibold text-white">Links rápidos</h2>
                    <Link href="/" className="transition hover:text-white">Início</Link>
                    <Link href="/produtos" className="transition hover:text-white">Produtos</Link>
                    <Link href="/servicos" className="transition hover:text-white">Serviços</Link>
                </div>
                <div className="flex flex-1 flex-col gap-3 text-sm">
                    <h2 className="text-base font-semibold text-white">Cobertura</h2>
                    <span>Maquiné - RS</span>
                    <span className="text-white/50">Minha localização</span>
                    <span className="text-xs text-white/40">{latitude},{longitude}</span>
                    <a
                        className="inline-flex items-center gap-2 text-white transition hover:text-white/90"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver no mapa
                        <span aria-hidden>↗</span>
                    </a>
                </div>
                <div className="flex flex-1 flex-col gap-4 text-sm">
                    <h2 className="text-base font-semibold text-white" id="contato">Contato</h2>
                    <a href={geraMessage("Tem cobertura em minha região?")} className="inline-flex items-center gap-3">
                        <Image className="cursor-pointer" src="/whatsapp.svg" width={56} height={56} alt="WhatsApp" />
                        <div>
                            <span className="block text-white">Fale com nosso time</span>
                            <span className="text-xs text-white/50">Resposta rápida no WhatsApp</span>
                        </div>
                    </a>
                    <span className="text-white/60">
                        Fone: <a className="text-white" href="tel:+55(51)997940960">(51) 9 9794-0960</a>
                    </span>
                </div>
            </div>
            <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
                © 2024 SpeedSul. Todos os direitos reservados.
            </div>
        </footer>
    )
}


export default Footer
