import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import FormField from '../../ui/formField'
import { validate } from '../../ui/misc'

class Enroll extends Component {
    
    state = {
        formError: false,
        formSuccess:'',
        formdata:{
            email:{
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter you email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    updateForm(element){
        // console.log(element)
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value

        let validData = validate(newElement)
        // console.log(validData)
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement
        console.log(newFormdata)

        this.setState({
            formdata: newFormdata
        })
    }

    submitForm(){

    }
    
    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={ (event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;