import React from 'react'
import { deleteStory, loadStory, getStories, changeCurrentSlide } from '../actions'
import { connect } from 'react-redux'
import history from '../history'

class Load extends React.Component {
    componentDidMount(){
        this.props.getStories()
    }

    deleteEntry(title){
        this.props.deleteStory(title)
    }

    loadEntry(title){
        this.props.loadStory(title)
        this.props.changeCurrentSlide(1)
        history.push('/title');
    }

    renderList(){
        const storyArray = Object.entries(this.props.stories)

        const entries = storyArray.map((story) => {
            const title = story[0]

            return(
            <div className="load__entry" key={title}>
                <button className="button__story" onClick={() => this.loadEntry(title)}>
                    {title}
                </button>
                <button className="button__delete" onClick={() => this.deleteEntry(title)}>DELETE</button>
            </div>
            )
        })

        if(entries.length === 0){
            return(<h2>No stories saved yet!</h2>)
        }

        return entries
    }

    render(){
        return (
        <div>
            <h1 className="title__home">Saved Stories</h1>
            <div className="load__menu"> {this.renderList()} </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {story: state.story, stories: state.stories}
}

export default connect(mapStateToProps, {loadStory, deleteStory, getStories, changeCurrentSlide})(Load);