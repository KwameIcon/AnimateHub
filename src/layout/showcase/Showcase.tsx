
// images
import Hero from '../../assets/images/people/hero-1.jpg'




const Showcase: React.FC = () => {

    return(
        <div className="w-full h-screen relative overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{backgroundImage: `url(${Hero})`}}>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white dark:from-ebony/75 via-white/85 dark:via-ebonyZ/75 to-blue-100/50 dark:to-ebony/75 '/>

        </div>
    )
}

export default Showcase;