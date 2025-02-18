"use client"
import MainIfo from "@/components/MainIfo/page";
import SideBar from "@/components/SideBar/page";
import Image from "next/image";
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

  const [menu, setMenu] = useState<boolean>(false);

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

  const [animation, setAnimation] = useState<string>('fadeIn');
    const fadeOut = () => {
        if(menu === false){
          setMenu(true);
          setAnimation('fadeIn');
        }
        else{
          setAnimation('fadeOut');
          setTimeout(() => {  
            setMenu(false);
          }, 280)
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
        menu={menu}
        animation={animation}
      />
      <MainIfo
        fontColor={themeFont}
        backgroundColor={themeBackground}
        section={section}
      />

      <div className="absolute top-0 px-4 flex justify-between w-full">
        <button
        onClick={() => {fadeOut()}}
        >
          <Image src={`../${themeBurguerMenu}.svg`} width={65} height={40} alt="Burger"/>
        </button>
        <button 
        className={`my-4 ${iconBackground} z-40 w-[70px] h-[70px] 
                  rounded-full flex justify-center items-center hover:bg-transparent
                  transition-all duration-500 border-2 hover:scale-110`}
        onClick={changeTheme}
        >
          <Image src={`../${icon}`} width={40} height={40} alt="icon"/>
        </button>
      </div>
    </main>
  );
}