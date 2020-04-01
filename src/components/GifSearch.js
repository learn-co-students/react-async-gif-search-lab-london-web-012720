import React, { Component } from "react";
import Style from "./GifSearch.module.css";

class GifSearch extends Component {
  render() {
    return (
      <form
        className="search-bar"
        onSubmit={this.props.handleClick}
      >
        <label for="gifSearch">Enter A Search Term:</label>
        <input type="text" name="gifSearch"></input>
        <button className="btn btn-success" type="Submit">
          Find Gif
        </button>
      </form>
    );
  }
}
export default GifSearch;
