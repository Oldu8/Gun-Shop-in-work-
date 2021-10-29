import React from "react";
import "./search-panel.css"

export default class SearchPanel extends React.Component {

  state = {
    term:''
  }

  changeOnSearch = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.changeOnSearch(term)
  }

  render() {
    return (
      <input 
        placeholder="Type here to search guns"
        className="search__panel"
        value={this.state.term}
        onChange={this.changeOnSearch}
        >
        </input>
    )
  }
}

 