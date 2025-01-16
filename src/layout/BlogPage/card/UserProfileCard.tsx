
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Author1 from '../../../assets/images/others/author-1.webp';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


interface UserProfileCardProps {
    className?: string;
}


const UserProfileCard: React.FC<UserProfileCardProps> = ({ className }) => {

    return (
        <div className={`w-full xl:w-[27rem] grid grid-cols-1 place-items-center gap-7 h-auto bg-pink-50 dark:bg-graphiteBlack rounded-lg p-10  ${className}`}>
            <div className='grid grid-cols-1 place-items-center gap-5' >
                <div className='w-36 h-36 rounded-full overflow-hidden grid grid-cols-1 place-items-center gap-5' >
                    <img src={Author1} alt="author" className='w-full h-full' />
                </div>

                <h1 className='font-semibold font-Teko capitalize text-4xl'>Naturials paul</h1>
            </div>

            <p className='text-lg text-black/70 dark:text-white/70 leading-loose text-center'>Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non</p>

            <div className='w-full flex items-center justify-center gap-4'>

                <div className='w-8 h-8 flex items-center justify-center group cursor-pointer'>
                    <FontAwesomeIcon icon={faFacebook} className='transition-transform duration-300 ease-linear group-hover:-translate-y-3 group-hover:text-customRed'/>
                </div>

                <div className='w-[1px] h-4 bg-black/20 dark:bg-white/20'/>

                <div className='w-8 h-8 flex items-center justify-center group cursor-pointer'>
                    <FontAwesomeIcon icon={faTwitter} className='transition-transform duration-300 ease-linear group-hover:-translate-y-3 group-hover:text-customRed'/>
                </div>

                <div className='w-[1px] h-4 bg-black/20 dark:bg-white/20'/>

                <div className='w-8 h-8 flex items-center justify-center group cursor-pointer'>
                    <FontAwesomeIcon icon={faInstagram} className='transition-transform duration-300 ease-linear group-hover:-translate-y-3 group-hover:text-customRed'/>
                </div>
            </div>

        </div>
    )
}

export default UserProfileCard;