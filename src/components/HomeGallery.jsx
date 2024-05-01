import React from "react";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export default function HomeGallery({ images }) {
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
      <div className="bg-white mt-12">
        <div className="m-5 text-gray-800 mt-12 ml-10 select-none outline-none">
          <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
            Destination Gallery
          </h3>
          <p className="text-sm pt-4 font-thin">Our photo gallery on tour</p>
        </div>
        <div className="flex justify-end text-white mb-8 mt-3 mr-12 md:mr-16 lg:mr-32">
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
        <div className="flex overflow-hidden pl-10 p-5" ref={cardContainerRef}>
          {images.map((image, index) => (
            <Card
              key={index}
              className={`flex-none h-72 w-52 mr-6 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat select-none outline-none cursor-pointer hover:scale-110 transform transition-transform duration-1000 delay-0 flex flex-col justify-between ${index % 2 == 0 ? "mt-8" : "mt-2"}`}
              style={{
                backgroundImage: `url(${images[index]})`,
              }}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}
