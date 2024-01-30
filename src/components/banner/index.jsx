import { Carousel } from "@material-tailwind/react";
import React from "react";
import BannerCard from "../banner-card";

const Banner = () => {
  const carouseImages = [
    {
      img: "https://drivemoto.vercel.app/img/banner-slider.jpg",
    },
    {
      img: "https://p0.pikist.com/photos/229/478/jet-ski-sport-speed-water-spray-sea-activity-extreme-splash.jpg",
    },
    {
      img: "https://poseidon123.com/wp-content/uploads/2019/11/777.jpeg",
    },
  ];
  return (
    <section className="my-20">
      <div className="container">
        <div className="flex items-center gap-x-9 h-[400px]">
          <div className="w-full h-full">
            <Carousel className="rounded-xl">
              {carouseImages.map((el, i) => (
                <img
                  src={el.img}
                  key={i}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
          <BannerCard />
        </div>
      </div>
    </section>
  );
};

export default Banner;
