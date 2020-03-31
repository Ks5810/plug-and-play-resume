/**
 * LoginForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React from "react";
import { Link } from 'react-router-dom'
import { Button, Form, Alert } from "react-bootstrap";
import { capitalize, removeSlash, validEmail } from "../../lib";

export default class AccountFrom extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        username: "",
        email: "",
        password: "",
        error: ''
    };
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        const isRegister = this.props.btnText === "Register";
        const { username, email, password, error } = this.state;
        if (!(username && password)) {
            this.setState(() => ({
                error: 'Please provide both username and password.'
            }));
        } else if(isRegister && !validEmail(email)) {
            this.setState(
                () => ({ emailError: 'Enter a valid email address.' }));
        } else {
            this.setState(() => ({ error: '', emailError: '' }));
            this.props.onSubmit({ username, email, password })
        }
    };
    render() {
        const { username, email, password, error, emailError } = this.state;
        return (
            <Form onSubmit={ this.onSubmit }>
                { error && <Alert variant="danger">{ error }</Alert> }
                { emailError && <Alert variant="danger">{ emailError }</Alert> }
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={ username }
                    onChange={ this.onUsernameChange }
                />
                { this.props.btnText === "Register" &&
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ this.onEmailChange }
                /> }
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ this.onPasswordChange }
                />
                <Button className='btn-full' type="submit">
                    { this.props.btnText }
                </Button>
            </Form>
        );
    }
}