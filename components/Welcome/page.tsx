"use client"
interface WelcomeProps {
    fontColor: string
}

import { useEffect, useState } from "react"
import "./style.css"
import Image from 'next/image' 

export default function Welcome({fontColor}: WelcomeProps){

    const border = fontColor === 'text-bHueso' ? 'border-r-2 border-bHueso' : 'border-r-2 border-nCarbon'
    const borderImage = fontColor === 'text-bHueso' ? 'border-2 border-vMusgo' : 'border-2 border-vSalvia'
    const fontColorArea = fontColor === 'text-bHueso' ? 'text-vMusgo' : 'text-vSalvia'

    const texts = ["FullStack","Frontend", "Backend", "Web"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("FullStack");
    const [deleting, setDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [isUseEffectUsed, setIsUseEffectUsed] = useState(false);
    const [styleAnimation, setStyleAnimation] = useState(`${border} w-[23ch] typing`);

    useEffect(() => {
        setTimeout(() => {
            setIsUseEffectUsed(true);
            setStyleAnimation("")
        }, 1000)
    })

    useEffect(() => {
        if(isUseEffectUsed){
            const currentText = texts[index];
        
            if (!deleting && text === currentText) {
                setTimeout(() => setDeleting(true), 1000);
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
        }
    }, [text, deleting, index, speed, isUseEffectUsed]);
    
    return(
        <section className="flex justify-center items-center w-full animationWelcome lg:pt-64">
            <div className="flex max-lg:flex-col max-lg:items-center gap-5 px-9 
                            lg:ml-10">
                <Image src="/cvimgFF.jpg" 
                className={`lg:w-1/5 max-lg:w-2/5 max-sm:w-3/5 h-full sm:rounded-s-full max-lg:rounded-full
                        shadow-md shadow-black  px-1 py-1 ${borderImage}`}
                width={200} 
                height={200} 
                alt="Facundo Fandiño"
                />

                <div className="flex flex-col justify-center px-6 py-4">
                    <h1 className={`sm:text-6xl max-sm:text-4xl tracking-wider ${fontColor} font-semibold 
                                    xl:whitespace-nowrap max-lg:whitespace-nowrap max-lg:text-center max-xl:leading-loose
                                    `}>
                        Facundo Fandiño
                    </h1>
                    <h2 className={`sm:text-4xl tracking-widest ${fontColor} mt-10  
                                    max-sm:text-2xl max-lg:text-4xl whitespace-nowrap  
                                    ${styleAnimation} font-extralight max-lg:mx-auto`}>
                        Desarrollador <span className={`${fontColorArea} font-light ${border} blink`}>{text}</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}