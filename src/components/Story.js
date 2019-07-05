import React from 'react'

const Story = () => {
    return (
        <div>
            <div id="pageCounter"></div>
            <div id="story">
                <iframe src="" width="480" height="400" frameBorder="0" title="story" id="story-gif"></iframe>
                <p id="story-text"></p>
            </div>
            <div>
                <button type="button" id="prev">Previous</button>
                <button type="button" id="new">New GIF</button>
                <button type="button" id="next">Next</button>
            </div>
        </div>
    )
}

export default Story;