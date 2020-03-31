/**
 * AddEducation.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga
 *     ](https://github.com/aishak7, https://github.com/Ks5810,
 *     https://github.com/tommi-tsuruga)
 */

import React from 'react';
import { connect } from 'react-redux'
import EducationForm from "./EducationForm";
import { editEducation } from "../../../actions/educations";
import EducationList from "./EducationList";
import { Container } from "react-bootstrap";


const EditEducationPage = (props) =>
{
    return (
        <Container className="section">
            <h2>Edit Education</h2>
            <EducationForm
                buttonText="Save"
                education={ props.education }
                onSubmit={ education =>
                {
                    props.dispatch(
                        editEducation(props.education.id, education));
                } }
            />
            <EducationList/>
        </Container>
    );
};

const mapStateToProps = (state, props) => ({
    educations: state.educations.educations,
    education: state.educations.educations.find(
        education => education.id === parseInt(props.match.params.id))
});

export default connect(mapStateToProps)(EditEducationPage);