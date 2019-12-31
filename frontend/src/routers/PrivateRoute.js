import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/Header';
import Loading from "../components/utils/Loading";

const PrivateRoute = ({
    isAuthenticated,
    isLoading,
    component: Component,
    ...rest
}) => (
    <>
        <Header/> {
        isLoading ? <Loading/> : (
            <Route { ...rest } component={ (props) => (
                isAuthenticated ? (
                    <div className="page">
                        <Component { ...props } />
                    </div>
                ) : (
                    <Redirect to="/login"/>
                )
            ) }/>)
        }
    </>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading

});

export default connect(mapStateToProps)(PrivateRoute);
