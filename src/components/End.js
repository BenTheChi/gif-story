import React from 'react'
import {Link} from 'react-router-dom';


const End = () => {
    return (
        <div className="story__container">
            <div className="gif__container end">
                <iframe src="https://giphy.com/embed/69pKX6fv2QgTe" frameBorder="0" title="story" id="end-gif"></iframe>
            </div>
            <div className="button__menu">
                <div className="button__container">
                    <button type="button" id="prev"><Link to={`/story`}>Previous</Link></button>
                </div>
                <div className="button__container">
                    <button type="button" id="save">Save</button>
                </div>
                <div className="button__container">
                    <button type="button" id="home"><Link to={`/`}>Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default End;