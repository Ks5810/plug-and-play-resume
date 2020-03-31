/**
 * ProfilePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import BasicInfo from "./basic-info/BasicInfo";
import AddExperience from "./experience/AddExperience";
import AddEducation from "./education/AddEducation"
import { fetchExperiences } from "../../actions/experiences";
import { fetchEducations } from "../../actions/educations";
import { fetchBasicInfo } from "../../actions/basicInfo";
import { fetchJobHistory } from "../../actions/jobHistories";
import AddJobHistory from "./job-history/AddJobHistory";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


class ProfilePage extends Component {
    render = () => (
            <Container className='section'>
                    <div className="page-section">
                        <BasicInfo onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                    </div>
                    <div className="page-section">
                        <AddJobHistory onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                    </div>
                    <div className="page-section">
                        <AddExperience
                            onSubmit={ () => {
                                this.props.history.push('/profile')
                            } }/>
                    </div>
                    <div className="page-section">
                        <AddEducation
                            onSubmit={ () => {
                                this.props.history.push('/profile')
                            } }/>
                    </div>
                    <Link to={ `/listing` }>
                        <Button className="btn-full">Next: Job Listing</Button>
                    </Link>
            </Container>
    );
}

export default connect()(ProfilePage);
