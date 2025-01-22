
// images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import blog1 from '../../../assets/images/others/blog-1.webp'
import blog2 from '../../../assets/images/others/blog-2.webp'
import blog3 from '../../../assets/images/others/blog-3.webp'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Blog: React.FC = () => {

    return (
        <section className="w-11/12 extraExtraLarge:w-3/5 m-auto overflow-hidden">
            {/* header text */}
            <div className="w-full pl-3 md:pl-0 md:px-2 flex flex-wrap items-center justify-center" data-aos="fade-up">
                <div className="flex flex-col items-center justify-center space-y-5">
                    <h3 className="text-lg uppercase font-bold text-customRed font-Oswald tracking-widest">our blogs</h3>
                    <h1 className="text-3xl md:text-5xl capitalize leading-[3rem] md:leading-[4rem] lg:leading-[4rem] md:w-3/5 font-bold font-Oswald dark:text-white text-center">Transforming Challenges into Seamless Solutions</h1>
                </div>
            </div>

            <div className="w-full my-10 overflow-hidden flex flex-wrap items-center justify-between md:justify-center lg:justify-between gap-2 md:gap-10 lg:gap-0 ">

                {/* card */}
                <div className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[28rem] md:h-[30rem]font-varuna leading-relaxed relative group" data-aos="fade-up" data-aos-delay="0">
                    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
                        {/* bg overlay */}
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-60" />
                        {/* bg image */}
                        <img src={blog1} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform scale-100 translate-x-0 transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:-translate-x-full" />
                        <img src={blog1} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    </div>

                    <div className="relative z-10 w-full h-full flex flex-col justify-between p-10">
                        <div className="w-full">
                            <div className="w-20 h-20 bg-ebony text-white transition-colors duration-300 ease-in-out group-hover:bg-customRed flex flex-col items-center justify-center text-2xl font-bold rounded">
                                <p>30</p>
                                <p>May</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-start justify-center space-y-5">
                            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-1 text-white text-opacity-70 xl:w-10/12">
                                <p className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>By Adim</span>
                                </p>
                                <p className="flex gap-2 items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path></svg>
                                    <span>Comments (05)</span>
                                </p>
                            </div>

                            <p className="text-lg text-white font-semibold">We implement state-of-the-art encryption</p>

                            <button className="flex gap-2 items-center uppercase font-bold">
                                <span className="transition-colors duration-300 ease-in-out hover:text-customRed text-white">read more</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-customRed" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[28rem] md:h-[30rem]font-varuna leading-relaxed relative group" data-aos="fade-up" data-aos-delay="200">
                    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
                        {/* bg overlay */}
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-60" />
                        {/* bg image */}
                        <img src={blog2} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform scale-100 translate-x-0 transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:-translate-x-full" />
                        <img src={blog2} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    </div>

                    <div className="relative z-10 w-full h-full flex flex-col justify-between p-10">
                        <div className="w-full">
                            <div className="w-20 h-20 bg-ebony text-white transition-colors duration-300 ease-in-out group-hover:bg-customRed flex flex-col items-center justify-center text-2xl font-bold rounded">
                                <p>30</p>
                                <p>May</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-start justify-center space-y-5">
                            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-1 text-white text-opacity-70 xl:w-10/12">
                                <p className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>By Adim</span>
                                </p>
                                <p className="flex gap-2 items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path></svg>
                                    <span>Comments (05)</span>
                                </p>
                            </div>

                            <p className="text-lg text-white font-semibold">We implement state-of-the-art encryption</p>

                            <button className="flex gap-2 items-center uppercase font-bold">
                                <span className="transition-colors duration-300 ease-in-out hover:text-customRed text-white">read more</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-customRed" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className="w-full md:w-[20rem] lg:w-[19rem] xl:w-[24rem] h-[28rem] md:h-[30rem]font-varuna leading-relaxed relative group" data-aos="fade-up" data-aos-delay="400">
                    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
                        {/* bg overlay */}
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-60" />
                        {/* bg image */}
                        <img src={blog3} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform scale-100 translate-x-0 transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:-translate-x-full" />
                        <img src={blog3} alt="" className="absolute top-0 left-0 w-full h-full object-cover transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    </div>

                    <div className="relative z-10 w-full h-full flex flex-col justify-between p-10">
                        <div className="w-full">
                            <div className="w-20 h-20 bg-ebony text-white transition-colors duration-300 ease-in-out group-hover:bg-customRed flex flex-col items-center justify-center text-2xl font-bold rounded">
                                <p>30</p>
                                <p>May</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-start justify-center space-y-5">
                            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-1 text-white text-opacity-70 xl:w-10/12">
                                <p className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>By Adim</span>
                                </p>
                                <p className="flex gap-2 items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path></svg>
                                    <span>Comments (05)</span>
                                </p>
                            </div>

                            <p className="text-lg text-white font-semibold">We implement state-of-the-art encryption</p>

                            <button className="flex gap-2 items-center uppercase font-bold">
                                <span className="transition-colors duration-300 ease-in-out hover:text-customRed text-white">read more</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-customRed" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;