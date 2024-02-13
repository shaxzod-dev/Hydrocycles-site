import React from "react";

const CategoryCard = ({ id, title, image }) => {
  return (
    <div
      key={id}
      className="group hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)] transition-all flex justify-between w-[370px] h-[120px] border-gray border-[3px] rounded-[5px] pt-5 pl-5 pr-9 pb-2"
    >
      <h2 className="transition-all text-title-color text-2xl font-bold group-hover:text-primary-color">
        {title}
      </h2>
      <img src={image} />
      <button className="absolute mt-14 text-gray-500 text-[14px] font-normal">
        Подробнее
      </button>
    </div>
  );
};

export default CategoryCard;
