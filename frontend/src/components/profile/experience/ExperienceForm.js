/**
 * ExperienceForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default class ExperienceForm extends Component {
    constructor(props) {
        super(props);
        const experience = props.experience;
        this.state = {
            title: experience ? experience.title : '',
            description: experience ? experience.description : '',
            error: '',
            buttonText: this.props.buttonText
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!(this.state.title && this.state.description)) {
            this.setState(() => ({
                error: 'Please provide Experience Title, Description'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    title: this.state.title,
                                    description: this.state.description
                                });
        }
    };

    render() {
        return (
            <Form onSubmit={ this.onSubmit }>
                { this.state.error &&
                <Alert variant="danger"
                       className="form-error">{ this.state.error }</Alert> }
                <Form.Control
                    size="md"
                    type="text"
                    placeholder="Experience Title"
                    value={ this.state.title }
                    onChange={ this.onTitleChange }
                />
                <Form.Control
                    as="textarea"
                    rows="7"
                    placeholder="Detailed description"
                    value={ this.state.description }
                    onChange={ this.onDescriptionChange }
                />
                <Button className="btn-full" type="submit">{ this.props.buttonText }</Button>
            </Form>
        )
    }
}
