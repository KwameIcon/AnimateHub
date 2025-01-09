import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRICEDATA } from "../../DATA/HomeOneData/PRICEDATA";


const HomeTwoPrice: React.FC = () => {

    return (
        <div className="w-11/12 lg:w-[98%] xl:w-[90%] m-auto my-10" data-aos="fade-up" data-aos-delay="0">
            <ul className="w-full flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-10 lg:gap-5 my-5">
                {/* basic */}
                {PRICEDATA.map((price) => (
                    <li className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[25rem] h-[34rem] px-10 pt-10 pb-5 font-varuna leading-relaxed shadow bg-white dark:bg-graphiteBlack flex flex-col items-center gap-5 relative group overflow-hidden" data-aos="fade-up" data-aos-delay="0">
                    <h2 className="font-extrabold capitalize font-sans text-3xl">{price.plan}</h2>
                    <p className="text-center text-black/60 dark:text-white/60 font-Roboto ">{price.Info}.</p>
                    <div className="w-5/6 h-20 bg-pink-100 dark:bg-ebony flex items-center justify-center my-5 overflow-hidden relative text-black dark:text-white font-Oswald rounded group-hover:text-white">
                        <div className="absolute z-0 w-full h-0 bottom-0 left-0 bg-customRed transition-all duration-300 ease-linear group-hover:h-full group-hover:top-0 rounded" />
                        <div className="flex items-end justify-center gap-1 relative z-10">
                            <h1 className="font-extrabold text-5xl ">${price.price}</h1>
                            <span className="">/month</span>
                        </div>
                    </div>
                    <ul className="w-full grid grid-cols-1 gap-2 text-black dark:text-white">
                        {price.benefits.map((item, i) => (
                            <li className="flex items-center justify-start gap-5 capitalize font-bold" key={i}>
                                <FontAwesomeIcon icon={faCheck} className="text-customRed font-extrabold" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full m-auto h-16 border-[2px] border-customRed rounded uppercase font-bold relative transition-all duration-300 ease-linear overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-customRed before:z-0 before:transition-all before:duration-300 before:ease-linear hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="relative z-10">select plan</span>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeTwoPrice;