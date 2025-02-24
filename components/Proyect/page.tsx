interface ProyectsProps {
    fontColor: string;
    name: string;
    description: string;
    img: string;
    url: string;
    urlRepo: string;
    tecnologies: string[];
    challenge: string;
}

export default function Proyect({fontColor, name, description, img, url, 
                                urlRepo, tecnologies, challenge}: ProyectsProps) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}