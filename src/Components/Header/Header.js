import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <div className='mb-3 container'>
            <nav className='navigation w-100'>
                <Link className='navbar' to='/'>Home</Link>
                <Link className='navbar' to='/signup'>SignUp</Link>
                {
                    user ?
                        <button className='signout-btn' onClick={handleSignOut}>SignOut</button>
                        :
                        <Link className='navbar' to='/login'>Login</Link>
                }
                <Link className='navbar' to='/blogs'>Blogs</Link>
                <Link className='navbar' to='/about'>About</Link>
            </nav>


        </div>
    );
};

export default Header;