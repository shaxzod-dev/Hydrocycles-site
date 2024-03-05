import React, { useContext, useState } from "react";
import { isValidName } from "../../utils";
import { MainContext } from "../../context/useMainContext";
import AddedProducts from "../added-products";

const OrderForm = () => {
  const { cardItems } = useContext(MainContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  console.log(isValidName(name));
  function onSubmit(e) {
    e.preventDefault();
    if (!isValidName(name)) {
      setError({ name: "Unacceptable name!!!" });
    } else {
      setError({
        name: "",
      });
    }
  }
  let a = 0;
  for (const key of cardItems) {
    a += key.price * key.quantity;
  }
  return (
    <div className="container">
      <h2 className="text-[44px] mt-10">Оформление заказа</h2>
      <div className="flex gap-8">
        <div className="w-[696px] border-2 border-title-gray py-6 px-8">
          <form onSubmit={onSubmit}>
            <h3 className="text-lg text-title-color font-normal leading-8">
              1. Контактные данные
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="lastname"
                  className="text-title-color mt-4 text-xs font-normal leading-5"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  id="lastname"
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-title-color mt-4 text-xs font-normal leading-5"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
                {error.name.length > 1 ? (
                  <p className="text-red-500 text-normal text-sm mt-2 leading-3">
                    {error.name}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="tel"
                  className="text-title-color mt-4 text-xs font-normal leading-5"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="e-mail"
                  className="text-title-color mt-4 text-xs font-normal leading-5"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
              </div>
            </div>
            <h3 className="mt-6 text-lg text-title-color font-normal leading-8">
              2. Доставка
            </h3>
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex items-center gap-2">
                <input
                  className="w-6 h-4"
                  type="radio"
                  name="variant"
                  id="Сдек"
                />
                <label
                  className="text-lg font-normal leading-6 text-title-color"
                  htmlFor="Сдек"
                >
                  Сдек
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="w-6 h-4"
                  type="radio"
                  name="variant"
                  id="Почта России"
                />
                <label
                  className="text-lg font-normal leading-6 text-title-color"
                  htmlFor="Почта России"
                >
                  Почта России
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="w-6 h-4"
                  type="radio"
                  name="variant"
                  id="Деловые линии"
                />
                <label
                  className="text-lg font-normal leading-6 text-title-color"
                  htmlFor="Деловые линии"
                >
                  Деловые линии
                </label>
              </div>
            </div>
            <h3 className="mt-6 text-lg text-title-color font-normal leading-8">
              3. Оплата
            </h3>
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex items-center gap-2">
                <input
                  className="w-6 h-4"
                  type="radio"
                  name="variant"
                  id="Оплата при получении товара"
                />
                <label
                  className="text-lg font-normal leading-6 text-title-color"
                  htmlFor="Оплата при получении товара"
                >
                  Оплата при получении товара
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="w-6 h-4"
                  type="radio"
                  name="variant"
                  id="Банковская карта"
                />
                <label
                  className="text-lg font-normal leading-6 text-title-color"
                  htmlFor="Банковская карта"
                >
                  Банковская карта
                </label>
              </div>
            </div>
            <h3 className="text-sm font-normal leading-5 mt-6 text-title-color">
              Комментарий
            </h3>
            <textarea
              name=""
              className="border-2 border-title-gray w-full resize-none h-[100px] mt-4 p-3"
              placeholder="Напишите комментарий"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="w-[500px] h-full border-title-gray border-2 py-4 px-6">
          <h2 className="text-[24px] font-semibold text-title-color">Итого</h2>
          <div className="border-y-2 border-title-gray">
            {cardItems.map((el) => (
              <AddedProducts key={el.id} data={el} />
            ))}
          </div>
          <h3 className="text-sm text-title-color font-normal leading-[26px] ">
            Итого:
            <span className="text-xl font-bold leading-[30px] text-title-color">
              {a.toLocaleString()} ₽
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
