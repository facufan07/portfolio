interface MainIfoProps {
    fontColor: string;
    backgroundColor: string;    
}

export default function MainIfo({fontColor, backgroundColor}: MainIfoProps) {
    return(
        <section className={`h-dvh w-4/5 ${backgroundColor} transition-all duration-500`}>
            
        </section>
    )
}