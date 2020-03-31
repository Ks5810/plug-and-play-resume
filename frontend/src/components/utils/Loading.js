import React from 'react';
import { Container } from "react-bootstrap";


const Loading = () => (
    <div className="page">
        <div className="loader">
            <div className="section">
                <img className="loader__image"
                     src="../../../static/images/loader.gif"/>
            </div>
        </div>
    </div>
);

export default Loading;