import { Card } from "../../components/Commons/cards";
import P from "../../assets/images/others/blog-4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { BLOGDATA } from "../../DATA/HomeTwoData/BLOGDATA";

const Blog: React.FC = () => {

    return (
        <section className="w-full xl:w-[97%] m-auto h-auto py-2 px-2 md:px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none">


            {/* header */}
            <header className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-8 justify-between py-20" data-aos="fade-up" data-aos-delay="0">
                <div className="md:w-2/3 lg:w-1/2">
                    <h3 className="uppercase text-customRed font-extrabold [letter-spacing:0.2em] my-5 font-Oswald text-xl" data-aos="fade-up" data-aos-delay="0" >Our blogs</h3>
                    <h1 className="w-auto m-auto text-3xl md:text-5xl xl:text-6xl font-Oswald font-bold leading-loose " data-aos="fade-up" data-aos-delay="100" >Where Innovation Meets IT Excellence</h1>
                </div>
            </header>

            <div className="w-[95%] md:w-full m-auto flex flex-wrap items-center justify-between gap-5 xl:gap-4">
                {BLOGDATA.map((blog) => (
                    <Card className="!w-full md:!w-[22rem] lg:!w-[19rem] xl:!w-[26rem] xxxs:!h-[24rem] xxs:!h-[28rem] md:!h-[26rem] xl:!h-[32rem] !p-0 !rounded !overflow-hidden !shadow !group">
                        <div className="w-full h-[60%] relative overflow-hidden transition-all duration-300 ease-linear before:absolute before:z-[1] before:inset-0 before:w-full before:h-full group-hover:before:bg-gray-50/20 before:transition-all before:duration-300 before:ease-linear group-hover:before:w-0 group-hover:before:left-1/2 after:absolute after:z-[1] after:inset-0 after:w-full after:h-full group-hover:after:bg-gray-50/20 after:transition-all after:duration-500 after:ease-linear group-hover:after:h-0 group-hover:after:top-1/2">
                            <div className="absolute z-0 inset-0 w-full h-full">
                                <img src={blog.blogImage} alt="" className="w-full h-full scale-105 transition-transform duration-300 ease-linear group-hover:scale-100 overflow-hidden" />
                            </div>
                            <div className="absolute bottom-3 left-8 w-[85%] h-auto rounded bg-ebony z-10 flex flex-wrap gap-2 md:gap-0 md:flex-row items-start md:items-center justify-between py-2 px-5">
                                <div className="flex items-center justify-start gap-2">
                                    <span className="text-sm md:text-base text-customRed">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <span className="text-white/60 md:text-lg capitalize">
                                        {blog.by}
                                    </span>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <span className="text-customRed">
                                        <svg className="w-[0.8em] h-[0.8em]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg>
                                    </span>
                                    <span className="text-white/60 md:text-lg">{blog.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[40%] flex flex-col items-start justify-between xs:justify-center gap-7 p-5 md:p-10">
                            <div className="w-10/12 md:w-full font-Oswald font-bold text-lg md:text-xl xl:text-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-customRed">
                                <h2>{blog.title}</h2>
                            </div>
                            <div className="text-xs md:text-base uppercase font-bold transition-colors duration-300 ease-in-out hover:text-customRed flex items-center justify-center gap-5 cursor-pointer">
                                <span>read more</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Blog;