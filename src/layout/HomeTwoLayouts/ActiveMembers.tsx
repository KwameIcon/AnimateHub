import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


// animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ACTIVEMEMBERSDATA } from '../../DATA/HomeTwoData/ACTIVEMEMBERSDATA';


const ActiveMembers: React.FC = () => {
    // states
    const [currentMember, setCurrentMember] = useState(0);



    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    })



    return (
        <section className="my-10 w-full xl:w-[97%] m-auto h-auto px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none" data-aos="fade-up">

            {/* header */}
            <header className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-8 justify-between pb-10" data-aos="fade-up" data-aos-delay="0">
                <div className="md:w-2/3 lg:w-1/2">
                    <h3 className="uppercase text-customRed font-extrabold tracking-widest my-5 font-Oswald text-xl" data-aos="fade-up" data-aos-delay="0" >our active members </h3>
                    <h1 className="w-auto m-auto text-3xl md:text-5xl xl:text-6xl font-Oswald font-bold leading-loose" data-aos="fade-up" data-aos-delay="0" >Unleash the Power of Technology</h1>
                </div>

                <div className="w-full lg:w-1/2 text-black/50 dark:text-white/50 leading-relaxed text-lg">
                    <p>With a commitment to driving technological evolution, our IT solutions and services are the cornerstone of your digital progression. We transcend boundaries, enabling businesses to not only adapt but thrive in dynamic landscapes.</p>
                </div>
            </header>


            <div className='w-full'>
                <ul className='w-full flex flex-col items-center justify-start gap-5'>
                    {ACTIVEMEMBERSDATA.map((member) => (
                        <li className='w-full md:w-[48%] lg:w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-2 border-b border-black/50 dark:border-white/50 p-5 relative z-20'>
                            <div className={`w-56 h-56 rounded-full overflow-hidden relative before:absolute before:inset-0 before:w-full before:h-full before:rounded-full before:bg-gradient-to-b before:from-customRed/40 before:to-customRed/10 lg:absolute lg:bottom-0 lg:left-[50%] lg:${member.id === currentMember ? "block" : "hidden"}`} data-aos="fade-right" key={member.id} >
                                <img src={member.Pic} alt="" className='w-full h-full' />
                            </div>
                            <h2 className='font-extrabold capitalize text-xl transition-all duration-300 ease-linear cursor-pointer hover:text-customRed' onMouseEnter={() => setCurrentMember(member.id)} onMouseLeave={() => setCurrentMember(0)} >{member.name}</h2>
                            <p className='capitalize text-lg text-black/60 dark:text-white/60'>{member.title}</p>
                                <div className='flex items-center justify-center my-3 relative group'>
                                    <ul className={` lg:absolute lg:-z-50 lg:right-12 flex lg:hidden group-hover:flex items-center justify-center gap-5 `} >
                                        <li className='w-12 h-12 lg:w-10 lg:h-10 flex items-center justify-center text-xl rounded-full border border-black/30 dark:border-white/30 transition-all duration-300 ease-linear hover:bg-customRed hover:text-white hover:cursor-pointer animate-slideFromBottom1 '><FontAwesomeIcon icon={faFacebookF} /></li>
                                        <li className='w-12 h-12 lg:w-10 lg:h-10 flex items-center justify-center text-xl rounded-full border border-black/30 dark:border-white/30 transition-all duration-300 ease-linear hover:bg-customRed hover:text-white hover:cursor-pointer animate-slideFromBottom2 '><FontAwesomeIcon icon={faTwitter} /></li>
                                        <li className='w-12 h-12 lg:w-10 lg:h-10 flex items-center justify-center text-xl rounded-full border border-black/30 dark:border-white/30 transition-all duration-300 ease-linear hover:bg-customRed hover:text-white hover:cursor-pointer animate-slideFromBottom3 '><FontAwesomeIcon icon={faLinkedin} /></li>
                                        <li className='w-12 h-12 lg:w-10 lg:h-10 flex items-center justify-center text-xl rounded-full border border-black/30 dark:border-white/30 transition-all duration-300 ease-linear hover:bg-customRed hover:text-white hover:cursor-pointer animate-slideFromBottom4 '><FontAwesomeIcon icon={faPinterest} /></li>
                                    </ul>
                                    <div className='hidden lg:flex items-center justify-center w-12 h-12 rounded-full text-2xl text-black/60 dark:text-white/60 cursor-pointer ' >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default ActiveMembers;