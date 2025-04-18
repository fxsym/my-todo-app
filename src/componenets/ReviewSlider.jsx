import React, { useEffect, useRef } from "react";


export const ReviewSlider = () => {
    const content = (
        <>
            <div className="border-x-1 border-gray-300 w-1/4 p-6 flex items-center">
                <p className="text-center text-md sm:text-lg lg:text-2xl">"Easily capture and manage your tasks anytime, from any device."</p>
            </div>
            <div className="border-x-1 border-gray-300 w-1/4 p-6 flex items-center">
                <p className="text-center text-md sm:text-lg lg:text-2xl">"Stay productive with a clean, fast, and user-friendly interface."</p>
            </div>
            <div className="border-x-1 border-gray-300 w-1/4 p-6 flex items-center">
                <p className="text-center text-md sm:text-lg lg:text-2xl">"Designed to simplify your busy life and keep you on track."</p>
            </div>
            <div className="border-x-1 border-gray-300 w-1/4 p-6 flex items-center">
                <p className="text-center text-md sm:text-lg lg:text-2xl">"From students to professionals — SkyList helps everyone stay organized effortlessly."</p>
            </div>
        </>
    )
    const sliderRef = useRef(null)
    const speed = 0.8

    useEffect(() => {
        const slider = sliderRef.current;
        let start = 0;
    
        const scroll = () => {
          if (!slider) return;
    
          start -= speed;
          if (Math.abs(start) >= slider.scrollWidth / 2) {
            // Reset posisi setelah setengah karena konten diduplikasi
            start = 0;
          }
    
          slider.style.transform = `translateX(${start}px)`;
          requestAnimationFrame(scroll);
        };
    
        requestAnimationFrame(scroll);
      }, []);

    return (
        <>
            <div className="w-full  overflow-hidden py-2 px-8 bg-gray-100 lg:hidden">
                <div className="flex w-500" ref={sliderRef}>
                    {content}
                    {content}
                </div>
            </div>
            <div className="py-2 px-28 bg-gray-100 hidden lg:block">
                <div className="flex">
                    {content}
                </div>
            </div>
        </>
    )
}