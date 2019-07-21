import history from '../history'

export const loadStory = formValues => {
    console.log("testing")
    console.log(formValues)

    history.push('/title');

    return {
        type: 'CREATE_STORY',
        payload: formValues
    }
}

export const changeCurrentSlide = (slide) => {
    return {
        type: 'CHANGE_SLIDE',
        payload: slide
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