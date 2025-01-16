

interface SearchCardProps{
    className?:string;
}


const SearchCard: React.FC<SearchCardProps> = ({className}) => {

    return(
        <div className= {` w-full lg:max-w-[27rem] h-auto bg-pink-50 dark:bg-graphiteBlack grid grid-cols-1 place-items-start gap-5 rounded-lg py-10 px-5  lg:p-10 lg:px-12  ${className}`}>

            <h2 className="text-xl font-bold font-Oswald capitalize tracking-wide">Search service</h2>

            <div className="w-16 h-[2px] bg-customRed"/>

            <form action="" className="w-full flex items-center justify-center gap-3 lg:gap-5">
                <input type="search" name="search" id="" placeholder="Search" className="w-9/12 lg:w-8/12 h-[2.5rem] bg-transparent border border-black/30 dark:border-white/30 rounded px-5" />
                <button type="submit" className="w-3/12 lg:w-4/12 text-sm md:text-base h-[2.5rem] bg-customRed text-white flex items-center justify-center uppercase font-bold rounded relative after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:transition-all after:duration-300 after:ease-linear after:bg-customRedDeep hover:after:left-0 hover:after:w-full"><span className="relative z-10">search</span></button>
            </form>

        </div>
    )
}

export default SearchCard;