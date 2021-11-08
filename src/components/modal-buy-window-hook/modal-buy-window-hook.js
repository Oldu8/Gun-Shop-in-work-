import React, { useEffect, useState } from "react";
import "./modal-buy-window-hook.css";
import TYPage from "../modal-ty-window";

const ModalBuyWindowHook = (props) => {
  const { isActive, chosenItem, closeModal } = props;
  const { name, category, price } = { ...chosenItem };

  const [isActiveTYPage, setTYActive] = useState(false);

  /// state for validate form
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userPhoneDirty, setUserPhoneDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('');
  const [userPhoneError, setUserPhoneError] = useState('');
  const [formValid, setFormValid] = useState(false);
  console.log(formValid)

  useEffect(()=> {
    if(userNameError || userPhoneError){
      setFormValid(false)
    } else {
      console.log('form valid' + formValid)
      setFormValid(true)
    }
  }, [userNameError, userPhoneError])

  // func
  const userNameHandler = (e) => {
    setUserName(e.target.value);
    const re = /[A-Za-z]+$/;
    if (!re.test(String(e.target.value).toLowerCase())){
      setUserNameError('Некорректный формат имени')
    } if (e.target.value.length <3 || e.target.value.length >8) {
      setUserNameError('Короткое или слишком длинное имя')
    }
     else {
      setUserNameError('')
    }
  }
  
  const userPhoneHandler = (e) => {
    setUserPhone(e.target.value);
    const regex = /^[0-9]+$/;
    if(e.target.value.length <8 || e.target.value.length >12) {
      console.log('количество цифр в номере:' + e.target.value.length);
    } if (!regex.test(String(e.target.value))){
      setUserPhoneError('Некорректный формат номера')
    }
    else {
      console.log ('number is ok')
      setUserPhoneError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setUserNameDirty(true);
      case "phone":
        setUserPhoneDirty(true);
        break;
    }
  };

  /// main return
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
            {(userNameDirty && userNameError) && 
              <div className='error__input'>{userNameError}</div>
            }
            <input 
            onChange={e => userNameHandler(e)}
              value={userName}
              onBlur={e => blurHandler(e)}
              type="text"
              className="name__user input__user"
              placeholder="Your name"
              name='name'
            ></input>
            {(userPhoneDirty && userPhoneError) && 
              <div className="error__input">{userPhoneError}</div>
            }
            <input
              onChange={e => userPhoneHandler(e)}
              onBlur={e => blurHandler(e)}
              value={userPhone}
              type="tel"
              className="phone__user input__user"
              placeholder="Your phone"
              name='phone'
            ></input>
          </form>
          <button
            disabled={!formValid}
            type="submit"
            className="order__btn btn"
            onClick={() => setTYActive(true)}
          >
            Make order
          </button>
        </div>
      </div>
      <TYPage isActive={isActiveTYPage} setActive={setTYActive} />
    </section>
  );
};

export default ModalBuyWindowHook;
