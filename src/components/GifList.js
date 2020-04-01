import React from 'react'
import { render } from 'react-dom';

const GifList = props => {
  console.log(props)
      return (
          <ul>
        {props.gifs.map(gif => 
            <li key={gif.url} > <img src={gif.url}/> </li>)}
              
          </ul>
      )
  }



export default GifList;