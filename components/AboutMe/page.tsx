interface AboutMeProps {
    fontColor: string;
}

import "./style.css";

export default function AboutMe({ fontColor }: AboutMeProps) {

    const underlineColor = fontColor === 'text-bHueso' ? 'border-vMusgo' : 'border-vSalvia'

    return (
        <div className="opa-ani px-7 w-full flex flex-col items-center justify-center sm:h-full">
            <h1 className={`text-4xl tracking-widest ${fontColor} font-bold mb-10 ${underlineColor} pb-4
                            border-b-2`}>
                Sobre Mi
            </h1>

            <p className={`text-xl tracking-wider font-semibold sm:w-[600px] ${fontColor} mb-8 leading-relaxed
                            max-sm:text-base`}>
                Hace más de dos años me sumergí en el mundo del desarrollo web, especializándome en la creación de 
                interfaces dinámicas y atractivas, siempre con un enfoque en la experiencia del usuario (UX/UI). 
                Mi viaje comenzó en el Frontend, pero con el tiempo decidí ampliar mis conocimientos al Backend, 
                explorando tecnologías como Java y Spring Boot.
            </p>

            <p className={`text-xl tracking-wider font-semibold sm:w-[600px] ${fontColor} leading-relaxed
                            max-sm:text-base`}>
                Actualmente, estudio la Tecnicatura en Programación en la UTN, donde sigo fortaleciendo mis 
                habilidades y descubriendo nuevas herramientas para mejorar cada día como desarrollador.
            </p>
        </div>
    );
}