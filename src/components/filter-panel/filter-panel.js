import React from "react";
import SearchPanel from "../serch-panel";
import SortingButtons from "../sorting-buttons"
import "./filter-panel.css"

const FilterPanel = ( {sortElements, changeOnSearch } ) =>{ 
    const arrWithButtons = ['by descending', 'by ascending', 'by default'];
    let uniqeKey = 0;

    const buttonsToSort = arrWithButtons.map((item) => {
        return (
        <div className='sort__buttons' key={uniqeKey++}>
            <SortingButtons 
                label={item}
                sorted={()=> sortElements(item)}/>
        </div>
        )
    })

    return(
    <div className="filter__block">
        <div className='wrapper' >
            <SearchPanel 
                changeOnSearch = {(term)=> changeOnSearch(term)}/>
            <div className="sorting_buttons__block">
                {buttonsToSort}
            </div>
        </div>
        
    </div>
    )
}

export default FilterPanel