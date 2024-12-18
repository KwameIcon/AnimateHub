import { faEnvelope, faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"





const ContactUs:React.FC = () => {

    return(
        <div className="absolute z-10 top-12 w-11/12 md:w-5/12 bg-white dark:bg-graphiteBlack rounded m-auto left-5 md:left-[50%] py-10 px-2 lg:px-10 overflow-hidden flex flex-col items-center justify-center space-y-10 shadow">

            {/* header text */}
            <div className="w-full pl-3 md:pl-0 md:px-2 mb-7 md:mb-0 flex flex-wrap items-end justify-between">
                <div className="flex flex-col space-y-5">
                    <h3 className="uppercase font-bold text-customRed font-Oswald tracking-[0.3rem]">Talk to us</h3>
                    <h1 className="text-3xl md:text-4xl capitalize leading-[2.5rem] md:leading-[4rem] lg:leading-[4rem] md:w-4/5 font-bold font-Oswald text-black dark:text-white">Unleash the Power of Technology</h1>
                </div>
            </div>


            <form action="" className="w-full m-auto mx-2 flex flex-wrap items-center justify-center gap-5 ">
                <div className="w-full flex flex-wrap lg:flex-row items-center justify-center lg:justify-between gap-5">
                    <div className="w-full lg:w-5/12 h-14 border border-black dark:border-white dark:border-opacity-10 border-opacity-10 rounded relative px-5">
                        <input type="text" name="name" placeholder="Your Name" className="bg-transparent outline-none border-none w-full h-full" />
                        <FontAwesomeIcon className="absolute top-1/3 right-5 text-customRed" icon={faUser}/>
                    </div>
                    <div className="w-full lg:w-5/12 h-14 border border-black dark:border-white dark:border-opacity-10 border-opacity-10 rounded relative px-5">
                        <input type="text" name="email" placeholder="Your Name" className="bg-transparent outline-none border-none w-full h-full" />
                        <FontAwesomeIcon className="absolute top-1/3 right-5 text-customRed" icon={faPaperPlane}/>
                    </div>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center gap-5">
                    <div className="w-full h-14 border border-black dark:border-white dark:border-opacity-10 border-opacity-10 rounded relative px-5">
                        <input type="text" name="subject" placeholder="Subject" className="bg-transparent outline-none border-none w-full h-full" />
                        <svg className="absolute top-1/3 right-5 fill-customRed" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 391.78C-15.41 303.59-8 167.42 80.64 87.64s224.8-73 304.21 15.24 72 224.36-16.64 304.14c-18.74 16.87 64 43.09 42 52.26-82.06 34.21-253.91 35-346.23-67.5zm213.31-211.6l38.5-40.86c-9.61-8.89-32-26.83-76.17-27.6-52.33-.91-95.86 28.3-96.77 80-.2 11.33.29 36.72 29.42 54.83 34.46 21.42 86.52 21.51 86 52.26-.37 21.28-26.42 25.81-38.59 25.6-3-.05-30.23-.46-47.61-24.62l-40 42.61c28.16 27 59 32.62 83.49 33.05 10.23.18 96.42.33 97.84-81 .28-15.81-2.07-39.72-28.86-56.59-34.36-21.64-85-19.45-84.43-49.75.41-23.25 31-25.37 37.53-25.26.43 0 26.62.26 39.62 17.37z"></path></svg>
                    </div>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center gap-5">
                    <div className="w-full h-20 lg:h-40 border border-black dark:border-white dark:border-opacity-10 border-opacity-10 rounded relative px-5">
                        <textarea name="message" placeholder="write message..." className="bg-transparent outline-none border-none w-full h-full"></textarea>
                        <FontAwesomeIcon className="absolute top-[10%] right-5 text-customRed" icon={faEnvelope}/>
                    </div>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center gap-5">
                    <button type="submit" className="w-full h-14 relative z-[2] flex items-center justify-center bg-customRed rounded uppercase text-white outline-none border-none transition-all duration-500 linear
                        after:content-[''] after:absolute after:right-0 after:z-0 after:transition-all after:duration-500 after:ease-in-out after:h-full after:w-0 after:bottom-0 after:bg-red-950 hover:after:w-full hover:after:left-0">
                        <p className='relative z-20'>send now</p>
                    </button>

                </div>
            </form>


        </div>
    )
}

export default ContactUs