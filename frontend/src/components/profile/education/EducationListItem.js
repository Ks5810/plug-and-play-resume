/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom"
import { BtnGroup } from "../../utils/BtnGroup";


const EducationListItem = ({
    id, school_name, start_date, end_date,
    degree, major, onClick
}) => (
    <ListGroupItem>
        <b>{ school_name }</b> { `(${ start_date } - ${ end_date })` } <br/>
        { `${ degree } in ${ major }` } <br/>
        <BtnGroup
            to={ `/education/${id}` }
            onClick={ (e) => onClick(e.target.value) }
            value={ id }
        />
    </ListGroupItem>
);

export default EducationListItem;