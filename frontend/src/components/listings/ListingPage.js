import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addListing, fetchListing } from '../../actions/listings';
import ListingSections from './ListingSections';
import { Button, Container } from 'react-bootstrap';
import ListingForm from './ListingForm';
import { LinkContainer } from 'react-router-bootstrap';

class ListingPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchListing());
    }

    render = () => (
        <Container>
            <div className='page-section'>
                <Container>
                    <h2>Listing</h2>
                    <ListingForm
                        buttonText='Add'
                        onSubmit={ listing => {
                            this.props.dispatch(addListing(listing));
                            console.log('adding listing');
                        } }
                    />
                    <ListingSections/>
                    <LinkContainer to={ `/resume` }>
                        <Button size='xl' className='btn-full' variant='info'>
                            See your generated resume!
                        </Button>
                    </LinkContainer>
                </Container>
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    listingInfo: state.listingInfo.listingInfo
});

export default connect(mapStateToProps)(ListingPage);
