

interface TecnologyProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

import data from "@/data/tecnologies.json";
import dataTools from "@/data/otherTools.json";
import dataFront from "@/data/frontend.json";
import Tecnology from "../Tecnology/page";

import "./style.css"

export default function Tecnologies({fontColor, backgroundColor, backgroundColor2}: TecnologyProps){
    const underlineColor = fontColor === 'text-bHueso' ? 'border-vMusgo' : 'border-vSalvia'

    return(
        <>
            <div className="px-24 py-7 animation sm:w-full flex flex-col items-center mb-[100px]">
                
                <h1 className={`text-4xl tracking-widest ${fontColor} font-bold mb-16 ${underlineColor} pb-4
                                border-b-2 lg:mt-10`}>
                    Tecnologías
                </h1>
                
                <div>
                    <h2 
                    className={`text-4xl tracking-widest ${fontColor} font-semibold mb-6 max-sm:text-center
                                max-sm:text-2xl`}
                    >
                        Tecnologías Frontend que utilizo:
                    </h2>
                    <div 
                    className={`flex flex-wrap gap-5 mb-[100px] mt-9 max-sm:justify-center`}
                    >
                        {dataFront.map((t, i) => (
                            <Tecnology 
                            fontColor={fontColor}
                            t={t.name}
                            backgroundColor={backgroundColor}
                            backgroundColor2={backgroundColor2}
                            key={i}
                            />
                        ))}
                    </div>

                    <h2 
                    className={`text-4xl tracking-widest ${fontColor} font-semibold mb-6 max-sm:text-center
                                max-sm:text-2xl`}
                    >
                        Tecnologías Backend que utilizo:
                    </h2>
                    <div 
                    className={`flex flex-wrap gap-5 mb-[100px] mt-9 max-sm:justify-center`}
                    >
                        {data.map((t, i) => (
                            <Tecnology 
                            fontColor={fontColor}
                            t={t.name}
                            backgroundColor={backgroundColor}
                            backgroundColor2={backgroundColor2}
                            key={i}
                            />
                        ))}
                    </div>
                    
                    <h2
                    className={`text-4xl tracking-widest ${fontColor} font-semibold max-sm:text-center
                                max-sm:text-2xl`}
                    >
                        Otras herramientas que utilizo:
                    </h2>
                    <div 
                    className={`flex flex-wrap gap-5 mt-9 max-sm:justify-center`}
                    >
                        {dataTools.map((t, i) => (
                            <Tecnology 
                            fontColor={fontColor}
                            t={t.name}
                            backgroundColor={backgroundColor}
                            backgroundColor2={backgroundColor2}
                            key={i}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}