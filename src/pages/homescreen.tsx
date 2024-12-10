import { KeyOffersCard } from "../components/Commons/cards";
import { Showcase } from "../layout";
import { KEYOFFERSDATA } from "../services/KEYOFFERS";


// component interface
interface HomeScreenProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const HomeScreen: React.FC<HomeScreenProps> = ({themeMode, setThemeMode}) => {


    return(
        <section className="w-full h-auto overflow-hidden">
            <Showcase themeMode = {themeMode} setThemeMode = {setThemeMode}/>


            {/* key offers */}
            <div className="w-full xl:w-11/12 m-auto h-auto py-10 px-5 md:px-0 flex flex-wrap items-center justify-between md:justify-center md:gap-10 lg:gap-5 xl:gap-0 xl:justify-between extraExtraLarge:w-7/12">
                {KEYOFFERSDATA.map((data, i) => (
                    <KeyOffersCard key={i} svgPath={data.path} headerText= {data.header} description= {data.description}/>
                ))}
            </div>
        </section>
    )
}

export default HomeScreen;