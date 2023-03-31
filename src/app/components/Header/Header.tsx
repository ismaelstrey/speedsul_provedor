interface link {
    to: string;
    name: string;
    tile: string;
    id?: string;
}


interface headerProps {
    links: [link]
}
export const Headers = ({ links }: headerProps) => links.map(link => <li className="text-white" key={link.id}><a href="#">{link.to}</a></li>)