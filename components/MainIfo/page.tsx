interface MainIfoProps {
    fontColor: string;
    backgroundColor: string;
    section: string;
}

import Welcome from "../Welcome/page";
import AboutMe from "../AboutMe/page";
import Contact from "../Contact/page";

export default function MainIfo({fontColor, backgroundColor, section}: MainIfoProps) {

    const underline = fontColor === 'text-bHueso' ? 'sm:border-b-2 border-bHueso' : 'sm:border-b-2 border-nCarbon';

    return(
        <section className={`h-dvh sm:w-4/5 ${backgroundColor} transition-all duration-800 relative
                            max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center`}>
            <h1 className={`text-6xl tracking-wider font-semibold absolute left-8 top-0 ${fontColor}
                            m-4 ${underline} pb-4 max-sm:w-dvw`}>
                {section}
            </h1>

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