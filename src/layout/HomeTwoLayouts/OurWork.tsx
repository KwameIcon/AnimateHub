import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/Commons/cards";
import { OURWORKSDATA } from "../../DATA/HomeTwoData/OURWORKSDATA";




const OurWorks: React.FC = () => {

    return (
        <section className="my-10 w-full xl:w-11/12 m-auto h-auto py-10 px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none" data-aos="fade-up">
            <div className="w-fit flex items-center justify-start space-x-10 md:space-x-5 xl:space-x-16">
                {/* card 1 */}
                {OURWORKSDATA.map((data) => (
                    <Card className="items-start !w-[90vw] m-auto !bg-gray-50 !shadow dark:!shadow-2xl dark:!bg-graphiteBlack md:!w-[340px] lg:!w-[350px] xl:!w-[400px] extraExtraLarge:!w-[425px]" dataAos="fade-up" data-aos='' dataAosDelay="0" key={data.id}>
                        <div className="w-full flex items-end justify-start gap-3 mb-10 md:mb-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-customRed relative">
                                <svg className="w-[60px] h-[61px] md:w-[65px] md:h-[66px] fill-white absolute top-1/4 -left-3" xmlns="http://www.w3.org/2000/svg">
                                {data.path.map((path, i) => (
                                    <path key={i} d= {path}></path>
                                ))}
                                </svg>
                            </div>
                            <h3 className="text-xl capitalize font-bold font-sans">{data.title}</h3>
                        </div>
                        <p className="leading-relaxed text-black/50 dark:text-white/50">{data.Info}</p>
                        <div className="w-full flex items-center justify-between">
                            <button className="uppercase text-customRed flex items-center justify-start gap-5 font-Oswald font-bold tracking-wider transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white">
                                <span>read more</span>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
                            <h1 className="text-7xl font-sans text-pink-200/50 dark:text-white/10 font-bold">
                                {data.cardNumber}
                            </h1>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default OurWorks;