import { Planos } from "./components/Planos";
import { Header } from "./components/Header";
import PlanosProvider from "./components/Planos/PlanosContext/PlanosContext";
import Footer from "./components/Footer";

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
      <main className=" bg-backSite bg-repeat flex flex-col w-screen h-screen">
        <Header />
        <Planos />
        <Footer />
      </main>
    </PlanosProvider>
  )
}
