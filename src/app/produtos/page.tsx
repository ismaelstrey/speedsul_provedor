import Produto from "./produto/produto";
import produtos from "../produtos.json"

export default function Home() {
  const RenderProdutos: any = () => produtos.map(produto => <Produto key={produto.titulo} img={produto.img} titulo={produto.titulo} descricao={produto.descricao} tags={produto.tags} />)

  return (
    <div className="flex w-screen justify-center">
      <div className="flex container w-full bg-white rounded-lg shadow-lg shadow-amber-800 mb-3 gap-2 flex-wrap justify-evenly">
        <RenderProdutos />
      </div>
    </div>

  )
}
