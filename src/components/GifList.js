
import React from 'react'

const GiftList = (props) => {
    return (
    <div>
        <ul>
            <li>
                <img src={props.gif.images.original.url}/>
            </li>
        </ul>
    </div>
    )
}

export default GiftList