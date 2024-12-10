import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../buttons/secondaryButton";


// component interface
interface KeyOffersCardProps{
    svgPath: string;
    headerText: string;
    description: string;
}




const KeyOffersCard: React.FC<KeyOffersCardProps> = ({svgPath, headerText, description}) => {

    return(
        <div className="w-full h-[300px] md:w-[340px] lg:w-[320px] xl:w-[380px] extraExtraLarge:w-[425px] p-5 my-5 md:m-0 shadow-2xl md:h-[330px] bg-white dark:bg-graphiteBlack flex flex-col justify-between md:py-8 md:px-10 shrink-0 transition transform duration-500 ease-in-out hover:-translate-y-2 group relative">

            {/* border bottom */}
            <div className="absolute bottom-0 w-full left-0 h-[2px]">
            <p className="w-0 h-full m-auto bg-customRed group-hover:w-full transition-all duration-500 ease-in-out" />
            </div>


            <div className="flex items-center justify-start space-x-4 md:space-x-6 font-Oswald text-lg md:text-xl font-bold">
                <span>
                    <svg className="w-11 h-11 md:w-16 md:h-16 group-hover:w-14 group-hover:h-14 transition-all duration-500 group-hover:fill-customRed" viewBox="0 0 65 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: svgPath }}/>
                </span>
                <h2 className="tracking-wider">{headerText}</h2>
            </div>
            <div className="text-black dark:text-white/60">
                <p className="">{description}</p>
            </div>
            <div>
                <SecondaryButton className="bg-transparent !rounded border border-graphiteBlack group-hover:border-customRed transition-all duration-500 cursor-pointer">
                    <span >read more</span>
                    <FontAwesomeIcon icon={faPlus} className="text-customRed"/>
                </SecondaryButton>
            </div>
        </div>
    )
}

export default KeyOffersCard;