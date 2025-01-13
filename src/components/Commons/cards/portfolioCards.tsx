import { ReactNode, useEffect } from 'react';
import 'hover.css'

// animate
import Aos from "aos";
import 'aos/dist/aos.css'


// interface
interface PortfolioCardProp {
    className?: string;
    Image: string;
    children: ReactNode;
    dataAos?: string;
}



const PortfolioCard: React.FC<PortfolioCardProp> = ({className, Image, children, dataAos}) => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    })

    return(
        <div className={`w-72 m-auto md:w-[22rem] lg:w-56 xl:w-[22rem] h-[25rem] md:h-[29rem] lg:h-[20rem] xl:h-[29rem] overflow-hidden rounded relative group ${className}`} data-aos ={dataAos}>

            {/* bg image */}
            <div className='absolute z-0 top-0 left-0 w-full h-full' >
                <img src= {Image} alt="" className='w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-105' />
            </div>

            {/* content */}
            <div className={`absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-customRed/80 via-customRed/60 to-customRed/0 flex items-end justify-center transform md:scale-y-0 rotate-x-45 origin-center transition-transform duration-500 ease-in-out group-hover:scale-y-100 group-hover:rotate-x-0 `}>

                <div className='absolute z-20 bottom-10 left-8 w-9/12 md:opacity-0 md:invisible transition-all duration-300 delay-500 ease-in group-hover:opacity-100 group-hover:visible flex flex-col space-y-4 tracking-wider ' >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;