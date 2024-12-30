import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useEffect, useRef } from "react";



// component interface
interface SearchCardProps{
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}




const SearchCard: React.FC<SearchCardProps> = ({setIsSearchOpen}) => {
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const searchCardRef = useRef<HTMLDivElement>(null);

    const closeSearchCard = (e: Event) => {
        const mainContainer = mainContainerRef.current;
        const searchCard = searchCardRef.current;
        if((mainContainer && searchCard) && !searchCard.contains(e.target as Node) && mainContainer.contains(e.target as Node)){
            setIsSearchOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeSearchCard);
        return () => {
            document.removeEventListener('click', closeSearchCard);
        }
    });


    return(
        <div className="w-screen h-screen fixed inset-0 bg-transparent z-20 animate-slideIn" ref={mainContainerRef}>

            <div className="w-full h-2/4 bg-pink-100 dark:bg-graphiteBlack flex flex-col items-center justify-between p-4" ref={searchCardRef}>
               <div className="w-full h-1/2 flex items-start justify-end">
                <div className="w-14 h-14 flex items-center justify-center bg-customRed transition-colors duration-300 ease-in-out hover:bg-red-600 rounded cursor-pointer" onClick={() => setIsSearchOpen(false)}>
                    <FontAwesomeIcon icon={faClose} className="text-4xl text-white" />
                </div>
               </div>
               <div className="w-full h-1/2 flex items-center justify-center">
                <input type="search" placeholder="Search for products" className="w-2/5 h-14 border border-gray-300 dark:border-gray-700 rounded pl-4 outline-none text-black" />
                <button className="w-14 h-14 bg-customRed transition-colors duration-300 ease-in-out hover:bg-red-600 text-white"><FontAwesomeIcon icon={faSearch}/></button>
               </div>
            </div>

        </div>
    )
}

export default SearchCard;