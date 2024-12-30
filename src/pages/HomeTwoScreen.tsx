import { Showcase } from "../layout/showcase/homeTwoShowcase";



// component interface
interface HomeTwoScreenProps{
    themeMode: string;
}



const HomeTwoScreen: React.FC<HomeTwoScreenProps> = ({themeMode}) => {

    return(
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden">

            {/* showcase */}
            <Showcase themeMode = {themeMode}/>

        </section>
    )
}

export default HomeTwoScreen;