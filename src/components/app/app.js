import React from "react";
// import reactDom from "react-dom";
import products from "../../data";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css";
import FilterPanel from "../filter-panel";
import ModalBuyWindow from "../modal-buy-window/modal-buy-window";

const sortByParams = (arr, field, type) => {
  return type === "asc"
    ? [...arr].sort((a, b) => b[field] - a[field])
    : [...arr].sort((a, b) => a[field] - b[field]);
};

export default class App extends React.Component {
  state = {
    filterStatus: "",
    term: "",
    modalBuyWindow: false,
    chosenItemForModalBuyWindow: {},
  };

  sortItems = (method) => {
    this.setState({
      filterStatus: method,
    });
  };

  render() {
    const { filterStatus, term, modalBuyWindow, chosenItemForModalBuyWindow } =
      this.state;

    let productArr = [...products];

    // Sort block
    const filtredProductArr = !!filterStatus
      ? sortByParams(productArr, "price", filterStatus)
      : sortByParams(productArr, "id");

    // Search block
    const changeOnSearch = (term) => {
      this.setState({
        term: term,
      });
    };

    const search = (items, term) => {
      if (term.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    };

    const searchedItems = search(filtredProductArr, term);

    //Modal Buy window
    const createModalBuyWindow = (id) => {
      console.log(id);
      const chosenItem = products.find((item) => item.id === id);
      this.setState({
        modalBuyWindow: true,
        chosenItemForModalBuyWindow: chosenItem,
      });
    };

    // return block
    return (
      <div>
        <Header />
        <FilterPanel
          sortElements={this.sortItems}
          changeOnSearch={(term) => changeOnSearch(term)}
        />
        <ItemList
          products={searchedItems}
          createModalBuyWindow={(id) => createModalBuyWindow(id)}
        />
        <ModalBuyWindow
          statusModalBuyWindow={modalBuyWindow}
          chosenItem={chosenItemForModalBuyWindow}
        />
      </div>
    );
  }
}
