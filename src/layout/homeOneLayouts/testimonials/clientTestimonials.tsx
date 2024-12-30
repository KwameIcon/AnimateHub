// images
import person1 from '../../../assets/images/people/reviewers/person-1.webp'
import person2 from '../../../assets/images/people/reviewers/person-2.webp'
import person3 from '../../../assets/images/people/reviewers/person-11.webp'
import person4 from '../../../assets/images/people/reviewers/person-12.webp'
import person5 from '../../../assets/images/people/reviewers/person-13.webp'
import person6 from '../../../assets/images/people/reviewers/person-14.webp'



import { CarouselButton } from "../../../components/Commons/buttons";
import { Card } from "../../../components/Commons/cards";
import CarouselContainer from "../carouselContainer/CarouselContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useRef, useState } from 'react'





const ClientTestimonials: React.FC = () => {

    const [direction, setDirection] = useState('');
    const divRef = useRef<HTMLUListElement>(null);
    const [progress , setProgress] = useState(10);


    useEffect(() => {
    if (divRef.current && direction) {


        const isMobile = window.innerWidth <= 480;
        const scrollAmount = isMobile ? 350 : 700;

        divRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });

                
        const { scrollLeft, scrollWidth, clientWidth } = divRef.current;
        const scrollableWidth = scrollWidth - clientWidth;
        const currentProgress = (scrollLeft / scrollableWidth) * 100;
        setProgress(currentProgress);

        setTimeout(() => setDirection(''), 300);
    }
}, [direction]);





    return(
        <section className="w-[95%] extraExtraLarge:w-3/5 m-auto flex flex-col items-start md:space-y-10 my-10 mt-20">

            {/* header text */}
            <div className="w-full pl-3 md:pl-0 md:px-2 flex flex-wrap items-end justify-between">
                <div className="flex flex-col space-y-5">
                    <h3 className="uppercase font-bold text-customRed font-Oswald tracking-widest">clients testimonials</h3>
                    <h1 className="text-3xl md:text-4xl capitalize leading-[3rem] md:leading-[4rem] lg:leading-[4rem] md:w-4/5 font-bold font-Oswald dark:text-white">your IT partner for a dynamic future</h1>
                </div>
                {/* carousel button */}
                <div className=" mt-10 md:mt-0 lg:mr-10">
                    <CarouselButton setDirection={setDirection}/>
                </div>
            </div>


            {/* scrollable carousel */}
            <CarouselContainer ref={divRef}>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px] ' >
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person1} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>jada christian</h2>
                            <p className='dark:text-white/75 capitalize'>team leader</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={regularStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px]'>
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person2} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>robert fox</h2>
                            <p className='dark:text-white/75 capitalize'>software development manager</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px]'>
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person3} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>April cabera</h2>
                            <p className='dark:text-white/75 capitalize'>team leader</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px]'>
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person4} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>keven martin</h2>
                            <p className='dark:text-white/75 capitalize'>software development manager</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={regularStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px]'>
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person5} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>jada christian</h2>
                            <p className='dark:text-white/75 capitalize'>team leader</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={regularStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
                {/* card */}
                <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px]'>
                    <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                        <img src= {person6} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                        <div className='w-full flex flex-col space-y-2'>
                            <h2 className='uppercase text-lg font-bold font-Oswald'>kevin deen</h2>
                            <p className='dark:text-white/75 capitalize'>software development manager</p>
                            <div className='text-customRed/70 text-sm tracking-widest'>
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={regularStar} />
                            </div>
                        </div>
                        <p className='dark:text-white/70 leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </Card>
            </CarouselContainer>


            {/* progressive bar */}
            {/* Progress Bar */}
            <div className="relative w-5/6 lg:w-1/5 m-auto h-3 mt-16 bg-gray-700 rounded-full">
                <div
                    className="absolute h-3 bg-customRed transition-all duration-150 rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>


        </section>
    )
}


export default ClientTestimonials;