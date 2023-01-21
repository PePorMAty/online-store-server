import React from "react";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.footerBg}>
      <div className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerList}>
            <h4 className={s.footerTitle}>О компании</h4>
            <a href="#" className={s.footerText}>
              Контакты
            </a>
            <a href="#" className={s.footerText}>
              О нас
            </a>
            <a href="#" className={s.footerText}>
              Обратная связь
            </a>
            <a href="#" className={s.footerText}>
              Оферта
            </a>
            <a href="#" className={s.footerText}>
              Политика конфиденциальности
            </a>
          </div>
          <div className={s.footerList}>
            <h4 className={s.footerTitle}>Помощь</h4>
            <a href="#" className={s.footerText}>
              FAQ
            </a>
          </div>
          <div className={s.footerList}>
            <h4 className={s.footerTitle}>Бренды</h4>
            <a href="#" className={s.footerText}>
              adidas
            </a>
            <a href="#" className={s.footerText}>
              Jordan
            </a>
            <a href="#" className={s.footerText}>
              New Balance
            </a>
            <a href="#" className={s.footerText}>
              Nike
            </a>
            <a href="#" className={s.footerText}>
              Все бренды
            </a>
          </div>
        </div>
        <div className={s.fooerDown}></div>
      </div>
    </div>
  );
};
