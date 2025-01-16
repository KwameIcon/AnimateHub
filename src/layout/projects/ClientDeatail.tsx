import { faCalendar, faFolder, faUser } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ClientDetailsProps{
    className?: string;
}


const ClientDetails: React.FC<ClientDetailsProps> = ({className}) => {

    return(
        <ul className={`w-full h-[31rem] border border-black/20 dark:border-white/20 rounded grid grid-cols-1 ${className}`}>

            <li className="w-full h-28 px-8 lg:px-5 xl:px-8 border-b border-black/20 dark:border-white/20 flex items-center justify-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center bg-customRed/20 text-customRed rounded-full text-xl">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="grid grid-cols-1 place-items-start gap-2">
                    <p>Client</p>
                    <h6 className="font-bold text-xl capitalize font-Teko">John Doe</h6>
                </div>
            </li>
            <li className="w-full h-28 px-8 lg:px-5 xl:px-8 border-b border-black/20 dark:border-white/20 flex items-center justify-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center bg-customRed/20 text-customRed rounded-full text-xl">
                    <FontAwesomeIcon icon={faDollar}/>
                </div>
                <div className="grid grid-cols-1 place-items-start gap-2">
                    <p>150000 USD</p>
                    <h6 className="font-bold text-xl capitalize font-Teko">consulation real estate</h6>
                </div>
            </li>
            <li className="w-full h-28 px-8 lg:px-5 xl:px-8 border-b border-black/20 dark:border-white/20 flex items-center justify-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center bg-customRed/20 text-customRed rounded-full text-xl">
                    <FontAwesomeIcon icon={faFolder}/>
                </div>
                <div className="grid grid-cols-1 place-items-start gap-2">
                    <p>Category</p>
                    <h6 className="font-bold text-xl capitalize font-Teko">Planing, Real Estate</h6>
                </div>
            </li>
            <li className="w-full h-28 px-8 lg:px-5 xl:px-8 flex items-center justify-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center bg-customRed/20 text-customRed rounded-full text-xl">
                    <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <div className="grid grid-cols-1 place-items-start gap-2">
                    <p>Date</p>
                    <h6 className="font-bold text-xl capitalize font-Teko">November 19, 2022</h6>
                </div>
            </li>

        </ul>
    )
}

export default ClientDetails;