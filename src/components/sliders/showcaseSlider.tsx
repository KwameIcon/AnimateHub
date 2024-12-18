
// images
import Hero from '../../assets/images/people/hero-1.jpg'
import hero1 from '../../assets/images/people/download.jpeg'
import hero12 from '../../assets/images/people/hero-12.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



export const FirstSlide = () => {

    return(
        <div className='w-full h-full'>
            
            <div className='absolute z-0 top-0 left-0 w-full h-full'>
                <img src= {Hero} alt="" className='animate-fadeInSlow w-full h-full object-cover overflow-hidden' />
            </div>

            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-11/12 lg:w-6/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-4xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>empowering your digital future</p>
                    <div className='mt-12'>
                        <button type="submit" className="w-48 h-14 relative z-[2] flex items-center justify-between px-5 font-bold overflow-hidden bg-customRed rounded-full uppercase text-white outline-none border-none transition-all duration-500 linear
                            after:content-[''] after:absolute after:right-0 after:z-0 after:transition-all after:duration-500 after:ease-in-out after:h-full after:w-0 after:bottom-0 after:bg-red-900 hover:after:w-full hover:after:left-0">
                            <p className='relative z-20'>discover more</p>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SecondSlide = () => {

    return(
        <div className='w-full h-full'>
            <div className='absolute z-0 top-0 left-0 w-full h-full'>
                <img src= {hero1} alt="" className='animate-fadeInSlow w-full h-full object-cover overflow-hidden' />
            </div>
            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-full px-1 md:p-0 md:w-11/12 lg:w-6/12 xl:w-7/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-3xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>Shaping tomorrow, one innovation at a time</p>
                    <div className='mt-12'>
                        <button type="submit" className="w-48 h-14 relative z-[2] flex items-center justify-between px-5 font-bold overflow-hidden bg-customRed rounded-full uppercase text-white outline-none border-none transition-all duration-500 linear
                            after:content-[''] after:absolute after:right-0 after:z-0 after:transition-all after:duration-500 after:ease-in-out after:h-full after:w-0 after:bottom-0 after:bg-red-900 hover:after:w-full hover:after:left-0">
                            <p className='relative z-20'>discover more</p>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ThirdSlide = () => {

    return(
        <div className='w-full h-full'>
            <div className='absolute z-0 top-0 left-0 w-full h-full'>
                <img src= {hero12} alt="" className='animate-fadeInSlow w-full h-full object-cover overflow-hidden' />
            </div>
            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-11/12 lg:w-7/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-3xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>Unlocking limitless possibilities, today</p>
                    <div className='mt-12'>
                        <button type="submit" className="w-48 h-14 relative z-[2] flex items-center justify-between px-5 font-bold overflow-hidden bg-customRed rounded-full uppercase text-white outline-none border-none transition-all duration-500 linear
                            after:content-[''] after:absolute after:right-0 after:z-0 after:transition-all after:duration-500 after:ease-in-out after:h-full after:w-0 after:bottom-0 after:bg-red-900 hover:after:w-full hover:after:left-0">
                            <p className='relative z-20'>discover more</p>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}