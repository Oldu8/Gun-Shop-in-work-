import React from "react";
// import reactDom from "react-dom";
import products from "../../data";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css"
import FilterPanel from "../filter-panel";

export default class App extends React.Component {

  state = {
    filterStatus: {
      descending: false,
      ascending: false,
      byDefault: true,
    },
    term: '',
  }

  render() {
    const {descending, ascending, byDefault} = this.state;
    const {term} = this.state;
    
    let productArr = [ ...products];

    // Sort block

    const sortItems = (method)=> {

      if (method === 'by descending'){
        this.setState({
          descending: true,
          ascending: false,
          byDefault: false,
        })
      }

      if (method === 'by default'){
        this.setState({
          descending: false,
          ascending: false,
          byDefault: true,
        })
      }

      if (method === 'by ascending'){
        this.setState({
          descending: false,
          ascending: true,
          byDefault: false,
        })
      }
    }

    const sortDescending = (arr) => {
      arr.sort((a,b) => a.price - b.price )
    };

    const sortAscending = (arr) => {
      arr.sort((a,b) => b.price - a.price )
    };

    const sortDefault = (arr) => {
      arr.sort((a,b) => a.id - b.id )
    };

    if(byDefault) {
      sortDefault(productArr)
    }
    if(descending) {
      sortDescending(productArr);
    }
    if(ascending) {
      sortAscending(productArr);
    }

    // Search block 
    const changeOnSearch = (term) => {
      this.setState({
        term: term
      })
    } 
    
    const search = (items, term )=>{
      if(term.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  };

  const searchedItems = search(productArr, term);

    // return block
    return (
      <div>
        <Header/>
        <FilterPanel 
          sortElements={(method)=> sortItems(method)}
          changeOnSearch={(term) => changeOnSearch(term)}
        />
        <ItemList 
          products={searchedItems}
        />
      </div>
    )
  }
}
