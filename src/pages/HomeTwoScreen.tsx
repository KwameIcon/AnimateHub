import { Showcase } from "../layout/showcase/homeTwoShowcase";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";


// images
import service1 from "../assets/images/others/service-1.webp";
import service2 from "../assets/images/others/service-2.webp";
import service3 from "../assets/images/others/service-3.webp";
import bgSketch from '../assets/images/others/pattern-1 (1).webp';



// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';



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

        </section>
    )
}

export default HomeTwoScreen;