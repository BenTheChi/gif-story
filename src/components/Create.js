import React from 'react'
import {connect} from 'react-redux'
import {createStory, changeCurrentSlide} from '../actions'
import CreateForm from './CreateForm'

class Create extends React.Component {

    onSubmit = formValues => {
        if(formValues.title && formValues.body){
            this.props.createStory(formValues)
            this.props.changeCurrentSlide(1)
        }
    }

    render(){
        return (
            <div>
                <h1 className="title__home">Create Story</h1>
                <CreateForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createStory, changeCurrentSlide})(Create);