const Footer = () => {
    return <footer className="flex flex-col bg-backFooter bg-cover w-full h-full static bottom-0">
        <div className="flex relative top-36 flex-col w-screen bg-black h-full justify-center items-center content-center">
            <div className="flex h-full text-white container min-[700px]:flex-row max-[800px]:flex-col">
                <div className="w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen">
                    <div className="relative -top-24">
                        <h1 className="text-xl font-extrabold ">Cobertura</h1>
                        <span>Maquiné</span>
                    </div>
                </div>
                <div className="w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen relative -top-20">
                    <div>
                        <h1 className="text-xl font-extrabold">Cobertura</h1>
                        <span>Maquiné</span>
                    </div>
                </div>
                <div className=" w-1/3 text-center  min-[700px]:w-1/3 max-[800px]:w-screen relative -top-12 h-full">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-extrabold">Contato</h1>
                        <span className="ml-4 mt-4">WatsApp</span>
                        <span className="ml-4 mt-4">WatsApp</span>
                        <span className="ml-4 mt-4">WatsApp</span>
                        <span className="ml-4 mt-4">WatsApp</span>
                        <span className="ml-4 mt-4">WatsApp</span>
                        <span className="ml-4 mt-4">WatsApp</span>
                    </div>
                </div>

            </div>
        </div>
    </footer>
}


export default Footer