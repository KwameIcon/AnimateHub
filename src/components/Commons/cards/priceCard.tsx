import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../buttons/secondaryButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




const PriceCard: React.FC = () => {

    return(
        <div className="w-full h-72 m-auto border border-white border-opacity-30 overflow-hidden flex flex-wrap items-center justify-start">
            <div className="w-[24%] h-full flex flex-col justify-center space-y-9 p-5 px-12 border-r">
                <div className="">
                    <h1 className="uppercase text-2xl font-bold">basic plan</h1>
                </div>
                <div>
                    <p className="text-white/70"  >Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the Lorem Ipsum is simply</p>
                </div>
            </div>

            <div className="w-[76%] p-5 px-10 pl-44 flex justify-between items-center">
                {/* benefits */}
                <ul className="grid grid-cols-1 gap-y-3">
                    <li className="flex items-center space-x-4">
                        <span className="fill-customRed">
                            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                        </span>
                        <p className=" dark:text-white dark:text-opacity-70">Mistakes To Avoid</p>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span  className="fill-customRed">
                            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                        </span>
                        <p className=" dark:text-white dark:text-opacity-70">Your Startup</p>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span className="fill-customRed">
                            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                        </span>
                        <p className=" dark:text-white dark:text-opacity-70">knew about fonts</p>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span className="fill-customRed">
                            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                        </span>
                        <p className=" dark:text-white dark:text-opacity-70">winning matrix for your startup</p>
                    </li>
                </ul>

                {/* price */}
                <div className="text-xl font-bold font-Oswald">
                    <span className="text-5xl">$49</span> /month
                </div>

                {/* action button */}
               <div>
                 <SecondaryButton className="border border-customRed w-44">
                    <span>select plan</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </SecondaryButton>
               </div>
            </div>
        
        </div>
    )
}

export default PriceCard;