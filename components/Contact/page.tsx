interface ContactProps {
    fontColor: string;
}

export default function Contact({fontColor}: ContactProps) {
    return(
        <section className="flex flex-col justify-center items-center h-dvh">
            <a href="https://www.linkedin.com/in/facundo-fandi%C3%B1o-131b99277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlu390tUSeCiUyt0AjymvQ%3D%3D">
                <button className="flex items-center gap-2 mb-10 border-2 px-4 py-1 rounded-lg hover:scale-125
                                hover:shadow-md hover:shadow-black transition-all duration-400">            
                    <img src="linkedinGrey.png" alt="" />
                    <span className={`${fontColor} tracking-widest font-semibold`}>Linkedin</span>
                </button>
            </a>
                
            <a href="https://github.com/facufan07">
                <button className="flex items-center gap-2 mb-10 border-2 px-4 py-1 rounded-lg hover:scale-125
                                    hover:shadow-md hover:shadow-black transition-all duration-400">
                    <img src="githubGrey.png" alt="" />
                    <span className={`${fontColor} tracking-widest font-semibold`}>GitHub</span>
                </button>
            </a>
                
            <div className={`flex items-center gap-2 border-2 px-4 py-1 rounded-lg`}>
                <img src="mail.png" alt="" />
                <span className={`${fontColor} tracking-widest font-semibold `}>fandinofacundo123@gmail.com</span>
            </div>
        </section>
    )
}