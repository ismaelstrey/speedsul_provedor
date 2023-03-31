import { Plano } from "./Plano"

export const Planos = () => {
    return (
        <div className="text-white flex flex-colw-full">
            <div className="flex container">
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador:{name}} />
                <Plano />
                <Plano />
            </div>
            <div className="flex container">
                <Plano />
                <Plano />
            </div>
        </div>
    )
}