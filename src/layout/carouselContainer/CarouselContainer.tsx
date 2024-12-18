import React, { forwardRef, ReactNode } from "react";

interface CarouselContainerProp {
  className?: string;
  children: ReactNode;
}

const CarouselContainer = forwardRef<HTMLUListElement, CarouselContainerProp>(
  ({ className, children }, ref) => {
    return (
      <div className={`w-full h-auto overflow-x-hidden p-2 lg:py-10 ${className}`}>
        <ul className="max-w-max min-h-[18rem] flex items-center justify-start space-x-5 overflow-auto scrollbar-none" ref = {ref}>
          {children}
        </ul>
      </div>
    );
  }
);

export default CarouselContainer;
