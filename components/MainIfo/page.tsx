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

export default function MainIfo({fontColor, backgroundColor, section, backgroundColor2}: MainIfoProps) {

    return(
        <section className={`sm:w-4/5 transition-all duration-800
                            flex flex-col items-center sm:justify-center
                            max-sm:h-5/6 max-sm:overflow-y-auto max-sm:overflow-x-hidden
                            max-sm:px-9 max-sm:py-4`}>

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
                />
            )}

            {section === 'Contacto' && (
                <Contact
                fontColor={fontColor}
                />
            )}
            
        </section>
    )
}