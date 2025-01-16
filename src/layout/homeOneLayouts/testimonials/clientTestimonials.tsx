
import { CarouselButton } from "../../../components/Commons/buttons";
import { Card } from "../../../components/Commons/cards";
import CarouselContainer from "../carouselContainer/CarouselContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALDATA } from "../../../DATA/HomeOneData/TESTIMONIALDATA";
import { handleRatings } from "../../../utils/renderRatings";


interface ClientTestimonialsProps{
    grid?: boolean;
}


const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({grid = false}) => {

    const [direction, setDirection] = useState('');
    const divRef = useRef<HTMLUListElement>(null);
    const [progress, setProgress] = useState(10);


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







    return (
        <section className={`w-[95%] ${grid ? 'extraExtraLarge:w-full' : 'extraExtraLarge:w-3/5'} m-auto flex flex-col items-start md:space-y-10 my-10 mt-20`}>

            {/* scrollable cards */}
            {
                !grid ?
                    (
                        <div className="w-full flex flex-col items-start overflow-hidden">
                            {/* header text */}
                            <div className="w-full pl-3 md:pl-0 md:px-2 flex flex-wrap items-end justify-between">
                                <div className="flex flex-col space-y-5">
                                    <h3 className="uppercase font-bold text-customRed font-Oswald tracking-widest">clients testimonials</h3>
                                    <h1 className="text-3xl md:text-4xl capitalize leading-[3rem] md:leading-[4rem] lg:leading-[4rem] md:w-4/5 font-bold font-Oswald dark:text-white">your IT partner for a dynamic future</h1>
                                </div>
                                {/* carousel button */}
                                <div className=" mt-10 md:mt-0 lg:mr-10">
                                    <CarouselButton setDirection={setDirection} />
                                </div>
                            </div>


                            {/* scrollable carousel */}
                            <CarouselContainer ref={divRef}>
                                {/* card */}
                                {TESTIMONIALDATA.map((card) => (
                                    <Card className='!w-full !h-[32rem] py-0 m-0 lg:!w-[40rem] md:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px] ' key={card.id} >
                                        <div className='w-full md:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                                            <img src={card.image} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                                            <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                                                <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    {card.path.map((path, i) => (
                                                        <path d={path} key={i}></path>
                                                    ))}
                                                </svg>
                                            </div>
                                        </div>

                                        <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                                            <div className='w-full flex flex-col space-y-2'>
                                                <h2 className='uppercase text-lg font-bold font-Oswald'>{card.name}</h2>
                                                <p className='dark:text-white/75 capitalize'>{card.Title}</p>
                                                <div className='text-customRed/70 text-sm tracking-widest'>
                                                    {handleRatings(card.ratings).map((icon, i) => (
                                                        <FontAwesomeIcon icon={icon} key={i} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className='dark:text-white/70 leading-relaxed'>{card.Info}</p>
                                        </div>
                                    </Card>
                                ))}

                            </CarouselContainer>


                            {/* progressive bar */}
                            <div className="relative w-5/6 lg:w-1/5 m-auto h-3 mt-16 bg-gray-700 rounded-full">
                                <div
                                    className="absolute h-3 bg-customRed transition-all duration-150 rounded-full"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                    )
                    :
                    (
                        <div className="w-full grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5">
                            {/* non-scrollable */}
                            {TESTIMONIALDATA.map((card) => (
                                <Card className='!w-full !h-[32rem] py-0 m-0 xl:!w-[40rem] md:!h-72 lg:!h-80 xl:!h-72 !flex md:!flex-row !justify-center !items-center !space-x-5 !shadow !bg-gray-100 dark:!bg-graphiteBlack transition-transform duration-300 hover:translate-y-[-10px] ' key={card.id} >
                                    <div className='w-full md:w-5/12 lg:w-4/12 xl:w-5/12 h-[40%] -mt-10 md:mt-0 mb-5 md:mb-0 md:h-full flex items-start justify-start md:pl-0 md:justify-center relative'>
                                        <img src={card.image} alt="" className='md:w-4/5 lg:h-5/6 lg:m-auto rounded' />
                                        <div className='absolute left-[23%] md:left-[40%] bottom-2 md:bottom-0 w-11 h-11 flex items-center justify-center rounded-full bg-customRed border border-red-200/50'>
                                            <svg className='w-6 h-6 fill-white' stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                {card.path.map((path, i) => (
                                                    <path d={path} key={i}></path>
                                                ))}
                                            </svg>
                                        </div>
                                    </div>

                                    <div className='w-full md:w-7/12 flex flex-col space-y-8'>
                                        <div className='w-full flex flex-col space-y-2'>
                                            <h2 className='uppercase text-lg font-bold font-Oswald'>{card.name}</h2>
                                            <p className='dark:text-white/75 capitalize'>{card.Title}</p>
                                            <div className='text-customRed/70 text-sm tracking-widest'>
                                                {handleRatings(card.ratings).map((icon, i) => (
                                                    <FontAwesomeIcon icon={icon} key={i} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className='dark:text-white/70 leading-relaxed'>{card.Info}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )
            }


        </section >
    )
}


export default ClientTestimonials;