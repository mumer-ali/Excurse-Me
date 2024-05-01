import React from "react";
import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomeTravellerExp({ reviews }) {
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
            Traveller's Experience
          </h3>
          <p className="text-sm pt-4 font-thin">
            Here are some awesome feedback from our travellers
          </p>
        </div>
        <div
          className="flex overflow-hidden mt-4 pl-10 py-10"
          ref={cardContainerRef}
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="h-80 w-72 md:h-64 md:w-96 flex-none mr-6 shad rounded-xl bg-cover bg-center bg-no-repeat select-none outline-none cursor-default flex flex-col justify-between bg-gray-100 border-0 z-0"
            >
              <CardHeader className="p-0">
                <Avatar className="h-16 w-16 p-0 relative z-10 -top-6 left-6">
                  <AvatarImage src={review[0]} />
                  <AvatarFallback className="bg-gray-400 text-white text-xl">
                    {review[1]
                      .split(" ")
                      .map((name) => name.charAt(0))
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="px-4 text-xs font-thin text-gray-800 text-justify">
                <p>
                  But I must explain to you how all this mistaken idea
                  of denouncing pleasure and praising pain was born and I will
                  give you a complete account of the system and expound the
                  actual teachings of the great explorer of the truth, the
                  master- builder of human happiness.
                </p>
              </CardContent>
              <CardFooter className="px-4 mt-0">
                <div className="flex flex-col">
                  <p className="text-xs">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </p>
                  <p className="font-serif text-md text-gray-800">
                    {review[1]}
                  </p>
                  <p className="font-thin text-xs text-gray-800">{review[2]}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-end text-white mb-3 mt-12 mr-12 md:mr-16 lg:mr-32">
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
      </div>
    </>
  );
}