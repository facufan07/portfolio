interface TecnologyProps {
    fontColor: string;
    t: string;
    backgroundColor: string;
    backgroundColor2: string;
}

export default function Tecnology({fontColor, t, backgroundColor, backgroundColor2}: TecnologyProps){
    return(
        <>
            <div
                className={`flex items-center gap-2 ${backgroundColor2} rounded-lg px-3 py-1 shadow-md shadow-black`}
                >
                    <div 
                    className={`w-2 h-2 ${backgroundColor} rounded-full`}
                    >
                    </div>
                    <span 
                    className={`${fontColor} tracking-widest font-semibold max-sm:text-sm`}
                    >
                        {t}
                    </span>
            </div>
        </>
    )
}