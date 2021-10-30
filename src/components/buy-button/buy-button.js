import React from "react";
// import reactDom from "react-dom";
import "./buy-button.css"

const BuyButton =( {id, createBuyWindow})=> {

const buyButtonClicked =()=> {
    // console.log(id)
    createBuyWindow(id);
} 

    return (
        <input 
            type="submit" 
            value="BUY" 
            className="buy__btn btn" 
            onClick={buyButtonClicked}
        >
        </input>
    )
}

export default BuyButton