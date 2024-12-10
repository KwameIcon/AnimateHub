
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

            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-11/12 lg:w-6/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-4xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>empowering your digital future</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm xl:text-lg'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight xl:h-1 bg-white'></div>
                                <span className=' -mt-[0.5px] -ml-1 text-sm xl:text-lg text-white'>
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
            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-full px-1 md:p-0 md:w-11/12 lg:w-6/12 xl:w-7/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-3xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>Shaping tomorrow, one innovation at a time</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm xl:text-lg'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight xl:h-1 bg-white'></div>
                                <span className=' -mt-[0.5px] -ml-1 text-sm xl:text-lg text-white'>
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

export const ThirdSlide = () => {

    return(
        <div className='w-full h-full'>
            <div className='absolute z-0 top-0 left-0 w-full h-full'>
                <img src= {hero12} alt="" className='animate-fadeInSlow w-full h-full object-cover overflow-hidden' />
            </div>
            <div className=' relative z-20 top-32 md:top-1/4 left-auto w-11/12 lg:w-6/12 extraExtraLarge:w-5/12 h-3/4 m-auto flex items-center justify-center overflow-hidden '>
                <div className='flex flex-col items-center justify-center animate-slideInSlow'>
                    <p className=' text-3xl leading-relaxed md:text-5xl md:leading-relaxed xl:text-7xl text-center font-semibold uppercase lg:leading-relaxed xl:leading-relaxed font-Oswald lg:tracking-wider '>Unlocking limitless possibilities, today</p>
                    <div className='mt-12'>
                        <PrimaryButton className='relative'>
                            <span className='text-sm xl:text-lg'>discover more</span>
                            <div className='h-full flex items-center justify-center'>
                                <div  className='w-8 h-thinHeight xl:h-1 bg-white'></div>
                                <span className=' -mt-[0.5px] -ml-1 text-sm xl:text-lg text-white'>
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