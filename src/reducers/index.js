import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const storyReducer = (story=null, action) => {
    switch(action.type){
        case 'CREATE_STORY':
            return action.payload
        case 'CHANGE_GIF':
            return action.payload
        case 'LOAD_STORY':
            return action.payload
        case 'GET_STORY':
            return story
        default:
            return story;
    }
}

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