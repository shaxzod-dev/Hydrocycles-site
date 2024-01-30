import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const NavData = [
    "Квадроциклы",
    "Катера",
    "Гидроциклы",
    "Лодки",
    "Вездеходы",
    "Снегоходы",
    "Двигатели",
    "Запчасти",
  ];
  return (
    <div className="container">
      <nav className="w-full bg-title-gray py-4 flex items-center gap-[60px] justify-between">
        {NavData.map((el, i) => (
          <Link key={i}>{el}</Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderNav;
