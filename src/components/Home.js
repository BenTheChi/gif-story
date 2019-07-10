import React from 'react'

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
                        <button type="button" id="loadBtn">Load Story</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="createBtn">Create Story</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="helpBtn">Help</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;