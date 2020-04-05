import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export class GifListContainer extends Component {

  state = {
    data: [],
    numberOfGift: 10
    
  }
  
  
  
  handleSubmit = (searchTerm = 'cat') => {
   
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=pxMrIXy9EMfgv10P7uuc7NFCWBKtTuw6&limit=10`)
    .then(resp => resp.json())
    .then(Obj => {
      this.setState({
        data: Obj.data
      },  () => console.log(this.state.data))
    })
  }

  componentDidMount(){
    this.handleSubmit()
  }

 

  render() {
    return (
      <div>      
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifts={this.state.data} />
 
       
      </div>
    )
  }
}

export default GifListContainer
