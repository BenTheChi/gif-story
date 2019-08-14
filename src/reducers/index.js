import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

//Loads current story and changes the preferred GIF of current story
const storyReducer = (story=null, action) => {
    // console.log(story)
    // console.log(action.payload)

    switch(action.type){
        case 'CREATE_STORY':
            return action.payload
        case 'GET_STORY':
            return story
        case 'CHANGE_GIF':
            return action.payload
        case 'LOAD_STORY':
            return action.payload
        default:
            return story;
    }
}

//Loads the next or previous slide.  Also gets current slide.
const currentSlideReducer = (currentSlide=1, action) => {
    switch(action.type){
        case 'GET_SLIDE':
            return currentSlide
        case 'CHANGE_SLIDE':
            return action.payload
        default:
            return currentSlide
    }
}

//Deletes and loads stories
const savedStoriesReducer = (stories={}, action) => {
    switch(action.type){
        case 'GET_STORIES':
            return action.payload
        case 'DELETE_STORY':
            return action.payload
        default:
            return stories;
    }
} 

export default combineReducers({
    story: storyReducer,
    slide: currentSlideReducer,
    stories: savedStoriesReducer,
    form: formReducer
})