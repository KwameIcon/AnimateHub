

// images
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SERVICEDATA } from "../../DATA/HomeTwoData/SERVICEDATA";



const Services = () => {

    return (
        <div className="w-11/12 lg:w-[97%] xl:w-11/12 m-auto extraExtraLarge:-mt-40" data-aos="fade-up" data-aos-delay="0">
            {/* header */}
            <div className="w-full flex flex-col items-center justify-center space-y-5 py-20" data-aos="fade-up" data-aos-delay="0">
                <h3 className="uppercase text-customRed font-extrabold tracking-widest my-5 font-Oswald text-xl" data-aos="fade-up" data-aos-delay="0" >our services</h3>
                <h1 className="w-[90%] lg:w-1/2 m-auto text-3xl md:text-5xl font-Oswald font-bold text-center leading-relaxed" data-aos="fade-up" data-aos-delay="100" >Elevating Businesses with IT Ingenuity</h1>
            </div>

            {/* services cards */}
            <ul className="w-full flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-10 my-5">
                {/* card */}
                {SERVICEDATA.map((service) => (
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[33rem] font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack relative group overflow-hidden" data-aos="fade-up" data-aos-delay={service.animateDuration}>
                        <div className="w-full h-1/2 relative z-[1]  overflow-hidden before:absolute before:w-[110%] before:h-16 before:bg-white before:dark:bg-graphiteBlack before:-bottom-5 before:left-0 before:z-20 before:-rotate-6 after:cursor-pointer after:absolute after:top-0 after:left-0 after:z-[1] after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear ">
                            <img src={service.image} alt="Service 1" className="w-full h-full" />
                        </div>

                        <div className="absolute z-30 left-[40%] top-[32%] w-[6rem] h-[6rem] rounded-full bg-ebony flex items-center justify-center overflow-hidden ">
                            <svg className="w-16 absolute left-[20%] fill-white top-[20%] z-10 transition-all duration-500 ease-linear group-hover:w-14" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                            {service.path.map((path, i) => (
                                <path key={i} d= {path}></path>
                            ))}
                            </svg>
                            <div className="absolute z-0 left-1/2 top-1/2 w-0 h-0 rounded-full opacity-0 bg-customRed transition-all duration-500 ease-in group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-100" />
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-5 p-5 -mt-3">
                            <h2 className=" w-full text-center font-Oswald leading-relaxed font-bold capitalize text-2xl">{service.headerText2}</h2>
                            <p className="text-black/60 dark:text-white/50 text-center">{service.Info}</p>
                            <div className="w-10 h-10 rounded bg-pink-100 dark:bg-black/30 flex items-center justify-center relative overflow-hidden cursor-pointer">
                                <div className="absolute z-0 top-0 left-1/2 w-0 h-0 rounded bg-customRed transition-all duration-500 ease-linear group-hover:left-0 group-hover:h-full group-hover:w-full" />
                                <FontAwesomeIcon icon={faArrowRight} className="relative z-10 text-customRed transition-all duration-700 ease-in-out group-hover:text-white" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Services;