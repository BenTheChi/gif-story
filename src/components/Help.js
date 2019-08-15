import React from 'react'
import {Link} from 'react-router-dom'

const Help = () => {
    return (
        <div className="help__container">
            <h1 className="title__home">Help</h1>
            <ul>
                <li>To start create a story with the 'Create Story' Menu</li>
                <li>Stories are broken into slides by punctuations, numbers, and newlines.  Sections longer than 80 characters are ignored.  Shorter sections will result in better stories.</li>
                <li>Use the 'Previous' and 'Next' buttons to view the created Gif Story</li>
                <li>'New Gif' will replace a gif for a particular section</li>
                <li>At the end you can save your story with it's current Gifs to your local storage</li>
                <li>To load or delete saved stories go to the 'Load' screen</li>
            </ul>
            <button><Link to={`/`}>Home</Link></button>
        </div>
    )
}

export default Help;