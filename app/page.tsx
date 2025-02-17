"use client"
import MainIfo from "@/components/MainIfo/page";
import SideBar from "@/components/SideBar/page";
import { useState } from "react";

export default function Main() {

  const [themeBackground, setThemeBackground] = useState<string>('bg-nSuave');
  const [themeFont, setThemeFont] = useState<string>('');
  const [themeSideBar, setThemeSideBar] = useState<string>('bg-vMusgo');
  const [themeFontSideBar, setThemeFontSideBar] = useState<string>('text-bHueso');
  const [themeFocus, setThemeFocus] = useState<string>('hover:bg-vPino border-b border-vPino');

  const [icon, setIcon] = useState<string>('sunn.svg');
  const [iconBackground, setIconBackground] = useState<string>('bg-slate-100 hover:border-white');
  const changeTheme = () => {

    if(icon === 'sunn.svg'){
      setIcon('moon.svg');
      setIconBackground('bg-black hover:border-black');
      setThemeBackground('bg-bSuave');
      setThemeSideBar('bg-vSalvia');
      setThemeFocus('hover:bg-green-100 border-b border-green-100');
      setThemeFontSideBar('text-nCarbon');
    }
    else{
      setIcon('sunn.svg');
      setIconBackground('bg-slate-100 hover:border-white');
      setThemeBackground('bg-nSuave');
      setThemeSideBar('bg-vMusgo');
      setThemeFocus('hover:bg-vPino border-b border-vPino');
      setThemeFontSideBar('text-bHueso');
    }
    
  }

  return (
    <main className="w-full h-full flex">
      <SideBar 
        fontColor={themeFontSideBar}
        backgroundColor={themeSideBar}
        focus={themeFocus}
      />
      <MainIfo
        fontColor={themeFont}
        backgroundColor={themeBackground}
      />

      <button 
      className={`absolute top-0 right-0 m-4 ${iconBackground} z-50 w-[70px] h-[70px] 
                rounded-full flex justify-center items-center hover:bg-transparent
                transition-all duration-500 border-2`}
      onClick={changeTheme}
      >
        <img src={`../${icon}`} className="w-15"/>
      </button>
    </main>
  );
}