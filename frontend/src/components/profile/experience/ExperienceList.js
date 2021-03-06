/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
import { removeExperience } from "../../../actions/experiences";
import { ListGroup } from "react-bootstrap";

const ExperienceList = (props) => (
    <ListGroup>
        { props.experiences.map(experience => {
            return <ExperienceListItem
                onClick={ id => props.dispatch(
                    removeExperience(id))
                }
                key={ experience.id }
                { ...experience }
            />;
        }) }
    </ListGroup>
);

const mapStateToProps = (state) => ({
    experiences: state.experiences.experiences
});

export default connect(mapStateToProps)(ExperienceList);
