import React from "react";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-5.png";

const ProductAdd = () => {
  return (
    <section className="mb-[72px]">
      <div className="container">
        <div className="flex h-[165px] gap-x-12 bg-primary-color w-full">
          <div className="pl-[71px] pt-8 pb-5  flex items-center justify-center">
            <img src={img1} alt="квадроциклы" />
            <img src={img2} alt="" />
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <h1 className="text-4xl font-bold text-white w-[270px]">
              CКИДКИ на все запчасти до 70%
            </h1>
            <button className="text-2xl px-11 font-medium bg-white h-[57px]">ПОСМОТЕТЬ ВСЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdd;
