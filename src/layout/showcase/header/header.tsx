import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButtons } from "../../../components/Commons/buttons";
import { Logo } from "../../../components/Commons/logo";
import { faCommentDots} from "@fortawesome/free-regular-svg-icons";



// component interface
interface HeaderProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const Header: React.FC<HeaderProps> = ({themeMode, setThemeMode}) => {

    return(
        <div className="w-full h-28 relative z-20 flex items-center justify-between px-10">
            {/* logo component */}
            <Logo themeMode = {themeMode} setThemeMode = {setThemeMode}/>

            {/* navigation buttons component */}
            <NavButtons/>

            {/* contact */}
            <div className="flex items-center justify-start space-x-4">
                <div className=" w-14 h-14 flex items-center justify-center relative">
                    <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-0 z-0 "/>
                    <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-5 z-20 rotate-customRotate"/>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <span className="">Need Help?</span>
                    <span className="text-xl font-extrabold tracking-tight font-Oswald">[233] 558-465-569</span>
                </div>
            </div>
        </div>
    )
}

export default Header;