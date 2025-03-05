import Timeliner from "../Timeliner/page";

interface TrajectoryProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Trajectory({fontColor, backgroundColor, backgroundColor2}: TrajectoryProps) {
    return (
        <section className="sm:w-full sm:h-full animation">
            <Timeliner 
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            backgroundColor2={backgroundColor2}
            />
        </section>
    )
}