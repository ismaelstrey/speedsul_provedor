import { Headers } from "./components/Header";
import { Planos } from "./components/Planos";

export default function Home() {
  const links  =[
    {
      to:"#",
      name: "string",
      tile: "string",
      id: "0123"
    }
  ]
  return (
    <main className="bg-black flex w-screen h-screen">

     <Planos/>
    </main>
  )
}
