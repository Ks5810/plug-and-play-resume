/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { BtnGroup } from "../../utils/BtnGroup";


const ExperienceListItem = ({
    id, title, description, experience_keywords, onClick
}) => (
    <ListGroupItem>
        <h6>{ title }</h6>
        { `Description: ${ description }` } <br/>
        { `Keywords: ${ experience_keywords }` } <br/>
        <BtnGroup
            to={ `/experience/${id}` }
            onClick={ (e) => onClick(e.target.value) }
            value={ id }
        />
    </ListGroupItem>
);

export default ExperienceListItem;
