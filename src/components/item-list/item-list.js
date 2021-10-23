import React from "react";
import reactDom from "react-dom";
import Item from "../item/item";
import "./item-list.css"

const ItemList = () => {
    return(
          <ul className="catalog">
              <li><Item idx="0"/></li>
              <li><Item idx="1"/></li>
              <li><Item idx="2"/></li>
        </ul>
    )
}

export default ItemList