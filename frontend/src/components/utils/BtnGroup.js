/**
 * BtnGroup.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";


export const BtnGroup = (props) => (
    <ButtonGroup className="btn-group">
        <Button className={ `btn__info` }>
            <Link to={ props.to }> Edit </Link>
        </Button>
        <Button
            className={ `btn__danger` }
            { ...props }
        > Remove </Button>
    </ButtonGroup>
);