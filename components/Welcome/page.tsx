interface WelcomeProps {
    fontColor: string
}

import "./style.css"
import Image from 'next/image' 

export default function Welcome({fontColor}: WelcomeProps){

    const border = fontColor === 'text-bHueso' ? 'border-r-2 border-bHueso' : 'border-r-2 border-nCarbon'

    return(
        <section className="flex justify-center items-center h-dvh sm:w-4/5">
            <div className="flex max-lg:flex-col max-lg:items-center gap-5 animation px-9 
                            ">
                <Image src="/cvimgF.jpg" 
                className="lg:w-1/5 max-lg:w-2/5 max-sm:w-3/5 h-full sm:rounded-s-full max-lg:rounded-full border-[3px] 
                        border-nCarbon shadow-md shadow-black"
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
                                    max-sm:text-2xl max-lg:text-4xl whitespace-nowrap ${border}
                                    w-[23ch] typing font-extralight max-lg:mx-auto`}>
                        Desarrollador FullStack
                    </h2>
                </div>
            </div>
        </section>
    )
}