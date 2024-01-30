import React, { useState } from "react";
import { Icons } from "../../../assets/icons";
import { Link } from "react-router-dom";
import { LikeModal, PersonModal, ShopModal } from "../../dialog";

const HeaderTop = () => {
  const [likeModal, setLikeModal] = useState(false),
    [personModal, setPersonModal] = useState(false),
    [shopModal, setShopModal] = useState(false);
  function handleLike() {
    setLikeModal(!likeModal);
  }
  function handlePerson() {
    setPersonModal(!personModal);
  }
  function handleShop() {
    setShopModal(!shopModal);
  }
  return (
    <div className="container">
      <div className="flex items-center justify-between py-6">
        <nav className="flex items-center gap-12">
          <a href="#" className="text-title-color text-xl font-bold">
            Магазины
          </a>
          <a href="#" className="text-title-color text-xl font-bold">
            Акции
          </a>
          <a href="#" className="text-title-color text-xl font-bold">
            Доставка и оплата
          </a>
        </nav>
        <Link to={"/"}>
          <Icons.logoIcon />
        </Link>
        <div className="flex items-center justify-between ">
          <a
            href="#"
            className="flex items-end gap-x-1 text-title-color text-xl font-bold"
          >
            <Icons.locationIcon />
            Москва, ул. Науки 25
          </a>
        </div>
        <div className="flex items-center gap-x-3">
          <button onClick={() => handleLike()}>
            <Icons.likeIcon />
          </button>
          <button onClick={() => handlePerson()}>
            <Icons.personIcon />
          </button>
          <button onClick={() => handleShop()}>
            <Icons.shopIcon />
          </button>
        </div>
        <LikeModal open={likeModal} handleOpen={handleLike} />
        <PersonModal open={personModal} handleOpen={handlePerson} />
        <ShopModal open={shopModal} handleOpen={handleShop} />
      </div>
    </div>
  );
};

export default HeaderTop;
