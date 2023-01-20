import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/images/icons/re-sale-logo.png";
import authLogo from "../../assets/images/icons/profile.svg";
import searchLogo from "../../assets/images/icons/search.svg";
import bucketLogo from "../../assets/images/icons/bucket.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.navigation}>
          <Link to="/" className={s.logo}>
            <img className={s.logo__img} src={logo} alt="" />
          </Link>
          <div className={s.categories}>
            <Link to="/newproducts" className={s.categories__name}>
              Новинки
            </Link>
            <Link to="/collections" className={s.categories__name}>
              Коллекции
            </Link>
            <Link to="/clothes" className={s.categories__name}>
              Одежда
            </Link>
          </div>
        </div>
        <div className={s.icons}>
          <a className={s.icon__logo}>
            <img className={s.icon_auth_img} src={authLogo} alt="" />
          </a>
          <a className={s.icon__logo} href="">
            <img className={s.icon_search_img} src={searchLogo} alt="" />
          </a>
          <a className={s.icon__logo} href="">
            <img className={s.icon_bucket_img} src={bucketLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
