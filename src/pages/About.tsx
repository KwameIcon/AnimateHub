import { BackToTop } from "../components/Commons/backToTop";
import Footer from "../layout/footer/Footer";
import { AboutUsHomeOne, ClientTestimonials, SuccessMetrics, UserAskQuestion } from "../layout/homeOneLayouts";
import { AboutUsHomeTwo, AutoScroll, OurWorks } from "../layout/HomeTwoLayouts";
import Showcase from "../layout/showcase/AboutPage/Showcase";

// interface
interface AboutProps {
    themeMode: string;
}


const About: React.FC<AboutProps> = ({ themeMode }) => {

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="about" suffix="us" />


            {/* about us */}
            <div className="w-full my-10">
                <AboutUsHomeOne />
            </div>

            {/* ask question */}
            <UserAskQuestion/>

            {/* client testimonials */}
            <ClientTestimonials/>


            {/* succcess matrics */}
            <SuccessMetrics/>

            {/* about us */}
            <AboutUsHomeTwo/>

            {/*  */}
            <AutoScroll/>

            {/* works */}
            <OurWorks/>

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default About;