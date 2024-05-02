// import React from "react";
// import { useRef, useState } from "react";
// import { Card, CardFooter, CardContent } from "@/components/ui/card";
// import { useSwipeable } from "react-swipeable";

// export default function HomePopDest({ images }) {
//   const cardContainerRef = useRef(null);
//   const [startX, setStartX] = useState(0);
//   const scrollContainer = (direction) => {
//     const scrollAmount = direction === "left" ? -300 : 300;
//     cardContainerRef.current.scrollBy({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => scrollContainer("left"),
//     onSwipedRight: () => scrollContainer("right"),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true
//   });
//   return (
//     <>
//       <div className="bg-white z-10 mt-12">
//         <div className="m-5 text-gray-800 mt-12 ml-10 select-none outline-none">
//           <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
//             Popular Destinations
//           </h3>
//           <p className="text-sm pt-4 font-thin">
//             Most popular destinations around the world, from historical places
//             to natural wonders
//           </p>
//         </div>
//         <div className="flex justify-end text-white mb-8 mt-5 mr-12 md:mr-16 lg:mr-32">
//           <button
//             className="bg-gray-800 rounded-md select-none outline-none h-8 w-9 mr-2 cursor-pointer shadow-sm"
//             onClick={() => scrollContainer("left")}
//           >
//             <i class="fa-solid fa-angle-left"></i>
//           </button>
//           <br />
//           <button
//             className="bg-lightorange rounded-md select-none outline-none h-8 w-9 ml-2 cursor-pointer shadow-sm"
//             onClick={() => scrollContainer("right")}
//           >
//             <i class="fa-solid fa-angle-right"></i>
//           </button>
//         </div>
//         <div className="flex overflow-hidden mt-5" ref={cardContainerRef}>
//           {images.map((image, index) => (
//             <Card
//               key={index}
//               className="flex-none h-96 w-72 m-5 ml-8 shadow-md rounded-2xl bg-cover bg-center bg-no-repeat select-none outline-none cursor-pointer hover:scale-110 transform transition-transform duration-1000 delay-0 flex flex-col justify-between"
//               style={{
//                 backgroundImage: `url(${images[index][0]})`,
//               }}
//             >
//               <CardContent></CardContent>
//               <CardFooter>
//                 <div className="text-white font-serif flex flex-col items-start">
//                   <p className="text-md">{images[index][1]}</p>
//                   <p className="text-xs">
//                     <i class="fa-solid fa-location-dot"></i> {images[index][2]}
//                   </p>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { useSwipeable } from "react-swipeable";

export default function HomePopDest({ images }) {
  const cardContainerRef = useRef(null);
  const [startX, setStartX] = useState(0);

  const scrollContainer = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    cardContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scrollContainer("left"),
    onSwipedRight: () => scrollContainer("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="bg-white z-10 mt-12">
        <div className="m-5 text-gray-800 mt-12 ml-10 select-none outline-none">
          <h3 className="font-serif text-3xl border-b-2 pb-2 inline-block border-lightorange">
            Popular Destinations
          </h3>
          <p className="text-sm pt-4 font-thin">
            Most popular destinations around the world, from historical places
            to natural wonders
          </p>
        </div>
        <div className="flex justify-end text-white mb-8 mt-5 mr-12 md:mr-16 lg:mr-32">
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
              style={{
                backgroundImage: `url(${images[index][0]})`,
              }}
              onScroll={() => {scrollContainer("left")}}
            >
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-white font-serif flex flex-col items-start">
                  <p className="text-md">{images[index][1]}</p>
                  <p className="text-xs">
                    <i class="fa-solid fa-location-dot"></i> {images[index][2]}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}