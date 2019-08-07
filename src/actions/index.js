import history from '../history'
import Story from '../story/Story'
import builder from '../story/builder'

export const createStory = formValues => async dispatch => {
    let slides = null
    let story = null

    if(formValues.body){
        slides = await builder(formValues.body)
    }

    story = new Story(formValues.title.toUpperCase(), slides)

    dispatch({
        type: 'CREATE_STORY',
        payload: story
    })

    history.push('/title');
}

export const changeCurrentSlide = (slide) => {
    return {
        type: 'CHANGE_SLIDE',
        payload: slide
    }
}

export const getCurrentSlide = () => {
    return {
        type: 'GET_SLIDE',
        payload: null
    }
}

export const changeCurrentGif = (num) => {
    return {
        type: 'CHANGE_GIF',
        payload: num
    }
}

export const loadStories = (stories) => {
    return {
        type: 'LOAD_STORIES',
        payload: stories
    }
}

export const deleteStory = (story) => {
    return {
        type: 'DELETE_STORY',
        payload: story
    }
}

export const saveStory = (story) => {
    return {
        type: 'SAVE_STORY',
        payload: story
    }
}

export const getStory = (story) => {
    return {
        type: 'GET_STORY',
        payload: story
    }
}