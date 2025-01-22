import { BackToTop } from "../components/Commons/backToTop";
import Footer from "../layout/footer/Footer";
import Showcase from "../layout/showcase/AboutPage/Showcase";
import Map from "../components/map/Map";
import ContactUs from "../layout/ContactUs/ContactUs";


interface ContactProps {
    themeMode: string;
}


const Contact: React.FC<ContactProps> = ({ themeMode }) => {


    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Contact" suffix="us" />

            <ContactUs/>



            {/* map */}
            <div className="w-11/12 m-auto h-[32rem]">
                <Map/>
            </div>

            {/* footer */}
            <Footer themeMode={themeMode} />


        </section>
    )
}

export default Contact;