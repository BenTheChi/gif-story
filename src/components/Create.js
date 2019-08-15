import React from 'react'
import {connect} from 'react-redux'
import {createStory, changeCurrentSlide} from '../actions'
import CreateForm from './CreateForm'

class Create extends React.Component {

    onSubmit = formValues => {
        this.props.createStory(formValues)
        this.props.changeCurrentSlide(1)
    }

    render(){
        return (
            <div>
                <CreateForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createStory, changeCurrentSlide})(Create);