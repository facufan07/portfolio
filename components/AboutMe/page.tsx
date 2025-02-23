interface AboutMeProps {
    fontColor: string;
}

import "./style.css";

export default function AboutMe({fontColor}: AboutMeProps) {
    return (
        <div className="opa-ani">
            <p className={`text-3xl tracking-widest font-bold sm:w-[600px] ${fontColor} mb-9 leading-relaxed
                            `}>
                Soy un estudiante interesado en el rubro IT.
            </p>
            <p className={`text-xl tracking-wider font-semibold sm:w-[600px] ${fontColor} mb-8 leading-relaxed
                            `}>
            Me gusta profundizar sobre lo que hago para poder encontrar mejores formas de optimización y 
            siempre llegar a la mejor solución posible. Quiero seguir aprendiendo para demostrarme a mi mismo que 
            soy capaz de mejorar cada día para lograr cumplir los desafíos que me propongo profesionalmente 
            y personalmente.
            </p>

            <p className={`text-xl tracking-wider font-semibold sm:w-[600px] ${fontColor} leading-relaxed
                            `}>
            Estoy cursando la carrera Tecnicatura en programación y en sistemas en la UTN, 
            y cada día sigo mejorando mis conocimientos junto a herramientas nuevas.
            </p>
        </div>
    )
}