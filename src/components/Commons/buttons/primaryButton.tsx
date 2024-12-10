import { ReactNode, useState } from "react";


// component interface 
interface PrimaryButtonProps{
  children: ReactNode;
  className?: string;
}



const PrimaryButton: React.FC<PrimaryButtonProps> = ({children, className}) => {

  // states
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button className={`relative w-48 h-14 xl:w-56 xl:h-16 bg-customRed rounded-full uppercase text-white font-bold overflow-hidden group`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      {/* Animated Background Layer */}
      {isHovered ?
        (<span className="absolute z-0 top-0 left-0 w-full h-full bg-red-800 transform translate-x-[-100%] group-hover:animate-slideInLeft"></span>)
        :
        (<span className="absolute z-10 top-0 left-0 w-full h-full bg-customRed transform translate-x-[-100%] group-hover:animate-slideInLeft"></span>)
      }

      {/* Button Text */}
      <span className={`relative z-20 w-full ${className} flex items-center justify-center space-x-2`}>{children}</span>
    </button>
  );
};

export default PrimaryButton;
