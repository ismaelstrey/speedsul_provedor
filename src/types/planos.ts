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
export interface CordenadasType {
    latitude: number;
    longitude: number;
}

export type PlanosContextType = {
    planos: PlanosType[];
    localizacao: CordenadasType[];
    // loadPlanos: () => void;
    getPlanos: () => void;
    getLocalizacao: () => void;

}