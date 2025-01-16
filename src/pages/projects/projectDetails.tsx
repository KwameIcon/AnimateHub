import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import Showcase from "../../layout/showcase/AboutPage/Showcase";
import { ClientDetails } from "../../layout/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";


// images
import Image1 from '../../assets/images/others/main-image-1.webp';
import Image2 from '../../assets/images/others/image-2.webp';
import Image3 from '../../assets/images/others/image-3 (1).webp';


interface ProjectDetailsProps {
    themeMode: string;
}


const ProjectDetails: React.FC<ProjectDetailsProps> = ({ themeMode }) => {

    return (
        <main className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">

            {/* back to top button */}
            <BackToTop />

            {/* showcase */}
            <Showcase themeMode={themeMode} page="Projects" suffix="Details" />


            {/* projects */}
            <section className="w-[95%] m-auto grid grid-cols-1 gap-10 place-items-center my-20">

                <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:gap-10">
                    <div className=" h-64 md:h-[28rem] lg:h-[31rem] grid grid-cols-1 lg:gap-10">
                        <div className="w-full h-[7rem] md:h-[13rem] lg:h-[14rem] rounded overflow-hidden">
                            <img src={Image1} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-full h-[7rem] md:h-[13rem] lg:h-[14rem] rounded overflow-hidden">
                            <img src={Image2} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className=" h-64 md:h-[28rem] lg:h-[31rem] rounded overflow-hidden">
                        <img src={Image3} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full col-span-2 lg:col-span-1">
                        <ClientDetails />
                    </div>
                </div>

                <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue Aliquam eros justo, posuere lobortis non laoreet augue mattis fermentum laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo,</p>

                <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue s fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue loborti vive</p>


                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10 my-5">
                    <li className='grid grid-cols-1 gap-3'>
                        <div className='flex items-center gap-5'>
                            <div className='w-5 h-5 rounded-full bg-customRed text-white flex items-center justify-center text-sm'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h2 className='font-semibold font-Teko capitalize text-2xl'>best implementation</h2>
                        </div>
                        <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted bioiiy desig.</p>
                    </li>
                    <li className='grid grid-cols-1 gap-3'>
                        <div className='flex items-center gap-5'>
                            <div className='w-5 h-5 rounded-full bg-customRed text-white flex items-center justify-center text-sm'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h2 className='font-semibold font-Teko capitalize text-2xl'>best implementation</h2>
                        </div>
                        <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted bioiiy desig.</p>
                    </li>
                    <li className='grid grid-cols-1 gap-3'>
                        <div className='flex items-center gap-5'>
                            <div className='w-5 h-5 rounded-full bg-customRed text-white flex items-center justify-center text-sm'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h2 className='font-semibold font-Teko capitalize text-2xl'>best implementation</h2>
                        </div>
                        <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted bioiiy desig.</p>
                    </li>
                </ul>

                <p className='px-2 md:p-0 text-black/70 dark:text-white/70 leading-loose md:text-lg'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam. justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo posuere loborti ,</p>

                <div className="w-full h-[2px] bg-black/80 dark:bg-white/80"/>

                <div className="w-full flex items-start md:justify-between">
                    <div className="w-1/2 md:w-72 grid grid-cols-1 gap-2 cursor-pointer">
                        <div className="flex items-center justify-start gap-5 transition-colors duration-300 ease-linear hover:text-customRed">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-xl"/>
                            <span className="font-Teko font-semibold uppercase md:text-xl tracking-wide">previous</span>
                        </div>
                        <p className="md:text-lg text-black/70 dark:text-white/70">Aliquam eros justo, posuere loborti viverra laoreet matti</p>
                    </div>
                    <div className="w-1/2 md:w-72 grid grid-cols-1 gap-2 cursor-pointer">
                        <div className="flex items-center justify-end gap-5 transition-colors duration-300 ease-linear hover:text-customRed">
                            <span className="font-Teko font-semibold uppercase md:text-xl tracking-wide">next</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xl"/>
                        </div>
                        <p className="md:text-lg text-black/70 dark:text-white/70 text-right">Aliquam eros justo, posuere loborti viverra laoreet matti</p>
                    </div>
                </div>

            </section>

            {/* footer */}
            <Footer themeMode={themeMode} />


        </main>
    )
}

export default ProjectDetails;