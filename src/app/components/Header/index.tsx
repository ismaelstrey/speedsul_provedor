export const Header = () => {
    return (
        <div className="flex w-full h-[200px] bg-[url('/img/logoAtivo.svg')] bg-cover">
            <div className="bg-backLogo bg-cover w-[200px] h-[50px] mt-4 ml-4"></div>
            <div className="text-white w-full mt-4">
                <ul className="flex p-4 w-5/6 flex-wrap justify-end gap-8">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Serviços</a></li>
                </ul>
            </div>
        </div>
    )
}