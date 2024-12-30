import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButtons } from "../../../components/Commons/buttons";
import { faArrowRightLong, faEnvelope, faLocationDot, faPaperPlane, faPhone, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../../../components/Commons/buttons/secondaryButton";
import Logo from '../../../assets/images/logo/logo.webp'
import SearchCard from "../../../components/Commons/SearchCard/SearchCard";
import { useState } from "react";
import SidebarSlider from "../../sidebarSlider/SidebarSlider";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";


// component interface
interface HeaderProps{
    themeMode: string;
}



const SecondaryHeader: React.FC<HeaderProps> = ({themeMode}) => {
    // states
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    // slider states
    const [isNameClicked, setIsNameClicked] = useState(false);
    const [isEmailClicked, setIsEmailClicked] = useState(false);
    const [isSubjectClicked, setIsSubjectClicked] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);



    return(
        <div className="w-full h-28 mt-10 dark:bg-transparent relative z-10">

            {/*search */}
            {isSearchOpen && <SearchCard setIsSearchOpen = {setIsSearchOpen} />}

            {/* slider */}
            {isSliderOpen && 
            <SidebarSlider themeMode= {themeMode} setIsSliderOpen={setIsSliderOpen}>
                {/* about us */}
                <div className="w-full flex flex-col items-start space-y-5">
                    <h1 className="uppercase font-bold font-Oswald py-5 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-3/5 after:h-[2px] after:bg-gray-400 after:dark:bg-white ">about us</h1>
                    <p className="w-full text-black text-opacity-60 dark:text-white dark:text-opacity-60 leading-relaxed">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>

                {/* get free quote */}
                <div className="w-full flex flex-col items-start space-y-5">
                    <h1 className="uppercase font-bold font-Oswald py-5 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-3/5 after:h-[2px] after:bg-gray-400 after:dark:bg-white ">get a free quote</h1>
                    <form className="w-full flex flex-col items-start space-y-5">
                        <input type="text" placeholder="Your Name" className={`w-full h-14 border border-black border-opacity-10 dark:border-white dark:border-opacity-10 bg-transparent dark:bg-graphiteBlack rounded pl-5 outline-none ${isNameClicked ? '!border-customRed' : ''}`} onClick={() => {setIsNameClicked(true); console.log(isNameClicked);} }/>
                        <input type="email" placeholder="Your Email" className={`w-full h-14 border border-black border-opacity-10 dark:border-white dark:border-opacity-10 bg-transparent dark:bg-graphiteBlack rounded pl-5 outline-none ${isEmailClicked && '!border-customRed'} `} onClick={() => setIsEmailClicked(true)} />
                        <input type="text" placeholder="Subject" className={`w-full h-14 border border-black border-opacity-10 dark:border-white dark:border-opacity-10 bg-transparent dark:bg-graphiteBlack rounded pl-5 outline-none ${isSubjectClicked && '!border-customRed'} `} onClick={() => setIsSubjectClicked(true)} />
                        <textarea placeholder="Write Message here..." className={`w-full h-40 border border-black border-opacity-10 dark:border-white dark:border-opacity-10 bg-transparent dark:bg-graphiteBlack rounded pl-5 outline-none ${isMessageClicked && '!border-customRed'} `} onClick={() => setIsMessageClicked(true)}></textarea>
                        <SecondaryButton className="w-full h-14 !bg-customRed text-white relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer after:absolute after:z-0 after:w-0 after:right-0 after:transition-all after:duration-300 after:ease-in-out after:h-full after:bg-red-900 hover:after:w-full hover:after:left-0"><span className="relative z-10">send now</span></SecondaryButton>
                    </form>
                </div>

                {/* contact Info */}
                <div className="w-full flex flex-col items-start space-y-8">
                    <h1 className="uppercase font-bold font-Oswald py-5 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-3/5 after:h-[2px] after:bg-gray-400 after:dark:bg-white ">contact Info</h1>
                    <ul className="w-full flex flex-col items-start space-y-3">
                        <li className="flex items-center space-x-3"><FontAwesomeIcon icon={faPhone}/> <span className="text-black text-opacity-65 dark:text-white dark:text-opacity-65">(233) 558 465 569</span></li>
                        <li className="flex items-center space-x-3"><FontAwesomeIcon icon={faEnvelope}/> <span className="text-black text-opacity-65 dark:text-white dark:text-opacity-65">iconghbank@gmail.com</span></li>
                        <li className="flex items-center space-x-3"><FontAwesomeIcon icon={faLocationDot}/> <span className="text-black text-opacity-65 dark:text-white dark:text-opacity-65">Address: 6391 Elgin St. Celina, 10299</span></li>
                    </ul>
                    <ul className="w-full flex items-center justify-center space-x-7">
                        <li className="text-xl w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-800 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-customRed text-white"><FontAwesomeIcon icon={faFacebookF}/></li>
                        <li className="text-xl w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-800 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-customRed text-white"><FontAwesomeIcon icon={faLinkedinIn}/></li>
                        <li className="text-xl w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-800 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-customRed text-white"><FontAwesomeIcon icon={faTwitter}/></li>
                        <li className="text-xl w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-800 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-customRed text-white"><FontAwesomeIcon icon={faInstagram}/></li>
                    </ul>
                </div>
            </SidebarSlider>}

            {/* header content */}
            <div className="w-[98%] xl:w-11/12 m-auto h-full bg-gray-200 dark:bg-graphiteBlack shadow flex items-center justify-between">
                {/* site logo */}
                <div className="w-[16%] h-full bg-customRed dark:bg-zinc-800 flex items-center justify-center">
                    <img src= {Logo} alt="Logo" className="text-white" />
                </div>

                <div className="w-[84%] h-full flex flex-col justify-between">

                    <div className="w-full h-1/2 border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 flex justify-between items-center pl-14">
                        {/* social media */}
                        <ul className="flex items-center justify-start space-x-5 text-black text-opacity-70 dark:text-white dark:text-opacity-55">
                            <li className="flex items-center justify-center space-x-2">
                                <FontAwesomeIcon icon={faPhone} className="text-customRed
                                " />
                                <span>(233) 558 465 569</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-customRed
                                " />
                                <span>iconghbank@gmail.com</span>
                            </li>
                            <li className="hidden xl:flex xl:items-center xl:justify-center xl:space-x-2">
                                <FontAwesomeIcon icon={faPaperPlane} className="text-customRed
                                " />
                                <span>6391 Elgin St. Celina, 10299</span>
                            </li>
                        </ul>

                        {/* get a quote */}
                        <div>
                            <SecondaryButton className="w-44 !bg-customRed text-white !rounded-none relative z-[2] overflow-hidden cursor-pointer transition-all duration-300 linear after:absolute after:content-[''] after:z-0 after:transition-all after:duration-300 after:ease-in-out after:bg-red-800 after:right-0 after:w-0 after:h-full hover:after:left-0 hover:after:w-full">
                                <span className=" relative z-10">Get a quote</span>
                                <FontAwesomeIcon icon={faArrowRightLong} className="relative z-10" />
                            </SecondaryButton>
                        </div>
                    </div>

                    <div className="w-full h-1/2 flex justify-between items-center pl-14">
                        {/* nav links */}
                        <div>
                            <NavButtons displayContactInfo = {false} />
                        </div>

                        {/* search, contact and cart actions icons */}
                        <div className="flex items-center justify-center space-x-10 px-5">
                            <div onClick={() => setIsSearchOpen(prev => !prev)}>
                                <FontAwesomeIcon icon={faSearch} className="text-xl transition-colors duration-300 hover:text-customRed cursor-pointer" />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faShoppingCart} className="text-xl transition-colors duration-300 hover:text-customRed cursor-pointer" />
                            </div>
                            <div onClick={() => setIsSliderOpen(prev => !prev)}>
                                <svg className="cursor-pointer" id="desktop-offcanvas-handler" width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.0234375" y1="12" x2="30.0234" y2="12" stroke="currentColor" stroke-width="3"></line><path d="M5.02344 22H30.0234" stroke="currentColor" stroke-width="3"></path><path d="M10.0234 2H30.0234" stroke="currentColor" stroke-width="3"></path></svg>
                            </div>
                        </div>
                    </div>

                    
                <div></div>

                </div>
            </div>
        </div>
    )
};

export default SecondaryHeader;