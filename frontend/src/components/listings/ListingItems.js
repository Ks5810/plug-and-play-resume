import React from "react"
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";

const ListingItems = ({ id, listingTitle, listing, listingKeywords, submitResume, removeResume, index }) => {
    return (
        <ListGroupItem>
            <h6>{ `${ index + 1 }. ${ listingTitle }` } </h6>
            { `Keywords: ${ listingKeywords }` } <br/>
            { `${ listing } ` } <br/>
            <ButtonGroup className='btn-group'>
            <Button className='btn__danger'
                value={ id }
                onClick={ (e) => removeResume(e.target.value) }
            >Remove
            </Button>
            <Button className='btn__info'
                value={ id }
                onClick={ (e) => submitResume(e.target.value) }
            >Generate
            </Button>
            </ButtonGroup>
        </ListGroupItem>
    );
};

export default ListingItems;