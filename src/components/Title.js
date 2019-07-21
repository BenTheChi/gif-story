import React from 'react'
import {Link} from 'react-router-dom'

const Story = () => {
    return (
        <div className="title__container">
            <div>
                <h1 className="title__title">TITLE GOES HERE</h1>
                <button><Link to={`/story`}>Start</Link></button>
            </div>
        </div>
    )
}

export default Story;