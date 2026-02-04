import { Produto } from "@/types/produtos"
import Image from "next/image"

const Produto = ({ titulo, descricao, tags, img }: Produto) => {
    return (
        <article
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_60px_-50px_rgba(15,23,42,1)] transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            title={titulo}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={img}
                    alt={titulo}
                    height={535}
                    width={800}
                    placeholder="blur"
                    blurDataURL="/img/blur.avif"
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                <h2 className="text-xl font-semibold text-white">{titulo}</h2>
                <p className="text-sm leading-relaxed text-white/60">{descricao}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {tags.map(tag => (
                        <span
                            key={tag.name}
                            className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}
export default Produto
