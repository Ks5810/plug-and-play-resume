/**
 * Header.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga
 *     ](https://github.com/aishak7, https://github.com/Ks5810,
 *     https://github.com/tommi-tsuruga)
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
import { Button, Container, Nav, Navbar, NavItem, } from "react-bootstrap";
import { capitalize, removeSlash } from "../lib";


const privateRoutes = [ "/profile", "/listing", "/resume" ];
const publicRoutes = [ "/register", "/login" ];

export const Header = ({ startLogout, isAuthenticated }) =>
{
    const [ expanded, setExpanded ] = useState(false);
    const onClick = () =>
    {
        setExpanded(false);
        scroll.scrollToTop();
    };
    const routes = isAuthenticated ? privateRoutes : publicRoutes;
    return (
        <Navbar expanded={ expanded } expand="lg" fixed="top">
            <Container>
                <Nav.Link
                    className="navbar-brand"
                    onClick={ onClick }
                >
                    Plug And Play Resume
                </Nav.Link>
                <Navbar.Toggle
                    onClick={ () => setExpanded(
                        expanded ? false : "expanded") }
                    className="navbar-toggler rounded"
                >
                    <i className="fas fa-bars"/>
                </Navbar.Toggle>
                <Navbar.Collapse
                    onClick={ () => setExpanded(false) }
                >
                    <Nav className="ml-auto">
                        { routes.map((route, index) => (
                            <NavItem
                                key={ index }
                                className="mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded">
                                <Link
                                    to={ route }
                                    className="nav-link"
                                    onClick={ () => setExpanded(false) }>
                                    { capitalize(removeSlash(route)) }
                                </Link>
                            </NavItem>
                        )) }
                        { isAuthenticated &&
                          <NavItem
                              className="mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded"
                          >
                              <Button
                                  onClick={() => startLogout() }
                                  className="btn-logout nav-link">
                                  Logout
                              </Button>
                          </NavItem>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

