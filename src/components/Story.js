import React from 'react'
import history from '../history'
import { connect } from 'react-redux';
import { getStory, getCurrentSlide, changeCurrentSlide, changeCurrentGif } from '../actions';

class Story extends React.Component {

    componentDidMount(){
        this.props.getStory()
    }

    onNext = () => {
        if(this.props.story && this.props.slide){
            const max = this.props.story.slides.length

            if(this.props.slide + 1 <= max){
                this.props.changeCurrentSlide(this.props.slide + 1)
            }
            else{
                history.push('/end');
            }
        }
    }

    onPrevious = () => {
        if(this.props.story && this.props.slide){
            if(this.props.slide - 1 > 0){
                this.props.changeCurrentSlide(this.props.slide - 1)
            }
            else{
                history.push('/title');
            }
        }
    }
    
    render(){
        let slide = 0
        let src = "https://giphy.com/embed/gw3IWyGkC0rsazTi"
        let text = "Test"

        if(this.props.slide){
            slide = this.props.slide
        }

        if(this.props.story){
            src = this.props.story.slides[slide-1].embed_url
            text = this.props.story.slides[slide-1].keywords
        }

        return (
            <div className="story__container">
                <div id="pageContainer" className="page__container">Page <span id="pageCounter">{slide}</span></div>
                <div className="gif__container story">
                    <iframe src={src} frameBorder="0" title="story" id="story-gif"></iframe>
                    <p id="story-text">{text}</p>
                </div>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="button" id="prev" onClick={this.onPrevious}>Previous</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="new">New GIF</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="next" onClick={this.onNext}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {story: state.story, slide: state.slide}
}

export default connect(mapStateToProps, {getStory, getCurrentSlide, changeCurrentSlide, changeCurrentGif})(Story);