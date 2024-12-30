import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../../components/Commons/logo";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faCalendarAlt, faEnvelope, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";


// images
import BlogSm1 from '../../assets/images/others/blog-sm-1.webp'
import BlogSm2 from '../../assets/images/others/blog-sm-2.webp'



// animation
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




interface FooterProps{
    themeMode: string;
}





const Footer:React.FC<FooterProps> = ({themeMode}) => {



    useEffect(() => {
        Aos.init({duration: 2000})
    })



    return(
        <section className="w-full h-auto xl:px-10 mt-10 flex flex-col p-5 xl:p-0 ">
            {/* first content */}
            <div className="w-full h-auto flex flex-wrap items-start justify-between space-y-8 md:gap-2">
                {/* logo social media links */}
                <div className="w-full md:w-[18rem] flex flex-col items-start space-y-5" data-aos = "fade-up" data-aos-delay = "0">
                    <div>
                        <Logo themeMode= {themeMode}/>
                    </div>
                    <p className="dark:text-white dark:text-opacity-60 text-black text-opacity-60">Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.
                    </p>
                    <div className="w-36 h-12 bg-customRed text-white flex items-center justify-between px-2 rounded">
                        <FontAwesomeIcon icon={faFacebook} className="transition-transform duration-300 ease-in-out hover:-translate-y-3 w-2/6 cursor-pointer"/>
                        <p className="w-[0.4px] h-5 bg-white"/>
                        <FontAwesomeIcon icon={faTwitter} className="transition-transform duration-300 ease-in-out hover:-translate-y-3 w-2/6 cursor-pointer"/>
                        <p className="w-[0.4px] h-5 bg-white"/>
                        <FontAwesomeIcon icon={faInstagram} className="transition-transform duration-300 ease-in-out hover:-translate-y-3 w-2/6 cursor-pointer"/>
                    </div>
                </div>

                {/* get free links */}
                <div className="w-full md:w-[18rem] flex flex-col items-start space-y-5" data-aos = "fade-up" data-aos-delay = "200">
                    <h2 className="capitalize tracking-widest text-xl font-BebasNeue font-bold">get free link</h2>
                    <ul className="w-full flex flex-col items-start space-y-5">
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">Software development</span>
                        </li>
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">data analytics</span>
                        </li>
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">IT Consulting</span>
                        </li>
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">UI/UX Design</span>
                        </li>
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">network solutions</span>
                        </li>
                        <li className="flex items-center justify-start space-x-2 cursor-pointer dark:text-white dark:text-opacity-65 text-black text-opacity-65 dark:hover:text-opacity-85 hover:text-opacity-85">
                            <FontAwesomeIcon icon={faAngleRight} className="dark:text-white dark:text-opacity-85 text-black text-opacity-85"/>
                            <span className="capitalize">others</span>
                        </li>
                    </ul>
                </div>

                {/* address */}
                <div className="w-full md:w-[18rem] flex flex-col items-start space-y-5" data-aos = "fade-up" data-aos-delay = "400">
                    <h2 className="capitalize tracking-widest text-xl font-BebasNeue font-bold">Address</h2>
                    <ul className="w-full flex flex-col items-start space-y-5 dark:text-white dark:text-opacity-65 text-black text-opacity-65">
                        <li className="flex items-center justify-start space-x-3">
                            <div className="w-10 h-10 bg-graphiteBlack rounded flex items-center justify-center">
                                <FontAwesomeIcon icon={faPaperPlane} className="text-customRed"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <span>2972 Westheimer Rd. Santa</span>
                                <span>Ana, Illinois 85486</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-start space-x-3">
                            <div className="w-10 h-10 bg-graphiteBlack rounded flex items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-customRed"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <span>kwameicon.gh.bs@gmail.com</span>
                                <span>iconghbank@gmail.com</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-start space-x-3">
                            <div className="w-10 h-10 bg-graphiteBlack rounded flex items-center justify-center">
                                <FontAwesomeIcon icon={faPhone} className="text-customRed"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <span>(233) 558465569</span>
                                <span>(233) 208104329</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* blogs */}
                <div className="w-full md:w-[18rem] flex flex-col items-start space-y-5" data-aos = "fade-up" data-aos-delay = "600">
                    <h2 className="capitalize tracking-widest text-xl font-BebasNeue font-bold">recent blog</h2>
                    <ul className="w-full flex flex-col items-start space-y-3 dark:text-white dark:text-opacity-65 text-black text-opacity-65">
                        <li className="flex items-center justify-start space-x-5 cursor-pointer">
                            <div>
                                <img src= {BlogSm1} alt="" />
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <div className="dark:text-white dark:text-opacity-50 flex items-center justify-center space-x-2">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-customRed"/>
                                    <span>November 12, 2024</span>
                                </div>
                                <p className="dark:text-white font-semibold font-Oswald transition-colors duration-300 text-black hover:text-customRed">We provide a range of IT Solutions</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-start space-x-5 cursor-pointer">
                            <div>
                                <img src= {BlogSm2} alt="" />
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <div className="dark:text-white dark:text-opacity-50 flex items-center justify-center space-x-2">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-customRed"/>
                                    <span>December 7, 2024</span>
                                </div>
                                <p className="dark:text-white font-semibold font-Oswald transition-colors duration-300 text-black hover:text-customRed">IT solutions enhance efficiency</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* horizontal rule */}
            <hr className="dark:opacity-25 my-10" />

            <div className="w-full flex flex-wrap items-center justify-between pb-10 space-y-10 md:space-y-0">
                <div className="dark:text-white dark:text-opacity-70 text-black text-opacity-70">
                    <p>&copy; IconGh.com 2024 | All Rights Reserved</p>
                </div>
                <ul className="flex flex-wrap items-center justify-start md:justify-center gap-5">
                    <li className="cursor-pointer dark:text-white dark:text-opacity-70 text-black text-opacity-70 dark:hover:text-opacity-85 hover:text-opacity-85 capitalize">Terms & conditions</li>
                    <li className="cursor-pointer dark:text-white dark:text-opacity-70 text-black text-opacity-70 dark:hover:text-opacity-85 hover:text-opacity-85 capitalize">privacy Policy</li>
                    <li className="cursor-pointer dark:text-white dark:text-opacity-70 text-black text-opacity-70 dark:hover:text-opacity-85 hover:text-opacity-85 capitalize">contact us</li>
                </ul>
            </div>
        </section>
    )
}


export default Footer;