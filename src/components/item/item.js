import React from "react";
import BuyButton from "../buy-button/";
import "./item.css";

const Item = ({ name, category, price, id, createBuyWindow }) => {
  return (
    <div className="product__item">
      <div className="product__info">
        <h3 className="headline__product text">{name}</h3>
        <h4 className="category__product text">{category}</h4>
        <h4 className="price__product text">{price} $</h4>
      </div>
      <BuyButton id={id} createBuyWindow={createBuyWindow} />
    </div>
  );
};

export default Item;
