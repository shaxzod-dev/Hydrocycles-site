import React from "react";
import {
  Banner,
  Category,
  Electronics,
  Footer,
  Header,
  ProductAdd,
  Products,
  Search,
} from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <Category />
      <Products />
      <ProductAdd />
      <Electronics />
      <Footer />
    </>
  );
};

export default Home;
