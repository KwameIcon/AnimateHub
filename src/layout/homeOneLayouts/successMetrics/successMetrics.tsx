import CountUp from "react-countup";
import { Card } from "../../../components/Commons/cards";
import { useInView } from "react-intersection-observer";
import { SUCCESSMETRICDATA } from "../../../DATA/HomeOneData/SUCCESSMETRICDATA";



const SuccessMetrics: React.FC = () => {


    const {ref, inView} = useInView({
        threshold: 0,
    })


    return(
        <div className="w-[95%] extraExtraLarge:w-3/5 mx-auto my-10 mt-32 flex flex-wrap items-center justify-center md:gap-10 lg:gap-1  lg:justify-between" ref={ref}>
            {SUCCESSMETRICDATA.map((metric) => (
                <Card className="!w-[19rem] !h-40 relative !justify-center space-y-2 dark:bg-graphiteBlack bg-gray-100 shadow" dataAos="fade-up" dataAosDelay="0">
                <div className="absolute top-0 right-8 w-16 h-16 bg-customRed flex items-center justify-center">
                    <svg className="w-9 h-9 [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {metric.path.map((path, i) => (
                        <path key={i} d= {path} stroke="white" stroke-width="2"></path>
                    ))}
                    </svg>
                </div>
                <h3 className="pr-20 text-5xl font-bold leading-[1.25] text-transparent [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#1A1A1C] dark:[-webkit-text-stroke:1px_white]">
                    {inView && <CountUp start={0} end={metric.size} duration={metric.duration} suffix="+"/>}
                </h3>
                <p className="dark:text-white/80 capitalize text-lg">{metric.Info}</p>
            </Card>
            ))}
        </div>
    )
}

export default SuccessMetrics;