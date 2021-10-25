import React from "react";
import reactDom from "react-dom";
import products from "../../data";
import Header from "../header/";
import SearchPanel from "../serch-panel/";
import ItemList from "../item-list/";
import "./app.css"


const App = () => {
  return (
    <div>
      <Header/>
      <SearchPanel/>
      <ItemList products={products}/>
    </div>
  )
}

export default App
