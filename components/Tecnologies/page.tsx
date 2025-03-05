

interface TecnologyProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

import data from "@/data/tecnologies.json";
import dataTools from "@/data/otherTools.json";
import Tecnology from "../Tecnology/page";
import "./style.css"

export default function Tecnologies({fontColor, backgroundColor, backgroundColor2}: TecnologyProps){

    return(
        <>
            <div className="px-24 py-7 animation sm:w-full">
                <h1 
                className={`text-4xl tracking-widest ${fontColor} font-semibold mb-6 max-sm:text-center`}
                >
                    Tecnologías que utilizó:
                </h1>
                <div 
                className={`flex flex-wrap gap-5 mb-[100px] mt-9`}
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
                
                <h1
                className={`text-4xl tracking-widest ${fontColor} font-semibold max-sm:text-center`}
                >
                    Otras herramientas que utilizó:
                </h1>
                <div 
                className={`flex flex-wrap gap-5 mt-9`}
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
        </>
    )
}