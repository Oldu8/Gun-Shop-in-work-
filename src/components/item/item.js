import React from "react";
import reactDom from "react-dom";
import products from "../../data";
import BuyButton from "../buy-button/buy-button";
import "./item.css"

const Item = ( { idx } ) => {
    return (
        <div className="product__item">
            <div className="product__info">
                <h3 className="headline__product text">{products[ idx ].name}</h3>
                <h4 className="category__product text">{products[ idx ].category}</h4>
                <h4 className="price__product text">{products[ idx ].price} $</h4>
            </div>
            <BuyButton/>
        </div>
    )
}

export default Item