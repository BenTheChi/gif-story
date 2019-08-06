import React from 'react'
import {connect} from 'react-redux'
import {createStory} from '../actions'
import CreateForm from './CreateForm'

class Create extends React.Component {

    onSubmit = formValues => {
        this.props.createStory(formValues)
    }

    render(){
        return (
            <div>
                <CreateForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createStory})(Create);