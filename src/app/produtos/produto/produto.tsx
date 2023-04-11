import { Produto } from "@/types/produtos"
import Image from "next/image"

const Produto = ({ titulo, descricao, tags, img }: Produto) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-gray-800 my-8" title={titulo} >
            <Image className="w-full" src={img} alt={titulo} height={100} width={100} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{titulo}</div>
                <p className="text-gray-700 text-base">
                    {descricao}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map(tag => <span key={tag.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag.name}</span>)}
            </div>
        </div>
    )
}
export default Produto