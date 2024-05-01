import React from "react";

export default function HomeText() {
  return (
    <>
      {/* Mobile device start */}
      <div className="sm:hidden">
        <div className="text-white font-serif select-none pl-2 pt-10 m-2">
          <h1 className="text-2xl ">
            Start your unforgettable
            <br />
            jouney with us.
          </h1>
          <p className=" text-xs pt-2">
            The best travel for your journey begins now
          </p>
        </div>
      </div>
      {/* Mobile device end */}
      {/* Medium device start */}
      <div className="hidden sm:block md:hidden">
        <div className="text-white font-serif select-none pl-5 m-2">
          <h1 className="text-3xl pt-8">
            Start your unforgettable
            <br />
            jouney with us.
          </h1>
          <p className=" text-sm pt-2">
            The best travel for your journey begins now
          </p>
        </div>
      </div>
      {/* Medium device end */}
      {/* Other device start */}
      <div className="hidden md:block">
        <div className="text-white font-serif select-none pl-7 m-3">
          <h1 className="text-6xl pt-10">
            Start your unforgettable
            <br />
            jouney with us.
          </h1>
          <p className=" text-xl pt-2">
            The best travel for your journey begins now
          </p>
        </div>
      </div>
      {/* Other device end */}
    </>
  );
}