import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "@/data/proyects.json";
import Proyect from "../Proyect/page";

interface ProyectsProps {
    fontColor: string;
}

export default function Proyects({fontColor}: ProyectsProps) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <div className="w-[500px] min-h-[300px]">
            <Slider {...settings}>
                {data.map((p, i) => (
                    <Proyect
                    fontColor={fontColor}
                    name={p.name}
                    description={p.desc}
                    img={p.img}
                    url={p.url}
                    urlRepo={p.urlRepo}
                    tecnologies={p.tecnologies}
                    challenge={p.challenge}
                    key={i}
                    />
                ))}
            </Slider>
        </div>
    )
}