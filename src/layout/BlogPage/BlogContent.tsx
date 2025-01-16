import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import mainImage1 from '../../assets/images/others/blog-lg-1.webp';
import { faCommentDots, faFolderOpen, faUser } from '@fortawesome/free-regular-svg-icons';
import { BLOGDATA } from '../../DATA/BLOGPAGEDATA/BLOGDATA';
import { faArrowRightLong, faPlus } from '@fortawesome/free-solid-svg-icons';


const BlogContent: React.FC = () => {

    return (
        <section className='w-full h-auto grid grid-cols-1 gap-10'>

            {BLOGDATA.map((blog) => (
                <div className='w-full h-auto grid grid-cols-1 gap-10' key={blog.id}>
                    <div className='w-full h-64 md:h-[38rem] lg:h-[30rem] xl:h-[38rem] overflow-hidden rounded relative z-0 group after:absolute after:z-[1] after:bottom-0 after:w-full after:h-0 after:bg-gray-200/20 after:opacity-100 after:transition-all after:duration-300 after:ease-linear hover:after:top-0 hover:after:h-full hover:after:opacity-10'>
                        <img src={blog.Image} alt="main image" className='w-full h-full scale-110 transition-transform duration-300 ease-linear group-hover:scale-100' />
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

                    <h1 className='w-fit cursor-pointer text-3xl lg:text-4xl font-semibold font-Teko transition-colors duration-300 ease-linear hover:text-customRed'>{blog.title}</h1>

                    <hr className='opacity-40' />

                    <p className='text-black/70 dark:text-white/70 leading-relaxed text-lg'>{blog.Info}</p>

                    <div className='w-40 h-16 border border-customRed rounded flex items-center justify-center gap-3 text-2xl font-Teko cursor-pointer group'>
                        <span className='uppercase transition-colors duration-300 ease-linear group-hover:text-customRed '>read more</span>
                        <FontAwesomeIcon icon={faPlus} className='text-customRed' />
                    </div>
                </div>
            ))}


            <div className='w-full items-center justify-center my-10'>
                <ul className='w-1/2 m-auto flex gap-5 items-center'>
                    <li className='w-16 h-16 rounded-full bg-pink-50 dark:bg-graphiteBlack text-3xl  font-Teko flex items-center justify-center cursor-pointer transition-colors duration-300 ease-linear hover:bg-customRed'>01</li>
                    <li className='w-16 h-16 rounded-full bg-pink-50 dark:bg-graphiteBlack text-3xl  font-Teko flex items-center justify-center cursor-pointer transition-colors duration-300 ease-linear hover:bg-customRed'>02</li>
                    <li className='w-16 h-16 rounded-full bg-pink-50 dark:bg-graphiteBlack text-3xl  font-Teko flex items-center justify-center cursor-pointer transition-colors duration-300 ease-linear hover:bg-customRed'>03</li>
                    <li className='w-16 h-16 rounded-full text-3xl  font-Teko flex items-center justify-center bg-customRed text-white cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} /></li>
                </ul>
            </div>

        </section>
    )
}

export default BlogContent;