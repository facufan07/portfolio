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
    isSelected: boolean;
    setIsSelected: () => void;
    setSelectedProject: (value: number | null) => void;
}

import Image from "next/image";
import Tecnology from "../Tecnology/page";
import ProyectFullDetails from "../ProyectFullDetails/page";

export default function Proyect({fontColor, name, description, img, url, 
                                urlRepo, tecnologies, challenge, backgroundColor,
                                backgroundColor2, isSelected, setIsSelected, setSelectedProject}: ProyectsProps) {
    
    const tecnologiesCuted = tecnologies.slice(0, 5);

    const borderColor = fontColor === "text-bHueso" ? "border-bHueso hover:bg-bHueso hover:text-nCarbon" : "border-nCarbon hover:bg-nCarbon hover:text-bHueso";

    return (
        <>
            <div
            className={`rounded-lg mx-14 px-6 py-6 scale-95 transition-all duration-300 shadow-md 
                        shadow-black ${backgroundColor} max-sm:w-6/6 max-sm:h-auto`}
            >
                <div
                className="w-full"
                >
                    <Image 
                    src={img}
                    width={400}
                    height={400}
                    alt="proyect"
                    className="rounded-lg mb-8 shadow-md shadow-black w-[100%] lg:h-[300px] object-cover"
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
                <button 
                className={`${borderColor} ${fontColor} border-2 rounded-lg px-4 py-2 mt-8  transition-all duration-300`}
                onClick={() => setIsSelected()}
                >
                    <span
                    className="font-semibold text-2xl tracking-widest max-sm:text-base"
                    >
                        Visualizar
                    </span>
                </button>
            </div>

            {isSelected && (
                <ProyectFullDetails
                fontColor={fontColor}
                name={name}
                description={description}
                img={img}
                url={url}
                urlRepo={urlRepo}
                tecnologies={tecnologies}
                challenge={challenge}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                setIsSelected={setSelectedProject}
                />
            )}
        </>
        
    )
}