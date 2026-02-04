interface tipo {
    tipo: string;
}
export const Fibra = ({ tipo }: tipo) => {
    const color = (cor: string) => {
        return cor === "Fibra" ? 'from-emerald-300 via-cyan-300 to-fuchsia-400' : 'from-sky-300 via-purple-400 to-rose-400'
    }
    return (
        <div
            className={`flex text-2xl font-extrabold px-2 rounded-lg relative ml-6 mt-3 text-transparent bg-clip-text bg-gradient-to-r ${color(tipo)} animate-[gradient-shift_8s_ease_infinite]`}
        >
            {tipo}
        </div>
    )
}
