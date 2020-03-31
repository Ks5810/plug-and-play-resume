import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addListing, fetchListing } from '../../actions/listings';
import ListingSections from './ListingSections';
import { Button, Container } from 'react-bootstrap';
import ListingForm from './ListingForm';
import { Link } from 'react-router-dom';


class ListingPage extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    componentDidMount()
    {
        this.props.dispatch(fetchListing());
    }
    
    render = () => (
        <Container className="section">
            <h2>Job Listing</h2>
            <ListingForm
                buttonText="Add"
                onSubmit={ listing =>
                {
                    this.props.dispatch(addListing(listing));
                    console.log('adding listing');
                } }
            />
            <ListingSections/>
            <Link to='/resume'>
                <Button className='btn-full'>
                    See your generated resume!
                </Button>
            </Link>
        </Container>
    );
}

const mapStateToProps = state => ({
    listingInfo: state.listingInfo.listingInfo
});

export default connect(mapStateToProps)(ListingPage);
