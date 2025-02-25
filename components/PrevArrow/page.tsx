import { FaChevronLeft } from "react-icons/fa";

interface ArrowProps {
    onClick?: () => void;
    fontColor: string;
}

export default function PrevArrow({ onClick, fontColor }:ArrowProps){

    return(
        <button
        className={`absolute left-0 top-0 z-10 p-2 ${fontColor} hover:scale-125 transition-all duration-800 h-[100%] bg-transparent flex justify-center items-center`}
        onClick={onClick}
        >
                <FaChevronLeft size={24} />
        </button>
    )

}