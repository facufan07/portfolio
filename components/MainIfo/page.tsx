"use client"

interface MainIfoProps {
    fontColor: string;
    backgroundColor: string;
    section: string;
    backgroundColor2: string;
}

import Welcome from "../Welcome/page";
import AboutMe from "../AboutMe/page";
import Contact from "../Contact/page";
import Tecnologies from "../Tecnologies/page";
import Proyects from "../Proyects/page";
import Trajectory from "../Trajectory/page";
import { useEffect, useRef } from "react";

export default function MainIfo({fontColor, backgroundColor, section, backgroundColor2, 
                                }: MainIfoProps) {

    const scrollbarStyle = fontColor === 'text-bHueso' ? 'scrollbar-thumb-bHueso' : 'scrollbar-thumb-nCarbon'
    const scrollbarTrack = fontColor === 'text-bHueso' ? 'scrollbar-track-nSuave' : 'scrollbar-track-bSuave'

    const mainRef = useRef<HTMLDivElement>(null);

    const refs = {
    Presentacion: useRef<HTMLDivElement>(null),
    Proyectos: useRef<HTMLDivElement>(null),
    Tecnologias: useRef<HTMLDivElement>(null),
    Trayectoria: useRef<HTMLDivElement>(null),
    Contacto: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const container = mainRef.current;
        const target = refs[section as keyof typeof refs]?.current;

        if (container && target) {
            const offset = 90;
            const topPos = target.offsetTop - offset;

            container.scrollTo({
                top: topPos,
                behavior: "smooth",
            });
        }
    }, [section]);

    return(
        <section 
        className={`lg:w-4/5 transition-all duration-800
                    mx-auto
                    max-sm:h-5/6 max-lg:py-4 
                    max-sm:w-full overflow-x-hidden
                    overflow-y-scroll scrollbar 
                    ${scrollbarStyle} ${scrollbarTrack}
                    min-h-[100dvh]`}
        id="mainIfo"
        ref={mainRef}
        >   
            <div>
                <Welcome 
                fontColor={fontColor}
                />
            </div>

            <div ref={refs.Presentacion}>
                <AboutMe 
                fontColor={fontColor}
                />
            </div>
            
            <div ref={refs.Proyectos}>
                <Proyects
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            </div>

            <div ref={refs.Tecnologias}>
                <Tecnologies
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            </div>

            <div ref={refs.Trayectoria}>
                <Trajectory
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            </div>
            
            <div ref={refs.Contacto}>
                <Contact
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            </div>
        </section>
    )
}