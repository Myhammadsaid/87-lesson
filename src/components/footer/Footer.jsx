import React from "react";
import footer1 from "../../assets/footer-img1.png";
import footer2 from "../../assets/footer-img2.png";
import footer3 from "../../assets/footer-img3.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-items">
            <div className="footer-item">
              <div className="footer-contents">
                <div className="footer-content">
                  <img src={footer1} alt="img" />
                  <span>Готовим вручную и с любовью</span>
                </div>
                <div className="footer-content">
                  <img src={footer2} alt="img" />
                  <span>Доставим в день заказа</span>
                </div>
                <div className="footer-content">
                  <img src={footer3} alt="img" />
                  <span>
                    100% <br /> миндальная мука и натуральные ингредиентыs
                  </span>
                </div>
              </div>
              <p className="footer-item-par">
                © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
                Тухачевского, дом 22
              </p>
            </div>

            <div className="footer-item">
              <h3 className="footer-title">Информация</h3>
              <a href="#" className="footer-text">
                О компании
              </a>
              <a href="#" className="footer-text">
                Гарантии вкуса и свежести
              </a>
              <a href="#" className="footer-text">
                Доставка и оплата
              </a>
              <a href="#" className="footer-text">
                Контакты
              </a>
            </div>

            <div className="footer-item">
              <h3 className="footer-title">Каталог</h3>
              <a href="#" className="footer-text">
                Каталог десертов
              </a>
              <a href="#" className="footer-text">
                Готовые наборы
              </a>
              <a href="#" className="footer-text">
                Собрать свой набор
              </a>
              <a href="#" className="footer-text">
                Наборы с печатью
              </a>
              <a href="#" className="footer-text">
                Свадебные предложения
              </a>
              <a href="#" className="footer-text">
                Акции
              </a>
            </div>
            <div className="footer-item">
              <h3 className="footer-title">ДЛЯ БИЗНЕСА</h3>
              <a href="#" className="footer-text">
                Корпоративные подарки
              </a>
              <a href="#" className="footer-text">
                Для юридических лиц
              </a>
              <a href="#" className="footer-text">
                Оповикам
              </a>
            </div>
            <div className="footer-item">
              <h3 className="footer-title2">+7 (812) 309 82 88</h3>
              <a href="#" className="footer-text2">
                с 9:00 до 21:00
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
