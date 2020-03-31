/**
 * BasicInfoForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from 'react-redux'
import { Alert, Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { validEmail } from "../../../lib";

class BasicInfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: props.basicInfo ? props.basicInfo.first_name : '',
            last_name: props.basicInfo ? props.basicInfo.last_name : '',
            email: props.basicInfo ? props.basicInfo.email : '',
            saved: ''
        };
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        const { first_name, last_name, email } = this.props.basicInfo;
        if (prevProps.basicInfo !== this.props.basicInfo) {
            this.setState(() => ({ first_name, last_name, email }))
        }
    }
    onFirstNameChange = (e) => {
        const first_name = e.target.value;
        this.setState(() => ({ first_name }));
    };
    onLastNameChange = (e) => {
        const last_name = e.target.value;
        this.setState(() => ({ last_name }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity())
        {
            this.setState(() => ({
                    saved: 'Your profile is saved!',
                    error: '',
                    emailError: '' }
                ));
            this.props.onSubmit({...form});
        }
    };

    render() {
        return (
            <Form onSubmit={ this.onSubmit }>
                { this.state.error &&
                <Alert variant="danger">
                    { this.state.error }
                </Alert> }
                { this.state.emailError && <Alert variant="danger">
                    {this.state.emailError}
                </Alert> }
                <FormGroup
                    controlId={ `firstNameValidation` }
                    className="contact-form-group"
                >
                    <FormControl
                        required
                        type="text"
                        placeholder="First Name"
                        value={ this.state.first_name }
                        onChange={ this.onFirstNameChange }
                    />
                    <FormControl.Feedback type='invalid'>
                        Your First Name is Empty
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup
                    controlId={ `LastNameValidation` }
                    className="contact-form-group"
                >
                <FormControl
                    required
                    type="text"
                    placeholder="Last Name"
                    value={ this.state.last_name }
                    onChange={ this.onLastNameChange }
                />
                    <FormControl.Feedback type='invalid'>
                        Your Last Name is Empty
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup controlId={ `emailValidation`}>
                <FormControl
                    required
                    type="email"
                    placeholder="email"
                    value={ this.state.email }
                    onChange={ this.onEmailChange }
                />
                    <FormControl.Feedback type='invalid'>
                        Please enter a valid email address
                    </FormControl.Feedback>
                </FormGroup>
                { this.state.saved &&
                  <Alert variant="success">{ this.state.saved }</Alert>
                }
                <Button
                    className="btn-full"
                    type="submit">
                    Save your profile
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo
});

export default connect(mapStateToProps)(BasicInfoForm);