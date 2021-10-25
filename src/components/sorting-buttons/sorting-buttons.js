 import React from "react";
 import "./sorting-buttons.css"

 export default class SortingButtons extends React.Component {
    render() {
        // const { descending, ascending,byDefault } = this.props;
        const label = this.props;

        return (
            <button className="sorting__button btn" value={label}>
                
            </button>
        )
    }
 }

