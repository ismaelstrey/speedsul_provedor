export const Header = () => {
    return (
        <div className="flex w-full h-[200px] bg-[url('/img/logoAtivo.svg')] bg-cover min-[380px]:justify-center">
            <div className="bg-backLogo bg-cover w-[204px] h-[54px] mt-4 ml-4 m-2"></div>
            <div className="md:flex text-white w-[70%] mt-4 min-[380px]:hidden max-[600px]:block justify-end mr-11">
                <ul className="flex p-4 w-3/6 min-[700px]:w-4/6 flex-wrap justify-end gap-8 font-bold">
                    <li><a href="#" className="gradient_text">Inicio</a></li>
                    <li><a href="#" className="gradient_text">Produtos</a></li>
                    <li><a href="#" className="gradient_text">Serviços</a></li>
                </ul>
            </div>
        </div>
    )
}