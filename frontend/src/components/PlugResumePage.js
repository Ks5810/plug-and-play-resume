/**
 * PlugResumePage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga
 *     ](https://github.com/aishak7, https://github.com/Ks5810,
 *     https://github.com/tommi-tsuruga)
 */

import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBasicInfo } from "../actions/basicInfo";
import { fetchExperiences } from "../actions/experiences";
import { fetchEducations } from "../actions/educations";
import { fetchJobHistory } from "../actions/jobHistories";


class PlugResumePage extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    componentDidMount()
    {
        const { dispatch } = this.props;
        dispatch(fetchBasicInfo());
        dispatch(fetchExperiences());
        dispatch(fetchEducations());
        dispatch(fetchJobHistory());
    };
    
    render = () => (
        <Container className="section">
            <h3 align="center">Hi, { this.props.user.username }! </h3>
            <Link to="/profile">
                <Button className="btn-full">
                    Generate your resume now
                </Button>
            </Link>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    user: state.auth.user
});
export default connect(mapStateToProps)(PlugResumePage);