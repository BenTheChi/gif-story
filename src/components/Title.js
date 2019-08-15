import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {getStory} from '../actions'

class Title extends React.Component {
    componentDidMount(){
        this.props.getStory()
    }

    render(){
        if(this.props.title){
            return (
                <div className="title__container">
                    <div>
                        <h1 className="title__title">{this.props.title}</h1>
                        <button><Link to={`/story`}>Start</Link></button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="title__container">
                    <div>
                        <h1 className="title__title">No Story Loaded!</h1>
                        <button><Link to={`/`}>Home</Link></button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    if(state.story){
        return {title: state.story.title};
    }

    return {}
}

export default connect(mapStateToProps, {getStory})(Title);