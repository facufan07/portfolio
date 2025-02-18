"use client"
import MainIfo from "@/components/MainIfo/page";
import SideBar from "@/components/SideBar/page";
import { useState } from "react";

export default function Main() {

  const [themeBackground, setThemeBackground] = useState<string>('bg-nSuave');
  const [themeFont, setThemeFont] = useState<string>('text-bHueso');
  const [themeSideBar, setThemeSideBar] = useState<string>('bg-vMusgo');
  const [themeFontSideBar, setThemeFontSideBar] = useState<string>('text-bHueso');
  const [themeFocus, setThemeFocus] = useState<string>('hover:bg-vPino border-b border-vPino');
  const [themeSelectedButton, setThemeSelectedButton] = useState<string>('bg-vPino');
  const [themeBurguerMenu, setThemeBurguerMenu] = useState<string>('burger-menu-bHueso');

  const [icon, setIcon] = useState<string>('sunn.svg');
  const [iconBackground, setIconBackground] = useState<string>('bg-slate-100 hover:border-white');

  const [section, setSection] = useState<string>('');

  const changeTheme = () => {

    if(icon === 'sunn.svg'){
      setIcon('moon.svg');
      setIconBackground('bg-black hover:border-black');
      setThemeBackground('bg-bSuave');
      setThemeSideBar('bg-vSalvia');
      setThemeFocus('hover:bg-green-100 border-b border-green-100');
      setThemeFontSideBar('text-nCarbon');
      setThemeFont('text-nCarbon');
      setThemeSelectedButton('bg-green-100');
      setThemeBurguerMenu('burger-menu-nCarbon');
    }
    else{
      setIcon('sunn.svg');
      setIconBackground('bg-slate-100 hover:border-white');
      setThemeBackground('bg-nSuave');
      setThemeSideBar('bg-vMusgo');
      setThemeFocus('hover:bg-vPino border-b border-vPino');
      setThemeFontSideBar('text-bHueso');
      setThemeFont('text-bHueso');
      setThemeSelectedButton('bg-vPino');
      setThemeBurguerMenu('burger-menu-bHueso');
    }
  }

  return (
    <main className="w-full h-full sm:flex overflow-hidden">
      <SideBar 
        fontColor={themeFontSideBar}
        backgroundColor={themeSideBar}
        focus={themeFocus}
        section={section}
        setSection={setSection}
        buttonSelectedColor={themeSelectedButton}
      />
      <MainIfo
        fontColor={themeFont}
        backgroundColor={themeBackground}
        section={section}
      />

      <div className="absolute top-0 px-4 flex justify-between w-full">
        <button>
          <img src={`../${themeBurguerMenu}.svg`} className="w-16"/>
        </button>
        <button 
        className={`my-4 ${iconBackground} z-50 w-[70px] h-[70px] 
                  rounded-full flex justify-center items-center hover:bg-transparent
                  transition-all duration-500 border-2 hover:scale-110`}
        onClick={changeTheme}
        >
          <img src={`../${icon}`} className="w-15"/>
        </button>
      </div>
    </main>
  );
}