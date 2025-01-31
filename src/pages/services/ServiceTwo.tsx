import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import { ServiceContent, ServiceSidebar } from "../../layout/services";
import Showcase from "../../layout/showcase/AboutPage/Showcase";

// interface
interface ServiceTwoProps {
    themeMode: string;
}


const ServiceTwo: React.FC<ServiceTwoProps> = ({ themeMode }) => {

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Service" suffix="Details" />

            {/* content */}
            <section className="w-[95%] m-auto my-16 grid grid-cols-1 place-items-center gap-10 xl:gap-5 lg:flex lg:items-start lg:justify-center">
                <div className="w-full lg:w-4/12">
                    <ServiceSidebar />
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12">
                    <ServiceContent />
                </div>
            </section>

            {/* footer */}
            <Footer themeMode={themeMode} />


        </section>
    )
}

export default ServiceTwo;