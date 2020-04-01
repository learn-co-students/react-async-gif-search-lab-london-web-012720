import React, { Component } from 'react';

class GifSearch extends Component {
    state = { 
        query: ""
     }

    // handleChange = (event) => {
    //     this.setState({
    //         query: event.target.value
    //     })
    // }

    render() { 
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="name" />
                    {/* value={this.state.query} onChange={this.handleChange}/>  */}
                </form>
            </div>
        )
    }
}
 
export default GifSearch;