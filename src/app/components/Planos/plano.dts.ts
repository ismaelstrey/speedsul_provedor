interface tipoWifi {
    name: string;

}

export interface PlanoProps {
    id: string;
    name: string;
    download: string;
    upload: string;
    mensalidade: string;
    roteador: [tipoWifi]
    link: string;
    instalacao: string;
}