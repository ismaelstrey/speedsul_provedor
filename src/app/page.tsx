import { Planos } from "./components/Planos";
import { Header } from "./components/Header";
import PlanosProvider from "./components/Planos/PlanosContext/PlanosContext";

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
    <PlanosProvider>
      <main className="bg-slate-200 flex flex-col w-screen h-screen">
        <Header />
        <Planos />
      </main></PlanosProvider>
  )
}
