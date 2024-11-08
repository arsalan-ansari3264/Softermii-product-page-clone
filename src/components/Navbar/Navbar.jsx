import React, { useState } from "react";
import { softermiiLogo } from "../../assets";

const Menu = [
  {
    id: 1,
    name: "Services",
    link: "/services",
  },
  {
    id: 2,
    name: "Expertise",
    link: "/expertise",
  },
  {
    id: 3,
    name: "Calculator",
    link: "/calculator",
  },
  {
    id: 4,
    name: "Dedicated team",
    link: "/dedicated-team",
  },
  {
    id: 5,
    name: "Client & Insights",
    link: "/client-Insights",
  },
  {
    id: 6,
    name: "About Us",
    link: "/about-us",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [change, setChange] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setChange((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto font-semibold md:px-6 lg:px-8 xl:px-24">
        {/* Logo */}
        <div>
          <img
            src={softermiiLogo}
            alt="softermii logo"
            className="min-w-[180px] md:min-w-[220px] cursor-pointer"
          />
        </div>

        {/* Links (Hidden on small screens) */}
        <div className="hidden px-3 xl:gap-6 lg:gap-3 lg:flex text-nowrap">
          {Menu.map((data) => (
            <a
              href={data.link}
              key={data.id}
              className=" text-secondary cursor-pointer hover:text-[#606066]"
            >
              {data.name}
            </a>
          ))}
        </div>

        {/* Contact Us Button (Hidden on small screens) */}
        <div className="hidden lg:flex text-nowrap">
          <button className="px-4 py-2 text-white bg-gradient-to-r from-[#f3913b] to-[#f56627] rounded-md shadow-lg hover:from-[#e65100] hover:to-[#e65100]">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon (Visible on small screens) */}
        <div className="lg:hidden ">
          <button
            onClick={handleMenuToggle}
            className="text-gray-600 cursor-pointer focus:outline-none"
          >
            <div
              className={`menubar ${change ? "custom-transform1" : ""}`}
            ></div>
            <div className={`menubar ${change ? "opacity-0" : ""}`}></div>
            <div className={`menubar ${change ? "custom-transform2" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg lg:hidden ">
          <div className="absolute w-full h-screen px-6 py-4 space-y-4 bg-white">
            <div className="flex flex-col gap-4 font-semibold">
              {Menu.map((data) => (
                <a
                  href={data.link}
                  key={data.id}
                  className="text-secondary cursor-pointer hover:text-[#606066]"
                >
                  {data.name}
                </a>
              ))}
            </div>
            <button className=" px-4 py-2 mt-4 w-full text-white bg-gradient-to-r from-[#f3913b] to-[#f56627] rounded-md hover:from-[#e65100] hover:to-[#e65100]">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
