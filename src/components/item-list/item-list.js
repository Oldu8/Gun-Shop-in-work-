import React from "react";
import reactDom from "react-dom";
import Item from "../item/item";
import "./item-list.css"

const ItemList = ({products}) => {
    const elements = products.map((item) => {
        return (
            <li>
                <Item 
                    name={item.name}
                    category={item.category}
                    price={item.price}
                />
            </li>
        )
    })


    return(
          <ul className="catalog">
              {elements}
        </ul>
    )
}

export default ItemList