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
                className={`flex items-center gap-2 ${backgroundColor2} rounded-lg px-3 py-1 shadow-md 
                        shadow-black transition-all duration-800 hover:scale-90`}
                >
                    <div 
                    className={`w-2 h-2 ${backgroundColor} rounded-full transition-all duration-800`}
                    >
                    </div>
                    <span 
                    className={`${fontColor} tracking-widest font-semibold max-sm:text-sm text-left
                                transition-all duration-800`}
                    >
                        {t}
                    </span>
            </div>
        </>
    )
}