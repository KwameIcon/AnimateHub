import { ReactNode } from "react";


interface CardProp{
    className?: string;
    children: ReactNode;
    dataAos?: string;
    dataAosDelay?: string;
}



const Card: React.FC<CardProp> = ({className, children,dataAos, dataAosDelay}) => {

    return(
        <div className={`w-full h-[300px] md:w-[340px] lg:w-[320px] xl:w-[380px] extraExtraLarge:w-[425px] p-5 my-5 md:m-0 shadow-2xl md:h-[330px] bg-white dark:bg-graphiteBlack flex flex-col justify-between md:py-8 md:px-10 shrink-0 group relative ${className}`} data-aos = {dataAos} data-aos-delay={dataAosDelay}>
            {children}
        </div>
    )
}

export default Card