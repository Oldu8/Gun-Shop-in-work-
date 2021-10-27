import React from "react";
import SearchPanel from "../serch-panel";
import SortingButtons from "../sorting-buttons"
import "./filter-panel.css"

const FilterPanel = ( {sortElements} ) =>{ 
    const arrWithButtons = ['by descending', 'by ascending', 'by default', 'the cheapest','most expensive'];
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
            <SearchPanel/>
            <div className="sorting_buttons__block">
                {buttonsToSort}
            </div>
        </div>
        
    </div>
    )
}

export default FilterPanel