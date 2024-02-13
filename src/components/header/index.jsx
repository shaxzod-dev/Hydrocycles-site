import React, { useContext } from "react";
import HeaderTop from "./header-top";
import HeaderNav from "./header-nav";
import { MainContext } from "../../context/useMainContext";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderNav />
    </>
  );
};

export default Header;
