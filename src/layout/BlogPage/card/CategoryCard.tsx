import { Card } from "../../../components/Commons/cards";
import { BLOGCATEGORYDATA } from "../../../DATA/BLOGPAGEDATA/BLOGDATA";



interface CategoryCardProps {
    className?: string;
}


const CategoryCard: React.FC<CategoryCardProps> = ({ className }) => {

    return (
        <div className={`w-full xl:w-[27rem] grid grid-cols-1 place-items-center gap-7 h-auto bg-pink-50 dark:bg-graphiteBlack rounded-lg p-10  ${className}`}>

            <h1 className="text-2xl font-semibold font-Teko w-full text-left">Category</h1>

            <ul className="w-full grid grid-cols-1 place-items-start gap-5">
                {BLOGCATEGORYDATA.map((cat) => (
                    <li className="w-full h-10 border-b border-black/30 dark:border-white/30 flex items-center justify-start gap-5" key={cat.id}>
                        <span className="w-3 h-3 flex items-center justify-center border border-customRed">
                            <span className="w-[4px] h-[4px] bg-customRed rounded-full" />
                        </span>
                        <h2 className="capitalize text-black/70 dark:text-white/70 text-lg transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer">{cat.cat}</h2>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default CategoryCard;