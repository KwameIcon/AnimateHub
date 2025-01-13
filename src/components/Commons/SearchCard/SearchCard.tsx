import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useEffect, useRef } from "react";



// component interface
interface SearchCardProps {
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}




const SearchCard: React.FC<SearchCardProps> = ({ setIsSearchOpen }) => {
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const searchCardRef = useRef<HTMLDivElement>(null);

    const closeSearchCard = (e: Event) => {
        const mainContainer = mainContainerRef.current;
        const searchCard = searchCardRef.current;
        if ((mainContainer && searchCard) && !searchCard.contains(e.target as Node) && mainContainer.contains(e.target as Node)) {
            setIsSearchOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeSearchCard);
        return () => {
            document.removeEventListener('click', closeSearchCard);
        }
    });


    return (
        <div className="w-screen h-screen fixed inset-0 bg-transparent z-20 animate-slideIn" ref={mainContainerRef}>

            <div className="w-full h-[30%] bg-pink-100 dark:bg-graphiteBlack shadow-2xl shadow-customRed/30 flex flex-col items-center justify-between p-4 relative" ref={searchCardRef}>
                <div className="absolute top-5 right-16 w-14 h-14 flex items-center justify-center transition-colors duration-300 ease-in-out bg-red-600 rounded-full cursor-pointer" onClick={() => setIsSearchOpen(false)}>
                    <FontAwesomeIcon icon={faClose} className="text-4xl text-white" />
                </div>
                <form className="w-4/5 m-auto h-full flex flex-col items-start justify-center">
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <h1 className="text-5xl capitalize font-bold">Search</h1>
                        <p className="text-black/60 dark:text-white/60">Type something and hit enter to search:</p>
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <input type="search" placeholder="Search for products" className="w-3/5 h-14 border border-gray-300 dark:border-gray-700 rounded-tl rounded-bl pl-4 outline-none text-black" />
                        <button className="w-14 h-14 bg-customRed transition-colors duration-300 ease-in-out hover:bg-red-600 text-white rounded-tr rounded-br"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SearchCard;