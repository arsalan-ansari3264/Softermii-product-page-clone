import React, { useState } from "react";
import datas from "./Data";
import { arrowDown, arrowUp } from "../../assets";

const FaqComponent = () => {
  // State to track the active question
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40"> 
        <div>
          <h2 className="max-w-[800px] mx-auto text-3xl font-bold leading-[120%]  text-center sm:text-4xl  md:text-5xl md:leading-[120%] pb-16 sm:leading-[120%]">
            What questions do you have?
          </h2>

          <div className="grid gap-6 faqcomponent">
            {datas.map((item, index) => (
              <div
                className="relative transition-all duration-300 ease-in-out faq__spoiler bg-faqBackground rounded-faqBorderRadius-lg"
                onClick={() => toggleAnswer(index)}
              >
                <h3 
                  className="text-xl md:text-2xl  lg:p-8 p-8 pr-20 lg:pr-14 leading-[1.5] relative cursor-pointer font-bold font-sans text-secondary"
                >
                  {item.question}
                  <div className="absolute right-10 top-[40%] arrow">
                    {activeIndex === index ? (
                      <img src={arrowUp} alt="arrow up" />
                    ) : (
                      <img src={arrowDown} alt="arrow down" />
                    )}
                  </div>
                </h3>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden faq__answer px-10  leading-[1.5] ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="relative text ">
                    {activeIndex === index && (
                      <>
                        <span className="faq-class"></span>
                        <p className="pb-8 max-w-4xl pl-7 leading-[150%]">
                          {item.answer}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqComponent;
