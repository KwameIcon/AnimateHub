
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


//images
import About1 from '../../../assets/images/others/pattern-1.webp';
import About2 from '../../../assets/images/others/lampp.webp';
import About3 from '../../../assets/images/others/about-2.webp';
import About4 from '../../../assets/images/others/about-3.webp';
import About5 from '../../../assets/images/others/about-4.webp';


const AboutUsHomeOne: React.FC = () => {

    return(
        <section className="w-full extraExtraLarge:w-7/12 m-auto h-auto p-2 lg:px-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-3" >

            {/* images */}
            <div className="order-2 lg:order-1 w-full lg:w-[100%] xl:w-[85%] extraExtraLarge:w-[79%] grid grid-cols-2 gap-1 lg:gap-x-8 p-5 relative" >

                <div className="absolute z-20 top-[36%] md:top-[42%] lg:top-[42%] left-[35%] md:left-[44%] lg:left-[42%] xl:left-[44%] w-24 h-24 bg-white rounded-full flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000" >
                    <div className="w-[80%] h-[80%] bg-customRed rounded-full flex items-center justify-center" >
                        <FontAwesomeIcon icon={faPlus} className="text-4xl font-bold text-white" />
                    </div>
                </div>

                <div className=" w-[98%] lg:w-56 xl:w-72 h-32 md:h-72 overflow-hidden relative" >
                    <div className="w-full h-full" data-aos="fade-up" data-aos-duration="1000" >
                        <div>
                            <img src= {About1} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full" >
                            <div className="absolute bottom-2 right-2 w-10/12 lg:w-3/5 h-3/4 lg:h-2/4 bg-customRed rounded-tl-[40%]" />
                            <img src= {About2} alt="" className="absolute bottom-0 right-0 w-10/12 lg:w-3/5 h-3/4 lg:h-2/4 bg-customRed rounded-tl-[40%]" />
                        </div>
                    </div>
                </div>
                <div className="w-[98%] lg:w-56 xl:w-72 h-32 md:h-72 overflow-hidden" data-aos="zoom-in-right" >
                    <img src= {About3} alt="" className="w-full h-full rounded-tl-[30%] rounded-br-[30%]" />
                </div>
                <div className="w-[98%] lg:w-56 xl:w-72 h-32 md:h-72 overflow-hidden" >
                    <div className="w-full h-full" data-aos="fade-left" >
                        <img src= {About4} alt="" className="w-full h-full rounded-tl-[20%] rounded-br-[20%]" />
                    </div>
                </div>
                <div className="w-[98%] lg:w-56 xl:w-72 h-32 md:h-72 overflow-hidden" >
                    <div className="w-full h-full" data-aos="fade-right" >
                        <img src= {About5} alt="" className="w-full h-full rounded-br-[20%]" />
                    </div>
                </div>
            </div>

            {/* about */}
            <div className="w-full p-2 lg:p-0 order-1 lg:order-2 shrink-0 lg:pr-4 flex flex-col space-y-10" data-aos="zoom-in-left" data-aos-duration="1000" >
                <h2 className="font-bold text-xl uppercase text-customRed font-Oswald tracking-widest" >About us</h2>
                <h1 className="w-full lg:w-4/5 text-5xl font-semibold font-Oswald leading-relaxed" >Empowering Your Digital Tomorrow</h1>
                <p className="leading-relaxed dark:text-white/75">It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dum text of the printing and typesetting industry loren ipsum
                </p>
                <div className="w-full flex flex-wrap space-y-5 lg:space-y-0 items-center lg: justify-between pr-2 " >
                    <div className="w-full md:w-[320px] lg:w-56 xl:w-[300px] h-20 flex items-center justify-center space-x-5 rounded-lg cursor-pointer border border-customRed group">
                        <div className="w-9 border-box flex items-center justify-center overflow-hidden" >
                            <svg className="min-w-8 max-w-[30px] group-hover:min-w-[30px] transition-all duration-300" viewBox="0 0 30 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M26.25 39.5938H3.75C2.75544 39.5938 1.80161 39.1987 1.09835 38.4954C0.395088 37.7921 0 36.8383 0 35.8438V5.84375C0 4.84919 0.395088 3.89536 1.09835 3.1921C1.80161 2.48884 2.75544 2.09375 3.75 2.09375H26.25C27.2446 2.09375 28.1984 2.48884 28.9017 3.1921C29.6049 3.89536 30 4.84919 30 5.84375V35.8438C30 36.8383 29.6049 37.7921 28.9017 38.4954C28.1984 39.1987 27.2446 39.5938 26.25 39.5938ZM3.75 4.59375C3.41848 4.59375 3.10054 4.72545 2.86612 4.95987C2.6317 5.19429 2.5 5.51223 2.5 5.84375V35.8438C2.5 36.1753 2.6317 36.4932 2.86612 36.7276C3.10054 36.9621 3.41848 37.0938 3.75 37.0938H26.25C26.5815 37.0938 26.8995 36.9621 27.1339 36.7276C27.3683 36.4932 27.5 36.1753 27.5 35.8438V5.84375C27.5 5.51223 27.3683 5.19429 27.1339 4.95987C26.8995 4.72545 26.5815 4.59375 26.25 4.59375H3.75Z"></path><path d="M11.25 34.5938H8.75C8.41848 34.5938 8.10054 34.4621 7.86612 34.2276C7.6317 33.9932 7.5 33.6753 7.5 33.3438C7.5 33.0122 7.6317 32.6943 7.86612 32.4599C8.10054 32.2254 8.41848 32.0938 8.75 32.0938H11.25C11.5815 32.0938 11.8995 32.2254 12.1339 32.4599C12.3683 32.6943 12.5 33.0122 12.5 33.3438C12.5 33.6753 12.3683 33.9932 12.1339 34.2276C11.8995 34.4621 11.5815 34.5938 11.25 34.5938Z"></path></svg>
                        </div>
                        <span className="text-2xl font-Oswald capitalize" >Cloud Migrate Pro</span>
                    </div>
                    <div className="w-full md:w-[320px] lg:w-56 xl:w-[300px] h-20 flex items-center justify-center space-x-5 rounded-lg cursor-pointer border border-customRed group">
                        <div className="w-9 border-box flex items-center justify-center overflow-hidden">
                            <svg className="min-w-8 max-w-[30px] group-hover:min-w-[30px] transition-all duration-300" viewBox="0 0 40 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.50125 22.2687V8.34375C7.50125 8.01223 7.36955 7.69429 7.13513 7.45987C6.90071 7.22545 6.58277 7.09375 6.25125 7.09375C5.91973 7.09375 5.60179 7.22545 5.36737 7.45987C5.13295 7.69429 5.00125 8.01223 5.00125 8.34375V22.2687C3.94204 22.5566 3.00698 23.185 2.34033 24.057C1.67369 24.929 1.3125 25.9961 1.3125 27.0938C1.3125 28.1914 1.67369 29.2585 2.34033 30.1305C3.00698 31.0025 3.94204 31.6309 5.00125 31.9188V33.3438C5.00125 33.6753 5.13295 33.9932 5.36737 34.2276C5.60179 34.4621 5.91973 34.5938 6.25125 34.5938C6.58277 34.5938 6.90071 34.4621 7.13513 34.2276C7.36955 33.9932 7.50125 33.6753 7.50125 33.3438V31.9188C8.56046 31.6309 9.49552 31.0025 10.1622 30.1305C10.8288 29.2585 11.19 28.1914 11.19 27.0938C11.19 25.9961 10.8288 24.929 10.1622 24.057C9.49552 23.185 8.56046 22.5566 7.50125 22.2687ZM6.25125 29.5938C5.7568 29.5938 5.27345 29.4471 4.86232 29.1724C4.4512 28.8977 4.13077 28.5073 3.94155 28.0505C3.75233 27.5936 3.70282 27.091 3.79929 26.606C3.89575 26.1211 4.13385 25.6756 4.48348 25.326C4.83311 24.9764 5.27857 24.7382 5.76353 24.6418C6.24848 24.5453 6.75114 24.5948 7.20796 24.784C7.66477 24.9733 8.05522 25.2937 8.32992 25.7048C8.60463 26.1159 8.75125 26.5993 8.75125 27.0938C8.75125 27.7568 8.48786 28.3927 8.01902 28.8615C7.55018 29.3304 6.91429 29.5938 6.25125 29.5938Z"></path><path d="M38.7513 27.0938C38.7477 25.9881 38.3777 24.9147 37.6991 24.0417C37.0206 23.1687 36.0718 22.5452 35.0013 22.2687V8.34375C35.0013 8.01223 34.8696 7.69429 34.6351 7.45987C34.4007 7.22545 34.0828 7.09375 33.7513 7.09375C33.4197 7.09375 33.1018 7.22545 32.8674 7.45987C32.6329 7.69429 32.5013 8.01223 32.5013 8.34375V22.2687C31.442 22.5566 30.507 23.185 29.8403 24.057C29.1737 24.929 28.8125 25.9961 28.8125 27.0938C28.8125 28.1914 29.1737 29.2585 29.8403 30.1305C30.507 31.0025 31.442 31.6309 32.5013 31.9188V33.3438C32.5013 33.6753 32.6329 33.9932 32.8674 34.2276C33.1018 34.4621 33.4197 34.5938 33.7513 34.5938C34.0828 34.5938 34.4007 34.4621 34.6351 34.2276C34.8696 33.9932 35.0013 33.6753 35.0013 33.3438V31.9188C36.0718 31.6423 37.0206 31.0188 37.6991 30.1458C38.3777 29.2728 38.7477 28.1994 38.7513 27.0938ZM33.7513 29.5938C33.2568 29.5938 32.7734 29.4471 32.3623 29.1724C31.9512 28.8977 31.6308 28.5073 31.4416 28.0505C31.2523 27.5936 31.2028 27.091 31.2993 26.606C31.3957 26.1211 31.6339 25.6756 31.9835 25.326C32.3331 24.9764 32.7786 24.7382 33.2635 24.6418C33.7485 24.5453 34.2511 24.5948 34.708 24.784C35.1648 24.9733 35.5552 25.2937 35.8299 25.7048C36.1046 26.1159 36.2513 26.5993 36.2513 27.0938C36.2513 27.7568 35.9879 28.3927 35.519 28.8615C35.0502 29.3304 34.4143 29.5938 33.7513 29.5938Z"></path><path d="M21.2513 9.76875V8.34375C21.2513 8.01223 21.1196 7.69429 20.8851 7.45987C20.6507 7.22545 20.3328 7.09375 20.0013 7.09375C19.6697 7.09375 19.3518 7.22545 19.1174 7.45987C18.8829 7.69429 18.7513 8.01223 18.7513 8.34375V9.76875C17.692 10.0566 16.757 10.685 16.0903 11.557C15.4237 12.429 15.0625 13.4961 15.0625 14.5938C15.0625 15.6914 15.4237 16.7585 16.0903 17.6305C16.757 18.5025 17.692 19.1309 18.7513 19.4187V33.3438C18.7513 33.6753 18.8829 33.9932 19.1174 34.2276C19.3518 34.4621 19.6697 34.5938 20.0013 34.5938C20.3328 34.5938 20.6507 34.4621 20.8851 34.2276C21.1196 33.9932 21.2513 33.6753 21.2513 33.3438V19.4187C22.3105 19.1309 23.2455 18.5025 23.9122 17.6305C24.5788 16.7585 24.94 15.6914 24.94 14.5938C24.94 13.4961 24.5788 12.429 23.9122 11.557C23.2455 10.685 22.3105 10.0566 21.2513 9.76875ZM20.0013 17.0938C19.5068 17.0938 19.0234 16.9471 18.6123 16.6724C18.2012 16.3977 17.8808 16.0073 17.6916 15.5505C17.5023 15.0936 17.4528 14.591 17.5493 14.106C17.6457 13.6211 17.8839 13.1756 18.2335 12.826C18.5831 12.4764 19.0286 12.2382 19.5135 12.1418C19.9985 12.0453 20.5011 12.0948 20.958 12.2841C21.4148 12.4733 21.8052 12.7937 22.0799 13.2048C22.3546 13.6159 22.5013 14.0993 22.5013 14.5938C22.5013 15.2568 22.2379 15.8927 21.769 16.3615C21.3002 16.8304 20.6643 17.0938 20.0013 17.0938Z"></path></svg>
                        </div>
                        <span className="text-2xl font-Oswald capitalize"  >AI Forge Labs</span>
                    </div>
                </div>
                <p className="leading-relaxed dark:text-white/75" >It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.</p>
            </div>
        </section>
    )
}

export default AboutUsHomeOne;