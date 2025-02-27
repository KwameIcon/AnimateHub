import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import BgWavyLines from '../../../assets/images/svg/shape-5.webp';
import { FirstSlide, SecondSlide, ThirdSlide } from '../../../components/sliders/showcaseSlider';
import Header from './header';



// component interface
interface ShowcaseProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const Showcase: React.FC<ShowcaseProps> = ({themeMode, setThemeMode}) => {
    // states
    const [currentSlide, setCurrentSlide] = useState(0);


    // array of sliders
    const Sliders = [<FirstSlide/>, <SecondSlide/>, <ThirdSlide/>]


    // handle sliders
    const handleSlider = (direction: string) => {
        if (direction === 'left') {
            setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
        } else {
            setCurrentSlide((prev) => (prev < Sliders.length - 1 ? prev + 1 : Sliders.length - 1));
        }
    };




    return(
        <div className="w-full min-h-screen relative overflow-hidden">

                {/* bg color over */}
            <div className='absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-white dark:from-ebony via-white/85 dark:via-ebonyZ/90 to-blue-100/50 dark:to-ebony/80'/>

            {/* header component */}
            <Header themeMode = {themeMode} />




            {/* curved lines and star */}
            <div className="hidden absolute z-10 top-0 left-0 w-full h-full lg:flex justify-between">
                <div className="h-screen relative">
                    <div className="w-[550px] h-[550px] rounded-full border border-black/50 dark:border-white/50 absolute -left-96 -top-28"></div>
                    <FontAwesomeIcon icon={faStar} className="text-5xl absolute text-customRed dark:text-white top-1/3 extraExtraLarge:top-60 left-32 extraExtraLarge:left-28 animate-spin"/>
                </div>
                <div className="h-screen relative extraExtraLarge:-mt-[28rem]">
                    <div className="w-[550px] h-[550px] rounded-full border border-black/50 dark:border-white/50 absolute -right-96 -bottom-28"></div>
                    <FontAwesomeIcon icon={faStar} className="text-5xl absolute text-customRed dark:text-white top-2/3 extraExtraLarge:top-full right-[137px] extraExtraLarge:right-16 animate-spin"/>
                </div>
            </div>



            {/* showcase sliders */}
            <div className='absolute top-0 left-0 w-full h-full'>
                {Sliders[currentSlide]}

                {/* slider controllers */}
                <div className='hidden absolute z-20 top-2/4 right-20 -mt-12 lg:flex flex-col space-y-3  extraExtraLarge:w-96 extraExtraLarge:right-0'>
                    <div className='w-16 h-16 rounded-full bg-ebony hover:bg-customRed flex items-center justify-center cursor-pointer' onClick={() => handleSlider('left')}>
                        <div className='h-full flex items-center justify-center'>
                            <span className=' -mt-customMargin -mr-2 text-xl text-white'>{'<'}</span>
                            <div  className='w-8 h-custHeight bg-white'></div>
                        </div>
                    </div>
                    <div className='w-16 h-16 rounded-full bg-ebony hover:bg-customRed flex items-center justify-center cursor-pointer' onClick={() => handleSlider('right')}>
                        <div className='h-full flex items-center justify-center'>
                            <div  className='w-8 h-custHeight bg-white'></div>
                            <span className=' -mt-customMargin -ml-2 text-xl text-white'>{'>'}</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* svg */}
            <div className='hidden absolute -bottom-2 left-0 z-10 w-screen lg:flex items-end'>
                <img src= {BgWavyLines} alt="" />
            </div>

        </div>
    )
}

export default Showcase