import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import { LatestPortfolio } from "../../layout/homeOneLayouts";
import Showcase from "../../layout/showcase/AboutPage/Showcase";



// interface
interface AboutProps {
    themeMode: string;
}


const Projects: React.FC<AboutProps> = ({ themeMode }) => {

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Projects" />


            {/* projects */}
            <LatestPortfolio level="equal" limit="all"/>

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default Projects;