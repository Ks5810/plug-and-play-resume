/**
 * EducationForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import moment from 'moment';
import DateRangeSelector from "../../utils/DateRangeSelector";
import { DATE_FORMAT } from "../../../actions/types";
import { Button, Form, Alert } from "react-bootstrap";

export default class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: props.education ? props.education.school_name : '',
            degree: props.education ? props.education.degree : '',
            major: props.education ? props.education.major : '',
            startDate: props.education ? moment(props.education.start_date,
                                                DATE_FORMAT) : moment(),
            endDate: props.education ? moment(props.education.end_date,
                                              DATE_FORMAT) : moment(),
            error: '',
            buttonText: props.buttonText
        };
    }

    onSchoolNameChange = (e) => {
        const schoolName = e.target.value;
        this.setState(() => ({ schoolName }));
    };
    onDegreeChange = (e) => {
        const degree = e.target.value;
        this.setState(() => ({ degree }));
    };
    onMajorChange = (e) => {
        const major = e.target.value;
        this.setState(() => ({ major }));
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.setState(() => ({ startDate, endDate }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!(this.state.schoolName || this.state.degree || this.state.degree)) {
            this.setState(() => ({
                error: 'Please provide SchoolName, Institution and Description'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    school_name: this.state.schoolName,
                                    degree: this.state.degree,
                                    major: this.state.major,
                                    start_date: moment(this.state.startDate)
                                        .format(DATE_FORMAT),
                                    end_date: moment(this.state.endDate)
                                        .format(DATE_FORMAT)
                                });
        }
    };

    render() {
        return (
            <Form onSubmit={ this.onSubmit }>
                { this.state.error &&
                <Alert variant="danger">{ this.state.error }</Alert> }
                <Form.Control
                    size="md"
                    type="text"
                    placeholder="School Name"
                    value={ this.state.schoolName }
                    onChange={ this.onSchoolNameChange }
                />
                <DateRangeSelector
                    type="education"
                    education={ this.props.education }
                    onDatesChange={ ({ startDate, endDate }) => {
                        this.onDatesChange({ startDate, endDate })
                    } }
                />
                <Form.Control
                    type="text"
                    size="md"
                    placeholder="Degree"
                    value={ this.state.degree }
                    onChange={ this.onDegreeChange }
                />
                <Form.Control
                    size="md"
                    type="text"
                    placeholder="Major"
                    value={ this.state.major }
                    onChange={ this.onMajorChange }
                />
                <Button
                    className="btn-full" type="submit">
                    { this.props.buttonText }
                </Button>
            </Form>
        )
    }
}