import { faAngleDown, faAngleUp, faBars, faClose, faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MiniDropDownCard } from "../../cards"

// logo
import Logo from '../../../../assets/images/logo/logo1.webp'
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"



// component interface 
interface NavButtonsProps{
    displayContactInfo?: boolean;
}



const NavButtons: React.FC<NavButtonsProps> = ({displayContactInfo = true}) => {

    // states
    const [isMenu, setIsMenu] = useState(false);
    const [currentSubMenu, setCurrentSubMenu] = useState({
        homeSub: false,
        about: false,
        serviceSub: false,
        projectsSub: false,
        blogsSub: false,
        pagesSub: false,
        contact: false

    });
    const containerRef = useRef<HTMLUListElement>(null)
    const menuContainerRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();



    // remove menu buttons on outside click
    const removeMenu = (e:Event) => {
       const mainContainer = containerRef.current
       const menuContainer = menuContainerRef.current

       if((mainContainer && menuContainer) && mainContainer.contains(e.target as Node) && !menuContainer.contains(e.target as Node)){
        setIsMenu(prev => !prev);
       }
    }


    useEffect(() => {
        window.addEventListener('click', removeMenu);

        return(() => {
            window.removeEventListener('click', removeMenu);
        })
    })


    // display current submenu
    const handleCurrentSubMenuDisplay = (menu: keyof typeof currentSubMenu) => {
        if (!(menu in currentSubMenu)) {
            alert(`Invalid menu key: ${menu}`);
            return;
        }

        setCurrentSubMenu((prev) => ({
            ...prev,
            homeSub: false,
            about: false,
            serviceSub: false,
            projectsSub: false,
            blogsSub: false,
            pagesSub: false,
            contact: false,
            [menu]: !prev[menu],
        }));
    };



    return(
        <div className="">

            {/* mobile */}
            <div className="lg:hidden">


                {/* menu toggle icons */}
                <div className="absolute right-4 md:right-10 top-4 w-8 h-8 md:w-10 md:h-10 cursor-pointer text-customRed">
                    {!isMenu ? (
                        <div className="w-full h-full" onClick={() => setIsMenu(prev => !prev)}>
                         <FontAwesomeIcon icon={faBars} className="w-full h-full"/>
                        </div>) : 
                        (<div className="w-full h-full" onClick={() => setIsMenu(prev => !prev)}>
                            <FontAwesomeIcon icon={faClose} className="w-full h-full"/>
                        </div>)
                    }
                </div>


                    {/* mobile */}
                {isMenu && <ul className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll scrollbar-none bg-black/30 text-black animate-slideInLeft" ref={containerRef}>

                    <div className="absolute top-0 left-0 w-3/4 h-full bg-white text-black overflow-y-auto scrollbar-none" ref={menuContainerRef}>

                        {/* logo */}
                        <li className="w-full pb-8 flex items-center justify-between pr-3 border-b">
                            <img src= {Logo} alt="Logo" />
                            <FontAwesomeIcon icon={faClose} className="text-3xl" onClick={() => setIsMenu(prev => !prev)}/>
                        </li>

                        {/* home button */}
                        <li className={`transition-[max-height] duration-300 ease-in-out capitalize cursor-pointer w-full ${currentSubMenu.homeSub ? 'max-h-[500px]' : 'max-h-12'
                            } px-2 py-4 flex flex-col items-start justify-center space-x-1 relative border-b font-bold`} onClick={() => handleCurrentSubMenuDisplay('homeSub')}>

                            {/* main menu button */}
                            <div className={`${currentSubMenu.homeSub ? 'text-customRed' : ''} w-full flex items-center justify-between px-2`}>
                                <span>Home</span>
                                {currentSubMenu.homeSub ? 
                                    <FontAwesomeIcon icon={faAngleUp}/>
                                    :
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                }
                            </div>
                                {/* home submenus */}
                            <div className="w-full overflow-hidden h-auto top-14 pl-5">
                                <MiniDropDownCard className="w-full bg-transparent ">
                                    <li className="py-2 px-1 hover:text-white hover:bg-customRed text-black" onClick={() => navigate('/')} >Home One</li>
                                    <hr/>
                                    <li className="py-2 px-1 hover:text-white hover:bg-customRed text-black" onClick={() => navigate('/home-two')} >Home Two</li>
                                </MiniDropDownCard>
                            </div>
                        </li>


                        <li className={`${currentSubMenu.about ? 'text-customRed' : ''} w-full h-12 border-b flex items-center justify-between pl-4 capitalize cursor-pointer hover:duration-75 font-semibold py-4`} onClick={() => handleCurrentSubMenuDisplay('about')}>
                            <span>About</span>
                        </li>

                        <li className={` transition-[max-height] duration-300 ease-in-out capitalize cursor-pointer w-full ${currentSubMenu.serviceSub ? 'max-h-[500px]' : 'max-h-12'} font-bold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative border-b`} onClick={() => handleCurrentSubMenuDisplay('serviceSub')}>

                            <div className={`${currentSubMenu.serviceSub ? 'text-customRed' : ''} w-full flex items-center justify-between px-2`}>
                                <span>Services</span>
                                {currentSubMenu.serviceSub ? 
                                    <FontAwesomeIcon icon={faAngleUp}/>
                                    :
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                }
                            </div>

                            <div className="w-full overflow-hidden h-auto top-14 -left-1 pl-5">
                                <MiniDropDownCard className="bg-transparent">
                                    <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">Service List</li>
                                    <hr/>
                                    <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">Service Single</li>
                                </MiniDropDownCard>
                            </div>
                        </li>


                        <li className={` transition-[max-height] duration-300 ease-in-out capitalize cursor-pointer w-full ${currentSubMenu.projectsSub ? 'max-h-[500px]' : 'max-h-12'} font-bold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative border-b`} onClick={() => handleCurrentSubMenuDisplay('projectsSub')}>

                            <div className={`${currentSubMenu.projectsSub ? 'text-customRed' : ''} w-full flex items-center justify-between px-2`}>
                                <span>Projects</span>
                                {currentSubMenu.projectsSub ? 
                                    <FontAwesomeIcon icon={faAngleUp}/>
                                    :
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                }
                            </div>

                            <div className="overflow-hidden h-auto top-14 -left-1 pl-5">
                                <MiniDropDownCard className="bg-transparent">
                                    <li className="py-2 px-1 hover:bg-customRed hover:text-white">Project List</li>
                                    <hr/>
                                    <li className="py-2 px-1 hover:bg-customRed hover:text-white">Project Single</li>
                                </MiniDropDownCard>
                            </div>
                        </li>


                        <li className={` transition-[max-height] duration-300 ease-in-out capitalize cursor-pointer w-full ${currentSubMenu.blogsSub ? 'max-h-[500px]' : 'max-h-12'} font-bold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative border-b`} onClick={() => handleCurrentSubMenuDisplay('blogsSub')}>

                            <div className={`${currentSubMenu.blogsSub ? 'text-customRed' : ''} w-full flex items-center justify-between px-2`}>
                                <span>Blogs</span>
                                {currentSubMenu.blogsSub ? 
                                    <FontAwesomeIcon icon={faAngleUp}/>
                                    :
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                }
                            </div>

                            <div className="overflow-hidden h-auto top-14 -left-1 pl-5">
                                {currentSubMenu.blogsSub &&
                                    <MiniDropDownCard className="bg-transparent">
                                        <li className="py-2 px-1 hover:bg-customRed hover:text-white">Blog List</li>
                                        <div className="w-full h-thinHeight bg-white/10"/>
                                        <li className="py-2 px-1 hover:bg-customRed hover:text-white">Blog Single</li>
                                    </MiniDropDownCard>
                                }
                            </div>
                        </li>


                        <li className={` transition-[max-height] duration-300 ease-in-out capitalize cursor-pointer w-full ${currentSubMenu.pagesSub ? 'max-h-[500px]' : 'max-h-12'} font-bold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative border-b`} onClick={() => handleCurrentSubMenuDisplay('pagesSub')}>

                            <div className={`${currentSubMenu.pagesSub ? 'text-customRed' : ''} w-full flex items-center justify-between px-2`}>
                                <span>Pages</span>
                                {currentSubMenu.pagesSub ? 
                                    <FontAwesomeIcon icon={faAngleUp}/>
                                    :
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                }
                            </div>

                            <div className="overflow-hidden h-auto top-14 -left-1 pl-5">
                                {currentSubMenu.pagesSub &&
                                    <MiniDropDownCard className="bg-transparent">
                                        <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">Testimonial</li>
                                        <hr/>
                                        <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">Team</li>
                                        <hr/>
                                        <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">Pricing</li>
                                        <hr/>
                                        <li className="py-2 px-1 rounded hover:bg-customRed hover:text-white">FAQ</li>
                                    </MiniDropDownCard>
                                }
                            </div>
                        </li>


                        <li className="hover:text-customRed w-full capitalize cursor justify-between-px-2-full hover:duration-75 font-bold py-4 pl-4 " onClick={() => handleCurrentSubMenuDisplay('contact')}>
                            <span className= {currentSubMenu.contact ? 'text-customRed' : ''}>Contact</span>
                        </li>

                            {/* contact */}
                        <div className="flex items-center justify-start space-x-4 mt-12">
                            <div className=" w-14 h-14 flex items-center justify-center relative">
                                <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-0 z-0 "/>
                                <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-5 z-20 rotate-customRotate"/>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="">Need Help?</span>
                                <span className="text-xl font-extrabold tracking-tight font-Oswald">[233] 558-465-569</span>
                            </div>
                        </div>
                    </div>
                </ul>
                }
            </div>


            {/* large screen */}
            <div className="hidden lg:flex md:items-center md:justify-center md:space-x-2 md:dark:from-ebony/75">
                <ul className="md:flex md:items-center md:justify-center md:space-x-2">

                    <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                        <div className="hover:text-customRed hover:duration-75 relative dark:from-ebony/75">
                            <span>Home</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="overflow-hidden h-auto absolute top-14 -left-1">
                            <MiniDropDownCard className="hidden group-hover:flex">
                                <li className="py-2 px-1 hover:bg-customRed text-white/80" onClick={() => navigate('/')} >Home One</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80" onClick={() => navigate('/home-two')} >Home Two</li>
                            </MiniDropDownCard>
                        </div>
                    </li>


                    <li className="hover:text-customRed capitalize cursor-pointer hover:duration-75 font-semibold py-4 px-2 ">
                        <span>About</span>
                    </li>
                    <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                        <div className="hover:text-customRed hover:duration-75 relative top-2/4">
                            <span>Services</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="overflow-hidden h-auto absolute top-14 -left-1">
                            <MiniDropDownCard className="hidden group-hover:flex">
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Service List</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Service Single</li>
                            </MiniDropDownCard>
                        </div>
                    </li>


                    <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                        <div className="hover:text-customRed hover:duration-75 relative top-2/4">
                            <span>Projects</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="overflow-hidden h-auto absolute top-14 -left-1">
                            <MiniDropDownCard className="hidden group-hover:flex">
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Project List</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Project Single</li>
                            </MiniDropDownCard>
                        </div>
                    </li>


                    <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                        <div className="hover:text-customRed hover:duration-75 relative top-2/4">
                            <span>Blogs</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="overflow-hidden h-auto absolute top-14 -left-1">
                            <MiniDropDownCard className="hidden group-hover:flex">
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Blog List</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Blog Single</li>
                            </MiniDropDownCard>
                        </div>
                    </li>


                    <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                        <div className="hover:text-customRed hover:duration-75 relative top-2/4">
                            <span>Pages</span>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="overflow-hidden h-auto absolute top-14 -left-1">
                            <MiniDropDownCard className="hidden group-hover:flex">
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Testimonial</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Team</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">Pricing</li>
                                <div className="w-full h-thinHeight bg-white/10"/>
                                <li className="py-2 px-1 hover:bg-customRed text-white/80">FAQ</li>
                            </MiniDropDownCard>
                        </div>
                    </li>


                    <li className="hover:text-customRed capitalize cursor-pointer hover:duration-75 font-semibold py-4 px-2 ">
                        <span>Contact</span>
                    </li>
                </ul> 

                {/* contact */}
               {displayContactInfo && ( <div className="flex items-center justify-start space-x-2 pl-10 extraExtraLarge:pl-20 laptop:hidden xl:flex ">
                    <div className=" w-14 h-14 flex items-center justify-center relative">
                        <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-0 z-0 "/>
                        <FontAwesomeIcon icon = {faCommentDots} className="text-3xl absolute top-5 z-20 rotate-customRotate"/>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <span className="">Need Help?</span>
                        <span className="text-xl font-extrabold tracking-tight font-Oswald">[233] 558-465-569</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default NavButtons