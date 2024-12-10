import { KeyOffersCard } from "../components/Commons/cards";
import { KeyOffers, Showcase } from "../layout";
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
            <KeyOffers/>
        </section>
    )
}

export default HomeScreen;