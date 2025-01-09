import { PortfolioCard } from "../../../components/Commons/cards";
import {PORTFOLIODATA} from '../../../DATA/HomeOneData/PORTFOLIODATA'


// images
import P1 from '../../../assets/images/portfolio/1.webp'
import P2 from '../../../assets/images/portfolio/2.webp'
import P3 from '../../../assets/images/portfolio/3.webp'
import P4 from '../../../assets/images/portfolio/4.webp'



const LatestPortfolio: React.FC = () => {

    return(
        <div className="w-[97%] m-auto h-auto flex flex-col items-center justify-center my-10 mt-20" >
            <h3 className="uppercase text-customRed font-bold tracking-widest my-5" data-aos="fade-up" data-aos-delay="0" >latest portfolio</h3>
            <h1 className="w-[90%] lg:w-1/2 m-auto text-3xl md:text-5xl font-Oswald font-bold text-center leading-[3.5rem]"   data-aos="fade-up" data-aos-delay="100" >Where Innovation Meets IT Excellence</h1>
            {/* cards */}
            <div className="w-full extraExtraLarge:w-3/5 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mt-5 md:mt-12">
                {PORTFOLIODATA.map((card) => (
                    <PortfolioCard Image= {card.image} className={`my-3 lg:my-0 ${card.down ? 'lg:mt-12' : ''} `} dataAos="fade-up" key={card.id}>
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