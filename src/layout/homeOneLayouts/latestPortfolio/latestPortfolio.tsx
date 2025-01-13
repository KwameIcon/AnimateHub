import { useEffect, useState } from "react";
import { PortfolioCard } from "../../../components/Commons/cards";
import {PORTFOLIODATA} from '../../../DATA/HomeOneData/PORTFOLIODATA'

interface LatestPortfolioProps{
    level?:string;
    limit?:string;
}


interface dataType{
    id:number;
    image: string;
    headerText: string;
    Info: string;
    down: boolean;
    animDuration: number;
}


const LatestPortfolio: React.FC<LatestPortfolioProps> = ({level, limit = "limited"}) => {
    const [equalHeight, setEqualHeight] = useState(false);
    const [data, setData] = useState<dataType[]>([]);


    // checks if the cards should not be equally displayed
    useEffect(() => {
        if(level === 'equal'){
            setEqualHeight(true);
        }else{
            setEqualHeight(false);
        }
    },[level])

    // slice the data on limited prop
    useEffect(() => {
        if(limit === 'limited'){
            setData(PORTFOLIODATA.slice(0, 4));
        }else{
            setData(PORTFOLIODATA);
        }
    })



    return(
        <div className="w-[97%] m-auto h-auto flex flex-col items-center justify-center my-10 mt-20" >
            <h3 className="uppercase text-customRed font-bold tracking-widest my-5" data-aos="fade-up" data-aos-delay="0" >latest portfolio</h3>
            <h1 className="w-[90%] lg:w-1/2 m-auto text-3xl md:text-5xl font-Oswald font-bold text-center leading-[3.5rem]"   data-aos="fade-up" data-aos-delay="100" >Where Innovation Meets IT Excellence</h1>
            {/* cards */}
            <div className="w-full extraExtraLarge:w-3/5 flex flex-wrap justify-center lg:justify-between gap-5 mt-5 md:mt-12">
                {data.map((card) => (
                    <PortfolioCard Image= {card.image} className={`my-3 shrink-0 lg:my-0 ${!equalHeight && card.down ? 'lg:mt-12' : ''} `} dataAos={`${card.down ? 'fade-down' : 'fade-up'}`} data-aos-delay={card.animDuration} key={card.id}>
                        <h1 className="capitalize font-Oswald text-2xl text-white font-bold group-hover:animate-slideInSlow">{card.headerText}</h1>
                        <hr />
                        <p className="text-white/70 group-hover:animate-slideFromBottom">{card.Info}</p>
                    </PortfolioCard>
                ))}
            </div>
        </div>
    )
}

export default LatestPortfolio;