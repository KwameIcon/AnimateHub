import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MiniDropDownCard } from "../../cards"



const NavButtons: React.FC = () => {

    return(
        <ul className="flex items-center justify-center space-x-2 dark:from-ebony/75">

            <li className="capitalize cursor-pointer font-semibold py-4 px-2 flex flex-col items-start justify-center space-x-1 relative group">
                <div className="hover:text-customRed hover:duration-75 relative dark:from-ebony/75">
                    <span>Home</span>
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>

                <div className="overflow-hidden h-auto absolute top-14 -left-1">
                    <MiniDropDownCard className="hidden group-hover:flex">
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Home One</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Home Two</li>
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
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Service List</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Service Single</li>
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
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Project List</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Project Single</li>
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
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Blog List</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Blog Single</li>
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
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Testimonial</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Team</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">Pricing</li>
                        <div className="w-full h-thinHeight bg-white/10"/>
                        <li className="py-2 px-1 text-sm rounded font-light hover:bg-customRed text-white/80">FAQ</li>
                    </MiniDropDownCard>
                </div>
            </li>


            <li className="hover:text-customRed capitalize cursor-pointer hover:duration-75 font-semibold py-4 px-2 ">
                <span>Contact</span>
            </li>
        </ul>
    )
}

export default NavButtons