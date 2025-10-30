"use client"
import MainIfo from "@/components/MainIfo/page";
import SideBar from "@/components/SideBar/page";
import Image from "next/image";
import { useState } from "react";

export default function Main() {

  const [themeBackground, setThemeBackground] = useState<string>('bg-darkBg');
  const [themeFont, setThemeFont] = useState<string>('text-darkText');
  const [themeSideBar, setThemeSideBar] = useState<string>('bg-darkBgSecondary');
  const [themeFontSideBar, setThemeFontSideBar] = useState<string>('text-darkText');
  const [themeFocus, setThemeFocus] = useState<string>('hover:bg-darkBgTertiary border-b border-darkAccent');
  const [themeSelectedButton, setThemeSelectedButton] = useState<string>('bg-darkAccent');
  const [themeBurguerMenu, setThemeBurguerMenu] = useState<string>('burger-menu-bHueso');

  const [icon, setIcon] = useState<string>('weather-sun.svg');
  const [iconBackground, setIconBackground] = useState<string>('bg-slate-100 hover:border-white');

  const [menu, setMenu] = useState<boolean>(false);

  const [section, setSection] = useState<string>('');

  const changeTheme = () => {

    if(icon === 'weather-sun.svg'){
      setIcon('moonn.svg');
      setIconBackground('bg-lightAccent hover:border-lightAccentHover shadow-glow');
      setThemeBackground('bg-lightBg');
      setThemeSideBar('bg-lightBgSecondary shadow-modern');
      setThemeFocus('hover:bg-lightBgTertiary border-b border-lightAccent');
      setThemeFontSideBar('text-lightText');
      setThemeFont('text-lightText');
      setThemeSelectedButton('bg-lightAccent');
      setThemeBurguerMenu('burger-menu-nCarbon');
    }
    else{
      setIcon('weather-sun.svg');
      setIconBackground('bg-darkAccent hover:border-darkAccentHover shadow-glow');
      setThemeBackground('bg-darkBg');
      setThemeSideBar('bg-darkBgSecondary');
      setThemeFocus('hover:bg-darkBgTertiary border-b border-darkAccent');
      setThemeFontSideBar('text-darkText');
      setThemeFont('text-darkText');
      setThemeSelectedButton('bg-darkAccent');
      setThemeBurguerMenu('burger-menu-bHueso');
    }
  }

  const [animation, setAnimation] = useState<string>('fadeIn'); 
  const [isActive, setIsActive] = useState<boolean>(false);

    const fadeOut = () => {
      if(menu === false){
        setMenu(true);
        setIsActive(true);
        setAnimation('fadeIn');
      }
      else{
        setAnimation('fadeOut');
        setTimeout(() => {  
          setMenu(false);
        }, 480)
      }
    }

    const fadeOut2 = () => {
      setAnimation('fadeOut');
          setTimeout(() => {  
            setMenu(false);
          }, 480)
    }

  return (
    <main className={`${themeBackground} flex overflow-hidden h-[100%] max-lg:flex-col transition-colors
                    duration-800`}>
      <SideBar 
        fontColor={themeFontSideBar}
        backgroundColor={themeSideBar}
        focus={themeFocus}
        section={section}
        setSection={setSection}
        buttonSelectedColor={themeSelectedButton}
        menu={menu}
        animation={animation}
        fadeOut={fadeOut2}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      
      <div className={`lg:fixed top-0 px-4 flex justify-between items-center bg-transparent
                      transition-all duration-800 max-sm:h-1/6 sm:z-50 sm:w-full lg:mx-[-20px]`}>
        <button
        onClick={() => {fadeOut()}}
        >
          <Image src={`../${themeBurguerMenu}.svg`} width={65} height={40} alt="Burger"/>
        </button>
        <button
        className={`my-4 ${iconBackground} z-40 w-[70px] h-[70px]
                  rounded-full flex justify-center items-center
                  transition-all duration-500 border-2 border-transparent
                  hover:scale-110 hover:rotate-12 backdrop-blur-sm`}
        onClick={changeTheme}
        >
          <Image src={`../${icon}`} width={40} height={40} alt="icon"/>
        </button>
      </div>

      <MainIfo
        fontColor={themeFont}
        backgroundColor={themeSideBar}
        backgroundColor2={themeBackground}
        section={section}
      />
    </main>
  );
}