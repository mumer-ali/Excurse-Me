import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      {/* Other devices start */}
      <div className="hidden md:block bg-gray-800">
        <div>
          <div className="mt-44 flex flex-col justify-center items-center select-none outline-none z-0">
            <div className="bg-white flex justify-start items-center rounded-2xl p-10 transform -translate-y-1/2 z-10 border-gray-200 border-2">
              <div className="pr-12">
                <p className="font-serif text-gray-500 text-4xl">
                  Our Newsletter
                </p>
              </div>
              <div className="pl-12">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-xs font-thin"
                >
                  Email
                </label>
                <div className="flex pt-2">
                  <input
                    type="email"
                    name="email"
                    className="h-9 w-64 outline-none px-4 bg-[#FFDABE] rounded-md mr-4 text-white placeholder-white font-thin text-sm select-none"
                    placeholder="Your Email"
                  />
                  <button className="h-9 w-20 text-white rounded-md bg-lightorange text-xs mr-6">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex justify-around items-start  select-none font-serif">
          <div>
            <div className="flex text-white text-lg font-mono h-7 justify-start pl-0">
              <img src={logo} alt="My Cart" />
              <p>ExcurseMe</p>
            </div>
            <p className="text-[0.5rem] text-white pl-3">
              Copyright <i class="fa-regular fa-copyright"></i> ExcurseMe 2024
              All rights reserved
            </p>
          </div>
          <div className="text-white text-xs font-thin">
            <p className="font-bold pb-2 text-base">Menu</p>
            <p className="pb-1">Home</p>
            <p className="pb-1">Explore</p>
            <p className="pb-1">Travel</p>
            <p className="pb-1">Blog</p>
            <p className="pb-1">Pricing</p>
          </div>
          <div className="text-white text-xs font-thin">
            <p className="font-bold pb-2 text-base">Information</p>
            <p className="pb-1">Destinations</p>
            <p className="pb-1">Supports</p>
            <p className="pb-1">Terms & Conditions</p>
            <p className="pb-1">Privacy</p>
          </div>
          <div className="text-white text-xs font-thin">
            <p className="font-bold pb-2 text-base">Contact Info</p>
            <p className="pb-1">+123 456 789</p>
            <p className="pb-1">info@excurseme.com</p>
            <p className="pb-1">1234, New York, USA</p>
          </div>
          <div className="text-white text-xs font-thin">
            <p className="font-bold pb-2 text-base">Follow us on</p>
            <p>
              <i className="fa-brands fa-instagram pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-facebook pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-pinterest pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-twitter pr-2 cursor-pointer"></i>
            </p>
          </div>
        </div>
      </div>
      {/* Other devices end */}
      {/* Mobile devices start */}
      <div className="md:hidden bg-gray-800">
        <div className="mt-44 select-none outline-none z-0">
          <div className="flex flex-col justify-center items-center rounded-2xl p-10 transform -translate-y-1/2 z-10 border-gray-200 border-2 bg-white">
            <div>
              <p className="font-serif text-gray-500 text-4xl">
                Our Newsletter
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 text-xs font-thin"
              >
                Email
              </label>
              <div className="pt-2 flex flex-col justify-center items-center">
                <input
                  type="email"
                  name="email"
                  className="h-9 w-64 outline-none px-4 bg-[#FFDABE] rounded-md text-white placeholder-white font-thin text-sm select-none"
                  placeholder="Your Email"
                />
                <button className="h-9 w-64 text-white rounded-md bg-lightorange text-xs mt-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex-col select-none font-serif">
          <div className="-ml-3">
            <div className="flex text-white text-lg font-mono h-7 justify-start pl-0">
              <img src={logo} alt="My Cart" />
              <p>ExcurseMe</p>
            </div>
            <p className="text-[0.5rem] text-white pl-3">
              Copyright <i class="fa-regular fa-copyright"></i> ExcurseMe 2024
              All rights reserved
            </p>
          </div>
          <div className="text-white text-xs font-thin mt-8">
            <p className="font-bold pb-2 text-base">Menu</p>
            <p className="pb-1">Home</p>
            <p className="pb-1">Explore</p>
            <p className="pb-1">Travel</p>
            <p className="pb-1">Blog</p>
            <p className="pb-1">Pricing</p>
          </div>
          <div className="text-white text-xs font-thin mt-8">
            <p className="font-bold pb-2 text-base">Information</p>
            <p className="pb-1">Destinations</p>
            <p className="pb-1">Supports</p>
            <p className="pb-1">Terms & Conditions</p>
            <p className="pb-1">Privacy</p>
          </div>
          <div className="text-white text-xs font-thin mt-8">
            <p className="font-bold pb-2 text-base">Contact Info</p>
            <p className="pb-1">+123 456 789</p>
            <p className="pb-1">info@excurseme.com</p>
            <p className="pb-1">1234, New York, USA</p>
          </div>
          <div className="text-white text-xs font-thin mt-8">
            <p className="font-bold pb-2 text-base">Follow us on</p>
            <p>
              <i className="fa-brands fa-instagram pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-facebook pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-pinterest pr-2 cursor-pointer"></i>
              <i className="fa-brands fa-twitter pr-2 cursor-pointer"></i>
            </p>
          </div>
        </div>
      </div>
      {/* Mobile devices end */}
    </>
  );
}
