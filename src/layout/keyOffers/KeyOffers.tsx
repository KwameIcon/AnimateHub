import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../../components/Commons/buttons/secondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";


// animation
import Aos from "aos";
import 'aos/dist/aos.css'
import { Card } from "../../components/Commons/cards";






const KeyOffers: React.FC = () => {


    useEffect(() => {
        Aos.init({duration:3000})
    },[])


    return(
        <div className="w-full xl:w-11/12 m-auto h-auto py-10 px-5 md:px-0 flex flex-wrap items-center justify-between md:justify-center md:gap-10 lg:gap-5 xl:gap-0 xl:justify-between extraExtraLarge:w-7/12 animate-appearFromBottomF">


            {/* card */}
            <Card dataAos="fade-up" data-aos='' dataAosDelay="0">

                {/* border bottom */}
                <div className="absolute bottom-0 w-full left-0 h-[2px]">
                <p className="w-0 h-full m-auto bg-customRed group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>


                <div className="flex items-center justify-start space-x-4 md:space-x-6 font-Oswald text-lg md:text-xl font-bold">
                    <span>
                        <svg className="w-11 h-11 md:w-16 md:h-16 group-hover:w-14 group-hover:h-14 transition-all duration-500 group-hover:fill-customRed" viewBox="0 0 65 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.12799 55.3735C4.85988 51.6963 3.05469 46.9477 3.05469 42.0281C3.05469 37.1086 4.85988 32.36 8.12799 28.6828L30.1671 4.81564C30.3453 4.62883 30.5597 4.48012 30.7971 4.37852C31.0345 4.27693 31.2901 4.22454 31.5483 4.22454C31.8065 4.22454 32.0621 4.27693 32.2995 4.37852C32.5369 4.48012 32.7513 4.62883 32.9296 4.81564C33.3079 5.19622 33.5202 5.71104 33.5202 6.24767C33.5202 6.7843 33.3079 7.29912 32.9296 7.6797L10.9717 31.5063C8.39045 34.4072 6.9644 38.1552 6.9644 42.0383C6.9644 45.9214 8.39045 49.6693 10.9717 52.5703C12.1762 53.9262 13.6542 55.0115 15.3085 55.7547C16.9628 56.4979 18.7558 56.8822 20.5694 56.8822C22.383 56.8822 24.176 56.4979 25.8303 55.7547C27.4846 55.0115 28.9626 53.9262 30.1671 52.5703L55.3342 25.2906C57.0706 23.3294 58.0291 20.8006 58.0291 18.1813C58.0291 15.5619 57.0706 13.0331 55.3342 11.0719C54.5243 10.1617 53.531 9.43329 52.4194 8.93449C51.3079 8.43568 50.1034 8.17781 48.885 8.17781C47.6667 8.17781 46.4622 8.43568 45.3506 8.93449C44.2391 9.43329 43.2457 10.1617 42.4358 11.0719L17.2686 38.311C16.7466 38.8983 16.3539 39.5887 16.116 40.3376C15.878 41.0864 15.8001 41.8769 15.8874 42.6578C15.9382 43.4043 16.1453 44.1318 16.4952 44.7931C16.8451 45.4544 17.3301 46.0349 17.9186 46.4969C18.8575 47.1458 20.0069 47.4164 21.1367 47.2544C22.2665 47.0925 23.2935 46.51 24.0124 45.6234L30.1061 39.0016C30.2844 38.8148 30.4987 38.6661 30.7362 38.5645C30.9736 38.4629 31.2291 38.4105 31.4874 38.4105C31.7456 38.4105 32.0012 38.4629 32.2386 38.5645C32.476 38.6661 32.6903 38.8148 32.8686 39.0016C33.2469 39.3822 33.4593 39.897 33.4593 40.4336C33.4593 40.9702 33.2469 41.4851 32.8686 41.8656L26.7749 48.4875C25.4214 50.0643 23.5285 51.0797 21.4663 51.3351C19.404 51.5906 17.3206 51.0677 15.6233 49.8688C14.5592 49.0441 13.684 48.001 13.0569 46.8097C12.4297 45.6184 12.065 44.3066 11.9874 42.9625C11.8503 41.6186 11.9965 40.2609 12.4163 38.9769C12.8361 37.6929 13.5203 36.5112 14.4249 35.5078L39.5921 8.22814C40.7619 6.92121 42.1942 5.87573 43.7955 5.15996C45.3968 4.44418 47.131 4.07422 48.885 4.07422C50.639 4.07422 52.3733 4.44418 53.9746 5.15996C55.5759 5.87573 57.0082 6.92121 58.178 8.22814C60.6109 10.9648 61.9547 14.4992 61.9547 18.1609C61.9547 21.8227 60.6109 25.3571 58.178 28.0938L33.0108 55.3735C31.4464 57.1261 29.5295 58.5284 27.3854 59.4886C25.2414 60.4488 22.9186 60.9451 20.5694 60.9451C18.2202 60.9451 15.8974 60.4488 13.7534 59.4886C11.6093 58.5284 9.69234 57.1261 8.12799 55.3735Z"></path>
                        </svg>
                    </span>
                    <h2 className="tracking-wider">net connect plus</h2>
                </div>
                <div className="text-black dark:text-white/60">
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                </div>
                <div>
                    <SecondaryButton className="bg-transparent !rounded border border-graphiteBlack group-hover:border-customRed transition-all duration-500 cursor-pointer">
                        <span >read more</span>
                        <FontAwesomeIcon icon={faPlus} className="text-customRed"/>
                    </SecondaryButton>
                </div>
            </Card>


            {/* card */}
            <Card dataAos="fade-up" dataAosDelay="200">

                {/* border bottom */}
                <div className="absolute bottom-0 w-full left-0 h-[2px]">
                <p className="w-0 h-full m-auto bg-customRed group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>


                <div className="flex items-center justify-start space-x-4 md:space-x-6 font-Oswald text-lg md:text-xl font-bold">
                    <span>
                        <svg className="w-11 h-11 md:w-16 md:h-16 group-hover:w-14 group-hover:h-14 transition-all duration-500 group-hover:fill-customRed" viewBox="0 0 65 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.4375 62.9688C21.4341 62.9688 14.7176 60.1867 9.76546 55.2345C4.81333 50.2824 2.03125 43.5659 2.03125 36.5625C2.03125 29.5591 4.81333 22.8426 9.76546 17.8905C14.7176 12.9383 21.4341 10.1563 28.4375 10.1562C28.9762 10.1562 29.4929 10.3703 29.8738 10.7512C30.2547 11.1321 30.4688 11.6488 30.4688 12.1875V34.5312H52.8125C53.3512 34.5312 53.8679 34.7453 54.2488 35.1262C54.6297 35.5071 54.8438 36.0238 54.8438 36.5625C54.8438 43.5659 52.0617 50.2824 47.1095 55.2345C42.1574 60.1867 35.4409 62.9688 28.4375 62.9688ZM26.4062 14.2188C22.1882 14.6233 18.1722 16.219 14.8267 18.8195C11.4812 21.4201 8.94419 24.9184 7.51157 28.9062C6.07896 32.8941 5.80984 37.2071 6.73561 41.3421C7.66139 45.4771 9.74389 49.2636 12.7402 52.2598C15.7364 55.2561 19.5229 57.3386 23.6579 58.2644C27.7929 59.1902 32.1059 58.921 36.0938 57.4884C40.0816 56.0558 43.5799 53.5188 46.1805 50.1733C48.781 46.8278 50.3767 42.8118 50.7812 38.5938H28.4375C27.8988 38.5938 27.3821 38.3797 27.0012 37.9988C26.6203 37.6179 26.4062 37.1012 26.4062 36.5625V14.2188Z"></path><path d="M60.9375 30.4688H36.5625C36.0238 30.4688 35.5071 30.2547 35.1262 29.8738C34.7453 29.4929 34.5312 28.9762 34.5312 28.4375V4.0625C34.5312 3.52378 34.7453 3.00712 35.1262 2.62619C35.5071 2.24526 36.0238 2.03125 36.5625 2.03125C40.0302 2.03125 43.464 2.71427 46.6677 4.04131C49.8715 5.36834 52.7825 7.31341 55.2345 9.76546C57.6866 12.2175 59.6317 15.1285 60.9587 18.3323C62.2857 21.536 62.9688 24.9698 62.9688 28.4375C62.9688 28.9762 62.7547 29.4929 62.3738 29.8738C61.9929 30.2547 61.4762 30.4688 60.9375 30.4688ZM38.5938 26.4062H58.9062C58.4486 21.1728 56.1616 16.2679 52.4468 12.5532C48.7321 8.83841 43.8272 6.55137 38.5938 6.09375V26.4062Z"></path>
                        </svg>
                    </span>
                    <h2 className="tracking-wider">Data Guard Sentinel</h2>
                </div>
                <div className="text-black dark:text-white/60">
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                </div>
                <div>
                    <SecondaryButton className="bg-transparent !rounded border border-graphiteBlack group-hover:border-customRed transition-all duration-500 cursor-pointer">
                        <span >read more</span>
                        <FontAwesomeIcon icon={faPlus} className="text-customRed"/>
                    </SecondaryButton>
                </div>
            </Card>


            {/* card */}
            <Card dataAos="fade-up" dataAosDelay="400">

                {/* border bottom */}
                <div className="absolute bottom-0 w-full left-0 h-[2px]">
                <p className="w-0 h-full m-auto bg-customRed group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>


                <div className="flex items-center justify-start space-x-4 md:space-x-6 font-Oswald text-lg md:text-xl font-bold">
                    <span>
                        <svg className="w-11 h-11 md:w-16 md:h-16 group-hover:w-14 group-hover:h-14 transition-all duration-500 group-hover:fill-customRed" viewBox="0 0 65 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5 62.9679C32.0697 62.9694 31.6501 62.8343 31.3016 62.5819L25.6953 58.5194C20.2588 54.5543 15.8343 49.3626 12.7813 43.3661C9.72834 37.3696 8.13304 30.7374 8.125 24.0085V12.1866C8.12518 11.7692 8.25397 11.3619 8.49385 11.0203C8.73373 10.6786 9.07304 10.4192 9.46562 10.2773L31.8094 2.15226C32.2557 1.99091 32.7443 1.99091 33.1906 2.15226L55.5344 10.2773C55.927 10.4192 56.2663 10.6786 56.5061 11.0203C56.746 11.3619 56.8748 11.7692 56.875 12.1866V24.0085C56.8702 30.7409 55.2764 37.377 52.2233 43.3773C49.1702 49.3776 44.744 54.5726 39.3047 58.5398L33.6984 62.6023C33.3475 62.8474 32.928 62.9753 32.5 62.9679ZM12.1875 13.6085V24.0085C12.2013 30.0907 13.6464 36.0842 16.4058 41.5044C19.1653 46.9245 23.1617 51.6191 28.0719 55.2085L32.5 58.4179L36.9281 55.2085C41.8383 51.6191 45.8347 46.9245 48.5942 41.5044C51.3536 36.0842 52.7987 30.0907 52.8125 24.0085V13.6085L32.5 6.21476L12.1875 13.6085Z"></path><path d="M31.3016 52.5288L30.4688 51.9194C26.0667 48.7174 22.4839 44.52 20.0129 39.6697C17.5418 34.8194 16.2525 29.4536 16.25 24.0101V17.9163C16.2502 17.4989 16.379 17.0916 16.6188 16.75C16.8587 16.4083 17.198 16.1489 17.5906 16.0069L31.8094 10.8476C32.2557 10.6862 32.7443 10.6862 33.1906 10.8476L47.4094 16.0069C47.7955 16.1465 48.1303 16.3997 48.3696 16.7333C48.609 17.0669 48.7416 17.4652 48.75 17.8757V23.9694C48.7475 29.4129 47.4582 34.7787 44.9871 39.629C42.5161 44.4794 38.9333 48.6768 34.5312 51.8788L33.6984 52.4882C33.3549 52.7483 32.9375 52.8925 32.5066 52.8998C32.0758 52.9071 31.6537 52.7772 31.3016 52.5288ZM20.3125 19.2976V24.0101C20.3219 28.7385 21.4273 33.4004 23.542 37.6297C25.6566 41.859 28.7229 45.5405 32.5 48.3851C36.2771 45.5405 39.3434 41.859 41.458 37.6297C43.5727 33.4004 44.6781 28.7385 44.6875 24.0101V19.2976L32.5 14.8694L20.3125 19.2976Z"></path>
                        </svg>
                    </span>
                    <h2 className="tracking-wider">App Swift DevOps</h2>
                </div>
                <div className="text-black dark:text-white/60">
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page layout long established</p>
                </div>
                <div>
                    <SecondaryButton className="bg-transparent !rounded border border-graphiteBlack group-hover:border-customRed transition-all duration-500 cursor-pointer">
                        <span >read more</span>
                        <FontAwesomeIcon icon={faPlus} className="text-customRed"/>
                    </SecondaryButton>
                </div>
            </Card>

            
        </div>
    )
}

export default KeyOffers;