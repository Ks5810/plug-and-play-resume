/**
 * auth.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios'
import "regenerator-runtime/runtime";
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from "./types";


export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    axios("/api/auth/user/", requestConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            ...res
        }))
        .catch(err => console.log(err))
};

export const login = (username, password) => (dispatch, getState) => {
    const params = { username, password };
    console.log(username, password);
    axios.post("/api/auth/login/", params, requestConfig(getState))
        .then(res => {
            dispatch({
            type: LOGIN_SUCCESS,
            ...res

        })
        })
        .catch(err => console.log(err))
};

export const startLogout = () => (dispatch, getState) => {
    axios.post("/api/auth/logout/", null, requestConfig(getState))
        .then(res => dispatch({type: LOGOUT_SUCCESS, ...res}))
        .catch(err => console.log(err));
};

export const register = (username, password) => {
    return (dispatch, getState) => {
        const params = {username, password};
        axios.post("/api/auth/register/", params, requestConfig(getState))
            .then(res => dispatch({type: REGISTER_SUCCESS, ...res }))
            .catch(err => console.log(err));
    }
};

export const requestConfig = (getState) => {
    const headers = {'Content-Type': 'application/json'};
    const {token} = getState().auth;
    if (token) {
        headers['Authorization'] = `Token ${token}`;
    }
    return {
        headers,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrer: 'no-referrer',
    }
};


