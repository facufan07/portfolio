"use client"
interface ContactProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
import Alert from "../Alert/page";

export default function Contact({fontColor, backgroundColor, backgroundColor2}: ContactProps) {

    const placeholderColor = fontColor === "text-bHueso" ? "placeholder-bHueso" : "placeholder-nCarbon";
    const borderColor = fontColor === "text-bHueso" ? "border-bHueso" : "border-nCarbon";
    const shadowColor = fontColor === "text-bHueso" ? "hover:shadow-bHueso" : "hover:shadow-nCarbon";
    const underlineColor = fontColor === 'text-bHueso' ? 'border-vMusgo' : 'border-vSalvia'
    
    const [mail, setMail] = useState<string>("");
    const [asunto, setAsunto] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [alert, setAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        setIsLoading(true);
        setAlert(true);
        axios.post("https://mail-sender-production-4514.up.railway.app/mail", {
            mail: mail,
            subject: asunto,
            message: mensaje
        }).then(() => {
            setAlertMessage("Mensaje enviado con éxito");
            setIsLoading(false);
        })
        .catch(() => {
            setAlertMessage("Error al enviar el mensaje");
            setIsLoading(false);
        })
        
    }

    return(
        <section className="animation h-full flex flex-col lg:py-10 w-full items-center">
            <h1 className={`text-4xl tracking-widest ${fontColor} font-bold mb-16 ${underlineColor} pb-4
                                border-b-2 lg:mt-10`}>
                    Contacto
            </h1>
            <div>
                
                <div className="">
                    
                    <h1 className={`${fontColor} text-4xl font-bold tracking-widest mb-8
                                    max-sm:text-center`}
                    >
                        Mis redes:
                    </h1>
                    <div
                    className="flex gap-6 justify-start items-center mb-16"
                    >
                        <a
                        className={`flex justify-between items-center ${fontColor} hover:scale-110 
                                    transition-all duration-800 border-2 ${borderColor} rounded-lg px-4 py-2
                                    hover:shadow-inner ${shadowColor}`} 
                        href="https://www.linkedin.com/in/facundo-fandi%C3%B1o-131b99277/"
                        target="_blank"
                        >
                            <span
                            className={`${fontColor} text-xl font-semibold tracking-widest`}
                            >
                                Linkedin
                            </span>
                            <Image src={fontColor === "text-bHueso" ? "/linkbHueso.svg" : "/linknCarbon.svg"} 
                            width={50} 
                            height={50} 
                            alt="Linkedin"
                            className="w-7"
                            />
                        </a>
                        <a
                        className={`flex justify-between items-center ${fontColor} hover:scale-110 
                                    transition-all duration-800 border-2 ${borderColor} rounded-lg px-4 py-2
                                    hover:shadow-inner ${shadowColor}`} 
                        href="https://github.com/facufan07"
                        target="_blank"
                        >
                            <span
                            className={`${fontColor} text-xl font-semibold tracking-widest`}
                            >
                                GitHub
                            </span>
                            <Image src={fontColor === "text-bHueso" ? "/linkbHueso.svg" : "/linknCarbon.svg"} 
                            width={50} 
                            height={50} 
                            alt="Github"
                            className="w-7"
                            />
                        </a>
                    </div>
                </div>

                <form 
                action={handleSubmit} 
                className="flex flex-col gap-6"
                >
                    <h1 className={`text-4xl font-bold ${fontColor} tracking-widest 
                                    max-sm:text-center`}
                    >
                        Contáctame:
                    </h1>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className={`text-base font-semibold ${fontColor} px-1 py-1`}>Correo:</h2>
                            <input 
                            type="email"
                            onChange={(e) => setMail(e.target.value)} 
                            required
                            placeholder="Escribe tu correo . . ."
                            className={`w-[300px] max-sm:w-full px-2 rounded-lg ${backgroundColor}
                                        ${fontColor} shadow-md shadow-black outline-none py-2
                                        ${placeholderColor} tracking-widest`} 
                            />
                        </div>
                        
                        <div>
                            <h2 className={`text-base font-semibold ${fontColor} px-1 py-1`}>Asunto:</h2>
                            <input 
                            type="text" 
                            onChange={(e) => setAsunto(e.target.value)}
                            required
                            placeholder="Escribe el asunto . . ."
                            className={`w-[500px] max-sm:w-full px-2 rounded-lg ${backgroundColor}
                                        ${fontColor} shadow-md shadow-black outline-none py-2
                                        ${placeholderColor} tracking-widest`}
                            />
                        </div>
                        
                    </div>

                    <div>
                        <h2 className={`text-base font-semibold ${fontColor} px-1 py-1`}>Mensaje:</h2>
                        <textarea 
                        required
                        placeholder="Escribe tu mensaje . . ."
                        onChange={(e) => setMensaje(e.target.value)}
                        className={`${backgroundColor} ${fontColor} w-[500px] max-sm:w-full px-2 rounded-lg
                                    shadow-md shadow-black outline-none py-1 text-base ${placeholderColor}
                                    resize-none h-[150px] tracking-widest py-2`}
                        >
                        </textarea>
                    </div>
                    

                    <button 
                    type="submit" 
                    className={`${backgroundColor2} ${fontColor} w-1/5 max-sm:w-full px-2 rounded-lg
                                shadow-md shadow-black outline-none py-1 font-semibold text-xl
                                hover:scale-90 transition-all duration-300 tracking-widest mb-10`}
                    >
                        Enviar
                    </button>
                </form>
            </div>  
            

            {alert && (
                <Alert
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                backgroundColor2={backgroundColor2}
                message={alertMessage}
                setAlert={setAlert}
                isLoading={isLoading}
                />
            )}

        </section>
    )
}