import React from "react";
// import reactDom from "react-dom";
import Item from "../item/";
import "./item-list.css";

export default class ItemList extends React.Component {
  render() {
    const { products } = this.props;
    const { createModalBuyWindow } = this.props;
    const elements = products.map((item) => {
      return (
        <li key={item.id}>
          <Item {...item} createBuyWindow={createModalBuyWindow} />
        </li>
      );
    });
    return <ul className="catalog">{elements}</ul>;
  }
}
