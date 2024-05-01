import React from "react";
import { useRef } from "react";
import { Card, CardFooter, CardContent } from "@/components/ui/card";

export default function HomeSpecialOff({ images }) {
  const cardContainerRef = useRef(null);
  const scrollContainer = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    cardContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mt-12 bg-white">
        <div className="flex justify-end mr-10">
          <div className="m-5 text-gray-800 mt-0 ml-12 select-none outline-none flex flex-col justify-center items-end">
            <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
              Special Offer
            </h3>
            <p className="text-sm pt-4 font-thin">
              Check out our special offer and discounts
            </p>
          </div>
        </div>
        <div className="flex justify-start text-white mb-8 mt-5 ml-12 md:ml-16 lg:ml-32">
          <button
            className="bg-gray-800 rounded-md select-none outline-none h-8 w-9 mr-2 cursor-pointer shadow-sm"
            onClick={() => scrollContainer("left")}
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <br />
          <button
            className="bg-lightorange rounded-md select-none outline-none h-8 w-9 ml-2 cursor-pointer shadow-sm"
            onClick={() => scrollContainer("right")}
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <div className="flex overflow-hidden mt-5" ref={cardContainerRef}>
          {images.map((image, index) => (
            <Card
              key={index}
              className="flex-none h-96 w-72 m-5 ml-8 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat select-none outline-none cursor-pointer hover:scale-110 transform transition-transform duration-1000 delay-0 flex flex-col justify-between"
            >
              <CardContent className="p-0 rounded-t-2xl">
                <img
                  src={images[index][0]}
                  alt={images[index][1]}
                  className="bg-cover bg-center bg-no-repeat h-56 w-72 rounded-t-2xl"
                />
              </CardContent>
              <CardFooter className="bg-lightestorange h-40 rounded-b-2xl flex flex-col items-start">
                <div className="text-gray-600 font-serif mt-4">
                  <p className="text-md">{images[index][1]}</p>
                  <p className="text-xs">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </p>
                  <p className="text-[9px] text-gray-500">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passing and
                    going through the cities of world in classical literature.
                  </p>
                </div>
                <div className="flex">
                  <div className="flex items-center absolute bottom-0 mb-5">
                    <p className="text-gray-500 font-thin text-xs mr-2">From</p>
                    <p className="text-lightorange font-semibold font-serif flex items-center">
                      <i className="fas fa-euro-sign mr-1"></i>
                      {images[index][2]}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="h-9 w-20 text-white rounded-md bg-lightorange text-xs absolute right-0 mr-6">
                      DETAILS
                    </button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}