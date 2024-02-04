import React from "react";
import Title from "../title";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product-card";
import img1 from "../../assets/images/product-1.png";
import img2 from "../../assets/images/product-2.png";
import img3 from "../../assets/images/product-3.png";
import img4 from "../../assets/images/product-4.png";
import { Icons } from "../../assets/icons";
const Products = () => {
  return (
    <section>
      <div className="container">
        <Title className="">Популярные товары</Title>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper mt-6 h-[430px] mb-9"
        >
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img1}
              price={"9 800 ₽"}
              title={"Водонепроницаемый Рюкзак"}
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img2}
              price={"6 900 ₽"}
              title={"Спасательный жилет BRP Men's Airflow PFD"}
              sale={
                <button className="w-[65  px] h-[30px] flex items-center justify-center text-white absolute top-0 left-0 py-2 bg-primary-color px-4">
                  SALE
                </button>
              }
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img3}
              price={"68 000 ₽"}
              title={"BRP Audio-Premium System"}
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img4}
              res={"нет в наличии"}
              link={"Сообщить о поступлении"}
              title={"Спасательное снаряжение"}
              sale={
                <button className="w-[65  px] h-[30px] flex items-center justify-center text-white absolute top-0 left-0 py-2 bg-primary-color px-4">
                  SALE
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img1}
              price={"9 800 ₽"}
              title={"Водонепроницаемый Рюкзак"}
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img2}
              price={"6 900 ₽"}
              title={"Спасательный жилет BRP Men's Airflow PFD"}
              sale={
                <button className="w-[65  px] h-[30px] flex items-center justify-center text-white absolute top-0 left-0 py-2 bg-primary-color px-4">
                  SALE
                </button>
              }
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img3}
              price={"68 000 ₽"}
              title={"BRP Audio-Premium System"}
              shop={
                <button className="border-none absolute bottom-0 right-0 bg-primary-color w-[60px] h-10 flex items-center justify-center rounded-tl-[10px]">
                  <Icons.shopIcon color="light" />
                </button>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="w-[271px] ">
            <ProductCard
              img={img4}
              res={"нет в наличии"}
              link={"Сообщить о поступлении"}
              title={"Спасательное снаряжение"}
              sale={
                <button className="w-[65  px] h-[30px] flex items-center justify-center text-white absolute top-0 left-0 py-2 bg-primary-color px-4">
                  SALE
                </button>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
