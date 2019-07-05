import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>GIPHY STORY</h1>
            <div>
                <iframe width="480" height="350" frameBorder="0" title="home" id = "home-gif"></iframe>
                <div className="menu">
                    <button type="button" id="loadBtn">Load Story</button>
                    <button type="button" id="createBtn">Create Story</button>
                    <button type="button" id="helpBtn">Help</button>
                </div>
            </div>
        </div>
    )
}

export default Home;