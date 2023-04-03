interface tipoWifi {
    id: string
    name: string;
    wifi: string

}

export interface PlanoProps {
    id: string;
    name: string;
    download: number;
    upload: string;
    mensalidade: string;
    roteador: tipoWifi;
    link: string;
    instalacao: string;
}