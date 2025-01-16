import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CarouselButton } from '../../../components/Commons/buttons'
import { useEffect, useRef, useState } from 'react'
import CarouselContainer from '../carouselContainer/CarouselContainer'
import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { ACTIVEMEMBERS } from '../../../DATA/HomeOneData/ACTIVEMEMBERS'



// AOS animation
import Aos from 'aos'
import 'aos/dist/aos.css'



interface ActiveMembersProps {
    grid?: boolean;
}



const ActiveMembers: React.FC<ActiveMembersProps> = ({ grid = false }) => {
    const [direction, setDirection] = useState('');
    const divRef = useRef<HTMLUListElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
    const [dotsCount, setDotsCount] = useState(0); // Number of dots
    const scrollAmount = window.innerWidth <= 480 ? 390 : 700; // Scroll amount

    useEffect(() => {

        if (divRef.current) {
            const scrollableWidth = divRef.current.scrollWidth - divRef.current.clientWidth;
            const calculatedDots = Math.ceil(scrollableWidth / scrollAmount);
            setDotsCount(calculatedDots + 1);
        }
    }, [scrollAmount
    ]);

    useEffect(() => {
        if (divRef.current && direction) {
            divRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });

            setTimeout(() => setDirection(''), 300);
        }
    }, [direction, scrollAmount]);

    const scrollToCard = (index: number) => {
        if (divRef.current) {
            divRef.current.scrollTo({
                left: index * scrollAmount,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };



    return (
        <section className={`w-[95%] ${grid ? 'extraExtraLarge:w-full' : 'extraExtraLarge:w-3/5'} m-auto flex flex-col items-start md:space-y-10 my-10 py-10 md:p-5 bg-pink-100 dark:bg-graphiteBlack overflow-hidden`}>

            {
                !grid ?
                    (
                        <div className="w-full flex flex-col items-start overflow-hidden">
                            {/* header text */}
                            <div className="w-full pl-3 md:pl-0 md:px-2 flex flex-wrap items-end justify-between">
                                <div className="flex flex-col space-y-5">
                                    <h3 className="uppercase font-bold text-customRed font-Oswald tracking-widest">our active members</h3>
                                    <h1 className="text-3xl md:text-4xl capitalize leading-[3rem] md:leading-[4rem] lg:leading-[4rem] md:w-4/5 font-bold font-Oswald text-black dark:text-white">Transforming Challenges into Seamless Solutions</h1>
                                </div>
                                {/* carousel button */}
                                <div className=" mt-10 md:mt-0 lg:mr-10">
                                    <CarouselButton setDirection={setDirection} />
                                </div>
                            </div>


                            {/* scrollable carousel */}
                            <CarouselContainer ref={divRef}>


                                {/* card */}
                                {ACTIVEMEMBERS.map((member) => (
                                    <div className='w-screen shrink-0 md:w-[26rem] h-[25rem] md:h-[33rem] mt-10 md:mt-20 flex flex-col items-start overflow-hidden relative' >
                                        <div className='w-[90%] h-[75%] md:h-[79%] relative z-10 overflow-hidden'>

                                            <div className='absolute z-0 left-0 top-0 w-full h-full overflow-hidden group'>
                                                <div className='absolute z-10 inset-0 bg-gray-50 bg-opacity-15 -translate-y-full transition-all duration-300 ease-linear group-hover:translate-y-full' />
                                                <img src={member.Pic} alt="" className='scale-105 object-cover transition-transform duration-500 group-hover:scale-100' />
                                            </div>

                                            <div className='absolute z-0 bottom-2 w-14 h-14 rounded bg-customRed left-[10%] flex items-center justify-center group'>
                                                <div className='absolute bottom-[3.5rem] w-14 p-5 left-0 flex flex-col space-y-6 text-white md:hidden group-hover:flex '>
                                                    <FontAwesomeIcon icon={faFacebook} className=' cursor-pointer group-hover:animate-slideInSlow' />
                                                    <FontAwesomeIcon icon={faTwitter} className=' cursor-pointer group-hover:animate-fadeIn' />
                                                    <FontAwesomeIcon icon={faLinkedin} className=' cursor-pointer group-hover:animate-slideIn' />
                                                    <FontAwesomeIcon icon={faPinterest} className=' cursor-pointer group-hover:animate-fadeIn duration-75' />
                                                </div>
                                                <div className='text-2xl text-white cursor-pointer'>
                                                    <FontAwesomeIcon icon={faShareNodes} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute bottom-0 left-0 z-0 w-full h-36 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-40 flex flex-col justify-end items-center space-y-2 pb-7'>
                                            <h2 className='uppercase text-lg font-bold font-Oswald transition-colors duration-300 hover:text-customRed cursor-pointer'>{member.name}</h2>
                                            <p className='dark:text-white/70 capitalize'>{member.role}</p>
                                        </div>
                                    </div>

                                ))}
                            </CarouselContainer>


                            {/* Dots for scrolling */}
                            <div className="w-full flex items-center justify-center space-x-5">
                                {Array.from({ length: dotsCount }).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-5 h-5 rounded-full  ${currentIndex === index ? 'border border-customRed' : ''
                                            } cursor-pointer flex items-center justify-center`}
                                        onClick={() => scrollToCard(index)}
                                    >
                                        <p
                                            className={`w-3 h-3 rounded-full bg-customRed cursor-pointer`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
                            {/* card */}
                            {ACTIVEMEMBERS.map((member) => (
                                    <div className='w-screen shrink-0 md:w-[20rem] lg:w-[26rem] h-[25rem] md:h-[27rem] lg:h-[33rem] mt-10 md:mt-20 flex flex-col items-start overflow-hidden relative' >
                                        <div className='w-[92%] h-[75%] md:h-[79%] relative z-10 overflow-hidden'>

                                            <div className='absolute z-0 left-0 top-0 w-full h-full overflow-hidden group'>
                                                <div className='absolute z-10 inset-0 bg-gray-50 bg-opacity-15 -translate-y-full transition-all duration-300 ease-linear group-hover:translate-y-full' />
                                                <img src={member.Pic} alt="" className='scale-105 object-cover transition-transform duration-500 group-hover:scale-100' />
                                            </div>

                                            <div className='absolute z-0 bottom-2 w-14 h-14 rounded bg-customRed left-[10%] flex items-center justify-center group'>
                                                <div className='absolute bottom-[3.5rem] w-14 p-5 left-0 flex flex-col space-y-6 text-white md:hidden group-hover:flex '>
                                                    <FontAwesomeIcon icon={faFacebook} className=' cursor-pointer group-hover:animate-slideInSlow' />
                                                    <FontAwesomeIcon icon={faTwitter} className=' cursor-pointer group-hover:animate-fadeIn' />
                                                    <FontAwesomeIcon icon={faLinkedin} className=' cursor-pointer group-hover:animate-slideIn' />
                                                    <FontAwesomeIcon icon={faPinterest} className=' cursor-pointer group-hover:animate-fadeIn duration-75' />
                                                </div>
                                                <div className='text-2xl text-white cursor-pointer'>
                                                    <FontAwesomeIcon icon={faShareNodes} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute bottom-0 left-0 z-0 w-full h-36 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-40 flex flex-col justify-end items-center space-y-2 pb-7'>
                                            <h2 className='uppercase text-lg font-bold font-Oswald transition-colors duration-300 hover:text-customRed cursor-pointer'>{member.name}</h2>
                                            <p className='dark:text-white/70 capitalize'>{member.role}</p>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    )
            }

        </section>
    )
}

export default ActiveMembers