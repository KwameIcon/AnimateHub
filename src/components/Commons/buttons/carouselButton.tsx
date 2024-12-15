import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



interface CarouselButtonProp{
    setDirection: React.Dispatch<React.SetStateAction<string>>;
}



const CarouselButton: React.FC<CarouselButtonProp> = ({setDirection}) => {

    // setDirection
    const getDirection = (direction:string) => {
        direction === 'left' ? setDirection('left') : setDirection('right');
    }

    return(
        <div className="w-auto flex items-center justify-center space-x-5">

            <div className="w-14 h-14 bg-red-100 dark:bg-customRed/20 flex items-center justify-center text-xl text-red-400 rounded-full hover:bg-red-500 hover:text-white cursor-pointer select-none" onClick={() => getDirection('left')}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>

            <div className="w-14 h-14 bg-red-100 dark:bg-customRed/20 flex items-center justify-center text-xl text-red-400 rounded-full hover:bg-red-500 hover:text-white cursor-pointer select-none" onClick={() => getDirection('right')}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>

        </div>
    )
}


export default CarouselButton;