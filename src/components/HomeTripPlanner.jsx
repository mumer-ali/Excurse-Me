import React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function HomeTripPlanner({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {/* Mobile devices start */}
      <div className="sm:hidden">
        <div className="m-5 text-gray-800 mt-12 ml-10 select-none outline-none">
          <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
            Trip Planners
          </h3>
          <p className="text-sm pt-4 font-thin">
            20 years from now you will be more disappointed by the things that
            you didn't do. Stop regretting and start travelling, start throwing
            off the bowlines.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          {images.slice(0, 3).map((image, index) => (
            <div key={index}>
              <Card
                className="flex-none h-64 w-52 mt-8 mr-5 ml-3 mb-0 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:-translate-y-10 transform transition-transform duration-500 delay-0 relative z-10"
                style={{
                  backgroundImage: `url(${images[index][0]})`,
                }}
              ></Card>
              <div className="flex justify-between font-thin text-xs pt-2">
                <p>Guided Tour</p>
                <p>
                  <i className="fas fa-euro-sign mr-1"></i>
                  {`${Math.round(parseInt(images[index][2]) / 7)}/Day`}
                </p>
              </div>
              <p className="font-serif text-sm pt-1">{`${
                images[index][1].split(",")[0]
              } City Tour`}</p>
              <div className="flex justify-between text-xs pt-1">
                <p>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </p>
                <p>7 Days Tour</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="relative mt-8">
            <div className="h-6 w-6 bg-gray-600 absolute -top-3 -left-3"></div>
            <button className="h-9 w-32 text-white rounded-md bg-lightorange text-xs relative z-10">
              View all tour plans
            </button>
            <div className="h-6 w-6 bg-gray-900 absolute -bottom-3 -right-3"></div>
          </div>
        </div>
      </div>
      {/* Mobile devices end */}
      {/* Middle devices start */}
      <div className="hidden sm:block lg:hidden">
        <div className="m-5 text-gray-800 mt-12 ml-10 select-none outline-none mb-0">
          <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
            Trip Planners
          </h3>
          <p className="text-sm pt-4 font-thin">
            20 years from now you will be more disappointed by the things that
            you didn't do. Stop regretting and start travelling, start throwing
            off the bowlines.
          </p>
        </div>
        <div className="sm:flex md:hidden justify-center items-center overflow-hidden">
          {images.slice(0, 2).map((image, index) => (
            <div key={index}>
              <Card
                className="flex-none h-64 w-52 mt-16 mr-5 ml-3 mb-0 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:-translate-y-10 transform transition-transform duration-500 delay-0 relative z-10"
                style={{
                  backgroundImage: `url(${images[index][0]})`,
                }}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              ></Card>
              <div
                className={`h-20 w-52 ml-3 relative -top-10 ${
                  hoveredIndex === index ? "visible" : "invisible"
                }`}
              >
                <div className="flex justify-between font-thin text-xs pt-2">
                  <p>Guided Tour</p>
                  <p>
                    <i className="fas fa-euro-sign mr-1"></i>
                    {`${Math.round(parseInt(images[index][2]) / 7)}/Day`}
                  </p>
                </div>
                <p className="font-serif text-sm pt-1">{`${
                  images[index][1].split(",")[0]
                } City Tour`}</p>
                <div className="flex justify-between text-xs pt-1">
                  <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </p>
                  <p>7 Days Tour</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden md:flex justify-center items-center overflow-hidden mt-4">
          {images.slice(0, 3).map((image, index) => (
            <div key={index}>
              <Card
                className="flex-none h-64 w-52 mt-16 mr-5 ml-3 mb-0 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:-translate-y-10 transform transition-transform duration-500 delay-0 relative z-10"
                style={{
                  backgroundImage: `url(${images[index][0]})`,
                }}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              ></Card>
              <div
                className={`h-20 w-52 ml-3 relative -top-10 ${
                  hoveredIndex === index ? "visible" : "invisible"
                }`}
              >
                <div className="flex justify-between font-thin text-xs pt-2">
                  <p>Guided Tour</p>
                  <p>
                    <i className="fas fa-euro-sign mr-1"></i>
                    {`${Math.round(parseInt(images[index][2]) / 7)}/Day`}
                  </p>
                </div>
                <p className="font-serif text-sm pt-1">{`${
                  images[index][1].split(",")[0]
                } City Tour`}</p>
                <div className="flex justify-between text-xs pt-1">
                  <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </p>
                  <p>7 Days Tour</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="relative mt-2">
            <div className="h-6 w-6 bg-gray-600 absolute -top-3 -left-3"></div>
            <button className="h-9 w-32 text-white rounded-md bg-lightorange text-xs relative z-10">
              View all tour plans
            </button>
            <div className="h-6 w-6 bg-gray-900 absolute -bottom-3 -right-3"></div>
          </div>
        </div>
      </div>
      {/* Middle devices end */}
      {/* Other devices start */}
      <div className="hidden lg:block">
        <div className="mt-12 flex justify-start items-center select-none outline-none">
          <div className="lg:w-[45vw] xl:w-[35vw] flex flex-col justify-center items-center">
            <div className="flex flex-col items-start justify-center text-gray-800">
              <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
                Trip Planners
              </h3>
              <p className="text-xs pt-4 font-thin">
                20 years from now you will be more
                <br />
                disappointed by the things that you didn't do.
                <br />
                Stop regretting and start travelling,
                <br />
                start throwing off the bowlines.
              </p>
            </div>
            <div className="relative mt-8">
              <div className="h-6 w-6 bg-gray-600 absolute -top-3 -left-3"></div>
              <button className="h-9 w-32 text-white rounded-md bg-lightorange text-xs relative z-10">
                View all tour plans
              </button>
              <div className="h-6 w-6 bg-gray-900 absolute -bottom-3 -right-3"></div>
            </div>
          </div>
          <div className="flex justify-start items-center overflow-hidden">
            {images.map((image, index) => (
              <div key={index}>
                <Card
                  className="flex-none h-64 w-52 mt-16 mr-5 ml-3 mb-0 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:-translate-y-10 transform transition-transform duration-500 delay-0 relative z-10"
                  style={{
                    backgroundImage: `url(${images[index][0]})`,
                  }}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                ></Card>
                <div
                  className={`h-20 w-52 ml-3 relative -top-10 ${
                    hoveredIndex === index ? "visible" : "invisible"
                  }`}
                >
                  <div className="flex justify-between font-thin text-xs pt-2">
                    <p>Guided Tour</p>
                    <p>
                      <i className="fas fa-euro-sign mr-1"></i>
                      {`${Math.round(parseInt(images[index][2]) / 7)}/Day`}
                    </p>
                  </div>
                  <p className="font-serif text-sm pt-1">{`${
                    images[index][1].split(",")[0]
                  } City Tour`}</p>
                  <div className="flex justify-between text-xs pt-1">
                    <p>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </p>
                    <p>7 Days Tour</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Other devices end */}
    </>
  );
}