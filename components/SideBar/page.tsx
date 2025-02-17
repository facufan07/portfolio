interface SideBarProps {
    fontColor: string;
    backgroundColor: string;    
    focus: string;
}

import data from '@/data/sections.json';

export default function SideBar({fontColor, backgroundColor, focus}: SideBarProps) {
    return(
        <section className={`h-dvh w-1/5 ${backgroundColor} transition-all 
                            duration-800 flex flex-col shadow-lg z-50 shadow-slate-950`}>
            {data.map((section, i) => (
                <button 
                key={i}
                className={`h-4/5 ${focus} transition-all duration-400 hover:bg-opacity-80`}>
                    <span 
                    className={`text-3xl ${fontColor} tracking-widest`}
                    >
                        {section.name}
                    </span>
                </button>
            ))}
        </section>
    )
}