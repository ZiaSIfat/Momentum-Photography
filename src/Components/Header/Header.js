import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo (1).png';

const Header = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className='navbar ms-5' to='/'>Home</Link>
                            <Link className='navbar ms-5' to='/signup'>
                                Sign Up
                            </Link>
                            {/* { */}
                            {/* user ?
                                    <button className='signout-btn btn' onClick={handleSignOut}>SignOut</button>
                                    : */}
                            <Link className='navbar ms-5' to='/login'>Login</Link>
                            {/* } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;