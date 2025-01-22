import { useEffect, useState } from "react";



const BackToTop: React.FC = () =>{

    const [isVisible, setIsVisible] = useState(false);


    // handle back to top display
    useEffect(() => {
        const handleBackToTopDisplay = () => {
            if(window.scrollY > 300){
                setIsVisible(true);
            }else{
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', handleBackToTopDisplay);
        return(() => {
            window.removeEventListener('scroll', handleBackToTopDisplay)
        })
    },[])



    //handle scroll to top movement
    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }




    return(
        <>
        {isVisible && 
            (
                <div className="fixed z-30 bottom-14 right-10 md:right-16 w-12 h-12 text-2xl rounded bg-red-700 flex items-center justify-center hover:bg-red-600 hover:cursor-pointer animate-slideInSlow " onClick={backToTop}>
                    <svg className="fill-white" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"></path></svg>
                </div>
            )
        }
        </>
    )
}


export default BackToTop;