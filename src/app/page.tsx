import { Planos } from "./components/Planos";
import { Header } from "./components/Header";

export default function Home() {
  const links = [
    {
      to: "#",
      name: "string",
      tile: "string",
      id: "0123"
    }
  ]
  return (
    <main className="bg-slate-200 flex flex-col w-screen h-screen">
      <Header />
      <Planos />
    </main>
  )
}
