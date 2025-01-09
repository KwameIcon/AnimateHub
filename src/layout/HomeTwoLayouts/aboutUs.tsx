import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// images
import About5 from '../../assets/images/others/about-5.webp';


const AboutUsHomeTwo: React.FC = () => {

    return (
        <section className="w-11/12 h-auto lg:w-[97%] xl:w-11/12 m-auto my-10 lg:grid grid-cols-2 place-items-center" data-aos="fade-up" data-aos-delay="0">
            <div className="w-full grid grid-cols-1 gap-5 font-sans" data-aos="fade-right">
                <h1 className="w-full font-bold uppercase text-customRed" >about us</h1>
                <h2 className="w-full font-extrabold text-3xl lg:text-5xl capitalize -mt-2 font-Roboto">sculpting digital landscapes</h2>
                <p className="font-sans leading-loose text-black/65 dark:text-white/65 mt-5">Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat, sodales purus. Nunc quis an mauris et eros vulputate mattis Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus the volutpatquis purus convallis</p>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:place-items-stretch text-black dark:text-white my-5">
                    <ul className="grid grid-cols-1 gap-2">
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Mistakes to avoid</span>
                        </li>
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Your startup</span>
                        </li>
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Knew about fonts</span>
                        </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-2">
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Your Startup Business</span>
                        </li>
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Your startup</span>
                        </li>
                        <li className="flex items-center justify-start gap-5 capitalize font-bold">
                            <div className="w-8 h-8 rounded-full bg-customRed flex items-center justify-center">
                                <FontAwesomeIcon icon={faCheck} className="text-white font-extrabold" />
                            </div>
                            <span>Knew about fonts</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full md:w-11/12 m-auto h-[25rem] md:h-[30rem] my-10 relative flex items-center justify-center group" data-aos="fade-left">
                <div className="absolute z-[1] inset-0 bg-customRed rounded rotate-3 group-hover:transition-transform group-hover:duration-300 group-hover:ease-in-out group-hover:rotate-0 w-full h-full" />
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 z-[3] h-0 w-full bg-white/30 opacity-100 group-hover:transition-all group-hover:h-full group-hover:opacity-0 group-hover:duration-500 group-hover:ease-linear " />
                    <img src={About5} alt="" className="relative w-full h-full z-[2] rounded " />
                </div>
                <div className="absolute w-[160px] h-[160px] top-2/5 left-2/5 z-10 rounded grid place-items-center">
                    <div className="absolute z-10 inset-0 w-full h-full bg-white/30 top-0 left-0 rounded animate-scale-infinite" />
                    <div className="absolute z-20 inset-0 w-[85%] h-[85%] top-[7%] left-[7%] bg-white/30 rounded animate-scale-infinite-f " />
                    <div className="relative z-50 w-[100px] h-[100px] bg-customRed grid place-items-center rounded">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.82617 0.546509L15.0762 7.42151C15.623 7.77307 15.9746 8.39807 15.9746 9.02307C15.9746 9.68713 15.623 10.3121 15.0762 10.6246L3.82617 17.4996C3.24023 17.8512 2.49805 17.8903 1.91211 17.5387C1.32617 17.2262 0.974609 16.6012 0.974609 15.8981V2.14807C0.974609 1.48401 1.32617 0.859009 1.91211 0.546509C2.49805 0.194946 3.24023 0.194946 3.82617 0.546509Z" fill="white"></path></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsHomeTwo;