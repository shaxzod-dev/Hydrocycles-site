import React from "react";
import { Icons } from "../../assets/icons";
import CardImg from "../../assets/images/card-img.png";

const BannerCard = () => {
  return (
    <div className="w-[365px] h-full rounded-[3px] border-[2px] border-gray relative">
      <div className=" absolute top-0 left-0 bg-primary-color py-2 px-5 text-white text-xs font-bold">
        АКЦИЯ
      </div>
      <span className="flex items-center justify-center absolute top-1 right-2 text-primary-color text-2xl font-bold">
        190 000 <Icons.RubleIcon />{" "}
      </span>
      <span className="text-title-gray text-xs absolute top-11 right-2 font-normal line-through">
        225000₽
      </span>
      <img
        src={CardImg}
        alt="Addvertisement"
        className="absolute top-[67px] left-[61px]"
      />
      <h2 className="text-title-color text-xl font-bold text-center top-[240px] left-5 absolute w-[233px] ">
        Лодочный мотор Suzuki DF9.9BRS
      </h2>
      <div className="flex items-center justify-center flex-col bg-title-gray w-full h-[99px] absolute bottom-0">
        <h3 className="w-full text-center text-xl font-normal">
          Акция действует до
        </h3>
        <h3 className="text-primary-color text-center text-lg font-bold">31.08.2020</h3>
      </div>
    </div>
  );
};

export default BannerCard;
