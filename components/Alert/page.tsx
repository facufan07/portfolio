import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

interface AlertProps {
    fontColor: string;
    backgroundColor: string;
    backgroundColor2: string;
    message: string;
    setAlert: (value: boolean) => void
    isLoading: boolean;
}

export default function Alert({fontColor, backgroundColor, backgroundColor2, message, setAlert, isLoading}: AlertProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black 
                        bg-opacity-50 z-[80]">
            
            {isLoading ? (
                <CircularProgress size={50} />

            ):(
                <div
                className={`flex flex-col gap-4 p-8 rounded-lg ${backgroundColor} max-sm:w-4/5`}
                >
                    <h1
                    className={`${fontColor} text-2xl tracking-widest text-center`}
                    >
                        {message}
                    </h1>

                    <button 
                    className={`${backgroundColor2} rounded-lg px-4 py-2 ${fontColor} tracking-widest
                                hover:scale-90 transition-all duration-300 shadow-md shadow-black`}
                    onClick={() => setAlert(false)}
                    >
                        Cerrar
                    </button>
                </div>
            )}
        </div>
    )
}