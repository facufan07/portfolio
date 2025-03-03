"use client"
interface ContactProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
}

import axios from "axios";
import { useState } from "react";

export default function Contact({fontColor, backgroundColor, backgroundColor2}: ContactProps) {

    const placeholderColor = fontColor === "text-bHueso" ? "placeholder-bHueso" : "placeholder-nCarbon";
    
    const [mail, setMail] = useState<string>("");
    const [asunto, setAsunto] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");

    const handleSubmit = () => {
        axios.post("https://mail-sender-production-4514.up.railway.app/mail", {
            mail: mail,
            subject: asunto,
            message: mensaje
        }).then(() => {
            alert("Mensaje enviado con éxito");
        })
        .catch(() => {
            alert("Error al enviar el mensaje");
        })
    }

    return(
        <>
            <form action={handleSubmit} className="flex flex-col justify-center gap-6 w-3/5">
                <h1 className={`text-4xl font-bold ${fontColor} tracking-widest`}>Contactame:</h1>
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className={`text-base font-semibold ${fontColor} px-1 py-1`}>Mail:</h2>
                        <input 
                        type="email"
                        onChange={(e) => setMail(e.target.value)} 
                        required
                        placeholder="Escribe tu mail . . ."
                        className={`w-3/5 max-sm:w-full px-2 rounded-lg ${backgroundColor}
                                    ${fontColor} shadow-md shadow-black outline-none py-1
                                    ${placeholderColor} tracking-widest`} 
                        />
                    </div>
                    
                    <div>
                        <h2 className={`text-base font-semibold ${fontColor} px-1 py-1`}>Asunto:</h2>
                        <input 
                        type="text" 
                        onChange={(e) => setAsunto(e.target.value)}
                        required
                        minLength={8}
                        placeholder="Escribe el asunto . . ."
                        className={`w-4/5 max-sm:w-full px-2 rounded-lg ${backgroundColor}
                                    ${fontColor} shadow-md shadow-black outline-none py-1
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
                    minLength={15}
                    className={`${backgroundColor} ${fontColor} w-4/5 max-sm:w-full px-2 rounded-lg
                                shadow-md shadow-black outline-none py-1 text-base ${placeholderColor}
                                resize-none h-[150px] tracking-widest`}
                    >
                    </textarea>
                </div>
                

                <button 
                type="submit" 
                className={`${backgroundColor2} ${fontColor} w-1/5 max-sm:w-full px-2 rounded-lg
                            shadow-md shadow-black outline-none py-1 font-semibold text-xl
                            hover:scale-110 transition-all duration-300 tracking-widest`}
                >
                    Enviar
                </button>
            </form>
        </>
    )
}