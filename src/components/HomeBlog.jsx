import React from "react";
import { Card } from "@/components/ui/card";

export default function HomeBlog({ image }) {
  return (
    <>
      <div className="mt-12 bg-white z-10 select-none">
        <div className="mr-5 text-gray-800 mt-8 ml-10 select-none outline-none">
          <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
            Our Blog
          </h3>
          <p className="text-sm pt-4 font-thin">
            An insight into the incredible experience in the world
          </p>
        </div>
        <div className="flex flex-col justify-center mt-16 md:flex md:justify-center md:flex-row md:items-center">
          <div className="flex justify-center items-center md:justify-end md:w-1/2">
            <Card
              className="flex-none h-96 w-80 m-5 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat select-none outline-none"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></Card>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center justify-center md:justify-normal text-gray-800 outline-none select-none">
              <div className="flex flex-col justify-center h-96 w-72">
                <h4 className="font-serif text-2xl">
                  Beautiful Italy
                  <br />
                  Let's travel
                </h4>
                <p className="text-sm pt-4 font-thin text-justify">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness. No one rejects, dislike, or avoids
                  plasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter
                  consequences that are extremly painful. Nor again is there
                  anyone who loves or pursues.
                </p>
                <p className="text-lightorange text-xs font-thin pt-4 cursor-pointer">Read More <i className="fa-solid fa-arrow-right ml-1"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}