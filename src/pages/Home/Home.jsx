import React from "react";
import s from "./Home.module.css";
import man from "../../assets/images/homepage/home-man.jpg";
import woman from "../../assets/images/homepage/home-woman.jpg";

export const Home = () => {
  return (
    <div className="">
      <div className={s.parallax_effect}>
        <h1 className={s.paralax_title}>RE-SALE</h1>
      </div>

      <div className={s.container}>
        <div className={s.inner}>
          <a className={s.inner_link} href="#">
            <div className={s.inner_img_man} src={man} alt="" />
            <a className={s.inner_title}>Мужчинам</a>
            <ul className={s.inner_list}>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Кроссовки
                </a>
              </li>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Толстовки
                </a>
              </li>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Брюки
                </a>
              </li>
            </ul>
          </a>
          <a className={s.inner_link} href="#">
            <div className={s.inner_img_woman} src={woman} alt="" />
            <a className={s.inner_title}>Женщинам</a>
            <ul className={s.inner_list}>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Кроссовки
                </a>
              </li>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Толстовки
                </a>
              </li>
              <li className={s.inner_item}>
                <a className={s.inner_item_link} href="#">
                  Брюки
                </a>
              </li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
};
