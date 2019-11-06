/**
 * EditExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import {connect} from 'react-redux';
import ExperienceForm from './ExperienceForm';
import {
    editExperience,
    fetchExperiences,
    removeExperience
} from '../../actions/experiences';

export const EditExperiencePage = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container">
            <h3 className="list-header">Edit Experience</h3>
            <ExperienceForm
                buttonText={"Edit Experience"}
                onSubmit={(experience) => {
                    console.log(props.experiences[id]);
                    props.dispatch(editExperience(id, experience));
                    props.history.push('/experience');
                }}
            />
            <button
                className="button--remove"
                onClick={() => {
                    props.dispatch(removeExperience(id));
                    props.history.push('/experience');
                }}>Remove From List
            </button>
        </div>

    );
};

const mapStateToProps = (state, props) => {
    return {
        experiences: state.experiences,
        experience: state.experiences.experiences.find(experience=>(experience.id===props.match.params.id))
    }
};

export default connect(mapStateToProps)(EditExperiencePage);
