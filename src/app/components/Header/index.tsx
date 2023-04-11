"use client"
import Link from 'next/link'
export const Header = () => {
    return (
        <div className="flex w-screen flex-col h-full min-[380px]:justify-center">
            <div className='bg-black flex w-screen justify-between'>
                <Link href="/"><div className="bg-backLogo bg-cover w-[204px] h-[54px] mt-4 ml-4 m-2"></div></Link>
                <div className="md:flex text-white w-[70%] mt-4 min-[380px]:hidden max-[600px]:block justify-end mr-11">
                    <ul className="flex p-4 w-3/6 min-[700px]:w-4/6 flex-wrap justify-end gap-8 font-bold">
                        <li><Link href="/" className='gradient_text'>Inicio</Link></li>
                        <li><Link href="/produtos" className='gradient_text'>Produtos</Link></li>
                        <li><a href="#contato" className='gradient_text'>Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex bg-backHeader bg-cover w-full min-h-[90px] min-[1930px]:min-h-[120px] min-[1960px]:min-h-[160px] '></div>
        </div>
    )
}