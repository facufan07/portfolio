import { FaChevronRight } from "react-icons/fa";

interface ArrowProps {
    onClick?: () => void;
    fontColor: string;
}

export default function NextArrow({ onClick, fontColor }:ArrowProps){

    return(
        <button
        className={`absolute right-0 top-[0] z-10 p-2 ${fontColor} hover:scale-125 transition-all duration-800 bg-transparent h-[100%] flex justify-center items-center`}
        onClick={onClick}
        >
                <FaChevronRight size={24} />
        </button>
    )

}