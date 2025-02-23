"use client"
interface SideBarProps {
    fontColor: string;
    backgroundColor: string;    
    focus: string;
    section: string;
    setSection: (section: string) => void;
    buttonSelectedColor: string;
    menu: boolean;
    animation: string;
}

import data from '@/data/sections.json';
import "./style.css";

export default function SideBar({fontColor, backgroundColor, 
                                focus, section, setSection, 
                                buttonSelectedColor, menu, animation}: SideBarProps) {
    return(
        <>
            <section className={`w-1/5 ${backgroundColor} transition-all 
                                duration-800 flex flex-col shadow-lg z-[60] shadow-slate-950
                                max-sm:hidden`}>
                {data.map((s, i) => (
                    <button 
                    key={i}
                    className={`h-4/5 ${focus} transition-all duration-400 hover:bg-opacity-80 
                            ${section === s.name ? buttonSelectedColor : ''} hover:scale-110
                            hover:shadow-md hover:shadow-black flex justify-center items-center`}
                    onClick={() => setSection(s.name)}
                    >
                        <span 
                        className={`text-3xl ${fontColor} tracking-widest`}
                        >
                            {s.name}
                        </span>
                    </button>
                ))}
            </section>

            {menu && (
                <section className={`h-dvh ${backgroundColor} transition-all 
                duration-800 flex flex-col shadow-lg z-50 shadow-slate-950
                sm:hidden fixed right-0 ${animation}`}>
                    {data.map((s, i) => (
                        <button 
                        key={i}
                        className={`h-4/5 ${focus} transition-all duration-400 hover:bg-opacity-80 
                                ${section === s.name ? buttonSelectedColor : ''} hover:scale-110
                                hover:shadow-md hover:shadow-black flex justify-center items-center
                                px-4`}
                        onClick={() => setSection(s.name)}
                        >
                            <span 
                            className={`text-3xl ${fontColor} tracking-widest`}
                            >
                                {s.name}
                            </span>
                        </button>
                    ))}
                </section>
            )}
            

        </>
        
    )
}