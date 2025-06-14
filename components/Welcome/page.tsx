"use client"
interface WelcomeProps {
    fontColor: string
}

import { useEffect, useState } from "react"
import "./style.css"
import Image from 'next/image' 

export default function Welcome({fontColor}: WelcomeProps){

    const border = fontColor === 'text-[#CAC9C9]' ? 'border-r-2 border-[#1FB854]' : 'border-r-2 border-nCarbon'
    const borderImage = fontColor === 'text-[#CAC9C9]' ? 'border-2 border-[#110D0D]' : 'border-2 border-vSalvia'
    const fontColorArea = fontColor === 'text-[#CAC9C9]' ? 'text-[#1FB854]' : 'text-vSalvia'

    const texts = ["FullStack","Frontend", "Backend", "Web"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const currentText = texts[index];

        if (isFirstRender) {
            const timeout = setTimeout(() => {
                setText((prev) => {
                    return currentText.slice(0, prev.length + 1);
                })
                setSpeed(deleting ? 50 : 100);
            }, speed);
            setIsFirstRender(false);
            return () => clearTimeout(timeout);
        }
    
        if (!deleting && text === currentText) {
            setTimeout(() => setDeleting(true), 3000);
            return;
        }
        
        if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        return;
        }
        
        const timeout = setTimeout(() => {
            setText((prev) =>
            deleting
                ? currentText.slice(0, prev.length - 1)
                : currentText.slice(0, prev.length + 1)
            );
            setSpeed(deleting ? 50 : 100);
        }, speed);
        
        return () => clearTimeout(timeout);
        
    }, [text, deleting, index, speed]);
    
    return(
        <section className="flex justify-center items-center w-full animationWelcome lg:pt-64">
            <div className="flex max-lg:flex-col max-lg:items-center gap-5 px-9 
                            lg:ml-10">
                <Image src="/cvimgFF.jpg" 
                className={`lg:w-1/5 max-lg:w-2/5 max-sm:w-3/5 h-full sm:rounded-s-full max-lg:rounded-full
                        shadow-md shadow-black  px-1 py-1 ${borderImage} transition-all duration-800`}
                width={200} 
                height={200} 
                alt="Facundo Fandiño"
                />

                <div className="flex flex-col justify-center px-6 py-4">
                    <h1 className={`sm:text-6xl max-sm:text-4xl tracking-wider ${fontColor} font-semibold 
                                    xl:whitespace-nowrap max-lg:whitespace-nowrap max-lg:text-center max-xl:leading-loose
                                    transition-all duration-800`}>
                        Facundo Fandiño
                    </h1>
                    <div
                    className="mt-5 mx-auto"
                    >
                        <span className={`sm:text-4xl tracking-widest ${fontColor}  
                                    max-sm:text-2xl max-lg:text-4xl whitespace-nowrap  
                                    font-extralight max-lg:mx-auto transition-all duration-800`}>
                        Desarrollador 
                        </span>
                        <span className={`${fontColorArea} font-light ${border} blink transition-all duration-800
                                    sm:text-4xl max-sm:text-2xl max-lg:text-4xl whitespace-nowrap ml-3`}>
                        {text}
                        </span>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}