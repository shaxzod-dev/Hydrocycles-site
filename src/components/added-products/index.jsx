import React, { useContext } from "react";
import { Icons } from "../../assets/icons";
import { MainContext } from "../../context/useMainContext";

const AddedProducts = ({ data }) => {
  const { removeOne, addOne, removeFromCard } = useContext(MainContext);
  return (
    <div className="relative flex gap-x-4 bg-white p-1">
      <div className="w-[120px] h-[100px]">
        <img
          className="w-full h-full object-contain"
          src={data.image}
          alt={data.text}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xs font-normal leading-6 text-title-color">
          {data.text}
        </h2>
        <h2 className="mt-1 text-xs font-normal leading-6 text-title-color">
          + Подарок:
          <a
            href="#!"
            className="text-xs font-normal leading-6 underline text-primary-color"
          >
            “Приложение к технологиям Golden Service”
          </a>
        </h2>
        <div className="flex mt-8 gap-x-3">
          <button
            onClick={() => removeOne(data.id)}
            disabled={data.quantity == 1}
            className="disabled:text-gray-300 w-3 font-semibold text-sm  leading-6 text-title-color"
          >
            -
          </button>
          <span className="py-1 px-5 border-2 border-title-gray text-sm font-medium leading-6 text-title-color">
            {data.quantity}
          </span>
          <button
            onClick={() => addOne(data.id)}
            className="w-3 text-sm font-semibold leading-6 text-title-color"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="absolute right-5 top-6"
        onClick={() => removeFromCard(data.id)}
      >
        <Icons.TrashIcon />
      </button>
      <span className="absolute right-5 bottom-0">
        {(+data.price * data.quantity).toLocaleString()}₽
      </span>
    </div>
  );
};

export default AddedProducts;
