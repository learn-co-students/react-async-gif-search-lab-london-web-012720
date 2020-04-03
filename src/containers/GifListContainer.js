import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
    
    state = {
        gifs: []
    }

    render() {
        console.log(this.state)
        return (
            <div>
                < GifSearch getGifs={this.getGifs} />
                < GifList gifs={this.state.gifs}/>
                {/* {this.state.gifs.map((gif, id) => <p key={id}>{gif.url}</p>)} */}
            </div>
        )
    }

    getGifs = (input = 'simpsons') => {
    
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.getGifs()
    }
}

export default GifListContainer