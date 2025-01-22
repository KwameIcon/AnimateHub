import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../../components/Commons/logo";
import { useEffect, useRef } from "react";


// component interface
interface SidebarSliderProps{
    className?: string;
    themeMode: string;
    setIsSliderOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children:React.ReactNode;
}


const SidebarSlider: React.FC<SidebarSliderProps> = ({className, themeMode, setIsSliderOpen, children}) => {
    // refs
    const maincontainerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);


    // close slider when clicked outside
    const handleClickOutside = (e: Event) => {
        const mainContainer = maincontainerRef.current;
        const card = cardRef.current;
        if((mainContainer && card) && mainContainer.contains(e.target as Node) && !card.contains(e.target as Node)){
            setIsSliderOpen(false);
        }
    }


    // add event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })



    return(
        <div className="w-screen h-screen bg-graphiteBlack5 animate-slideInLeft fixed top-0 left-0 z-50 overflow-hidden" ref={maincontainerRef}>

            <div className={`w-[28%] h-screen shadow bg-white dark:bg-black flex flex-col items-start space-y-10 px-5 py-10 overflow-y-auto scrollbar-none relative z-50 ${className}`} ref={cardRef}>

                {/* slider header */}
                <div className="w-full h-32 flex items-center justify-between">
                    <Logo themeMode= {themeMode}/>
                    <FontAwesomeIcon icon={faClose} className="text-3xl cursor-pointer text-black dark:text-white dark:text-opacity-65" onClick={() => setIsSliderOpen(prev => !prev)}/>
                </div>

                {/* slider body */}
                <div className="w-full h-auto flex flex-col items-start space-y-12">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default SidebarSlider;