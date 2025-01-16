import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs: React.FC = () => {

    return (
        <section className="my-10 w-full xl:w-[97%] m-auto h-auto py-5 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-start place-items-center gap-5 overflow-x-scroll scrollbar-none" data-aos="fade-up">
            {/* flex 1 */}
            <div className="w-full grid lg:col-span-2 grid-cols-1 place-items-center gap-10 px-3 lg:px-0 ">
                <h1 className="w-full text-3xl font-bold capitalize text-center md:text-left md:pl-[5%]">feel free to message</h1>
                <form action="" className="w-full lg:w-full grid grid-cols-1 place-items-center gap-7">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="text" name="name" className="w-full  px-5 bg-pink-50 dark:bg-graphiteBlack outline-none border-none h-full" placeholder="Your name" />
                        </div>
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="email" name="email" className="w-full  px-5 bg-pink-50 dark:bg-graphiteBlack outline-none border-none h-full" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="text" name="subject" className="w-full  px-5 bg-pink-50 dark:bg-graphiteBlack outline-none border-none h-full" placeholder="subject" />
                        </div>
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="number" name="phone" className="w-full  px-5 bg-pink-50 dark:bg-graphiteBlack outline-none border-none h-full" placeholder="telephone" />
                        </div>
                    </div>
                    <div className="w-full h-36 lg:h-48 rounded overflow-hidden grid grid-cols-1 place-items-center gap-5">
                        <textarea name="message" placeholder="Message" className="w-full h-full bg-pink-50 dark:bg-graphiteBlack outline-none border-none p-5" ></textarea>
                    </div>
                    <button type="submit" className="w-56 h-[3.8rem] rounded bg-customRed flex items-center justify-center uppercase font-bold font-Oswald relative overflow-hidden transition-all duration-300 ease-linear z-10 after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-customRedDeep after:transition-all after:duration-300 after:ease-linear hover:after:left-0 hover:after:w-full after:z-0" ><span className="relative z-10 text-white">send a message</span></button>
                </form>
            </div>

            {/* flex 2 */}
            <div className="w-[95%] m-auto grid grid-cols-1 place-items-center my-10">
                <h1 className="w-full text-3xl font-bold font-Oswald text-black/90 dark:text-white/90 my-5">Get in touch</h1>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">It is a long established fact that a reader will be distrol acted bioiiy desig the rea dablea contentIt is a long established fact that a reader will be</p>
                <ul className="w-full flex flex-col items-center justify-start gap-5 px-2 my-10">
                    <li className="w-full flex items-center justify-start gap-10">
                        <div className="w">
                            <div className="w-10 h-10 rounded-full bg-customRed flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                        </div>
                        <div className="7/12">
                            <h3 className="my-2 text-xl capitalize font-Oswald font-bold">Address</h3>
                            <p className="text-black/70 dark:text-white/70">Dhaka 102, utl 1216, road 45 house shantighar rahuta, 1213</p>
                        </div>
                    </li>
                    <li className="w-full flex items-center justify-start gap-10">
                        <div className="">
                            <div className="w-10 h-10 rounded-full bg-customRed flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </div>
                        <div className="7/12">
                            <h3 className="my-2 text-xl capitalize font-Oswald font-bold">Email Address</h3>
                            <p className="text-black/70 dark:text-white/70">iconghbank@gmail.com</p>
                        </div>
                    </li>
                    <li className="w-full flex items-center justify-start gap-10">
                        <div className="">
                            <div className="w-10 h-10 rounded-full bg-customRed flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                        </div>
                        <div className="7/12">
                            <h3 className="my-2 text-xl capitalize font-Oswald font-bold">Phone number</h3>
                            <p className="text-black/70 dark:text-white/70">0000-0000-00-00</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ContactUs;