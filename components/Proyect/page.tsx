interface ProyectsProps {
    fontColor: string;
    name: string;
    description: string;
    img: string;
    url: string;
    urlRepo: string;
    tecnologies: string[];
    challenge: string;
    backgroundColor: string;
    backgroundColor2: string;
}

import Image from "next/image";
import Tecnology from "../Tecnology/page";

export default function Proyect({fontColor, name, description, img, url, 
                                urlRepo, tecnologies, challenge, backgroundColor,
                                backgroundColor2}: ProyectsProps) {
    
    const tecnologiesCuted = tecnologies.slice(0, 5);

    return (
        <button className={`rounded-lg mx-14 px-6 py-6 hover:scale-90 scale-95 transition-all duration-300 shadow-lg shadow-black ${backgroundColor} max-sm:w-4/6`}>
            <div
            className="w-full flex justify-center"
            >
                <Image 
                src={img}
                width={400}
                height={400}
                alt="proyect"
                className="rounded-lg mb-8 w-full shadow-md shadow-black"
                />
            </div>
            
            <h1 
            className={`${fontColor} text-center text-5xl max-sm:text-2xl font-bold tracking-widest`}
            >
                {name}
            </h1>
            <div 
            className={`flex flex-wrap gap-4 mt-8`}
            >
                {tecnologiesCuted.map((t, i)=>(
                    <Tecnology
                    fontColor={fontColor}
                    t={t}
                    backgroundColor={backgroundColor}
                    backgroundColor2={backgroundColor2}
                    key={i}
                    />
                ))}
                {tecnologies > tecnologiesCuted && (
                    <div
                    className={`flex items-center gap-2 ${backgroundColor2} rounded-lg px-3 py-1 shadow-md shadow-black`}
                    >
                        <span
                        className={`${fontColor} font- text-xl`}
                        >
                            +
                        </span>
                        <span 
                        className={`${fontColor} tracking-widest font-semibold text-xl`}
                        >
                            {tecnologies.length - tecnologiesCuted.length}
                        </span>
                    </div>
                )}
            </div>
            
        </button>
    )
}