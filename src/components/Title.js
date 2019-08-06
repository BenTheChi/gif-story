import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {getStory} from '../actions'

class Title extends React.Component {
    componentDidMount(){
        this.props.getStory()
        console.log(this.props)
    }

    render(){
        return (
            <div className="title__container">
                <div>
                    <h1 className="title__title">{this.props.title}</h1>
                    <button><Link to={`/story`}>Start</Link></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if(state.story){
        return {title: state.story.title};
    }

    return {}
}

export default connect(mapStateToProps, {getStory})(Title);