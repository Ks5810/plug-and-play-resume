/**
 * LoginPage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import AccountFrom from "./AccountFrom";
import Loading from "../utils/Loading";
import { Container } from "react-bootstrap";

export const LoginPage = ({ dispatch }) => (
        <div className='section'>
            <AccountFrom
                btnText="Login"
                link="/register"
                onSubmit={ ({ username, password }) => {
                    dispatch(login(username, password))
                } }
            />
        </div>
);

export default connect()(LoginPage);
