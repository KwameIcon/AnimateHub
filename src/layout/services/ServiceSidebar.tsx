import ServiceCategoryCard from "./Cards/ServiceCategoryCard";

import sidebarPhoneBox from '../../assets/images/others/sidebar-phone-number-box-bg.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SearchCard from "./Cards/SearchCard";

import person3 from '../../assets/images/others/person-3.webp';


interface ServiceSidebarProps {
    className?: string;
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ className }) => {

    return (
        <section className={` w-full lg:max-w-[27rem] min-h-40 grid grid-cols-1 gap-10 place-items-center ${className}`}>

            {/* service category card */}
            <ServiceCategoryCard />

            {/* call lines */}
            <div className=" w-full lg:max-w-[27rem] h-[25.8rem] flex items-center justify-center relative rounded overflow-hidden after:absolute after:z-[1] after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-red-400/100 after:to-red-400/10 before:absolute before:z-[2] before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/80 before:to-black/70 after:bg-blend-overlay">
                <div className="absolute inset-0 w-full h-full z-0">
                    <img src={sidebarPhoneBox} alt="" className="w-full h-full" />
                </div>
                <div className="relative z-10 grid grid-cols-1 place-items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-customRed flex items-center justify-center text-2xl my-3 text-white">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p className="text-xl font-bold text-white">Need help? contact our experts</p>
                    <p className="text-xl font-Oswald font-bold text-white">233 208-104-329</p>
                </div>
            </div>

            {/* search */}
            <SearchCard />


            {/* manager info */}
            <div className="grid grid-cols-1 place-items-start gap-10">
                <div className={`w-full lg:max-w-[27rem] h-64 lg:h-60 bg-pink-50 dark:bg-graphiteBlack grid grid-cols-1 place-items-center gap-5 rounded-lg py-10 px-3 lg:p-10 md:px-12 relative  ${className}`}>
                    <p className="leading-loose text-black/70 dark:text-white/70">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc per posu ere viverra .Aliquam os justo, posuere lobortis non, vive rra oreet augue mattis ferment ullam corper viverra laoreet vive rra</p>
                    <div className="absolute right-10 bottom-2">
                        <svg className="fill-gray-700 opacity-20 dark:fill-white" width="115" height="82" viewBox="0 0 115 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.6016 49.1471L99.6016 49.1471L99.6016 48.1471L98.6016 48.1471L98.6016 49.1471ZM33.237 49.1471L34.237 49.1471L34.237 48.1471L33.237 48.1471L33.237 49.1471ZM113.943 51.1898C113.943 67.7392 100.608 80.8294 84.3031 80.8294L84.3031 82.8294C101.702 82.8294 115.943 68.8546 115.943 51.1898L113.943 51.1898ZM84.3031 80.8294L82.2604 80.8294L82.2604 82.8294L84.3031 82.8294L84.3031 80.8294ZM82.2604 80.8294C78.2167 80.8294 75.0898 77.7025 75.0898 73.6589L73.0898 73.6589C73.0898 78.8071 77.1122 82.8294 82.2604 82.8294L82.2604 80.8294ZM75.0898 73.6589C75.0898 69.8501 78.2369 66.4883 82.2604 66.4883L82.2604 64.4883C77.092 64.4883 73.0898 68.7863 73.0898 73.6589L75.0898 73.6589ZM82.2604 66.4883L84.3031 66.4883L84.3031 64.4883L82.2604 64.4883L82.2604 66.4883ZM84.3031 66.4883C92.5037 66.4883 99.6016 59.6688 99.6016 51.1898L97.6016 51.1898C97.6016 58.5412 91.4223 64.4883 84.3031 64.4883L84.3031 66.4883ZM99.6016 51.1898L99.6016 49.1471L97.6016 49.1471L97.6016 51.1898L99.6016 51.1898ZM98.6016 48.1471L82.2604 48.1471L82.2604 50.1471L98.6016 50.1471L98.6016 48.1471ZM82.2604 48.1471C73.6208 48.1471 66.9193 41.4456 66.9193 32.806L64.9193 32.806C64.9193 42.5502 72.5162 50.1471 82.2604 50.1471L82.2604 48.1471ZM66.9193 32.806L66.9193 16.4648L64.9193 16.4648L64.9193 32.806L66.9193 32.806ZM66.9193 16.4648C66.9193 8.07034 73.631 1.1237 82.2604 1.1237L82.2604 -0.876302C72.5061 -0.876303 64.9193 6.98621 64.9193 16.4648L66.9193 16.4648ZM82.2604 1.1237L98.6016 1.1237L98.6016 -0.876299L82.2604 -0.876302L82.2604 1.1237ZM98.6016 1.1237C106.986 1.1237 113.943 8.08057 113.943 16.4649L115.943 16.4649C115.943 6.976 108.09 -0.876297 98.6016 -0.876299L98.6016 1.1237ZM113.943 16.4649L113.943 24.6354L115.943 24.6354L115.943 16.4649L113.943 16.4649ZM113.943 24.6354L113.943 32.806L115.943 32.806L115.943 24.6354L113.943 24.6354ZM113.943 32.806L113.943 51.1898L115.943 51.1898L115.943 32.806L113.943 32.806ZM48.5781 51.1898C48.5781 67.7392 35.2434 80.8294 18.9385 80.8294L18.9385 82.8294C36.3371 82.8294 50.5781 68.8546 50.5781 51.1898L48.5781 51.1898ZM18.9385 80.8294L16.8958 80.8294L16.8958 82.8294L18.9385 82.8294L18.9385 80.8294ZM16.8958 80.8294C12.8522 80.8294 9.72524 77.7025 9.72524 73.6589L7.72524 73.6589C7.72524 78.8071 11.7476 82.8294 16.8958 82.8294L16.8958 80.8294ZM9.72524 73.6589C9.72525 69.8501 12.8723 66.4883 16.8958 66.4883L16.8958 64.4883C11.7274 64.4883 7.72525 68.7863 7.72524 73.6589L9.72524 73.6589ZM16.8958 66.4883L18.9385 66.4883L18.9385 64.4883L16.8958 64.4883L16.8958 66.4883ZM18.9385 66.4883C27.1391 66.4883 34.237 59.6688 34.237 51.1898L32.237 51.1898C32.237 58.5412 26.0577 64.4883 18.9385 64.4883L18.9385 66.4883ZM34.237 51.1898L34.237 49.1471L32.237 49.1471L32.237 51.1898L34.237 51.1898ZM33.237 48.1471L16.8958 48.1471L16.8958 50.1471L33.237 50.1471L33.237 48.1471ZM16.8958 48.1471C8.25621 48.1471 1.55468 41.4456 1.55468 32.806L-0.445323 32.806C-0.445324 42.5502 7.15164 50.1471 16.8958 50.1471L16.8958 48.1471ZM1.55468 32.806L1.55468 16.4648L-0.44532 16.4648L-0.445323 32.806L1.55468 32.806ZM1.55468 16.4648C1.55468 8.07033 8.26638 1.12369 16.8958 1.12369L16.8958 -0.876313C7.14149 -0.876315 -0.445318 6.9862 -0.44532 16.4648L1.55468 16.4648ZM16.8958 1.12369L33.237 1.12369L33.237 -0.87631L16.8958 -0.876313L16.8958 1.12369ZM33.237 1.12369C41.6213 1.12369 48.5781 8.08056 48.5781 16.4648L50.5781 16.4648C50.5781 6.97599 42.7258 -0.876309 33.237 -0.87631L33.237 1.12369ZM48.5781 16.4648L48.5781 24.6354L50.5781 24.6354L50.5781 16.4648L48.5781 16.4648ZM48.5781 24.6354L48.5781 32.806L50.5781 32.806L50.5781 24.6354L48.5781 24.6354ZM48.5781 32.806L48.5781 51.1898L50.5781 51.1898L50.5781 32.806L48.5781 32.806Z"></path></svg>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img src= {person3} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="font-Teko font-bold text-2xl capitalize">Darliana shimp</h1>
                        <p className="text-xl text-black/80 dark:text-white/80">Manger</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServiceSidebar;