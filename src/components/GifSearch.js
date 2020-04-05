import React, { Component } from 'react'

export class GifSearch extends Component {
state = {
  gifname: ''
}

handleChange = (e) =>{

this.setState({
  [e.target.name]:e.target.value
}, () => console.log(this.state.gifname))
}

handleSubmitForm = (e) =>{
  e.preventDefault();
  this.props.handleSubmit(this.state.gifname)
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            Gif Type
            <input id='gifname' name='gifname' type='text' value={this.state.searchTerm}
            onChange={this.handleChange}/>
            <div>
              <button type="submit">Search gif</button>
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default GifSearch
