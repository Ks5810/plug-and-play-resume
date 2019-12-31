import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Loading from "../components/utils/Loading";
import { Header } from "../components/Header";
import { Container } from "react-bootstrap";

const PublicRoute = ({
    isAuthenticated,
    isLoading,
    component: Component,
    ...rest
}) => (
    <>
        <Header/> {
        isLoading ? <Loading/> : (
            <Route { ...rest } component={ (props) => (
                isAuthenticated ? (<Redirect to="/"/>) : (
                    <div className="page">
                        <Container>
                            <div className="page-section">
                                <h3>Sign up or login to get started!</h3>
                                <Component { ...props } />
                            </div>
                        </Container>
                    </div>
                )
            )}/>
        )
    }
    </>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
});

export default connect(mapStateToProps)(PublicRoute);