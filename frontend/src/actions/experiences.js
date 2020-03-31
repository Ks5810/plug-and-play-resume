/**
 * experiences.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import axios from 'axios'

import {
    ADD_EXPERIENCE, EDIT_EXPERIENCE, FETCH_EXPERIENCES, REMOVE_EXPERIENCE
} from "./types";
import { returnErrors } from "./messages";
import { requestConfig } from "../lib";


// Change timeOut here
const TIMEOUT = 1000;

// Fetch Experiences
export const fetchExperiences = () => (dispatch, getState) => {
    return axios.get("/api/experience/", requestConfig(getState))
        .then(res => setTimeout( () => dispatch({ type: FETCH_EXPERIENCES, payload: res.data }), TIMEOUT))
        .catch(err => returnErrors(err.response.data, err.response.status))
};

// ADD_EXPERIENCE
export const addExperience = (experience = {}) => (dispatch, getState) => {
    axios.post('/api/experience/', experience, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: ADD_EXPERIENCE, payload: res.data }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)))
};

// REMOVE_EXPERIENCE
export const removeExperience = (id) => (dispatch, getState) => {
    console.log("typeof experience id: ", typeof id);
    axios.delete(`/api/experience/${id}/`, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: REMOVE_EXPERIENCE, payload: id }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editExperience = (id, experience) => (dispatch, getState) => {
    const updates = JSON.stringify(experience);
    console.log(updates);
    axios.put(`/api/experience/${ id }/`, updates, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: EDIT_EXPERIENCE, payload: res.data, id: id }),
                                TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};


