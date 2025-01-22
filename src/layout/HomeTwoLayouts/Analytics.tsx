import CountUp from "react-countup";
import { ANALYTICSDATA } from "../../DATA/HomeTwoData/ANALYTICSDATA";
import { useInView } from "react-intersection-observer";



const Analytics: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    })

    return (
        <section className="my-10 w-full xl:w-[97%] m-auto h-auto py-10 px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none">
            <ul className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5" ref={ref} >
                {ANALYTICSDATA.map((item) => (
                    inView && (
                        <li key={item.id} className="w-full h-32 relative grid grid-cols-1 gap-5 place-items-end overflow-hidden group" data-aos="fade-up" data-aos-delay={item.animDuration} >
                            <div className="absolute left-3 lg:left-5 xl:left-3 top-[35%] h-12 w-12 rounded bg-customRed flex items-center justify-center">
                                <svg className="w-[30px] h-[30px] flex items-center
                             justify-center fill-white transition-transform duration-300 ease-linear group-hover:[transform:rotateY(180deg)]" xmlns="http://www.w3.org/2000/svg">
                                    {item.path.map((path, i) => (
                                        <path d={path} key={i}></path>
                                    ))}
                                </svg>
                            </div>
                            <div className="w-[88%] lg:w-[90%] h-full bg-pink-50 dark:bg-graphiteBlack p-5 rounded flex flex-col justify-center items-start space-y-3 px-10" >
                                <div className="w-full h-full flex flex-col items-start justify-center">
                                    <div className="text-3xl md:text-5xl font-extrabold font-Oswald ">
                                        <CountUp start={0} end={item.figure} suffix={item.suffix} />
                                    </div>
                                    <p className="text-black/50 dark:text-white/50 capitalize">{item.title}</p>
                                </div>
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </section>
    )
}

export default Analytics;