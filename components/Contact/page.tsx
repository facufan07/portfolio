interface ContactProps {
    fontColor: string;
}

export default function Contact({fontColor}: ContactProps) {
    return(
        <section className="flex flex-col justify-center items-center h-dvh">
            <h1>{fontColor}</h1>
        </section>
    )
}