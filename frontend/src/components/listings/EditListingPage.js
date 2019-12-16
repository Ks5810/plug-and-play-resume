/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from 'react-redux'
import ListingForm from "./ListingForm";
import { editListing } from "../../actions/listings";
import ListingItems from "./ListingItems";

const EditListingPage = (props) => {
    return (
        <>
            <ListingForm
                buttonText="Submit"
                onSubmit={ listing => {
                    props.dispatch(
                        editListing(props.match.params.id, listing));
                } }
            />
            <ListingItems/>
        </>
    );
};

const mapStateToProps = (state) => ({
    listings: state.listings.listings
});

export default connect(mapStateToProps)(EditListingPage);