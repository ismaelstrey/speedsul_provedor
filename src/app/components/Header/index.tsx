"use client"
import Link from 'next/link'
export const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-backLogo bg-cover w-[150px] h-[40px] sm:w-[190px] sm:h-[50px]"></div>
                    <span className="sr-only">SpeedSul</span>
                </Link>
                <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
                    <Link href="/" className="transition hover:text-white">Início</Link>
                    <Link href="/produtos" className="transition hover:text-white">Produtos</Link>
                    <a href="#contato" className="transition hover:text-white">Contato</a>
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        href="#planos"
                        className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-white/50 hover:text-white"
                    >
                        Ver planos
                    </a>
                </div>
            </div>
        </header>
    )
}
