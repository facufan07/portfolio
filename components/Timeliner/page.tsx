import { 
    Timeline, 
    TimelineItem, 
    TimelineSeparator, 
    TimelineConnector, 
    TimelineContent, 
    TimelineDot } 
from "@mui/lab";
import { useMediaQuery, useTheme } from "@mui/material";
import data from "@/data/trajectory.json";
import CardTrajectory from "../CardTrajectory/page";

interface TimelinerProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Timeliner({fontColor, backgroundColor, backgroundColor2}: TimelinerProps) {
    const bgDot = fontColor === 'text-bHueso' ? '#F5F5DC' : '#33322E';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Timeline position={isMobile ? "right" : "alternate-reverse"}>
            {data.map((d, i) => (
                <TimelineItem key={i}>
                    <TimelineSeparator>
                        <TimelineDot 
                        sx={{ backgroundColor: bgDot }}
                        />
                        {i !== data.length - 1 &&(
                            <TimelineConnector />
                        )}
                    </TimelineSeparator>
                    <TimelineContent>
                        <CardTrajectory
                        fontColor={fontColor}
                        backgroundColor={backgroundColor}
                        backgroundColor2={backgroundColor2}
                        name={d.name}
                        description={d.description}
                        state={d.state}
                        BeginYear={d.BeginYear}
                        EndYear={d.EndYear}
                        Institution={d.Institution}
                        learned={d.learned}
                        />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}