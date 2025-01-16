import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import {KeyOffers } from "../../layout/homeOneLayouts";
import Showcase from "../../layout/showcase/AboutPage/Showcase";

// interface
interface AboutProps {
    themeMode: string;
}


const Service: React.FC<AboutProps> = ({ themeMode }) => {

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Service" />


            {/* key offers */}
            <div className="w-full my-10">
                <KeyOffers limit="all" />
            </div>

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default Service;