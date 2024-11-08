
import React from "react";

import {
  monitorOrange,
  phone2Orange,
  terminalOrange,
  transformOrange,
  coding1Orange,
  design1Orange,
  ellipseOrange,
  ellipseWhite,
} from "../../assets";

const services = [
  { id: 1, name: "Web Development", icon: monitorOrange },
  { id: 2, name: "Mobile Development", icon: phone2Orange },
  { id: 3, name: "MVP Development", icon: terminalOrange },
  { id: 4, name: "UI/UX Design", icon: transformOrange },
  { id: 5, name: "Product Development", icon: coding1Orange },
  { id: 6, name: "Product Design", icon: design1Orange },
];

const Section7 = () => {
  return (
    <section className="px-4 bg-[#F7F8F9] py-16  md:px-20  md:pt-32 sm:px-12 lg:px-20 xl:px-40">
      <h2 className="max-w-[885px] pb-[98px] mx-auto  font-bold leading-[120%]  text-center text-4xl  md:text-5xl md:leading-[120%]  sm:leading-[120%]">
        We Offer Product Management Consulting for any Mix of Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-[auto,1fr] gap-8 ">
        <div className="textArea">
          <ul className="grid md:grid-cols-2 grid-cols-1  gap-x-14 lg:gap-y-[60px] gap-y-[30px]">
            {services.map((service) => (
              <>
                <li
                  className="flex flex-row items-center gap-6 "
                  key={service.id}
                >
                  <div className="bg-[#ffead9] flex h-16 w-16 rounded-lg justify-center items-center shrink-0 mb-6">
                    <img src={service.icon} alt={service.name} />
                  </div>
                  <p className=" text-[24px]  leading-[1.5] text-[#22222a] font-montserrat font-bold pb-3">
                    {service.name}
                  </p>
                </li>
              </>
            ))}
          </ul>
        </div>
        {/* Background Circles */}
        <div className="relative imageArea">
          <div className="absolute hidden lg:block  top-[-21%] left-[82%]">
            <img
              src={ellipseOrange}
              alt="ellipse orange"
              className="h-[117px] w-[117px]"
            />
          </div>
          <div className=" absolute hidden lg:block top-0 left-[10%]">
            <img
              src={ellipseOrange}
              alt="ellipse orange"
              className="h-[226px] w-[226px]"
            />
          </div>
          <div className="h-[126px] w-[126px]  hidden lg:block absolute top-[68%] left-[98%]">
            <img
              src={ellipseWhite}
              alt="ellipse white"
              className="h-[126px] w-[126px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
