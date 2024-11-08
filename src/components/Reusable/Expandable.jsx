import React, { useState } from "react";
import { ellipseOrange, ellipseWhite } from "../../assets";

const Expandable = ({ listDatas, heading }) => {
  const [isShow, setIsShow] = useState(listDatas[0]?.id || null);

  const handleShow = (id) => {
    setIsShow((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="min-h-screen px-6 py-28 bg-textPrimary sm:px-12 lg:px-20 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative max-w-[1215px] mx-auto">
        <div className="relative left-container ">
          <h2 className="text-[32px] md:text-[48px] leading-[120%] text-secondary font-bold pb-10 max-w-[469px] text-left m-0">
            {heading}
          </h2>
          <div className="absolute hidden md:block top-[10%]  md:top-[20%]  left-[60%]  md:left-[67%] ">
            <img
              src={ellipseOrange}
              alt="ellipse orange"
              className="w-[70px] md:w-[117px]"
            />
          </div>
          <div className="absolute hidden md:block top-[20%] left-[10%] md:top-[280px] md:left-[15%] ">
            <img
              src={ellipseWhite}
              alt="ellipse white"
              className="w-[60px] md:w-[106px]"
            />
          </div>
          <div className="absolute hidden md:block top-[30%] left-[40%] md:top-[400px] md:left-[60%]">
            <img
              src={ellipseOrange}
              alt="ellipse orange"
              className="w-[40px] md:w-[61px]"
            />
          </div>
          <div className="absolute hidden md:block top-[40%] left-[0%] md:top-[550px] md:left-[1%]">
            <img
              src={ellipseOrange}
              alt="ellipse orange"
              className="w-[120px] md:w-[226px]"
            />
          </div>
        </div>

        <div className="right-container">
          <ul className="grid w-full grid-cols-1 gap-6 pl-4">
            {listDatas.map((listdata) => (
              <li
                className="transition-all duration-300 cursor-pointer open-list-item"
                key={listdata.id}
                onClick={() => handleShow(listdata.id)}
              >
                <div className="flex items-center gap-x-5">
                  <div className="flex items-center justify-center flex-shrink-0 text-xl font-semibold leading-relaxed text-white transition-all duration-500 ease-in-out rounded-full bg-primary w-9 h-9">
                    {listdata.id}
                  </div>
                  <p className="text-xl font-semibold leading-tight md:text-2xl text-secondary">
                    {listdata.heading}
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isShow === listdata.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4">
                    <p className="pb-4 leading-relaxed text-secondary">
                      {listdata.desc}
                    </p>
                    <p className="pb-4">
                      <strong>Deliverables:</strong>
                    </p>
                    <ul className="pl-8">
                      {listdata.Deliverables.map((del, index) => (
                        <li className="leading-relaxed list-disc" key={index}>
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expandable;
