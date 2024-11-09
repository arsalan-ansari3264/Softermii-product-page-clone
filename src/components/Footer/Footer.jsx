import { useState } from "react";
import {
  blackSoftermiiLogo,
  arrowDown,
  arrowUp,
  dmcaBadge,
} from "../../assets";
import { footerLinks, footerNavLinks, iconsTab, dropdownLinks } from "./data";
function Footer() {
  const [active, setActive] = useState(null);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleActive = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <footer className="bg-faqBackground font-primary">
        <div className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40 ">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col items-center justify-center w-full gap-8 py-4 lg:items-start lg:justify-start lg:w-1/4 md:p-0 ">
              <div className="flex items-center justify-between w-full">
                <img
                  src={blackSoftermiiLogo}
                  alt="footer_logo"
                  className="w-[18rem] "
                />
                <button onClick={scrollToTop}>
                  <img src={arrowUp} alt="back to top" />
                </button>
              </div>
              <p className="text-[15px] hidden lg:block  font-medium text-secondary">
                10828 Fruitland Dr Studio City, CA 91604
              </p>
              <p className="text-[15px] hidden lg:block font-semibold text-black">
                +1 (424) 533-5520
              </p>
              <p className="text-[15px] hidden lg:block font-semibold text-black]">
                info@softermii.com
              </p>
              {/* socials */}
              <div className="flex gap-3 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 text-2xl rounded-full hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      <img src={icon} alt="social links" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* link side */}
            <div className="relative hidden w-3/4 grid-cols-3 lg:grid gap-x-6 gap-y-10 ">
              {footerNavLinks.map((item, index) => (
                <div
                  className="flex flex-col gap-3 font-semibold text-secondary"
                  key={index}
                >
                  <p className="cursor-pointer hover:text-primary">
                    {item.title[0]}
                  </p>
                  <p className="cursor-pointer hover:text-primary">
                    {item.title[1]}
                  </p>
                </div>
              ))}
              <div className=" w-full h-[1px] bg-gray-300 col-span-full"></div>

              {/* footer Links  */}
              {footerLinks.map((data, index) => (
                <div
                  className="flex flex-col gap-3 font-semibold text-secondary"
                  key={index}
                >
                  <h3 className="text-gray-500 ">{data.heading}</h3>
                  {data.links.map((link, i) => (
                    <p className="cursor-pointer hover:text-primary" key={i}>
                      {link}
                    </p>
                  ))}
                </div>
              ))}

              {/* dropdownLinks */}
              {dropdownLinks.map((data, index) => (
                <div
                  className="flex flex-col gap-3 font-semibold text-secondary"
                  key={index}
                >
                  <h3
                    className="relative flex items-center justify-between text-gray-500"
                    onClick={() => handleActive(index)}
                  >
                    {data.heading}

                    {active === index ? (
                      <img src={arrowUp} alt="arrow" />
                    ) : (
                      <img src={arrowDown} alt="arrow" />
                    )}
                  </h3>
                  {data.links.map((link, i) => (
                    <p
                      className={`cursor-pointer hover:text-primary ${
                        active === index ? "block" : "hidden"
                      }  `}
                      key={i}
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* footer end  copyright section */}
        <div className="flex flex-col items-center justify-between gap-4 px-16 py-4 border-t border-gray-200 lg:flex-row">
          <div className="flex flex-col items-center order-2 gap-4 lg:order-1 lg:flex-row">
            <p>© 2024 — Softermii Inc. All rights reserved.</p>
            <img src={dmcaBadge} alt="protected" className="w-40" />
          </div>
          <div className="flex flex-wrap items-center justify-center order-1 gap-6 font-semibold lg:order-2 text-nowrap">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Web Content Accessibility Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
