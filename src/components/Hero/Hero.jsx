import React from "react";

import { heroimg, ellipseOrange, ellipseWhite } from "../../assets";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse  items-center justify-center md:flex-row  min-h-[110vh] sm:px-12 lg:px-20 xl:px-40 bg-hero-gradient">
        <div className=" flex flex-col items-start lg:min-h-[90vh] w-full md:w-1/2 lg:w-[70%] py-12 md:py-8 px-5 lg:px-0 ">
        
          <h1 className="font-bold text-secondary text-4xl md:text-5xl lg:text-[64px] pb-4 md:pb-6 leading-tight md:leading-[120%]">
            Product Management Consulting & Ownership Services
          </h1>
          <p className="text-[#606066] text-sm md:text-base pb-8 md:pb-16">
            A balanced view across all the different aspects of the product.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-[10px] border border-[#e1e1e1] shadow-lg p-2 w-full md:w-auto space-y-4 md:space-y-0 md:space-x-2">
            <input
              type="text"
              placeholder="Your business email *"
              className="w-full px-4 py-2 border-none outline-none md:py-0 placeholder:font-medium md:w-auto"
            />
            <button className="text-nowrap w-full md:w-auto px-6 py-2 shadow-3xl text-white bg-gradient-to-r from-[#f3913b] to-[#f56627] rounded-xl hover:from-[#e65100] hover:to-[#e65100]">
              Empower your business
            </button>
          </div>
        </div>

        <div className="flex  flex-col items-center md:items-start justify-center w-full md:w-1/2 h-[70vh]  md:h-screen lg:mt-10 mt-0  overflow-x-hidden overscroll-none px-0">
          <div className="relative h-full w-full max-w-sm md:max-w-none md:h-[80vh] flex justify-center ">
            <img
              src={heroimg}
              alt="hero image"
              className=" md:mt-[50%] md:translate-y-[-40%] w-4/5 md:w-auto object-contain"
            />

            <div className="absolute pointer-events-none top-10 md:top-20 left-10 md:left-20">
              <img src={ellipseOrange} alt="circle" className="w-10 md:w-14" />
            </div>
            <div className="absolute pointer-events-none top-5 md:top-10 right-10 md:right-20">
              <img src={ellipseOrange} alt="circle" className="w-4 md:w-6" />
            </div>
            <div className="absolute pointer-events-none lg:-bottom-6 bottom-5 right-10 md:right-20 blur-md">
              <img src={ellipseOrange} alt="circle" className="z-10 w-24 md:w-32" />
            </div>
            <div className="absolute pointer-events-none -right-20 md:-right-28 top-24 md:top-44">
              <img src={ellipseWhite} alt="circle" className="w-20 md:w-28" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
