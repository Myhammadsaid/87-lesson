import React, { useEffect, useState } from "react";
import location from "../../assets/location.png";
import logo from "../../assets/logo.png";
import socials from "../../assets/socials.png";
import phone from "../../assets/phone.png";
import cart from "../../assets/cart.png";
import "./Header.css";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <nav className="header__top__nav">
              <div className="header__top__items">
                <a href="#" className="header__top__item">
                  Гарантия свежести
                </a>
                <a href="#" className="header__top__item">
                  Доставка и оплата
                </a>
                <a href="#" className="header__top__item">
                  Оптовые поставки
                </a>
                <a href="#" className="header__top__item">
                  Контакты
                </a>
              </div>
              <div className="header__top__items">
                <a href="#" className="header__top__item">
                  <img src={location} alt="location" /> Санкт-Петербург
                </a>
                <a href="#" className="header__top__item">
                  <img src={phone} alt="phone" />8 812 309-82-88
                </a>
                <a href="#" className="header__top__item">
                  <img src={cart} alt="phone" />В корзине (4 товара)
                </a>
                <span>
                  <img src={socials} alt="socials" />
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div className={`header__bottom ${scroll > 200 ? "active" : ""}`}>
          <div className="container">
            <nav className="header__bottom__items">
              <a href="#" className="header__bottom__item">
                Слатки дни
              </a>
              <a href="#" className="header__bottom__item">
                Подарочные наборы
              </a>
              <a href="#" className="header__bottom__item">
                Собрать набор
              </a>
              <img src={logo} alt="logo" />
              <a href="#" className="header__bottom__item">
                Создать дизайн
              </a>
              <a href="#" className="header__bottom__item">
                Компания
              </a>
              <a href="#" className="header__bottom__item">
                Весь коталог
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
