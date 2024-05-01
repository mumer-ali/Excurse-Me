import React from "react";
import { useState, useRef } from "react";
import logo from "../assets/logo.png";

export default function NavBar({ active }) {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const dashRef = useRef(null);

  const handleDialogClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  document.addEventListener("click", (event) => {
    if (event.target != dashRef.current) {
      setDialogVisible(false);
    }
  });

  return (
    <>
      <nav className="px-2 sm:px-6 lg:px-8 z-10">
        {/* Mobile Device Start*/}
        <div>
          <div className="flex justify-between items-center select-none h-14 md:hidden">
            <div>
              <button className="pl-3">
                <i
                  className="fa-solid fa-bars fa-lg text-white text-lg"
                  ref={dashRef}
                  onClick={handleDialogClick}
                ></i>
              </button>
            </div>
            <div>
              <div className="flex text-white text-lg font-mono hover:scale-110 transform transition-transform duration-500 justify-end h-7 pr-3">
                <img src={logo} alt="My Cart" />
                <p>ExcurseMe</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              isDialogVisible ? "block" : "hidden"
            } p-2 bg-white text-gray-600 absolute left-0`}
          >
            <div>
              <a
                href="#"
                className=" hover:bg-gray-600 hover:text-white block rounded-md p-2 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:bg-gray-600 hover:text-white block rounded-md p-2 font-medium"
              >
                Explore
              </a>
              <a
                href="#"
                className="hover:bg-gray-600 hover:text-white block rounded-md p-2 font-medium"
              >
                Travel
              </a>
              <a
                href="#"
                className="hover:bg-gray-600 hover:text-white block rounded-md p-2 font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:bg-gray-600 hover:text-white block rounded-md p-2 font-medium"
              >
                Pricing
              </a>
            </div>
            <hr className="border-gray-400 border-1" />
            <div>
              <div className="flex justify-center items-center py-2">
                <button className="h-9 w-20 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
                  Log In
                </button>
                <button className="h-9 w-20 text-white rounded-md bg-lightorange transition duration-500 ease-in-out transform hover:-translate-y-1">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Device End */}
        {/* Other Devices Start */}
        <div className="hidden md:block">
          <div className="flex items-center p-4 select-none justify-around">
            <div className="text-white text-lg font-mono flex justify-around hover:scale-110 transform transition-transform duration-500">
              <img src={logo} alt="logo" className="h-7" />
              <p>ExcurseMe</p>
            </div>
            <div>
              <ul className="flex space-x-1">
                <li
                  className={`text-white p-2 ${
                    active === "home"
                      ? ""
                      : "hover:bg-white transition delay-100 hover:bg-opacity-25 rounded-md"
                  }`}
                >
                  <a href="#">Home</a>
                  {active === "home" && (
                    <div className="border-b-4 border-lightorange rounded-full"></div>
                  )}
                </li>
                <li
                  className={`text-white p-2 ${
                    active === "explore"
                      ? ""
                      : "hover:bg-white transition delay-100 hover:bg-opacity-25 rounded-md"
                  }`}
                >
                  <a href="#">Explore</a>
                  {active === "explore" && (
                    <div className="border-b-4 border-lightorange rounded-full"></div>
                  )}
                </li>
                <li
                  className={`text-white p-2 ${
                    active === "travel"
                      ? ""
                      : "hover:bg-white transition delay-100 hover:bg-opacity-25 rounded-md"
                  }`}
                >
                  <a href="#">Travel</a>
                  {active === "travel" && (
                    <div className="border-b-4 border-lightorange rounded-full"></div>
                  )}
                </li>
                <li
                  className={`text-white p-2 ${
                    active === "blog"
                      ? ""
                      : "hover:bg-white transition delay-100 hover:bg-opacity-25 rounded-md"
                  }`}
                >
                  <a href="#">Blog</a>
                  {active === "blog" && (
                    <div className="border-b-4 border-lightorange rounded-full"></div>
                  )}
                </li>
                <li
                  className={`text-white p-2 ${
                    active === "pricing"
                      ? ""
                      : "hover:bg-white transition delay-100 hover:bg-opacity-25 rounded-md"
                  }`}
                >
                  <a href="#">Pricing</a>
                  {active === "pricing" && (
                    <div className="border-b-4 border-lightorange rounded-full"></div>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <button className="h-9 w-20 text-white rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
                Log In
              </button>
              <button className="h-9 w-20 text-white rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 bg-lightorange">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* Other Devices End */}
      </nav>
    </>
  );
}