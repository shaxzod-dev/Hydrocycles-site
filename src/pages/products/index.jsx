import React, { useEffect, useState } from "react";
import { Breadcrumb, Header } from "../../components";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
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
      <Breadcrumb link={category} text={category.toUpperCase()} />
      <div className="container">
        <div className="mt-14">
          {data.length ? (
            data.map((el) => <ProductCard key={el.id} {...el} />)
          ) : (
            <div className="flex gap-x-8">
              {Array.from({ length: 4 }).map((item) => (
                <Skeleton width={271} height={401} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
