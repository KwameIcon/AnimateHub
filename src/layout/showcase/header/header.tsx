import { NavButtons } from "../../../components/Commons/buttons";
import { Logo } from "../../../components/Commons/logo";



// component interface
interface HeaderProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const Header: React.FC<HeaderProps> = ({themeMode, setThemeMode}) => {

    return(
        <div className="w-full m-auto extraExtraLarge:w-6/12 extraExtraLarge:6/12 h-16 lg:h-28 extraExtraLarge:h-44 relative z-50 flex items-center justify-between px-3 border-b-4 border-white/45 lg:border-none md:p-8 md:pb-10 lg:px-10 bg-white dark:bg-black lg:bg-transparent lg:dark:bg-transparent">
            {/* logo component */}
            <Logo themeMode = {themeMode} setThemeMode = {setThemeMode}/>

            {/* navigation buttons component */}
            <NavButtons/>
        </div>
    )
}

export default Header;