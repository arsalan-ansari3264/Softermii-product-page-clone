import React from "react";

// Importing images and icons used in the contact form and certificate section
import {
  emailWhite,
  phoneWhite,
  markerWhite,
  contacFormMap,
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
  certificate7,
} from "../../assets";

// Array containing certificate images to be displayed
const certiData = [
  { img: certificate1 },
  { img: certificate2 },
  { img: certificate3 },
  { img: certificate4 },
  { img: certificate5 },
  { img: certificate6 },
  { img: certificate7 },
];

// Main ContactUs component
const ContactUs = () => {
  return (
    <>
      z{/* Main section wrapper with responsive padding */}
      <section className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40 ">
        <div>
          {/* Title and introductory text for the Contact Us section */}
          <h2 className="max-w-[1280px] mx-auto text-3xl font-bold leading-[120%] pb-4 text-center sm:text-4xl md:text-5xl md:leading-[120%] sm:leading-[120%]">
            Don’t dream for <span className="text-primary">success</span>,
            contact us
          </h2>
          <p className="max-w-[640px] mx-auto text-center">
            Leave an inquiry or contact us via email and phone. We will contact
            you within 24 hours during work days.
          </p>
        </div>

        {/* Contact form and contact details container */}
        <div className="max-w-5xl p-4 mx-auto mt-12 lg:rounded-3xl lg:shadow-4xl">
          <div className="grid grid-cols-12 gap-6">
            {/* Left column with contact information and office addresses */}
            <div className="relative order-last p-8 text-white lg:order-1 lg:col-span-5 col-span-full bg-contactGradient rounded-2xl">
              {/* Contact map image positioned at the bottom-right */}
              <div className="absolute bottom-0 right-0">
                <img src={contacFormMap} alt="contact form map" />
              </div>
              {/* Contact details with icons */}
              <p className="flex items-center gap-2 mb-2 font-bold">
                <span>
                  <img src={emailWhite} alt="email icon" />
                </span>
                info@softermii.com
              </p>
              <p className="flex items-center gap-2 mb-2 font-bold">
                <span>
                  <img src={phoneWhite} alt="phone icon" />
                </span>
                +1 (424) 533-5520
              </p>
              {/* Multiple locations listed with addresses */}
              <p className="flex items-center gap-2 mb-4">
                <span>
                  <img src={markerWhite} alt="land mark icon" />
                </span>
                Los Angeles, USA
                <br />
                10828 Fruitland Dr. Studio City, CA 91604
              </p>
              <p className="mb-4">
                Austin, USA
                <br />
                701 Brazos St, Austin, TX 78701
              </p>
              <p className="mb-4">
                Tel Aviv, IL
                <br />
                31, Rothschild Blvd
              </p>
              <p className="mb-4">
                Warsaw, PL
                <br />
                Przeskok 2
              </p>
              <p className="mb-4">
                London, UK
                <br />
                6, The Marlins, Northwood
              </p>
              <p className="mb-4">
                Munich, DE
                <br />
                3, Stahlgruberring
              </p>
              <p className="mb-4">
                Vienna, AT
                <br />
                Palmerstraße 6-8, 2351 Wiener Neudorf
              </p>
              <p className="mb-4">
                Kyiv, Ukraine
                <br />
                154, Borshchahivska Street
              </p>
            </div>

            {/* Right column with contact form */}
            <div className="order-1 px-2 lg:order-2 lg:px-8 lg:col-span-7 col-span-full py-9">
              <form className="space-y-4 text-black">
                {/* Form fields for contact details */}
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {/* Contact number and inquiry type dropdown */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <input
                      type="tel"
                      placeholder="081234 56789"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="flex-1">
                    <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Type of inquiry</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                </div>
                {/* Message textarea */}
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={4}
                ></textarea>

                {/* Checkbox for privacy policy */}
                <div className="flex items-start">
                  <label className="relative flex items-center mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 transition-all border rounded shadow appearance-none cursor-pointer peer hover:shadow-md border-slate-300 checked:bg-orange-500 checked:border-orange-500"
                    />
                    {/* Checkbox icon when checked */}
                    <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <div className="pl-3 text-sm text-black">
                    By sending this form I confirm that I have read and accepted
                    the Softermii Privacy Policy. Your personal information will
                    not be published and shared with third parties.
                  </div>
                </div>

                {/* Checkbox for receiving email insights */}
                <div className="flex items-start">
                  <label className="relative flex items-center mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 transition-all border rounded shadow appearance-none cursor-pointer peer hover:shadow-md border-slate-300 checked:bg-orange-500 checked:border-orange-500"
                    />
                    <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <div className="pl-3 text-sm text-black">
                    I would like to receive emails with industry trends and
                    insights
                  </div>
                </div>

                {/* Submit button */}
                <div className="w-full lg:w-auto md:flex text-nowrap float-end">
                  <button className=" w-full px-10 py-3 lg:mt-16  mt-12 text-white bg-gradient-to-r from-[#f3913b] to-[#f56627] rounded-xl shadow-lg hover:from-[#e65100] hover:to-[#e65100]">
                    Submit
                  </button>
                </div>
              </form>
            </div>



            
          </div>
        </div>

        {/* Section displaying certificates */}
        <div className="flex flex-wrap items-center justify-center order-2 max-w-screen-lg gap-8 px-2 mx-auto mt-16 lg:gap-12 lg:px-8 certificate">
          {certiData.map((item, index) => (
            <img src={item.img} alt="certificate" key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
