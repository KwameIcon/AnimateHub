import { AboutUsHomeOne, ActiveMembers, Blog, ClientTestimonials, KeyOffers, LatestPortfolio, PriceActionLayout, SuccessMetrics, UserAskQuestion } from "../layout/homeOneLayouts";
import { BackToTop } from "../components/Commons/backToTop";
import { useEffect } from "react";
import { ContactUs } from "../components/contactUs";
import { Showcase } from "../layout/showcase/homeOneShowcase";
import Footer from "../layout/footer/Footer";

// animate
import Aos from "aos";
import 'aos/dist/aos.css'

// images

import SectionHalfBg from '../assets/images/others/section-half-bg-1.webp'



// component interface
interface HomeOneScreenProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const HomeOneScreen: React.FC<HomeOneScreenProps> = ({themeMode, setThemeMode}) => {






    useEffect(() => {
        Aos.init({duration: 200});
    },[])



    return(
        <section className="w-full h-auto overflow-hidden">

            {/* showcase section */}
            <Showcase themeMode = {themeMode} setThemeMode = {setThemeMode}/>


            {/* back to top button */}
            <BackToTop/>


            {/* key offers section*/}
            <KeyOffers/>

            {/* about us section */}
            <AboutUsHomeOne/>

            {/* ask question section*/}
            <UserAskQuestion/>


            {/* lates portfolio section*/}
            <LatestPortfolio/>

            {/* Success Metrics section*/}
            <SuccessMetrics/>

            {/* clients testimoniasl section*/}
            <ClientTestimonials/>



            {/* pricing section*/}
            <PriceActionLayout/>


            {/* active memberssection */}
            <ActiveMembers/>


            {/*talk to us section*/}
            <div className="w-screen extraExtraLarge:w-3/5 m-auto my-20 h-[48rem] md:h-[50rem] xl:h-[48rem] relative">
                <div className="w-full md:w-7/12 h-full overflow-hidden relative z-0 md:border md:border-customRed md:border-opacity-10 lg:border-none">
                    <img src= {SectionHalfBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                    <ContactUs/>
                </div>
            </div>


            {/* blog */}
            <Blog/>


            {/* footer */}
            <div className="w-full extraExtraLarge:w-3/5 m-auto">
                <Footer themeMode= {themeMode}/>
            </div>
        </section>
    )
}

export default HomeOneScreen;