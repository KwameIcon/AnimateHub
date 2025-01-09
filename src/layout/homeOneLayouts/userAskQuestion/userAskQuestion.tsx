import bgSketch from '../../../assets/images/others/pattern-1 (1).webp'



const UserAskQuestion: React.FC = () => {

    return(
        <section className="w-[90%] md:w-11/12 h-96 m-auto my-5 relative overflow-hidden extraExtraLarge:w-3/5" >

            {/* overlay bg color */}
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-customRed via-customRed to-customRed/80"/>

            {/* bg image */}
            <div className="absolute z-10 opacity-25 top-0 left-0 w-full h-full flex justify-end" >
                <img src= {bgSketch} alt="" className="animate-swing" />
            </div>

            <div className="w-full h-full px-4 md:p-0 relative z-10 flex flex-col items-center justify-center" >
                <h1 className="w-full md:w-1/2 lg:w-[28%] mx-auto text-2xl md:text-4xl text-center uppercase font-bold font-Oswald leading-relaxed md:leading-relaxed lg:leading-relaxed text-white" >have question? feel free to ask</h1>
                <form action="" className="w-full grid grid-cols-1 md:w-4/5 md:flex md:justify-center md:space-x-3 mt-10">
                    <input type="email" placeholder="Enter Email" name="question" className=" w-[95%] h-14 mb-2 md:mb-0 md:w-9/12 md:h-auto bg-transparent border px-3 text-white outline-none rounded placeholder:text-white " />
                    <button className="relative z-[2] dark:text-white overflow-hidden text-base leading-[1.1] font-bold tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out bg-red-600 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded-5 min-w-[190px] flex-none text-white hover:text-black dark:hover:text-black after:bg-white dark:hover:text-accent-700 w-[95%] md:w-32 " type="submit"><span className="relative z-20">SUSCRIBE</span></button>
                </form>
            </div>
        </section>
    )
}

export default UserAskQuestion;