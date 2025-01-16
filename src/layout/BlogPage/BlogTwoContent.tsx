import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFolderOpen, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


import mainImage1 from '../../assets/images/others/blog-details-1.webp';
import Blog1 from '../../assets/images/others/image-2.webp'
import Author1 from '../../assets/images/others/author-2.webp';


const BlogTwoContent: React.FC = () => {

    return (
        <section className='w-full h-auto grid grid-cols-1 gap-10'>
            <div className='w-full h-auto grid grid-cols-1 gap-10' >
                <div className='w-full h-64 md:h-[38rem] lg:h-[30rem] xl:h-[38rem] overflow-hidden rounded relative z-0 group after:absolute after:z-[1] after:bottom-0 after:w-full after:h-0 after:bg-gray-200/20 after:opacity-100 after:transition-all after:duration-300 after:ease-linear hover:after:top-0 hover:after:h-full hover:after:opacity-10'>
                    <img src={mainImage1} alt="main image" className='w-full h-full scale-110 transition-transform duration-300 ease-linear group-hover:scale-100' />
                </div>

                <ul className='w-full flex flex-wrap items-center gap-5'>
                    <li className='flex items-center gap-3'>
                        <div className='text-customRed'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <span className='capitalize text-black/70 dark:text-white/70 cursor-pointer transition-all duration-300 ease-linear hover:text-customRed'>By Admin</span>
                    </li>
                    <li className='flex items-center gap-3'>
                        <div className='text-customRed'>
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </div>
                        <span className='capitalize text-black/70 dark:text-white/70 cursor-pointer transition-all duration-300 ease-linear hover:text-customRed'>Category</span>
                    </li>
                    <li className='flex items-center gap-3'>
                        <div className='text-customRed'>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <span className='capitalize text-black/70 dark:text-white/70 cursor-pointer transition-all duration-300 ease-linear hover:text-customRed'>Comments (05)</span>
                    </li>
                </ul>

                <hr className='opacity-40' />

                <p className='text-black/70 dark:text-white/70 leading-relaxed text-lg'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis.Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis ullamcorper posuere viverra laoreet augue mattis.</p>
            </div>

            <div className='w-full rounded bg-pink-50 dark:bg-graphiteBlack grid grid-cols-1 place-items-center gap-10 p-10'>
                <div className='w-12 h-12 rounded-full bg-customRed/30 dark:bg-ebony flex items-center justify-center text-customRed'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                </div>


                <p className='w-full lg:w-9/12 text-black/50 dark:text-white/50 leading-relaxed font-Oswald text-2xl text-center'>With a commitment to driving technological evolution, our IT solutions and services are the cornerstone of your digital progression. We transcend boundaries, enabling businesses to not</p>
                <div className=' w-full grid grid-cols-1 place-items-center'>
                    <h2 className='font-semibold font-Teko capitalize text-3xl'>John doe</h2>
                    <p className='text-black/90 dark:text-white/90 text-xl'>Author</p>
                </div>
            </div>

            <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere.</p>

            <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non.</p>

            <div className='w-full h-[26rem] rounded overflow-hidden'>
                <img src={Blog1} alt="" className='w-full h-full' />
            </div>

            <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 28th February 2022 . Leave a comment viverra laoreet augue mattis start fermentum star.</p>

            <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non.</p>


            <div className='w-full h-20 bg-pink-50 dark:bg-graphiteBlack flex justify-between items-center px-10 rounded'>
                <div className='flex gap-6 items-center justify-center'>
                    <svg className='fill-customRed' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>

                    <ul className='flex items-center justify-center gap-3 text-lg text-black/70 dark:text-white/70'>
                        <li className='transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer'>Marketing,</li>
                        <li className='transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer'>branding,</li>
                        <li className='transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer'>corporate,</li>
                        <li className='transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer'>business</li>
                    </ul>
                </div>
                <ul className='flex gap-5 items-center justify-center'>
                    <li className='text-customRed transition-transform duration-300 ease-linear hover:-translate-y-2 cursor-pointer'><FontAwesomeIcon icon={faFacebook} /></li>
                    <li className='text-customRed transition-transform duration-300 ease-linear hover:-translate-y-2 cursor-pointer'><FontAwesomeIcon icon={faTwitter} /></li>
                    <li className='text-customRed transition-transform duration-300 ease-linear hover:-translate-y-2 cursor-pointer'><FontAwesomeIcon icon={faInstagram} /></li>
                    <li className='text-customRed transition-transform duration-300 ease-linear hover:-translate-y-2 cursor-pointer'><FontAwesomeIcon icon={faLinkedin} /></li>
                </ul>
            </div>


            <div className='w-full flex items-start justify-start gap-10'>
                <div className='w-52 h-24 rounded overflow-hidden'>
                    <img src={Author1} alt="" className='w-full h-full' />
                </div>
                <div className='grid grid-cols-1 gap-1'>
                    <div className='grid grid-cols-1'>
                        <h2 className='font-semibold font-Teko text-2xl capitalize'>Stanio lainto</h2>
                        <p className='text-black/90 dark:text-white/90 text-lg'>3 days ago</p>
                    </div>
                    <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrolra acted laoreet Aliquam reader will be distrol acted ished fact that a reader will be distrol dsff shem acted bioii the.ished fact that a reader will .</p>

                    <div className='text-customRed mt-5'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"></path></svg>
                    </div>
                </div>
            </div>


            {/* comments */}
            <div className='grid grid-cols-1 gap-5'>
                <h1 className="w-full text-3xl lg:text-5xl font-bold capitalize font-Teko">Leave a comment</h1>
                <p className='w-full text-black/50 dark:text-white/50 leading-relaxed text-lg'>You must have to log in for comment</p>
                <form action="" className="w-full lg:w-full grid grid-cols-1 place-items-center gap-7">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="text" name="name" className="w-full  px-5 border border-black/30 dark:border-white/30 outline-none border-none h-full" placeholder="Your name" />
                        </div>
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="email" name="email" className="w-full  px-5 border border-black/30 dark:border-white/30 outline-none border-none h-full" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="text" name="subject" className="w-full  px-5 border border-black/30 dark:border-white/30 outline-none border-none h-full" placeholder="subject" />
                        </div>
                        <div className="w-full h-14 rounded overflow-hidden  flex items-center justify-center">
                            <input type="number" name="phone" className="w-full  px-5 border border-black/30 dark:border-white/30 outline-none border-none h-full" placeholder="telephone" />
                        </div>
                    </div>
                    <div className="w-full h-36 lg:h-48 rounded overflow-hidden grid grid-cols-1 place-items-center gap-5">
                        <textarea name="message" placeholder="Message" className="w-full h-full bg-pink-50 dark:bg-graphiteBlack outline-none border-none p-5" ></textarea>
                    </div>
                    <button type="submit" className="w-56 h-[3.8rem] rounded bg-customRed flex items-center justify-center uppercase font-bold font-Oswald relative overflow-hidden transition-all duration-300 ease-linear z-10 after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-customRedDeep after:transition-all after:duration-300 after:ease-linear hover:after:left-0 hover:after:w-full after:z-0" ><span className="relative z-10 text-white">send a message</span></button>
                </form>
            </div>

        </section>
    )
}

export default BlogTwoContent;