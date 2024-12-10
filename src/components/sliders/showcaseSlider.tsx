
// images
import Hero from '../../assets/images/people/hero-1.jpg'
import hero1 from '../../assets/images/people/download.jpeg'
import hero12 from '../../assets/images/people/hero-12.jpeg'
import { PrimaryButton } from '../Commons/buttons'



export const FirstSlide = () => {

    return(
        <div className='w-full h-full'>
            
            <div className='absolute z-0 top-0 left-0 w-full h-full'>
                <img src= {Hero} alt="" className='animate-fadeInSlow w-full h-full object-cover overflow-hidden' />
            </div>

            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-11/12 lg:w-7/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-4xl leading-relaxed md:text-6xl md:leading-relaxed lg:text-7xl text-center font-semibold uppercase lg:leading-relaxed font-Oswald'>empowering your digital future</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm md:text-lg'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight md:h-1 bg-white'></div>
                                <span className=' -mt-halfMargin -ml-2 text-sm md:text-lg text-white'>
                                    {'>'}
                                </span>
                            </div>
                        </PrimaryButton>
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
            <div className=' relative z-20 top-1/4 left-auto w-7/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className='text-7xl text-center uppercase font-semibold leading-relaxed font-Oswald'>Shaping tomorrow, one innovation at a time</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight bg-white'></div>
                                <span className=' -mt-halfMargin -ml-2 text-sm text-white'>{'>'}</span>
                            </div>
                        </PrimaryButton>
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
            <div className=' relative z-20 top-1/4 left-auto w-8/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className='text-7xl text-center font-semibold uppercase leading-relaxed font-Oswald'>Unlocking limitless possibilities, today</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight bg-white'></div>
                                <span className=' -mt-halfMargin -ml-2 text-sm text-white'>{'>'}</span>
                            </div>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}