import React, { useContext } from "react";
import { Icons } from "../../assets/icons";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/useMainContext";
const ProductCard = ({ img, price, sale, res, link, data, card, like }) => {
  const { addToCard, removeFromCard, addToLike, removeFromLike } =
    useContext(MainContext);
  // console.log(like);
  return (
    <div className="group hover:cursor-pointer hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)]  px-9 rounded-[3px] w-[270px] h-full transition-all border-[3px] border-title-gray flex items-center justify-center flex-col relative">
      {sale}
      <button
        onClick={() => (like ? removeFromLike(data.id) : addToLike(data))}
        className="absolute top-4 right-5 hover:cursor-pointer"
      >
        <Icons.likeIcon color={like && "red"} />
      </button>
      <div className=" p-2 box-content">
        <Link to={`/info/${data?.id}`}>
          <img src={img} alt={data?.title} />
          <button className="hidden absolute items-center justify-center top-[122px] w-[230px] right-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] bg-[rgb(255,255,255)] h-[61px] text-center transition-all opacity-[0.9]  group-hover:flex">
            посмотреть товар
          </button>
        </Link>
      </div>
      <h2 className="group-hover:text-primary-color  text-lg text-title-color text-center mt-4 mb-6 font-normal">
        {data?.title}
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
      <button
        onClick={() => {
          card ? removeFromCard(data?.id) : addToCard(data);
        }}
        className={
          card == true
            ? "bg-primary-color  absolute right-0 bottom-0  border-2   w-[60px] h-10 flex items-center  justify-center rounded-tl-[10px]"
            : "border-primary-color  border-2 bg-white absolute bottom-0 right-0  w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]"
        }
      >
        <Icons.shopIcon color={card ? "light" : "2F3035"} />
      </button>
    </div>
  );
};

export default ProductCard;
