import { Plano } from "./Plano"


export const Planos = () => {
    const roteador =
    {
        "id": '01',
        "name": "intelbras",
        "wifi": "5ghz"

    }

    return (
        <div className="text-white justify-center content-center items-center flex flex-col w-full">
            <div className="flex container justify-between">
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador} link="#" upload="150" key='001' />
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador} link="#" upload="150" key='001' />
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador} link="#" upload="150" key='001' />

            </div>
            <div className="flex container justify-evenly">
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador} link="#" upload="150" key='001' />
                <Plano id="1" download="400" mensalidade="160,00" instalacao="Grátis" name="Plano de 400 mbps" roteador={roteador} link="#" upload="150" key='001' />
            </div>
        </div>
    )
}