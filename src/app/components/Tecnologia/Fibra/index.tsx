interface tipo {
    tipo: string;
}
export const Fibra = ({ tipo }: tipo) => {
    const color = (cor: string) => {
        return cor === "Fibra" ? 'text-[#d508d3] ' : ' text-[#00a5f6] '
    }
    return (
        <div className={`flex text-2xl ${color(tipo)} font-extrabold px-2 rounded-lg realative ml-6 mt-3 text_fibra text_plano_borda_preto`}>{tipo}</div>
    )
}