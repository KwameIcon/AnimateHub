import CategoryCard from "./card/CategoryCard";
import SearchBlogCard from "./card/SearchBlogCard";
import TagsCard from "./card/TagsCard";
import UserProfileCard from "./card/UserProfileCard";


interface SideBarProps{
    className?:string;
}

const SideBar: React.FC<SideBarProps> = ({className}) => {

    return(
        <section className={` w-full lg:max-w-[27rem] min-h-40 grid grid-cols-1 gap-10 place-items-center ${className}`}>

            {/* user profile */}
            <UserProfileCard/>

            {/* search card */}
            <SearchBlogCard/>

            {/* Category card */}
            <CategoryCard/>

            {/* Blog tags */}
            <TagsCard/>

        </section>
    )
}

export default SideBar;