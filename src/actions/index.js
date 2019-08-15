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

export const newGif = (story, slide) => async dispatch => {
    const newStory = new Story(story.title, story.slides)
    await newStory.changeGif(slide)

    dispatch({
        type: 'CHANGE_GIF',
        payload: newStory
    })
}

export const loadStory = (title) => {
    const stories = JSON.parse(window.localStorage.getItem("stories"))
    const story = new Story(title, stories[title])

    return {
        type: 'LOAD_STORY',
        payload: story
    }
}

export const getStory = (story) => {
    return {
        type: 'GET_STORY',
        payload: story
    }
}

export const getCurrentSlide = () => {
    return {
        type: 'GET_SLIDE',
        payload: null
    }
}

export const changeCurrentSlide = (slide) => {
    return {
        type: 'CHANGE_SLIDE',
        payload: slide
    }
}

export const getStories = () => {
    const stories = JSON.parse(window.localStorage.getItem("stories"))

    return {
        type: 'GET_STORIES',
        payload: stories
    }
}

export const deleteStory = (title) => {
    const stories = JSON.parse(window.localStorage.getItem("stories"))
    delete stories[title]
    window.localStorage.setItem("stories", JSON.stringify(stories))

    return {
        type: 'DELETE_STORY',
        payload: stories
    }
}
