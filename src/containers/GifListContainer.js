import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  fetchData(term = "dolphin") {
    const api_Key = "tQcfiyAl2CeOO2oTaHozclV1Hh2NHZHR";
    const search = term;
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_Key}&rating=g`
    )
      .then(res => res.json())
      .then(gifs => {
        this.setState({
          gifs: gifs.data
        });
      });
  }
  handleClick = e => {
    e.preventDefault();
    this.fetchData(e.target.gifSearch.value);
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const gifCards = this.state.gifs.map(gif => (
      <GifList gif={gif} key={gif.id} />
    ));
    return (
      <div>
        <GifSearch
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <ul>{gifCards}</ul>
      </div>
    );
  }
}
