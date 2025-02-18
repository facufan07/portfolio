interface WelcomeProps {
    fontColor: string
}

import "./style.css"

export default function Welcome({fontColor}: WelcomeProps){
    return(
        <section className="flex justify-center items-center h-dvh overflow-x-hidden">
            <div className="flex max-sm:flex-col max-sm:items-center gap-5 animation px-9">
                <img src="cvimgF.jpg" 
                className="w-40 sm:rounded-s-full max-sm:rounded-full border-[3px] 
                        border-nCarbon shadow-md shadow-black"/>

                <div className="sm:ml-10 flex flex-col justify-center px-6 py-4">
                    <h1 className={`sm:text-6xl max-sm:text-4xl tracking-wider ${fontColor} font-semibold sm:w-[550px]
                                    max-sm:text-center`}>
                        Facundo Fandiño
                    </h1>
                    <h2 className={`sm:text-4xl tracking-widest ${fontColor} mt-10 font-light sm:w-[500px] 
                                    max-sm:text-center max-sm:text-2xl`}>
                        Desarrollador FullStack
                    </h2>
                </div>
            </div>
        </section>
    )
}