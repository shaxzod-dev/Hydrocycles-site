import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Title from "../title";
import { Icons } from "../../assets/icons";
import { Button, Rating } from "@material-tailwind/react";

const InfoCard = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <section className="mt-24">
      <div className="container">
        <div className="flex gap-x-9 justify-between">
          {products.length ? (
            products.map((el) => (
              <div className="relative pt-16 border-title-gray border-[4px] rounded w-[450px] flex justify-center items-center flex-col">
                <button
                  className="bg-primary-color absolute top-0 left-0 text-sm font-normal text-white py-[13px] px-6 rounded
                "
                >
                  SALE
                </button>
                <img src={el.image} className="w-3/4 " alt="" height={375} />
                <h1 className="text-gray-300 mt-7 text-3xl font-light line-through text-center">
                  1 200 475 ₽
                </h1>
                <h1 className="text-title-color text-[40px] font-bold text-center mt-2">
                  1 100 475 ₽
                </h1>
                <h1 className="text-primary-color text-sm font-normal text-center mt-4">
                  Нашли дешевле? Снизим цену!
                </h1>
              </div>
            ))
          ) : (
            <div className="flex justify-between items-center gap-x-20">
              {Array.from({ length: 1 }).map((item) => (
                <Skeleton width={450} height={571} />
              ))}
            </div>
          )}
          <div className="max-w-[570px] w-[100%]">
            <div className="w-[500px]">
              <Title>
                Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
              </Title>
            </div>
            <span className="text-sm font-normal text-gray-500 mt-[10px]">
              Код товара: 366666-2{" "}
            </span>
            <div className="flex items-center mt-[26px] gap-x-7">
              <Icons.likeIcon />
              <Rating></Rating>
            </div>
            <Button type="button" className="mt-[45px] text-sm font-normal bg-primary-color rounded py-[16px] px-[53px]">
              купить
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
