import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import { UserAskQuestion } from "../../layout/homeOneLayouts";
import { HomeTwoPrice } from "../../layout/HomeTwoLayouts";
import Showcase from "../../layout/showcase/AboutPage/Showcase";



interface PricingProps{
    themeMode: string;
}


const Pricing: React.FC<PricingProps> = ({themeMode}) => {
    

    return(
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Pricing" />


            {/* pricing */}
            <HomeTwoPrice />


            {/* question */}
            <UserAskQuestion/>

            {/* footer */}
            <Footer themeMode= {themeMode} />


        </section>
    )
}

export default Pricing;