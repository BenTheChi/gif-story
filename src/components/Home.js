import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className="title__home">GIPHY STORY</h1>
            <div className="home__main">
                <div className="gif__container">
                    <iframe frameBorder="0" title="home" id="home-gif" src="https://giphy.com/embed/8dYmJ6Buo3lYY"></iframe>
                </div>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="button" id="loadBtn"><Link to={`/load`}>Load Story</Link></button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="createBtn"><Link to={`/create`}>Create Story</Link></button> 
                    </div>
                    <div className="button__container">
                        <button type="button" id="helpBtn"><Link to={`/help`}>Help</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;