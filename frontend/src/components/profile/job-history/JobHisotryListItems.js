import React from 'react';
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { BtnGroup } from "../../utils/BtnGroup";

const JobHistoryListItems = ({
    id, title, description, company, start_date,
    end_date, job_history_keywords, onClick
}) => (
    <ListGroupItem>
        <b>{ title }</b> at <b>{ company }</b> { `(${ start_date } - ${ end_date })`} <br/>
        { `Keywords: ${ job_history_keywords }` } <br/>
        { `Description: ${ description }` } <br/>
        <BtnGroup
            to={ `/jobhistory/${id}` }
            onClick={ (e) => onClick(e.target.value) }
            value={ id }
        />
    </ListGroupItem>
);
export default JobHistoryListItems;
