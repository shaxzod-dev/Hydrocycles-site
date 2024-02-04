import React from "react";
import { Icons } from "../../assets/icons";
import Title from "../title";

const ProductCard = ({ img, title, price, sale, res, link, shop }) => {
  return (
    <div className="group hover:cursor-pointer hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)]  px-9 rounded-[3px] w-[270px] h-full transition-all border-[3px] border-title-gray flex items-center justify-center flex-col relative">
      {sale}
      <Icons.likeIcon className="absolute top-4 right-5 hover:cursor-pointer" />
      <div className="border-title-gray p-2 box-content border-[3px] border-dashed">
        <img src={img} alt={title} />
        <button className="hidden absolute items-center justify-center top-[122px] w-[230px] right-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] bg-[rgb(255,255,255)] h-[61px] text-center transition-all opacity-[0.9]  group-hover:flex">
          посмотреть товар
        </button>
      </div>
      <h2 className="group-hover:text-primary-color  text-lg text-title-color text-center mt-4 mb-6 font-normal">
        {title}
      </h2>
      <span className="text-3xl font-bold group-hover:text-primary-color">
        {price}
      </span>
      <h3 className="mt-[7px] mb-[23px] text-lg font-bold">{res}</h3>
      <a
        href="#!"
        className="underline text-primary-color text-base font-normal"
      >
        {link}
      </a>
      {shop}
    </div>
  );
};

export default ProductCard;
