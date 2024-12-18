import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../../components/Commons/buttons/secondaryButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";



// animation
import Aos from "aos";
import 'aos/dist/aos.css'



const PricingActionLayout: React.FC = () => {



    // animate element in
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    })



    return(
        <section className="w-full m-auto mt-10 flex flex-col items-center justify-center space-y-10" >

            {/* card */}
            <div className="w-full h-[35rem] md:h-96 lg:h-64 m-auto border dark:border-white border-opacity-50 dark:border-opacity-10 overflow-hidden flex flex-wrap items-center justify-start" data-aos="fade-up" data-aos-delay="100">
                <div className="w-full lg:w-[26%] xl:w-[24%] h-[40%] lg:h-full flex flex-col justify-center space-y-9 lg:space-y-5 xl:space-y-9 p-5 px-12 lg:px-5 xl:px-12 border-b md:border-r border-white border-opacity-10">
                    <div className="">
                        <h1 className="uppercase text-xl md:text-2xl font-bold">basic plan</h1>
                    </div>
                    <div>
                        <p className="dark:text-white/70"  >Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the Lorem Ipsum is simply</p>
                    </div>
                </div>

                <div className="w-full lg:w-[74%] xl:w-[76%] h-[60%] lg:h-full p-5 lg:px-10 lg:pl-10 xl:pl-44 flex flex-col md:flex-row md:items-center justify-between items-center">
                    {/* benefits */}
                    <ul className="grid grid-cols-1 gap-y-3">
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Mistakes To Avoid</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span  className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Your Startup</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">knew about fonts</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">winning matrix for your startup</p>
                        </li>
                    </ul>

                    {/* price */}
                    <div className="mx-3 text-xl font-bold font-Oswald">
                        <span className="text-4xl md:text-5xl">$49</span> /month
                    </div>

                    {/* action button */}
                <div>
                    <SecondaryButton className="border border-customRed w-44">
                        <span>select plan</span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </SecondaryButton>
                </div>
                </div>
            </div>

            
{/* second card */}
            {/* card */}
            <div className="w-full h-[38rem] md:h-96 lg:h-64 m-auto border dark:border-white border-opacity-50 dark:border-opacity-10 overflow-hidden flex flex-wrap items-center justify-start relative" data-aos="fade-up" data-aos-delay="100">
                <div className="w-full lg:w-[26%] xl:w-[24%] h-[45%] lg:h-full flex flex-col justify-end md:justify-center space-y-9 lg:space-y-5 xl:space-y-9 p-5 px-12 lg:px-5 xl:px-12 border-b md:border-r border-white border-opacity-10">
                    <div className="">
                        <h1 className="uppercase text-xl md:text-2xl font-bold">standard plan</h1>
                    </div>
                    <div className="">
                        <p className="dark:text-white/70"  >Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the Lorem Ipsum is simply</p>
                    </div>
                </div>

                <div className="w-full lg:w-[74%] xl:w-[76%] h-[60%] lg:h-full p-5 lg:px-10 lg:pl-10 xl:pl-44 flex flex-col md:flex-row md:items-center justify-between items-center">
                    {/* benefits */}
                    <ul className="grid grid-cols-1 gap-y-3">
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Mistakes To Avoid</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span  className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Your Startup</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">knew about fonts</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">winning matrix for your startup</p>
                        </li>
                    </ul>

                    {/* price */}
                    <div className="my-3 mt-5 md:mt-0 font-bold font-Oswald">
                        <span className=" text-4xl md:text-5xl">$79</span> /month
                    </div>

                    {/* action button */}
                <div className="w-64 h-full flex items-center justify-center">
                    <div className="absolute z-0 top-4 right-0 w-40 h-12 bg-gradient-to-t from-customRed via-customRed text-white to-ebony dark:bg-gradient-to-r dark:from-customRed dark:to-ebony flex items-center justify-center overflow-hidden before:absolute before:z-10 before:-top-1 before:bg-white before:dark:bg-ebony before:w-14 before:h-14 before:-left-10 before:rounded-tl-full before:rounded-bl-full before:rounded-br-full before:rotate-45 uppercase text-lg font-bold">popular</div>
                    <SecondaryButton className="border border-customRed w-44">
                        <span>select plan</span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </SecondaryButton>
                </div>
                </div>
            </div>


{/* third */}
            {/* card */}
            <div className="w-full h-[35rem] md:h-96 lg:h-64 m-auto border dark:border-white border-opacity-50 dark:border-opacity-10 overflow-hidden flex flex-wrap items-center justify-start" data-aos="fade-up" data-aos-delay="100">
                <div className="w-full lg:w-[26%] xl:w-[24%] h-[40%] lg:h-full flex flex-col justify-center space-y-9 lg:space-y-5 xl:space-y-9 p-5 px-12 lg:px-5 xl:px-12 border-b md:border-r border-white border-opacity-10">
                    <div className="">
                        <h1 className="uppercase text-xl md:text-2xl font-bold">Premium Plan</h1>
                    </div>
                    <div>
                        <p className="dark:text-white/70"  >Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the Lorem Ipsum is simply</p>
                    </div>
                </div>

                <div className="w-full lg:w-[74%] xl:w-[76%] h-[60%] lg:h-full p-5 lg:px-10 lg:pl-10 xl:pl-44 flex flex-col md:flex-row md:items-center justify-between items-center">
                    {/* benefits */}
                    <ul className="grid grid-cols-1 gap-y-3">
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Mistakes To Avoid</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span  className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">Your Startup</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">knew about fonts</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="fill-customRed">
                                <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                            </span>
                            <p className=" dark:text-white dark:text-opacity-70">winning matrix for your startup</p>
                        </li>
                    </ul>

                    {/* price */}
                    <div className="text-xl font-bold font-Oswald">
                        <span className="text-4xl md:text-5xl">$99</span> /month
                    </div>

                    {/* action button */}
                <div>
                    <SecondaryButton className="border border-customRed w-44">
                        <span>select plan</span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </SecondaryButton>
                </div>
                </div>
            </div>
        </section>
    )
}

export default PricingActionLayout;