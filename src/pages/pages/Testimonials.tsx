import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import { ClientTestimonials } from "../../layout/homeOneLayouts";
import Showcase from "../../layout/showcase/AboutPage/Showcase";


// interface
interface TestimonialsProps {
    themeMode: string;
}


const Testimonials: React.FC<TestimonialsProps> = ({ themeMode }) => {

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Projects" />


            {/* projects */}
            <ClientTestimonials/>

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default Testimonials;