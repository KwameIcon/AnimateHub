import { BLOGTAGSDATA } from "../../../DATA/BLOGPAGEDATA/BLOGDATA";



interface TagsCardProps {
    className?: string;
}


const TagsCard: React.FC<TagsCardProps> = ({ className }) => {

    return (
        <div className={`w-full xl:w-[27rem] grid grid-cols-1 place-items-center gap-7 h-auto bg-pink-50 dark:bg-graphiteBlack rounded-lg p-7 md:p-10  ${className}`}>

            <h1 className="text-2xl font-semibold font-Teko w-full text-left">Tags</h1>

            <ul className="w-full flex flex-wrap gap-5">
                {BLOGTAGSDATA.map((tag) => (
                    <li className="bg-customRed dark:bg-ebony rounded-lg flex items-center justify-center p-3 transition-colors duration-300 ease-linear hover:bg-customRed group" key={tag.id}>
                        <h2 className="capitalize text-white/70 text-lg transition-colors duration-300 ease-linear group-hover:text-white cursor-pointer">{tag.tag}</h2>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TagsCard;