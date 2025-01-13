import { Showcase } from "../layout/showcase/homeTwoShowcase";
import { useEffect } from "react";
import { AboutUsHomeTwo, ActiveMembers, Analytics, AutoScroll, HomeTwoPrice, OurProjects, OurWorks, Services, UserSendProject } from "../layout/HomeTwoLayouts";



// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ClientTestimonials } from "../layout/homeOneLayouts";





// component interface
interface HomeTwoScreenProps{
    themeMode: string;
}



const HomeTwoScreen: React.FC<HomeTwoScreenProps> = ({themeMode}) => {

    // aos animation initialization
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    })



    return(
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden">

            {/* showcase */}
            <Showcase themeMode = {themeMode}/>


            {/* our services */}
            <Services/>

            {/* Leave the handy work to us */}
            <UserSendProject/>


            {/* pricing */}
            <HomeTwoPrice/>


            {/* about us */}
            <AboutUsHomeTwo/>


            {/* work process */}
            <div className="my-10">
            <AutoScroll/>
            </div>

            {/* Cyber scape defend, smartTech integrations and data vista analytics */}
            <OurWorks/>

            {/* projects */}
            <OurProjects/>

            {/* active members */}
            <ActiveMembers/>

            {/* client testimonials */}
            <ClientTestimonials/>

            {/* site analytics */}
            <Analytics/>

        </section>
    )
}

export default HomeTwoScreen;