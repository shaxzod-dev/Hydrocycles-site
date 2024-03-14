import React, { useContext, useState } from "react";
import { MainContext } from "../../context/useMainContext";
import AddedProducts from "../added-products";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { Icons } from "../../assets/icons";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { cardItems } = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    phone: "",
    email: "",
    delivery: "",
    payment: "",
    message: "No Comments",
    productsData: cardItems,
  });
  async function onSubmit(data) {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://65bf8bd025a83926ab952f8d.mockapi.io/Schema",
        data
      );
      if (res.status == 201) {
        alert("You have succesfully made an order");
        localStorage.removeItem("cardItems");
        window.location.href = "/";
      }
    } catch (error) {
      alert("Unknown error occured");
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  let a = 0;
  for (const key of cardItems) {
    a += key.price * key.quantity;
  }
  return (
    <div className="container">
      <h2 className="text-[44px] mt-10">Оформление заказа</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8">
          <div className="w-[696px] border-2 border-title-gray py-6 px-8">
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
                  {...register("lastname", {
                    required: "This field is required",
                    min: 2,
                    message: "Invalid lastname",
                  })}
                  type="text"
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
                {errors.lastname && (
                  <span className="text-red-600">
                    {errors.lastname.message}
                  </span>
                )}
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
                  {...register("name", {
                    required: "This field is required",
                    min: 2,
                    message: "Invalid name",
                  })}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
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
                  {...register("phone", {
                    required: "This field is required",
                    min: 13,
                    message: "Invalid phone",
                  })}
                  className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone.message}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="e-mail"
                  className="text-title-color mt-4 text-xs font-normal leading-5"
                >
                  E-mail
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      className="mt-2 py-[10px] px-[18px] border-2 border-title-gray"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
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
                  name="variety"
                  required
                  value={"Сдек"}
                  onChange={(e) =>
                    setValue({ ...value, delivery: e.target.value })
                  }
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
                  required
                  name="variety"
                  value={"Почта России"}
                  onChange={(e) =>
                    setValue({ ...value, delivery: e.target.value })
                  }
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
                  name="variety"
                  required
                  id="Деловые линии"
                  value={"Деловые линии"}
                  onChange={(e) =>
                    setValue({ ...value, delivery: e.target.value })
                  }
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
                  required
                  name="variant"
                  value={"Оплата наличными"}
                  id="Оплата при получении товара"
                  onChange={(e) =>
                    setValue({ ...value, payment: e.target.value })
                  }
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
                  required
                  value={"Банковская карта"}
                  id="Банковская карта"
                  onChange={(e) =>
                    setValue({ ...value, payment: e.target.value })
                  }
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
              onChange={(e) => setValue({ ...value, message: e.target.value })}
              className="border-2 border-title-gray w-full resize-none h-[100px] mt-4 p-3"
              placeholder="Напишите комментарий"
            ></textarea>
          </div>
          <div className="w-[500px] h-full border-title-gray border-2 py-4 px-6">
            <h2 className="text-[24px] font-semibold text-title-color">
              Итого
            </h2>
            <div className="border-y-2 border-title-gray">
              {cardItems.map((el) => (
                <AddedProducts key={el.id} data={el} counter={false} />
              ))}
            </div>
            <h3 className="text-sm text-title-color font-normal leading-[26px] ">
              Итого:
              <span className="text-xl font-bold leading-[30px] text-title-color">
                {a.toLocaleString()} ₽
              </span>
            </h3>
            <button
              className="border-primary-color text-primary-color font-medium text-[17px] mt-3 border-[1px] rounded-lg py-[6px] px-4"
              type="submit"
            >
              {loading ? (
                <div role="status">
                  <Icons.LoadingIcon />
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
