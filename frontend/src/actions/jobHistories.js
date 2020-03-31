import axios from 'axios'
import {
    ADD_JOB_HISTORY, EDIT_JOB_HISTORY, REMOVE_JOB_HISTORY, FETCH_JOB_HISTORY
} from "./types";
import { returnErrors } from "./messages";
import { requestConfig } from "../lib";

const TIMEOUT = 1000;

export const fetchJobHistory = () => (dispatch, getState) => {
    return axios.get("/api/jobhistory/", requestConfig(getState))
        .then(res => setTimeout( () => dispatch({ type: FETCH_JOB_HISTORY, payload: res.data }), TIMEOUT))
        .catch(err => returnErrors(err.response.data, err.response.status))
};


export const addJobHistory = (jobHistory = {}) => (dispatch, getState) => {
    axios.post(`/api/jobhistory/`, jobHistory, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: ADD_JOB_HISTORY, payload: res.data }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const removeJobHistory = (id) => (dispatch, getState) => {
    console.log("typeof jobHistory id: ", typeof id);
    axios.delete(`/api/jobhistory/${id}/`, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: REMOVE_JOB_HISTORY, payload: id }), TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editJobHistory = (id, jobHistory) => (dispatch, getState) => {
    const updates = JSON.stringify(jobHistory);
    console.log(updates);
    axios.put(`/api/jobhistory/${ id }/`, updates, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: EDIT_JOB_HISTORY, payload: res.data, id: id }),
                                TIMEOUT))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

