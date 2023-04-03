export interface PlanosType {
    id: string;
    name: string;
    mensalidade: string;
    velocidade: number,
    upload: string;
    instalacao: string;
    tipo: string;
    roteador:
    {
        id: 0,
        name: string;
        wifi: string;
        modelo: string;
    }
}

export type PlanosContextType = {
    planos: PlanosType[];
    // loadPlanos: () => void;
    getPlanos: () => void;

}