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
    }

    if(byDefault) {
        console.log('filtred by default')
    }
    if(descending) {
      console.log('filtred by descending')
  }

    return (
      <div>
        <Header/>
        <FilterPanel sortElements={(methodOfSorting )=> sortElements(methodOfSorting)}/>
        <ItemList products={products}/>
      </div>
    )
  }
}
