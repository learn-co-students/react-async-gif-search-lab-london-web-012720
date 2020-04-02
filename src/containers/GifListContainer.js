
import React from 'react'
import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const url = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

class GiftListContainer extends React.Component{

    constructor(){
        super()
        this.state = {
          allGifs: []
        }
    }
    
    componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then(json => 
          this.setState({allGifs:json.data}))
    }

    filterGifs = (state) => {
        const newArr = this.state.allGifs.filter(gif => gif.title.includes(state))
        this.setState({allGifs:newArr})

    }

    render(){
        return (
        <div>
           <GifSearch filterGifs={this.filterGifs}/>
           <br></br>
            {this.state.allGifs.map(gif => <GiftList key={gif.id} gif={gif} />)}
        </div>
        )
    }
}

export default GiftListContainer