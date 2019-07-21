import React from 'react'
import {connect} from 'react-redux'
import {loadStory} from '../actions'
import CreateForm from './CreateForm';

class Create extends React.Component {

    onSubmit = formValues => {
        this.props.loadStory(formValues)
    }

    render(){
        return (
            <div>
                <CreateForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{loadStory})(Create);