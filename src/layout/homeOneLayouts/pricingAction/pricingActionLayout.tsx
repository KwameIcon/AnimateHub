import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../../../components/Commons/buttons/secondaryButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";



// animation
import Aos from "aos";
import 'aos/dist/aos.css'
import { PRICEDATA } from "../../../DATA/HomeOneData/PRICEDATA";



const PricingActionLayout: React.FC = () => {



    // animate element in
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    })



    return (
        <section className="w-full xl:w-11/12 m-auto extraExtraLarge:w-3/5 mt-20 flex flex-col items-center justify-center p-5">


            {/* pricing header text */}
            <div className="w-full pl-3 md:pl-0 md:px-2 flex flex-wrap items-center justify-center" data-aos="fade-up">
                <div className="flex flex-col items-center justify-center space-y-5">
                    <h3 className="text-lg uppercase font-bold text-customRed font-Oswald tracking-widest">pricing action</h3>
                    <h1 className="text-3xl md:text-4xl capitalize leading-[3rem] md:leading-[4rem] lg:leading-[4rem] md:w-4/5 font-bold font-Oswald dark:text-white text-center">innovating for a better tomorrow</h1>
                </div>
            </div>

            <div className="w-full m-auto mt-10 flex flex-col items-center justify-center space-y-10" >
                {/* card */}
                {PRICEDATA.map((card) => (
                    <div className="w-full h-[35rem] md:h-96 lg:h-64 m-auto border dark:border-white border-opacity-50 dark:border-opacity-10 overflow-hidden flex flex-wrap items-center justify-start" data-aos="fade-up" data-aos-delay="100" key={card.id}>
                        <div className="w-full lg:w-[26%] xl:w-[24%] h-[40%] lg:h-full flex flex-col justify-center space-y-9 lg:space-y-5 xl:space-y-9 p-5 px-12 lg:px-5 xl:px-12 border-b md:border-r border-white border-opacity-10">
                            <div className="">
                                <h1 className="uppercase text-xl md:text-2xl font-bold">{card.plan}</h1>
                            </div>
                            <div>
                                <p className="dark:text-white/70"  >{card.Info}</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[74%] xl:w-[76%] h-[60%] lg:h-full p-5 lg:px-10 lg:pl-10 xl:pl-44 flex flex-col md:flex-row md:items-center justify-between items-center">
                            {/* benefits */}
                            <ul className="grid grid-cols-1 gap-y-3">
                                {card.benefits.map((item, i) => (
                                    <li className="flex items-center space-x-4" key={i}>
                                        <span className="fill-customRed">
                                            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d={card.checkIcon}></path></svg>
                                        </span>
                                        <p className=" dark:text-white dark:text-opacity-70">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            {/* price */}
                            <div className="mx-3 text-xl font-bold font-Oswald">
                                <span className="text-4xl md:text-5xl">${card.price}</span> /month
                            </div>

                            {/* action button */}
                            <div className="w-64 h-full flex items-center justify-center">
                                {card.popular && (
                                    <div className="absolute z-0 top-4 border-none right-0 w-40 h-12 bg-gradient-to-t from-customRed via-customRed text-white to-ebony dark:bg-gradient-to-r dark:from-customRed dark:to-ebony flex items-center justify-center overflow-hidden before:absolute before:z-10 before:-top-1 before:bg-white before:dark:bg-ebony before:w-14 before:h-14 before:-left-10 before:rounded-tl-full before:rounded-bl-full before:rounded-br-full before:rotate-45 uppercase text-lg font-bold">popular</div>
                                )}
                                <SecondaryButton className="border border-customRed w-44">
                                    <span>select plan</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default PricingActionLayout;