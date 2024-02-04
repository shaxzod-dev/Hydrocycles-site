import { Carousel } from "@material-tailwind/react";
import React from "react";
import BannerCard from "../banner-card";
import { carouseImages } from "../../constant";

const Banner = () => {
  
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
