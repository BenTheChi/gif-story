import React from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class CreateForm extends React.Component {
    
    renderTitle = ({input, label}) => {
        return(
            <div className="create__container">
                <label htmlFor="storyTitle"><h1 className="create__title">{label}</h1></label>
                <input  {...input} type="text" id="storyTitle" placeholder="Example - Happy People: A Tragedy" className="input__area"></input>
            </div>
        )
    }

    renderBody = ({input, label}) => {
        return(
            <div className="create__container">
                <label htmlFor="storyBody"><h1 className="create__title">{label}</h1></label>
                <textarea {...input} id="storyBody" rows="15" placeholder="Sections are divided by any punctuation or enclosed in parenthesis.  Sections longer than 80 characters are ignored." className="input__area"></textarea>
            </div>
        )
    }

    // onSubmit = (formValues) => {
    //     this.props.onSubmit(formValues)
    // }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit} className="form-group">
                <Field name="title" component={this.renderTitle} label="Title"/>
                <Field name="body" component={this.renderBody} label="Story"/>
                <div className="button__menu">
                    <div className="button__container">
                        <button type="submit" id="startBtn">Start</button>
                    </div>
                    <div className="button__container">
                        <button type="button" id="cancelBtn"><Link to={`/`}>Cancel</Link></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'create'})(CreateForm);