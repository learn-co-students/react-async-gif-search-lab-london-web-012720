import React from 'react'

class GifSearch extends React.Component{

    constructor(){
        super()
        this.state = {
            gif: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
            event.preventDefault()
        this.props.filterGifs(this.state.gif)
    }

    render(){
        return (
            <div>
                <h3>Enter a Search Term:</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}> 
                    <input type="text" name="gif" value={this.state.gif} onChange={(event) => this.handleInput(event)}/>
                    <button type="submit">Find Gifs</button>
                </form>
            </div> 
        )
    }
}

export default GifSearch