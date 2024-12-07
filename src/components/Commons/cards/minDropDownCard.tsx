import { ReactNode } from "react";



// component interface
 interface MiniDropDownCardProps{
    className?: string;
    children: ReactNode;
 }


const MiniDropDownCard: React.FC<MiniDropDownCardProps> = ({className, children}) => {

    return(
        <ul className= {` min-w-40 h-auto bg-ebony animate-slideIn ${className} flex flex-col space-y-1 px-1 py-2`}>
            {children}
        </ul>
    )
}

export default MiniDropDownCard;