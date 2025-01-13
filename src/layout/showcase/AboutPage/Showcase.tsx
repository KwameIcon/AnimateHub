import SecondaryHeader from "../homeTwoShowcase/Header";

import bgImage from '../../../assets/images/others/hero-3.webp';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../homeOneShowcase";



// interface
interface ShowcaseProps {
    themeMode: string;
    page: string;
    suffix?:string;
}

const Showcase: React.FC<ShowcaseProps> = ({ themeMode, page, suffix, }) => {

    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    
        // check if mobile
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        }
    
        
        useEffect(() => {
            checkIfMobile();
            window.addEventListener('resize', checkIfMobile);
            return(() => {
                window.removeEventListener('resize', checkIfMobile);
            })
        }, [isMobile])



    return (
        <section className="w-full h-[75vh] relative overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-white dark:after:from-ebony after:to-white/0 dark:after:to-ebony/0">

            {/* secondary header */}
            {/* header */}
            { isMobile ? ( <Header themeMode={themeMode}/> ):(<SecondaryHeader themeMode={themeMode}/>)}

            <div className="absolute inset-0 w-full h-full">

                {/* bg image */}
                <div className="absolute inset-0 w-full h-full">
                    <img src={bgImage} alt="background image" className="w-full h-full" />
                </div>
                <div className="absolute w-full z-10 bottom-[42%]  px-16 pr-20 grid grid-cols-1 place-items-center gap-10 md:flex md:items-center md:justify-between capitalize font-bold font-Oswald">
                    <h1 className="text-3xl">{page} {suffix}</h1>
                    <div className="text-2xl flex gap-3 items-center">
                        <span className="cursor-pointer transition-colors duration-300 ease-linear hover:text-customRed" onClick={() => navigate('/')}>home</span>
                        <span>/</span>
                        <span>{page}</span>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Showcase;