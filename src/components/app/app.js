import React from "react";
import products from "../../data";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css";
import FilterPanel from "../filter-panel";
import ModalBuyWindowHook from "../modal-buy-window-hook";

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
    ItemForModal: {},
  };

  sortItems = (method) => {
    this.setState({
      filterStatus: method,
    });
  };

  render() {
    const { filterStatus, term, modalBuyWindow, ItemForModal } = this.state;

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
      const chosenItem = products.find((item) => item.id === id);
      this.setState({
        modalBuyWindow: true,
        ItemForModal: chosenItem,
      });
    };

    const closeModalBuyWindow = () => {
      this.setState({
        modalBuyWindow: false,
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
        <ModalBuyWindowHook
          isActive={modalBuyWindow}
          chosenItem={ItemForModal}
          closeModal={closeModalBuyWindow}
        />
      </div>
    );
  }
}
