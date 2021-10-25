import React from "react";
import reactDom from "react-dom";
// import products from "./data";
import Header from "./components/header/header";
import SearchPanel from "./components/serch-panel/search-panel";
import ItemList from "./components/item-list/item-list";
import "./index.css"
import products from "./data";


const App = () => {
  return (
    <div>
      <Header/>
      <SearchPanel/>
      <ItemList products={products}/>
    </div>
  )
}
reactDom.render(<App/>, document.getElementById('root'))