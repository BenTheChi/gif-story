export const loadStory = (story) => {
    return {
        type: 'LOAD_STORY',
        payload: story
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