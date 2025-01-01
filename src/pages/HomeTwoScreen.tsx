import { Showcase } from "../layout/showcase/homeTwoShowcase";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";


// images
import service1 from "../assets/images/others/service-1.webp";
import service2 from "../assets/images/others/service-2.webp";
import service3 from "../assets/images/others/service-3.webp";
import bgSketch from '../assets/images/others/pattern-1 (1).webp';
import About5 from '../assets/images/others/about-5.webp';



// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AutoScroll } from "../layout/HomeTwoLayouts";
import { Card } from "../components/Commons/cards";





// component interface
interface HomeTwoScreenProps{
    themeMode: string;
}



const HomeTwoScreen: React.FC<HomeTwoScreenProps> = ({themeMode}) => {

    // aos animation initialization
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    })



    return(
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden">

            {/* showcase */}
            <Showcase themeMode = {themeMode}/>


            {/* our services */}
            <div className="w-11/12 lg:w-[97%] xl:w-11/12 m-auto extraExtraLarge:-mt-40" data-aos="fade-up" data-aos-delay="0">
                {/* header */}
                <div className="w-full flex flex-col items-center justify-center space-y-5 py-20" data-aos="fade-up" data-aos-delay="0">
                    <h3 className="uppercase text-customRed font-extrabold tracking-widest my-5 font-Oswald text-xl" data-aos="fade-up" data-aos-delay="0" >our services</h3>
                    <h1 className="w-[90%] lg:w-1/2 m-auto text-3xl md:text-5xl font-Oswald font-bold text-center leading-relaxed"   data-aos="fade-up" data-aos-delay="100" >Elevating Businesses with IT Ingenuity</h1>
                </div>

                {/* services cards */}
                <ul className="w-full flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-10 my-5">
                    {/* card */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[33rem] font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "0">
                        <div className="w-full h-1/2 relative z-[1]  overflow-hidden before:absolute before:w-[110%] before:h-16 before:bg-white before:dark:bg-graphiteBlack before:-bottom-5 before:left-0 before:z-20 before:-rotate-6 after:cursor-pointer after:absolute after:top-0 after:left-0 after:z-[1] after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear ">
                            <img src= {service1} alt="Service 1" className="w-full h-full" />
                        </div>

                        <div className="absolute z-30 left-[40%] top-[32%] w-[6rem] h-[6rem] rounded-full bg-ebony flex items-center justify-center overflow-hidden ">
                            <svg className="w-16 absolute left-[20%] fill-white top-[20%] z-10 transition-all duration-500 ease-linear group-hover:w-14" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg"><path d="M8.12799 55.3735C4.85988 51.6963 3.05469 46.9477 3.05469 42.0281C3.05469 37.1086 4.85988 32.36 8.12799 28.6828L30.1671 4.81564C30.3453 4.62883 30.5597 4.48012 30.7971 4.37852C31.0345 4.27693 31.2901 4.22454 31.5483 4.22454C31.8065 4.22454 32.0621 4.27693 32.2995 4.37852C32.5369 4.48012 32.7513 4.62883 32.9296 4.81564C33.3079 5.19622 33.5202 5.71104 33.5202 6.24767C33.5202 6.7843 33.3079 7.29912 32.9296 7.6797L10.9717 31.5063C8.39045 34.4072 6.9644 38.1552 6.9644 42.0383C6.9644 45.9214 8.39045 49.6693 10.9717 52.5703C12.1762 53.9262 13.6542 55.0115 15.3085 55.7547C16.9628 56.4979 18.7558 56.8822 20.5694 56.8822C22.383 56.8822 24.176 56.4979 25.8303 55.7547C27.4846 55.0115 28.9626 53.9262 30.1671 52.5703L55.3342 25.2906C57.0706 23.3294 58.0291 20.8006 58.0291 18.1813C58.0291 15.5619 57.0706 13.0331 55.3342 11.0719C54.5243 10.1617 53.531 9.43329 52.4194 8.93449C51.3079 8.43568 50.1034 8.17781 48.885 8.17781C47.6667 8.17781 46.4622 8.43568 45.3506 8.93449C44.2391 9.43329 43.2457 10.1617 42.4358 11.0719L17.2686 38.311C16.7466 38.8983 16.3539 39.5887 16.116 40.3376C15.878 41.0864 15.8001 41.8769 15.8874 42.6578C15.9382 43.4043 16.1453 44.1318 16.4952 44.7931C16.8451 45.4544 17.3301 46.0349 17.9186 46.4969C18.8575 47.1458 20.0069 47.4164 21.1367 47.2544C22.2665 47.0925 23.2935 46.51 24.0124 45.6234L30.1061 39.0016C30.2844 38.8148 30.4987 38.6661 30.7362 38.5645C30.9736 38.4629 31.2291 38.4105 31.4874 38.4105C31.7456 38.4105 32.0012 38.4629 32.2386 38.5645C32.476 38.6661 32.6903 38.8148 32.8686 39.0016C33.2469 39.3822 33.4593 39.897 33.4593 40.4336C33.4593 40.9702 33.2469 41.4851 32.8686 41.8656L26.7749 48.4875C25.4214 50.0643 23.5285 51.0797 21.4663 51.3351C19.404 51.5906 17.3206 51.0677 15.6233 49.8688C14.5592 49.0441 13.684 48.001 13.0569 46.8097C12.4297 45.6184 12.065 44.3066 11.9874 42.9625C11.8503 41.6186 11.9965 40.2609 12.4163 38.9769C12.8361 37.6929 13.5203 36.5112 14.4249 35.5078L39.5921 8.22814C40.7619 6.92121 42.1942 5.87573 43.7955 5.15996C45.3968 4.44418 47.131 4.07422 48.885 4.07422C50.639 4.07422 52.3733 4.44418 53.9746 5.15996C55.5759 5.87573 57.0082 6.92121 58.178 8.22814C60.6109 10.9648 61.9547 14.4992 61.9547 18.1609C61.9547 21.8227 60.6109 25.3571 58.178 28.0938L33.0108 55.3735C31.4464 57.1261 29.5295 58.5284 27.3854 59.4886C25.2414 60.4488 22.9186 60.9451 20.5694 60.9451C18.2202 60.9451 15.8974 60.4488 13.7534 59.4886C11.6093 58.5284 9.69234 57.1261 8.12799 55.3735Z"></path></svg>
                            <div className="absolute z-0 left-1/2 top-1/2 w-0 h-0 rounded-full opacity-0 bg-customRed transition-all duration-500 ease-in group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-100"/>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-5 p-5 -mt-3">
                            <h2 className=" w-full text-center font-Oswald leading-relaxed font-bold capitalize text-2xl">net connect plus</h2>
                            <p className="text-black/60 dark:text-white/50 text-center">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                            <div className="w-10 h-10 rounded bg-pink-100 dark:bg-black/30 flex items-center justify-center relative overflow-hidden cursor-pointer">
                                <div className="absolute z-0 top-0 left-1/2 w-0 h-0 rounded bg-customRed transition-all duration-500 ease-linear group-hover:left-0 group-hover:h-full group-hover:w-full"/>
                                <FontAwesomeIcon icon={faArrowRight} className="relative z-10 text-customRed transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                        </div>
                    </li>
                    {/* card 2 */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[33rem] font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "400">
                        <div className="w-full h-1/2 relative z-[1]  overflow-hidden before:absolute before:w-[110%] before:h-16 before:bg-white before:dark:bg-graphiteBlack before:-bottom-5 before:left-0 before:z-20 before:-rotate-6 after:cursor-pointer after:absolute after:top-0 after:left-0 after:z-[1] after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear ">
                            <img src= {service2} alt="Service 3" className="w-full h-full" />
                        </div>

                        <div className="absolute z-30 left-[40%] top-[32%] w-[6rem] h-[6rem] rounded-full bg-ebony flex items-center justify-center overflow-hidden ">
                            <svg className="w-16 absolute left-[20%] fill-white top-[20%] z-10 transition-all duration-500 ease-linear group-hover:w-14" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.4375 62.9688C21.4341 62.9688 14.7176 60.1867 9.76546 55.2345C4.81333 50.2824 2.03125 43.5659 2.03125 36.5625C2.03125 29.5591 4.81333 22.8426 9.76546 17.8905C14.7176 12.9383 21.4341 10.1563 28.4375 10.1562C28.9762 10.1562 29.4929 10.3703 29.8738 10.7512C30.2547 11.1321 30.4688 11.6488 30.4688 12.1875V34.5312H52.8125C53.3512 34.5312 53.8679 34.7453 54.2488 35.1262C54.6297 35.5071 54.8438 36.0238 54.8438 36.5625C54.8438 43.5659 52.0617 50.2824 47.1095 55.2345C42.1574 60.1867 35.4409 62.9688 28.4375 62.9688ZM26.4062 14.2188C22.1882 14.6233 18.1722 16.219 14.8267 18.8195C11.4812 21.4201 8.94419 24.9184 7.51157 28.9062C6.07896 32.8941 5.80984 37.2071 6.73561 41.3421C7.66139 45.4771 9.74389 49.2636 12.7402 52.2598C15.7364 55.2561 19.5229 57.3386 23.6579 58.2644C27.7929 59.1902 32.1059 58.921 36.0938 57.4884C40.0816 56.0558 43.5799 53.5188 46.1805 50.1733C48.781 46.8278 50.3767 42.8118 50.7812 38.5938H28.4375C27.8988 38.5938 27.3821 38.3797 27.0012 37.9988C26.6203 37.6179 26.4062 37.1012 26.4062 36.5625V14.2188Z"></path><path d="M60.9375 30.4688H36.5625C36.0238 30.4688 35.5071 30.2547 35.1262 29.8738C34.7453 29.4929 34.5312 28.9762 34.5312 28.4375V4.0625C34.5312 3.52378 34.7453 3.00712 35.1262 2.62619C35.5071 2.24526 36.0238 2.03125 36.5625 2.03125C40.0302 2.03125 43.464 2.71427 46.6677 4.04131C49.8715 5.36834 52.7825 7.31341 55.2345 9.76546C57.6866 12.2175 59.6317 15.1285 60.9587 18.3323C62.2857 21.536 62.9688 24.9698 62.9688 28.4375C62.9688 28.9762 62.7547 29.4929 62.3738 29.8738C61.9929 30.2547 61.4762 30.4688 60.9375 30.4688ZM38.5938 26.4062H58.9062C58.4486 21.1728 56.1616 16.2679 52.4468 12.5532C48.7321 8.83841 43.8272 6.55137 38.5938 6.09375V26.4062Z"></path></svg>
                            <div className="absolute z-0 left-1/2 top-1/2 w-0 h-0 rounded-full opacity-0 bg-customRed transition-all duration-500 ease-in group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-100"/>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-5 p-5 -mt-3">
                            <h2 className=" w-full text-center font-Oswald leading-relaxed font-bold capitalize text-2xl">net connect plus</h2>
                            <p className="text-black/60 dark:text-white/50 text-center">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                            <div className="w-10 h-10 rounded bg-pink-100 dark:bg-black/30 flex items-center justify-center relative overflow-hidden cursor-pointer">
                                <div className="absolute z-0 top-0 left-1/2 w-0 h-0 rounded bg-customRed transition-all duration-500 ease-linear group-hover:left-0 group-hover:h-full group-hover:w-full"/>
                                <FontAwesomeIcon icon={faArrowRight} className="relative z-10 text-customRed transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                        </div>
                    </li>
                    {/* card 3 */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[33rem] font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "800">
                        <div className="w-full h-1/2 relative z-[1]  overflow-hidden before:absolute before:w-[110%] before:h-16 before:bg-white before:dark:bg-graphiteBlack before:-bottom-5 before:left-0 before:z-20 before:-rotate-6 after:cursor-pointer after:absolute after:top-0 after:left-0 after:z-[1] after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear ">
                            <img src= {service3} alt="Service 3" className="w-full h-full" />
                        </div>

                        <div className="absolute z-30 left-[40%] top-[32%] w-[6rem] h-[6rem] rounded-full bg-ebony flex items-center justify-center overflow-hidden ">
                            <svg className="w-16 absolute left-[20%] fill-white top-[20%] z-10 transition-all duration-500 ease-linear group-hover:w-14" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg"><path d="M32.5 62.9679C32.0697 62.9694 31.6501 62.8343 31.3016 62.5819L25.6953 58.5194C20.2588 54.5543 15.8343 49.3626 12.7813 43.3661C9.72834 37.3696 8.13304 30.7374 8.125 24.0085V12.1866C8.12518 11.7692 8.25397 11.3619 8.49385 11.0203C8.73373 10.6786 9.07304 10.4192 9.46562 10.2773L31.8094 2.15226C32.2557 1.99091 32.7443 1.99091 33.1906 2.15226L55.5344 10.2773C55.927 10.4192 56.2663 10.6786 56.5061 11.0203C56.746 11.3619 56.8748 11.7692 56.875 12.1866V24.0085C56.8702 30.7409 55.2764 37.377 52.2233 43.3773C49.1702 49.3776 44.744 54.5726 39.3047 58.5398L33.6984 62.6023C33.3475 62.8474 32.928 62.9753 32.5 62.9679ZM12.1875 13.6085V24.0085C12.2013 30.0907 13.6464 36.0842 16.4058 41.5044C19.1653 46.9245 23.1617 51.6191 28.0719 55.2085L32.5 58.4179L36.9281 55.2085C41.8383 51.6191 45.8347 46.9245 48.5942 41.5044C51.3536 36.0842 52.7987 30.0907 52.8125 24.0085V13.6085L32.5 6.21476L12.1875 13.6085Z"></path><path d="M31.3016 52.5288L30.4688 51.9194C26.0667 48.7174 22.4839 44.52 20.0129 39.6697C17.5418 34.8194 16.2525 29.4536 16.25 24.0101V17.9163C16.2502 17.4989 16.379 17.0916 16.6188 16.75C16.8587 16.4083 17.198 16.1489 17.5906 16.0069L31.8094 10.8476C32.2557 10.6862 32.7443 10.6862 33.1906 10.8476L47.4094 16.0069C47.7955 16.1465 48.1303 16.3997 48.3696 16.7333C48.609 17.0669 48.7416 17.4652 48.75 17.8757V23.9694C48.7475 29.4129 47.4582 34.7787 44.9871 39.629C42.5161 44.4794 38.9333 48.6768 34.5312 51.8788L33.6984 52.4882C33.3549 52.7483 32.9375 52.8925 32.5066 52.8998C32.0758 52.9071 31.6537 52.7772 31.3016 52.5288ZM20.3125 19.2976V24.0101C20.3219 28.7385 21.4273 33.4004 23.542 37.6297C25.6566 41.859 28.7229 45.5405 32.5 48.3851C36.2771 45.5405 39.3434 41.859 41.458 37.6297C43.5727 33.4004 44.6781 28.7385 44.6875 24.0101V19.2976L32.5 14.8694L20.3125 19.2976Z"></path></svg>
                            <div className="absolute z-0 left-1/2 top-1/2 w-0 h-0 rounded-full opacity-0 bg-customRed transition-all duration-500 ease-in group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-100"/>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-5 p-5 -mt-3">
                            <h2 className=" w-full text-center font-Oswald leading-relaxed font-bold capitalize text-2xl">net connect plus</h2>
                            <p className="text-black/60 dark:text-white/50 text-center">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                            <div className="w-10 h-10 rounded bg-pink-100 dark:bg-black/30 flex items-center justify-center relative overflow-hidden cursor-pointer">
                                <div className="absolute z-0 top-0 left-1/2 w-0 h-0 rounded bg-customRed transition-all duration-500 ease-linear group-hover:left-0 group-hover:h-full group-hover:w-full"/>
                                <FontAwesomeIcon icon={faArrowRight} className="relative z-10 text-customRed transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


            {/* Leave the handy work to us */}
            <div className="w-full h-auto lg:h-[28rem] m-auto my-5 relative overflow-hidden" >

                {/* overlay bg color */}
                <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-customRed via-customRed to-customRed/80"/>

                {/* bg image */}
                <div className="absolute z-10 opacity-25 top-0 left-0 w-full h-full flex justify-end" >
                    <img src= {bgSketch} alt="" className="animate-swing" />
                </div>

                <div className="w-full xl:w-11/12 m-auto h-full px-4 py-10 relative z-10 flex flex-col xl:flex-row items-center justify-center" >
                    <div className="w-full grid grid-cols-1 gap-5">
                        <h1 className="w-full md:w-1/2 lg:w-[35%] xl:w-3/5 text-3xl md:text-4xl lg:text-5xl capitalize font-extrabold font-Oswald leading-relaxed md:leading-relaxed lg:leading-relaxed text-white" >leave the handy work to us</h1>
                        <p className=" leading-loose xl:w-4/5">It is long to established fact that a reader will be distracted by the readable content of a page when looking at it layout</p>
                    </div>
                    <form action="" className="w-full grid grid-cols-1 gap-5 mt-10">
                        <div className="w-full m-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-5">
                            <input type="text" placeholder="Enter Name" name="name" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                            <input type="email" placeholder="Enter Email" name="email" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                        </div>
                        <div className="w-full m-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-5">
                            <input type="email" placeholder="Subject" name="subject" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 lg:w-10/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                            <button className="relative z-[2] dark:text-white overflow-hidden text-base leading-[1.1] font-bold tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out bg-red-600 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded-5 min-w-[190px] flex-none text-white hover:text-black dark:hover:text-black after:bg-white dark:hover:text-accent-700 w-[95%] md:w-32 " type="submit"><span className="relative z-20">SUSCRIBE</span></button>
                        </div>
                    </form>
                </div>
            </div>


            {/* pricing */}
            <div className="w-11/12 lg:w-[98%] xl:w-[90%] m-auto my-10" data-aos="fade-up" data-aos-delay="0">
                <ul className="w-full flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-10 lg:gap-5 my-5">
                    {/* basic */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[25rem] h-[34rem] px-10 pt-10 pb-5 font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack flex flex-col items-center gap-5 relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "0">
                        <h2 className="font-extrabold capitalize font-sans text-3xl">Basic Plan</h2>            
                        <p className="text-center text-black/60 dark:text-white/60 font-Roboto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo.</p> 
                        <div className="w-5/6 h-20 bg-pink-100 dark:bg-ebony flex items-center justify-center my-5 overflow-hidden relative text-black dark:text-white font-Oswald rounded group-hover:text-white">
                            <div className="absolute z-0 w-full h-0 bottom-0 left-0 bg-customRed transition-all duration-300 ease-linear group-hover:h-full group-hover:top-0 rounded"/>
                            <div className="flex items-end justify-center gap-1 relative z-10">
                                <h1 className="font-extrabold text-5xl ">$49</h1>
                                <span className="">/month</span>
                            </div>
                        </div> 
                        <ul className="w-full grid grid-cols-1 gap-2 text-black dark:text-white">
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Mistakes to avoid</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Your startup</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Knew about fonts</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>winning metric for your startup</span>
                            </li>
                        </ul> 
                        <button className="w-full m-auto h-16 border-[2px] border-customRed rounded uppercase font-bold relative transition-all duration-300 ease-linear overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-customRed before:z-0 before:transition-all before:duration-300 before:ease-linear hover:before:w-full hover:before:left-0 hover:text-white">
                            <span className="relative z-10">select plan</span>
                        </button>
                    </li>
                    {/* standard */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[25rem] h-[34rem] px-10 pt-10 pb-5 font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack flex flex-col items-center gap-5 relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "0">
                        <h2 className="font-extrabold capitalize font-sans text-3xl">Standard Plan</h2>            
                        <p className="text-center text-black/60 dark:text-white/60 font-Roboto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo.</p> 
                        <div className="w-5/6 h-20 bg-pink-100 dark:bg-ebony flex items-center justify-center my-5 overflow-hidden relative text-black dark:text-white font-Oswald rounded group-hover:text-white">
                            <div className="absolute z-0 w-full h-0 bottom-0 left-0 bg-customRed transition-all duration-300 ease-linear group-hover:h-full group-hover:top-0 rounded"/>
                            <div className="flex items-end justify-center gap-1 relative z-10">
                                <h1 className="font-extrabold text-5xl ">$79</h1>
                                <span className="">/month</span>
                            </div>
                        </div> 
                        <ul className="w-full grid grid-cols-1 gap-2 text-black dark:text-white">
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Mistakes to avoid</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Your startup</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Knew about fonts</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>winning metric for your startup</span>
                            </li>
                        </ul> 
                        <button className="w-full m-auto h-16 border-[2px] border-customRed rounded uppercase font-bold relative transition-all duration-300 ease-linear overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-customRed before:z-0 before:transition-all before:duration-300 before:ease-linear hover:before:w-full hover:before:left-0 hover:text-white">
                            <span className="relative z-10">select plan</span>
                        </button>
                    </li>
                    {/* premium */}
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[25rem] h-[34rem] px-10 pt-10 pb-5 font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack flex flex-col items-center gap-5 relative group overflow-hidden" data-aos = "fade-up" data-aos-delay = "0">
                        <h2 className="font-extrabold capitalize font-sans text-3xl">Premium Plan</h2>            
                        <p className="text-center text-black/60 dark:text-white/60 font-Roboto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo.</p> 
                        <div className="w-5/6 h-20 bg-pink-100 dark:bg-ebony flex items-center justify-center my-5 overflow-hidden relative text-black dark:text-white font-Oswald rounded group-hover:text-white">
                            <div className="absolute z-0 w-full h-0 bottom-0 left-0 bg-customRed transition-all duration-300 ease-linear group-hover:h-full group-hover:top-0 rounded"/>
                            <div className="flex items-end justify-center gap-1 relative z-10">
                                <h1 className="font-extrabold text-5xl ">$99</h1>
                                <span className="">/month</span>
                            </div>
                        </div> 
                        <ul className="w-full grid grid-cols-1 gap-2 text-black dark:text-white">
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Mistakes to avoid</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Your startup</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>Knew about fonts</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>winning metric for your startup</span>
                            </li>
                        </ul> 
                        <button className="w-full m-auto h-16 border-[2px] border-customRed rounded uppercase font-bold relative transition-all duration-300 ease-linear overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-customRed before:z-0 before:transition-all before:duration-300 before:ease-linear hover:before:w-full hover:before:left-0 hover:text-white">
                            <span className="relative z-10">select plan</span>
                        </button>
                    </li>
                </ul>
            </div>


            {/* about us */}
            <div className="w-11/12 h-auto lg:w-[97%] xl:w-11/12 m-auto my-10 lg:grid grid-cols-2 place-items-center" data-aos="fade-up" data-aos-delay="0">
                <div className="w-full grid grid-cols-1 gap-5 font-sans" data-aos="fade-right">
                    <h1 className="w-full font-bold uppercase text-customRed" >about us</h1>
                    <h2 className="w-full font-extrabold text-3xl lg:text-5xl capitalize -mt-2 font-Roboto">sculpting digital landscapes</h2>
                    <p className="font-sans leading-loose text-black/65 dark:text-white/65 mt-5">Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat, sodales purus. Nunc quis an mauris et eros vulputate mattis Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus the volutpatquis purus convallis</p>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:place-items-stretch text-black dark:text-white my-5">
                       <ul className="grid grid-cols-1 gap-2">
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Mistakes to avoid</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Your startup</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Knew about fonts</span>
                            </li>
                       </ul>
                        <ul className="grid grid-cols-1 gap-2">
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Your Startup Business</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Your startup</span>
                            </li>
                            <li className="flex items-center justify-start gap-5 capitalize font-bold">
                                <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                                </div>
                                <span>Knew about fonts</span>
                            </li>
                        </ul>
                    </div> 
                </div>

                <div className="w-full md:w-11/12 m-auto h-[25rem] md:h-[30rem] my-10 relative flex items-center justify-center group" data-aos="fade-left">
                    <div className="absolute z-[1] inset-0 bg-customRed rounded rotate-3 group-hover:transition-transform group-hover:duration-300 group-hover:ease-in-out group-hover:rotate-0 w-full h-full"/>
                    <div className="w-full h-full relative">
                        <div className="absolute top-0 left-0 z-[3] h-0 w-full bg-white/30 opacity-100 group-hover:transition-all group-hover:h-full group-hover:opacity-0 group-hover:duration-500 group-hover:ease-linear "/>
                        <img src={About5} alt="" className="relative w-full h-full z-[2] rounded " />
                    </div>
                    <div className="absolute w-[160px] h-[160px] top-2/5 left-2/5 z-10 rounded grid place-items-center">
                        <div className="absolute z-10 inset-0 w-full h-full bg-white/30 top-0 left-0 rounded animate-scale-infinite"/>
                        <div className="absolute z-20 inset-0 w-[85%] h-[85%] top-[7%] left-[7%] bg-white/30 rounded animate-scale-infinite-f "/>
                        <div className="relative z-50 w-[100px] h-[100px] bg-customRed grid place-items-center rounded">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.82617 0.546509L15.0762 7.42151C15.623 7.77307 15.9746 8.39807 15.9746 9.02307C15.9746 9.68713 15.623 10.3121 15.0762 10.6246L3.82617 17.4996C3.24023 17.8512 2.49805 17.8903 1.91211 17.5387C1.32617 17.2262 0.974609 16.6012 0.974609 15.8981V2.14807C0.974609 1.48401 1.32617 0.859009 1.91211 0.546509C2.49805 0.194946 3.24023 0.194946 3.82617 0.546509Z" fill="white"></path></svg>
                        </div>
                    </div>
                </div>
            </div>


            {/* work process */}
            <div className="my-10">
            <AutoScroll/>
            </div>

            {/* Cyber scape defend, smartTech integrations and data vista analytics */}
            <section className="my-10 w-full xl:w-11/12 m-auto h-auto py-10 px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none" data-aos="fade-up">
                <div className="w-fit flex items-center justify-start space-x-10 md:space-x-5 xl:space-x-16">
                    {/* card 1 */}
                    <Card className="items-start !w-[90vw] m-auto !bg-gray-50 !shadow dark:!shadow-2xl dark:!bg-graphiteBlack md:!w-[340px] lg:!w-[350px] xl:!w-[400px] extraExtraLarge:!w-[425px]" dataAos="fade-up" data-aos='' dataAosDelay="0">
                        <div className="w-full flex items-end justify-start gap-3 mb-10 md:mb-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-customRed relative">
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px] fill-white absolute top-1/4 -left-3" xmlns="http://www.w3.org/2000/svg"><path d="M60.9375 30.9651H52.8125V22.8401C52.8071 20.7091 52.4713 18.5918 51.8172 16.5636L60.3484 8.03233C60.7309 7.64984 60.9458 7.13107 60.9458 6.59014C60.9458 6.04922 60.7309 5.53045 60.3484 5.14796C59.9659 4.76547 59.4472 4.55058 58.9062 4.55058C58.3653 4.55058 57.8466 4.76547 57.4641 5.14796L50.0094 12.6839C48.2159 9.63409 45.6569 7.10563 42.5858 5.34887C39.5147 3.5921 36.0381 2.66797 32.5 2.66797C28.9619 2.66797 25.4852 3.5921 22.4142 5.34887C19.3431 7.10563 16.7841 9.63409 14.9906 12.6839L7.53594 5.14796C7.34655 4.95857 7.12171 4.80833 6.87426 4.70584C6.62681 4.60334 6.36159 4.55058 6.09375 4.55058C5.82591 4.55058 5.56069 4.60334 5.31324 4.70584C5.06579 4.80833 4.84095 4.95857 4.65156 5.14796C4.26907 5.53045 4.05419 6.04922 4.05419 6.59014C4.05419 7.13107 4.26907 7.64984 4.65156 8.03233L13.1828 16.5636C12.5287 18.5918 12.1929 20.7091 12.1875 22.8401V30.9651H4.0625C3.52378 30.9651 3.00712 31.1791 2.62619 31.5601C2.24526 31.941 2.03125 32.4577 2.03125 32.9964C2.03125 33.5351 2.24526 34.0518 2.62619 34.4327C3.00712 34.8136 3.52378 35.0276 4.0625 35.0276H12.1875V43.1526C12.1929 45.2837 12.5287 47.401 13.1828 49.4292L4.65156 57.9605C4.26907 58.343 4.05419 58.8617 4.05419 59.4026C4.05419 59.9436 4.26907 60.4623 4.65156 60.8448C5.03405 61.2273 5.55282 61.4422 6.09375 61.4422C6.63468 61.4422 7.15345 61.2273 7.53594 60.8448L14.9906 53.3089C16.7841 56.3587 19.3431 58.8872 22.4142 60.6439C25.4852 62.4007 28.9619 63.3248 32.5 63.3248C36.0381 63.3248 39.5147 62.4007 42.5858 60.6439C45.6569 58.8872 48.2159 56.3587 50.0094 53.3089L57.4641 60.7636C57.8466 61.1461 58.3653 61.361 58.9062 61.361C59.4472 61.361 59.9659 61.1461 60.3484 60.7636C60.7309 60.3811 60.9458 59.8623 60.9458 59.3214C60.9458 58.7805 60.7309 58.2617 60.3484 57.8792L51.8172 49.348C52.4631 47.3457 52.7988 45.2564 52.8125 43.1526V35.0276H60.9375C61.4762 35.0276 61.9929 34.8136 62.3738 34.4327C62.7547 34.0518 62.9688 33.5351 62.9688 32.9964C62.9688 32.4577 62.7547 31.941 62.3738 31.5601C61.9929 31.1791 61.4762 30.9651 60.9375 30.9651ZM32.5 6.59014C36.4554 6.59373 40.2738 8.03989 43.2392 10.6575C46.2046 13.2751 48.1134 16.8845 48.6078 20.8089H16.3922C16.8866 16.8845 18.7955 13.2751 21.7608 10.6575C24.7262 8.03989 28.5446 6.59373 32.5 6.59014ZM34.5312 59.2605V30.9651C34.5312 30.4264 34.3172 29.9098 33.9363 29.5288C33.5554 29.1479 33.0387 28.9339 32.5 28.9339C31.9613 28.9339 31.4446 29.1479 31.0637 29.5288C30.6828 29.9098 30.4688 30.4264 30.4688 30.9651V59.2605C26.5443 58.766 22.935 56.8572 20.3174 53.8918C17.6997 50.9264 16.2536 47.1081 16.25 43.1526V24.8714H48.75V43.1526C48.7464 47.1081 47.3003 50.9264 44.6826 53.8918C42.065 56.8572 38.4557 58.766 34.5312 59.2605Z"></path></svg>
                            </div>
                            <h3 className="text-xl capitalize font-bold font-sans">cyber Scape defend</h3>
                        </div>
                        <p className="leading-relaxed text-black/50 dark:text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa maxime consectetur ducimus libero perspiciatis officia.</p>
                        <div className="w-full flex items-center justify-between">
                            <button className="uppercase text-customRed flex items-center justify-start gap-5 font-Oswald font-bold tracking-wider transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white">
                            <span>read more</span>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                            </button>
                            <h1 className="text-7xl font-sans text-pink-200/50 dark:text-white/10 font-bold">
                                01
                            </h1>
                        </div>
                    </Card>
                    {/* card 2 */}
                    <Card className="items-start !w-[90vw] m-auto !bg-gray-50 !shadow dark:!shadow-2xl dark:!bg-graphiteBlack md:!w-[340px] lg:!w-[350px] xl:!w-[400px] extraExtraLarge:!w-[425px]" dataAos="fade-up" data-aos='' dataAosDelay="0">
                        <div className="w-full flex items-end justify-start gap-3 mb-10 md:mb-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-customRed relative">
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px] fill-white absolute top-1/4 -left-3" xmlns="http://www.w3.org/2000/svg"><path d="M27.6443 63.3015C27.2207 63.1202 26.8714 62.8003 26.6536 62.3943C26.4359 61.9883 26.3626 61.5203 26.4458 61.0672L30.0615 41.1203H12.1865C11.8135 41.1211 11.4475 41.0191 11.1286 40.8256C10.8097 40.6321 10.5502 40.3546 10.3786 40.0234C10.2215 39.7023 10.1519 39.3453 10.1768 38.9887C10.2018 38.632 10.3205 38.2883 10.5208 37.9922L34.8958 3.4609C35.1648 3.08207 35.5554 2.80688 36.0027 2.6812C36.4499 2.55553 36.9268 2.58697 37.3536 2.77028C37.7693 2.94147 38.1165 3.24571 38.3407 3.63535C38.5649 4.02498 38.6536 4.47799 38.5927 4.9234L34.9365 24.8703H52.8115C53.1845 24.8695 53.5505 24.9714 53.8693 25.1649C54.1882 25.3584 54.4477 25.636 54.6193 25.9672C54.7764 26.2883 54.846 26.6452 54.8211 27.0019C54.7961 27.3585 54.6775 27.7023 54.4771 27.9984L30.1021 62.5297C29.8448 62.9226 29.4593 63.2143 29.0112 63.3551C28.5631 63.4958 28.08 63.4769 27.6443 63.3015ZM16.1068 37.0578H32.499C32.7974 37.0573 33.0922 37.1226 33.3626 37.249C33.6329 37.3753 33.872 37.5597 34.063 37.789C34.2516 38.0186 34.3875 38.2867 34.4612 38.5745C34.5349 38.8623 34.5446 39.1627 34.4896 39.4547L32.0724 52.739L48.8911 28.9328H32.499C32.2005 28.9333 31.9057 28.868 31.6354 28.7416C31.365 28.6152 31.1259 28.4308 30.9349 28.2015C30.7463 27.972 30.6104 27.7039 30.5367 27.4161C30.463 27.1283 30.4533 26.8278 30.5083 26.5359L32.9255 13.2515L16.1068 37.0578Z"></path></svg>
                            </div>
                            <h3 className="text-xl capitalize font-bold font-sans">smartTech Integrations</h3>
                        </div>
                        <p className="leading-relaxed text-black/50 dark:text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa maxime consectetur ducimus libero perspiciatis officia.</p>
                        <div className="w-full flex items-center justify-between">
                            <button className="uppercase text-customRed flex items-center justify-start gap-5 font-Oswald font-bold tracking-wider transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white">
                            <span>read more</span>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                            </button>
                            <h1 className="text-7xl font-sans text-pink-200/50 dark:text-white/10 font-bold">
                                02
                            </h1>
                        </div>
                    </Card>
                    {/* card 3 */}
                    <Card className="items-start !w-[90vw] m-auto !bg-gray-50 !shadow dark:!shadow-2xl dark:!bg-graphiteBlack md:!w-[340px] lg:!w-[350px] xl:!w-[400px] extraExtraLarge:!w-[425px]" dataAos="fade-up" data-aos='' dataAosDelay="0">
                        <div className="w-full flex items-end justify-start gap-3 mb-10 md:mb-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-customRed relative">
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px] fill-white absolute top-1/4 -left-3" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.3237 63.3011L32.4987 60.437L25.6737 63.3011C25.2561 63.4782 24.7912 63.5105 24.3531 63.3927C23.9151 63.2748 23.529 63.0138 23.2566 62.6511L18.7878 56.7605L11.4347 55.8261C10.9853 55.7706 10.5673 55.5666 10.2471 55.2464C9.92697 54.9263 9.72295 54.5083 9.6675 54.0589L8.73312 46.7058L2.8425 42.237C2.47979 41.9646 2.21874 41.5785 2.10093 41.1404C1.98313 40.7024 2.01537 40.2375 2.1925 39.8198L5.05656 32.9948L2.1925 26.1698C2.01537 25.7522 1.98313 25.2873 2.10093 24.8492C2.21874 24.4112 2.47979 24.0251 2.8425 23.7527L8.73312 19.2839L9.6675 11.9308C9.72295 11.4814 9.92697 11.0634 10.2471 10.7432C10.5673 10.4231 10.9853 10.219 11.4347 10.1636L18.7878 9.22921L23.2566 3.33859C23.529 2.97589 23.9151 2.71483 24.3531 2.59703C24.7912 2.47923 25.2561 2.51146 25.6737 2.68859L32.4987 5.55265L39.3237 2.68859C39.7414 2.51146 40.2063 2.47923 40.6444 2.59703C41.0824 2.71483 41.4685 2.97589 41.7409 3.33859L46.2097 9.22921L53.5628 10.1636C54.0122 10.219 54.4302 10.4231 54.7503 10.7432C55.0705 11.0634 55.2745 11.4814 55.33 11.9308L56.2644 19.2839L62.155 23.7527C62.5177 24.0251 62.7788 24.4112 62.8966 24.8492C63.0144 25.2873 62.9821 25.7522 62.805 26.1698L59.9409 32.9948L62.805 39.8198C62.9821 40.2375 63.0144 40.7024 62.8966 41.1404C62.7788 41.5785 62.5177 41.9646 62.155 42.237L56.2644 46.7058L55.33 54.0589C55.2745 54.5083 55.0705 54.9263 54.7503 55.2464C54.4302 55.5666 54.0122 55.7706 53.5628 55.8261L46.2097 56.7605L41.7409 62.6511C41.4685 63.0138 41.0824 63.2748 40.6444 63.3927C40.2063 63.5105 39.7414 63.4782 39.3237 63.3011ZM33.23 56.3542L39.3237 58.9542L43.3862 53.612C43.5508 53.3998 43.7558 53.2223 43.9894 53.0898C44.223 52.9573 44.4806 52.8725 44.7472 52.8402L51.3691 51.987L52.2222 45.3652C52.2545 45.0985 52.3393 44.841 52.4718 44.6074C52.6043 44.3738 52.7818 44.1688 52.9941 44.0042L58.3362 39.9417L55.7362 33.848C55.5328 33.3394 55.5328 32.7721 55.7362 32.2636L58.3362 26.1698L52.9941 22.1073C52.7818 21.9428 52.6043 21.7378 52.4718 21.5042C52.3393 21.2706 52.2545 21.013 52.2222 20.7464L51.3691 14.1245L44.7472 13.2714C44.4806 13.2391 44.223 13.1542 43.9894 13.0218C43.7558 12.8893 43.5508 12.7118 43.3862 12.4995L39.3237 7.15734L33.23 9.75734C32.7215 9.96078 32.1542 9.96078 31.6456 9.75734L25.5519 7.15734L21.4894 12.4995C21.3248 12.7118 21.1198 12.8893 20.8862 13.0218C20.6526 13.1542 20.395 13.2391 20.1284 13.2714L13.5066 14.1245L12.6534 20.6245C12.6211 20.8911 12.5363 21.1487 12.4038 21.3823C12.2713 21.6159 12.0938 21.8209 11.8816 21.9855L6.53937 26.048L9.13937 32.1417C9.34281 32.6502 9.34281 33.2176 9.13937 33.7261L6.53937 39.8198L11.8816 43.8823C12.0938 44.0469 12.2713 44.2519 12.4038 44.4855C12.5363 44.7191 12.6211 44.9767 12.6534 45.2433L13.5066 51.8652L20.1284 52.7183C20.395 52.7506 20.6526 52.8354 20.8862 52.9679C21.1198 53.1004 21.3248 53.2779 21.4894 53.4902L25.5519 58.8323L31.6456 56.2323C31.9142 56.1424 32.198 56.1068 32.4805 56.1277C32.763 56.1487 33.0385 56.2257 33.2909 56.3542H33.23Z"></path><path d="M28.6816 47.2153C28.3436 47.2169 28.0106 47.1341 27.7126 46.9745C27.4147 46.8149 27.1613 46.5835 26.9754 46.3012L18.6066 33.5653C18.4599 33.3412 18.3588 33.0904 18.309 32.8273C18.2592 32.5641 18.2617 32.2937 18.3164 32.0315C18.3711 31.7694 18.4769 31.5205 18.6278 31.2992C18.7787 31.0779 18.9716 30.8885 19.1957 30.7418C19.6482 30.4455 20.1999 30.3411 20.7294 30.4516C20.9916 30.5063 21.2404 30.6121 21.4617 30.763C21.683 30.9138 21.8724 31.1068 22.0191 31.3309L28.6816 41.4871L42.9004 19.6918C43.1967 19.2393 43.6606 18.923 44.1901 18.8125C44.7196 18.7021 45.2713 18.8065 45.7238 19.1027C46.1764 19.399 46.4927 19.863 46.6031 20.3925C46.7136 20.922 46.6092 21.4737 46.3129 21.9262L30.4691 46.3012C30.2759 46.5953 30.0096 46.8343 29.6962 46.9945C29.3829 47.1547 29.0333 47.2308 28.6816 47.2153Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl capitalize font-bold font-sans">data vista analytics</h3>
                        </div>
                        <p className="leading-relaxed text-black/50 dark:text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa maxime consectetur ducimus libero perspiciatis officia.</p>
                        <div className="w-full flex items-center justify-between">
                            <button className="uppercase text-customRed flex items-center justify-start gap-5 font-Oswald font-bold tracking-wider transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white">
                            <span>read more</span>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                            </button>
                            <h1 className="text-7xl font-sans text-pink-200/50 dark:text-white/10 font-bold">
                                03
                            </h1>
                        </div>
                    </Card>
                    {/* card 4 */}
                    <Card className="items-start !w-[90vw] m-auto !bg-gray-50 !shadow dark:!shadow-2xl dark:!bg-graphiteBlack md:!w-[340px] lg:!w-[350px] xl:!w-[400px] extraExtraLarge:!w-[425px]" dataAos="fade-up" data-aos='' dataAosDelay="0">
                        <div className="w-full flex items-end justify-start gap-3 mb-10 md:mb-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-customRed relative">
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px] fill-white absolute top-1/4 -left-3" xmlns="http://www.w3.org/2000/svg"><path d="M26.8158 63.4642C26.409 63.4646 26.0114 63.3428 25.6746 63.1147C25.3378 62.8865 25.0772 62.5625 24.9267 62.1845L2.17671 5.30952C2.02896 4.94039 1.99279 4.53601 2.07268 4.14651C2.15258 3.75701 2.34504 3.39953 2.62619 3.11838C2.90734 2.83723 3.26483 2.64477 3.65432 2.56487C4.04382 2.48497 4.4482 2.52114 4.81734 2.6689L61.6923 25.4189C62.0703 25.5694 62.3943 25.83 62.6225 26.1668C62.8506 26.5036 62.9724 26.9011 62.972 27.308C62.97 27.709 62.8494 28.1004 62.6252 28.433C62.4011 28.7655 62.0836 29.0243 61.7126 29.1767L38.333 38.8251L28.6845 62.2048C28.5321 62.5758 28.2734 62.8933 27.9408 63.1174C27.6082 63.3415 27.2168 63.4622 26.8158 63.4642ZM7.70171 8.1939L26.8361 56.0298L34.9611 36.4892C35.1785 35.9887 35.5778 35.5894 36.0783 35.372L55.6189 27.247L7.70171 8.1939Z"></path></svg>
                            </div>
                            <h3 className="text-xl capitalize font-bold font-sans">data vista analytics</h3>
                        </div>
                        <p className="leading-relaxed text-black/50 dark:text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa maxime consectetur ducimus libero perspiciatis officia.</p>
                        <div className="w-full flex items-center justify-between">
                            <button className="uppercase text-customRed flex items-center justify-start gap-5 font-Oswald font-bold tracking-wider transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white">
                            <span>read more</span>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                            </button>
                            <h1 className="text-7xl font-sans text-pink-200/50 dark:text-white/10 font-bold">
                                04
                            </h1>
                        </div>
                    </Card>
                </div>
            </section>

        </section>
    )
}

export default HomeTwoScreen;