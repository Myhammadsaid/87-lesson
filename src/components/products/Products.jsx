import React, { useEffect, useState } from "react";
import Model from "../model/Model";
import { useSearchParams } from "react-router-dom";
import "./Products.css";
import cart from "../../assets/cart.png";
import axios from "../../api";
import Skeleton from "../skeleton/Skeleton";

const Products = () => {
  const [data, setData] = useState(null);
  const [SearchParams, setSearchParams] = useSearchParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let id = SearchParams.get("detail");
    if (id) {
      axios
        .get(`/products/${id}`)
        .then((res) => {
          setDetail(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [SearchParams]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products", { params: { limit: 6 } })
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const closeDetail = () => {
    setDetail(null);
    setSearchParams({});
  };

  let products = data?.map((el) => (
    <div key={el.id} className="products__card">
      <img
        onClick={() => setSearchParams({ detail: el.id })}
        className="products__card__img"
        src={el.images[0]}
        alt="ProductCardImg"
      />
      <div className="product__card__content">
        <h3 className="products__card__text">{el.title}</h3>
        <p className="products__card__par" title={el.description}>
          {el.description}
        </p>
        <div className="product__card__items">
          <h3 className="product__card__price">{el.price} руб</h3>
          <a href="#" className="product__card__shop">
            <img src={cart} alt="cart" /> В корзину
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="products">
        <div className="container">
          <h4 className="products__title">
            Главная &gt; Каталог &gt; <span>Готовые наборы</span>
          </h4>
          <h2 className="products__text">Готовые наборы</h2>
          <div className="products__items">
            <a href="#" className="product__items__text">
              Свадьба
            </a>
            <a href="#" className="product__items__text">
              Девичник
            </a>
            <a href="#" className="product__items__text">
              День рождения
            </a>
            <a href="#" className="product__items__text">
              8 марта
            </a>
            <a href="#" className="product__items__text">
              23 февраля
            </a>
            <a href="#" className="product__items__text">
              Новый год
            </a>
            <a href="#" className="product__items__text">
              День учителя
            </a>
            <a href="#" className="product__items__text">
              День рождения
            </a>
            <a href="#" className="product__items__text">
              8 марта
            </a>
          </div>
          <div className="products__cards">{products}</div>
          <Skeleton loading={loading} />
          <button className="products__btn">Показать ещё</button>
        </div>
      </section>
      {detail ? (
        <Model detail={closeDetail}>
          <div>
            <img
              className="products__card__img"
              src={detail.images[0]}
              alt={detail.title}
            />
            <h3 className="products__card__text">{detail.title}</h3>
            <p className="products__card__par" title={detail.description}>
              {detail.description}
            </p>
            <div className="product__card__items items2">
              <h3 className="product__card__price">{detail.price} руб</h3>
              <a href="#" className="product__card__shop">
                <img src={cart} alt="cart" /> В корзину
              </a>
            </div>
          </div>
        </Model>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
