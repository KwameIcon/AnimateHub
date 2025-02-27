import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../../../components/Commons/buttons/secondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Commons/cards";
import { KEYOFFERSDATA } from "../../../DATA/HomeOneData/KEYOFFERSDATA";


// animation
import Aos from "aos";
import 'aos/dist/aos.css'



interface KeyOffersProps{
    limit?:string;
}


interface dataType{
    id:number;
    header: string;
    path: string[];
    description: string;
}



const KeyOffers: React.FC<KeyOffersProps> = ({limit = "limited"}) => {

    const [data, setData] = useState<dataType[]>([]);


    useEffect(() => {
        Aos.init({duration:200})
    },[])

    useEffect(() => {
        if(limit === "limited"){
            setData(KEYOFFERSDATA.slice(0, 3));
        }else{
            setData(KEYOFFERSDATA);
        }
    },[limit])


    return(
        <section className="w-full xl:w-11/12 m-auto h-auto py-10 px-5 md:px-0 flex flex-wrap items-center justify-between md:justify-center md:gap-10 lg:gap-5 xl:justify-between extraExtraLarge:w-7/12 animate-appearFromBottomF">


            {/* card */}
            {data.map((offer) => (
                <Card dataAos="fade-up" dataAosDelay="0" key={offer.id}>

                    {/* border bottom */}
                    <div className="absolute bottom-0 w-full left-0 h-[2px]">
                        <p className="w-0 h-full m-auto bg-customRed group-hover:w-full transition-all duration-500 ease-in-out" />
                    </div>

                    <div className="flex items-center justify-start space-x-4 md:space-x-6 font-Oswald text-lg md:text-xl font-bold">
                        <span>
                            <svg className="w-11 h-11 md:w-16 md:h-16 group-hover:w-14 group-hover:h-14 transition-all duration-500 group-hover:fill-customRed" viewBox="0 0 65 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                {offer.path.map((path, i) => (
                                    <path d={path} key={i}></path>
                                ))}
                            </svg>
                        </span>
                        <h2 className="tracking-wider">{offer.header}</h2>
                    </div>

                    <div className="text-black dark:text-white/60">
                        <p className="">{offer.description}</p>
                    </div>
                    <div>
                        <SecondaryButton className="bg-transparent !rounded border border-graphiteBlack group-hover:border-customRed transition-all duration-500 cursor-pointer">
                            <span >read more</span>
                            <FontAwesomeIcon icon={faPlus} className="text-customRed"/>
                        </SecondaryButton>
                    </div>
                </Card>
            ))}
            
        </section>
    )
}

export default KeyOffers;