import React from "react";
//  import reactDom from "react-dom";
import "./sorting-buttons.css";

export default class SortingButtons extends React.Component {
  render() {
    const { label, sorted } = this.props;
    return (
      <button className="sorting__button btn" onClick={sorted}>
        {label}
      </button>
    );
  }
}
