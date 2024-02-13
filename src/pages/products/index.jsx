import React, { useContext, useEffect, useState } from "react";
import { Breadcrumb, Header } from "../../components";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card";
import Skeleton from "react-loading-skeleton";
import { Icons } from "../../assets/icons";
import { MainContext } from "../../context/useMainContext";

const Products = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const { cardItems } = useContext(MainContext);
  async function getData() {
    return await fetch(
      `https://65bf8bd025a83926ab952f8d.mockapi.io/products?category=${category}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, [category]);
  console.log(data);
  return (
    <>
      <Header />
      <Breadcrumb link={category} text={category?.toUpperCase()} />
      <div className="container">
        <div className="mt-14 flex h-full">
          <div className="w-[371px] h-screen border-title-gray border-4"></div>
          {data.length ? (
            data.map((el) => (
              <div key={el.id} className="h-[403px] w-full mb-48 flex gap-7 flex-wrap">
                {Array.from({ length: 12 }).map((item) => (
                  <ProductCard
                    key={el.id}
                    data={el}
                    img={el.image}
                    card={cardItems.some((item) => item.id == el.id)}
                    shop={
                      <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                        <Icons.shopIcon color="light" />
                      </button>
                    }
                  />
                ))}
              </div>
            ))
          ) : (
            <div className="grid grid-cols-3 grid-rows-4 gap-7 ">
              {Array.from({ length: 12 }).map((item,i) => (
                <Skeleton key={i} width={260} height={401} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
