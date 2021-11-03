import React from "react";
import SearchPanel from "../serch-panel";
import SortingButtons from "../sorting-buttons";
import "./filter-panel.css";

const arrWithButtons = [
  { title: "by descending", value: "desc" },
  { title: "by ascending", value: "asc" },
  { title: "by default", value: "def" },
];
let uniqeKey = 0;

const FilterPanel = ({ sortElements, changeOnSearch }) => {
  return (
    <div className="filter__block">
      <div className="wrapper">
        <SearchPanel changeOnSearch={(term) => changeOnSearch(term)} />
        <div className="sorting_buttons__block">
          {arrWithButtons.map((item) => {
            return (
              <div className="sort__buttons" key={uniqeKey++}>
                <SortingButtons
                  label={item.title}
                  sorted={() => sortElements(item.value)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
