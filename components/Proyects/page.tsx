import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "@/data/proyects.json";
import Proyect from "../Proyect/page";
import "./style.css"
import NextArrow from "../NextArrow/page";
import PrevArrow from "../PrevArrow/page";
import { useState } from "react";

interface ProyectsProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Proyects({fontColor, backgroundColor, backgroundColor2}: ProyectsProps) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <PrevArrow fontColor={fontColor} />,
        nextArrow: <NextArrow fontColor={fontColor} />,
    };

    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const underlineColor = fontColor === 'text-bHueso' ? 'border-vMusgo' : 'border-vSalvia'

    return (
        <div className="w-[100%] flex items-center animation flex-col mb-[100px]">

            <h1 className={`text-4xl tracking-widest ${fontColor} font-bold mb-10 ${underlineColor} pb-4
                            border-b-2 lg:mt-10`}>
                Proyectos
            </h1>

            <div className="lg:w-[100%] max-sm:w-[100%] max-lg:w-[700px]">
                <Slider {...settings} className="text-center mx-auto">
                    {data.map((p, i) => (
                        <Proyect
                        fontColor={fontColor}
                        name={p.name}
                        description={p.desc}
                        img={p.img}
                        url={p.url}
                        urlRepo={p.urlRepo}
                        tecnologies={p.technologies}
                        challenge={p.challenge}
                        backgroundColor={backgroundColor}
                        backgroundColor2={backgroundColor2}
                        isSelected={selectedProject === i}
                        setIsSelected={() => setSelectedProject(i)}
                        setSelectedProject={setSelectedProject}
                        key={i}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}