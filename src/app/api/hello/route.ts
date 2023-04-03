// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }



const planos = [
  {
    id: 1,
    name: '400 MB',
    velocidade: 400,
    instalacao: "gratis",
    roteador:
    {
      id: 0,
      name: "intelbras",
      wifi: "2.4 Ghz, 5.8 Ghz"
    }

  }
]



export async function GET(request: Request, response: Response) {
  try {
    return response.status
  } catch (error) {
    console.log(error)
  }
}
