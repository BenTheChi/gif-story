import { combineReducers } from 'redux'

//Loads current story and changes the preferred GIF of current story
const editStoryReducer = (story=null, action) => {
    return story
}

//Loads the next or previous slide.  Also reloads current slide.
const currentSlideReducer = (currentSlide=null, action) => {
    return currentSlide
}

//Deletes and loads stories
const editStoriesReducer = (stories=null, action) => {
    return stories
} 

export default combineReducers({
    story: editStoryReducer,
    currentSlide: currentSlideReducer,
    stories: editStoriesReducer
})