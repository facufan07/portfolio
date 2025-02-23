interface WelcomeProps {
    fontColor: string
}

import "./style.css"
import Image from 'next/image' 

export default function Welcome({fontColor}: WelcomeProps){

    const border = fontColor === 'text-bHueso' ? 'border-r-2 border-bHueso' : 'border-r-2 border-nCarbon'

    return(
        <section className="flex justify-center items-center h-dvh overflow-x-hidden">
            <div className="flex max-sm:flex-col max-sm:items-center gap-5 animation px-9">
                <Image src="/cvimgF.jpg" 
                className="w-40 sm:rounded-s-full max-sm:rounded-full border-[3px] 
                        border-nCarbon shadow-md shadow-black"
                width={200} 
                height={200} 
                alt="Facundo Fandiño"
                />

                <div className="sm:ml-10 flex flex-col justify-center px-6 py-4">
                    <h1 className={`sm:text-6xl max-sm:text-4xl tracking-wider ${fontColor} font-semibold 
                                    whitespace-nowrap max-sm:text-center`}>
                        Facundo Fandiño
                    </h1>
                    <h2 className={`sm:text-4xl tracking-widest ${fontColor} mt-10  
                                    max-sm:text-2xl whitespace-nowrap ${border}
                                    w-[23ch] typing font-extralight max-sm:mx-auto`}>
                        Desarrollador FullStack
                    </h2>
                </div>
            </div>
        </section>
    )
}