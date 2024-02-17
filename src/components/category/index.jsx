import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import CategoryCard from "../category-card";

const Category = () => {
  const [data, setData] = useState([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="category" className="mt-20 mb-20">
      <div className="container">
        <div className="relative flex items-center justify-between flex-wrap gap-7">
          {data.length
            ? data.map((el) => (
                <Link key={el.id} to={`/products/${el.category}`}>
                  <CategoryCard {...el} />
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
