import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MiniUtilityCard } from "../cards";
import React, { useEffect, useRef, useState } from "react";



interface ThemeButtonProps {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
  setDarkMode: () => void;
  setLightMode: () => void;
  setSystemMode: () => void;
  className?: string;
}


const ThemeButton: React.FC<ThemeButtonProps> = ({ setDarkMode, setLightMode, setSystemMode, className, themeMode, setThemeMode}) => {


  const [theme, setTheme] = useState(false);
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  



  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    setThemeMode(getTheme || "system");
  }, []);



  const handleThemeToggle = (state: string) => {
    if (state === "light") {
      setLightMode();
    } else if (state === "dark") {
      setDarkMode();
    } else {
      setSystemMode();
    }
    setThemeMode(state);
    setTheme(false);
  };

  const closeThemeMenu = (e:Event) => {
    const mainContainer = mainContainerRef.current
    const buttonContainer = buttonContainerRef.current

    if((mainContainer && buttonContainer) &&(mainContainer.contains(e.target as Node) && !buttonContainer.contains(e.target as Node))){
      setTheme(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', closeThemeMenu)

    return(() => {
      window.removeEventListener('click', closeThemeMenu);
    })
  })




  return (
    <div className={`${theme ? 'absolute w-screen h-screen top-0 left-0 bg-transparent z-20' : ''}`} ref={mainContainerRef}>
      <div className={`fixed z-30 top-2/4 right-0 ${className}`}>
        <div className="relative">
          <MiniUtilityCard className="absolute right-1 mr-2 cursor-pointer" onClick={() => setTheme((prev) => !prev)} buttonContainerRef={buttonContainerRef} >
            <FontAwesomeIcon icon={faMoon} />
          </MiniUtilityCard>
        </div>

        {theme && (
          <ul className="w-32 h-auto dark:bg-graphiteBlack bg-white mt-14 p-1 flex flex-col items-start animate-fadeIn shadow-xl">

          <li className={`py-2 px-1 cursor-pointer ${themeMode === "light" ? "bg-customRed text-white" : ""
            } dark:text-white/70 text-black/70 w-full rounded`} onClick={() => handleThemeToggle("light")}>Light</li>

          <li className={`py-2 px-1 cursor-pointer ${themeMode === "dark" ? "bg-customRed text-white" : ""
            } dark:text-white/70 text-black/70 w-full rounded`} onClick={() => handleThemeToggle("dark")}>Dark</li>

            
          <li className={`py-2 px-1 cursor-pointer ${ themeMode === "system" ? "bg-customRed text-white" : ""
            } dark:text-white/70 text-black/70 w-full rounded`} onClick={() => handleThemeToggle("system")}>System</li>
        </ul>

        )}
      </div>
    </div>
  );
};

export default ThemeButton;
