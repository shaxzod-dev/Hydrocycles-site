import React from "react";
import { Icons } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className=" bg-title-gray pt-[41px] pb-7 mt-[97px]">
      <div className="container">
        <div className="flex gap-x-[160px]">
          <div className="flex flex-col gap-y-9">
            <h2 className="text-title-color text-sm font-bold w-[230px]">
              Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h2>
            <div>
              <input
                type="text"
                placeholder="Введите ваш e-mail:"
                className="text-sm font-normal w-[200px] py-2 pl-3"
              />
              <button className="text-white bg-primary-color px-4 py-2 text-xs font-semibold">
                ОТПРАВИТЬ
              </button>
            </div>
          </div>
          <div className="flex gap-x-[100px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-title-color text-sm font-bold">Информация</h2>
              <h4>О компании</h4>
              <h4>Контакты</h4>
              <h4>Акции</h4>
              <h4>Магазины</h4>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-title-color text-sm font-bold">
                Интернет-магазин
              </h2>
              <h4>Доставка и самовывоз</h4>
              <h4>Оплата</h4>
              <h4>Возврат-обмен</h4>
              <h4>Новости</h4>
            </div>
            <div className="flex gap-x-[30px] items-center">
              <div>
                <Icons.instaIcon />
              </div>
              <div>
                <Icons.WKIcon />
              </div>
              <div>
                <Icons.MetaIcon />
              </div>
              <div>
                <Icons.YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex translate-x-16 items-center justify-center mt-12 gap-x-[81px]">
          <h5 className="text-[10px]">Договор оферты</h5>
          <h5 className="text-[10px]">Политика обработки персональных данных</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
