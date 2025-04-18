import React, { useEffect, useRef } from "react";


export const ReviewSlider = () => {
    const content = (
        <>
            <div className="border-x-1 border-gray-400 w-1/4 p-6 flex items-center">
                <p className="text-center">"Easily capture and manage your tasks anytime, from any device."</p>
            </div>
            <div className="border-x-1 border-gray-400 w-1/4 p-6 flex items-center">
                <p className="text-center">"Stay productive with a clean, fast, and user-friendly interface."</p>
            </div>
            <div className="border-x-1 border-gray-400 w-1/4 p-6 flex items-center">
                <p className="text-center">"Designed to simplify your busy life and keep you on track."</p>
            </div>
            <div className="border-x-1 border-gray-400 w-1/4 p-6 flex items-center">
                <p className="text-center">"From students to professionals — SkyList helps everyone stay organized effortlessly."</p>
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
            <div className="w-full  overflow-hidden ">
                <div className="flex w-500" ref={sliderRef}>
                    {content}
                    {content}
                </div>
            </div>
        </>
    )
}