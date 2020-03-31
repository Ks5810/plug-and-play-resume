/**
 * RegisterPage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga
 *     ](https://github.com/aishak7, https://github.com/Ks5810,
 *     https://github.com/tommi-tsuruga)
 */

import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import AccountFrom from "./AccountFrom";
import { Container } from "react-bootstrap";


export const RegisterPage = ({ dispatch }) => (
    <div className="section">
        <AccountFrom
            btnText="Register"
            link="/login"
            onSubmit={ ({ username, email, password }) =>
            {
                dispatch(register(username, email, password));
            } }
        />
    </div>
);

export default connect()(RegisterPage)