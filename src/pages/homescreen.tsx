import { Showcase } from "../layout";


// component interface
interface HomeScreenProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const HomeScreen: React.FC<HomeScreenProps> = ({themeMode, setThemeMode}) => {


    return(
        <div className="w-screen h-auto overflow-hidden">
            <Showcase themeMode = {themeMode} setThemeMode = {setThemeMode}/>
        </div>
    )
}

export default HomeScreen;