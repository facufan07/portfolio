interface WelcomeProps {
    fontColor: string
}

export default function Welcome({fontColor}: WelcomeProps){
    return(
        <section className="flex justify-center items-center h-dvh">
            <div className="flex gap-5">
                <img src="cvimgF.jpg" className="w-40 rounded-s-full border-[3px] border-nCarbon"/>
                <div className="ml-10 flex flex-col justify-center px-6 py-4">
                    <h1 className={`text-6xl tracking-wider ${fontColor} font-semibold`}>
                        Facundo Fandiño
                    </h1>
                    <h2 className={`text-4xl tracking-widest ${fontColor} mt-10 font-light`}>
                        Desarrollador FullStack
                    </h2>
                </div>
            </div>
        </section>
    )
}