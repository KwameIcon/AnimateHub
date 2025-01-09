

// images
import bgSketch from '../../assets/images/others/pattern-1 (1).webp';


const UserSendProject: React.FC = () => {

    return(
        <div className="w-full h-auto lg:h-[28rem] m-auto my-5 relative overflow-hidden" >
        
            {/* overlay bg color */}
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-customRed via-customRed to-customRed/80"/>

            {/* bg image */}
            <div className="absolute z-10 opacity-25 top-0 left-0 w-full h-full flex justify-end" >
                <img src= {bgSketch} alt="" className="animate-swing" />
            </div>

            <div className="w-full xl:w-11/12 m-auto h-full px-4 py-10 relative z-10 flex flex-col xl:flex-row items-center justify-center" >
                <div className="w-full grid grid-cols-1 gap-5">
                    <h1 className="w-full md:w-1/2 lg:w-[35%] xl:w-3/5 text-3xl md:text-4xl lg:text-5xl capitalize font-extrabold font-Oswald leading-relaxed md:leading-relaxed lg:leading-relaxed text-white" >leave the handy work to us</h1>
                    <p className=" leading-loose xl:w-4/5">It is long to established fact that a reader will be distracted by the readable content of a page when looking at it layout</p>
                </div>
                <form action="" className="w-full grid grid-cols-1 gap-5 mt-10">
                    <div className="w-full m-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-5">
                        <input type="text" placeholder="Enter Name" name="name" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                        <input type="email" placeholder="Enter Email" name="email" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                    </div>
                    <div className="w-full m-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-5">
                        <input type="email" placeholder="Subject" name="subject" className=" w-[95%] h-16 md:h-16 mb-2 md:mb-0 md:w-9/12 lg:w-10/12 bg-transparent border border-white/50 px-3 text-white outline-none rounded placeholder:text-white/75 " />
                        <button className="relative z-[2] dark:text-white overflow-hidden text-base leading-[1.1] font-bold tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out bg-red-600 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded-5 min-w-[190px] flex-none text-white hover:text-black dark:hover:text-black after:bg-white dark:hover:text-accent-700 w-[95%] md:w-32 " type="submit"><span className="relative z-20">SUSCRIBE</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserSendProject;