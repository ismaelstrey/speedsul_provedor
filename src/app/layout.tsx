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
      <body className="bg-slate-950 text-white antialiased">
        <PlanosProvider>
          <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.18),_transparent_40%)]">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </PlanosProvider>
      </body>
    </html>
  )
}
