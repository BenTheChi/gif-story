import React from 'react'
import { deleteStory, getStory, getStories } from '../actions'
import { connect } from 'react-redux'

class Load extends React.Component {
    componentDidMount(){
        this.props.getStories()
    }

    deleteEntry(title){
        this.props.deleteStory(title)
    }

    renderList(){
        const storyArray = Object.entries(this.props.stories)

        return storyArray.map((story) => {
            return(
            <div className="item">
                <a className="title">
                    {story[0]}
                </a>
                <button onClick={() => this.deleteEntry(story[0])}>DELETE</button>
            </div>
            )
        })
    }

    render(){
        console.log(this.props)
        return (<div className="list"> {this.renderList()} </div>)
    }
}


const mapStateToProps = (state) => {
    console.log("second")
    return {story: state.story, stories: state.stories}
}

export default connect(mapStateToProps, {getStory, deleteStory, getStories})(Load);