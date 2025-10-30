interface SideBarProps {
    fontColor: string;
    backgroundColor: string;    
    focus: string;
    section: string;
    setSection: (section: string) => void;
    buttonSelectedColor: string;
    menu: boolean;
    animation: string;
    fadeOut: () => void;
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

import data from '@/data/sections.json';
import "./style.css";

export default function SideBar({fontColor, backgroundColor, 
                                focus, section, setSection, 
                                buttonSelectedColor, menu, animation, fadeOut,
                                isActive, setIsActive}: SideBarProps) {

    return(
        <>
            <section className={`w-1/5 ${backgroundColor} transition-all
                                duration-800 flex flex-col shadow-2xl z-[60]
                                max-lg:hidden h-dvh border-r border-white/10 backdrop-blur-sm`}>
                {data.map((s, i) => (
                    <button
                    key={i}
                    className={`h-4/5 ${focus} transition-all duration-500
                            ${section === s.name ? buttonSelectedColor + ' shadow-glow' : ''} hover:scale-105
                            relative overflow-hidden group
                            flex justify-center items-center`}
                    onClick={() => setSection(s.name)}
                    >
                        <span
                        className={`text-3xl ${fontColor} tracking-widest transition-all duration-500
                                   group-hover:scale-110 ${section === s.name ? 'font-bold' : ''}`}
                        >
                            {s.name}
                        </span>
                    </button>
                ))}
            </section>

            {menu && (
                <>
                    <section
                    className={`fixed top-0 left-0 w-full h-dvh z-50 bg-black/60 backdrop-blur-md
                                ${isActive ? '' : 'hidden'} animate-in fade-in duration-300`}
                    onClick={() => {fadeOut(); setIsActive(false);}}
                    >
                        
                    </section>

                    <div className={`h-dvh ${backgroundColor} transition-all
                                    duration-300 flex flex-col shadow-2xl z-[60]
                                    lg:hidden fixed right-0 ${animation} border-l border-white/10 backdrop-blur-sm`}
                    >
                        {data.map((s, i) => (
                            <button 
                            key={i}
                            className={`h-4/5 ${focus} transition-all duration-400 
                                    ${section === s.name ? buttonSelectedColor : ''} hover:scale-110
                                    hover:shadow-md hover:shadow-black flex justify-center items-center
                                    px-4`}
                            onClick={() => {setSection(s.name); fadeOut(); setIsActive(false);}}
                            >
                                <span 
                                className={`text-3xl ${fontColor} tracking-widest`}
                                >
                                    {s.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </>
                
                
            )}
            

        </>
        
    )
}