import { ReactNode } from "react";

// mini utility car interface
interface MiniUtilityCardProps{
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}




function MiniUtilityCard({className, children, onClick}:MiniUtilityCardProps) {

  return (
    <div className= {`w-12 h-12 rounded text-xl bg-customRed text-white hover:bg-red-500 flex items-center justify-center ${className}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default MiniUtilityCard