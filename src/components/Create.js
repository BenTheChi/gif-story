import React from 'react'

const Create = () => {
    return (
        <div>
            <form>
                <div>
                    <label for="storyTitle">Story Title</label>
                    <input type="text" id="storyTitle" placeholder="Example - Happy People: A Tragedy"></input>
                    <label for="storyBody">Story body</label>
                    <textarea id="storyBody" rows="15" placeholder="Sections are divided by any punctuation or enclosed in parenthesis.  Sections longer than 80 characters are ignored.  Sections in ALL CAPS (usually character names) are images instead of gifs."></textarea>
                </div>
                <div>
                    <button type="button" id="startBtn">Start</button>
                    <button type="button" id="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Create;