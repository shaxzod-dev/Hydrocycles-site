import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../../../constant";

const HeaderNav = () => {
  return (
    <div className="container">
      <nav className="w-full bg-title-gray py-4 flex items-center gap-[60px] justify-between">
        {NavData.map((el) => (
          <Link key={el.id} to={el.link}>
            {el.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderNav;
