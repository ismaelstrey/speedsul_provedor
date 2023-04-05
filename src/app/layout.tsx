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
      <body>{children}</body>
    </html>
  )
}
