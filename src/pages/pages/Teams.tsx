import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import { ActiveMembers } from "../../layout/homeOneLayouts";
import Showcase from "../../layout/showcase/AboutPage/Showcase";

interface TeamsProps{
    themeMode: string;
}

const Teams: React.FC<TeamsProps> = ({themeMode}) => {

    return(
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Team" />


            {/* Teams */}
            <ActiveMembers grid = {true} />

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default Teams;