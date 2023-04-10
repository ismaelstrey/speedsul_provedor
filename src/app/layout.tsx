import Footer from './components/Footer'
import { Header } from './components/Header'
import PlanosProvider from './components/Planos/PlanosContext/PlanosContext'
import './globals.css'

export const metadata = {
  title: 'SpeedSul',
  description: 'Provedor de internet banda larga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <PlanosProvider>
          <main className=" bg-backSite bg-repeat flex flex-col w-screen h-full">
            <Header />
            <div className='min-h-[calc(100vh-496px)]'>{children}</div>
            <Footer />
          </main>
        </PlanosProvider>
      </body>
    </html>
  )
}
