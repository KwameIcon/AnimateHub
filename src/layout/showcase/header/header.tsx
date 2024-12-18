import { useEffect, useState } from "react";
import { NavButtons } from "../../../components/Commons/buttons";
import { Logo } from "../../../components/Commons/logo";

// Component interface
interface HeaderProps {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ themeMode, setThemeMode }) => {
  const [isFixed, setIsFixed] = useState(false);

  const handleHeaderFixedOnScroll = () => {
    const scrollLimit = 50;
    setIsFixed(window.scrollY > scrollLimit);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderFixedOnScroll);
    return () => {
      window.removeEventListener("scroll", handleHeaderFixedOnScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 extraExtraLarge:left-[20%] z-50 extraExtraLarge:w-3/5 transition-all duration-300 ${
        isFixed
          ? "bg-white dark:bg-ebony shadow-lg shadow-customRed/30"
          : "bg-transparent lg:bg-transparent lg:dark:bg-transparent"
      } `}
    >
      <div className="flex items-center justify-between h-16 lg:h-28 extraExtraLarge:h-44 px-3 md:p-8 md:pb-10 lg:px-10 border-b-4 border-white/45 lg:border-none">
        {/* Logo Component */}
        <Logo themeMode={themeMode}/>

        {/* Navigation Buttons Component */}
        <NavButtons />
      </div>
    </header>
  );
};

export default Header;
