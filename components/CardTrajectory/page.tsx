import Tecnology from "../Tecnology/page";
import "./style.css"

interface CardTrajectoryProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
    name: string;
    description: string;
    state: string;
    BeginYear: string;
    EndYear: string;
    Institution: string;
    learned: string[];
}

export default function CardTrajectory({fontColor, backgroundColor, backgroundColor2, 
                                        name, description, state, BeginYear, EndYear, 
                                        Institution, learned}: CardTrajectoryProps) {
    return(
        <>
            <div
            className={`flex flex-col gap-5 rounded-lg items-start p-4 ${backgroundColor} shadow-md
                    shadow-black max-sm:w-[250px] max-sm:mb-10 appear
                    transition-all duration-800`}
            >
                <h1
                className={`${fontColor} text-xl tracking-widest text-left max-sm:text-lg
                            transition-all duration-800`}
                >
                    {name}
                </h1>

                <p
                className={`${fontColor} text-sm tracking-widest text-left
                            transition-all duration-800`}
                >
                    {description}
                </p>

                <p
                className={`${fontColor} text-lg tracking-widest text-left max-sm:text-sm
                            transition-all duration-800`}
                >
                    Estado: {state}
                </p>

                <p
                className={`${fontColor} text-lg tracking-widest text-left max-sm:text-sm
                            transition-all duration-800`}
                >
                    {BeginYear} - {EndYear}
                </p>

                <p
                className={`${fontColor} text-lg tracking-widest text-left max-sm:text-sm
                            transition-all duration-800`}
                >
                    Institución: {Institution}
                </p>

                <h2
                className={`${fontColor} text-lg tracking-widest text-left
                            transition-all duration-800`}
                >
                    Aprendido:
                </h2>
                    <div
                    className="flex flex-wrap gap-4"
                    >
                        {learned.map((l, i) => (
                            <Tecnology
                            fontColor={fontColor}
                            t={l}
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