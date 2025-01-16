import { SERVICECATEGORIESDATA } from "../../../DATA/Services/SERVICECATEGORIES";



interface ServiceCategoryCardProps{
    className?:string;
}


const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({className}) => {


    return (
        <div className= {`w-full xl:w-[27rem] h-auto bg-pink-50 dark:bg-graphiteBlack rounded-lg p-10  ${className}`}>
            <h2 className="w-full text-left text-xl font-bold font-Oswald tracking-wider uppercase">our services</h2>
            <ul className="w-full my-10 flex flex-col items-start justify-center gap-5">
                {SERVICECATEGORIESDATA.map((cat) => (
                    <li key={cat.id} className="w-full flex items-center justify-between text-lg text-black/60 dark:text-white/60 transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer">
                        <span>{cat.category}</span>
                        <svg width="22" height="7" viewBox="0 0 22 7" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="4.37114e-08" y1="3.5" x2="20" y2="3.5" stroke="currentColor"></line><path d="M19.5 1.68487L21.2965 3.5L19.5 5.31513L19.5 1.68487Z" fill="white" stroke="currentColor"></path></svg>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCategoryCard;