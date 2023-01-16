import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <div>
            <nav className='navigation'>
                <Link className='navbar' to='/'>Home</Link>
                <Link className='navbar' to='/login'>Login</Link>
                <Link className='navbar' to='/signup'>SignUp</Link>
            </nav>


        </div>
    );
};

export default Header;