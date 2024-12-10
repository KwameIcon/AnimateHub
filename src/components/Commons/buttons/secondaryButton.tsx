import { ReactNode } from "react"



// interface
interface SecondaryProps {
    children: ReactNode;
    className?:string;
}



const SecondaryButton: React.FC<SecondaryProps> = ({children, className}) => {


    return(
        <div className={`relative w-40 h-14 rounded uppercase text-black dark:text-white bg-white dark:bg-ebony text-sm font-bold overflow-hidden flex items-center justify-center space-x-5 group ${className}`}>
            {children}
        </div>
    )
}

export default SecondaryButton