import React from "react";
// import reactDom from "react-dom";
import products from "../../data";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css"
import FilterPanel from "../filter-panel";


const App = () => {
  return (
    <div>
      <Header/>
      <FilterPanel/>
      <ItemList products={products}/>
    </div>
  )
}

export default App
