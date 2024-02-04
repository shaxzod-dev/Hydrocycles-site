import React from "react";
import { Banner, Category, Header, Products, Search } from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <Category />
      <Products />
    </>
  );
};

export default Home;
