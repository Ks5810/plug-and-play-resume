/**
 * NotFoundPage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import {Link} from "react-router-dom";
import React from "react";
import { Button, Container } from "react-bootstrap";

const NotFoundPage = () => (
    <div className="page">
        <Container className="notfound">
            <h1 >Oops!</h1>
            <h3>404 Not Found</h3>
            <p>Could not find the page you requested</p>
            <Link to="/">
                <Button className="link">Go Home</Button>
            </Link>
        </Container>
    </div>
);
export default NotFoundPage;
