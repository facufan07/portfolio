interface MainIfoProps {
    fontColor: string;
    backgroundColor: string;    
}

import Welcome from "../Welcome/page";

export default function MainIfo({fontColor, backgroundColor}: MainIfoProps) {
    return(
        <section className={`h-dvh w-4/5 ${backgroundColor} transition-all duration-800`}>
            <Welcome 
            fontColor={fontColor}
            />
        </section>
    )
}