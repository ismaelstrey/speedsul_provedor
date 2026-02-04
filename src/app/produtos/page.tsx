import Produto from "./produto/produto";
import produtos from "../produtos.json"

export default function Home() {
  const RenderProdutos: any = () => produtos.map(produto => <Produto key={produto.titulo} img={produto.img} titulo={produto.titulo} descricao={produto.descricao} tags={produto.tags} />)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 text-white">
      <header className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50">Produtos</span>
        <h1 className="text-3xl font-semibold sm:text-4xl">Tecnologia premium para sua conexão</h1>
        <p className="max-w-2xl text-sm text-white/60 sm:text-base">
          Equipamentos e soluções selecionadas para garantir estabilidade, cobertura e
          desempenho em todos os ambientes.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RenderProdutos />
      </section>
    </div>

  )
}
