import SecondaryButton from "../../components/Commons/buttons/secondaryButton";
import { PROJECTCATEGORIES } from "../../DATA/HomeTwoData/OURPROJECTS";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleFilterProject } from "../../utils/filterHomeTwoProject";


import Aos from "aos";
import 'aos/dist/aos.css';


// interface
interface ProjectsProps {
    id: number;
    Image: string;
    title: string;
    company: string;
    category: string;
}



const OurProjects: React.FC = () => {
    // states
    const [currentCategory, setCurrentCategory] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All projects');
    const [projects, setProjects] = useState<ProjectsProps[]>([]);

    const handleSelectCat = (id: number, category: string) => {
        setCurrentCategory(id);
        setActiveCategory(category);
    };
    


    useEffect(() => {
        setProjects(handleFilterProject(activeCategory));
    }, [activeCategory]);


    // aos animation initialization
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    })



    return (
        <section className="my-10 w-full xl:w-[97%] m-auto h-auto py-5 px-5 flex flex-wrap items-center justify-start md:gap-10 lg:gap-5 xl:gap-0 overflow-x-scroll scrollbar-none" data-aos="fade-up">

            {/* header */}
            <header className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-8 justify-between py-20" data-aos="fade-up" data-aos-delay="0">
                <div className="md:w-2/3 lg:w-1/2">
                    <h3 className="uppercase text-customRed font-extrabold tracking-widest my-5 font-Oswald text-xl" data-aos="fade-up" data-aos-delay="0" >Our Projects</h3>
                    <h1 className="w-auto m-auto text-3xl md:text-5xl xl:text-6xl font-Oswald font-bold leading-loose" data-aos="fade-up" data-aos-delay="100" >Empowering Your Digital Tomorrow</h1>
                </div>

                <SecondaryButton className="w-48 h-16 !bg-customRed text-xl text-white !rounded-none relative z-[2] overflow-hidden cursor-pointer transition-all duration-300 linear after:absolute after:content-[''] after:z-0 after:transition-all after:duration-300 after:ease-in-out after:bg-red-900 after:right-0 after:w-0 after:h-full hover:after:left-0 hover:after:w-full">
                    <span className=" relative z-10">more projects</span>
                </SecondaryButton>
            </header>

            <div className="w-full h-auto m-auto flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between gap-5">
                {/* categories */}
                <ul className="w-full lg:w-auto h-auto flex flex-col items-start justify-start space-y-5">
                    {PROJECTCATEGORIES.map((cat) => (
                        <li
                            className={`w-full lg:w-80 h-16 shadow-sm cursor-pointer rounded flex items-center justify-between px-5 font-Oswald tracking-wider uppercase font-bold transition-all duration-200 ease-linear hover:text-white group relative overflow-hidden after:absolute after:z-0 after:h-full after:w-0 after:right-0 after:top-0 after:bg-customRed after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0 ${cat.id === currentCategory ? "bg-customRed text-white" : "bg-gray-50 dark:bg-graphiteBlack" }`} key={cat.id} onClick={() => handleSelectCat(cat.id, cat.title)} >
                            <span className="relative z-10">{cat.title}</span>
                            <svg
                                className={`w-10 relative z-10 transition-colors duration-200 ease-linear group-hover:fill-white ${cat.id === currentCategory ? " fill-white" : " fill-black dark:fill-white" }`}
                                viewBox="0 0 28 9"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M27.3536 4.86918C27.5488 4.67391 27.5488 4.35733 27.3536 4.16207L24.1716 0.980089C23.9763 0.784827 23.6597 0.784827 23.4645 0.980089C23.2692 1.17535 23.2692 1.49193 23.4645 1.6872L26.2929 4.51562L23.4645 7.34405C23.2692 7.53931 23.2692 7.85589 23.4645 8.05116C23.6597 8.24642 23.9763 8.24642 24.1716 8.05116L27.3536 4.86918ZM4.37114e-08 5.01562L27 5.01562L27 4.01562L-4.37114e-08 4.01562L4.37114e-08 5.01562Z"></path>
                            </svg>
                        </li>
                    ))}
                </ul>

                {/* projects */}
                <ul className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
                    {projects.map((project) => (
                        <li className="w-[98%] lg:w-[20rem] xl:w-[31rem] h-[20rem] lg:h-[20rem] xl:h-[31rem] overflow-hidden rounded flex flex-col items-start justify-start gap-2 group " key={project.id} data-aos="zoom-in-left" >
                            <div className="w-full h-[75%] lg:h-[71%] overflow-hidden relative rounded before:absolute before:inset-0 before:w-full before:h-full before:bg-black/30 before:z-[1] group-hover:before:animate-rotateX">
                                <img src={project.Image} alt="" className="w-[100%] h-full transition-transform duration-300 ease-linear group-hover:scale-105" />

                                <div className="absolute top-[37%] left-[39%] lg:top-[45%] lg:left-[45%] w-16 h-16 z-10 bg-white rounded-full flex lg:hidden  group-hover:flex items-center justify-center text-black text-2xl font-bold cursor-pointer group-hover:animate-fadeIn">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <h1 className="capitalize font-BebasNeue text-xl font-bold tracking-widest mt-3 transition-colors duration-300 ease-linear hover:text-customRed cursor-pointer">{project.title}</h1>
                            <p className="text-black/40 dark:text-white/40 text-lg">{project.company}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default OurProjects;