interface MainIfoProps {
    fontColor: string;
    backgroundColor: string;
    section: string;
}

import Welcome from "../Welcome/page";
import AboutMe from "../AboutMe/page";
import Contact from "../Contact/page";

export default function MainIfo({fontColor, backgroundColor, section}: MainIfoProps) {

    return(
        <section className={`sm:w-4/5 ${backgroundColor} transition-all duration-800
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

            {section === 'Contacto' && (
                <Contact
                fontColor={fontColor}
                />
            )}
            
        </section>
    )
}