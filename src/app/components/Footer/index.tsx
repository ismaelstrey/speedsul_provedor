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

    return <footer className="flex flex-col bg-backFooter bg-cover w-full h-full static bottom-0 ">
        <div className="flex relative top-36 flex-col w-screen bg-black h-full justify-center items-center content-center">
            <div className="flex h-full text-white container min-[700px]:flex-row max-[800px]:flex-col  min-[1980px]:mt-14">
                <div className="w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen">
                    <div className="flex flex-col relative -top-24">
                        <h1 className="text-xl font-extrabold mb-4"><span className="gradient_text">Links</span></h1>
                        <ul className="flex flex-col gap-8 font-bold">
                            <li><Link href="/" className='text-white hover:text-fuchsia-700'>Inicio</Link></li>
                            <li><Link href="/produtos" className='text-white hover:text-fuchsia-700'>Produtos</Link></li>
                            <li><Link href="/servicos" className='text-white hover:text-fuchsia-700'>Serviços</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen relative -top-20">
                    <div>
                        <h1 className="text-xl font-extrabold mb-4 gradient_text"><span className="gradient_text">Cobertura</span></h1>
                        <span>Maquiné-RS</span>
                        <div className="mt-5"><div>
                            <h1>Minha Localização</h1>
                            <span>{latitude},{longitude}</span>
                        </div></div>
                    </div>
                </div>
                <div className=" w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen relative -top-12 h-full ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-extrabold gradient_text" id="contato">Contato</h1>
                        <a href={geraMessage("Tem cobertura em minha região?")}><Image className="cursor-pointer" src="/whatsapp.svg" width={100} height={100} alt="Wats" /></a>

                        <span className="ml-14 font-bold ">Fone: <a href="tel:+55(51)997940960">(51)9 9794-0960</a></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}


export default Footer