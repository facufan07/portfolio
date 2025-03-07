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

export default function MainIfo({fontColor, backgroundColor, section, backgroundColor2, 
                                }: MainIfoProps) {

    const scrollbarStyle = fontColor === 'text-bHueso' ? 'scrollbar-thumb-bHueso' : 'scrollbar-thumb-nCarbon'
    const scrollbarTrack = fontColor === 'text-bHueso' ? 'scrollbar-track-nSuave' : 'scrollbar-track-bSuave'

    return(
        <section 
        className={`lg:w-4/5 transition-all duration-800
                    flex flex-col items-center lg:justify-center
                    max-sm:h-5/6 max-lg:overflow-y-auto 
                    max-lg:py-4 max-lg:mx-auto 
                    max-sm:w-full max-sm:overflow-x-hidden
                    lg:overflow-y-auto lg:overflow-x-hidden scrollbar
                    ${scrollbarStyle} ${scrollbarTrack}`}
        id="mainIfo"
        >

            {section === '' && (
                <Welcome 
                fontColor={fontColor}
                />
            )}

            {section === 'Sobre Mi' && (
                <AboutMe 
                fontColor={fontColor}
                />
            )}

            {section === 'Proyectos' && (
                <Proyects
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            )}

            {section === 'Tecnologías' && (
                <Tecnologies
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            )}

            {section === 'Trayectoría' && (
                <Trajectory
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            )}

            {section === 'Contacto' && (
                <Contact
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                />
            )}
            
        </section>
    )
}