import React, { useEffect, useState } from "react";
import { categoryData } from "../../constant";
import { Link, json } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Category = () => {
  const [data, setData] = useState([]);
  const [api, setApi] = useState("products");
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="mt-20 mb-20">
      <div className="container">
        <div className="relative flex items-center justify-between flex-wrap gap-7">
          {data.length
            ? data.map((el) => (
                <Link to={`/products/${el.category}`}>
                  <div
                    key={el.id}
                    className="group hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)] transition-all flex justify-between w-[370px] h-[120px] border-gray border-[3px] rounded-[5px] pt-5 pl-5 pr-9 pb-2"
                  >
                    <h2 className="transition-all text-title-color text-2xl font-bold group-hover:text-primary-color">
                      {el.title}
                    </h2>
                    <img src={el.image} />
                    <Link
                      to="/products"
                      className="absolute mt-14 text-gray-500 text-[14px] font-normal"
                    >
                      Подробнее
                    </Link>
                  </div>
                </Link>
              ))
            : Array.from({ length: 6 }).map((el) => (
                <Skeleton width={370} height={129} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
