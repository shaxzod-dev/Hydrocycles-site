import React, { useContext } from "react";
import { MainContext } from "../../context/useMainContext";
import { Rating } from "@material-tailwind/react";

const LikedItems = ({ data, card }) => {
  const { addToCard, removeFromCard } = useContext(MainContext);
  return (
    <div className="relative flex gap-x-5 border-4 w-full  bg-white py-2 px-2 border-title-gray ">
      <div className="w-[90px] h-[80px]">
        <img src={data.image} alt={data.text} className="w-full h-full" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[13px] font-normal text-title-color">
          {data.title}
        </h2>
        <div className="flex mt-2 items-center gap-x-3">
          <Rating />
          <h3 className="text-sm text-blue-gray-400 leading-5">(12) отзывов</h3>
        </div>
        <div className="flex gap-x-3 mt-4">
          <span className="block text-title-color text-lg font-bold">
            От:{data.price}
          </span>
          <span className="block line-through text-gray-500">{data.price}</span>
        </div>
      </div>
      <button
        onClick={() => (card ? removeFromCard(data.id) : addToCard(data))}
        className="absolute top-3 right-3 text-base font-medium leading-6 text-primary-color"
      >
        {card ? <h2 className="text-red-500">- Удалить</h2> : " + Добавить"}
      </button>
    </div>
  );
};

export default LikedItems;
