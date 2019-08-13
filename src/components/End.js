import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getStory } from '../actions';


class End extends React.Component {
    componentDidMount(){
        this.props.getStory()
    }

    onSave = () => {
        let title = this.props.title
        let slides = this.props.slides
        let stories = {}
        if(window.localStorage.getItem("stories")){
            stories = JSON.parse(window.localStorage.getItem("stories"))
        }

        stories[title] = slides
        console.log(stories)
        window.localStorage.setItem("stories", JSON.stringify(stories))

        if(JSON.parse(window.localStorage.getItem("stories"))[title]){
            alert(this.props.title + " saved successfully!")
        }
        else{
            alert(this.props.title + " saved failed!")
        }
    }

    render(){
        return (
            <div className="story__container">
                <div className="gif__container end">
                    <iframe src="https://giphy.com/embed/69pKX6fv2QgTe" frameBorder="0" title="story" id="end-gif"></iframe>
                </div>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="button" id="prev"><Link to={`/story`}>Previous</Link></button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="save" onClick={this.onSave}>Save</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="home"><Link to={`/`}>Home</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    if(state.story){
        return {title: state.story.title, slides: state.story.slides};
    }

    return {}
}

export default connect(mapStateToProps, {getStory})(End);