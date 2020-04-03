import React, {Component} from 'react';

class GifSearch extends Component {

    state = {
        input: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getGifs(this.state.input)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.input} onChange={event => this.setState({input: event.target.value})} placeholder='search'/>
                </form>
            </div>
        )
    }

}

export default GifSearch