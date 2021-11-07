import React, { useState } from "react";
import "./modal-buy-window-hook.css";
import TYPage from "../modal-ty-window";

const ModalBuyWindowHook = (props) => {
  const { isActive, chosenItem, closeModal } = props;
  const { name, category, price } = { ...chosenItem };

  const [isActiveTYPage, setTYActive] = useState(false);

  return (
    <section
      className={isActive ? "modal__wrapper active" : "modal__wrapper"}
      onClick={() => closeModal(false)}
    >
      <div
        className={isActive ? "modal__window active" : "modal__window"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="product__block">
          <h2 className="header__headline">Your choosed:</h2>
          <h3 className="name__headline">{name}</h3>
          <h4 className="category__headline">{category}</h4>
          <h4 className="price__headline">{price}$</h4>
        </div>
        <div className="user__block">
          <h2 className="header__headline">To finish order enter your data:</h2>
          <form className="input__form">
            <input
              type="text"
              className="name__user input__user"
              placeholder="Your name"
            ></input>
            <input
              type="text"
              className="phone__user input__user"
              placeholder="Your phone"
            ></input>
          </form>
          <button className="order__btn btn" onClick={() => setTYActive(true)}>
            Make order
          </button>
        </div>
      </div>
      <TYPage isActive={isActiveTYPage} setActive={setTYActive} />
    </section>
  );
};

export default ModalBuyWindowHook;
