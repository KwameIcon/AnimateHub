import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface SearchBlogCardProps{
    className?:string;
}


const SearchBlogCard: React.FC<SearchBlogCardProps> = ({className}) => {

    return(
        <div className= {` w-full lg:max-w-[27rem] h-auto bg-pink-50 dark:bg-graphiteBlack grid grid-cols-1 place-items-start gap-5 rounded-lg py-10 px-5  lg:p-10 lg:px-12  ${className}`}>

            <h2 className="text-xl font-bold font-Teko capitalize tracking-wide">Search Blog</h2>


            <form action="" className="w-full flex items-center justify-center">
                <input type="search" name="search" id="" placeholder="Search" className="w-10/12 h-16 bg-white dark:bg-ebony rounded-tl rounded-bl px-5" />
                <button type="submit" className="w-2/12 text-sm md:text-base h-16 bg-customRed text-white flex items-center justify-center uppercase font-bold rounded-tr rounded-br relative after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:transition-all after:duration-300 after:ease-linear after:bg-customRedDeep hover:after:left-0 hover:after:w-full">
                <FontAwesomeIcon icon={faSearch} className="relative z-10" />
                </button>
            </form>

        </div>
    )
}

export default SearchBlogCard;