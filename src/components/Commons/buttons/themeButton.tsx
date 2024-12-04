import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MiniUtilityCard } from "../cards";
import { useEffect, useState } from "react";



interface ThemeButtonProps {
  setDarkMode: () => void;
  setLightMode: () => void;
  setSystemMode: () => void;
  className?: string;
}


const ThemeButton: React.FC<ThemeButtonProps> = ({ setDarkMode, setLightMode, setSystemMode, className,}) => {


  const [theme, setTheme] = useState(false);
  const [themeMode, setThemeMode] = useState("system");



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
  };




  return (
    <div className={`fixed z-50 top-2/4 right-0 ${className}`}>
      <MiniUtilityCard className="absolute right-1 mr-2 cursor-pointer" onClick={() => setTheme((prev) => !prev)} >
        <FontAwesomeIcon icon={faMoon} />
      </MiniUtilityCard>

      {theme && (
        <ul className="w-32 h-auto bg-graphiteBlack mt-14 p-1 flex flex-col items-start animate-fadeIn">

          <li className={`py-2 px-1 cursor-pointer ${ themeMode === "light" ? "bg-customRed" : ""
            } text-white/70 w-full rounded`} onClick={() => handleThemeToggle("light")}> Light</li>

          <li className={`py-2 px-1 cursor-pointer ${themeMode === "dark" ? "bg-customRed" : ""
            } text-white/70 w-full rounded`} onClick={() => handleThemeToggle("dark")}>Dark</li>

            
          <li className={`py-2 px-1 cursor-pointer ${ themeMode === "system" ? "bg-customRed" : ""
            } text-white/70 w-full rounded`} onClick={() => handleThemeToggle("system")}>System</li>
        </ul>
      )}
    </div>
  );
};

export default ThemeButton;
