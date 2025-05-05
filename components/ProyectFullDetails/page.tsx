import Image from "next/image";
import { createPortal } from "react-dom";
import Tecnology from "../Tecnology/page";

interface ProyectFullDetailsProps {
    name: string;
    url: string;
    backgroundColor: string;
    backgroundColor2: string;
    urlRepo: string;
    tecnologies: string[];
    challenge: string;
    description: string;
    img: string;
    fontColor: string;
    setIsSelected: (value: number|null) => void
}

export default function ProyectFullDetails({ name, url, backgroundColor, 
                                            backgroundColor2, urlRepo, tecnologies, 
                                            challenge, description, img, fontColor, 
                                            setIsSelected}:ProyectFullDetailsProps) {
    const svg = fontColor === 'text-bHueso' ? '/circle-xmark-svgrepo-com.svg' : '/circle-xmark-black.svg'
    const scrollbarStyle = fontColor === 'text-bHueso' ? 'scrollbar-thumb-bHueso' : 'scrollbar-thumb-nCarbon'
    const scrollbarTrack = fontColor === 'text-bHueso' ? 'scrollbar-track-nSuave' : 'scrollbar-track-bSuave'
    const underlineColor = fontColor === 'text-bHueso' ? 'border-nSuave' : 'border-BSuave'

    return createPortal(
        <section 
        className={`!fixed top-0 w-dvw h-dvh bg-black/20 z-[100]`}
        >
            <section
            className={`w-full h-full flex justify-center items-center`}
            >
                <div
                className={`${backgroundColor} w-4/5 h-5/6 overflow-y-auto lg:rounded-lg 
                            scrollbar ${scrollbarStyle} shadow-lg shadow-black pb-7
                            max-lg:w-full max-lg:h-full ${scrollbarTrack} px-7 relative`}
                >
                    <nav className="flex justify-between items-center pt-12 pb-10">
                        <h1
                        className={`text-5xl ${fontColor} font-bold tracking-widest
                                    max-lg:hidden border-b-2 ${underlineColor} pb-4`}
                        >
                            {name}
                        </h1>

                        <button
                        onClick={() => setIsSelected(null)}
                        className="hover:scale-125 transition-all duration-300 fixed right-[200px] max-lg:right-7"

                        >
                            <Image 
                            width={200} 
                            height={200}
                            alt="proyect"
                            src={svg}
                            className="w-14 max-sm:w-16"
                            />
                        </button>
                    </nav>
                    <div 
                    className="h-auto w-full flex max-lg:flex-col"
                    >
                        <h1
                        className={`text-5xl ${fontColor} font-bold tracking-widest lg:hidden mb-9 
                                    max-sm:text-3xl px-7 text-center border-b-2 ${underlineColor} pb-6`}
                        >
                            {name}
                        </h1>
                        <div
                        className={`h-auto w-2/4 flex flex-col items-center max-lg:w-full max-lg:mt-2 
                                    max-lg:mb-10 lg:pr-8`}
                        >
                            <Image
                            src={img}
                            width={200}
                            height={200}
                            alt="proyect image"
                            className="rounded-lg w-full h-2/4 mb-8 shadow-lg shadow-black object-cover"
                            />

                            <div 
                            className="mb-16 w-full flex justify-center gap-5 items-center"
                            >
                                <a 
                                className={`${backgroundColor2} px-3 py-6 rounded-lg shadow-md shadow-black w-2/4
                                            text-center hover:scale-90 transition-all duration-300
                                            hover:shadow-none ${fontColor} tracking-widest hover:bg-transparent
                                            text-2xl font-semibold max-sm:text-xl`}
                                href={url}
                                target="_blank"> 
                                    Live
                                </a>    
                                <a 
                                className={`${backgroundColor2} px-3 py-6 rounded-lg shadow-md shadow-black w-2/4
                                            text-center hover:scale-90 transition-all duration-300 ${fontColor}
                                            hover:shadow-none tracking-widest hover:bg-transparent
                                            text-2xl font-semibold max-sm:text-xl`}
                                href={urlRepo}
                                target="_blank"
                                >
                                    Repositorio
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-5 justify-center">
                                {tecnologies.map((t, i) => (
                                    <Tecnology
                                    fontColor={fontColor}
                                    backgroundColor={backgroundColor}
                                    backgroundColor2={backgroundColor2}
                                    t={t}
                                    key={i}
                                    />
                                ))}
                            </div>
                            
                        </div>
                        <div
                        className="h-auto w-2/4 px-7 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center"
                        >
                            <p
                            className={`${fontColor} text-xl font-semibold tracking-widest max-sm:text-base 
                                        max-lg:text-center`}
                            >
                                {description}
                            </p>

                            <h2
                            className={`${fontColor} text-2xl font-semibold tracking-widest mt-14 mb-7 
                                        max-lg:text-center border-b-2 ${underlineColor} w-[7.5ch] pb-1`}>
                                Desafío
                            </h2>

                            <p
                            className={`${fontColor} text-xl font-semibold tracking-widest max-sm:text-base 
                                        max-lg:text-center`}
                            >
                                {challenge}
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </section>,
        document.body
    )
}