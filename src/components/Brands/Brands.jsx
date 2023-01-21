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
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";
import brands from "../../store/homeBrands";
import homeBrands from "../../store/homeBrands";

export const Brands = observer(() => {
  let size = 5;

  let listBrands = homeBrands.brands.map((brand) => (
    <SwiperSlide>
      <a className={s.brandsLink} href="#">
        <img className={s.brandsImg} src={brand.img} alt="" />
        <p className={s.brandsTitle}>{brand.name}</p>
      </a>
    </SwiperSlide>
  ));

  return (
    <div className={s.brands}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={5}
        navigation
      >
        {listBrands}
      </Swiper>
    </div>
  );
});
