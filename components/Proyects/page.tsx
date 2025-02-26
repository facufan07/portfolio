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
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <PrevArrow fontColor={fontColor} />,
        nextArrow: <NextArrow fontColor={fontColor} />,
    };

    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="sm:w-[50%] max-sm:w-[100%] animation">
                <Slider {...settings}>
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
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        key={i}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}