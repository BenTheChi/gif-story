import React from 'react'

const Story = () => {
    return (
        <div className="story__container">
            <div id="pageContainer" className="page__container">Page <span id="pageCounter">1</span></div>
            <div className="gif__container story">
                <iframe src="https://giphy.com/embed/gw3IWyGkC0rsazTi" frameBorder="0" title="story" id="story-gif"></iframe>
                <p id="story-text">Text Here</p>
            </div>
            <div className="button__menu">
                <div className="button__container">
                    <button type="button" id="prev">Previous</button>
                </div>
                <div className="button__container">
                    <button type="button" id="new">New GIF</button>
                </div>
                <div className="button__container">
                    <button type="button" id="next">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Story;