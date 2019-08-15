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
    
    onNewGif = () => {
        this.props.changeCurrentGif(this.props.story, this.props.slide)
    }

    render(){
        let slide = 0
        let src = "https://giphy.com/embed/Igh0Fg7259bSU"
        let text = "No story loaded!"

        if(this.props.story){
            slide = this.props.slide
            src = this.props.story.slides[slide-1].embed_url
            text = this.props.story.slides[slide-1].keywords
        }

        if(slide === 0){
            return (
                <div className="story__container">
                    <div id="pageContainer" className="page__container">Page <span id="pageCounter">{slide}</span></div>
                    <div className="gif__container story">
                        <iframe src={src} frameBorder="0" title="story" id="story-gif"></iframe>
                    </div>
                    <p id="story-text">{text}</p>
                    <div className="button__menu">
                        <div className="button__container">
                            <button type="button" id="prev" onClick={() => {history.push('/')}}>Home</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="story__container">
                <div id="pageContainer" className="page__container">Page <span id="pageCounter">{slide}</span></div>
                <div className="gif__container story">
                    <iframe src={src} frameBorder="0" title="story" id="story-gif"></iframe>
                </div>
                <p id="story-text">{text}</p>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="button" id="prev" onClick={this.onPrevious}>Previous</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="new" onClick={this.onNewGif}>New GIF</button>
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