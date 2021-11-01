import React from "react";
import "./modal-window.css"

export default class ModalBuyWindow extends React.Component {

    render() {

        const { statusModalBuyWindow, chosenItem } = this.props;  
        const { name, category, price} = { ...chosenItem};

        console.log(statusModalBuyWindow);
        console.log(name)

        if (!statusModalBuyWindow) {
             return (
                <div>
                <p>Tyt ni4ego net</p>
                </div>
             )
        } 
        if (statusModalBuyWindow)  {
            return(
                <section className="modal__wrapper">
                    <div className="modal__window">
                        <div className="product__block">
                            <h2 className="header__headline">Your choosed:</h2>
                            <h3 className="name__headline">
                                {name}
                            </h3>
                            <h4 className="category__headline">
                                {category}
                            </h4>
                            <h4 className="price__headline">
                                {price}$
                            </h4>
                        </div>
                        <div className="user__block">
                            <h2 className="header__headline">To finish order enter your data:</h2>
                            <form className="input__form">
                                <input type='text' className="name__user input__user" placeholder="Your name">
                                </input>
                                <input type='text' className="phone__user input__user" placeholder="Your phone">
                                </input>
                            </form>
                            <button className="order__btn btn">Make order</button>
                        </div>
                    </div>                    
                </section>
            )
        }
    }
}
