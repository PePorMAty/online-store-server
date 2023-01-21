import React from "react";
import s from "./Brands.module.css";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import adidas from "../../assets/images/brandsLogo/adidas.png"; //256
import nike from "../../assets/images/brandsLogo/nike.png";
import puma from "../../assets/images/brandsLogo/puma.png";
import reebok from "../../assets/images/brandsLogo/reebok.png";
import vans from "../../assets/images/brandsLogo/vans.png";
import jordan from "../../assets/images/brandsLogo/jordan.png";
import converse from "../../assets/images/brandsLogo/converse.png";
import newBalance from "../../assets/images/brandsLogo/newBalance.png";

export const Brands = () => {
  let brandsArray = [
    { id: 2, img: nike, name: "Nike" },
    { id: 3, img: puma, name: "Puma" },
    { id: 1, img: adidas, name: "Adidas" },
    { id: 4, img: reebok, name: "Reebok" },
    { id: 5, img: vans, name: "Vans" },
    { id: 6, img: jordan, name: "Jordan" },
    { id: 7, img: converse, name: "Converse" },
    { id: 8, img: newBalance, name: "New Balance" },
  ];
  let listBrands = brandsArray.map((i) => (
    <SwiperSlide>
      <a className={s.brandsLink} href="#" key={i.id}>
        <img className={s.brandsImg} src={i.img} alt="" />
        <p className={s.brandsTitle}>{i.name}</p>
      </a>
    </SwiperSlide>
  ));

  return (
    <div className={s.brands}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
      >
        {listBrands}
      </Swiper>
    </div>
  );
};
