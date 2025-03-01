import Timeliner from "../Timeliner/page";

interface TrajectoryProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Trajectory({fontColor, backgroundColor, backgroundColor2}: TrajectoryProps) {
    return (
        <section className="w-full h-full py-6">
            <Timeliner 
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            backgroundColor2={backgroundColor2}
            />
        </section>
    )
}