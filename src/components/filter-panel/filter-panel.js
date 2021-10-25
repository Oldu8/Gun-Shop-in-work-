import React from "react";
import SearchPanel from "../serch-panel";
import SortingButtons from "../sorting-buttons"
import "./filter-panel.css"

const FilterPanel = () => {
    return(
    <div className="filter__block">
        <SearchPanel/>
        <SortingButtons label='descending'/>
        <SortingButtons label='ascending'/>
        <SortingButtons label='byDefault'/>
    </div>
    )
}

export default FilterPanel