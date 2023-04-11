
export interface Tags {
    name: string;
    url?: string;
}
export type Produto = {
    titulo: string;
    descricao: string;
    img: string;
    tags: Tags[];
}