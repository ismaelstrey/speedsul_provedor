export interface PlanosType {
    id: number;
    name: string;
    mensalidade: string;
    velocidade: number,
    upload: string;
    instalacao: string;
    tipo: string;
    roteador:
    {
        id: number,
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