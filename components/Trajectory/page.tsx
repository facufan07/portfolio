import Timeliner from "../Timeliner/page";

interface TrajectoryProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Trajectory({fontColor, backgroundColor, backgroundColor2}: TrajectoryProps) {
    const underlineColor = fontColor === 'text-bHueso' ? 'border-vMusgo' : 'border-vSalvia'

    return (
        <section className="sm:w-full animation flex flex-col items-center mb-[100px]">
            <h1 className={`text-4xl tracking-widest ${fontColor} font-bold mb-10 ${underlineColor} pb-4
                            border-b-2 lg:mt-10`}>
                Trayectoria
            </h1>

            <Timeliner 
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            backgroundColor2={backgroundColor2}
            />
        </section>
    )
}