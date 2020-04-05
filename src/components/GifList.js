import React, { Component } from 'react'

export class GifList extends Component {
  
  
  renderGif = () =>{
            
    return this.props.gifts.map(gif => <li><img src={gif.images.original.url}/></li> )
  }


  render() {
    return (
      <div>
        {this.renderGif()}
      </div>
    )
  }
}

export default GifList
