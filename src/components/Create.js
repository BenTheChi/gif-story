import React from 'react'

const Create = () => {
    return (
        <div>
            <form className="create__form">
                <div>
                    <div className="create__container">
                        <label for="storyTitle"><h1 className="create__title">Story Title</h1></label>
                        <input type="text" id="storyTitle" placeholder="Example - Happy People: A Tragedy" className="input__area"></input>
                    </div>
                    <div className="create__container">
                        <label for="storyBody"><h1 className="create__title">Story Body</h1></label>
                        <textarea id="storyBody" rows="15" placeholder="Sections are divided by any punctuation or enclosed in parenthesis.  Sections longer than 80 characters are ignored." className="input__area"></textarea>
                    </div>
                </div>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="button" id="startBtn">Start</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="cancelBtn">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create;