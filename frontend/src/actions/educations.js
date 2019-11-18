/**
 * educations.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios';
import "regenerator-runtime/runtime";
import {
    ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION, FETCH_EDUCATIONS
} from "./types";
import { requestConfig } from "./auth";
import { returnErrors } from "./messages";

// Change timeOut here
const TIMEOUT = 0;

// Fetch Educations
export const fetchEducations = () => (dispatch, getState) => {
    axios.get("/api/education/", requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: FETCH_EDUCATIONS, payload: res.data}), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

// Add Education
export const addEducation = (educationData = {}) => (dispatch, getState) => {
    axios.post('/api/education/', educationData, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: ADD_EDUCATION, payload: res.data }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};
// Edit Education
export const editEducation = (id, education) => (dispatch, getState) => {

    axios.put(`/api/education/${ id }/`, education, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: EDIT_EDUCATION, payload: res.data, id: id }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const removeEducation = (id) => (dispatch, getState) => {
    axios.delete(`/api/education/${id}/`, requestConfig(getState))
        .then(res=> { setTimeout(() =>
            dispatch({ type: DELETE_EDUCATION, payload: id }), TIMEOUT)})
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};