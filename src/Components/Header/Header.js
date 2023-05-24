import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <div className='mb-3 container'>
            <nav className='navigation'>
                <NavLink className='navbar' to='/'>Home</NavLink>
                <NavLink className='navbar' to='/signup'>SignUp</NavLink>
                {
                    user ?
                        <button className='signout-btn' onClick={handleSignOut}>SignOut</button>
                        :
                        <NavLink className='navbar' to='/login'>Login</NavLink>
                }
                <NavLink className='navbar' to='/blogs'>Blogs</NavLink>
                <NavLink className='navbar' to='/about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;