import { useEffect, useState } from "react";
import { Header } from "../homeOneShowcase";
import SecondaryHeader from "./Header";
import { ProfilePic } from "../../../components/Commons/cards";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faPlus } from "@fortawesome/free-solid-svg-icons";


// images
import shape1 from '../../../assets/images/shape-1.webp';
import avater1 from '../../../assets/images/people/customers/avatar-1.webp'; 
import avater2 from '../../../assets/images/people/customers/avatar-2.webp'; 
import avater3 from '../../../assets/images/people/customers/avatar-3.webp'; 
import hero5 from '../../../assets/images/others/hero-5.webp';
import hero6 from '../../../assets/images/others/hero-6.webp';
import shape2 from '../../../assets/images/shape-2.webp';
import SecondaryButton from "../../../components/Commons/buttons/secondaryButton";


// component interface
interface ShowcaseProps{
    themeMode: string;
}



const Showcase: React.FC<ShowcaseProps> = ({themeMode}) => {
    const [isMobile, setIsMobile] = useState(false);

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
        <div className="w-full min-h-screen relative">

            {/* header */}
            { isMobile ? ( <Header themeMode={themeMode}/> ):(<SecondaryHeader themeMode={themeMode}/>)}

            {/* bg ring */}
            <img src={shape1} alt="bg ring" className="hidden lg:block lg:absolute lg:-top-20 lg:left-0 lg:z-0 lg:opacity-30 lg:animate-swingY" />

            {/* showcase content */}
            <div className="w-full h-auto mt-40 flex flex-wrap xl:flex-nowrap items-start justify-center relative z-10 px-5 xl:px-10 gap-20">
                {/* flex 1 */}
                <div className="w-full lg:w-[45%] xl:w-[30%] shrink-0 flex flex-col items-center space-y-20">
                    <h1 className="text-5xl font-bold capitalize w-11/12 text-center lg:text-left leading-[4rem]">Navigating Tech Horizons Together</h1>
                    <div className="w-full flex justify-center items-center gap-5">
                        <ul className="flex items-center -space-x-5">
                            <li><ProfilePic src= {avater1} alt="Customer 1"/></li>
                            <li><ProfilePic src= {avater2} alt="Customer 2"/></li>
                            <li><ProfilePic src= {avater3} alt="Customer 3"/></li>
                            <li className="w-[57px] h-[57px] rounded-full border-2 border-gray-200 border-opacity-25 relative overflow-hidden flex items-center justify-center text-4xl font-bold text-customRed bg-black "><FontAwesomeIcon icon={faPlus}/></li>
                        </ul>
                        <div>
                            <h2 className="font-bold text-xl"><CountUp end={3000} duration={5} suffix="+" /></h2>
                            <p>Satified Customers</p>
                        </div>
                    </div>
                    <div className="w-64 h-16 text-lg bg-customRed text-white relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer after:absolute after:z-0 after:w-0 after:right-0 after:transition-all after:duration-300 after:ease-in-out after:h-full after:bg-red-900 hover:after:w-full hover:after:left-0 flex items-center justify-center uppercase font-bold space-x-3">
                        <span className="relative z-10">discover more</span>
                        <FontAwesomeIcon icon={faArrowRightLong} className="relative z-10"/>
                    </div>
                </div>
                {/* flex 2 */}
                <div className="w-full lg:w-[45%] xl:w-[30%] shrink-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full md:w-3/5 lg:w-full h-[600px] bg-gradient-to-t from-customRed to-ebony rounded-tl-full rounded-tr-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-[97%] w-[95%] rounded-tl-full rounded-tr-full flex items-end justify-center pb-10 bg-graphiteBlack">
                            <img src= {hero5} alt="hero picture" className="" />
                        </div>
                    </div>
                </div>
                {/* flex 3 */}
                <div className="w-full lg:w-[70%] xl:w-[30%] shrink-0 relative flex flex-col items-center mt-5 md:mt-0">
                    <img src= {shape2}  alt="shape 2" className="absolute -top-20 -left-20 w-[250px] animate-spin" />
                    <div className="w-full flex flex-col items-center space-y-10">
                        <p className="text-black/65 dark:text-white/60 text-lg leading-loose text-center">It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dum text of the printing and typeset</p>
                        <div className="">
                            <img src= {hero6} alt="hero picture 2" className="animate-swingY" />
                        </div>
                        <div className="w-full md:w-3/5 flex items-center justify-between gap-5">
                            <div>
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px]" viewBox="0 0 65 66" xmlns="http://www.w3.org/2000/svg"><path d="M9.65039 31.3242C11.1868 31.3242 12.5773 30.7079 13.6047 29.718L19.2418 32.5362C19.2135 32.7658 19.1719 32.9915 19.1719 33.2285C19.1719 36.3786 21.7348 38.9414 24.8848 38.9414C28.0347 38.9414 30.5977 36.3785 30.5977 33.2285C30.5977 32.3492 30.3815 31.5261 30.0248 30.7812L37.6719 23.1342C38.4167 23.4908 39.2399 23.707 40.1191 23.707C43.2692 23.707 45.832 21.1441 45.832 17.9941C45.832 17.401 45.7155 16.8401 45.5469 16.3021L52.1911 11.3202C53.0976 11.9258 54.1843 12.2812 55.3535 12.2812C58.5036 12.2812 61.0664 9.71832 61.0664 6.56836C61.0664 3.4184 58.5035 0.855469 55.3535 0.855469C52.2036 0.855469 49.6406 3.4184 49.6406 6.56836C49.6406 7.16148 49.7572 7.72236 49.9258 8.26039L43.2815 13.2423C42.3751 12.6367 41.2884 12.2812 40.1191 12.2812C36.9691 12.2812 34.4062 14.8442 34.4062 17.9941C34.4062 18.8734 34.6224 19.6966 34.9791 20.4414L27.332 28.0884C26.5872 27.7318 25.764 27.5156 24.8848 27.5156C23.3484 27.5156 21.9579 28.132 20.9304 29.1218L15.2933 26.3036C15.3216 26.0741 15.3633 25.8484 15.3633 25.6113C15.3633 22.4612 12.8005 19.8984 9.65039 19.8984C6.5003 19.8984 3.9375 22.4614 3.9375 25.6113C3.9375 28.7613 6.50043 31.3242 9.65039 31.3242Z" fill="#DF2A19"></path><path d="M63.0957 62.0469H61.0645V21.8027C61.0645 20.7503 60.2126 19.8984 59.1602 19.8984H51.543C50.4905 19.8984 49.6387 20.7503 49.6387 21.8027V62.0469H45.8301V33.2285C45.8301 32.1761 44.9782 31.3242 43.9258 31.3242H36.3086C35.2562 31.3242 34.4043 32.1761 34.4043 33.2285V62.0469H30.5957V48.4629C30.5957 47.4104 29.7438 46.5586 28.6914 46.5586H21.0742C20.0218 46.5586 19.1699 47.4104 19.1699 48.4629V62.0469H15.3613V40.8457C15.3613 39.7933 14.5095 38.9414 13.457 38.9414H5.83984C4.7874 38.9414 3.93555 39.7933 3.93555 40.8457V62.0469H1.9043C0.851855 62.0469 0 62.8987 0 63.9512C0 65.0036 0.851855 65.8555 1.9043 65.8555H63.0957C64.1481 65.8555 65 65.0036 65 63.9512C65 62.8987 64.1481 62.0469 63.0957 62.0469Z" fill="#DF2A19"></path></svg>
                            </div>
                            <h1 className="text-4xl font-extrabold uppercase">4k+</h1>
                            <p className="text-xl capitalize font-semibold text-black/65 dark:text-gray-400 flex flex-col items-start space-y-1">
                            <span>Daily active</span>
                            <span>customers</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default Showcase;