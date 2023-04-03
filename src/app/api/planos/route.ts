// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }





export async function GET(request: Request) {
  const planos = [
    {
      id: 0,
      name: '400 MB',
      mensalidade: "135,00",
      velocidade: 400,
      instalacao: "gratis",
      tipo: "fibra",
      upload: "75",
      roteador:
      {
        id: 0,
        name: "intelbras",
        wifi: "2.4 Ghz, 5.8 Ghz",
        modelo: "sw-150"
      }

    },
    {
      id: 1,
      name: '150 MB',
      mensalidade: "100,00",
      velocidade: 150,
      upload: "75",
      instalacao: "RS 150,00",
      tipo: "fibra",
      roteador:
      {
        id: 1,
        name: "intelbras",
        wifi: "2.4 Ghz, 5.8 Ghz",
        modelo: "sw-150"
      }


    },
    {
      id: 2,
      name: '15 MB',
      mensalidade: "160,00",
      velocidade: 150,
      upload: "75",
      instalacao: "RS 150,00",
      tipo: "fibra",
      roteador:
      {
        id: 2,
        name: "intelbras",
        wifi: "2.4 Ghz, 5.8 Ghz",
        modelo: "sw-150"
      }

    },
    {
      id: 3,
      name: '10 MB',
      mensalidade: "120,00",
      velocidade: 150,
      upload: "75",
      instalacao: "RS 150,00",
      tipo: "Rádio",
      roteador:
      {
        id: 3,
        name: "intelbras",
        wifi: "2.4 Ghz, 5.8 Ghz",
        modelo: "sw-150"
      }

    },
    {
      id: 4,
      name: '5 MB',
      mensalidade: "100,00",
      velocidade: 5,
      upload: "2,5",
      instalacao: "RS 100,00",
      tipo: "Rádio",
      roteador:
      {
        id: 4,
        name: "intelbras",
        wifi: "2.4 Ghz, 5.8 Ghz",
        modelo: "sw-150"
      }

    }
  ]


  return new Response(JSON.stringify(planos))
}
