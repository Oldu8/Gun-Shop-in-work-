import React from "react";
// import reactDom from "react-dom";
import products from "../../data";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css"
import FilterPanel from "../filter-panel";
// import { render } from "@testing-library/react";


export default class App extends React.Component {

  state = {
    descending: false,
    ascending: false,
    byDefault: true,
    cheapest: false,
    expensive: false
}
  render() {
    const {descending, ascending, byDefault, cheapest, expensive} = this.state;

    const sortElements = (method)=> {

      if (method === 'by descending'){
        this.setState({
          descending: true,
          ascending: false,
          byDefault: false,
          cheapest: false,
          expensive: false
        })
      }
      if (method === 'by default'){
        this.setState({
          descending: false,
          ascending: false,
          byDefault: true,
          cheapest: false,
          expensive: false
        })
      }
      if (method === 'by ascending'){
        this.setState({
          descending: false,
          ascending: true,
          byDefault: false,
          cheapest: false,
          expensive: false
        })
      }
      if (method === 'the cheapest'){
        this.setState({
          descending: false,
          ascending: false,
          byDefault: false,
          cheapest: true,
          expensive: false
        })
      }
      if (method === 'most expensive'){
        this.setState({
          descending: false,
          ascending: false,
          byDefault: false,
          cheapest: false,
          expensive: true
        })
      }
    }

    let productArr = products;

    const sortDescending = (arr) => {
      arr.sort((a,b) => a.price - b.price )
    }

    const sortAscending = (arr) => {
      arr.sort((a,b) => b.price - a.price )
    }

    const sortDefault = (arr) => {
      arr.sort((a,b) => a.id - b.id )
    }

    if(byDefault) {
      sortDefault(productArr)
    }
    if(descending) {
      sortDescending(productArr);
    }
    if(ascending) {
      sortAscending(productArr);
    }
    if(cheapest) {
      console.log('filtred by cheapest');
      sortDescending(productArr);
      let cheapestItem = productArr[0];
      console.log(cheapestItem)
    }
    if(expensive) {
      console.log('filtred by expensive')
      sortAscending(productArr);
      let expensiveItem = productArr[0];
      console.log(expensiveItem)
    }

    return (
      <div>
        <Header/>
        <FilterPanel sortElements={(method)=> sortElements(method)}/>
        <ItemList products={productArr}/>
      </div>
    )
  }
}
