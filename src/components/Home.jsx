import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomeText from "./HomeText";
import HomeForm from "./HomeForm";
import HomePopDest from "./HomePopDest";
import HomeSpecialOff from "./HomeSpecialOff";
import HomeBlog from "./HomeBlog";
import HomeTripPlanner from "./HomeTripPlanner";
import HomeGallery from "./HomeGallery";
import HomeTravellerExp from "./HomeTravellerExp";
import Footer from "./Footer";
// bgImage
import bgImage from "../assets/head.jpg";
// images_1
import berlin from "../assets/berlin.jpg";
import agra from "../assets/agra.jpg";
import amalfi from "../assets/amalfi.jpg";
import athens from "../assets/athens.jpg";
import london from "../assets/london.jpg";
import venice from "../assets/venice.jpg";
// images_2
import athens2 from "../assets/athens2.jpg";
import lisbon from "../assets/lisbon.jpg";
import giza from "../assets/giza.jpg";
import helsinki from "../assets/helsinki.jpg";
import paris from "../assets/paris.jpg";
import rome from "../assets/rome.jpg";
// blogImage
import blogImage from "../assets/terra.jpg";
// gallery
import gallery_1 from "../assets/Gallery_1.jpg";
import gallery_2 from "../assets/Gallery_2.jpg";
import gallery_3 from "../assets/Gallery_3.jpg";
import gallery_4 from "../assets/Gallery_4.jpg";
import gallery_5 from "../assets/Gallery_5.jpg";
import gallery_6 from "../assets/Gallery_6.jpg";
import gallery_7 from "../assets/Gallery_7.jpg";
// reviews
import review_1 from "../assets/Review_1.jpg";
import review_2 from "../assets/Review_2.jpg";
import review_3 from "../assets/Review_3.jpg";
import review_4 from "../assets/Review_4.jpg";
import review_5 from "../assets/Review_5.jpg";
import review_6 from "../assets/Review_6.jpg";
import review_7 from "../assets/Review_7.jpg";

export default function Home() {
  const list = ["Berlin", "Agra", "Amalfi", "Athens", "London", "Venice"];
  const images_1 = [
    [berlin, "Monument of Berlin", "Berlin, Germany"],
    [agra, "Taj Mahal", "Agra, India"],
    [amalfi, "Amalfi Coast", "Amalfi, Italy"],
    [athens, "Parthenon", "Athens, Greece"],
    [london, "Millennium Bridge", "London, United Kingdom"],
    [venice, "Railto Bridge", "Venice, Italy"],
  ];
  const images_2 = [
    [helsinki, "Helsinki, Finland", 700],
    [lisbon, "Lisbon, Potugal", 650],
    [giza, "Giza, Egypt", 450],
    [athens2, "Athens, Greece", 700],
    [paris, "Paris, France", 1200],
    [rome, "Rome, Italy", 900],
  ];
  const gallery = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
  ];
  const reviews = [
    [review_1, "John Doe", "Photographer"],
    [review_2, "Tamara Brown", "Accountant"],
    [review_3, "Amelia Birara", "Influencer"],
    [review_4, "George Birmingham", "Cyclist"],
    [review_5, "Taimoor Ghani", "Journalist"],
    [review_6, "Faiz Ali", "Hiker"],
    [review_7, "Anna Bellis", "Software Engineer"],
  ];
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentDate = new Date();
  const nextDay = new Date();
  nextDay.setDate(currentDate.getDate() + 1);

  useEffect(() => {
    const image = new Image();
    image.src = bgImage;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  if (!imageLoaded) {
    return null;
  }

  return (
    <>
      <div
        className="flex flex-col h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <NavBar active="home" />
        <HomeText />
        <HomeForm values={list} />
      </div>
      <div>
        <HomePopDest images={images_1} />
      </div>
      <div>
        <HomeSpecialOff images={images_2} />
      </div>
      <div>
        <HomeBlog image={blogImage} />
      </div>
      <div>
        <HomeTripPlanner images={[...images_2].reverse()} />
      </div>
      <div>
        <HomeGallery images={gallery} />
      </div>
      <div>
        <HomeTravellerExp reviews={reviews} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
document.body.className = "overflow-x-hidden";
