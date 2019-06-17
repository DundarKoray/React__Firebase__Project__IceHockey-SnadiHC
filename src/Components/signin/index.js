import React, { Component } from 'react';
import FormField from '../ui/formField'
import { validate } from '../ui/misc'

class SignIn extends Component {

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
            },
            password:{
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter you password'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    updateForm(){

    }

    submitForm(){

    }

    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{margin:'100px'}}>
                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <h2>Please Login</h2>
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element)=> this.updateForm(element)}
                        />

                        <button onClick={(event)=> this.submitForm(event)}>Log in</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;